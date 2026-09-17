# Review: 002-payload-selection (editorial final gate)

## Review metadata

| Field              | Value                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug               | `002-payload-selection`                                                                                                                      |
| Card               | `t_db1becc6` — `mars-ai-simulator-editor` (stage `review`); re-run on `t_0f626603` (see Appendix A)                                          |
| Timeline step      | `002-payload-selection` (`docs/timeline/002-payload-selection.md`)                                                                           |
| Article            | `website/news/002-payload-selection.mdx` (SHA-256 `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b`, 2026-09-17 01:19 CEST) |
| Brief              | `.agents/work/briefs/002-payload-selection.md`                                                                                               |
| Source pack        | `.agents/work/sources/002-payload-selection.md`                                                                                              |
| Asset manifest     | `.agents/work/assets/002-payload-selection/assets.md`                                                                                        |
| SEO package        | `.agents/work/seo/002-payload-selection.md`                                                                                                  |
| Continuity verdict | `.agents/work/continuity/002-payload-selection.md` — `continuity clear` (`t_5f29e3aa`)                                                       |
| Skill              | `editorial-review` (project), with `copy-editing` and `brand-voice` applied to the copy rows                                                 |
| Verdict written    | 2026-09-17 01:31 CEST, against the live shared working tree                                                                                  |
| Status             | `approved`                                                                                                                                   |

Path substitution recorded: my role definition names `docs/content/reviews/` as the
review-record location; the docs restructure moved per-article working papers to
`.agents/work/reviews/`, which is where this card and `docs/INSTRUCTIONS.md` place
them. This file is the current equivalent, not a second copy of the record.

## Verdict

`approved`.

Every check in the review table passes. No material factual, accessibility,
licensing, coherence, or metadata failure remains open, and the continuity gate on
the same package returned `continuity clear`. Two citation-precision and wording
items carried forward from the continuity verdict, plus four optional copy
suggestions of my own, are recorded in section 9 as non-blocking — each is listed
explicitly so nothing is lost and nothing is changed by assumption.

`approved` is an **editorial gate only**. It is not canon approval and not a release.
Three human decisions remain outstanding before anything becomes public (section 11):
the identity mark's new public placement, canon/release approval, and the release
reference in `website/src/lib/releases.ts`. Nothing was deployed, published, or
committed by this review.

## Review table

| Check                                              | Result         | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every material claim traces to the source pack     | PASS           | Claim-by-claim mapping in section 5. Twenty claims, each resolving to the source pack's scenario source (`docs/timeline/002-payload-selection.md`, `docs/SCENARIO.md`) or to one of the five real-world references. No unsourced claim and no unsourced real-world factual claim.                                                                                                                                                                                                                                                                                                              |
| No fact from timeline steps 003–011                | PASS           | Gated-term scan of the article against the forbidden classes listed in `.agents/work/briefs/002-payload-selection.md` ("Forbidden angle") and the withheld archive of `docs/timeline/002-payload-selection.md` ("Spoilers and handoff"): vehicle imagery/design, launcher and spaceport, landing-area details, exact dates, power and duration terms, sample-return implications, the real-institution role. Hit counts: 0. The only four-digit year in the article is `2031`. Continuity reached the same result over a wider term set; the scan's token list is kept outside the repository. |
| No unapproved real institution mentions            | PASS           | The only real organisations named are ESA, NASA, and CNES, each in a precedent/reading-list role with an explicit non-endorsement paragraph (lines 114–116). No university, laboratory, or company appears; FEI STU is absent, as its source-pack entry requires separate human approval.                                                                                                                                                                                                                                                                                                      |
| No exact launch or landing dates                   | PASS           | "the 2031 launch window" only (lines 101–102). No month, day, sol count, or interval. "No launch or landing date is being stated." states the withholding rather than leaking it.                                                                                                                                                                                                                                                                                                                                                                                                              |
| No RH-01 imagery                                   | PASS           | No `media` field in the frontmatter; no image is placed, imported, or referenced. The numbered placeholder that `NewsCard.astro` draws without `media` is `aria-hidden="true"` and decorative. `docs/vehicle/` is not referenced from the article or the site source (`scripts/guards.mjs` scan clean).                                                                                                                                                                                                                                                                                        |
| No Asteria Field details                           | PASS           | The landing-area name, coordinates, maps, local units, and traverse material are absent. Only the region "Margaritifer Terra" appears, which step 001 already published. `docs/area/` is untouched by the build.                                                                                                                                                                                                                                                                                                                                                                               |
| Links resolve correctly                            | PASS           | Five of five external links returned HTTP 200 in this run; Springer additionally verified in a real browser, where the title resolves to "Mars 2020 Mission Overview \| Space Science Reviews \| Springer Nature Link". All three internal links target `/#mission` or `/#updates`, and both anchors exist in the built homepage (`dist/index.html`).                                                                                                                                                                                                                                          |
| Alt text on all images                             | PASS (vacuous) | No image is placed in this package, so no alt text is live. The placeholder deliberately carries none. If the withheld sensor-illustration brief is ever produced, its alt text is written from the produced candidate.                                                                                                                                                                                                                                                                                                                                                                        |
| Voice and grammar                                  | PASS           | `brand-voice` rows pass: concrete, unsentimental, no grandeur, no urgency, no unearned certainty, no real-agency endorsement implied. Grammar, agreement, tense, and terminology are clean; instrument names and Markdown semantics are preserved. Copy suggestions are optional and listed in section 9.                                                                                                                                                                                                                                                                                      |
| Metadata completeness                              | PASS           | Frontmatter parses and validates against `website/src/content.config.ts` in a real build: `title`, `category`, `status`, `summary`, `linkLabel`, `order` (integer ≥ 0), `publication: draft` (valid enum, held back), `accent: amber` (valid enum). `media` is absent, which is the schema-legal state; no `mediaAlt` is required without it.                                                                                                                                                                                                                                                  |
| Citations are canonical for every real-world claim | PASS           | Each real-world precedent maps to a cited page whose fetched text I confirmed (section 5, rows 12–17). One clause is not carried by its inline target page — recorded as observation 1, section 9, not a false claim.                                                                                                                                                                                                                                                                                                                                                                          |
| Coherence and chronology                           | PASS           | The article presents itself as the second public step, cites the first, and narrates no later event. Order matches `docs/timeline/README.md` and the release controls in `docs/SCENARIO.md`. The "no life detection" invariant is preserved. Section 6.                                                                                                                                                                                                                                                                                                                                        |
| Image placement and caption                        | PASS           | Nothing is placed, so no crop, label, or caption risk exists in the draft. The manifest's reuse row is recorded but unapplied by design, pending a human release decision; the amber `news-placeholder` is the intended state for a draft.                                                                                                                                                                                                                                                                                                                                                     |
| Asset provenance (approved hash)                   | PASS           | `sha256sum docs/brand/logo-bg-black.png` → `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749`, identical to the hash `docs/brand/BRAND.md` line 10 records for the approved source mark. The rejected derivative `logo.png` (`d23d7c99…`) is not in use anywhere in the site source.                                                                                                                                                                                                                                                                                           |
| Fictional and AI-assisted disclosure               | PASS           | Body, first sentence: "fictional, AI-assisted Mars exploration programme", linked to the homepage mission statement. Site-level: `site.defaultDescription` and the `DisclosureNote` aside ("This is AI-generated fiction… not affiliated with or endorsed by any real space agency"). Neither is hidden or footnote-only.                                                                                                                                                                                                                                                                      |
| Published surface carries no gated material        | PASS           | Build output `website/dist/` holds no gated name, marker, coordinate, or withheld file; `scripts/check-dist.mjs` exits 0 at verdict time. `website/src/` contains no match for the guard's marker list or the launcher, spaceport, real-institution, and coordinate classes. `website/public/assets/` holds only the two tracked favicon files. Section 7.                                                                                                                                                                                                                                     |
| Draft emits no route, card, or listing entry       | PASS           | `releasedNewsSlugs` in `website/src/lib/releases.ts` is empty and `publication: draft` fails `isPublishedEntry`, so `src/pages/news/[slug].astro` generates no page: built routes are `/index.html` and `/news/index.html` only. The draft title and summary occur 0 times in `dist/`; the newsroom lists one card (`Announcement 01`).                                                                                                                                                                                                                                                        |
| Card label has no false affordance                 | PASS           | `NewsCard.astro` renders `linkLabel` as a plain `<span>` unless `isReleasedNewsSlug(item.id)` is true, so the 002 label cannot advertise an article the reader cannot open. This is the 001 finding resolved by the refactor.                                                                                                                                                                                                                                                                                                                                                                  |

