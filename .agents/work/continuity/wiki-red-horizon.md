# Continuity verdict: wiki-red-horizon

Card: `t_167fac93` (Editorial final gate: wiki-red-horizon). Stage: editorial final gate.
Mission-timeline step: `wiki-content-pipeline` (no numbered release step; the page derives from
released steps 001–004 and adds no canon).
Profile: `mars-ai-simulator-editor`. Written 2026-09-17, 20:26–20:34 CEST.
Verdict: **continuity clear** — chronology, canon consistency, plausibility and spoiler safety all
pass on the bytes below; no claim traces to unreleased material.

The package's own release decision is in `.agents/work/reviews/wiki-red-horizon.md`; this record is
the continuity half of the same pass.

## 1. The package under this verdict

| Item                            | Value at verdict time (2026-09-17 ~20:24 CEST)                                                                                                                                                                                    |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page (flat path)                | `website/wiki/red-horizon.mdx` — 4,097 B, sha256 `c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995`                                                                                                               |
| Declared state                  | `publication: draft`, `section: project`, `order: 1`                                                                                                                                                                              |
| Source pack                     | `.agents/work/sources/wiki-red-horizon.md` — 8,626 B, sha256 `13034d1db2a1e6f2f54d262723c2ffdf02a5e3eca6b87be4c9470e5001942165`                                                                                                   |
| SEO record                      | `.agents/work/seo/wiki-red-horizon.md` — 16,485 B, sha256 `cc7df9befa0f3c7ab80f69fe4b724a9e6ab01509f372e74e60d1ee4f47ba5987`                                                                                                      |
| Asset manifest                  | `.agents/work/assets/wiki-red-horizon/assets.md` — 26,108 B, sha256 `2518b937a666fda2bdd54a9ed3e8414478d326e164f6e1f00ff87a4f4420c290`                                                                                            |
| Content plan (bounds)           | `.agents/work/briefs/wiki-content-plan.md` — 20,812 B, sha256 `88960d839a0b661a23323402671107c6c7ae3cdccb0ff635e12b6a416dceef48`                                                                                                  |
| Placed media source             | `docs/brand/logo-bg-black.png` — 848,040 B, sha256 `f9543989560da54fc56a8973002833b2b8dbe3d1c085fc1293af3faca457b749` (= `docs/brand/BRAND.md:8-10`)                                                                              |
| Released canon cited            | `docs/SCENARIO.md` `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54`; `docs/GENERAL.md`; articles 001–004                                                                                                        |
| Site code the contract rests on | `src/lib/media.ts` `9ecc54c7…`; `src/features/news/media.ts` `f6d3c684…`; `src/lib/assets.ts` `e150400e…`; `src/content.config.ts` `f6017306…`; `pages/wiki/[section]/[slug].astro` `a7a3846c…`; `scripts/guards.mjs` `3c95f223…` |

**Path substitution, recorded not reported as broken.** The card body, the draft card body and the
writer handoff all name `website/wiki/project/red-horizon.mdx`. That nested path cannot route (the
wiki glob loader has no `generateId`, so `entry.id` keeps the section directory and the leaf
generator would build `/wiki/project/project/red-horizon/`). The planner card `t_f2713ffa` moved the
file to the flat path on 2026-09-17 20:13 with the hash unchanged, and
`.agents/work/briefs/wiki-content-plan.md` §1 records the convention. This verdict applies to the
flat file, which is the file the dev card will publish.

**The source pack exists and is the basis of this pass** (operator note 1). It is the planner's
restatement of `docs/SCENARIO.md` / `docs/GENERAL.md` for this page; its owning research card
`t_76a5f79d` is still `todo` (see §10, observation M1/O5). Every claim below was additionally traced
to the canon line itself, so the verdict does not rest on an unverified restatement.

## 2. Required containment, copied verbatim from the card body

