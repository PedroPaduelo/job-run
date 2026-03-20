import { useState } from "react";
import { Link } from "react-router-dom";
import { useQueues, useCreateQueue, useDeleteQueue, usePauseQueue, useResumeQueue } from "../hooks/useQueues";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Label } from "../components/ui/label";
import { useToast } from "../lib/toast";
import { Plus, Pause, Play, Trash2, Eye, Loader2, Settings } from "lucide-react";

export function Queues() {
  const { toast } = useToast();
  const { data: queues, isLoading } = useQueues();
  const createQueue = useCreateQueue();
  const deleteQueue = useDeleteQueue();
  const pauseQueue = usePauseQueue();
  const resumeQueue = useResumeQueue();

  const [showCreate, setShowCreate] = useState(false);
  const [newQueue, setNewQueue] = useState({
    name: "",
    concurrency: 5,
    maxRetries: 3,
    timeout: 300000, // 5 minutes in ms
    rateLimit: 0,
  });

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQueue.name.trim()) {
      toast.error("Queue name is required");
      return;
    }

    try {
      await createQueue.mutateAsync({
        name: newQueue.name.trim(),
        concurrency: newQueue.concurrency,
        maxRetries: newQueue.maxRetries,
        timeout: newQueue.timeout,
        rateLimit: newQueue.rateLimit || undefined,
      });
      toast.success("Queue created successfully!");
      setNewQueue({
        name: "",
        concurrency: 5,
        maxRetries: 3,
        timeout: 300000,
        rateLimit: 0,
      });
      setShowCreate(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create queue");
    }
  };

  const resetCreateForm = () => {
    setNewQueue({
      name: "",
      concurrency: 5,
      maxRetries: 3,
      timeout: 300000,
      rateLimit: 0,
    });
    setShowCreate(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to deactivate this queue?")) {
      await deleteQueue.mutateAsync(id);
    }
  };

  const handlePause = async (id: string) => {
    await pauseQueue.mutateAsync(id);
  };

  const handleResume = async (id: string) => {
    await resumeQueue.mutateAsync(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Queues</h1>
          <p className="text-muted-foreground">Manage your job queues</p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Queue
        </Button>
      </div>

      {/* Create Form */}
      {showCreate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Create New Queue
            </CardTitle>
            <CardDescription>
              Configure a new queue to process jobs. All settings can be changed later.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Queue Name */}
                <div className="space-y-2 md:col-span-2 lg:col-span-1">
                  <Label htmlFor="queueName">Queue Name *</Label>
                  <Input
                    id="queueName"
                    placeholder="my-queue"
                    value={newQueue.name}
                    onChange={(e) => setNewQueue((q) => ({ ...q, name: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground">Unique identifier for this queue</p>
                </div>

                {/* Concurrency */}
                <div className="space-y-2">
                  <Label htmlFor="concurrency">Concurrency</Label>
                  <Input
                    id="concurrency"
                    type="number"
                    min={1}
                    max={100}
                    value={newQueue.concurrency}
                    onChange={(e) => setNewQueue((q) => ({ ...q, concurrency: parseInt(e.target.value) || 5 }))}
                  />
                  <p className="text-xs text-muted-foreground">Jobs processed simultaneously</p>
                </div>

                {/* Max Retries */}
                <div className="space-y-2">
                  <Label htmlFor="maxRetries">Max Retries</Label>
                  <Input
                    id="maxRetries"
                    type="number"
                    min={0}
                    max={10}
                    value={newQueue.maxRetries}
                    onChange={(e) => setNewQueue((q) => ({ ...q, maxRetries: parseInt(e.target.value) || 3 }))}
                  />
                  <p className="text-xs text-muted-foreground">Retry attempts on failure</p>
                </div>

                {/* Timeout */}
                <div className="space-y-2">
                  <Label htmlFor="timeout">Timeout (seconds)</Label>
                  <Input
                    id="timeout"
                    type="number"
                    min={1}
                    max={3600}
                    value={newQueue.timeout / 1000}
                    onChange={(e) => setNewQueue((q) => ({ ...q, timeout: (parseInt(e.target.value) || 300) * 1000 }))}
                  />
                  <p className="text-xs text-muted-foreground">Max job execution time</p>
                </div>

                {/* Rate Limit */}
                <div className="space-y-2">
                  <Label htmlFor="rateLimit">Rate Limit (jobs/min)</Label>
                  <Input
                    id="rateLimit"
                    type="number"
                    min={0}
                    value={newQueue.rateLimit}
                    onChange={(e) => setNewQueue((q) => ({ ...q, rateLimit: parseInt(e.target.value) || 0 }))}
                    placeholder="0 = unlimited"
                  />
                  <p className="text-xs text-muted-foreground">0 = no limit</p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button type="submit" disabled={createQueue.isPending}>
                  {createQueue.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Queue
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

      {/* Queues Table */}
      <Card>
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-32">Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Concurrency</TableHead>
                  <TableHead>Max Retries</TableHead>
                  <TableHead>Timeout</TableHead>
                  <TableHead>Rate Limit</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {queues?.map((queue) => (
                  <TableRow key={queue.id}>
                    <TableCell className="font-medium">
                      <Link to={`/queues/${queue.id}`} className="hover:underline">
                        {queue.name}
                      </Link>
                    </TableCell>
                    <TableCell>{queue.concurrency}</TableCell>
                    <TableCell>{queue.maxRetries}</TableCell>
                    <TableCell>{(queue.timeout / 1000).toFixed(0)}s</TableCell>
                    <TableCell>{queue.rateLimit ? `${queue.rateLimit}/min` : "None"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant={queue.isActive ? "success" : "secondary"}>
                          {queue.isActive ? "Active" : "Inactive"}
                        </Badge>
                        {queue.isPaused && (
                          <Badge variant="warning">Paused</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Link
                          to={`/queues/${queue.id}`}
                          className="inline-flex items-center justify-center rounded-md h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        {queue.isActive && (
                          queue.isPaused ? (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleResume(queue.id)}
                              disabled={resumeQueue.isPending}
                              title="Resume queue"
                            >
                              <Play className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handlePause(queue.id)}
                              disabled={pauseQueue.isPending}
                              title="Pause queue"
                            >
                              <Pause className="h-4 w-4" />
                            </Button>
                          )
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(queue.id)}
                          disabled={deleteQueue.isPending}
                          title="Deactivate queue"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {(!queues || queues.length === 0) && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No queues found. Create one to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
