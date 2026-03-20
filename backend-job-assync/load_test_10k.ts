import 'dotenv/config';

const API_URL = 'http://localhost:3001';
const TOTAL_JOBS = 10000;
const BATCH_SIZE = 2000; // Send in batches to avoid request timeout

async function getAuthToken(): Promise<string> {
  // Use a valid API key or JWT token
  // For testing, we'll create jobs directly via the service
  const token = process.env.TEST_TOKEN || '';
  if (!token) {
    console.log('No TEST_TOKEN set, using direct database access...');
  }
  return token;
}

async function createJobsViaAPI(token: string) {
  console.log(`\n🚀 Starting load test: ${TOTAL_JOBS} jobs`);
  console.log(`📦 Batch size: ${BATCH_SIZE}`);

  const startTime = Date.now();
  let totalCreated = 0;

  for (let batch = 0; batch < Math.ceil(TOTAL_JOBS / BATCH_SIZE); batch++) {
    const batchStart = Date.now();
    const jobsInBatch = Math.min(BATCH_SIZE, TOTAL_JOBS - batch * BATCH_SIZE);

    const jobs = [];
    for (let i = 0; i < jobsInBatch; i++) {
      const index = batch * BATCH_SIZE + i;
      jobs.push({
        webhookUrl: 'https://viacep.com.br/ws/01001000/json/',
        webhookMethod: 'GET',
        payload: { index, batch: batch + 1 },
        priority: Math.floor(Math.random() * 10),
      });
    }

    const response = await fetch(`${API_URL}/api/jobs/bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        queue: 'load-test',
        jobs,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`❌ Batch ${batch + 1} failed:`, error);
      continue;
    }

    const result = await response.json();
    totalCreated += result.created;

    const batchTime = Date.now() - batchStart;
    console.log(`✅ Batch ${batch + 1}/${Math.ceil(TOTAL_JOBS / BATCH_SIZE)}: ${result.created} jobs created in ${batchTime}ms`);
  }

  const totalTime = Date.now() - startTime;
  console.log(`\n📊 Results:`);
  console.log(`   Total jobs created: ${totalCreated}`);
  console.log(`   Total time: ${totalTime}ms`);
  console.log(`   Rate: ${Math.round(totalCreated / (totalTime / 1000))} jobs/sec`);
}

async function createJobsDirect() {
  // Direct database + BullMQ access for testing without auth
  const { prisma } = await import('./src/lib/prisma.js');
  const { getQueue } = await import('./src/lib/bullmq.js');

  const ORG_ID = 'cmk24p3h5000je85j8jntycbf';
  const QUEUE_NAME = 'load-test';

  // Ensure queue exists
  let queue = await prisma.queue.findFirst({
    where: { organizationId: ORG_ID, name: QUEUE_NAME }
  });

  if (!queue) {
    queue = await prisma.queue.create({
      data: {
        organizationId: ORG_ID,
        name: QUEUE_NAME,
        concurrency: 50,
        maxRetries: 3,
        retryDelay: 5000,
        timeout: 30000,
      }
    });
    console.log('Created queue:', QUEUE_NAME);
  }

  console.log(`\n🚀 Starting load test: ${TOTAL_JOBS} jobs (direct mode)`);
  console.log(`📦 Batch size: ${BATCH_SIZE}`);

  const startTime = Date.now();
  const bullQueue = getQueue(ORG_ID, QUEUE_NAME);
  let totalCreated = 0;

  for (let batch = 0; batch < Math.ceil(TOTAL_JOBS / BATCH_SIZE); batch++) {
    const batchStart = Date.now();
    const jobsInBatch = Math.min(BATCH_SIZE, TOTAL_JOBS - batch * BATCH_SIZE);

    // Generate job data
    const jobsToCreate = [];
    for (let i = 0; i < jobsInBatch; i++) {
      const index = batch * BATCH_SIZE + i;
      const id = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      jobsToCreate.push({
        id,
        organizationId: ORG_ID,
        queueId: queue.id,
        webhookUrl: 'https://viacep.com.br/ws/01001000/json/',
        webhookMethod: 'GET',
        payload: { index, batch: batch + 1 },
        priority: Math.floor(Math.random() * 10),
        maxAttempts: queue.maxRetries,
        status: 'PENDING',
      });
    }

    // Batch insert to database
    await prisma.job.createMany({
      data: jobsToCreate,
      skipDuplicates: true,
    });

    // Batch add to BullMQ
    const bullJobs = jobsToCreate.map((job) => ({
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
        backoff: { type: 'exponential' as const, delay: queue.retryDelay },
      },
    }));

    await bullQueue.addBulk(bullJobs);
    totalCreated += jobsInBatch;

    const batchTime = Date.now() - batchStart;
    console.log(`✅ Batch ${batch + 1}/${Math.ceil(TOTAL_JOBS / BATCH_SIZE)}: ${jobsInBatch} jobs in ${batchTime}ms`);
  }

  const totalTime = Date.now() - startTime;
  console.log(`\n📊 Results:`);
  console.log(`   Total jobs created: ${totalCreated}`);
  console.log(`   Total time: ${totalTime}ms`);
  console.log(`   Rate: ${Math.round(totalCreated / (totalTime / 1000))} jobs/sec`);

  await prisma.$disconnect();
}

// Run the test
const token = await getAuthToken();
if (token) {
  await createJobsViaAPI(token);
} else {
  await createJobsDirect();
}
