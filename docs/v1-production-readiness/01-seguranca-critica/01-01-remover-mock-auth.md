# 01-01 — Remover Mock Auth e Implementar Auth Real

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 4-6 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

O `AuthContext.tsx` usa um `MOCK_USER` hardcoded com `demo@exemplo.com`. A função `login()` apenas salva dados fake no localStorage sem qualquer autenticação real. Qualquer pessoa que acesse a URL do sistema entra automaticamente com a sessão do demo user.

**Trecho problemático:**
```typescript
// src/contexts/AuthContext.tsx
// Implementação para teste de UI — NUNCA deveria ir para produção

const MOCK_USER = {
  id: 'demo_user_001',
  email: 'demo@exemplo.com',
  name: 'Demo User',
  // ...
}

const login = async () => {
  // Simplesmente grava o mock direto sem verificação
  localStorage.setItem('auth_token', `mock_token_${Date.now()}`);
}
```

---

## Arquivos Afetados

- `frontend-job-async/src/contexts/AuthContext.tsx` — reescrever
- `frontend-job-async/src/pages/Login.tsx` — verificar e ajustar
- `frontend-job-async/src/pages/Callback.tsx` — implementar callback real
- `frontend-job-async/src/lib/api.ts` — unificar token key

---

## Passos de Implementação

### 1. Entender o fluxo atual de auth
- [ ] Ler `AuthContext.tsx` completo
- [ ] Ler `Login.tsx` para entender o flow atual
- [ ] Ler `Callback.tsx` para ver o que já está implementado
- [ ] Verificar variáveis de ambiente: `frontend-job-async/.env`

### 2. Identificar o provedor OAuth
- [ ] Verificar `VITE_AUTH_SERVER_URL` ou similar no `.env`
- [ ] Verificar `backend-job-assync/src/lib/auth.ts` para entender o JWT expected
- [ ] Confirmar endpoints: `/oauth/authorize`, `/oauth/token`, `/oauth/userinfo`

### 3. Implementar AuthContext real
- [ ] Remover `MOCK_USER`, `MOCK_ORGS` e todos os dados hardcoded
- [ ] Implementar `login()` que redireciona para OAuth provider
- [ ] Implementar `logout()` que limpa tokens e redireciona
- [ ] Implementar `refreshToken()` se o provider suportar refresh
- [ ] Persistir token com a key correta (unificar com `api.ts`)

### 4. Unificar keys de localStorage
- [ ] Escolher UMA key para o token (ex: `jobsync_token`)
- [ ] Atualizar `api.ts` para usar a mesma key
- [ ] Atualizar `AuthContext.tsx` para usar a mesma key
- [ ] Remover referências a `nommand_access_token`, `token`, `auth_token`

### 5. Implementar Callback page
- [ ] `Callback.tsx` deve receber o `code` da URL
- [ ] Trocar `code` por `access_token` via API ou direto no backend
- [ ] Salvar token e redirecionar para `/`

### 6. Ajustar Login page
- [ ] Botão de login deve chamar `login()` do contexto
- [ ] Não deve haver formulário de email/senha se for SSO puro

---

## Testes de Validação

- [ ] Abrir URL sem estar logado → redireciona para Login
- [ ] Clicar em Login → redireciona para provider OAuth
- [ ] Após autenticação → retorna ao app com sessão ativa
- [ ] Inspecionar localStorage → token real, não `mock_token_*`
- [ ] Logout → limpa localStorage e redireciona para Login
- [ ] Refresh da página → sessão persiste

---

## Definition of Done

- [ ] Zero referências a `MOCK_USER`, `demo@exemplo.com`, `mock_token_`
- [ ] `AuthContext.tsx` sem comentários de "apenas para teste"
- [ ] Usuário não autenticado não acessa nenhuma rota protegida
- [ ] Token armazenado em localStorage com key única e consistente
- [ ] Logout funciona completamente

---

## Dependências

- Nenhuma — pode ser feito primeiro

## Bloqueado por

- Esta tarefa bloqueia: **01-03** (ProtectedRoute), **01-02** (token hardcoded)
