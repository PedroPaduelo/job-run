# 06-07 — Implementar Rate Limit por API Key

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Security Review

---

## Problema

`@fastify/rate-limit` está instalado mas o rate limit é global por IP. Sem rate limit por API key, um cliente pode fazer spam de jobs derrubando o worker e o banco. Limite: **100 requests/minuto por API key**.

---

## Arquivos Afetados

- `backend-job-async/src/plugins/rate-limit.ts` — criar plugin de rate limit
- `backend-job-async/src/app.ts` — registrar plugin
- `backend-job-async/src/middlewares/api-key-auth.ts` — expor keyId para rate limit

---

## Passos de Implementação

### 1. Configurar @fastify/rate-limit com Redis

```typescript
// src/plugins/rate-limit.ts
import rateLimit from '@fastify/rate-limit';
import { redis } from '../lib/redis';

export async function rateLimitPlugin(app: FastifyInstance) {
  app.register(rateLimit, {
    global: false, // Não aplicar globalmente

    // Rate limit padrão por IP (segurança básica)
    max: 500,
    timeWindow: '1 minute',

    // Usar Redis para distribuído
    redis,

    // Identificar por API key se disponível, senão por IP
    keyGenerator: (req: FastifyRequest) => {
      const apiKeyId = (req as any).apiKeyId;
      if (apiKeyId) {
        return `ratelimit:apikey:${apiKeyId}`;
      }
      return `ratelimit:ip:${req.ip}`;
    },
  });
}
```

### 2. Rate limit específico para rotas de criação de jobs

```typescript
// src/domains/jobs/jobs.routes.ts
app.post('/jobs', {
  config: {
    rateLimit: {
      max: 100,           // 100 jobs por minuto por API key
      timeWindow: '1 minute',
    },
  },
  handler: async (req, reply) => {
    // ...
  }
});
```

### 3. Headers de rate limit na resposta

```typescript
// Headers automáticos do @fastify/rate-limit:
// X-RateLimit-Limit: 100
// X-RateLimit-Remaining: 87
// X-RateLimit-Reset: 1710000000000
```

### 4. Expor keyId no middleware de auth

```typescript
// src/middlewares/api-key-auth.ts
export async function apiKeyAuth(req: FastifyRequest, reply: FastifyReply) {
  // ... validar key ...

  req.organizationId = storedKey.organizationId;
  (req as any).apiKeyId = storedKey.id; // Para keyGenerator do rate limit
}
```

### 5. Resposta de rate limit excedido

```typescript
// 429 Too Many Requests:
{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Max 100 requests per minute.",
  "retryAfter": 30
}
```

---

## Testes de Validação

- [ ] Fazer 100 requests → 200 OK
- [ ] 101º request → 429 Too Many Requests
- [ ] Headers `X-RateLimit-Remaining` corretos
- [ ] API key diferente tem rate limit independente

---

## Definition of Done

- [ ] Rate limit de 100 req/min por API key
- [ ] Usa Redis para contador distribuído
- [ ] Headers de rate limit nas respostas
- [ ] 429 com mensagem de `retryAfter`
- [ ] Testes passando

---

## Dependências

- **Pré-requisito:** 02-02 (Redis configurado)

## Tempo estimado: 2 horas
