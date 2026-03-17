# 02-07 — Reduzir Sentry tracesSampleRate

**Fase:** 02 — Backend Core
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 15 minutos
**Agente que identificou:** Backend Core Review

---

## Problema

`tracesSampleRate: 0.1` significa 10% de requests com performance tracing. Para alta vazão, isso gera **custos excessivos** e degrada performance.

**Trecho problemático:**
```typescript
// sentry.ts
tracesSampleRate: 0.1, // ❌ 10% é muito alto
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/sentry.ts` — reduzir sample rate

---

## Passos de Implementação

### 1. Reduzir para 1-2%
```typescript
tracesSampleRate: process.env.NODE_ENV === 'production'
  ? parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || '0.01') // 1%
  : 1.0, // 100% em dev
```

### 2. Adicionar variável de ambiente
- [ ] `.env.production`: `SENTRY_TRACES_SAMPLE_RATE=0.01`
- [ ] `.env.development`: `SENTRY_TRACES_SAMPLE_RATE=1.0`

---

## Testes de Validação

- [ ] Sentry Dashboard mostra ~1% de requests com traces
- [ ] Zero degradação de performance perceptível

---

## Definition of Done

- [ ] `tracesSampleRate` em 1% em produção
- [ ] Configurável via variável de ambiente
- [ ] 100% em desenvolvimento para debugging

---

## Dependências

- Independente

## Tempo estimado: 15 minutos
