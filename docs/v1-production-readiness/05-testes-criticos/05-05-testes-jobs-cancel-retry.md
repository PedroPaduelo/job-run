# 05-05 — Testes: Jobs — Cancel e Retry Flow

**Fase:** 05 — Testes Críticos
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Jobs Review

---

## Problema

Usuários podem cancelar e retry jobs. Não há testes para garantir que:
- CANCELLED jobs não podem ser re-executados
- FAILED jobs podem ter retry manual
- Retry reseta `retryCount` e `status` corretamente

---

## Arquivos Afetados

- `backend-job-async/src/__tests__/jobs-crud.test.ts` — criar
- `backend-job-async/src/services/job.service.ts` — testar

---

## Passos de Implementação

### 1. Testes de cancel

```typescript
// src/__tests__/jobs-crud.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { prisma } from '../lib/prisma';
import { jobService } from '../services/job.service';

describe('JobsService - cancel', () => {
  let jobId: string;

  beforeEach(async () => {
    await prisma.job.deleteMany({});
    const queue = await prisma.queue.create({
      data: { name: 'test-queue', organizationId: 'org-1', callbackUrl: 'http://cb.test' }
    });

    const job = await prisma.job.create({
      data: {
        id: 'job-cancel-test',
        queueId: queue.id,
        status: 'PROCESSING',
        payload: '{}',
      }
    });
    jobId = job.id;
  });

  it('deve marcar job como CANCELLED', async () => {
    await jobService.cancel(jobId);

    const job = await prisma.job.findUnique({ where: { id: jobId } });
    expect(job?.status).toBe('CANCELLED');
  });

  it('não deve cancelar job já COMPLETED', async () => {
    await prisma.job.update({ where: { id: jobId }, data: { status: 'COMPLETED' } });

    await expect(jobService.cancel(jobId)).rejects.toThrow('Cannot cancel completed job');
  });

  it('não deve re-executar job CANCELLED', async () => {
    await jobService.cancel(jobId);

    await expect(jobService.retry(jobId)).rejects.toThrow('Cannot retry cancelled job');
  });
});
```

### 2. Testes de retry

```typescript
describe('JobsService - retry', () => {
  it('deve resetar retryCount e status para PENDING', async () => {
    const queue = await prisma.queue.create({
      data: { name: 'test-queue', organizationId: 'org-1', callbackUrl: 'http://cb.test' }
    });

    const job = await prisma.job.create({
      data: {
        id: 'job-retry-test',
        queueId: queue.id,
        status: 'FAILED',
        retryCount: 3,
        errorMessage: 'Timeout',
        payload: '{}',
      }
    });

    await jobService.retry(job.id);

    const updated = await prisma.job.findUnique({ where: { id: job.id } });
    expect(updated?.status).toBe('PENDING');
    expect(updated?.retryCount).toBe(0);
    expect(updated?.errorMessage).toBeNull();
  });

  it('não deve dar retry se retryCount >= maxRetries da fila', async () => {
    const queue = await prisma.queue.create({
      data: {
        name: 'test-queue',
        organizationId: 'org-1',
        callbackUrl: 'http://cb.test',
        maxRetries: 3,
      }
    });

    const job = await prisma.job.create({
      data: {
        id: 'job-retry-max',
        queueId: queue.id,
        status: 'FAILED',
        retryCount: 3, // Já no limite
        payload: '{}',
      }
    });

    await expect(jobService.retry(job.id)).rejects.toThrow('Max retries exceeded');
  });
});
```

### 3. Testes de bulk retry

```typescript
describe('JobsService - bulk retry', () => {
  it('deve retriar múltiplos jobs FAILED de uma vez', async () => {
    // Criar 5 jobs FAILED
    // Chamar jobService.bulkRetry([id1, id2, id3, id4, id5])
    // Verificar que todos foram para PENDING
  });

  it('deve falhar se algum job não pode ser retried', async () => {
    // Array com jobs FAILED + CANCELLED
    // Deve lançar erro e NÃO alterar nenhum
  });
});
```

### 4. Testes de integração com worker

```typescript
describe('JobsService + Worker - retry funciona', () => {
  it('job retried deve ser processado novamente pelo worker', async () => {
    // Job FAILED → retry → status PENDING
    // Worker pega job, processa, vai para COMPLETED
  });
});
```

---

## Testes de Validação

- [ ] `jobService.cancel()` → status = CANCELLED
- [ ] `jobService.cancel()` em COMPLETED → erro
- [ ] `jobService.retry()` em CANCELLED → erro
- [ ] `jobService.retry()` → status = PENDING, retryCount = 0
- [ ] `jobService.retry()` reseta errorMessage
- [ ] `jobService.retry()` com retryCount >= maxRetries → erro

---

## Definition of Done

- [ ] Pelo menos 8 testes de cancel e retry
- [ ] Cenários: cancel completed, retry cancelled, retry max, retry worker
- [ ] Todos os testes passando

---

## Dependências

- **Pré-requisito:** 05-01 (vitest)

## Tempo estimado: 2 horas
