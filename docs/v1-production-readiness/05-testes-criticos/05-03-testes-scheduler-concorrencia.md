# 05-03 — Testes: Scheduler de Recurring Jobs (Concorrência)

**Fase:** 05 — Testes Críticos
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Recurring Jobs Review

---

## Problema

O `RecurringJobScheduler` tem race condition crítica: múltiplos workers rodam `checkAndCreateJobs()` simultaneamente e criam N jobs onde deveria ser criado 1. Sem testes, isso é invisível até ir pra produção.

---

## Arquivos Afetados

- `backend-job-async/src/__tests__/scheduler.test.ts` — criar
- `backend-job-async/src/services/recurring-job.service.ts` — testar

---

## Passos de Implementação

### 1. Teste de duplicação de jobs (race condition)

```typescript
// src/__tests__/scheduler.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { prisma } from '../lib/prisma';
import { recurringJobService } from '../services/recurring-job.service';

describe('Scheduler - prevenção de duplicação', () => {
  let recurringJobId: string;

  beforeEach(async () => {
    await prisma.job.deleteMany({});
    await prisma.recurringJob.deleteMany({});
    await prisma.queue.deleteMany({});

    // Criar recurring job vencido (nextRunAt no passado)
    const queue = await prisma.queue.create({
      data: { name: 'test-queue', organizationId: 'org-test', callbackUrl: 'http://cb.test' }
    });

    const rj = await prisma.recurringJob.create({
      data: {
        name: 'test-recurring',
        queueId: queue.id,
        recurrenceType: 'INTERVAL',
        recurrenceValue: '60000',
        nextRunAt: new Date(Date.now() - 5000), // 5s no passado
        isActive: true,
      }
    });
    recurringJobId = rj.id;
  });

  it('não deve criar jobs duplicados com chamadas paralelas', async () => {
    // Simular 3 workers chamando checkAndCreateJobs ao mesmo tempo
    await Promise.all([
      recurringJobService.checkAndCreateJobs(),
      recurringJobService.checkAndCreateJobs(),
      recurringJobService.checkAndCreateJobs(),
    ]);

    const jobsCreated = await prisma.job.findMany({
      where: { recurringJobId }
    });

    // Com lock Redis, apenas 1 job deve ser criado
    expect(jobsCreated).toHaveLength(1);
  });

  it('deve atualizar nextRunAt após criar job', async () => {
    const before = await prisma.recurringJob.findUnique({ where: { id: recurringJobId } });

    await recurringJobService.checkAndCreateJobs();

    const after = await prisma.recurringJob.findUnique({ where: { id: recurringJobId } });
    expect(after!.nextRunAt.getTime()).toBeGreaterThan(before!.nextRunAt.getTime());
  });

  it('não deve criar job quando nextRunAt está no futuro', async () => {
    // Atualizar nextRunAt para o futuro
    await prisma.recurringJob.update({
      where: { id: recurringJobId },
      data: { nextRunAt: new Date(Date.now() + 60000) }
    });

    await recurringJobService.checkAndCreateJobs();

    const jobs = await prisma.job.count({ where: { recurringJobId } });
    expect(jobs).toBe(0);
  });
});
```

### 2. Teste de maxRuns

```typescript
describe('Scheduler - maxRuns', () => {
  it('deve desativar recurring job quando runCount >= maxRuns', async () => {
    // Criar recurring job com maxRuns: 3 e runCount: 2
    // Chamar checkAndCreateJobs
    // Job criado, runCount = 3, isActive = false
  });

  it('não deve criar job quando isActive = false', async () => {
    // Criar recurring job com isActive: false
    // Chamar checkAndCreateJobs
    // Nenhum job criado
  });
});
```

### 3. Teste de endDate

```typescript
describe('Scheduler - endDate', () => {
  it('deve desativar quando endDate passou', async () => {
    // Criar recurring job com endDate no passado
    // Chamar checkAndCreateJobs
    // isActive = false, nenhum job criado
  });
});
```

---

## Testes de Validação

- [ ] Rodar 3 `checkAndCreateJobs()` em paralelo → apenas 1 job criado
- [ ] `nextRunAt` atualizado após execução
- [ ] `maxRuns` funciona corretamente
- [ ] `endDate` passado → desativa recurring job

---

## Definition of Done

- [ ] Pelo menos 8 testes de scheduler implementados
- [ ] Teste de race condition confirma que lock Redis funciona
- [ ] Todos os testes passando

---

## Dependências

- **Pré-requisito:** 05-01 (vitest) e 02-05 (lock Redis)

## Tempo estimado: 2 horas
