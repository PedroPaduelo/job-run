import { useState } from "react";
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import {
  useRecurringJobs,
  useCreateRecurringJob,
  usePauseRecurringJob,
  useResumeRecurringJob,
  useDeleteRecurringJob,
  useTriggerRecurringJob,
} from "../hooks/useRecurringJobs";
import { useQueues } from "../hooks/useQueues";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { useToast } from "../lib/toast";
import { Clock, Play, Pause, Trash2, Zap, Calendar, RefreshCw, Plus, Loader2 } from "lucide-react";

export function RecurringJobs() {
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'active' | 'paused'>('all');
  const [showCreate, setShowCreate] = useState(false);

  const { data, isLoading, refetch } = useRecurringJobs(
    filter === 'all' ? undefined : { isActive: filter === 'active' ? 'true' : 'false' }
  );
  const { data: queues } = useQueues();

  const [newJob, setNewJob] = useState({
    name: '',
    description: '',
    queue: '',
    recurrenceType: 'INTERVAL' as 'INTERVAL' | 'CRON',
    interval: '5',
    cronExpression: '',
    webhookUrl: '',
    webhookMethod: 'POST' as 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    callbackUrl: '',
    payloadTemplate: '{}',
    maxRuns: '',
    recurrenceEndDate: '',
    continueOnFailure: false,
    tags: '',
  });

  const createMutation = useCreateRecurringJob();
  const pauseMutation = usePauseRecurringJob();
  const resumeMutation = useResumeRecurringJob();
  const deleteMutation = useDeleteRecurringJob();
  const triggerMutation = useTriggerRecurringJob();

  const [actionId, setActionId] = useState<string | null>(null);
  const [actionType, setActionType] = useState<string | null>(null);

  const handlePause = async (id: string) => {
    setActionId(id);
    setActionType('pause');
    try {
      await pauseMutation.mutateAsync(id);
      toast.success('Recorrência pausada');
    } catch (error) {
      toast.error('Erro ao pausar recorrência');
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const handleResume = async (id: string) => {
    setActionId(id);
    setActionType('resume');
    try {
      await resumeMutation.mutateAsync(id);
      toast.success('Recorrência reativada');
    } catch (error) {
      toast.error('Erro ao reativar recorrência');
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza? Isso vai cancelar todos os jobs pendentes.')) return;
    setActionId(id);
    setActionType('delete');
    try {
      await deleteMutation.mutateAsync(id);
      toast.success('Recorrência deletada');
    } catch (error) {
      toast.error('Erro ao deletar recorrência');
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const handleTrigger = async (id: string) => {
    setActionId(id);
    setActionType('trigger');
    try {
      const result = await triggerMutation.mutateAsync(id);
      toast.success(`Job disparado! ID: ${(result as any)?.jobId?.slice(0, 12)}...`);
    } catch (error) {
      toast.error('Erro ao disparar job');
    } finally {
      setActionId(null);
      setActionType(null);
    }
  };

  const resetForm = () => {
    setNewJob({
      name: '',
      description: '',
      queue: '',
      recurrenceType: 'INTERVAL',
      interval: '5',
      cronExpression: '',
      webhookUrl: '',
      webhookMethod: 'POST',
      callbackUrl: '',
      payloadTemplate: '{}',
      maxRuns: '',
      recurrenceEndDate: '',
      continueOnFailure: false,
      tags: '',
    });
    setShowCreate(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newJob.name) { toast.error('Nome é obrigatório'); return; }
    if (!newJob.queue) { toast.error('Selecione uma fila'); return; }
    if (!newJob.webhookUrl) { toast.error('Webhook URL é obrigatória'); return; }
    if (newJob.recurrenceType === 'INTERVAL' && !newJob.interval) { toast.error('Intervalo é obrigatório'); return; }
    if (newJob.recurrenceType === 'CRON' && !newJob.cronExpression) { toast.error('Expressão cron é obrigatória'); return; }

    let parsedPayload: Record<string, unknown>;
    try {
      parsedPayload = JSON.parse(newJob.payloadTemplate);
    } catch {
      toast.error('JSON inválido no payload');
      return;
    }

    try {
      await createMutation.mutateAsync({
        name: newJob.name,
        description: newJob.description || undefined,
        queue: newJob.queue,
        recurrenceType: newJob.recurrenceType,
        interval: newJob.recurrenceType === 'INTERVAL' ? parseInt(newJob.interval) : undefined,
        cronExpression: newJob.recurrenceType === 'CRON' ? newJob.cronExpression : undefined,
        webhookUrl: newJob.webhookUrl,
        webhookMethod: newJob.webhookMethod,
        callbackUrl: newJob.callbackUrl || undefined,
        payloadTemplate: parsedPayload,
        maxRuns: newJob.maxRuns ? parseInt(newJob.maxRuns) : undefined,
        recurrenceEndDate: newJob.recurrenceEndDate ? new Date(newJob.recurrenceEndDate).toISOString() : undefined,
        continueOnFailure: newJob.continueOnFailure,
        tags: newJob.tags ? newJob.tags.split(',').map(t => t.trim()).filter(Boolean) : undefined,
      });

      toast.success('Recorrência criada com sucesso!');
      resetForm();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro ao criar recorrência');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Recorrências</h1>
          <p className="text-muted-foreground">Jobs que se executam automaticamente</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => refetch()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
          <Button onClick={() => setShowCreate(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Nova Recorrência
          </Button>
        </div>
      </div>

      <div className="flex gap-2">
        {(['all', 'active', 'paused'] as const).map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'Todas' : f === 'active' ? 'Ativas' : 'Pausadas'}
          </Button>
        ))}
      </div>

      {showCreate && (
        <Card>
          <CardHeader>
            <CardTitle>Nova Recorrência</CardTitle>
            <CardDescription>Crie um job que será executado automaticamente</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input id="name" value={newJob.name} onChange={(e) => setNewJob({ ...newJob, name: e.target.value })} placeholder="Ex: Backup diário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="queue">Fila *</Label>
                  <Select value={newJob.queue} onValueChange={(v) => setNewJob({ ...newJob, queue: v })}>
                    <SelectTrigger><SelectValue placeholder="Selecione a fila" /></SelectTrigger>
                    <SelectContent>
                      {queues?.map((q) => (
                        <SelectItem key={q.id} value={q.name}>{q.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" value={newJob.description} onChange={(e) => setNewJob({ ...newJob, description: e.target.value })} placeholder="Descrição opcional" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Recorrência *</Label>
                  <Select value={newJob.recurrenceType} onValueChange={(v: 'INTERVAL' | 'CRON') => setNewJob({ ...newJob, recurrenceType: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INTERVAL">Intervalo (minutos)</SelectItem>
                      <SelectItem value="CRON">Expressão Cron</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {newJob.recurrenceType === 'INTERVAL' ? (
                  <div className="space-y-2">
                    <Label>Intervalo (minutos) *</Label>
                    <Input type="number" min="1" value={newJob.interval} onChange={(e) => setNewJob({ ...newJob, interval: e.target.value })} placeholder="Ex: 5" />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label>Expressão Cron *</Label>
                    <Input value={newJob.cronExpression} onChange={(e) => setNewJob({ ...newJob, cronExpression: e.target.value })} placeholder="Ex: 0 9 * * * (às 9h)" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Webhook URL *</Label>
                  <Input value={newJob.webhookUrl} onChange={(e) => setNewJob({ ...newJob, webhookUrl: e.target.value })} placeholder="https://api.exemplo.com/webhook" />
                </div>
                <div className="space-y-2">
                  <Label>Método HTTP</Label>
                  <Select value={newJob.webhookMethod} onValueChange={(v: any) => setNewJob({ ...newJob, webhookMethod: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Payload Template (JSON) *</Label>
                <Textarea value={newJob.payloadTemplate} onChange={(e) => setNewJob({ ...newJob, payloadTemplate: e.target.value })} placeholder='{"key": "value"}' className="font-mono" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Máximo de Execuções</Label>
                  <Input type="number" min="1" value={newJob.maxRuns} onChange={(e) => setNewJob({ ...newJob, maxRuns: e.target.value })} placeholder="Vazio = ilimitado" />
                </div>
                <div className="space-y-2">
                  <Label>Data Final</Label>
                  <Input type="datetime-local" value={newJob.recurrenceEndDate} onChange={(e) => setNewJob({ ...newJob, recurrenceEndDate: e.target.value })} />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="continueOnFailure" checked={newJob.continueOnFailure} onCheckedChange={(checked) => setNewJob({ ...newJob, continueOnFailure: checked })} />
                <Label htmlFor="continueOnFailure">Continuar mesmo se houver falha</Label>
              </div>

              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={resetForm}>Cancelar</Button>
                <Button type="submit" disabled={createMutation.isPending}>
                  {createMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  Criar Recorrência
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {data?.recurringJobs?.map((job) => (
          <Card key={job.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{job.name}</h3>
                  <p className="text-sm text-muted-foreground">{job.description || 'Sem descrição'}</p>
                </div>
                <Badge variant={job.isActive ? 'default' : 'secondary'}>
                  {job.isActive ? 'Ativa' : 'Pausada'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {job.recurrenceType === 'INTERVAL'
                      ? `A cada ${job.interval}min`
                      : job.cronExpression}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{formatDistanceToNow(new Date(job.nextRunAt), { addSuffix: true, locale: ptBR })}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Execuções: </span>
                  <span className="font-medium">{job.totalRuns || 0}{job.maxRuns ? ` / ${job.maxRuns}` : ''}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Fila: </span>
                  <span className="font-medium">{job.queueName}</span>
                </div>
              </div>

              {job.tags && job.tags.length > 0 && (
                <div className="flex gap-1.5 flex-wrap mb-4">
                  {job.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                {job.isActive ? (
                  <Button
                    size="sm" variant="outline"
                    onClick={() => handlePause(job.id)}
                    disabled={actionId === job.id}
                  >
                    {actionId === job.id && actionType === 'pause'
                      ? <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                      : <Pause className="h-4 w-4 mr-1" />}
                    Pausar
                  </Button>
                ) : (
                  <Button
                    size="sm" variant="outline"
                    onClick={() => handleResume(job.id)}
                    disabled={actionId === job.id}
                  >
                    {actionId === job.id && actionType === 'resume'
                      ? <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                      : <Play className="h-4 w-4 mr-1" />}
                    Reativar
                  </Button>
                )}
                <Button
                  size="sm" variant="outline"
                  onClick={() => handleTrigger(job.id)}
                  disabled={actionId === job.id}
                >
                  {actionId === job.id && actionType === 'trigger'
                    ? <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                    : <Zap className="h-4 w-4 mr-1" />}
                  Trigger
                </Button>
                <Button
                  size="sm" variant="destructive"
                  onClick={() => handleDelete(job.id)}
                  disabled={actionId === job.id}
                >
                  {actionId === job.id && actionType === 'delete'
                    ? <Loader2 className="h-4 w-4 animate-spin" />
                    : <Trash2 className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {(!data?.recurringJobs || data.recurringJobs.length === 0) && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Nenhuma recorrência encontrada. Clique em "Nova Recorrência" para criar.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