> - No Ariane 64. No launch or landing date. No RH-01 imagery. No payload details paraphrased. No `/docs/timeline/` reference.
> - No real institution, provider, operator, agency or facility named; only the SCENARIO research-grounding sources are cited (and as research context, never as endorsement or partnership).
> - No "Announced", "selected", "has been chosen" framing — the page describes the programme in a stable present.
> - The 2031 launch window and the €2.10 bn lifecycle frame are reusable as released framing (article 001 released them); they are not paraphrased into the wiki prose verbatim — link to `/news/001-project-announcement/`.

## 3. Chronology and order

- The page's subject is the programme's identity entry; its material is the step-001 frame (programme
  announcement: coalition, purpose, schedule and budget frames, fiction disclosure) plus links to the
  later released records. Nothing in it belongs to a step that has not been released.
- The four linked articles are all `publication: published` and routed on the live origin:
  `/news/001-project-announcement/` 200, `/news/002-payload-selection/` 200,
  `/news/003-vehicle-design/` 200, `/news/004-launch-provider/` 200 (measured in the scratch build and
  on the live origin).
- The page states the 2031 launch **window** and the €2.10 bn lifecycle frame — both released with
  article 001 (simulated record date 2026-10-12, milestone "Red Horizon Council charter takes effect",
  `docs/SCENARIO.md:182`) — and no mission date. It carries **no** record date of its own (§8).
- Ordering inside the public record holds: the page is the identity entry, not a report of an event,
  so it makes no ordering claim between steps; the step 001 → 002 → 003 → 004 ordering is carried by
  the four linked articles, whose own record dates rise in order.

## 4. Canon, claim by claim

Each row is a claim the page makes, the canon it rests on, and the release that makes it public.

| Page claim (line)                                                                                                                                                                  | Canon source                                                        | Released by                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Fictional, AI-assisted Mars programme; partners, mission and findings invented; the Mars is real (14)                                                                              | `GENERAL.md:14, 38-53`; `SCENARIO.md:5-6`; published `/about/` copy | article 001 (`:23-27`, `:46-51`); `/about/` (live 200)                   |
| Red Horizon One is the first mission: one uncrewed lander and rover, one coalition, no crew (16)                                                                                   | `SCENARIO.md:14-19`                                                 | article 001 (`:21-27`, `:56-62`)                                         |
| Not a life-detection mission; no claim of evidence of life (16, 36)                                                                                                                | `SCENARIO.md:28-30, 88-95`                                          | article 001 (`:42-44`); `/about/` "The mission does not search for life" |
| Fiction produced by a real project; Mars AI Simulation is a testbed for multi-agent work (20)                                                                                      | `GENERAL.md:11-12, 17-20`; `/about/` §What this is                  | `/about/` (live 200); `docs/GENERAL.md` (project documentation)          |
| The `/about/` page describes how a page is researched, checked and released (20)                                                                                                   | `/about/` §How a page is made                                       | `/about/` (live 200)                                                     |
| Mars grounded in published planetary science; real places/technologies/research appear for that reason alone (22)                                                                  | `GENERAL.md:14, 38-53`; `SCENARIO.md:281-283`                       | article 001 (`:46-51`)                                                   |
| No real space agency, laboratory, university or company is a partner; none has endorsed it (22)                                                                                    | `SCENARIO.md:40-42, 50-52`; `/about/` §What this is not             | article 001; `/about/`                                                   |
| Ten named national programme teams, each fictional (26)                                                                                                                            | `SCENARIO.md:36-38`                                                 | article 001 (`:23-27`)                                                   |
| Equal governance, one vote each whatever it contributes (28)                                                                                                                       | `SCENARIO.md:44-47`                                                 | article 001 (`:64`)                                                      |
| Committed to reporting technical risk and anomalies candidly, not only successes (28)                                                                                              | `SCENARIO.md:44-47` (candour commitment); article 001 `:64`         | article 001 (`:64`)                                                      |
| Uncrewed lander-and-rover mission; mineralogy and ancient-habitable-conditions reconstruction; clay/chloride/sulfate/basalt units; long-lived lake-or-groundwater vs episodic (32) | `SCENARIO.md:19-20, 82-95`                                          | article 001 (`:29-33`)                                                   |
| Asteria Field: fictional operational designation in Margaritifer Terra, centre 17.80°S 332.20°E (27.80°W), not an official place name (34)                                         | `SCENARIO.md:18, 97-107`; article-001 partial release               | article 001 (name + centre coordinates only)                             |
| Schedule frame: launch window in 2031 (42)                                                                                                                                         | `SCENARIO.md:23, 193`                                               | article 001 (`:66`)                                                      |
| Lifecycle budget frame €2.10 bn constant 2026 euros, concept work through the final science archive (42)                                                                           | `SCENARIO.md:26, 214-218`                                           | article 001 (`:66-67`)                                                   |
| Surface mission designed to operate for two Mars years (42)                                                                                                                        | `SCENARIO.md:24-25, 209-212`                                        | article 001 (`:69-72`) — cleared for wiki reuse here, see §5             |
| Related records 001–004 and one-line glosses (48–51)                                                                                                                               | the four released articles                                          | steps 001–004                                                            |

