# 04-02 — Implementar ErrorBoundary Real

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Frontend Core Review

---

## Problema

O `ErrorBoundary` exportado em `sentry.tsx` é um stub que apenas retorna `<>{children}</>`. Não captura erros de render. Qualquer crash → tela branca.

**Trecho problemático:**
```tsx
// src/lib/sentry.tsx
export function ErrorBoundary({ children, fallback }) {
  return <>{children}</>  // ❌ Não é um Error Boundary real
}
```

---

## Arquivos Afetados

- `frontend-job-async/src/lib/sentry.tsx` — implementar ErrorBoundary real
- `frontend-job-async/src/main.tsx` — envolver app com ErrorBoundary
- `frontend-job-async/package.json` — adicionar react-error-boundary

---

## Passos de Implementação

### 1. Instalar react-error-boundary
```bash
npm install react-error-boundary
```

### 2. Criar componente de fallback
```tsx
// src/components/ErrorFallback.tsx
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-2xl font-bold text-destructive mb-4">Algo deu errado</h1>
        <p className="text-muted-foreground mb-6">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-primary text-primary-foreground rounded"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
```

### 3. Atualizar sentry.tsx para usar react-error-boundary
```tsx
// src/lib/sentry.tsx
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        // Logar no Sentry quando disponível
        console.error('ErrorBoundary caught:', error);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
```

### 4. Envolver app no main.tsx
```tsx
// main.tsx
import { ErrorBoundary } from './lib/sentry';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
```

---

## Testes de Validação

- [ ] Forçar erro em um componente (throw new Error)
- [ ] Verificar que aparece tela de fallback, não tela branca
- [ ] Clicar em "Tentar novamente" → recarrega componente
- [ ] Erro logado no console corretamente

---

## Definition of Done

- [ ] `ErrorBoundary` real implementado com react-error-boundary
- [ ] Componente de fallback com mensagem e botão de retry
- [ ] `<ErrorBoundary>` no root do App
- [ ] Zero telas brancas — qualquer crash mostra fallback

---

## Dependências

- Independente

## Tempo estimado: 1 hora
