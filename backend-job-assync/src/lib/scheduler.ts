import cronParser from 'cron-parser';
import { redis } from './redis.js';
import { prisma } from './prisma.js';
import { createLogger } from './logger.js';

const log = createLogger({ service: 'scheduler' });

const LOCK_KEY = 'scheduler:lock';
const LOCK_TTL_MS = 60000; // 60s lock TTL
const LOCK_VALUE = process.env.WORKER_INSTANCE_ID || `worker-${process.pid}`;

export interface SchedulerConfig {
  intervalMs: number;
}

export class RecurringJobScheduler {
  private intervalHandle: ReturnType<typeof setInterval> | null = null;
  private isRunning = false;
  private isProcessing = false;
  private safetyTimeout: ReturnType<typeof setTimeout> | null = null;
  private config: SchedulerConfig;

  constructor(config: SchedulerConfig = { intervalMs: 30000 }) {
    this.config = config;
  }

  start(): void {
    if (this.isRunning) return;

    this.intervalHandle = setInterval(() => {
      this.tryCheckAndCreateJobs();
    }, this.config.intervalMs);

    this.isRunning = true;
    log.info('Scheduler started', { intervalMs: this.config.intervalMs });
  }

  stop(): void {
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle);
      this.intervalHandle = null;
    }
    if (this.safetyTimeout) {
      clearTimeout(this.safetyTimeout);
      this.safetyTimeout = null;
    }
    this.isRunning = false;
    log.info('Scheduler stopped');
  }

  private async tryCheckAndCreateJobs(): Promise<void> {
    // isProcessing flag — prevent concurrent runs in same instance
    if (this.isProcessing) {
      log.debug('Scheduler already processing, skipping tick');
      return;
    }

    // Distributed lock with Redis SET NX — prevent concurrent runs across instances
    const acquired = await redis.set(LOCK_KEY, LOCK_VALUE, 'PX', LOCK_TTL_MS, 'NX');
    if (!acquired) {
      log.debug('Scheduler lock not acquired, another instance is running');
      return;
    }

    this.isProcessing = true;

    // Safety timeout — release flag after 60s regardless of outcome
    this.safetyTimeout = setTimeout(() => {
      log.warn('Scheduler safety timeout triggered, releasing isProcessing flag');
      this.isProcessing = false;
      this.safetyTimeout = null;
    }, 60000);

    try {
      await this.checkAndCreateJobs();
    } catch (error) {
      log.error('Scheduler tick error', { error: error instanceof Error ? error.message : String(error) });
    } finally {
      this.isProcessing = false;
      if (this.safetyTimeout) {
        clearTimeout(this.safetyTimeout);
        this.safetyTimeout = null;
      }
      // Release lock only if we still own it
      const current = await redis.get(LOCK_KEY);
      if (current === LOCK_VALUE) {
        await redis.del(LOCK_KEY);
      }
    }
  }

  private async checkAndCreateJobs(): Promise<void> {
    const now = new Date();

    const dueJobs = await prisma.recurringJob.findMany({
      where: {
        isActive: true,
        nextRunAt: { lte: now },
      },
      include: { queue: true, organization: true },
    });

    log.debug('Checked recurring jobs', { dueCount: dueJobs.length });

    for (const recurringJob of dueJobs) {
      await this.processRecurringJob(recurringJob);
    }
  }

  private async processRecurringJob(recurringJob: any): Promise<void> {
    const {
      id,
      queue,
      organization,
      maxRuns,
      recurrenceEndDate,
      continueOnFailure,
      recurrenceType,
      interval,
      cronExpression,
    } = recurringJob;

    const now = new Date();

    const runsCount = await prisma.job.count({
      where: { recurrenceId: id },
    });

    if (maxRuns && runsCount >= maxRuns) {
      await prisma.recurringJob.update({
        where: { id },
        data: { isActive: false },
      });
      log.info('Recurring job reached max runs, deactivating', { recurringJobId: id, maxRuns, runsCount });
      return;
    }

    if (recurrenceEndDate && recurrenceEndDate < now) {
      await prisma.recurringJob.update({
        where: { id },
        data: { isActive: false },
      });
      log.info('Recurring job end date passed, deactivating', { recurringJobId: id, recurrenceEndDate });
      return;
    }

    if (!continueOnFailure) {
      const lastJob = await prisma.job.findFirst({
        where: { recurrenceId: id },
        orderBy: { createdAt: 'desc' },
      });

      if (lastJob && lastJob.status === 'FAILED') {
        await prisma.recurringJob.update({
          where: { id },
          data: { isActive: false },
        });
        log.warn('Recurring job last execution failed, deactivating', { recurringJobId: id });
        return;
      }
    }

    // Calculate next run BEFORE creating job — if no next run, deactivate
    const nextRunAt = this.calculateNextRun(recurrenceType, interval, cronExpression);

    if (!nextRunAt) {
      await prisma.recurringJob.update({
        where: { id },
        data: { isActive: false },
      });
      log.warn('Recurring job has no next run, deactivating', { recurringJobId: id, recurrenceType, cronExpression });
      return;
    }

    // Update nextRunAt atomically before creating job — prevent duplicate runs
    await prisma.recurringJob.update({
      where: { id },
      data: { nextRunAt },
    });

    await prisma.job.create({
      data: {
        organizationId: organization.id,
        queueId: queue.id,
        recurrenceId: id,
        webhookUrl: recurringJob.webhookUrl,
        webhookMethod: recurringJob.webhookMethod,
        callbackUrl: recurringJob.callbackUrl,
        payload: recurringJob.payloadTemplate,
        maxAttempts: queue.maxRetries,
        status: 'PENDING',
      },
    });

    log.info('Created job from recurring, scheduled next run', {
      recurringJobId: id,
      nextRunAt: nextRunAt.toISOString(),
      organizationId: organization.id,
      queueId: queue.id,
    });
  }

  private calculateNextRun(
    type: string,
    interval: number | null,
    cronExpression: string | null
  ): Date | null {
    if (type === 'INTERVAL' && interval) {
      return new Date(Date.now() + interval * 60 * 1000);
    }

    if (type === 'CRON' && cronExpression) {
      try {
        const parsed = cronParser.parseExpression(cronExpression);
        return parsed.next().toDate();
      } catch (error) {
        log.error('Error calculating next run from cron', {
          cronExpression,
          error: error instanceof Error ? error.message : String(error),
        });
        return null;
      }
    }

    return null;
  }
}

let schedulerInstance: RecurringJobScheduler | null = null;

export function getScheduler(): RecurringJobScheduler {
  if (!schedulerInstance) {
    schedulerInstance = new RecurringJobScheduler();
  }
  return schedulerInstance;
}
