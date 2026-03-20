import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { statsService } from '../services/stats.service.js';
import { UnauthorizedError, ValidationError } from '../lib/errors.js';

function getOrganizationId(request: FastifyRequest): string {
  if (!request.organizationId) {
    throw new UnauthorizedError('Organization not found');
  }
  return request.organizationId;
}

export async function statsRoutes(fastify: FastifyInstance) {
  // Get overview stats
  fastify.get('/stats', async (request, reply) => {
    const orgId = getOrganizationId(request);
    const stats = await statsService.getOverview(orgId);
    return reply.send(stats);
  });

  // Get timeline stats
  fastify.get('/stats/timeline', async (request, reply) => {
    const { hours } = request.query as { hours?: string };
    const hoursNum = hours ? parseInt(hours, 10) : 24;

    if (isNaN(hoursNum) || hoursNum < 1 || hoursNum > 168) {
      throw new ValidationError('hours must be between 1 and 168');
    }

    const orgId = getOrganizationId(request);
    const timeline = await statsService.getTimeline(orgId, hoursNum);
    return reply.send(timeline);
  });
}
