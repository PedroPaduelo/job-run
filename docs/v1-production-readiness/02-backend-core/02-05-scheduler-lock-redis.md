# 02-05 — Implementar Lock Distribuído para Scheduler (Multi-Worker)

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 4-6 horas
**Agente que identificou:** Recurring Jobs Review

---

## Problema

O padrão singleton NÃO previne múltiplas instâncias se você tiver múltiplos workers rodando. Cada worker chama `getScheduler()` e cria sua própria instância → **N jobs criados para cada recorrência**, onde N = número de workers.

**Trecho problemático:**
```typescript
// scheduler.ts
let schedulerInstance: RecurringJobScheduler | null = null;

export function getScheduler(): RecurringJobScheduler {
  if (!schedulerInstance) {
    schedulerInstance = new RecurringJobScheduler(); // ❌ Um por worker
  }
  return schedulerInstance;
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — adicionar lock
- `backend-job-assync/package.json` — adicionar redlock ou similar

---

## Passos de Implementação

### 1. Instalar biblioteca de lock distribuído
- [ ] `npm install redlock` (ou implementar com SET NX do Redis)
- [ ] Redlock é mais robusto para produção

### 2. Criar lock manager
```typescript
// redis-lock.ts
import { redis } from './redis';

export async function acquireLock(
  key: string,
  ttl: number = 25000 // 25s (menor que interval de 30s)
): Promise<boolean> {
  const result = await redis.set(
    `lock:${key}`,
    '1',
    'PX', ttl,
    'NX' // Only set if not exists
  );
  return result === 'OK';
}

export async function releaseLock(key: string): Promise<void> {
  await redis.del(`lock:${key}`);
}
```

### 3. Modificar scheduler para usar lock
```typescript
private async checkAndCreateJobs(): Promise<void> {
  const lockAcquired = await acquireLock('scheduler:tick', 25000);

  if (!lockAcquired) {
    console.log('[Scheduler] Another instance is running, skipping');
    return;
  }

  try {
    // ... lógica existente ...
  } finally {
    await releaseLock('scheduler:tick');
  }
}
```

### 4. Testar com 3 workers
- [ ] Iniciar 3 workers em paralelo
- [ ] Criar recorrência
- [ ] Verificar que APENAS UM scheduler rodou
- [ ] Apenas 1 job criado por ciclo

### 5. Considerar: separar scheduler do worker
- [ ] O ideal é ter um processo dedicado ao scheduler
- [ ] Workers apenas processam jobs
- [ ] Isso pode ser Fase 2 (pós-v1)

---

## Testes de Validação

- [ ] 1 worker → scheduler funciona
- [ ] 3 workers → apenas 1 scheduler executa (2 pulam)
- [ ] Worker cai → lock expira e outro assume
- [ ] Zero duplicação de jobs com múltiplos workers

---

## Definition of Done

- [ ] Lock distribuído implementado com Redis SET NX
- [ ] Scheduler adquire lock antes de rodar
- [ ] Se lock falhar, scheduler pula o ciclo
- [ ] Teste com 3 workers passa sem duplicação
- [ ] Lock expira automaticamente (25s TTL)

---

## Dependências

- Deve ser feito após **02-04** (trocar para setInterval)

## Bloqueia: **03-b-1** (scheduler survive restart)

## Tempo estimado: 4-6 horas
