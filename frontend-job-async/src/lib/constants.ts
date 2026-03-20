// Job status colors for badges
export const STATUS_COLORS = {
  PENDING: 'secondary',
  SCHEDULED: 'secondary',
  PROCESSING: 'warning',
  COMPLETED: 'success',
  FAILED: 'destructive',
  CANCELLED: 'default',
  DEAD: 'destructive',
} as const;

export type JobStatus = keyof typeof STATUS_COLORS;
export type BadgeVariant = typeof STATUS_COLORS[JobStatus];

// Refetch intervals (em ms)
export const REFETCH_INTERVALS = {
  STATS: 30000,      // 30s para estatísticas gerais
  JOBS_LIST: 30000,  // 30s para lista de jobs
  JOB_DETAIL: 5000,  // 5s para detalhe de job ativo
  QUEUES: 30000,     // 30s para lista de filas
  QUEUE_STATS: 10000, // 10s para stats de fila específica
  TIMELINE: 60000,   // 1min para timeline
} as const;

// Debounce delays (em ms)
export const DEBOUNCE_DELAYS = {
  SEARCH: 300,
  FILTER: 300,
} as const;
