# Continuity record: wiki-asteria-field

Card: `t_06da3c70` (Editorial final gate: wiki-asteria-field). Role: `mars-ai-simulator-editor` (merged
continuity + editorial + release authority).
Mission-timeline step: **`003-vehicle-design`** — the step at which the operator's Gate A answer makes the
`/wiki/area/` node public (`docs/SCENARIO.md:279`). The page derives from `docs/area/AREA.md`; article 001
published the name, the planning centre, the planning envelope, the local operations frame and the three
plates.

Verdict recorded **2026-09-17 21:02 CEST**. Every value below was re-measured immediately before this record
was written (2026-09-17, 20:55–21:02 CEST), not carried from an earlier snapshot.

**Verdict: `continuity clear`** — the page agrees with released canon and the locked scenario, carries no
withheld material, and is spoiler-safe. This record is the continuity half of the merged gate; the release
decision is in `.agents/work/reviews/wiki-asteria-field.md` and on the card.

## 1. The package under this verdict

| Artifact                            | Path                                               | Bytes     | SHA-256                                                            |
| ----------------------------------- | -------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| Page under review (MDX)             | `website/wiki/asteria-field.mdx`                   | 8,739     | `fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed` |
| Plate AF-01 (already released)      | `docs/area/asteria-field-01-mars-locator.png`      | 2,333,852 | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` |
| Plate AF-02 (already released)      | `docs/area/asteria-field-02-regional-context.png`  | 3,311,859 | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` |
| Plate AF-03 (already released)      | `docs/area/asteria-field-03-local-operations.png`  | 3,492,102 | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` |
| Canonical dossier cited by the page | `docs/area/AREA.md`                                | 23,948    | `53bc13f2c90074ac01aa7dfa38ccc3646774f4e922517a9866bc53011c378979` |
| Scenario release controls           | `docs/SCENARIO.md`                                 | —         | `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` |
| Source pack                         | `.agents/work/sources/wiki-asteria-field.md`       | 7,995     | `c781b00164e182831973e210fa5ce2a157ae20379c668cc7cde99e90b914ff47` |
| SEO package                         | `.agents/work/seo/wiki-asteria-field.md`           | 10,979    | `b8a97265a0f632ab2d40e826b209875aacf5b77192634ce18a4ff86cd4b6aa62` |
| Asset manifest (reuse only)         | `.agents/work/assets/wiki-asteria-field/assets.md` | 32,247    | `b13f68599725a572f04f522b69868359494560867c998937cd23609cf1cdf9b7` |
| Brief                               | `.agents/work/briefs/wiki-content-plan.md`         | 20,812    | `88960d839a0b661a23323402671107c6c7ae3cdccb0ff635e12b6a416dceef48` |
| Releasing article (published)       | `website/news/001-project-announcement.mdx`        | 4,832     | `923a12d87a92279712a51e61dfa8b42793474b1d239ec2bef8c3cdc03617d399` |

Page mtime `2026-09-17T20:11:01+02:00`; page hash identical across four independent observations (writer
`t_10fc616a`, SEO `t_b2e8e9b5`, visuals `t_0c83565f`, this pass). No file moved during this run (§8).

The page is `publication: draft` and **untracked** in the shared checkout (`git status --short` →
`?? website/wiki/`); `HEAD` = `origin/main` = `5a59f34`, `rev-list --count origin/main..HEAD` = 0, and no
commit in the history touches `website/wiki/`.

## 2. The step, and the release controls this page sits under

Four records govern this page, and three of them are narrower than the fourth. They are quoted here because
the reconciliation in §5 turns on which one controls.

1. **`docs/area/AREA.md:18-19`** (dossier control record) — canon status: _"Partial release approved
   2026-09-17 — name, centre coordinates, and plates AF-01/AF-02/AF-03 released for article 001 only"_;
   public status: _"Partially released (article 001 only)"_; and _"all other material requires separate
   human approval"_.
2. **`docs/SCENARIO.md:279`** (canon release controls, the controlling record for this node) — the
   `Wiki area-page exception — operator answer 2026-09-17 13:40 CEST on gate card t_9b2a308d (Gate A
   selected A): the /wiki/area/ landing-zone wiki page (Asteria Field, derived from docs/area/AREA.md) IS
   public at step 003 in publication STATE … Landing-design facts (ellipse geometry, P0 touchdown zone,
   science-zone plan, hazard inventory, traverse logic, AF-* unit identifiers) remain withheld for prose,
   alt text and captions per H1 decision 2026-09-17 option i. The publication FLIP for the wiki area page
   is the merged editorial role release decision … no separate human approval sentence is required. The
   landing-design withhold above survives the flip.`*
3. **Operator binding consequence 3 on `t_9b2a308d`** (comment, 2026-09-17 13:40 CEST) — _"Only
   already-released material (name, centre coordinates, plates AF-01/AF-02/AF-03 released for article 001)
   may be reused"_, immediately after restating the landing-design withhold.
4. **The brief's §Bounds** (`.agents/work/briefs/wiki-content-plan.md`, planner) — _"The area page may use
   only: the designation Asteria Field, the planning centre coordinates, and the three plates already
   released for article 001."_

Two further human records are superseded and must not be read as live gates: Gate C's _"Withhold — no wiki
page published yet; I approve on the release card when the page is ready"_ (`t_c77be834`), and consequence 2
of the same operator comment (*"NO page may be flipped … until the human writes the approval sentence"*).
Both were superseded the same day by the recorded authority change: _"there is no human gate for
releasability or canon confirmation any more. The merged editorial role decides these"_ (operator comment on
`t_9b2a308d`, 2026-09-17 13:40 CEST; the same clause is in `SCENARIO.md:279`). This card's own recorded
decision is therefore the flip's licence.

## 3. Chronology and release order

| Check                                                             | Result                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every material claim traces to material released at step ≤ 003    | PASS. §4 — each claim resolves to article 001's published text, to the dossier lines the Gate A answer releases, or to material articles 002–003 already published. No step-004+ fact, no step-005+ term.                                |
| The page does not assert an event or a date                       | PASS. It is a reference entry in a stable present: no four-digit year, no month name, no "as of", no dateline, no "recently / latest / now / this week / this year", no "will soon / is expected to" (measured, §7).                     |
| The one `/news/` link points at a published article route         | PASS. `/news/001-project-announcement/` is `publication: published` and live (200, 11,882 B, sha256 `237572a8…`, measured 20:59 CEST).                                                                                                   |
| The page does not un-release or contradict published material     | PASS. It narrows nothing and supersedes nothing. Its restatements of article 001's values are value-identical (§5).                                                                                                                      |
| The page does not stale a published negative of the release order | PASS. The page states no launcher, no launch or landing date, and no mission-lifetime figure, so article 003's dated negative ("No launch vehicle has been named", `simulatedDate: 2029-07-13`) and article 004's record are unaffected. |
| The articles and this page stay in timeline order                 | PASS, and not applicable in the usual sense: the wiki collection declares no date field (§9), so this page carries no position in the dated sequence and cannot reorder it.                                                              |
| The page does not advance the release order                       | PASS. It publishes the node the operator released in STATE (Gate A) and no fact beyond it. The landing-preparation step (007) is not pre-empted: the page states no surface-operations plan, no landing-site geometry, and no result.    |

## 4. Canon consistency — claim by claim

Every material claim was traced against `docs/area/AREA.md` (the page's `canonicalDocs:`) and against the
published record. The source pack's per-claim table was used as a checklist, and the dossier was read
line-ref-by-line-ref directly, because the pack is a restatement of the dossier rather than independent
research (its two defects are recorded in §8, N-1 and N-2).

Column 3 names what makes the claim publishable: **001** = published article 001's prose; **dossier** = a
dossier line the Gate A answer covers (see §5); **gap** = a withheld family, stated only as a gap.

| #  | Page claim (abridged)                                                                                                                                                          | Source                  | Publishable because                                                             | Verdict |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------------------------------------------------------------------------- | ------- |
| 1  | Scenario designation **Asteria Field**; fictional operational region; not an official place name                                                                               | `AREA.md:11-12`         | 001 `:53-54,57-58`; §5                                                          | PASS    |
| 2  | Real parent geography **Margaritifer Terra**, Mars                                                                                                                             | `AREA.md:13,46-49`      | 001 `:46-47`                                                                    | PASS    |
| 3  | Planning centre 17.80°S, 332.20°E (27.80°W)                                                                                                                                    | `AREA.md:14`            | 001 `:54-55`                                                                    | PASS    |
| 4  | Planning envelope 12.5–24.0°S, 327.0–338.0°E                                                                                                                                   | `AREA.md:15`            | 001 `:55`                                                                       | PASS    |
| 5  | Local operations frame 8 × 6 km, centred on the planning centre                                                                                                                | `AREA.md:16`            | 001 `:56`                                                                       | PASS    |
| 6  | Working revision `AF-0.2` (dossier's `· 2026-09-17` omitted)                                                                                                                   | `AREA.md:17`            | dossier control value, Gate A; not a withheld family, not a date string (§5)    | PASS    |
| 7  | "The planning centre and the envelope are scenario coordinates … not a claim that a named feature sits there"                                                                  | `AREA.md:21-22`         | 001 `:57-58`                                                                    | PASS    |
| 8  | Gazetteer is the authority for the parent name; it does not record Asteria Field                                                                                               | `AREA.md:46-49`         | 001 `:46-47`; real-world citation, as published                                 | PASS    |
| 9  | Published mapping describes cratered highlands, impact-basin structures, valley networks, sedimentary/alluvial deposits, etc.                                                  | `AREA.md:50-53`         | real-world citation; 001 `:48-51` carries the general form                      | PASS    |
| 10 | Neighbouring Morava Valles / Margaritifer basin: fluvial incision, basin sedimentation, possible lacustrine plains, chaos                                                      | `AREA.md:54-59`         | real-world citation, same form                                                  | PASS    |
| 11 | Orbital spectroscopy found clay/hydrated minerals elsewhere; the field's targets borrow the rationale, inherit no detection                                                    | `AREA.md:60-64`         | real-world citation; 001 `:35-36,50-51`                                         | PASS    |
| 12 | Scenario boundary: what is real (Margaritifer Terra, regional history) vs invented (name, centre, envelope, frame, units, plates)                                              | `AREA.md:42-73`         | 001 `:53-60`; the invented list is the withhold's own boundary                  | PASS    |
| 13 | The plates are original schematic graphics and embed no NASA/ESA/USGS/HiRISE/CTX/MOLA imagery                                                                                  | `AREA.md:71-73,245`     | dossier rights line; the public alt/registry statement is "not orbital imagery" | PASS    |
| 14 | Not an IAU-approved name; no real agency surveyed, endorsed or adopted the region; no real institution is a partner                                                            | `AREA.md:3-5,259-260`   | negations; brand voice requires them                                            | PASS    |
| 15 | Regional setting: highland surface to the west, arcuate basin-margin depression to the east, paleochannel benches NW→SE                                                        | `AREA.md:77-85`         | dossier geography; already depicted by the released AF-02/AF-03 plates (§5)     | PASS    |
| 16 | Three evidence classes and what each tests (texture/abrasion, transport and aqueous alteration, flow direction and sorting)                                                    | `AREA.md:28-34,100-102` | 001 `:36-40` publishes the triad; the added descriptive detail is dossier (§5)  | PASS    |
| 17 | RH-01 Pathfinder is Red Horizon One's surface rover: maps terrain, inspects rocks in context, establishes safe routes                                                          | `AREA.md:28-30`         | 001 `:29-33`; article 003 `:17-19` (published)                                  | PASS    |
| 18 | The scenario asks for a chain of evidence, not a discovery; no claim of water, life or a confirmed detection                                                                   | `AREA.md:36-40,137-142` | 001 `:42-44`; the guardrail is a negation                                       | PASS    |
| 19 | Three plates carry the released visual record; generated visualizations, not orbital imagery; released with the announcement                                                   | `AREA.md:227-249`       | 001 `mediaAlt:12-14`, `mediaCaption:16-18`, `mediaLabel:19`, `:59-60`           | PASS    |
| 20 | Dossier release boundary: only part is released; landing-site geometry, local mapping units/labels, surface-operations planning are not released; the page states none of them | `AREA.md:254-263`       | gap statement; no withheld value named (§7, note 2)                             | PASS    |

No claim could be traced to no canon, and none states a withheld family. Column 3's "001" rows are
value-identical restatements of published sentences; §5 records how the "dossier" rows are cleared.

## 5. The page's released scope — reconciling four records

This is the judgement the card, the operator note and the assets manifest each hand to this gate, so it is
recorded rather than implied.

**What is uncontested.** The card body, the brief and the operator's consequence 3 all name a narrower
release line than the _published record_ actually carries. Article 001, as published, carries more than
"name, centre coordinates, plates": its prose states the **planning envelope** (`:55`) and the **local
operations frame** (`:56`), and names the **evidence-class triad** and the highland-to-basin transition
(`:36-40`). Those values are therefore public already, and the page's use of them (rows 4, 5, 16) is a
restatement of published material, not a new disclosure. The brief's "may use only" list is the
_article-001 release line_ of `AREA.md:18`, not an exhaustive budget of public facts — read literally it
would forbid the page from repeating the article it links.

**What the page adds beyond the published record.** Three items, all dossier material and none of them on
the withhold list (rows 6, 15 and part of 16): the `AF-0.2` working-revision label, the regional-setting
arrangement (`AREA.md:77-85`), and the evidence classes' descriptive detail and test rationale
(`AREA.md:100-102`). Two further sentences in `## Operational identity` (`AREA.md:36-38`, "a chain of
evidence rather than … a discovery") are dossier prose at the same level.

