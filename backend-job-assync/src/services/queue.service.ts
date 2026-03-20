import { prisma } from '../lib/prisma.js';
import { getQueue } from '../lib/bullmq.js';
import type { CreateQueueInput, UpdateQueueInput } from '../types/index.js';

export class QueueService {
  async create(organizationId: string, data: CreateQueueInput) {
    const queue = await prisma.queue.create({
      data: {
        ...data,
        organizationId,
      },
    });

    return queue;
  }

  // Upsert para evitar race condition no auto-create de filas
  // Se já existe (por organizationId + name), retorna existente sem alterar
  async upsert(organizationId: string, name: string): Promise<any> {
    return prisma.queue.upsert({
      where: { organizationId_name: { organizationId, name } },
      update: {}, // não altera nada se já existe
      create: {
        name,
        organizationId,
        concurrency: 5,
        maxRetries: 2,
        retryDelay: 5000,
        timeout: 300000,
        isActive: true,
        isPaused: false,
      },
    });
  }

  async list(organizationId: string) {
    return prisma.queue.findMany({
      where: { organizationId, isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(organizationId: string, id: string) {
    return prisma.queue.findFirst({
      where: { id, organizationId },
    });
  }

  async getByName(organizationId: string, name: string) {
    return prisma.queue.findFirst({
      where: { organizationId, name },
    });
  }

  async update(organizationId: string, id: string, data: UpdateQueueInput) {
    return prisma.queue.updateMany({
      where: { id, organizationId },
      data,
    });
  }

  async delete(organizationId: string, id: string) {
    return prisma.queue.updateMany({
      where: { id, organizationId },
      data: { isActive: false },
    });
  }

  async getStats(organizationId: string, id: string) {
    const queue = await prisma.queue.findFirst({
      where: { id, organizationId },
    });

    if (!queue) return null;

    const bullQueue = getQueue(organizationId, queue.name);

    // Get real-time counts from BullMQ for waiting/active/delayed
    // Get completed/failed from database (BullMQ removes old completed jobs)
    const [waiting, active, delayed, dbStats] = await Promise.all([
      bullQueue.getWaitingCount(),
      bullQueue.getActiveCount(),
      bullQueue.getDelayedCount(),
      prisma.job.groupBy({
        by: ['status'],
        where: { queueId: id },
        _count: true,
      }),
    ]);

    const statusCounts = dbStats.reduce(
      (acc, item) => {
        acc[item.status] = item._count;
        return acc;
      },
      {} as Record<string, number>
    );

    return {
      id: queue.id,
      name: queue.name,
      waiting,
      active,
      completed: statusCounts['COMPLETED'] || 0,
      failed: (statusCounts['FAILED'] || 0) + (statusCounts['DEAD'] || 0),
      delayed,
    };
  }

  async pause(organizationId: string, id: string) {
    const queue = await prisma.queue.findFirst({
      where: { id, organizationId },
    });

    if (!queue) return false;

    // Update database
    await prisma.queue.update({
      where: { id },
      data: { isPaused: true },
    });

    // Pause BullMQ queue
    const bullQueue = getQueue(organizationId, queue.name);
    await bullQueue.pause();

    return true;
  }

  async resume(organizationId: string, id: string) {
    const queue = await prisma.queue.findFirst({
      where: { id, organizationId },
    });

    if (!queue) return false;

    // Update database
    await prisma.queue.update({
      where: { id },
      data: { isPaused: false },
    });

    // Resume BullMQ queue
    const bullQueue = getQueue(organizationId, queue.name);
    await bullQueue.resume();

    return true;
  }
}

export const queueService = new QueueService();
