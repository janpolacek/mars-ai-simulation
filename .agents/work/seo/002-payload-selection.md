# SEO package: 002-payload-selection

## Package metadata

| Field                    | Value                                                                                                                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug                     | `002-payload-selection`                                                                                                                                                                                               |
| Timeline step            | `002-payload-selection` (public-safe step; nothing from steps 003–011)                                                                                                                                                |
| Article                  | `website/news/002-payload-selection.mdx`                                                                                                                                                                              |
| Brief                    | `.agents/work/briefs/002-payload-selection.md`                                                                                                                                                                        |
| Source pack              | `.agents/work/sources/002-payload-selection.md`                                                                                                                                                                       |
| Asset manifest           | `.agents/work/assets/002-payload-selection/assets.md`                                                                                                                                                                 |
| Draft card               | `t_134399ab` (done)                                                                                                                                                                                                   |
| SEO card (first pass)    | `t_27ad4d74`                                                                                                                                                                                                          |
| SEO card (re-validation) | `t_2b1bdd6b` — 2026-09-17 01:45 CEST; re-verified against the current tree, **no metadata changed** (§14)                                                                                                             |
| Prepared by              | `mars-ai-simulator-seo`                                                                                                                                                                                               |
| Status                   | metadata applied 01:19 CEST, re-validated 01:45 CEST; editorial gate `approved` (`.agents/work/reviews/002-payload-selection.md`) on the earlier revision of this package; §14 records the re-run and the corrections |
| Public impact            | none — `publication: draft` is untouched, so nothing here is a public route, a crawlable page, or canon                                                                                                               |

## 1. Reader intent

**Single honest intent.** _"Tell me what a Mars rover carries to study a planet: what the different
instruments are for, and why a mission takes more than one."_

The article satisfies it. It names the four measurement jobs (panoramic and navigation imaging,
weather measurement, mineral and rock sensing, contact inspection), explains what each job answers,
and shows each category on a real mission that is flying now (Rosalind Franklin, Perseverance). It
closes by stating plainly what is not settled, which is exactly the honesty a reader of a
pre-launch mission page needs.

- **Primary query theme:** "what instruments does a Mars rover carry" / "Mars rover instruments and
  what they do" — informational, pre-launch, reader who wants the categories explained rather than a
  real mission's hardware list.
- **Secondary themes:** "how do Mars rovers study rocks", "why do rovers carry several
  instruments", "weather station on a Mars rover", "close-up camera on a rover arm".
