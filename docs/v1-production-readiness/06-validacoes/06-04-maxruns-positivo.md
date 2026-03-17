# 06-04 — Validar maxRuns > 0 em Recurring Jobs

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Recurring Jobs Review

---

## Problema

Campo `maxRuns` de recurring jobs aceita `0` ou valores negativos. Scheduler cria jobs infinitamente, nunca desativando o recurring job.

---

## Arquivos Afetados

- `backend-job-async/src/schemas/recurring-job.schema.ts` — adicionar validação
- `frontend-job-async/src/pages/RecurringJobs.tsx` — validar no form

---

## Passos de Implementação

### 1. Backend Zod schema

```typescript
// src/schemas/recurring-job.schema.ts
export const createRecurringJobSchema = z.object({
  name: z.string().min(1).max(100),
  queueId: z.string().cuid(),
  recurrenceType: z.enum(['CRON', 'INTERVAL']),
  recurrenceValue: z.string(),
  maxRuns: z.number().int().positive().optional(), // > 0
  endDate: z.string().datetime().optional(),
  isActive: z.boolean().optional(),
});
```

### 2. Frontend form validation

```tsx
// RecurringJobs.tsx ou componente
const formSchema = z.object({
  maxRuns: z.number({
    required_error: 'maxRuns é obrigatório',
    invalid_type_error: 'maxRuns deve ser um número',
  }).positive('maxRuns deve ser maior que 0'),
});
```

### 3. Erro amigável

```typescript
// 400:
{
  "error": "Validation error",
  "code": "MAX_RUNS_INVALID",
  "message": "maxRuns must be a positive integer",
  "details": [{ "field": "maxRuns", "message": "maxRuns deve ser maior que 0" }]
}
```

---

## Testes de Validação

- [ ] `maxRuns: 1` → aceito
- [ ] `maxRuns: 100` → aceito
- [ ] `maxRuns: 0` → 400
- [ ] `maxRuns: -5` → 400
- [ ] `maxRuns: null` → 400 (se required)

---

## Definition of Done

- [ ] Backend valida `maxRuns > 0`
- [ ] Frontend mostra erro inline
- [ ] Testes passando

---

## Dependências

- Independente

## Tempo estimado: 30 minutos