**The ground on which they are cleared.** The controlling record is `SCENARIO.md:279`'s wiki area-page
exception, which the operator recorded in canon after the brief was written: the page _"derived from
docs/area/AREA.md"_ **is public at step 003 in publication STATE**, and the only withhold that survives it
is the landing-design list, _"for prose, alt text and captions"_. The exception names the page's _source_
(the dossier) and one prohibited family; it does not confine the page to three facts. Consequence 3's
"already-released material" reads together with the withhold sentence it follows, and with the dossier's own
public-status line — it is the landing-design constraint, not a second, narrower content budget. And the
material the page adds discloses nothing that the _already-released plates_ do not show: my vision pass over
the three plates (20:58 CEST) found AF-02 printing the envelope with coordinate ticks, its boundary extent
and the five terrain-class labels, and AF-03 printing the landing ellipse, the P0 touchdown zone, the
S1–S4 science points, the hazard overlay and the traverse routes — all public through article 001 under the
H1 option-i decision. The regional arrangement the page describes in prose is the arrangement those plates
depict.

**What is not cleared, and stays that way.** No landing-design fact appears in the page's prose, alt text or
captions (§7), the AF-* unit identifiers are absent, and the surface mission lifetime (two Mars years /
1,374 Earth days — released for article 001 only) is **not used by this page at all**; the card's clearance
question therefore does not arise, and this decision grants no wiki reuse of it. `AREA.md:18-19` and
`assets.ts:59,65` still read "article 001 only" and are now stale against `SCENARIO.md:279`; the
reconciliation card is filed (§10), and the stale lines are recorded rather than treated as a blocker,
because the later, controlling record is the operator's own answer.

