import { prisma } from '../lib/prisma.js';
import { getQueue } from '../lib/bullmq.js';
import { queueService } from './queue.service.js';
import { createLogger } from '../lib/logger.js';
import cuid from 'cuid';
import type { CreateJobInput, CreateBulkJobsInput, JobFilters, WorkerJobData } from '../types/index.js';

const log = createLogger({ service: 'job-service' });

export class JobService {
  async create(organizationId: string, data: CreateJobInput) {
    // Upsert queue atomically — prevents race condition on concurrent creates
    const queue = await queueService.upsert(organizationId, data.queue);

    if (!queue.isActive) {
      throw new Error('Queue is not active');
    }

    // Create job in database
    const job = await prisma.job.create({
      data: {
        organizationId,
        queueId: queue.id,
        webhookUrl: data.webhookUrl,
        webhookMethod: data.webhookMethod || 'POST',
        callbackUrl: data.callbackUrl,
        payload: data.payload as object,
        userId: data.userId,
        externalId: data.externalId,
        priority: data.priority || 0,
        scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : null,
        metadata: data.metadata as object | undefined,
        maxAttempts: queue.maxRetries,
        status: data.scheduledAt ? 'SCHEDULED' : 'PENDING',
      },
    });

    // Add to BullMQ queue
    const bullQueue = getQueue(organizationId, queue.name);
    const jobData: WorkerJobData = {
      jobId: job.id,
      webhookUrl: job.webhookUrl,
      webhookMethod: job.webhookMethod as WorkerJobData['webhookMethod'],
      callbackUrl: job.callbackUrl || undefined,
      payload: job.payload,
      timeout: queue.timeout,
    };

    await bullQueue.add('process', jobData, {
      priority: data.priority || 0,
      attempts: queue.maxRetries,
      backoff: {
        type: 'exponential',
        delay: queue.retryDelay,
      },
      delay: data.scheduledAt
        ? new Date(data.scheduledAt).getTime() - Date.now()
        : undefined,
    });

    return {
      id: job.id,
      status: job.status,
      queue: data.queue,
      createdAt: job.createdAt,
    };
  }

  async createBulk(organizationId: string, data: CreateBulkJobsInput) {
    // Upsert queue atomically — prevents race condition on concurrent creates
    const queue = await queueService.upsert(organizationId, data.queue);

    if (!queue.isActive) {
      throw new Error('Queue is not active');
    }

    const bullQueue = getQueue(organizationId, queue.name);
    const BATCH_SIZE = 1000; // Process in batches of 1000
    let totalCreated = 0;
    let totalFailed = 0;

    // Process jobs in batches for better performance
    for (let i = 0; i < data.jobs.length; i += BATCH_SIZE) {
      const batch = data.jobs.slice(i, i + BATCH_SIZE);

      // Generate IDs upfront using cuid
      const jobsToCreate = batch.map((jobData) => {
        const id = cuid();
        return {
          id,
          organizationId,
          queueId: queue.id,
          webhookUrl: jobData.webhookUrl,
          webhookMethod: jobData.webhookMethod || 'POST',
          callbackUrl: jobData.callbackUrl || null,
          payload: jobData.payload as object,
          userId: jobData.userId || null,
          externalId: jobData.externalId || null,
          priority: jobData.priority || 0,
          scheduledAt: jobData.scheduledAt ? new Date(jobData.scheduledAt) : null,
          metadata: (jobData.metadata as object) || null,
          maxAttempts: queue.maxRetries,
          status: jobData.scheduledAt ? 'SCHEDULED' : 'PENDING',
        };
      });

      try {
        // Batch insert into database using raw SQL for maximum performance
        await prisma.job.createMany({
          data: jobsToCreate,
          skipDuplicates: true,
        });

        // Batch add to BullMQ
        const bullJobs = jobsToCreate.map((job) => ({
          name: 'process',
          data: {
            jobId: job.id,
            webhookUrl: job.webhookUrl,
            webhookMethod: job.webhookMethod,
            callbackUrl: job.callbackUrl || undefined,
            payload: job.payload,
            timeout: queue.timeout,
          } as WorkerJobData,
          opts: {
            priority: job.priority,
            attempts: queue.maxRetries,
            backoff: {
              type: 'exponential' as const,
              delay: queue.retryDelay,
            },
            delay: job.scheduledAt
              ? new Date(job.scheduledAt).getTime() - Date.now()
              : undefined,
          },
        }));

        await bullQueue.addBulk(bullJobs);
        totalCreated += batch.length;
      } catch (error) {
        log.error('Bulk job batch failed', { batchNumber: i / BATCH_SIZE + 1, error: error instanceof Error ? error.message : String(error) });
        totalFailed += batch.length;
      }
    }

    return {
      created: totalCreated,
      failed: totalFailed,
      queue: queue.name,
    };
  }