Judged items, recorded so they are not re-litigated:

- **The governance sentence (28) closely follows article 001's own wording.** Both derive from
  `SCENARIO.md:44-47`; no canon drift, and it is not one of the two frames the card body fences off
  (those are the 2031 window and the €2.10 bn frame, both present at line 42 as a frame statement plus
  a link to the announcement). Accepted.
- **The two-Mars-year lifetime (42) is stated without the "1,374 Earth days" figure.** The figure is
  released (article 001), so the page states a subset of released material — no new fact and no
  withheld precision. **This gate clears the two-Mars-year frame for wiki reuse**, which
  `.agents/work/briefs/wiki-content-plan.md` §Bounds and the source pack §Withheld both deferred to
  this role ("stays article-001-only until the editorial gate clears it for wiki reuse"). Basis:
  `docs/SCENARIO.md` §Continuity and release controls — "Surface mission lifetime — two Mars years,
  1,374 Earth days — released for article 001"; the withhold list there concerns landing-design
  material, not the lifetime.
- **Link labels name the released subjects of their targets** ("RH-01 Pathfinder", "The payload
  scope", "The launch architecture"). RH-01's designation and name were released at step 003; the
  card's containment fences RH-01 **imagery** (none is placed) and payload detail paraphrased (none is
  stated), not the name of a released vehicle in a link annotation. Accepted.
- **`centred at 17.80°S, 332.20°E (27.80°W)`** is the planning centre only. The planning envelope
  (`12.5–24.0°S`, `327.0–338.0°E`) that article 001 also published is **not** restated, which matches
  the page's own restriction ("no Asteria Field material beyond name and centre coordinates"). Accepted.
- **"how the flight stack is planned to reach Mars" (51).** Judged against the wiki voice rule's
  "no promise of future events". It reads as a description of the released architecture, matching 004's
  own framing ("a decision about a design, not a promise about a date"), and names no launcher, date
  or provider. Accepted, with the tightening noted as a non-blocking copy observation in the review
  record.

## 5. Withheld material — measured, by family

Method: case-insensitive substring scan of the page's frontmatter **and** body (4,097 B) against 31
withheld families read from `docs/SCENARIO.md` §Continuity and release controls, the card body's
containment list, and the source pack's withheld inventory; plus the project's own guard module. The
scratch scanner lives outside the repository (`/tmp/wiki-rh-gate/scan.mjs`) so the tree gains no copy
of a withheld name.

