import { prisma } from '../lib/prisma.js';
import crypto from 'crypto';

export interface CreateApiKeyData {
  name: string;
  description?: string;
  permissions?: string[];
  allowedDomains?: string[];
  allowedIps?: string[];
  rateLimit?: number;
  expiresAt?: Date;
}

export interface UpdateApiKeyData {
  name?: string;
  description?: string;
  permissions?: string[];
  allowedDomains?: string[];
  allowedIps?: string[];
  rateLimit?: number | null;
  isActive?: boolean;
  expiresAt?: Date | null;
}

export const apiKeyService = {
  async list(organizationId: string) {
    return prisma.apiKey.findMany({
      where: { organizationId },
      select: {
        id: true,
        name: true,
        description: true,
        permissions: true,
        allowedDomains: true,
        allowedIps: true,
        rateLimit: true,
        isActive: true,
        expiresAt: true,
        lastUsedAt: true,
        usageCount: true,
        createdAt: true,
        // Note: We don't expose the full key, only the prefix
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async getById(organizationId: string, id: string) {
    return prisma.apiKey.findFirst({
      where: { id, organizationId },
      select: {
        id: true,
        name: true,
        description: true,
        permissions: true,
        allowedDomains: true,
        allowedIps: true,
        rateLimit: true,
        isActive: true,
        expiresAt: true,
        lastUsedAt: true,
        usageCount: true,
        createdAt: true,
      },
    });
  },

  async create(organizationId: string, userId: string | undefined, data: CreateApiKeyData) {
    // Generate a secure API key
    const keyPrefix = 'jsk_'; // JobSync Key
    const randomBytes = crypto.randomBytes(32).toString('hex');
    const key = `${keyPrefix}${randomBytes}`;

    const apiKey = await prisma.apiKey.create({
      data: {
        key,
        name: data.name,
        description: data.description,
        organizationId,
        createdById: userId,
        permissions: data.permissions || ['jobs:create', 'jobs:read', 'queues:read'],
        allowedDomains: data.allowedDomains || [],
        allowedIps: data.allowedIps || [],
        rateLimit: data.rateLimit,
        expiresAt: data.expiresAt,
      },
    });

    // Return the full key only on creation - it won't be shown again
    return {
      id: apiKey.id,
      key: apiKey.key, // Full key shown only once
      name: apiKey.name,
      description: apiKey.description,
      permissions: apiKey.permissions,
      allowedDomains: apiKey.allowedDomains,
      allowedIps: apiKey.allowedIps,
      rateLimit: apiKey.rateLimit,
      isActive: apiKey.isActive,
      expiresAt: apiKey.expiresAt,
      createdAt: apiKey.createdAt,
    };
  },

  async update(organizationId: string, id: string, data: UpdateApiKeyData) {
    // Verify the API key belongs to the organization
    const existing = await prisma.apiKey.findFirst({
      where: { id, organizationId },
    });

    if (!existing) {
      throw new Error('API key not found');
    }

    return prisma.apiKey.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        permissions: data.permissions,
        allowedDomains: data.allowedDomains,
        allowedIps: data.allowedIps,
        rateLimit: data.rateLimit,
        isActive: data.isActive,
        expiresAt: data.expiresAt,
      },
      select: {
        id: true,
        name: true,
        description: true,
        permissions: true,
        allowedDomains: true,
        allowedIps: true,
        rateLimit: true,
        isActive: true,
        expiresAt: true,
        lastUsedAt: true,
        usageCount: true,
        createdAt: true,
      },
    });
  },

  async delete(organizationId: string, id: string) {
    // Verify the API key belongs to the organization
    const existing = await prisma.apiKey.findFirst({
      where: { id, organizationId },
    });

    if (!existing) {
      throw new Error('API key not found');
    }

    await prisma.apiKey.delete({
      where: { id },
    });

    return { success: true };
  },

  async revoke(organizationId: string, id: string) {
    // Soft delete - just mark as inactive
    const existing = await prisma.apiKey.findFirst({
      where: { id, organizationId },
    });

    if (!existing) {
      throw new Error('API key not found');
    }

    return prisma.apiKey.update({
      where: { id },
      data: { isActive: false },
      select: {
        id: true,
        name: true,
        isActive: true,
      },
    });
  },
};
