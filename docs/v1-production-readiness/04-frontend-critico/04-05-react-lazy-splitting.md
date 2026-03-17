# 04-05 — Implementar React.lazy() para Code Splitting

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

Todas as páginas são importadas estaticamente. O bundle inicial carrega código de todas as páginas, incluindo `recharts` (pesado), independente de qual rota o usuário acessa. Isso aumenta tempo de carregamento inicial.

---

## Arquivos Afetados

- `frontend-job-async/src/App.tsx` — converter imports para lazy

---

## Passos de Implementação

### 1. Converter todos os imports de página para lazy
```tsx
// App.tsx
import React, { lazy, Suspense } from 'react';

// ❌ Remover imports estáticos:
// import { Dashboard } from './pages/Dashboard';
// import { Jobs } from './pages/Jobs';

// ✅ Usar lazy:
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })));
const Jobs = lazy(() => import('./pages/Jobs').then(m => ({ default: m.Jobs })));
const JobDetail = lazy(() => import('./pages/JobDetail').then(m => ({ default: m.JobDetail })));
const Queues = lazy(() => import('./pages/Queues').then(m => ({ default: m.Queues })));
const QueueDetail = lazy(() => import('./pages/QueueDetail').then(m => ({ default: m.QueueDetail })));
const RecurringJobs = lazy(() => import('./pages/RecurringJobs').then(m => ({ default: m.RecurringJobs })));
const Settings = lazy(() => import('./pages/Settings').then(m => ({ default: m.Settings })));
```

### 2. Adicionar Suspense com loading state
```tsx
// App.tsx
<Suspense fallback={<PageLoading />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    {/* ... */}
  </Routes>
</Suspense>
```

### 3. Criar componente PageLoading
```tsx
// src/components/PageLoading.tsx
export function PageLoading() {
  return (
    <div className="flex items-center justify-center h-full min-h-[400px]">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}
```

### 4. Verificar que exports das páginas são default ou named
- [ ] Se exports são nomeados (`export function Dashboard`) → usar `.then(m => ({ default: m.Dashboard }))`
- [ ] Se exports são default → importar diretamente

---

## Testes de Validação

- [ ] `npm run build` — verificar que cria múltiplos chunks JS
- [ ] Abrir DevTools → Network → navegar para /jobs → carrega chunk de jobs
- [ ] Loading state aparece durante navegação
- [ ] Bundle inicial menor que antes

---

## Definition of Done

- [ ] Todas as páginas usam `React.lazy()`
- [ ] `<Suspense>` envolve as rotas
- [ ] Loading state visual durante navegação
- [ ] Build gera chunks separados por página
- [ ] Bundle inicial < 300KB gzipped

---

## Dependências

- Independente

## Tempo estimado: 2 horas
