# 01-05 — Adicionar requirePermission() em Rotas de Queues e Stats

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Queues & Stats Review

---

## Problema

As rotas de Queues e Stats não usam `requirePermission()`. Qualquer API key ativa — independente de seus escopos — pode listar, criar, deletar, pausar filas e acessar todas as estatísticas.

**Trecho problemático:**
```typescript
// routes/queues.ts — sem requirePermission
export async function queuesRoutes(app: FastifyInstance) {
  app.get('/', { onRequest: authenticateRequest }, async (request, reply) => {
    // ❌ Qualquer key autenticada acessa
  })
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/routes/queues.ts` — adicionar requirePermission
- `backend-job-assync/src/routes/stats.ts` — adicionar requirePermission
- `backend-job-assync/src/lib/auth.ts` — verificar requirePermission existe

---

## Passos de Implementação

### 1. Verificar requirePermission disponível
- [ ] Abrir `auth.ts` ou onde estiver o `requirePermission`
- [ ] Entender a assinatura: `(permission: string) => (request, reply, done) => void`

### 2. Adicionar em queues.ts
- [ ] Importar `requirePermission`
- [ ] `GET /` (listar) → `requirePermission('queues:list')`
- [ ] `GET /:id` (detalhes) → `requirePermission('queues:read')`
- [ ] `POST /` (criar) → `requirePermission('queues:create')`
- [ ] `PATCH /:id` (atualizar) → `requirePermission('queues:update')`
- [ ] `DELETE /:id` (deletar) → `requirePermission('queues:delete')`
- [ ] `POST /:id/pause` → `requirePermission('queues:update')`
- [ ] `POST /:id/resume` → `requirePermission('queues:update')`

### 3. Adicionar em stats.ts
- [ ] Importar `requirePermission`
- [ ] `GET /overview` → `requirePermission('stats:read')`
- [ ] `GET /timeline` → `requirePermission('stats:read')`

### 4. Documentar permissões
- [ ] Criar lista de permissões disponíveis:
  - `queues:list`, `queues:read`, `queues:create`, `queues:update`, `queues:delete`
  - `stats:read`
  - `jobs:list`, `jobs:read`, `jobs:create`, `jobs:cancel`, `jobs:retry`
  - `recurring-jobs:*` (wildcard)

---

## Testes de Validação

- [ ] Criar API key com `queues:read` apenas
- [ ] Fazer GET /queues → 200 OK
- [ ] Tentar POST /queues → 403 Forbidden
- [ ] Tentar DELETE /queues/:id → 403 Forbidden
- [ ] Criar key sem `stats:read` → GET /stats/overview → 403

---

## Definition of Done

- [ ] Todos os endpoints de queues usam `requirePermission()` apropriado
- [ ] Todos os endpoints de stats usam `requirePermission()` apropriado
- [ ] Documentação de permissões criada
- [ ] Testes manuais passam

---

## Dependências

- Independente — pode ser feito em paralelo com outros

## Tempo estimado: 1 hora
