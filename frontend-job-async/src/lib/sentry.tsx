// Sentry stub - sem dependência real do @sentry/react
// Para produção, instale @sentry/react e descomente o código real

export function initSentry() {
  console.log('[Sentry] Stub initialized (install @sentry/react for real tracking)')
}

export function captureError(error: Error, context?: Record<string, unknown>) {
  console.error('[Sentry Stub]', error.message, context)
}

export function captureMessage(message: string) {
  console.log('[Sentry Stub]', message)
}

export function setUser(user: { id: string; email: string } | null) {
  if (user) console.log('[Sentry Stub] setUser:', user.email)
}

export function addBreadcrumb(message: string, category?: string, data?: Record<string, unknown>) {
  console.debug('[Sentry Stub] breadcrumb:', message, category, data)
}

// ErrorBoundary simples (React built-in)
export function ErrorBoundary({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <>{children}</>
}
