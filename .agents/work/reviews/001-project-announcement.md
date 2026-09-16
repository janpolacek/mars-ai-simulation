# Review: 001-project-announcement (verification of the published step-001 article)

## Review metadata

| Field           | Value                                                                                                                                                                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article         | `website/news/001-project-announcement.mdx`                                                                                                                                                                                                                                                           |
| Review type     | Verification of the published step-001 article against its allowed public angle                                                                                                                                                                                                                       |
| Gate inputs     | `docs/timeline/001-project-announcement.md` (allowed angle, spoilers), `docs/SCENARIO.md` (locked canon, release controls), `docs/brand/BRAND.md`, `website/src/content.config.ts`, `website/src/pages/index.astro`, `website/scripts/sync-assets.mjs`, local build output `website/dist/` |
| Reviewer        | `mars-ai-simulator-editor` (editorial gate; continuity consulted through the `editorial-review` skill)                                                                                                                                                                                                |
| Skill           | `editorial-review`                                                                                                                                                                                                                                                                                    |
| Card            | `t_3302ef7e`                                                                                                                                                                                                                                                                                          |
| Corrective card | `t_fc952c7d` (site owner `mars-ai-simulator-dev`), linked as a blocking parent of this review                                                                                                                                                                                                         |
| Status          | `changes_requested`                                                                                                                                                                                                                                                                                   |
| Record origin   | This file is the record the planner created as a template on `t_67539573`; its review table was replaced and expanded with the checks required by the `editorial-review` skill.                                                                                                                       |

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

