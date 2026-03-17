# 06-05 — Sanitizar Nome de Fila (SQL Injection + Slug)

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Security Review

---

## Problema

Campo `name` de queues aceita caracteres especiais, espaços, e sequências SQL. Ex: `"; DROP TABLE queues; --`, `test queue`, `queue<script>`. Isso pode causar:

1. **SQL Injection** se o nome for usado em queries dinâmicas (mesmo com Prisma, é boa prática prevenir)
2. **Conflito com Redis keys** se nome tiver espaços ou caracteres especiais
3. **UI/UX ruim** ao exibir nomes sujos no frontend

---

## Arquivos Afetados

- `backend-job-async/src/schemas/queue.schema.ts` — sanitizar nome
- `backend-job-async/src/domains/queues/queues.service.ts` — aplicar slugify

---

## Passos de Implementação

### 1. Slugify do nome antes de criar

```typescript
// src/domains/queues/queues.service.ts
import slugify from 'slugify';

export async function createQueue(input: CreateQueueInput) {
  // Sanitizar nome
  const sanitized = slugify(input.name, {
    lower: true,
    strict: true, // Remove caracteres especiais
    replacement: '-', // Espaços e especiais vira '-'
  });

  // Criar queue com nome sanitizado
  const queue = await prisma.queue.create({
    data: {
      ...input,
      name: sanitized,
    },
  });

  return queue;
}
```

### 2. Validação no Zod schema

```typescript
// src/schemas/queue.schema.ts
export const createQueueSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .transform((val) => slugify(val, { lower: true, strict: true, replacement: '-' }))
    .refine((val) => /^[a-z0-9-]+$/.test(val), {
      message: 'Nome deve conter apenas letras, números e hífens',
    }),
  // ...
});
```

### 3. Documentar sanitização

```typescript
// Swagger/OpenAPI
{
  "name": {
    "type": "string",
    "description": "Nome da fila (será sanitizado: lowercase, apenas a-z0-9-)",
    "example": "minha-fila-production"
  }
}
```

### 4. Instalar slugify se necessário

```bash
npm install slugify
```

---

## Testes de Validação

- [ ] `name: "Minha Fila Production"` → sanitizado para `minha-fila-production`
- [ ] `name: "test queue 123"` → `test-queue-123`
- [ ] `name: "queue<script>"` → `queuescript`
- [ ] `name: "queue; DROP TABLE"` → `queue-drop-table`
- [ ] `name: "QUEUE"` → `queue` (lowercase)

---

## Definition of Done

- [ ] Nomes de queues são sempre sanitizados (slugify)
- [ ] Apenas `[a-z0-9-]` permitido
- [ ] Testes de sanitização passando
- [ ] Swagger documenta comportamento

---

## Dependências

- Independente

## Tempo estimado: 1 hora
