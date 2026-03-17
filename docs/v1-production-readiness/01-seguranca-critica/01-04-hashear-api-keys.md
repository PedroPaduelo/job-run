# 01-04 — Hashear API Keys no Banco

**Fase:** 01 — Segurança Crítica
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 4-6 horas
**Agente que identificou:** Queues & Stats Review

---

## Problema

API Keys são salvas em **plaintext** no banco. Se houver leak do banco, todas as chaves ficam expostas. O padrão de mercado (Stripe, GitHub) é armazenar apenas o hash da chave.

**Trecho problemático:**
```typescript
// apikey.service.ts:76
const apiKey = await prisma.apiKey.create({
  data: {
    key: generatedKey, // ❌ Salva plaintext
    // ...
  }
})
```

---

## Arquivos Afetados

- `backend-job-assync/src/services/apikey.service.ts` — reescrever geração e verificação
- `backend-job-assync/src/server.ts` — ajustar middleware de auth
- `backend-job-assync/prisma/schema.prisma` — possivelmente alterar `key` column

---

## Passos de Implementação

### 1. Escolher algoritmo de hash
- [ ] Usar SHA-256 ou bcrypt
- [ ] SHA-256 é mais simples e suficiente (keys não são senhas)
- [ ] Importar `crypto` do Node.js

### 2. Modificar `apikey.service.ts`
- [ ] Criar função `hashApiKey(key: string): string` que retorna SHA-256
- [ ] Alterar `create()` para salvar `keyHash` ao invés de `key`
- [ ] Retornar o key plaintext APENAS UMA VEZ (já está implementado)
- [ ] No `verify()`, fazer hash do input e comparar com `keyHash`

```typescript
import { createHash } from 'crypto'

function hashApiKey(key: string): string {
  return createHash('sha256').update(key).digest('hex')
}

// create()
const keyHash = hashApiKey(generatedKey)
await prisma.apiKey.create({
  data: { key: generatedKey, keyHash, /* ... */ }
})

// verify()
const inputHash = hashApiKey(inputKey)
const apiKey = await prisma.apiKey.findUnique({ where: { keyHash: inputHash } })
```

### 3. Ajustar schema Prisma se necessário
- [ ] Se a coluna atual é `key`, pode reutilizar
- [ ] Ou adicionar `keyHash` como nova coluna e migrar dados existentes
- [ ] Para migração: rodar script que hashea todas as keys existentes

### 4. Ajustar middleware de auth no server.ts
- [ ] O middleware que lê a key do header precisa fazer o hash
- [ ] Comparar hash ao invés de plaintext

---

## Testes de Validação

- [ ] Criar nova API key → salva no banco apenas hash
- [ ] Usar a key em request → autentica corretamente
- [ ] Usar key errada → 401 Unauthorized
- [ ] Leak do banco não expõe keys reais

---

## Definition of Done

- [ ] API keys são hasheadas com SHA-256 antes de salvar
- [ ] Apenas hash é armazenado no banco
- [ ] Key plaintext é retornada apenas UMA VEZ na criação
- [ ] Middleware de auth faz hash do header para comparar
- [ ] Keys existentes migradas para hash (se houver)

---

## Dependências

- Independente

## Risco: MÉDIO
- Precisa migrar keys existentes se houver alguma em uso
