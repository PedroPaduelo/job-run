# Jobs Recorrentes (Cron/Interval) Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar suporte a jobs recorrentes (tipo cron) no JobSync, permitindo execuções automáticas em intervalos regulares ou expressões cron, com controle de limites e comportamento em falhas.

**Architecture:** Tabela `RecurringJob` separada de `Job` (regra vs execução). Processo Scheduler roda no Worker a cada 30s, busca recorrências ativas e cria jobs filhos. Usa lib `cron` (já instalada) para calcular nextRunAt.

**Tech Stack:** Prisma, BullMQ, Fastify, React Query, React Router, TypeScript

---

## Chunk 1: Database & Types (Prisma + Zod)

### Task 1.1: Atualizar Prisma Schema

**Files:**
- Modify: `backend-job-assync/prisma/schema.prisma`

- [ ] **Step 1: Adicionar enum RecurrenceType**

```prisma
enum RecurrenceType {
  INTERVAL
  CRON
}
```

Add after line 95 (after enum AuditStatus).

- [ ] **Step 2: Adicionar model RecurringJob**

```prisma
model RecurringJob {
  id              String   @id @default(cuid())
  name            String
  description     String?

  organizationId  String   @map("organization_id")
  organization    Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)

  queueId         String   @map("queue_id")
  queue           Queue    @relation(fields: [queueId], references: [id])

  userId          String?  @map("user_id")
  user            User?    @relation(fields: [userId], references: [id], onDelete: SetNull)

  // Configuração da recorrência
  recurrenceType  RecurrenceType
  interval        Int?
  cronExpression  String?         @map("cron_expression")

  // Configuração do webhook
  webhookUrl      String   @map("webhook_url")
  webhookMethod   String   @default("POST") @map("webhook_method")
  callbackUrl     String?  @map("callback_url")
  payloadTemplate Json     @map("payload_template")

  // Limites e comportamento
  maxRuns         Int?     @map("max_runs")
  recurrenceEndDate DateTime?  @map("recurrence_end_date")
  continueOnFailure Boolean @default(false) @map("continue_on_failure")

  // Status
  isActive        Boolean  @default(true) @map("is_active")
  nextRunAt       DateTime @map("next_run_at")

  // Execuções
  jobs            Job[]

  metadata        Json?
  tags            String[]

  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  @@index([organizationId])
  @@index([queueId])
  @@index([nextRunAt])
  @@index([isActive])
  @@map("recurring_jobs")
}
```

Add after line 96 (after AuditLog model).

- [ ] **Step 3: Modificar model Job - adicionar recurrenceId**

Add to Job model (after line 183, before metadata):

```prisma
  recurrenceId    String?  @map("recurrence_id")
  recurrenceJob   RecurringJob? @relation(fields: [recurrenceId], references: [id], onDelete: SetNull)
```

Add index after line 223:

```prisma
  @@index([recurrenceId])
```

- [ ] **Step 4: Executar migration**

Run: `cd backend-job-assync && npm run db:push`

Expected: Output showing migration applied successfully.

- [ ] **Step 5: Gerar Prisma Client**

Run: `cd backend-job-assync && npm run db:generate`

Expected: "Generated Prisma Client" message.

- [ ] **Step 6: Commit**

```bash
cd backend-job-assync
git add prisma/schema.prisma
git commit -m "feat(prisma): add RecurringJob model and recurrenceId to Job"
```

---

### Task 1.2: Adicionar Zod Schemas para RecurringJob

**Files:**
- Modify: `backend-job-assync/src/types/index.ts`

- [ ] **Step 1: Adicionar createRecurringJobSchema**

Add after line 61 (after updateQueueSchema):

