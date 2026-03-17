# 03b-03 — Corrigir Loop Infinito Quando nextRunAt é Null

**Fase:** 03b — Features Críticas — Recurring Jobs
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Recurring Jobs Review

---

## Problema

Se `calculateNextRun()` retornar `null` (cron expression inválida), o `nextRunAt` não é atualizado. Na próxima execução do scheduler, o mesmo job é encontrado (pois `nextRunAt <= now` ainda) e cria novo job. **Loop infinito de criação de jobs.**

**Trecho problemático:**
```typescript
// scheduler.ts
const nextRunAt = this.calculateNextRun(type, interval, cronExpression);

if (nextRunAt) {
  await prisma.recurringJob.update({ data: { nextRunAt } });
  // ❌ Se nextRunAt é null, não atualiza → loop infinito
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — tratar null no calculateNextRun
- `backend-job-assync/src/services/recurring-job.service.ts` — mesma lógica

---

## Passos de Implementação

### 1. Tratar null no processRecurringJob
```typescript
private async processRecurringJob(recurringJob: any): Promise<void> {
  // ... validações de maxRuns, endDate, etc ...

  // Calcular próximo run
  const nextRunAt = this.calculateNextRun(
    recurringJob.recurrenceType,
    recurringJob.interval,
    recurringJob.cronExpression
  );

  if (!nextRunAt) {
    console.error(`[Scheduler] Cannot calculate nextRunAt for ${recurringJob.id}. Deactivating.`);
    await prisma.recurringJob.update({
      where: { id: recurringJob.id },
      data: { isActive: false },
    });
    return; // ❌ Não criar job, não entrar em loop
  }

  // Atualizar nextRunAt ANTES de criar o job (idempotência em restart)
  await prisma.recurringJob.update({
    where: { id: recurringJob.id },
    data: { nextRunAt },
  });

  // Criar o job filho
  // ...
}
```

### 2. Melhorar mensagem de erro
- [ ] Logar qual expressão foi inválida
- [ ] Enviar notificação (se houver sistema de alertas)

### 3. Validar expression na criação (tarefa 06-05)
- [ ] Esta tarefa é um band-aid. Tratar na raiz = validar na criação
- [ ] Ver tarefa 06-05 para validação no schema

---

## Testes de Validação

- [ ] Criar recorrência com cron expression inválida via DB (bypass API)
- [ ] Scheduler encontra ela → desativa automaticamente
- [ ] Zero jobs criados em loop

---

## Definition of Done

- [ ] `calculateNextRun` retornando null → recorrência desativada
- [ ] Log claro do motivo
- [ ] Zero loops infinitos com expression inválida

---

## Dependências

- Independente

## Tempo estimado: 1 hora