## 1. Scope and method

Editorial gate over the whole step-002 package as it stands at 2026-09-17 01:31 CEST:
the article, its frontmatter, the source pack, the asset manifest, the SEO package,
the continuity verdict, and the public surface that would carry the article. Work
was **verification plus judgement only** — this gate writes this record and changes
no other artifact. No deployment, no preview, and no publication ran here.

Commands run from the repository root unless noted:

- `cd website && npm run build` → complete, 2 pages (`/index.html`, `/news/index.html`),
  `postbuild` `check-dist.mjs` exit 0. The draft produces no route, card, or listing
  entry, which is what proves the article body is not public yet.
- `cd website && npm test` → 16 of 16 pass.
- `cd website && npm run lint` → clean, no findings. (Earlier handoffs reported 8–9
  parse errors in `.astro` files; the current tree lints clean. Recorded because the
  SEO and continuity records note the older number.)
- `node scripts/check-dist.mjs` re-run at verdict time → exit 0, no gated path, name,
  content, or marker in `dist/`.
- Gated-marker grep over `website/dist/` and `website/src/` → zero hits.
- `grep -rc` of the draft title and summary across `dist/` → 0 and 0.
- `curl -o /dev/null -w "%{http_code}" -L` for the five external links → 5 × 200.
- Real-browser fetch of the cited ESA instrument-suite page and the Springer article
  (static fetch hit a JS challenge on Springer; the browser resolved the correct paper).
- `sha256sum docs/brand/logo-bg-black.png docs/brand/logo.png` vs `BRAND.md` line 10.
- Anchor check: `grep -o 'id="…"' dist/index.html` → `#mission`, `#updates`, `#top` all present.
- `git status --short` + `sha256sum` of the four package records, taken immediately
  before this verdict (section 10).

## 2. Copy edit (clarity, flow, consistency, accessibility)

The article is 1,088 body words across ten `h2` sections with no skipped heading
levels and no second `h1` (the frontmatter `title` is the route's only `h1`, rendered
by `ArticleView.astro` as `#article-title`). Structure is reader-led: the four
measurement jobs are explained as questions, then the programme structure, then the
accommodation constraint, then what is open, then what the mission is not.

No copy edit was applied. My role's deliverable is an edited draft, but this card is
the review gate, and the `editorial-review` skill limits edits here to the review
record itself and forbids silently repairing another worker's artifact. Every
suggestion is therefore recorded in section 9 rather than applied, so the writer owns
the wording. Nothing in section 9 changes a fact, a date, a name, or Markdown
semantics, and none of it is a pass/fail row.

What was checked and found sound:

- Voice matches `brand-voice`: concrete verbs, no grandeur, no urgency, no claim of
  discovery, no real-agency endorsement. Uncertainty is written as uncertainty in a
  dedicated section, not smoothed over.
- Plain-language handling is good where it matters most: "spectroscopy" is defined in
  place ("reading the light a target reflects or gives off"), and the mission's
  four-job payload is stated in ordinary words before any instrument name appears.
- Terminology is consistent with published canon: "payload scope", "Red Horizon One",
  "ten partner groups … one vote each", "Margaritifer Terra", "2031 launch window".
- Markdown semantics are preserved: every internal link is root-relative with a
  fragment, so the links survive the move to `/news/002-payload-selection/`; the
  sources section is a plain list; no heading is used decoratively.
- Accessibility: no image is placed, so nothing needs alt text; the placeholder is
  `aria-hidden`; the article relies only on text and links, and the layout that
  renders it is keyboard-usable and responsive (`ArticleView.astro` inherits the
  site's styles and the `<noscript>` fallbacks in `BaseLayout.astro`).

## 3. Metadata, schema, and the card face

The frontmatter validates against the live `content.config.ts` schema — confirmed by a
build that syncs the draft into the `news` collection with zero errors — so the
package cannot ship a mistyped media key, a missing alt text, or an invalid enum.
`publication: draft` is the schema default and matches the site's published-only
filter, so the entry is invisible by construction rather than by reviewer attention.
`order: 2` places it after the published `001` if it is ever released.

The SEO pass's split-title/split-summary conflict (one field serving the card face,
the standfirst, and the meta description) is a site-engineer follow-up already
recorded in `.agents/work/seo/002-payload-selection.md` §9; it is not an editorial
defect and not a row here.

