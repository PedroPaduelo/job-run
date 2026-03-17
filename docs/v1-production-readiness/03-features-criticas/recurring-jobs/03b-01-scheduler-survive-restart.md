# 03b-01 — Garantir Scheduler State Após Worker Restart

**Fase:** 03b — Features Críticas — Recurring Jobs
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 3 horas
**Agente que identificou:** Recurring Jobs Review

---

## Problema

O scheduler é reiniciado no worker, mas quando o worker restarta (crash, deploy, etc.), o estado é perdido. Não há persistência de lock ou coordenação distribuída.

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — estado baseado em Redis
- `backend-job-assync/src/worker.ts` — lógica de restart

---

## Passos de Implementação

### 1. O estado que importa persistir
- O scheduler NÃO precisa persistir estado de tick — ele apenas verifica `nextRunAt` no banco
- O que importa é que após restart, o scheduler:
  a) Inicia rapidamente (< 30s) e retoma os ciclos
  b) Não cria jobs duplicados de recorrências que já foram processadas

### 2. Verificar que `nextRunAt` é a fonte de verdade
- [ ] Abrir `recurring-job.service.ts` — `processRecurringJob`
- [ ] Confirmar que `nextRunAt` é atualizado ANTES de criar o job
- [ ] Se `nextRunAt` for atualizado DEPOIS, corrigir para ser ANTES

```typescript
// ORDEM CORRETA:
// 1. Calcular próximo nextRunAt
// 2. Atualizar nextRunAt no banco
// 3. Criar o Job filho
// (Assim, se crashar em 3, não cria duplicado no restart)
```

### 3. Lidar com downtime: `nextRunAt` no passado
- [ ] Quando worker volta e tem muitas recorrências atrasadas, pode criar pico
- [ ] Implementar: se `nextRunAt` está mais de 1 ciclo no passado, ignorar runs perdidos
- [ ] Apenas atualizar `nextRunAt` para o próximo tempo futuro

```typescript
private async processRecurringJob(recurringJob: any): Promise<void> {
  // Se nextRunAt está muito no passado (> 2 ciclos), pular execuções perdidas
  const cycleMs = this.config.intervalMs * 2;
  const isPastThreshold = now.getTime() - recurringJob.nextRunAt.getTime() > cycleMs;

  if (isPastThreshold) {
    console.warn(`[Scheduler] Skipping missed runs for ${recurringJob.name}, updating nextRunAt`);
    // Apenas atualizar nextRunAt sem criar job
    const nextRunAt = this.calculateNextRun(/* ... */);
    await prisma.recurringJob.update({ data: { nextRunAt } });
    return;
  }

  // ... criar job normalmente
}
```

---

## Testes de Validação

- [ ] Worker reinicia → scheduler retoma em < 30s
- [ ] Recorrência com `nextRunAt` há 5min → 1 job criado (não 5)
- [ ] Recorrência com `nextRunAt` há 2h → pula, atualiza nextRunAt
- [ ] Zero duplicação após restart

---

## Definition of Done

- [ ] `nextRunAt` atualizado ANTES de criar o job
- [ ] Worker restart → scheduler retoma sem duplicações
- [ ] Downtime longo → recorrências "catcham" sem pico
- [ ] Log claro de runs perdidos/pulados

---

## Dependências

- Deve ser feito após **02-05** (lock Redis) e **02-04** (setInterval)

## Tempo estimado: 3 horas
