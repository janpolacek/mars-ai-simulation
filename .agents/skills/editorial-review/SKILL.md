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

## The simulated record date

Every published article carries exactly one **simulated record date** — the date, inside the
fiction, on which the article was written. This role owns it: no writer, SEO, visuals or technical
role decides it, and the article's real repository history is not part of it. It is a frontmatter
field (`simulatedDate` in `website/news/<slug>.mdx`), so it lands on the same surface as the
`publication` flip and needs no separate card.

1. Read the milestone table in `docs/SCENARIO.md` ("Launch and mission dates") and pick the
   milestone the article's released timeline step covers — step 001 the programme announcement and
   charter, step 002 the payload and concept-review work, step 003 the design freeze, and the
   matching milestone for each later step.
2. Use a date that table actually holds. "Roughly matching the timeline" means the item sits on a
   locked milestone in the timeline's order — never an invented day, month, or year that merely
   looks plausible. If no locked milestone fits the step, leave the field unset and name the gap on
   the card; do not fill it from imagination, because inventing a calendar date is new scenario
   canon and belongs to the human story owner (`docs/timeline/README.md` says the same).
3. Check the value before you apply it: it implies no event the step has not released; it cannot be
   read as a launch, landing, or other withheld mission date; it contradicts no sentence already
   public (an article that says "no launch or landing date has been stated" still holds, because a
   record date is not a mission date); and the articles stay in timeline order by the dates they
   carry, not only by their `order` field.
4. Verify the published surface, not only the file: the built `/news/<slug>/` page states the date,
   every label or string around it presents it as part of the fiction, and it is nowhere presented
   as a real publication date, a `datePublished`, or a `lastmod`.
5. Record the value and the `docs/SCENARIO.md` line it came from in
   `.agents/work/reviews/<slug>.md`, and name both in the release decision and the card comment.

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
  `crypto.subtle` (same bytes, same digest) — and measure `arrayBuffer().byteLength` over those bytes,
  not the decoded text: a text length undercounts a page that carries non-ASCII characters, which reads
  as a content change that never happened. Judge it editorially — ungated filename, no
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
- A **plate swap** is a fresh media decision, and the instruction that orders it can name a file
  that exists nowhere: on 002 the operator's "replace payload/01-spectral-sampling.png with
  payload-03-dust-scanning.png" names a file whose bytes are the render the record had already
  rejected (`03-attempt2-REJECTED-side-mattes-stars`), while the reviewed alternative sits on disk
  under a different name. Hash the placed bytes against the scratch candidate tree (`sha256sum`
  both) **before** reading the instruction as a choice, then judge the bytes rather than the
  instruction: re-measure the defects the reject rules name with a stdlib PNG probe — near-black
  **column runs from each edge** (a matte/pillarbox) around a bright scene — and keep a vision read
  for the composition claim (a star field or a horizon the brief forbade). An operator instruction
  makes a plate eligible for this role's ruling; it cannot make a render carry a composition the
  brief forbids.
- A returned plate must name its replacement in the form the dev card can execute: candidate id,
  **sha256**, the scratch path, the **stable export path** the key and its tests were built around
  (never the scratch slot name, which travels into the served `/_astro/` filename), the label, and
  the alt string with its own byte count and sha256 so byte fidelity is provable. State which review
  rows the decision supersedes and which stand, and keep separate the one thing that is not the
  editor's to answer — an owner who wanted the returned composition itself needs a fresh render
  under a corrected prompt, a story-owner direction rather than a release decision — instead of
  stalling the chain on a question the pixels already settle.
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
- Restore the original **line wrap** when you reverse-apply a corrective, and confirm it against a
  **second, independent** artifact. A longer replacement clause can reflow a line break, and the moved
  word is one space either way: on 004 the correction moved 3,991 → 3,999 bytes, and reverse-applying the
  clause text alone derived the right byte count with the wrong digest because it kept the corrected
  wrap. The independent check that settles it is the earlier pass's own throwaway build copy of the
  article with its frontmatter delta undone — two reconstructions agreeing on the earlier hash is what
  lets every earlier row carry; one agreeing only on the byte count is not.
- A scratch build copy made **before** a tree refactor cannot be reused after it: its `assets.ts`
  imports and its `docs/` symlink resolve against the moved paths. Rebuild the copy fresh from the
  current tree — site under `<copy>/website/`, `docs/` symlinked as its sibling, `node_modules` entries
  linked one by one — and rerun both builds rather than trusting the earlier copy's output.
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

