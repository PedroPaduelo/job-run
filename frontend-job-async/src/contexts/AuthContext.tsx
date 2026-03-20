// Auth Context local (sem dependências externas)
// Implementação para teste de UI - simula OAuth flow com localStorage

import { type ReactNode, createContext, useContext, useState, useEffect, useCallback } from 'react'

// Tipos locais
interface User {
  id: string
  email: string
  name: string
}

interface Organization {
  id: string
  name: string
  slug: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
  error: Error | null
  organization: Organization | null
  organizations: Organization[]
  login: () => void
  handleCallback: () => Promise<void>
  logout: () => void
  selectOrganization: (org: Organization) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

// API Key de demo - usar esta para testes
const DEMO_API_KEY = 'jsk_a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'
const DEMO_ORG_ID = 'org_demo_001'

// Organizações disponíveis (usar org_demo_001 para API key de demo)
const MOCK_ORGS: Organization[] = [
  { id: DEMO_ORG_ID, name: 'Demo Organization', slug: 'demo' },
]

const MOCK_USER: User = {
  id: 'user-demo',
  email: 'demo@exemplo.com',
  name: 'Usuário Demo',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [organizations] = useState<Organization[]>(MOCK_ORGS)

  // Verificar se há usuário logado ao iniciar
  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('auth_user')
    const savedOrg = localStorage.getItem('organization')

    if (savedToken && savedUser) {
      try {
        setUser(JSON.parse(savedUser))
        setToken(savedToken)
        if (savedOrg) {
          setOrganization(JSON.parse(savedOrg))
        } else {
          setOrganization(MOCK_ORGS[0])
        }
      } catch {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        localStorage.removeItem('organization')
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(() => {
    // Usa API key de demo para autenticação real com a API
    // O token deve ser a API key, não um mock
    const apiToken = DEMO_API_KEY
    localStorage.setItem('auth_token', apiToken)
    localStorage.setItem('nommand_access_token', apiToken) // padrão do frontend
    localStorage.setItem('token', apiToken) // fallback
    localStorage.setItem('auth_user', JSON.stringify(MOCK_USER))
    localStorage.setItem('organization', JSON.stringify(MOCK_ORGS[0]))
    localStorage.setItem('organizationId', DEMO_ORG_ID)
    setToken(apiToken)
    setUser(MOCK_USER)
    setOrganization(MOCK_ORGS[0])
  }, [])

  const handleCallback = useCallback(async () => {
    // Simula callback do OAuth - no mundo real, trocaria code por token
    // Para teste, já definimos acima
    const savedToken = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('auth_user')
    const savedOrg = localStorage.getItem('organization')

    if (savedToken && savedUser) {
      try {
        setUser(JSON.parse(savedUser))
        setToken(savedToken)
        if (savedOrg) {
          setOrganization(JSON.parse(savedOrg))
        }
      } catch (e) {
        setError(e as Error)
      }
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    localStorage.removeItem('organization')
    localStorage.removeItem('organizationId')
    setUser(null)
    setToken(null)
    setOrganization(null)
  }, [])

  const selectOrganization = useCallback((org: Organization) => {
    setOrganization(org)
    localStorage.setItem('organization', JSON.stringify(org))
    localStorage.setItem('organizationId', org.id)
    localStorage.setItem('nommand_access_token', DEMO_API_KEY)
    localStorage.setItem('token', DEMO_API_KEY)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!token,
        error,
        organization,
        organizations,
        login,
        handleCallback,
        logout,
        selectOrganization,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

// Re-exportar tipos para compatibilidade
export type { User, Organization }
