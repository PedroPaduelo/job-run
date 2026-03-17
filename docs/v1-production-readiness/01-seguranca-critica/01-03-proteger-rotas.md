# 01-03 — Proteger Todas as Rotas com ProtectedRoute

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

O componente `ProtectedRoute` existe mas NÃO é usado em `App.tsx`. Todas as rotas são públicas — Dashboard, Jobs, Queues, Settings são acessíveis sem autenticação.

**Trecho problemático:**
```typescript
// App.tsx — rotas sem proteção
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/queues" element={<Queues />} />
// ... TODAS públicas
```

---

## Arquivos Afetados

- `frontend-job-async/src/App.tsx` — adicionar ProtectedRoute
- `frontend-job-async/src/components/ProtectedRoute.tsx` — verificar e ajustar se necessário

---

## Passos de Implementação

### 1. Verificar ProtectedRoute existente
- [ ] Abrir `ProtectedRoute.tsx`
- [ ] Verificar se está verificando token corretamente
- [ ] Garantir que redireciona para `/login` se não autenticado

### 2. Importar ProtectedRoute no App.tsx
- [ ] Adicionar import: `import { ProtectedRoute } from './components/ProtectedRoute'`

### 3. Envolver cada rota privada
- [ ] Envolver `/dashboard` → `<ProtectedRoute><Dashboard /></ProtectedRoute>`
- [ ] Envolver `/jobs` → `<ProtectedRoute><Jobs /></ProtectedRoute>`
- [ ] Envolver `/jobs/:id` → `<ProtectedRoute><JobDetail /></ProtectedRoute>`
- [ ] Envolver `/queues` → `<ProtectedRoute><Queues /></ProtectedRoute>`
- [ ] Envolver `/queues/:id` → `<ProtectedRoute><QueueDetail /></ProtectedRoute>`
- [ ] Envolver `/recurring-jobs` → `<ProtectedRoute><RecurringJobs /></ProtectedRoute>`
- [ ] Envolver `/settings` → `<ProtectedRoute><Settings /></ProtectedRoute>`

### 4. Rotas que devem permanecer públicas
- [ ] `/login` — pública (para redirecionamento do OAuth)
- [ ] `/callback` — pública (retorno do OAuth)
- [ ] `/` — pode redirecionar para /dashboard se logado, /login se não

### 5. Testar redirect de não autenticado
- [ ] Limpar localStorage
- [ ] Acessar diretamente `/jobs` → deve redirecionar para `/login`

---

## Testes de Validação

- [ ] Visitante anônimo acessa `/` → redireciona para Login
- [ ] Visitante anônimo acessa `/dashboard` → redireciona para Login
- [ ] Visitante anônimo acessa `/jobs` → redireciona para Login
- [ ] Visitante anônimo acessa `/login` → página funciona (loop)
- [ ] Usuário autenticado acessa `/dashboard` → funciona
- [ ] Usuário autenticado acessa `/jobs` → funciona
- [ ] Logout → redireciona para Login

---

## Definition of Done

- [ ] Todas as rotas exceto `/login` e `/callback` usam `ProtectedRoute`
- [ ] Acesso anônimo a qualquer rota protegida → 404 ou redirect para Login
- [ ] Usuário autenticado acessa tudo normalmente
- [ ] Testes manuais passam

---

## Dependências

- **Bloqueado por:** 01-01 (remover mock auth)
- **Bloqueia:** Nada

## Ordem recomendada: após 01-01
