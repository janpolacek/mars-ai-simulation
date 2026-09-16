# Article workflow harness

This repository uses a small, serial kanban workflow for article preparation.
It turns one public-safe user brief into persistent artifacts and five specialised
tasks. The Hermes kanban board records state and dependencies; Markdown and assets
record handoffs. No worker relies on an earlier worker's chat response.

## Create an article graph

The story coordinator creates the graph directly with `hermes kanban`; no Node or
workflow runtime is required. One card is one stage with one assignee profile, and
every card is scoped to this repository with
`--workspace dir:/home/janpolacek/Projects/mars-ai-simulator`. Do not pass
`--project`: the Hermes project registry holds no entry for this repository, so
the workspace flag is the only scoping a card needs. Before creating the graph,
validate a lowercase hyphenated slug, a public-safe brief, author, and timeline
step. Use `site-foundation` only for material outside the scenario.

```sh
hermes kanban create "Article: <title>" --priority 1 \
  --assignee mars-ai-simulator-planner \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Public-safe article workflow; brief: docs/content/briefs/<slug>.md; timeline step: <step>. Acceptance: every child card has evidence; editorial review passes; human approval is recorded before deployment."

hermes kanban create "Research source pack: <slug>" \
  --assignee mars-ai-simulator-planner \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: research. Read docs/content/briefs/<slug>.md; write docs/content/sources/<slug>.md. Acceptance: every material claim has a canonical source or an explicit unresolved note."

hermes kanban create "Draft article: <slug>" --parent <RESEARCH> \
  --assignee mars-ai-simulator-writer \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: draft. Read the brief and source pack; prepare website/news/<slug>.mdx. Acceptance: the article preserves draft status and traces every material claim to the source pack."

hermes kanban create "Create visual assets: <slug>" --parent <DRAFT> \
  --assignee mars-ai-simulator-visuals \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: assets. Read the brief and draft; write docs/content/assets/<slug>/assets.md. Acceptance: the manifest records private provenance, placement, alt text, caption, tool, and rights."

hermes kanban create "Editorial final gate: <slug>" --parent <IMAGES> \
  --assignee mars-ai-simulator-editor \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: review. Review article, source pack, and asset manifest; write docs/content/reviews/<slug>.md. Acceptance: the review is approved with no unresolved material failure. Consult the continuity redactor through the editorial-review skill; the card's assignee stays the editor."

hermes kanban create "Build and deploy: <slug>" --parent <REVIEW> \
  --assignee mars-ai-simulator-dev \
  --workspace dir:/home/janpolacek/Projects/mars-ai-simulator \
  --body "Stage: deploy. Validate locally after approved review; record approval or the exact deployment blocker. Acceptance: build and preview pass; production deploy completes only with human approval and a verified URL."

hermes kanban link <RESEARCH> <DRAFT>
hermes kanban link <DRAFT> <IMAGES>
hermes kanban link <IMAGES> <REVIEW>
hermes kanban link <REVIEW> <DEPLOY>
```

**Direction of the cardinality matters.** Each stage card takes the *previous stage* as its
`--parent`, and the article parent card is linked as the **child of the final stage**
(`hermes kanban link <DEPLOY> <ARTICLE>`) so it stays `todo` until the article is fully delivered.
Never make the article parent a blocking parent of its own stage cards: on the board that inverts the
graph — every stage waits for the article card to be done while the article card waits for its
stages, so nothing can ever start and the dispatcher keeps re-spawning the coordinator on the epic.


Record the title, brief, timeline step, acceptance criteria, artifact paths, and
created card IDs as a comment on the parent card
(`hermes kanban comment <id> "..."`). The coordinator also creates the brief,
source pack, review, and asset-manifest files under `docs/content/` and prepares
the article as `website/news/<slug>.mdx`, using the contracts in the relevant
skill. The handoff locations are not public web routes; `website/news/` is the
direct MDX publication source. Draft MDX may be staged there only with
`publication: draft`, which the website filters out; cleared articles use
`publication: published`. The asset manifest is the authoritative handoff
record; raw candidate files, prompts, and generation records remain in
`tools/visual-generator/` until a human selects an approved stable export.

The pre-kanban issue history from the retired tracker is archived read-only at
`docs/beads-archive.jsonl`.

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

An editor's `approved` review passes the editorial gate. It is not approval of
Red Horizon canon or a public release. The technical task can build and preview
locally after that gate, but production deployment requires a current explicit
human approval reference and a verified public URL. The repository contains no
automation that creates an external deployment.

## Verification

Before completing a workflow-creation card, inspect the parent card and its
children with `hermes kanban show <id>` and confirm the five stage cards with
their assignee profiles, the four blocking edges, and the five artifact paths. Use
`rg` to check Markdown links in the affected documents. Workers record their
commands and outcomes as card comments and in the repository artifact. The board
is local to this machine and has no cross-machine sync, so the durable record for
a task is the artifact under `docs/content/` plus the card's result and comments.
