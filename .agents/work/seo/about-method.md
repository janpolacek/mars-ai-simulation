# SEO package: about-method (`/about/` and the optional `/404`)

## Package metadata

| Field              | Value                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route              | `/about/` (optional second item: `/404`)                                                                                                                  |
| Stage / step       | `seo`; timeline step `site-foundation` (`docs/PLAN.md` Phase 1 item 2). Factual bound: the published step-001 release.                                     |
| Card               | `t_2bf95f76` (`mars-ai-simulator-seo`), parent `t_16ec6ba2` (writer)                                                                                        |
| Inputs read        | `.agents/work/briefs/about-method.md`; `.agents/work/drafts/about-method.md`; `website/news/001-project-announcement.mdx` (published); `docs/GENERAL.md`; `docs/INSTRUCTIONS.md`; `docs/PLAN.md` (Phase 1–2, Phase 4); `website/src/{lib,components,features,layouts,pages}/**`; `website/scripts/{guards,check-dist}.mjs`; `website/test/guards.test.mjs`; `website/.prettierrc`; `.agents/work/seo/{001-project-announcement,002-payload-selection}.md` |
| Conventions read   | `.agents/skills/seo-content/SKILL.md` (including "Verified practice"); `.agents/skills/brand-voice/SKILL.md`                                                |
| Artifact           | this file (`.agents/work/seo/about-method.md`)                                                                                                             |
| Applied this pass  | one file, two strings: `website/src/pages/news/index.astro` (§11). The `/about/` metadata below is recommended to the build card, not applied to `website/src/`. |
| Status             | recommendations issued; **no approval, no release, no deploy, no canon decision**                                                                          |

Assumptions recorded (nothing here is treated as approved):

1. No editor, continuity, or human approval exists for this copy; `.agents/work/reviews/about-method.md`
   does not exist yet. This package is an input to those gates, not a verdict.
2. `SITE_URL` is unrecorded, so no canonical is emitted on any route today, and no origin-dependent
   recommendation here is live.
3. The copy stays site strings rendered by the dev card `t_e89fb389` from the draft's frozen block. Body
   wording is the writer's; this pass owns `<title>`, meta description, heading order, and internal links.
4. `docs/timeline/` and the withheld dossiers were read as continuity material only. No withheld value
   appears anywhere in this package; §13 reports the scan result rather than a term inventory.

---

## 1. One reader intent

**Single honest intent.** _What is Red Horizon — is it real, who makes it, and how does a page get published
here?_

The page answers all three: §"What this is" states the fiction and names the real project that produces it;
§"How a page is made" and §"How the record moves" state the method and the release discipline; §"What is
public today" states the status; §"What this is not" states the boundary; §"Where to start" hands the reader
to the two places that go deeper. A reader who arrives asking "is this real?" leaves with a plain answer and
two honest next steps, which is exactly what an about page on a fictional programme can promise.

- **Primary query theme:** "Red Horizon" + "is it real / real or fake / what is it" and
  "Mars AI Simulation" (the real project behind the fiction) — brand-informational, disclosure-seeking.
- **Secondary themes:** "how the site is made", "AI-generated fiction project", "fiction disclosure page".
- **Queries this page must not chase:** mission news ("Mars rover news", "Mars 2031 launch"), instrument
  or vehicle questions, launch-provider or landing-region questions, and any query whose answer waits for a
  later step. Those answers do not exist on this page and metadata must not imply them.
- Theme (one phrase, used consistently): _a fictional Mars mission, and the real project that publishes it._

**How `/about/` differs from `/` and `/news/`** (the three must not present one identity):

| Route    | Reader question it answers                            | Document title (after this pass)                                 | Must not answer                                        |
| -------- | ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| `/`      | "What is the state of the mission right now?"          | `Red Horizon \| A Mars mission in progress` (site default, unchanged) | the fiction/method question — it links to `/about/` via nav |
| `/news/` | "What has the programme published so far?"             | `Red Horizon newsroom \| Every published step so far` (applied, §11) | the mission's current state — that lives on `/`          |
| `/about/` | "Is this real, and how is it made?"                   | `About Red Horizon \| How a fictional Mars mission is made` (§2)  | the publication list — it links to `/news/`              |

Three pages, three question families: current state / published record / identity and method. The word
"fiction" belongs to `/about/` (and the site-wide footer disclosure); `/` and `/news/` keep the mission's
own voice. No string here repeats another route's title, and none of the three carries a date, a figure, an
instrument, a vehicle, or a provider.

---

## 2. `<title>` for `/about/`

