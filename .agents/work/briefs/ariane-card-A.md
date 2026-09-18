Stage: canon and rights selection (with `editorial-review` skill) · timeline step `004-launch-provider`.

Card A of the ariane-plates-incorporation graph (planner `t_723e991f`).
Brief: `.agents/work/briefs/ariane-plates-incorporation.md`. Parents: none
(card B runs in parallel). Children: C, D, E.

The merged editorial role decides which of the six new Ariane 64 plates may
be placed on a public surface at step 004, with one verdict row per plate
and the rule cited, and the per-plate re-measurement the brief lists. This
card is fail-closed: it cannot publish a plate, it cannot edit `website/`,
and it cannot commit or push.

Workspace: `dir:/home/janpolacek/Projects/mars-ai-simulator`.

Read first — `AGENTS.md`, `docs/INSTRUCTIONS.md`, your role definition
(`mars-ai-simulator-editor` profile), and the project skill
`.agents/skills/editorial-review/SKILL.md`. Then read the brief, the
dossier `docs/vehicles/ariane/ariane-64.md` (in particular §"What the
vehicle must never be said to be" at lines 121–136), the released canon
under step 004 (`docs/timeline/004-launch-provider.md`, `docs/SCENARIO.md`),
the step-004 release record (`.agents/work/releases/004-launch-provider.md`),
and the earlier visuals card's manifest
(`.agents/work/assets/004-launch-provider/assets.md`).

## What to decide

For each plate, one verdict row carrying the rule cited by `file:line`:

| Plate | Path                                          | What the brief shows                                               | Rule cited (start)                                              | Verdict                                                                                                                                                 |
| ----- | --------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | `docs/vehicles/ariane/canonical.png`          | Studio, four boosters, five bells, no scene, no text               | `ariane-64.md:54-88`                                            | **admit** (subject to §"Re-measure" below)                                                                                                              |
| 2     | `docs/vehicles/ariane/front-left.png`         | Studio three-quarter; count disagreement                           | `ariane-64.md:56,62,70,88`                                      | admit **if and only if** the full-resolution crop `[0,600,1122,1402]` reads four boosters / five bells; otherwise withhold as two-booster contradiction |
| 3     | `docs/vehicles/ariane/side-view.png`          | Studio side view, two boosters visible / five bells                | `ariane-64.md:62,70`                                            | **withhold** as not-the-silhouette (a side view of a four-booster vehicle cannot show the launcher's defining feature) — escalation: re-render          |
| 4     | `docs/vehicles/ariane/rear-right.png`         | Studio rear three-quarter, two boosters visible / five bells       | `ariane-64.md:62,70`                                            | **withhold** (same defect as plate 3) — escalation: re-render                                                                                           |
| 5     | `docs/vehicles/ariane/lunch.png`              | Pad lift-off, two lattice towers, flame, smoke                     | `ariane-64.md:131,130`; dossier "Operating appearance" step 005 | **withhold, fail-closed** (step 005 scope); human gate                                                                                                  |
| 6     | `docs/vehicles/ariane/travelling-to-mars.png` | In-transit stack, "RED HORIZON ONE", ESA logo + "esa", "ariane 64" | `ariane-64.md:129`; Gate 004-B scope; `docs/SCENARIO.md:281`    | **withhold, fail-closed** (two bars); human gate                                                                                                        |

## Re-measure before verdict

The brief inherits a vision-read of plates 2–4 from the orchestration card
body. **Re-run the vision pass on each plate at full resolution before
recording the verdict**, naming the crop region used, and recording
booster+bell counts from that crop. A plate whose count does not read four
boosters / five bells on its crop is **withhold**, not admit. The dossier's
four-booster count is the "defining engineering feature"
(`ariane-64.md:56,62,70,88`) and the `t_6fde5f04` precedent rejected a
two-booster candidate.

## Provenance gate

The brief records that no PNG text chunk names the producer, the tool or
the model for any of the six plates (unlike `tools/visual-generator/`
candidates, which carry sidecars). Verdict row for **every** plate carries
"provenance: unresolved" where it is, and the verdict for plates 1, 2 is
**admit-pending-provenance**. Escalation 3 (human states who made them /
with what) is a precondition for the chain to push.

## Output

Write `.agents/work/reviews/ariane-plates-selection.md`. The file records:

- The verdict table (one row per plate, with rule cited, provenance, and
  the next step — admit-pending-provenance / withhold-as-step-005 / etc.).
- The per-plate re-measurement (crop region, booster count, bell count, the
  textual content visible in pixels for plates 5 and 6).
- The admitted canonical name for the admitted plate(s), under
  `docs/vehicles/ariane/<name>.png` (operator's existing file naming
  precedent: `canonical` / `front-left` / `side-view` / `rear-right`). If a
  rename is needed, name it as card C's act; do not rename on disk in this
  card.
- The proposed media-key contract (the earlier visuals card's draft:
  `launch-vehicle-reference` key with the same requirement tuple as
  `vehicle-references`; final key is card D's device). The draft's wording
  — the label `Ariane 64 · engineering reference` (U+00B7, not to be
  normalised) and the 347-char ASCII alt text — is the proposal; the editor
  records here whether it approves the wording verbatim or amends it.
- The release decision for the plate(s) (if any): the public scope the
  revision will publish, with no real institution, operator or facility
  name, no burned-in text, no launch-day fact, no scene beyond the cleared
  studio.

If **no** plate is admitted for public use, the verdict row for every plate
is "withhold" and the chain collapses — no placement card runs; card G is
never created.

## Acceptance criteria

- Verdict table complete with rule cited, provenance, and next step.
- Re-measurement evidence per plate (crop region, counts).
- Frontmatter wording (`mediaLabel`, `mediaAlt`, `mediaCaption`) recorded
  verbatim as approved or amended.
- No `website/` edit, no `docs/` write, no `tools/visual-generator/` write,
  no commit, no push, no publish.

## Out of scope

- Choosing the canon option, naming the provider or vehicle, setting public
  dates.
- Amending `docs/SCENARIO.md`, the timeline, or the dossier.
- Editing `website/`, building, deploying, publishing.
- Committing or pushing.
