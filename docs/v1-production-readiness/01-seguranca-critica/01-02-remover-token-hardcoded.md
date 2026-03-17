# 01-02 — Remover Token Hardcoded do App.tsx

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Frontend Core Review

---

## Problema

`App.tsx` injeta automaticamente uma API key real no localStorage de QUALQUER visitante da URL pública. Esse token fica visível no source bundle e dá acesso autenticado à API para qualquer pessoa.

**Trecho problemático:**
```typescript
// App.tsx linhas 14-17
if (!localStorage.getItem('token') && !localStorage.getItem('nommand_access_token')) {
  localStorage.setItem('token', 'jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2');
  localStorage.setItem('organizationId', 'org_demo_001');
}
```

---

## Arquivos Afetados

- `frontend-job-async/src/App.tsx` — remover bloco

---

## Passos de Implementação

### 1. Remover o bloco de bootstrap de demo
- [ ] Abrir `App.tsx`
- [ ] Localizar e remover completamente as linhas 14-17
- [ ] Verificar se há outras referências ao token hardcoded

### 2. Verificar impacto no ambiente de desenvolvimento
- [ ] Se o bloco era necessário para dev local, criar variável de ambiente:
  ```typescript
  // Somente em DEV, nunca em produção
  if (import.meta.env.DEV && import.meta.env.VITE_DEMO_TOKEN) {
    if (!localStorage.getItem('jobsync_token')) {
      localStorage.setItem('jobsync_token', import.meta.env.VITE_DEMO_TOKEN);
    }
  }
  ```
- [ ] Adicionar `VITE_DEMO_TOKEN` ao `.env.local` (nunca ao `.env`)
- [ ] Garantir que `.env.local` está no `.gitignore`

### 3. Revogar o token exposto
- [ ] Acessar Settings → API Keys
- [ ] Revogar `jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2`
- [ ] Criar novo token para uso em dev local apenas

---

## Testes de Validação

- [ ] Build do frontend: `npm run build`
- [ ] Inspecionar `dist/assets/*.js` e buscar por `jsk_a1b2` — não deve aparecer
- [ ] Abrir app em nova aba anônima sem nenhum token → deve redirecionar para Login
- [ ] `localStorage.getItem('token')` em console deve retornar `null` para novo visitante

---

## Definition of Done

- [ ] Nenhum token ou API key hardcoded no código fonte
- [ ] Bundle de produção não contém nenhuma chave `jsk_`
- [ ] Token antigo revogado no sistema
- [ ] `.env.local` existe e não está commitado

---

## Dependências

- Pode ser feito independentemente

## Tempo estimado: 30 minutos
