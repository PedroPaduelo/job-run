import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { apiKeyService } from '../services/apikey.service.js';
import { NotFoundError, UnauthorizedError, ValidationError } from '../lib/errors.js';

// Schemas
const createApiKeySchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  permissions: z.array(z.string()).optional(),
  allowedDomains: z.array(z.string()).optional(),
  allowedIps: z.array(z.string()).optional(),
  rateLimit: z.number().int().positive().optional(),
  expiresAt: z.string().datetime().optional(),
});

const updateApiKeySchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  permissions: z.array(z.string()).optional(),
  allowedDomains: z.array(z.string()).optional(),
  allowedIps: z.array(z.string()).optional(),
  rateLimit: z.number().int().positive().nullable().optional(),
  isActive: z.boolean().optional(),
  expiresAt: z.string().datetime().nullable().optional(),
});

function getOrganizationId(request: FastifyRequest): string {
  if (!request.organizationId) {
    throw new UnauthorizedError('Organization required');
  }
  return request.organizationId;
}

export default async function apiKeysRoutes(fastify: FastifyInstance) {
  // GET /api/apikeys - List all API keys
  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);
    const apiKeys = await apiKeyService.list(organizationId);
    return apiKeys;
  });

  // GET /api/apikeys/:id - Get a specific API key
  fastify.get('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);
    const apiKey = await apiKeyService.getById(organizationId, request.params.id);
    if (!apiKey) throw new NotFoundError('API key', request.params.id);
    return apiKey;
  });

  // POST /api/apikeys - Create a new API key
  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);
    const userId = request.userId;

    const result = createApiKeySchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }

    const apiKey = await apiKeyService.create(organizationId, userId, {
      ...result.data,
      expiresAt: result.data.expiresAt ? new Date(result.data.expiresAt) : undefined,
    });

    return reply.status(201).send(apiKey);
  });

  // PATCH /api/apikeys/:id - Update an API key
  fastify.patch('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);

    const result = updateApiKeySchema.safeParse(request.body);
    if (!result.success) {
      throw new ValidationError('Validation error', result.error.flatten());
    }

    const apiKey = await apiKeyService.update(organizationId, request.params.id, {
      ...result.data,
      expiresAt: result.data.expiresAt === null ? null : result.data.expiresAt ? new Date(result.data.expiresAt) : undefined,
    });
    return apiKey;
  });

  // DELETE /api/apikeys/:id - Delete an API key permanently
  fastify.delete('/:id', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);
    await apiKeyService.delete(organizationId, request.params.id);
    return reply.status(204).send();
  });

  // POST /api/apikeys/:id/revoke - Revoke (deactivate) an API key
  fastify.post('/:id/revoke', async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const organizationId = getOrganizationId(request);
    const apiKey = await apiKeyService.revoke(organizationId, request.params.id);
    return apiKey;
  });
}
