# 03a-03 — Adicionar Timeout no Callback do Worker

**Fase:** 03a — Features Críticas — Jobs
**Prioridade:** 🔴 CRITICAL
**Status:** ⬚ Pendente
**Estimativa:** 1 hora
**Agente que identificou:** Jobs Feature Review

---

## Problema

O callback URL no worker não tem timeout. Uma URL lenta bloqueia o worker indefinidamente.

**Trecho problemático:**
```typescript
// worker.ts
await fetch(callbackUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* ... */ }),
  // ❌ Sem timeout
});
```

---

## Arquivos Afetados

- `backend-job-assync/src/worker.ts` — adicionar AbortController no callback

---

## Passos de Implementação

### 1. Adicionar AbortController com timeout de 5s
```typescript
async function sendCallback(callbackUrl: string, payload: object): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s

  try {
    const response = await fetch(callbackUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(`[Worker] Callback returned ${response.status} for ${callbackUrl}`);
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.warn(`[Worker] Callback timeout (5s) for ${callbackUrl}`);
    } else {
      console.error(`[Worker] Callback error for ${callbackUrl}:`, error);
    }
    // Não relançar erro — callback não deve bloquear worker
  } finally {
    clearTimeout(timeoutId);
  }
}
```

### 2. Callback não deve bloquear worker se falhar
- [ ] Erro no callback = apenas log, não falha o job
- [ ] Timeout no callback = apenas log, não falha o job

### 3. Aplicar em todos os lugares que chamam callback
- [ ] Buscar todos os `fetch(callbackUrl` no worker.ts
- [ ] Substituir por `sendCallback()`

---

## Testes de Validação

- [ ] Callback lento (> 5s) → timeout, job continua
- [ ] Callback com erro 500 → log, job continua
- [ ] Callback com sucesso 200 → funciona normalmente
- [ ] Worker não bloqueia com callback morto

---

## Definition of Done

- [ ] Callback tem AbortController com 5s timeout
- [ ] Erro/timeout no callback não falha o job
- [ ] `AbortError` detectado e logado especificamente
- [ ] Função `sendCallback()` reutilizável

---

## Dependências

- Independente

## Tempo estimado: 1 hora
