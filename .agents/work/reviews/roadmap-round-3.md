# Editorial review: roadmap-round-3 — homepage roadmap panel, four steps, step 1 renamed

## Record metadata

| Field                 | Value                                                                                                                                                                                                                                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                  | `t_a635e5eb` — `mars-ai-simulator-editor` (merged editorial role: copy edit + continuity + release decision)                                                                                                                                                                                               |
| Stage / step          | `site-foundation` — homepage roadmap panel, round 3. **Advances no timeline step.** Factual bound: the published record (articles 001–004, all `publication: published`)                                                                                                                                   |
| Package               | `.agents/work/drafts/roadmap-round-3-deck.md` (writer deck) + `.agents/work/seo/roadmap-round-3.md` (SEO pass)                                                                                                                                                                                             |
| **Approved revision** | Deck revision 1, 42,284 B, 511 lines — **recipe hash `fd04377c3f34c997c1d1c6118ac8dc04e3cea3c22dc8a643e2ba13ca6f2d2cda`** (plain sha256 `3741bbe9b5997ea83c96e9c5b0e59fb3df8d3dff7b312dbe65f67999fb26cee8`), re-measured at verdict time and unchanged since the writer's final edit (mtime 21:02:37 CEST) |
| Verdict               | **`approved`** — the prose reads and the panel works; theme and scope: the four-step panel carries every work class the record has opened and nothing it has not                                                                                                                                           |
| Release decision      | Recorded on card `t_a635e5eb` (this card) at 2026-09-17 ~21:25 CEST: the four-step panel strings + the two comment regions, `steps.ts` and `progress-log.test.mjs` only. This record is not the decision; the card is (§6)                                                                                 |
| `simulatedDate`       | **Not applicable, absence by design** — see §5                                                                                                                                                                                                                                                             |
| Continuity            | `continuity clear` — `.agents/work/continuity/roadmap-round-3.md` (same pass, same inputs)                                                                                                                                                                                                                 |
| Public/canon impact   | No new canon. Three rendered strings change (one title renamed, one step added) and two source comments extend. Five other published instances of the removed word stay out of scope                                                                                                                       |

Inputs frozen for this pass, hashes at verdict time: deck `3741bbe9…`/`fd04377c…`; SEO pass
`53ce72a7…`; planner brief `5f04cda5…`; round-2.5 deck `613cf476…` (recipe `2dbbafcf…`); round-2.5 SEO
`c14b488a…`; `steps.ts` `1236ead7…` (2,083 B); `progress-log.test.mjs` `4fc56e74…` (14,194 B);
001 `923a12d8…`; 002 `8dc22a4f…` (working) ; 003 `51f2ee69…`; 004 `7da71fec…`; `facts.ts` `7cf85ec8…`;
`Hero.astro` `d600b0b3…`; `ProgressLog.astro` `68a4b4d5…`; `docs/SCENARIO.md` `99206373…`;
`HEAD` = `origin/main` = `3f53fdf1480922fdd775ec8cd6efd743d42837b0`.

---

## 1. Review table

