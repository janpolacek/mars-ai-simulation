---
name: editorial-review
description: Apply the final editorial and factual-quality gate to a prepared Red Horizon article package.
---

# Editorial review

Required inputs: the claimed kanban card, article draft, source pack, asset
manifest and candidate assets, brief, and applicable public canon. Read
`AGENTS.md`, `docs/INSTRUCTIONS.md`, your own role definition (your agent's `SOUL.md` —
the `mars-ai-simulator-editor` profile owns this gate, and since 2026-09-17 it holds the
continuity and release authority too), and
`.agents/skills/copy-editing/SKILL.md` first.

Allowed tools: repository inspection/editing limited to the review record,
link/check commands, and the `hermes kanban` worker commands (`show`, `claim`,
`comment`, `complete`). A worker may only claim, comment on, and complete its own
card; it does not create or reassign cards. Do not deploy, do not touch external
services, and do not silently repair another worker's artifact.

Write `.agents/work/reviews/<slug>.md` with pass/fail findings for citations, links,
coherence, voice/grammar, image placement/captions/alt text, and metadata/schema.
Set its final status to `approved`, `changes_requested`, or `blocked`.

Reject and keep the card open for any material factual, accessibility, licensing,
or coherence failure. Create or request a scoped corrective card and link it as a
blocking dependency of this review card
(`hermes kanban link <CORRECTIVE> <REVIEW>`); this skill may create that one card.
An `approved` review is the editorial gate **and** the release decision: the merged
editorial role confirms the package against released canon and records that it may be
published, with no separate human approval sentence. Run the continuity check in the
same pass (chronology, canon consistency, plausibility, spoiler safety — record it in
`.agents/work/continuity/<slug>.md`) unless an upstream card already carries a current
`continuity clear` for the same package hash. Record the result, evidence paths, the exact
public scope, and the release decision as a card comment (`hermes kanban comment <id> "..."`)
and in `.agents/work/reviews/<slug>.md` before `hermes kanban complete`.

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
  - `src/lib/assets.ts`). Never report a superseded path as a broken reference or
    gate on it.
- Prove whether the article body is public at all before reviewing its surface: the
  frontmatter `publication` predicate (`src/lib/publication.ts` +
  `src/features/news/query.ts`) plus the route list printed by
  `website/scripts/check-dist.mjs` show that only the card, not the body, is
  reachable while the slug is `draft`. (The older `src/lib/releases.ts` slug list was
  retired in commit `2d9ee0d`.)
- Name withheld material by location, not by value. Cite the gated-term list
  (`.agents/work/briefs/<slug>.md` "Forbidden token set", the review record) and
  report hit counts; keep scratch scanners outside the repository so the tree
  gains no new copy of a withheld name, coordinate, date or provider.
- In this shared checkout a concurrent worker proving the build guard can
  transiently plant a withheld asset in `website/public/assets/` — gitignored, so
  invisible to `git status`. `check-dist` fails closed while it is there and
  passes once it is removed. Re-run the surface check immediately before writing
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

- When the package's canon **cannot** be confirmed — a material claim traces to no released
  material, or publishing it would require a later timeline step to become public — the gate must
  **not** complete: the card body forbids closing on an unconfirmed claim, and a completion
  would promote the BUILD child into a package no gate has passed. Record the findings, set
  `changes_requested`, and create the corrective card in `blocked` state
  (`kanban_create(..., initial_status="blocked")`) whenever it cannot start before the release
  step moves, link it as the gate's **parent** (never as a child — `parents=[your-gate]`
  deadlocks both directions), and call `kanban_block(kind="dependency")`. Advancing the release
  step itself is the human story owner's call, not the merged role's: write the question into
  the corrective body with its "not yours to decide" list, and keep the gate-side required
  changes as C-items. Confirming that a package agrees with what is _already_ released is the
  merged role's own decision and needs no such card.

- The **release / release-decision** card — the card that carries the `publication:` flip — is
  the merged editorial role's own decision, not a human gate. Record the decision on the card
  itself: the exact public scope, the evidence, the article hash at the flip, and any condition.
  A board scan for approval sentences the planner's template promised is no longer the check —
  check instead that the release decision exists and is the editorial role's, that the article
  hash matches the approved revision, and that the built `website/dist/` carries the route and
  no withheld material. Withhold the flip and `kanban_block(kind="needs_input")` only when the
  claim needs canon the human has not released; say plainly which sentence or step is missing.
  Completing instead would promote the downstream BUILD child into a package no gate passed.
