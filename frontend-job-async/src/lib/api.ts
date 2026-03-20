const API_URL = import.meta.env.VITE_API_URL || 'https://job-assync-api.ddw1sl.easypanel.host';

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Try SDK storage first, then fallback to manual token
  const token = localStorage.getItem('nommand_access_token') || localStorage.getItem('token');
  const organizationId = localStorage.getItem('organizationId');

  // Só envia Content-Type: application/json quando há body real
  const hasBody = options.body != null && options.body !== '';
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    body: hasBody ? options.body : undefined,
    headers: {
      ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(organizationId ? { 'X-Organization-Id': organizationId } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Token inválido: força o token correto e recarrega a página
      const DEMO_KEY = 'jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2';
      localStorage.setItem('token', DEMO_KEY);
      localStorage.setItem('nommand_access_token', DEMO_KEY);
      localStorage.setItem('organizationId', 'org_demo_001');
      window.location.reload();
    }
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Jobs
export interface Job {
  id: string;
  externalId?: string;
  queueId: string;
  queueName?: string;
  userId?: string;
  webhookUrl: string;
  callbackUrl?: string;
  payload: Record<string, unknown>;
  result?: Record<string, unknown>;
  error?: string;
  status: 'PENDING' | 'SCHEDULED' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'DEAD';
  priority: number;
  attempts: number;
  maxAttempts: number;
  scheduledAt?: string;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  logs?: JobLog[];
}

export interface JobLog {
  id: string;
  attempt: number;
  status: string;
  message?: string;
  duration?: number;
  createdAt: string;
}

export interface JobsResponse {
  jobs: Job[];
  total: number;
  limit: number;
  offset: number;
}

export interface JobFilters {
  status?: string;
  queue?: string;
  userId?: string;
  from?: string;
  to?: string;
  limit?: number;
  offset?: number;
}

export const jobsApi = {
  list: (filters: JobFilters = {}) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.set(key, String(value));
    });
    return request<JobsResponse>(`/api/jobs?${params}`);
  },
  get: (id: string) => request<Job>(`/api/jobs/${id}`),
  create: (data: {
    queue: string;
    webhookUrl: string;
    webhookMethod?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    callbackUrl?: string;
    payload: Record<string, unknown>;
    userId?: string;
    priority?: number;
    scheduledAt?: string;
  }) => request<Job>('/api/jobs', { method: 'POST', body: JSON.stringify(data) }),
  cancel: (id: string) => request<Job>(`/api/jobs/${id}`, { method: 'DELETE' }),
  retry: (id: string) => request<{ id: string; status: string }>(`/api/jobs/${id}/retry`, { method: 'POST' }),
};

