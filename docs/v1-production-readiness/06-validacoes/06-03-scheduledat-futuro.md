# 06-03 — Validar scheduledAt no Futuro

**Fase:** 06 — Validações
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Validation Review

---

## Problema

Campo `scheduledAt` de jobs aceita datas no passado. Um job com `scheduledAt` de 2020 é criado como se fosse agendado, mas o worker o processa imediatamente. Usuário pode enviar datas inválidas sem feedback.

---

## Arquivos Afetados

- `backend-job-async/src/schemas/job.schema.ts` — validar data futura
- `frontend-job-async/src/pages/Jobs.tsx` — validar no form antes de enviar

---

## Passos de Implementação

### 1. Validação no backend (Zod)

```typescript
// src/schemas/job.schema.ts
export const createJobSchema = z.object({
  queueName: z.string().min(1).max(100),
  payload: z.string().max(1024 * 1024),
  scheduledAt: z.string().datetime().optional().refine(
    (date) => {
      if (!date) return true; // Opcional, tudo bem sem
      return new Date(date) > new Date();
    },
    { message: 'scheduledAt must be a future date' }
  ),
  priority: z.number().int().min(0).max(10).optional(),
});
```

### 2. Validação no frontend (formulário)

```tsx
// src/pages/Jobs.tsx ou componente de criação
const formSchema = z.object({
  scheduledAt: z.string().optional().refine(
    (date) => {
      if (!date) return true;
      return new Date(date) > new Date();
    },
    { message: 'A data de agendamento deve ser no futuro' }
  ),
});
```

### 3. Resposta de erro clara

```typescript
// 400 Bad Request:
{
  "error": "Validation error",
  "code": "SCHEDULED_AT_PAST",
  "message": "scheduledAt must be a future date",
  "details": [{
    "field": "scheduledAt",
    "received": "2020-01-01T00:00:00Z",
    "message": "scheduledAt must be a future date"
  }]
}
```

---

## Testes de Validação

- [ ] `scheduledAt: null` → aceito (job imediato)
- [ ] `scheduledAt: futuro` → aceito
- [ ] `scheduledAt: passado` → 400 com mensagem clara
- [ ] Frontend: campo com data passada → erro inline no form

---

## Definition of Done

- [ ] Backend rejeita `scheduledAt` no passado
- [ ] Frontend mostra erro no form antes de enviar
- [ ] Mensagem de erro em português no frontend

---

## Dependências

- Independente

## Tempo estimado: 30 minutos
