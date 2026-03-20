import 'dotenv/config';
import Fastify, { type FastifyRequest, type FastifyReply } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { initSentry, captureError, flushSentry } from './lib/sentry.js';
import { verifyJWT, getUserOrganizations, buildAuthenticatedUser, logAudit, type AuthenticatedUser, PERMISSIONS, hasPermission } from './lib/auth.js';
import { checkRateLimit } from './lib/rate-limiter.js';
import { isIpAllowed } from './lib/ip-allowlist.js';
import { prisma } from './lib/prisma.js';
import { redis } from './lib/redis.js';
import { createLogger } from './lib/logger.js';
import { AppError, NotFoundError, ValidationError, UnauthorizedError, ForbiddenError, ConflictError, RateLimitError } from './lib/errors.js';
import { jobRoutes } from './routes/jobs.js';
import { queueRoutes } from './routes/queues.js';
import apiKeysRoutes from './routes/apikeys.js';
import { statsRoutes } from './routes/stats.js';
import { recurringJobRoutes } from './routes/recurring-jobs.js';
import { randomUUID } from 'crypto';

const log = createLogger({ service: 'server' });

declare module 'fastify' {
  interface FastifyRequest {
    organizationId?: string;
    userId?: string;
    apiKeyId?: string;
    user?: AuthenticatedUser;
    permissions?: string[];
  }
}

initSentry();

const fastify = Fastify({
  logger: true,
  genReqId: () => randomUUID(),
});

await fastify.register(cors, {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Organization-Id'],
});

// Security headers — CSP strict, disable content sniffing
await fastify.register(helmet, {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "https://job-assync-api.ddw1sl.easypanel.host"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: process.env.NODE_ENV === 'production',
});

await fastify.register(rateLimit, {
  max: 1000,
  timeWindow: '1 minute',
  keyGenerator: (request) => request.organizationId || request.ip,
});

await fastify.register(swagger, {
  openapi: {
    info: { title: 'JobSync API', description: 'JobSync API', version: '2.0.0' },
    servers: [{ url: 'http://localhost:3001' }],
  },
});

await fastify.register(swaggerUi, { routePrefix: '/docs', uiConfig: { docExpansion: 'full' } });

fastify.get('/health', async () => ({ status: 'ok', uptime: process.uptime() }));