| Check                                               | Result                          | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Article: no payload or instrument selection         | PASS                            | No instrument, sensor, spectrometer, camera-package, or sampling device is named or implied. ``grep`` token scan of the file for `payload                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | spectrom | raman | isotope | americium | sample | abrasion` returns no match; the only forward reference is "what the rover carries … still ahead of us". |
| Article: no hardware ownership disclosed            | PASS                            | The ten countries are listed, and no country is tied to a subsystem, contribution, or work share. Compare the locked split in `docs/SCENARIO.md` lines 63–74, none of which appears in the article.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Article: no launch provider disclosed               | PASS                            | No launcher, launch site, or provider name. "how the mission reaches Mars … still ahead of us". Canon reserves Ariane 64/Kourou for step 004.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Article: no Asteria Field disclosed                 | PASS                            | The phrase and the coordinates are absent; only the region ("Margaritifer Terra") appears, which the step-001 allowed angle permits ("the target region"). The Asteria Field map package (now `docs/area/`, relocated there by the docs restructure after this review ran) is **not** synced into `website/public/assets/` — `website/scripts/sync-assets.mjs` copies only `docs/brand` and `docs/vehicle` — and no map file appears in `website/dist/`.                                                                                                                                                                                                |
| Article: no exact launch/landing dates              | PASS                            | "a launch window in 2031" only; step 001 allows "the window and year only". No month, day, or mission date appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Article: no RH-01 name or imagery                   | PASS                            | No `RH-01`, `Pathfinder`, vehicle render, or rover design detail in the file or its frontmatter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Article: no fact from a later timeline step         | PASS                            | Claim-level check in section 2; every claim is step-001 mission-identity, coalition, science-objective, or budget-frame material.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Article: every material claim traceable             | PASS                            | Section 2 maps each claim to `docs/SCENARIO.md` / `docs/timeline/001-project-announcement.md`. No unsourced claim, and no real-world factual claim that would need an external citation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Citations                                           | PASS                            | All claims are fictional-programme claims from locked canon. No real agency, institution, university, or company is named or implied, so no real-world source note is required. `docs/SCENARIO.md` grounding sources are not needed by this copy.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Coherence and chronology                            | PASS (article)                  | The announcement opens the record ("now has a name, a purpose, and partners"), states the purpose, governance principle, schedule and budget frames, and closes on what is still undecided. Nothing pre-empts a later release step.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Voice and grammar                                   | PASS                            | Matches `brand-voice`: concrete, unsentimental, no grandeur, no urgency, no unearned certainty; fictional/AI-assisted disclosure is stated in the body ("fictional, AI-assisted") and on the page. One optional copy suggestion in section 7.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Links                                               | PASS (article)                  | The article has no links (verified by regex scan). The homepage anchors it relies on exist: `#updates`, `#mission`, `#timeline`, `#top`, plus `#main-content`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Published card link affordance                      | **FAIL**                        | `index.astro` line 138 renders `linkLabel` ("First public briefing") as a `<span>` with a navigation arrow, and `website/src/pages/` contains only `index.astro` — there is no individual news route, so the 252-word article body is never rendered and the label advertises a briefing the reader cannot open. Corrective card item 4.                                                                                                                                                                                                                                                                                                                |
| Image placement and caption                         | **FAIL (follow-up required)**   | `media: /assets/logo.png` is 1254 × 1254 (square); `.news-image img` uses `object-fit: cover` in a box that is wider than it is tall at every breakpoint, so the top and bottom of the square are necessarily cropped. `mediaAlt` names the sunrise at the upper-left rim, and the Earth/Moon cue sits at the upper right — both are in the region most exposed to cropping. Corrective card item 5 (verify in a local preview, then fix or record). `mediaLabel` ("Red Horizon // programme identity") is accurate and restrained.                                                                                                                     |
| Alt text                                            | PASS                            | `mediaAlt` matches the file actually used: a rust-red Mars disc crossed by low highlighted hills with a small Sun behind its upper-left edge; no text in the image. See section 7 for the missing Earth/Moon cue and the "on black" wording conflict with `docs/brand/BRAND.md`.                                                                                                                                                                                                                                                                                                                                                             |
| Metadata and schema                                 | PASS                            | Frontmatter parses as YAML; all schema-required fields present (`title`, `category`, `status`, `summary`, `linkLabel`, `order`), `order: 1` is a non-negative integer, `publication: published` is a valid enum value and matches the site's published-only filter, `accent: oxide` is a valid enum value, `media`/`mediaAlt`/`mediaLabel` are strings.                                                                                                                                                                                                                                                                                                 |
| Media variant and asset provenance                  | **FAIL**                        | The file in use (`/assets/logo.png` = `docs/brand/logo.png`, SHA-256 `d23d7c99986efd73ee33e84e3699ff757bf2b0c286fa0cf24e5252e4623ff0f5`) is an RGBA derivative with no black field. The approved source hash in `docs/brand/BRAND.md` is `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`, which matches `docs/brand/logo-bg-black.png`. The guidelines forbid altering or regenerating the approved mark for public use without a new review, and their "Publication boundary" requires a separate human release decision for public-site use beyond the current Preparing site. This needs a human decision (section 6). |
| Published surface: no RH-01 name                    | **FAIL**                        | `website/src/pages/index.astro` line 68 ("…the work of its first surface vehicle, RH-01 Pathfinder") and line 176 ("Using RH-01 Pathfinder to survey terrain…"); the name also reaches the build (`grep -o "RH-01[^<]*" website/dist/index.html` → 2 hits). Step 003 is the vehicle-design release step. Corrective card item 2.                                                                                                                                                                                                                                                                                                                        |
| Published surface: no RH-01 imagery                 | **FAIL**                        | `website/scripts/sync-assets.mjs` copies every PNG in `docs/vehicle/` into `website/public/assets/`, and the local build contains `dist/assets/canonical.png`, `front-left.png`, `rear-right.png`, `side-view.png`, `contact-arm.png`, `contact-arm-scene.png`. `docs/SCENARIO.md` release controls: "RH-01 imagery waits for step 003". No human approval for publishing them is recorded in the repository. Corrective card item 1.                                                                                                                                                                                                                   |
| Published surface: no unexplained canon-like values | **FAIL**                        | `index.astro` line 58 prints `18° 42′ S / 226° 14′ E` with no label. No canon source contains that coordinate (`docs/SCENARIO.md` target region: Asteria Field, 17.80°S 332.20°E; no other coordinate in the repository), so a reader can read it as the mission's location. Corrective card item 3.                                                                                                                                                                                                                                                                                                                                                    |
| Budget figure within the allowed frame              | PASS                            | "€2.10 billion in constant 2026 euros, covering concept work through the final science archive" matches `docs/SCENARIO.md` line 216 and the step-001 allowance. No breakdown, no per-partner share, no cost table.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Two-Mars-year supported surface life withheld       | PASS                            | Not mentioned in the article or its frontmatter; the schedule frame stops at the 2031 window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| FEI STU not mentioned                               | PASS                            | No mention of the institution or the Slovak contribution anywhere in the article or the page.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Public title and author credit                      | OPEN (not a mechanical failure) | No byline field exists in `website/src/content.config.ts` and no policy in `AGENTS.md` / `docs/INSTRUCTIONS.md` requires one, so the article does not fail a check; the human's confirmation of the public title and credit is still outstanding (section 6).                                                                                                                                                                                                                                                                                                                                                                                           |
| Fictional and AI-assisted disclosure                | PASS                            | Body: "fictional, AI-assisted Mars exploration programme". Page: `<meta name="description">` and the disclosure aside ("This is AI-generated fiction", "not affiliated with or endorsed by any real space agency").                                                                                                                                                                                                                                                                                                                                                                                                                                     |

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
