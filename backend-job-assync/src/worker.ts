import 'dotenv/config';
import { Worker, Job } from 'bullmq';
import { bullRedis } from './lib/redis.js';
import { prisma } from './lib/prisma.js';
import { createLogger } from './lib/logger.js';
import type { WorkerJobData } from './types/index.js';
import { getScheduler } from './lib/scheduler.js';

const log = createLogger({ service: 'worker' });

const CONCURRENCY = parseInt(process.env.WORKER_CONCURRENCY || '10', 10);

async function processJob(job: Job<WorkerJobData>) {
  const { jobId, webhookUrl, webhookMethod, callbackUrl, payload, timeout } = job.data;

  log.info('Processing job', { jobId, webhookMethod, webhookUrl });

  // Update status to PROCESSING
  await prisma.job.update({
    where: { id: jobId },
    data: {
      status: 'PROCESSING',
      startedAt: new Date(),
      attempts: { increment: 1 },
    },
  });

  const startTime = Date.now();

  try {
    // Call the webhook
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // Build request options based on method
    const fetchOptions: RequestInit = {
      method: webhookMethod,
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    };

    // Only include body for methods that support it
    if (webhookMethod !== 'GET' && webhookMethod !== 'DELETE') {
      fetchOptions.body = JSON.stringify(payload);
    }

    // For GET requests, append payload as query params if it's a simple object
    let finalUrl = webhookUrl;
    if (webhookMethod === 'GET' && payload && typeof payload === 'object') {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(payload as Record<string, unknown>)) {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      }
      const queryString = params.toString();
      if (queryString) {
        finalUrl += (webhookUrl.includes('?') ? '&' : '?') + queryString;
      }
    }

    const response = await fetch(finalUrl, fetchOptions);

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Webhook failed with status ${response.status}`);
    }

    let result: unknown = null;
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      result = await response.json();
    } else {
      result = { text: await response.text() };
    }

    const duration = Date.now() - startTime;

    // Update job as COMPLETED
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: 'COMPLETED',
        result: result as object,
        completedAt: new Date(),
      },
    });

    // Log success
    await prisma.jobLog.create({
      data: {
        jobId,
        attempt: job.attemptsMade,
        status: 'COMPLETED',
        message: 'Job completed successfully',
        duration,
      },
    });

    // Call callback if defined — with 5s timeout
    if (callbackUrl) {
      const callbackController = new AbortController();
      const callbackTimeout = setTimeout(() => callbackController.abort(), 5000);
      try {
        await fetch(callbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: callbackController.signal,
          body: JSON.stringify({
            jobId,
            status: 'COMPLETED',
            result,
            duration,
            attempts: job.attemptsMade,
          }),
        });
      } catch (callbackError) {
        log.error('Callback failed', { jobId, callbackUrl, error: callbackError instanceof Error ? callbackError.message : String(callbackError) });
      } finally {
        clearTimeout(callbackTimeout);
      }
    }

    log.info('Job completed', { jobId, duration });
    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const maxAttempts = job.opts.attempts || 3;
    const isLastAttempt = job.attemptsMade + 1 >= maxAttempts;

    // Update status: FAILED if last attempt, keep PROCESSING if will retry
    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: isLastAttempt ? 'FAILED' : 'PROCESSING',
        error: errorMessage,
        ...(isLastAttempt ? { completedAt: new Date() } : {}),
      },
    });

    // Log the error
    await prisma.jobLog.create({
      data: {
        jobId,
        attempt: job.attemptsMade + 1,
        status: isLastAttempt ? 'FAILED' : 'RETRY',
        message: errorMessage,
        duration,
      },
    });

    // Send failure callback if last attempt — with 5s timeout
    if (isLastAttempt && callbackUrl) {
      const cbController = new AbortController();
      const cbTimeout = setTimeout(() => cbController.abort(), 5000);
      try {
        await fetch(callbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: cbController.signal,
          body: JSON.stringify({ jobId, status: 'FAILED', error: errorMessage, attempts: job.attemptsMade + 1 }),
        });
      } catch {
        // Callback failure is non-critical
      } finally {
        clearTimeout(cbTimeout);
      }
    }

    log.error('Job failed', { jobId, attempt: job.attemptsMade + 1, maxAttempts, error: errorMessage, isLastAttempt });
    throw error; // Let BullMQ handle retry
  }
}

function attachWorkerEvents(worker: Worker) {
  worker.on('completed', (job) => {
    log.debug('BullMQ job completed', { queue: worker.name, bullJobId: job.id });
  });

  worker.on('failed', (job, error) => {
    log.error('BullMQ job failed', { queue: worker.name, bullJobId: job?.id, error: error.message });
  });
}

// Start workers for all organization queues
async function startWorkers() {
  log.info('Starting workers...');

  // Get all active queues
  const queues = await prisma.queue.findMany({
    where: { isActive: true },
    include: { organization: true },
  });

  const workers: Worker[] = [];

  for (const queue of queues) {
    const queueName = `jobs-${queue.organizationId}-${queue.name}`;

    log.info('Starting worker for queue', { queueId: queue.id, queueName, organizationId: queue.organizationId, concurrency: queue.concurrency || CONCURRENCY });

    const worker = new Worker<WorkerJobData>(queueName, processJob, {
      connection: bullRedis,
      concurrency: queue.concurrency || CONCURRENCY,
      limiter: {
        max: queue.rateLimit || 100,
        duration: 60000, // per minute
      },
    });

    attachWorkerEvents(worker);
    workers.push(worker);
  }

  // Watch for new queues
  setInterval(async () => {
    const currentQueues = await prisma.queue.findMany({
      where: { isActive: true },
    });

    for (const queue of currentQueues) {
      const queueName = `jobs-${queue.organizationId}-${queue.name}`;
      const exists = workers.some((w) => w.name === queueName);

      if (!exists) {
        log.info('Starting new worker for queue', { queueId: queue.id, queueName, organizationId: queue.organizationId });

        const worker = new Worker<WorkerJobData>(queueName, processJob, {
          connection: bullRedis,
          concurrency: queue.concurrency || CONCURRENCY,
        });

        attachWorkerEvents(worker);
        workers.push(worker);
      }
    }
  }, 30000); // Check every 30 seconds

  log.info('Workers started', { count: workers.length });

  // Start recurring job scheduler
  const scheduler = getScheduler();
  scheduler.start();

  // Graceful shutdown — wait up to 30s for workers to finish
  const shutdown = async () => {
    log.info('Shutting down workers...');

    // Stop scheduler
    const scheduler = getScheduler();
    scheduler.stop();

    // Close all workers with 30s timeout
    const closePromises = workers.map((worker) => worker.close());
    const timeoutPromise = new Promise<void>((resolve) => setTimeout(resolve, 30000));

    await Promise.race([
      Promise.all(closePromises),
      timeoutPromise,
    ]).finally(() => {
      log.info(' Workers closed or timeout reached');
    });

    await prisma.$disconnect();
    process.exit(0);
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startWorkers().catch((err) => {
  log.error('Failed to start workers', { error: err instanceof Error ? err.message : String(err) });
  process.exit(1);
});
