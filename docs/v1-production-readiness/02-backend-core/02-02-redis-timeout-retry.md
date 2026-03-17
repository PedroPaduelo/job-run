# 02-02 — Configurar Timeout e Retry do Redis

**Fase:** 02 — Backend Core
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Backend Core Review

---

## Problema

Cliente ioredis configurado com `maxRetriesPerRequest: null` (sem retry) e sem `connectTimeout`, `commandTimeout`. Pode causar **deadlocks** se Redis ficar indisponível.

**Trecho problemático:**
```typescript
// redis.ts
export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: null, // ❌ Sem retry
  // ❌ Sem timeouts
});
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/redis.ts` — adicionar configurações

---

## Passos de Implementação

### 1. Adicionar timeouts
```typescript
export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3, // Mudar de null para 3
  enableReadyCheck: true,
  connectTimeout: 10000,  // 10s para conectar
  commandTimeout: 5000,   // 5s timeout por comando
  retryStrategy: (times) => Math.min(times * 50, 2000), // Backoff exponencial
  keepAlive: 30000,       // Keep-alive de 30s
  lazyConnect: false,     // Conectar imediatamente
});
```

### 2. Testar comportamento com Redis indisponível
- [ ] Parar o Redis: `docker stop redis` (ou similar)
- [ ] Fazer requisição → deve falhar gracefully após 10s
- [ ] Reiniciar Redis → deve reconectar automaticamente

### 3. Testar retry
- [ ] Simular comando falhando
- [ ] Verificar que retry acontece (máximo 3 vezes)

---

## Testes de Validação

- [ ] Backend inicia conectando ao Redis
- [ ] Redis cai → comandos falham após timeout
- [ ] Redis volta → reconecta automaticamente
- [ ] Comandos funcionam normalmente após reconexão
- [ ] Zero deadlocks infinitos

---

## Definition of Done

- [ ] `maxRetriesPerRequest: 3` (não null)
- [ ] `connectTimeout: 10000` configurado
- [ ] `commandTimeout: 5000` configurado
- [ ] `retryStrategy` com backoff exponencial
- [ ] Reconexão automática funciona
- [ ] Sem deadlocks em falhas do Redis

---

## Dependências

- Independente

## Tempo estimado: 1 hora
