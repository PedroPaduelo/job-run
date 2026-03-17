# 04-03 — Adicionar Responsividade Mobile ao Layout

**Fase:** 04 — Frontend Crítico
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 6-8 horas
**Agente que identificou:** Frontend Core Review

---

## Problema

Sidebar `fixed` com `w-60` e conteúdo com `pl-60` hardcoded. Em mobile (< 768px), o conteúdo fica comprimido atrás da sidebar. Não há hamburger menu, drawer, ou qualquer adaptação móvel.

---

## Arquivos Afetados

- `frontend-job-async/src/components/Layout.tsx` — adicionar sidebar responsiva

---

## Passos de Implementação

### 1. Adicionar estado de sidebar aberta/fechada
```tsx
// Layout.tsx
const [sidebarOpen, setSidebarOpen] = useState(false);
```

### 2. Sidebar colapsável em mobile
```tsx
{/* Mobile overlay */}
{sidebarOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-40 md:hidden"
    onClick={() => setSidebarOpen(false)}
  />
)}

{/* Sidebar */}
<aside className={cn(
  "fixed left-0 top-0 h-full w-60 bg-sidebar z-50 transition-transform duration-200",
  "md:translate-x-0", // Sempre visível em desktop
  sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0" // Mobile: toggle
)}>
  {/* ... conteúdo da sidebar ... */}
</aside>

{/* Main content */}
<main className="md:pl-60"> {/* Apenas em desktop */}
  {/* Hamburger button para mobile */}
  <button
    className="md:hidden p-2"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    <Menu className="w-5 h-5" />
  </button>

  {/* ... conteúdo ... */}
</main>
```

### 3. Fechar sidebar ao navegar
```tsx
// Fechar quando clicar em um item do menu
const handleNavigation = () => {
  setSidebarOpen(false);
};
```

### 4. Testar em viewport mobile (375px)
- [ ] Sidebar escondida por padrão
- [ ] Botão hamburger visível
- [ ] Clicar hamburger → sidebar abre
- [ ] Clicar fora → sidebar fecha
- [ ] Navegar para outra página → sidebar fecha

---

## Testes de Validação

- [ ] Mobile 375px: layout correto, conteúdo visível
- [ ] Mobile: hamburger abre/fecha sidebar
- [ ] Tablet 768px: sidebar aparece automaticamente
- [ ] Desktop 1280px: sidebar sempre visível, sem hamburger
- [ ] Todos os itens clicáveis têm tamanho de toque adequado (44x44px)

---

## Definition of Done

- [ ] Layout funciona em 375px (iPhone SE)
- [ ] Layout funciona em 768px (tablet)
- [ ] Layout funciona em 1280px (desktop)
- [ ] Sidebar com drawer em mobile
- [ ] Hamburger menu no header mobile
- [ ] Transição suave ao abrir/fechar

---

## Dependências

- Independente

## Tempo estimado: 6-8 horas