**Stated limit.** If the human story owner intends the area page to carry no dossier prose beyond what
article 001 published as text, that is a narrowing of the release the operator granted, and the wording of
`AREA.md:18-19` / the brief's §Bounds is where it lives; this record names it rather than settling it. What
this verdict does assert, and what is measured, is that the page states nothing withheld.

## 6. Plausibility

| Check                                             | Result                                                                                                                                                                                                                                        |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technically plausible                             | PASS. A reference entry about a fictional planning region: coordinates, a framing envelope, three terrain classes, a rover whose job is context work. Nothing asserts flight performance, mobility limits, instrument capability or schedule. |
| Uncertainty not written as certainty              | PASS. "The arrangement is a relationship diagram for mission planning, not a reading of the real local geology"; "borrow that rationale; they do not inherit a confirmed detection"; "no target … is described as confirmed".                 |
| Fictional elements have understandable boundaries | PASS. `## Scenario boundary` separates real from invented by name; "Asteria Field is not an IAU-approved place name"; "no real institution is a partner in the programme".                                                                    |
| No unexplained acronym or invented term           | PASS. No acronym is used. `RH-01` and `AF-01`–`AF-03` are released designations; `AF-0.2` is named as the _working revision_ of the dossier the page cites as its source.                                                                     |
| No implied real-world endorsement                 | PASS. Real names appear only as research authorities or in a provenance denial (§7, note 1).                                                                                                                                                  |

