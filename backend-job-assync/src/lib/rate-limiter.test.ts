import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { redis } from './redis.js';
import { checkRateLimit, resetRateLimit, getRateLimitStatus } from './rate-limiter.js';

describe('Rate Limiter — Token Bucket', () => {
  const TEST_IDENTIFIER = 'test-rate-limiter';

  beforeEach(async () => {
    // Limpar bucket antes de cada teste
    await resetRateLimit(TEST_IDENTIFIER);
  });

  afterEach(async () => {
    // Limpar bucket após cada teste
    await resetRateLimit(TEST_IDENTIFIER);
  });

  describe('checkRateLimit — bucket padrão (100 tokens)', () => {
    it('deve permitir request dentro do limite', async () => {
      const result = await checkRateLimit(TEST_IDENTIFIER);

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(99);
      expect(result.limit).toBe(100);
      expect(result.resetAt).toBeUndefined();
    });

    it('deve decrementar tokens a cada request', async () => {
      await checkRateLimit(TEST_IDENTIFIER);
      await checkRateLimit(TEST_IDENTIFIER);
      await checkRateLimit(TEST_IDENTIFIER);

      const result = await checkRateLimit(TEST_IDENTIFIER);
      expect(result.remaining).toBe(96);
    });

    it('deve bloquear quando esgota os tokens', async () => {
      // Fazer 101 requests (limite = 100)
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(TEST_IDENTIFIER);
      }

      const result = await checkRateLimit(TEST_IDENTIFIER);

      expect(result.allowed).toBe(false);
      expect(result.remaining).toBe(0);
      expect(result.resetAt).toBeInstanceOf(Date);
      expect(result.limit).toBe(100);
    });

    it('deve retornar resetAt razoável quando bloqueado', async () => {
      // Esgotar bucket
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(TEST_IDENTIFIER);
      }

      const result = await checkRateLimit(TEST_IDENTIFIER);

      expect(result.resetAt).toBeDefined();
      // Deve ser no futuro, mas não muito longe (max 1 minuto)
      const now = Date.now();
      const resetTime = result.resetAt!.getTime();
      expect(resetTime).toBeGreaterThan(now);
      expect(resetTime).toBeLessThan(now + 70000); // ~70s max
    });

    it('deve respeitar configuração customizada', async () => {
      const customId = `${TEST_IDENTIFIER}-custom`;
      const config = { tokensPerMinute: 10, bucketSize: 10 };

      // Fazer 10 requests = esgota bucket
      for (let i = 0; i < 10; i++) {
        await checkRateLimit(customId, config);
      }

      const result = await checkRateLimit(customId, config);

      expect(result.allowed).toBe(false);
      expect(result.limit).toBe(10);

      await resetRateLimit(customId);
    });

    it('deve suportar custo customizado por request', async () => {
      const customId = `${TEST_IDENTIFIER}-cost`;
      const config = { tokensPerMinute: 100, bucketSize: 100, costPerRequest: 5 };

      const result1 = await checkRateLimit(customId, config);
      expect(result1.allowed).toBe(true);
      expect(result1.remaining).toBe(95); // 100 - 5 = 95

      // 20 requests com custo 5 = 100 tokens
      for (let i = 0; i < 19; i++) {
        await checkRateLimit(customId, config);
      }

      const result2 = await checkRateLimit(customId, config);
      expect(result2.allowed).toBe(false);

      await resetRateLimit(customId);
    });
  });

  describe('refill — tokens recuperam ao longo do tempo', () => {
    it('deve fazer refill de tokens após 1 minuto', { timeout: 70000 }, async () => {
      // Esgotar bucket
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(TEST_IDENTIFIER);
      }

      const blocked = await checkRateLimit(TEST_IDENTIFIER);
      expect(blocked.allowed).toBe(false);

      // Esperar 65 segundos (1 minuto + margem)
      await new Promise((resolve) => setTimeout(resolve, 65000));

      // Deve ter pelo menos 1 token de volta
      const result = await checkRateLimit(TEST_IDENTIFIER);
      expect(result.allowed).toBe(true);
    });

    it('deve fazer refill parcial com menos de 1 minuto', { timeout: 40000 }, async () => {
      // Esgotar bucket
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(TEST_IDENTIFIER);
      }

      // Esperar 30 segundos
      await new Promise((resolve) => setTimeout(resolve, 30000));

      // Deve ter ~50 tokens de volta
      const result = await checkRateLimit(TEST_IDENTIFIER);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBeGreaterThanOrEqual(45);
      expect(result.remaining).toBeLessThanOrEqual(55);
    });
  });

  describe('getRateLimitStatus — sem consumir tokens', () => {
    it('deve retornar status sem decrementar tokens', async () => {
      await checkRateLimit(TEST_IDENTIFIER); // consome 1, restam 99

      const status = await getRateLimitStatus(TEST_IDENTIFIER);

      expect(status.remaining).toBe(99);
      expect(status.limit).toBe(100);
    });

    it('deve retornar bucket cheio se nunca usado', async () => {
      const freshId = `${TEST_IDENTIFIER}-fresh`;
      const status = await getRateLimitStatus(freshId);

      expect(status.remaining).toBe(100);
      expect(status.limit).toBe(100);

      await resetRateLimit(freshId);
    });
  });

  describe('resetRateLimit — limpar bucket', () => {
    it('deve limpar bucket e resetar para o máximo', async () => {
      // Esgotar bucket
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(TEST_IDENTIFIER);
      }

      const blocked = await checkRateLimit(TEST_IDENTIFIER);
      expect(blocked.allowed).toBe(false);

      // Reset
      await resetRateLimit(TEST_IDENTIFIER);

      // Deve estar full novamente
      const result = await checkRateLimit(TEST_IDENTIFIER);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(99);
    });
  });

  describe('resiliência — Redis down', () => {
    it('deve retornar allow fail-open se Redis der erro', async () => {
      // Simular erro do Redis usando spy (restaura automaticamente após o teste)
      const evalSpy = vi.spyOn(redis, 'eval').mockRejectedValueOnce(new Error('Redis connection lost'));

      // Mesmo com Redis quebrado, não deve lançar erro
      const result = await checkRateLimit(`${TEST_IDENTIFIER}-error`);

      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(100);

      evalSpy.mockRestore();
    });
  });

  describe('identificadores únicos — isolamento', () => {
    it('deve isolar buckets por identificador', async () => {
      const id1 = `${TEST_IDENTIFIER}-iso-1`;
      const id2 = `${TEST_IDENTIFIER}-iso-2`;

      // Esgotar id1
      for (let i = 0; i < 100; i++) {
        await checkRateLimit(id1);
      }

      const blocked1 = await checkRateLimit(id1);
      expect(blocked1.allowed).toBe(false);

      // id2 ainda deve funcionar
      const ok2 = await checkRateLimit(id2);
      expect(ok2.allowed).toBe(true);

      await resetRateLimit(id1);
      await resetRateLimit(id2);
    });
  });
});
