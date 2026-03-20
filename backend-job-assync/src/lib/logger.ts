import winston from 'winston';

const { combine, timestamp, printf, colorize, errors, json } = winston.format;

const isDev = process.env.NODE_ENV !== 'production';

const devFormat = combine(
  colorize({ all: true }),
  timestamp({ format: 'HH:mm:ss' }),
  errors({ stack: true }),
  printf(({ level, message, timestamp, stack, ...meta }) => {
    const metaStr = Object.keys(meta).length ? ' ' + JSON.stringify(meta) : '';
    return `${timestamp} [${level}] ${message}${metaStr}${stack ? '\n' + stack : ''}`;
  })
);

const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

export const logger = winston.createLogger({
  level: isDev ? 'debug' : 'info',
  format: isDev ? devFormat : prodFormat,
  transports: [new winston.transports.Console()],
  exitOnError: false,
});

interface LogContext {
  service?: string;
  userId?: string;
  apiKeyId?: string;
  queueId?: string;
  organizationId?: string;
  jobId?: string;
  [key: string]: unknown;
}

export function createLogger(context: LogContext) {
  return logger.child(context);
}
