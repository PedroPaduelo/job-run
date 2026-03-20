import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { isIpAllowed, reloadAllowlist, getAllowlistEntries } from './ip-allowlist.js';

// Helper para configurar a allowlist via env
function withAllowlist(value: string, fn: () => void) {
  const original = process.env.RATE_LIMIT_IP_ALLOWLIST;
  process.env.RATE_LIMIT_IP_ALLOWLIST = value;
  reloadAllowlist();
  fn();
  process.env.RATE_LIMIT_IP_ALLOWLIST = original;
  reloadAllowlist();
}

describe('IP Allowlist', () => {
  beforeEach(() => {
    reloadAllowlist();
  });

  afterEach(() => {
    delete process.env.RATE_LIMIT_IP_ALLOWLIST;
    reloadAllowlist();
  });

  describe('getAllowlistEntries — leitura da lista', () => {
    it('deve retornar lista vazia quando env não configurado', () => {
      delete process.env.RATE_LIMIT_IP_ALLOWLIST;
      reloadAllowlist();

      const entries = getAllowlistEntries();
      expect(entries).toHaveLength(0);
    });

    it('deve parsear IPs separados por vírgula', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1,::1,192.168.1.1';
      reloadAllowlist();

      const entries = getAllowlistEntries();
      expect(entries).toHaveLength(3);
      expect(entries).toContain('127.0.0.1');
      expect(entries).toContain('::1');
      expect(entries).toContain('192.168.1.1');
    });

    it('deve ignorar espaços em branco ao parsear', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = ' 127.0.0.1 , ::1 , 10.0.0.1 ';
      reloadAllowlist();

      const entries = getAllowlistEntries();
      expect(entries).toHaveLength(3);
    });

    it('deve ignorar entradas inválidas (CIDR malformado)', () => {
      // CIDRs malformados devem ser ignorados
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1,999.999.999.999/24,192.168.1.1';
      reloadAllowlist();

      // 999.999.999.999/24 é inválido e deve ser ignorado
      const entries = getAllowlistEntries();
      expect(entries.length).toBeLessThanOrEqual(2);
      expect(entries).toContain('127.0.0.1');
      expect(entries).toContain('192.168.1.1');
    });
  });

  describe('isIpAllowed — IPs exatos', () => {
    it('deve retornar false quando allowlist vazia', () => {
      delete process.env.RATE_LIMIT_IP_ALLOWLIST;
      reloadAllowlist();

      expect(isIpAllowed('127.0.0.1')).toBe(false);
      expect(isIpAllowed('10.0.0.1')).toBe(false);
    });

    it('deve retornar true para IP exato na lista', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1,::1';
      reloadAllowlist();

      expect(isIpAllowed('127.0.0.1')).toBe(true);
      expect(isIpAllowed('::1')).toBe(true);
    });

    it('deve retornar false para IP não na lista', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1';
      reloadAllowlist();

      expect(isIpAllowed('192.168.1.1')).toBe(false);
      expect(isIpAllowed('10.0.0.1')).toBe(false);
    });

    it('deve normalizar IPv4-mapped IPv6 (::ffff:127.0.0.1 → 127.0.0.1)', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1';
      reloadAllowlist();

      expect(isIpAllowed('::ffff:127.0.0.1')).toBe(true);
    });
  });

  describe('isIpAllowed — CIDR IPv4', () => {
    it('deve permitir IPs dentro do CIDR', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '10.0.0.0/8';
      reloadAllowlist();

      expect(isIpAllowed('10.0.0.1')).toBe(true);
      expect(isIpAllowed('10.255.255.255')).toBe(true);
      expect(isIpAllowed('10.100.50.25')).toBe(true);
    });

    it('deve rejeitar IPs fora do CIDR', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '10.0.0.0/8';
      reloadAllowlist();

      expect(isIpAllowed('11.0.0.1')).toBe(false);
      expect(isIpAllowed('192.168.1.1')).toBe(false);
      expect(isIpAllowed('172.16.0.1')).toBe(false);
    });

    it('deve suportar /24 (subnet de classe C)', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '192.168.1.0/24';
      reloadAllowlist();

      expect(isIpAllowed('192.168.1.1')).toBe(true);
      expect(isIpAllowed('192.168.1.100')).toBe(true);
      expect(isIpAllowed('192.168.1.254')).toBe(true);
      expect(isIpAllowed('192.168.2.1')).toBe(false);
      expect(isIpAllowed('192.168.0.1')).toBe(false);
    });

    it('deve suportar /16 (subnet de classe B)', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '172.16.0.0/16';
      reloadAllowlist();

      expect(isIpAllowed('172.16.0.1')).toBe(true);
      expect(isIpAllowed('172.16.100.200')).toBe(true);
      expect(isIpAllowed('172.17.0.1')).toBe(false);
    });

    it('deve suportar /32 (host específico)', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '203.0.113.45/32';
      reloadAllowlist();

      expect(isIpAllowed('203.0.113.45')).toBe(true);
      expect(isIpAllowed('203.0.113.46')).toBe(false);
      expect(isIpAllowed('203.0.113.44')).toBe(false);
    });
  });

  describe('isIpAllowed — múltiplas entradas', () => {
    it('deve retornar true se o IP bate em qualquer entrada', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '127.0.0.1,10.0.0.0/8,192.168.1.0/24';
      reloadAllowlist();

      expect(isIpAllowed('127.0.0.1')).toBe(true);
      expect(isIpAllowed('10.50.0.1')).toBe(true);
      expect(isIpAllowed('192.168.1.50')).toBe(true);
      expect(isIpAllowed('8.8.8.8')).toBe(false);
    });
  });

  describe('reloadAllowlist — reload dinâmico', () => {
    it('deve re-carregar ao mudar env + reloadAllowlist()', () => {
      process.env.RATE_LIMIT_IP_ALLOWLIST = '10.0.0.1';
      reloadAllowlist();

      expect(isIpAllowed('10.0.0.1')).toBe(true);
      expect(isIpAllowed('10.0.0.2')).toBe(false);

      // Mudar env
      process.env.RATE_LIMIT_IP_ALLOWLIST = '10.0.0.2';
      reloadAllowlist();

      expect(isIpAllowed('10.0.0.1')).toBe(false);
      expect(isIpAllowed('10.0.0.2')).toBe(true);
    });
  });
});
