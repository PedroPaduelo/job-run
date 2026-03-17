# 02-01 — Configurar Pool e Timeouts do Prisma

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Backend Core Review

---

## Problema

Cliente Prisma instanciado sem qualquer configuração de pool ou timeouts. Pode causar **connection leaks** e esgotar conexões do PostgreSQL sob carga.

**Trecho problemático:**
```typescript
// prisma.ts
export const prisma = new PrismaClient({
  // ❌ Sem configuração de pool
});
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/prisma.ts` — adicionar configuração
- `backend-job-assync/.env` — atualizar DATABASE_URL com params de conexão

---

## Passos de Implementação

### 1. Configurar pool via DATABASE_URL
- [ ] Atualizar `.env` com params de connection pool:
  ```
  DATABASE_URL="postgresql://postgres:8c44713dd7af67147299@217.216.81.188:54321/jobsync_db?connection_limit=10&pool_timeout=20&statement_cache_size=100&connect_timeout=10"
  ```

### 2. Adicionar configuração no PrismaClient
- [ ] Adicionar `log` baseado em ambiente
- [ ] Adicionar `datasources` com URL (já existe)

```typescript
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'production'
    ? ['error', 'warn']
    : ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
```

### 3. Parâmetros recomendados
- `connection_limit=10` → máximo de 10 conexões simultâneas
- `pool_timeout=20` → 20 segundos aguardando conexão do pool
- `connect_timeout=10` → 10s para estabelecer conexão inicial
- `statement_cache_size=100` → cache de 100 statements preparados

### 4. Testar com carga
- [ ] Criar script de load test (100 jobs em paralelo)
- [ ] Monitorar conexões no PostgreSQL: `SELECT count(*) FROM pg_stat_activity`
- [ ] Verificar que não excede `connection_limit`

---

## Testes de Validação

- [ ] Backend inicia sem erros de conexão
- [ ] Load test de 100 requisições simultâneas → todas completam
- [ ] PostgreSQL não mostra conexões em excesso
- [ ] Queries com log em dev mode aparecem no console

---

## Definition of Done

- [ ] `DATABASE_URL` contém params de pool
- [ ] `PrismaClient` tem configuração de log adequada
- [ ] Load test passa sem esgotar conexões
- [ ] Zero erros de "connection pool exhausted"

---

## Dependências

- Independente

## Tempo estimado: 2 horas
