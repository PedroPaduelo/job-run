import 'dotenv/config';
import { prisma } from './src/lib/prisma.js';

async function updateQueue() {
  const result = await prisma.queue.updateMany({
    where: { name: 'load-test' },
    data: { rateLimit: 10000, concurrency: 100 }
  });
  console.log('Updated:', result);
  await prisma.$disconnect();
}

updateQueue();
