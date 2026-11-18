# Changelog

All notable changes to the **HelloSmart Product & Engineering Knowledge Base** (`docs-hellosmart`) are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.3.0] - 2026-11-18 (Sprint 2 Milestone)

### Added
- **Collaborative Governance Framework**:
  - Centralized Knowledge Base governance specification (`/docs/operations/knowledge-base-governance`).
  - Contributor guidelines (`CONTRIBUTING.md`) defining domain ownership for Vishal V (Backend), Prithivi (AI Systems), and QA Leads (Thiganth & Raja), with Tino as Primary Owner.
  - Pull Request template (`.github/pull_request_template.md`) enforcing invariant compliance, implementation links, and review sign-offs.
  - Versioned release history document (`/docs/operations/release-history`).
- **Task Template Sector Taxonomy**:
  - Blueprint taxonomy combining technical sectors and target industries (`/docs/architecture/template-taxonomy`).
  - Contract schema reference (`@hs/contracts/template-sector`) defining manifest schemas and environment slots.
- **Candidate 30s Autosave & State Restoration**:
  - Crew-style candidate workspace persistence engine (`/docs/architecture/candidate-autosave`).
  - Fullscreen anti-cheat exit detection (BR-10) and disconnect countdown timer continuation (BR-09).
- **Standalone AI Proxy Gateway Updates**:
  - Dedicated gateway architecture on port 4000 (`/docs/architecture/ai-proxy-gateway`).
  - Two-tier spend cap policy (`warn_threshold_pct: 80`, `action_on_hard_cap: "block"`) per BR-15.
  - BYOK KMS key vault resolution (`ProviderKey`, BR-16) and platform key allocation tracking (BR-17).
- **Multi-Agent Reviewer Pipeline**:
  - Evaluator persona specifications for Archie, Logic, Synergy, Shield, and Omni (`/docs/architecture/reviewer-pipeline`).
  - Mandatory evidence citation schemas (`filePath`, `startLine`, `endLine`, `codeSnippet`, `rationale`) per BR-19.
- **Infrastructure & QA SOPs**:
  - AWS Staging ECS Fargate & ALB infrastructure guide (`/docs/architecture/aws-staging-infrastructure`).
  - Autonomous Testing SOPs covering DAT and QAT decoupled execution paths (`/docs/operations/qa-sop`).

---

## [0.2.0] - 2026-11-11 (Sprint 1 Milestone)

### Added
- PostgreSQL 16 Row-Level Security (RLS) policies and multi-tenancy architecture (BR-01).
- Sandboxed Sysbox Docker-in-Docker container orchestrator architecture.
- Full index and specification of the 33 Inviolable Business Rules (BR-01 to BR-33).
- OpenAPI 3.1 REST contracts and Kysely data access layer ADR (`0011-kysely-data-access`).

---

## [0.1.0] - 2026-10-25 (Sprint 0 Baseline)

### Added
- Initial standalone Fumadocs documentation repository.
- BRD baseline covering all 150 requirements across Company, Candidate, and Platform domains.
- Modular monolith system architecture and technology selection documentation.
- Role-oriented playbooks for SDE, AI Engineer, QA, and Engineering Management.