```typescript
// Recurring job schemas
export const createRecurringJobSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().optional(),
  queue: z.string().min(1),
  recurrenceType: z.enum(['INTERVAL', 'CRON']),
  interval: z.number().int().min(1).max(525600).optional(), // max 1 year in minutes
  cronExpression: z.string().optional(),
  webhookUrl: z.string().url(),
  webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).default('POST'),
  callbackUrl: z.string().url().optional(),
  payloadTemplate: z.record(z.unknown()),
  maxRuns: z.number().int().min(1).optional(),
  recurrenceEndDate: z.string().datetime().optional(),
  continueOnFailure: z.boolean().default(false),
  metadata: z.record(z.unknown()).optional(),
  tags: z.array(z.string()).optional(),
}).refine((data) => {
  if (data.recurrenceType === 'INTERVAL' && !data.interval) {
    return false;
  }
  if (data.recurrenceType === 'CRON' && !data.cronExpression) {
    return false;
  }
  return true;
}, {
  message: "INTERVAL requires interval field, CRON requires cronExpression field",
});

export type CreateRecurringJobInput = z.infer<typeof createRecurringJobSchema>;
```

- [ ] **Step 2: Adicionar updateRecurringJobSchema**

Add after createRecurringJobSchema:

```typescript
export const updateRecurringJobSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().optional(),
  interval: z.number().int().min(1).max(525600).optional(),
  cronExpression: z.string().optional(),
  webhookUrl: z.string().url().optional(),
  webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).optional(),
  callbackUrl: z.string().url().optional(),
  payloadTemplate: z.record(z.unknown()).optional(),
  maxRuns: z.number().int().min(1).optional(),
  recurrenceEndDate: z.string().datetime().optional(),
  continueOnFailure: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metadata: z.record(z.unknown()).optional(),
  tags: z.array(z.string()).optional(),
});

export type UpdateRecurringJobInput = z.infer<typeof updateRecurringJobSchema>;
```

- [ ] **Step 3: Commit**

```bash
git add src/types/index.ts
git commit -m "feat(types): add RecurringJob Zod schemas"
```

---

## Chunk 2: Backend - Scheduler Core Logic

### Task 2.1: Criar módulo Scheduler

**Files:**
- Create: `backend-job-assync/src/lib/scheduler.ts`

- [ ] **Step 1: Criar estrutura do scheduler**

```typescript
import { CronJob } from 'cron';
import { prisma } from './prisma.js';

export interface SchedulerConfig {
  intervalMs: number; // how often to check for due jobs (default 30s)
}

export class RecurringJobScheduler {
  private cronJob: CronJob | null = null;
  private isRunning = false;
  private config: SchedulerConfig;

  constructor(config: SchedulerConfig = { intervalMs: 30000 }) {
    this.config = config;
  }

  start(): void {
    if (this.isRunning) return;

    this.cronJob = new CronJob(`*/${this.config.intervalMs / 1000} * * * * *`, async () => {
      await this.checkAndCreateJobs();
    });

    this.cronJob.start();
    this.isRunning = true;
    console.log('[Scheduler] Started');
  }

  stop(): void {
    if (this.cronJob) {
      this.cronJob.stop();
      this.cronJob = null;
    }
    this.isRunning = false;
    console.log('[Scheduler] Stopped');
  }

  private async checkAndCreateJobs(): Promise<void> {
    const now = new Date();

    // Find due recurring jobs
    const dueJobs = await prisma.recurringJob.findMany({
      where: {
        isActive: true,
        nextRunAt: { lte: now },
      },
      include: { queue: true, organization: true },
    });

    console.log(`[Scheduler] Found ${dueJobs.length} due recurring jobs`);

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

    // Check if max runs reached
    const runsCount = await prisma.job.count({
      where: { recurrenceId: id },
    });

    if (maxRuns && runsCount >= maxRuns) {
      await prisma.recurringJob.update({
        where: { id },
        data: { isActive: false },
      });
      console.log(`[Scheduler] Recurring job ${id} reached max runs, deactivating`);
      return;
    }

    // Check if end date passed
    if (recurrenceEndDate && recurrenceEndDate < now) {
      await prisma.recurringJob.update({
        where: { id },
        data: { isActive: false },
      });
      console.log(`[Scheduler] Recurring job ${id} end date passed, deactivating`);
      return;
    }

    // Check if last job failed (when continueOnFailure is false)
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
        console.log(`[Scheduler] Recurring job ${id} last job failed, deactivating`);
        return;
      }
    }

    // Create child job
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

    // Calculate next run time
    const nextRunAt = this.calculateNextRun(recurrenceType, interval, cronExpression);

    if (nextRunAt) {
      await prisma.recurringJob.update({
        where: { id },
        data: { nextRunAt },
      });
      console.log(`[Scheduler] Created job for ${id}, next run at ${nextRunAt.toISOString()}`);
    }
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
      // Parse cron and calculate next execution
      try {
        const Cron = require('cron');
        const cronJob = new Cron.CronJob(cronExpression, null, null, 'America/Sao_Paulo');
        // @ts-ignore - _cronExpression is private but accessible
        const cronTime = cronJob._cronTime;
        // @ts-ignore
        return cronTime._getNextDateFrom(new Date());
      } catch (error) {
        console.error('[Scheduler] Error calculating next run from cron:', error);
        return null;
      }
    }

    return null;
  }
}

// Singleton instance
let schedulerInstance: RecurringJobScheduler | null = null;

export function getScheduler(): RecurringJobScheduler {
  if (!schedulerInstance) {
    schedulerInstance = new RecurringJobScheduler();
  }
  return schedulerInstance;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/scheduler.ts
git commit -m "feat(scheduler): add RecurringJobScheduler core logic"
```

