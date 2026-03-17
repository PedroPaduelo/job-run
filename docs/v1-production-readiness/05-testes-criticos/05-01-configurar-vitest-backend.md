# 05-01 — Configurar Vitest para Backend

**Fase:** 05 — Testes Críticos
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** General Review

---

## Problema

`vitest.config.ts` existe no backend mas está vazio/básico. Não há testes implementados. Coverage está 0%. Crítico para produção sem testes.

---

## Arquivos Afetados

- `backend-job-async/vitest.config.ts` — configurar ambiente de teste
- `backend-job-async/package.json` — adicionar scripts de teste
- `backend-job-async/src/__tests__/` — criar pasta para testes

---

## Passos de Implementação

### 1. Configurar vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/__tests__/**',
      ],
    },
    setupFiles: ['./src/__tests__/setup.ts'],
  },
});
```

### 2. Criar setup de teste
```typescript
// src/__tests__/setup.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

beforeAll(async () => {
  // Limpar banco de teste antes de rodar
  await prisma.job.deleteMany({});
  await prisma.queue.deleteMany({});
  await prisma.recurringJob.deleteMany({});
});

afterAll(async () => {
  await prisma.$disconnect();
});
```

### 3. Adicionar scripts no package.json
```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

### 4. Variável de ambiente para teste
```bash
# .env.test
DATABASE_URL="postgresql://postgres:8c44713dd7af67147299@217.216.81.188:54321/jobsync_test"
```

---

## Testes de Validação

- [ ] Rodar `npm test` — vitest inicia sem erro
- [ ] Rodar `npm run test:coverage` — gera relatório HTML
- [ ] Criar um teste dummy que passa
- [ ] Verificar que setup limpa banco antes de rodar

---

## Definition of Done

- [ ] `vitest.config.ts` configurado com coverage
- [ ] `src/__tests__/setup.ts` criado
- [ ] Scripts `test`, `test:run`, `test:coverage` no package.json
- [ ] Banco de teste configurado
- [ ] Pelo menos 1 teste dummy rodando e passando

---

## Dependências

- Independente

## Tempo estimado: 1 hora
