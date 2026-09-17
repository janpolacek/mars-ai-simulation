# Continuity check: 002-payload-selection

## Check metadata

| Field         | Value                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Slug          | `002-payload-selection`                                                                                                           |
| Article       | `website/news/002-payload-selection.mdx` (SHA-256 `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b`)             |
| Timeline step | `002-payload-selection` (`docs/timeline/002-payload-selection.md`), prerequisite step 001 met                                     |
| Card          | `t_424d8b68` — `mars-ai-simulator-continuity` (re-verification; supersedes the v1 record written by `t_5f29e3aa`)                 |
| Role / skill  | Continuity redactor; `.agents/skills/editorial-review/SKILL.md`                                                                   |
| Checked       | 2026-09-17 01:47 CEST, re-verified 01:53 CEST after the parent stage `t_1d89f2b4` completed; against the live shared working tree |
| Package state | `publication: draft`; no `media` field; no released route; nothing committed by this card                                         |
| Verdict       | `continuity clear` (editorial continuity gate only — see "What this verdict is not")                                              |

## Revision history

This is **v2** of the continuity record for `002-payload-selection`.

- **v1** — card `t_5f29e3aa`, written 2026-09-17 01:27 CEST, verdict `continuity clear`, file hash
  `9d8ff1a03c11e7916f0f7528e3f9d6a12fc77435fd1c8ff26f0163b3b2db3aeb`. The editorial gate
  (`.agents/work/reviews/002-payload-selection.md`) records that hash as the continuity input it
  read. **That hash no longer matches this file**; the editorial gate's verdict is unaffected,
  because v2 reaches the same conclusion on the same, unchanged article.
- **v2 (this record)** — card `t_424d8b68`. The article is **byte-identical** to the text v1 and the
  editorial gate reviewed (same SHA-256), but the tree around it moved after v1: `docs/SCENARIO.md`
  changed at 01:39 CEST, the step-002 brief was filled in at 01:41 CEST, and published article 001
  was rewritten at 01:46 CEST. Every check below was re-run in v2 rather than carried over, and the
  stale validation rows in v1 were corrected.

The v1 finding table is preserved in substance; its command results, route list, and two of its
observations were out of date at v2 time and are restated below.

- **v2 re-verified, 01:53 CEST.** The parent stage `t_1d89f2b4` (visual assets) was linked to
  this card mid-run and finished at 01:52; the package was re-checked before this verdict was
  finalised. The draft is still byte-identical (`64373791…`), the asset manifest was re-validated
  by that card and corrected (`8179ed1a…` → `dc71bb2d…`, closing observation C), the SEO package
  moved again (`ae876fa0…`), the temporary `/plate-probe/` route was removed by its owner, and
  `check-dist.mjs` exits 0 with two routes. Observation A is therefore closed as well. No claim
  or verdict changed.

## Verdict

`continuity clear`.

Every material claim in the draft still agrees with the released step
(`docs/timeline/002-payload-selection.md`) and with the locked scenario
(`docs/SCENARIO.md`); the chronology follows the release order; no fact gated to a
later step and no Asteria Field detail appears in the article, in its metadata, in
the asset manifest's placement row, in the SEO package, or in the built output from
this package. No canon conflict was found, so nothing had to be escalated for a
canon decision.

Five boundary observations are recorded below; all are non-blocking and none changes a
fact or needs a canon decision. Two of them (A and C) were raised during the run and are
since closed by the owning cards; three (B, D, E) remain for the editor's judgement.
Three human approval steps remain outstanding.

## Inputs read

- Draft: `website/news/002-payload-selection.mdx`
- Released step: `docs/timeline/002-payload-selection.md` (sha256 `1006eedd…`)
- Prerequisite step: `docs/timeline/001-project-announcement.md` (sha256 `3aa1bca7…`)
- Release order and invariants: `docs/timeline/README.md` (sha256 `212c3366…`)
- Locked scenario: `docs/SCENARIO.md` (sha256 `c045a4c9…`, as of 01:47 CEST)
- Published canon: `website/news/001-project-announcement.mdx` (sha256 `50dea75b…` at 01:47 CEST)
- Subject dossiers: `docs/area/AREA.md` (sha256 `ae5bf08c…`), `docs/brand/BRAND.md`
- Brief: `.agents/work/briefs/002-payload-selection.md`
- Source pack: `.agents/work/sources/002-payload-selection.md`
- Asset manifest: `.agents/work/assets/002-payload-selection/assets.md`
- SEO package: `.agents/work/seo/002-payload-selection.md`
- Prior continuity record: this file at v1
- Public surfaces: `website/src/content.config.ts` (sha256 `27da28e9…`),
  `website/src/lib/releases.ts` (sha256 `9173aa3a…`), `website/src/features/news/`,
  `website/src/lib/assets.ts`, `website/dist/`, `website/scripts/check-dist.mjs`,
  `website/scripts/guards.mjs` (sha256 `65d31b91…`)

