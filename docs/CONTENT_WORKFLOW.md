# Article workflow harness

This repository uses a small, serial Beads workflow for article preparation.
It turns one public-safe user brief into persistent artifacts and five specialised
tasks. Beads records state and dependencies; Markdown and assets record handoffs.
No worker relies on an earlier worker's chat response.

## Create an article graph

From the repository root, with the pinned Node version available:

```sh
fnm exec --using website/.node-version node scripts/article-workflow.mjs create \
  --title "Article title" \
  --slug article-title \
  --brief "The requested public-safe article scope." \
  --author "Red Horizon editorial team" \
  --timeline-step site-foundation
```

`--timeline-step` is required. Supply an approved timeline identifier for story
content, or `site-foundation` only for material outside the scenario. The command
rejects an invalid slug or an existing article artifact. It creates an `ARTICLE`
epic and the serial graph `RESEARCH -> DRAFT -> IMAGES -> REVIEW -> DEPLOY`, with
role and stage labels on each child.

The command also creates the brief, source pack, article, review, and asset
manifest templates under `content/` and `assets/articles/`. Those locations are
not public web routes. The asset manifest is the authoritative handoff record;
candidate files remain in the article asset folder until media approval.

## Dispatch a ready task

```sh
fnm exec --using website/.node-version node scripts/article-workflow.mjs dispatch
```

The command reads `bd ready --json` and prints JSON dispatch records only for
article tasks with exactly one `role:` label. Each includes the Beads ID, skill,
artifact paths, and a worker prompt. It does not claim, edit, or launch an agent.
The dispatcher may hand each record to the matching worker. Because the graph is
serial, a given article can never have two stage tasks ready at once.

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

## Validation

Run the harness contract test with:

```sh
fnm exec --using website/.node-version node scripts/article-workflow.test.mjs
```

It uses a temporary fake Beads command to confirm artifact creation, labels,
dependencies, and dispatch filtering without changing the project Beads database.
