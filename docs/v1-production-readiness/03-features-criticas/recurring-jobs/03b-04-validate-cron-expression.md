# 03b-04 — Validar Cron Expression na Criação

**Fase:** 03b — Features Críticas — Recurring Jobs
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Recurring Jobs Review

---

## Problema

Schema Zod aceita qualquer string para `cronExpression`. Cron inválido é salvo, scheduler falha silenciosamente calculando nextRunAt errado.

**Trecho problemático:**
```typescript
// types/index.ts
cronExpression: z.string().optional(), // ❌ Qualquer string aceita
```

---

## Arquivos Afetados

- `backend-job-assync/src/types/index.ts` — validar cron
- `backend-job-assync/package.json` — adicionar cron-parser
- `frontend-job-async/src/pages/RecurringJobs.tsx` — validação no frontend

---

## Passos de Implementação

### 1. Backend — validar com cron-parser
```typescript
// npm install cron-parser (já necessário em 03b-02)
import cronParser from 'cron-parser';

function isValidCronExpression(expression: string): boolean {
  try {
    cronParser.parseExpression(expression);
    return true;
  } catch {
    return false;
  }
}

// No schema Zod:
cronExpression: z.string().refine(
  (val) => isValidCronExpression(val),
  { message: 'Expressão cron inválida. Ex: "0 9 * * *" (todo dia às 9h)' }
).optional(),
```

### 2. Frontend — validar antes de enviar
```typescript
// RecurringJobs.tsx
if (newJob.recurrenceType === 'CRON') {
  try {
    cronParser.parseExpression(newJob.cronExpression);
  } catch {
    toast.error('Expressão cron inválida. Ex: "0 9 * * *"');
    return;
  }
}
```

### 3. Adicionar exemplos no UI
- [ ] Campo cron expression → placeholder com exemplos:
  - `*/5 * * * *` — a cada 5 minutos
  - `0 9 * * 1-5` — todo dia útil às 9h
  - `0 0 * * *` — todo dia à meia-noite

---

## Testes de Validação

- [ ] POST /recurring-jobs com cron `"foo bar"` → 400 Bad Request
- [ ] POST com cron `"0 9 * * *"` → 201 Created
- [ ] Frontend valida antes de enviar
- [ ] Placeholder com exemplos visível no UI

---

## Definition of Done

- [ ] Cron inválido no backend → 400 com mensagem clara
- [ ] Cron inválido no frontend → toast antes de enviar
- [ ] Exemplos de cron no placeholder do input
- [ ] `cron-parser` instalado e funcionando

---

## Dependências

- Deve ser feito após **03b-02** (corrigir require → import cron-parser)

## Tempo estimado: 1 hora
