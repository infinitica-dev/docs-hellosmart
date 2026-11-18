## HelloSmart Knowledge Base Pull Request

### 1. Document Scope & Lead Contributor
- **Contributing Lead**: [ ] Vishal V (Backend) | [ ] Prithivi (AI Systems) | [ ] Tino (Platform/Arch) | [ ] QA Team (Thiganth/Raja) | [ ] Other
- **Target Documentation Area**:
  - [ ] Architecture (`/docs/architecture/*`)
  - [ ] Database & Schemas (`/docs/database/*`)
  - [ ] API & Contracts (`/docs/api/*`)
  - [ ] Operations & Runbooks (`/docs/operations/*`)
  - [ ] Roles & Playbooks (`/docs/roles/*`)
  - [ ] Business Requirements (`/docs/brd/*`)
  - [ ] ADRs (`/docs/adr/*`)

---

### 2. Implementation Reference
- **Related Monorepo PR / Commit**: `infinitica-org/hellosmart#...`
- **Zoho Epic / Ticket ID**: `...`
- **Summary of Changes**:
  <!-- Provide a concise description of what documentation is being added or updated -->

---

### 3. Invariant & Governance Checklist
- [ ] **Single Source of Truth**: Accurately reflects actual merged code (no speculative or outdated plans).
- [ ] **Multi-Tenancy (BR-01)**: All queries/schemas/endpoints clearly cite tenant scoping by `org_id`.
- [ ] **Frontmatter Complete**: YAML frontmatter includes valid `title` and `description`.
- [ ] **Navigation Updated**: Slug registered in the corresponding `meta.json` (if new page).
- [ ] **Role Badge Included**: `<RoleBadge roles={[...]} />` included right below frontmatter.
- [ ] **Local Build Passed**: Ran `pnpm build` locally with zero TypeScript or MDX generation errors.

---

### 4. Review & Approval
- [ ] Reviewed and approved by Primary KB Owner (**Tino** / `@brittytino`)
