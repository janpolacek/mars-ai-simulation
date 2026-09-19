# Editorial review: 007-landing-preparation

- Card: `t_0c98f3bf` — editorial final gate + continuity (one pass), stage review
- Article: `website/news/007-landing-preparation.mdx`
- Route once published: `/news/007-landing-preparation/`
- Timeline step: `007-landing-preparation` (record date human-assigned via
  `t_fb4e97da`; sits between `docs/SCENARIO.md:196` (21 Aug 2031) and `:197`
  (16 Sep 2031))
- Article SHA-256 at verdict: `ea35a507634b20c1e9f07ce48907bba5386c3f84c56729c2793c4734b5bf5a8c`
  (3,937 B — gate-applied revision)
- Review table run: 2026-09-19 (session date); probes re-run at verdict time
- Revision history: **Revision 1 (this file)**. Hash history in one paragraph:
  writer draft (visuals manifest metadata, card `t_021419c1`) was
  `c4a36ba1407066fb0f28d258a79b851d8234a9e3fa35d9bce80e85d4eccfa5d0` (3,868 B,
  76 lines). This gate applied four changes to reach `ea35a507…` (3,937 B, 78
  lines): (1) added required `status` frontmatter field (writer omitted it —
  schema requires `status: z.string()` at `src/content.config.ts:18`);
  (2) added the sanctioned `simulatedDate: 2031-09-07` (from `t_fb4e97da`);
  (3) copy fix "name-released in the project announcement" → "named in the
  project announcement" (voice/plain language); (4) copy fix "across the
  deepening link" → "across the deep-space link" (released vocabulary,
  consistency with 006:44). All four are recorded here and on the card; nothing
  else changed.
- Continuity verdict: `.agents/work/continuity/007-landing-preparation.md` —
  `continuity clear`

## Final status

**approved** — every review-table row passes with no unresolved material
failure; the fail-closed record-date gate is cleared by the human story owner
(`t_fb4e97da`, comment 616: separate article, simulated record date 7 September
2031); the article carries that human-sanctioned record date; the release
decision is recorded below and on the card.

## Simulated record date

- **Value:** `simulatedDate: 2031-09-07` (assigned into the article frontmatter
  by this gate, from the human decision on `t_fb4e97da`).
- **Milestone line column:** **"human-assigned via t_fb4e97da"** — the
  `docs/SCENARIO.md` "Launch and mission dates" table holds no row between
  `:196` (21 August 2031, final approach correction opportunity) and `:197`
  (16 September 2031, atmospheric entry and landing at Asteria Field); the
  value is the human story owner's grant (clarify 2026-09-19; t_fb4e97da
  comment 616, reviewer decision comment 617), not a value invented from the
  table.
- **Checks (all hold):** implies no event the step has not released (plain
  briefing date); cannot be read as a launch (2031-02-17, released), landing
  (2031-09-16, released in 008), or other withheld mission date; contradicts no
  sentence already public (006's promise of the approach/arrival-preparation
  phase is fulfilled; 008's landing record starts 16 Sep and mentions no 7 Sep
  item); keeps the articles in timeline order (006 2031-08-21 → 007
  2031-09-07 → 008 2031-09-16; the pipeline sorts by `simulatedDate`
  descending, `src/lib/publication.ts:58-70`, with `order: 7` as tiebreak).