---

## Chunk 3: Backend - Service & Routes

### Task 3.1: Criar RecurringJobService

**Files:**
- Create: `backend-job-assync/src/services/recurring-job.service.ts`

- [ ] **Step 1: Criar serviço completo**

```typescript
import { prisma } from '../lib/prisma.js';
import { getQueue } from '../lib/bullmq.js';
import type { CreateRecurringJobInput, UpdateRecurringJobInput } from '../types/index.js';

export class RecurringJobService {
  async create(organizationId: string, data: CreateRecurringJobInput) {
    // Find or validate queue
    const queue = await prisma.queue.findFirst({
      where: { name: data.queue, organizationId },
    });

    if (!queue) {
      throw new Error('Queue not found');
    }

    if (!queue.isActive) {
      throw new Error('Queue is not active');
    }

    // Calculate first nextRunAt
    const nextRunAt = this.calculateNextRunAt(data.recurrenceType, data.interval, data.cronExpression);

    const recurringJob = await prisma.recurringJob.create({
      data: {
        organizationId,
        queueId: queue.id,
        userId: data.userId || null,
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

    return {
      recurringJobs: recurringJobs.map((rj) => ({
        ...rj,
        queueName: rj.queue.name,
      })),
      total: recurringJobs.length,
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

    // Get execution count
    const totalRuns = await prisma.job.count({
      where: { recurrenceId: id },
    });

    return {
      ...recurringJob,
      queueName: recurringJob.queue.name,
      totalRuns,
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

    // If updating recurrence config, recalculate nextRunAt
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

    // Cancel all pending jobs
    await prisma.job.updateMany({
      where: {
        recurrenceId: id,
        status: { in: ['PENDING', 'SCHEDULED'] },
      },
      data: { status: 'CANCELLED' },
    });

    // Deactivate recurring job
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

    // Recalculate nextRunAt
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

    // Cancel all pending jobs
    await prisma.job.updateMany({
      where: {
        recurrenceId: id,
        status: { in: ['PENDING', 'SCHEDULED'] },
      },
      data: { status: 'CANCELLED' },
    });

    // Delete recurring job (cascades to jobs but keeps history)
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

    // Create immediate job
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

    // Add to BullMQ
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

  private calculateNextRunAt(type: string, interval: number | null, cronExpression: string | null): Date {
    if (type === 'INTERVAL' && interval) {
      return new Date(Date.now() + interval * 60 * 1000);
    }

    if (type === 'CRON' && cronExpression) {
      try {
        const Cron = require('cron');
        const cronJob = new Cron.CronJob(cronExpression, null, null, 'America/Sao_Paulo');
        // @ts-ignore
        return cronJob._cronTime._getNextDateFrom(new Date());
      } catch (error) {
        console.error('[RecurringJobService] Error calculating next run:', error);
        return new Date(Date.now() + 60000); // fallback 1 min
      }
    }

    return new Date(Date.now() + 60000); // fallback
  }
}

export const recurringJobService = new RecurringJobService();
```

