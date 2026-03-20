import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { jobService } from '../services/job.service.js';
import { createJobSchema, createBulkJobsSchema, jobFiltersSchema } from '../types/index.js';
import { NotFoundError, UnauthorizedError, ValidationError } from '../lib/errors.js';

function getOrganizationId(request: FastifyRequest): string {
  if (!request.organizationId) {
    throw new UnauthorizedError('Organization not found');
  }
  return request.organizationId;
}

export async function jobRoutes(fastify: FastifyInstance) {
  // Create job
  fastify.post('/jobs', async (request, reply) => {
    const result = createJobSchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = getOrganizationId(request);
    const job = await jobService.create(orgId, result.data);
    return reply.status(201).send(job);
  });

  // Create bulk jobs
  fastify.post('/jobs/bulk', async (request, reply) => {
    const result = createBulkJobsSchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = getOrganizationId(request);
    const jobs = await jobService.createBulk(orgId, result.data);
    return reply.status(201).send(jobs);
  });

  // List jobs
  fastify.get('/jobs', async (request, reply) => {
    const result = jobFiltersSchema.safeParse(request.query);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }
    const orgId = getOrganizationId(request);
    const jobs = await jobService.list(orgId, result.data);
    return reply.send(jobs);
  });

  // Get job by ID
  fastify.get('/jobs/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const job = await jobService.getById(orgId, id);
    if (!job) throw new NotFoundError('Job', id);
    return reply.send(job);
  });

  // Cancel job
  fastify.delete('/jobs/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const job = await jobService.cancel(orgId, id);
    if (!job) throw new NotFoundError('Job', id);
    return reply.send(job);
  });

  // Retry job
  fastify.post('/jobs/:id/retry', async (request, reply) => {
    const { id } = request.params as { id: string };
    const orgId = getOrganizationId(request);
    const job = await jobService.retry(orgId, id);
    if (!job) throw new NotFoundError('Job', id);
    return reply.send(job);
  });
}