## 4. Media placement and caption

No image is placed. The manifest records the identity-mark reuse but deliberately
leaves the `media` field out of the draft until a human records the release decision
`docs/brand/BRAND.md` "Publication boundary" requires — placing it without that
decision would be an agent taking a release decision. The alternative
sensor-illustration brief in the manifest is recorded and **not produced**; that
remains a human go-ahead on `t_cb3464ef`.

Because nothing is placed, the two failure modes the step-001 review hit — a square
mark cropped in a wide media band, and alt text describing a cue the crop hides — do
not apply here. If the reuse is applied later, the manifest's alt text is
byte-identical to the alt text already published on the 001 card, and
`mediaLabel` (`Red Horizon // programme identity`) says exactly what the image is.

## 5. Claim-level traceability

| #  | Claim in the article                                                                                                            | Canonical source                                                                                                                                                                                                                                                                             | Result                                                                                                                                                                                                    |
| -- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Red Horizon is a fictional, AI-assisted Mars exploration programme                                                              | `docs/INSTRUCTIONS.md` "Canon and information safety"; published 001; `site.ts`                                                                                                                                                                                                              | PASS                                                                                                                                                                                                      |
| 2  | The first public step set the science question: water and an ancient equatorial landscape, Margaritifer Terra                   | Published 001 body; `docs/SCENARIO.md` line 84                                                                                                                                                                                                                                               | PASS                                                                                                                                                                                                      |
| 3  | The payload scope: panoramic and navigation imaging, weather measurement, mineral and rock sensing, contact tool                | `docs/timeline/002-payload-selection.md` lines 5–7; `docs/SCENARIO.md` 159–166                                                                                                                                                                                                               | PASS — the step's four categories restated with none added or dropped.                                                                                                                                    |
| 4  | The scope is not a finished instrument list; names and assignments are still open, and the programme says so                    | Step 002 lines 6–8, 15                                                                                                                                                                                                                                                                       | PASS — the step's own open items stay open, in the same terms.                                                                                                                                            |
| 5  | Four jobs, each answering a different question; geology is stronger when answers cross-check                                    | Step 002 lines 17–21 (allowed public angle: explain the questions and why a multi-sensor package matters)                                                                                                                                                                                    | PASS                                                                                                                                                                                                      |
| 6  | Panoramic imaging gives context; navigation cameras give stereo for drive planning and terrain judgement                        | NASA Mars 2020 instruments page (navigation cameras); Springer Mars 2020 overview (source pack §5)                                                                                                                                                                                           | PASS                                                                                                                                                                                                      |
| 7  | PanCam: wide-angle stereo cameras, high-resolution camera, filter wheels, on ESA's Rosalind Franklin rover                      | Cited ESA suite page + source pack §1–2, §6–7                                                                                                                                                                                                                                                | PASS with a citation note — the cited page states the stereo and high-resolution cameras; "filter wheels" is carried by the source pack's PanCam references, not by that page (section 9, observation 1). |
| 8  | MastCam-Z: a pair of zoomable cameras on Perseverance's mast                                                                    | NASA page: "the mast-mounted camera system that is equipped with a zoom function"; two Mastcam-Z imagers shown                                                                                                                                                                               | PASS                                                                                                                                                                                                      |
| 9  | SuperCam: several spectroscopic methods in one instrument, including LIBS and Raman, mast unit built by a French-led consortium | CNES SuperCam page: "a suite of instruments employing five different measuring technologies … (LIBS, Raman and infrared)"; "Design and construction of the French contribution to SuperCam, called the Mast Unit, was initiated and coordinated by IRAP with CNES oversight"; source pack §4 | PASS — the article marks the mission "a real mission, unrelated to Red Horizon".                                                                                                                          |
| 10 | Enfys: infrared spectrometer on Rosalind Franklin, working alongside the panorama cameras on mineral composition                | Cited ESA Exploration Science page: "Enfys —infrared (IR) spectrometer … Working with PanCam, Enfys will contribute to the selection of suitable targets"                                                                                                                                    | PASS — verified in the page's own text.                                                                                                                                                                   |
| 11 | MEDA: Perseverance's weather station, measuring wind, temperature, humidity, airborne dust                                      | NASA page: "weather measurements including wind speed and direction, temperature and humidity, and also measures the amount and size of dust particles"                                                                                                                                      | PASS                                                                                                                                                                                                      |
| 12 | Weather sensing is a normal part of a surface science payload, not an add-on                                                    | NASA page + source pack §3; corroborated by SCENARIO's weather package                                                                                                                                                                                                                       | PASS                                                                                                                                                                                                      |
| 13 | SHERLOC works with the WATSON camera at the end of the rover's arm                                                              | NASA page: SHERLOC "Mounted on the rover's robotic arm … assisted by WATSON, a color camera for taking close-up images"                                                                                                                                                                      | PASS                                                                                                                                                                                                      |
| 14 | CLUPI: a close-up imager on Rosalind Franklin designed for the same work                                                        | ESA Exploration Science page: "CLUPI —closeup imager … high-resolution, colour images of rocks, outcrops"                                                                                                                                                                                    | PASS                                                                                                                                                                                                      |
| 15 | Ten partner groups, one vote each whatever they contribute                                                                      | `docs/SCENARIO.md` 32–48; published 001                                                                                                                                                                                                                                                      | PASS — no partner named beyond what 001 published; no shares, thresholds, or Council name.                                                                                                                |
| 16 | A European-led sensor contribution is in the payload scope, name and technique open                                             | Step 002 lines 7–8; `docs/SCENARIO.md` (Spain: mineralogy leadership, Raman/VNIR instrument)                                                                                                                                                                                                 | PASS — the step licenses the contribution's existence; the article names no country and no technique.                                                                                                     |
| 17 | Each instrument needs a physical home and must be mountable, pointable, and non-interfering                                     | Step 002 lines 12, 17–18                                                                                                                                                                                                                                                                     | PASS                                                                                                                                                                                                      |
| 18 | A compact, explainable payload takes precedence over a longer capability list                                                   | Step 002 line 12; `docs/SCENARIO.md` 159                                                                                                                                                                                                                                                     | PASS                                                                                                                                                                                                      |
| 19 | Not a life-detection mission; habitability framed as water, chemistry, energy, stability                                        | `docs/SCENARIO.md` 28–30, 89–95; `docs/timeline/README.md` invariant; published 001                                                                                                                                                                                                          | PASS — no discovery, anomaly, or archive claim.                                                                                                                                                           |
| 20 | Real missions are precedents, not partners; no implied endorsement                                                              | `docs/SCENARIO.md` 4–6, 40–42, 281–282                                                                                                                                                                                                                                                       | PASS — explicit disclaimer plus the reading list.                                                                                                                                                         |

