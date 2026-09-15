# Article workflow harness

This repository uses a small, serial Beads workflow for article preparation.
It turns one public-safe user brief into persistent artifacts and five specialised
tasks. Beads records state and dependencies; Markdown and assets record handoffs.
No worker relies on an earlier worker's chat response.

## Create an article graph

The story coordinator creates the graph directly with `bd`; no Node or workflow
runtime is required. Before creating it, validate a lowercase hyphenated slug,
a public-safe brief, author, and timeline step. Use `site-foundation` only for
material outside the scenario.

```sh
bd create "Article: <title>" --type epic \
  --labels content,article,slug:<slug> \
  --description "Public-safe article workflow; brief: content/briefs/<slug>.md; timeline step: <step>." \
  --acceptance "All child tasks have evidence; editorial review passes; human approval is recorded before deployment."

bd create "Research source pack: <slug>" --parent <ARTICLE> \
  --labels content,article,slug:<slug>,role:research,stage:research \
  --skills research-and-fact-check \
  --description "Read content/briefs/<slug>.md; write content/sources/<slug>.md." \
  --acceptance "Every material claim has a canonical source or an explicit unresolved note."

bd create "Draft article: <slug>" --parent <ARTICLE> \
  --labels content,article,slug:<slug>,role:redactor,stage:draft \
  --skills article-drafting \
  --description "Read the brief and source pack; write content/articles/<slug>.md." \
  --acceptance "The article preserves draft status and traces every material claim to the source pack."

bd create "Create visual assets: <slug>" --parent <ARTICLE> \
  --labels content,article,slug:<slug>,role:visual,stage:assets \
  --skills image-generation \
  --description "Read the brief and draft; write content/assets/<slug>/assets.md." \
  --acceptance "The manifest records private provenance, placement, alt text, caption, tool, and rights."

bd create "Editorial final gate: <slug>" --parent <ARTICLE> \
  --labels content,article,slug:<slug>,role:editor,stage:review \
  --skills editorial-review \
  --description "Review article, source pack, and asset manifest; write content/reviews/<slug>.md." \
  --acceptance "The review is approved with no unresolved material failure."

bd create "Build and deploy: <slug>" --parent <ARTICLE> \
  --labels content,article,slug:<slug>,role:tech,stage:deploy \
  --skills site-deployment \
  --description "Validate locally after approved review; record approval or exact deployment blocker." \
  --acceptance "Build and preview pass; production deploy closes only with human approval and verified URL."

bd dep add <DRAFT> <RESEARCH>
bd dep add <IMAGES> <DRAFT>
bd dep add <REVIEW> <IMAGES>
bd dep add <DEPLOY> <REVIEW>
```

Record the title, brief, timeline step, acceptance criteria, artifact paths, and
created IDs in the epic note. The coordinator also creates the brief, source
pack, article, review, and asset-manifest files under `content/` and
`content/assets/`, using the contracts in the relevant skill. Those locations
are not public web routes. The asset manifest is the authoritative handoff
record; raw candidate files, prompts, and generation records remain in
`tools/visual-generator/` until a human selects an approved stable export.

## Dispatch a ready task

```sh
bd ready --json
bd show <READY_ISSUE>
bd update <READY_ISSUE> --claim
```

The dispatcher is the person or agent reading `bd ready --json`, identifying the
single `role:` label, and routing that issue to the matching skill. The worker
then claims the issue, reads the declared artifacts, and follows that skill.
Because the graph is serial, a given article can never have two stage tasks ready
at once.

Every worker runs `bd prime`, reads its issue and declared artifact inputs, claims
that one issue, performs its bounded scope, records paths/URLs/checks in a Beads
note, then closes it only if its acceptance checks pass. A failed editorial gate
must create or request a corrective dependency; it must not be fixed informally.

## Approval boundary

An editor's `approved` review passes the editorial gate. It is not approval of
Red Horizon canon or a public release. The technical task can build and preview
locally after that gate, but production deployment requires a current explicit
human approval reference and a verified public URL. The repository contains no
automation that creates an external deployment.

## Verification

Before closing a workflow-creation issue, inspect its epic and children with
`bd show <id>` and confirm the five role/stage labels, four blocking edges, and
five artifact paths. Use `rg` to check Markdown links in the affected documents.
Workers record their commands and outcomes in Beads notes, which remain the
durable evidence for the workflow.
