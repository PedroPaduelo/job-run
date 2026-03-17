# 05-02 — Testes: Worker Retry e Falhas

**Fase:** 05 — Testes Críticos
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Backend Core Review

---

## Problema

Worker executa callbacks HTTP para jobs. Não há testes para os cenários de falha: callback timeout, retries esgotados, status final correto no banco.

---

## Arquivos Afetados

- `backend-job-async/src/__tests__/worker.test.ts` — criar
- `backend-job-async/src/worker/job-worker.ts` — testar comportamento

---

## Passos de Implementação

### 1. Criar testes básicos do worker
```typescript
// src/__tests__/worker.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { prisma } from '../lib/prisma';
import { processJobCallback } from '../worker/job-worker';

describe('Worker - processamento de callback', () => {
  beforeEach(async () => {
    await prisma.job.deleteMany({});
    await prisma.queue.deleteMany({});
  });

  it('deve marcar job como COMPLETED quando callback retorna 200', async () => {
    // Arrange
    const queue = await prisma.queue.create({ data: { name: 'test-queue', organizationId: 'org-1', callbackUrl: 'http://example.com/cb' } });
    const job = await prisma.job.create({
      data: {
        id: 'job-001',
        queueId: queue.id,
        status: 'PROCESSING',
        payload: '{"test": true}',
      }
    });

    // Mock fetch
    global.fetch = vi.fn().mockResolvedValue({ ok: true, status: 200 });

    // Act
    await processJobCallback(job.id);

    // Assert
    const updated = await prisma.job.findUnique({ where: { id: job.id } });
    expect(updated?.status).toBe('COMPLETED');
  });

  it('deve marcar job como FAILED quando callback retorna 500', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    // ... similar setup
    // Assert: status === FAILED, retryCount incrementado
  });

  it('deve respeitar retryCount máximo', async () => {
    // Job com retryCount === maxRetries deve ir para FAILED sem retry
  });

  it('deve marcar FAILED quando callback dá timeout', async () => {
    // Mock fetch que demora mais que 5s
    global.fetch = vi.fn().mockImplementation(() =>
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 100))
    );
    // Assert: status === FAILED, errorMessage contém "timeout"
  });
});
```

### 2. Testar transições de status

```typescript
describe('Worker - transições de status', () => {
  it('PENDING → PROCESSING ao iniciar execução', async () => {});
  it('PROCESSING → COMPLETED ao completar', async () => {});
  it('PROCESSING → FAILED ao esgotar retries', async () => {});
  it('FAILED pode ser retried manualmente', async () => {});
  it('CANCELLED não pode ser re-executado', async () => {});
});
```

### 3. Testar callback payload

```typescript
describe('Worker - payload do callback', () => {
  it('deve enviar jobId, status e payload no callback', async () => {
    const captured = [];
    global.fetch = vi.fn().mockImplementation((url, options) => {
      captured.push(JSON.parse(options.body));
      return Promise.resolve({ ok: true, status: 200 });
    });

    // Após processamento:
    expect(captured[0]).toMatchObject({
      jobId: expect.any(String),
      status: 'COMPLETED',
    });
  });
});
```

---

## Testes de Validação

- [ ] `npm run test:run` — todos os testes de worker passam
- [ ] Cenário de retry esgotado → status FAILED
- [ ] Cenário de timeout → errorMessage com "timeout"
- [ ] Payload correto no callback

---

## Definition of Done

- [ ] Pelo menos 8 testes de worker implementados
- [ ] Cenários: completed, failed, timeout, retry, cancelled, payload
- [ ] Todos os testes passando com `npm run test:run`
- [ ] Coverage de worker > 60%

---

## Dependências

- **Pré-requisito:** 05-01 (configurar vitest)

## Tempo estimado: 2 horas
