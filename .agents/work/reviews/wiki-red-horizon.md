# Editorial review: wiki-red-horizon

Card: `t_167fac93` (Editorial final gate: wiki-red-horizon). Stage: editorial final gate
(`editorial-review` + `copy-editing` + `brand-voice`).
Package: `website/wiki/red-horizon.mdx` — 4,097 B, sha256
`c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995`, `publication: draft`.
Route on release: `/wiki/project/red-horizon/`.
Profile: `mars-ai-simulator-editor`. Pass run 2026-09-17 20:18–20:36 CEST.
Continuity verdict for the same bytes: `.agents/work/continuity/wiki-red-horizon.md`
(**continuity clear**; this record and that one are the two halves of the same merged pass).

**Final status: `approved`.** The release decision is stated in §3 and is this role's own sentence.

## 1. Review table

| Check                                               | Status   | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Citations / canon traceability                      | **PASS** | 18-claim trace in `.agents/work/continuity/wiki-red-horizon.md` §4, each row naming a `docs/SCENARIO.md` / `docs/GENERAL.md` line and the release that made it public. Independently re-read the canon (SCENARIO §Mission identity, §Coalition and governance, §Launch and mission dates :173-208, §Continuity and release controls :272-283) and articles 001–004 at the byte level.                                                                                                                                        |
| Programme-frame restriction (`SCENARIO.md:275-279`) | **PASS** | The page states step-001 material (coalition frame, lifecycle frame, purpose, disclosure) and _links_ to 002/003/004 instead of paraphrasing. No payload detail, no launcher, no date, no RH-01 imagery, no Asteria material beyond name + centre coordinates.                                                                                                                                                                                                                                                               |
| Chronology / order                                  | **PASS** | No event is reported (reference entry), no mission date stated, no step beyond 004 touched. Linked articles' record dates rise in order: 2026-10-12 → 2027-03-19 → 2029-07-13 → 2030-03-11 (milestone rows `SCENARIO.md:182, 183, 187, 188`).                                                                                                                                                                                                                                                                                |
| Coherence (page as a whole)                         | **PASS** | Identity entry reads as one subject in a stable present: what it is → disclosure → coalition → mission type → lifecycle frame → related records. No contradiction with `/about/`, the four articles, or the site chrome.                                                                                                                                                                                                                                                                                                     |
| Voice / grammar / brand voice                       | **PASS** | No news lead, no inverted pyramid, no dateline, no byline, no "recently/latest/now/this week/this year" (0 hits), no "will" (0 hits), no announcement/selection framing. Subject-heading-led: 6 × H2, 0 × H3, body opens at H2. Concrete and unsentimental; unexplained acronyms: none. `€`, `°` and `Mars year` are used correctly.                                                                                                                                                                                         |
| Links                                               | **PASS** | Seven internal links, all resolving in the flipped build: `/about/` 200; `/news/001-project-announcement/` (×3), `/news/002-payload-selection/`, `/news/003-vehicle-design/`, `/news/004-launch-provider/` all 200. Anchor text read as a set: no two distinct labels point at the same target with conflicting wording. No external links; no `related:` list.                                                                                                                                                              |
| Image placement / captions / alt text               | **PASS** | One `<figure class="wiki-media">` carrying the approved mark with the brand alt **byte-equal** to `docs/brand/BRAND.md:19-21` (175 chars, 0 non-ASCII) after HTML-unescaping; `figcaption` count 0 (correct: `captionCount: 0`, `requiresLabel: false`); `mediaCaption` absent. The header's mark (elsewhere on the page) is `alt=""` decorative chrome, pre-existing.                                                                                                                                                       |
| Asset provenance by content hash                    | **PASS** | `sha256sum docs/brand/logo-bg-black.png` → `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749` = `BRAND.md:8-10`. `src/lib/assets.ts` imports that file and nothing else for `identityMark`; the rejected RGBA derivative `logo.png` (`d23d7c99…`) is not referenced anywhere in `website/src`, `website/news` or `website/wiki`.                                                                                                                                                                             |
| Media-key contract (schema rule, executed)          | **PASS** | Ran the project's own rule out of `src/lib/media.ts` against the parsed frontmatter (esbuild + the project's `js-yaml`): `newsMediaIssues(page) === []`; requirement tuple `{plateCount:1, altCount:1, captionCount:0, requiresLabel:false}`. Negative control: `media: programme-identity-probe-not-a-key` fails the build from the **wiki** collection with the project's own message.                                                                                                                                     |
| Metadata / schema                                   | **PASS** | Frontmatter parses; required wiki fields present (`title`, `section: project`, `publication`, `order: 1`, `summary`); `related` omitted (valid); `canonicalDocs` present; no unknown keys; **no `simulatedDate`** (§4). Built head: `<title>Red Horizon \| Red Horizon</title>` 25 chars ≤ 60; description 154 chars ≤ 155; no canonical (SITE_URL unset); no JSON-LD; no OG/Twitter cards; no sitemap membership.                                                                                                           |
| Published surface                                   | **PASS** | Measured in a throwaway copy outside the repository with only the flip planted: `npm run build` exit 0, postbuild `check-dist` exit 0, `media-scope` reports every emitted asset referenced; routes gained `/wiki/project/index.html` and `/wiki/project/red-horizon/index.html` (leaf 11,178 B, sha256 `09e0ea194c547a8e1ded31938e0845aabd5f0d7bb5a942fc14b3cc5b9b11ee1c`); full `dist/` inventory scanned file by file: 0 withheld tokens, 0 dates. Fail-closed default re-measured on the **live origin**: the leaf 404s. |
| Containment / confidentiality                       | **PASS** | 31 withheld families → 0 hits in the file and 0 in the built output; `scanSourceForGatedReferences()` → 0 offences; `checkDist()` → 0 offences; red-first controls fail closed (planted `18° 42` → build exit 1 with the leaf pruned from `dist/`; planted `docs/timeline/` reference → 1 `gated-path` offence). `docs/scenario` occurs 0 times in `dist/`. No `/docs/timeline/` reference.                                                                                                                                  |
| Accessibility of the figure                         | **PASS** | The figure carries the approved descriptive alt (the header/splash placements are `alt=""` decorative chrome); the page's headings form one H1 with six H2s and no skipped level; the disclosure block renders with its own `aria-label`.                                                                                                                                                                                                                                                                                    |
| Rights / licensing                                  | **PASS** | Fictional project asset, not third-party imagery; human-approved by hash on 2026-09-15 (`BRAND.md:4-10`). Placement decided in §5 with the standing `BRAND.md` clause quoted; no new variant, no new artwork, no social use.                                                                                                                                                                                                                                                                                                 |
| Wiki voice rule (reference entry, not news)         | **PASS** | Verified against `.agents/skills/article-drafting/SKILL.md` §Reference entry (wiki) and `.agents/work/briefs/wiki-content-plan.md` §3: subject-heading-led, stable present, no news structure, no dateline, no attribution, no promise of future events, summary is a reference gloss not a deck.                                                                                                                                                                                                                            |
| Record date (`simulatedDate`)                       | **N/A**  | The wiki schema declares no such field; the correct state is _no value_, verified absent in the frontmatter and on the built surface. Reasoning and measurement in §4.                                                                                                                                                                                                                                                                                                                                                       |
| Release decision recorded                           | **PASS** | §3, this role's own sentence; recorded on card `t_167fac93` and handed to the build card `t_23484bb2`.                                                                                                                                                                                                                                                                                                                                                                                                                       |

