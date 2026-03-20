// ===========================================
// IP ALLOWLIST — Isenção de Rate Limit
// Configurado via env: RATE_LIMIT_IP_ALLOWLIST
// ===========================================

import { createLogger } from './logger.js';

const log = createLogger({ service: 'ip-allowlist' });

// IPs ou CIDRs que ficam isentos de rate limit
// Definido em .env como lista separada por vírgulas
// Ex: RATE_LIMIT_IP_ALLOWLIST=127.0.0.1,::1,10.0.0.0/8
// Também aceita o header X-Forwarded-For quando atrás de proxy

let parsedAllowlist: ParsedEntry[] | null = null;

interface ParsedEntry {
  original: string;
  type: 'exact' | 'cidr_v4' | 'cidr_v6';
  network?: bigint;
  mask?: bigint;
  prefix?: number;
  ip?: string;
}

function ipv4ToBigInt(ip: string): bigint {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) {
    throw new Error(`Invalid IPv4: ${ip}`);
  }
  return BigInt(parts[0]) * 16777216n + BigInt(parts[1]) * 65536n + BigInt(parts[2]) * 256n + BigInt(parts[3]);
}

function ipv6ToBigInt(ip: string): bigint {
  // Expandir ::
  let expanded = ip;
  if (ip.includes('::')) {
    const sides = ip.split('::');
    const left = sides[0] ? sides[0].split(':') : [];
    const right = sides[1] ? sides[1].split(':') : [];
    const missing = 8 - left.length - right.length;
    expanded = [...left, ...Array(missing).fill('0000'), ...right].join(':');
  }

  const groups = expanded.split(':');
  if (groups.length !== 8) throw new Error(`Invalid IPv6: ${ip}`);

  return groups.reduce((acc, group) => acc * 65536n + BigInt(parseInt(group || '0', 16)), 0n);
}

function parseCIDR(entry: string): ParsedEntry {
  if (!entry.includes('/')) {
    // IP exato
    return { original: entry, type: 'exact', ip: entry };
  }

  const [ip, prefixStr] = entry.split('/');
  const prefix = parseInt(prefixStr, 10);

  if (ip.includes('.')) {
    // IPv4 CIDR
    const networkInt = ipv4ToBigInt(ip);
    const maskBits = 32 - prefix;
    const mask = ((1n << BigInt(32)) - 1n) - ((1n << BigInt(maskBits)) - 1n);
    const network = networkInt & mask;

    return { original: entry, type: 'cidr_v4', network, mask, prefix };
  } else {
    // IPv6 CIDR
    const networkInt = ipv6ToBigInt(ip);
    const maskBits = 128 - prefix;
    const mask = ((1n << 128n) - 1n) - ((1n << BigInt(maskBits)) - 1n);
    const network = networkInt & mask;

    return { original: entry, type: 'cidr_v6', network, mask, prefix };
  }
}

function getAllowlist(): ParsedEntry[] {
  if (parsedAllowlist !== null) return parsedAllowlist;

  const raw = process.env.RATE_LIMIT_IP_ALLOWLIST || '';
  if (!raw.trim()) {
    parsedAllowlist = [];
    return parsedAllowlist;
  }

  parsedAllowlist = raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((entry) => {
      try {
        return parseCIDR(entry);
      } catch (err) {
        log.warn(`Invalid entry ignored: "${entry}"`, { error: String(err) });
        return null;
      }
    })
    .filter((e): e is ParsedEntry => e !== null);

  if (parsedAllowlist.length > 0) {
    log.info('Allowlist loaded', { count: parsedAllowlist.length, entries: parsedAllowlist.map((e) => e.original) });
  }

  return parsedAllowlist;
}

/**
 * Verifica se um IP está na allowlist de rate limit
 * @param rawIp IP do request (pode ser IPv4, IPv6 ou IPv4-mapped)
 * @returns true se o IP está isento de rate limit
 */
export function isIpAllowed(rawIp: string): boolean {
  // Normalizar IPv4-mapped IPv6 (::ffff:192.168.1.1 → 192.168.1.1)
  const ip = rawIp.replace(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/, '$1');

  const allowlist = getAllowlist();
  if (allowlist.length === 0) return false;

  for (const entry of allowlist) {
    if (entry.type === 'exact') {
      if (entry.ip === ip) return true;
      continue;
    }

    try {
      if (entry.type === 'cidr_v4' && ip.includes('.')) {
        const ipInt = ipv4ToBigInt(ip);
        if ((ipInt & entry.mask!) === entry.network!) return true;
      } else if (entry.type === 'cidr_v6' && ip.includes(':')) {
        const ipInt = ipv6ToBigInt(ip);
        if ((ipInt & entry.mask!) === entry.network!) return true;
      }
    } catch {
      // IP inválido — não bloquear, apenas não dar allowlist
    }
  }

  return false;
}

/**
 * Força o re-parse da allowlist (útil para testes)
 */
export function reloadAllowlist(): void {
  parsedAllowlist = null;
}

/**
 * Retorna a allowlist atual (útil para debugging)
 */
export function getAllowlistEntries(): string[] {
  return getAllowlist().map((e) => e.original);
}
