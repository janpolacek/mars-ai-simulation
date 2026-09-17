# Continuity: wiki-index-metadata — chronology, canon, plausibility and spoiler verdict

Slug: `wiki-index-metadata`. Card `t_5ed4eee2` (`mars-ai-simulator-editor`), stage `site-foundation`.
Companion record: `.agents/work/reviews/wiki-index-metadata.md` (editorial gate, `approved`).

**Verdict: `continuity clear`.**

## 1. Evidence boundary and what was compared

| Item                        | Value                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package under check         | `.agents/work/seo/wiki-strings.json` sha256 `d44eca09af76b08435830725dc7533cdbdfddbdafdad05583fd58771c6de717e` (4 rows, 8 strings) + `.agents/work/seo/wiki-collection.md` sha256 `71f7c3ac…`                                                                                                                                                               |
| Released material compared  | `website/news/001-project-announcement.mdx` (`publication: published`, sha256 `73c2d047…`), `website/news/002-payload-selection.mdx` (`publication: published`), `docs/GENERAL.md` (purpose, vocabulary, disclosure), `docs/SCENARIO.md` §"Continuity and release controls" (`:272-282`), and the site's own public strings (`src/lib/site.ts`, nav labels) |
| Implementation read at      | `origin/main` `72743e5` (`index.astro`, `[section]/index.astro`, `[slug].astro`, `wiki-query.ts`, `content.config.ts`) — see the review record's evidence-boundary row for why the shared checkout could not be used                                                                                                                                        |
| Private timeline            | **Not read, not copied.** Nothing in this package needed it: the strings make no factual claim, so there was no chronology to compare against a step file. Same practice the SEO pass recorded                                                                                                                                                              |
| Gate inputs at verdict time | The seven hashes above re-taken immediately before writing this record; unchanged from the reading cited in the review record                                                                                                                                                                                                                               |

## 2. Chronology

No string in the package contains a date, a year, a duration, an ordering word (`first`, `next`,
`latest`), a step number, or any tense that places the programme at a point in time. Measured: 0 digits,
0 years, 0 month names, 0 percent, 0 currency across all 8 strings. Nothing here can contradict a
released event's order, because nothing here is an event.

The material fact the page labels describe — that the wiki tree exists as structure and holds no
published page — is **not** stated in any string, and the change cannot make it visible: the section
routes are generated only from published pages, and `/wiki/`'s listing is empty in the live, measured
build.

## 3. Canon consistency

- **Claim count: zero.** Every string is either a proper name already public (`Red Horizon`), an
  ordinary English noun (`wiki`, `reference pages`, `landing zones`, `vehicles`, `project`,
  `Mars exploration project`), or the fiction disclosure. There is no place name, coordinate, vehicle
  designation or class name, instrument, provider, partner, budget figure, mass, calendar anchor or
  surface figure to confirm — so there is no claim that could be confirmed or refuted against released
  canon.
- **Vocabulary agrees with the released material.** `Red Horizon` and `Mars exploration project` are
  how the site and `docs/GENERAL.md` already describe the fiction; `wiki` is the live nav label;
  `landing zone` and `vehicle` are the commissioned tree's own node words, and `project` is the
  commissioned term. The root description reuses the construction already shipped as the site default
  description, so the change introduces no second way of describing the programme.
- **The area label is naming, not a fact.** `Landing Zones` is a taxonomy label for the `area` section;
  it does not name the region, assert that a landing site is chosen, or characterise the surface. The
  region's own name, its release state and the SCENARIO release controls are unchanged and untouched by
  this package. The label's _adoption_ is withheld to the human for project reasons recorded in the
  review record, not because of a continuity conflict.
- **No canon file was edited.** `docs/SCENARIO.md`, `docs/timeline/` and the dossiers are untouched;
  this record cites them and does not restate their content.
- **Uncertainty is not written as certainty.** The root description states the collection's purpose and
  makes no completeness claim; the section descriptions' `Published reference pages about …` is true by
  construction of the route that carries it (a section index exists only when it lists at least one
  published page).

## 4. Plausibility

Not applicable in the technical sense — no string describes a vehicle, a manoeuvre, an instrument, a
timeline or an outcome. The one plausibility-adjacent question, "does a wiki index claim reference
material the project has not published?", is answered in §3: the root states purpose only, and the
section frames cannot render without published content behind them.

## 5. Spoiler safety (the load-bearing check)

| Surface the change could reach                      | Result                                                                                                                                                                                                            |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| String text (4 titles, 4 descriptions)              | 0 hits on the four gated markers (list read at run time from `website/scripts/guards.mjs`; named by count only)                                                                                                   |
| Document metadata (`<title>`, `<meta description>`) | No withheld class, no coordinate, no date, no provider, no vehicle designation; the live served `/wiki/` document scanned: 0 hits                                                                                 |
| Asset names, alt text, captions, OG fields          | None proposed, none changed — the package adds no asset, no `media` key, no OG field and no alt string                                                                                                            |
| Links and summaries                                 | No link, slug or summary is added or changed; leaf `summary` handling is explicitly non-truncating (review record C4)                                                                                             |
| Route and listing surfaces                          | The change alters metadata props only; the route set is still generated from `publication === 'published'` + non-empty section groups, so no draft, future or unreleased page can appear by virtue of this change |
| Fail-closed state now (measured)                    | Built wiki route set = `{/wiki/index.html}`; live `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` all 404; 0 canonical, 0 `ld+json`                                                                             |
| Build guard                                         | `checkDist()` 0 offences, `scanSourceForGatedReferences()` 0 offences (read-only calls; the pruning postbuild script was not run)                                                                                 |

No future event, place, date, vehicle, provider or technical detail is revealed through text,
metadata, asset name, alt text, link, caption or summary. The package adds no vocabulary that would
need a release step to become public.

## 6. Interaction with the human gates (recorded, not resolved)

The first _content_ on this tree is canon and stays fail-closed: the human gates `t_9b2a308d`
(area/vehicle node publication state), `t_c77be834` (canon and release sentence) and the ledger
`t_6f4f785e` are open, and this package neither answers nor advances them. No wiki page exists to
publish; the index metadata change cannot make one exist.

**Concurrent movement, checked at verdict time.** The running planner card `t_bb11a025` created
`.agents/work/releases/wiki-001-vehicle.md` at 13:34:50 CEST — a **planned** release record for a future
vehicle wiki page, whose own status line reads "Planned — not approved. Human gates `t_9b2a308d` and
`t_c77be834` remain blocked." It flips no `publication:` field, publishes no prose, and records no
approval sentence; it plans a route that is still 404 today (measured, §5). Nothing in it changes this
verdict, and nothing here pre-empts it.

## 7. Final label

`continuity clear` — for the package as measured at the hashes in §1. No canon conflict, no chronology
conflict, no plausibility issue, no spoiler path. A later pass that changes any of the eight strings, or
that applies them beside a settled label other than the one measured here, must re-run this check on the
new bytes.
