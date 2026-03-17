# 06-01 — Validar Tamanho de Payload

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Validation Review

---

## Problema

Não há limite de tamanho para `payload` de jobs. Um job pode ser criado com payload de 50MB, o que derruba worker, enche o Redis e pode causar OOM.

---

## Arquivos Afetados

- `backend-job-async/src/schemas/job.schema.ts` — adicionar validação
- `backend-job-async/src/domains/jobs/jobs.routes.ts` — validar antes de criar

---

## Passos de Implementação

### 1. Adicionar validação no Zod schema

```typescript
// src/schemas/job.schema.ts
import { z } from 'zod';

export const createJobSchema = z.object({
  queueName: z.string().min(1).max(100),
  payload: z.string().max(1024 * 1024), // 1MB max
  scheduledAt: z.string().datetime().optional(),
  priority: z.number().int().min(0).max(10).optional(),
});
```

### 2. Validar antes de criar

```typescript
// src/domains/jobs/jobs.service.ts
export async function createJob(input: CreateJobInput) {
  const validated = createJobSchema.parse(input); // Lança erro se inválido

  // ... criar job
}
```

### 3. Retornar erro HTTP 413 se payload muito grande

```typescript
// src/domains/jobs/jobs.routes.ts
app.post('/jobs', async (req, reply) => {
  try {
    const job = await jobService.create(req.body);
    return reply.status(201).send(job);
  } catch (err) {
    if (err instanceof ZodError) {
      return reply.status(413).send({
        error: 'Payload too large',
        details: err.errors,
      });
    }
    throw err;
  }
});
```

### 4. Documentar limite no Swagger

```typescript
// src/domains/jobs/jobs.routes.ts
app.post('/jobs', {
  schema: {
    description: 'Create a new job',
    body: {
      type: 'object',
      properties: {
        payload: {
          type: 'string',
          maxLength: 1048576, // 1MB
          description: 'Job payload (max 1MB)',
        },
      },
    },
  }
});
```

---

## Testes de Validação

- [ ] Criar job com payload 1MB → sucesso
- [ ] Criar job com payload 1.1MB → 413 Payload too large
- [ ] Response com erro tem campo `error` e `details`

---

## Definition of Done

- [ ] Zod schema valida `payload.max(1MB)`
- [ ] Rota POST /jobs retorna 413 se payload > 1MB
- [ ] Swagger documenta limite de 1MB
- [ ] Teste unitário de validação de payload

---

## Dependências

- Independente

## Tempo estimado: 1 hora