- A card written as a **human approval gate** can be reassigned to this role mid-run by an operator
  authority change, on top of a human answer that is already on the card. Then: record the human
  answer as a _human record_ (quoted, with its timestamp), and record the decision in this role's own
  sentence — the card body's template sentence stays **unapplied** whenever there is nothing to
  release (no package, no date), because applying it manufactures an approval nobody made. A gate with
  no package still needs a verdict, and the honest one is _withhold_ with the fail-closed default
  verified **in fact**: name the artifact that does not exist and measure the live surface (routes
  404, empty index, no sitemap) instead of restating the card body. Where a card body's condition has
  been superseded (it still demands a human sentence), route the wording fix to the owning role rather
  than editing their card, and create **no** downstream card for work that cannot start — write the
  precondition (e.g. "the release card must exist before any flip") into the card that owns the
  pipeline.
- Verify the fail-closed state **in fact**, not only on paper: the article hash must
  still equal the approved revision, and the built `website/dist/` must contain no
  route and no reference for the slug. A draft that is merely declared `draft` is not
  proof that it is not public.
- A card body's placement instruction can name the wrong media key. Check it against
  the contract in `src/lib/media.ts` (`plateCount`/`altCount`/`captionCount`) and the
  registry in `src/features/news/media.ts` before applying it: a key whose plate count
  differs from the asset the card means belongs to another article. Correct the
  instruction in the record, cite the registry and the canon line that releases the
  other key, and never place another article's plates just to make the field valid.
- The release mechanism itself can be retired mid-run: `src/lib/releases.ts` was
  deleted in commit `2d9ee0d`, leaving the frontmatter `publication` field as the
  single predicate for listing, card and route. The frontmatter flip stays the correct
  release action, and older handoffs telling a worker to "record an entry in
  `src/lib/releases.ts`" are superseded, not broken.
