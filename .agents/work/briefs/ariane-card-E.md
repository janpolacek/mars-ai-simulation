Stage: editorial final gate of the revision (with `editorial-review` skill) · timeline step `004-launch-provider`.

Card E of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parents: A
(the admitted plate and its wording). Children: F, G.

The merged editorial role re-runs continuity + the editorial gate on the
revised article 004 bytes (frontmatter strings + any related changes card D
introduces), against the released canon and Gate 004-B's scope. The first
release (`t_35061463`) recorded the release decision with the exact public
scope; a revision voids that decision and replaces it.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-editor` profile), the project skills
`.agents/skills/editorial-review/SKILL.md`,
`.agents/skills/copy-editing/SKILL.md`, `.agents/skills/brand-voice/SKILL.md`,
the brief, the dossier `docs/vehicles/ariane/ariane-64.md` (binding
"never" list at lines 121–136), the editor verdict on card A, the
revised MDX from card D's commit, the build proof card D recorded, the
existing release record `.agents/work/releases/004-launch-provider.md`,
and `docs/SCENARIO.md`.

## Required containment (card §3.3 of the brief, verbatim)

- No launch day, time, or date beyond the 2031 launch window already
  released by article 001.
- No statement that the vehicle is in transit, integrated at the pad, or
  flight-ready.
- No landing site, no Mars surface imagery, no Asteria Field material
  beyond what article 001 released.
- No performance, mass, cost, or specification figure that is not
  approved canon.
- No real institution or provider named without Gate 004-B's verbatim
  approval.
- No step 005–011 fact, no private-calendar fact, no unreleased detail
  from `docs/timeline/`.

## Article-frontmatter continuity

The article 004 was released with:

- `simulatedDate: 2030-03-11`, milestone line `docs/SCENARIO.md:188` —
  "11 March 2030 | RH-01 flight-model assembly begins". The revision
  does not change `simulatedDate` (record dates are assigned once).
- `publication: published` — preserved.
- No `media` field — card D adds one. The revision must carry the
  frontmatter strings the editor approved (card A's verdict) verbatim.

The release decision's voiding condition: _"any change to the article
bytes voids the decision and returns the package to the editorial gate"_.
This card is the re-gate.

## What to verify

1. The revised MDX parses clean (MDX parse with `prettier --parser mdx`
   reprint byte-identical to the staged bytes).
2. The revised MDX's `mediaLabel` / `mediaAlt` / `mediaCaption` strings
   match the editor-approved strings in
   `.agents/work/reviews/ariane-plates-selection.md` (card A's
   deliverable) **verbatim**.
3. The revised MDX's body has not changed (`git diff` against the
   article's bytes at the published commit shows only the frontmatter
   delta).
4. The build cell measurements card D reported are accepted (or: the
   revision records a deferred re-render if they are not).
5. The plate's bytes are the admitted canonical name under
   `docs/vehicles/ariane/`, hash matches the source. Provenance gate:
   unresolved = the editor records the human's escalation answer or
   withholds the plate.
6. No new withheld-fact appears in the bytes.

## Record the revision's release decision

Write `.agents/work/releases/004-launch-provider.md` — append a "Revision"
section to the existing record, with:

- The revision's date (today, CEST).
- The new article sha256 (post-D bytes).
- The admitted plate's canonical path + sha256.
- The build hash and the local-build derivative hashes (carried from
  card D's build proof).
- What the previous record's exact public scope rows now supersede.
- A new voiding condition: "any change to the revised bytes voids the
  revision".

If the verdict is **withhold** (e.g. provenance remains unresolved, or a
contained fact slips in), the chain collapses: no push, no live URL, the
human gate escalations are reopened.

## Output

- `.agents/work/reviews/004-launch-provider-revision.md` (the editorial
  review).
- `.agents/work/continuity/004-launch-provider-revision.md` (the
  continuity verdict).
- The revision record in
  `.agents/work/releases/004-launch-provider.md` (the "Revision" section
  appended; the previous record is preserved).

## Acceptance criteria

- Every claim agrees with the released step and the scenario; no later-step
  or Asteria Field detail appears.
- Frontmatter matches the editor-approved strings verbatim.
- The revision record names the exact public scope and a new voiding
  condition.
- No `website/` edit, no build, no commit, no push, no publish by this
  card.

## Out of scope

- The build (card D) and the push (card F).
- Editing the dossier or `docs/SCENARIO.md`.
- A new simulated date.
- The withheld plates.
