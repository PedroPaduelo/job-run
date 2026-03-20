import { prisma } from '../lib/prisma.js';
import { getQueue } from '../lib/bullmq.js';
import { createLogger } from '../lib/logger.js';
import type { CreateRecurringJobInput, UpdateRecurringJobInput } from '../types/index.js';

const log = createLogger({ service: 'recurring-job-service' });

export class RecurringJobService {
  async create(organizationId: string, data: CreateRecurringJobInput) {
    const queue = await prisma.queue.findFirst({
      where: { name: data.queue, organizationId },
    });

    if (!queue) {
      throw new Error('Queue not found');
    }

    if (!queue.isActive) {
      throw new Error('Queue is not active');
    }

    const nextRunAt = this.calculateNextRunAt(data.recurrenceType, data.interval, data.cronExpression);

    const recurringJob = await prisma.recurringJob.create({
      data: {
        organizationId,
        queueId: queue.id,
        name: data.name,
        description: data.description,
        recurrenceType: data.recurrenceType,
        interval: data.interval,
        cronExpression: data.cronExpression,
        webhookUrl: data.webhookUrl,
        webhookMethod: data.webhookMethod,
        callbackUrl: data.callbackUrl,
        payloadTemplate: data.payloadTemplate as object,
        maxRuns: data.maxRuns,
        recurrenceEndDate: data.recurrenceEndDate ? new Date(data.recurrenceEndDate) : null,
        continueOnFailure: data.continueOnFailure,
        nextRunAt,
        metadata: data.metadata as object | undefined,
        tags: data.tags || [],
      },
      include: { queue: true },
    });

    return {
      ...recurringJob,
      queueName: recurringJob.queue.name,
    };
  }

  async list(organizationId: string, filters: { isActive?: boolean; queue?: string }) {
    const where: Record<string, unknown> = { organizationId };

    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive;
    }

    if (filters.queue) {
      const queue = await prisma.queue.findFirst({
        where: { name: filters.queue, organizationId },
      });
      if (queue) {
        where.queueId = queue.id;
      }
    }

    const recurringJobs = await prisma.recurringJob.findMany({
      where,
      include: { queue: true },
      orderBy: { createdAt: 'desc' },
    });

    // Get run counts for each
    const withCounts = await Promise.all(
      recurringJobs.map(async (rj) => {
        const totalRuns = await prisma.job.count({
          where: { recurrenceId: rj.id },
        });
        return {
          ...rj,
          queueName: rj.queue.name,
          totalRuns,
        };
      })
    );

