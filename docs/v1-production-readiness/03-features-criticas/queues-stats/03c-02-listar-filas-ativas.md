# 03c-02 — Filtrar Filas Inativas na Listagem

**Fase:** 03c — Features Críticas — Queues & Stats
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Queues & Stats Review

---

## Problema

`queueService.list()` não filtra `isActive: true`. Filas desativadas aparecem na listagem, no dashboard e nas estatísticas.

**Trecho problemático:**
```typescript
// queue.service.ts
async list(organizationId: string) {
  return prisma.queue.findMany({
    where: { organizationId } // ❌ Sem filtro isActive
  });
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/services/queue.service.ts` — adicionar filtro

---

## Passos de Implementação

### 1. Atualizar lista para mostrar apenas ativas por padrão
```typescript
async list(organizationId: string, includeInactive = false) {
  return prisma.queue.findMany({
    where: {
      organizationId,
      ...(includeInactive ? {} : { isActive: true }),
    }
  });
}
```

### 2. Verificar onde `list()` é chamado
- [ ] `routes/queues.ts` — pode adicionar query param `?includeInactive=true`
- [ ] `stats.service.ts` — deve usar apenas ativas
- [ ] `job.service.ts` (auto-create) — deve criar mesmo em inativas? Validar

### 3. No frontend, remover filas inativas do select de criação de job
- [ ] Se fila está inativa, não exibir no dropdown de "Selecione a fila"

---

## Testes de Validação

- [ ] GET /queues → retorna apenas filas com `isActive: true`
- [ ] Fila desativada → não aparece na listagem
- [ ] Dashboard não conta jobs de filas inativas
- [ ] Select de nova recorrência não mostra filas inativas

---

## Definition of Done

- [ ] `list()` filtra `isActive: true` por padrão
- [ ] Parâmetro `includeInactive` opcional
- [ ] Dashboard não inclui filas inativas
- [ ] Dropdown de filas não mostra inativas

---

## Dependências

- Independente

## Tempo estimado: 30 minutos
