import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useOverviewStats, useTimeline } from "../hooks/useStats";
import { useJobs } from "../hooks/useJobs";
import { formatDistanceToNow } from "date-fns";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { STATUS_COLORS, type JobStatus } from "../lib/constants";

export function Dashboard() {
  const { data: stats, isLoading: statsLoading } = useOverviewStats();
  const { data: timeline } = useTimeline(24);
  const { data: recentJobs } = useJobs({ limit: 5 });

  if (statsLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your job processing system</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.totalJobs.toLocaleString() || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.todayJobs || 0} today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.processing || 0}</div>
            <p className="text-xs text-muted-foreground">
              Active jobs right now
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats?.avgDuration ? `${(stats.avgDuration / 1000).toFixed(1)}s` : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              Per job today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Today</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats?.failedToday || 0}</div>
            <p className="text-xs text-muted-foreground">
              Jobs that failed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Lists */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Timeline Chart */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Jobs Timeline (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-75">
              {timeline && timeline.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeline}>
                    <XAxis
                      dataKey="hour"
                      tickFormatter={(value) => new Date(value).getHours().toString().padStart(2, "0")}
                      fontSize={12}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip
                      labelFormatter={(value) => new Date(value).toLocaleString()}
                    />
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="completed"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="failed"
                      stroke="#ff6b6b"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  No data available
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Jobs */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Jobs</CardTitle>
            <Link to="/jobs" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs?.jobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/jobs/${job.id}`}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium truncate max-w-50">
                      {job.id}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {job.queueName || "Unknown queue"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={STATUS_COLORS[job.status as JobStatus] || "default"}>
                      {job.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                </Link>
              ))}
              {(!recentJobs?.jobs || recentJobs.jobs.length === 0) && (
                <p className="text-center text-muted-foreground py-8">No jobs yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue Stats */}
      {stats?.queues && stats.queues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Queue Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {stats.queues.map((queue) => (
                <Link
                  key={queue.id}
                  to={`/queues/${queue.id}`}
                  className="p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <h3 className="font-medium">{queue.name}</h3>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Waiting</p>
                      <p className="font-medium">{queue.waiting}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active</p>
                      <p className="font-medium">{queue.active}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Failed</p>
                      <p className="font-medium text-destructive">{queue.failed}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