- A re-run of that card after unblocking turns on **sentence fidelity per gate**, not on
  the gate count. A human may answer in their own words ("1 gather media … automatically
  approve if editor is ok with it; 3 ; 4 - handle it") instead of the template sentences the
  card body required, with an operator comment reading the answer gate by gate; record which
  gates arrived verifiably verbatim and which did not, and work from the operator's recorded
  reading rather than inventing a sentence the human never said. Establish it from a
  board-wide `task_comments` scan that rejects the planner's own templates, and state the
  fidelity in the ledger itself — a later reader grepping for the template string will find
  it in the card body and must not read that as the decision.
- An approved asset can be **live before its article is**. A media key's plate is statically
  imported in `src/lib/assets.ts`, so `dist/_astro/` carries it even when no route renders
  it, and where `main` is wired to an automatic build (Cloudflare Workers Build on push) the
  commit that adds the key serves the artwork while the article still 404s. Measure the live
  surface from outside at flip time and record it: a direct `curl` can be refused by the
  session's command scanner, so fetch in-page on the live origin and hash with
  `crypto.subtle` (same bytes, same digest). Judge it editorially — ungated filename, no
  gated marker in alt or label, unlinked from every page, content-hashed URL ⇒ an
  observation, not a blocker — and route the "should a key's asset be emitted before a route
  names it" architecture question to the card that already owns it instead of opening a new
  one. One thing it does change: a rights or licensing item stops being a precondition and
  becomes live work.
- Never run the build in a release card, for the same pruning reason as a gate card.
  Validate the flip read-only instead: parse the frontmatter with the parser the pipeline
  resolves (`js-yaml` from `website/node_modules`) and call `newsMediaIssues()` straight out
  of `website/src/lib/media.ts` from a scratch script outside the repository — that checks
  the real schema rule (key existence, per-key `altCount`/`captionCount`/`requiresLabel`)
  without touching `dist/`, and it catches an alt string that differs from the approved one
  by a single byte.
- Format the record and prove the article was not reformatted. `~/.dprint/bin/dprint fmt
  <record>` from the repository root applies the project style (it aligns tables); the
  configured plugins match no `.mdx`, so the article bytes stay exactly the flip — worth
  stating in the record, since "the file changed" otherwise carries unreviewed formatting.
- Probe the board for concurrently **running** cards before and after applying a flip. The
  dev role commits and pushes its own card's scoped change, so a card that staged
  `website/news/**` or pushed the whole tree would publish the article before the build
  card's route/listing/guard proof. That is released once the editorial decision is
  recorded, but it is still out of order: record it, name the owner, and flag the article path as
  a hotspot.

- Gate a **site-string deck** (a card that transcribes copy into a source file) by hashing the
  approved form, not only the deck. Record the code-block hash, its file and line range, and
  one newline-joined hash of every frozen string literal in deck order; that is what makes
  the transcribing card's "byte-for-byte" acceptance criterion checkable by a third party.
  Confirm the literals are ASCII first — one curly quote makes a byte comparison fail for a
  reason that has nothing to do with the copy.
- Probe the build surface read-only. `website/scripts/check-dist.mjs` **prunes** offending
  files from `dist/` when it fails, so a gate must never run `npm run build` or the postbuild
  guard to check a package: import `checkDist()`, `listRoutes()` and
  `scanSourceForGatedReferences()` from `website/scripts/guards.mjs` in a script outside the
  repository. A review must not be able to delete the shared build it is judging.
- Resolve a deck's own count words against the writer's source card before calling a stale
  count: a writer's card can require four decisions while the writer records a fifth of its
  own, which leaves heading and section both defensible and only the ambiguity worth
  recording. The same mismatch often sits in the gate card's own acceptance criteria — judge
  every enumerated item either way.
- Judge link wording from the built page's **full anchor inventory**, not from the new link
  alone: extract every `href` + text pair from `dist/**/*.html` and read it as a link list.
  Two near-identical labels pointing at different destinations are invisible when you read
  one link at a time.
- When the transcribing card's literal instruction ("no change to the … markup") conflicts
  with a styling regression another pass measured and already routed, approve with an
  **explicit rendering condition** in the record plus a pointer to the routing comment,
  rather than blocking or raising a corrective card for a string the deck does not own. Say
  that the condition is implementation-only and does not hold up the chain.

- Gate a **media sign-off** (a card that approves one gathered image for a placed
  band) on measured pixels, not on the manifest's prose. Read each candidate with a
  vision pass **and** measure it — void-black fraction, per-quadrant mean
  luminance, and the label chip's own corner — with a stdlib PNG decoder (zlib +
  unfilter) kept outside the repository; then composite the chip
  (`rgba(1,0,0,0.78)` over the measured region) and report WCAG contrast. On the
  002 media gate the measurement **inverted** the manifest's own claim about which
  candidate's label corner was weakest, and the label text held 17–20:1 on all
  three: cosmetic findings are not accessibility failures, and an impression-based
  read would have written the claim down wrong.
- Re-verify **each** proposed alt text against a zoomed vision read before
  approving it. A prompt constraint can silently fail to render — the 002 slot-03
  alt promised "a thin level line of pale light skimming across", and the zoom
  found a diagonal fissure instead — which leaves an alt text that misdescribes
  the published image. That mismatch, not the composition, is what withholds
  approval from an otherwise rule-clean candidate.
- Approve exactly **one** named candidate for a band, state the others' verdicts
  explicitly (`approved` / `rejected` / `usable-as-an-alternative only`), and hand
  the dev card a copy command plus the hash the copied file must equal. Check the
  key's contract in `src/lib/media.ts` **and** what the renderer actually prints:
  for a single-plate key `set.provenance` is never emitted (only
  `plateCaptionText()` for plate sets) and the card chip is drawn from
  `mediaLabel`, so the "illustrative, not mission photography" statement has to
  live in the alt text and an unset label renders an empty chip.
- When a candidate rests on a delegated human gate, quote the human's words and
  the operator's gate-by-gate reading of them, then say plainly whether the choice
  is yours — an upstream manifest's cautious "the choice is the human's" written
  **before** any sign-off existed is superseded by a later recorded relay, not a
  reason to block.