// Queues
export interface Queue {
  id: string;
  name: string;
  concurrency: number;
  maxRetries: number;
  retryDelay: number;
  timeout: number;
  rateLimit?: number;
  isActive: boolean;
  isPaused: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface QueueStats {
  id: string;
  name: string;
  waiting: number;
  active: number;
  completed: number;
  failed: number;
  delayed: number;
}

export const queuesApi = {
  list: () => request<Queue[]>('/api/queues'),
  get: (id: string) => request<Queue>(`/api/queues/${id}`),
  create: (data: {
    name: string;
    concurrency?: number;
    maxRetries?: number;
    timeout?: number;
    rateLimit?: number;
  }) => request<Queue>('/api/queues', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: Partial<Queue>) =>
    request<Queue>(`/api/queues/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) => request<void>(`/api/queues/${id}`, { method: 'DELETE' }),
  stats: (id: string) => request<QueueStats>(`/api/queues/${id}/stats`),
  pause: (id: string) => request<void>(`/api/queues/${id}/pause`, { method: 'POST' }),
  resume: (id: string) => request<void>(`/api/queues/${id}/resume`, { method: 'POST' }),
};

// Stats
export interface OverviewStats {
  totalJobs: number;
  todayJobs: number;
  processing: number;
  failedToday: number;
  avgDuration: number;
  queues: QueueStats[];
}

export interface TimelineEntry {
  hour: string;
  total: number;
  completed: number;
  failed: number;
}

export const statsApi = {
  overview: () => request<OverviewStats>('/api/stats'),
  timeline: (hours = 24) => request<TimelineEntry[]>(`/api/stats/timeline?hours=${hours}`),
};

// API Keys
export interface ApiKey {
  id: string;
  key?: string; // Only returned on creation
  name: string;
  description?: string;
  permissions: string[];
  allowedDomains: string[];
  allowedIps: string[];
  rateLimit?: number;
  isActive: boolean;
  expiresAt?: string;
  lastUsedAt?: string;
  usageCount: number;
  createdAt: string;
}

export interface CreateApiKeyData {
  name: string;
  description?: string;
  permissions?: string[];
  allowedDomains?: string[];
  allowedIps?: string[];
  rateLimit?: number;
  expiresAt?: string;
}

export interface UpdateApiKeyData {
  name?: string;
  description?: string;
  permissions?: string[];
  allowedDomains?: string[];
  allowedIps?: string[];
  rateLimit?: number | null;
  isActive?: boolean;
  expiresAt?: string | null;
}

// Recurring Jobs
export interface RecurringJob {
  id: string;
  name: string;
  description?: string;
  queueId: string;
  queueName: string;
  recurrenceType: 'INTERVAL' | 'CRON';
  interval?: number;
  cronExpression?: string;
  webhookUrl: string;
  webhookMethod: string;
  callbackUrl?: string;
  payloadTemplate: Record<string, unknown>;
  maxRuns?: number;
  recurrenceEndDate?: string;
  continueOnFailure: boolean;
  isActive: boolean;
  nextRunAt: string;
  totalRuns?: number;
  successCount?: number;
  failedCount?: number;
  metadata?: Record<string, unknown>;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  recentJobs?: Job[];
}

export interface RecurringJobsResponse {
  recurringJobs: RecurringJob[];
  total: number;
}

export interface CreateRecurringJobData {
  name: string;
  description?: string;
  queue: string;
  recurrenceType: 'INTERVAL' | 'CRON';
  interval?: number;
  cronExpression?: string;
  webhookUrl: string;
  webhookMethod?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  callbackUrl?: string;
  payloadTemplate: Record<string, unknown>;
  maxRuns?: number;
  recurrenceEndDate?: string;
  continueOnFailure?: boolean;
  metadata?: Record<string, unknown>;
  tags?: string[];
}

export interface UpdateRecurringJobData {
  name?: string;
  description?: string;
  interval?: number;
  cronExpression?: string;
  webhookUrl?: string;
  webhookMethod?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  callbackUrl?: string;
  payloadTemplate?: Record<string, unknown>;
  maxRuns?: number;
  recurrenceEndDate?: string;
  continueOnFailure?: boolean;
  isActive?: boolean;
  metadata?: Record<string, unknown>;
  tags?: string[];
}

export const recurringJobsApi = {
  list: (filters: { isActive?: string; queue?: string } = {}) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.set(key, String(value));
    });
    const qs = params.toString();
    return request<RecurringJobsResponse>(`/api/recurring-jobs${qs ? `?${qs}` : ''}`);
  },
  get: (id: string) => request<RecurringJob>(`/api/recurring-jobs/${id}`),
  create: (data: CreateRecurringJobData) =>
    request<RecurringJob>('/api/recurring-jobs', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: UpdateRecurringJobData) =>
    request<RecurringJob>(`/api/recurring-jobs/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  pause: (id: string) =>
    request<{ success: boolean }>(`/api/recurring-jobs/${id}/pause`, { method: 'POST' }),
  resume: (id: string) =>
    request<{ success: boolean }>(`/api/recurring-jobs/${id}/resume`, { method: 'POST' }),
  delete: (id: string) =>
    request<{ success: boolean }>(`/api/recurring-jobs/${id}`, { method: 'DELETE' }),
  trigger: (id: string) =>
    request<{ success: boolean; jobId: string }>(`/api/recurring-jobs/${id}/trigger`, { method: 'POST' }),
};

export const apiKeysApi = {
  list: () => request<ApiKey[]>('/api/apikeys'),
  get: (id: string) => request<ApiKey>(`/api/apikeys/${id}`),
  create: (data: CreateApiKeyData) =>
    request<ApiKey>('/api/apikeys', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: UpdateApiKeyData) =>
    request<ApiKey>(`/api/apikeys/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (id: string) => request<void>(`/api/apikeys/${id}`, { method: 'DELETE' }),
  revoke: (id: string) => request<ApiKey>(`/api/apikeys/${id}/revoke`, { method: 'POST' }),
};