- **Queries this page must not chase:** "Mars 2020 instrument list" and "ExoMars Rosalind Franklin
  launch date" (real-mission facts this page only cites as precedent), "life on Mars evidence"
  (contradicts the article's "what this mission is not" section), and any landing site, launch
  vehicle, or date (unapproved or later-step material).

## 2. Title (`title`)

- **Applied:** `Choosing what a Mars rover carries.`
- **Previous:** `Choosing what the rover will measure.`
- **Why:** it keeps the writer's sentence frame and the site's declarative title style (35
  characters, sentence case, one full stop, no colon subtitle, no clickbait verb), and it adds the
  query token pair the old title lacked — "Mars rover". "Measure" alone reads as instrument jargon
  to the reader who searches in plain words; "carries" is the reader's word for the same thing.
- **Route-level `<title>`, as the site already renders it:** `BaseLayout` appends the site name, so
  the document title becomes "Choosing what a Mars rover carries. | Red Horizon" — **49 characters**
  (re-measured in §14; the "56" in the first revision was a miscount). Rejected variants and why:
  "Mars rover instruments explained" (generic, drops the in-universe
  subject and reads like an SEO landing page), "The complete payload list" (false — the instrument
  list is not settled), and anything with "revealed", "ultimate", or "everything you need to know".

## 3. Meta description (the `summary` field)

- **Applied:** `Red Horizon One's payload scope covers panoramic imaging, weather, mineral and rock
  sensing, and a contact tool. The instruments are still being chosen.` — **152 characters**
  including spaces.
- **Why:** it fits a search snippet, states the one fact this article does settle, and states the one
  thing it leaves open, so a reader who opens it is not disappointed and the page is not mistaken
  for a final payload announcement. No keyword list, no "learn more", no claim that is not already
  in the draft.
- **Dropped from the card face:** the previous summary's third sentence, "A European-led sensor
  contribution is part of that scope, with its name and technique not yet confirmed." That fact stays
  in the article body (§"A European-led contribution"). It is preserved verbatim here if the editor
  prefers the longer card paragraph:

  > Red Horizon One now has a working payload scope — panoramic and navigation imaging, weather
  > measurement, mineral and rock sensing, and a contact tool for close inspection — and the
  > programme is still deciding what to call the individual instruments. A European-led sensor
  > contribution is part of that scope, with its name and technique not yet confirmed.

  (322 characters — correct as card copy, too long as a meta description. See §9, conflict 2.)

## 4. Slug and public URL

- **Keep `002-payload-selection`. No change.** Stable, human-readable, and already the content
  collection id: the brief, the source pack, the asset manifest, this package, and the kanban cards
  all reference it. The numeric prefix is a real ordering fact shared with
  `001-project-announcement`, not a keyword; renaming it would be a multi-artifact change needing its
  own planner card, and would break `.agents/work/assets/002-payload-selection/`.
- **Route, as the site now implements it:** `/news/002-payload-selection/` — directory routes
  (`trailingSlash: 'always'` in `astro.config.mjs`), generated by `src/pages/news/[slug].astro` only
  for slugs a human release reference authorises in `src/lib/releases.ts`. That list is empty today,
  so the route exists and emits **no** article page: the built route list is `/index.html` and
  `/news/index.html` only. Publication therefore needs both
  `publication: published` and a release entry, and neither is an SEO decision. Canonical links come
  from `SITE_URL` and are omitted when it is unset (§10).

## 5. Heading outline

Current outline, after this pass. Every body heading is an `h2`; the frontmatter `title` is the
intended single `h1` on the article route. Hierarchy is correct — no skipped levels, no second `h1`.

| Level | Heading                                | Note                                                                                               |
| ----- | -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| h1    | Choosing what a Mars rover carries.    | from frontmatter `title`; rendered by `ArticleView` as `#article-title`, no route while unreleased |
| h2    | Why several instruments instead of one | answers the "why more than one" question first                                                     |
| h2    | Looking at the landscape               | panoramic and navigation imaging                                                                   |
| h2    | Reading what rocks are made of         | mineral and rock sensing / spectroscopy                                                            |
| h2    | Watching the weather                   | environmental monitoring                                                                           |
| h2    | Getting close enough to inspect        | contact inspection                                                                                 |
| h2    | A European-led contribution            | programme structure inside the payload scope                                                       |
| h2    | Every instrument needs a home          | the accommodation constraint that shapes selection                                                 |
| h2    | What is not settled                    | disclosure list; the article's honesty anchor                                                      |
| h2    | What this mission is not               | life-detection boundary                                                                            |
| h2    | Sources and further reading            | citations and the no-endorsement disclaimer                                                        |

**Order: kept as written, no change applied.** The sequence already follows the reader's questions —
why several capabilities, what each one does, who contributes, what constrains the choice, what is
still open, what the mission is not, where the sources are. A reorder (for example moving "Every
instrument needs a home" next to "Why several instruments instead of one") would group the two
selection-rationale sections but break the payload-first arc; it is a style preference, not a defect,
so it is left to the writer and editor.

**Recommended to the writer — heading text, not order** (heading wording is writer-owned, so not
applied here). The four capability headings are figurative and contain none of the words a reader
searches with. A plain half after a colon keeps the voice and puts the searchable noun into the
outline:

- "Looking at the landscape" → "Looking at the landscape: panoramic and navigation imaging"
- "Reading what rocks are made of" → "Reading what rocks are made of: mineral and rock sensing"
- "Watching the weather" → "Watching the weather: environmental monitoring"
- "Getting close enough to inspect" → "Getting close enough to inspect: the contact tool"

Each term then appears in exactly one heading — "imaging", "sensing", "weather", "contact" — so the
outline stays readable and nothing is stuffed.

Two smaller recommendations:

- Optional, writer's call: surface the four jobs as a plain bulleted list in the lede so a scanner
  finds the payload list without reading three paragraphs. Do not give it its own `h2`.
- Route check: `src/features/news/ArticleView.astro` already renders the frontmatter `title` as the
  only `h1` (`id="article-title"`) and the `summary` as a standfirst paragraph, so the hierarchy
  above is exactly what a released page will emit. Keep it that way — no second visible title, no
  duplicate `h1`.

## 6. Internal links

**Applied to `website/news/002-payload-selection.mdx`.** Every target exists today; each was checked
against the current site source. All three are root-relative with a fragment, so they keep working
when the article moves to `/news/002-payload-selection/`.

| # | Anchor text                                       | Target      | Placement                              | Why                                                                                                                                               |
| - | ------------------------------------------------- | ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | fictional, AI-assisted Mars exploration programme | `/#mission` | intro, paragraph 1                     | puts the programme-defining sentence on the mission brief that states what Red Horizon is, and puts the fiction disclosure one hop from the claim |
| 2 | first public step                                 | `/#updates` | intro, paragraph 2                     | the first public step is the announcement card in the newsroom; this is the article's only in-site pointer to its predecessor                     |
| 3 | the programme announcement                        | `/#updates` | "What is not settled", the 2031 bullet | cites where the 2031 launch window is actually published instead of asserting it bare                                                             |

No link points at a route that does not exist. In particular, nothing links to
`/news/001-project-announcement/` or `/news/002-payload-selection/`: article detail routes are
release-gated, `releasedNewsSlugs` is empty, and no article page is generated, so those links would
404. The two targets above (`/#mission`, `/#updates`) are homepage section ids carried today by
`src/features/mission/MissionPanel.astro` and `src/features/news/NewsCarousel.astro` — each was
checked in the current source, not in the older single-file `index.astro`.

**Recommended once the routes exist** (do not create them now):

1. News card title (and the card's whole surface) → `/news/002-payload-selection/` at publication, so
   the homepage card becomes a real internal link instead of a dead label.
2. Links 2 and 3 above → `/news/`, the canonical newsroom index, once the newsroom route is committed.
   The route and its card list exist in the working tree as another card's uncommitted work (it builds
   to `/news/index.html`), so the article body does not point at it yet: a link into an uncommitted
   route can break if that work is reworked.
3. Link 3 → `/news/001-project-announcement/` once article 001 has a released detail page: a more
   precise citation than the newsroom index.
4. Each **approved** instrument name → its plain-language wiki page, once both exist. Step 002
   allows a future wiki page for approved instruments; linking a name now would either disclose
   unapproved canon or point at a 404. The link label must be the approved name, never a guess.

## 7. Structured data

**What exists today:** `src/layouts/BaseLayout.astro` emits `<title>`, `<meta name="description">`,
and a canonical link when `SITE_URL` is set; the article route passes `title` and `summary` straight
into those two fields. There is no JSON-LD anywhere in the site, and no Open Graph or Twitter card
metadata. Everything below is a recommendation for the site engineer; none of it is applied by this
pass.

**Site level, for the site engineer (recommended):**

- `WebSite` and `Organization` on the homepage, carrying only published facts: name "Red Horizon",
  the homepage URL, `inLanguage` `en`, and the description already in the page meta.
- Do **not** add `sameAs`, `parentOrganization`, `funder`, `member`, `sponsor`, or `award` pointing
  at ESA, NASA, CNES, or any real body. There is no partnership, and a real-agency link would be a
  fabricated real-world claim.

**Article level, when a published route exists (recommended):**

- `NewsArticle` (or `BlogPosting`) with `headline` = the article title, `description` = the
  152-character description in §3, `articleSection` = "Payload brief 02", `inLanguage` = `en`,
  `isPartOf` → the site, `publisher` → the fictional programme organisation.
- `datePublished` / `dateModified` only from the real first-publish date held by the site. There is
  no date field in `website/src/content.config.ts` today; recommend adding `publishedAt` at route
  creation and feeding the markup from it. Never derive a date from a timeline step number and never
  invent one.
- `author`: omit it, or use the programme as an organisation. Do not invent a human author `Person` —
  the project has no author record for this article, and a fabricated byline is a fabricated
  real-world claim.
- `citation` for the five real sources (ESA Rosalind Franklin suite; ESA Exploration Science PanCam;
  NASA Mars 2020 instruments; CNES SuperCam; Mustard et al., _Space Science Reviews_, 2020) is
  optional. If it is added, the page's own disclaimer paragraph ("They are not partners in Red
  Horizon…") must stay visible on the same page.
- The "This is AI-generated fiction" disclosure stays visible page copy. It must not be replaced by,
  or hidden behind, markup.

**Not recommended:** `keywords` meta (obsolete and a spam signal); `Product`, `Dataset`,
`SoftwareApplication`, `Event`, or `FAQPage` (inventing an FAQ would be content the article does not
publish); any rating or review markup; and marking PanCam, MastCam-Z, SuperCam, MEDA, SHERLOC, or
CLUPI up as Red Horizon payload. Those are cited precedents of a fictional mission's categories, not
this mission's hardware.

## 8. Image and alt text

**Re-verified and rewritten 2026-09-17 01:45 CEST (§14.1).** No approved asset exists for this
article, and the `media` field is correctly omitted — which the current schema makes the only legal
way to render nothing. `media:` is a **key**, not a URL: `src/lib/media.ts` fixes the two keys a news
item may name and the frontmatter each one owes.

| Key                  | Plates | `mediaAlt`             | `mediaCaption`                | `mediaLabel` |
| -------------------- | ------ | ---------------------- | ----------------------------- | ------------ |
| `programme-identity` | 1      | 1 entry                | must be absent (renders none) | optional     |
| `asteria-plates`     | 3      | 3 entries, plate order | 3 entries, plate order        | required     |

An unknown or under-specified key fails the content schema (`src/content.config.ts` →
`newsMediaIssues`), so an illustration cannot be half-declared or silently dropped.

- The homepage card and the unreleased article route currently render the numbered placeholder
  (`NewsCard.astro`), which is `aria-hidden="true"` and decorative. No alt text is live, and none is
  required today.
- **A future 002 illustration needs a site change before any frontmatter can use it.** There is no
  key for it: `newsMediaKeys` holds only `programme-identity` and `asteria-plates`, and the latter
  belongs to article 001's released field maps. Rendering a 002 sensor illustration therefore needs a
  new key in `newsMediaKeys` plus its requirements in `src/lib/media.ts`, the plate resolver in
  `src/features/news/media.ts`, and the asset import in `src/lib/assets.ts`. Card `t_3922071d` (dev,
  in flight while this pass ran) adds the `asteria-plates` key exactly that way, so it is the pattern
  to copy. That work is a site-engineer card to file with the asset decision, not an SEO or
  frontmatter edit, and it must not be assumed here.
- When that key exists and a human selects the export (see
  `.agents/work/assets/002-payload-selection/assets.md`):
  - `mediaAlt`: one entry per plate, plain description, roughly ≤160 characters each, stating what is
    depicted **and** that it is not final. Example for a single-plate set: "Illustration of a rover
    mast carrying a stereo camera pair and a spectrometer aperture; the instrument layout is
    illustrative, not a final design."
  - `mediaLabel` / `mediaCaption`: the label says what the image is, e.g.
    `Illustration // not a final instrument layout`; a caption must not add a fact the body does not
    already publish. `plateAltText` and `plateCaptionText` prepend the plate label and append the
    set's provenance sentence, so do not repeat either in the frontmatter entry.
  - It must not name an unapproved instrument, must not show RH-01 vehicle design, Ariane 64,
    Asteria Field, or any step 003+ fact, and must not imply a real agency built or endorsed it.
  - Keep the filename slug-based and free of unapproved terms (for example
    `002-payload-sensor-concept.png`): the source stem travels into the build output
    (`dist/_astro/…`) and into any future social preview.
  - Alt text is not a keyword field: no instrument name lists, no "image of", no repetition of the
    title. `linkLabel` is not an alt source either.

## 9. Conflicts with brand voice or continuity

1. **One `title` field, two jobs.** It is the homepage card `h3` (set in display type, roughly six
   words) and, on the article route, the `h1` plus the document title through
   `BaseLayout`'s `${title} | ${site.name}` template — "Choosing what a Mars rover carries. | Red
   Horizon" (56 characters). The applied title works for both. A future search-led route title that
   differs from the display heading would need a separate field.
2. **One `summary` field, two jobs.** It is the card paragraph and the meta description
   (`BaseLayout description={item.data.summary}`) and it is also printed as the article standfirst.
   The applied value satisfies the description while staying a readable card paragraph, at the cost
   of the European-sensor sentence on the card face (§3). Recommend the site engineer add
   `seoDescription` (optional) when the route ships; until then this package is the record of both
   strings.
3. **Voice vs search terms in headings.** The house style keeps headings figurative; the reader
   searches with nouns. §5 resolves it with a colon suffix rather than a rewrite. Editor decides.
4. **"Payload" is never defined in the body.** The article uses "payload scope" and "the payload"
   without saying what a payload is. Recommend defining it in plain words on first use — for example
   "the payload — the instruments a rover carries" — because the core search intent is expressed in
   plain language, not in mission jargon.
5. **Metadata is ahead of the site.** The article has no released route, so none of this metadata is
   crawlable today and nothing here can rank or leak. §7 and §10 are recommendations for the site
   engineer, not blockers on this card.
6. **Continuity.** No conflict found. The applied title and description restate only facts already in
   the draft and the source pack: an agreed payload scope across four measurement jobs, with the
   instruments still open. Nothing implies a settled instrument, a launch vehicle, a site, or a date.
7. **Editorial fields left untouched** (`category`, `status`, `publication`, `linkLabel`, `order`,
   `accent`, `media*`) because they are not mine. `category: Payload brief 02` and
   `status: In selection` are honest and agree with the article — recommend keeping "In selection",
   since a card or snippet that reads "In selection" prevents the page being read as a final payload
   announcement.
8. **The brief's allowed angle is wider than the article (new, §14.4).** The brief gained its
   "Allowed angle" text on 2026-09-17 01:41 CEST, after the first pass: it licenses a payload update
   covering the four ranked science objectives (mineral mapping, alteration environment, habitability
   assessment, international operations demonstration) and the four instrument categories. The
   approved article publishes the categories and the habitability framing but does not state the
   ranked-objectives framing or the operations-demonstration objective. Nothing applied here becomes
   untrue because of that, but it is a **content gap for the writer, not an SEO one**, and it sets a
   trigger: if the body is expanded to the brief's full angle, the intent, title, and description must
   be re-passed — "what a rover carries" would no longer be the whole honest intent.

## 10. Crawl and publication notes for the site engineer

- Canonical handling is already correct: `src/lib/seo.ts` emits a canonical only when `SITE_URL` is
  set, and `astro.config.mjs` reads that variable, so no wrong canonical is published while the
  domain is unauthorised. The approved origin stays a human decision; set `SITE_URL` at build time
  once it exists.
- No `robots.txt` and no sitemap exist. Recommend: emit a sitemap from **published** entries only,
  reference it from `robots.txt`, and keep unreleased articles uncrawlable. The release gate in
  `src/lib/releases.ts` already achieves the last part by generating no route for an unreleased slug.
  Verified in this pass: `publication: draft` items produce no card, no listing entry, and no route —
  `/news/002-payload-selection/` is absent from `dist/`, and neither the new title nor the new
  summary appears in any built page.
- No Open Graph or Twitter card metadata exists at all today. Recommend adding `og:title`,
  `og:description`, `og:type` = `article`, `og:url` (the same value as the canonical), and a Twitter
  card in `BaseLayout` / `ArticleView` when article routes ship, mirroring the title and description
  in §2 and §3. Social cards carry the same rules as the page — no step 003+ fact, no date, no
  real-agency wording, no unapproved instrument name.
- Site issues found while validating. They belong to the in-flight site work on other cards, not to
  this pass, so they are flagged rather than fixed:
  - **Corrected in the re-validation (§14.1):** the `postbuild` dist guard now **passes**.
    `npm run build` runs `scripts/check-dist.mjs` and prints
    `[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.`
    (exit 0). The three `gated-path` findings the first pass saw in `website/src/lib/assets.ts` and
    `website/src/lib/releases.ts` are gone, and the package's earlier "guard fails" rows are stale.
  - **New: the newsroom index reuses the homepage metadata.** `src/pages/news/index.astro` renders
    `<BaseLayout>` with no props, so `dist/news/index.html` carries the homepage `<title>` ("Red
    Horizon | A Mars mission in progress") and the homepage description. Two pages with one identity
    is a duplicate-metadata defect that gets worse as article routes ship. **Convention settled by
    this pass: title `News | Red Horizon`** — "News" is the label the site already publishes in
    `src/lib/navigation.ts`, and `| ${site.name}` is the existing title template, so the fix invents
    no copy. "Newsroom | Red Horizon" was considered and rejected for that reason; the string should
    live in `src/lib/site.ts`, not hardcoded in the page. A distinct **description** is the better
    second half of the fix but needs approved prose, so it is routed to the editor rather than
    invented here. Implementation is filed as card `t_1828a6d4` (dev, gated behind `t_3922071d` so two
    `website/` cards never run at once) — a recommendation to that owner, not an edit from this pass.
  - **New: transient probe surfaces are in the build.** `src/pages/plate-probe.astro` (another card's
    probe, added while this pass ran) generates `/plate-probe/index.html`, and a planted
    `dist/planted-asteria.html` appeared beside it. Neither is a 002 surface and neither belongs in a
    release build; recorded so the release checklist removes them before any deploy.
  - **New: the site chrome now links `/news/`.** `src/lib/navigation.ts` points the header and footer
    "News" item at the newsroom route, so that route is now depended on site-wide (it still is not
    committed work). The two applied links keep pointing at `/#updates`, which remains correct and
    stable; re-pointing them at `/news/` is the alternative in §6, recommendation 2.

## 11. Confidentiality check

- Applied metadata (`title`, `summary`) and the three link anchors scanned for: RH-01, Pathfinder,
  Ariane, Asteria Field, FEI STU or any institution name, launch or landing dates, sample-return
  wording, and 2027–2034 date strings. Result: clean.
- **Marker-list correction (re-validation, §14.1):** the build's current `gatedTextMarkers` list is
  `RH-01`, `Pathfinder`, `18° 42`, `226° 14`. `Asteria` was retired from that list on 2026-09-17 when
  the human story owner released the field name for article 001, so a hit on the name is no longer a
  guard failure. It stays **forbidden on any 002 surface** as step-007 material per the brief's
  "Forbidden angle", and this pass kept treating it that way. Re-scan result: the four current markers
  occur 0 times in the article, 0 times in `website/src/`, and 0 times in the built `dist/`; `Ariane`
  and `FEI` are also 0 in all three. `Asteria` is 0 in the article and 0 in `dist/`; its five
  occurrences in `website/src/` are article-001 field-map material in another card's in-flight files
  (`src/pages/plate-probe.astro`, `src/lib/assets.ts`), not a 002 surface.
- No text from `docs/timeline/` is quoted, paraphrased, or implied in any metadata surface. The
  `title`, `summary`, `mediaAlt` guidance, and structured-data recommendations restate only facts
  already published in the draft and its source pack.
- No unapproved partner is named, no real agency is presented as a participant, and no future outcome
  is promised.
- Public/canon impact: none. `publication: draft` is untouched; canon and release approval remain
  human decisions.

## 12. Validation

| Check                                     | Result                                                                                                                                                                            |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Validation snapshot (first revision)      | 2026-09-17 01:21 CEST, against a working tree another card was actively refactoring. Every row below is that snapshot and is **superseded by §14** (re-run 2026-09-17 01:45 CEST) |
| `astro build` (run from `website/`)       | Complete — 2 pages: `/index.html`, `/news/index.html`                                                                                                                             |
| `postbuild` dist guard (`check-dist.mjs`) | **fails** — three `gated-path` findings in `src/lib/assets.ts` and `src/lib/releases.ts`; none in `website/news/` or this pass's files (§10)                                      |
| Draft filtered out of the built site      | verified — the new title and the new summary each appear **0** times in `dist/index.html` and `dist/news/index.html`, while the published 001 title and summary each appear once  |
| No article detail route generated         | verified — no `/news/<slug>/index.html` exists; `releasedNewsSlugs` is empty                                                                                                      |
| `npm test` (vitest)                       | 14 of 15 pass; the single failure is the same `gated-path` assertion, not this pass                                                                                               |
| `npm run lint` (eslint)                   | 9 errors, all parse/`no-undef` errors in `.astro` files and `astro.config.mjs` from the in-flight refactor; no finding in `website/news/`                                         |
| Forbidden-term scan                       | clean (§11) — the build guard's markers (`RH-01`, `Pathfinder`, `Asteria`, `18° 42`, `226° 14`) each occur 0 times in the article and 0 times in the built pages                  |
| Internal link targets exist               | `#mission` in `src/features/mission/MissionPanel.astro`, `#updates` in `src/features/news/NewsCarousel.astro`, `#top` in `Hero.astro`                                             |
| Metadata field constraints respected      | `title` and `summary` set on existing schema fields only; no field invented and no schema change                                                                                  |
| Description length                        | 152 characters                                                                                                                                                                    |
| Prettier / `npm run format`               | not run — `prettier-plugin-astro` is missing from `website/node_modules`, as the draft card already noted                                                                         |
| External link HTTP status                 | not re-checked in this pass; the draft card recorded 5/5 returning 200                                                                                                            |
| Effect on published pages                 | none — the entry stays `publication: draft`, so no card, listing entry, or route is generated for it                                                                              |

## 13. Handoff

- **Card:** `t_27ad4d74` (stage `seo`), timeline step `002-payload-selection`.
- **Inputs:** brief, source pack, draft `website/news/002-payload-selection.mdx`, asset manifest.
- **Outputs:** this package; `website/news/002-payload-selection.mdx` (title, summary, three internal
  links).
- **Changed files:** `.agents/work/seo/002-payload-selection.md` (new),
  `website/news/002-payload-selection.mdx`.
- **Confidentiality:** clean; no canon or release impact; nothing published.
- **Flagged, not fixed (other cards):** the failing `postbuild` dist guard (three `gated-path` findings
  in `src/lib/assets.ts` and `src/lib/releases.ts`) and the eslint parse errors in the in-flight site
  refactor. Both are recorded in §10 and in the card comment. No finding involves `website/news/`.
- **Outstanding review:** continuity, then the editorial final gate, then human release approval, then
  the release reference in `src/lib/releases.ts` before any article page can exist. No SEO-side
  blocker.
- **Next owner:** `mars-ai-simulator-visuals` for the IMAGES stage (asset manifest and the alt-text
  guidance in §8), then continuity, then the editor.
- **Re-validation:** §14 records the second pass on card `t_2b1bdd6b` (2026-09-17 01:45 CEST). The
  validation rows above are the first revision's snapshot; §14.2 is the current one.

## 14. Re-validation pass — card `t_2b1bdd6b` (2026-09-17 01:45 CEST)

Second run of this stage for the same article, dispatched after the editorial gate approved the
package's first revision. **No metadata was changed in this pass.** The applied `title`, `summary`,
and three internal links are byte-identical to what the first revision set, and
`website/news/002-payload-selection.mdx` still hashes to the value the editorial review and the
deploy-stage card both record. What this section records is the re-verification against a tree that
moved after the first pass, the corrections that re-run made necessary, and the new observations.

### 14.1 Corrected in this package (previously stale or wrong)

| Item                         | Was                                                    | Is                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document title length (§2)   | "… 56 characters"                                      | **49 characters** — `printf '%s' "Choosing what a Mars rover carries. \| Red Horizon" \| wc -c`; article title 35 + `" \| Red Horizon"` 14                                                                                |
| Build guard (§10, §12)       | failing with three `gated-path` findings               | **exit 0** — `[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.`                                                                                                              |
| Test suite (§12)             | 14 of 15 pass                                          | **36 of 36 pass** (2 files)                                                                                                                                                                                               |
| Lint (§12)                   | 9 errors                                               | **1 error** — `MediaPlates.astro:4:13 Parsing error: Unexpected token {` from another card's in-flight refactor; still nothing in `website/news/`                                                                         |
| Gated marker list (§11, §12) | included `Asteria`                                     | current `gatedTextMarkers` = `RH-01`, `Pathfinder`, `18° 42`, `226° 14`; the field name was retired when the human story owner released it for article 001. It stays step-007 material for 002 (brief, "Forbidden angle") |
| Media model (§8)             | `media` as a copied asset with `mediaAlt`/`mediaLabel` | rewritten: `media` is a schema-validated **key** (`src/lib/media.ts`), with per-plate alt/caption requirements and no key available for a 002 illustration yet                                                            |

### 14.2 Re-verified (no change needed)

| Check                         | Result (run 2026-09-17 01:46 CEST from `website/`)                                                                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft hash                    | `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` — identical to the editorial review's and the deploy card's record, so the approved revision has not moved                                                |
| Applied metadata              | frontmatter read back: `title: Choosing what a Mars rover carries.`, the 152-character `summary`, and the three links to `/#mission` and `/#updates` all present and unchanged                                               |
| Internal anchors              | `#mission` (`MissionPanel.astro:6`) and `#updates` (`NewsCarousel.astro:11`) each present exactly once in the built homepage; applied links resolve                                                                          |
| Route gate                    | `releasedNewsSlugs` still `[]`; `publication: draft` still fails `isPublishedEntry`; `[slug].astro` generates no article page                                                                                                |
| Draft filtered from the build | the 002 title and the 002 summary each occur **0** times across `dist/`                                                                                                                                                      |
| Gated markers                 | 0 occurrences in `dist/`, 0 in `website/src/`, 0 in the 002 article (§11)                                                                                                                                                    |
| Canonical / crawl surface     | no `SITE_URL` → no `<link rel="canonical">`; 0 files in `dist/` or `src/` carry `og:*`, `twitter:*`, or `application/ld+json`; `dist/` has no `robots.txt` and no sitemap, and `public/` holds only the two tracked favicons |
| Public/canon impact           | none — the article stays `publication: draft`; nothing published, deployed, or committed by this pass                                                                                                                        |

### 14.3 New observations found in this pass

1. **The newsroom index reuses the homepage metadata** — convention settled as `News | Red Horizon`
   in §10, implementation filed as card `t_1828a6d4` (dev).
2. **Transient probe surfaces build into `dist/`** (`/plate-probe/index.html` from another card's
   probe, plus a planted `dist/planted-asteria.html` seen mid-pass) — recorded in §10; not a 002
   surface, and to be removed before any release build. Its owner removed both during this pass: the
   01:48 CEST build emits 2 pages again (`/index.html`, `/news/index.html`).
3. **The site chrome now links `/news/`** (`src/lib/navigation.ts`) — recorded in §10; the applied
   links deliberately keep the stable `/#updates` anchor.
4. **The editorial record's package hash is now stale** — `.agents/work/reviews/002-payload-selection.md`
   records this package's hash at its 01:31 CEST verdict time; this pass edits the package afterwards
   (see 14.5). Routed to the planner as a decision: re-baseline the record or read it as point-in-time.
   No card created by this pass, because the record is another owner's artifact and its verdict on the
   article — whose hash is unchanged — still holds.

### 14.4 Brief change after the first pass

`.agents/work/briefs/002-payload-selection.md` gained its "Allowed angle" text on 2026-09-17 01:41
CEST, after the first SEO pass. It licenses a public payload-selection update covering the four
ranked science objectives (mineral mapping, alteration environment, habitability assessment,
international operations demonstration) and the four instrument categories; the approved article
publishes the categories and the habitability framing, but not the ranked-objectives framing or the
operations-demonstration objective.

Nothing applied here becomes untrue because of that — the title and description are honest for the
article as it stands — but it is a **content gap for the writer, not an SEO defect**, and it sets a
trigger: if the body is expanded to the brief's full angle, the reader intent, title, and description
must be re-passed, because "what a rover carries" would no longer be the whole honest intent. Also
recorded as §9, conflict 8. No change applied by this pass.

### 14.5 Which surfaces this pass touched

- **Changed by this pass:** `.agents/work/seo/002-payload-selection.md` only — the corrections in
  14.1, the §8 rewrite, §9 conflict 8, the §10 and §11 updates, the §12/§13 pointers, and this
  section.
- **Not changed:** `website/news/002-payload-selection.mdx` (hash unchanged), any other
  `.agents/work/` record, and every file under `website/src/`, `website/news/`, and `website/scripts/`.
- **Effect on the recorded gates:** the editorial review records this package's hash at its verdict
  time (2026-09-17 01:31 CEST); this pass changes the package file after that record while leaving the
  article and every public surface byte-identical. The article's approval is unaffected, but the
  package hash in `.agents/work/reviews/002-payload-selection.md` no longer matches the current file
  and should be re-baselined by its owner if the record is to be read as a current-hash assertion.
