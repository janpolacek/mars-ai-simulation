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
confirmation belong to the `mars-ai-simulator-reviewer` role.

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

hermes kanban create "Create visual assets: <slug>" --parent <DRAFT> \
  --assignee mars-ai-simulator-visuals \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: assets. Read the brief and draft; write .agents/work/assets/<slug>/assets.md. Acceptance: the manifest records private provenance, placement, alt text, caption, tool, and rights."

hermes kanban create "Editorial final gate: <slug>" --parent <IMAGES> \
  --assignee mars-ai-simulator-reviewer \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: review. The reviewer-in-chief runs the continuity check and editorial gate in one pass: read the draft with its integrated SEO package, the source pack, the asset manifest, the released timeline step, and docs/SCENARIO.md; verify chronology, canon consistency, plausibility, spoiler safety, copy, and the published surface. Assign the article's simulated record date (frontmatter simulatedDate) from the milestone table in docs/SCENARIO.md that the released step covers, verify it on the built page, and name the milestone line in the record. Write the continuity verdict to .agents/work/continuity/<slug>.md and the review to .agents/work/reviews/<slug>.md, and record the release decision on this card. Acceptance: every claim agrees with the released step and the scenario, no later-step fact or Asteria Field detail appears, the article carries a record date drawn from a locked milestone line, the review is approved with no unresolved material failure, and the release decision names the exact public scope."

hermes kanban create "Build and deploy: <slug>" --parent <REVIEW> \
  --assignee mars-ai-simulator-dev \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: deploy. Validate locally after the recorded editorial release decision; record the build result or the exact deployment blocker. Acceptance: build, guard, and preview pass, the release decision is recorded on the review card, the built page states the article's simulated record date under its in-fiction label, and the flip is pushed with a verified URL."

