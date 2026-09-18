# Project instructions

These rules apply to every human and agent. Role definitions live with the agent,
not in this repository: each role is a Hermes profile whose `SOUL.md` holds its
authority, boundaries, and handoff duties, and this repository keeps only task
procedures under `.agents/skills/`.

## Mandatory working sequence

1. Read `AGENTS.md`, this file, and the matching project skill, then inspect
   `hermes kanban list --status ready` (or `--mine`) and create or claim the
   relevant card.
2. Read your role definition (your agent's `SOUL.md`) and the minimum relevant source
   material before acting.
3. Produce one bounded deliverable: a draft, review, visual brief, implementation,
   deployment plan, or validation result.
4. Record affected canon, files, validation, open questions, and next owner as a
   card comment (`hermes kanban comment <id> "..."`).
5. Never mark work as published or complete when a required review, test, or release
   decision remains outstanding.

## Source-of-truth order

1. Explicit current human instruction.
2. Approved public canon and the private timeline's event order.
3. Vehicle dossiers and approved media metadata.
4. Repository conventions and the agent's own role definition (`SOUL.md`).
5. A well-marked proposal, never an invented fact presented as established canon.

When sources conflict, stop the affected claim and describe the conflict on the
kanban card. The merged editorial role (`mars-ai-simulator-editor`) confirms the
claim against released canon and records the decision; a conflict that would need
canon the human has not released goes to the human story owner. Do not silently
reconcile it.

## Project source layout

`docs/` is the project documentation root, and [README.md](README.md) inside it maps
every file and folder. Its shape: the four root files that own intent, canon, rules,
and plan; `docs/timeline/` for the private release order; and one folder per subject
holding that subject's dossier together with its assets — `docs/vehicles/`, which
holds one folder per vehicle (the launcher and the surface rover), plus
`docs/area/`, and `docs/brand/`.

Per-article working papers live outside `docs/`, under `.agents/work/`: briefs in
`.agents/work/briefs/`, source packs in `.agents/work/sources/`, asset manifests in
`.agents/work/assets/<slug>/`, and editorial reviews in `.agents/work/reviews/`.
They are working material, not documentation and not public routes. Task procedures
are the project skills under `.agents/skills/`.

Approved media stays with its subject: the identity mark under `docs/brand/`, the
vehicle renders under `docs/vehicles/`, and the Asteria Field map plates under
`docs/area/`. The website imports it from there at build time and emits its own
hashed copies under `/_astro/`; nothing is copied into `website/public/`. Article
copy is authored as MDX directly in `website/news/` for publication. Do not create
a parallel repository-root `assets/` directory.

Imagery is produced through the hosted `image_generate` path (provider `openai-codex`, model
`gpt-image-2-medium`), and its candidates and provenance stay outside this repository. The local
generator is retired: `tools/visual-generator/` now sits read-only at
`tools/archive/visual-generator/`, where its `spec.json`, `assets/` and `stories/` paths remain
disposable git-ignored scratch — the documented fallback, with approved inputs copied out of
`docs/` before a run and a human-selected result copied back into `docs/` afterwards.

## Canon and information safety

- `docs/timeline/` is private continuity material; do not route, import, quote,
  include, or expose it in public builds.
- Never place unapproved scenario facts in a public title, summary, slug, image
  filename, alt text, Open Graph metadata, sitemap, git commit message, or issue
  visible outside the project.
- Keep real-world political, scientific, and organisational claims accurate when
  used. Clearly label the fictional Red Horizon programme and avoid implying a
  real agency partnership or endorsement.
- Preserve earlier public facts. Corrections must be explicit, dated, and reviewed
  rather than silently replacing the record.
- A public news article's date of writing is a **simulated, in-universe date**, not the
  article's repository history. The merged editorial role assigns it from the locked
  milestone table in `docs/SCENARIO.md`, the frontmatter carries it (`simulatedDate`), and the
  page labels it as part of the fiction. Never present it as a real publication date, never
  derive it from git history, and never invent a date the locked scenario does not hold.

## Quality baseline

All public-facing copy is plain, concrete, accessible, and jargon-light. Define a
necessary technical term on first use. Every image has descriptive alt text; every
video has a text summary and, where speech matters, captions/transcript. Pages
must be keyboard usable, responsive, and performant on ordinary mobile networks.

## External actions and secrets

Agents may prepare code, configuration, preview instructions, and deployment
checklists. They must not create public deployments, alter DNS, attach a domain,
enable analytics, upload media to external storage, create provider accounts, or
use credentials without explicit current human approval. Never log, commit, or
repeat secrets.

## Handoff format

Every handoff states: **result**, **source/timeline step**, **canon impact**,
**files or assets**, **validation completed**, **review required**, and **next
action/owner**. A handoff that carries a release recommendation states the exact
proposed public scope and the decision the editorial role recorded.
