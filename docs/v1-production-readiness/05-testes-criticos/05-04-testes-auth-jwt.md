# 05-04 — Testes: Autenticação JWT e Tokens

**Fase:** 05 — Testes Críticos
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 2 horas
**Agente que identificou:** Security Review

---

## Problema

AuthContext tem MOCK_USER hardcoded. Proteção de rotas não existe. Tokens são gerados mas não há validação que JWTs expiram, sejam inválidos, ou tenham permissions corretas. Sem testes, segurança invisível.

---

## Arquivos Afetados

- `backend-job-async/src/__tests__/auth.test.ts` — criar
- `backend-job-async/src/services/auth.service.ts` — testar

---

## Passos de Implementação

### 1. Configurar vitest para frontend

```typescript
// frontend-job-async/vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});
```

### 2. Criar setup para frontend

```typescript
// frontend-job-async/src/__tests__/setup.ts
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});
```

### 3. Testes de JWT (backend)

```typescript
// backend-job-async/src/__tests__/auth.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { authService } from '../services/auth.service';
import { prisma } from '../lib/prisma';

describe('AuthService - JWT', () => {
  let userId: string;

  beforeEach(async () => {
    await prisma.user.deleteMany({});

    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'hash-senha',
        name: 'Test User',
      }
    });
    userId = user.id;
  });

  it('deve gerar token válido com JWT', () => {
    const token = authService.generateToken(userId);
    expect(token).toMatch(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/); // JWT pattern
  });

  it('deve verificar token válido', () => {
    const token = authService.generateToken(userId);
    const decoded = authService.verifyToken(token);
    expect(decoded.userId).toBe(userId);
  });

  it('deve lançar erro quando token expira', () => {
    // Mock expired token (gerar token com exp no passado)
    const expiredToken = authService.generateToken(userId, -1); // exp = -1h

    expect(() => authService.verifyToken(expiredToken)).toThrow('Token expired');
  });

  it('deve lançar erro quando token é inválido', () => {
    const invalidToken = 'not-a-jwt';
    expect(() => authService.verifyToken(invalidToken)).toThrow();
  });
});
```

### 4. Testes de permissões

```typescript
describe('AuthService - permissions', () => {
  it('deve permitir acesso quando user tem permission', async () => {
    // Criar user com permissions: ['jobs:create', 'queues:view']
    // hasPermission('jobs:create') → true
    // hasPermission('queues:view') → true
    // hasPermission('users:delete') → false
  });
});
```

### 5. Testes de rotas protegidas (frontend)

```typescript
// frontend-job-async/src/__tests__/protected-route.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';

describe('ProtectedRoute', () => {
  it('deve renderizar componente quando user autenticado', () => {
    const mockAuth = { user: { id: '1', email: 'test@test.com' } };

    render(
      <MemoryRouter>
        <ProtectedRoute auth={mockAuth}>
          <div>Conteúdo Protegido</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(screen.getByText('Conteúdo Protegido')).toBeInTheDocument();
  });

  it('deve redirecionar para /login quando user não autenticado', () => {
    const mockAuth = { user: null };

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/dashboard" element={
            <ProtectedRoute auth={mockAuth}>
              <div>Dashboard</div>
            </ProtectedRoute>
          } />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });
});
```

---

## Testes de Validação

- [ ] Backend: token JWT válido → decoded corretamente
- [ ] Backend: token expirado → erro
- [ ] Backend: token inválido → erro
- [ ] Frontend: ProtectedRoute com auth → renderiza conteúdo
- [ ] Frontend: ProtectedRoute sem auth → redireciona

---

## Definition of Done

- [ ] Vitest configurado no frontend
- [ ] Pelo menos 6 testes de auth (backend + frontend)
- [ ] Teste de token expirado passando
- [ ] Teste de ProtectedRoute passando

---

## Dependências

- **Pré-requisito:** 05-01 (vitest) e 01-01 (remover mock auth)

## Tempo estimado: 2 horas