## 6. Coherence and chronology

- Step 002 depends on 001 and the article says so in its second sentence and by
  citation; no event is narrated out of order and no later step's fact appears.
- The article is present-tense "in selection" and explicitly leaves the vehicle,
  provider, site, and dates open, so it cannot be read as a settled payload
  announcement — a reader cannot come away thinking an instrument has been approved.
- Negative statements are consistent with both the public record and the private
  release order: "no launch vehicle has been named", "no landing site has been chosen
  publicly", "no launch or landing date is being stated".
- The 001 "reporting technical risk and anomalies candidly" commitment is not
  contradicted; this step claims no result.
- No budget, mass, duration, power, or date figure appears, matching the release
  control that keeps those for their authorised steps.

## 7. Published-surface and confidentiality check

The step-001 review found the article passing while the **surface carrying it** failed.
This package is checked the same way, and the surface is now clean:

| Surface                              | Check                                                                                        | Result                                                                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Built output `website/dist/`         | marker grep for the `gatedTextMarkers` list in `website/scripts/guards.mjs`; `find` the tree | 0 hits; only the homepage, the newsroom index, the identity-mark webp variants, and the two favicons.                           |
| Site source `website/src/`           | same marker list plus the launcher, spaceport, real-institution, and coordinate classes      | 0 hits. The surface-vehicle designation in the 001 chrome and the unexplained coordinate found by the 001 review are both gone. |
| `website/public/assets/`             | `ls -la`                                                                                     | Only `favicon-32.png` and `favicon.ico`, both tracked. No transient withheld asset was present at verdict time.                 |
| Draft title and summary in the build | `grep -rc` across `dist/`                                                                    | 0 and 0; the published 001 title still appears once per built page.                                                             |
| Route list                           | `check-dist.mjs` at verdict time                                                             | `/index.html`, `/news/index.html` — no `/news/002-payload-selection/`, exit 0.                                                  |
| Asset identity in use                | `sha256sum` vs `BRAND.md`                                                                    | `f9543989…` matches the approved source mark; the rejected RGBA derivative is not in use.                                       |
| Working papers                       | `.agents/work/**` is not a public surface                                                    | Gated terms appear there only to bar material, never to place it.                                                               |

A note on the shared checkout: this tree is edited concurrently by other profiles, and
a worker proving the build guard can transiently plant a withheld asset under the
gitignored `website/public/assets/`. At verdict time (2026-09-17 01:31 CEST) the
directory held only the two tracked favicons and `check-dist.mjs` exited 0, so no
observation is raised.

## 8. Review outstanding / next owner