- **Surface:** the pipeline's own module renders `Simulated record date ·
  7 September 2031` under the in-fiction label (`src/lib/simulated-date.ts`;
  probe: `simulatedDateText('2031-09-07') = "Simulated record date · 7 September 2031"`),
  and nothing machine-readable is derived (`src/lib/seo.ts` — no
  `datePublished`/`lastmod`/OG date/sitemap; `test/news-simulated-date.test.mjs`
  fails the suite if one appears in built output). The dev card `t_34d79c6f`
  verifies the built page states the date after the flip.

## Review table

| Area                                  | Result                     | Notes and evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Citations / claim grounding           | PASS                       | Every material claim traces to the source pack `.agents/work/sources/007-landing-preparation.md` (C1–C14) and the released record: 006:49-54 (promised next status), 004:32-43 (relay architecture), 001:53-60 (Asteria Field name), 005:43 (arrival ahead), wiki ariane-64/rh-01-pathfinder/asteria-field leaves, `docs/timeline/007-landing-preparation.md` (process framing only). No claim requires unpublished canon. Line citations re-verified against current bytes at verdict time.                                                                                                                                                                                                                                                 |
| Links                                 | PASS                       | All 7 internal links are released public routes: `/news/006-cruise-final-approach/`, `/news/001-project-announcement/`, `/news/004-launch-provider/`, `/news/005-launch/`, `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`, `/#mission`. All present in the built route list (34 routes) or as page anchors; canonical `/wiki/area/asteria-field/` route verified in source (`section: area`). No working-paper or private path linked.                                                                                                                                                                                                                                                                                       |
| Coherence                             | PASS                       | Four-question structure (what will happen / which systems matter / what the team will know first / when another update will follow) matches the approved angle; opens from the 006 close and fulfils the dangling promise; uncertainty framing consistent from opening to close; footnote (Ariane 64 non-endorsement + launch link) matches the released boilerplate pattern (004/005/006/008).                                                                                                                                                                                                                                                                                                                                              |
| Voice / grammar                       | PASS                       | Red Horizon voice held: informed, candid, modest, specific; no grandiosity, no marketing language, no unexplained acronyms; disclosure present and prominent at open and close. Two gate-applied copy fixes improve plain language ("named in the project announcement", "across the deep-space link").                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Image placement / captions / alt text | PASS                       | `media: cruise-final-approach` — registry requires `plateCount 1, altCount 1, captionCount 0, requiresLabel false` (`src/lib/media.ts:168`); frontmatter carries exactly one non-empty `mediaAlt` and no `mediaCaption`/`mediaLabel`; `newsMediaIssues()` over the parsed frontmatter returns NONE. Alt text follows the "Illustrative artwork, not mission photography" pattern, pre-landing, no landed rover / no success claim. Reused plate `docs/mission/cruise-final-approach.png` re-hashed at verdict time: `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270` (1024×576) — matches the approved export and the manifest (`.agents/work/assets/007-landing-preparation/assets.md`). `landing-confirmation` not used. |
| Metadata / schema                     | PASS (with noted gate fix) | Frontmatter validates against ``src/content.config.ts``: title, category, status, publication, simulatedDate, summary, linkLabel, order, accent, media, mediaAlt (js-yaml parse OK; ``status`` required by schema at ``:18 — added by this gate; ``simulatedDate: 2031-09-07``present;``publication: draft``— flip is the deploy card's scope). Badge``category: Landing readiness 07``, ``order: 7` per card body.                                                                                                                                                                                                                                                                                                                          |
| Published surface                     | PASS                       | Read-only probes: `listRoutes()` over current `dist/` (34 routes) shows no 007 route — the body is not public while `publication: draft`. Live origin probe (2026-09-19 23:2x CEST): `/news/007-landing-preparation/` → HTTP error (not found); live news index text contains no 007 slug, no "Landing readiness 07", no "Preparing for arrival". `scanSourceForGatedReferences()` over the website source: `[]`. HEAD == origin/main == `be678bd`; article untracked (draft); no accidental deployment path.                                                                                                                                                                                                                                |
| Spoiler / confidentiality             | PASS                       | Forbidden-token scan over the final article: 0 hits for `16 september`, `in september`, `touchdown`, `P0`, `science-zone`, `hazard`, `traverse`, `AF-0/1`, `ramp`, `commission`, `egress`, `panorama`, `POV`, `docs/timeline`, real facility names, coordinate strings. No 008-011 content, no landed rover, no first image, no success claim, no entry outcome; `ellipse` appears only in the source-pack-sanctioned process sentence ("a landing ellipse is named by the team"), with no geometry/numbers/layout. Reused plate is a pre-landing cruise-stage depiction; the gated `landing-confirmation` plate is not referenced or renamed.                                                                                               |
| SEO / metadata quality                | PASS                       | Search intent honest and descriptive (answers "what happens before the Mars landing" without promising success/first image/egress/drives/date); title 39 chars; summary 152 chars with phase + next-update promise; scannable H2 outline; internal links reinforce the record chain; alt text carries the illustrative disclosure.                                                                                                                                                                                                                                                                                                                                                                                                           |

## Editorial corrections applied at this gate (all recorded, none silent)

1. **Added `status: Approach and arrival preparation underway`** — the writer's
   draft omitted the schema-required `status` key (`src/content.config.ts:18`),
   which would have failed the build. This is metadata, not a factual meaning
   change; the value restates the article's own record ("the programme has
   reached the approach and arrival-preparation phase") following the milestone-
   style status pattern of 001/004/005/006/008. Corrected as purely editorial
   because the schema leaves no second valid state and the value is the record's
   own framing (not new canon).
2. **Added `simulatedDate: 2031-09-07`** — from `t_fb4e97da` (human grant), as
   the gate card body directs.
3. **Copy fix "name-released in the project announcement" → "named in the
   project announcement"** — plain-language voice, no factual change.
4. **Copy fix "across the deepening link" → "across the deep-space link"** —
   released vocabulary (006:44 "from across the deep-space link"), technical
   precision (the link shortens as the craft approaches; "deepening" was loose),
   no factual change.

These are recorded so the writer's artifact repair is not silent, and the
report hash change (`c4a36ba…` → `ea35a507…`) is fully account for above.

## Release decision

**RELEASE — approved (this is the recorded release decision).**

- **Exact public scope:** publish `website/news/007-landing-preparation.mdx`
  at route `/news/007-landing-preparation/`, `publication: draft → published`,
  carrying `simulatedDate: 2031-09-07` (human-assigned via `t_fb4e97da`),
  `category: Landing readiness 07`, `order: 7`, `media: cruise-final-approach`
  (reused plate `docs/mission/cruise-final-approach.png`, SHA-256
  `4989b707…`), and the gate-applied `status` value. The simulated record date
  is stated on the page under the in-fiction label "Simulated record date" and
  is never presented as a real publication date.
- **Evidence:** continuity verdict `.agents/work/continuity/007-landing-preparation.md`
  (`continuity clear`); this review table (all rows PASS); article SHA-256 at
  the flip `ea35a507634b20c1e9f07ce48907bba5386c3f84c56729c2793c4734b5bf5a8c`;
  live fail-closed probe (route 404 on the live origin, index clean);
  `scanSourceForGatedReferences()` = `[]`; source pack C1–C14 and brief hold.
- **Record date applied:** `simulatedDate: 2031-09-07`, canon source
  `t_fb4e97da` (human story owner, clarify 2026-09-19), milestone-line column
  "human-assigned via t_fb4e97da".
- **Conditions attached:** (1) the flip (`publication: published`) and the
  commit/push are the deploy card `t_34d79c6f`'s scope under the standing
  2026-09-17 instruction; (2) the built page must state the record date under
  the in-fiction label; (3) no later-step content enters through the deploy
  change (the article hash above is the approved revision).