Assumptions: (1) public canon at the timestamp above is the published 001 article plus
this draft and nothing else; (2) the shared tree is edited concurrently by other
profiles, so every statement below is a point-in-time result and each one names the
command that produced it; (3) working papers under `.agents/work/` are not public
surfaces, so gated terms may appear there only to _bar_ material, never to place it.
No withheld value is written in this record.

## Claim-level continuity check

| #  | Claim in the draft                                                                                               | Canonical source                                                                                                                  | Result                                                                                                                                                                                                                                                                                                                |
| -- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Payload scope = panoramic and navigation imaging, weather measurement, mineral and rock sensing, contact tool    | Step 002 §"Private situation"; `docs/SCENARIO.md` §"Payload and onboard samples"                                                  | PASS — the step's four categories are restated without adding or dropping one.                                                                                                                                                                                                                                        |
| 2  | The scope is agreed but the individual instruments and their names are not                                       | Step 002 §"Private situation" and §"Constraints and decisions" (instrument names open until approved)                             | PASS — the step's own open items are kept open, in the same terms.                                                                                                                                                                                                                                                    |
| 3  | Programme identity (fictional, AI-assisted; Red Horizon One; uncrewed)                                           | `docs/SCENARIO.md` §"Mission identity"; published 001                                                                             | PASS — matches published canon; no crewed or sample-return implication.                                                                                                                                                                                                                                               |
| 4  | Science question: how water changed an ancient equatorial landscape, Margaritifer Terra region                   | Published 001 body; `docs/SCENARIO.md` §"Scientific purpose"                                                                      | PASS — the region has been public since 001; no site, coordinate, ellipse, or mapping detail follows.                                                                                                                                                                                                                 |
| 5  | Ten partner groups, one vote each whatever they contribute                                                       | `docs/SCENARIO.md` §"Equal governance"; published 001                                                                             | PASS — no partner is named beyond the identities already public; no shares, no vote thresholds, no Council name.                                                                                                                                                                                                      |
| 6  | A European-led sensor contribution is in the payload scope, with name and technique open                         | Step 002 §"Private situation" ("a visible programme contribution … exact name and technique remain open"); brief §"Allowed angle" | PASS — the step and the brief license the contribution's existence and bar naming it; the article keeps name and technique open and names no country and no technique.                                                                                                                                                |
| 7  | Each instrument needs a defined physical home and must be mountable, pointable, non-interfering                  | Step 002 §"Constraints and decisions"                                                                                             | PASS — restates the step's accommodation constraint as the reason the payload stays compact.                                                                                                                                                                                                                          |
| 8  | A compact, explainable payload takes precedence over a longer capability list                                    | Step 002 §"Constraints and decisions"; `docs/SCENARIO.md` §"Payload and onboard samples"                                          | PASS.                                                                                                                                                                                                                                                                                                                 |
| 9  | Not a life-detection mission; habitability framed as water, chemistry, energy, stability                         | `docs/SCENARIO.md` §"Mission identity", §"Scientific purpose"; `docs/timeline/README.md` invariant; published 001                 | PASS — no discovery, anomaly, archive, or life claim.                                                                                                                                                                                                                                                                 |
| 10 | Schedule frame = the 2031 launch window; no launch or landing date stated                                        | `docs/SCENARIO.md` §"Continuity and release controls"; step 001 allowed angle; published 001                                      | PASS — year only, exactly as published in 001; the only four-digit year in the article is 2031.                                                                                                                                                                                                                       |
| 11 | No launch vehicle named; no landing site chosen publicly                                                         | `docs/SCENARIO.md` §"Continuity and release controls" (vehicle and provider, site, dates gated)                                   | PASS — a negative statement, consistent with the public record and the release order. See observation D.                                                                                                                                                                                                              |
| 12 | PanCam: wide-angle stereo cameras + high-resolution camera + filter wheels on Rosalind Franklin                  | Cited ESA instrument-suite page (HTTP 200, re-fetched and read in this run)                                                       | PASS (real-world) with a citation note — the cited page states the stereo and high-resolution cameras; "filter wheels" is carried by the source pack's PanCam references, not by that page. See observation B.                                                                                                        |
| 13 | MastCam-Z: a pair of zoomable cameras on Perseverance's mast                                                     | Cited NASA Mars 2020 instruments page (HTTP 200, text read in this run)                                                           | PASS — page: "the mast-mounted camera system that is equipped with a zoom function"; the same page shows "the two Mastcam-Z imagers".                                                                                                                                                                                 |
| 14 | SuperCam: LIBS + Raman among several spectroscopic methods, mast unit built by a French-led consortium           | Cited CNES SuperCam page (HTTP 200, text read in this run)                                                                        | PASS (real-world) — page: "a suite of instruments employing five different measuring technologies … three spectrometers (LIBS, Raman and infrared)", and the Mast Unit's "design and construction … was initiated and coordinated by IRAP with CNES oversight". Article marks the mission "unrelated to Red Horizon". |
| 15 | Enfys: infrared spectrometer on Rosalind Franklin, working alongside the panorama cameras on mineral composition | Cited ESA Exploration Science page (HTTP 200, text read in this run)                                                              | PASS — page text places "Enfys IR spectra" together with "PanCam and CLUPI images" in the same target-selection workflow.                                                                                                                                                                                             |
| 16 | MEDA: Perseverance weather station measuring wind, temperature, humidity, airborne dust                          | Cited NASA Mars 2020 instruments page                                                                                             | PASS — page: "weather measurements including wind speed and direction, temperature and humidity, and also measures the amount and size of dust particles".                                                                                                                                                            |
| 17 | SHERLOC works with the WATSON camera at the end of the arm; CLUPI is a close-up imager on Rosalind Franklin      | Cited NASA and ESA pages                                                                                                          | PASS — NASA page: SHERLOC "Mounted on the rover's robotic arm … assisted by WATSON, a color camera for taking close-up images of rock grains and surface textures"; ESA page places CLUPI with the PanCam/Enfys target-selection workflow.                                                                            |
| 18 | Real missions are precedents, not partners; no implied endorsement                                               | `docs/SCENARIO.md` §"Real-world grounding sources" and the no-endorsement paragraph                                               | PASS — explicit disclaimer plus a "Sources and further reading" note; no real body is presented as a participant.                                                                                                                                                                                                     |
| 19 | Card face: `title`, `summary`, `category`, `status`, `linkLabel`, `order`, `accent`, `publication: draft`        | Draft frontmatter; `website/src/content.config.ts`                                                                                | PASS — title/summary restate claims 1 and 2 only; "In selection" agrees with the step's in-progress state; schema validated by a real build (content sync completed, 0 errors).                                                                                                                                       |
| 20 | Asset row: identity mark reuse recorded, no media field in the draft                                             | Step 002 §"Spoilers and handoff" ("Do not publish a final rover render unless step 003 is approved")                              | PASS — no imagery placed, so no step-003 render and no alt text on a public surface; the recorded reuse makes no payload, hardware, or schedule claim. See observation C.                                                                                                                                             |