## 7. Spoiler safety and containment

The card's required containment, copied verbatim:

> - No ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifier in prose, alt text or captions.
> - No `simulatedDate`. No dateline. No "as of" date string.
> - No performance figure (speed, range, mass) unless released canon. No Ariane 64. No launch or landing date. No real institution or provider named. No `/docs/timeline/` reference. No step-002/003/004+ fact paraphrased into wiki prose (link, don't restate).
> - The three plates AF-01 / AF-02 / AF-03 may carry the released landing-design depiction per the article-001 release; the page does not name ellipse geometry or P0/S* units even though the plates show them.

Measured against the whole file (frontmatter, prose, alt text, captions, label, link) at sha256 `fdc5a902…`:

| Containment item                          | Measurement                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No ellipse geometry                       | PASS. Zero hits for `ellipse`, `6.4`, `3.2 km`, `078`, `258°`, `touchdown`.                                                                                                                                                                                                       |
| No P0 touchdown zone                      | PASS. Zero hits for `P0` (case-insensitive), `touchdown`, `science zone`/`science-zone`.                                                                                                                                                                                          |
| No science-zone plan                      | PASS. Zero hits for `S1`–`S4` as labels, `priority`, `traverse`.                                                                                                                                                                                                                  |
| No hazard inventory                       | PASS. Zero hits for `hazard`, `mantle over hardpan`, `block field`, `bench break`, `cross-slope`, `wheel-slip`, `stand-off`, the 12°/15°/75 m operating values.                                                                                                                   |
| No traverse logic                         | PASS. Zero hits for `traverse`, `route`, `P0 →`.                                                                                                                                                                                                                                  |
| No `AF-*` unit identifier                 | PASS. Exact scan for `AF-H0`, `AF-B1`, `AF-C2`, `AF-L3`, `AF-E4`: none. The only `AF-` tokens in the file are the plate labels `AF-01`/`AF-02`/`AF-03` (released, public in article 001) and the dossier's working revision `AF-0.2`.                                             |
| No `simulatedDate`                        | PASS. The key is absent (parsed frontmatter keys: `title, section, publication, order, summary, canonicalDocs, media, mediaAlt, mediaCaption, mediaLabel`); zero hits for `simulatedDate`, "record date", "written on".                                                           |
| No dateline / no "as of" date string      | PASS. Zero four-digit years, zero month names, no "as of"/"in [year]" construction.                                                                                                                                                                                               |
| No performance figure                     | PASS. No speed, range, mass, endurance, power or lifetime figure. The two-Mars-year / 1,374-day value is absent entirely (not cleared for wiki reuse by this decision, and not used).                                                                                             |
| No Ariane 64 / no launcher                | PASS. Zero hits for `ariane`, `kourou`, `launcher`, `launch vehicle`.                                                                                                                                                                                                             |
| No launch or landing date                 | PASS. As above — no date string of any kind.                                                                                                                                                                                                                                      |
| No `/docs/timeline/` reference            | PASS. Zero hits for `docs/timeline` or `timeline/`.                                                                                                                                                                                                                               |
| No step-002/003/004+ fact paraphrased     | PASS with note 3. The page names RH-01 Pathfinder and its purpose, at the level article 001/003 already publish; it states no vehicle-design, payload, launcher or schedule fact.                                                                                                 |
| No real institution or provider named     | PASS with note 1 (the distinguishing test).                                                                                                                                                                                                                                       |
| Gated build markers                       | PASS. Zero hits for `gatedTextMarkers` (`website/scripts/guards.mjs:86`).                                                                                                                                                                                                         |
| Whole-site source scan                    | PASS. The real `scanSourceForGatedReferences()` returns `[]`; the real `checkDist()` over `website/dist/` returns `[]` (read-only import, no build, no pruning).                                                                                                                  |
| Plates placed are the released three only | PASS. `media: asteria-plates` resolves three plates, `docs/area/asteria-field-0{1,2,3}-*.png`, hashes `f12c58f5…` / `25378457…` / `2890e343…` — the article-001 release. Nothing imports a fourth asteria asset or the withheld `docs/vehicles/pathfinder/contact-arm-scene.png`. |

Containment notes:

1. **Agency names (note 1).** The file contains `USGS` (7×), `NASA` (3×), `ESA`, `HiRISE`, `CTX`, `MOLA`
   (1× each), `Gazetteer` (2×). Each is in one of three forms: a **research citation** (the Gazetteer, SIM
   3209, SIM 3489, the NASA Science resource — exactly what published article 001 does at `:46-51`); the
   **provenance denial** "they embed no NASA, ESA, USGS, HiRISE, CTX or MOLA imagery" (the dossier's own
   rights line at `AREA.md:245`); or a **negation** ("no real agency has surveyed, endorsed or adopted the
   region", "no real institution is a partner in the programme"). No partnership, endorsement, supply,
   operation or provider claim is made, so the containment item's purpose — no real body presented as part
   of the programme — holds. The scenario's own rule is narrower than a blanket ban: _"Real institutions,
   including FEI STU and Arianespace, require explicit review before any public mention"_ (`SCENARIO.md`
   §Continuity and release controls), and none of those reviewed names appears.
2. **`## Release boundary` (note 2).** The page states that landing-site geometry, local mapping units and
   labels, and surface-operations planning "are not released material, and no part of this page states
   them". Read against the plates the same page carries — which visibly print the ellipse, P0, the science
   points and the hazard overlay — the sentence is a statement about **text**: it names no value and the
   page's text states none. It is coherent with `SCENARIO.md:279` ("remain withheld for prose, alt text and
   captions") and with `AREA.md:254-263`, and the page's own alt text acknowledges the plate-3 overlays
   generically ("with its scenario planning overlays") without naming any. Recorded as a pass with the
   reading made explicit, so a later reader does not treat the plates as contradicting the sentence.
3. **RH-01 mention (note 3).** `## Operational identity` names the rover and its purpose in one sentence;
   that is identification of the region's operator, not a paraphrase of the step-003 design (no wheel, mast,
   arm, mass or configuration fact), and it is already published in articles 001 and 003. The page links
   article 001 (the release it derives from) and does not link article 003; the wiki voice rule permits,
   but does not require, an inline link per fact. Not a wording defect; recorded so it is not re-litigated.
