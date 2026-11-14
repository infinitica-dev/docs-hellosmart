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

  // All credentials grant full access (master role) — temporary unrestricted mode
  const allCredentials: string[] = [
    // master — Joshua & Tino
    process.env.JOSHUA_PASSWORD  || 'J0shua@0rb1t#26',
    process.env.TINO_PASSWORD    || 'T1n0$Bl3print!26',
    // sde — Product Engineering
    process.env.VISHALV_PASSWORD       || 'V!shalV_L3ad$26',
    process.env.VISHALBHARATH_PASSWORD || 'Bh@rath_Cr@ft#26',
    process.env.SATHEESH_PASSWORD      || 'S@th3sh_Bu1ld!26',
    process.env.PRASAD_PASSWORD        || 'Pr@sad_St@ck#26',
    // ai — AI & Data Engineering
    process.env.PRITHIV_PASSWORD || 'Pr1th!v_N3ur@l$26',
    process.env.SANJITH_PASSWORD || 'S@nj1th_M0del!26',
    process.env.SHAAD_PASSWORD   || 'Sh@@d_Synth#2026',
    process.env.VEDIKA_PASSWORD  || 'V3d!ka_D@taOps26',
    // qa — Quality Assurance
    process.env.THIGANTH_PASSWORD    || 'Th!g@nth_D3v#26',
    process.env.RAJAKUMARAN_PASSWORD || 'R@ja_Qu@l1ty!26',
    // advisor — Dr. Madhu Sudhan
    process.env.MADHU_PASSWORD || 'M@dhu_V1s10n$26',
  ];

  if (allCredentials.includes(trimmed)) {
    return { role: 'master', defaultRedirect: TEAM_ROLES.master.defaultRedirect };
  }

  return null;
}