- The **record date** field may not exist yet in the schema, and an article published before it did
  carries no value. That is a gap to fill, not a pass: check `src/content.config.ts` for the field
  before asserting one, and where it is missing, route the schema-and-render work to the technical
  role instead of writing a field the build will reject. A frontmatter key the schema does not
  declare is a build failure, not a harmless extra.

- A **gate-ledger card** whose gates are canon authorship, release-order or public-identity questions
  is a hold, not a package verdict. `kanban_complete` on it **releases its parent-gated children** — on
  the step-004 launch-provider ledger that is the draft card, and a writer handed a blank canon choice
  invents the provider the gate exists to withhold. So: scan the board for a recorded answer before
  treating a gate as unanswered (a board-wide `task_comments` search, not just the card's own thread);
  record every fail-closed default **measured rather than restated** (the dossier that does not exist,
  the route that 404s on the live origin, the withheld tokens absent from every served byte, the child
  card still `todo`); state in the record that the card-body templates are unapplied, so a later reader
  grepping for them does not read one as a decision; then `kanban_block(kind="needs_input")` naming the
  exact sentences the human story owner owes. The 2026-09-17 authority change moved releasability and
  canon _confirmation_ to this role; canon _authorship_, the release-order advance, and the public
  title/byline stayed with the human, so those gates are not this role's to answer however long the
  card sits.
- Check whether the withheld strings for the _next_ step have any guard marker at all: on 004,
  `gatedTextMarkers` carried only the landing-region coordinates, so a provider name or a withheld
  launch date in public copy would have failed no build, and containment rested on the gates alone.
  Report the coverage as a release-engineering item with a named owner (a dev card adds a marker, and
  the step that releases the material retires it in the same change) instead of treating a missing
  marker as a blocker or as proof the material is safe.

- A **gate-ledger** card that was held `blocked` flips its correct terminal action once the answers
  land: record each answer **verbatim** on the card, then `kanban_complete` — that completion is the
  mechanism the card body names as "what happens after the gates are answered", and it is what
  promotes the parent-gated draft / dossier / wiki cards out of `todo` (verify in the DB that they
  reach `ready` after the completion). Before completing, record **fidelity per gate**: which answers
  arrived in the card body's exact required form, which arrived in its alternative ("not required" or
  negative) form, and which are a deferral rather than a template form. A board-wide scan for the
  answer sentences must show they exist in exactly one place; a planner's handoff comment that lists
  the templates is not an answer.
- The load-bearing part of a discharged gate record is the **cleared / not-cleared scope of real-world
  names**, because that is what the downstream writer reads. An answer recorded in the "not required —
  no real provider or institution named" form is not an approval of a sentence that names one:
  reconcile the two readings in favour of the fail-closed default, cite the sources that condition a
  real-named mention on that gate (article brief, draft card body, canon proposal), state the re-open
  mechanism (a verbatim approval covering the exact sentence), and say plainly that containment is not
  a stall when the allowed angle does not need the real name. Never widen an answer to cover what it
  did not say.
- A gate answer can **move a name between the released and withheld sets**. State the split explicitly
  and re-point the guard markers: a marker covering material the step now releases fails the production
  build, so only the still-withheld families (institution / operator / facility names, the next step's
  dates, the existing coordinate markers) may carry one, with retirement shipping in the same change as
  the release that frees them.
- A publication **STATE** grant can be node-specific. On a release-order advance whose wording names
  one wiki node, check whether a sibling leaf's own state was settled before treating it as released: a
  grant naming the step-004 node does not settle the step-003 leaf, and the unrecorded state stays a
  named condition on the planner's card.
