import { TeamRole, TEAM_ROLES } from './auth';

export interface AuthResult {
  role: TeamRole;
  defaultRedirect: string;
}

/**
 * Server-only credential verification.
 * Passwords NEVER leave this file — never bundled in client JS.
 *
 * Password conventions:
 *  - Minimum 14 chars
 *  - Mixed case + digits + symbols
 *  - Personalised so each person recognises theirs
 *  - Override any entry via env vars in production (never commit real secrets)
 */
export function verifyPasswordServer(password: string): AuthResult | null {
  const trimmed = password.trim();
  if (!trimmed) return null;

  // ─── master — Joshua & Tino (Full Access) ────────────────────────────────
  // Each has their own passkey; both grant master role
  const masterCredentials: string[] = [
    process.env.JOSHUA_PASSWORD  || 'J0shua@0rb1t#26',   // Joshua – Founding Director
    process.env.TINO_PASSWORD    || 'T1n0$Bl3print!26',   // Tino   – System Architect
  ];
  if (masterCredentials.includes(trimmed)) {
    return { role: 'master', defaultRedirect: TEAM_ROLES.master.defaultRedirect };
  }

  // ─── sde — Product Engineering ───────────────────────────────────────────
  const sdeCredentials: string[] = [
    process.env.VISHALV_PASSWORD       || 'V!shalV_L3ad$26',       // Vishal V  – Lead & Senior SDE
    process.env.VISHALBHARATH_PASSWORD || 'Bh@rath_Cr@ft#26',      // Vishal Bharath – SDE-I
    process.env.SATHEESH_PASSWORD      || 'S@th3sh_Bu1ld!26',      // Satheeshwaran  – SDE-I
    process.env.PRASAD_PASSWORD        || 'Pr@sad_St@ck#26',       // Prasad         – SDE-II
  ];
  if (sdeCredentials.includes(trimmed)) {
    return { role: 'sde', defaultRedirect: TEAM_ROLES.sde.defaultRedirect };
  }

  // ─── ai — AI & Data Engineering ──────────────────────────────────────────
  const aiCredentials: string[] = [
    process.env.PRITHIV_PASSWORD || 'Pr1th!v_N3ur@l$26',  // Prithiv – Lead & Senior AI Engineer
    process.env.SANJITH_PASSWORD || 'S@nj1th_M0del!26',   // Sanjith – Applied AI Engineer
    process.env.SHAAD_PASSWORD   || 'Sh@@d_Synth#2026',   // Shaad   – Applied AI Engineer
    process.env.VEDIKA_PASSWORD  || 'V3d!ka_D@taOps26',   // Vedika  – Data Ops Intern
  ];
  if (aiCredentials.includes(trimmed)) {
    return { role: 'ai', defaultRedirect: TEAM_ROLES.ai.defaultRedirect };
  }

  // ─── qa — Quality Assurance ───────────────────────────────────────────────
  const qaCredentials: string[] = [
    process.env.THIGANTH_PASSWORD    || 'Th!g@nth_D3v#26',     // Thiganth    – SDE (Dev) Intern
    process.env.RAJAKUMARAN_PASSWORD || 'R@ja_Qu@l1ty!26',     // Rajakumaran – SDE (QA) Intern
  ];
  if (qaCredentials.includes(trimmed)) {
    return { role: 'qa', defaultRedirect: TEAM_ROLES.qa.defaultRedirect };
  }

  // ─── advisor — Dr. Madhu Sudhan ───────────────────────────────────────────
  const advisorPassword = process.env.MADHU_PASSWORD || 'M@dhu_V1s10n$26';
  if (trimmed === advisorPassword) {
    return { role: 'advisor', defaultRedirect: TEAM_ROLES.advisor.defaultRedirect };
  }

  return null;
}

