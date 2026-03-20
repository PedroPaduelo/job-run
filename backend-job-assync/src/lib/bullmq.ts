import { Queue } from 'bullmq';
import { bullRedis } from './redis.js';

const queues = new Map<string, Queue>();

export function getQueue(orgId: string, queueName: string): Queue {
  const key = `jobs-${orgId}-${queueName}`;

  if (!queues.has(key)) {
    queues.set(
      key,
      new Queue(key, {
        connection: bullRedis,
        defaultJobOptions: {
          removeOnComplete: 100,
          removeOnFail: 1000,
        },
      })
    );
  }

  return queues.get(key)!;
}

export function getAllQueues(): Map<string, Queue> {
  return queues;
}
