# Brief: about-method (site-foundation page: `/about/`, Optional `/404`)

## Status and authorisation

| Field                   | Value                                                                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card                    | `t_16ec6ba2` (`mars-ai-simulator-writer`), child of `t_774e7298` (site-foundation, done)                                                                                                                                                     |
| Route authorisation     | `site-foundation` — `docs/PLAN.md` Phase 1 item 2: "Build the Preparing landing page, logo treatment, site metadata, and About / Method disclosure page with a persistent footer link."                                                      |
| Factual bound           | The step-001 public release only: `website/news/001-project-announcement.mdx` (published) and `docs/timeline/001-project-announcement.md` ("Allowed public angle").                                                                          |
| Method bound            | `docs/GENERAL.md` ("Purpose", "Audience and public experience"), `docs/INSTRUCTIONS.md` (source-of-truth order, canon and information safety), `docs/SCENARIO.md` "Continuity and release controls", `docs/brand/BRAND.md` (voice/identity). |
| Human release reference | **None exists.** No public route may be deployed from this package without a current human release reference (see "Release gate" below).                                                                                                     |
| Human canon decision    | **None required and none taken.** This page introduces no new canon; it states method and re-states facts already public at step 001.                                                                                                        |

**Which timeline step authorises the page.** The page itself is not a timeline step: it exists
because `site-foundation` (Phase 1 item 2) requires it, and everything it says about the mission is
capped at what step 001 has already published. It advances no step and reveals no later one.

## Release goal

Give the site an approved About / Method page that does the two jobs `docs/GENERAL.md` already
assigns it: state the experiment's purpose plainly ("This purpose is stated plainly on the site's
About/Method page and linked in every public-page footer"), and disclose what Red Horizon is and how
it is made, without adding a single fact that step 001 has not already published.

A short `/404` page is in scope as an optional second item in the same package (`docs/PLAN.md`
Phase 1 item 3 territory; the parent card held the route for the same missing-copy reason). It is
approved or rejected independently; the `/about/` package does not depend on it.

## Deliverable decision — site strings, not MDX

**Decided:** the copy is site strings, transcribed verbatim by the technical follow-up into
`website/src/lib/about.ts` (and `website/src/lib/not-found.ts` for the 404) and rendered by
`website/src/pages/about.astro` (`404.astro`). It is **not** an MDX item.

Why:

- `docs/PLAN.md` Phase 2 defines MDX collections for `news`, `wiki`, `mission-updates`, and `media`.
  There is no `pages`/`static` collection; adding one to carry a single fixed page invents schema the
  plan does not describe.
- `website/news/` is the news collection (`website/src/content.config.ts` globs `./news/**/*.mdx`).
  An About item placed there would appear in the newsroom listing and its frontmatter contract
  (category, status, `linkLabel`, `order`, media key) does not describe a fixed page.
- The site already keeps non-article public copy as typed string modules whose doc comment says a
  change is "an editorial change, not a code change": `website/src/lib/site.ts`,
  `website/src/features/mission/facts.ts`, `website/src/features/progress/steps.ts`. About/Method is
  that kind of copy.

The exact strings are fixed in `.agents/work/drafts/about-method.md`. The dev card may not reword
them; it transcribes them.

## Page content (bounded)

Allowed, with the source for each material claim:

| Claim the page may make                                                                                                                                               | Source                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Red Horizon is a fictional, AI-assisted Mars exploration programme                                                                                                    | `website/news/001-project-announcement.mdx` ¶1; `docs/GENERAL.md`                                                                 |
| Mars AI Simulation is a real-world testbed for multi-agent creative/technical work                                                                                    | `docs/GENERAL.md` "Purpose"                                                                                                       |
| Agents draft, check sources, review metadata/continuity, then an editorial pass; a human alone approves canon and publication                                         | `docs/INSTRUCTIONS.md`; `docs/GENERAL.md` "Canon, drafts, and publication"                                                        |
| Pages are released in the mission's own order and never ahead of it                                                                                                   | `docs/PLAN.md` Phase 4 ("never spoil a later one"); `docs/timeline/README.md` (release order) — stated as policy, no step content |
| Corrections are explicit and dated, not silent rewrites                                                                                                               | `docs/INSTRUCTIONS.md` "Canon and information safety"                                                                             |
| Generated visuals are illustrations of the fiction, never mission imagery                                                                                             | `docs/SCENARIO.md` "Continuity and release controls"; `docs/area/AREA.md` plate provenance                                        |
| Ten national programme teams; one uncrewed lander and rover                                                                                                           | published 001 announcement                                                                                                        |
| Mineralogy mission: whether an ancient equatorial landscape once held water and the chemistry to support habitable conditions; does not search for life               | published 001 announcement                                                                                                        |
| Equal voting among partners; schedule and budget frames set; technical selections still ahead (what the rover carries, who builds what, how the mission reaches Mars) | published 001 announcement                                                                                                        |
| No affiliation with or endorsement by any real space organisation                                                                                                     | site disclosure string (`website/src/lib/site.ts`); `docs/INSTRUCTIONS.md`                                                        |

