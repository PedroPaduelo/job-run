# 04-06 — Ajustar staleTime e Unificar Sistema de Tokens

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Frontend Core Review

---

## Problema A: staleTime muito baixo
`staleTime: 1000` (1 segundo) → quase toda navegação dispara um fetch. Com `refetchInterval` de 5-30s já configurado, é excesso.

## Problema B: 3 sistemas de tokens paralelos
- `token` (App.tsx bootstrap)
- `nommand_access_token` (api.ts fallback)
- `auth_token` (AuthContext)
→ Estado inconsistente, token do AuthContext nunca é usado.

---

## Arquivos Afetados

- `frontend-job-async/src/App.tsx` — ajustar QueryClient
- `frontend-job-async/src/lib/api.ts` — unificar token key
- `frontend-job-async/src/contexts/AuthContext.tsx` — confirmar key unificada

---

## Passos de Implementação

### 1. Aumentar staleTime no QueryClient
```tsx
// App.tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,         // 30 segundos (era 1s)
      gcTime: 5 * 60 * 1000,        // 5 minutos de cache
      retry: 2,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
      refetchOnWindowFocus: false,   // Não refetch ao focar janela
    },
    mutations: {
      retry: 0,
    },
  },
});
```

### 2. Definir a key única
- [ ] Escolher: `jobsync_token`
- [ ] Atualizar `api.ts`:
  ```typescript
  const token = localStorage.getItem('jobsync_token');
  ```
- [ ] Atualizar `AuthContext.tsx` para salvar com key `jobsync_token`
- [ ] Remover leitura de keys antigas no api.ts

### 3. Remover keys antigas
- [ ] Verificar onde `nommand_access_token` é escrito
- [ ] Verificar onde `auth_token` é escrito
- [ ] Fazer migration: ao iniciar, verificar keys antigas e migrar para nova

---

## Testes de Validação

- [ ] Navegar entre páginas → apenas 1 fetch por rota (não N)
- [ ] `api.ts` lê token da key única
- [ ] AuthContext salva na key única
- [ ] Token funciona após reload da página

---

## Definition of Done

- [ ] `staleTime: 30000` no QueryClient
- [ ] Uma única key para token: `jobsync_token`
- [ ] Zero leitura de `nommand_access_token` ou `auth_token` em api.ts
- [ ] Navegação não gera requests excessivos

---

## Dependências

- **Bloqueado por:** 01-01 (remover mock auth) para saber qual key usar

## Tempo estimado: 2 horas