| #  | Item                                                                                  | Verdict | Evidence                                                                                                                                                                                                                                                                              |
| -- | ------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **Citations / record trace** — every changed string traces to a released article line | pass    | Step 1 title: `001:23`, `001:29`; step 3 title: `004:50`; step 3 detail: `004:50–52`, clause by clause (continuity §3.5); step 2's carried clause: `004:14–16`; step 4 unchanged. No claim rests on an uncited source                                                                 |
| 2  | **Frozen payload fidelity** — the deck's §7 blocks are what they claim                | pass    | 5/5 block digests and `STRINGS-3` re-derived from the deck's own fenced bytes; round 2.5's entry (block c) and its comment lines reproduced byte-for-byte (84-B label line removed) — continuity §2                                                                                   |
| 3  | **Chronology / step order**                                                           | pass    | New step 3 sits between the `In hand` step and the unreached last step: after 004's architecture decision, before the flight — the record's own order (`004:48–52`)                                                                                                                   |
| 4  | **`current` flag**                                                                    | pass    | Stays on step 2; the record carries no opening for step 3 (`004:18`, `004:50–53`); the built page renders exactly **one** `is-current` (step 2, linking 004) — measured                                                                                                               |
| 5  | **Link contract**                                                                     | pass    | Two declared links (steps 1 and 2) to published, routed articles; steps 3 and 4 declare none and render none. `progress-log.test.mjs:184–224`, `:227–244` green on the built copy                                                                                                     |
| 6  | **Last-step invariant**                                                               | pass    | `Surface operations` remains the last step by title; the insertion is an insertion, so `:219–224` holds with no assertion change                                                                                                                                                      |
| 7  | **Spoiler safety**                                                                    | pass    | 0 hits across 13 withheld families on the four rendered strings and 12 families on both comment regions; positive controls fire (2/9/6 families on withheld dossiers) — continuity §4                                                                                                 |
| 8  | **Date audit**                                                                        | pass    | The only date token on the panel remains step 1's released _"launch window in 2031"_ (`001:66`). The new title (25 chars) and detail (130 chars) are ASCII and digit-free. No locked milestone date, no launch/landing day, no "as of" construction                                   |
| 9  | **Voice / register**                                                                  | pass    | Informed, composed, specific, no marketing grandeur, no unsupported certainty: the new detail is the record's own work-language; no acronym, no proper name, no figure introduced                                                                                                     |
| 10 | **Copy quality / grammar**                                                            | pass    | Panel strings are well formed and in the panel's own house style (see §2.2); the one comment join the deck escalated (§2.5) is accepted as frozen                                                                                                                                     |
| 11 | **Accessibility / markup**                                                            | pass    | No markup, class or selector touched; the new step renders through the same `.timeline-state` / `<h3>` / `.timeline-detail` elements (`ProgressLog.astro:20–22`), so `:282–297`'s class assertions hold; heading hierarchy intact (`h1 → h2 → h3`, four step `h3`s, no skipped level) |
| 12 | **Metadata / schema**                                                                 | pass    | No metadata surface changes: homepage `<title>`, meta description, `<p class="eyebrow">`, `h2`, section id `#timeline` and nav href all unchanged (SEO §4, §5, §6; confirmed in the built copy)                                                                                       |
| 13 | **Image placement / alt text**                                                        | n/a     | No image, caption, alt text or media registry entry in this round                                                                                                                                                                                                                     |
| 14 | **Licensing / provenance**                                                            | n/a     | No asset added, moved or re-exported; asset provenance is untouched                                                                                                                                                                                                                   |
| 15 | **Links resolve**                                                                     | pass    | Both declared anchors 200 on the live origin (001: 11,882 B, dated 12 October 2026; 004: 9,730 B, dated 11 March 2030), measured `2026-09-17T19:15:17Z`                                                                                                                               |
| 16 | **Published surface (built)**                                                         | pass    | Throwaway build copy: 9 routes, postbuild guard clean, 4-step panel read back from `dist/index.html` (`50cd9dd5…`) with exactly the two anchors                                                                                                                                       |
| 17 | **Test impact**                                                                       | pass    | `npm test` — **14 files / 153 tests passed**, exit 0, on the built after-state; no assertion, helper or import change                                                                                                                                                                 |
| 18 | **Record date**                                                                       | n/a     | No news article and no wiki page in this release; `steps.ts` declares no date field and carries no `simulatedDate` (§5)                                                                                                                                                               |
| 19 | **Scope containment**                                                                 | pass    | Only `steps.ts` and `progress-log.test.mjs` carry changes; no edit to 001–004, `facts.ts`, `Hero.astro`, or any other published surface; the five other instances of the removed word are out of scope and separately escalated                                                       |

---

## 2. Editorial findings (pass, with three recorded judgements)

### 2.1 Step-pair rhythm, states and section framing

The four titles read as four work classes in the order the programme reaches them:

    Programme and purpose → Mission architecture → Integration and readiness → Surface operations
    Announced            → In hand (current)     → Ahead                   → Ahead

Four noun phrases, no verbs, no numbering, 21 / 20 / 25 / 18 characters — consistent with the round-2
panel's grammar and with the record's own nouns. `Announced` / `In hand` / `Ahead` keep the round-2
reasoning (the announcement happened; step 2 is the work in hand on the newest published article; the
unreached steps are `Ahead`), and the new step 3 belongs in `Ahead` because no released sentence opens
that work (§continuity 3.3).

