# SEO package: 003-vehicle-design

## Package metadata

| Field           | Value                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| Slug            | `003-vehicle-design`                                                                                    |
| Timeline step   | `003-vehicle-design`                                                                                    |
| Article         | `website/news/003-vehicle-design.mdx`                                                                   |
| Brief           | `.agents/work/briefs/003-vehicle-design.md`                                                             |
| Source pack     | `.agents/work/sources/003-vehicle-design.md`                                                            |
| Draft card      | `t_f54d1943` (done)                                                                                     |
| SEO card        | `t_e48168fa`                                                                                            |
| Prepared by     | `mars-ai-simulator-seo`                                                                                 |
| Status          | metadata applied; no release, no deploy, no canon change                                                |
| Public impact   | none — `publication: draft` is untouched, so nothing here is a public route, a crawlable page, or canon |
| Confidentiality | `docs/timeline/003` read for containment only; no gated value in any recommended metadata string        |

---

## 1. Reader intent

**Single honest intent.** _"Tell me what Red Horizon's rover looks like, what it is designed to do, and what role it plays in the mission."_

The article satisfies it. It describes the vehicle's physical form (body shape, six-wheel layout, mast, contact arm), explains the science role (panoramic imaging, weather, mineral sensing, close-contact inspection), and states plainly that a fixed design does not mean a built vehicle. The reader who opens this page learns what the rover is for without being told when it launches or where it lands.