| Family                                                                                 | Hits |
| -------------------------------------------------------------------------------------- | ---- |
| Ariane / Ariane 64 / Arianespace / Kourou                                              | 0    |
| Launch or landing date (17 Feb 2031, 16 Sep 2031, 21 Jun 2035, 1,374)                  | 0    |
| RH-01 imagery (no `<img>`, no asset reference in the body; no scene file)              | 0    |
| Council bodies, vote thresholds, funding shares, responsibility split                  | 0    |
| Flight-system architecture (cruise stage, radioisotope, americium)                     | 0    |
| Landing-site material (ellipse, P0, science zones, AF-01/02/03, traverse, hazard)      | 0    |
| Real institution / agency / company / facility name (ESA, NASA, USGS, JPL, FEI STU, …) | 0    |
| `/docs/timeline/` reference (any form)                                                 | 0    |
| `simulatedDate` / "simulated record date"                                              | 0    |
| Unreleased coordinate markers (`18° 42`, `226° 14`)                                    | 0    |
| Step-005+ fact                                                                         | 0    |

Project guard module, run read-only against the real tree: `scanSourceForGatedReferences()` over
`website/` → **0 offences** (no reference into a withheld directory, no reference resolving to the
withheld scene file); `checkDist()` over `website/dist` → **0 offences** (no withheld name/stem/hash,
no gated marker).

## 6. Spoiler safety on the published surface

The page is `draft`, so its surface today is the _absence_ of a surface — verified in fact, not on
paper:

- **Local build (`website/dist`, built 19:59, not the live surface):** routes are `/404.html`,
  `/about/`, `/index.html`, `/news/` (5 files), `/wiki/index.html` — **no `/wiki/project/` and no
  `/wiki/project/red-horizon/`**. `listRoutes()` output recorded in the gate log.
- **Live origin** `https://mars-ai-simulation.janpolacek.workers.dev` (measured in-page with
  `cache: 'no-store'` + `crypto.subtle`, 2026-09-17 ~20:24 CEST): `/wiki/project/red-horizon/` →
  **404** (0 B), `/wiki/project/` → **404**, `/wiki/area/asteria-field/` → 404,
  `/wiki/vehicle/rh-01-pathfinder/` → 404, `/wiki/` → 200 (4,599 B, `<title>Wiki | Red Horizon</title>`,
  no listing). The three sibling wiki pages are all `draft`; the fail-closed default holds on the
  live surface for every one of them.
- **Flipped surface, measured in a throwaway copy outside the repository** (`/tmp/wiki-rh-gate/copy`,
  site copied, `docs/` symlinked as its sibling, packages linked one by one, the flip planted in the
  copy only): build green, `check-dist` exit 0, `media-scope` reports every emitted asset referenced.
  The leaf `/wiki/project/red-horizon/index.html` (11,178 B, sha256 `09e0ea194c547a8e1ded31938e0845aabd5f0d7bb5a942fc14b3cc5b9b11ee1c`)
  and the two wiki indexes carry **0** withheld tokens and **0** calendar-date strings; the only
  `<figure>` is the programme mark with `figcaption` count 0. The full `dist/` inventory was scanned
  file by file: no file name, stem or content carries a withheld family.
- **Red-first controls on the real guards** (so a green scan proves teeth): (a) planting the marker
  `18° 42` in the page's prose and rebuilding → `npm run build` **exit 1**, `gated-text` offence on
  the leaf, the leaf **pruned from `dist/`**, 0 marker occurrences left anywhere in the output;
  (b) planting a relative reference to `../../../docs/timeline/README.md` → `scanSourceForGatedReferences()`
  reports **1** `gated-path` offence naming the page, while the same call against the pristine shared
  tree reports **0**. (c) an unknown `media:` value → build **exit 1** with
  `media must be one of: programme-identity, asteria-plates, payload-sensor-illustration, vehicle-references`
  from the wiki collection's own schema, i.e. the wiki page is validated by the same rule as news.
- **No `simulatedDate`-shaped string** and no `canonicalDocs` value reaches the output: `docs/scenario`
  occurs **0** times in the built `dist/` tree, so the frontmatter's `canonicalDocs: "docs/SCENARIO.md"`
  is a repository-side derivation pointer only (the leaf route renders title, summary, media, body and
  `related`, and nothing else).
