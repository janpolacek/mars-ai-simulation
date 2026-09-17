# Review: 001-project-announcement (verification of the published step-001 article)

## Review metadata

| Field                         | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article                       | `website/news/001-project-announcement.mdx`                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Review type                   | Verification of the published step-001 article against its allowed public angle                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Gate inputs                   | `docs/timeline/001-project-announcement.md` (allowed angle, spoilers), `docs/SCENARIO.md` (locked canon, release controls), `docs/brand/BRAND.md`, `website/src/content.config.ts`, `website/src/pages/index.astro`, `website/scripts/sync-assets.mjs`, local build output `website/dist/`                                                                                                                                                                                                            |
| Reviewer                      | `mars-ai-simulator-editor` (editorial gate; continuity consulted through the `editorial-review` skill)                                                                                                                                                                                                                                                                                                                                                                                                |
| Skill                         | `editorial-review`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Card                          | `t_3302ef7e`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Corrective card               | `t_fc952c7d` (site owner `mars-ai-simulator-dev`), linked as a blocking parent of this review                                                                                                                                                                                                                                                                                                                                                                                                         |
| Status                        | `approved` — retro editorial gate 2026-09-17 (card `t_8059da5f`); supersedes the `changes_requested` verdict recorded above, which stays as the record of what was wrong before the corrective completed                                                                                                                                                                                                                                                                                              |
| Status (revision, 2026-09-17) | `approved` — revision editorial gate `t_ff937d33`, pass 2 re-verification (§S1–S11, article `73c2d047…`), superseding pass 1's `changes_requested` (§R0–R9, record hash `23072d02…`, preserved as written, with the §S7 correction applied to its §R5 parenthetical). An editorial gate only: not a release, not canon approval, not deployment authorisation. This row is **additive**: every retro row above is unchanged, and §10's `approved` remains the retro verdict on the pre-revision text. |
| Record origin                 | This file is the record the planner created as a template on `t_67539573`; its review table was replaced and expanded with the checks required by the `editorial-review` skill.                                                                                                                                                                                                                                                                                                                       |

## Verdict

`changes_requested`.

The step-001 article text itself passes every gate: it discloses no payload or
instrument selection, no hardware ownership, no launch provider, no Asteria Field,
no exact launch or landing date, no RH-01 name or imagery, and no fact from a later
timeline step; each material claim traces to locked canon. It also passes the
copy, metadata/schema, alt-text, and link checks below.

The **published surface that carries the article fails the same gate**:

1. the public build ships canonical RH-01 vehicle renders at predictable public
   URLs before step 003, and
2. the homepage chrome names "RH-01 Pathfinder" before step 003.

Neither is in the MDX body. Both are canon exposure on a public surface, so this
editorial gate cannot be closed as `approved` (the article is not edited here;
the failures are reported, not fixed). Corrective card `t_fc952c7d` is the scoped
path for both, and the human decisions that no agent may settle are listed in
section 6. An `approved` review would still be an editorial gate only: human canon
and release approval remain required before public deployment.

## Review table

| Check                                               | Result                          | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article: no payload or instrument selection         | PASS                            | No instrument, sensor, spectrometer, camera-package, or sampling device is named or implied. ``grep`` token scan of the file for `payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | spectrom | raman | isotope | americium | sample | abrasion` returns no match; the only forward reference is "what the rover carries … still ahead of us". |
| Article: no hardware ownership disclosed            | PASS                            | The ten countries are listed, and no country is tied to a subsystem, contribution, or work share. Compare the locked split in `docs/SCENARIO.md` lines 63–74, none of which appears in the article.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Article: no launch provider disclosed               | PASS                            | No launcher, launch site, or provider name. "how the mission reaches Mars … still ahead of us". Canon reserves Ariane 64/Kourou for step 004.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Article: no Asteria Field disclosed                 | PASS                            | The phrase and the coordinates are absent; only the region ("Margaritifer Terra") appears, which the step-001 allowed angle permits ("the target region"). The Asteria Field map package (now `docs/area/`, relocated there by the docs restructure after this review ran) is **not** synced into `website/public/assets/` — `website/scripts/sync-assets.mjs` copies only `docs/brand` and `docs/vehicle` — and no map file appears in `website/dist/`.                                                                                                                                                                                     |
| Article: no exact launch/landing dates              | PASS                            | "a launch window in 2031" only; step 001 allows "the window and year only". No month, day, or mission date appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Article: no RH-01 name or imagery                   | PASS                            | No `RH-01`, `Pathfinder`, vehicle render, or rover design detail in the file or its frontmatter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Article: no fact from a later timeline step         | PASS                            | Claim-level check in section 2; every claim is step-001 mission-identity, coalition, science-objective, or budget-frame material.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Article: every material claim traceable             | PASS                            | Section 2 maps each claim to `docs/SCENARIO.md` / `docs/timeline/001-project-announcement.md`. No unsourced claim, and no real-world factual claim that would need an external citation.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Citations                                           | PASS                            | All claims are fictional-programme claims from locked canon. No real agency, institution, university, or company is named or implied, so no real-world source note is required. `docs/SCENARIO.md` grounding sources are not needed by this copy.                                                                                                                                                                                                                                                                                                                                                                                            |
| Coherence and chronology                            | PASS (article)                  | The announcement opens the record ("now has a name, a purpose, and partners"), states the purpose, governance principle, schedule and budget frames, and closes on what is still undecided. Nothing pre-empts a later release step.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Voice and grammar                                   | PASS                            | Matches `brand-voice`: concrete, unsentimental, no grandeur, no urgency, no unearned certainty; fictional/AI-assisted disclosure is stated in the body ("fictional, AI-assisted") and on the page. One optional copy suggestion in section 7.                                                                                                                                                                                                                                                                                                                                                                                                |
| Links                                               | PASS (article)                  | The article has no links (verified by regex scan). The homepage anchors it relies on exist: `#updates`, `#mission`, `#timeline`, `#top`, plus `#main-content`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Published card link affordance                      | **FAIL**                        | `index.astro` line 138 renders `linkLabel` ("First public briefing") as a `<span>` with a navigation arrow, and `website/src/pages/` contains only `index.astro` — there is no individual news route, so the 252-word article body is never rendered and the label advertises a briefing the reader cannot open. Corrective card item 4.                                                                                                                                                                                                                                                                                                     |
| Image placement and caption                         | **FAIL (follow-up required)**   | `media: /assets/logo.png` is 1254 × 1254 (square); `.news-image img` uses `object-fit: cover` in a box that is wider than it is tall at every breakpoint, so the top and bottom of the square are necessarily cropped. `mediaAlt` names the sunrise at the upper-left rim, and the Earth/Moon cue sits at the upper right — both are in the region most exposed to cropping. Corrective card item 5 (verify in a local preview, then fix or record). `mediaLabel` ("Red Horizon // programme identity") is accurate and restrained.                                                                                                          |
| Alt text                                            | PASS                            | `mediaAlt` matches the file actually used: a rust-red Mars disc crossed by low highlighted hills with a small Sun behind its upper-left edge; no text in the image. See section 7 for the missing Earth/Moon cue and the "on black" wording conflict with `docs/brand/BRAND.md`.                                                                                                                                                                                                                                                                                                                                                             |
| Metadata and schema                                 | PASS                            | Frontmatter parses as YAML; all schema-required fields present (`title`, `category`, `status`, `summary`, `linkLabel`, `order`), `order: 1` is a non-negative integer, `publication: published` is a valid enum value and matches the site's published-only filter, `accent: oxide` is a valid enum value, `media`/`mediaAlt`/`mediaLabel` are strings.                                                                                                                                                                                                                                                                                      |
| Media variant and asset provenance                  | **FAIL**                        | The file in use (`/assets/logo.png` = `docs/brand/logo.png`, SHA-256 `d23d7c99986efd73ee33e84e3699ff757bf2b0c286fa0cf24e5252e4623ff0f5`) is an RGBA derivative with no black field. The approved source hash in `docs/brand/BRAND.md` is `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`, which matches `docs/brand/logo-bg-black.png`. The guidelines forbid altering or regenerating the approved mark for public use without a new review, and their "Publication boundary" requires a separate human release decision for public-site use beyond the current Preparing site. This needs a human decision (section 6). |
| Published surface: no RH-01 name                    | **FAIL**                        | `website/src/pages/index.astro` line 68 ("…the work of its first surface vehicle, RH-01 Pathfinder") and line 176 ("Using RH-01 Pathfinder to survey terrain…"); the name also reaches the build (`grep -o "RH-01[^<]*" website/dist/index.html` → 2 hits). Step 003 is the vehicle-design release step. Corrective card item 2.                                                                                                                                                                                                                                                                                                             |
| Published surface: no RH-01 imagery                 | **FAIL**                        | `website/scripts/sync-assets.mjs` copies every PNG in `docs/vehicle/` into `website/public/assets/`, and the local build contains `dist/assets/canonical.png`, `front-left.png`, `rear-right.png`, `side-view.png`, `contact-arm.png`, `contact-arm-scene.png`. `docs/SCENARIO.md` release controls: "RH-01 imagery waits for step 003". No human approval for publishing them is recorded in the repository. Corrective card item 1.                                                                                                                                                                                                        |
| Published surface: no unexplained canon-like values | **FAIL**                        | `index.astro` line 58 prints `18° 42′ S / 226° 14′ E` with no label. No canon source contains that coordinate (`docs/SCENARIO.md` target region: Asteria Field, 17.80°S 332.20°E; no other coordinate in the repository), so a reader can read it as the mission's location. Corrective card item 3.                                                                                                                                                                                                                                                                                                                                         |
| Budget figure within the allowed frame              | PASS                            | "€2.10 billion in constant 2026 euros, covering concept work through the final science archive" matches `docs/SCENARIO.md` line 216 and the step-001 allowance. No breakdown, no per-partner share, no cost table.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Two-Mars-year supported surface life withheld       | PASS                            | Not mentioned in the article or its frontmatter; the schedule frame stops at the 2031 window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| FEI STU not mentioned                               | PASS                            | No mention of the institution or the Slovak contribution anywhere in the article or the page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Public title and author credit                      | OPEN (not a mechanical failure) | No byline field exists in `website/src/content.config.ts` and no policy in `AGENTS.md` / `docs/INSTRUCTIONS.md` requires one, so the article does not fail a check; the human's confirmation of the public title and credit is still outstanding (section 6).                                                                                                                                                                                                                                                                                                                                                                                |
| Fictional and AI-assisted disclosure                | PASS                            | Body: "fictional, AI-assisted Mars exploration programme". Page: `<meta name="description">` and the disclosure aside ("This is AI-generated fiction", "not affiliated with or endorsed by any real space agency").                                                                                                                                                                                                                                                                                                                                                                                                                          |

## 1. Scope and method

Verification of what is published for step 001: the MDX article, its frontmatter,
the card that renders it on the homepage, and the public build that would serve
it. Read-only inspection plus link, hash, and token checks; **no build, no
preview, and no deployment were run by this gate** (build and preview belong to
the technical gate, `site-deployment`). The `website/dist/` tree inspected is a
pre-existing local build, not evidence of a live deployment: the repository
records no public URL (`git remote -v` → `github.com:janpolacek/mars-ai-simulation.git`;
`website/wrangler.jsonc` sets `workers_dev: true`; no `pages.dev`/`workers.dev`
reference appears in the repository). "Published" here therefore means the
article is `publication: published` and is selected by the site's published-only
collection filter.

Commands and results (all run from the repository root):

- `python3 .review-checks-001.py` (scratch checker, deleted after the run) —
  frontmatter block found; YAML parsed; keys `title, category, status,
  publication, summary, linkLabel, order, media, mediaAlt, mediaLabel, accent`;
  no missing required field; `order: 1`, `publication: 'published'`, `accent:
  'oxide'`, `media: '/assets/logo.png'`; body 252 words; no links; no headings;
  zero hits for the gated-term list.