- **Next owner:** `mars-ai-simulator-dev` on `t_5fdbc8a4` ("Build and deploy:
  002-payload-selection", a child of this card and released by its completion). Local
  build and preview validation only; production deploy still requires a human approval
  and a verified URL.
- **Writer-owned follow-ups:** the optional copy items in section 9, if the writer
  wants them. None blocks release.
- **Human decisions still required before anything is public** (section 11).

## 9. Change note — non-blocking observations and suggestions

Nothing here was applied. Each item is stated so the writer or continuity redactor can
accept or reject it in one pass; none changes a fact, and none is a material failure.

**Carried from the continuity verdict (`.agents/work/continuity/002-payload-selection.md`, observations A–C), and listed here explicitly for continuity review:**

1. **"filter wheels" (article line 43) — citation precision.** The fact is correct and
   is carried by the source pack's PanCam references (`ESA Exploration Science` page and
   the Coates et al. PanCam instrument paper), but the sentence's inline citation is the
   ESA instrument-suite page, whose rendered text states PanCam's stereo and
   high-resolution cameras and does **not** contain "filter wheels". Verified twice in
   this run — static fetch and a real browser (which also shows that page does not
   mention Enfys; the Enfys citation correctly points at the Exploration Science page).
   _Recommendation (writer's choice):_ either add the PanCam instrument paper already in
   the source pack to "Sources and further reading", or drop the three-word clause. No
   canon question and no canon decision needed.
2. **"the mast cameras" (article line 75).** A generic category term in a sentence about
   close-up scale, in an article whose own panorama section already establishes
   wide-view cameras; no count, position, dimension, or finish detail follows. Continuity
   read it as not disclosing the vehicle appearance that step 003 gates. _Recommendation
   (writer's choice):_ keep it with this rationale on the record, or use the neutral
   "the wide-view cameras". No canon decision either way.
3. **"no landing site has been chosen publicly" (article line 100).** Reviewed and
   accepted as written. It is accurate against the public record and the release order,
   it discloses nothing, and it does not retract the target region that published 001
   already names. Changing it to "named" would be a lateral move, not a fix; flagged so
   the wording is a recorded decision rather than an unnoticed choice.

**My own optional copy suggestions (clarity/consistency only):**

4. **"the programme is treating it that way" (line 20).** Vague — "it" could read as the
   scope or as the naming. Consider "and the programme is treating it as open" or
   "and the programme is not presenting it as settled".
5. **"the vehicle" and "the team" (line 90–91).** The article says "rover" everywhere
   else; "the vehicle" invites the reader to wonder which vehicle, and "the team" is the
   only occurrence of that actor. Consider "the rover" and "the programme" (or
   "engineers") for the terminology the rest of the article already uses.
6. **Undefined acronyms.** "laser-induced breakdown spectroscopy" is spelled out but
   "Raman" is not; "MEDA" arrives as a name without its expansion. Both are optional —
   the cited pages carry the expansions — and neither impairs comprehension at this
   level, so I would only touch them if the writer wants the gloss.
7. **Heading suffixes (SEO package §5).** Adding a plain-language half after a colon to
   the four capability headings would put the searchable nouns ("imaging", "sensing",
   "weather", "contact") into the outline while keeping the voice. Already recorded as a
   writer-owned recommendation in `.agents/work/seo/002-payload-selection.md`; repeated
   here only so the editorial gate and the SEO pass do not point in opposite directions.

Not raised, and deliberately so: the article's use of "sampling target" (line 37) is
consistent with the step's "careful sampling" allowance and with SCENARIO's rule that
"sample" means a locally collected, onboard-analysed portion — no sample-return
implication is present. The Springer link required a JavaScript-enabled fetch to
resolve; a plain fetch hit the publisher's bot challenge, but the resource is live and
resolves to the correct paper in a browser, so it is not a broken link.

## 10. Validation performed in this gate

| Check                          | Command / source                                                                  | Result                                                                                                                                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build and content schema       | `cd website && npm run build`                                                     | Complete — 2 pages; draft filtered out (no route, card, or listing entry).                                                                                                                                           |
| Postbuild dist guard           | `node scripts/check-dist.mjs` (also re-run alone at verdict time)                 | exit 0 — no gated path, name, content, or marker in `dist/`.                                                                                                                                                         |
| Test suite                     | `cd website && npm test`                                                          | 16 of 16 pass.                                                                                                                                                                                                       |
| Lint                           | `cd website && npm run lint`                                                      | Clean, 0 findings (the previously reported `.astro` parse errors do not reproduce in this tree).                                                                                                                     |
| External citations             | `curl` status for the five links                                                  | 5 × 200.                                                                                                                                                                                                             |
| Cited-page text                | static fetch + real-browser text extraction of the ESA and NASA pages             | PanCam stereo/high-resolution, Enfys IR spectrometer, CLUPI, MastCam-Z zoom, MEDA weather set, SHERLOC/WATSON arm close-up all confirmed in page text; "filter wheels" not on the cited PanCam page (observation 1). |
| Reference identity             | real browser on the Springer link                                                 | Title resolves to "Mars 2020 Mission Overview \| Space Science Reviews \| Springer Nature Link".                                                                                                                     |
| Internal anchors               | `grep -o 'id="…"' website/dist/index.html`                                        | `#mission`, `#updates`, `#top` present.                                                                                                                                                                              |
| Article token scan             | gated-term scan over the draft (see section 5 and the review table)               | No gated term, date, or later-step fact; the only hits are benign ("grain size", "terrain ahead of it", "filter wheels").                                                                                            |
| Dist and source marker scan    | marker grep over `website/dist/` and `website/src/`                               | 0 hits in both.                                                                                                                                                                                                      |
| Asset hash                     | `sha256sum` vs `docs/brand/BRAND.md` line 10                                      | Match (`f9543989…`); rejected derivative not in use.                                                                                                                                                                 |
| Package hashes at verdict time | `sha256sum` of the article, source pack, manifest, SEO package, continuity record | Article `64373791…`; source pack `ce350054…`; manifest `8179ed1a…`; SEO `96ebede0…`; continuity `9d8ff1a0…`.                                                                                                         |
| Repository hygiene             | `git status --short` at 01:31 CEST                                                | This gate wrote only this review record; the article and every package file were left byte-identical to the state the continuity gate checked.                                                                       |
| Confidentiality                | manual read of every record written here                                          | This review record is working material under `.agents/work/`; it names withheld material only by location or by gated-term class, and it is not a public surface.                                                    |

## 11. What this verdict is not

`approved` is this project's editorial gate on the step-002 package. It is **not**
publication approval, not a canon decision, and not a release. Still required, in
order:

1. **Human release decision on the identity mark's new public placement** — recorded
   by the visuals card `t_cb3464ef` under `docs/brand/BRAND.md` "Publication boundary".
   The draft correctly carries no `media` field until that decision exists.
2. **Human canon and release approval** for the article as a public step-002 release.
3. **A human-recorded release reference** in `website/src/lib/releases.ts` — this, not
   the editorial verdict, is what makes a `/news/002-payload-selection/` page possible.
   `src/lib/releases.ts` documents that an editor's `approved` review is not a release
   and that the list stays empty until a human decision exists on the card.
4. **Human go-ahead on the recorded, unproduced sensor-illustration brief** in the
   asset manifest, if the identity-mark reuse is not selected.

Also outstanding and routed, not raised here: the article's public title and author
credit are still "to be confirmed by human story owner" in the brief, and no byline
field exists in the schema; `docs/beads-archive.jsonl` is absent from the working tree
while `docs/brand/BRAND.md` and `AGENTS.md` still describe it as the read-only archive
(already reported by the step-001 review, owner: story coordinator).

## Appendix A — second gate run on card `t_0f626603`, 2026-09-17 01:45–01:47 CEST

**Verdict re-confirmed: `approved`.** This card re-ran the whole gate against the live
shared working tree. No input of this package had changed since the verdict above, so
the review table and sections 1–11 stand as written; what follows is the evidence that
they still hold on today's tree, and the state the shared checkout was in while the
gate ran.

### A.1 Inputs were byte-identical to the reviewed revision (measured 01:46:11 CEST)

| Input                                                 | SHA-256 now                                                        | Same as the 01:31 run?                                                      |
| ----------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `website/news/002-payload-selection.mdx`              | `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` | Yes — unchanged                                                             |
| `.agents/work/sources/002-payload-selection.md`       | `ce350054609193ca028920ce67320e2bb89a5f5e16ca6c7d6886634a7272ba4c` | Yes                                                                         |
| `.agents/work/assets/002-payload-selection/assets.md` | `8179ed1a4ec351abd0f70ceebf941ed3306b37c6e567aedc64483490b3f1c2a3` | Yes                                                                         |
| `.agents/work/seo/002-payload-selection.md`           | `96ebede0a2c75d67431e8a9db76764c2079ef9ba86e3e27141ca75c54b52b11b` | Yes at 01:46:11 — rewritten by its owner at 01:46:47 (see A.3.5)            |
| `.agents/work/continuity/002-payload-selection.md`    | `9d8ff1a03c11e7916f0f7528e3f9d6a12fc77435fd1c8ff26f0163b3b2db3aeb` | Yes — `continuity clear` still recorded (metadata row, and the final label) |

Because the article and every package record are byte-identical, no claim-level, voice,
metadata, or chronology finding can differ from the 01:31 gate. Only the rows that
depend on the **shared site tree** were re-run, because those inputs did change under
other profiles.

### A.2 Re-run evidence

| Check                            | Command / source                                                                   | Result at this run                                                                                                                                                                                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build and content schema         | `cd website && npm run build` (01:45:20)                                           | Complete; draft filtered out (no 002 route, card, or listing entry); `postbuild` `check-dist` exit 0 at 01:45:22.                                                                                                                                                                      |
| Postbuild dist guard, standalone | `node scripts/check-dist.mjs` at 01:45:44 and 01:46:12                             | 01:45:44 → **exit 1**: a planted build file carried a withheld vehicle-designation marker; the guard reported it, pruned 1 file from `dist/`, and failed closed (see A.3.2). 01:46:12 → **exit 0**, `no reference into a withheld directory, and no withheld file or marker in dist/`. |
| Gated markers in the public tree | `grep -rl` for the four remaining `gatedTextMarkers` over `dist/` and `src/`       | 0 hits in each, for each marker, after the pruning run.                                                                                                                                                                                                                                |
| Draft emits no route             | `website/src/lib/releases.ts:10`; `find dist -path '*002*'`; title grep            | `releasedNewsSlugs` is empty; no `/news/002…` file in `dist/`; draft title occurrences in `dist/` = 0; the newsroom still lists one card.                                                                                                                                              |
| Asset identity in use            | `sha256sum docs/brand/logo-bg-black.png docs/brand/logo.png` vs `BRAND.md` line 10 | `f9543989…` matches the approved source mark; the rejected RGBA derivative (`d23d7c99…`) is not in use; `website/public/assets/` holds only the two tracked favicons.                                                                                                                  |
| External citations               | `curl -s -o /dev/null -w '%{http_code}' -L` for the five links                     | 5 × 200 (ESA instrument suite, NASA Mars 2020 instruments, CNES SuperCam, ESA Exploration Science, Springer).                                                                                                                                                                          |
| Internal anchors                 | `grep -o 'id="…"' website/dist/index.html`                                         | `#mission`, `#updates`, `#top` present (plus the new layout's own ids).                                                                                                                                                                                                                |
| Test suite                       | `cd website && npm test`                                                           | 36 of 36 pass in 2 files (was 16 in 1; `test/guards.test.mjs` was added by another card).                                                                                                                                                                                              |
| Type check                       | `cd website && npm run typecheck`                                                  | `astro check`, 40 files: 0 errors, 0 warnings, 0 hints.                                                                                                                                                                                                                                |
| Lint                             | `cd website && npm run lint`                                                       | **Not green repo-wide at this instant** — 1 parse error in another card's in-flight component. See A.3.3. It touches no file of this package and does not fail the build or the type check.                                                                                            |
| Alt text on all images           | read of the draft + manifest                                                       | Row stays vacuously true: the frontmatter still carries no `media` field, so no image and no alt text are live in this package.                                                                                                                                                        |
| Repository hygiene               | `git status --short` at 01:46                                                      | This card changed only this review record. The article and every package record were left byte-identical to the revision checked at 01:31.                                                                                                                                             |

### A.3 What the shared checkout looked like while the gate ran (non-blocking, other cards' artefacts)

1. **A labelled temporary probe page from another card.** `website/src/pages/plate-probe.astro`
   (SHA-256 `e151b2f54fce909617dcb54153c8c625c406afb1dd51222260f06f509ced1550`, mtime
   01:45:02) carries its own header: "TEMPORARY verification probe for card
   `t_3922071d` — deleted before handoff". It emits `/plate-probe/index.html`. Card
   `t_3922071d` was **running** during this gate (step-001 / site-foundation, a different
   article graph). This is not an artefact of the step-002 package, and no corrective card
   is raised: it is another card's in-flight work, self-documented as deleted before handoff.
   (If it were still present at release time it would be a site-foundation cleanup item, not
   a step-002 defect.)
2. **A transient guard probe proved the fail-closed guard mid-run.** At 01:45:44 a planted
   build file carrying a withheld vehicle-designation marker was present in `dist/`
   (its source page also existed transiently under `website/src/`). The standalone
   `check-dist` run reported `gated-text: …/planted-both.html (<marker>)`, `pruned 1
   withheld file(s) from dist/`, exit 1. By 01:46:11 the probe source was gone
   (`ls` → "No such file or directory") and a fresh `check-dist` exited 0 with the marker
   scan clean in `dist/` and `src/`. This is the transient test artefact the
   `editorial-review` skill describes: recorded with timestamps and the observed exit codes,
   and **no corrective card raised**, because it is a concurrent worker's own negative
   evidence and it clears itself. The 01:45:20 build, taken before the plant, exited 0.
3. **Lint is not green repo-wide at this instant.** `npm run lint` → 1 error:
   `src/features/news/MediaPlates.astro` `4:13 Parsing error: Unexpected token {`. That
   file is card `t_3922071d`'s in-flight component (new, untracked), not part of this
   package. The earlier "lint clean" observation does not reproduce repo-wide right now,
   but it touches no 002 file; `astro check` is green (40 files, 0 errors) and the build
   and every test pass. Lint greenness is a site-foundation acceptance row, not this
   gate's.
4. **A stale rationale inside this package's own asset manifest (non-material, for the
   continuity redactor and the asset owner).** The manifest's barred-media row explains
   that `docs/area/` plates are unusable partly because "the guard's `Asteria` marker would
   fail the build anyway". `website/scripts/guards.mjs` (SHA-256
   `65d31b917f99fc2779f95031768041dd159ba9ff107259072071e50624786cea`) has since retired
   that marker under the human's 2026-09-17 partial release of the landing-area material
   for **article 001** (recorded in `docs/SCENARIO.md` and `docs/area/AREA.md`, applied by
   cards `t_2a0f700b` / `t_e7b669a8`). The second half of that sentence therefore no longer
   describes current guard behaviour. The row's **conclusion for step 002 is unaffected**:
   this article places no such asset, and the manifest's own release gate still holds the
   identity-mark placement back. Recorded here as a working-paper accuracy observation with
   a named owner, **not** a material failure and **not** a corrective card — nothing in the
   published package depends on it. It does not disturb the continuity verdict either: that
   verdict rests on what the article contains, and the article is byte-identical.
5. **A second working paper changed mid-run, after the A.1 snapshot: the SEO package.**
   `.agents/work/seo/002-payload-selection.md` was rewritten by its owner at 01:46:47 CEST
   (22,292 → 31,924 bytes; SHA-256 `96ebede0a2c75d67431e8a9db76764c2079ef9ba86e3e27141ca75c54b52b11b`
   → `6d67d973d3c2eed7b8cdb258ef162d164bf0a0a02798deab5fc0013cad767729`), i.e. after the A.1
   hashes were taken at 01:46:11. This is not an acceptance input for this card — the card
   names the draft, the source pack, the asset manifest and the continuity verdict — it changed
   no article byte (`64373791…` before and after), and it introduces no claim this gate has to
   re-judge. Its §9 still records the one-title-field pressure that section 3 above points at
   (now headed "One `title` field, two jobs"), so that cross-reference still resolves. Recorded
   so the A.1 row for the SEO package is read as the 01:46:11 state, not as the current one.

### A.4 Final re-check at the moment of the verdict (01:54 CEST): the v2 records

Three upstream records moved after the A.1 snapshot, each written by its own owner, and
each movement was re-checked before this verdict was finalised. **The verdict does not
change.** The A.1 rows above are the 01:46:11 state.

| Record     | At the A.1 snapshot                 | At verdict (01:54:10)                                                                             | Effect on this gate                                                                                                                                                                                                                                                                                                |
| ---------- | ----------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manifest   | `8179ed1a…` (written 01:23)         | `dc71bb2d56b0c03c6eb6143bcdb0e663b6b102d43389276402319f6b06602f48` (01:51, card `t_1d89f2b4`)     | The re-validation corrected exactly the stale rationale recorded in A.3.4 — **observation closed, not escalated**. Its conclusion is unchanged: no image is placed, the identity-mark reuse stays held back, and steps 003–011 media stay barred here.                                                             |
| Continuity | `9d8ff1a0…` (v1, card `t_5f29e3aa`) | `e548f00e8dd13cc7b3265cfb03e502e0ba19315c5f3790e78621faf616f8b73c` (v2, card `t_424d8b68`, 01:53) | Verdict still `continuity clear` (metadata row and final label). v2 keeps the v1 finding table in substance, closes two mid-run observations, and records explicitly that the v1 hash reference in this review no longer matches the file while the verdict is unaffected — because the article is byte-identical. |
| SEO        | `96ebede0…`                         | `ae876fa0a623b1207d10b45fbe202d6b62fb8ea993ec4782158cf091fac266e6` (01:52, card `t_2b1bdd6b`)     | Not an acceptance input. Its handoff states the applied metadata was left byte-identical to the approved revision, which the unchanged article hash confirms.                                                                                                                                                      |

Two corrections this run must state, because they touch text written earlier in this
record:

1. **The 001 anchor in section 4 is void.** Published article 001 was rewritten at 01:46
   (SHA-256 `f5d00e03a38960b7ab95a79d436ed6d16c8418856eb15033b6f0d902ebeb1655`) and now
   declares `media: asteria-plates` with three plate alt entries and a different label,
   under the human's 2026-09-17 partial release. So section 4's statement that the
   manifest's alt string "is byte-identical to the alt text already published on the 001
   card" no longer holds; the manifest's own re-validation records the same voiding. The
   rows that sentence supported still pass for this package: the 002 draft places no
   image, the manifest's alt string is the live one for its own reuse row, and continuity
   v2 reaches the same conclusion. **No 002 claim depends on 001's alt text.**
2. **Observation A.3.1 is closed.** `website/src/pages/plate-probe.astro` and its route
   were removed by the owning card `t_3922071d` before its handoff. At 01:54:10
   `website/dist/` holds exactly `/index.html` and `/news/index.html`, `check-dist`
   exits 0, and the marker scan is 0 hits in `dist/` and `src/` for all four markers.
   The A.3.1 timeline is kept so the record shows what was seen and when.

Re-verified at 01:54:10, after those movements: the 002 draft is still
`6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` with no `media` field
and `publication: draft`; `releasedNewsSlugs` is still empty; the identity-mark hash still
matches `BRAND.md`; `newsMediaKeys = ['programme-identity', 'asteria-plates']` (the second
key belongs to released article 001, not to this package, and no 002 file references it);
`docs/area/` plates now appear in the build only as published article 001's released
material. Nothing here changes a review row.

### A.5 What this run did not do

No copy edit, no other repository artifact edited, no route released, no deployment, no
preview, nothing committed. Only this review record changed. The human decisions listed in
section 11 remain exactly as they were: an editorial `approved` is still an editorial gate
only, and nothing here approves public canon or a release.

## Record date: 2026-09-17 (card `t_531698d9`) — the simulated date of writing, applied

The article now carries **exactly one** `simulatedDate`: the date, inside the fiction, on which the article
was written. The merged editorial role assigns and verifies it from the locked milestone table in
`docs/SCENARIO.md` — never from the article's repository history (`docs/INSTRUCTIONS.md` §"Canon and
information safety"; `AGENTS.md` §"Content workflow policy"; `.agents/skills/editorial-review/SKILL.md`
§"The simulated record date"). The change is one inserted frontmatter line and nothing else:
`git diff --stat -- website/news/` reports `website/news/002-payload-selection.mdx | 1 +`, 1 insertion and 0
deletions (across the three published articles), and `git diff` shows no other byte moved.

