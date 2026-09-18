# The agent harness

Mars AI Simulation is a real-world test harness for autonomous multi-agent work. A human
operator runs a roster of AI agents that research, draft, review, illustrate, implement, and
validate a live website end to end. The fiction the team publishes is the workload, not the
objective: what is being tested is whether a coordinated roster of agents can carry a real
project from an approved brief to a reviewed, built, and published page while a single editorial
role holds the release decision and the human keeps new canon and every external action.

This file owns the harness itself: what the roles are and what each one owns, the tools and
models they run on, how work is tracked, where the release decision sits, and what the public
release boundary is. It does not own the rules — those are in
[Project instructions](INSTRUCTIONS.md) — nor what is true inside the fiction, which the
[locked scenario](SCENARIO.md) owns.

## Roles

Each role is a Hermes profile on the operator's machine. A role's authoritative definition —
its authority, its boundaries, and its handoff duties — is its own `SOUL.md` inside that
profile; role definitions are deliberately not part of this repository, and the skills under
`.agents/skills/` are task procedures rather than authority. Which skill each profile loads,
and what each skill is for, is catalogued in [`.agents/README.md`](../.agents/README.md).

| Role (Hermes profile)                        | What it owns                                                                                                                                                                                             | Project skills                                       |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Planner (`mars-ai-simulator-planner`)        | The delivery plan, and the article pipeline: turns one approved article request into the serial card graph, and builds the claim-level source pack a draft must cite                                     | `create-article-workflow`, `research-and-fact-check` |
| Writer (`mars-ai-simulator-writer`)          | The draft of one article, written from an approved brief in the project's public voice                                                                                                                   | `article-drafting`, `brand-voice`                    |
| Editor-in-chief (`mars-ai-simulator-editor`) | Copy, continuity, and the final word: clarity, structure and interface wording; every material claim against canon and what is already public; the editorial gate and the release decision for a package | `copy-editing`, `editorial-review`                   |
| SEO (`mars-ai-simulator-seo`)                | Search intent, the title and description a page carries, and internal linking                                                                                                                            | `seo-content`                                        |
| Visuals (`mars-ai-simulator-visuals`)        | Image candidates with their alt text, captions, and asset manifests, and the local ComfyUI renders behind them                                                                                           | `image-generation`, `mars-story-toolset`             |
| Developer (`mars-ai-simulator-dev`)          | The Astro application, its content schema and build guards, the repository's documentation, and local build validation                                                                                   | `site-deployment`, `project-documentation`           |

`brand-voice` is cross-cutting: the writer and the editor both apply it to public prose.

The human operator is not a profile. The operator commissions work, reads handoffs, and holds
the decisions in the table below.

## How work is tracked

Work is a card on the Hermes kanban board, a local SQLite queue shared by the profiles on the
operator's machine. One card is one deliverable with one assignee profile. Dependencies are
parent/child edges, so a card becomes dispatchable when the cards it depends on are done. A
card's comments carry the handoff, the evidence, and the decisions, which makes the durable
record for any task the repository artifact plus that card's result and comments.

The board is machine-local: it has no remote and no cross-machine sync, so it is not a
publication surface and nothing on it is published by being written there.

Commands, the contributor sequence, and the content-workflow policy are in
[`AGENTS.md`](../AGENTS.md); the mandatory working sequence is in
[Project instructions](INSTRUCTIONS.md) §Mandatory working sequence.

## Tools and models

- **Runtime and task tracking.** The roles run on Hermes Agent; the board and its commands
  are described in [`AGENTS.md`](../AGENTS.md).
- **Models.** Every role is served by a model running on the operator's own machine. The
  per-role assignment is machine-local, held in the Hermes profile, and not recorded in this
  repository; the project's purpose statement names the experiment as testing local models
  and agent orchestration ([General information](GENERAL.md) §Purpose).
- **Image generation.** Imagery is produced through the Hermes `image_generate` tool on the
  hosted `openai-codex` provider (model `gpt-image-2-medium`). Candidates, prompts, and their
  provenance stay in the visuals profile's image cache, outside this repository, and an approved
  export is copied into the subject's dossier under `docs/` after a human selects it. The local
  ComfyUI generator, [`tools/visual-generator/`](../tools/archive/visual-generator/README.md) —
  which owns the model inventory, the stage graphs, and the run records — was retired on
  2026-09-17 and is kept read-only under [`tools/archive/`](../tools/archive/README.md) as the
  documented fallback.
