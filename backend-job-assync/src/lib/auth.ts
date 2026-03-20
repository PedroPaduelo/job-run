import * as jose from 'jose';
import type { Prisma } from '@prisma/client';
import { prisma } from './prisma.js';
import { createLogger } from './logger.js';

const log = createLogger({ service: 'auth' });

const AUTH_SERVER_URL = process.env.AUTH_SERVER_URL || 'http://localhost:3000';
const JWKS_URL = `${AUTH_SERVER_URL}/.well-known/jwks.json`;

// Cache JWKS para evitar requests frequentes
let jwksCache: jose.JSONWebKeySet | null = null;
let jwksCacheTime = 0;
const JWKS_CACHE_TTL = 5 * 60 * 1000; // 5 minutos

// ===========================================
// TYPES
// ===========================================

export interface JWTPayload {
  sub: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  avatarUrl?: string;
  iss?: string;
  aud?: string;
  iat?: number;
  exp?: number;
  // Organizacao
  organizationId?: string;
  org_id?: string;
  organization_id?: string;
  // Roles e Permissions
  roles?: string[];
  permissions?: string[];
  // Sessao
  sessionId?: string;
  scope?: string;
}

export interface AuthenticatedUser {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  avatarUrl?: string;
  organizationId: string;
  roles: string[];
  permissions: string[];
  sessionId?: string;
}

// Permissoes do JobSync
export const PERMISSIONS = {
  // Jobs
  JOBS_CREATE: 'jobs:create',
  JOBS_READ: 'jobs:read',
  JOBS_UPDATE: 'jobs:update',
  JOBS_DELETE: 'jobs:delete',
  JOBS_RETRY: 'jobs:retry',
  JOBS_CANCEL: 'jobs:cancel',
  // Queues
  QUEUES_CREATE: 'queues:create',
  QUEUES_READ: 'queues:read',
  QUEUES_UPDATE: 'queues:update',
  QUEUES_DELETE: 'queues:delete',
  QUEUES_PAUSE: 'queues:pause',
  // API Keys
  APIKEYS_CREATE: 'apikeys:create',
  APIKEYS_READ: 'apikeys:read',
  APIKEYS_DELETE: 'apikeys:delete',
  // Admin
  ADMIN_ALL: 'admin:*',
  ORG_SETTINGS: 'org:settings',
} as const;

// Mapeamento de roles para permissoes padrao
const ROLE_PERMISSIONS: Record<string, string[]> = {
  owner: ['*'], // Todas as permissoes
  admin: [
    PERMISSIONS.JOBS_CREATE,
    PERMISSIONS.JOBS_READ,
    PERMISSIONS.JOBS_UPDATE,
    PERMISSIONS.JOBS_DELETE,
    PERMISSIONS.JOBS_RETRY,
    PERMISSIONS.JOBS_CANCEL,
    PERMISSIONS.QUEUES_CREATE,
    PERMISSIONS.QUEUES_READ,
    PERMISSIONS.QUEUES_UPDATE,
    PERMISSIONS.QUEUES_DELETE,
    PERMISSIONS.QUEUES_PAUSE,
    PERMISSIONS.APIKEYS_CREATE,
    PERMISSIONS.APIKEYS_READ,
    PERMISSIONS.APIKEYS_DELETE,
  ],
  member: [
    PERMISSIONS.JOBS_CREATE,
    PERMISSIONS.JOBS_READ,
    PERMISSIONS.JOBS_RETRY,
    PERMISSIONS.JOBS_CANCEL,
    PERMISSIONS.QUEUES_READ,
  ],
  viewer: [
    PERMISSIONS.JOBS_READ,
    PERMISSIONS.QUEUES_READ,
  ],
};

// ===========================================
// JWT VERIFICATION
// ===========================================

