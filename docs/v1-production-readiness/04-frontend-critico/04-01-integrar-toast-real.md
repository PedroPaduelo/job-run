# 04-01 — Integrar Toast Real (Sonner)

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

`toast.ts` usa apenas `console.error` — usuário não vê nenhum feedback visual de erros. Erros de criação de job, cancelamento, retry, API keys — NADA aparece na tela.

**Trecho problemático:**
```typescript
// src/lib/toast.ts
export const toast = {
  success: (message: string) => console.log(`✅ ${message}`),
  error: (message: string) => console.error(`❌ ${message}`),
  // ❌ APENAS CONSOLE, sem UI
};
```

---

## Arquivos Afetados

- `frontend-job-async/src/lib/toast.ts` — reescrever
- `frontend-job-async/src/main.tsx` — adicionar `<Toaster />`
- `frontend-job-async/package.json` — adicionar sonner

---

## Passos de Implementação

### 1. Instalar Sonner
```bash
cd frontend-job-async && npm install sonner
```

### 2. Reescrever toast.ts
```typescript
// src/lib/toast.ts
import { toast as sonnerToast } from 'sonner';

export const toast = {
  success: (message: string) => sonnerToast.success(message),
  error: (message: string) => sonnerToast.error(message),
  warning: (message: string) => sonnerToast.warning(message),
  info: (message: string) => sonnerToast.info(message),
  loading: (message: string) => sonnerToast.loading(message),
  dismiss: (id?: string | number) => sonnerToast.dismiss(id),
};

export { sonnerToast as toast };
```

### 3. Adicionar Toaster no main.tsx ou App.tsx
```tsx
// App.tsx
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        theme={isDark ? 'dark' : 'light'}
      />
      <Routes>
        {/* ... */}
      </Routes>
    </>
  );
}
```

### 4. Testar em todas as páginas
- [ ] Jobs: criar, cancelar, retry
- [ ] Queues: criar, pausar, deletar
- [ ] Recurring Jobs: criar, pausar, trigger, deletar
- [ ] Settings: criar API key, revogar

---

## Testes de Validação

- [ ] Criar job → toast verde "Job criado com sucesso"
- [ ] Cancelar job → toast verde "Job cancelado"
- [ ] Erro de validação → toast vermelho com mensagem
- [ ] Toast desaparece após 4s
- [ ] Toast aparece em dark mode com cores corretas

---

## Definition of Done

- [ ] `sonner` instalado e configurado
- [ ] `toast.ts` usa sonner ao invés de console
- [ ] `<Toaster />` no App.tsx
- [ ] Feedback visual em todas as operações CRUD
- [ ] Dark mode funciona nos toasts

---

## Dependências

- Independente — pode ser feito a qualquer momento

## Tempo estimado: 2 horas
