---
name: editorial-review
description: Apply the final editorial and factual-quality gate to a prepared Red Horizon article package.
---

# Editorial review

Required inputs: the claimed kanban card, article draft, source pack, asset
manifest and candidate assets, brief, and applicable public canon. Read
`AGENTS.md`, `docs/INSTRUCTIONS.md`, your own role definition (your agent's `SOUL.md` —
the `mars-ai-simulator-editor` and `mars-ai-simulator-continuity` profiles own this gate), and
`.agents/skills/copy-editing/SKILL.md` first.

Allowed tools: repository inspection/editing limited to the review record,
link/check commands, and the `hermes kanban` worker commands (`show`, `claim`,
`comment`, `complete`). A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards. Do not deploy, approve public canon
for the human, or silently repair another worker's artifact.

Write `.agents/work/reviews/<slug>.md` with pass/fail findings for citations, links,
coherence, voice/grammar, image placement/captions/alt text, and metadata/schema.
Set its final status to `approved`, `changes_requested`, or `blocked`.

Reject and keep the card open for any material factual, accessibility, licensing,
or coherence failure. Create or request a scoped corrective card and link it as a
blocking dependency of this review card
(`hermes kanban link <CORRECTIVE> <REVIEW>`); this skill may create that one card.
An `approved` review is an editorial gate only: human canon/release approval is
still needed before public deployment. Record the result, evidence paths, and
remaining approval as a card comment (`hermes kanban comment <id> "..."`) and in
`.agents/work/reviews/<slug>.md` before `hermes kanban complete`.

## Verified practice

- Verify the published surface, not only the article file. An MDX body can pass
  every gate while the page that carries it leaks: check the site chrome under
  `website/src/pages/` and inspect the build output (`website/dist/`) for gated
  names, imagery, and unexplained values. Report surface failures in the same
  record — the gate covers the published package, not just the copy.
- Verify asset provenance by content, not by path: compare `sha256sum` of the file
  actually in use against the approved hash in `docs/brand/BRAND.md`. A
  re-exported or transparent-background variant of the same artwork still fails the
  approved-hash check and needs a human release decision.
- Re-read the gate inputs and re-run `git status` immediately before writing the
  verdict. The working directory is shared with other profiles, so the scenario
  file, timeline steps, and asset paths can change mid-run; never assert a broken
  reference or a stale path from a snapshot taken earlier in the run.
- Corrective card mechanics: create it as `<CORRECTIVE>`, link it as the parent of
  the review (`hermes kanban link <CORRECTIVE> <REVIEW>`), then block the review
  card with kind `dependency` so it resumes when the corrective completes. Write the
  corrective body with withheld-by-default actions and an explicit "not yours to
  decide" list, so no agent settles a canon question on the way through.

- Cards and record templates name paths that a concurrent refactor may have
  deleted. Resolve a missing input to its current equivalent and state the
  substitution in the verdict (article 001: `website/scripts/sync-assets.mjs` is
  gone; the surface work now lives in `scripts/guards.mjs` + `scripts/check-dist.mjs`
  + `src/lib/assets.ts`). Never report a superseded path as a broken reference or
  gate on it.
- Prove whether the article body is public at all before reviewing its surface:
  `src/lib/releases.ts` plus the route list printed by `website/scripts/check-dist.mjs`
  show that only the card, not the body, is reachable while the release list is
  empty.
- Name withheld material by location, not by value. Cite the gated-term list
  (`.agents/work/briefs/<slug>.md` "Forbidden token set", the review record) and
  report hit counts; keep scratch scanners outside the repository so the tree
  gains no new copy of a withheld name, coordinate, date or provider.
- In this shared checkout a concurrent worker proving the build guard can
  transiently plant a withheld asset in `website/public/assets/` — gitignored, so
  invisible to `git status`. `check-dist` fails closed while it is there and
  passes once it is removed. Re-run the surface check immediately before writing
  the verdict, record the observation with timestamps and hashes, and do not
  the verdict, record the observation with timestamps and hashes, and do not
  raise a corrective card for a test artefact that clears itself.
- A gate card can be dispatched before its parents finish, and the planner may
  link a parent mid-run. `kanban_complete` then returns a generic "could not
  complete … (unknown id, stale run, or already terminal)" and writes nothing —
  the cause is the parent gate, not the verdict. Check the card's parents before
  assuming a tool fault: wait for the parent (a bounded read-only poll of
  `tasks` in `~/.hermes/kanban.db` is enough) and re-verify the package, or
  `kanban_block(kind="dependency")`. Do not reach for `hermes kanban complete
  --force` to close your own card — it bypasses the live-claim guard — and note
  that the CLI refuses outright in a session carrying
  `HERMES_DELEGATED_CHILD_CONTEXT`.
- A slug's gate record is one file re-written by each pass, and downstream
  records cite its hash. When a re-check supersedes an earlier version, keep a
  revision-history section naming the superseded hash and what moved around it,
  so a later reader does not read the mismatch as tampering. Re-hash the article
  first: an unchanged article hash is what lets a superseding verdict stand on
  an earlier gate's reading of the same bytes.
- A surface string another card owns can change **during** your gate — and change
  back. On the `/about/` gate the `/news/` document title moved twice inside one
  run (`News | Red Horizon` from a dev card, then the newsroom string restored on
  an SEO re-pass) while two cards argued it. Judge the revision live at verdict
  time, quote it, and record every revision with its hash and timestamp; then
  state explicitly whether your approval depends on that string at all (there it
  did not). A verdict row quoting a stale surface string is the failure mode; a
  record that names the revision and the movement is not. Re-read the **built**
  output (`website/dist/`) after any such movement — the page source and the
  built file are not the same surface.

- When the upstream continuity verdict is `human decision required`, the gate must
  **not** complete: the card body forbids closing on that verdict, and a completion
  would promote the BUILD child into a package no gate has passed. Record the
  findings, set `changes_requested`, create the corrective card in `blocked` state
  (`kanban_create(..., initial_status="blocked")`) whenever it cannot start before a
  human answer, link it as the gate's **parent** (never as a child —
  `parents=[your-gate]` deadlocks both directions), and call
  `kanban_block(kind="dependency")`. Write the human question and its "not yours to
  decide" list into the corrective body, with the gate-side required changes as
  C-items it must apply, so no worker settles the canon question on the way through.

Acceptance checks: every review-table row passes, the record's final status is
`approved`, and no material failure remains unresolved.
