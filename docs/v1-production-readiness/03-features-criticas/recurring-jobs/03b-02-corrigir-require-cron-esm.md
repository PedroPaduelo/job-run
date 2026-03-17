# 03b-02 — Corrigir require('cron') em Contexto ESM

**Fase:** 03b — Features Críticas — Recurring Jobs
**Prioridade:** 🔴 CRITICAL — BLOQUEADOR
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Tests & Coverage Review

---

## Problema

O projeto usa `"type": "module"` no `package.json` (ESM). Em `calculateNextRun()` e `recurring-job.service.ts`, há uso de `require('cron')` que **não funciona em ESM** — vai gerar `ReferenceError: require is not defined`.

**Trecho problemático:**
```typescript
// scheduler.ts:145
const { CronTime } = require('cron'); // ❌ require não existe em ESM

// recurring-job.service.ts
const { CronTime } = require('cron'); // ❌ mesmo problema
```

---

## Arquivos Afetados

- `backend-job-assync/src/lib/scheduler.ts` — trocar require por import
- `backend-job-assync/src/services/recurring-job.service.ts` — trocar require por import

---

## Passos de Implementação

### 1. Verificar todos os require() dinâmicos
```bash
grep -rn "require(" src/
```

### 2. Substituir por import estático no topo do arquivo
```typescript
// ❌ Remover:
const { CronTime } = require('cron');

// ✅ Adicionar no topo do arquivo:
import { CronTime } from 'cron';
```

### 3. Verificar que 'cron' exporta CronTime com ESM
- [ ] Abrir `node_modules/cron/package.json`
- [ ] Verificar se tem campo `"exports"` ou `"module"`
- [ ] Se não for compatível com ESM, usar `cron-parser` como alternativa

### 4. Alternativa: usar cron-parser (mais moderno e ESM-friendly)
```bash
npm install cron-parser
```

```typescript
import cronParser from 'cron-parser';

function calculateNextCronRun(expression: string): Date {
  try {
    const interval = cronParser.parseExpression(expression);
    return interval.next().toDate();
  } catch (error) {
    console.error('[Scheduler] Invalid cron expression:', expression);
    // Fallback: 60 min
    return new Date(Date.now() + 60 * 60 * 1000);
  }
}
```

---

## Testes de Validação

- [ ] `npm run build` — sem erros de importação
- [ ] Criar recorrência do tipo CRON com `"0 9 * * *"`
- [ ] `nextRunAt` calculado corretamente (próximas 9h)
- [ ] Zero erros `require is not defined`

---

## Definition of Done

- [ ] Zero `require()` dinâmico no código
- [ ] Expressões CRON calculam `nextRunAt` corretamente
- [ ] Build passa sem erros
- [ ] Teste de nextRunAt para cron `"*/2 * * * *"` retorna 2 minutos no futuro

---

## Dependências

- Independente — mas URGENTE (pode estar quebrando silenciosamente agora)

## Tempo estimado: 1 hora
