# 06-08 — Validar recurrenceEndDate no Futuro

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Recurring Jobs Review

---

## Problema

Campo `endDate` de recurring jobs aceita datas no passado. O scheduler pode deixar o recurring job ativo mas nunca criar jobs, ou desativar imediatamente, confundindo o usuário.

---

## Arquivos Afetados

- `backend-job-async/src/schemas/recurring-job.schema.ts` — validar data futura
- `frontend-job-async/src/pages/RecurringJobs.tsx` — validar no form

---

## Passos de Implementação

### 1. Validação no backend

```typescript
// src/schemas/recurring-job.schema.ts
export const createRecurringJobSchema = z.object({
  name: z.string().min(1).max(100),
  queueId: z.string().cuid(),
  recurrenceType: z.enum(['CRON', 'INTERVAL']),
  recurrenceValue: z.string(),
  maxRuns: z.number().int().positive().optional(),
  endDate: z.string().datetime().optional().refine(
    (date) => {
      if (!date) return true; // Opcional
      return new Date(date) > new Date();
    },
    { message: 'endDate must be a future date' }
  ),
  isActive: z.boolean().optional(),
});
```

### 2. Validação no frontend

```tsx
// RecurringJobs.tsx
const formSchema = z.object({
  endDate: z.string().optional().refine(
    (date) => {
      if (!date) return true;
      return new Date(date) > new Date();
    },
    { message: 'A data final deve ser no futuro' }
  ),
});
```

### 3. Erro claro

```typescript
// 400:
{
  "error": "Validation error",
  "code": "END_DATE_PAST",
  "message": "endDate must be a future date",
  "details": [{ "field": "endDate", "message": "A data final deve ser no futuro" }]
}
```

---

## Testes de Validação

- [ ] `endDate: null` → aceito
- [ ] `endDate: futuro` → aceito
- [ ] `endDate: passado` → 400
- [ ] Frontend: campo com data passada → erro inline

---

## Definition of Done

- [ ] Backend valida `endDate` no futuro
- [ ] Frontend mostra erro inline
- [ ] Mensagem em português

---

## Dependências

- Independente

## Tempo estimado: 30 minutos
