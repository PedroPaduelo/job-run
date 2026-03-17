# 06-06 — Validação de IP para API Keys (IP Allowlist)

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Security Review

---

## Problema

API keys não têm restrição por IP. Uma key vazada pode ser usada de qualquer lugar. Adicionar IP allowlist por API key aumenta significativamente a segurança.

---

## Arquivos Afetados

- `backend-job-async/prisma/schema.prisma` — adicionar campo `allowedIps` em ApiKey
- `backend-job-async/src/domains/api-keys/api-keys.service.ts` — validar IP no uso
- `backend-job-async/src/middlewares/api-key-auth.ts` — checar IP ao autenticar

---

## Passos de Implementação

### 1. Adicionar campo no schema Prisma

```prisma
// schema.prisma
model ApiKey {
  id             String   @id @default(cuid())
  organizationId String
  name           String
  keyHash        String   @unique  // SHA-256 da key original
  allowedIps     String[] // Lista de IPs/CIDRs permitidos. Vazio = qualquer IP
  lastUsedAt     DateTime?
  expiresAt      DateTime?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

### 2. Validação no middleware de auth

```typescript
// src/middlewares/api-key-auth.ts
import ipRangeCheck from 'ip-range-check'; // npm install ip-range-check

export async function apiKeyAuth(req: FastifyRequest, reply: FastifyReply) {
  const apiKey = req.headers['x-api-key'] as string;

  if (!apiKey) {
    return reply.status(401).send({ error: 'API key required' });
  }

  const keyHash = sha256(apiKey);
  const storedKey = await prisma.apiKey.findUnique({ where: { keyHash } });

  if (!storedKey) {
    return reply.status(401).send({ error: 'Invalid API key' });
  }

  // Verificar IP se allowedIps estiver configurado
  if (storedKey.allowedIps.length > 0) {
    const clientIp = req.ip;

    const isAllowed = storedKey.allowedIps.some(allowedIp =>
      ipRangeCheck(clientIp, allowedIp)
    );

    if (!isAllowed) {
      return reply.status(403).send({
        error: 'IP not allowed for this API key',
        code: 'IP_NOT_ALLOWED',
        clientIp,
      });
    }
  }

  // Atualizar lastUsedAt
  await prisma.apiKey.update({
    where: { id: storedKey.id },
    data: { lastUsedAt: new Date() },
  });

  req.organizationId = storedKey.organizationId;
}
```

### 3. Schema de criação de API key

```typescript
export const createApiKeySchema = z.object({
  name: z.string().min(1).max(100),
  allowedIps: z.array(
    z.string().refine(
      (ip) => isValidIpOrCidr(ip),
      { message: 'Invalid IP address or CIDR' }
    )
  ).optional().default([]),
  expiresAt: z.string().datetime().optional(),
});

function isValidIpOrCidr(ip: string): boolean {
  // Validar IPv4, IPv6, CIDR (192.168.0.0/24)
  const ipv4 = /^(\d{1,3}\.){3}\d{1,3}(\/\d{1,2})?$/;
  const ipv6 = /^([0-9a-fA-F:]+)(\/\d{1,3})?$/;
  return ipv4.test(ip) || ipv6.test(ip);
}
```

---

## Testes de Validação

- [ ] API key com `allowedIps: []` → qualquer IP funciona
- [ ] API key com `allowedIps: ["192.168.1.1"]` → apenas 192.168.1.1 passa
- [ ] Request de IP diferente → 403 com `IP_NOT_ALLOWED`
- [ ] CIDR notation: `allowedIps: ["10.0.0.0/8"]` → IPs 10.x.x.x passam

---

## Definition of Done

- [ ] Campo `allowedIps` no banco
- [ ] Middleware valida IP ao usar API key
- [ ] Suporte a CIDR notation
- [ ] Testes de validação de IP passando

---

## Dependências

- **Pré-requisito:** 01-04 (hashear API keys)

## Tempo estimado: 2 horas
