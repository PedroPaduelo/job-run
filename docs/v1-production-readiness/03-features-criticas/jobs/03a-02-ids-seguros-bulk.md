# 03a-02 — Usar IDs Seguros no createBulk

**Fase:** 03a — Features Críticas — Jobs
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 30 minutos
**Agente que identificou:** Jobs Feature Review, Tests & Coverage Review

---

## Problema

`createBulk` gera IDs com `Math.random()` — não é garantidamente único e pode causar colisões.

**Trecho problemático:**
```typescript
// job.service.ts
const id = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
// ❌ Colisões possíveis em alta concorrência
```

---

## Arquivos Afetados

- `backend-job-assync/src/services/job.service.ts` — alterar geração de ID

---

## Passos de Implementação

### 1. Instalar cuid2 ou nanoid
```bash
npm install @paralleldrive/cuid2
# ou
npm install nanoid
```

### 2. Substituir Math.random por cuid
```typescript
import { createId } from '@paralleldrive/cuid2';

// Em createBulk:
const id = createId(); // ex: 'cmlr0s2bv0000lb08iip3q5v8'
```

### 3. Verificar se cuid é usado no createSingle também
- [ ] Verificar como o ID é gerado em `create()` (não bulk)
- [ ] Se também usa Math.random, corrigir também

---

## Testes de Validação

- [ ] Criar 1000 jobs em bulk
- [ ] Verificar que todos têm IDs únicos
- [ ] Zero colisões de ID

---

## Definition of Done

- [ ] `createBulk` usa `cuid2` ou `nanoid`
- [ ] Zero uso de `Math.random()` para IDs
- [ ] 1000 bulk jobs → todos com IDs únicos

---

## Dependências

- Independente

## Tempo estimado: 30 minutos