| Item                        | Value                                                                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value applied               | `2027-03-19` — rendered `Simulated record date · 19 March 2027`                                                                                                                                                                                                                                 |
| Milestone line it came from | `docs/SCENARIO.md` §"Launch and mission dates", line 183: the row `19 March 2027 — Mission Concept Review` (a locked row; the row text is authoritative, the line number is a pointer)                                                                                                          |
| Applied revision            | sha256 `7b69bd7fd7f0b3aca7ff29f2bd87f9d7844b8c1c3657cf85dbb168028c6b869a`, 7,722 B                                                                                                                                                                                                              |
| Previous revision           | sha256 `adc6a1a68cefac0e1ee0ec9e7cd705158e98d83ce9b4b430ad41523ceb709711` — the released revision this record's §8/§10 and `.agents/work/releases/002-payload-selection.md` ("Article, released revision") pinned; the pre-flip `64373791…` that §A.1/§A.4 pinned is the earlier revision still |
| Value shape                 | unquoted `YYYY-MM-DD`, the shape `src/lib/simulated-date.ts` documents for this role; the schema accepts that shape (the `Date` js-yaml resolves) and the quoted string, and renders one wording for either                                                                                     |

**Why this milestone, and not the 24 September 2027 alternative.** The alternative row —
`24 September 2027 — System Requirements Review and Asteria Field target confirmation` — carries the
in-fiction landing-target confirmation, whose publication canon still gates the landing-area class
(`docs/SCENARIO.md` §"Continuity and release controls"). A record date on that row would place this writing
after a target confirmation and make the article's own sentence "no landing site has been chosen publicly"
depend on how that class is published, rather than being plainly true at its date. The Mission Concept
Review row implies no such event and sits inside the payload-and-requirements window step 002 covers: the
payload scope is agreed and the instruments are still open, with the later
`7 April 2028 — Payload Selection Review` row comfortably ahead of the writing — which is what keeps "the
individual instruments, and their names, have not been approved" true on the article's face.

