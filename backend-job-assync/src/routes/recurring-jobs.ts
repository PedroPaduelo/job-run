import { FastifyInstance } from 'fastify';
import { recurringJobService } from '../services/recurring-job.service.js';
import { createRecurringJobSchema, updateRecurringJobSchema } from '../types/index.js';
import { requirePermission } from '../server.js';
import { NotFoundError, ForbiddenError, ValidationError } from '../lib/errors.js';

export async function recurringJobRoutes(fastify: FastifyInstance) {
  // Create recurring job
  fastify.post('/', {
    preHandler: [requirePermission('jobs:create')],
  }, async (request, reply) => {
    const result = createRecurringJobSchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = request.organizationId!;
    const resultData = await recurringJobService.create(orgId, result.data);
    return reply.status(201).send(resultData);
  });

  // List recurring jobs
  fastify.get('/', async (request, reply) => {
    const { isActive, queue } = request.query as { isActive?: string; queue?: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.list(orgId, {
      isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
      queue,
    });
    return reply.send(result);
  });

  // Get recurring job details
  fastify.get('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.getById(orgId, id);
    if (!result) throw new NotFoundError('Recurring job', id);
    return reply.send(result);
  });

  // Update recurring job
  fastify.patch('/:id', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = updateRecurringJobSchema.parse(request.body);
    const updated = await recurringJobService.update(orgId, id, result);
    return reply.send(updated);
  });

  // Pause recurring job (cancels pending jobs + deactivates)
  fastify.post('/:id/pause', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.pause(orgId, id);
    return reply.send(result);
  });

  // Resume recurring job (recalculates nextRunAt)
  fastify.post('/:id/resume', {
    preHandler: [requirePermission('jobs:update')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.resume(orgId, id);
    return reply.send(result);
  });

  // Delete recurring job
  fastify.delete('/:id', {
    preHandler: [requirePermission('jobs:delete')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.delete(orgId, id);
    return reply.send(result);
  });

  // Trigger immediate execution
  fastify.post('/:id/trigger', {
    preHandler: [requirePermission('jobs:create')],
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = request.organizationId!;
    const result = await recurringJobService.trigger(orgId, id);
    return reply.send(result);
  });
}
