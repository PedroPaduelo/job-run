import { z } from 'zod';
import cronParser from 'cron-parser';

// SSRF-safe URL validator — blocks internal IPs and non-HTTPS in production
const BLOCKED_HOSTS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^192\.168\./,
  /^0\./,
  /^169\.254\./,
  /^\[?::1\]?$/,
  /^\[?fd[0-9a-f]{2}:/i,
  /^\[?fe80:/i,
];

function safeUrlSchema() {
  return z.string().url().refine((url) => {
    try {
      const parsed = new URL(url);
      // Block non-HTTP(S) protocols
      if (!['http:', 'https:'].includes(parsed.protocol)) return false;
      // Require HTTPS in production
      if (process.env.NODE_ENV === 'production' && parsed.protocol !== 'https:') return false;
      // Block internal IPs / hostnames
      const hostname = parsed.hostname;
      if (BLOCKED_HOSTS.some((pattern) => pattern.test(hostname))) return false;
      return true;
    } catch {
      return false;
    }
  }, { message: 'URL must be HTTPS (in production) and cannot target internal/private addresses' });
}

// Helper para validar tamanho de payload (max 1MB)
const payloadSchema = z.record(z.unknown()).refine(
  (obj) => JSON.stringify(obj).length <= 1024 * 1024,
  { message: 'Payload size exceeds 1MB limit' }
);

// Job creation schema
export const createJobSchema = z.object({
  queue: z.string().min(1),
  webhookUrl: safeUrlSchema(),
  webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).default('POST'),
  callbackUrl: safeUrlSchema().optional(),
  payload: payloadSchema,
  userId: z.string().optional(),
  externalId: z.string().optional(),
  priority: z.number().int().min(0).max(100).default(0),
  scheduledAt: z.string().datetime().optional().refine(
    (date) => !date || new Date(date) > new Date(),
    { message: 'scheduledAt must be a future date' }
  ),
  metadata: z.record(z.unknown()).optional(),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;

// Bulk job creation schema
export const createBulkJobsSchema = z.object({
  queue: z.string().min(1),
  jobs: z.array(
    z.object({
      webhookUrl: safeUrlSchema(),
      webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).default('POST'),
      callbackUrl: safeUrlSchema().optional(),
      payload: payloadSchema,
      userId: z.string().optional(),
      externalId: z.string().optional(),
      priority: z.number().int().min(0).max(100).default(0),
      scheduledAt: z.string().datetime().optional().refine(
        (date) => !date || new Date(date) > new Date(),
        { message: 'scheduledAt must be a future date' }
      ),
      metadata: z.record(z.unknown()).optional(),
    })
  ).min(1).max(1000),
});

export type CreateBulkJobsInput = z.infer<typeof createBulkJobsSchema>;

// Queue creation schema — name sanitizado com slugify
export const createQueueSchema = z.object({
  name: z.string().min(1).max(100).transform((val) =>
    val.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  ),
  concurrency: z.number().int().min(1).max(100).default(5),
  maxRetries: z.number().int().min(0).max(10).default(3),
  retryDelay: z.number().int().min(1000).max(3600000).default(5000),
  timeout: z.number().int().min(5000).max(3600000).default(300000),
  rateLimit: z.number().int().min(1).optional(),
});

export type CreateQueueInput = z.infer<typeof createQueueSchema>;

// Queue update schema — name sanitizado com slugify se fornecido
export const updateQueueSchema = z.object({
  name: z.string().min(1).max(100).optional().transform((val) =>
    val ? val.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') : undefined
  ),
  concurrency: z.number().int().min(1).max(100).optional(),
  maxRetries: z.number().int().min(0).max(10).optional(),
  retryDelay: z.number().int().min(1000).max(3600000).optional(),
  timeout: z.number().int().min(5000).max(3600000).optional(),
  rateLimit: z.number().int().min(1).nullable().optional(),
  isActive: z.boolean().optional(),
});

export type UpdateQueueInput = z.infer<typeof updateQueueSchema>;

// Recurring job schemas
export const createRecurringJobSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().optional(),
  queue: z.string().min(1),
  recurrenceType: z.enum(['INTERVAL', 'CRON']),
  interval: z.number().int().min(1).max(525600).optional(),
  cronExpression: z.string().optional(),
  webhookUrl: safeUrlSchema(),
  webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).default('POST'),
  callbackUrl: safeUrlSchema().optional(),
  payloadTemplate: z.record(z.unknown()),
  maxRuns: z.number().int().min(1).optional(),
  recurrenceEndDate: z.string().datetime().optional().refine(
    (date) => !date || new Date(date) > new Date(),
    { message: 'recurrenceEndDate must be a future date' }
  ),
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
  if (data.recurrenceType === 'CRON' && data.cronExpression) {
    try {
      cronParser.parseExpression(data.cronExpression);
    } catch {
      return false;
    }
  }
  return true;
}, {
  message: "INTERVAL requires interval, CRON requires valid cronExpression",
});

export type CreateRecurringJobInput = z.infer<typeof createRecurringJobSchema>;

export const updateRecurringJobSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().optional(),
  interval: z.number().int().min(1).max(525600).optional(),
  cronExpression: z.string().optional(),
  webhookUrl: safeUrlSchema().optional(),
  webhookMethod: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']).optional(),
  callbackUrl: safeUrlSchema().optional(),
  payloadTemplate: z.record(z.unknown()).optional(),
  maxRuns: z.number().int().min(1).optional(),
  recurrenceEndDate: z.string().datetime().optional().refine(
    (date) => !date || new Date(date) > new Date(),
    { message: 'recurrenceEndDate must be a future date' }
  ),
  continueOnFailure: z.boolean().optional(),
  isActive: z.boolean().optional(),
  metadata: z.record(z.unknown()).optional(),
  tags: z.array(z.string()).optional(),
}).refine((data) => {
  if (data.cronExpression) {
    try {
      cronParser.parseExpression(data.cronExpression);
    } catch {
      return false;
    }
  }
  return true;
}, {
  message: "Invalid cron expression",
});

export type UpdateRecurringJobInput = z.infer<typeof updateRecurringJobSchema>;

// Helper to convert empty strings to undefined
const emptyStringToUndefined = z.preprocess(
  (val) => (val === '' ? undefined : val),
  z.string().optional()
);

const emptyStringToUndefinedDatetime = z.preprocess(
  (val) => (val === '' ? undefined : val),
  z.string().datetime().optional()
);

// Job filters schema
export const jobFiltersSchema = z.object({
  status: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.enum(['PENDING', 'SCHEDULED', 'PROCESSING', 'COMPLETED', 'FAILED', 'CANCELLED', 'DEAD']).optional()
  ),
  queue: emptyStringToUndefined,
  userId: emptyStringToUndefined,
  from: emptyStringToUndefinedDatetime,
  to: emptyStringToUndefinedDatetime,
  limit: z.coerce.number().int().min(1).max(100).default(20),
  offset: z.coerce.number().int().min(0).default(0),
});

export type JobFilters = z.infer<typeof jobFiltersSchema>;

// Worker job data
export interface WorkerJobData {
  jobId: string;
  webhookUrl: string;
  webhookMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  callbackUrl?: string;
  payload: unknown;
  timeout: number;
}

// Fastify request augmentation
// NOTA: A extensao completa do FastifyRequest esta em server.ts
// para evitar conflitos de declaracao