### 1.1 Copy findings raised and resolved in this pass

- **Summary length — the SEO record's FAIL is a mis-measurement.** `.agents/work/seo/wiki-red-horizon.md`
  records the summary at 160 chars (over its 155 budget) and recommends a trim. The live value is
  **154** chars (`... one uncrewed lander and rover, a 2031 launch window, a two-Mars-year design
  life.`), measured three ways: code-point count of the parsed frontmatter (154), UTF-8 byte count
  (154), and the rendered `<meta name="description">` on the flipped page (154). No trim is applied
  and none is needed; the row **passes**. The same record also measures the full title as 22 chars
  (it is 25) and the page title as 10 (it is 11). Routed to the SEO owner as a record erratum (§6 R1)
  — the artifact is not edited here.
- **Title resolution (planner note 3). Decision: the page keeps `title: "Red Horizon"`; no frontmatter
  edit is made or required.** The built document title is therefore `Red Horizon | Red Horizon`
  (25 chars, inside every budget), because `BaseLayout` appends ` | ${site.name}` to every page. The
  planner's page-set table named the title `Red Horizon (programme)`. I judge the plain name correct
  for this page: it is the wiki's identity entry for the programme, so its H1, its breadcrumb, its
  index label and its document title _should_ read as the subject's own name; `(programme)` is a
  table-level disambiguator, and as an `<h1>` and an index label it reads as an editing artifact. The
  duplicate suffix is a site-wide chrome convention, not a page defect, and the identity entry's
  collision with the site name is inherent (the same is true, on this site, of the wordmark). This is
  the explicit resolution the planner asked for, not a silent non-change: the alternative
  (`title: "Red Horizon (programme)"`, built title `Red Horizon (programme) | Red Horizon`) is
  recorded here and can be applied later — but it changes the H1 and the index label, so it needs a
  writer card, its own new hash and its own pass through this gate. It is not part of this release.
