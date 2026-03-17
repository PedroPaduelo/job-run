# 02-04 — Trocar CronJob por setInterval no Scheduler

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Backend Core Review, Recurring Jobs Review

---

## Problema

CronJob com sintaxe `*/${intervalMs / 1000} * * * * *` (6 campos) é problemático e pode gerar jobs fora do tempo esperado. `setInterval()` é mais simples e previsível.

**Trecho problemático:**
```typescript
// scheduler.ts
this.cronJob = new CronJob(`*/${this.config.intervalMs / 1000} * * * * *`, async () => {
  await this.checkAndCreateJobs();
});
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — trocar CronJob por setInterval

---

## Passos de Implementação

### 1. Remover dependência de 'cron'
- [ ] Verificar se é usada em outro lugar (ex: calculateNextRun)
- [ ] Se for apenas no scheduler, remover do package.json

### 2. Trocar para setInterval
```typescript
export class RecurringJobScheduler {
  private intervalId: NodeJS.Timeout | null = null;

  start(): void {
    if (this.isRunning) return;

    this.intervalId = setInterval(async () => {
      await this.checkAndCreateJobs();
    }, this.config.intervalMs);

    this.isRunning = true;
    console.log('[Scheduler] Started');
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    console.log('[Scheduler] Stopped');
  }
}
```

### 3. Manter calculateNextRun intacto
- [ ] Se `calculateNextRun` usa `cron` library para expressões CRON, manter
- [ ] Apenas o tick de execução muda

### 4. Adicionar try-catch no interval
```typescript
this.intervalId = setInterval(async () => {
  try {
    await this.checkAndCreateJobs();
  } catch (error) {
    console.error('[Scheduler] Error in checkAndCreateJobs:', error);
    // ❌ NÃO parar o scheduler, apenas logar
  }
}, this.config.intervalMs);
```

---

## Testes de Validação

- [ ] Scheduler inicia e roda a cada 30s
- [ ] Recorrência com `interval: 2` (minutos) → jobs criados a cada 2min
- [ ] Recorrência CRON → nextRunAt calculado corretamente
- [ ] Erro em um job não para o scheduler
- [ ] Scheduler pode ser parado e reiniciado

---

## Definition of Done

- [ ] `setInterval` usado ao invés de `CronJob`
- [ ] Scheduler não para com erro individual
- [ ] Jobs criados no intervalo correto
- [ ] Expressões CRON ainda funcionam

---

## Dependências

- Independente

## Tempo estimado: 1 hora
