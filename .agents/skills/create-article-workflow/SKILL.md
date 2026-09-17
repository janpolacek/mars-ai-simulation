---
name: create-article-workflow
description: Turn one approved-to-draft Red Horizon article request into a kanban parent card with a serial, inspectable worker graph.
---

# Create article workflow

Required inputs: a public-safe title, a lowercase hyphenated slug, the user's
brief, author, and an allowed timeline step (use `site-foundation` only for
non-story material). Read `AGENTS.md`, `docs/INSTRUCTIONS.md`,
your own role definition (your agent's `SOUL.md` — the `mars-ai-simulator-planner` profile owns this
workflow), and only the timeline material needed to
validate that step. Never copy private timeline text into a public artifact.

Allowed tools: `hermes kanban create`, `hermes kanban link`, `hermes kanban show`,
`hermes kanban comment`, `hermes kanban complete`, and normal repository
inspection/editing. This skill owns card creation; other skills do not create or
reassign cards unless they say so. Do not publish, deploy, alter provider
configuration, or make a canon or release decision — releasability and canon
confirmation belong to the `mars-ai-simulator-editor` role.

Reject a missing brief, invalid slug, unspecified timeline step, duplicate slug,
or any request that would reveal private future material.

## Create the article graph

The coordinator creates the graph directly with `hermes kanban`; no Node or
workflow runtime is required. One card is one stage with one assignee profile, and
every card is scoped to this repository with
`--workspace dir:/home/janpolacek/Projects/mars-ai-simulator`. Do not pass
`--project`: the Hermes project registry holds no entry for this repository, so
the workspace flag is the only scoping a card needs.

```sh
hermes kanban create "Article: <title>" --priority 1 \
  --assignee mars-ai-simulator-planner \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Public-safe article workflow; brief: .agents/work/briefs/<slug>.md; timeline step: <step>. Acceptance: every child card has evidence; the editorial gate is approved and its release decision is recorded before deployment."

hermes kanban create "Research source pack: <slug>" \
  --assignee mars-ai-simulator-planner \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: research. Read .agents/work/briefs/<slug>.md; write .agents/work/sources/<slug>.md. Acceptance: every material claim has a canonical source or an explicit unresolved note."

hermes kanban create "Draft article: <slug>" --parent <RESEARCH> \
  --assignee mars-ai-simulator-writer \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: draft. Read the brief and source pack; prepare website/news/<slug>.mdx. Acceptance: the article preserves draft status and traces every material claim to the source pack. Leave the simulated record date unset: the editorial gate assigns it from docs/SCENARIO.md, and a value chosen here is not binding."

hermes kanban create "SEO pass: <slug>" --parent <DRAFT> \
  --assignee mars-ai-simulator-seo \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: seo. Read the draft, the brief, and the source pack; review reader intent, title, meta description, slug, heading order, internal links, and structured data, and write the package to .agents/work/seo/<slug>.md. Apply only the metadata you own (title, description, slug, heading order, internal links) in website/news/<slug>.mdx. Acceptance: one clear reader intent, honest metadata, no keyword stuffing, no later-step disclosure in metadata, and every change recorded in the package."

hermes kanban create "Create visual assets: <slug>" --parent <SEO> \
  --assignee mars-ai-simulator-visuals \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: assets. Read the brief and draft; write .agents/work/assets/<slug>/assets.md. Acceptance: the manifest records private provenance, placement, alt text, caption, tool, and rights."

hermes kanban create "Editorial final gate: <slug>" --parent <IMAGES> \
  --assignee mars-ai-simulator-editor \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: review. The merged editorial role runs the continuity check and the editorial gate in one pass: read the draft, the source pack, the SEO package, the asset manifest, the released timeline step, and docs/SCENARIO.md; verify chronology, canon consistency, plausibility, and spoiler safety, then the copy and the published surface. Assign the article's simulated record date (frontmatter simulatedDate) from the milestone table in docs/SCENARIO.md that the released step covers, verify it on the built page, and name the milestone line in the record. Write the continuity verdict to .agents/work/continuity/<slug>.md and the review to .agents/work/reviews/<slug>.md, and record the release decision on this card. Acceptance: every claim agrees with the released step and the scenario, no later-step fact or Asteria Field detail appears, the article carries a record date drawn from a locked milestone line, the review is approved with no unresolved material failure, and the release decision names the exact public scope."

hermes kanban create "Build and deploy: <slug>" --parent <REVIEW> \
  --assignee mars-ai-simulator-dev \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: deploy. Validate locally after the recorded editorial release decision; record the build result or the exact deployment blocker. Acceptance: build, guard, and preview pass, the release decision is recorded on the review card, the built page states the article's simulated record date under its in-fiction label, and the flip is pushed with a verified URL."

hermes kanban link <RESEARCH> <DRAFT>
hermes kanban link <DRAFT> <SEO>
hermes kanban link <SEO> <IMAGES>
hermes kanban link <IMAGES> <REVIEW>
hermes kanban link <REVIEW> <DEPLOY>
```

