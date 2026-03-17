# 06-02 — Validar callbackUrl HTTPS em Produção

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Security Review

---

## Problema

O campo `callbackUrl` de queues aceita qualquer URL, incluindo `http://` e URLs internas como `http://localhost:3000`, `http://169.254.169.254` (metadata de cloud). Isso abre vetor de SSRF (Server-Side Request Forgery) e envia dados de jobs para URLs não-HTTPS em produção.

---

## Arquivos Afetados

- `backend-job-async/src/schemas/queue.schema.ts` — adicionar validação de URL
- `backend-job-async/src/domains/queues/queues.service.ts` — validar ao criar/atualizar

---

## Passos de Implementação

### 1. Validação HTTPS + URL blocking no Zod

```typescript
// src/schemas/queue.schema.ts
import { z } from 'zod';

const BLOCKED_HOSTS = [
  'localhost',
  '127.0.0.1',
  '0.0.0.0',
  '169.254.169.254', // AWS metadata
  '::1',
  '10.',
  '192.168.',
  '172.16.',
];

function isBlockedHost(url: string): boolean {
  try {
    const parsed = new URL(url);
    return BLOCKED_HOSTS.some(blocked => parsed.hostname.startsWith(blocked));
  } catch {
    return true;
  }
}

export const createQueueSchema = z.object({
  name: z.string().min(1).max(100),
  callbackUrl: z
    .string()
    .url()
    .refine(
      (url) => {
        const isProd = process.env.NODE_ENV === 'production';
        if (isProd) {
          return url.startsWith('https://') && !isBlockedHost(url);
        }
        return !isBlockedHost(url);
      },
      {
        message: 'callbackUrl must be HTTPS and cannot point to internal/local hosts',
      }
    ),
  maxRetries: z.number().int().min(0).max(20).optional(),
  retryDelay: z.number().int().min(0).optional(),
  timeout: z.number().int().min(1000).max(300000).optional(),
});
```

### 2. Aplicar validação ao criar e atualizar queue

```typescript
// queues.service.ts
export async function createQueue(input: unknown) {
  const validated = createQueueSchema.parse(input);
  // ...
}

export async function updateQueue(id: string, input: unknown) {
  const validated = updateQueueSchema.parse(input); // Schema parcial
  // ...
}
```

### 3. Resposta amigável ao usuario

```typescript
// 400 Bad Request com mensagem clara:
{
  "error": "Validation error",
  "code": "INVALID_CALLBACK_URL",
  "message": "callbackUrl deve ser HTTPS e não pode apontar para hosts internos",
  "details": [{ "field": "callbackUrl", "message": "..." }]
}
```

---

## Testes de Validação

- [ ] `callbackUrl: "https://api.example.com/cb"` → aceito
- [ ] `callbackUrl: "http://api.example.com/cb"` → 400 (em produção)
- [ ] `callbackUrl: "http://localhost:3000/cb"` → 400
- [ ] `callbackUrl: "http://169.254.169.254/latest"` → 400 (SSRF block)
- [ ] `callbackUrl: "http://192.168.0.1/cb"` → 400 (internal block)

---

## Definition of Done

- [ ] Produção: apenas HTTPS aceito para callbackUrl
- [ ] IPs internos e localhost bloqueados
- [ ] Erro 400 com mensagem clara
- [ ] Testes de validação passando

---

## Dependências

- Independente

## Tempo estimado: 1 hora