fastify.get('/ready', async (_, reply) => {
  try {
    const redisOk = (await redis.ping()) === 'PONG';
    const dbOk = await prisma.$queryRaw`SELECT 1`;
    if (!redisOk || !dbOk) return reply.status(503).send({ status: 'not_ready', redis: redisOk, database: !!dbOk });
    return { status: 'ready', redis: redisOk, database: !!dbOk, uptime: process.uptime() };
  } catch (error) {
    return reply.status(503).send({ status: 'not_ready', error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

fastify.addHook('onRequest', async (request, reply) => {
  if (request.url === '/health' || request.url === '/ready' || request.url.startsWith('/docs')) return;

  const authHeader = request.headers.authorization;
  const orgIdHeader = request.headers['x-organization-id'] as string | undefined;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Missing authorization header');
  }

  const token = authHeader.substring(7);
  const apiKey = await prisma.apiKey.findUnique({ where: { key: token }, include: { organization: true } });

  if (apiKey) {
    if (!apiKey.isActive) {
      await logAudit({ organizationId: apiKey.organizationId, action: 'apikey.auth.failed', entityType: 'ApiKey', entityId: apiKey.id, metadata: { reason: 'inactive' }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
      throw new UnauthorizedError('API key is inactive');
    }
    if (apiKey.expiresAt && apiKey.expiresAt < new Date()) {
      await logAudit({ organizationId: apiKey.organizationId, action: 'apikey.auth.failed', entityType: 'ApiKey', entityId: apiKey.id, metadata: { reason: 'expired' }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
      throw new UnauthorizedError('API key has expired');
    }
    if (apiKey.allowedIps.length > 0 && !apiKey.allowedIps.includes(request.ip)) {
      await logAudit({ organizationId: apiKey.organizationId, action: 'apikey.auth.failed', entityType: 'ApiKey', entityId: apiKey.id, metadata: { reason: 'ip_not_allowed', ip: request.ip }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
      throw new ForbiddenError('IP not allowed');
    }
    await prisma.apiKey.update({ where: { id: apiKey.id }, data: { lastUsedAt: new Date(), usageCount: { increment: 1 } } });
    request.organizationId = apiKey.organizationId;
    request.apiKeyId = apiKey.id;
    request.permissions = apiKey.permissions;
    if (!isIpAllowed(request.ip)) {
      const rateLimitConfig = apiKey.rateLimit ? { tokensPerMinute: apiKey.rateLimit, bucketSize: apiKey.rateLimit } : undefined;
      const rateLimitResult = await checkRateLimit(`apikey:${apiKey.id}`, rateLimitConfig);
      (request as any).rateLimitResult = rateLimitResult;
      if (!rateLimitResult.allowed) {
        await logAudit({ organizationId: apiKey.organizationId, action: 'ratelimit.exceeded', entityType: 'ApiKey', entityId: apiKey.id, metadata: { ip: request.ip }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
        const retryAfter = rateLimitResult.resetAt ? Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000) : 60;
        reply.header('X-RateLimit-Limit', rateLimitResult.limit);
        reply.header('X-RateLimit-Remaining', 0);
        reply.header('X-RateLimit-Reset', rateLimitResult.resetAt?.getTime() || Date.now() + 60000);
        reply.header('Retry-After', retryAfter.toString());
        throw new RateLimitError(retryAfter);
      }
    }
    return;
  }

  try {
    const decoded = await verifyJWT(token);
    let orgId = orgIdHeader || decoded.organizationId || (decoded as any).org_id || (decoded as any).organization_id;
    if (!orgId) {
      const userOrgs = await getUserOrganizations(token);
      if (userOrgs.length === 0) throw new UnauthorizedError('No organization found for user');
      orgId = userOrgs[0];
    }
    const authUser = await buildAuthenticatedUser(token, decoded as any, orgId);
    request.organizationId = orgId;
    request.userId = authUser.userId;
    request.user = authUser;
    request.permissions = authUser.permissions;
    if (!isIpAllowed(request.ip)) {
      const jwtRateLimit = parseInt(process.env.JWT_RATE_LIMIT_PER_MIN || '1000', 10);
      const rateLimitResult = await checkRateLimit(`jwt:${orgId}`, { tokensPerMinute: jwtRateLimit, bucketSize: jwtRateLimit });
      (request as any).rateLimitResult = rateLimitResult;
      if (!rateLimitResult.allowed) {
        await logAudit({ userId: authUser.userId, organizationId: orgId, action: 'ratelimit.exceeded', metadata: { ip: request.ip }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
        const retryAfter = rateLimitResult.resetAt ? Math.ceil((rateLimitResult.resetAt.getTime() - Date.now()) / 1000) : 60;
        reply.header('X-RateLimit-Limit', rateLimitResult.limit);
        reply.header('X-RateLimit-Remaining', 0);
        reply.header('X-RateLimit-Reset', rateLimitResult.resetAt?.getTime() || Date.now() + 60000);
        reply.header('Retry-After', retryAfter.toString());
        throw new RateLimitError(retryAfter);
      }
    }
    await logAudit({ userId: authUser.userId, organizationId: orgId, action: 'user.auth.success', ipAddress: request.ip, userAgent: request.headers['user-agent'] });
  } catch (error) {
    if (error instanceof AppError) throw error;
    const message = error instanceof Error ? error.message : 'Invalid token';
    throw new UnauthorizedError(message);
  }
});

// Hook onSend: adiciona X-Request-Id em todas as respostas
fastify.addHook('onSend', async (request, reply) => {
  if (request.id) {
    reply.header('X-Request-Id', request.id as string);
  }
});

// Hook onResponse: adiciona headers de rate limit em todas as respostas
fastify.addHook('onResponse', async (request, reply) => {
  // Se o rate limit foi verificado, adicionar headers
  const rateLimitResult = (request as any).rateLimitResult;
  if (rateLimitResult) {
    reply.header('X-RateLimit-Limit', rateLimitResult.limit);
    reply.header('X-RateLimit-Remaining', rateLimitResult.remaining);
    if (rateLimitResult.resetAt) {
      reply.header('X-RateLimit-Reset', rateLimitResult.resetAt.getTime());
    }
  }
});

fastify.setErrorHandler((error, request, reply) => {
  const requestId = request.id as string | undefined;
  const statusCode = (error as AppError).statusCode || (error as any).statusCode || 500;
  const code = (error as AppError).code || 'INTERNAL_ERROR';
  const isAppError = error instanceof AppError;
  const isServerError = statusCode >= 500;

  // Logar com contexto completo — erros 5xx em error, 4xx em warn
  const logContext = {
    requestId,
    method: request.method,
    url: request.url,
    statusCode,
    code,
    organizationId: request.organizationId,
    userId: request.userId,
    apiKeyId: request.apiKeyId,
    ip: request.ip,
    error: error.message,
    ...(isServerError && { stack: error.stack }),
  };

  if (isServerError) {
    log.error('Unhandled server error', logContext);
    captureError(error, { url: request.url, method: request.method, organizationId: request.organizationId, userId: request.userId, requestId });
  } else {
    log.warn('Request error', logContext);
  }

  // Audit log para erros que têm contexto de organização
  if (request.organizationId && isServerError) {
    logAudit({
      userId: request.userId,
      organizationId: request.organizationId,
      action: 'error.server',
      metadata: { url: request.url, method: request.method, message: error.message, requestId },
      ipAddress: request.ip,
      userAgent: request.headers['user-agent'],
      status: 'FAILURE',
    });
  }

  // Em produção, não expor detalhes de erros 5xx
  const message = process.env.NODE_ENV === 'production' && isServerError && !isAppError
    ? 'Internal Server Error'
    : error.message;

  const body: Record<string, unknown> = {
    error: message,
    code,
    requestId,
  };

  // Incluir detalhes de validação
  if ((error as AppError).details) {
    body.details = (error as AppError).details;
  }

  reply.status(statusCode).send(body);
});

export function requirePermission(permission: string) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const userPermissions = request.permissions || [];
    if (!hasPermission(userPermissions, permission)) {
      await logAudit({ userId: request.userId, organizationId: request.organizationId, action: 'permission.denied', metadata: { required: permission, had: userPermissions }, ipAddress: request.ip, userAgent: request.headers['user-agent'], status: 'DENIED' });
      return reply.status(403).send({ error: 'Forbidden', message: `Missing permission: ${permission}` });
    }
  };
}

export { PERMISSIONS, hasPermission };
export { AppError, NotFoundError, ValidationError, UnauthorizedError, ForbiddenError, ConflictError, RateLimitError } from './lib/errors.js';

await fastify.register(async (app) => {
  await app.register(jobRoutes);
  await app.register(queueRoutes);
  await app.register(statsRoutes);
  await app.register(apiKeysRoutes, { prefix: '/apikeys' });
  await app.register(recurringJobRoutes, { prefix: '/recurring-jobs' });
}, { prefix: '/api' });

const start = async () => {
  try {
    // Usar API_PORT em vez de PORT para evitar conflito com PORT do shell (ex: Orquestrador)
    const port = parseInt(process.env.API_PORT || process.env.PORT || '3003', 10);
    await fastify.listen({ port, host: '0.0.0.0' });
    log.info(`Server running on port ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

process.on('SIGTERM', async () => {
  log.info('SIGTERM received, shutting down...');
  await flushSentry();
  await fastify.close();
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  log.info('SIGINT received, shutting down...');
  await flushSentry();
  await fastify.close();
  await prisma.$disconnect();
  process.exit(0);
});

start();
