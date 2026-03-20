import 'dotenv/config';
import { prisma } from './src/lib/prisma.js';
import { getQueue } from './src/lib/bullmq.js';

async function createBulkJobs() {
  const ORG_ID = 'cmk24p3h5000je85j8jntycbf';
  const QUEUE_NAME = 'teste';

  // Get queue
  const queue = await prisma.queue.findFirst({
    where: { organizationId: ORG_ID, name: QUEUE_NAME }
  });

  if (!queue) {
    console.error('Queue not found');
    process.exit(1);
  }

  console.log('Creating 1000 jobs...');
  const startTime = Date.now();

  const bullQueue = getQueue(ORG_ID, QUEUE_NAME);

  // Create jobs in batches of 100
  for (let batch = 0; batch < 10; batch++) {
    const jobs = [];

    for (let i = 0; i < 100; i++) {
      const index = batch * 100 + i;

      // Create in database
      const job = await prisma.job.create({
        data: {
          organizationId: ORG_ID,
          queueId: queue.id,
          webhookUrl: 'https://viacep.com.br/ws/01001000/json/',
          webhookMethod: 'GET',
          payload: { index, cep: '01001000' },
          priority: Math.floor(Math.random() * 10),
          maxAttempts: queue.maxRetries,
          status: 'PENDING',
        },
      });

      jobs.push({
        name: 'process',
        data: {
          jobId: job.id,
          webhookUrl: job.webhookUrl,
          webhookMethod: job.webhookMethod,
          payload: job.payload,
          timeout: queue.timeout,
        },
        opts: {
          priority: job.priority,
          attempts: queue.maxRetries,
          backoff: { type: 'exponential', delay: queue.retryDelay },
        },
      });
    }

    // Add to BullMQ in bulk
    await bullQueue.addBulk(jobs);
    console.log('Batch ' + (batch + 1) + '/10 created (' + ((batch + 1) * 100) + ' jobs)');
  }

  const elapsed = Date.now() - startTime;
  console.log('\n✅ Created 1000 jobs in ' + elapsed + 'ms');

  await prisma.$disconnect();
}

createBulkJobs().catch(console.error);
