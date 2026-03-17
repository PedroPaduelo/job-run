# 02-03 — Implementar Graceful Shutdown Adequado

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Backend Core Review

---

## Problema

Shutdown fecha workers imediatamente sem usar `worker.close()`. Jobs em processamento podem ser **interrompidos bruscamente**, causando inconsistência de estado.

**Trecho problemático:**
```typescript
// worker.ts
const shutdown = async () => {
  console.log('Shutting down workers...');
  // ❌ Workers fechados imediatamente
  await prisma.$disconnect();
  process.exit(0);
};
```

---

## Arquivos Afetados

- `backend-job-assync/src/worker.ts` — modificar shutdown

---

## Passos de Implementação

### 1. Modificar função de shutdown
```typescript
const shutdown = async () => {
  console.log('[Worker] Gracefully shutting down...');

  // 1. Parar de aceitar novos jobs
  const scheduler = getScheduler();
  scheduler.stop();

  // 2. Aguardar jobs em andamento completarem (com timeout)
  console.log('[Worker] Waiting for active jobs to complete...');
  const closePromises = workers.map(w => w.close());

  try {
    await Promise.race([
      Promise.all(closePromises),
      new Promise(resolve => setTimeout(resolve, 30000)) // 30s hard timeout
    ]);
    console.log('[Worker] All workers closed');
  } catch (error) {
    console.error('[Worker] Error closing workers:', error);
  }

  // 3. Desconectar do banco
  await prisma.$disconnect();

  // 4. Fechar conexão Redis
  await redis.quit();

  console.log('[Worker] Shutdown complete');
  process.exit(0);
};
```

### 2. Adicionar handlers de sinal
- [ ] `SIGTERM` → chamar `shutdown()`
- [ ] `SIGINT` → chamar `shutdown()`
- [ ] Já devem existir, apenas verificar

### 3. Testar graceful shutdown
- [ ] Criar job que demora 10s
- [ ] Iniciar job
- [ ] Matar processo com `SIGTERM`
- [ ] Verificar que job completou antes de fechar

### 4. Testar timeout
- [ ] Criar job que demora 60s
- [ ] Iniciar job
- [ ] Matar processo com `SIGTERM`
- [ ] Verificar que fechou após 30s timeout

---

## Testes de Validação

- [ ] Job rápido (1s) + shutdown → completa antes de fechar
- [ ] Job lento (60s) + shutdown → fecha após 30s timeout
- [ ] Jobs PENDING não são processados no shutdown
- [ ] Zero "zombie workers" após `SIGTERM`

---

## Definition of Done

- [ ] Shutdown chama `worker.close()` para cada worker
- [ ] Timeout máximo de 30s para jobs em andamento
- [ ] Scheduler é parado antes de fechar workers
- [ ] Prisma desconectado após workers fecharem
- [ ] Redis desconectado por último
- [ ] Jobs rápidos completam antes do shutdown

---

## Dependências

- Independente

## Tempo estimado: 2 horas