- **"how the flight stack is planned to reach Mars"** (related-records gloss for 004): judged against
  the rule's "no promise of future events". It describes the released architecture, matches 004's own
  framing ("a decision about a design, not a promise about a date") and names no launcher, date or
  provider. Accepted; a tighter form ("the delivery architecture for Red Horizon One") is noted as an
  optional copy nicety, not a condition.
- **"The government is equal by design…"** — no such sentence; the page reads "Governance is equal by
  design", which matches article 001 and `SCENARIO.md:44-47`. No change.

## 2. What was measured, and where

Everything below was run from scratch scripts **outside the repository** (`/tmp/wiki-rh-gate/`) so the
tree gained no scanner, no copy of a withheld name, and no build artifact. Commands and outputs are
summarised; the logs are `scan.mjs`, `media-probe.mjs`, `scan-dist.mjs`, `probe-built.mjs`,
`controls2.mjs` and the two build logs in that directory.

| Measurement                 | Method                                                                                                                        | Result                                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page bytes / hash / key set | `sha256sum`, `wc -c`, `js-yaml` parse of the real frontmatter                                                                 | 4,097 B, `c93a509a…`, 8 keys, no `simulatedDate`                                                                                                                    |
| Withheld-term scan          | 31 families, frontmatter + body, case-insensitive                                                                             | 0 hits                                                                                                                                                              |
| Canon-vs-page trace         | manual read of `SCENARIO.md`, `GENERAL.md`, `/about/`, articles 001–004                                                       | 18 claims, all sourced (continuity record §4)                                                                                                                       |
| Media-key contract          | esbuild-bundled `src/lib/media.ts` + project `js-yaml` on the real frontmatter                                                | `newsMediaIssues → []`; negative control fails the build                                                                                                            |
| Alt-text fidelity           | byte comparison with the string extracted from `BRAND.md:19-21`                                                               | equal, 175 chars, 0 non-ASCII                                                                                                                                       |
| Guard scanners              | imported `checkDist()`, `scanSourceForGatedReferences()`, `listRoutes()` from `scripts/guards.mjs`                            | 0 offences source, 0 offences `dist`, routes listed (no wiki leaf)                                                                                                  |
| Guard teeth (red-first)     | planted gated marker → rebuild; planted `docs/timeline/` reference → source scan                                              | build exit 1 + leaf pruned; 1 `gated-path` offence (pristine tree: 0)                                                                                               |
| Fail-closed state, local    | `listRoutes()` on `website/dist` (built 19:59)                                                                                | no `/wiki/project/`, no `/wiki/project/red-horizon/`                                                                                                                |
| Fail-closed state, live     | in-page `fetch(origin + path, {cache:'no-store'})` + `crypto.subtle` on the workers.dev origin                                | leaf 404, `/wiki/project/` 404, `/wiki/` 200 (4,599 B)                                                                                                              |
| Flip surface (scratch copy) | site copied to `/tmp/wiki-rh-gate/copy/website`, `docs/` symlinked as sibling, packages linked, flip planted in the copy only | two builds: draft → 10 routes (no wiki leaf); flipped → 12 routes incl. the leaf and the `/wiki/project/` index; `check-dist` exit 0 both; `media-scope` clean both |
| Built leaf                  | extraction from `dist/wiki/project/red-horizon/index.html`                                                                    | 11,178 B, `09e0ea19…`; title 25 chars, description 154, no canonical/JSON-LD/robots; 6 H2; 1 figure, 0 figcaption; alt equal to the approved string                 |
| Emitted derivative          | hashed the file the flipped build emitted                                                                                     | `_astro/logo-bg-black.DZLOhNzm_Z1HSVnk.webp`, 10,264 B, sha256 `b18870e97b7e6911090b57ff83b81c20e201dfd91b6a73bb9e7ebcdebe03b980`                                   |
| Post-flip file hash         | planted flip applied to a byte-identical copy of the gated file                                                               | 4,097 B → **4,101 B**, sha256 `c81a9e6bc853aae66b07fe48a9d81b45adfd33c85ea7d906a870da0b137e352c`                                                                    |
| No repository build / edit  | `git status` before and after; both builds ran in the copy                                                                    | the shared tree's `website/` is untouched by this card; `HEAD == origin/main == 5a59f34`                                                                            |

