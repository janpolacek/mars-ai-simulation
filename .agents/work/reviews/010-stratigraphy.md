# Review: 010-stratigraphy

Card: t_8625a8df (Editorial final gate: 010-stratigraphy)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 396

## Inputs verified (run 396)

| Input            | Path                                                                                                                                                                                                                                                                                                                                                                                                                                            | Hash / status                                                                                                                                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft            | `website/news/010-stratigraphy.mdx`                                                                                                                                                                                                                                                                                                                                                                                                             | sha256 `a7283e3017f8f6a184f34bef7e0a4693716c2beed94c1273cf0c5e5bae831dae`, 7,136 B, 45 content lines, `publication: draft`, `simulatedDate: 2032-04-18` (reviewer-applied this run; +26 B over the writer's 7,110 B = the single inserted frontmatter line)                      |
| Source pack      | `.agents/work/sources/010-stratigraphy.md`                                                                                                                                                                                                                                                                                                                                                                                                      | claims C1–C12; all line citations re-verified against current bytes; flags table + forbidden ledger used as the confidentiality authority                                                                                                                                        |
| Asset manifest   | `.agents/work/assets/010-stratigraphy/assets.md`                                                                                                                                                                                                                                                                                                                                                                                                | REUSE decision (AF-02 primary / AF-01 alternative; AF-03 barred by image index); placement none (no media key), article links `/wiki/area/asteria-field/`; hashes match the single image index                                                                                   |
| Brief            | `.agents/work/briefs/010-operations-and-discovery.md`                                                                                                                                                                                                                                                                                                                                                                                           | page row `:10` (010-stratigraphy ↔ row `:202`); allowed facts `:17`; common framing `:21-26`; forbidden `:27-34`; asset rule `:38`; draft contract `:42-47`                                                                                                                      |
| Timeline step    | `docs/timeline/010-operations-and-discovery.md`                                                                                                                                                                                                                                                                                                                                                                                                 | continuity control only; private phrases at `:7` (incl. "sedimentary history" — F1)                                                                                                                                                                                              |
| Scenario         | `docs/SCENARIO.md`                                                                                                                                                                                                                                                                                                                                                                                                                              | row ``:202`` = `18 April 2032                                                                                                                                                                                                                                                    | First mineral-stratigraphy campaign completed` (re-verified at verdict time) |
| Released context | `001-project-announcement.mdx` (`:29-33, :42-44`), `002-payload-selection.mdx` (`:29-30, :42, :54-56, :110-114`), `005-launch.mdx`, `008-landing.mdx`, `009-egress.mdx`, `009-health-packet-panorama.mdx` (`:26`), `009-first-drive.mdx` (`:29, :33`), `010-first-sample.mdx` (`:17, :33, :45, :49, :51`); wiki `rh-01-pathfinder.mdx` (`:128, :130-132`), `asteria-field.mdx` (`:83-93, :101-105`), `red-horizon.mdx` (`:32`), `ariane-64.mdx` | quotes in the article re-verified verbatim against the released bytes; route presence verified in `website/dist/` (`/news/*` and `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/project/red-horizon/`)                                                   |
| Content schema   | `website/src/content.config.ts:14-71`                                                                                                                                                                                                                                                                                                                                                                                                           | `publication` defaults to `draft`; `simulatedDate` optional union (string                                                                                                                                                                                                        | Date); no undeclared key; pipeline `js-yaml` read of the reviewed bytes passes and `newsMediaIssues()` returns `[]` |
| Media contract   | `website/src/lib/media.ts` + `website/src/features/news/media.ts` + `website/src/lib/assets.ts`                                                                                                                                                                                                                                                                                                                                                 | no `media*` key on the article (verified by grep + frontmatter parse); no contract to satisfy; the `asteria-plates` 3-plate set is NOT used (would place barred AF-03)                                                                                                           |
| Surface          | `website/src/lib/simulated-date.ts` (label `Simulated record date`, U+00B7 separator; renders `18 April 2032`), `website/src/lib/seo.ts` (no `simulatedDate` on any meta surface), `website/dist/` (read-only)                                                                                                                                                                                                                                  | fail-closed pre-flip state re-verified: no `/news/010-stratigraphy/` route, no HTML reference to the slug; sibling `dist/news/010-first-sample/index.html` states `Simulated record date · 31 October 2031` under the in-fiction label — the render pattern this page will carry |

## Simulated record date

**`simulatedDate: 2032-04-18`** — drawn from the locked milestone row `docs/SCENARIO.md:202`:

> `18 April 2032 | First mineral-stratigraphy campaign completed`

The row is exactly the milestone this step (010-operations-and-discovery, page 2) releases, so the
record date is the row's own calendar day — the date, inside the fiction, on which the article is
written. Applied by the reviewer in run 396 (frontmatter line 6, +26 B); the milestone line is
named in this record per the card's acceptance.

Checks against the value:

- **Implies no event this step has not released** — the date IS the step's event (row `:202`).
- **Cannot be read as a launch / landing / other withheld mission date** — it names the completed
  stratigraphy campaign; landing (16 Sep 2031) and the 008/009/010-first-sample rows are already
  released; the next withheld row (`:203`, 3 Aug 2033 — one Mars year) is not implicated and no
  later row's date or milestone shape appears anywhere in the page.
- **Contradicts no sentence already public** — `010-first-sample.mdx:45` ("Further samples and
  observations belong to subsequent updates") holds until this record date and this page is the
  record that closes it; no released sentence states anything about an April 2032 event.
- **Articles stay in timeline order** — `2031-10-31` (010-first-sample) → `2032-04-18` (this page);
  the page's own chain (16 Sep → 23 Sep → 31 Oct → 18 Apr) is in order.
- **Schema accepts the value** — `simulatedDatePattern` matches (`2032-04-18`); pipeline `js-yaml`
  read returns the string exactly; `newsMediaIssues()` returns `[]`.

Published surface: after the flip the detail page will state `Simulated record date · 18 April
2032` under the in-fiction label — the same label the 008/009/010 siblings already render;
`src/lib/seo.ts` keeps the value off `datePublished`, `lastmod`, Open Graph, sitemap, and every
meta surface. The dev card t_7ce32811 verifies the built route after the flip.

## Review table (run 396)

| #  | Check                                                 | Result           | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -- | ----------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Chronology agrees with the locked milestone row       | Pass             | Only `18 April 2032` (this step's row `:202`) plus released day references 16 Sep 2031 (`:197`), 23 Sep (`:199`), 31 Oct 2031 (`:201`); no later-step date.                                                                                                                                                                                                                                                                   |
| 2  | Canon consistent with released public records         | Pass (F2 note)   | Milestone event, ops model, terrain vocabulary, purpose paraphrase, caution ceiling, non-life-detection framing, Ariane non-endorsement, and disclosure mirror released 001/002/008/009/010 wiki wording; one claim-precision item F2 at `:20`.                                                                                                                                                                               |
| 3  | Discovery staged with stated limitation               | Pass             | Observation → corroboration → cautious interpretation sections plus a mandatory "Stated limitation" section: "consistent with a sedimentary interpretation", "point toward a history of deposition and alteration", "the team is checking the result against further observations", "not a final determination". No confirmed result.                                                                                         |
| 4  | Modest detection language                             | Pass (F1 note)   | The interpretation family stays "consistent with / suggests / checking"; the private phrase "sedimentary history" at `:32` is F1 and must be replaced with the brief-licensed "sedimentary interpretation".                                                                                                                                                                                                                   |
| 5  | No life claim                                         | Pass             | Only the released negative frames: caution-ceiling sentence ("no target … confirmed clay, confirmed sulfate, habitable, or fossil-bearing", mirroring `asteria-field.mdx:104-105`), "not a life-detection mission" (`002:110-114`), "does not search for living organisms or claim evidence of life" (`001:42-44`).                                                                                                           |
| 6  | No return-cache / ascent-vehicle implication          | Pass             | No cache/sealed-sample/ascent-vehicle/Earth-return language anywhere; the only sample reference is the released first-sample record at the released level.                                                                                                                                                                                                                                                                    |
| 7  | No later-step / private-timeline fact appears         | Fail (F1)        | `stratigraph*`, `mineral-stratigraphy campaign`, `18 April 2032` released by THIS row; rows `:203-207` absent in every form; step 011 absent; no next-record date; no second-campaign phrasing — BUT "sedimentary history" (`:32`) is a `docs/timeline/010-operations-and-discovery.md:7` phrase, 0 hits in released routes today.                                                                                            |
| 8  | Internal links resolve to released public routes only | Pass             | 13 links: `/#mission`, `/news/001-project-announcement/`, `/news/002-payload-selection/`, `/news/003-vehicle-design/`, `/news/005-launch/`, `/news/008-landing/`, `/news/009-egress/`, `/news/009-first-drive/`, `/news/009-health-packet-panorama/`, `/news/010-first-sample/`, `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/wiki/project/red-horizon/` — all released routes present in built `dist/`. |
| 9  | External links policy                                 | Pass             | One external link (NASA Science, periodic layering in Martian sedimentary rocks) used as plain-language context with the explicit boundary sentence "no real mission values are imported into the fictional record" (`:32`); closing disclosure covers the no-endorsement family.                                                                                                                                             |
| 10 | Fiction disclosure present and prominent              | Pass             | Opening sentence with `/#mission` link (`:14`) + closing italic paragraph (`:44`); same boilerplate family as released 001–010 pages.                                                                                                                                                                                                                                                                                         |
| 11 | Ariane 64 stays at the released non-endorsement level | Pass             | `:42` reuses the released sentence family (`010-first-sample.mdx:49`); no operator/agency/facility claim.                                                                                                                                                                                                                                                                                                                     |
| 12 | First-public-wording flags resolved                   | Pass             | `stratigraphy` / `mineral-stratigraphy campaign` / `18 April 2032` defined plainly on first use (`:18-20`, `:14`); "layered outcrops"/"layered terrain"/"layers above and below" reused at released level; `campaign` used only for THIS completed campaign; `corroborat*` avoided (plain "checked against further observations"); `discovery` avoided entirely.                                                              |
| 13 | Voice / grammar / brand                               | Pass             | Composed, candid, specific, modest, date-scoped; plain definitions on first use; scannable paragraphs; only minor redundancy between `:30` and `:32` (both carry "consistent with a sedimentary interpretation/history") — resolved by F1's required substitution.                                                                                                                                                            |
| 14 | Accessibility / structure                             | Pass             | Frontmatter metadata, semantic `##` headings, short paragraphs, plain terminology; no image to caption/alt.                                                                                                                                                                                                                                                                                                                   |
| 15 | Image provenance / rights / alt resolved              | Pass             | No media key (Option A — placement none, per the manifest); article links the released wiki leaf for terrain context; the AF-02/AF-01 reuse substitution for the brief's barred AF-03 example is CONFIRMED (no plate placed, no landing-design fact printed; index hashes verified).                                                                                                                                          |
| 16 | Frontmatter schema                                    | Pass             | `title`, `category: Surface 10`, `status`, `publication: draft`, `simulatedDate: 2032-04-18`, `summary`, `linkLabel: Stratigraphy campaign update`, `order: 10`, `accent: amber` — all declared fields, no undeclared key (pipeline `js-yaml` read + `newsMediaIssues: []`).                                                                                                                                                  |
| 17 | `simulatedDate` fits the milestone table              | Pass             | `2032-04-18` is the locked row `:202` value; reviewer-assigned per the standing rule; milestone line named in this record.                                                                                                                                                                                                                                                                                                    |
| 18 | Spoiler / confidentiality scan                        | Fail (F1)        | No `docs/timeline/` path, no later-step row, no landing geometry, no invented telemetry, no private instrument names, no media surface — but `:32` carries the private-timeline phrase "sedimentary history" (1 hit; 0 hits in released routes).                                                                                                                                                                              |
| 19 | Continuity verdict (separate file)                    | Pass with return | `.agents/work/continuity/010-stratigraphy.md` — chronology/canon/plausibility clear; package verdict `return for revision` on F1 + F2.                                                                                                                                                                                                                                                                                        |
| 20 | Fail-closed pre-flip state                            | Pass             | `publication: draft`; `website/dist/` has no `/news/010-stratigraphy/` route and no HTML reference to the slug; `git log origin/main..HEAD` empty (HEAD == origin/main at verdict time).                                                                                                                                                                                                                                      |

## Findings (run 396)

| ID | Location | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required correction                                                                                                                                                                                                                                                                                                                                                                        |
| -- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| F1 | `:32`    | The sentence "the layered pattern and mineral readings are consistent with a **sedimentary history**, and the team is checking the result against further observations" places the exact phrase "sedimentary history" from the private timeline (`docs/timeline/010-operations-and-discovery.md:7`) into public copy. The source pack flags table and Forbidden fact ledger explicitly direct it to stay out: "'sedimentary history' is a private timeline phrase and stays out; the brief licenses 'sedimentary/mineral interpretation' (say 'consistent with a sedimentary interpretation' plus limitation)". 0 hits across released public routes today. The same sentence is redundant with `:30`'s "consistent with a sedimentary interpretation". | Replace with the brief-licensed wording: "the layered pattern and mineral readings are consistent with a sedimentary interpretation, and the team is checking the result against further observations" (restructure allowed to remove the redundancy with `:30`, keeping the checking sentence). Corrective t_066d01b8 (mars-ai-simulator-writer), linked as a parent of this review card. |
| F2 | `:20`    | "…and that **these layers** test whether fine sediment records transport and aqueous alteration" attributes the basin-margin test to all three evidence classes. Released canon (`asteria-field.mdx:88-93`) assigns each class its own test: cratered basement = baseline for texture/abrasion and unaltered-vs-altered comparison; basin-margin material = "They test whether fine sediment records transport and aqueous alteration"; channel and bench surfaces = "They test flow direction, sorting, rounding and contact relationships".                                                                                                                                                                                                           | Narrow the test clause to the basin-margin material: e.g. "…and that the basin-margin layers among them test whether fine sediment records transport and aqueous alteration." Keep the evidence-class vocabulary at the released level. Same corrective t_066d01b8.                                                                                                                        |

Two unresolved material failures remain (F1, F2), so this pass is **not** approved.

## Final status

**`changes_requested`.** Every review-table row passes except row 7 / 14-equivalent confidentiality
(row 18) on F1 and the claim-precision F2 (row 2). The corrective t_066d01b8 removes the
private-timeline phrase and fixes the evidence-class attribution; the re-gate then re-runs the
confidentiality scan (target: 0 hits for "sedimentary history" and the other private-timeline
phrases), re-verifies the evidence-class sentence against the wiki, and, on clean bytes, records
the release decision on this card. Article hash to carry: `a7283e30…` is the hash AT REVIEW with
the reviewer-applied `simulatedDate` line; the corrective's completion reports the new hash and
this record's revision section binds it.

## Release decision

**Not granted in this pass.** The release decision will be recorded on this card when the
corrective t_066d01b8 lands and the re-gate approves the corrected bytes. Precondition recorded for
that decision: exact public scope = one article `website/news/010-stratigraphy.mdx`
(`publication: published`, `simulatedDate: 2032-04-18` from `docs/SCENARIO.md:202`), no media key
(placement none; article links `/wiki/area/asteria-field/` for terrain context; AF-02/AF-01 reuse
substitution confirmed, AF-03 never placed), no new canon beyond row `:202` and released
step-009/010 context; dev card t_7ce32811 flips `publication` and pushes
(`t_7ce32811: publish 010 stratigraphy update`).

## Confidentiality

The reviewed bytes name no `docs/timeline/` path, no later-step row, no landing-design geometry,
and no withheld telemetry — with the single F1 exception: the phrase "sedimentary history" on line
32. That exception is exactly what the corrective removes. The evidence-class sentence (F2) stays
within released vocabulary but misattributes a released test; also fixed by the corrective.

_Review record. Verdict and status recorded 2026-09-19 by mars-ai-simulator-reviewer; supersedes no
earlier pass (first gate for this slug). Not a canon record and not a release decision._

## Revision 2 — corrective re-gate (run 396b; supersedes the run-396 `changes_requested`)

**Corrective t_066d01b8 (writer, run 397) applied and verified independently.** Reverse-applying the
two claimed hunks to the corrected file reproduces the run-396 article hash
`a7283e3017f8f6a184f34bef7e0a4693716c2beed94c1273cf0c5e5bae831dae` exactly (7,136 B, 45 content
lines) — byte-identical proof that only those two hunks changed:

- Hunk 1 (F1, `:33`): `are consistent with a sedimentary history` →
  `point toward a sedimentary interpretation` (private-timeline phrase removed; the checking clause
  "the team is checking the result against further observations" survives, and the redundancy with
  `:31`'s "consistent with a sedimentary interpretation" is reduced).
- Hunk 2 (F2, `:21`): `and that these layers test whether fine sediment records transport and
  aqueous alteration` → `and that the basin-margin layers among them test whether fine sediment
  records transport and aqueous alteration` (test attribution narrowed to basin-margin material,
  per `asteria-field.mdx:88-93`).

- Corrected article hash: `42d8119994092c38394c721f111552796a258dd62dc65b33f8b5180ed3037b`
  (7,158 B, 45 content lines, `publication: draft`, `simulatedDate: 2032-04-18` intact, no media* key).
- F1 resolved: 0 hits for "sedimentary history" and every other private-timeline phrase; token scan
  clean; "April" × 2 (summary + `:15`) and "2032" × 3 (summary + `:15` + the `simulatedDate` value)
  are all this row's own date; "habitable" × 1 in the licensed caution-ceiling negative.
- F2 resolved: the exact basin-margin sentence is present and matches the released attribution.
- Every other review-table row's evidence is unchanged (the reconstruction proves no third change
  rode along); the fail-closed pre-flip state was re-verified (no `/news/010-stratigraphy/` route in
  `website/dist/`, no HTML reference, `git log origin/main..HEAD` empty).
- Final status on the corrected bytes: **`approved`** — every review-table row passes; no
  unresolved material failure remains.

### Release decision (recorded on card t_8625a8df, run 396b)

**RELEASED — approval of `website/news/010-stratigraphy.mdx` for publication on the
010-stratigraphy package release.**

- **Exact public scope**: one article `website/news/010-stratigraphy.mdx`, `publication: published`,
  `simulatedDate: 2032-04-18` (already in the reviewed bytes). No media key (placement none): the
  article links `/wiki/area/asteria-field/` for terrain context; the AF-02/AF-01 reuse substitution
  for the brief's barred AF-03 example stands confirmed (no plate placed, no landing-design fact
  printed). No new canon: the page's public facts are the locked row `docs/SCENARIO.md:202` plus
  released step-009/010 context and the released evidence-class / caution-ceiling wiki vocabulary;
  nothing after row `:202` is released by this page. The dev card t_7ce32811 flips `publication` in
  the same change (message `t_7ce32811: publish 010 stratigraphy update`).
- **Evidence**: article hash at the moment of the decision
  `42d8119994092c38394c721f111552796a258dd62dc65b33f8b5180ed3037b` (7,158 B, 45 content lines),
  re-hashed immediately before this record; run-396 hash `a7283e30…` reconstructed byte-for-byte
  from the corrected file; token scans clean (0 hits for the private-timeline families and the
  withheld families; only the licensed negative caution-ceiling frames remain); `docs/SCENARIO.md`
  row `:202` verified; fail-closed pre-flip state verified in fact (no `/news/010-stratigraphy/`
  route in `website/dist/`, no HTML reference to the slug, `publication: draft`,
  `git log origin/main..HEAD` empty at verdict time).
- **Conditions attached**: none beyond the recorded state — the approved revision is the corrected
  hash above; the dev card must flip `publication` without altering body bytes, keep
  `simulatedDate: 2032-04-18`, and verify the built route states
  `Simulated record date · 18 April 2032` under the in-fiction label.
- **Confidentiality**: verified — corrected bytes name no `docs/timeline/` path, no later-step row,
  no landing-design geometry, no withheld telemetry, no private-timeline phrase.