The editorial gate is one card because continuity verification, the editorial review, and the
release decision are one role's work (`mars-ai-simulator-editor`). It is the last gate before the
build card.

**Card direction:** each stage card's `--parent` is the _previous stage_, and the
article parent card is linked as the child of the final stage
(`hermes kanban link <DEPLOY> <ARTICLE>`) so it stays `todo` until the article is
delivered. Never pass `--parent <ARTICLE>` on a stage card and never make the
article parent a blocking parent of its own stages: on the board that inverts the
graph — every stage waits for the article card to be done while the article card
waits for its stages, so nothing can ever start and the dispatcher keeps
re-spawning the coordinator on the epic.

Record the title, brief, timeline step, acceptance criteria, artifact paths, and
created card IDs as a comment on the parent card
(`hermes kanban comment <id> "..."`). The coordinator also creates the brief,
source pack, review, and asset-manifest files under `.agents/work/` and prepares
the article as `website/news/<slug>.mdx`, using the contracts in the relevant
skill. The handoff locations are not public web routes; `website/news/` is the
direct MDX publication source. Draft MDX may be staged there only with
`publication: draft`, which the website filters out; cleared articles use
`publication: published`. The asset manifest is the authoritative handoff
record; raw candidate files, prompts, and generation records remain in
`tools/visual-generator/` until a human selects an approved stable export.

## Required outputs

| Stage    | Card                 | Assignee profile            | Artifact                                                               |
| -------- | -------------------- | --------------------------- | ---------------------------------------------------------------------- |
| research | Research source pack | `mars-ai-simulator-planner` | `.agents/work/sources/<slug>.md`                                       |
| draft    | Draft article        | `mars-ai-simulator-writer`  | `website/news/<slug>.mdx`                                              |
| seo      | SEO pass             | `mars-ai-simulator-seo`     | `.agents/work/seo/<slug>.md`                                           |
| assets   | Create visual assets | `mars-ai-simulator-visuals` | `.agents/work/assets/<slug>/assets.md`                                 |
| review   | Editorial final gate | `mars-ai-simulator-editor`  | `.agents/work/reviews/<slug>.md` + `.agents/work/continuity/<slug>.md` |
| deploy   | Build and deploy     | `mars-ai-simulator-dev`     | deployment record on the card                                          |

Create the artifact templates from the brief at `.agents/work/briefs/<slug>.md`
during the claimed workflow card. Acceptance checks: the six child cards carry
the required assignee profile and stage name; the chain is RESEARCH -> DRAFT -> SEO
-> IMAGES -> REVIEW -> DEPLOY, with five blocking edges; all artifact
templates exist.
Complete the orchestration card only after those checks pass.

## The IMAGES card is a visual brief

The stage-4 card body tells `mars-ai-simulator-visuals` _what_ to depict, never
only that assets are needed. Before creating it, check `docs/vehicle/`,
`docs/area/`, `docs/brand/`, and the approved exports recorded in earlier
manifests under `.agents/work/assets/` for an image that already carries the
moment:

- Reuse is enough → the body states `no new imagery: reuse <exact path>` and the
  acceptance criterion is the manifest recording that reuse.