## 3. The release decision (this role's own sentence)

> **Release decision — mars-ai-simulator-editor, recorded on card `t_167fac93`, 2026-09-17 20:36 CEST.**
> The wiki page `website/wiki/red-horizon.mdx` at sha256
> `c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995` (4,097 B, `publication: draft`) is
> **confirmed against released canon** — the step-001 programme frame and the fiction disclosure,
> with steps 002–004 linked and not restated — and is **released for publication** as
> `/wiki/project/red-horizon/`. The build card applies exactly one change to that file,
> `publication: draft` → `publication: published`, and to nothing else; the required post-flip bytes
> are 4,101 B with sha256
> `c81a9e6bc853aae66b07fe48a9d81b45adfd33c85ea7d906a870da0b137e352c`, and reverse-applying that one
> substitution to the published file must recover `c93a509a…` exactly.
> **Public scope:** the leaf route `/wiki/project/red-horizon/`; the new `/wiki/project/` section
> index; the page's entry and the `Project` group on `/wiki/`; the frontmatter strings as rendered
> (`<title>Red Horizon | Red Horizon</title>`, the 154-character summary as the meta description, the
> body, the six H2 headings, the seven internal links); and the single lead figure with the
> brand-approved alt text and its emitted derivative
> `_astro/logo-bg-black.DZLOhNzm_Z1HSVnk.webp` (10,264 B, sha256 `b18870e9…`, measured in the scratch
> build — re-measure at the flip, since a concurrent site change can move Astro's asset name).
> **Conditions:** (a) the flip is the only change to the file, and it is proven by reverse
> reconstruction; (b) no `simulatedDate` is added — the wiki schema declares no such field and a value
> would fail the build; (c) `npm run build` and its postbuild guard (`check-dist`) pass on the tree
> that is actually flipped, together with `media-scope` and the media-contract probe;
> (d) the dev card stages only the paths it touched, per the standing commit/push instruction.
> **Nothing else is released:** the two sibling wiki pages stay `draft` (each has its own gate), no
> `docs/` file, no `website/` schema or component, no media key, and no scenario canon changes here.

## 4. `simulatedDate` — no value, and the reason

Every published **news** article carries exactly one simulated record date: the frontmatter field
`simulatedDate` (`website/src/content.config.ts:24-45`), drawn from the milestone table in
`docs/SCENARIO.md` §"Launch and mission dates" (`:173-208`), normalised and labelled by
`website/src/lib/simulated-date.ts` ("Simulated record date"), and assigned and verified by this role.
**This package is not a news article and carries no such value.** The wiki schema
(`website/src/content.config.ts:78-117`) declares `title`, `section`, `publication`, `order`,
`summary`, `related`, `canonicalDocs`, `media`, `mediaAlt`, `mediaLabel`, `mediaCaption` — no
`simulatedDate` — and `.agents/work/briefs/wiki-content-plan.md` §3 states the rule: "No record date.
The wiki schema has no `simulatedDate` field, and no page may present one. A wiki page is not 'written
on' a fictional day."

The milestone table therefore supplies no value to draw from, and no calendar date is invented here
(inventing one is new scenario canon and belongs to the human story owner). The absence is verified on
the surface, not assumed: the parsed frontmatter has 8 keys and no `simulatedDate`; the flipped leaf
carries 0 date-like strings and no record-date label; `/wiki/` and `/wiki/project/` carry 0 dates. The
news articles that this page links to keep their own record dates (001 `2026-10-12`, 002 `2027-03-19`,
003 `2029-07-13`, 004 `2030-03-11`) and remain in order; this page neither carries nor disturbs them.

## 5. The identity mark's placement

The lead figure places `docs/brand/logo-bg-black.png` through the registered `programme-identity`
media key — the same asset, already human-approved by hash on 2026-09-15 (`docs/brand/BRAND.md:4-10`)
and already served publicly on **every** route as site chrome: measured in the local build and on the
live origin, `_astro/logo-bg-black.DZLOhNzm_Z1aNMaQ.webp` (494 B) is referenced by every built page
from `SiteHeader.astro:13`, and `_astro/logo-bg-black.DZLOhNzm_Z24gFmJ.webp` (2,768 B) by
`SplashScreen.astro:10`. The wiki figure adds a **third width of the same approved source** and
changes no variant, no artwork, and no asset rights; it is also the only placement on the page that
carries the approved descriptive alt.

`docs/brand/BRAND.md` §Publication boundary ("A separate human release decision is still required
before any new public-site or social use beyond the current Preparing site") is the standing clause
the visuals manifest and the planners left to this role. I record the placement as this role's
decision on these grounds: the asset and its variant are hash-approved by the human story owner; the
same tag is already public on the live origin as the site's own identity, so the exposure this figure
adds is presentational, not new material; the `programme-identity` key is the registered reuse vehicle
for the mark, and the human's 2026-09-17 relay (card `t_183d9f11`, verbatim) has the header, the
splash screen and that key **staying** on this black-field source; and the human delegated the media
sign-off on a news card to this role on 2026-09-17 (card `t_5a62fb28`, gate 1). The **transparent**
variant stays homepage-hero only, as the human decided; it is not placed here and its `<img>` does not
appear on any wiki route. A _new_ variant, a new artwork, a social use, or a use of the mark as a
third-party endorsement would still need the human story owner — this decision reaches none of those.
The clause's stale half (the retired `website/public/assets/` mechanism) is routed, §6 R2.

## 6. Routed, not fixed (none of these blocks the release)

| #  | Item                                                                                                                                                                                                                                                                                                                                                                                                                   | Owner                                             |
| -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| R1 | **SEO record erratum.** `.agents/work/seo/wiki-red-horizon.md` (`cc7df9be…`) reports the summary as 160 chars (FAIL) and the full title as 22 chars; the measured values are 154 and 25. The record's `mediaAlt`, heading, link and canonical rows were re-verified and hold.                                                                                                                                          | `mars-ai-simulator-seo` (card `t_f9fee6c1`, done) |
| R2 | **`docs/brand/BRAND.md` §Publication boundary** describes a retired mechanism ("through the generated `website/public/assets/` directory") and a baseline ("the current Preparing site") that predates the live site.                                                                                                                                                                                                  | planner / `project-documentation`                 |
| R3 | **`/about/`'s method copy lags the 2026-09-17 authority change**: it says a person decides publication and that agents do not approve canon, while `AGENTS.md` now places releasability and canon confirmation with this role. This page's sentence about `/about/` stays true.                                                                                                                                        | planner / about-method copy owner                 |
| R4 | **Research-stage order.** The source pack's owning card `t_76a5f79d` is still `todo`; the pack was written by the planner container and the writers ran ahead of it. This gate did the trace itself, so nothing is blocked.                                                                                                                                                                                            | planner (`t_f2713ffa` graph)                      |
| R5 | **Hotspot `website/wiki/`** — three writers authored three pages in one checkout and three dev cards will flip them; and `website/src/lib/assets.ts` (`e150400e…`), `website/src/features/news/media.ts` (`f6d3c684…`) and `website/src/lib/media.ts` (`9ecc54c7…`) are being edited concurrently by the Ariane 64 cards. The build card must stage only its own path and re-run the media probe on the tree it flips. | build card `t_23484bb2`; planner                  |
| R6 | The `title` alternative (`Red Horizon (programme)`) recorded in §1.1, if the planner or SEO prefers it — it needs its own writer card, hash and gate pass.                                                                                                                                                                                                                                                             | planner / SEO                                     |

## 7. Handoff to the build card

`mars-ai-simulator-dev` on `t_23484bb2` (currently `todo`, parented on this card): apply the flip, then
prove it. Read this record's §3, do not re-derive the decision, and report: the post-flip hash
(`c81a9e6b…`), the reverse reconstruction that recovers `c93a509a…`, `npm run build` + postbuild guard
output, the media-contract probe result, the served route's byte count and hash, and the live
measurement of `/wiki/project/red-horizon/`. No other `website/` path belongs to this card.

## 8. Revision history

First editorial pass for this package. No earlier review record exists for `wiki-red-horizon` and no
downstream record cites a different hash for these bytes. Inputs that moved during the run are
recorded with timestamps in `.agents/work/continuity/wiki-red-horizon.md` §10 (source pack
8,358 → 8,626 B, brief 19,903 → 20,812 B); the gated page itself did not move
(`c93a509a…`, mtime 20:08:27).