    return {
      recurringJobs: withCounts,
      total: withCounts.length,
    };
  }

  async getById(organizationId: string, id: string) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
      include: {
        queue: true,
        jobs: {
          take: 10,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!recurringJob) {
      return null;
    }

    const totalRuns = await prisma.job.count({
      where: { recurrenceId: id },
    });

    const successCount = await prisma.job.count({
      where: { recurrenceId: id, status: 'COMPLETED' },
    });

    const failedCount = await prisma.job.count({
      where: { recurrenceId: id, status: { in: ['FAILED', 'DEAD'] } },
    });

    return {
      ...recurringJob,
      queueName: recurringJob.queue.name,
      totalRuns,
      successCount,
      failedCount,
      recentJobs: recurringJob.jobs,
    };
  }

  async update(organizationId: string, id: string, data: UpdateRecurringJobInput) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
      include: { queue: true },
    });

    if (!recurringJob) {
      throw new Error('Recurring job not found');
    }

    let nextRunAt = undefined;
    if (data.interval !== undefined || data.cronExpression !== undefined) {
      const type = data.interval !== undefined ? 'INTERVAL' : 'CRON';
      const interval = data.interval ?? recurringJob.interval;
      const cronExpression = data.cronExpression ?? recurringJob.cronExpression;
      nextRunAt = this.calculateNextRunAt(type, interval, cronExpression);
    }

    const updated = await prisma.recurringJob.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.interval !== undefined && { interval: data.interval }),
        ...(data.cronExpression !== undefined && { cronExpression: data.cronExpression }),
        ...(data.webhookUrl !== undefined && { webhookUrl: data.webhookUrl }),
        ...(data.webhookMethod !== undefined && { webhookMethod: data.webhookMethod }),
        ...(data.callbackUrl !== undefined && { callbackUrl: data.callbackUrl }),
        ...(data.payloadTemplate !== undefined && { payloadTemplate: data.payloadTemplate as object }),
        ...(data.maxRuns !== undefined && { maxRuns: data.maxRuns }),
        ...(data.recurrenceEndDate !== undefined && { recurrenceEndDate: data.recurrenceEndDate ? new Date(data.recurrenceEndDate) : null }),
        ...(data.continueOnFailure !== undefined && { continueOnFailure: data.continueOnFailure }),
        ...(data.isActive !== undefined && { isActive: data.isActive }),
        ...(data.metadata !== undefined && { metadata: data.metadata as object }),
        ...(data.tags !== undefined && { tags: data.tags }),
        ...(nextRunAt && { nextRunAt }),
      },
      include: { queue: true },
    });

    return {
      ...updated,
      queueName: updated.queue.name,
    };
  }

  async pause(organizationId: string, id: string) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
    });

    if (!recurringJob) {
      throw new Error('Recurring job not found');
    }

    await prisma.job.updateMany({
      where: {
        recurrenceId: id,
        status: { in: ['PENDING', 'SCHEDULED'] },
      },
      data: { status: 'CANCELLED' },
    });

    await prisma.recurringJob.update({
      where: { id },
      data: { isActive: false },
    });

    return { success: true };
  }

  async resume(organizationId: string, id: string) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
    });

    if (!recurringJob) {
      throw new Error('Recurring job not found');
    }

    const nextRunAt = this.calculateNextRunAt(
      recurringJob.recurrenceType as string,
      recurringJob.interval,
      recurringJob.cronExpression
    );

    await prisma.recurringJob.update({
      where: { id },
      data: { isActive: true, nextRunAt },
    });

    return { success: true };
  }

  async delete(organizationId: string, id: string) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
    });

    if (!recurringJob) {
      throw new Error('Recurring job not found');
    }

    await prisma.job.updateMany({
      where: {
        recurrenceId: id,
        status: { in: ['PENDING', 'SCHEDULED'] },
      },
      data: { status: 'CANCELLED' },
    });

    await prisma.recurringJob.delete({
      where: { id },
    });

    return { success: true };
  }

  async trigger(organizationId: string, id: string) {
    const recurringJob = await prisma.recurringJob.findFirst({
      where: { id, organizationId },
      include: { queue: true, organization: true },
    });

    if (!recurringJob) {
      throw new Error('Recurring job not found');
    }

    const job = await prisma.job.create({
      data: {
        organizationId: recurringJob.organizationId,
        queueId: recurringJob.queueId,
        recurrenceId: id,
        webhookUrl: recurringJob.webhookUrl,
        webhookMethod: recurringJob.webhookMethod,
        callbackUrl: recurringJob.callbackUrl,
        payload: recurringJob.payloadTemplate,
        maxAttempts: recurringJob.queue.maxRetries,
        status: 'PENDING',
      },
    });

    const bullQueue = getQueue(recurringJob.organizationId, recurringJob.queue.name);
    await bullQueue.add('process', {
      jobId: job.id,
      webhookUrl: job.webhookUrl,
      webhookMethod: job.webhookMethod as any,
      callbackUrl: job.callbackUrl || undefined,
      payload: job.payload,
      timeout: recurringJob.queue.timeout,
    }, {
      attempts: recurringJob.queue.maxRetries,
      backoff: {
        type: 'exponential',
        delay: recurringJob.queue.retryDelay,
      },
    });

    return { success: true, jobId: job.id };
  }

  private calculateNextRunAt(type: string, interval: number | null | undefined, cronExpression: string | null | undefined): Date {
    if (type === 'INTERVAL' && interval) {
      return new Date(Date.now() + interval * 60 * 1000);
    }

    if (type === 'CRON' && cronExpression) {
      try {
        const { CronTime } = require('cron');
        const cronTime = new CronTime(cronExpression);
        return cronTime.sendAt();
      } catch (error) {
        log.error('Error calculating next run from cron', { cronExpression, error: error instanceof Error ? error.message : String(error) });
        return new Date(Date.now() + 60000);
      }
    }

    return new Date(Date.now() + 60000);
  }
}

export const recurringJobService = new RecurringJobService();