- **Site.** Astro with MDX builds the static site, Cloudflare Workers serves it through
  Workers Static Assets, and Node 26.8.2 is pinned through `fnm`. The
  [website README](../website/README.md) owns the commands, the routing, the content schema,
  and the provider settings.
- **Gates.** `astro check`, `vitest`, `eslint`, `dprint`, and the build guard
  [`website/scripts/check-dist.mjs`](../website/scripts/check-dist.mjs) run against the work
  before it is handed on. The build guard is also the enforcement point of the public-release
  boundary below.

## Who decides what

This table is an index of who decides what, and the file that owns each rule. It restates no
rule. Since 2026-09-17 the merged editorial role holds canon confirmation and releasability; the
human column is what remains human-only.

| Decision                              | Agents                                                                                                                   | Only a human                                            | Rule owner                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Canon confirmation and public wording | research, draft, cite sources, check, propose; `mars-ai-simulator-editor` confirms canon and the wording that carries it | author new canon, and make a later timeline step public | [Scenario](SCENARIO.md), [General information](GENERAL.md) §Canon, drafts, and publication                              |
| Releasability of a package            | prepare a page, validate it locally, decide releasability, record the release decision on the card                       | perform any external action (deploy, hosting, DNS)      | [General information](GENERAL.md) §Canon, drafts, and publication; [website README](../website/README.md) §News content |
| Release order                         | read the current step, use only the facts it allows                                                                      | decide when a later step may become public              | [Timeline](timeline/README.md), [Scenario](SCENARIO.md) §Continuity and release controls                                |
| Deployment, hosting, DNS, domains     | prepare code, configuration, preview instructions, checklists                                                            | deploy, connect hosting, attach a domain, change DNS    | [Project instructions](INSTRUCTIONS.md) §External actions and secrets                                                   |
| Credentials and accounts              | never read, store, log, or repeat them                                                                                   | create accounts, hold keys and tokens, use them         | [Project instructions](INSTRUCTIONS.md) §External actions and secrets                                                   |
| External media and analytics          | prepare candidates and manifests                                                                                         | upload media externally, enable analytics               | [Project instructions](INSTRUCTIONS.md) §External actions and secrets                                                   |
| Repository visibility and metadata    | propose exact values                                                                                                     | change visibility, description, homepage, or topics     | [Project instructions](INSTRUCTIONS.md) §External actions and secrets                                                   |

## The public-release boundary

The repository can be read by anyone; the site is built from it; a passing build is not a
release. What may become public, and when, is fixed by the numbered steps in
[the private timeline](timeline/README.md) and by the publication states in
[General information](GENERAL.md) §Canon, drafts, and publication. A page reaches the public
site only when its article declares itself published and the editorial role records the release.

Two mechanical facts enforce that boundary rather than trusting a reviewer:

- The build guard ([`website/scripts/check-dist.mjs`](../website/scripts/check-dist.mjs),
  rules in `website/scripts/guards.mjs`) fails a build that carries withheld material — a
  reference into a withheld dossier, a withheld file in `dist/` under any name, or a withheld
  marker in built text — and prunes what it finds so the output cannot be served anyway.
- The canonical origin is a build input. `website/astro.config.mjs` emits the site URL from
  `SITE_URL` and emits no canonical link when the variable is unset, so no domain is
  hard-coded.

Material that must never reach a public route, its metadata, filenames, alt text, captions,
sitemap, or a commit message is listed in
[Project instructions](INSTRUCTIONS.md) §Canon and information safety.

## What this file does not own

- The rules every human and agent follows: [Project instructions](INSTRUCTIONS.md).
- Vocabulary, audience, and the private/public state model:
  [General information](GENERAL.md).
- Canon facts and the release order: [Scenario](SCENARIO.md) and
  [the private timeline](timeline/README.md).
- The delivery phases and their order: [Delivery plan](PLAN.md).
- Commands, skill catalogue, and per-article working papers: [`AGENTS.md`](../AGENTS.md) and
  [`.agents/README.md`](../.agents/README.md).
- The map of this folder: [docs map](README.md).