- Create a corrective card with an **explicit workspace**: `kanban_create(..., workspace_kind="dir",
  workspace_path="/home/janpolacek/Projects/mars-ai-simulator")`. The `kanban_create` default is a
  scratch workspace, which cannot edit the shared tree, and nothing later repairs it — `kanban_block`
  and `kanban_complete` are scoped to the caller's own task and this session's `hermes kanban` CLI
  refuses mutations from a delegated child context, so a miscreated card cannot even be archived.
  Re-create it correctly, comment on the mistake naming the replacement id, and put the one-command
  human cleanup (`hermes kanban archive <duplicate>`) in the handoff.
- Check a package's "not settled" claims against the **published** articles' own wording, not only
  against the step file. A negative claim that a released article already qualifies ("…has been chosen
  **publicly**") turns into a canon-fidelity finding when a newer article drops the qualifier: the
  unqualified form asserts internal state, and locked canon usually contradicts it (003: the landing
  target and its geometry are canon, only their publication is withheld). Report it as a claim-level
  FAIL with the published counter-example as evidence — the fix is the qualifier, and no canon change
  is needed.
- Treat a vision read of small hardware detail in a render (joint count, fastener count) as
  unreliable rather than as evidence: three passes over one 1448×1086 plate returned three different
  counts. A detail the plate cannot settle does not gate a package; it gates only when a public string
  (alt text, caption, label) asserts it. Record it as unverified and say what would make it checkable.

- Re-verify a **corrective** by rebuilding the earlier bytes yourself, not by trusting the corrective
  card's revert proof: apply the claimed substitutions in reverse to the corrected file and compare with
  the hash the _earlier pass_ recorded. A byte-identical reconstruction plus a `diff` of exactly the
  claimed hunks is what lets every claim row that passed before carry over, so the second pass only
  re-judges the changed items — 003 pass 2: two hunks, 28 rows carried, verdict `continuity clear`. Put
  your own reconstruction in the record, not the writer's helper.
- Measure the **fail-closed state on the live origin** and say which surface each claim came from. A local
  checkout can be many commits behind `origin/main`, and `origin/main` is what the push-triggered build
  deploys: on 003 the local `dist/` had no `/wiki/` route while the live origin already served a wiki
  index, so `listRoutes()` on `dist/` was not the live surface. Check both and mark the authoritative
  table in the record.
- A negative claim ("no landing site has been announced") can be true at verdict time and still be
  **order-sensitive**: canon may permit a same-step sibling (the `/wiki/area/` landing-zone node) to go
  public, and that publication falsifies the sentence. Record it as a release-order _condition_ on the
  clearance, routed to the card that owns both flips and to the release card — never return the article
  again for a claim that is true against released canon as it stands, because the ordering is a release
  decision, not a wording one.
- Re-read the guard's marker list against the step being released: `gatedTextMarkers` can still name
  material the step legitimately releases (`RH-01`, `Pathfinder` at 003), so the retirement must ship in
  the same change as the flip or the production build fails closed. Route it as a release precondition
  with a named decision card and implementation card, not as a continuity failure.
- A blanket **directory** retirement also retires whatever per-file protection that directory was
  giving. Before deciding the retirement, run the real guard module over the exact release inputs and
  then over the _narrowed_ configuration, and look for what stopped being caught: on 003, dropping
  `vehicle` from `gatedDirectoryNames` let the withheld `contact-arm-scene.png` be imported with no
  offence, because the directory rule was the only thing protecting it. The decision must therefore name
  the still-withheld file and require a per-file rule in **both** scanners — the withheld-source set that
  `checkDist()` matches by name/stem/hash, and a new rule in `scanSourceForGatedReferences()`, which only
  knows directories and cannot catch the reference on its own. Prove both halves in the suite (retired
  material passes, the withheld file still fails) and keep the proof table in the record.
- Read the pipeline graph before deciding where the flip is applied. A template can place the deploy card
  **before** the release card while `AGENTS.md` requires the release decision to exist before a push
  carries content public: on 003 the flip had to ship inside the build card's change, because applying
  `publication: published` alone would leave the shared checkout with a published article whose own
  postbuild guard fails closed (and any concurrent push would deploy that failure). State on the release
  card that the decision is recorded and that the build card applies it, so no second, divergent flip
  appears later.

Acceptance checks: every review-table row passes, the record's final status is
`approved`, and no material failure remains unresolved.
