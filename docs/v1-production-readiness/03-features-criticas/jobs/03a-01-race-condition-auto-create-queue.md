# 03a-01 — Corrigir Race Condition no Auto-Create de Queue

**Fase:** 03a — Features Críticas — Jobs
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 3 horas
**Agente que identificou:** Jobs Feature Review

---

## Problema

`create()` verifica se queue existe e cria se não, mas sem lock ou transação. Duas requests simultâneas podem tentar criar a mesma queue → **duplicação ou erro de unique constraint**.

**Trecho problemático:**
```typescript
// job.service.ts
let queue = await queueService.getByName(organizationId, data.queue);
if (!queue) {
  // ❌ Race condition: dois requests chegam aqui ao mesmo tempo
  queue = await queueService.create(organizationId, { name: data.queue });
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/services/job.service.ts` — adicionar lock ou upsert
- `backend-job-assync/src/services/queue.service.ts` — criar método upsert

---

## Passos de Implementação

### Opção A: Upsert no Prisma (recomendado, mais simples)
```typescript
// queue.service.ts — adicionar método upsert
async upsert(organizationId: string, name: string): Promise<Queue> {
  return prisma.queue.upsert({
    where: { organizationId_name: { organizationId, name } },
    update: {},  // Se já existe, não atualiza nada
    create: {
      name,
      organizationId,
      concurrency: 1,
      maxRetries: 2,
      timeout: 300000,
      isActive: true,
    },
  });
}

// job.service.ts — usar upsert
const queue = await queueService.upsert(organizationId, data.queue);
```

### Opção B: Lock Redis (mais complexo, necessário se upsert não for suficiente)
```typescript
const lockKey = `lock:auto-queue:${organizationId}:${data.queue}`;
const lockAcquired = await acquireLock(lockKey, 5000);
if (!lockAcquired) {
  // Aguardar e tentar novamente
  await sleep(100);
  queue = await queueService.getByName(organizationId, data.queue);
}
```

### Passos
- [ ] Verificar se existe unique constraint em `(organizationId, name)` no schema
- [ ] Adicionar constraint se não existir: `@@unique([organizationId, name])`
- [ ] Rodar migration: `npx prisma migrate dev`
- [ ] Implementar método `upsert` no queue.service.ts
- [ ] Atualizar job.service.ts para usar `upsert`
- [ ] Atualizar `createBulk` também

---

## Testes de Validação

- [ ] Enviar 10 requests simultâneos criando job com a mesma queue nova
- [ ] Verificar que apenas 1 queue foi criada
- [ ] Todos os 10 jobs foram criados com sucesso
- [ ] Zero erros de unique constraint no log

---

## Definition of Done

- [ ] Unique constraint em `(organizationId, name)` da queue
- [ ] `upsert` usado no auto-create
- [ ] 10 requests simultâneos → 1 queue, 10 jobs
- [ ] Zero race conditions em load test

---

## Dependências

- Independente

## Tempo estimado: 3 horas