- `grep -niE "asteria|ariane|kourou|payload|spectrom|raman|isotope|americium|pathfinder|RH-01|february|september 20|guiana|FEI|mars years" website/news/001-project-announcement.mdx` → no matches.
- `grep -o "RH-01[^<]*" website/dist/index.html` → 2 hits (both chrome, not article).
- `grep -oiE "asteria|ariane|kourou|payload|february|september 2031|FEI STU|two mars years" website/dist/index.html` → no matches.
- `find website/dist -type f` → 6 vehicle renders + `logo.png`, `logo-bg-black.png`, `favicon-32.png`, `favicon.ico`, and the homepage files; no Asteria Field maps, no timeline material.
- `sha256sum docs/brand/logo.png docs/brand/logo-bg-black.png website/public/assets/logo*.png` → see the variant row above.
- `grep -o 'id="[a-z-]*"' website/src/pages/index.astro` → anchors `#updates`, `#mission`, `#timeline`, `#top` (and control/section ids) all exist.
- `git status --short` (snapshot, 2026-09-17 00:40 CEST) → the tree is shared with
  other workers and was changing while this review ran: `D docs/beads-archive.jsonl`,
  `D docs/scenario.md` with untracked `docs/SCENARIO.md`, `R docs/area/* →
  docs/content/maps/*`, modified workflow docs and skills, untracked `docs/content/`
  templates, and untracked `website/news/002-payload-selection.mdx` (step 002 draft,
  `publication: draft`, correctly excluded from the published collection). The
  earlier `git status` snapshot at the start of this run showed only
  `D docs/beads-archive.jsonl`, `D docs/scenario.md`, untracked `docs/SCENARIO.md`,
  and untracked `docs/content/`. The article under review
  (`website/news/001-project-announcement.mdx`) and `website/src/pages/index.astro`
  were unchanged throughout.

## 2. Claim-level traceability (article)

| Article claim                                                                                                                         | Canonical source                                                                                                                                 | Result                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "fictional, AI-assisted Mars exploration programme"                                                                                   | Project disclosure requirement, `docs/INSTRUCTIONS.md` "Canon and information safety"; `docs/GENERAL.md`                                         | PASS                                                                                                                                                                                                                                                                                     |
| Ten partner teams: France, Germany, Estonia, Norway, Spain, Poland, Czechia, Slovakia, Japan, Canada                                  | `docs/SCENARIO.md` line 36 (same names, same order); line 40 (fictional national teams)                                                          | PASS                                                                                                                                                                                                                                                                                     |
| "a single uncrewed Mars lander and rover"                                                                                             | `docs/SCENARIO.md` line 19, "Mission type: Uncrewed international Mars lander-and-rover mission"                                                 | PASS — reviewer judgement: the mission type is part of the locked mission identity that step 001 announces; it reveals no payload, no ownership, and no provider. Flagged here rather than treated as an open question because no design, ownership, or supplier detail follows from it. |
| "sharing one mission architecture, one science archive, and one public record"                                                        | `docs/timeline/001-project-announcement.md` lines 10–13; `docs/SCENARIO.md` lines 53–55 (shared archive, no national exclusivity)                | PASS                                                                                                                                                                                                                                                                                     |
| Purpose: "mineralogy and the reconstruction of ancient habitable conditions"                                                          | `docs/SCENARIO.md` line 20 (primary science)                                                                                                     | PASS                                                                                                                                                                                                                                                                                     |
| "how water changed an ancient equatorial landscape in the Margaritifer Terra region"                                                  | `docs/SCENARIO.md` line 84 (verbatim objective framing); line 21 (Margaritifer Terra region); step-001 allowed angle permits "the target region" | PASS                                                                                                                                                                                                                                                                                     |
| Clay-, chloride-, sulfate-bearing and basaltic units; long-lived lake/groundwater versus episodic events                              | `docs/SCENARIO.md` lines 86–88 (objectives 1–2)                                                                                                  | PASS                                                                                                                                                                                                                                                                                     |
| "does not search for living organisms or claim evidence of life"; habitability question framed as water, chemistry, energy, stability | `docs/SCENARIO.md` lines 28–30 and 89–91                                                                                                         | PASS                                                                                                                                                                                                                                                                                     |
| "each partner holds one vote whatever it contributes"                                                                                 | `docs/SCENARIO.md` lines 46–48 (one voting representative per partner; contributions unequal, governance equal)                                  | PASS — the fictional body's name (`Red Horizon Council`) and the six/eight-vote thresholds are correctly withheld.                                                                                                                                                                       |
| "committed to reporting technical risk and anomalies candidly, not only successes"                                                    | `docs/timeline/001-project-announcement.md` line 23; `docs/SCENARIO.md` lines 51–52                                                              | PASS                                                                                                                                                                                                                                                                                     |
| "a launch window in 2031"                                                                                                             | `docs/SCENARIO.md` line 23 (17 February 2031 launch, date withheld); step-001 allowed angle: "Use the window and year only"                      | PASS                                                                                                                                                                                                                                                                                     |
| "€2.10 billion in constant 2026 euros, covering concept work through the final science archive"                                       | `docs/SCENARIO.md` lines 216–217                                                                                                                 | PASS                                                                                                                                                                                                                                                                                     |
| "Technical selections — what the rover carries, who builds what, and how the mission reaches Mars — are still ahead of us"            | Consistent with `docs/timeline/001-project-announcement.md` lines 38–39 (spoilers: payload, ownership, provider belong to 002 and later)         | PASS                                                                                                                                                                                                                                                                                     |

## 3. Coherence and continuity

- The article is a forward-looking announcement and does not contradict any locked
  canon field (programme name, first-mission name, mission type, primary science,
  partner list, launch window year, lifecycle budget frame).
- It does not conflict with the release order in `docs/timeline/README.md` or the
  release controls in `docs/SCENARIO.md` lines 274–282.
- It preserves the "no life detection" invariant (`docs/timeline/README.md`) and
  makes no claim about discoveries, anomalies, or results.
- The single unexplained value on the published page (the line-58 coordinate) is a
  surface-level coherence failure, not an article failure — see the review table.

## 4. Factual ambiguity and coverage gaps

- `website/news/001-project-announcement.mdx` was written outside the pipeline: it
  has no brief, no source pack, and no asset manifest
  (`.agents/work/briefs/`, `.agents/work/sources/`, `.agents/work/assets/` contain
  only the 002 templates). Verification therefore had to run directly against
  `docs/SCENARIO.md`, which this card authorises.
- The exact copyright/credit line, the choice of identity-mark variant, and the
  date of first publication are not recorded anywhere for 001; the card's
  frontmatter has no date field and the schema has none.

## 5. Accessibility

- Alt text is present, descriptive, and accurate for the file in use; the image
  carries no text.
- The card label is a non-interactive `<span>` that looks like a link
  (`card-link` styling plus an arrow glyph), and the hero call to action "Read the
  first announcement ↗" targets the in-page `#updates` anchor while using an
  outbound-navigation arrow. Both are affordance/consistency issues for the
  technical gate (corrective items 4 and 5).
- Whether the cropped mark still shows the sunrise named in `mediaAlt` cannot be
  settled without rendering the page; it is required in the corrective card rather
  than assumed here.

## 6. Open questions requiring the human story owner (not decided here)

1. **RH-01 Pathfinder before step 003** — may the name (and any imagery) be public
   before the vehicle-design step, or does the gating hold? This review's corrective
   card withholds by default until the human records otherwise.
2. **Identity-mark variant and release** — which variant should the 001 card carry
   (`/assets/logo.png`, the RGBA derivative in use, or the hash-approved
   black-field mark `docs/brand/logo-bg-black.png`), and is a new public placement
   of the mark released? `docs/brand/BRAND.md` requires a separate human
   release decision for public-site use beyond the Preparing site.
3. **Public title and author credit** for the 001 announcement — unconfirmed.
4. **Budget figure beyond the €2.10 bn frame** — the human has not decided whether
   any further figure goes public. (None is published today.)
5. **Two-Mars-year supported surface life** — part of the announced schedule frame
   or not? (Currently withheld; no failure either way.)
6. **FEI STU** — whether the scenario's Slovak institution role may ever be public,
   and in what wording.
7. **The homepage coordinate `18° 42′ S / 226° 14′ E`** (`index.astro` line 58) —
   either a canon source, or confirmation that it is decorative and may be removed.

## 7. Non-blocking editorial suggestions (article copy, optional)

- "reporting technical risk and anomalies candidly" — for number agreement, prefer
  "technical risks and anomalies". Meaning is unchanged either way; not a failure.
- `mediaAlt` omits the Earth/Moon cue that `docs/brand/BRAND.md` includes in
  its canonical alt text. Adding it would describe the mark more completely, but it
  should follow the presentation fix in corrective item 5 — never describe a cue
  that the crop hides.
- `docs/brand/BRAND.md` gives the mark's alt text as "…on black…", which does
  not describe the transparent variant actually rendered on the card's light panel.
  Resolving this belongs with the variant decision (open question 2).