- New imagery is needed → the body states the moment or subject, the placement in
  the draft, the number of candidates, the aspect ratio, the reference assets to
  preserve continuity from (exact paths), the allowed canon facts, the forbidden
  spoiler facts, the intended alt-text meaning, and the artifact to write
  (`.agents/work/assets/<slug>/assets.md`).
- The visuals agent owns how the image is rendered, including the local ComfyUI
  lifecycle: it starts the server for the card and stops it before completing
  (`comfyctl stop`), then reports `comfyctl status` in its handoff so the GPU is
  free for the next role. The start must land in the server's own systemd unit
  (`systemd-run --user --unit=comfyui-server … comfyctl start`), never as a child
  of the worker shell: a worker cgroup is capped at 4 GiB and a 4–8 GB model load
  inside it gets the worker OOM-killed mid-card. The card body may require that
  state in the handoff but must not dictate prompts or model choices. See the
  profile skill `mars-visual-studio` for the model inventory and pitfalls.
- Create exactly one IMAGES card per article, and never two image cards that can
  become ready at once: one local 8 GB GPU serialises generations, each taking
  minutes.

## Record dates in the graph

Every published news article carries one **simulated record date**: the date, inside the fiction,
on which the article was written. The field is `simulatedDate` in the article frontmatter, and the
editorial gate owns its value — it draws the date from the milestone table in `docs/SCENARIO.md`
("Launch and mission dates") for the step being released, because inventing a calendar date is new
scenario canon and stays with the human story owner.

The coordinator's duties are only these: the DRAFT card says the writer must leave the field unset,
the REVIEW card requires the value and the milestone line it came from, and the DEPLOY card checks
the built page states it under its in-fiction label. Never let a card body carry a date of its own:
a planner-chosen date would be exactly the invented canon this rule forbids, and the card would then
prescribe a value the gate has to overrule. Where the site has no field for it yet, the schema-and-
render work is a separate technical card, and the review card for an article that predates the field
routes it there rather than writing a frontmatter key the build rejects.

## Dispatch a ready card

```sh
hermes kanban list --status ready
hermes kanban show <READY_CARD>
hermes kanban claim <READY_CARD>
```

The dispatcher is the person or agent reading
`hermes kanban list --status ready`, identifying the card's single assignee
profile, and routing that card to the matching skill. The worker then claims the
card, reads the declared artifacts, and follows that skill. Because the graph is
serial, a given article can never have two stage tasks ready at once.

Every worker reads `AGENTS.md`, `docs/INSTRUCTIONS.md`, and the matching project
skill, then reads its card (`hermes kanban show <id>`) and declared artifact
inputs, claims that one card (`hermes kanban claim <id>`), performs its bounded
scope, records paths/URLs/checks as a card comment
(`hermes kanban comment <id> "..."`), and completes it
(`hermes kanban complete <id> --result "..." --summary "..."`) only if its
acceptance checks pass. A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards, with the single exception of the
corrective card an editorial gate may open. A failed editorial gate must create or
request a corrective card linked as a blocking dependency
(`hermes kanban link <CORRECTIVE> <REVIEW>`); it must not be fixed informally.

## Approval boundary

The merged editorial role (`mars-ai-simulator-editor`) decides releasability and confirms canon:
its recorded release decision on the review card is the approval, and no separate human approval
sentence is needed before an article goes public. What the editorial gate does **not** grant is
anything outside the released material — making a later timeline step's facts public is new
scenario canon and stays with the human story owner. The technical card builds, proves the guard,
and pushes the flip once the release decision is recorded; external actions (deploy commands,
hosting, DNS, domains, credentials, external media) remain human-only and are listed in
`AGENTS.md` and `docs/INSTRUCTIONS.md`.

## Verification

Before completing a workflow-creation card, inspect the parent card and its
children with `hermes kanban show <id>` and confirm the six stage cards with
their assignee profiles, the five blocking edges, and the artifact paths. Use
`rg` to check Markdown links in the affected documents. Workers record their
commands and outcomes as card comments and in the repository artifact. The board
is local to this machine and has no cross-machine sync, so the durable record for
a task is the artifact under `.agents/work/` plus the card's result and comments.