4. **`sulfate` (note 4).** Two hits, both released or negated: "clay and sulfate minerals are useful records
   of past environmental conditions" (article 001 `:35-36` publishes the same mineralogy), and "no target
   there is described as confirmed clay, confirmed sulfate, habitable or fossil-bearing" (`AREA.md:139-142`).
   The dossier's _mineral-target list_ is not reproduced.

## 8. Findings carried in, and how each was disposed of

| Finding (source)                                                                                                                                                                                                 | Disposition here                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Manifest F1** — release-scope wording is inconsistent: `AREA.md:18-19` and `assets.ts:59,65` still read "released for article 001 only" while `SCENARIO.md:279` gained the wiki exception.                     | **Confirmed and reconciled** (§5). The later, controlling record is the operator's Gate A answer recorded in canon; the page's plate reuse rests on it, not on a widened reading of the article-001 line. A reconciliation card is filed (§10). No blocker.                                                                                                                                                                                                                        |
| **Manifest F2** — the plates' pixels carry the scenario's internal cartographic overlays, including the landing-design depiction.                                                                                | **Confirmed by measurement and ruled on.** My vision pass (20:58 CEST) read AF-02 printing the boundary, coordinate ticks and five terrain-class labels, and AF-03 printing the ellipse, P0, S1–S4, hazards and routes. The H1 option-i decision releases the _depiction_ with the plates; the withhold is a prose/alt/caption rule, and the page's public strings name none of it. The artwork is already live through article 001 (§11), so the page adds no new pixel exposure. |
| **Manifest F3** — the card body's placement path (`website/wiki/area/asteria-field.mdx`) does not exist; the page is flat.                                                                                       | **Confirmed; flat is the convention.** The glob loader (`base: './wiki'`, no `generateId`) makes a nested file's id `area/asteria-field` and the leaf route renders `/wiki/area/area/asteria-field/` with `TypeError: Missing parameter: section`. Flat gives the intended `/wiki/area/asteria-field/`; the brief §1 and the drafting skill record the rule. **The build card's body also names the nested path** — routed by handoff comment (§10).                               |
| **Manifest F4** — the page's alt/caption wording is not article 001's verbatim text.                                                                                                                             | **Resolved as wording-kept.** SEO `t_b2e8e9b5` completed with the media/alt check PASS and no frontmatter edit; my own vision pass confirms every cue the three alt strings name (AF-01 globe + target callout, AF-02 envelope/classes/centre marker, AF-03 operations frame with overlays) and both captions' scale claims (planet scale; ≈200 km; 8 × 6 km at 1 km). The key contract holds (`newsMediaIssues()` → `[]`). No change required.                                    |
| **Manifest F5** — hotspot `.agents/work/assets/wiki-*/assets.md` (three manifests written by an outside process at 20:14:42 CEST).                                                                               | **Carried as a board observation with the hashes.** This gate read `wiki-asteria-field/assets.md` at `b13f6859…`; its sibling manifests are other cards' inputs. Owner for the "one owner per wiki manifest" question: orchestrator.                                                                                                                                                                                                                                               |
| **Writer question (a)** — summary trimmed from the brief's 173 chars to 149.                                                                                                                                     | **Confirmed as the correct form.** The summary is the page's meta description; 173 chars overshoots the ≤155 budget the SEO structural review sets, and the 149-char gloss keeps every fact (149 = measured). Row 11 of the review record.                                                                                                                                                                                                                                         |
| **Writer question (b)** — control record states `Working revision AF-0.2` without the dossier's `· 2026-09-17`.                                                                                                  | **Confirmed.** The wiki voice rule forbids a date string that reads as the page's day of writing, and the page carries no date anywhere; omitting the dossier's revision date is the correct edit. `AF-0.2` is a document-control label, not an `AF-*` unit identifier and not a withheld family (§5, row 6).                                                                                                                                                                      |
| **Operator note 1** — the source pack `.agents/work/sources/wiki-asteria-field.md` must exist and be the claim-by-claim basis.                                                                                   | **Satisfied — it exists** (7,995 B, mtime 20:23 CEST; the draft is 20:11, so it post-dates the draft, as the writer warned). It supplied the checklist; the authoritative trace below was taken against `docs/area/AREA.md` itself. Exactly one page area is absent from the pack's table — the regional-setting paragraph — dispositioned in §5 and §8 (N-1/N-2).                                                                                                                 |
| **Operator note 2** — state the path convention for later pages.                                                                                                                                                 | **Answered: flat** (`website/wiki/<slug>.mdx` with `section:` in frontmatter). The URL segment comes from `section`, so the route is `/wiki/area/asteria-field/` either way; the nested file is the version that cannot build. `website/test/wiki-index.test.mjs` builds its tree from a fixture, so later pages must follow the flat shape.                                                                                                                                       |
| **Operator note 3** — withholds bind this page including the three plate captions.                                                                                                                               | **Checked, captions included.** The three `mediaCaption` strings carry only scale and the word "fictional" (row 20–22 of the containment scan; §7); the composed captions add the registry provenance sentence and the plate-3 note, both registered strings, neither of which names a withheld fact.                                                                                                                                                                              |
| **Operator note 4** — the flip is this card's own recorded release decision.                                                                                                                                     | **Recorded as such** in `.agents/work/reviews/wiki-asteria-field.md` §"The release decision" and on the card.                                                                                                                                                                                                                                                                                                                                                                      |
| **Pack N-1** — the pack's header paragraph lists the planning envelope and the local operations frame among withheld material, contradicting its own per-claim table (which marks both released by article 001). | **Recorded as a pack defect, no card raised.** The pack's table is right and its header is loose; both values are published in article 001 `:55-56`. No shipped artifact depends on the pack's prose, and this gate's trace used the dossier. Owner of the record: the research role (planner).                                                                                                                                                                                    |
| **Pack N-2** — the pack's table cites article 001 as the release of "Working revision: AF-0.2"; article 001 does not carry that value.                                                                           | **Recorded as a citation defect, no card raised.** The value is a dossier control fact, cleared in §5 on the Gate A grant rather than on an article-001 sentence. Same owner; no artifact depends on it.                                                                                                                                                                                                                                                                           |
| **Wrapper/schema check** — does the wiki schema accept a date?                                                                                                                                                   | **No.** `website/src/content.config.ts:78-117` declares `title, section, publication, order, summary` and the optional `related`/`canonicalDocs`/media fields — no date, and the news `simulatedDate` is not mirrored. The page therefore carries none (§9), and an added key would fail the build.                                                                                                                                                                                |