## Chronology and release-order check

- Step 002 depends on 001; the article presents itself as the second public step and
  cites the first with an in-site pointer (`/#updates`). No event is out of order and
  no event from a later step is narrated.
- The article is present-tense "in selection" and states the schedule frame as open;
  it does not imply that a launch vehicle, a landing site, or a payload build has
  been settled.
- No calendar date, sol count, mass figure, budget figure, or duration figure appears
  in the article, matching the release control that keeps those for their authorised
  steps. (Published 001 has since added a duration framing of its own; this article
  neither repeats nor contradicts it.)

## Spoiler and confidentiality check (by surface)

| Surface                                      | Check                                                                                                                                                                                                             | Result                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article body and frontmatter                 | regex scan for the surface-vehicle designation, the launcher and spaceport, the real-institution role, landing-area name and coordinates, gated date strings, later-step years, duration, power, and hazard terms | Three hits, all benign: "filter wheels" (line 43, PanCam's filter wheel) and two substring hits on "sol" inside "resolve"/"resolution" (lines 28, 43).                                                                                                                                                                                                                                         |
| Frontmatter fields that travel into metadata | `title`, `summary`, `category`, `status`, `linkLabel`, `accent` read as a set                                                                                                                                     | No gated term; no `media*` field present.                                                                                                                                                                                                                                                                                                                                                      |
| Draft title and summary in the built output  | `grep` across `dist/` for the applied title, the applied summary, and `Payload brief 02`                                                                                                                          | 0 occurrences of each; the published 001 title still appears once per built page.                                                                                                                                                                                                                                                                                                              |
| Guard markers                                | `dist/` scan for the `gatedTextMarkers` list in `scripts/guards.mjs`                                                                                                                                              | 0 occurrences; the marker list is unchanged in this run.                                                                                                                                                                                                                                                                                                                                       |
| Route gate                                   | `website/src/lib/releases.ts` (`releasedNewsSlugs` empty); `node scripts/check-dist.mjs`                                                                                                                          | `releasedNewsSlugs` is empty and no `/news/002-payload-selection/` page exists.                                                                                                                                                                                                                                                                                                                |
| Newsroom listing and homepage chrome         | Card kickers and card text counted in `dist/news/index.html`                                                                                                                                                      | One card only (`Announcement 01`, status `Now opening`); no 002 card, no "Payload brief 02" string, no placeholder-caption leak.                                                                                                                                                                                                                                                               |
| Built output — whole tree                    | `node scripts/check-dist.mjs` (exit 0) and a `find` of `dist/`                                                                                                                                                    | "no reference into a withheld directory, and no withheld file or marker in dist/". At verdict time `dist/` holds two routes, `/index.html` and `/news/index.html`; the third route present in mid-run was another card's transient probe — see observation A, now closed.                                                                                                                      |
| Asset manifest placement row                 | Read as a whole (final revision `dc71bb2d…`)                                                                                                                                                                      | The reuse row places nothing (no `media` field in the draft) and introduces no unapproved term. Note: its earlier anchor — "byte-identical to the alt text published on the 001 card" — was voided when 001 was rewritten, and the manifest's own 01:51 re-validation records that; the manifest now states the alt string as the live one rather than as a 001-identical copy. Observation C. |
| Recorded asset fidelity                      | `sha256sum docs/brand/logo-bg-black.png docs/brand/logo.png` vs `docs/brand/BRAND.md`                                                                                                                             | `f9543989…` matches the approved hash recorded in `BRAND.md`; the rejected derivative (`d23d7c99…`) is not in use.                                                                                                                                                                                                                                                                             |
| SEO package                                  | §11 confidentiality check plus my own scan of the applied strings                                                                                                                                                 | Applied metadata and link anchors restate published facts only; §5 headings, §7 structured data, and §8 alt guidance are marked as recommendations and are not applied.                                                                                                                                                                                                                        |
| Published 001 after its mid-run rewrite      | Read at 01:47 CEST; its new content compared against the draft's claims                                                                                                                                           | The rewrite does not contradict any 002 claim. Its new material is not relied on by this package. See observation D.                                                                                                                                                                                                                                                                           |

## Plausibility and real-world grounding

- The four measurement jobs are each shown on a real, flying example, and every
  external link returned HTTP 200 on 2026-09-17 (five of five, re-checked here rather
  than taken from an earlier handoff).
- Instrument descriptions were re-read against the cited pages' own text in this run
  (PanCam, Enfys, CLUPI, MastCam-Z, SuperCam, MEDA, SHERLOC/WATSON) — see table rows
  12–17. The one wording gap is observation B.
- The draft keeps real-world claims separated from fiction: the fictional mission is
  named as fictional in the first sentence of the body and in the card framing, and
  the precedents are labelled as precedents with no endorsement implied.

## Uncertainty and fictional boundaries

- Things the programme has not settled are written as not settled, in a dedicated
  section, and the article says the programme will not describe them as settled until
  they are. No open item is written as certainty and no unresolved item is filled with
  apparently canonical detail.
- No fictional entity is presented as a real institution; the only real names in the
  article belong to real missions and their builders, in a sources section with a
  non-endorsement note.

## Boundary observations (non-blocking — editor's and human story owner's call)

**A. The built site now contains a third route that is not this package's.**
`website/dist/` at 01:45–01:47 CEST holds `/index.html`, `/news/index.html` and
`/plate-probe/index.html`. The probe page is `website/src/pages/plate-probe.astro`,
which describes itself in its own header comment as a "TEMPORARY verification probe
for card `t_3922071d` — deleted before handoff", and it renders that card's media
component against the released Asteria Field plates. It is another card's test
artefact: `dist/` is gitignored, nothing is deployed, and `check-dist.mjs` still
exits 0. v1 of this record reported two routes because the probe did not exist then.
Recorded so the observation is on file with a timestamp; **not** raised as a
continuity failure for this package, and not a corrective-card matter, because it
clears itself when that card hands off. If it is still present when this package is
prepared for release, the site engineer should confirm it was removed before any
deploy.

**Closed at 01:53 CEST.** The owning card removed the probe source and its route before
handing off. `dist/` is back to `/index.html` and `/news/index.html`, `check-dist.mjs`
exits 0, and a marker scan over `dist/` returns 0 hits. Observation withdrawn; the
timeline above is kept so the record shows what was seen and when.

**B. "filter wheels" attributed to the cited PanCam page (line 43).** Re-confirmed in
this run: the cited ESA instrument-suite page's own text says "PanCam, with its stereo
and high-resolution cameras…" and does **not** contain "filter". The fact is correct
and is carried by the source pack's PanCam references. Recommendation to the editor:
add the PanCam instrument paper already in the source pack, or drop the three-word
clause. Citation precision only — the claim is not false and this is not a canon
matter.

**C. Two statements in the asset manifest's determination are now stale.** The
manifest says this repository "has cleared exactly one identity asset for public use"
and that `docs/area/` material is barred partly because "the guard's `Asteria` marker
would fail the build anyway". Since it was written, the human story owner recorded a
partial release of the Asteria Field name, planning centre and plates **for article
001 only**, and `scripts/guards.mjs` retired the landing-region name from
`gatedTextMarkers` accordingly. So the first statement is incomplete and the second is
no longer true. The manifest's conclusion for this package still holds — the plates
are released for article 001 only, so they remain barred here, and the draft keeps no
`media` field — and the reuse decision itself is unaffected. Reported, not repaired here
because the manifest belongs to the visuals stage. **Resolved at 01:51 CEST by the
visuals card `t_1d89f2b4`**, which re-validated the manifest and corrected both
sentences: the determination now records the identity mark as the only _identity_ asset
alongside the article-001-only plate release, and the barred-media section states that
the step-002 bar is a **release boundary enforced by review, not by a build guard**.
Manifest hash `8179ed1a…` → `dc71bb2d…`. The item is closed; it is kept here so the
record shows what was raised and how it was answered.

Related, and worth one line because it changes what a future continuity check can
assume: with the landing-region name retired from the marker list, the build guard no
longer catches that name if it leaks into a public surface. This package is clean by
review (the draft, its metadata, and the built pages contain no such detail), but the
automatic net that used to back the review is gone for this term.

**D. "no landing site has been chosen publicly" (line 100).** This sentence needs
re-reading now that published article 001 has been rewritten (01:46 CEST) to name the
fictional target region, its planning centre and its planning envelope, and to state
that "landing-site design work stays out of the public record for now". The 002
sentence is still accurate and still consistent: what is public is a target region and
its planning geometry, while the landing site, ellipse and touchdown zone remain
unreleased, which is exactly what 001 itself now says. It does not retract 001. The
observation is recorded because the sentence now sits next to a published target
region, so the editor should keep it knowingly rather than by accident; a reader who
sees both pages should not come away thinking 002 contradicts 001. No canon decision
is required and nothing is escalated.

**E. "the mast cameras" (line 75).** Unchanged from v1 and still not a continuity
failure: the phrase is a generic category term in a sentence about close-up scale, and
the article's own panorama section already establishes wide-view cameras. Step 002
explicitly licenses discussing each instrument's physical home on the rover; no
configuration detail (count, position, dimensions, finish) is given anywhere.

## What this verdict is not

`continuity clear` is an editorial continuity gate on this package. It is not
publication approval and not a canon decision. Still outstanding, in order:

1. **Editorial final gate** — recorded as `approved` on `t_db1becc6`, and re-confirmed by
   the second gate card `t_0f626603` (both write `.agents/work/reviews/002-payload-selection.md`).
   Both read the same article bytes and the continuity v1 record; the v1 hash reference in
   that record now points at this superseded v2 file, and each gate's own conclusion is
   unchanged because the article did not move.
2. **Human release decision on the identity mark's new public placement** — recorded
   by the visuals card (`t_cb3464ef`) under `docs/brand/BRAND.md` "Publication
   boundary". The draft correctly carries no media field until that decision exists.
3. **Human canon and release approval**, then a human-recorded release reference in
   `website/src/lib/releases.ts` before any article route can exist.

Also outstanding, outside this package: the recorded, unproduced sensor-focused
illustration brief still needs a human go-ahead; and published article 001 was
rewritten after the retro continuity check on it completed, so its new content is
**not covered by any continuity verdict yet**. That belongs to the article-001 lane,
not this card, and it does not affect this verdict — no 002 claim depends on the added
material. Recommendation: the story coordinator should route a continuity re-check of
001, since its rewrite postdates its own review.

## Validation performed in this check

| Check                                 | Command / source                                                                                | Result                                                                                                                                                                                                                                                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Content schema and build              | `cd website && npm run build` (01:45:41 CEST)                                                   | Complete — 3 pages: `/index.html`, `/news/index.html`, `/plate-probe/index.html` (observation A). The 002 draft produces no route, card, or listing entry.                                                                                                                                             |
| Withheld material in the public build | `node scripts/check-dist.mjs` (re-run alone at 01:47 CEST)                                      | exit 0 — "no reference into a withheld directory, and no withheld file or marker in dist/".                                                                                                                                                                                                            |
| Draft filtered out of the build       | `grep` of `dist/` for the applied title, the applied summary, and `Payload brief 02`            | 0 / 0 / 0; the published 001 title appears once per built page.                                                                                                                                                                                                                                        |
| Guard markers                         | scan of `dist/` for the current `gatedTextMarkers` list                                         | 0 occurrences.                                                                                                                                                                                                                                                                                         |
| Article token scan (widened)          | regex over the draft for the gated classes, four-digit years 2026–2036, dates, and figure units | Three hits, all benign (see the spoiler table); the only four-digit year is 2031.                                                                                                                                                                                                                      |
| Route gate                            | `website/src/lib/releases.ts`; `find website/dist -type f`                                      | `releasedNewsSlugs` empty; no article detail page emitted.                                                                                                                                                                                                                                             |
| External citations                    | `curl -o /dev/null -w "%{http_code}" -L` for the five links                                     | 5 × 200.                                                                                                                                                                                                                                                                                               |
| Cited-page text                       | `curl` + text extraction and grep of the ESA and NASA pages                                     | PanCam stereo/high-resolution (and **no** "filter"), Mastcam-Z zoom plus "the two Mastcam-Z imagers", MEDA's wind/temperature/humidity/dust set, SHERLOC arm-mount and WATSON close-up, Enfys with PanCam/CLUPI, SuperCam's LIBS/Raman suite and CNES-overseen Mast Unit — all confirmed in page text. |
| Asset hash                            | `sha256sum` of the mark in use vs `docs/brand/BRAND.md`                                         | Match (`f9543989…`); the rejected derivative is not in use.                                                                                                                                                                                                                                            |
| Package snapshot                      | `sha256sum` of the article and every package record at 01:53 CEST                               | Article `64373791…` (still byte-identical); source pack `ce350054…`; manifest `dc71bb2d…` (was `8179ed1a…`; see observation C); continuity v1 `9d8ff1a0…`; brief `4deba4ba…`. The SEO package moved twice after v1 (`5a2901a1…` → `ae876fa0…`) — see below.                                            |
| Upstream records changed after v1     | `stat`, `git diff`, `git status --short`                                                        | `docs/SCENARIO.md` (01:39), the 002 brief (01:41), `website/news/001-project-announcement.mdx` (01:46) and the asset manifest (01:51) all changed post-v1; the 002 draft did not.                                                                                                                      |
| Repository hygiene                    | `git status --short`                                                                            | This card writes only this record. The draft, the step files, the brief, the manifest, and the SEO package were left as found.                                                                                                                                                                         |
| Confidentiality of this record        | Manual read                                                                                     | No withheld value, coordinate, date, provider, or institution is written here; gated material is named by class or by location only.                                                                                                                                                                   |

Note on the SEO package: it has been re-validated twice since the editorial record
hashed it (`96ebede0…` → `5a2901a1…` → `ae876fa0…`, latest 01:52 CEST, card
`t_2b1bdd6b`). Its own handoff states the applied metadata was deliberately left
byte-identical to the editorially approved revision and only the package's validation
record was corrected, which the article's unchanged hash confirms. Its §11
confidentiality result still holds: the strings it applies to the draft (`title`,
`summary`, three internal links) are unchanged. Flagged so a later reader does not
read a moving hash as tampering.

## Final label

continuity clear