- A card body's frontmatter instruction can be **unimplementable against the schema**: `title:
  z.string()` is required with no default, so a card telling the writer to "leave the title unset"
  produces a build failure, not a default. Read `src/content.config.ts` before repeating the
  instruction, resolve it in the record in favour of the schema and the gate's fail-closed default, and
  route the correction as a comment on the owning card rather than editing that card.
- Answering the gates does **not** supply the record date. With no article yet to date, keep the value
  unset, name the gap, and hand the release card a constraint set instead of a value: the floor (the
  previous step's anchor), the ceiling (the next step's row, which the record withholds), the candidate
  rows in the window, and which of them would falsify the article's own framing if used.
- A present-tense negative claim in an already-published article ("no launch vehicle has been named")
  is order-sensitive against a later step: true today, stale the moment the step that names it is
  released, and unfalsifiable only once the article's own record date is on its face. Record it as a
  release-order condition on the upcoming flip — record dates or a scoped wording corrective, owner
  named — never as a continuity failure of the unpublished package and never as a reason to return it.
  Assigning the record dates **is** the fix when only a flip can stale the claim (the 001–003
  record-date card closed the step-004 ledger's C6 that way, with no wording change): state in the
  record that the claim now reads as a statement about its date, check that an earlier article's
  negative still holds at the later date, and record the consequence — the step that names the withheld
  thing must carry a record date **after** the dated negative, or that negative is false in-fiction.
  The value you set is therefore a lower bound on the next step's value: say so.
- Choose the milestone row by matching the state the article itself claims, not by "closest in time".
  A report of a _frozen_ design cannot be dated on a preliminary-design-review row (the record date
  would sit before the freeze the article reports), so the step's primary anchor is the row whose
  meaning is the step's own event (a critical design review for a design freeze). Where a candidate
  row's text carries an event whose publication is still gated (a target confirmation), that row's text
  is the reason to exclude it — and judge the public surface as it is: it shows a calendar date under
  the in-fiction label, never the row's name, so a row whose wording would be a containment problem
  stays a record-internal association.
- Verify a frontmatter-only change in a **scratch copy** outside the repository and run the copy's own
  gate: copy the site's `src`, `public`, `scripts`, `news`, `test`, the config and `package.json` (plus
  a `docs/` symlink, with the installed packages linked one by one so Astro's content-layer cache stays
  in the throwaway root), then build with the project's own CLI. Two traps in that copy: it has **no
  `node_modules/.bin`** (dot entries are skipped by design), so run the suite as `npm test` or
  `npm test -- <file>` rather than `node_modules/.bin/vitest`; and `test/` must be copied, or vitest
  exits 1 with "No test files found". Pair a red-first control on the _render_ (a planted value moves
  that page's line while its siblings hold) with one on the _schema_ (a planted prose value fails the
  build naming the field), so a green build proves the value was read, not ignored. Scan the whole
  `dist/` tree, not one page — the built-site half of the fixture suite is the strongest single
  measurement — and expect a media-registry provenance sentence to carry an artwork generation date in
  prose: pre-existing, not a machine-readable date, not the article's record date, and not a failure.
- A step can end up with **two gate ledgers for the same five gates** when a container card re-creates a
  graph a planner card has already built. Do not open a parallel record for the second card: append a
  `## Revision N` section to the slug's existing record (the superseded hash, the second card id, the fresh
  measurements) and say plainly which graph the step runs on. Establish that from the card bodies and the
  edges — the chain whose stage bodies name the other gate id, and which holds the dossier / wiki cards, is
  authoritative — then hold the duplicate with `kanban_block(kind="needs_input")` and recommend the operator
  archive it (board dedupes are theirs; `hermes kanban archive` is outside this role's toolset). Completing a
  duplicate ledger still promotes _its_ own parent-gated draft card into the same blank-canon article, so
  duplication is a release-safety issue, not board tidiness. Also flag any output path two cards write
  concurrently (here `.agents/work/sources/<slug>.md`) as a hotspot with the hash you measured.

- A **not-settled negative written as internal state** is a claim-level FAIL even when the sentence's
  intent is the step's own "no date is being promised" framing: the test is (a) does any released or
  private canon _contradict_ the state as of the article's record date, and (b) does the wording
  regress against the published form of the same claim? On step 004, "No launch day or time has been
  **set**" and "it has not been **narrowed** to a day" both fail — locked canon fixes the launch day,
  and 002 / 003 write "chosen **publicly**" / "**is being stated**" / "has been **stated**" — while
  "no part of the flight stack has been integrated with a launcher" passes, because canon does not
  contradict it (the integration window opens later) and it is the negation of the step's forbidden
  positive. The remedy is the qualifier, never a canon change; route it as a corrective (the fix
  changes factual meaning, so it is not the gate's own edit and not a stylistic pass), and say which
  published sentence is the counter-example so the writer cannot read the finding as taste.
- When a card body's record-date instruction names no row the milestone table holds (e.g. "the assigned
  date is the announcement date, not the calendar row"), resolve it in the record instead of stalling:
  pick the row whose state matches what the _finished article_ claims — the earliest row at which its
  own "what remains" framing, and every one of its negatives, still holds — name the superseded phrasing
  and the resolution, and hand the **constraint** forward. That same compatibility constraint is what a
  corrective must not break: state in the corrective body that the corrected clauses must still be true
  on the assigned date, so one round trip settles both the wording and the date.
- The shared tree can move **without a running card and without a commit** (a `docs/vehicle/` →
  `docs/vehicles/` split here, staged renames plus edits to `guards.mjs`, `assets.ts`, the media
  registry and three docs). Re-hash every input at verdict time, re-point the record's path and hash
  citations, add a movement table naming what moved and what it does _not_ touch, and let an unchanged
  article hash be what makes the verdict stand. Re-read a moved dossier's own claims before clearing
  them, and flag the moved files the next card is also scoped to touch as a hotspot with the new hashes.
- A frontmatter-change scratch copy must **mirror the site's directory depth**: put the copied site in
  `<copy>/website/` with `docs/` symlinked as its sibling at `<copy>/docs`, or `assets.ts`'
  `../../../docs/...` imports fail with `UNRESOLVED_IMPORT` before the build starts. Link the package
  entries **including** `node_modules/.bin` so `npm run build` and its postbuild guard run the project's
  own CLI, and skip only the caches (`.astro`, `.vite`) so the content layer stays in the throwaway root.

- On a **release card** the flip has already been applied and pushed, so verify the delta by
  **re-deriving it from the released bytes**: reverse-apply the authorised frontmatter change to the
  published file and require the approved revision's hash **exactly**. That single reconstruction is
  what proves no third change rode along, and it survives git presenting the whole file as added
  because the draft was untracked in the shared checkout (004: 3,999 B → 4,029 B, +30 B = the inserted
  `simulatedDate` line and `draft` → `published`). Record the arithmetic, not just the two hashes.
- When the build card's private worktree is already gone, the **live origin is the authoritative
  released surface**: validate read-only against it (`fetch(path, {cache:'no-store'})` +
  `crypto.subtle`), compare the route's byte count and sha256 with the build card's own recorded build
  output, and state plainly that the shared checkout's `dist/` is **not** evidence (it can predate the
  push and siblings build into it). Never run the build or the postbuild guard from a release card —
  the guard prunes `dist/` when it fails.
- A concurrent sibling card can **commit** in the shared checkout without pushing: `HEAD` moves ahead
  of `origin/main` while the article and the live surface do not move at all. Re-check
  `HEAD` / `origin/main` / the article hash at the very end, prove the released path appears in **none**
  of the sibling's commits (`git log origin/main..HEAD --name-only`), and record the movement with its
  timestamp and that proof as a numbered observation — a moved `HEAD` is not a moved release.
- A gate that clears a **designation** does not clear the **dossier that documents it**, and a recorded
  fail-closed wording constraint can name the dossier among the protected surfaces. Before any hygiene
  card publishes `docs/`, scan that dossier for the still-withheld families (institution/operator/
  facility strings, withheld launch-day forms, `docs/timeline/` paths) and record the counts with a
  named owner: "the designation is released" is not "the dossier is publishable" (step 004: the
  launcher dossier carries all four families and its publication state is unrecorded).

- A **date-less collection takes no record date, and the absence is the check.** The wiki schema
  (`website/src/content.config.ts:78-117`) declares no date field at all, so a wiki page must carry
  none — an undeclared key is a build failure, not a harmless extra — and the correct gate output is
  "no value, absence by design": verify the file carries no four-digit year, month name or "as of"
  construction, and that the layout emits no `datePublished`/`lastmod`. Only news carries a
  `simulatedDate`. Do not draw one from the milestone table for a page whose schema cannot hold it.
- A sibling working paper's **numbers are not measurements you can quote**: a stale anchor arrives
  with stale arithmetic (the wiki SEO record quoted the alt as 449 characters while stating "measured
  length: 383", and the file's string is 451). Anchor the verdict on the file's own hash, quote your
  own measured value, and let immaterial documentation drift be **superseded in the record with the
  owning role named** — no corrective card for a record whose number no shipped artifact depends on,
  per the same rule that keeps a gate from repairing another worker's file.
- A **wiki page** has no timeline row to match: check the path convention instead.
  `website/wiki/<slug>.mdx` with `section:` in frontmatter yields `/wiki/<section>/<slug>/`; a nested
  `website/wiki/<section>/<slug>.mdx` gets loader id `<section>/<slug>` and renders
  `/wiki/<section>/<section>/<slug>/` with `TypeError: Missing parameter: section`. Card bodies still
  name the nested path, so resolve it in the record and state that the flat convention binds later
  pages.

Acceptance checks: every review-table row passes, the record's final status is
`approved`, a **news** article carries one `simulatedDate` drawn from a milestone line in
`docs/SCENARIO.md` with that line named in the record (a page whose collection declares no date field
carries none, and the record says why), and no material failure remains unresolved.
