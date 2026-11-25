<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0.1">
<node ID="ID_0" TEXT="HelloSmart.ai Product Knowledge Base (SSOT)">
<node ID="ID_1" TEXT="1. Governance &amp; Team Ownership" POSITION="right">
<node ID="ID_2" TEXT="Tino Britty (Primary KB Owner &amp; System Architect)">
<node ID="ID_3" TEXT="Overall KB Repository Health, Standards &amp; PR Merges">
</node>
<node ID="ID_4" TEXT="QA Automation Architecture, DAT/QAT SOPs &amp; Test Gates">
</node>
<node ID="ID_5" TEXT="DevOps &amp; AWS Cloud Topology (QA/Prod + 1 Dev EC2)">
</node>
<node ID="ID_6" TEXT="Official Versioned Releases (v0.1.0 -&gt; v0.4.0)">
</node>
</node>
<node ID="ID_7" TEXT="Vishal V (Lead Backend &amp; Product Engineering)">
<node ID="ID_8" TEXT="Core Fastify REST API &amp; Kysely Queries">
</node>
<node ID="ID_9" TEXT="PostgreSQL 16 Multi-Tenancy &amp; RLS Policies">
</node>
<node ID="ID_10" TEXT="Company &amp; Candidate Portals &amp; Timing Engine">
</node>
<node ID="ID_11" TEXT="Razorpay Billing, Plans &amp; Invoices">
</node>
</node>
<node ID="ID_12" TEXT="Prithvi (AI Systems &amp; Proxy Lead)">
<node ID="ID_13" TEXT="Standalone AI Proxy Gateway (:4000)">
</node>
<node ID="ID_14" TEXT="Sliding-Window Rate Limits &amp; Spend Caps">
</node>
<node ID="ID_15" TEXT="Multi-Agent Reviewer Pipeline (Archie, Logic, Synergy, Shield, Omni)">
</node>
<node ID="ID_16" TEXT="Mandatory Evidence Citation Protocols">
</node>
</node>
<node ID="ID_17" TEXT="Joshua Allen (Product Management &amp; Operations)">
<node ID="ID_18" TEXT="Sprint Planning &amp; Timeline Delivery">
</node>
<node ID="ID_19" TEXT="Client Quotes, Contracts &amp; Commercials">
</node>
<node ID="ID_20" TEXT="Vendor Coordination (Meyi Cloud, Exora)">
</node>
</node>
<node ID="ID_21" TEXT="QA Team: Thiganth &amp; Raja">
<node ID="ID_22" TEXT="DAT (Data Acceptance Testing) Execution">
</node>
<node ID="ID_23" TEXT="QAT (Quality Acceptance Testing) Verification">
</node>
<node ID="ID_24" TEXT="Prism Mock Test Harnesses &amp; Schema Linting">
</node>
</node>
<node ID="ID_25" TEXT="External Partner: Exora (5 Engineers)">
<node ID="ID_26" TEXT="Hiring Flow, UI/UX &amp; Super Admin Dashboards">
</node>
<node ID="ID_27" TEXT="E2E Playwright Test Suite &amp; Load Testing">
</node>
<node ID="ID_28" TEXT="CI/CD Pipelines &amp; Candidate Fast-Boot AMI">
</node>
</node>
</node>
<node ID="ID_29" TEXT="2. Collaborative PR &amp; Review Workflow" POSITION="right">
<node ID="ID_30" TEXT="Branch Standard: docs/&lt;lead-name&gt;-&lt;feature-topic&gt;">
</node>
<node ID="ID_31" TEXT="Pull Request Checklist: Frontmatter, RoleBadge, Mermaid, Zero-Drift">
</node>
<node ID="ID_32" TEXT="Tino Review Gate: Mandatory Reviewer &amp; 4-Hour SLA">
</node>
<node ID="ID_33" TEXT="Merge &amp; Release: SemVer (Major, Minor, Patch)">
</node>
</node>
<node ID="ID_34" TEXT="3. Core Product &amp; Business Invariants" POSITION="right">
<node ID="ID_35" TEXT="Key Business Rules (BR-01 to BR-33)">
<node ID="ID_36" TEXT="BR-01: Strict Tenant Isolation (org_id scoped)">
</node>
<node ID="ID_37" TEXT="BR-02: Private Task Templates (no public catalog)">
</node>
<node ID="ID_38" TEXT="BR-08/09: Server-Enforced Timing &amp; Timer Continues on Disconnect">
</node>
<node ID="ID_39" TEXT="BR-10/11: Fullscreen Disconnect &amp; 30s Autosave RPO">
</node>
<node ID="ID_40" TEXT="BR-13/14/15: AI Proxy Only, AI OFF Egress &amp; Token Caps">
</node>
<node ID="ID_41" TEXT="BR-20: Human Final Score (AI is Evidence Only)">
</node>
</node>
<node ID="ID_42" TEXT="Platform Portals">
<node ID="ID_43" TEXT="Company Portal (Assessments, Candidates, Reviews)">
</node>
<node ID="ID_44" TEXT="Candidate Portal (Consent, Workspace, Submissions)">
</node>
<node ID="ID_45" TEXT="Platform Admin Console (Orgs, Plans, Key Allocations)">
</node>
</node>
</node>
<node ID="ID_46" TEXT="4. System Architecture &amp; Tech Stack" POSITION="left">
<node ID="ID_47" TEXT="Frontend: Next.js, React, Tailwind CSS">
</node>
<node ID="ID_48" TEXT="Core Backend: Node.js, TypeScript, Fastify REST APIs">
</node>
<node ID="ID_49" TEXT="Database: AWS RDS PostgreSQL 16 with Kysely ORM">
</node>
<node ID="ID_50" TEXT="Caching &amp; Queues: AWS ElastiCache Redis &amp; BullMQ">
</node>
<node ID="ID_51" TEXT="AI Gateway: Standalone Fastify Proxy (:4000) with KMS Keys">
</node>
<node ID="ID_52" TEXT="Object Storage: AWS S3 for Submissions &amp; Snapshots">
</node>
</node>
<node ID="ID_53" TEXT="5. Cloud &amp; DevOps Infrastructure" POSITION="left">
<node ID="ID_54" TEXT="Topology Simplification (Cost-Effective)">
<node ID="ID_55" TEXT="QA (Staging) Environment on AWS">
</node>
<node ID="ID_56" TEXT="Production Environment on AWS">
</node>
<node ID="ID_57" TEXT="1 Persistent Dev EC2 (Start/Stop on-demand, no 24/7 dev waste)">
</node>
</node>
<node ID="ID_58" TEXT="Networking &amp; Security">
<node ID="ID_59" TEXT="Single NAT Gateway (saves $100+/mo vs 3 multi-AZ NATs)">
</node>
<node ID="ID_60" TEXT="Private Subnets for all Workspaces (no public IPs)">
</node>
<node ID="ID_61" TEXT="AWS ACM SSL with *.hellosmart.ai wildcard domains">
</node>
</node>
<node ID="ID_62" TEXT="Candidate Workspace Strategy">
<node ID="ID_63" TEXT="Option 2: On-Demand EC2 (scale-to-zero, $0.05/candidate-hour)">
</node>
<node ID="ID_64" TEXT="Pre-Baked AMI via Packer (&lt; 45s launch, OpenVSCode + Node + Python + Docker)">
</node>
<node ID="ID_65" TEXT="15-Minute Inactivity Watchdog (auto-terminate orphan VMs)">
</node>
<node ID="ID_66" TEXT="Future Option C: Sysbox Container ASG for high-density volume">
</node>
</node>
</node>
<node ID="ID_67" TEXT="6. QA Automation &amp; Quality Gates" POSITION="left">
<node ID="ID_68" TEXT="DAT Protocol: Schema linting (db:lint), foreign keys, RLS coverage">
</node>
<node ID="ID_69" TEXT="QAT Protocol: Functional testing, UI/UX, contract checks (contracts:check)">
</node>
<node ID="ID_70" TEXT="Anti-Cheat Testing: Fullscreen exit, socket reconnects, timer persistence">
</node>
<node ID="ID_71" TEXT="Performance &amp; Concurrency: 25-50 simultaneous test launches (k6/Artillery)">
</node>
</node>
<node ID="ID_72" TEXT="7. Versioned Knowledge Base Releases" POSITION="left">
<node ID="ID_73" TEXT="v0.1.0: Foundation Product Architecture &amp; BRD">
</node>
<node ID="ID_74" TEXT="v0.2.0: Multi-Tenancy, RLS &amp; Sysbox Sandboxing">
</node>
<node ID="ID_75" TEXT="v0.3.0: Task Taxonomy, Candidate Autosave &amp; AI Proxy Gateway">
</node>
<node ID="ID_76" TEXT="v0.4.0: Cloud Infra Optimization, Workspace Strategy &amp; Exora Matrix">
</node>
</node>
</node>
</map>
