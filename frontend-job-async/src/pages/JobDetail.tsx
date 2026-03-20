import { useParams, Link } from "react-router-dom";
import { useJob, useRetryJob, useCancelJob } from "../hooks/useJobs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { formatDistanceToNow, format } from "date-fns";
import { ArrowLeft, RefreshCw, X } from "lucide-react";

const statusColors: Record<string, "default" | "secondary" | "destructive" | "success" | "warning"> = {
  PENDING: "secondary",
  SCHEDULED: "secondary",
  PROCESSING: "warning",
  COMPLETED: "success",
  FAILED: "destructive",
  CANCELLED: "default",
  DEAD: "destructive",
};

export function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: job, isLoading } = useJob(id!);
  const retryJob = useRetryJob();
  const cancelJob = useCancelJob();

  const handleRetry = async () => {
    if (id) {
      await retryJob.mutateAsync(id);
    }
  };

  const handleCancel = async () => {
    if (id && confirm("Are you sure you want to cancel this job?")) {
      await cancelJob.mutateAsync(id);
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Job not found</p>
        <Link to="/jobs" className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-9 px-4 py-2">
          Back to jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/jobs" className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold font-mono">{job.id}</h1>
            <p className="text-muted-foreground">
              Created {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={statusColors[job.status] || "default"} className="text-base px-3 py-1">
            {job.status}
          </Badge>
          {(job.status === "FAILED" || job.status === "DEAD") && (
            <Button onClick={handleRetry} disabled={retryJob.isPending}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          )}
          {(job.status === "PENDING" || job.status === "SCHEDULED") && (
            <Button variant="destructive" onClick={handleCancel} disabled={cancelJob.isPending}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Job Info */}
        <Card>
          <CardHeader>
            <CardTitle>Job Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Queue</p>
                <p className="font-medium">{job.queueName || "Unknown"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Priority</p>
                <p className="font-medium">{job.priority}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Attempts</p>
                <p className="font-medium">{job.attempts} / {job.maxAttempts}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">User ID</p>
                <p className="font-medium font-mono">{job.userId || "N/A"}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Webhook URL</p>
              <p className="font-mono text-sm break-all">{job.webhookUrl}</p>
            </div>

            {job.callbackUrl && (
              <div>
                <p className="text-sm text-muted-foreground">Callback URL</p>
                <p className="font-mono text-sm break-all">{job.callbackUrl}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Created</span>
                <span>{format(new Date(job.createdAt), "PPpp")}</span>
              </div>
              {job.scheduledAt && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scheduled</span>
                  <span>{format(new Date(job.scheduledAt), "PPpp")}</span>
                </div>
              )}
              {job.startedAt && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Started</span>
                  <span>{format(new Date(job.startedAt), "PPpp")}</span>
                </div>
              )}
              {job.completedAt && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed</span>
                  <span>{format(new Date(job.completedAt), "PPpp")}</span>
                </div>
              )}
              {job.startedAt && job.completedAt && (
                <div className="flex justify-between font-medium">
                  <span className="text-muted-foreground">Duration</span>
                  <span>
                    {((new Date(job.completedAt).getTime() - new Date(job.startedAt).getTime()) / 1000).toFixed(2)}s
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Payload */}
        <Card>
          <CardHeader>
            <CardTitle>Payload</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-75 text-sm">
              {JSON.stringify(job.payload, null, 2)}
            </pre>
          </CardContent>
        </Card>

        {/* Result/Error */}
        <Card>
          <CardHeader>
            <CardTitle>{job.error ? "Error" : "Result"}</CardTitle>
          </CardHeader>
          <CardContent>
            {job.error ? (
              <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
                {job.error}
              </div>
            ) : job.result ? (
              <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-75 text-sm">
                {JSON.stringify(job.result, null, 2)}
              </pre>
            ) : (
              <p className="text-muted-foreground">No result yet</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Logs */}
      {job.logs && job.logs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Execution Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {job.logs.map((log) => (
                <div key={log.id} className="flex items-center gap-4 p-3 bg-muted rounded-lg">
                  <Badge variant={log.status === "COMPLETED" ? "success" : "destructive"}>
                    Attempt {log.attempt}
                  </Badge>
                  <span className="text-sm">{log.message || log.status}</span>
                  {log.duration && (
                    <span className="text-sm text-muted-foreground ml-auto">
                      {log.duration}ms
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(log.createdAt), "HH:mm:ss")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