**Recommended (this pass's wording, 56 characters ≤ 60):**

> About Red Horizon | How a fictional Mars mission is made

- **Previous:** `About Red Horizon | How this fiction is made` (writer's proposal, 44 characters — measured,
  confirmed). Kept below as the revert string.
- **Why it replaces it:** the writer's half after the pipe is abstract — "how this fiction is made" contains
  no word a reader searches with, and "fiction" alone does not answer "is it real". The recommended version
  keeps the same sentence frame and adds the reader's own two tokens, "fictional" and "Mars mission", which
  are also the page's own first sentence. It is not a keyword list: one brand, one noun phrase, one method
  clause, one pipe.
- **Route rendering:** `BaseLayout` (`.astro` line 31) sets `<title>` from the prop *without* a site suffix,
  and the default it replaces is itself brand-first (`Red Horizon | A Mars mission in progress`, 40). So this
  string must be self-contained, and it is: brand, then the page's job.
- **Rejected variants (measured):** `About Red Horizon | A fictional Mars mission, and how it is made`
  (64 — over the 60 limit) and `About Red Horizon: a fictional Mars mission and how it is made` (62 — over).
  Composition-style titles that end on a comma-cleft are longer than the plain form and buy nothing.
- **Relationship to the visible `h1`:** the page heading stays the writer's sentence
  (`About Red Horizon and how it is made.`, 37 characters). `h1` and `<title>` describe the same page from
  the same facts; the search string is allowed to be the plainer of the two, and it promises nothing the
  body withholds. No second `h1`, no visible duplicate of the title.
- **No `keywords` meta, ever.** It is ignored, and on this project it would be the easiest place to leak a
  gated term. Nothing in this package is a keyword list.

**Revert string** (one value): `About Red Horizon | How this fiction is made`.

---

## 3. Meta description for `/about/`

**Recommended (145 characters ≤ 155):**

> What Red Horizon is: a fictional Mars mission made by Mars AI Simulation. How a page is written, checked,
> and released, and what is public today.

- **Previous:** `Red Horizon is a fictional Mars mission. How an AI-assisted project writes, reviews, and
  releases it, and what is public today.` (writer's proposal, 127 characters — measured, confirmed). Kept as
  the revert string.
- **Why it replaces it:** the writer's version is honest but anonymous — "an AI-assisted project" names no
  entity, and `Mars AI Simulation` is the one real, searchable name this page uniquely carries
  (`website/src/lib/site.ts` already publishes it in the footer, and `docs/GENERAL.md` "Purpose" assigns the
  plain statement of it to this page). The rewrite also removes the ambiguous pronoun "it" and replaces
  "reviews" with the page's own sequence of steps.
- **Disclosure position:** the fictional disclosure is in the first clause, not at the end. That is the
  project rule (`docs/INSTRUCTIONS.md` "Canon and information safety") and it is also what the reader
  searching "is it real" needs to see in the snippet.
- **No promise beyond the body:** identity, method, and "what is public today" are the page's own first,
  second and fourth sections. No date, figure, instrument, vehicle, provider, or step-002 fact appears.
- **Not used as visible copy:** this string is the document head only. The page's standfirst stays
  `A fictional Mars mission, published one step at a time, in the order it happens.` (writer's string, 80
  characters) — a page can carry a card-style standfirst and a search-shaped description without either
  being the other.

**Revert string** (one value): `Red Horizon is a fictional Mars mission. How an AI-assisted project writes,
reviews, and releases it, and what is public today.`

---

## 4. Slug and route

**Keep `/about/`. No change, no alternative proposed.**

- The route is the one the plan authorises (`docs/PLAN.md` Phase 1 item 2, "About / Method disclosure page
  with a persistent footer link"), and the nav label is already fixed by the writer's card as `About`.
- `about` is lowercase, human-readable, and matches the one name the brief, draft, review path and cards all
  use. It carries no gated term and no version number.
- Trailing-slash behaviour is the site's (`trailingSlash: 'always'` in `website/astro.config.mjs`), so the
  canonical form is `/about/`; no other spelling should be published or linked.

---

## 5. Heading outline

**Order: kept as the writer wrote it. No reorder applied** (heading *order* is this pass's call; heading
*wording* remains the writer's).

| Level | Heading (frozen copy)      | The reader question it answers                        | Promise check                                                        |
| ----- | -------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| h1    | About Red Horizon and how it is made. | "What is this page?"                        | matches the whole page; no figure, no date                            |
| h2    | What this is               | "Is it real, and who is behind it?"                   | body answers both in its two paragraphs — satisfied                   |
| h2    | How a page is made         | "How does something like this get written?"           | body states the chain and the human gate — satisfied                  |
| h2    | How the record moves       | "In what order do you publish, and what if you err?"  | body states order, no spoilers, dated corrections — satisfied         |
| h2    | What is public today       | "What do I already know?"                             | body restates only step-001 published facts — satisfied, adds nothing |
| h2    | What this is not           | "Is this a real agency / real mission?"               | body states non-affiliation — satisfied                               |
| h2    | Where to start             | "Where do I go next?"                                 | body's two links are the two live routes — satisfied                  |

Outline verdict: one `h1`, six `h2`, no skipped level, no heading that promises what the body withholds, and
no heading carrying a date, a figure, or a later-step noun. The reader's first question ("is it real?") is
answered in the first section, which is the right order for the page's single intent.

**Considered and not applied (order).** Moving §"What this is not" up to sit beside §"What this is" would put
both halves of the disclosure together. It is rejected: the page would then open with three negatives, the
first section already carries the fiction in its opening sentence, and the site-wide disclosure sits in the
footer of every page. The current order (identity → method → record → status → boundary → next) is the better
reading order; the boundary still lands before "Where to start".

**Recommended to the writer (wording, not applied — writer-owned).** One heading is figurative enough that a
scanner cannot tell what it covers: `How the record moves` says nothing about release order or corrections.
Optional plain half, same house voice:
`How the record moves: release order and corrections` (51 characters). The other five are already plain
language at the level a reader searches with; restyling them would add noise. No heading is recommended to
change into a keyword.

---

## 6. Internal links

**Set: two links, both targets verified live in the current tree. This is the set the draft already
contains; no anchor change is recommended.**

| # | Anchor text | Target   | Placement          | Verified today                                                                                          |
| - | ----------- | -------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| 1 | home page   | `/`      | §"Where to start"  | `website/src/pages/index.astro` exists and built `/index.html` in the last build (`website/dist/index.html`)      |
| 2 | newsroom    | `/news/` | §"Where to start"  | `website/src/pages/news/index.astro` exists (re-read at decision time), built `/news/index.html` in the last build |

**Resolved: the writer's open item 4 — keep `/news/`, do not substitute `/#updates`.**

- The route exists in the working tree at the moment of this decision (re-read immediately before deciding,
  per the card's correction comment) and generates `/news/index.html`.
- It is **not** a new dependency: `website/src/lib/navigation.ts` puts `/news/` in the shared nav, which
  `SiteHeader` and `SiteFooter` render on **every** page. The site's chrome already links this route from the
  About page's own header, footer, and 404; a body link adds no risk that the chrome has not already taken.
- The route is still uncommitted (another card's in-flight work). That is recorded here as a fact, not as a
  reason to publish a weaker link: if the newsroom were reworked away, the nav — not this anchor — would be
  the first thing to break, and the link-integrity test recommended in `.agents/work/seo/001-project-announcement.md`
  §10 is the guard for it.
- `/#updates` remains the correct target for *newsroom content on the homepage*, and it is what article 002
  uses today. It is not the right target for a sentence that says "The newsroom collects everything published
  so far": that sentence describes the index, and the anchor text names it.

**Deliberately absent, and to stay absent:**

- **No link to `/news/<slug>/`.** `website/src/lib/releases.ts` ships `releasedNewsSlugs = []`, so no article
  detail page is generated and any such link would 404 — the false-affordance defect the corrective cards
  were opened for. `NewsCard` itself already renders the label as a plain `span` for the same reason.
- **No link to a wiki, media, or mission-update route.** Those collections do not exist yet
  (`docs/PLAN.md` Phase 2).
- **No anchor that promises a later step** ("what the rover carries", "where it lands", "when it launches").
  The two anchors describe their destinations and nothing else.

**Recommended once the routes exist** (do not create them now): `/news/001-project-announcement/` as a more
precise citation than the newsroom index, once that article has a human release reference. The copy is
frozen, so any such link is a writer/editor change to the last paragraph, not an SEO edit.

---

## 7. Image and alt text

- **No image on this page, so no alt text to recommend.** The draft's visual brief is "none needed", and the
  layout already renders the approved identity mark in the splash, header, and hero — where it is decorative
  (`alt=""` in `website/src/components/SiteHeader.astro` and `website/src/features/mission/Hero.astro`).
- **If the editorial gate or the human adds a mark plate to `/about/`**, that is a new card with its own
  asset manifest, and the alt text must **reuse** the background-neutral wording already recorded for the
  same asset in `.agents/work/seo/001-project-announcement.md` §8 rather than describe the mark a second way.
  Two pages describing one mark differently is the drift the media registry was introduced to prevent.
- No filename, label, or alt string for this page may carry a gated term; there is nothing to name today.

---

## 8. Structured data

**Recommendation: emit none. Nothing should change in the head of `/about/` beyond `<title>` and
`<meta name="description">`.** Verified in this pass: no JSON-LD, no `schema.org` reference, no Open Graph
or Twitter card anywhere in `website/src/`.

| Candidate                | Verdict  | Reason                                                                                                                       |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Organization` ("Red Horizon") | **never** | It asserts a real entity for a fictional programme — the same finding as the 001 and 002 passes. schema.org has no fictional-entity type, and `disambiguatingDescription` does not fix an assertion. |
| `Organization` (Mars AI Simulation) | not now | The project is real, but there is no approved origin, no logo policy for markup, and no contact point; `website/src/lib/seo.ts` suppresses the canonical for exactly this reason. |
| `AboutPage` / `WebPage`  | not now  | Both require a `url` and belong to a `WebSite`; with `SITE_URL` unrecorded, any URL would be invented. The type also adds nothing a reader sees. |
| `WebSite`                | deferred | Honest the moment a production origin exists (name + url only). Hold it to the canonical rule: no markup before a real origin. |
| `BreadcrumbList`         | not now  | One extra level (`/` → `/about/`) buys no rich result and would describe a hierarchy the visible design does not show.          |
| `FAQPage`                | **no**   | The page publishes no question-and-answer block; marking up questions the body does not contain would be inventing content.    |

**Preconditions before any page-level structured data is reconsidered** (all of them): a recorded origin
(`SITE_URL`), a byline/credit policy, and a machine-readable fiction disclosure that travels with the markup.
Owner of the policy decision: the human story owner; implementation: `mars-ai-simulator-dev`. The
fiction disclosure itself stays visible page copy and must never be replaced by, or hidden behind, markup.

---

## 9. `/404` — judged independently

**Verdict: the 404 copy is acceptable as written, with one metadata condition.**

| Item                 | Value                                                                                              | Measured / verified                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Document title       | `Page not found \| Red Horizon` (writer's string — confirmed, no change)                              | 28 characters ≤ 60                                                                                    |
| Meta description     | **leave the site default.** The page is recommended `noindex`, so its description is not a search surface, and a bespoke string would only add an unused copy string to the site. | site default 108 characters                                                                            |
| Heading              | `This page isn't here.` (writer's string)                                                              | no mission fact                                                                                        |
| Links                | `Home page` → `/`, `Newsroom` → `/news/`                                                               | both routes exist (same verification as §6)                                                            |
| Mission facts        | none — the page cannot outrun any release step                                                         | verified against the copy strings                                                                      |
| Indexability         | **recommend `noindex`** for this route                                                                 | see below                                                                                              |

**Condition (recommendation to `mars-ai-simulator-dev`).** `BaseLayout` (`.astro` line 18) derives a
canonical for **every** route from `Astro.url.pathname` and emits it whenever `SITE_URL` is set. A 404 route
is a route, and the pathname it would carry is not the URL a reader asked for — so when the origin is
recorded, the error page would ship either a wrong canonical or, with no `noindex`, an indexable error page
that competes with the real routes. Today this is latent because `SITE_URL` is unset and no canonical is
emitted at all. Fix it while it is latent: give `BaseLayout` an opt-out (for example a `noindex` prop that
adds `<meta name="robots" content="noindex">` and suppresses the canonical) and use it on `404.astro`.
That is a metadata-surfacing change and belongs to the dev card, not to this one. No other page should carry
`noindex`, and `/about/` must not.

**Revert string:** none needed — nothing is applied to the 404 by this pass; the recommendation is additive
and reversible by removing the prop.

---

## 10. The two coherence items the draft flagged (decisions, not rewrites)

**Item 1 — schedule and budget frames are referred to but not restated. Decision: keep the frame-only
wording. Do not restate the year or the figure, in the body or in any metadata string.**

- Both values are public in the published step-001 article, so restating them would be inside the release
  bound — this is a coherence call, and the frame-only version is the better one.
- The About page is not the mission-facts page. `website/src/features/mission/facts.ts` publishes the
  homepage fact panel, and its launch/landing rows read `To be announced`. A fictional year restated on the
  about page would sit beside that panel without explaining the difference between an announced *window
  frame* and a *date*, and the About page's own method section promises that the record does not run ahead
  of the mission.
- No metadata string this pass recommends carries a year or a figure, for the same reason the 001 pass kept
  them out of its titles and descriptions: a snippet with a number in it dates the page and competes with
  the article that actually owns the fact.
- **The underlying site question is not mine and is not re-opened here.** The coexistence of a published
  2031 window frame (article 001) with `Launch date: To be announced` (homepage fact panel) is a continuity
  question. Routed to `t_a0ee9abf` (continuity) in the card comment; if it decides the two statements need a
  reader-facing reconciliation, that is a card for the writer and the homepage owner, not a metadata edit.

**Item 2 — naming "Mars AI Simulation" on the About page. Decision: keep the name.**

- It is already public: `website/src/lib/site.ts` (`project`, `footerLabel`) renders it in the footer of
  every page, and `docs/GENERAL.md` "Purpose" states that the experiment's purpose "is stated plainly on the
  site's About/Method page".
- It is also the page's one distinctive entity: the About page is the only place on the site that explains
  the relationship between the fiction (Red Horizon) and the real project that makes it (Mars AI Simulation).
  Removing the name would leave the page's method section anonymous and weaken the one query family that is
  genuinely about this project rather than about a fictional mission.
- The recommended meta description (§3) therefore names it once. One occurrence, not a repeated brand
  string, and no keyword list.

**Item 3 (draft) — the non-affiliation sentence must not drift from the approved disclosure.** Not a
metadata question and not re-decided here: the site-wide disclosure in `website/src/lib/site.ts`
(`disclosure.body`) stays authoritative, and the About page echoes it. Already in `t_a0ee9abf`'s check list
(item 5).

**Item 5 (draft) — nav placement.** Not mine. The label is `About`, the source is
`website/src/lib/navigation.ts` (header **and** footer from one list), and the 320 px fallback is the dev
card's measurement. No metadata consequence either way.

---

## 11. The `/news/` title collision — resolved and applied

**Finding (verified in source, not by eye):** `website/src/pages/news/index.astro` passed no props to
`BaseLayout`, so the newsroom index inherited `site.defaultTitle` and `site.defaultDescription` — the
homepage's pair. The last build output on disk shows the result: `website/dist/index.html` and
`website/dist/news/index.html` each carry `<title>Red Horizon | A Mars mission in progress</title>`. Two
live routes, one identity, the newsroom with no title of its own.

**Decision and action.** The newsroom is a distinct surface with a distinct intent (§1), so it gets its own
title and description. Applied as a prop pair at the top of that one page; no visible copy changed, no other
route touched, and the homepage keeps the site default.

- Applied title: `Red Horizon newsroom | Every published step so far` — 50 characters ≤ 60.
  - **Revert:** delete both props (the page then inherits `Red Horizon | A Mars mission in progress`).
  - **Alternative recorded, not applied:** `Red Horizon news | Every published step so far` (44) if the
    editor prefers the plain nav word over the site's own "newsroom" vocabulary. Both are honest; "newsroom"
    matches what the page's eyebrow says and what the About copy calls it.
- Applied description: `Red Horizon is a fictional Mars mission. Every step the programme has published so
  far is listed here.` — 102 characters ≤ 155.
  - **Revert:** `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first
    planning to the surface.` (the site default, 108).

**One adjacent observation, not applied (writer/editor-owned, visible copy).** The newsroom index renders
the heading `The story starts before launch.` (inside `NewsList.astro`) — the same sentence the homepage
`#updates` section already uses as its `h2`. Two surfaces with one heading is defensible for one collection,
but if the editor wants the index to read as an index, a distinct `h1` is a writer's change. It is not a
metadata defect and nothing in this pass depends on it.

**Recommended to `mars-ai-simulator-dev` (not applied).** The defect in this section survived a build and a
test suite because nothing asserts it. `website/test/guards.test.mjs` already checks generated routes and
that draft titles never reach the build; add the sibling assertion — every generated HTML route carries a
distinct `<title>`, and none of them is empty — so a page that forgets its props fails the suite instead of
competing with another route. It is a few lines against the same `listRoutes()` helper the guard already
exports.

### 11a. Amendment — the title's ownership, reconciled (card `t_ef895257`, 2026-09-17 02:01 CEST)

**One amendment; no string is changed by it.** The applied title in §11 was superseded and then restored
within ten minutes. `.agents/work/seo/002-payload-selection.md` §10/§14.3 settled `News | Red Horizon` and
card `t_1828a6d4` implemented it at 01:56; the 001 revision re-pass **§R11.1** (card `t_3bd87425`, 01:58
CEST) then settled the other way — **keep the applied `Red Horizon newsroom | Every published step so
far`**, with `News | Red Horizon` as the *recorded fallback*. This card, the corrective raised on
`t_1828a6d4`, **confirms §R11.1** rather than re-opening it, and applies nothing to the site. §11's title
row is therefore accurate again as written; what changed is where the string lives and which string is the
fallback.

Verified on disk and in the build at 02:00 CEST:

| Surface | Value and hash |
| ------- | -------------- |
| `website/src/lib/site.ts` | `newsTitle: 'Red Horizon newsroom \| Every published step so far'` (50) — the applied string now lives here, not in the page (`sha256 86991815…`) |
| `website/src/pages/news/index.astro` | `title={site.newsTitle}`; §11's applied **description byte-identical**; the page-local `const title` that §12's diff records is gone (`sha256 14104321…`) |
| `website/dist/news/index.html` | `<title>Red Horizon newsroom \| Every published step so far</title>` |
| `website/dist/index.html` | `<title>Red Horizon \| A Mars mission in progress</title>` — unchanged, still the site default |

**The title's revert path, updated for its new home (string kept, path corrected):** set `site.newsTitle`
to the recorded fallback `News | Red Horizon` (18), or drop the `title` prop so the page inherits
`site.defaultTitle`. §11's other recorded alternative, `Red Horizon news | Every published step so far`
(44), is now **dead**: §R11.1 names one fallback, not two, and this amendment does not reinstate a third
option.

**What §11 still owns: the description, and only the description.**
`Red Horizon is a fictional Mars mission. Every step the programme has published so far is listed here.`
(102) is still the applied `<meta name="description">` on `/news/`, still unsigned, and it belongs to the
editorial gate `t_e7e82218` as adopt-or-revert. Its revert is unchanged: `site.defaultDescription` (108).
This card does not decide it — a copy decision is the editor's, not this role's.

**Outcome, recorded 02:03 CEST: the description is ADOPTED.** That gate closed `approved` at 02:02:30 with
the decision explicit in both the verdict body and its metadata — `.agents/work/reviews/about-method.md`
(sha256 `93249cfa…`): "adopt the `/news/` description … revert = `site.defaultDescription`". The same
verdict records the title revision it judged (the live one, `Red Horizon newsroom | Every published step so
far`, with both revisions listed) and leaves the title convention to this card. §11's applied pair is
therefore **fully signed**: the title by §R11.1, the description by this verdict. No revert string is
deleted — the description's revert simply stops being "pending" and becomes a recorded fallback that is not
in use.

**Hash note — stranded, not invalidated; do not re-baseline from here.** The gate's verdict records this
package at `d210070d…`; §11a post-dates it. The verdict's scope is the frozen copy block and the two
`/about/` metadata strings, and none of them moved, so the verdict stands and only the recorded hash is
stale. Re-baselining the review record is its owner's call (the editor's), not a reason for this role to
edit another owner's artifact.

**Non-blocking observation kept on the record.** The standing `/news/` title is the one document title on
the site that inverts the `X | Red Horizon` frame (`site.defaultTitle`, and every article title) by putting
the brand first. That is a consequence of the settled convention, not a defect, and it is not a reason to
flip again: if the editor ever aligns the site's vocabulary, §R11.1's fallback `News | Red Horizon` is the
string that restores the frame.

**Why the conflict happened, recorded so it is not repeated:** both packages wrote the same surface without
seeing each other; the 002 package's §14.3 premise ("the page renders `<BaseLayout>` with no props") was
already false when it was written, and §R11.1's record supersedes it. What a reader and a search engine
actually receive was read from `dist/`, not from either package's intent — that check is what this
amendment rests on, and it is now a standing practice in `.agents/skills/seo-content/SKILL.md`.

---

## 12. Applied changes (complete record, with revert strings)

One file changed. Nothing else in `website/src/` was touched by this pass, and `/about/`'s own metadata is
delivered as a recommendation for the dev card to transcribe (it is not written into the site tree here —
the dev card owns that transcription).

```diff
--- a/website/src/pages/news/index.astro
+++ b/website/src/pages/news/index.astro
@@ -1,8 +1,18 @@
 ---
 import NewsList from '../../features/news/NewsList.astro';
 import BaseLayout from '../../layouts/BaseLayout.astro';
+
+/**
+ * The newsroom is its own page: without its own title and description it
+ * inherits the homepage pair from `BaseLayout`, and two routes present one
+ * identity to a search engine. Neither string is visible copy — the page
+ * heading stays the section heading inside `NewsList`.
+ */
+const title = 'Red Horizon newsroom | Every published step so far';
+const description =
+    'Red Horizon is a fictional Mars mission. Every step the programme has published so far is listed here.';
 ---
 
-<BaseLayout>
+<BaseLayout title={title} description={description}>
     <NewsList />
 </BaseLayout>
```

| # | String / value                                             | Where              | Was (revert string)                                                                                       | Why it is mine                                     |
| - | ---------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1 | `Red Horizon newsroom \| Every published step so far`        | page `<title>`     | `Red Horizon \| A Mars mission in progress`                                                               | document title; meaning-neutral; no visible copy     |
| 2 | `Red Horizon is a fictional Mars mission. Every step the programme has published so far is listed here.` | `<meta name="description">` | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.` | meta description; meaning-neutral; fiction kept      |

**Concurrent edits found in the shared checkout while this pass ran** (recorded so the record is exact; none
of them mine, none of them on a file this pass touched):

- `website/src/lib/site.ts` `splashLabel` was changed to `Loading` by card `t_e8256196` while this pass ran.
- `website/src/pages/news/` and `website/src/lib/` are still **untracked** in `git status` — the newsroom
  route is in-flight work, which is why §6 records it as "exists in the working tree today" rather than
  "committed". The page file was re-read immediately before the patch above and was unchanged from the read
  this pass started with.

---

## 13. Confidentiality check

- **Strings scanned:** two runs. (1) The candidate set measured in §2/§3/§9/§11 and the writer's own proposed
  strings — 25 strings. (2) The final set, exactly as it appears in this package: the 11 recommended and
  applied metadata strings, plus the 21 string literals of the About copy block and the 7 of the `/404`
  block as they appear in `.agents/work/drafts/about-method.md` — 39 strings. **64 strings, 0 hits.**
- **Pattern set:** 27 patterns — the guard's gated text markers (`website/scripts/guards.mjs`
  `gatedTextMarkers`, 4) and the withheld token list carried by
  `.agents/work/briefs/001-project-announcement.md` "Forbidden token set" (23 after excluding the values that
  document records as released: the region name and the released coordinate set). The pattern set is built
  by the scanner from those two files at run time; **no withheld value is copied into this package.**
  Scanner: `/tmp/seo-about-measure.py` and `/tmp/seo-about-scan-final.py`, deliberately outside the
  repository.
- **Result: 0 hits in every string, including every metadata surface, heading, and anchor of this pass.**
  Nothing this package recommends touches a withheld name, coordinate, date, provider, institution,
  instrument, or duration.
- **Whole-file scan, including this package:** `.agents/work/briefs/about-method.md`,
  `.agents/work/drafts/about-method.md` and `.agents/work/seo/about-method.md` each produce three pattern
  matches, and all of them are the same two false-positive classes: (a) the substring inside the already
  public word "uncrewed", and (b) the pipeline slug of a *different* working paper that the files cite by
  path (`…/002-payload-…`, which is a repository filename, not a mission fact). No withheld value is present.
  This is the same class of substring false positive the 001 and 002 passes recorded; it is a scanner
  artefact, not a finding, and no corrective card is needed. The hits are reported by count and class here,
  not by term inventory.
- **What is deliberately not in this file:** the withheld-material list is cited by location (the brief's
  §"Page content (bounded)", the step-001 review's §6, and `docs/SCENARIO.md` §"Continuity and release
  controls") rather than restated. This package is a git artifact; it carries no withheld name, coordinate,
  date, provider, institution, or duration, and no list of them.
- **No later-step disclosure anywhere:** no string here implies a step ≥002 fact, a settled technical
  decision, a date, or an outcome. `/about/`'s metadata describes method and identity only, which is why it
  is safe at `site-foundation` while the mission's technical record is barely started.

---

## 14. Validation

| Check                                          | Result                                                                                                                              |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| All proposed strings measured by script         | Yes — `/tmp/seo-about-measure.py`, `/tmp/seo-about-final.py` (outside the repository), not by eye. Titles ≤ 60, descriptions ≤ 155: all ok (§2, §3, §9, §11) |
| Writer's own measurements re-checked            | Confirmed: title 44, description 127, 404 title 28, `h1` 37, body 404 words — the draft's numbers reproduce exactly                   |
| String lengths proposed this pass               | about title 56; about description 145; newsroom title 50; newsroom description 102; 404 title 28 (confirmed) — all inside limits with margin |
| Non-ASCII in any proposed string                | none — no em dash, no curly quote, no non-breaking space; nothing for a snippet to mangle                                             |
| Routes the internal links target exist today     | `/` → `src/pages/index.astro`; `/news/` → `src/pages/news/index.astro` (re-read at decision time); both built in the existing `dist/` |
| Homepage anchors exist today                     | `#top` in `Hero.astro` line 7, `#mission` in `MissionPanel.astro` line 6, `#updates` in `NewsCarousel.astro` line 11, `#timeline` in `ProgressLog.astro` line 6 — grep-verified in the features, not in an old single-file `index.astro` |
| Routes that do **not** exist and are not linked  | `/news/<slug>/` (no route; `releasedNewsSlugs` empty), wiki/media/mission-update collections, `/404` is not linked from anywhere and must not be |
| Duplicate-title finding reproduced                | `website/dist/index.html` and `website/dist/news/index.html` both carry the site default `<title>` — measured in the existing build output, read-only |
| Page build run by this pass                      | **No.** The card forbids it. All route evidence above is source inspection plus the existing `dist/` from the last build by another card      |
| Formatting of the applied file                   | `npx prettier --check src/pages/news/index.astro` could not run — `prettier-plugin-astro` is not installed in `website/node_modules` (the same blocker the 001 and 002 passes recorded). The edit follows the surrounding style manually: 4-space indent, single quotes, semicolons, longest line 109 ≤ 120 |
| Type/prop correctness of the applied edit        | `BaseLayout.astro` line 16 destructures `{ title = …, description = … }` from `Astro.props`, and both applied values are plain strings with no brace or quote characters — checked in source |
| Guard suite / `npm test` / `npm run lint`        | Not run: they are the dev card's validation, and the tree currently carries known parse errors from another card's refactor (`lint`) plus a `gated-path` postbuild finding. Nothing in this pass's one-file change affects either |
| Effect on what is published today                | none — `/about/` and `/404` do not exist as routes; the newsroom title/description change is document-head only, meaning-neutral, and reversible per §12 |

**Outstanding, not this card's to close:**

- No editorial review of this package, no continuity verdict, no human approval, no release reference.
- `/about/` cannot be deployed from this package: an editorial `approved` review is not a release, and
  `SITE_URL` remains unrecorded (§8).
- The 404 `noindex`/canonical recommendation (§9) and the newsroom heading observation (§11) need an owner
  decision; both are routed, neither is applied.

---

## 15. Conflicts with brand voice or continuity

| # | Conflict                                                                                     | Recommended resolution                                                                                                    | Owner                                |
| - | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 1 | House voice is figurative (`How this fiction is made`); search language is plain (`fictional Mars mission`) | §2 keeps the sentence frame and swaps only the half that carries no query language. No style change is asked of the writer. | editor (acknowledge), dev (implement) |
| 2 | The page's own words "fiction" and "fictional" sit beside a site whose other pages never use them | Intended: the disclosure vocabulary belongs to `/about/` and the footer note; `/` and `/news/` keep the mission voice (§1)   | editor                                |
| 3 | One heading (`How the record moves`) is figurative enough to hide its content for a scanner    | §5 proposes a colon half. Body wording is the writer's; nothing is applied here.                                             | writer (optional)                     |
| 4 | Project jargon on the page: "brief", "editorial pass", "continuity" are process words a reader may not share | §5 note + this row route one optional gloss to the writer: `continuity` → "the facts the record has already established". Technical terms should be explained before they are relied on. | writer (optional)                     |
| 5 | The published 2031 window frame (article 001) coexists with the homepage panel's `To be announced` rows | Pre-existing site coherence question, not created by About and not decided here. §10 keeps the About page frame-only and routes the question. | continuity `t_a0ee9abf` → human story owner if it escalates |
| 6 | Nav says `News`, the page eyebrow says `Newsroom`, this pass titles the document "newsroom" | Keep both in the document title until an editor aligns the vocabulary; the alternative plain title is recorded in §11. One name per thing is the goal, and it is an editorial call. | editor + dev                          |
| 7 | Continuous quality: two routes previously shared one title                                    | Fixed and recorded with its revert string (§11, §12). No continuity impact — nothing visible changed.                        | this pass (done)                      |

---

## 16. Handoff

- **Result:** one reader intent for `/about/` with its separation from `/` and `/news/`; a recommended
  `<title>` (56) and meta description (145) replacing the writer's proposed pair (44 / 127); the heading
  order kept with one optional wording recommendation left to the writer; two verified internal links with
  the writer's `/news/`-vs-`/#updates` item resolved in favour of `/news/`; both draft coherence items
  decided (frame-only wording; keep the `Mars AI Simulation` name); a plain "no structured data" answer with
  its preconditions, plus a 404 `noindex`/canonical recommendation; and the `/news/` duplicate-title defect
  fixed and recorded with revert strings.
- **Source / timeline step:** `site-foundation` (`docs/PLAN.md` Phase 1 item 2). Everything the metadata
  says is capped at the published step-001 release plus the method statements `docs/GENERAL.md` and
  `docs/INSTRUCTIONS.md` own. Nothing advances or reveals a timeline step.
- **Canon impact:** none. No new public fact, no canon file, no timeline file, no timeline value, no
  reworded published fact.
- **Files:** `.agents/work/seo/about-method.md` (this package, new); `website/src/pages/news/index.astro`
  (title + description props, §12). No other file touched; `/about/`'s strings live in the package and in the
  draft, and the dev card transcribes them.
- **Validation completed:** §14 — everything measurable from source: string lengths, route/anchor existence,
  the duplicate-title reproduction in the existing `dist/`, the withheld-term scan result, and the
  formatting/type checks that could run without a build. **Not run:** any page build, `npm test`,
  `npm run lint`, `npm run typecheck` (card constraint + known in-flight breakage).
- **Review required:** continuity `t_a0ee9abf` (it reads this package for item 7 of its check list), then
  editorial `t_e7e82218`, then the human release reference on `t_e89fb389` before `/about/` or `/404` is
  first deployed. Adopt-or-revert on the two applied newsroom strings belongs to the editor.
- **Next owner / action:** `mars-ai-simulator-dev`, card `t_e89fb389` — transcribe the draft's frozen copy,
  render `/about/` and `/404` from `BaseLayout`, set the document title and description from §2/§3 here, add
  the `About` nav entry, and implement the 404 `noindex` opt-out from §9. `t_a0ee9abf` (continuity) runs next
  and takes §10 item 1 and the published-fact mapping with it.
- **Release recommendation:** none. This package is not an approval and not a release.
