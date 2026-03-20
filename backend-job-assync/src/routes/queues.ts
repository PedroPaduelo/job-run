import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { queueService } from '../services/queue.service.js';
import { createQueueSchema, updateQueueSchema } from '../types/index.js';
import { NotFoundError, UnauthorizedError, ValidationError } from '../lib/errors.js';

function getOrganizationId(request: FastifyRequest): string {
  if (!request.organizationId) {
    throw new UnauthorizedError('Organization not found');
  }
  return request.organizationId;
}

export async function queueRoutes(fastify: FastifyInstance) {
  // List queues
  fastify.get('/queues', async (request, reply) => {
    const orgId = getOrganizationId(request);
    const queues = await queueService.list(orgId);
    return reply.send(queues);
  });

  // Create queue
  fastify.post('/queues', async (request, reply) => {
    const result = createQueueSchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = getOrganizationId(request);
    const queue = await queueService.create(orgId, result.data);
    return reply.status(201).send(queue);
  });

  // Get queue by ID
  fastify.get('/queues/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const queue = await queueService.getById(orgId, id);
    if (!queue) throw new NotFoundError('Queue', id);
    return reply.send(queue);
  });

  // Update queue
  fastify.patch('/queues/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const result = updateQueueSchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = getOrganizationId(request);
    const updated = await queueService.update(orgId, id, result.data);
    if (updated.count === 0) throw new NotFoundError('Queue', id);
    const queue = await queueService.getById(orgId, id);
    return reply.send(queue);
  });

  // Delete (deactivate) queue
  fastify.delete('/queues/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const deleted = await queueService.delete(orgId, id);
    if (deleted.count === 0) throw new NotFoundError('Queue', id);
    return reply.send({ message: 'Queue deactivated' });
  });

  // Get queue stats
  fastify.get('/queues/:id/stats', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const stats = await queueService.getStats(orgId, id);
    if (!stats) throw new NotFoundError('Queue', id);
    return reply.send(stats);
  });

  // Pause queue
  fastify.post('/queues/:id/pause', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const success = await queueService.pause(orgId, id);
    if (!success) throw new NotFoundError('Queue', id);
    return reply.send({ message: 'Queue paused' });
  });

  // Resume queue
  fastify.post('/queues/:id/resume', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const success = await queueService.resume(orgId, id);
    if (!success) throw new NotFoundError('Queue', id);
    return reply.send({ message: 'Queue resumed' });
  });
}
