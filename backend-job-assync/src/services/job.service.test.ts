import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { jobService } from './job.service.js';
import { prisma } from '../lib/prisma.js';
import { queueService } from './queue.service.js';
import { getQueue } from '../lib/bullmq.js';

// Mock das dependências externas
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    job: {
      create: vi.fn().mockResolvedValue({ id: 'job-123', status: 'PENDING', queue: { name: 'test-queue' }, createdAt: new Date() }),
      createMany: vi.fn().mockResolvedValue({ count: 1 }),
      count: vi.fn().mockResolvedValue(0),
      findFirst: vi.fn(),
    },
    $disconnect: vi.fn(),
  },
}));

vi.mock('./queue.service.js', () => ({
  queueService: {
    upsert: vi.fn().mockResolvedValue({ id: 'queue-123', name: 'test-queue', isActive: true, maxRetries: 3, retryDelay: 5000, timeout: 300000 }),
  },
}));

vi.mock('../lib/bullmq.js', () => ({
  getQueue: vi.fn().mockReturnValue({
    add: vi.fn().mockResolvedValue({}),
    addBulk: vi.fn().mockResolvedValue({}),
  }),
}));

describe('JobService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('create', () => {
    it('deve criar job usando queue.upsert em vez de getByName+create', async () => {
      const input = {
        queue: 'test-queue',
        webhookUrl: 'https://example.com/webhook',
        payload: { data: 'test' },
      };

      const result = await jobService.create('org-123', input);

      expect(queueService.upsert).toHaveBeenCalledWith('org-123', 'test-queue');
      expect(result.id).toBe('job-123');
      expect(result.status).toBe('PENDING');
    });

    it('deve criar job com campos opcionalmente fornecidos', async () => {
      const input = {
        queue: 'queue-1',
        webhookUrl: 'https://api.callback',
        payload: {},
        userId: 'user-1',
        externalId: 'ext-1',
        priority: 10,
        scheduledAt: '2026-01-01T00:00:00Z',
        metadata: { tag: 'test' },
      };

      await jobService.create('org-123', input);

      expect(prisma.job.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            organizationId: 'org-123',
            queueId: 'queue-123',
            webhookUrl: 'https://api.callback',
            payload: {},
            userId: 'user-1',
            externalId: 'ext-1',
            priority: 10,
            scheduledAt: expect.any(Date),
            metadata: { tag: 'test' },
            maxAttempts: 3,
            status: 'SCHEDULED',
          }),
        })
      );
    });
  });

  describe('createBulk', () => {
    it('deve gerar IDs únicos com cuid() para cada job', async () => {
      const input = {
        queue: 'bulk-queue',
        jobs: [
          { webhookUrl: 'https://a.com', payload: {} },
          { webhookUrl: 'https://b.com', payload: {} },
          { webhookUrl: 'https://c.com', payload: {} },
        ],
      };

      // Resetar mock
      vi.mocked(prisma.job.createMany).mockResolvedValue({ count: 3 });
      vi.mocked(queueService.upsert).mockResolvedValue({ id: 'queue-bulk', name: 'bulk-queue', isActive: true, maxRetries: 3, retryDelay: 5000, timeout: 300000 });

      await jobService.createBulk('org-123', input);

      expect(prisma.job.createMany).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
            }),
            expect.objectContaining({
              id: expect.any(String),
            }),
            expect.objectContaining({
              id: expect.any(String),
            }),
          ]),
        })
      );

      // Verificar que IDs são únicos
      const jobsData = (prisma.job.createMany as any).mock.calls[0][0].data;
      const ids = jobsData.map((j: any) => j.id);
      expect(new Set(ids).size).toBe(3);
    });

    it('deve usar queue.upsert em vez de getByName+create', async () => {
      const input = {
        queue: 'bulk-queue',
        jobs: [{ webhookUrl: 'https://x.com', payload: {} }],
      };

      vi.mocked(prisma.job.createMany).mockResolvedValue({ count: 1 });

      await jobService.createBulk('org-123', input);

      expect(queueService.upsert).toHaveBeenCalledWith('org-123', 'bulk-queue');
    });
  });
});
