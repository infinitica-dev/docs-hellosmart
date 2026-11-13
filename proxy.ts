import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute } from '@/lib/shared';
import { AUTH_COOKIE_NAME, TEAM_ROLES, TeamRole, isPathAllowedForRole } from '@/lib/auth';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Always-public routes — no auth required
  const isPublic =
    pathname === '/' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth') ||
    pathname === '/unlock' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/og/');   // OG image generation

  if (!isPublic) {
    const roleCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value as TeamRole | undefined;
    const roleConf = roleCookie ? TEAM_ROLES[roleCookie] : null;

    // ── 1a. Not authenticated → redirect to unlock ──────────────────────────
    if (!roleConf) {
      const unlockUrl = new URL('/unlock', request.url);
      if (!pathname.startsWith('/api/')) {
        unlockUrl.searchParams.set('returnTo', pathname);
      }
      return NextResponse.redirect(unlockUrl);
    }

    // ── 1b. Authenticated but path is out of role scope → redirect to their landing ──
    if (!isPathAllowedForRole(pathname, roleCookie as TeamRole)) {
      const landingUrl = new URL(roleConf.defaultRedirect, request.url);
      // Attach a flag so the UI can show a "restricted" toast
      landingUrl.searchParams.set('blocked', '1');
      return NextResponse.redirect(landingUrl);
    }
  }

  // 2. Fumadocs Content Negotiation (Markdown preferred)
  const result = rewriteSuffix(pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const resultDocs = rewriteDocs(pathname);
    if (resultDocs) {
      return NextResponse.rewrite(new URL(resultDocs, request.nextUrl), {
        headers: { Vary: 'Accept' },
      });
    }
  }

  return NextResponse.next();
}

