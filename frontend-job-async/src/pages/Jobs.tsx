import { useState } from "react";
import { Link } from "react-router-dom";
import { useJobs, useCancelJob, useRetryJob, useCreateJob } from "../hooks/useJobs";
import { useQueues } from "../hooks/useQueues";
import { useDebounce } from "../hooks/useDebounce";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { useToast } from "../lib/toast";
import { formatDistanceToNow } from "date-fns";
import { RefreshCw, X, ChevronLeft, ChevronRight, Eye, Loader2, Plus, Calendar, Clock } from "lucide-react";
import { STATUS_COLORS, DEBOUNCE_DELAYS, type JobStatus } from "../lib/constants";

const statuses: JobStatus[] = ["PENDING", "SCHEDULED", "PROCESSING", "COMPLETED", "FAILED", "CANCELLED", "DEAD"];

export function Jobs() {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    status: "",
    queue: "",
    from: "",
    to: "",
    limit: 20,
    offset: 0,
  });

  // Create job form state
  const [showCreate, setShowCreate] = useState(false);
  const [newJob, setNewJob] = useState({
    queue: "",
    webhookUrl: "",
    webhookMethod: "POST" as "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    callbackUrl: "",
    payload: "{}",
    priority: 0,
    scheduledAt: "",
    externalId: "",
  });
  const [enableScheduling, setEnableScheduling] = useState(false);

  // Debounce filters para evitar muitas requests
  const debouncedFilters = useDebounce(filters, DEBOUNCE_DELAYS.FILTER);

  const { data, isLoading, isFetching } = useJobs(debouncedFilters);
  const { data: queues } = useQueues();
  const cancelJob = useCancelJob();
  const retryJob = useRetryJob();
  const createJob = useCreateJob();

  const handleCancel = async (id: string) => {
    if (confirm("Are you sure you want to cancel this job?")) {
      await cancelJob.mutateAsync(id);
    }
  };

  const handleRetry = async (id: string) => {
    await retryJob.mutateAsync(id);
  };

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!newJob.queue) {
      toast.error("Please select a queue");
      return;
    }
    if (!newJob.webhookUrl) {
      toast.error("Webhook URL is required");
      return;
    }

    // Validate payload JSON
    let parsedPayload: Record<string, unknown>;
    try {
      parsedPayload = JSON.parse(newJob.payload);
    } catch {
      toast.error("Invalid JSON payload");
      return;
    }

    try {
      await createJob.mutateAsync({
        queue: newJob.queue,
        webhookUrl: newJob.webhookUrl,
        webhookMethod: newJob.webhookMethod,
        callbackUrl: newJob.callbackUrl || undefined,
        payload: parsedPayload,
        priority: newJob.priority,
        scheduledAt: enableScheduling && newJob.scheduledAt ? new Date(newJob.scheduledAt).toISOString() : undefined,
      });

      toast.success(enableScheduling && newJob.scheduledAt ? "Job scheduled successfully!" : "Job created successfully!");

      // Reset form
      setNewJob({
        queue: "",
        webhookUrl: "",
        webhookMethod: "POST",
        callbackUrl: "",
        payload: "{}",
        priority: 0,
        scheduledAt: "",
        externalId: "",
      });
      setEnableScheduling(false);
      setShowCreate(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create job");
    }
  };

  const resetCreateForm = () => {
    setNewJob({
      queue: "",
      webhookUrl: "",
      webhookMethod: "POST",
      callbackUrl: "",
      payload: "{}",
      priority: 0,
      scheduledAt: "",
      externalId: "",
    });
    setEnableScheduling(false);
    setShowCreate(false);
  };

  const nextPage = () => {
    if (data && filters.offset + filters.limit < data.total) {
      setFilters((f) => ({ ...f, offset: f.offset + f.limit }));
    }
  };

  const prevPage = () => {
    if (filters.offset > 0) {
      setFilters((f) => ({ ...f, offset: Math.max(0, f.offset - f.limit) }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>
          <p className="text-muted-foreground">View and manage all jobs</p>
        </div>
        <div className="flex items-center gap-4">
          {isFetching && !isLoading && (
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          )}
          <Button onClick={() => setShowCreate(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create Job
          </Button>
        </div>
      </div>

      {/* Create Job Form */}
      {showCreate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New Job
            </CardTitle>
            <CardDescription>
              Create a new job to be processed by a worker. The webhook URL will receive a POST request with the payload.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateJob} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Queue Selection */}
                <div className="space-y-2">
                  <Label htmlFor="queue">Queue *</Label>
                  <Select
                    value={newJob.queue}
                    onValueChange={(value) => setNewJob((j) => ({ ...j, queue: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a queue" />
                    </SelectTrigger>
                    <SelectContent>
                      {queues?.map((queue) => (
                        <SelectItem key={queue.id} value={queue.name}>
                          {queue.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">The queue that will process this job</p>
                </div>

                {/* Priority */}
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Input
                    id="priority"
                    type="number"
                    min={0}
                    max={100}
                    value={newJob.priority}
                    onChange={(e) => setNewJob((j) => ({ ...j, priority: parseInt(e.target.value) || 0 }))}
                    placeholder="0"
                  />
                  <p className="text-xs text-muted-foreground">0-100, higher = processed first</p>
                </div>

                {/* Webhook URL + Method */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="webhookUrl">Webhook URL *</Label>
                  <div className="flex gap-2">
                    <Select
                      value={newJob.webhookMethod}
                      onValueChange={(value) => setNewJob((j) => ({ ...j, webhookMethod: value as typeof newJob.webhookMethod }))}
                    >
                      <SelectTrigger className="w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="GET">GET</SelectItem>
                        <SelectItem value="POST">POST</SelectItem>
                        <SelectItem value="PUT">PUT</SelectItem>
                        <SelectItem value="PATCH">PATCH</SelectItem>
                        <SelectItem value="DELETE">DELETE</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="webhookUrl"
                      type="url"
                      value={newJob.webhookUrl}
                      onChange={(e) => setNewJob((j) => ({ ...j, webhookUrl: e.target.value }))}
                      placeholder="https://your-api.com/process-job"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {newJob.webhookMethod === "GET"
                      ? "Payload will be sent as query parameters"
                      : "Payload will be sent as JSON body"}
                  </p>
                </div>

                {/* Callback URL */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="callbackUrl">Callback URL (optional)</Label>
                  <Input
                    id="callbackUrl"
                    type="url"
                    value={newJob.callbackUrl}
                    onChange={(e) => setNewJob((j) => ({ ...j, callbackUrl: e.target.value }))}
                    placeholder="https://your-api.com/job-completed"
                  />
                  <p className="text-xs text-muted-foreground">URL to receive job completion/failure notifications</p>
                </div>

                {/* Payload */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="payload">Payload (JSON) *</Label>
                  <Textarea
                    id="payload"
                    value={newJob.payload}
                    onChange={(e) => setNewJob((j) => ({ ...j, payload: e.target.value }))}
                    placeholder='{"key": "value"}'
                    className="font-mono min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground">JSON data to send to the webhook</p>
                </div>

                {/* Schedule Toggle */}
                <div className="space-y-4 md:col-span-2">
                  <div className="flex items-center gap-3">
                    <Switch
                      id="enableScheduling"
                      checked={enableScheduling}
                      onCheckedChange={setEnableScheduling}
                    />
                    <Label htmlFor="enableScheduling" className="flex items-center gap-2 cursor-pointer">
                      <Calendar className="h-4 w-4" />
                      Schedule for later
                    </Label>
                  </div>

                  {enableScheduling && (
                    <div className="space-y-2 pl-8">
                      <Label htmlFor="scheduledAt">Schedule Date & Time</Label>
                      <Input
                        id="scheduledAt"
                        type="datetime-local"
                        value={newJob.scheduledAt}
                        onChange={(e) => setNewJob((j) => ({ ...j, scheduledAt: e.target.value }))}
                        min={new Date().toISOString().slice(0, 16)}
                      />
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Job will start processing at this time
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button type="submit" disabled={createJob.isPending}>
                  {createJob.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating...
                    </>
                  ) : enableScheduling && newJob.scheduledAt ? (
                    <>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Job
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Job
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={resetCreateForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-end">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Status</Label>
              <Select
                value={filters.status}
                onValueChange={(value) => setFilters((f) => ({ ...f, status: value === "all" ? "" : value, offset: 0 }))}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  {statuses.filter(Boolean).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Queue</Label>
              <Select
                value={filters.queue}
                onValueChange={(value) => setFilters((f) => ({ ...f, queue: value === "all" ? "" : value, offset: 0 }))}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All queues" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All queues</SelectItem>
                  {queues?.map((queue) => (
                    <SelectItem key={queue.id} value={queue.name}>
                      {queue.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">From Date</Label>
              <Input
                type="date"
                value={filters.from}
                onChange={(e) => setFilters((f) => ({ ...f, from: e.target.value, offset: 0 }))}
                className="w-40"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">To Date</Label>
              <Input
                type="date"
                value={filters.to}
                onChange={(e) => setFilters((f) => ({ ...f, to: e.target.value, offset: 0 }))}
                className="w-40"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Limit</Label>
              <Input
                type="number"
                value={filters.limit}
                onChange={(e) => setFilters((f) => ({ ...f, limit: parseInt(e.target.value) || 20, offset: 0 }))}
                className="w-24"
              />
            </div>

            {/* Clear Filters */}
            {(filters.status || filters.queue || filters.from || filters.to) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFilters((f) => ({ ...f, status: "", queue: "", from: "", to: "", offset: 0 }))}
                className="h-9"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Jobs Table */}
      <Card>
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-32">Loading...</div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Queue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Attempts</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-mono text-sm">
                        <Link to={`/jobs/${job.id}`} className="hover:underline">
                          {job.id.slice(0, 12)}...
                        </Link>
                      </TableCell>
                      <TableCell>{job.queueName || "Unknown"}</TableCell>
                      <TableCell>
                        <Badge variant={STATUS_COLORS[job.status as JobStatus] || "default"}>
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {job.attempts}/{job.maxAttempts}
                      </TableCell>
                      <TableCell>
                        {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Link
                            to={`/jobs/${job.id}`}
                            className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          {(job.status === "FAILED" || job.status === "DEAD") && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRetry(job.id)}
                              disabled={retryJob.isPending}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          )}
                          {(job.status === "PENDING" || job.status === "SCHEDULED") && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleCancel(job.id)}
                              disabled={cancelJob.isPending}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {(!data?.jobs || data.jobs.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No jobs found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              {/* Pagination */}
              {data && data.total > 0 && (
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">
                    Showing {filters.offset + 1} to {Math.min(filters.offset + filters.limit, data.total)} of{" "}
                    {data.total} jobs
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevPage}
                      disabled={filters.offset === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextPage}
                      disabled={filters.offset + filters.limit >= data.total}
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
