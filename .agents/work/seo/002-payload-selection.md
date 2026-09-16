# SEO package: 002-payload-selection

## Package metadata

| Field          | Value                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Slug           | `002-payload-selection`                                                                                 |
| Timeline step  | `002-payload-selection` (public-safe step; nothing from steps 003–011)                                  |
| Article        | `website/news/002-payload-selection.mdx`                                                                |
| Brief          | `.agents/work/briefs/002-payload-selection.md`                                                          |
| Source pack    | `.agents/work/sources/002-payload-selection.md`                                                         |
| Asset manifest | `.agents/work/assets/002-payload-selection/assets.md`                                                   |
| Draft card     | `t_134399ab` (done)                                                                                     |
| SEO card       | `t_27ad4d74`                                                                                            |
| Prepared by    | `mars-ai-simulator-seo`                                                                                 |
| Status         | recommendations reviewed; metadata applied; editorial review of the whole package still downstream      |
| Public impact  | none — `publication: draft` is untouched, so nothing here is a public route, a crawlable page, or canon |

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
  the document title becomes "Choosing what a Mars rover carries. | Red Horizon" (56 characters).
  Rejected variants and why: "Mars rover instruments explained" (generic, drops the in-universe
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
  so the route exists and emits **no** article page: the built route list is `/index.html`,
  `/news/index.html`, `/probe-temp/index.html` only. Publication therefore needs both
  `publication: published` and a release entry, and neither is an SEO decision. Canonical links come
  from `SITE_URL` and are omitted when it is unset (§10).

## 5. Heading outline

Current outline, after this pass. Every body heading is an `h2`; the frontmatter `title` is the
intended single `h1` on the article route. Hierarchy is correct — no skipped levels, no second `h1`.

| Level | Heading                                    | Note                                                        |
| ----- | ------------------------------------------ | ----------------------------------------------------------- |
| h1    | Choosing what a Mars rover carries.        | from frontmatter `title`; not yet rendered (no route)        |
| h2    | Why several instruments instead of one     | answers the "why more than one" question first               |
| h2    | Looking at the landscape                   | panoramic and navigation imaging                             |
| h2    | Reading what rocks are made of             | mineral and rock sensing / spectroscopy                      |
| h2    | Watching the weather                       | environmental monitoring                                     |
| h2    | Getting close enough to inspect            | contact inspection                                           |
| h2    | A European-led contribution                | programme structure inside the payload scope                 |
| h2    | Every instrument needs a home              | the accommodation constraint that shapes selection           |
| h2    | What is not settled                        | disclosure list; the article's honesty anchor                |
| h2    | What this mission is not                   | life-detection boundary                                      |
| h2    | Sources and further reading                | citations and the no-endorsement disclaimer                  |

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
against `website/src/pages/index.astro`. All three are root-relative with a fragment, so they keep
working when the article moves to `/news/002-payload-selection/`.

| # | Anchor text                                             | Target      | Placement                                  | Why                                                                                                                        |
| - | ------------------------------------------------------- | ----------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 1 | fictional, AI-assisted Mars exploration programme        | `/#mission` | intro, paragraph 1                         | puts the programme-defining sentence on the mission brief that states what Red Horizon is, and puts the fiction disclosure one hop from the claim |
| 2 | first public step                                       | `/#updates` | intro, paragraph 2                         | the first public step is the announcement card in the newsroom; this is the article's only in-site pointer to its predecessor |
| 3 | the programme announcement                              | `/#updates` | "What is not settled", the 2031 bullet     | cites where the 2031 launch window is actually published instead of asserting it bare                                               |

No link points at a route that does not exist. In particular, nothing links to
`/news/001-project-announcement/` or `/news/002-payload-selection/`: article detail routes are
release-gated, `releasedNewsSlugs` is empty, and no article page is generated, so those links would
404. The two targets above (`/#mission`, `/#updates`) are homepage section ids carried today by
`src/features/mission/MissionPanel.astro` and `src/features/news/NewsCarousel.astro` — each was
checked in the current source, not in the older single-file `index.astro`.

**Recommended once the routes exist** (do not create them now):

1. News card title (and the card's whole surface) → `/news/002-payload-selection/` at publication, so
   the homepage card becomes a real internal link instead of a dead label.
2. Link 3 above → `/news/001-project-announcement/` once article 001 has a route; it is a more
   precise citation than the newsroom fragment.
3. A "all updates" link → `/news/`. The newsroom index route and its card list exist in the working
   tree as another card's uncommitted work (it builds to `/news/index.html`), so the article body
   does not link to it yet: a link into an uncommitted route can break if that work is reworked.
   Once it is committed, links 2 and 3 above should move to `/news/` — the canonical listing — and
   link 3 should later point at `/news/001-project-announcement/` when article 001 has a released
   detail page.
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
  NASA Mars 2020 instruments; CNES SuperCam; Mustard et al., *Space Science Reviews*, 2020) is
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

- No approved asset exists for this article, so `media`, `mediaAlt`, and `mediaLabel` are correctly
  omitted. The homepage renders the numbered placeholder, which is `aria-hidden` and decorative, so
  no alt text is required today.
- When the visuals candidate is approved and a human selects the export (see
  `.agents/work/assets/002-payload-selection/assets.md`):
  - `mediaAlt`: plain description, roughly ≤160 characters, stating what is depicted **and** that it
    is not final. Example: "Illustration of a rover mast carrying a stereo camera pair and a
    spectrometer aperture; the instrument layout is illustrative, not a final design."
  - `mediaLabel`: `Illustration // not a final instrument layout`.
  - It must not name an unapproved instrument, must not show RH-01 vehicle design, Ariane 64,
    Asteria Field, or any step 003+ fact, and must not imply a real agency built or endorsed it.
  - Keep the filename slug-based and free of unapproved terms (for example
    `002-payload-sensor-concept.png`): filenames travel into the build, the asset path, and social
    previews.
  - Alt text is not a keyword field: no instrument name lists, no "image of", no repetition of the
    title.

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
- Two site issues found while validating. They belong to the in-flight site work on another card, not
  to this pass, so they are flagged rather than fixed:
  - `npm run build` runs `scripts/check-dist.mjs` as `postbuild` and currently fails with six
    `gated-path` findings, all inside `website/scripts/assets.mjs`, `website/src/lib/assets.ts`, and
    `website/src/lib/releases.ts`, where a comment or string names `docs/vehicle` / `docs/timeline`.
    `npm test` fails the same assertion (17 of 18 tests pass) and `npm run lint` reports nine parsing
    errors in `.astro` files and `astro.config.mjs`. No finding involves `website/news/`, and
    `astro build` itself completes with the draft correctly filtered.
  - `website/src/pages/probe-temp.astro` is untracked scratch (an asset-import probe). It sits inside
    `src/pages/`, so it builds to `/probe-temp/index.html` and its optimised assets would ship with
    any deploy. Recommend the dev card removes it before a release build.

## 11. Confidentiality check

- Applied metadata (`title`, `summary`) and the three link anchors scanned for: RH-01, Pathfinder,
  Ariane, Asteria Field, FEI STU or any institution name, launch or landing dates, sample-return
  wording, and 2027–2034 date strings. Result: clean.
- No text from `docs/timeline/` is quoted, paraphrased, or implied in any metadata surface. The
  `title`, `summary`, `mediaAlt` guidance, and structured-data recommendations restate only facts
  already published in the draft and its source pack.
- No unapproved partner is named, no real agency is presented as a participant, and no future outcome
  is promised.
- Public/canon impact: none. `publication: draft` is untouched; canon and release approval remain
  human decisions.

## 12. Validation

| Check                                       | Result                                                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `astro build` (run from `website/`)          | Complete — 3 pages: `/index.html`, `/news/index.html`, `/probe-temp/index.html`                                                |
| `postbuild` dist guard (`check-dist.mjs`)    | **fails** — six `gated-path` findings in `scripts/assets.mjs`, `src/lib/assets.ts`, `src/lib/releases.ts`; none in `website/news/` or this pass's files (§10) |
| Draft filtered out of the built site         | verified — the new title and the new summary each appear **0** times in `dist/index.html` and `dist/news/index.html`, while the published 001 card and its summary each appear once |
| No article detail route generated            | verified — no `/news/<slug>/index.html` exists; `releasedNewsSlugs` is empty                                                    |
| `npm test` (vitest)                          | 17 of 18 pass; the single failure is the same `gated-path` assertion, not this pass                                             |
| `npm run lint` (eslint)                      | 9 errors, all parse/`no-undef` errors in `.astro` files and `astro.config.mjs` from the in-flight refactor; no finding in `website/news/` |
| Forbidden-term scan of the applied metadata  | clean (§11) — also clean against the build guard's marker list (`RH-01`, `Pathfinder`, `Asteria`, `18° 42`, `226° 14`)          |
| Internal link targets exist                  | `#mission` in `src/features/mission/MissionPanel.astro`, `#updates` in `src/features/news/NewsCarousel.astro`, `#top` in `Hero.astro` |
| Metadata field constraints respected         | `title` and `summary` set on existing schema fields only; no field invented and no schema change                                |
| Description length                           | 152 characters                                                                                                                  |
| Prettier / `npm run format`                  | not run — `prettier-plugin-astro` is missing from `website/node_modules`, as the draft card already noted                        |
| External link HTTP status                    | not re-checked in this pass; the draft card recorded 5/5 returning 200                                                          |
| Effect on published pages                    | none — the entry stays `publication: draft`, so no card, listing entry, or route is generated for it                            |

## 13. Handoff

- **Card:** `t_27ad4d74` (stage `seo`), timeline step `002-payload-selection`.
- **Inputs:** brief, source pack, draft `website/news/002-payload-selection.mdx`, asset manifest.
- **Outputs:** this package; `website/news/002-payload-selection.mdx` (title, summary, three internal
  links).
- **Changed files:** `.agents/work/seo/002-payload-selection.md` (new),
  `website/news/002-payload-selection.mdx`.
- **Confidentiality:** clean; no canon or release impact; nothing published.
- **Flagged, not fixed (other cards):** the failing `postbuild` dist guard and the eslint parse
  errors in the in-flight site refactor; `website/src/pages/probe-temp.astro` shipping as
  `/probe-temp/`. Both are recorded in §10 and in the card comment. None of them involves
  `website/news/`.
- **Outstanding review:** continuity, then the editorial final gate, then human release approval, then
  the release reference in `src/lib/releases.ts` before any article page can exist. No SEO-side
  blocker.
- **Next owner:** `mars-ai-simulator-visuals` for the IMAGES stage (asset manifest and the alt-text
  guidance in §8), then continuity, then the editor.