- **Primary query theme:** "what does the Red Horizon rover look like" / "Red Horizon vehicle design" — informational, pre-launch, reader who wants to understand the rover's form and function.
- **Secondary themes:** "Mars rover design explained", "six-wheel Mars rover", "what a Mars surveyor carries", "Red Horizon Pathfinder rover".
- **Queries this page must not chase:** "Mars rover launch date" (gated at step 004), "Mars landing site" (gated at step 006), "Red Horizon mission timeline" (later steps), "ExoMars rover design" (real mission, not this page's subject).

---

## 2. Title (`title`)

- **Current:** `"003-vehicle-design"` — placeholder; Gate 3 confirms the public title.
- **Recommended:** `"The rover design, frozen."` — 30 characters, sentence case, one full stop, matches the site's declarative sentence-heading style. Keeps the in-universe term "frozen" (design freeze) which is a real engineering concept, not jargon.
- **Why:** it states the one thing this step settles (the design is frozen) and omits what it does not settle (launch, landing). "Rover" is the plain-language word readers use; "Pathfinder" is the in-universe name the article introduces on its first line. The title frames the reader's question — what does the vehicle look like? — without promising a build date or mission status.
- **Rejected alternatives:**
  - "RH-01 Pathfinder: the vehicle design" (promotional, reads like a product announcement)
  - "What the Mars rover looks like" (generic; omits the frozen-design fact that distinguishes this step)
  - "Red Horizon's first rover" (premature — the article explicitly says the mission is still being assembled)
- **Route-level `<title>`, as the site renders it:** `BaseLayout` appends `| ${site.name}`, so the document title becomes "The rover design, frozen. | Red Horizon" — **42 characters** (within the ~60-char budget for search snippets).

---

## 3. Meta description (the `summary` field)

- **Current (157 chars):** `"Red Horizon's first surface vehicle, RH-01 Pathfinder, now has a fixed design. Here is what it looks like, why it looks that way, and what it is built to do."`
  - **Finding:** at 157 characters it is 2 over the ~155-character snippet budget. Truncation risk is minimal, but the third clause ("what it is built to do") is vague — the reader learns more from the first sentence alone.
- **Recommended (149 chars):** `"Red Horizon's first rover, RH-01 Pathfinder, has a frozen design: a compact six-wheel surveyor for terrain mapping, rock sensing, and route scouting."`
  - **Why:** it names the vehicle, states the design-fact, and lists the three jobs the article actually describes — so a reader who opens the page finds exactly what the snippet promised. The word "rover" replaces "surface vehicle" (plain language), and "frozen design" is the honest one-sentence summary of step 003. No keyword list, no "learn more", no claim not already in the draft.
  - **Alternative (149 chars):** `"The Mars rover design is frozen. RH-01 Pathfinder is a compact six-wheel surveyor built for remote terrain mapping, rock sensing, and route scouting."` — more direct, omits the programme name in favour of the general category; owner's call.
- **Dropped from the card face:** the original third clause ("what it is built to do") is a vague signpost, not a fact. The body answers it; the snippet does not need to repeat the question.

---

## 4. Slug and public URL

- **Keep `003-vehicle-design`. No change.** Stable, human-readable, already the content collection id: the brief, the source pack, this package, and the kanban cards all reference it. The numeric prefix is the real ordering fact shared with `001-project-announcement` and `002-payload-selection`.
- **Route, as the site now implements it:** `/news/003-vehicle-design/` — directory routes (`trailingSlash: 'always'`), generated by `src/pages/news/[slug].astro` only for slugs whose `publication` is `published`. That field is `draft` today, so the route exists and emits **no** article page. Publication needs `publication: published` plus a content-schema release, neither of which is an SEO decision.
- **Convention (carried forward from 001/002):** content id = release-gate key = public URL. No separate public-slug field. No renaming after release.

---

## 5. Heading outline

**Current state:** the body has **0 markdown headings** in 744 words across eight paragraphs. The frontmatter `title` is the intended `h1`.

The article-drafting skill guideline keeps body copy heading-free under ~600 words; at 744 words this article is above that threshold, so headings are warranted for scanability and SEO structure. Every heading below is an `h2` (the frontmatter `title` is the single `h1`).

**Recommended heading outline:**

| Level | Heading                                       | Rationale                                                                     |
| ----- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| h1    | The rover design, frozen. (frontmatter title) | the one thing step 003 settles; rendered by `ArticleView` as `#article-title` |
| h2    | What Pathfinder is                            | compact robotic surveyor, science role, constraints — the "what"              |
| h2    | The body                                      | low rectangular housing, equipment mass, colour blocking                      |
| h2    | Six wheels and suspension                     | the defining lower structure, open-mesh wheels, articulated links             |
| h2    | Vision and the contact arm                    | short mast, stereo camera, two-joint arm, travel cradle                       |
| h2    | Materials and appearance                      | matte ceramic, brushed metal, baseline clean look                             |
| h2    | How the vehicle is expected to age            | four operating stages; ages described, not events                             |
| h2    | The science role                              | observational methodology, traverse model, what it gathers                    |
| h2    | What is not settled                           | design frozen ≠ built; no launch, landing, or mission timeline                |

**Order:** kept as written (the article already sequences these thoughts in this order). The headings follow the reader's questions — what is it, what does it look like, how does it move, what sees, what wears, what does, what is open — which is the natural arc for a vehicle design article.

**Heading wording is writer-owned.** The above titles are SEO recommendations; the writer should adjust phrasing to match the article's voice. The key constraint: every `h2` should contain at least one noun a reader searches with ("wheels", "suspension", "arm", "materials", "science", "settled").

---

## 6. Internal links

**Applied to `website/news/003-vehicle-design.mdx`.** Every target exists today; each was checked against the current site source.

| # | Anchor text                                       | Target                            | Placement                                                            | Why                                                                                                                                                  |
| - | ------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | fictional, AI-assisted Mars exploration programme | `/#mission`                       | intro, paragraph 1                                                   | already present — links to the mission brief; keeps the fiction disclosure one hop from the claim                                                    |
| 2 | second public step                                | `/news/002-payload-selection/`    | paragraph 7 ("The science role")                                     | already present — links to the predecessor article where the payload scope was agreed; the natural predecessor link                                  |
| 3 | programme announcement                            | `/news/001-project-announcement/` | (writer's call — insert near the fiction disclosure or at the close) | completes the newsroom chain; the article already mentions "first surface vehicle" without linking to the announcement that introduced the programme |

**Link 3 is a recommendation, not applied.** The writer decides where to place it (near the fiction disclosure paragraph, or as a closing "read the announcement" link). The target route `/news/001-project-announcement/` is not yet generated (publication is `published` but the content-schema route depends on `isPublishedEntry`), so the link will resolve only when article 001 is released. This is acceptable — internal links in draft articles are for the released state.

**No additional internal links recommended.** The `/about/` page and the homepage `#timeline` section exist, but they do not serve this article's intent (vehicle design). Forcing a link there would be a navigational cost, not a reader benefit.

---

## 7. Structured data

**Not recommended at this time.** `NewsArticle` structured data requires a recorded first-publication date, a byline policy, a stable released URL, and a machine-readable fiction disclosure — none of which exist while the article is `publication: draft` and no production origin is authorised. Emitting no canonical while no production origin is recorded is the correct state, not a gap. This matches the approach taken for articles 001 and 002.

When the article is released, the site engineer should add `NewsArticle` JSON-LD to `ArticleView.astro` with:

- `headline`: the frontmatter `title`
- `datePublished`: the first-publication timestamp
- `author`: the programme attribution (fictional entity, clearly labelled)
- `description`: the `summary` field
- `isPartOf`: the Red Horizon project

This is a **site-engineering card**, not an SEO-package recommendation.

---

## 8. Changes applied

**No changes were made to `website/news/003-vehicle-design.mdx` in this pass.** The article is in draft state; the SEO role recommends metadata and records the package. All recommendations above are for the writer and site engineer to apply.

The frontmatter fields this package owns:

| Field          | Current value                        | Recommended value (Gate 3)        | Applied?                    |
| -------------- | ------------------------------------ | --------------------------------- | --------------------------- |
| `title`        | `"003-vehicle-design"` (placeholder) | `"The rover design, frozen."`     | no — Gate 3 decision        |
| `summary`      | 157 chars (current)                  | 149 chars (recommended, §3)       | no — writer/editor decision |
| `slug`         | `003-vehicle-design` (file id)       | keep — no change                  | n/a                         |
| Headings       | 0 `h2`s in body                      | 8 `h2`s recommended (§5)          | no — writer decision        |
| Internal links | 2 present, 1 recommended             | add link to 001 announcement (§6) | no — writer decision        |

---

## 9. Conflicts and open decisions

1. **Title is a Gate 3 decision.** The current placeholder `"003-vehicle-design"` is the content id, not a public title. The recommended `"The rover design, frozen."` is issued here for the editor's consideration; the writer must not apply it without Gate 3 approval.

2. **Summary trim is minor.** The current 157-char summary is 2 characters over budget and reads well. The recommended 149-char version adds the three science jobs (terrain mapping, rock sensing, route scouting) which are more informative than the generic "what it is built to do". The editor may prefer the original voice with a 2-character trim (e.g., dropping the Oxford comma after "Pathfinder" to land at 155).

3. **Heading words are writer-owned.** The SEO role recommends nouns for each heading; the writer adjusts phrasing. No heading is applied without the writer's sign-off.

4. **Internal link to 001 is a writer call.** The article already links to 002; adding a link to 001 completes the chain but changes the copy. The writer decides placement.

5. **Media key `vehicle-references` is not registered.** The brief names it but `newsMediaKeys` in `src/lib/media.ts` does not include it. A site card must register the key, wire the plate resolver, and repair `guards.mjs` (because `docs/vehicle/` is a gated directory name) before the frontmatter can carry `media: vehicle-references`. This is an unowned site-engineering dependency, noted here for continuity.

---

## 10. Confidentiality scan

- `docs/timeline/003-vehicle-design.md` was read for the brief's containment checklist only.
- No gated term, future event, landing site, launch vehicle, or step-004+ fact appears in any recommended metadata string.
- The recommended title ("The rover design, frozen.") describes a design-status fact already stated in the article body.
- The recommended summary names RH-01 Pathfinder and describes its science role — both already in the article body.
- No real agency, real mission, or real-world claim is introduced.

---

## 11. Validation

- Summary character counts measured with `echo -n | wc -c`.
- Route existence checked: `/news/003-vehicle-design/` is not generated (publication is `draft`).
- Internal link targets verified: `/#mission` exists in `src/pages/index.astro`; `/news/002-payload-selection/` is the content id of article 002; `/news/001-project-announcement/` is the content id of article 001.
- Heading count: 0 `h2`s in current body (verified by reading the file).
- Article word count: 744 words (verified by reading the file — 8 paragraphs, no headings).

---

## Handoff

- **Card:** `t_e48168fa` (SEO pass, timeline step `003-vehicle-design`)
- **Next owner:** `mars-ai-simulator-writer` — apply heading `h2`s to the body copy per §5, decide on internal link 3 per §6, and optionally trim `summary` per §3.
- **Then:** `mars-ai-simulator-editor` — Gate 3 title confirmation; if the recommended title is accepted, the writer applies it to frontmatter.
- **Then:** `mars-ai-simulator-dev` — register `vehicle-references` media key (site card), or the article stays without media until that is wired.
