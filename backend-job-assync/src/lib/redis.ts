import Redis from 'ioredis';
import { createLogger } from './logger.js';

const log = createLogger({ service: 'redis' });

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  connectTimeout: 5000,
  commandTimeout: 10000,
});

// BullMQ exige maxRetriesPerRequest: null — conexão dedicada
export const bullRedis = new Redis(redisUrl, {
  maxRetriesPerRequest: null,
  connectTimeout: 5000,
});

redis.on('error', (err) => {
  log.error('Redis connection error', { error: err.message });
});

redis.on('connect', () => {
  log.info('Redis connected');
});
