# 03c-01 — Otimizar getOverview() — Eliminar N+1 e findMany Sem Limit

**Fase:** 03c — Features Críticas — Queues & Stats
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 4 horas
**Agente que identificou:** Queues & Stats Review

---

## Problema

Dois problemas graves de performance em `stats.service.ts`:

1. **N+1 severo**: Para cada fila, faz 5 operações IO. Com 10 filas = 50 ops por request. Com 50 filas = 250 ops.
2. **findMany sem limit**: Carrega TODOS os jobs completados hoje em memória para calcular uma média.

**Trecho problemático:**
```typescript
// stats.service.ts
// ❌ Problema 1: N+1
const queues = await queueService.list(orgId);
const queueStats = await Promise.all(queues.map(q => queueService.getStats(q.id)));

// ❌ Problema 2: findMany sem limit para calcular média
const completedToday = await prisma.job.findMany({
  where: { status: 'COMPLETED', completedAt: { gte: todayStart } }
  // Sem take! Retorna tudo
});
const avgDuration = completedToday.reduce(...) / completedToday.length;
```

---

## Arquivos Afetados

- `backend-job-assync/src/services/stats.service.ts` — reescrever queries
- `backend-job-assync/prisma/schema.prisma` — adicionar índices compostos

---

## Passos de Implementação

### 1. Usar aggregate para média de duração
```typescript
// ✅ Em vez de findMany + reduce:
const avgResult = await prisma.job.aggregate({
  where: {
    organizationId: orgId,
    status: 'COMPLETED',
    completedAt: { gte: todayStart }
  },
  _avg: { duration: true }
});
const avgDuration = avgResult._avg.duration || 0;
```

> ⚠️ Verificar se existe coluna `duration` no schema. Se não existir, criar como campo calculado:
> - Adicionar `duration Int?` no schema
> - Preencher no worker quando job completa: `duration = completedAt - startedAt`

### 2. Substituir N+1 por groupBy
```typescript
// ✅ Em vez de N+1 por queue:
const jobCountsByQueue = await prisma.job.groupBy({
  by: ['queueId', 'status'],
  where: { organizationId: orgId },
  _count: { id: true },
});

// Agregar em memória (uma única query ao invés de N)
const statsByQueue = jobCountsByQueue.reduce((acc, row) => {
  if (!acc[row.queueId]) acc[row.queueId] = { pending: 0, active: 0, completed: 0, failed: 0 };
  acc[row.queueId][row.status.toLowerCase()] = row._count.id;
  return acc;
}, {});
```

### 3. Otimizar timeline — groupBy por hora
```typescript
// ✅ Em vez de findMany de todos os jobs:
const timeline = await prisma.$queryRaw`
  SELECT
    date_trunc('hour', created_at) as hour,
    status,
    COUNT(*) as count
  FROM jobs
  WHERE organization_id = ${orgId}
    AND created_at >= ${twentyFourHoursAgo}
  GROUP BY 1, 2
  ORDER BY 1
`;
```

### 4. Adicionar índices compostos no schema
```prisma
model Job {
  // ...
  @@index([organizationId, status])
  @@index([organizationId, createdAt])
  @@index([organizationId, completedAt])
}
```

### 5. Rodar migration
```bash
npx prisma migrate dev --name add-composite-indexes
```

---

## Testes de Validação

- [ ] Dashboard carrega em < 1s com 1000 jobs
- [ ] Dashboard carrega em < 2s com 10.000 jobs
- [ ] Zero queries N+1 (verificar com Prisma log)
- [ ] Timeline com 24h de dados retorna em < 500ms

---

## Definition of Done

- [ ] `getOverview()` usa máximo 3 queries ao banco
- [ ] Nenhum `findMany` sem `take` ou `aggregate`
- [ ] Índices compostos criados e migração aplicada
- [ ] Timeline usa `groupBy` SQL ou raw query
- [ ] Testes de performance passam

---

## Dependências

- Independente

## Tempo estimado: 4 horas
