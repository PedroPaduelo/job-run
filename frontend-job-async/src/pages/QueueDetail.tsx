import { useParams, Link } from "react-router-dom";
import { useQueue, useQueueStats, useUpdateQueue, usePauseQueue, useResumeQueue } from "../hooks/useQueues";
import { useJobs } from "../hooks/useJobs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { ArrowLeft, Pause, Play, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

const statusColors: Record<string, "default" | "secondary" | "destructive" | "success" | "warning"> = {
  PENDING: "secondary",
  SCHEDULED: "secondary",
  PROCESSING: "warning",
  COMPLETED: "success",
  FAILED: "destructive",
  CANCELLED: "default",
  DEAD: "destructive",
};

export function QueueDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: queue, isLoading } = useQueue(id!);
  const { data: stats } = useQueueStats(id!);
  const { data: jobs } = useJobs({ queue: queue?.name, limit: 10 });
  const updateQueue = useUpdateQueue();
  const pauseQueue = usePauseQueue();
  const resumeQueue = useResumeQueue();

  const [config, setConfig] = useState({
    concurrency: 5,
    maxRetries: 3,
    timeout: 300000,
    rateLimit: "",
  });

  useEffect(() => {
    if (queue) {
      setConfig({
        concurrency: queue.concurrency,
        maxRetries: queue.maxRetries,
        timeout: queue.timeout,
        rateLimit: queue.rateLimit?.toString() || "",
      });
    }
  }, [queue]);

  const handleSave = async () => {
    if (id) {
      await updateQueue.mutateAsync({
        id,
        data: {
          concurrency: config.concurrency,
          maxRetries: config.maxRetries,
          timeout: config.timeout,
          rateLimit: config.rateLimit ? parseInt(config.rateLimit) : undefined,
        },
      });
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  if (!queue) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Queue not found</p>
        <Link to="/queues" className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-9 px-4 py-2">
          Back to queues
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/queues" className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">{queue.name}</h1>
            <p className="text-muted-foreground">Queue configuration and stats</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={queue.isActive ? "success" : "secondary"}>
            {queue.isActive ? "Active" : "Inactive"}
          </Badge>
          {queue.isPaused ? (
            <>
              <Badge variant="warning">Paused</Badge>
              <Button variant="outline" onClick={() => resumeQueue.mutateAsync(id!)} disabled={resumeQueue.isPending}>
                <Play className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => pauseQueue.mutateAsync(id!)} disabled={pauseQueue.isPending}>
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Current Stats</CardTitle>
          </CardHeader>
          <CardContent>
            {stats ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold">{stats.waiting}</p>
                  <p className="text-sm text-muted-foreground">Waiting</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">{stats.active}</p>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-red-600">{stats.failed}</p>
                  <p className="text-sm text-muted-foreground">Failed</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg col-span-2">
                  <p className="text-2xl font-bold">{stats.delayed}</p>
                  <p className="text-sm text-muted-foreground">Delayed</p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">Loading stats...</p>
            )}
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Concurrency</label>
              <Input
                type="number"
                value={config.concurrency}
                onChange={(e) => setConfig({ ...config, concurrency: parseInt(e.target.value) || 1 })}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Max Retries</label>
              <Input
                type="number"
                value={config.maxRetries}
                onChange={(e) => setConfig({ ...config, maxRetries: parseInt(e.target.value) || 0 })}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Timeout (ms)</label>
              <Input
                type="number"
                value={config.timeout}
                onChange={(e) => setConfig({ ...config, timeout: parseInt(e.target.value) || 5000 })}
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Rate Limit (jobs/min)</label>
              <Input
                type="number"
                value={config.rateLimit}
                onChange={(e) => setConfig({ ...config, rateLimit: e.target.value })}
                placeholder="No limit"
              />
            </div>
            <Button onClick={handleSave} disabled={updateQueue.isPending} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Jobs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Jobs</CardTitle>
          <Link to={`/jobs?queue=${queue.name}`} className="text-sm text-primary hover:underline">
            View all
          </Link>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attempts</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs?.jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-mono text-sm">
                    <Link to={`/jobs/${job.id}`} className="hover:underline">
                      {job.id.slice(0, 12)}...
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusColors[job.status] || "default"}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{job.attempts}/{job.maxAttempts}</TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                  </TableCell>
                </TableRow>
              ))}
              {(!jobs?.jobs || jobs.jobs.length === 0) && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                    No jobs in this queue
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
