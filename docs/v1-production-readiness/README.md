# JobSync v1 — Production Readiness Plan

Revisão geral executada em 2026-03-17 por 6 agentes paralelos.
Este diretório contém **todas as ações necessárias** para levar o sistema à produção v1.

## Status Geral

| Fase | Nome | Arquivos | Status |
|------|------|----------|--------|
| 01 | Segurança Crítica | 6 tarefas | ⬚ Pendente |
| 02 | Backend Core | 7 tarefas | ⬚ Pendente |
| 03a | Features — Jobs | 3 tarefas | ⬚ Pendente |
| 03b | Features — Recurring Jobs | 4 tarefas | ⬚ Pendente |
| 03c | Features — Queues & Stats | 2 tarefas | ⬚ Pendente |
| 04 | Frontend Crítico | 6 tarefas | ⬚ Pendente |
| 05 | Testes Críticos | 5 tarefas | ⬚ Pendente |
| 06 | Validações & Edge Cases | 8 tarefas | ⬚ Pendente |

**Total: 41 tarefas de ação**

## Legenda de Status

- ⬚ Pendente
- 🔄 Em andamento
- ✅ Concluído
- ❌ Bloqueado (depende de outra tarefa)

## Ordem de Execução Recomendada

```
Fase 01 → Fase 02 → Fase 03 (paralelo a,b,c) → Fase 04 → Fase 05 → Fase 06
```

## Como Usar

Cada arquivo `.md` desta pasta é uma tarefa de ação completa com:
- Contexto e problema
- Arquivos afetados
- Passos detalhados de implementação
- Testes de validação
- Critério de conclusão (Definition of Done)

Pedir para a Serendipd executar: _"execute a tarefa 01-01"_ ou _"execute a fase 02"_.

## Índice Completo de Tarefas

### 01 — Segurança Crítica (6 tarefas)
- `01-01-remover-mock-auth.md` — Remover MOCK_USER do AuthContext, implementar OAuth real
- `01-02-remover-token-hardcoded.md` — Remover token `jsk_a1b2...` hardcoded de App.tsx
- `01-03-proteger-rotas.md` — Adicionar `<ProtectedRoute>` em todas as rotas
- `01-04-hashear-api-keys.md` — Armazenar SHA-256 de API keys em vez de plaintext
- `01-05-permissions-queues-stats.md` — Adicionar `requirePermission()` nas rotas de queues/stats
- `01-06-remover-cors-dev-check.md` — Remover bypass de CORS em `NODE_ENV === 'development'`

### 02 — Backend Core (7 tarefas)
- `02-01-prisma-pool-timeout.md` — Configurar `connection_limit` e `pool_timeout` via DATABASE_URL
- `02-02-redis-timeout-retry.md` — Adicionar `maxRetriesPerRequest: 3`, `connectTimeout`, `commandTimeout`
- `02-03-graceful-shutdown.md` — Chamar `worker.close()` com timeout de 30s antes de `process.exit`
- `02-04-scheduler-setinterval.md` — Substituir CronJob por `setInterval()` + try-catch
- `02-05-scheduler-lock-redis.md` — Implementar lock distribuído com `SET NX` do Redis
- `02-06-scheduler-isprocessing.md` — Adicionar flag `isProcessing` + timeout de segurança de 60s
- `02-07-sentry-traces-samplerate.md` — Reduzir tracesSampleRate de 0.1 para 0.01 em produção

### 03a — Features — Jobs (3 tarefas)
- `03a-01-race-condition-auto-create-queue.md` — Usar Prisma `upsert` com unique constraint `(organizationId, name)`
- `03a-02-ids-seguros-bulk.md` — Substituir `Math.random()` por `@paralleldrive/cuid2` em bulk operations
- `03a-03-callback-timeout.md` — Adicionar `AbortController` com 5s de timeout em callbacks fetch

### 03b — Features — Recurring Jobs (4 tarefas)
- `03b-01-scheduler-survive-restart.md` — Atualizar `nextRunAt` ANTES de criar job, handle restarts passados
- `03b-02-corrigir-require-cron-esm.md` — Substituir `require('cron')` por `import { CronTime } from 'cron'` ou `cron-parser`
- `03b-03-nextrunat-loop-infinito.md` — Desativar recurring job quando `calculateNextRun()` retorna null
- `03b-04-validate-cron-expression.md` — Validar expressões cron com `cron-parser` no Zod e no frontend

### 03c — Features — Queues & Stats (2 tarefas)
- `03c-01-otimizar-getoverview-n+1.md` — Usar `aggregate`, `groupBy`, adicionar indexes compostos
- `03c-02-listar-filas-ativas.md` — Adicionar filtro `isActive: true` em `queueService.list()`

### 04 — Frontend Crítico (6 tarefas)
- `04-01-integrar-toast-real.md` — Instalar Sonner, reescrever `toast.ts`, adicionar `<Toaster />`
- `04-02-error-boundary-real.md` — Instalar `react-error-boundary`, implementar ErrorBoundary com fallback UI
- `04-03-responsividade-mobile.md` — Adicionar hamburger menu, drawer sidebar para mobile (375px)
- `04-04-substituir-confirm-nativo.md` — Criar `ConfirmDialog` com Radix AlertDialog
- `04-05-react-lazy-splitting.md` — Converter imports de páginas para `React.lazy()` + `<Suspense>`
- `04-06-staletime-performance.md` — Aumentar staleTime para 30s, unificar key de token para `jobsync_token`

### 05 — Testes Críticos (5 tarefas)
- `05-01-configurar-vitest-backend.md` — Configurar vitest com coverage para backend
- `05-02-testes-worker-retry.md` — Testar retry, timeout, status do worker
- `05-03-testes-scheduler-concorrencia.md` — Testar lock Redis, maxRuns, endDate
- `05-04-testes-auth-jwt.md` — Testar geração/validação de JWT, ProtectedRoute
- `05-05-testes-jobs-cancel-retry.md` — Testar cancel e retry de jobs

### 06 — Validações (8 tarefas)
- `06-01-payload-size-limit.md` — Limitar payload a 1MB, retornar 413 se exceder
- `06-02-webhook-https-validation.md` — Validar HTTPS em callbackUrl, bloquear hosts internos
- `06-03-scheduledat-futuro.md` — Validar que scheduledAt está no futuro
- `06-04-maxruns-positivo.md` — Validar que maxRuns > 0 em recurring jobs
- `06-05-queue-name-sanitization.md` — Sanitizar nome de fila com slugify
- `06-06-apikey-ip-validation.md` — Adicionar campo `allowedIps` em API keys, validar IP no uso
- `06-07-ratelimit-por-apikey.md` — Implementar rate limit de 100 req/min por API key
- `06-08-recurrenceenddate-futuro.md` — Validar que recurrenceEndDate está no futuro

## Sumário de Issues por Severidade

### 🔴 CRITICAL (32 issues)
- 6 issues de segurança
- 7 issues de backend core
- 9 issues de features
- 4 issues de frontend
- 6 issues de testes (0% cobertura)

### 🟡 IMPORTANT (47 issues)
- JWT issuers, rate limit, error handler
- staleTime, lazy loading, tokens
- 9 validações faltando

### 🟢 NICE_TO_HAVE (30+)
- Config centralizada, request ID, API versioning
- Metrics, structured logging, retry BullMQ