- The emitted figure derivative `_astro/logo-bg-black.DZLOhNzm_Z1HSVnk.webp` carries an ungated
  filename, matches no withheld stem, and is already reachable today at other widths: the same source
  is served on every route as site chrome (`_astro/logo-bg-black.DZLOhNzm_Z1aNMaQ.webp` 494 B in
  `SiteHeader.astro`, `_astro/logo-bg-black.DZLOhNzm_Z24gFmJ.webp` 2,768 B in `SplashScreen.astro`).

## 7. Plausibility

- Every number on the page is released and internally consistent: ten partners, 2031 window,
  €2.10 bn constant 2026 euros, two Mars years, 17.80°S 332.20°E. The page introduces no new figure,
  no mechanism, and no precision.
- The mark's alt text is the brand-approved string and matches the pixels: `docs/brand/BRAND.md:19-21`
  carries it verbatim (175 chars, 0 non-ASCII) and the visuals manifest records the 2026-09-17
  `vision_analyze` read confirming every cue it names (rust-red disc on black, low highlighted hills,
  Sun behind the upper-left rim, Earth and Moon at upper right, no text or star field). The page's own
  body carries the fiction disclosure, and the site-wide disclosure block renders on the leaf.
- Nothing on the page asks the reader to believe a real agency did anything: the partner list is
  labelled fictional national teams, the landing region is labelled a fictional operational
  designation, and the research grounding is stated as grounding, not participation.

## 8. Record date — not applicable, and measured as absent

The simulated record date attaches to the **news** collection: `simulatedDate` is a news frontmatter
field (`website/src/content.config.ts:24-45`, normalised by `src/lib/simulated-date.ts`, labelled
"Simulated record date") drawn from the milestone table at `docs/SCENARIO.md:173-208`
("Launch and mission dates"). The **wiki** schema (`website/src/content.config.ts:78-117`) declares
`title`, `section`, `publication`, `order`, `summary`, `related`, `canonicalDocs` and the media fields
— **no `simulatedDate`**, and a page that carried one would fail the build as an unknown key.