async function getJWKS(): Promise<jose.JSONWebKeySet> {
  const now = Date.now();

  if (jwksCache && (now - jwksCacheTime) < JWKS_CACHE_TTL) {
    return jwksCache;
  }

  const response = await fetch(JWKS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch JWKS: ${response.status}`);
  }

  jwksCache = await response.json();
  jwksCacheTime = now;
  return jwksCache!;
}

export async function verifyJWT(token: string): Promise<JWTPayload> {
  const jwks = await getJWKS();
  const JWKS = jose.createLocalJWKSet(jwks);

  // Accept multiple possible issuers (API URL with or without trailing slash, different protocols)
  const baseUrl = AUTH_SERVER_URL.replace('0.0.0.0', 'localhost').replace(/\/$/, '');
  const validIssuers = [
    baseUrl,
    baseUrl + '/',
    baseUrl.replace('https://', 'http://'),
    baseUrl.replace('http://', 'https://'),
    // Common variations
    'https://auth.service.api.nommand.com',
    'http://auth.service.api.nommand.com',
    'https://auth.service.nommand.com',
    'http://localhost:3000',
  ];

  const { payload } = await jose.jwtVerify(token, JWKS, {
    issuer: validIssuers,
  });
  return payload as JWTPayload;
}

// ===========================================
// AUTH SERVICE API
// ===========================================

interface AuthServiceUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  avatarUrl?: string;
  status: string;
}

interface AuthServiceOrg {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
}

interface AuthServiceMember {
  userId: string;
  organizationId: string;
  role: { name: string; permissions: string[] };
}

export async function getUserFromAuthService(token: string): Promise<AuthServiceUser | null> {
  try {
    const response = await fetch(`${AUTH_SERVER_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.data || data;
  } catch {
    return null;
  }
}

export async function getOrganizationFromAuthService(token: string, orgId: string): Promise<AuthServiceOrg | null> {
  try {
    const response = await fetch(`${AUTH_SERVER_URL}/organizations/${orgId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.data || data;
  } catch {
    return null;
  }
}

export async function getUserOrganizations(token: string): Promise<string[]> {
  try {
    const response = await fetch(`${AUTH_SERVER_URL}/organizations/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const orgs = data.data || data.organizations || data || [];
    return Array.isArray(orgs) ? orgs.map((org: { id: string }) => org.id) : [];
  } catch {
    return [];
  }
}

export async function getMembershipFromAuthService(
  token: string,
  orgId: string
): Promise<AuthServiceMember | null> {
  try {
    const response = await fetch(`${AUTH_SERVER_URL}/organizations/${orgId}/members/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data.data || data;
  } catch {
    return null;
  }
}

// ===========================================
// SYNC WITH AUTH SERVICE
// ===========================================

export async function syncUserFromAuth(
  token: string,
  payload: JWTPayload
): Promise<{ userId: string; email: string } | null> {
  // Tentar pegar dados do JWT primeiro
  let userData = {
    id: payload.sub,
    email: payload.email || '',
    firstName: payload.firstName,
    lastName: payload.lastName,
    displayName: payload.displayName,
    avatarUrl: payload.avatarUrl,
  };

  // Se nao tiver email no JWT, buscar do Auth Service
  if (!userData.email) {
    const authUser = await getUserFromAuthService(token);
    if (authUser) {
      userData = {
        id: authUser.id,
        email: authUser.email,
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        displayName: authUser.displayName,
        avatarUrl: authUser.avatarUrl,
      };
    }
  }

  if (!userData.email) {
    return null;
  }

  // Upsert user no banco local
  const user = await prisma.user.upsert({
    where: { id: userData.id },
    update: {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      displayName: userData.displayName,
      avatarUrl: userData.avatarUrl,
      lastSyncAt: new Date(),
    },
    create: {
      id: userData.id,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      displayName: userData.displayName,
      avatarUrl: userData.avatarUrl,
    },
  });

  return { userId: user.id, email: user.email };
}

export async function syncOrganizationFromAuth(
  token: string,
  orgId: string
): Promise<{ organizationId: string; name: string } | null> {
  // Buscar org do Auth Service
  const authOrg = await getOrganizationFromAuthService(token, orgId);

  if (!authOrg) {
    // Se nao conseguir buscar, criar com dados basicos
    const org = await prisma.organization.upsert({
      where: { id: orgId },
      update: { lastSyncAt: new Date() },
      create: {
        id: orgId,
        slug: `org-${orgId.substring(0, 8)}`,
        name: `Organization ${orgId.substring(0, 8)}`,
      },
    });
    return { organizationId: org.id, name: org.name };
  }

  // Upsert org no banco local
  const org = await prisma.organization.upsert({
    where: { id: orgId },
    update: {
      slug: authOrg.slug,
      name: authOrg.name,
      logoUrl: authOrg.logoUrl,
      lastSyncAt: new Date(),
    },
    create: {
      id: orgId,
      slug: authOrg.slug,
      name: authOrg.name,
      logoUrl: authOrg.logoUrl,
    },
  });

  return { organizationId: org.id, name: org.name };
}

export async function syncMembershipFromAuth(
  token: string,
  userId: string,
  orgId: string,
  roles: string[]
): Promise<void> {
  // Determinar role principal
  let role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER' = 'MEMBER';
  const rolesLower = roles.map(r => r.toLowerCase());

  if (rolesLower.includes('owner')) role = 'OWNER';
  else if (rolesLower.includes('admin')) role = 'ADMIN';
  else if (rolesLower.includes('viewer')) role = 'VIEWER';

  // Tentar buscar permissoes detalhadas do Auth Service
  const membership = await getMembershipFromAuthService(token, orgId);
  const permissions = membership?.role?.permissions || [];

  // Upsert membership
  await prisma.organizationMember.upsert({
    where: {
      userId_organizationId: { userId, organizationId: orgId },
    },
    update: {
      role,
      permissions,
      lastSyncAt: new Date(),
    },
    create: {
      userId,
      organizationId: orgId,
      role,
      permissions,
    },
  });
}

// ===========================================
// PERMISSION CHECKING
// ===========================================

export function hasPermission(
  userPermissions: string[],
  requiredPermission: string
): boolean {
  // Admin tem tudo
  if (userPermissions.includes('*')) return true;

  // Permissao wildcard (ex: jobs:* inclui jobs:create)
  const [resource, action] = requiredPermission.split(':');
  if (userPermissions.includes(`${resource}:*`)) return true;

  // Permissao exata
  return userPermissions.includes(requiredPermission);
}

export function hasAnyPermission(
  userPermissions: string[],
  requiredPermissions: string[]
): boolean {
  return requiredPermissions.some(p => hasPermission(userPermissions, p));
}

export function hasAllPermissions(
  userPermissions: string[],
  requiredPermissions: string[]
): boolean {
  return requiredPermissions.every(p => hasPermission(userPermissions, p));
}

export function getPermissionsFromRoles(roles: string[]): string[] {
  const permissions = new Set<string>();

  for (const role of roles) {
    const roleLower = role.toLowerCase();
    const rolePerms = ROLE_PERMISSIONS[roleLower];
    if (rolePerms) {
      rolePerms.forEach(p => permissions.add(p));
    }
  }

  return Array.from(permissions);
}

// ===========================================
// AUTHENTICATED USER BUILDER
// ===========================================

export async function buildAuthenticatedUser(
  token: string,
  payload: JWTPayload,
  organizationId: string
): Promise<AuthenticatedUser> {
  // Sincronizar usuario
  const userSync = await syncUserFromAuth(token, payload);
  if (!userSync) {
    throw new Error('Failed to sync user');
  }

  // Sincronizar organizacao
  await syncOrganizationFromAuth(token, organizationId);

  // Pegar roles do JWT ou usar padrao
  const roles = payload.roles || ['member'];

  // Sincronizar membership
  await syncMembershipFromAuth(token, userSync.userId, organizationId, roles);

  // Pegar permissoes do JWT ou derivar das roles
  let permissions = payload.permissions || [];
  if (permissions.length === 0) {
    permissions = getPermissionsFromRoles(roles);
  }

  return {
    userId: userSync.userId,
    email: userSync.email,
    firstName: payload.firstName,
    lastName: payload.lastName,
    displayName: payload.displayName,
    avatarUrl: payload.avatarUrl,
    organizationId,
    roles,
    permissions,
    sessionId: payload.sessionId,
  };
}

// ===========================================
// AUDIT LOGGING
// ===========================================

export async function logAudit(params: {
  userId?: string;
  organizationId?: string;
  action: string;
  entityType?: string;
  entityId?: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
  status?: 'SUCCESS' | 'FAILURE' | 'DENIED';
}): Promise<void> {
  try {
    await prisma.auditLog.create({
      data: {
        userId: params.userId,
        organizationId: params.organizationId,
        action: params.action,
        entityType: params.entityType,
        entityId: params.entityId,
        metadata: params.metadata as Prisma.InputJsonValue | undefined,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        status: params.status || 'SUCCESS',
      },
    });
  } catch (error) {
    log.error('Failed to write audit log', { error: error instanceof Error ? error.message : String(error) });
  }
}