- [ ] **Step 2: Commit**

```bash
git add src/services/recurring-job.service.ts
git commit -m "feat(service): add RecurringJobService with CRUD operations"
```

---

### Task 3.2: Criar rotas da API

**Files:**
- Create: `backend-job-assync/src/routes/recurring-jobs.ts`

- [ ] **Step 1: Criar rotas**

```typescript
import { FastifyInstance } from 'fastify';
import { recurringJobService } from '../services/recurring-job.service.js';
import { createRecurringJobSchema, updateRecurringJobSchema } from '../types/index.js';
import { requirePermission } from '../server.js';

export async function recurringJobRoutes(fastify: FastifyInstance) {
  // Create recurring job
  fastify.post('/', {
    preHandler: [requirePermission('jobs:create')],
  }, async (request, reply) => {
    const data = createRecurringJobSchema.parse(request.body);
    const result = await recurringJobService.create(request.organizationId!, data);
    return reply.status(201).send(result);
  });

  // List recurring jobs
  fastify.get('/', async (request, reply) => {
    const { isActive, queue } = request.query as { isActive?: string; queue?: string };
    const result = await recurringJobService.list(request.organizationId!, {
      isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
      queue,
    });
    return reply.send(result);
  });

  // Get recurring job details
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = await recurringJobService.getById(request.organizationId!, id);
    if (!result) {
      return reply.status(404).send({ error: 'Recurring job not found' });
    }
    return reply.send(result);
  });

  // Update recurring job
  fastify.patch('/:id', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = updateRecurringJobSchema.parse(request.body);
    const result = await recurringJobService.update(request.organizationId!, id, data);
    return reply.send(result);
  });

  // Pause recurring job
  fastify.post('/:id/pause', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = await recurringJobService.pause(request.organizationId!, id);
    return reply.send(result);
  });

  // Resume recurring job
  fastify.post('/:id/resume', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = await recurringJobService.resume(request.organizationId!, id);
    return reply.send(result);
  });

  // Delete recurring job
  fastify.delete('/:id', {
    preHandler: [requirePermission('jobs:delete')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = await recurringJobService.delete(request.organizationId!, id);
    return reply.send(result);
  });

  // Trigger immediate execution
  fastify.post('/:id/trigger', {
    preHandler: [requirePermission('jobs:create')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = await recurringJobService.trigger(request.organizationId!, id);
    return reply.send(result);
  });
}
```

- [ ] **Step 2: Registrar rotas no server**

Modify: `backend-job-assync/src/server.ts`

Add import after line 14:

```typescript
import { recurringJobRoutes } from './routes/recurring-jobs.js';
```

Add registration after line 151 (inside the register block):

```typescript
await app.register(recurringJobRoutes, { prefix: '/recurring-jobs' });
```

- [ ] **Step 3: Commit**

```bash
git add src/routes/recurring-jobs.ts src/server.ts
git commit -m "feat(routes): add recurring-jobs API endpoints"
```

---

## Chunk 4: Backend - Worker Integration

### Task 4.1: Integrar Scheduler no Worker

**Files:**
- Modify: `backend-job-assync/src/worker.ts`

- [ ] **Step 1: Importar e iniciar scheduler**

Add import after line 5:

```typescript
import { getScheduler } from './lib/scheduler.js';
```

Add after line 241 (inside startWorkers function, after console.log):

```typescript
  // Start recurring job scheduler
  const scheduler = getScheduler();
  scheduler.start();
```

- [ ] **Step 2: Parar scheduler no shutdown**

Modify shutdown function (around line 232):

```typescript
  const shutdown = async () => {
    console.log('Shutting down workers...');

    // Stop scheduler
    const scheduler = getScheduler();
    scheduler.stop();

    for (const worker of workers) {
      await worker.close();
    }

    await prisma.$disconnect();
    process.exit(0);
  };
```

