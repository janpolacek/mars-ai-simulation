# Project instructions

These rules apply to every human and agent. Role-specific contracts live in the
[agent playbook](agents/README.md); a role follows both documents.

## Mandatory working sequence

1. Run `bd prime`, inspect `bd ready`, then create or claim the relevant issue.
2. Read the role contract and the minimum relevant source material before acting.
3. Produce one bounded deliverable: a draft, review, visual brief, implementation,
   deployment plan, or validation result.
4. Record affected canon, files, validation, open questions, and next owner in the
   Beads issue.
5. Never mark work as published or complete when a required review, test, or human
   decision remains outstanding.

## Source-of-truth order

1. Explicit current human instruction.
2. Approved public canon and the private timeline's event order.
3. Vehicle dossiers and approved media metadata.
4. Repository conventions and agent role contracts.
5. A well-marked proposal, never an invented fact presented as established canon.

When sources conflict, stop the affected claim, describe the conflict in Beads,
and ask the human story owner for a decision. Do not silently reconcile it.

## Project source layout

`content/` is the only project source root. Keep article handoffs in its
`briefs/`, `sources/`, `articles/`, and `reviews/` directories; approved public
media in `media/`; identity artwork in `brand/`; and per-article visual manifests
in `assets/`. Do not create a parallel repository-root `assets/` directory.

`tools/visual-generator/assets/` is an ignored, tool-local generation workspace,
not a project content source.

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
action/owner**. A handoff that is ready for human approval includes a short
release recommendation and the exact proposed public scope.