The section description — _"The programme's steps, in the order it reaches them. The highlighted step
is the work in hand; the step after it is not settled yet."_ — is unchanged and still satisfies both of
its claims at four steps: the highlighted step is step 2, and the step after it is the new step 3,
which is `Ahead` and linkless. The eyebrow (`Mission roadmap`), `h2` (`One step at a time.`) and the
section id (`#timeline`) are round-2 approved wording and unchanged.

### 2.2 Detail pacing

Sentence-units per step: step 1 three (unchanged), step 2 two (round 2's sentence plus the merged
delivery-architecture clause), step 3 one, step 4 one. Measured lengths: 184 / 160 / **130** / 78
characters — the new detail is below the parent deck's ~200-character bound and the shortest-changed of
the three, so the panel gains no wall of text and no step towers over the others.

The new detail is non-finite — _"Bringing…, testing…, and closing the reviews."_ — which matches step 4's
`Ahead` detail (*"Using the rover on the surface to survey terrain and examine rocks in context."*) and
is deliberate: a finite statement of activity would assert work is under way, which the record's
`004:18` negative contradicts. Recorded as an editorial strength, not a defect: parallel gerunds are
the panel's way of describing work a step has not reached.

### 2.3 The rename reads correctly in its new place

`Programme and purpose` sits under `Announced` with a detail that opens on _"Ten national programme
teams"_ — so the title and the detail now share one noun for the partners, and the detail's fact
(the ten teams, one lander and rover, the 2031 window) is untouched. The title no longer carries the
noun the human story owner read as political. Nothing about the rename asserts membership, governance
or a claim of a different kind; it is the same step with a plainer label.

### 2.4 The five other public instances stay out of scope

`001:77`, `002:87`, `004:14`, `facts.ts:18`, `Hero.astro:12` all still carry the removed word
(measured, `003` carries none). They are published surfaces, and rewriting them is the human story
owner's call — routed on `t_8e8364e4`. **This approval and the release decision that follows do not
authorise touching them**, or `facts.ts`, or `Hero.astro`, or any `website/news/<slug>.mdx`.

### 2.5 The one comment join, decided

The deck's §12(a) escalated one non-additive edit: round 2.5's clause ends with a period, so round 2's
remaining sentence opens with a capital (*"— The published side of the contract is asserted…"*).
**Accepted as frozen:** two sentences read plainer than a semicolon splice, and nothing else in the
paragraph changes. The dev card transcribes block (e) as approved; the alternative is declined.

---

## 3. The approved strings, and the lines the dev card transcribes

Approved revision: the deck's §7 blocks as measured at verdict time. Byte checks (third-party
verifiable, recipe: fenced payload including its final newline):

| Block                                                                              | Line range in the after-state file           | Bytes | sha256                                                             |
| ---------------------------------------------------------------------------------- | -------------------------------------------- | ----- | ------------------------------------------------------------------ |
| (a) step 1 entry with the new title                                                | `steps.ts:33–39` (title at `:35`)            | 401   | `3a4a767a394c92601dae843eb2b16daa237ee7e2cf2ec4521f6731ae260cbdcb` |
| (c) step 2 entry (round 2.5, carried)                                              | `steps.ts:40–47`                             | 401   | `ffb5e4c4c20e4caa6f6f1dbe06a00385149c3225781226c0f03aa47eaebba5d5` |
| (b) new step 3 entry                                                               | `steps.ts:48–53` (title `:50`, detail `:52`) | 243   | `94801b742ba4c492d77bfb7049e8fe1c317e468822650360639dd0da6521b750` |
| step 4 entry (unchanged, moved last)                                               | `steps.ts:54–58`                             | —     | unchanged from `1236ead7…`                                         |
| (d) header comment rule region                                                     | `steps.ts:9–12`                              | 272   | `e97515189f3a615b25a9f339b649c7ea55e6fca6dac72211161e818d1e57653a` |
| (e) test history comment paragraph                                                 | `progress-log.test.mjs:13–24`                | 958   | `6e82765f0b43c98cd0ffe422ef061a0e9306c9204a59cf83c85580bc78581371` |
| `STRINGS-3` (three changed rendered literals, newline-joined, no trailing newline) | —                                            | 178   | `4f54548983c47a7d653cc152ba60189c1da188c2824f994bfbaafdef04c00864` |

