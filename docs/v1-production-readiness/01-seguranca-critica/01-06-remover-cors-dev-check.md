# 01-06 — Remover Check NODE_ENV === 'development' do CORS

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 15 minutos
**Agente que identificou:** Backend Core Review

---

## Problema

O CORS tem um fallback `if (process.env.NODE_ENV === 'development') return callback(null, true)` que permite **qualquer origem** em desenvolvimento. Se acidentalmente executado com `NODE_ENV=development` em produção, expõe a API completamente.

**Trecho problemático:**
```typescript
// server.ts:36
if (process.env.NODE_ENV === 'development') {
  return callback(null, true); // ❌ Permite qualquer origem
}
```

---

## Arquivos Afetados

- `backend-job-assync/src/server.ts` — remover check de desenvolvimento

---

## Passos de Implementação

### 1. Remover o check de desenvolvimento
- [ ] Abrir `server.ts`
- [ ] Localizar o CORS config (linha ~36)
- [ ] Remover completamente:
  ```typescript
  // REMOVER ESTE TRECHO:
  if (process.env.NODE_ENV === 'development') {
    return callback(null, true);
  }
  ```

### 2. Usar apenas allowedOrigins explícito
- [ ] O CORS já tem `allowedOrigins` do .env
- [ ] Garantir que `allowedOrigins` inclui URLs de desenvolvimento
- [ ] Exemplo:
  ```
  # .env.development
  ALLOWED_ORIGINS=http://localhost:5173,http://localhost:4173
  ```

### 3. Verificar que não quebra dev local
- [ ] Iniciar backend em dev mode
- [ ] Acessar de `localhost:5173` → deve funcionar
- [ ] Tentar acessar de origem não permitida → deve bloquear

---

## Testes de Validação

- [ ] Dev: Frontend em `localhost:5173` acessa API → CORS permite
- [ ] Dev: Frontend em origem aleatória → CORS bloqueia
- [ ] Code review: não existe `NODE_ENV === 'development'` no CORS

---

## Definition of Done

- [ ] Zero checks de `NODE_ENV === 'development'` no CORS
- [ ] Apenas `allowedOrigins` do .env controla origens permitidas
- [ ] Dev local ainda funciona (origem está no allowedOrigins)
- [ ] Origens não listadas são bloqueadas

---

## Dependências

- Independente

## Tempo estimado: 15 minutos