So for this package the milestone table does not supply a value, and none may be invented
(inventing a calendar date is new scenario canon and belongs to the human story owner). The correct
state is _no record date_, and it is verified on the surface, not assumed: the parsed frontmatter has
8 keys and `simulatedDate` is not among them; the flipped leaf carries **0** date-like strings and no
record-date label, as do `/wiki/` and `/wiki/project/`. The page is an undated reference entry by
design (`.agents/work/briefs/wiki-content-plan.md` §3: "No record date. The wiki schema has no
`simulatedDate` field, and no page may present one.").

Consequence for the build card: the flip must add **only** `publication: published`. A `simulatedDate`
line added to this file would be a schema error, not a nicety.

## 9. Consequence of this clearance

- The page may be flipped to `publication: published` and served at `/wiki/project/red-horizon/`.
- The flip also creates the `/wiki/project/` section index (it appears only when a section has a
  published page) and adds one entry plus the `Project` group to `/wiki/`. Those three surfaces are
  the public scope recorded in the review record.
- Nothing in this clearance advances the release order, publishes a later step's material, or settles
  a canon question: the page restates step 001 and links to 002–004.

## 10. Movement during the run (timestamped observations)

| #  | Observation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M1 | **The source pack moved mid-run.** `.agents/work/sources/wiki-red-horizon.md` 8,358 B at 20:14:25 → **8,626 B at 20:23:45**, sha256 `13034d1d…`. The delta is a "Page target" line and the flat-path/slug correction (the earlier revision named slug `re-horizon`). This verdict cites the current bytes; the claim-by-claim trace was unaffected.                                                                                                                                                                                                                                                                                                                                                                                                   |
| M2 | **The bound brief moved mid-run.** `.agents/work/briefs/wiki-content-plan.md` 19,903 B → **20,812 B at 20:21:13**, sha256 `88960d83…` (the flat-file authoring convention added). No bound changed; the convention restates what §1 of this record verifies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| M3 | **The local `dist/` is not the live surface.** `website/dist` was built at 19:59, before the wiki pipeline ran; the live origin is built from `origin/main` by the push-triggered Cloudflare build. Both were measured and are reported separately (§6).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| M4 | **Working tree held.** `HEAD == origin/main == 5a59f340c56e1ed2a8cb0b3167589816c3af5392` at verdict time; the page has been byte-stable at `c93a509a…` since the writer delivered it at 20:08 (mtime 20:08:27), across the planner's `mv` to the flat path (hash unchanged, as the planner recorded).                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| M5 | **Concurrent cards, by design of this dispatch.** Running while this gate ran: `t_f2713ffa` (planner, wiki content), `t_d6ec1166` (editorial gate on the sibling wiki page), `t_116ca903` (homepage roadmap writer), `t_58c90eb5` (Ariane 64 plate selection, editor). Four other cards (`t_74d301a3`, `t_8b6f0ae2`, `t_5da0efad`, `t_1476a18c`) are queued to edit `website/src/lib/assets.ts`, `website/src/features/news/media.ts` and `website/src/lib/media.ts` — the files this gate read its media contract out of. Their edits cannot change the page's own declaration (`media: programme-identity`, one plate, one alt), but the build card must re-run the contract probe on the tree it actually flips. Flagged as a hotspot on the card. |
| O1 | **Research stage skipped in fact.** The source pack's owning card `t_76a5f79d` is still `todo`; the pack was written by the planner container `t_f2713ffa` and the writers were dispatched with the parent linked only after delivery (`task_events`: the `dependency_wait`/`linked` pair lands at 20:11:42, after `t_a54e97b6` had already delivered at 20:10:35). The gate is not blocked — the trace is in §4 — but the stage order was violated and the planner owns the fix.                                                                                                                                                                                                                                                                     |
| O2 | **The SEO record mis-measures two of its own quoted strings.** It records the summary as 160 chars (FAIL) and the full `<title>` as 22 chars; the live values are **154** and **25** (the page's `title` is 11 chars, not 10). Three independent measurements agree on 154 (my probe, the writer's own 43-check probe, the source pack §Built-surface checks), and the flipped page's rendered `<meta name="description">` measures 154. No trim is needed. Routed to the SEO owner; not corrected in their artifact.                                                                                                                                                                                                                                 |
| O3 | **`/about/`'s method copy now lags the authority rule.** It says "a person decides whether the page is published at all. Agents do not approve canon, and agents do not publish", while `AGENTS.md` (2026-09-17 merge) makes releasability and canon confirmation the merged editorial role's recorded decision with no separate human approval. The wiki page's own sentence — that `/about/` describes the method — remains true, so this is not a defect of this package; routed to the planner as an out-of-scope finding.                                                                                                                                                                                                                        |
| O4 | **`docs/brand/BRAND.md` §Publication boundary is partly stale**: it places the mark's availability "through the generated `website/public/assets/` directory", a mechanism retired in favour of `docs/`-side imports (`website/public/assets/` holds only the two favicons), and its baseline ("the current Preparing site") predates the live site. Routed, not edited.                                                                                                                                                                                                                                                                                                                                                                              |

Revision history: this is the slug's **first** continuity record for package `c93a509a…`; no earlier
version is superseded, and no downstream record cites a different hash for these bytes.

## 11. Verdict

**continuity clear.** The page at `website/wiki/red-horizon.mdx`, sha256
`c93a509a6672d2e71207ff1c9464e6333ffb487bdfa4c5cfeef0081130dfa995` (4,097 B, `publication: draft`), is
chronologically sound, agrees claim-for-claim with released canon at steps 001–004, adds no canon, and
leaks nothing: every withheld family measures 0 hits in the file, in the source tree and in the built
output, the two red-first guard controls fail closed as intended, and the live origin serves no wiki
leaf page today. The package is clear to release; the release decision, its exact public scope and the
post-flip hash are in `.agents/work/reviews/wiki-red-horizon.md`.