Line numbers are measured from the after-state assembled in the throwaway copy (§7), not from the
deck's predictions: the deck's `:13–25` for block (e) is one line out (`:13–24`), and the card body's
`:9–10` for the header rule is the pre-extension range (`:9–12` after). Both are documentation drift;
the digests are authoritative.

After-state hashes, for the dev card to compare against after transcribing:

- `website/src/features/progress/steps.ts` — 2,491 B, 59 content lines, sha256
  `5efd5d986fa1252541be5b712ff5534e7d50b93a730d0d31b9236638faa48c92` (from live `1236ead7…`, 2,083 B)
- `website/test/progress-log.test.mjs` — 14,488 B, 301 content lines, sha256
  `370f3a66709e3329c6edb7699622b3cbb7a94023020b7f56cde9322f9e196b7e` (from live `4fc56e74…`, 14,194 B)

`dprint check` exit 0 on both after-state files (repository `dprint.json`) — no reformat expected.

---

## 4. Published surface, verified

**Built (throwaway copy, outside the repository).** `npm run build` exit 0; postbuild guard passed
(`no reference into a withheld directory, and no withheld file or marker in dist/`; media-scope clean);
9 routes. The built homepage carries:

- four steps, in order — `Announced / Programme and purpose` → `/news/001-project-announcement/`;
  `In hand / Mission architecture` **with the only `is-current`** → `/news/004-launch-provider/`;
  `Ahead / Integration and readiness` with 0 anchors; `Ahead / Surface operations` with 0 anchors;
- heading outline `h1 → h2 → h3` (four step `h3`s under `#timeline`), no skipped level;
- no withheld marker in the built output (guard clean).

**Live origin (read-only; the authoritative released surface).** Measured `2026-09-17T19:15:17Z`:
homepage 200, 18,846 B, sha256 `4c16d7f103e4bf07068fd19b39f02ca4d59bb43ebd17ef92b5e5b5ec576f667a` — the
**pre-flip** three-step panel (`Coalition and purpose` → 001; `Mission architecture` `is-current` →
`/news/003-vehicle-design/`; `Surface operations`, no link), i.e. round 2's state. The round-2.5 link
move is **not** live, which is consistent with `steps.ts` at `HEAD` being `1236ead7…`. Target routes:
`/news/001-project-announcement/` 200 (11,882 B, `Simulated record date · 12 October 2026`) and
`/news/004-launch-provider/` 200 (9,730 B, dated 11 March 2030). Nothing in this round is public yet;
the flip is the dev card's push.

---

## 5. `simulatedDate` — not applicable, and why

A _simulated record date_ is a property of a published **news article** (`website/news/<slug>.mdx`,
frontmatter `simulatedDate`, drawn from the locked milestone table in `docs/SCENARIO.md`
§"Launch and mission dates"). This release publishes a **site panel**, not an article, and it authors no
wiki page either:

- `website/src/features/progress/steps.ts` declares four string fields and one optional flag and link;
  **no date field exists** in the module and the file carries no `simulatedDate` (measured). The panel
  therefore takes no record date, and the absence is the correct check — inventing one would be new
  scenario canon, which is not this role's to write.
- The section's only calendar token is step 1's released _"launch window in 2031"_ (`001:66`),
  unchanged; step 3's detail carries none; and the locked calendar's flight-system dates stay out of
  the panel.
- The four articles' own record dates are untouched by this round and remain in timeline order
  (`001` 2026-10-12 → `002` 2027-03-19 → `003` 2029-07-13 → `004` 2030-03-11, verified live and in file).

No `docs/SCENARIO.md` milestone line is cited because no milestone is claimed: this card advances no
timeline step.

---

## 6. Release decision (recorded on card `t_a635e5eb`)

Recorded on the card as this role's own sentence, and reproduced here for durability — **the card is
the decision, not this record**:

