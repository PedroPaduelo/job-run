# 04-04 — Substituir confirm() Nativo por Modal Radix

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🟡 IMPORTANT
**Status:** ⬚ Pendente
**Estimativa:** 3 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

`confirm()` nativo do browser é blocante, não pode ser estilizado, não funciona bem em mobile, e quebra em contextos que bloqueiam popups. Usado em Jobs.tsx e Settings.tsx.

---

## Arquivos Afetados

- `frontend-job-async/src/components/ui/confirm-dialog.tsx` — criar componente
- `frontend-job-async/src/pages/Jobs.tsx` — substituir confirm()
- `frontend-job-async/src/pages/Queues.tsx` — substituir confirm()
- `frontend-job-async/src/pages/Settings.tsx` — substituir confirm()
- `frontend-job-async/src/pages/RecurringJobs.tsx` — adicionar confirm no delete

---

## Passos de Implementação

### 1. Criar componente ConfirmDialog reutilizável
```tsx
// src/components/ui/confirm-dialog.tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";

interface ConfirmDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  variant?: 'default' | 'destructive';
}

export function ConfirmDialog({
  open, onConfirm, onCancel,
  title, description,
  confirmLabel = 'Confirmar',
  variant = 'destructive',
}: ConfirmDialogProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={variant === 'destructive' ? 'bg-destructive text-destructive-foreground' : ''}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### 2. Substituir em Jobs.tsx
```tsx
const [confirmCancel, setConfirmCancel] = useState<string | null>(null);

// Ao clicar em cancelar:
setConfirmCancel(jobId);

// Render:
<ConfirmDialog
  open={!!confirmCancel}
  title="Cancelar job?"
  description="Esta ação não pode ser desfeita."
  confirmLabel="Cancelar Job"
  onConfirm={() => { handleCancel(confirmCancel!); setConfirmCancel(null); }}
  onCancel={() => setConfirmCancel(null)}
/>
```

### 3. Repetir para Queues, Settings, RecurringJobs

---

## Testes de Validação

- [ ] Clicar em cancelar job → modal abre (não confirm nativo)
- [ ] Modal tem dark mode
- [ ] Cancelar no modal → nada acontece
- [ ] Confirmar no modal → ação executada
- [ ] Zero `confirm()` no código

---

## Definition of Done

- [ ] `ConfirmDialog` componente criado
- [ ] Zero `confirm()` ou `window.confirm()` no código
- [ ] Modal estilizado com dark mode
- [ ] Todas as ações destrutivas têm confirmação via modal

---

## Dependências

- Independente

## Tempo estimado: 3 horas
