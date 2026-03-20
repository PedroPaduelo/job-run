import { prisma } from '../lib/prisma.js';
import { queueService } from './queue.service.js';

export class StatsService {
  async getOverview(organizationId: string) {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const [totalJobs, todayJobs, processing, failedToday, queues] = await Promise.all([
      prisma.job.count({ where: { organizationId } }),
      prisma.job.count({
        where: {
          organizationId,
          createdAt: { gte: todayStart },
        },
      }),
      prisma.job.count({
        where: { organizationId, status: 'PROCESSING' },
      }),
      prisma.job.count({
        where: {
          organizationId,
          status: { in: ['FAILED', 'DEAD'] },
          updatedAt: { gte: todayStart },
        },
      }),
      queueService.list(organizationId),
    ]);

    // Calculate average duration using aggregate — avoids loading all rows
    const durationAgg = await prisma.$queryRawUnsafe<{ avg_duration: number | null }[]>(
      `SELECT AVG(EXTRACT(EPOCH FROM (completed_at - started_at)) * 1000)::float as avg_duration
       FROM jobs
       WHERE organization_id = $1
         AND status = 'COMPLETED'
         AND completed_at >= $2
         AND started_at IS NOT NULL`,
      organizationId,
      todayStart,
    );

    const avgDuration = Math.round(durationAgg[0]?.avg_duration || 0);

    // Get job status counts grouped by queue — single query instead of N+1
    const statusByQueue = await prisma.job.groupBy({
      by: ['queueId', 'status'],
      where: { organizationId },
      _count: true,
    });

    // Build queue stats from grouped data
    const queueStatsMap = new Map<string, Record<string, number>>();
    for (const row of statusByQueue) {
      if (!queueStatsMap.has(row.queueId)) {
        queueStatsMap.set(row.queueId, {});
      }
      queueStatsMap.get(row.queueId)![row.status] = row._count;
    }

    const queueStats = queues.map((q) => {
      const counts = queueStatsMap.get(q.id) || {};
      return {
        id: q.id,
        name: q.name,
        waiting: (counts['PENDING'] || 0) + (counts['SCHEDULED'] || 0),
        active: counts['PROCESSING'] || 0,
        completed: counts['COMPLETED'] || 0,
        failed: (counts['FAILED'] || 0) + (counts['DEAD'] || 0),
        delayed: counts['SCHEDULED'] || 0,
      };
    });

    return {
      totalJobs,
      todayJobs,
      processing,
      failedToday,
      avgDuration,
      queues: queueStats.filter(Boolean),
    };
  }

  async getTimeline(organizationId: string, hours = 24) {
    const now = new Date();
    const startTime = new Date(now.getTime() - hours * 60 * 60 * 1000);

    const jobs = await prisma.job.findMany({
      where: {
        organizationId,
        createdAt: { gte: startTime },
      },
      select: {
        createdAt: true,
        status: true,
      },
    });

    // Group by hour
    const timeline: Record<string, { total: number; completed: number; failed: number }> = {};

    for (let i = 0; i < hours; i++) {
      const hour = new Date(now.getTime() - i * 60 * 60 * 1000);
      const key = hour.toISOString().slice(0, 13) + ':00:00Z';
      timeline[key] = { total: 0, completed: 0, failed: 0 };
    }

    for (const job of jobs) {
      const key = job.createdAt.toISOString().slice(0, 13) + ':00:00Z';
      if (timeline[key]) {
        timeline[key].total++;
        if (job.status === 'COMPLETED') {
          timeline[key].completed++;
        } else if (job.status === 'FAILED' || job.status === 'DEAD') {
          timeline[key].failed++;
        }
      }
    }

    return Object.entries(timeline)
      .map(([hour, stats]) => ({
        hour,
        ...stats,
      }))
      .sort((a, b) => a.hour.localeCompare(b.hour));
  }
}

export const statsService = new StatsService();