**The four checks the card requires, each stated.**

| Check                                                              | Result | Evidence                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Implies no event step 002 has not released                         | PASS   | At 19 March 2027 the released material is step 002's payload-scope update: the four measurement jobs, instrument names still open, the European-led contribution still open, no launcher named, no landing site chosen, the 2031 window unchanged. The article states nothing beyond it. |
| Cannot be read as a launch, landing or other withheld mission date | PASS   | 19 March 2027 is not a launch, landing, entry or assembly milestone; it sits nearly four years before the locked departure row. The only schedule the article states is the 2031 window, and it says in terms that no launch or landing date is being stated.                            |
| Contradicts no sentence already public                             | PASS   | The published 001 is dated 12 October 2026 and says the technical selections are still ahead — which this article's payload step then reports. The later 003 recaps this article's payload scope correctly. `002:104`'s launch-window sentence and `001`'s window frame agree.           |
| The three articles stay in timeline order by their dates           | PASS   | `2026-10-12` (001) before `2027-03-19` (002) before `2029-07-13` (003) — the same order as `order: 1 / 2 / 3`.                                                                                                                                                                           |

**The published surface, measured in a scratch copy outside the repository** (never in the shared checkout:
`website/scripts/check-dist.mjs` prunes on failure, so a gate must not build the shared `dist/`). The copy
carried `src/`, `public/`, `scripts/`, `news/`, `test/`, the Astro config and `package.json`, plus a `docs/`
symlink, with the installed packages linked one by one so Astro's content-layer cache stayed in the throwaway
root; the project's own Astro CLI built it (8 pages, postbuild guard green).