## 9. The simulated record date

**No value is assigned, and none may be: the wiki collection declares no date field.** Measured, not
assumed: the parsed frontmatter keys are `title, section, publication, order, summary, canonicalDocs, media,
mediaAlt, mediaCaption, mediaLabel`; `simulatedDate` is absent; there is no four-digit year, no month name
and no "as of" construction anywhere in the file; and the page's head composes no date — the wiki leaf route
passes only `title` and `description` to `BaseLayout`, whose head emits `description`, `generator`,
`canonical` (suppressed, `SITE_URL` unset) and `robots` only, with no JSON-LD, no `<time datetime>`, no
sitemap entry (`src/lib/seo.ts`, `src/layouts/BaseLayout.astro:59-72`; SEO checks 7–9).

This is the rule satisfied by **absence**, and that absence is required: a wiki page is not "written on" a
fictional day (`.agents/skills/article-drafting/SKILL.md` §Reference entry (wiki); brief §3). No milestone
line in `docs/SCENARIO.md` is drawn on, because none applies to a page that carries no date. The card body
states the same, and the only date-shaped string registered anywhere near this page is the media registry's
provenance sentence ("Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital
imagery."), which is prose provenance, not the page's record date and not a machine-readable date.

## 10. Verdict, conditions, and the limits of it

**`continuity clear`.** The page is coherent, agrees with released canon and the locked scenario, states no
withheld material in prose, alt text or captions, and is spoiler-safe on the bytes `fdc5a902…`.

Conditions (they bind the build card, not this verdict's status):

- **C-1 — the flip is one line, hash-anchored.** Exactly `publication: draft` → `published`, and only while
  the page still hashes to `fdc5a902…`: 8,739 B → **8,743 B**, expected sha256
  **`5ad75613b7529335d195efb6fb72161af778e15d87af1777bbdab0ca72b7bf9c`** (reconstructed and reverse-proved
  in this pass). Any other movement of the file needs a re-read, not a re-stamp.
- **C-2 — the flip target is the flat path.** `website/wiki/asteria-field.mdx`; the card bodies of
  `t_06da3c70` and `t_d05accab` name a nested `website/wiki/area/asteria-field.mdx` that does not exist and
  cannot route. The public URL is unchanged. Routed by handoff comment; the owning role owns the wording.
- **C-3 — plate reuse rests on the Gate A answer, not on a widened article-001 line.** `AREA.md:18-19` and
  `assets.ts:59,65` stay stale until the reconciliation card lands; the build card must not read them as a
  blocker and must not edit `docs/` (§5, §8 F1).
- **C-4 — no build by this card.** This gate ran no build (the postbuild guard prunes the shared `dist/`);
  the built surface — route 200, rendered title/summary, emitted derivatives, guards on the served bytes,
  index/listing — belongs to the build card, and the local `website/dist/` is not the live surface.
- **C-5 — serialisation (observed, and it binds the deploy).** The board carries the planner's full dev
  chain — `t_1476a18c → t_d05accab → t_cac9c84e → t_23484bb2`, all three edges present (`task_links` read
  directly at 21:06 CEST). Completing this gate therefore does **not** promote the build card: it stays
  `todo` until `t_1476a18c` ("Publish the verified shared-checkout change set") completes, and
  `t_1476a18c` itself waits on `t_206bee14`, which is `blocked` on a human answer. The consequence to name —
  not to repair — is that this page's deploy is now chained behind an unrelated, human-blocked card; the
  ordering is the planner's own rule (`.agents/work/briefs/wiki-content-plan.md` §Serialisation rules 2),
  and shortening it is the planner's and the human's call, not this gate's.
  **Superseded wording (corrected 21:06 CEST):** the first version of this bullet stated that the edge
  `t_1476a18c → t_d05accab` was _absent_ from the board and that completion promoted the build card
  immediately. That was false, and it came from a board-read fault in this run: a nested `sqlite3` query
  issued on the same cursor as the outer one truncated the parent list to a single row. The corrected
  statement above is taken from a direct `SELECT * FROM task_links` read.

Limits:

- This verdict is on the **MDX bytes and the live pre-flip surface** (§11). The built page does not exist
  yet; the flip belongs to `t_d05accab`.
- If the page moves, the moved bytes need a re-read. The hash `fdc5a902…` is what makes a later pass on the
  same bytes able to carry this reading forward.

## 11. The published surface (measured, pre-flip)

The page is `publication: draft`, so the honest pre-flip check is that it is **not** public. Measured at
2026-09-17 20:55–21:00 CEST on `https://mars-ai-simulation.janpolacek.workers.dev` (in-page `fetch` with
`cache: 'no-store'` and `crypto.subtle` digests over `arrayBuffer()` bytes — the authoritative surface):

| Surface                                                                  | Measurement                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Live `GET /wiki/area/asteria-field/`                                     | **404**, 0 bytes.                                                                                                                                                                                                                                                                                                                    |
| Live `GET /wiki/area/`                                                   | **404**, 0 bytes.                                                                                                                                                                                                                                                                                                                    |
| Live `GET /wiki/vehicle/rh-01-pathfinder/`, `/wiki/project/red-horizon/` | 404, 0 bytes (siblings also still held).                                                                                                                                                                                                                                                                                             |
| Live `GET /wiki/`                                                        | 200, 4,599 bytes, sha256 `821a2d846a2ea5b288973e20479ce2d0fd28b540313a983d4efa9447a8720728` — the empty index; the slug and the page title appear nowhere in it.                                                                                                                                                                     |
| Live `GET /news/001-project-announcement/`                               | 200, 11,882 bytes, sha256 `237572a8…` — the page's only internal link resolves publicly.                                                                                                                                                                                                                                             |
| Live plate derivatives (article 001)                                     | `/_astro/asteria-field-01-mars-locator.DGegv0O8_ZELxfV.webp` 200, 81,000 B, `b95b7e49…`; `…-02-regional-context.gxqFQfZd_Z20s5M0.webp` 200, 205,738 B, `deeafa96…`; `…-03-local-operations.Dw0Ze8o1_Z10x0xQ.webp` 200, 415,150 B, `1beda1f7…`. The artwork is **already public**; this page adds no new exposure of the plate bytes. |
| Local `website/dist/`                                                    | 10 routes, no `/wiki/area/` route, no `asteria-field` route string (the four hits for the string are article 001's and the homepage's references to the plate filenames). `dist` mtime 19:59 CEST; it is **not** evidence of the live surface.                                                                                       |

## 12. Revision history

**Revision 2 — 2026-09-17 21:06 CEST, superseding revision 1 (sha256
`b12d382af04a784f47cc2360082b0afd73164d5436ac31ca2450684c0c64fc54`, the hash recorded in this gate's
completion metadata).** One paragraph moved: condition **C-5**, in §10. Revision 1 said the board edge
`t_1476a18c → t_d05accab` was absent and that completing this card promoted the build card immediately;
revision 2 records that the edge is present (linked 20:13:03 CEST, confirmed by a direct `task_links`
read) and that the build card therefore stays `todo` behind the planner's chain. The cause was a board-read
fault in this run — a nested `sqlite3` query on the same cursor as the outer one truncated the parent list
to one row — not a movement of the graph. Nothing else moved: the page bytes stay `fdc5a902…`, every input
hash in §1 is unchanged, and the verdict, the release decision and every other condition stand as written.

**No earlier record exists for this slug** — revision 1 was this pass's own first record, and the article
hash has been unchanged across writer, SEO, visuals and this pass.