- [ ] **Step 3: Commit**

```bash
git add src/worker.ts
git commit -m "feat(worker): integrate RecurringJobScheduler"
```

---

## Chunk 5: Frontend - Hooks & API Client

### Task 5.1: Adicionar hooks useRecurringJobs

**Files:**
- Create: `frontend-job-async/src/hooks/useRecurringJobs.ts`

- [ ] **Step 1: Criar hooks**

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';

export function useRecurringJobs(filters?: { isActive?: boolean; queue?: string }) {
  return useQuery({
    queryKey: ['recurring-jobs', filters],
    queryFn: () => api.get(`/recurring-jobs${new URLSearchParams(filters as any).toString()}`),
  });
}

export function useRecurringJob(id: string) {
  return useQuery({
    queryKey: ['recurring-job', id],
    queryFn: () => api.get(`/recurring-jobs/${id}`),
    enabled: !!id,
  });
}

export function useCreateRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => api.post('/recurring-jobs', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
}

export function useUpdateRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      api.patch(`/recurring-jobs/${id}`, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['recurring-job', variables.id] });
    },
  });
}

export function usePauseRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.post(`/recurring-jobs/${id}/pause`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
    },
  });
}

export function useResumeRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.post(`/recurring-jobs/${id}/resume`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
    },
  });
}

export function useDeleteRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/recurring-jobs/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
}

