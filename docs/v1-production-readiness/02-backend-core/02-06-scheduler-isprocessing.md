# 02-06 — Prevenir Concorrência no Scheduler (isProcessing Flag)

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Backend Core Review, Recurring Jobs Review

---

## Problema

Se `checkAndCreateJobs()` demorar mais que o interval, múltiplas execuções podem ocorrer simultaneamente → **jobs duplicados**.

**Trecho problemático:**
```typescript
// scheduler.ts — sem flag de concorrência
private async checkAndCreateJobs(): Promise<void> {
  // ❌ Se estiver demorando, próximo tick inicia outra execução
  const dueJobs = await prisma.recurringJob.findMany(/* ... */);
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — adicionar flag `isProcessing`

---

## Passos de Implementação

### 1. Adicionar flag de processamento
```typescript
export class RecurringJobScheduler {
  private isProcessing = false;

  private async checkAndCreateJobs(): Promise<void> {
    if (this.isProcessing) {
      console.log('[Scheduler] Previous run still in progress, skipping');
      return;
    }

    this.isProcessing = true;

    try {
      // ... lógica existente ...
    } finally {
      this.isProcessing = false;
    }
  }
}
```

### 2. Adicionar timeout de segurança
- [ ] Se `isProcessing` ficar travado em `true` (ex: crash), adicionar TTL
- [ ] Guardar timestamp de último início
- [ ] Se passou > 60s, considerar como `false` e logar warning

```typescript
private processingStartTime: number | null = null;

private async checkAndCreateJobs(): Promise<void> {
  if (this.isProcessing) {
    const elapsed = Date.now() - (this.processingStartTime || 0);
    if (elapsed > 60000) {
      console.warn('[Scheduler] Processing stuck, resetting flag');
      this.isProcessing = false;
    } else {
      return;
    }
  }

  this.isProcessing = true;
  this.processingStartTime = Date.now();

  try {
    // ... lógica ...
  } finally {
    this.isProcessing = false;
    this.processingStartTime = null;
  }
}
```

---

## Testes de Validação

- [ ] Scheduler roda normalmente com isProcessing flag
- [ ] Se ciclo demorar > 30s, próximo tick é pulado
- [ ] Se processamento travar, flag reseta após 60s
- [ ] Zero duplicações com execução lenta

---

## Definition of Done

- [ ] `isProcessing` flag previne concorrência
- [ ] Log quando ciclo é pulado por estar em andamento
- [ ] Timeout de segurança de 60s
- [ ] Zero duplicações em execução lenta

---

## Dependências

- Deve ser feito após **02-04** (trocar para setInterval)

## Tempo estimado: 1 hora