Forbidden on this page (withheld; referenced by location, values deliberately not copied here):

1. Payload, instrument, and sensor detail; hardware ownership or the partner responsibility split —
   withheld by `docs/SCENARIO.md` "Continuity and release controls" and listed in the
   `.agents/work/briefs/001-project-announcement.md` "Forbidden token set".
2. The surface vehicle's name, silhouette, and imagery; the landing/operational region's fictional
   name and coordinates; the launch provider and launch site; real institutional names (including
   the Slovak university role) — same two locations.
3. Exact launch, landing, and end-of-mission dates; the supported surface-lifetime duration — the
   duration is an open human question, recorded as item 5 in
   `.agents/work/reviews/001-project-announcement.md` §6 ("Open questions requiring the human story
   owner"), and is **not** public today.
4. Any timeline step 002 or later content, and any hint that a later step exists with a known
   outcome.
5. The number of images, videos, or model runs behind the experiment; model or provider names;
   internal review or approval machinery by name (no card ids, no internal file paths on the page).

Nothing in this package may present a plan, estimate, or open question as decided.

## Metadata and navigation (proposed; SEO owns the final wording)

- Route `/about/`; nav label `About`.
- `<title>` and meta description: proposed strings and measured lengths are in
  `.agents/work/drafts/about-method.md` §Metadata; the SEO pass may replace them (it owns title,
  description, heading order, internal links). Any replacement keeps the same facts.
- Internal links: only routes that exist (`/`, `/news/`, and the homepage section ids `#mission`,
  `#updates`, `#timeline`). No link to a `/news/<slug>/` detail route: `website/src/lib/releases.ts`
  ships `releasedNewsSlugs = []`, so no article detail page is generated (see
  `.agents/work/seo/002-payload-selection.md` §6 for the same finding).
- Navigation source: adding `About` to `website/src/lib/navigation.ts` puts it in both header and
  footer, which satisfies the "persistent footer link" requirement without a second link list. This
  **adds rendered text to every page's chrome**, so the dev card must record the `innerText` delta
  for the editorial gate `t_3302ef7e`, which is reviewing that surface. If four header items overflow
  at 320 px, the fallback is the footer-only link (the literal Phase 1 wording); the label does not
  change.

## Visual brief

**No new imagery.** The page needs no illustration: the layout already renders the hash-approved
identity mark (`docs/brand/logo-bg-black.png`) in the splash, header, and hero, and the site-wide
disclosure note is unchanged. Therefore no IMAGES card exists in this chain, and the visuals profile
(`mars-ai-simulator-visuals`) is not asked for anything. If the editorial gate or the human wants a
mark plate on the About page, that is a new card with an asset-manifest requirement, not a silent
addition here.

## Release gate (explicit)

An editorial `approved` review is an editorial gate only. Before `/about/` (and `/404`) is first
publicly deployed, a current human release reference must be recorded on the technical card — the
same rule the parent card applied to the article detail routes
(`.agents/skills/create-article-workflow/SKILL.md` "Approval boundary"). In addition, `SITE_URL`
(approved origin) is still unrecorded, so no canonical URL is emitted today; that is an existing
open item and not something this package resolves.

## Chain and acceptance

`DRAFT (this card) → SEO → CONTINUITY → EDITORIAL → BUILD ROUTES` (dev). No IMAGES stage.

- Brief: this file. Prose: `.agents/work/drafts/about-method.md`.
- Every material claim traces to the table above or to the published 001 announcement; the scan for
  withheld material reports zero matches; the disclosure string is unchanged.
- The `/404` copy is `no-mission-facts` copy and is approved or dropped on its own.
- Acceptance for the technical follow-up: `/about/` renders the approved strings byte-identically,
  the About entry resolves in header and footer, the guard suite stays green, and no release is
  implied.
