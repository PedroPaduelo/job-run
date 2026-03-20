import { redis } from './redis.js';
import { createLogger } from './logger.js';

const log = createLogger({ service: 'rate-limiter' });

// ===========================================
// RATE LIMITER COM TOKEN BUCKET (Redis + Lua)
// ===========================================

// Script Lua para operação atômica de token bucket
// Retorna: remaining_tokens (se permitido) ou -1 (se bloqueado)
const TOKEN_BUCKET_LUA = `
local key = KEYS[1]
local now = tonumber(ARGV[1])
local tokens_to_add = tonumber(ARGV[2])
local max_tokens = tonumber(ARGV[3])
local cost = tonumber(ARGV[4])

-- Obter estado atual do bucket
local bucket = redis.call('HMGET', key, 'tokens', 'last_refill')
local current_tokens = tonumber(bucket[1]) or max_tokens
local last_refill = tonumber(bucket[2]) or now

-- Calcular tokens a adicionar desde o último refill
local elapsed = now - last_refill
local tokens_to_refill = math.floor(elapsed * tokens_to_add / 60) -- tokens por minuto

-- Refill tokens (limita a max_tokens)
current_tokens = math.min(max_tokens, current_tokens + tokens_to_refill)

-- Verificar se tem tokens suficientes
if current_tokens >= cost then
  current_tokens = current_tokens - cost
  redis.call('HMSET', key, 'tokens', current_tokens, 'last_refill', now)
  redis.call('EXPIRE', key, 3600) -- 1 hora TTL
  return current_tokens
else
  -- Sem tokens suficientes, mas atualiza o bucket com o refill
  redis.call('HMSET', key, 'tokens', current_tokens, 'last_refill', now)
  redis.call('EXPIRE', key, 3600)
  return -1
end
`;

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt?: Date;
  limit: number;
}

interface RateLimitConfig {
  tokensPerMinute: number;
  bucketSize: number;
  costPerRequest: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  tokensPerMinute: 100,
  bucketSize: 100,
  costPerRequest: 1,
};

/**
 * Rate limit usando Token Bucket armazenado no Redis
 * @param identifier Identificador único (ex: apikey:${id}, org:${orgId}, ip:${ip})
 * @param config Configuração de rate limit (usa default se não informado)
 * @returns RateLimitResult com allowed, remaining, resetAt, limit
 */
export async function checkRateLimit(
  identifier: string,
  config?: Partial<RateLimitConfig>
): Promise<RateLimitResult> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  // Hash da key do Redis
  const redisKey = `ratelimit:bucket:${identifier}`;

  // Timestamp atual em segundos
  const now = Math.floor(Date.now() / 1000);

  try {
    // Executar script Lua atomicamente
    // ioredis eval: (script, numKeys, ...keysAndArgs)
    const result = await redis.eval(
      TOKEN_BUCKET_LUA,
      1, // número de keys
      redisKey, // KEY[1]
      now.toString(), // ARGV[1]
      finalConfig.tokensPerMinute.toString(), // ARGV[2]
      finalConfig.bucketSize.toString(), // ARGV[3]
      finalConfig.costPerRequest.toString() // ARGV[4]
    );

    const remaining = typeof result === 'number' ? result : parseInt(result as string, 10);

    if (remaining >= 0) {
      // Permitido
      return {
        allowed: true,
        remaining,
        limit: finalConfig.bucketSize,
      };
    } else {
      // Bloqueado - calcular quando vai resetar (baseado no refill rate)
      const bucket = await redis.hmget(redisKey, 'tokens', 'last_refill');
      const currentTokens = parseFloat(bucket[0] || '0');
      const lastRefill = parseInt(bucket[1] || now.toString(), 10);

      // Tempo necessário para ganhar 1 token
      const secondsPerToken = 60 / finalConfig.tokensPerMinute;
      const tokensNeeded = finalConfig.costPerRequest - currentTokens;
      const resetInSeconds = Math.ceil(tokensNeeded * secondsPerToken);

      return {
        allowed: false,
        remaining: 0,
        resetAt: new Date((lastRefill + resetInSeconds) * 1000),
        limit: finalConfig.bucketSize,
      };
    }
  } catch (error) {
    // Em caso de erro do Redis, allow fail-open (não bloquear)
    log.error('Redis error, allowing request fail-open', { error: error instanceof Error ? error.message : String(error) });
    return {
      allowed: true,
      remaining: finalConfig.bucketSize,
      limit: finalConfig.bucketSize,
    };
  }
}

/**
 * Reset rate limit para um identifier (útil para testes ou admin)
 */
export async function resetRateLimit(identifier: string): Promise<void> {
  const redisKey = `ratelimit:bucket:${identifier}`;
  await redis.del(redisKey);
}

/**
 * Obter status atual do rate limit sem consumir token
 */
export async function getRateLimitStatus(
  identifier: string,
  config?: Partial<RateLimitConfig>
): Promise<{ remaining: number; limit: number }> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const redisKey = `ratelimit:bucket:${identifier}`;

  try {
    const bucket = await redis.hmget(redisKey, 'tokens', 'last_refill');
    const tokens = parseFloat(bucket[0] || finalConfig.bucketSize.toString());
    const lastRefill = parseInt(bucket[1] || Math.floor(Date.now() / 1000).toString(), 10);
    const now = Math.floor(Date.now() / 1000);
    const elapsed = now - lastRefill;
    const tokensToRefill = Math.floor((elapsed * finalConfig.tokensPerMinute) / 60);
    const remaining = Math.min(finalConfig.bucketSize, tokens + tokensToRefill);

    return {
      remaining: Math.floor(remaining),
      limit: finalConfig.bucketSize,
    };
  } catch {
    return { remaining: finalConfig.bucketSize, limit: finalConfig.bucketSize };
  }
}
