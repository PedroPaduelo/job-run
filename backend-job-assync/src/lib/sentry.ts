import * as Sentry from '@sentry/node';
import { createLogger } from './logger.js';

const log = createLogger({ service: 'sentry' });

const SENTRY_DSN = process.env.SENTRY_DSN;

export function initSentry() {
  if (!SENTRY_DSN) {
    log.warn('DSN not configured, skipping initialization');
    return;
  }

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',

    // Performance Monitoring — reduzido para 0.01 (1%) em produção para baixo overhead
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.01 : 1.0,

    // Antes de enviar, podemos modificar o evento
    beforeSend(event) {
      // Não enviar erros em desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        log.debug('Event captured (not sent in dev)', { message: event.message });
        return null;
      }
      return event;
    },
  });

  log.info('Initialized');
}

// Capturar erro manualmente
export function captureError(error: Error, context?: Record<string, unknown>) {
  if (context) {
    Sentry.setContext('additional', context);
  }
  Sentry.captureException(error);
}

// Capturar mensagem
export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info') {
  Sentry.captureMessage(message, level);
}

// Definir usuário
export function setUser(user: { id: string; email?: string } | null) {
  if (user) {
    Sentry.setUser({ id: user.id, email: user.email });
  } else {
    Sentry.setUser(null);
  }
}

// Adicionar breadcrumb
export function addBreadcrumb(message: string, category: string, data?: Record<string, unknown>) {
  Sentry.addBreadcrumb({
    message,
    category,
    data,
    level: 'info',
  });
}

// Handler de erro para Fastify
export function sentryErrorHandler(error: Error, request: unknown) {
  Sentry.withScope((scope) => {
    scope.setExtra('request', request);
    Sentry.captureException(error);
  });
}

// Flush antes de shutdown
export async function flushSentry() {
  await Sentry.close(2000);
}