> **Release decision — `t_a635e5eb`, 2026-09-17 ~21:25 CEST, `mars-ai-simulator-editor`.** The
> homepage roadmap panel as frozen in `.agents/work/drafts/roadmap-round-3-deck.md` revision 1
> (recipe hash `fd04377c3f34c997c1d1c6118ac8dc04e3cea3c22dc8a643e2ba13ca6f2d2cda`; plain sha256
> `3741bbe9…`) is **released for publication**: the four step entries (§7 blocks a, b, c — one title
> renamed, one step added, round 2.5's link/label/detail delta carried verbatim) and the two extended
> source comments (§7 blocks d, e). Public scope is the homepage roadmap panel only, transcribed into
> `website/src/features/progress/steps.ts` (`:9–12`, `:33–39`, `:48–53`; step 4 moved to `:54–58`) and
> `website/test/progress-log.test.mjs` (`:13–24`). `current: true` stays on step 2 and moves only
> when the record carries the next step's opening (`steps.ts:9–12` after the extension). No edit to
> `001`–`004`, `facts.ts`, `Hero.astro`, or any other published surface is authorised in this round;
> the five other public instances of the word the rename removes are the human story owner's call
> (`t_8e8364e4`). No separate human approval sentence is required: this recorded decision is the
> approval, and the dev transcription card `t_28348940` may push once its own gates pass.

## 7. What the dev card carries, and what is outstanding

- **Two files only:** `website/src/features/progress/steps.ts` and
  `website/test/progress-log.test.mjs`. Stage nothing else; the shared checkout currently carries
  other cards' in-flight edits.
- **Compare against the after-state hashes in §3** rather than against the deck's char counts
  (block (e)'s count row is 4 bytes out; its digest matches).
- **Round 2.5's lane does not gate this transcription.** No editorial-gate and no dev card were ever
  filed for round 2.5 (`t_116ca903` → `t_1b0b1951` is where that chain stops), so the condition the
  single-lane rule was written for — a sibling card editing `steps.ts` — is not met. Block (c) carries
  round 2.5's delta byte-for-byte and this decision releases it, so the panel lands in one commit.
  The rule's _intent_ still binds: this card must be the only card editing `steps.ts` in its run
  window, so the dev worker re-checks the working tree and the board before its edit, and blocks as
  `dependency` only if a real sibling holds the file.
- **Outstanding:** nothing for this package. `t_28348940` is filed as this card's child
  (it already existed, with this card as its parent, so no duplicate was created), and completing this
  gate releases it.
- **Routed, not held:** the round-2.5 lane's missing decision record (continuity §9 R1) is recorded on
  this card's handoff and in its completion metadata, with comments on `t_28348940` and `t_116ca903`.

## 8. Verification log

| Step                                                      | Command / method                                                         | Result                                                                                           |
| --------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Input hashes re-measured at verdict time                  | `sha256sum` over §1's list                                               | all unchanged; `HEAD` = `origin/main` = `3f53fdf1…`                                              |
| Deck recipe hash re-derived                               | scratch script over the deck's own §0 row                                | `fd04377c…` — fixed point reproduced                                                             |
| §7 payload re-derived                                     | scratch script over the deck's fenced blocks                             | 5/5 digests + `STRINGS-3` match; round 2.5's entry reproduced byte-for-byte                      |
| Withheld-class scan                                       | scratch scanner, pattern list outside the repository, positive controls  | 0 hits over the four rendered strings and both comment regions; controls fire 2 / 9 / 6 families |
| After-state assembled                                     | scratch script, deck §7 blocks only                                      | `steps.ts` `5efd5d98…`, `test.mjs` `370f3a66…`                                                   |
| Formatter                                                 | `~/.dprint/bin/dprint check --config dprint.json <both files>`           | exit 0                                                                                           |
| Build                                                     | `npm run build` in the throwaway copy                                    | exit 0; postbuild guard clean; 9 routes                                                          |
| Test suite                                                | `npm test` in the throwaway copy                                         | 14 files / **153 tests passed**, exit 0                                                          |
| Built panel read back                                     | scratch parser over the copy's `dist/index.html`                         | 4 steps, 1 `is-current`, anchors 001 + 004 only                                                  |
| Live origin                                               | in-page `fetch(cache:'no-store')` + `crypto.subtle`, read-only           | homepage 200 (`4c16d7f1…`, still 3 steps); 001 200; 004 200                                      |
| No build/commit/push/deploy by this card under `website/` | `git status --short`; this card's writes are two `.agents/work/` records | confirmed                                                                                        |