export function useTriggerRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.post(`/recurring-jobs/${id}/trigger`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}
```

- [ ] **Step 2: Commit**

```bash
cd frontend-job-async
git add src/hooks/useRecurringJobs.ts
git commit -m "feat(hooks): add useRecurringJobs hooks"
```

---

## Chunk 6: Frontend - Pages

### Task 6.1: Criar página RecurringJobs (lista)

**Files:**
- Create: `frontend-job-async/src/pages/RecurringJobs.tsx`

- [ ] **Step 1: Criar página completa**

```typescript
import { useState } from 'react';
import { useRecurringJobs, usePauseRecurringJob, useResumeRecurringJob, useDeleteRecurringJob, useTriggerRecurringJob } from '../hooks/useRecurringJobs';
import { Clock, Play, Pause, Trash2, Zap, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { toast } from '../lib/toast';

export function RecurringJobs() {
  const [filter, setFilter] = useState<'all' | 'active' | 'paused'>('all');
  const { data, isLoading } = useRecurringJobs(
    filter === 'all' ? undefined : { isActive: filter === 'active' }
  );
  const pauseMutation = usePauseRecurringJob();
  const resumeMutation = useResumeRecurringJob();
  const deleteMutation = useDeleteRecurringJob();
  const triggerMutation = useTriggerRecurringJob();

  const handlePause = async (id: string) => {
    try {
      await pauseMutation.mutateAsync(id);
      toast.success('Recorrência pausada');
    } catch (error) {
      toast.error('Erro ao pausar recorrência');
    }
  };

  const handleResume = async (id: string) => {
    try {
      await resumeMutation.mutateAsync(id);
      toast.success('Recorrência reativada');
    } catch (error) {
      toast.error('Erro ao reativar recorrência');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza? Isso vai cancelar todos os jobs pendentes.')) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Recorrência deletada');
    } catch (error) {
      toast.error('Erro ao deletar recorrência');
    }
  };

  const handleTrigger = async (id: string) => {
    try {
      await triggerMutation.mutateAsync(id);
      toast.success('Job disparado imediatamente');
    } catch (error) {
      toast.error('Erro ao disparar job');
    }
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Recorrências</h1>
          <p className="text-muted-foreground">Jobs que se executam automaticamente</p>
        </div>
        <Button>Criar Recorrência</Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          Todas
        </Button>
        <Button
          variant={filter === 'active' ? 'default' : 'outline'}
          onClick={() => setFilter('active')}
        >
          Ativas
        </Button>
        <Button
          variant={filter === 'paused' ? 'default' : 'outline'}
          onClick={() => setFilter('paused')}
        >
          Pausadas
        </Button>
      </div>

      <div className="grid gap-4">
        {data?.recurringJobs?.map((job: any) => (
          <div key={job.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{job.name}</h3>
                <p className="text-sm text-muted-foreground">{job.description || 'Sem descrição'}</p>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${
                job.isActive ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'
              }`}>
                {job.isActive ? 'Ativa' : 'Pausada'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{job.recurrenceType === 'INTERVAL' ? `A cada ${job.interval}min` : 'Cron'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Próxima: {new Date(job.nextRunAt).toLocaleString('pt-BR')}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {job.isActive ? (
                <Button size="sm" variant="outline" onClick={() => handlePause(job.id)}>
                  <Pause className="h-4 w-4 mr-1" /> Pausar
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={() => handleResume(job.id)}>
                  <Play className="h-4 w-4 mr-1" /> Reativar
                </Button>
              )}
              <Button size="sm" variant="outline" onClick={() => handleTrigger(job.id)}>
                <Zap className="h-4 w-4 mr-1" /> Trigger
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(job.id)}>
                <Trash2 className="h-4 w-4 mr-1" />
              </Button>
            </div>
          </div>
        ))}

        {data?.recurringJobs?.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Nenhuma recorrência encontrada
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/RecurringJobs.tsx
git commit -m "feat(pages): add RecurringJobs list page"
```

---

### Task 6.2: Adicionar rota no App

**Files:**
- Modify: `frontend-job-async/src/App.tsx`

- [ ] **Step 1: Adicionar import e rota**

Add import after line 10:

```typescript
import { RecurringJobs } from "./pages/RecurringJobs";
```

Add route after line 39:

```typescript
<Route path="/recurring-jobs" element={<RecurringJobs />} />
```

- [ ] **Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat(routes): add recurring-jobs route"
```

---

### Task 6.3: Atualizar Layout (sidebar)

**Files:**
- Modify: `frontend-job-async/src/components/Layout.tsx`

- [ ] **Step 1: Adicionar link no sidebar**

Add import at top:

```typescript
import { Clock } from "lucide-react";
```

Add to navigation array (after line 11):

```typescript
{ name: "Recorrências", href: "/recurring-jobs", icon: Clock },
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Layout.tsx
git commit -m "feat(layout): add RecurringJobs link to sidebar"
```

---

## Chunk 7: Testes

### Task 7.1: Testes Backend (manuais)

**Files:**
- No files created - manual testing

- [ ] **Step 1: Testar criação de recorrência INTERVAL**

```bash
API_KEY="jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"

curl -X POST "http://localhost:3003/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Interval 2min",
    "description": "Recorrência de teste a cada 2 minutos",
    "queue": "test-cep-api",
    "recurrenceType": "INTERVAL",
    "interval": 2,
    "webhookUrl": "https://viacep.com.br/ws/01001000/json/",
    "webhookMethod": "GET",
    "payloadTemplate": {"teste": "recurring"},
    "maxRuns": 5,
    "continueOnFailure": true
  }'
```

Expected: 201 Created with recurringJob object

- [ ] **Step 2: Aguardar 3 minutos e verificar jobs criados**

```bash
curl -s "http://localhost:3003/api/jobs?queue=test-cep-api&limit=10" \
  -H "Authorization: Bearer $API_KEY" | grep -c '"status":"COMPLETED"'
```

Expected: At least 1 COMPLETED job with recurrenceId

- [ ] **Step 3: Testar pausa**

```bash
# Pegar ID da recorrência criada
RECURRING_ID=$(curl -s "http://localhost:3003/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

curl -X POST "http://localhost:3003/api/recurring-jobs/$RECURRING_ID/pause" \
  -H "Authorization: Bearer $API_KEY"
```

Expected: {"success": true}

- [ ] **Step 4: Verificar que próximos jobs não foram criados**

Wait 2 minutes and check:

```bash
curl -s "http://localhost:3003/api/recurring-jobs/$RECURRING_ID" \
  -H "Authorization: Bearer $API_KEY" | grep '"isActive":false'
```

Expected: isActive is false

- [ ] **Step 5: Commit**

```bash
cd backend-job-assync
git commit --allow-empty -m "test: manual backend tests passed"
```

---

### Task 7.2: Testes Frontend (via browser)

**Files:**
- No files created - manual testing

- [ ] **Step 1: Acessar página de recorrências**

Open: https://job-assync-frontend.ddw1sl.easypanel.host/recurring-jobs

Expected: Page loads, shows list of recurring jobs

- [ ] **Step 2: Verificar filtros**

Click on "Ativas" and "Pausadas" buttons.

Expected: List updates accordingly

- [ ] **Step 3: Testar botão Pause**

Click "Pausar" on an active recurring job.

Expected: Toast success, status updates to "Pausada"

- [ ] **Step 4: Testar botão Resume**

Click "Reativar" on a paused recurring job.

Expected: Toast success, status updates to "Ativa"

- [ ] **Step 5: Testar botão Trigger**

Click "Trigger" on any recurring job.

Expected: Toast success, new job created

- [ ] **Step 6: Commit**

```bash
cd frontend-job-async
git commit --allow-empty -m "test: manual frontend tests passed"
```

---

## Chunk 8: Documentação

### Task 8.1: Criar guia de uso

**Files:**
- Create: `docs/guides/recurring-jobs.html`

- [ ] **Step 1: Criar guia completo**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jobs Recorrentes - JobSync</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <div class="container">
    <h1>🔄 Jobs Recorrentes</h1>

    <p>Crie jobs que se executam automaticamente em intervalos regulares ou expressões cron.</p>

    <h2>Tipo INTERVAL</h2>
    <p>Executa a cada X minutos.</p>

    <pre><code>curl -X POST "https://job-assync-api.ddw1sl.easypanel.host/api/recurring-jobs" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "CEP a cada 5min",
    "queue": "test-cep-api",
    "recurrenceType": "INTERVAL",
    "interval": 5,
    "webhookUrl": "https://viacep.com.br/ws/01001000/json/",
    "webhookMethod": "GET",
    "payloadTemplate": {"auto": true}
  }'</code></pre>

    <h2>Tipo CRON</h2>
    <p>Expressão cron completa.</p>

    <ul>
      <li><code>0 9 * * *</code> - Todo dia às 9h</li>
      <li><code>0 9 * * 1-5</code> - Dia de semana às 9h</li>
      <li><code>0 */6 * * *</code> - A cada 6 horas</li>
    </ul>

    <h2>Limites</h2>
    <ul>
      <li><code>maxRuns</code>: Número máximo de execuções</li>
      <li><code>recurrenceEndDate</code>: Data final</li>
      <li><code>continueOnFailure</code>: Continua mesmo com erro?</li>
    </ul>

    <h2>Operações</h2>
    <ul>
      <li><strong>Pausar</strong>: Para de criar novos jobs</li>
      <li><strong>Reativar</strong>: Recomeça agendamento</li>
      <li><strong>Trigger</strong>: Execução imediata manual</li>
      <li><strong>Deletar</strong>: Remove regra e cancela pendentes</li>
    </ul>
  </div>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add docs/guides/recurring-jobs.html
git commit -m "docs(guide): add recurring jobs usage guide"
```

---

## Final Steps

- [ ] **Step 1: Push all changes**

```bash
cd backend-job-assync && git push
cd ../frontend-job-async && git push
```

- [ ] **Step 2: Rebuild e restart services**

```bash
# Backend
cd backend-job-assync
npm run build
pm2 restart job-assync-api
pm2 restart job-assync-worker

# Frontend
cd ../frontend-job-async
npm run build
pm2 restart job-assync-frontend
```

- [ ] **Step 3: Validate end-to-end**

1. Create recurring job via API
2. Wait 2-3 minutes
3. Check jobs were created
4. Test pause/resume/trigger
5. Check frontend UI

---

✅ **Plan Complete!**
