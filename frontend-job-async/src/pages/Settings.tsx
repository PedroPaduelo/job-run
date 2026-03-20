import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { useToast } from "../lib/toast";
import { Copy, Plus, Trash2, Key, AlertCircle, Loader2, Check } from "lucide-react";
import { useApiKeys, useCreateApiKey, useDeleteApiKey, useRevokeApiKey } from "../hooks/useApiKeys";
import { formatDistanceToNow, format } from "date-fns";
import type { ApiKey } from "../lib/api";

const AVAILABLE_PERMISSIONS = [
  { value: "jobs:create", label: "Create Jobs" },
  { value: "jobs:read", label: "Read Jobs" },
  { value: "jobs:cancel", label: "Cancel Jobs" },
  { value: "jobs:retry", label: "Retry Jobs" },
  { value: "queues:create", label: "Create Queues" },
  { value: "queues:read", label: "Read Queues" },
  { value: "queues:update", label: "Update Queues" },
  { value: "queues:delete", label: "Delete Queues" },
  { value: "queues:pause", label: "Pause Queues" },
  { value: "*", label: "All Permissions (Admin)" },
];

export function Settings() {
  const { toast } = useToast();

  // API Keys state
  const { data: apiKeys, isLoading: isLoadingKeys } = useApiKeys();
  const createApiKey = useCreateApiKey();
  const deleteApiKey = useDeleteApiKey();
  const revokeApiKey = useRevokeApiKey();

  const [showCreateKey, setShowCreateKey] = useState(false);
  const [newKey, setNewKey] = useState({
    name: "",
    description: "",
    permissions: ["jobs:create", "jobs:read", "queues:read"] as string[],
  });
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCreateApiKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey.name.trim()) {
      toast.error("API key name is required");
      return;
    }

    try {
      const result = await createApiKey.mutateAsync({
        name: newKey.name.trim(),
        description: newKey.description.trim() || undefined,
        permissions: newKey.permissions,
      });

      // Show the key only once
      if (result.key) {
        setCreatedKey(result.key);
      }

      toast.success("API key created successfully!");
      setNewKey({
        name: "",
        description: "",
        permissions: ["jobs:create", "jobs:read", "queues:read"],
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create API key");
    }
  };

  const handleCopyCreatedKey = () => {
    if (createdKey) {
      navigator.clipboard.writeText(createdKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
      toast.success("API key copied to clipboard");
    }
  };

  const handleCloseCreatedKey = () => {
    setCreatedKey(null);
    setShowCreateKey(false);
  };

  const handleDeleteApiKey = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to permanently delete the API key "${name}"? This action cannot be undone.`)) {
      try {
        await deleteApiKey.mutateAsync(id);
        toast.success("API key deleted successfully");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to delete API key");
      }
    }
  };

  const handleRevokeApiKey = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to revoke the API key "${name}"? It will no longer work for authentication.`)) {
      try {
        await revokeApiKey.mutateAsync(id);
        toast.success("API key revoked successfully");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to revoke API key");
      }
    }
  };

  const togglePermission = (permission: string) => {
    setNewKey((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Configure your Job Assync dashboard</p>
      </div>

      {/* API Keys Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Keys
              </CardTitle>
              <CardDescription>
                Create and manage API keys for machine-to-machine authentication
              </CardDescription>
            </div>
            <Button onClick={() => setShowCreateKey(true)} disabled={!!createdKey}>
              <Plus className="h-4 w-4 mr-2" />
              Create API Key
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Created Key Display */}
          {createdKey && (
            <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">API Key Created Successfully!</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Copy your API key now. You won't be able to see it again!
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Input
                  value={createdKey}
                  readOnly
                  className="font-mono text-sm bg-white dark:bg-gray-900"
                />
                <Button onClick={handleCopyCreatedKey} variant={copiedKey ? "default" : "outline"}>
                  {copiedKey ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleCloseCreatedKey}>
                  Done
                </Button>
              </div>
            </div>
          )}

          {/* Create Key Form */}
          {showCreateKey && !createdKey && (
            <div className="p-4 border rounded-lg space-y-4">
              <h4 className="font-semibold">Create New API Key</h4>
              <form onSubmit={handleCreateApiKey} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="keyName">Name *</Label>
                    <Input
                      id="keyName"
                      value={newKey.name}
                      onChange={(e) => setNewKey((k) => ({ ...k, name: e.target.value }))}
                      placeholder="e.g., Production Server"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keyDesc">Description</Label>
                    <Input
                      id="keyDesc"
                      value={newKey.description}
                      onChange={(e) => setNewKey((k) => ({ ...k, description: e.target.value }))}
                      placeholder="Optional description"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Permissions</Label>
                  <div className="flex flex-wrap gap-2">
                    {AVAILABLE_PERMISSIONS.map((perm) => (
                      <Badge
                        key={perm.value}
                        variant={newKey.permissions.includes(perm.value) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => togglePermission(perm.value)}
                      >
                        {perm.label}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">Click to toggle permissions</p>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={createApiKey.isPending}>
                    {createApiKey.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Key className="h-4 w-4 mr-2" />
                        Create Key
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowCreateKey(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* API Keys Table */}
          {isLoadingKeys ? (
            <div className="flex items-center justify-center h-32">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : apiKeys && apiKeys.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Permissions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((key: ApiKey) => (
                  <TableRow key={key.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{key.name}</p>
                        {key.description && (
                          <p className="text-xs text-muted-foreground">{key.description}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {key.permissions.slice(0, 3).map((perm) => (
                          <Badge key={perm} variant="secondary" className="text-xs">
                            {perm}
                          </Badge>
                        ))}
                        {key.permissions.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{key.permissions.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={key.isActive ? "success" : "destructive"}>
                        {key.isActive ? "Active" : "Revoked"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {key.lastUsedAt ? (
                        <span title={format(new Date(key.lastUsedAt), "PPpp")}>
                          {formatDistanceToNow(new Date(key.lastUsedAt), { addSuffix: true })}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">Never</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span title={format(new Date(key.createdAt), "PPpp")}>
                        {formatDistanceToNow(new Date(key.createdAt), { addSuffix: true })}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {key.isActive && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRevokeApiKey(key.id, key.name)}
                            title="Revoke key"
                          >
                            <AlertCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteApiKey(key.id, key.name)}
                          title="Delete key permanently"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No API keys yet</p>
              <p className="text-sm mt-1">Create an API key to enable machine-to-machine authentication</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About Job Assync</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Job Assync is a centralized job queue service that allows you to:
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Create and manage job queues</li>
            <li>Schedule jobs for future execution</li>
            <li>Process jobs via webhooks</li>
            <li>Receive results via callbacks</li>
            <li>Monitor job status in real-time</li>
            <li>Scale horizontally with multiple workers</li>
          </ul>
          <div className="pt-4 border-t mt-4">
            <p className="text-sm font-medium">API Endpoints:</p>
            <ul className="text-sm text-muted-foreground font-mono mt-2 space-y-1">
              <li>POST /api/jobs - Create a job</li>
              <li>GET /api/jobs - List jobs</li>
              <li>POST /api/jobs/:id/retry - Retry a failed job</li>
              <li>DELETE /api/jobs/:id - Cancel a job</li>
              <li>GET /api/queues - List queues</li>
              <li>POST /api/queues - Create a queue</li>
              <li>GET /api/stats - Get statistics</li>
              <li>GET /api/apikeys - List API keys</li>
              <li>POST /api/apikeys - Create an API key</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