| Measurement                                                           | Result                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The article page states the date                                      | `/news/002-payload-selection/` — one occurrence, inside the `class="article-date"` element, text `Simulated record date · 19 March 2027`                                                                                                                                                                                        |
| The label presents it as part of the fiction                          | The rendered string is the label plus the in-fiction date; nothing introduces it as a real publication date, and the page emits no `datePublished`, `dateModified`, `lastmod`, `<time datetime>`, JSON-LD block or sitemap reference                                                                                            |
| Site-wide machine-date scan                                           | Every file under the scratch `dist/`: **0** hits for all ten tokens the date suite lists, and no ISO-shaped form of any of the three applied values                                                                                                                                                                             |
| The listing surfaces                                                  | `/` and `/news/` each render the article's line once, alongside the other two articles' lines                                                                                                                                                                                                                                   |
| The site's own gate, in the scratch copy                              | `vitest run`: **14 files / 147 tests passed**, including the date suite's 9 cases (its real-build half pairs each published article's frontmatter with its own page); `node scripts/check-dist.mjs` exits 0                                                                                                                     |
| Red-first — the page follows the frontmatter, not a hard-coded string | Planting `simulatedDate: 2024-01-01` in the scratch copy moved that page's rendered line to `1 January 2024` while the other two kept their values, and planting a prose value failed the build with `InvalidContentEntryDataError` naming `simulatedDate`. The applied values are schema-validated and rendered from the file. |

**The live origin before this change** — `https://mars-ai-simulation.janpolacek.workers.dev`, in-page `fetch`
with `crypto.subtle` hashing at 15:41 CEST on 2026-09-17: `/news/002-payload-selection/` **200**, 14,177 B,
sha256 `e8e1a456…`, **0** occurrences of the label, no machine-date token. The public surface carries no
record date until the technical card `t_1059c973` pushes this change.

**This closes the order-sensitive negative claim the step-004 gate ledger routed here (C6).** That ledger
(`.agents/work/reviews/004-launch-provider-gates.md`, card `t_4d1b3041`) recorded that this article's and
003's present-tense "no launch vehicle has been named" statements are true today but go stale once a
step-004 package names a provider, and asked either for the record dates to make them time-bound or for a
scoped wording corrective before a step-004 flip. The dated form is what the record date supplies: the claim
now reads as a statement about 19 March 2027 and cannot be falsified later. No wording change is needed, and
the consequence is a bound on the next step — any step-004 article's record date must fall after this one and
after 003's `2029-07-13`.

**Revision-history note.** This record's earlier entries pin the article at sha256 `64373791…` (pre-flip,
§A.1/§A.4) and the release record pins the released revision `adc6a1a6…`; the applied revision is
`7b69bd7f…` (7,722 B), one frontmatter line longer than `adc6a1a6…` and otherwise byte-identical. Their
readings stand for everything except the record date, and no row in them is contradicted by it.

**Release decision for this change** is recorded on card `t_531698d9` (this role), with the three values and
the milestone line behind each; the technical card `t_1059c973` (`mars-ai-simulator-dev`) applies and pushes
the change. No canon file was edited: `docs/` was read only, and no withheld token is written here by value.

## Final label

approved