hermes kanban link <RESEARCH> <DRAFT>
hermes kanban link <DRAFT> <IMAGES>
hermes kanban link <IMAGES> <REVIEW>
hermes kanban link <REVIEW> <DEPLOY>
```

The editorial gate is one card because continuity verification, the editorial review, and the
release decision are one role's work (`mars-ai-simulator-reviewer`). It is the last gate before the
build card.

**Card direction:** each stage card's `--parent` is the _previous stage_, and the
article parent card is linked as the child of the final stage
(`hermes kanban link <DEPLOY> <ARTICLE>`) so it stays `todo` until the article is
delivered. Never pass `--parent <ARTICLE>` on a stage card and never make the
article parent a blocking parent of its own stages: on the board that inverts the
graph — every stage waits for the article card to be done while the article card
waits for its stages, so nothing can ever start and the dispatcher keeps
re-spawning the coordinator on the epic.

## A worker dispatched onto an Article container must verify, not rebuild

The Article container card is created by the commission run alongside its graph,
so the worker that later picks the container up does **not** create the graph —
it verifies that one already exists. The default behaviour is fail-closed: on
claim, the worker reads each child with `hermes kanban show`, checks the four
blocking edges RESEARCH→DRAFT→IMAGES→REVIEW→DEPLOY, confirms the artifact
paths exist on disk, and closes the container with `kanban_complete` (or
`kanban_block` if a gate answer is genuinely missing), **creating nothing**.

Two rules make that the only possible outcome.

1. **The container body carries the real child ids and an explicit line that the
   graph already exists.** The commission run that creates the graph also
   writes those ids into the container body (in the same run, in the same
   comment thread). Placeholders in a dispatched container body — `t_<research>`,
   `t_<draft>`, `t_<seo>`, `t_<images>`, `t_<editorial>`, `t_<deploy>`,
   `t_<release>` — are an open invitation to rebuild the graph beside the
   existing one, because every skill in the worker's context treats them as
   "fill this in" rather than "verify it is already filled". The corrective that
   filed this rule is the step-004 incident (operator 2026-09-17, evidence on
   `t_5fbd61ee` → `t_0abfd5b6` run 150, eight archived duplicates
   `t_9e59c235`, `t_24585e00`, `t_81bc2b83`, `t_94887702`, `t_8db78a76`,
   `t_655341e8`, `t_1e366ff0`, `t_5fa67915`): the planner worker rebuilt the
   graph rather than verify it.
2. **If a container must be created before its graph (the old shape), the
   container is created `--initial-status blocked`** (or otherwise kept from
   dispatch — for example, by depending the parent gate on the graph first) and
   the worker that later fills in the ids is forbidden from creating any card
   that already exists. A worker that finds the graph already on the board
   records the verified ids and closes without creating anything; a worker that
   finds it absent stays `blocked` and routes the missing graph to the planner
   rather than building it itself.

The single one-line rule the worker carries into the claim:

> _Read the container's children with `hermes kanban show`, confirm the graph
> is already on the board, and close — creating nothing._

Record the title, brief, timeline step, acceptance criteria, artifact paths, and
created card IDs as a comment on the parent card
(`hermes kanban comment <id> "..."`). The coordinator also creates the brief,
source pack, review, and asset-manifest files under `.agents/work/` and prepares
the article as `website/news/<slug>.mdx`, using the contracts in the relevant
skill. The handoff locations are not public web routes; `website/news/` is the
direct MDX publication source. Draft MDX may be staged there only with
`publication: draft`, which the website filters out; cleared articles use
`publication: published`. The asset manifest is the authoritative handoff
record; raw candidate files, prompts, and generation records stay in the visuals
profile's image cache, outside the repository, until a human selects an approved stable
export.

## Required outputs

| Stage    | Card                 | Assignee profile             | Artifact                                                               |
| -------- | -------------------- | ---------------------------- | ---------------------------------------------------------------------- |
| research | Research source pack | `mars-ai-simulator-planner`  | `.agents/work/sources/<slug>.md`                                       |
| draft    | Draft article        | `mars-ai-simulator-writer`   | `website/news/<slug>.mdx`                                              |
| assets   | Create visual assets | `mars-ai-simulator-visuals`  | `.agents/work/assets/<slug>/assets.md`                                 |
| review   | Editorial final gate | `mars-ai-simulator-reviewer` | `.agents/work/reviews/<slug>.md` + `.agents/work/continuity/<slug>.md` |
| deploy   | Build and deploy     | `mars-ai-simulator-dev`      | deployment record on the card                                          |

Create the artifact templates from the brief at `.agents/work/briefs/<slug>.md`
during the claimed workflow card. Acceptance checks: the five child cards carry
the required assignee profile and stage name; the chain is RESEARCH -> DRAFT
-> IMAGES -> REVIEW -> DEPLOY, with four blocking edges; all artifact
templates exist.
Complete the orchestration card only after those checks pass.

## The IMAGES card is a visual brief

The stage-4 card body tells `mars-ai-simulator-visuals` _what_ to depict, never
only that assets are needed. Before creating it, check `docs/vehicles/`,
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
- The visuals agent owns how the image is rendered: the hosted `image_generate` tool
  (provider `openai-codex`, model `gpt-image-2-medium`), after a
  `hermes auth status openai-codex` probe that reports `logged in`. The card body should
  require that probe result in the handoff, plus the `imagegen_request_id` and the cache
  filename of every candidate — the pair that replaces the old ComfyUI sidecar as the
  private provenance record. If the hosted path is unavailable, the local ComfyUI fallback
  applies and its rules hold there: the server starts in its own uncapped systemd unit with
  the server process itself as the unit's main process (wrapping `comfyctl start` in
  `systemd-run` leaves no server running) and stops before the card completes, reporting
  the final `comfyctl status` so the GPU is free for the next role — a worker cgroup is
  capped at 4 GiB and a 4–8 GB model load inside it gets the worker OOM-killed mid-card.
  The card body may require that state in the handoff but must not dictate prompts or model
  choices. See the project skill `image-generation` for the procedure, the candidate cache,
  and the pitfalls.
- Create exactly one IMAGES card per article, and never two image cards that can
  become ready at once: candidates are produced one at a time, each taking minutes, and
  the local fallback serialises on the machine's single 8 GB GPU.

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

The reviewer-in-chief role (`mars-ai-simulator-reviewer`) decides releasability and confirms canon:
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

## Planning a non-article graph (asset incorporation, revisions, close-outs)

An operator can commission a graph that is not a fresh article — placing new vehicle
plates, revising an already-published article, cleaning up held paths. Four rules keep
that graph honest.

**Re-scan the board immediately before AND after creating cards.** The board is live and
other sessions write to it mid-run. Read it once while drafting and then again after
`kanban_create` returns: an operator-created card can appear in between and duplicate a
card you were about to file, and a card you were waiting on can complete under you. Group
existing cards by the **artifact path they name**, never by title — two cards can share a
title and own different files, and two same-purpose cards can share a file and different
titles. When a duplicate is found, a card body cannot be edited: add an
**"AUTHORITATIVE SCOPE AMENDMENT"** comment stating that the body is the original draft
and the comment governs, and re-point the card's purpose rather than leaving it to be
dispatched against a stale scope. Correct the stale lines in sibling card bodies the same
way — a body that names a rescoped card, or a dependency that no longer exists, will
mislead its worker.

**`git add <path>` stages the whole file, not your hunk.** When two dev cards in one
shared `dir:` workspace would touch the same file, chain them (`--parent`) and let the
second rebase, rather than running them concurrently. Check each path a card must commit
for a _foreign uncommitted edit in the same working-tree copy_: committing it publishes
that other card's half-applied work. On a repository whose `main` auto-deploys, that is a
live-content hazard (one card's import switched while another card's frontmatter still
names the old asset). If the collision is real, gate the later card on the card that owns
the file — and say in the brief which files forced it, with the measured evidence.

**Never write "do not commit or push" into a `mars-ai-simulator-dev` card** — a dev card
is commit-and-push authority. Get the gate-before-publication property by _sequencing_
instead: the card that writes the public bytes runs after the gate card that approved
them, and any dev card that must run earlier commits only work that is **inert on the
public surface** (a registry key nothing declares yet, an unused resolver, tests). State
in the card why its commit is inert, and have it end with a clean tree and
`git rev-list --count origin/main..HEAD` = 0.

**When a card's acceptance depends on a human gate, that card blocks — it does not
silently skip the push.** Make the card say which escalation gates it and that it must
`kanban_block(kind="needs_input")` (after doing any non-public part of the work, such as
copying a file inside an already-untracked folder) rather than completing as if the push
had happened. Plates with unrecorded provenance are the common case: no PNG text chunk
naming a producer, tool or model means **unresolved rights = no public placement**, and
the editorial role may not infer an origin.

For a **revision** of an already-published article, the release decision names the bytes
and _any_ change to them voids it, so the graph carries a re-gate _and_ a revision record
appended to the same release file. Keep the graph small and strictly serial — one dev
lane, one editor lane — and name every escalation with the default the chain proceeds
with, so an unanswered human gate never blocks the _start_ of the chain, only the
publication it gates.