  async list(organizationId: string, filters: JobFilters) {
    const where: Record<string, unknown> = { organizationId };

    if (filters.status) {
      where.status = filters.status;
    }

    if (filters.queue) {
      const queue = await queueService.getByName(organizationId, filters.queue);
      if (queue) {
        where.queueId = queue.id;
      }
    }

    if (filters.userId) {
      where.userId = filters.userId;
    }

    if (filters.from || filters.to) {
      where.createdAt = {};
      if (filters.from) {
        (where.createdAt as Record<string, Date>).gte = new Date(filters.from);
      }
      if (filters.to) {
        (where.createdAt as Record<string, Date>).lte = new Date(filters.to);
      }
    }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: filters.limit,
        skip: filters.offset,
        include: {
          queue: { select: { name: true } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    return {
      jobs: jobs.map((job) => ({
        ...job,
        queueName: job.queue.name,
      })),
      total,
      limit: filters.limit,
      offset: filters.offset,
    };
  }

  async getById(organizationId: string, id: string) {
    return prisma.job.findFirst({
      where: { id, organizationId },
      include: {
        queue: { select: { name: true } },
        logs: { orderBy: { createdAt: 'desc' } },
      },
    });
  }

  async cancel(organizationId: string, id: string) {
    const job = await prisma.job.findFirst({
      where: { id, organizationId },
      include: { queue: true },
    });

    if (!job) return null;

    if (job.status === 'PROCESSING') {
      throw new Error('Cannot cancel a job that is currently processing');
    }

    if (job.status === 'COMPLETED' || job.status === 'CANCELLED') {
      throw new Error('Job is already finished');
    }

    // Remove from BullMQ
    const bullQueue = getQueue(organizationId, job.queue.name);
    const bullJob = await bullQueue.getJob(id);
    if (bullJob) {
      await bullJob.remove();
    }

    // Update status
    return prisma.job.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async retry(organizationId: string, id: string) {
    const job = await prisma.job.findFirst({
      where: { id, organizationId },
      include: { queue: true },
    });

    if (!job) return null;

    if (job.status !== 'FAILED' && job.status !== 'DEAD') {
      throw new Error('Can only retry failed or dead jobs');
    }

    // Reset job status
    await prisma.job.update({
      where: { id },
      data: {
        status: 'PENDING',
        attempts: 0,
        error: undefined,
        result: undefined,
        startedAt: null,
        completedAt: null,
      },
    });

    // Re-add to queue
    const bullQueue = getQueue(organizationId, job.queue.name);
    const jobData: WorkerJobData = {
      jobId: job.id,
      webhookUrl: job.webhookUrl,
      webhookMethod: job.webhookMethod as WorkerJobData['webhookMethod'],
      callbackUrl: job.callbackUrl || undefined,
      payload: job.payload,
      timeout: job.queue.timeout,
    };

    await bullQueue.add('process', jobData, {
      priority: job.priority,
      attempts: job.queue.maxRetries,
      backoff: {
        type: 'exponential',
        delay: job.queue.retryDelay,
      },
    });

    return { id: job.id, status: 'PENDING' };
  }
}

export const jobService = new JobService();