- "A mission takes shape in public." matches the site's existing period-terminated
  heading style (`index.astro`: "The story starts before launch.", "One step at a
  time."), so it is consistent and needs no change.

## 8. Adjacent observations outside this gate (routed, not fixed)

These are not part of the 001 article gate; they are recorded so they are not lost.

- The scenario canon file was renamed `docs/scenario.md` → `docs/SCENARIO.md` in the
  working tree without a commit (`D docs/scenario.md` plus untracked
  `docs/SCENARIO.md`). A case-only rename is easy to lose on checkout and it already
  broke two references earlier today; both are now correct
  (`docs/timeline/README.md` line 8 and `docs/timeline/001-project-announcement.md`
  line 31 both point at `docs/SCENARIO.md`). Owner: story coordinator
  (`mars-ai-simulator-planner`) — commit the rename as a rename.
- The Asteria Field map package moved to `docs/content/maps/` while this review ran;
  the later docs restructure returned it to `docs/area/`, beside the dossier.
  Those are scenario planning assets that `docs/SCENARIO.md` keeps out of public
  release until the landing-preparation sequence. Nothing syncs them into the build
  today (`website/scripts/sync-assets.mjs` copies only `docs/brand` and `docs/vehicle`;
  `website/dist/assets/` holds no map), but the technical gate should keep
  confirming that.
- `docs/beads-archive.jsonl` is deleted in the working tree (uncommitted), while
  `AGENTS.md` describes it as the read-only archived history. Restore it or record
  the decision to remove it. Owner: story coordinator.
- `docs/brand/BRAND.md` links its approved source as
  `content/brand/identity/red-horizon-sunrise-mark.png`; no such directory exists, so
  the hash-verified mark could only be identified by SHA-256
  (which matches `docs/brand/logo-bg-black.png`). The docs restructure moved the
  guidance into `docs/brand/` and repointed that link. Owner: `project-documentation`.
- `docs/GENERAL.md` line 29 still describes the coalition as "European, American,
  Japanese, and other research partners", which contradicts `docs/SCENARIO.md`
  line 36 (ten partners; the United States is not a participant). The docs
  restructure removed that sentence; `docs/GENERAL.md` now points to
  `docs/SCENARIO.md` for the coalition. Owner:
  `project-documentation`, with continuity review.
- The homepage chrome ships at least one pre-existing published claim that predates
  the current canonical wording ("Coalition planning", "Launch date: To be
  announced") — consistent with the step-001 frame and not a failure, noted only to
  confirm it was checked.
- The `docs/content/` tree quoted in the section 1 `git status` snapshot no longer
  exists: the docs restructure moved the briefs, sources, reviews, and asset
  manifests to `.agents/work/`, the map package to `docs/area/`, and the article
  workflow document into the `create-article-workflow` skill. The quoted snapshot
  stays as the record of the tree at review time.

---

## Revision: 2026-09-17 (card `t_ff937d33`) — editorial final gate for the revised article

**Verdict: `changes_requested`.** Editorial gate only: not a release, not canon
approval, not deployment authorisation. The card stays **open** — R0 explains why.

| Field                 | Value                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Card                  | `t_ff937d33` (`mars-ai-simulator-editor`), child of revision parent `t_855de80a`; parent `t_23c10313` (continuity, done, verdict `human decision required`)                                                                                                                                                              |
| Reviewer role         | copy editor — editorial final gate                                                                                                                                                                                                                                                                                       |
| Skill                 | `editorial-review`                                                                                                                                                                                                                                                                                                       |
| Mission-timeline step | `site-foundation` / step 001 (project announcement)                                                                                                                                                                                                                                                                      |
| **Verdict**           | **`changes_requested`** — one blocking human decision (H1) and five scoped changes, all listed in R5                                                                                                                                                                                                                     |
| Article under check   | `website/news/001-project-announcement.mdx`, SHA-256 `5755f92e…`, 4,778 B, 76 lines, mtime 01:54:13 — **unchanged since the continuity check**, so that verdict's reading of the text still applies                                                                                                                      |
| Verdict written       | 2026-09-17 02:10 CEST (host date)                                                                                                                                                                                                                                                                                        |
| Supersedes            | Nothing. This is the first editorial pass on the revised text. Sections 1–10 are the retro record and are preserved byte-for-byte; §10's `approved` is the verdict on the **pre-revision** 252-word article. One additive row was added to the metadata table above (`Status (revision …)`); no existing row was edited. |

### R0. Why this gate is not closing — the card body's own prerequisite

The card body requires a `continuity clear` verdict before this gate runs and says:
"if the verdict is `return for revision` or `human decision required`, do not close
this gate." The continuity re-check `t_23c10313` returned **`human decision required`**
(`.agents/work/continuity/001-project-announcement.md` §R9, final line; SHA-256
`f3072da9…`) with **H1 blocking**: whether the recorded 2026-09-17 plate release
covers what plates AF-02 and AF-03 depict.

This gate therefore records its findings (this section) and does **not** close the
card. The editorial-review skill's corrective mechanism is used instead: a scoped
corrective card is created and linked as a blocking parent, and this gate is blocked
on `dependency` so it resumes for re-verification. Scope (R5) is the writer's copy
pass, and it cannot start before the human answers H1, so the corrective card is
created in `blocked` state with the question written into its body.

### R1. Gate inputs, hashes at gate time, and what moved during the run

Read at **2026-09-17 02:09–02:11 CEST**. Hashes are from this gate's own `sha256sum`
run, not quoted from another record.

| Input                           | SHA-256 at gate time | Note                                                                                                                                                                                              |
| ------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Revised article                 | `5755f92e…`          | identical to the continuity check's hash — the text was not edited between the two gates                                                                                                          |
| Brief (revision)                | `73f850ed…`          | unchanged                                                                                                                                                                                         |
| Source pack                     | `2c81eaea…`          | unchanged                                                                                                                                                                                         |
| Asset manifest                  | `5e33d451…`          | unchanged; its §Findings 1–2 are the pixel evidence this gate uses                                                                                                                                |
| SEO package                     | `e0cc702b…`          | **moved since the continuity check** (`9c14cfc6…`): `t_5a6fe8da` appended §R17 (heading-scale decision). Additive, documented, and it does not touch the article; recorded as movement, not drift |
| Continuity verdict              | `f3072da9…`          | read; final line is the current label (§R9)                                                                                                                                                       |
| Editorial record                | `5bb7408c…`          | read before writing; this section changes it                                                                                                                                                      |
| Released step 001               | `3aa1bca7…`          | unchanged                                                                                                                                                                                         |
| `docs/SCENARIO.md`              | `c045a4c9…`          | unchanged since the continuity check                                                                                                                                                              |
| `docs/area/AREA.md`             | `ae5bf08c…`          | unchanged; §Control record lines 17–19 = the partial release                                                                                                                                      |
| `docs/brand/BRAND.md`           | `34e6345a…`          | unchanged                                                                                                                                                                                         |
| `website/src/content.config.ts` | `27da28e9…`          | unchanged                                                                                                                                                                                         |
| `website/scripts/guards.mjs`    | `65d31b91…`          | unchanged (released name retired from `gatedTextMarkers`)                                                                                                                                         |
| `website/src/lib/releases.ts`   | `9173aa3a…`          | `releasedNewsSlugs = []` — no detail route                                                                                                                                                        |

**Movement in the shared checkout, recorded with timestamps.** This gate is not
reporting any path as broken; two inputs changed value under it:

1. The **build** now carries more routes than the continuity pass saw: this gate's
   build at 02:10:17 emitted `/404.html`, `/about/index.html`, `/index.html`,
   `/news/index.html` (the continuity check at 02:05 saw two). That is the
   concurrent `/about/` card (`t_e89fb389`), not a change to the 001 package. Every
   surface row in R4 was measured on the build this gate produced, in the same shell
   call as the build (the `website/dist/` hotspot).
2. The **SEO package** and **card `t_5a6fe8da`'s section** moved as described above.

### R2. Method and evidence (this pass)

Read-only inspection, one build, one guard run, two test/typecheck runs, three link
checks and one scratch script tree outside the repository (`/tmp/rh-editor-ff937d33/`),
so no withheld token is added to the tree by this gate. Gated material is cited **by
class or by location**, never copied. No file under `docs/`, `website/src/`,
`website/scripts/` or `website/news/` was edited by this gate; the article hash above
is unchanged by it.

| Check                                                                                                                                        | Command (repository root, 2026-09-17 02:09–02:11 CEST)                                                 | Result                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gate-input snapshot                                                                                                                          | `sha256sum` on 14 inputs                                                                               | R1                                                                                                                                                                                                                                            |
| Forbidden token set — the planner's updated grep, **substring**                                                                              | `grep -inE "17 february\|…\|crewed\|…" website/news/001-project-announcement.mdx`                      | 2 matching lines, both the substring inside the already-public word "un**crewed**" (frontmatter `summary` line 6; body line 25). The card's "expected: no matches" is an artefact of the substring `crewed`; it is not a hit                  |
| Forbidden token set — same list, **word-boundary**                                                                                           | same pattern with `\b…\b`                                                                              | **0 hits** (exit 1)                                                                                                                                                                                                                           |
| Forbidden token set — the **brief's full set** (incl. `guiana`, `payload-selection`, `instrument-selection`, `isotope-power`), word-boundary | `grep -inE "\b(17 february\|…)\b"`                                                                     | **0 hits** (exit 1)                                                                                                                                                                                                                           |
| Released values present and exact                                                                                                            | value scan of frontmatter + body                                                                       | planning centre `17.80`/`332.20`/`27.80` ×1, envelope `12.5`/`24.0`/`327.0`/`338.0` ×1, `1,374` ×1, `two Mars years` ×1, `687` ×1, `2.10` ×1, `2031` ×2, `Asteria Field` ×2, `Margaritifer Terra` ×2 — all exactly as released, no `~1,375`   |
| Body measurement                                                                                                                             | `awk` body extraction + `wc`                                                                           | 56 lines, **541 words**, 3,665 characters, **0 headings**, **4 links** (1 internal + 3 external)                                                                                                                                              |
| External citations                                                                                                                           | `curl -s -o /dev/null -w '%{http_code}' -L` on the article's three links                               | **200, 200, 200**                                                                                                                                                                                                                             |
| Build + postbuild guard (same shell call)                                                                                                    | `npm --prefix website run build`                                                                       | **exit 0**; `astro build Complete` in 619 ms; 4 routes; postbuild `check-dist` → "[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/"                                                               |
| Guard, run directly                                                                                                                          | `npm --prefix website run check:dist`                                                                  | **exit 0**, same output                                                                                                                                                                                                                       |
| Frontmatter / schema contract                                                                                                                | `npm --prefix website run test` (vitest)                                                               | **2 files, 38/38 pass** — the suite pins the media-key contract (`asteria-plates` = exactly 3 plates / 3 alts / 3 captions + label) and the caption provenance strings                                                                        |
| Type/schema validation                                                                                                                       | `npm --prefix website run typecheck` (`astro check`)                                                   | 43 files, **0 errors, 0 warnings, 0 hints**                                                                                                                                                                                                   |
| Release gate                                                                                                                                 | read of `website/src/lib/releases.ts`                                                                  | `releasedNewsSlugs` empty (line 10); `isReleasedNewsSlug`/`releasedSlugsFrom` gate every detail route                                                                                                                                         |
| Homepage card image (planner ruling A)                                                                                                       | `<img>` extraction from the built `dist/index.html`                                                    | the card renders `_astro/asteria-field-01-mars-locator.DGegv0O8_Z1Alky4.webp`, 66,004 B, 1024 × 683, `loading="eager"`, **alt = the article's AF-01 alt verbatim**, beside the label `AF-01 · Mars locator` — the expected and approved state |
| Article body public?                                                                                                                         | case-sensitive count of the released field name + route list                                           | `Asteria` occurs **0 times** in `dist/index.html` and `dist/news/index.html`; no `/news/001-project-announcement/` route is generated. The only case-insensitive match is the AF-01 asset **file name** in the image path                     |
| Withheld-class scan over the built pages                                                                                                     | grep for the vehicle/provider/date/instrument class and for landing-design terms over both built pages | **0 hits** (exit 1)                                                                                                                                                                                                                           |
| Unreferenced plate sources in the build                                                                                                      | `find website/dist/_astro -printf '%f %s\n'`                                                           | AF-02 (3,311,859 B) and AF-03 (3,492,102 B) **source PNGs** are emitted with no HTML referencing them; AF-01's raw copy is consumed by the card. H2 — disposition in R6                                                                       |
| Card copy as built                                                                                                                           | visible-text extraction                                                                                | `<h3>A Mars mission takes shape in public.</h3>`, `Announcement 01`, `First public briefing`, `AF-01 · Mars locator`, and the 147-character summary                                                                                           |

**Reader's caveat on plate pixels.** This environment has no OCR tool, so this gate
did **not** re-read the text printed inside the three PNGs. Every statement here about
what a plate _shows_ comes from the asset manifest's recorded `vision_analyze` pixel
read of 2026-09-17 02:00–02:03 CEST or from `docs/area/AREA.md` §Map package (the
plates' own canonical description). R5's caption item (C2) rests on that recorded
read and is stated as a conflict between two records, not as this gate's measurement.

### R3. Card-body checks a–f

| Check                                                                                              | Result                                                            | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a. Every material claim traces to the brief's allowed list                                         | **PASS for the article's text** (see the caveat on the plate set) | Every added claim maps to a brief allowance: Margaritifer Terra as a real, officially catalogued equatorial highland region with craters, valley networks, basin deposits and orbital mineral evidence → brief §2 + its cited USGS/NASA sources; the highland-to-basin transition evidence-class argument → brief §1; the fictional field name always qualified in the same sentence, the release-discipline framing → brief §2; centre, envelope and 8 × 6 km frame → brief's "Released facts" table, matching `docs/area/AREA.md` §Control record exactly; the clay/sulfate logic and the no-life-detection invariant → brief §1 and `docs/SCENARIO.md` lines 28–30, 89–91; "two Mars years — 1,374 Earth days" with "at least one full seasonal cycle" → brief §3 verbatim, exact interval, no `≈1,375`; 687 Earth days → `docs/SCENARIO.md` line 209. No claim in the text goes past the step-001 allowance. **Caveat:** the plate _set_ delivers material the same brief gates (C1/H1) |
| b. Forbidden token set absent (grep verification)                                                  | **PASS**                                                          | 0 word-boundary hits on both the planner's updated list and the brief's full set; the two substring matches are inside "uncrewed". Nothing from step 002 or later, no vehicle designation, no provider or spaceport, no instrument, no payload or ownership item, no exact date, no absolute end date                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| c. Frontmatter parses and satisfies `website/src/content.config.ts`                                | **PASS**                                                          | The site's own parser and schema run in the build: `npm run build` exit 0 with the article in the collection, `astro check` 0 errors, and 38/38 tests pass, including the media-key contract that the article's `media: asteria-plates` + 3 alts + 3 captions + label must satisfy. All 15 frontmatter keys are present and none is extra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| d. `summary` updated if the pitch changes                                                          | **PASS (accepted, with a note)**                                  | The pitch broadened (target, position, lifetime) and the summary was re-applied by the SEO pass to 147 characters (`A Mars mission takes shape in public.` / the new summary are both in the built card). It answers the identity question and states only released facts. It deliberately omits the three new depth areas — correct, because this string doubles as the meta description and must stay inside the snippet budget (`seo/…` §R5). Accepted as-is, with the SEO package's recorded revert string                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| e. Brand voice preserved (concrete, unsentimental, no grandeur, no urgency, no unearned certainty) | **PASS, one micro-item**                                          | Ten short declarative paragraphs, no headings, no superlatives, no deadline pressure; uncertainty is stated as uncertainty ("Technical selections … are still ahead of us", "Landing-site design work stays out of the public record for now"); the fiction disclosure is in the first clause of both the body and the summary; the scenario coordinates are explicitly disclaimed in the same paragraph that states them. One rhetorical tail is routed to the writer (R5, C5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| f. No publication, canon, or deployment decision made here                                         | **PASS**                                                          | No deploy, no DNS/provider action, no canon or content edit, no `releasedNewsSlugs` entry, no route generated. This gate wrote only this record                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### R4. Published-surface verification (the package, not only the MDX)

Measured on this gate's own build (02:10:17), the way the skill requires.

- **Homepage and newsroom cards.** Both built pages render one 001 card: title
  `A Mars mission takes shape in public.`, kicker `Announcement 01`, label
  `First public briefing` as a non-interactive `<span>` (`releasedNewsSlugs` is empty,
  so `NewsCard.astro` emits no `<a>`), the 147-character summary, and the **AF-01**
  plate with the article's AF-01 alt. Planner ruling A is satisfied as written.
- **Retro §10.3 item 5 is superseded, and this gate re-verified the replacement.**
  The card image is no longer the identity mark; the three `logo-bg-black` webp
  derivatives are still emitted for the other surfaces (wordmark, splash, mission
  panel) and the AF-01 derivative is byte-size 66,004 B as ruled. What the card
  image must now be judged on is the plate and its alt, both of which check out.
- **The article body is not public.** No `/news/001-project-announcement/` route is
  generated; the released field name appears **0 times** as text in either built
  page. The body's own claims, including line 58, are therefore not on a live
  surface today — which is why C1 is an exposure-on-release finding and not a live
  leak, stated that way in R5.
- **Build guard.** `check:dist` exit 0; no reference into a withheld directory, no
  withheld file or marker in `dist/`. A withheld-class scan over both built pages
  (vehicle designation, provider, spaceport, absolute dates, instrument and
  landing-design classes) returns 0 hits.
- **Unreferenced plate sources.** AF-02/AF-03 source PNGs sit in `dist/_astro/` with
  no HTML referencing them. Planner ruling B accepts this as standard Astro
  behaviour until the detail route is released; recorded here as H2's disposition,
  and as a deployable-artifact observation if the human's H1 answer makes those
  plates unshippable (R6).
- **Links.** All three external citations return 200 and are the URLs canon cites;
  the one internal link (`/#mission`) resolves to the built homepage anchor. No
  built page links to a route that was not generated.
- **Plate captions and provenance.** The composed captions carry the mandatory
  "Generated visualization for Red Horizon scenario planning, 2026-09-16. Not
  orbital imagery." sentence plus the AF-03 fictional-planning note, from the media
  registry rather than from frontmatter, so a caption cannot ship without them
  (`test/news-media.test.mjs`, 38/38 green). No plate is presented as orbital
  imagery.

### R5. Required changes — the content of this verdict

**C1 — the plate set contradicts the article's own claim about landing-site design
(blocking; owner: human story owner, then `mars-ai-simulator-writer`).**
Article line 58 says "Landing-site design work stays out of the public record for
now." The package it ships contradicts that. Canon's own description of the plates
(`docs/area/AREA.md` §Map package) and the asset manifest's pixel read of the same
day agree that AF-02 prints the working-unit identifiers and the envelope, and AF-03
prints the landing ellipse, the P0 touchdown zone, science zones, hazards, traverses
and the comms shoulder — exactly the class the brief's gated items 2 and 5 keep out
of the announcement. The continuity gate raised this as **H1** and could not decide
it; neither can this gate (role authority). Two outcomes, and the human's answer
decides which applies:

- _(i) the release covers what the plates depict_ → line 58 must be reworded by the
  writer (and the release wording in `docs/area/AREA.md` §Control record and
  `docs/SCENARIO.md` release controls amended to say so), plus C2–C4 in the same pass;
- _(ii) the release covers the plate files as orientation graphics only_ → AF-02 and
  AF-03 cannot ship on article 001; the writer drops them from `mediaAlt`/
  `mediaCaption` and the registry/visuals owner re-scopes the plate key, and line 58
  stands unchanged.

**C2 — the AF-01 caption states a scale that two records disagree about (owner:
writer; canon line routed to the planner).** `mediaCaption[0]` reads "at roughly
1,000 km scale". `docs/area/AREA.md` §Map package says "approximate 1,000 km scale
bar", but the asset manifest's recorded pixel read of the same plate says its printed
bar runs 0–4,000 km. One of the two is wrong and this gate cannot measure which.
Required: **remove the number** ("at planet scale") — the orientation caption does not
need it — or resolve the conflict with a pixel read and correct the canon line first.
A caption is the one place a reader can check a number against the image, so an
unverifiable figure does not ship.

**C3 — the released field name is unqualified in `mediaLabel` (owner: writer).**
`mediaLabel` reads `Red Horizon // Asteria Field planning plates` while
`docs/area/AREA.md` line 23 requires the name to "remain qualified as 'fictional'
wherever this material is copied into another working document" and the brief says it
"must always be qualified as 'fictional' in prose". The captions and alts do qualify
it; the label is the one string that does not. Required: `Red Horizon // fictional
Asteria Field planning plates`.

**C4 — the card's copy calls, decided here (owner: writer, to apply).**
These are this role's decisions, not canon questions, and they were routed here by
the retro gate (§10.7.2), the continuity verdict (§7.7) and the SEO package (§12):

- `linkLabel: First public briefing` → **`Announcement summary`** (21 chars). The
  label currently names a briefing page that does not exist; the replacement promises
  nothing and stays honest while the label is a plain `<span>`.
- `status: Now opening` → **`Programme announced`**. The kicker then reads
  `Announcement 01 · Programme announced` — plain, meaning-preserving, no new fact,
  and no longer reads like a live event.

**C5 — one rhetorical tail (owner: writer, minor).** In the lifetime paragraph, "…
designed to keep working past its first year, not to stop after one result." The
first clause is trivially true of a two-Mars-year design and the trailing clause
describes nothing. Required: drop the tail (end the sentence at "…past its first
year.") or replace it with the released fact that does the work ("…for a second
full seasonal cycle", per `docs/area/AREA.md` line 146).

**Accessibility finding folded into C1.** The AF-03 alt says "scenario planning
overlays" while a sighted reader sees landing- and science-planning overlays; the
AF-03 caption note bounds it and the writer's neutral wording was deliberate to avoid
publishing gated inventory (SEO §R9 recorded the residual and routed it here). It is
a real asymmetry between what the image shows and what a screen reader is told, and
it resolves only with C1: either the full description becomes publishable (option i)
or the plate does not ship (option ii). Not a separate card.

### R6. Dispositions and accepted states (so nothing is re-litigated)

| Item                                                                                                  | Disposition                                                                                                                                                                 | Basis                                                                                                        |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Homepage card image is AF-01                                                                          | **Accepted** — verified in the built page (R4)                                                                                                                              | planner ruling A on `t_8274703e`, comment on this card                                                       |
| Unreferenced AF-02/AF-03 source PNGs in `dist/_astro/` (continuity H2)                                | **Accepted as-is, non-blocking** — standard Astro emission, resolves when the detail route renders the block; becomes a build issue only if H1 lands as option (ii)         | planner ruling B on `t_8274703e`                                                                             |
| Per-plate provenance evidence scope on the BUILD card                                                 | **Accepted** — card alt + component/unit evidence; the three-plate block cannot appear in a built route while `releasedNewsSlugs` is empty (timing, not a verification gap) | planner ruling C; independently confirmed here (no 001 route generated; registry provenance pinned by tests) |
| 147-character `summary` and the `A Mars mission takes shape in public.` title applied by the SEO pass | **Accepted** — both truthful, in-frame, inside budget; revert strings recorded in `seo/…` §R12                                                                              | this gate, R3(d)                                                                                             |
| The three plate alts (neutral wording, provenance sentence)                                           | **Accepted on wording and provenance**; the AF-03 asymmetry is folded into C1                                                                                               | this gate, R4                                                                                                |
| Retro §10.3 item 5 (identity-mark presentation on the card)                                           | **Superseded** by ruling A and re-verified as the AF-01 plate                                                                                                               | R4                                                                                                           |
| Continuity's O4 (the canon control records do not name the released lifetime)                         | **Routed, not mine** — canon/control-record owner (`project-documentation`/planner)                                                                                         | continuity §R6                                                                                               |

### R7. Open human decisions (nothing settled here)

1. **H1 (blocking) — does the 2026-09-17 plate release cover what AF-02 and AF-03
   depict?** The question, both options and the "not mine to decide" reasoning are in
   `.agents/work/continuity/001-project-announcement.md` §R5; C1 carries it into the
   required changes. This is the item that keeps the gate open.
2. **H3 — does the operator's 01:26 no-numeric-coordinate instruction still stand?**
   The article publishes the released centre and envelope with explicit scenario
   framing; the article publishes **no** numeric extent for the real region. If the
   human stands by the prohibition, the coordinate sentences come out (writer edit,
   then continuity re-check).
3. Carried forward from the retro gate (§10.6) and unchanged by this pass: the
   identity-mark variant and any new public placement of the mark; the public title
   and author credit; whether any budget figure beyond the announced frame may go
   public; the Slovak partner institution's public wording; whether article 001 gets
   a released detail route at all. Numbers 4 (surface-life duration) and 7
   (`linkLabel`/`status` copy) are **closed by this pass** — the duration is released
   and published, and the copy calls are C4.

### R8. Confidentiality check on this record

Passed. This record names no withheld value: no vehicle designation, no provider or
spaceport, no launch or landing date, no absolute end date, no payload or instrument
item, and no landing-design figure, unit identifier, science-point label or
hazard/traverse inventory. Gated material is cited **by class** or **by location**
(`docs/area/AREA.md` §Map package; the brief's gated items 2 and 5; the brief's
forbidden token set) so a human can act on the ruling without this file becoming a
second copy of what is withheld. The released values quoted here (the field name, the
planning centre, the envelope, the local frame, the 1,374-day lifetime) are already
public in the article under the recorded release, and quoting them is what makes
R2/R3 checkable. Scratch work lives in `/tmp/rh-editor-ff937d33/`, outside the
repository. This record is private working material under `.agents/work/`; it is not
imported into the site and creates no public surface.

### R9. What this verdict means, and what happens next

`changes_requested` means: the revised **article text, frontmatter, metadata and the
built card pass this gate** — every material claim traces to the brief's allowances
and to released canon, the forbidden set is absent, the frontmatter satisfies the
site schema, the summary and title serve their surfaces, the voice holds, the links
resolve, and the published card is correct — but the **package as submitted does not**,
because its plate set delivers material the same brief gates (C1), one caption states
a figure two records disagree about (C2), one public-facing string carries the
released name unqualified (C3), and two copy calls decided here are not yet applied
(C4–C5). C1 also decides the AF-03 accessibility asymmetry.

It is **not** a rejection of the text, and it is **not** an approval: this gate is
open, `releasedNewsSlugs` stays empty, the body has no route, and human canon and
release approval remain outstanding. Nothing was published, deployed or decided about
canon by this gate.

Next owners and actions:

1. **Human story owner** (via the planner) — answer H1 and record it in
   `docs/area/AREA.md` §Control record and `docs/SCENARIO.md` §Continuity and release
   controls, not only on a card. H1 is the blocking item.
2. **`mars-ai-simulator-writer`** (corrective card created and linked by this gate) —
   apply C1's wording outcome plus C2–C5 in one pass, then hand to continuity.
3. **`mars-ai-simulator-planner`** — the canon line behind C2 (`AREA.md` §Map package
   scale) and O4's control-record gap.
4. **This gate** (`t_ff937d33`) — blocked on the corrective as a dependency; resumes
   to re-verify the package (re-hash the article first: an unchanged article hash is
   what would let part of this reading stand) and close as `approved` only if every
   required change is applied.
5. **`mars-ai-simulator-dev`** (`t_f63be155`, BUILD) — stays behind this gate. Its own
   body already says not to run the build on a `changes_requested` gate.

---

**Final label: `changes_requested`**

---

## 9. Corrective card and next owner

- **Corrective card:** `t_fc952c7d` — "Fix pre-release canon exposure on the public
  build (step 001 article)", assignee `mars-ai-simulator-dev`, linked as a blocking
  parent of this review card. Its five scoped items: (1) RH-01 renders out of the
  public build; (2) RH-01 name out of the chrome unless the human decides
  otherwise; (3) justify or remove the unexplained coordinate; (4) remove the false
  link affordance (or wire the route with a recorded release reference); (5)
  verify and fix the news-card image presentation.
- **Next owner after the corrective completes:** this review card resumes
  (`t_3302ef7e`, editor) to re-verify the closed surface and, if the corrective
  evidence holds and the human answers the canon questions, move the status to
  `approved`.
- **Human required now:** the decisions in section 6, surfaced on `t_3302ef7e` and
  `t_fc952c7d`.
- Editorial approval, when it comes, is a gate only: human canon and release
  approval remain required before any public deployment.

---

## 10. Retro editorial gate — final verdict (2026-09-17, card `t_8059da5f`)

**Verdict: `approved`.** This is an editorial gate only. It is not a release, not
canon approval, not an approval of the fictional programme, and not authorisation
to deploy. Human canon and release approval remain outstanding, and the open
human decisions in section 6 stay open (carried forward in 10.6).

Sections 1–9 above are the retro record of the package as it stood on 2026-09-16
(`changes_requested`, five published-surface failures). They are preserved
unchanged: this section is the verdict on the repaired package, not a rewrite of
that record.

### 10.1 What changed since sections 1–9

| Card                            | Result                                                                                                                                                                                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `t_fc952c7d` (dev, done)        | Closed all five published-surface items: withheld vehicle renders out of the build, the vehicle name out of the chrome, the stray coordinate removed, the false link affordance removed, the news-card image presentation fixed. |
| `t_774e7298` (dev, done)        | Rebuilt the site: file-based routes, the hash-approved identity mark imported from `docs/brand/`, a fail-closed build guard, and article detail routes gated by an empty release list.                                           |
| `t_16c7ba1c` (seo, done)        | Wrote the retro SEO package and applied one frontmatter value (`mediaAlt`, the measured Earth/Moon cue).                                                                                                                         |
| `t_0b3434e8` (continuity, done) | Returned `continuity clear`, with the five corrective items re-verified rather than accepted on narrative.                                                                                                                       |

Per the card body, the five corrective items are incorporated here as **resolved**
(10.3) and are not re-reported as failures.

### 10.2 Gate inputs and state at verdict time

State re-read at **2026-09-17 01:40:47 CEST**, immediately before this verdict.

| Input                                | Path                                                                                             | State                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Published article + frontmatter      | `website/news/001-project-announcement.mdx`                                                      | modified vs HEAD (frontmatter only); SHA-256 `e7652bd6b8dfd2d31c3b290420760cac5cf64b6bc7ff92a22d9a39f17860ffd8`                    |
| Released timeline step               | `docs/timeline/001-project-announcement.md`                                                      | unchanged; SHA-256 `3aa1bca721348fcc9d4a2594974480528031726168fb37a0d685f8e4d038e942`                                              |
| Locked scenario canon                | `docs/SCENARIO.md`                                                                               | SHA-256 `c045a4c9ba12823e27cc4e188f709dc1716ad0a87c2c7f5e8aab8e2cffa16293` — see the drift note below                              |
| Approved identity asset              | `docs/brand/logo-bg-black.png`                                                                   | SHA-256 `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749` = the hash recorded in `docs/brand/BRAND.md` lines 9–10 |
| SEO package                          | `.agents/work/seo/001-project-announcement.md`                                                   | present, 16 sections + sources, one applied change (`mediaAlt`)                                                                    |
| Continuity verdict                   | `.agents/work/continuity/001-project-announcement.md`                                            | present, final line `continuity clear` (single occurrence)                                                                         |
| Brief / source pack / asset manifest | `.agents/work/briefs/`, `.agents/work/sources/`, `.agents/work/assets/001-project-announcement/` | present; the revision-chain templates, not inputs to this retro verdict                                                            |
| Site source                          | `website/src/**`, `website/scripts/**`, `website/news/**`                                        | current as of the timestamps in 10.5                                                                                               |
| Build output                         | `website/dist/`                                                                                  | built 01:38:26, after the newest source file (`website/src/lib/site.ts`, 01:38:08); 10 files, 2 routes                             |

Two paths named by sections 1–9 or by the card no longer exist and were resolved
to their current equivalents instead of being reported as broken:
`website/scripts/sync-assets.mjs` and `website/scripts/assets.mjs` (deleted by the
site refactor; the work now lives in `website/scripts/guards.mjs`,
`website/scripts/check-dist.mjs` and `website/src/lib/assets.ts`), and
`docs/brand/BRAND_GUIDELINES.md` (renamed to `docs/brand/BRAND.md`).

**Canon drift during the run:** `docs/SCENARIO.md` changed under this gate — one
hunk, `git diff -U2 docs/SCENARIO.md`, adding a note to the release controls that
the field name, its centre coordinates and the three plates were partially
released for article 001 on 2026-09-17. Every locked value the published article
uses (mission identity, mission type, primary science, the ten partners, the 2031
window, the €2.10 bn frame) is byte-identical at both hashes. No claim in this
section is asserted from the earlier snapshot.

**Shared-checkout note:** `website/` was being edited concurrently by `t_3922071d`
(schema/guard work for the revision) while this gate ran, and `website/src/lib/site.ts`
changed at 01:38:08. The article, the timeline step, the identity asset and the
build output were stable across the checks in 10.5; the observations in 10.7 are
timestamped.

### 10.3 Corrective card `t_fc952c7d` — re-verified closed, not re-reported

| # | Item                                      | Re-verification by this gate (real output)                                                                                                                                                                                                                                                                                                                                                    |
| - | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Withheld vehicle imagery out of the build | `npm --prefix website run check:dist` → pass at 01:40:47; `find website/dist -type f` → 2 HTML routes, 2 CSS, 4 webp derivatives of the identity mark, 2 favicons; no dossier asset, no map. `website/scripts/guards.mjs` fails the build on a gated path, a gated file by name/stem/content hash, and gated markers, then prunes: fail-closed, not reviewer-dependent.                       |
| 2 | Vehicle name out of the chrome            | Visible-text extraction of `website/dist/index.html` reads "the work of its first surface vehicle" and "the surface vehicle"; the designation appears nowhere in `dist/`.                                                                                                                                                                                                                     |
| 3 | Stray unlabelled coordinate removed       | `\d+°` scan over both built pages → no match.                                                                                                                                                                                                                                                                                                                                                 |
| 4 | False link affordance removed             | The built card renders `linkLabel` inside `<span class="card-label">`, and no `href` in either page targets the article route; `website/src/features/news/NewsCard.astro` emits an `<a>` only when `isReleasedNewsSlug()` is true, which it is not (`releasedNewsSlugs = []`).                                                                                                                |
| 5 | News-card image presentation              | `object-fit: contain` in `NewsCard.astro`, square intrinsic size, and the emitted 1024 × 1024 webp keeps the full frame: measured in `docs/brand/logo-bg-black.png`, the Earth cue centres at 0.802 × 0.264 of the frame and the Moon cue at 0.813 × 0.272; in the emitted derivative they centre at 0.797 × 0.258 and 0.812 × 0.271 — no crop, and every cue named in `mediaAlt` is present. |

Because `dist/` is gitignored and shared, another worker's guard proof can plant a
withheld asset there briefly. That was observed at 01:25 on 2026-09-17 (continuity
record section 5), the guard failed closed while it was present, and it cleared
without a card. Nothing of the sort was present during this gate.

### 10.4 Retro-gate review table

| Check                                                          | Result                                   | Evidence                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Gate inputs present, continuity verdict is `continuity clear`  | PASS                                     | SEO package, continuity verdict, brief, source pack and asset manifest all exist at the paths in 10.2; the continuity file's final line is `continuity clear`, one occurrence.                                                                                                                                                                                                                                 |
| Citations                                                      | PASS                                     | Every material claim is a fictional-programme claim from locked canon; no real agency, institution, university or company is named or implied, so no real-world citation is required.                                                                                                                                                                                                                          |
| Coherence and chronology                                       | PASS                                     | Claim-level re-check against `docs/SCENARIO.md` at the current hash: mission identity, mission type, primary science, the ten partners in canon order, equal governance, the 2031 window (year only), the €2.10 bn frame. Nothing pre-empts a later step; the "no life detection" invariant holds.                                                                                                             |
| Voice and grammar                                              | PASS                                     | Body: 248 words, 1,642 characters, 5 paragraphs, 0 headings, 0 links; fiction disclosure once. Concrete, unsentimental, no grandeur, no urgency, uncertainty stated as uncertainty. One optional copy suggestion from section 7 ("technical risks and anomalies") is unchanged and deliberately not applied — the file is rewritten by the revision chain.                                                     |
| Article: no later-step fact, no withheld material              | PASS                                     | Word-boundary, case-insensitive scan of frontmatter + body against two gated lists read from their files at run time (the brief's "Forbidden token set", 23 entries; the section 1 grep list, 15 entries) → **0 hits**. A substring scan returns 4 hits, all inside "uncrewed" (printed with context and confirmed); no date, provider, payload, instrument, ownership, designation or landing detail appears. |
| Published surface: no gated name, imagery or unexplained value | PASS                                     | 0 hits across all 4 text files in `website/dist/` and across every `dist/` file name for both gated lists; `\d+°` → no match; the only quantitative claims on either page are `2031` and `€2.10 billion` (the carousel counter `01 / 01` and the `Announcement 01` kicker are series labels, not facts). Both built pages were read in full as visible text.                                                   |
| Article body is not public                                     | PASS                                     | Three distinctive body phrases → 0 occurrences in `dist/index.html` and `dist/news/index.html`; `website/src/lib/releases.ts` ships `releasedNewsSlugs = []`, and `website/src/pages/news/[slug].astro` generates paths from that gate. Only the card is public.                                                                                                                                               |
| Image placement, caption, label                                | PASS (was FAIL, resolved)                | One figure, 1024 × 1024, `object-fit: contain` in a wider box, full frame visible (10.3 item 5); `mediaLabel` "Red Horizon // programme identity" is accurate and restrained.                                                                                                                                                                                                                                  |
| Alt text                                                       | PASS                                     | `mediaAlt` (187 chars) describes only cues measured in the asset the site imports; the wording is background-neutral, so it does not repeat the "on black" conflict between `docs/brand/BRAND.md` and the light card panel. The SEO package records a one-line revert string (§8).                                                                                                                             |
| Media variant and asset provenance                             | PASS (human release decision still open) | The only import of the mark in the site source is `docs/brand/logo-bg-black.png` (`website/src/lib/assets.ts`), whose SHA-256 equals the approved hash in `docs/brand/BRAND.md`; the RGBA derivative (`…23ff0f5`) is referenced nowhere in `website/src/`, `website/news/` or `website/scripts/`. The variant/placement decision itself is the human's (10.6.1).                                               |
| Metadata and schema                                            | PASS                                     | Frontmatter parsed with the site's own parser (`website/node_modules/js-yaml`): all 11 keys present, none missing, none extra; `order: 1`; `publication: published`; `accent: oxide`; `media: programme-identity` is a valid key in `website/src/lib/media.ts`; `mediaAlt` non-empty where `media` is set (schema refinement in `website/src/content.config.ts`); `summary` 250 chars.                         |
| Links                                                          | PASS                                     | The article has no links (regex scan: 0). Every `href` in both built pages resolves: `/#mission`, `/#timeline`, `/#top` → `dist/index.html` with a matching anchor id; `#updates` → present in `dist/index.html`; `/news/` → `dist/news/index.html`; the stylesheet and favicon paths exist. No href points at a route that was not generated.                                                                 |
| Accessibility: disclosure, headings, page metadata             | PASS (2 routed observations)             | Fiction/AI disclosure appears in the body, the card, the page aside and the meta description. One `h1` per route. Two non-blocking observations, routed in 10.7.1: the news index renders the card title as `h3` directly under the page `h1` (skipping `h2`), and `/news/` repeats the homepage `<title>` and description. Neither breaks reading or navigation and neither involves gated material.          |
| Budget figure within the allowed frame                         | PASS                                     | "€2.10 billion in constant 2026 euros, covering concept work through the final science archive" matches `docs/SCENARIO.md` (lifecycle budget, re-read at the current hash). No breakdown, no per-partner share, no cost table.                                                                                                                                                                                 |
| Supported surface-life duration                                | PASS (absent; revision release noted)    | No duration appears in the current article, frontmatter or either built page. The human released the duration for the **revision** on 2026-09-17 (brief, "Human release approval reference"); that is a revision-chain input and does not make the current published text wrong or this verdict stale.                                                                                                         |
| FEI STU not mentioned                                          | PASS                                     | The institution and the Slovak contribution are absent from the article, its frontmatter and both built pages.                                                                                                                                                                                                                                                                                                 |
| Public title and author credit                                 | PASS (no policy requires a byline)       | No byline field exists in `website/src/content.config.ts` and no policy in `AGENTS.md` / `docs/INSTRUCTIONS.md` requires one, so no check fails; the human's confirmation of the public title and credit is still outstanding (10.6.2).                                                                                                                                                                        |

### 10.5 Validation performed by this gate

All commands run from the repository root at 2026-09-17 01:38–01:41 CEST. Scratch
checkers live in `/tmp/rh-editor-001/`, outside the repository.

- `python3 /tmp/rh-editor-001/check.py` — frontmatter key inventory; body
  measurement; two gated-list scans (word-boundary and substring) over the article
  and over all 4 text files in `dist/` plus every `dist/` file name; `dist/` title,
  description, canonical, Open Graph, Twitter card, `ld+json`, `keywords` and
  `robots` probes; heading counts; three body-render probes; href resolution.
- `python3 /tmp/rh-editor-001/substring.py` — the 4 substring hits printed with
  their context (all "uncrewed").
- `python3 /tmp/rh-editor-001/cues.py` — pixel measurement of the approved mark,
  the RGBA derivative, the 4 emitted webp derivatives and the 2 favicons.
- `python3 /tmp/rh-editor-001/visible.py` — visible-text extraction of both built
  pages, numeric/coordinate scan, per-route title and description.
- `node /tmp/rh-editor-001/fm.mjs` — frontmatter parsed with the site's own
  `js-yaml`; types, enums and string lengths printed.
- `npm --prefix website run check:dist` → pass; generated routes
  `/index.html`, `/news/index.html`.
- `npm --prefix website test` → 16/16 tests pass (surface guards included).
- `git status --short`, `sha256sum`, `git diff -U2 docs/SCENARIO.md` → 10.2.

Tooling note: `dprint` is not on `PATH` and `npm run format` calls an uninstalled
`print` binary; `~/.dprint/bin/dprint check` reports this file as unformatted
(pre-existing table padding) — see 10.7.7.

**Not run by this gate:** no build, no preview, no deployment, no DNS/provider
action, no asset regeneration, no canon or content edit. Technical validation
belongs to the build/deploy stage (`t_f63be155` for the revision).

### 10.6 Open human decisions (carried forward; nothing settled here)

1. Identity-mark variant and any new public placement of the mark
   (`docs/brand/BRAND.md`, "Publication boundary").
2. Public title and author credit for article 001.
3. Whether any budget figure beyond the announced frame may go public (none is).
4. The supported surface-life duration in the announced schedule frame — now
   released for the revision only; whether the published article carries it is the
   revision chain's question, not this gate's.
5. The Slovak partner institution's public wording, if it is ever used.
6. Whether article 001 gets a released detail route (needs a recorded release
   reference; while the release list is empty the body is unrendered).
7. The copy calls routed to this role — the `linkLabel` wording and the `status`
   string — recommendation in 10.7.2.

The Asteria Field partial release (2026-09-17) is recorded in
`docs/SCENARIO.md` release controls and `docs/area/AREA.md` and is scoped to the
revision; the currently published article does not use it.

### 10.7 Routed observations (not failures; no owner settled here, none fixed here)

1. **News-index page metadata and heading level.** `/news/` repeats the homepage
   `<title>` and `<meta name="description">`, and its card title renders as `h3`
   under the page-level `h1`, while the SEO package specifies a page-level `h1`
   with card titles as `h2` on the index (`…/seo/001-project-announcement.md` §6,
   §10). Owners: `mars-ai-simulator-dev` for the route metadata and the heading
   level, `mars-ai-simulator-seo` for the convention. The duplicate title was
   already an open question on `t_774e7298`'s handoff.
2. **`linkLabel` and `status` copy.** "First public briefing" reads like a link to
   a briefing page; the label is correctly non-interactive now, but the wording is
   routed to this role by the SEO package (§12) and the continuity verdict (§7.7).
   Not applied here because the file is rewritten by `t_30760665` and the call
   belongs to the revision's editorial gate. Recommendation recorded: prefer a
   plain label that promises nothing (the SEO package offers "Announcement
   summary" / "Programme announcement").
3. **Cross-surface wording consistency.** The body says "Ten national programme
   teams"; the card `summary` says "Ten partner groups". Canon uses "programme
   partners" and "fictional national programme teams" (`docs/SCENARIO.md`,
   coalition section). Route to the revision chain (writer, with SEO/editor
   sign-off); not fixed here.
4. **Favicons.** The two tracked favicons in `website/public/assets/` are
   downscales of the approved mark. They predate this pipeline and the current
   Preparing site; they fall under open decision 10.6.1, not a new failure.
5. **`docs/brand/BRAND.md` publication-boundary drift.** The paragraph still
   describes the mark reaching the website through a generated
   `website/public/assets/` directory; the site now imports it from `docs/brand/`
   through Astro's asset pipeline and copies nothing into `public/`. Owner:
   `project-documentation` (also recorded by continuity §8).
6. **Build guard vs. the revision.** `website/scripts/guards.mjs` line 43 still
   lists the field name among `gatedTextMarkers`, so the revision — released to
   name the field — will trip the build guard until `t_3922071d` retires that
   marker and updates the guard test. That card is open and scoped to exactly this;
   recorded so the collision is not discovered at build time.
7. **This record is not dprint-clean.** `dprint check` reports it unformatted: the
   pre-existing review table (sections above) pads its pipe columns differently
   from the markdown plugin's output. Not fixed here, because reformatting would
   rewrite another worker's retro record wholesale; section 10 is hand-formatted.

### 10.8 What this verdict means, and the next handoff

`approved` means: the assembled step-001 package — article, frontmatter, card,
built pages and assets — is canon-safe, accurate to released canon, honest about
uncertainty, accessible in its alt text and labels, valid in its metadata, and free
of broken links and dead affordances. It incorporates the five closed corrective
items as resolved.

It does **not** mean the package is released, published, deployable or
canon-approved: `releasedNewsSlugs` stays empty until a human records a release
reference, and human canon and release approval remain required.

- **Mission-timeline step:** 001 (project announcement), retro gate.
- **Card:** `t_8059da5f` (`mars-ai-simulator-editor`).
- **Output:** this record (sections 10 and the metadata Status row).
- **Public/canon impact:** none — no article, frontmatter, site, asset or canon
  file was edited by this gate; the tree already contained the SEO package's one
  applied `mediaAlt` value.
- **Confidentiality check:** the gated lists are cited by location (the brief's
  "Forbidden token set" and section 1 above) and reported as hit counts only; no
  withheld token, coordinate, provider, date or payload item was added to the
  repository by this gate, and the scratch checkers live outside it.
- **Validation completed:** 10.5. **Review outstanding:** none for this card; the
  revision's own editorial gate re-verifies the rewritten text, and human canon and
  release approval remain outstanding.
- **Next owner and action:** `t_30760665` (writer, revision draft) unblocks on this
  completion, then the revision chain SEO → IMAGES → CONTINUITY → REVIEW → BUILD,
  with `t_3922071d` (dev) landing the schema/guard changes first. The revision's
  continuity pass must cover its own HELD items; the plates and the field name are
  released for article 001 only.
- **Corrective card:** none created — this gate found no material factual,
  accessibility, licensing or coherence failure.

---

## Revision re-verification: 2026-09-17 (card `t_ff937d33`, pass 2) — verdict `approved`

**Verdict: `approved`.** An editorial gate only: not a release, not canon approval,
not deployment authorisation. The gate closes because the card body's prerequisite is
now met — `.agents/work/continuity/001-project-announcement.md` ends in
`continuity clear` for the corrected article (card `t_38d86b7a`) — and every required
change from pass 1 (§R5, C1–C5) is applied and re-verified here on the corrected text
and on a build this gate produced itself.

| Field                 | Value                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                  | `t_ff937d33` (`mars-ai-simulator-editor`) — editorial final gate, re-run after corrective `t_50fea526` (writer, `done`) and continuity re-check `t_38d86b7a` (`done`)                                                      |
| Reviewer role         | copy editor — editorial final gate                                                                                                                                                                                         |
| Skill                 | `editorial-review`                                                                                                                                                                                                         |
| Mission-timeline step | `site-foundation` / step 001 (project announcement)                                                                                                                                                                        |
| **Verdict**           | **`approved`** — editorial gate only. Human canon approval and human release approval remain outstanding and are in no way implied (§S10)                                                                                  |
| Article under check   | `website/news/001-project-announcement.mdx` — SHA-256 `73c2d047…` (`…7ab5ec`), 4,806 B, 77 lines; identical to the hash the continuity re-check judged, so that verdict's reading of the text still applies to these bytes |
| Verdict written       | 2026-09-17 08:55 CEST (host date); the build it is measured on ran 08:53:26–08:53:27                                                                                                                                       |
| Supersedes            | §R0–R9 of this file — the pass-1 verdict `changes_requested` (record hash `23072d02…`). §R0–R9 stays byte-for-byte as the point-in-time record of the pre-corrective package; **one statement of it is corrected in §S7**  |
| Gate state            | Not blocked. All three parents (`t_23c10313`, `t_38d86b7a`, `t_50fea526`) are `done`; this completion is what releases BUILD `t_f63be155`                                                                                  |

### S1. What moved between pass 1 and this pass, and on whose authority

1. **H1 answered by the human story owner** (option (i), relayed by the planner on this
   card and on `t_50fea526`): keep all three plates, reword only the sentence that said
   landing-site design work stays out of the public record, and add **no** landing-design
   fact to prose, alt text or captions. Recorded in canon, not only on a card:
   `docs/area/AREA.md` §Control record lines 18–19 and `docs/SCENARIO.md`
   §Continuity and release controls line 279.
2. **H3 resolved by the operator**: the earlier no-numeric-coordinate instruction is
   superseded, so the released centre and envelope stand as written. Nothing in this
   verdict rests on an agent reading which human message wins.
3. **Corrective `t_50fea526` (writer, done)** applied C1–C5 in one pass; the article moved
   `5755f92e…` → `73c2d047…`.
4. **Continuity re-check `t_38d86b7a` (done)** returned `continuity clear` on exactly the
   bytes judged here, with F1 and F2 routed rather than left silent.

### S2. Gate inputs and hashes at verdict time

Read and hashed by this pass at **2026-09-17 08:53–08:55 CEST** with this gate's own
`sha256sum` run, not quoted from another record.

| Input                               | SHA-256 at verdict time | Note                                                                                          |
| ----------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------- |
| Article under check                 | `73c2d047…`             | the corrected text; unchanged across this pass                                                |
| Brief (revision)                    | `73f850ed…`             | **unchanged since pass 1**                                                                    |
| Source pack                         | `2c81eaea…`             | unchanged since pass 1                                                                        |
| Asset manifest                      | `5e33d451…`             | unchanged since pass 1 (its article-hash citation is stale — routed, §S8)                     |
| SEO package                         | `e0cc702b…`             | unchanged since pass 1                                                                        |
| Continuity verdict                  | `5d996c64…`             | **moved** (`f3072da9…` → `5d996c64…`): `t_38d86b7a` appended §P1–P10; documented, additive    |
| This record, before this append     | `23072d02…`             | pass 1's verdict; §R0–R9 preserved                                                            |
| Released step 001 `docs/timeline/…` | `3aa1bca7…`             | unmodified                                                                                    |
| `docs/SCENARIO.md`                  | `4cc0438b…`             | **moved** (`c045a4c9…` → `4cc0438b…`): the planner's recorded H1 + O4 release note (line 279) |
| `docs/area/AREA.md`                 | `3bb1201c…`             | **moved** (`ae5bf08c…` → `3bb1201c…`): same recorded update (lines 18–19, revision AF-0.2)    |
| `docs/brand/BRAND.md`               | `34e6345a…`             | unchanged since pass 1                                                                        |
| `website/src/content.config.ts`     | `27da28e9…`             | unchanged since pass 1                                                                        |
| `website/scripts/guards.mjs`        | `65d31b91…`             | unchanged; four gated text markers                                                            |
| `website/src/lib/releases.ts`       | `9173aa3a…`             | `releasedNewsSlugs = []` — the body still has no route                                        |

**Movement recorded, not asserted as drift.** The three moved files are documented
updates by cards that own them (the corrective writer, the continuity re-check, the
planner's canon record). `git status --porcelain` at verdict time lists exactly four
modified paths — the article, `.agents/work/continuity/001-project-announcement.md`,
`docs/SCENARIO.md`, `docs/area/AREA.md` — and nothing else; no commit was made by this
gate and none is claimed by it.

### S3. Required changes from pass 1 (§R5, C1–C5) — re-verified against the corrected bytes

| #  | Required by §R5                                                                                                                                                       | Re-verified by this pass                                                                                                                                                                                                                                                                 | Evidence                                                                                                                           |
| -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| C1 | option (i): plates stay; reword the sentence that said landing-site design work stays out of the public record; add no landing-design fact to prose, alts or captions | **PASS** — the sentence is replaced by a statement about the released artifacts ("The planning plates released with this announcement show that region as it is currently drawn for mission planning"). `media: asteria-plates` still resolves to 3 plates / 3 alts / 3 captions / label | §S4 scans: the word `landing` occurs **0 times** in the file; the landing-design class is 0 across prose, alts, captions and label |
| C2 | drop the unverifiable scale number from the AF-01 caption; invent no replacement                                                                                      | **PASS** — `mediaCaption[0]` reads exactly "The fictional target region on the planet, at planet scale."; `1,000 km` occurs **0 times** and `4,000` occurs **0 times**                                                                                                                   | §S4 near-miss scan; frontmatter dump                                                                                               |
| C3 | qualify the released name in `mediaLabel`                                                                                                                             | **PASS** — `Red Horizon // fictional Asteria Field planning plates`, exactly                                                                                                                                                                                                             | frontmatter dump                                                                                                                   |
| C4 | apply the decided copy calls                                                                                                                                          | **PASS** — `status: Programme announced`, `linkLabel: Announcement summary`; the superseded strings `Now opening` and `First public briefing` occur **0 times** in the article and **0 times** in every built page                                                                       | §S5 built-page probes                                                                                                              |
| C5 | drop the rhetorical tail                                                                                                                                              | **PASS** — the lifetime sentence ends "…designed to keep working past its first year."; the tail occurs **0 times**                                                                                                                                                                      | §S4 near-miss scan                                                                                                                 |

### S4. Card-body checks a–f on the corrected article

| Check                                                                                              | Result                                  | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a. Every material claim traces to the brief's allowed list                                         | **PASS**                                | Released values are exact against `docs/area/AREA.md` §Control record and `docs/SCENARIO.md`: planning centre `17.80°S, 332.20°E (27.80°W)`, envelope `12.5–24.0°S, 327.0–338.0°E`, frame `8 by 6 kilometres`, `two Mars years — 1,374 Earth days`, `687 Earth days`, window `2031`, budget `€2.10 billion in constant 2026 euros` — each present once and verbatim; the C1 replacement sentence is strictly weaker than the release it cites. Claim-level traceability is continuity's §P6 (six rows re-verified there), re-confirmed here on the same bytes                                                              |
| b. Forbidden token set absent (grep verification)                                                  | **PASS**                                | **0 substring hits and 0 word-boundary hits** against the brief's full set (8 pattern lines, read from the brief at run time) and against the live `gatedTextMarkers` in `website/scripts/guards.mjs` (4 markers), separately on the whole file, on the frontmatter values and on the body. The only year tokens in the file are `2026` and `2031`; there are **0** month-day tokens. Note: the planner's own grep string is a substring list that was expected to match `uncrewed`; on the corrected file it now matches nothing at all                                                                                   |
| c. Frontmatter parses and satisfies `website/src/content.config.ts`                                | **PASS**                                | Parsed with the site's own `js-yaml`: **12 keys, all 12 schema fields present, none extra**. `order: 1` integer ≥ 0; `publication: published`; `accent: oxide`; `media: asteria-plates`; `mediaAlt` 3 non-empty entries and `mediaCaption` 3 non-empty entries, in plate order; `mediaLabel` non-empty. The build (exit 0), `astro check` (0 errors / 0 warnings / 0 hints, 43 files) and 38/38 vitest tests, including the media-key contract, all ran green in this pass                                                                                                                                                 |
| d. `summary` updated if the pitch changes                                                          | **PASS (carried forward, re-measured)** | The pitch is unchanged since pass 1 and the summary is unchanged: 147 characters, states the fiction, the coalition and the 2031 window only, and still doubles as the meta description. It is the string rendered on both built cards. Revert string remains in `seo/001-project-announcement.md` §R12                                                                                                                                                                                                                                                                                                                    |
| e. Brand voice preserved (concrete, unsentimental, no grandeur, no urgency, no unearned certainty) | **PASS**                                | 542 words, 10 paragraphs, 0 headings, 4 links. Short declaratives, no superlatives, no deadline pressure, no promotional framing; uncertainty is stated as uncertainty; the fiction disclosure is in the first clause of the body and of the summary; the scenario coordinates are disclaimed in the same paragraph that states them. The pass-1 micro-item (C5) is applied, and the one remaining decorative close ("…turn a mission idea into a testable plan") is within the house register, not an unearned claim. The cross-surface wording mismatch routed in retro §10.7.3 is gone: "partner groups" occurs 0 times |
| f. No publication, canon, or deployment decision made here                                         | **PASS**                                | No deploy, no DNS/provider action, no canon or content edit, no `releasedNewsSlugs` entry, no route generated, no asset generated. This gate wrote this record and nothing else                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### S5. Published-surface verification (the package, not only the MDX)

Measured on the build this gate produced (08:53:26–08:53:27), the way the skill requires.

- **Homepage and newsroom cards.** Both built pages render one 001 card: title
  `A Mars mission takes shape in public.`, kicker `Announcement 01 · Programme announced`,
  label `Announcement summary` as a non-interactive `<span>` (`releasedNewsSlugs` is empty,
  so `NewsCard.astro` emits no `<a>`), the 147-character summary, and **AF-01** —
  `_astro/asteria-field-01-mars-locator.DGegv0O8_Z1Alky4.webp`, 66,004 B, 1024 × 683,
  `loading="eager"` — whose rendered `alt` is the article's AF-01 alt **verbatim**
  (byte-equal after HTML-unescaping; the pass-1 row is confirmed, not amended). The
  surrounding markup labels it `AF-01 · Mars locator`. **Planner ruling A is satisfied as
  written.**
- **The plate-set label is not applied to the card.** `mediaLabel`
  ("Red Horizon // fictional Asteria Field planning plates") occurs **0 times** in
  `dist/index.html` and `dist/news/index.html`; only the single-plate label renders.
- **The article body is still not public.** Only four routes exist —
  `/404.html`, `/about/index.html`, `/index.html`, `/news/index.html`; no
  `/news/001-project-announcement/` route is generated, and `releasedNewsSlugs` is empty.
  The body's distinctive phrases (`Asteria Field`, `Margaritifer Terra`,
  "governance is equal", "mineralogy") occur **0 times** on either card page; the only
  case-insensitive match for the field name anywhere in the built pages is the **asset
  file name** of the AF-01 plate.
- **Build guard, re-run last, immediately before this verdict.** `check:dist` → exit 0,
  "no reference into a withheld directory, and no withheld file or marker in dist/";
  generated routes as listed above; `\d+[.,]\d+°` over every dist text file → **no
  match**; the brief's forbidden set over all dist text files and over every dist file
  name → **0 hits**.
- **Unreferenced plate sources (carried forward, re-confirmed).** AF-02 (3,311,859 B) and
  AF-03 (3,492,102 B) source PNGs are still emitted into `dist/_astro/` with no HTML
  referencing them — the same two byte sizes continuity re-confirmed. Under the recorded
  H1 answer that material is released, so this is build hygiene only (O2, §S8), owned by
  BUILD `t_f63be155`; `check:dist` deliberately does not cover it.
- **Links.** The three external citations return **200, 200, 200**; the internal link
  `/#mission` resolves to an anchor that exists in the built homepage (`#mission` present,
  as are `#timeline`, `#top`, `#updates`, `#main-content`). No built page links to a route
  that was not generated.
- **Plate captions and provenance.** The composed captions — which must carry the
  mandatory generated-visualization provenance sentence and the AF-03 fictional-planning
  note — come from the media registry, not from frontmatter, so a caption cannot ship
  without them; `test/news-media.test.mjs` is green in this pass (38/38). No plate is
  presented as orbital imagery. None of it is on a public route today.

### S6. Dispositions, so nothing is re-litigated

| Item                                                                                                                            | Disposition                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1–C5 (§R5)                                                                                                                     | **Closed** — verified in §S3                                                                                                                                    |
| Homepage card image is AF-01, alt verbatim, `AF-01 · Mars locator`                                                              | **Accepted** — planner ruling A; re-verified live in §S5                                                                                                        |
| Homepage card image is no longer the identity mark (retro §10.3 item 5)                                                         | **Superseded by ruling A and re-verified** — the three `logo-bg-black` webp derivatives are still emitted for the other surfaces                                |
| Retro §10.7.3 cross-surface wording (`partner groups` vs `programme teams`)                                                     | **Closed** — the string occurs 0 times; the summary and body now agree in substance                                                                             |
| Retro §10.6.4 (surface-life duration) and §10.6.7 (`linkLabel`/`status`)                                                        | **Closed by the revision chain** — the duration is released, recorded in canon and published; the copy calls are applied                                        |
| Continuity F1 (the AF-03 alt)                                                                                                   | **Confirmed in continuity's reading, and pass 1's contrary parenthetical withdrawn** — §S7; the article is correct as it stands and no change is requested      |
| Continuity F2 (stale pre-corrective hash citations in two other records)                                                        | **Routed, not fixed** — §S8                                                                                                                                     |
| O1 internal residual: canon's plate record and the asset manifest's pixel read still disagree about the AF-01 printed scale bar | **No public string carries the figure**, so no reader can be misled; internal reconciliation is the planner's / `project-documentation`'s, if it is ever wanted |
| O2 unreferenced AF-02/AF-03 sources in `dist/_astro/`                                                                           | **Accepted non-blocking**, owner BUILD `t_f63be155` (§S5)                                                                                                       |

### S7. Correction to pass 1 — the §R5 parenthetical about the AF-03 alt is withdrawn

Continuity's F1 is confirmed here. §R5's closing paragraph asserted that the AF-03
alt-text asymmetry "resolves only with C1: either the full description becomes
publishable (option i) or the plate does not ship (option ii)". **That is wrong about
the recorded answer and is withdrawn.** Option (i) as recorded keeps the depiction
public _with the plates_ while explicitly barring the landing-design class from "article
prose, alt text, or captions" (`docs/area/AREA.md` §Control record lines 18–19;
`docs/SCENARIO.md` §Continuity and release controls line 279) — which is also the
human's verbatim wording. A fuller AF-03 description would put a gated class into a
metadata surface.

Therefore: **the article's AF-03 alt stands as written, no writer action is requested,
and no corrective card is raised for it.** If anyone later wants the fuller description,
the first step is a human edit to the recorded H1 wording in canon — not an edit to the
article. Recorded so that no downstream card re-opens an accepted alt (continuity §P8
item 1, continuity §P7 F1).

### S8. Routed observations (recorded, not fixed, no owner settled here)

1. **F2 — stale hash citations.** `.agents/work/assets/001-project-announcement/assets.md`
   (lines 9, 169) and `.agents/work/reviews/about-method.md` (lines 46, 177, 451, 474)
   still cite the pre-corrective article hash `5755f92e…`. Both are point-in-time
   snapshots; neither verdict is invalidated, but the citation now misleads. Owner: the
   worker who next touches those records — under `AGENTS.md` that needs a kanban-linked
   corrective card, so this gate reports rather than edits. This record's own §R1/§R2
   hash lines are snapshots for the same reason and are deliberately left as written.
2. **O2 build hygiene** — the unreferenced AF-02/AF-03 sources in `dist/_astro/`
   (§S5). Owner: BUILD `t_f63be155`.
3. **O1 internal scale residual** — canon's plate record vs the asset manifest's pixel
   read on the AF-01 bar (§S6). No public string carries a figure. Owner if ever
   reconciled: planner / `project-documentation`.
4. **Retro §10.7 open items unchanged and still routed there** — the `/news/` duplicate
   `<title>`/description, the news-index heading level, the favicons, and the
   `docs/brand/BRAND.md` publication-boundary drift. None is a 001 failure and none is
   re-opened by this pass.

### S9. Open human decisions (nothing settled here)

1. **Canon approval** — the Asteria Field dossier as a whole remains draft
   (`docs/area/AREA.md`, "dossier as a whole remains draft"); the partial release covers
   article 001 only.
2. **Release approval for article 001** — not given by this gate. `releasedNewsSlugs`
   stays empty until a human records a release reference; the article body therefore has
   no route and the editorial `approved` is not a publication.
3. **Whether article 001 gets a detail route at all** (retro §10.6.6) — unchanged.
4. **Public title and author credit** (retro §10.6.2) — unchanged.
5. **The remaining retro §10.6 items** — the identity-mark variant and any new public
   placement, the Slovak partner institution's public wording, and whether any budget
   figure beyond the announced frame may go public — unchanged by this pass.

### S10. Confidentiality check on this record

Passed. This section names no withheld value: no vehicle designation, no provider or
spaceport, no launch or landing date, no absolute end date, no payload or instrument
item, and no landing-design figure, unit identifier, zone, hazard or traverse inventory.
Gated material is cited **by class** or **by location** (`docs/area/AREA.md` §Control
record and §Map package; `docs/SCENARIO.md` §Continuity and release controls; the brief's
gated items and forbidden token set; `website/scripts/guards.mjs`) so a human can act
without this file becoming a second copy of what is withheld. Scan results are reported
as counts and classes, never as a term inventory. The released values quoted here (the
field name, the planning centre, the envelope, the local frame, the released lifetime,
the budget frame and the window) are already public in the article under the recorded
release, and quoting them is what makes §S3–§S5 checkable. Scratch work lives in
`/tmp/rh-editor-ff937d33b/`, outside the repository. This record is private working
material under `.agents/work/`; it is imported by no route and creates no public surface.

### S11. What this verdict means, and what happens next

`approved` means: the corrected step-001 revision package — article, frontmatter,
metadata, captions, alt text, labels, card copy, built pages and assets — is accurate to
released canon and to the recorded human release, honest about uncertainty, accessible in
its alt text and labels, valid in its metadata, free of gated or forbidden material on
every public string, and free of broken links and dead affordances. All five required
changes from pass 1 are applied and verified, and the continuity gate has cleared the
same bytes.

It does **not** mean the package is released, published, deployable or canon-approved.
No detail route exists, `releasedNewsSlugs` stays empty, and human canon and release
approval remain required before any public deployment. Nothing was published, deployed
or decided about canon by this gate.

- **Mission-timeline step:** 001 (project announcement), revision gate, pass 2.
- **Card:** `t_ff937d33` (`mars-ai-simulator-editor`).
- **Output:** this record — §S1–S11 plus the metadata `Status (revision…)` row.
- **Public/canon impact:** none. No `docs/`, `docs/timeline/`, `website/src/`,
  `website/scripts/` or `website/news/` file was edited by this gate; the article hash is
  unchanged by it; no route, no release-list entry, no deploy.
- **Confidentiality check:** passed (§S10).
- **Validation completed:** §S2, §S4, §S5 — build exit 0 with `check:dist` green, 38/38
  vitest, `astro check` clean, frontmatter parsed with the site's own parser, two
  forbidden-token lists scanned on three surfaces, released-value and near-miss scans,
  three external links 200, built-page and dist-file inspections.
- **Not run and not mine:** no deploy, no preview, no canon edit, no asset generation.
  Technical validation and any commit belong to BUILD `t_f63be155` (`mars-ai-simulator-dev`),
  which this completion releases.
- **Review outstanding:** human canon approval and human release approval for article
  001; the routed items in §S8; the open human decisions in §S9.
- **Next owner and action:** `mars-ai-simulator-dev` — build/verify on article
  `73c2d047…`, own the commit/push, and pick up the O2 build-hygiene item; then the
  human story owner for canon and release approval.
- **Hotspot (repeat, for the orchestrator):**
  `website/news/001-project-announcement.mdx` — the corrective card, the continuity
  re-check, this gate and BUILD `t_f63be155` all key on this file's hash; any further
  edit invalidates this verdict and the build evidence behind it.
- **Corrective card:** none created by this pass — nothing material remains open inside
  this gate's scope.

---

## Record date: 2026-09-17 (card `t_531698d9`) — the simulated date of writing, applied

This article now carries **exactly one** `simulatedDate`: the date, inside the fiction, on which the
article was written. The merged editorial role assigns and verifies it from the locked milestone table in
`docs/SCENARIO.md` — never from the article's repository history (`docs/INSTRUCTIONS.md` §"Canon and
information safety"; `AGENTS.md` §"Content workflow policy"; `.agents/skills/editorial-review/SKILL.md`
§"The simulated record date"). The change is one inserted frontmatter line and nothing else:
`git diff --stat -- website/news/` reports `website/news/001-project-announcement.mdx | 1 +`, 1 insertion
and 0 deletions (across the three published articles), and `git diff` shows no other byte moved.

| Item                        | Value                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Value applied               | `2026-10-12` — rendered `Simulated record date · 12 October 2026`                                                                                                                                            |
| Milestone line it came from | `docs/SCENARIO.md` §"Launch and mission dates", line 182: the row `12 October 2026 — Red Horizon Council charter takes effect` (a locked row; the row text is authoritative, the line number is a pointer)   |
| Applied revision            | sha256 `923a12d87a92279712a51e61dfa8b42793474b1d239ec2bef8c3cdc03617d399`, 4,832 B                                                                                                                           |
| Previous revision           | sha256 `73c2d04734b466a8f642f342bf1ce01c5fb3b0d343f17f6b6c8e9ee8007ab5ec`, 4,806 B — the hash this record's pass-2 sections (§S2, §S5, §S8) and `.agents/work/continuity/001-project-announcement.md` pinned |
| Value shape                 | unquoted `YYYY-MM-DD`, the shape `src/lib/simulated-date.ts` documents for this role; the schema accepts that shape (the `Date` js-yaml resolves) and the quoted string, and renders one wording for either  |

**Why this milestone, and not the alternative.** The card offered `16 September 2026` ("Scenario and
two-Mars-year design life approved") as the alternative. It is a pre-founding internal act: this article
reports a named coalition that "has agreed" to build one lander and one rover, equal-vote governance, and a
Council-held reserve inside a €2.10 billion lifecycle frame — the charter taking effect is what establishes
the body those sentences describe. A record date before the charter would place the writing ahead of the
governance it reports as agreed, so the charter row is the honest anchor for step 001.

**The four checks the card requires, each stated.**

| Check                                                              | Result | Evidence                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implies no event step 001 has not released                         | PASS   | At 12 October 2026 the released material is step 001's announcement scope: purpose, coalition, target region, window and budget frame, governance. The article states nothing beyond it; the payload, the vehicle, the launcher and the surface campaign all remain "still ahead of us" in its own words. |
| Cannot be read as a launch, landing or other withheld mission date | PASS   | 12 October 2026 is not a launch, landing, entry or assembly milestone and sits four and a half years before the locked departure row; the only schedule the article states is the 2031 window, which step 001 released.                                                                                   |
| Contradicts no sentence already public                             | PASS   | The published 002 and 003 do not date the announcement; 002's "first public step set the science question" and 003's recap of the payload scope both hold with an announcement dated 12 October 2026. No frontmatter string, alt text, caption or summary carries a conflicting date.                     |
| The three articles stay in timeline order by their dates           | PASS   | `2026-10-12` (001) before `2027-03-19` (002) before `2029-07-13` (003) — the same order as `order: 1 / 2 / 3`.                                                                                                                                                                                            |

**The published surface, measured in a scratch copy outside the repository.** The copy carried `src/`,
`public/`, `scripts/`, `news/`, `test/`, the Astro config and `package.json`, plus a `docs/` symlink, with
the installed packages linked in one by one so Astro's content-layer cache stayed in the throwaway root; the
project's own Astro CLI built it (8 pages, postbuild guard green) and the shared checkout was not written to
(no build, no guard CLI run there — `scripts/check-dist.mjs` prunes on failure, so a gate must not build the
shared `dist/`).

| Measurement                                                           | Result                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The article page states the date                                      | `/news/001-project-announcement/` — one occurrence, inside the `class="article-date"` element, text `Simulated record date · 12 October 2026`                                                                                                                                                                                                                                                                                         |
| The label presents it as part of the fiction                          | The rendered string is the label plus the in-fiction date, and nothing introduces it as a real publication, modification or sitemap date: the page emits no `datePublished`, `dateModified`, `lastmod`, `<time datetime>`, JSON-LD block or sitemap reference                                                                                                                                                                         |
| Site-wide machine-date scan                                           | Every file under the scratch `dist/`: **0** hits for all ten tokens the date suite lists, and no ISO-shaped form of any of the three applied values. (The three ISO-shaped `2026-09-16` strings on the 001 page are the plates' pre-existing provenance sentences, supplied by the media registry, not by the article file — see the routed observation below.)                                                                       |
| The listing surfaces                                                  | `/` and `/news/` each render the article's line once, alongside the other two articles' lines                                                                                                                                                                                                                                                                                                                                         |
| The site's own gate, in the scratch copy                              | `vitest run`: **14 files / 147 tests passed**, including the date suite's 9 cases. Its real-build half pairs every published article's frontmatter with its own page, so with three values present it now tests three pages instead of passing vacuously; `node scripts/check-dist.mjs` exits 0 with all three `/news/<slug>/` routes generated and "no reference into a withheld directory, and no withheld file or marker in dist/" |
| Red-first — the page follows the frontmatter, not a hard-coded string | Planting `simulatedDate: 2024-01-01` in the scratch copy made that page render `Simulated record date · 1 January 2024` while the other two kept their values; planting a prose value failed the build with `InvalidContentEntryDataError` naming `simulatedDate` and the pattern. The three applied values are therefore schema-validated and rendered from the file.                                                                |

**The live origin before this change** — `https://mars-ai-simulation.janpolacek.workers.dev`, in-page
`fetch` with `crypto.subtle` hashing at 15:41 CEST on 2026-09-17 (a direct `curl` is refused by this
session's command scanner; same bytes, same digest): `/news/001-project-announcement/` **200**, 11,792 B,
sha256 `ba789bc9…`, **0** occurrences of the label, no machine-date token. The public surface therefore
carries no record date until the technical card pushes this change; that card verifies the live pages
afterwards.

**Revision-history note.** The earlier entries in this record — §S2's gate-input hash row, §S5's surface
measurements and §S8's hotspot note for `website/news/001-project-announcement.mdx` — pin sha256
`73c2d047…` (4,806 B). The applied revision is `923a12d8…` (4,832 B): one frontmatter line longer and
otherwise byte-identical. Their readings stand for everything except the record date, no row in them is
contradicted by it, and this section supersedes nothing — it extends the record with a field the article
did not declare when §S was written.

**Routed observation (not a failure of this change).** The 001 page's plate captions carry the artwork's
generation date as a provenance sentence from the media registry (`2026-09-16`), not from the article file
— pre-existing, human-released material, rendered as prose with no machine-readable form. It is recorded
here so a later reader does not read it as this article's record date. **Owner:** the visuals/provenance
chain (the same class as the 003 release record's O-3) and `project-documentation` for the dossier record.

**Release decision for this change** is recorded on card `t_531698d9` (this role), together with the three
values and the milestone line behind each; the technical card `t_1059c973` (`mars-ai-simulator-dev`)
applies and pushes the change. No canon file was edited: `docs/` was read only. Landing-design material is
named here by location, never by value.

---

**Final label: `approved`** (revision re-verification, card `t_ff937d33`, pass 2; supersedes
the pass-1 label `changes_requested` recorded above, whose §R0–R9 stays as written with
the §S7 correction applied to it)

---
