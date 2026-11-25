export type TeamRole = 'sde' | 'ai' | 'qa' | 'advisor' | 'master';

export interface RoleConfig {
  id: TeamRole;
  name: string;
  badge: string;
  description: string;
  color: string;
  /** Allowed /docs path prefixes. ['*'] means unrestricted. */
  allowedPaths: string[];
  /** Where to land after login */
  defaultRedirect: string;
}

export const TEAM_ROLES: Record<TeamRole, RoleConfig> = {
  /**
   * master — Joshua & Tino: unrestricted full access
   */
  master: {
    id: 'master',
    name: 'Full Access',
    badge: 'Full Access',
    description: 'Joshua (Founding Director) & Tino (System Architect) — Full unconstrained platform visibility',
    color: '#10b981',
    allowedPaths: ['*'],
    defaultRedirect: '/docs',
  },

  /**
   * sde — Product Engineering team
   * Access: their role playbook, architecture, adr, api, database, ops, production, security, KB
   * Blocked: AI team playbook, QA playbook, BRD (business), planning
   */
  sde: {
    id: 'sde',
    name: 'Product Engineering',
    badge: 'Product Eng',
    description: 'Product Engineering team — Vishal V (Lead), Vishal Bharath (SDE-I), Satheeshwaran (SDE-I), Prasad (SDE-II), Yeshwanth',
    color: '#3b82f6',
    allowedPaths: [
      '/docs/roles/sde',
      '/docs/adr',
      '/docs/api',
      '/docs/architecture',
      '/docs/database',
      '/docs/knowledge-base',
      '/docs/operations',
      '/docs/production',
      '/docs/security',
    ],
    defaultRedirect: '/docs/roles/sde',
  },

  /**
   * ai — AI & Data Engineering team
   * Access: their role playbook, architecture (AI sections), adr, api, KB, operations
   * Blocked: SDE playbook, QA playbook, BRD, planning, database internals, production
   */
  ai: {
    id: 'ai',
    name: 'AI & Data Engineering',
    badge: 'AI & Data Eng',
    description: 'AI & Data Engineering team — Prithiv (Lead), Sanjith, Shaad (Applied AI), Vedika (Data Ops Intern)',
    color: '#a855f7',
    allowedPaths: [
      '/docs/roles/ai',
      '/docs/adr',
      '/docs/api',
      '/docs/architecture/ai-proxy-gateway',
      '/docs/architecture/reviewer-pipeline',
      '/docs/architecture/system-architecture',
      '/docs/architecture/frameworks-and-versions',
      '/docs/database',
      '/docs/knowledge-base',
      '/docs/operations',
    ],
    defaultRedirect: '/docs/roles/ai',
  },

  /**
   * qa — Quality Assurance team
   * Access: their role playbook, KB, operations, api reference
   * Blocked: Architecture internals, DB, production, security internals, SDE/AI playbooks, BRD
   */
  qa: {
    id: 'qa',
    name: 'Quality Assurance',
    badge: 'QA Team',
    description: 'Quality Assurance team — Thiganth (Dev Intern), Rajakumaran (QA Intern)',
    color: '#eab308',
    allowedPaths: [
      '/docs/roles/qa',
      '/docs/api',
      '/docs/knowledge-base',
      '/docs/operations/branching-and-environments',
      '/docs/operations/dev-setup',
      '/docs/operations/incident-response',
      '/docs/operations/onboarding',
    ],
    defaultRedirect: '/docs/roles/qa',
  },

  /**
   * advisor — Dr. Madhu Sudhan
   * Access: BRD, knowledge-base, planning — high-level strategic view only
   * Blocked: all technical internals, source code docs, architecture deep-dives
   */
  advisor: {
    id: 'advisor',
    name: 'Advisor',
    badge: 'Advisor',
    description: 'Dr. Madhu Sudhan — Strategic Advisor with access to BRD, knowledge-base and planning',
    color: '#f97316',
    allowedPaths: [
      '/docs/brd',
      '/docs/knowledge-base',
      '/docs/planning',
    ],
    defaultRedirect: '/docs/knowledge-base/00-start-here',
  },
};

export const AUTH_COOKIE_NAME = 'hs_docs_role';

/**
 * Returns true if the given role is permitted to access the given pathname.
 * This is intentionally a pure function — safe to call in middleware.
 */
export function isPathAllowedForRole(pathname: string, role: TeamRole): boolean {
  const conf = TEAM_ROLES[role];
  if (!conf) return false;
  if (conf.allowedPaths[0] === '*') return true;

  // Strip trailing slash for comparison
  const clean = pathname.replace(/\/$/, '') || '/';

  return conf.allowedPaths.some((prefix) => {
    const p = prefix.replace(/\/$/, '');
    return clean === p || clean.startsWith(p + '/');
  });
}

