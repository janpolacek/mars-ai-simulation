# Delivery plan

## Delivery rules

Each phase creates a usable, verifiable state. Do not make a visually elaborate
site before its content boundaries, approval states, and build safeguards exist.
Every implementation task is a Beads issue with a named owner, acceptance
criteria, relevant dependencies, and a human approval checkpoint where needed.

## Phase 0 — Operating foundation

**Outcome:** agents can work safely against one project model.

1. Maintain this documentation, the private scenario, vehicle baseline, and
   project-local skills.
2. Configure Beads for task tracking and use its dependency graph for handoffs.
3. Keep raw media and provider credentials outside version control.
4. Define release authority: humans approve canon and public deployment.

**Exit check:** a new agent can select a role, find its task in Beads, identify
the source of truth, and produce a reviewable handoff without inventing policy.

## Phase 1 — Minimal Astro presence

**Outcome:** a deployable but intentionally sparse public site.

1. Bootstrap Astro with TypeScript and MDX in `website/`, with its Node runtime
   pinned through `fnm`.
2. Build the Preparing landing page, logo treatment, site metadata, and About /
   Method disclosure page with a persistent footer link.
3. Add accessible global navigation, responsive layout, favicon/social-card
   placeholders, robots/sitemap configuration, and basic analytics-free privacy.
4. Add CI that installs dependencies, checks formatting/types, builds production,
   validates links, and proves private/draft paths are absent from the build.

**Exit check:** production build is static, mobile usable, crawlable, has no
private content, and can be deployed to a preview environment.

## Phase 2 — Content platform

**Outcome:** publication is structured and safe.

1. Define MDX collections for `news`, `wiki`, `mission-updates`, and `media`.
2. Require frontmatter for title, slug, summary, state, timeline step, publish
   date, related entities, canonical references, and optional media IDs.
3. Implement listing, individual-page, tag/entity, and chronological timeline
   views. Filter all non-`published` material at collection-query level.
4. Add a private validation command that checks state transitions, broken links,
   unknown media, and chronology violations before a release.

**Exit check:** a reviewer can prepare an article and image, validate it locally,
and confirm that neither draft nor scenario material reaches `dist/`.

## Phase 3 — First public story releases

**Outcome:** the site begins the mission in real time.

1. Human chooses the first public item, likely an early planning announcement.
2. Writer, SEO specialist, copy editor, visual creator, and redactor run the
   documented review chain; technical agent opens a preview.
3. Publish only a coherent initial set—homepage status, first update, and any
   necessary wiki context—rather than a complete future archive.
4. Record canon and deployment decisions in Beads.

**Exit check:** each public fact can be traced to an approved timeline step and
all public pages clearly disclose the project’s fictional AI-assisted nature.

## Phase 4 — Mission simulation and growth

**Outcome:** a sustainable cadence from coalition to end of life.

Release milestones in timeline order: commitment, payload, vehicle, launch
provider, launch, cruise, approach, landing, first checks, operations, repair,
and end of life. New content may expand a current milestone but never spoil a
later one. Technical agents keep CI, performance, accessibility, security headers,
preview deployment, and eventual Cloudflare Pages/domain work healthy.

## Deployment decision point

Cloudflare Pages is the preferred target, but no account connection, domain,
analytics tool, or production deployment is in scope until explicitly chosen.
When authorised, the deployment agent must document the exact provider project,
build command, output directory, branch policy, environment variables, preview
URL, custom-domain DNS changes, rollback route, and owner.
