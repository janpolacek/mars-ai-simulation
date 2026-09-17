# Review: wiki-index-metadata — editorial gate (wiki index titles and descriptions)

Slug: `wiki-index-metadata`. Card `t_5ed4eee2` (`mars-ai-simulator-editor`), stage `site-foundation`.

## Review metadata

| Field                     | Value                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage              | `t_5ed4eee2`, `site-foundation`. Parent `t_b2c55032` (SEO pass, `done`). No children. **Not a release card** — see §10                                                                                                                                                                                                                                                             |
| Package under review      | `.agents/work/seo/wiki-collection.md` + `.agents/work/seo/wiki-strings.json` (the four proposed title/description pairs) + `.agents/work/seo/wiki-audit.py` (read-only audit tool), all by `mars-ai-simulator-seo`                                                                                                                                                                 |
| Evidence boundary         | The four route-generating sources do **not** exist in this shared checkout: its `HEAD` is `0ca543f`, 13 commits behind `origin/main` `72743e5`, and the wiki routes landed on `main` in `4500b95`. All implementation reads and the build output were taken from `.worktrees/t_b2c55032` (detached at `72743e5`). Nothing was reset, checked out or overwritten in the shared tree |
| Implementation judged at  | `origin/main` `72743e5` — `src/pages/wiki/index.astro`, `src/pages/wiki/[section]/index.astro`, `src/pages/wiki/[section]/[slug].astro`, `src/lib/wiki-query.ts`, `src/features/wiki/query.ts`, `src/lib/site.ts`, `src/content.config.ts`, `test/wiki-index.test.mjs`                                                                                                             |
| Proposed strings measured | 4 rows: title lengths 18/27/22/21, description lengths 70/100/95/83 — **independently re-measured, all four claims confirmed** (§3)                                                                                                                                                                                                                                                |
| Current rendered state    | `/wiki/` only. Built `dist/wiki/index.html` sha256 `c4b225829df65d22374ad33da2eee1720946e3e0f243da06f04a295ce625e09d` (4,639 bytes); its title is already `Wiki \| Red Horizon` and its description is the **inherited** site default (108 chars). The three section indexes are absent by construction (no published wiki page)                                                   |
| Live surface              | `https://mars-ai-simulation.janpolacek.workers.dev/wiki/` → 200, served bytes sha256 `c4b22582…` — **byte-identical to the audited build**; `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` → 404 (in-page fetch, live, 2026-09-17)                                                                                                                                              |
| Human approval state      | **Absent.** The section-label settlement the source card reserves to the human is not recorded anywhere on the board (§5, §10)                                                                                                                                                                                                                                                     |
| Verdict written           | 2026-09-17 13:31–13:38 CEST, against the shared tree (`git status --short` unchanged for every path this gate judged)                                                                                                                                                                                                                                                              |
| Mid-run movements         | Three, recorded in §11: `AGENTS.md` modified at 13:35:56 (concurrent, by the operator); two new working papers from the running planner card `t_bb11a025` (13:33:32, 13:34:50). None touches the package judged here; no input hash moved                                                                                                                                          |
| Status                    | **`approved`** — the four wording pairs as proposed, with the area label's _adoption_ withheld pending the human's settlement, and the implementation card created `blocked` (§7, §10)                                                                                                                                                                                             |

## Verdict

**`approved`** — the four title/description pairs are editorially sound as proposed: plain, specific,
candid about the fiction, consistent as a set, inside the length targets, and free of every withheld
category. No revision is required of any string.

Two things this approval deliberately does **not** do, and they are the whole of the withholding:

1. **It does not adopt the area section's label.** `Landing Zones` is my recommendation and the SEO
   pass's, but the source card reserves the section-label settlement to the human and no settlement
   exists on the board. `Vehicles` and `Project` are approved (§4); the area row's title — and its
   description, because the description names the same taxonomy term — is approved as _wording_ and
   withheld as _adoption_.
2. **It is not a release decision.** Nothing here publishes wiki prose, flips a `publication:` field
   or authorises a deploy. The implementation card is created in `blocked` state so it cannot start
   before the human's label sentence exists (§7).

Nothing was changed by this gate: no file under `website/`, no SEO artifact, no brief, no card body.
The evidence below is measurement and judgement; the scratch tools live in `/tmp/t_5ed4eee2/`.

## Review table

| #  | Check                                                                                         | Result                   | Evidence                                                                                                                                                                                                                                                                                                                                                                  |
| -- | --------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Package present, hashes taken, and read as a recommendation set rather than an applied change | PASS                     | `wiki-collection.md` sha256 `71f7c3ac…` (12,239 bytes), `wiki-strings.json` `d44eca09…` (660 bytes), `wiki-audit.py` `d6f3269e…` (3,974 bytes). Its own verdict line says structural review with deferrals, **not** an all-criteria pass — read that way here                                                                                                             |
| 2  | The four pairs exist exactly as the card states, and their lengths are right                  | PASS                     | Independently measured from `wiki-strings.json` (not copied from the manifest): 18/27/22/21 title chars, 70/100/95/83 description chars; 88 and 348 chars in total                                                                                                                                                                                                        |
| 3  | All four titles carry the ` \| Red Horizon` suffix, are non-empty, and are pairwise distinct  | PASS                     | 4/4, measured; the suffix count is 1 per row                                                                                                                                                                                                                                                                                                                              |
| 4  | All four descriptions are non-empty, distinct and within `≤155` chars                         | PASS                     | 4/4; longest is 100; all four replace the 108-char inherited default                                                                                                                                                                                                                                                                                                      |
| 5  | ASCII only, so a byte-for-byte implementation check is unambiguous                            | PASS                     | `isascii()` true for all 8 strings — no curly quote, en dash or non-breaking space for the dev to normalise                                                                                                                                                                                                                                                               |
| 6  | Root title and root route unchanged                                                           | PASS                     | `/wiki/` keeps `Wiki \| Red Horizon`, which is what the live page already serves; the root title is explicitly preserved by the card and nothing in the proposal moves it                                                                                                                                                                                                 |
| 7  | Section title formula inspected against the code the change lands in                          | PASS with condition      | `[section]/index.astro:30` renders `` `${wikiSectionLabel(section)} wiki \| ${site.name}` `` → today `Area wiki \| Red Horizon`, `Vehicle wiki \| Red Horizon`, `Project wiki \| Red Horizon`. The proposal replaces both halves (label + formula). Revert values are exact (§6)                                                                                          |
| 8  | Index descriptions are passed explicitly rather than inherited                                | PASS with condition      | `BaseLayout` takes `description` (`BaseLayout.astro:44`, emitted at `:68`); neither wiki index passes it today. The dev passes the approved string on both index routes (§7). No fallback wording is left in place                                                                                                                                                        |
| 9  | Copy gate, root row                                                                           | PASS                     | `Wiki \| Red Horizon` / `Reference pages for Red Horizon, a fictional Mars exploration project.` — states the collection's purpose rather than an inventory, which is what a root index that is live **today with zero entries** owes a reader; fiction disclosure is in the sentence itself, not a footnote                                                              |
| 10 | Copy gate, vehicle row                                                                        | PASS                     | `Vehicles \| Red Horizon` / `Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.` — plural category label reads as a class, not an instance; no vehicle designation, class name or programme fact                                                                                                                             |
| 11 | Copy gate, project row                                                                        | PASS                     | `Project \| Red Horizon` / `Published reference pages about the fictional Red Horizon Mars exploration project.` — keeps the commissioned term; the shortest of the three and the most generic on purpose                                                                                                                                                                 |
| 12 | Copy gate, area row                                                                           | PASS (withheld adoption) | `Landing Zones \| Red Horizon` / `Published reference pages about landing zones in the fictional Red Horizon Mars exploration project.` — plain-language label, better than `Area`; **adoption withheld** pending the human settlement (§4, §5)                                                                                                                           |
| 13 | The set reads as one set                                                                      | PASS                     | Three section descriptions share one sentence frame differing only by their noun (vehicles / landing zones / the project itself); the root states purpose without the `Published` claim. Recorded as decision D2, not an accident (observation A)                                                                                                                         |
| 14 | Voice: informed, composed, candid, specific, modest                                           | PASS                     | No superlative, no slogan, no urgency, no claim about agency involvement or real endorsement, no keyword stuffing; every noun is ordinary English; no acronym at all                                                                                                                                                                                                      |
| 15 | No string states, implies or dates a mission fact                                             | PASS                     | 0 digits, 0 years, 0 coordinates, 0 currency, 0 percent, 0 URLs, 0 repo paths, 0 card ids, 0 month names across all 8 strings; the only capitalised words are `Red`, `Horizon`, `Mars` (and each row's own label)                                                                                                                                                         |
| 16 | Continuity, canon and spoiler check complete for this package                                 | PASS                     | `.agents/work/continuity/wiki-index-metadata.md` — label `continuity clear`: no chronology claim, no canon claim, no unreleased material, no route or listing generated by the change                                                                                                                                                                                     |
| 17 | Confidentiality scan, with the marker list read at run time and a live control                | PASS                     | 0 marker hits in all 8 strings and 0 in the served live `/wiki/` document; the 4 markers were read from `website/scripts/guards.mjs` at scan time and are named here by count only, not by value                                                                                                                                                                          |
| 18 | Built and live surfaces checked, not just the source                                          | PASS                     | Read-only `listRoutes()` / `checkDist()` / `scanSourceForGatedReferences()` import of the shipped guard module: wiki route set is exactly `{/wiki/index.html}`, 0 dist offences, 0 source offences. The postbuild pruner was **not** run                                                                                                                                  |
| 19 | Fail-closed behaviour preserved by the proposal                                               | PASS                     | The change touches metadata props only; ``groupWikiBySection``'s empty-group drop and the ``publication === 'published'`` predicate are untouched, and live `/wiki/area                                                                                                                                                                                                   | vehicle | project/` are 404 today and stay 404 until a page publishes |
| 20 | Leaf metadata policy                                                                          | PASS with condition      | Leaf title `{page.data.title} \| Red Horizon` and description `{page.data.summary}` are preserved; **no truncation anywhere**. The schema accepts empty and duplicate strings (`content.config.ts:57,73`), so the dev adds fixture-build assertions for blank/duplicate built titles + descriptions and _reports_ over-length summaries instead of rewriting them (§7 C5) |
| 21 | Metadata/schema scope respected: no OG, JSON-LD, sitemap, canonical or origin work            | PASS                     | 0 canonical and 0 `ld+json` in the built and live `/wiki/`; the proposal names no OG field, no sitemap, no `SITE_URL`; the missing-sitemap decision stays on `t_bb11a025`                                                                                                                                                                                                 |
| 22 | Asset provenance                                                                              | N/A                      | No image, no OG image, no media key and no asset is proposed; no hash comparison applies                                                                                                                                                                                                                                                                                  |
| 23 | Implementation serialisation checked against live dev work                                    | PASS with note           | No dev card is running; the one queued dev card is `t_accf6f7a` (`Build and deploy: 003-vehicle-design`, `todo`, waiting on the 003 editorial gate `t_1e84c815`). One `website/` card at a time still applies (§7)                                                                                                                                                        |
| 24 | No approval invented; the human item is named and left open                                   | PASS                     | Board scan: human gates `t_9b2a308d` and `t_c77be834` are `blocked` **with no comments**, and no comment by a human on any card mentions a wiki label settlement. Recorded as outstanding, not inferred (§5, §10)                                                                                                                                                         |
| 25 | This gate edited no artifact but its own records                                              | PASS                     | `git status --short` unchanged from session start for every path; the two review files are new. No other worker's artifact was repaired or overwritten                                                                                                                                                                                                                    |

## 1. Scope and method

Editorial gate over the wiki index wording package at 2026-09-17 13:31–13:38 CEST: the SEO package and
its two data files, the commissioning brief, the four wiki route sources, the query/schema/layout
modules the change runs through, the wiki test suite, the published canon, and the built **and** live
surfaces.

Commands run (repository root unless noted; all scratch scripts outside the repository in
`/tmp/t_5ed4eee2/`):

- `python3 /tmp/t_5ed4eee2/strings.py` — the four pairs re-measured from `wiki-strings.json`: per-row
  length, ASCII status, distinctness, and structural token classes (digits, years, coordinates,
  currency, percent, URLs, repo paths, card ids, month names, capitalised words), with the marker list
  regex-extracted from `website/scripts/guards.mjs` at run time so no marker value is copied into this
  record.
- `node /tmp/t_5ed4eee2/surface.mjs` — read-only import of the shipped `scripts/guards.mjs` from
  `.worktrees/t_b2c55032`, calling `listRoutes()`, `checkDist()` and `scanSourceForGatedReferences()`,
  plus a head inventory of the built `/wiki/` document. **`scripts/check-dist.mjs` was deliberately not
  run**: it prunes offending files from `dist/`, and a gate must not delete the build it judges.
- In-page live reads on `https://mars-ai-simulation.janpolacek.workers.dev` (status, served bytes,
  `crypto.subtle` SHA-256 of the response body, title/description/canonical/JSON-LD counts, and the
  three fail-closed section routes).
- `python3 /tmp/t_5ed4eee2/live_scan.py` — marker scan of the served `/wiki/` document.
- `python3 /tmp/t_5ed4eee2/board_scan.py` — read-only SQLite reads of `~/.hermes/kanban.db` (tasks,
  task_comments, task_links) for the human-approval state and the dev queue.
- `sha256sum` over every gate input at 13:31 and again immediately before this verdict; `git status
  --short`, `git rev-list --left-right --count HEAD...origin/main`, `git worktree list`.

**Not run, and not this card's:** any build, preview or deploy; any edit to `website/`; any
`publication:` flip; any change to `docs/` canon, the briefs, or the SEO package.

## 2. What this approval covers — and its limits

- **Covered:** the four title/description pairs as byte-for-byte strings; the removal (for those routes)
  of the inherited site default description; the section title formula
  `{approved label} | Red Horizon` replacing `{Label} wiki | Red Horizon`; and the label set
  `Vehicles` / `Project` (see §4 for the area row).
- **Not covered:** any wiki page's prose, frontmatter, `publication` state, summary, media key or alt
  text; the root's `H1`/eyebrow; the route shape; navigation; the sitemap or origin decision
  (`t_bb11a025`); and every human gate on this tree (`t_9b2a308d`, `t_c77be834`, `t_6f4f785e` — all
  untouched and still open).
- **Not a release decision.** This record carries no `publication: published` flip, no deploy and no
  release sentence. The two `website/`-visible effects of implementing it — an explicit meta
  description on the live `/wiki/` page, and label/description props on section indexes that do not
  exist yet — are both gated behind the withheld human settlement and behind the ordinary dev card.

## 3. Copy gate — the four pairs, one row each

| Route            | Proposed title (len)                | Proposed description (len)                                                                                   | Judgement                                                                                                                                                                                                                                                            |
| ---------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/wiki/`         | `Wiki \| Red Horizon` (18)          | `Reference pages for Red Horizon, a fictional Mars exploration project.` (70)                                | **PASS.** Already the live title, so the row is a no-op for the title and a first-ever description for the route. States purpose; promises no inventory, which is the only honest reading while the index lists nothing. Fiction disclosure sits inside the sentence |
| `/wiki/area/`    | `Landing Zones \| Red Horizon` (27) | `Published reference pages about landing zones in the fictional Red Horizon Mars exploration project.` (100) | **PASS as wording; adoption withheld.** The best plain-language label of the three candidates (`Area`, `Area wiki`, `Landing Zones`) and the one the commissioned plan's own words point at. Not applied until the human settles the label (§4)                      |
| `/wiki/vehicle/` | `Vehicles \| Red Horizon` (22)      | `Published reference pages about vehicles in the fictional Red Horizon Mars exploration project.` (95)       | **PASS.** Plural class label; `Vehicle wiki` reads like an internal page type and `Vehicle` alone as an instance. No vehicle designation, no class name, no programme fact                                                                                           |
| `/wiki/project/` | `Project \| Red Horizon` (21)       | `Published reference pages about the fictional Red Horizon Mars exploration project.` (83)                   | **PASS.** Keeps the commissioned term; the description's object _is_ the section, and the sentence still reads cleanly. Most generic of the three, deliberately                                                                                                      |

**D1 — the root title stays.** `Wiki | Red Horizon` is what the route already serves, what its `H1`
(`Wiki`) and nav label (`Wiki`) say, and what the card requires preserved. No change, no review churn.

**D2 — the description asymmetry between root and sections is confirmed, not accidental.** The three
section descriptions open `Published reference pages about …`; the root does not. That difference is
right and is hereby the decision: a section index route **exists only when it lists at least one
published page** (`wikiSectionsWithPages`, `[section]/index.astro:19-22`), so `Published …` is true by
construction there, whereas `/wiki/` exists today with an empty listing and must not claim one. The
root states the collection's purpose instead. A later pass that "tidies" the root by adding `Published`
would make the live page claim something it does not yet have.

**D3 — length targets are the SEO package's, and they hold.** Title ≤60 including the ` | Red Horizon`
suffix and description ≤155: 4/4 rows pass with wide margin (longest title 27, longest description
100). The ` | Red Horizon` suffix is 14 characters of every title, so the label budget is 13/8/7.

**D4 — vocabulary is existing public vocabulary.** `Red Horizon`, `Mars`, `wiki`, `landing zone`,
`vehicle`, `project` are all words the site already publishes (`src/lib/site.ts` default description
and disclosure, the live nav, the brief). The root description's phrase `a fictional Mars exploration
project` is the same construction as the shipped default description, so the site does not gain a
second way of describing itself.

## 4. The label question

The source card's metadata section names the four targets but appends `(or similar; human settlement of
section label)` to the area row, and my own card repeats it: `Landing Zones` requires human settlement
and no approval is presumed. So:

| Row                              | Editorial verdict              | Who settles it                                                        |
| -------------------------------- | ------------------------------ | --------------------------------------------------------------------- |
| Root (`Wiki`)                    | approved                       | editor (this record) — no change to the live title                    |
| `Vehicles` (section `vehicle`)   | approved                       | editor (this record); display label only, URL key `vehicle` unchanged |
| `Project` (section `project`)    | approved                       | editor (this record); the commissioned term                           |
| `Landing Zones` (section `area`) | recommended, adoption withheld | **human story owner** — the settlement the source card reserves       |

Why the whole label set is withheld from the dev card rather than shipped in two halves: the label is
rendered by three surfaces from one definition (`wikiSectionLabel`, consumed by the root index's group
heading at `index.astro:33`, the section index's title and `H1` at `[section]/index.astro:30,38`, and —
after C1 — the leaf breadcrumb at `[slug].astro:53`). Adopting two of three labels would leave the
section titles on two different formulas (`Vehicles | Red Horizon` beside `Area wiki | Red Horizon`),
which is exactly the incoherence the "approved shared category labels" clause exists to prevent. The
whole set moves in one edit, after the human settles the area term — and nothing in the tree is
time-critical, because no section route can render until a wiki page is published.

If the human's settled term for the area section is not `Landing Zones`, the area description's phrase
must be re-worded in the same pass rather than paraphrased by the dev; that re-wording is a one-line
editorial follow-up, not a new gate.

## 5. Continuity, canon and the human gates

`.agents/work/continuity/wiki-index-metadata.md` carries the full check and reads **`continuity clear`**:
the eight strings make no factual claim, name no place, date, step, vehicle or instrument, keep the
fiction disclosure, and therefore cannot leak a later timeline step through text, metadata, asset name,
alt text, link, caption or summary. The scan for the four gated markers returned 0 hits in the strings
and 0 in the served live document.

The two human gates are untouched and were re-verified in this run: `t_9b2a308d` and `t_c77be834` are
`blocked`, carry **no comments at all**, and nothing anywhere on the board records a human sentence
about the wiki section label. That is the gap this review names rather than fills. The four strings are
editorial wording about a page's purpose; they are not canon, and this record approves no canon.

## 6. Superseded and revert values, checked

The SEO package's revert instructions were checked against the code rather than accepted:

| Proposed            | Today at `72743e5`                                           | Revert (exact)                                                          |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| root description    | inherited `site.defaultDescription`, 108 chars               | remove the explicit `description` prop → inherits again                 |
| section title       | `{Label} wiki \| Red Horizon` (`Area \| Vehicle \| Project`) | restore `wikiSectionLabel`'s capitalised section value and that formula |
| section description | inherited `site.defaultDescription`, 108 chars               | remove the explicit `description` prop                                  |
| leaf title/meta     | `{page.data.title} \| Red Horizon`, `{page.data.summary}`    | unchanged by this package — no revert needed                            |

The inherited default is `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from
first planning to the surface.` (`src/lib/site.ts:16-17`) — the string all four routes serve today.

## 7. Implementation handoff

One card, created by this gate for `mars-ai-simulator-dev` and **left in `blocked` state** because the
human settlement in §4 does not exist yet. Its scope, in the terms my card set:

- **Strings:** the four pairs exactly as measured in §3, frozen, ASCII, passed explicitly
  (`BaseLayout`'s `description` prop on both index routes; the approved label + title formula on the
  section index). One definition per string, shared by its consumers — not duplicated in two modules.
- **Preserve:** the root title; the URL section keys `area` / `vehicle` / `project`; the fail-closed
  empty-section behaviour and the `publication === 'published'` predicate; leaf writer copy (title,
  summary, body, media, alt).
- **C1 (coherence, in scope):** the approved label is used wherever a section is _named_ in the tree,
  including the leaf breadcrumb (`[slug].astro:53`), which today prints the raw lowercase section value
  (`area`) while the root index prints the label. A leaf page must not name its section differently
  from the index that lists it.
- **C2 (test):** `test/wiki-index.test.mjs:111` asserts `wikiSectionLabel` returns
  `['Area', 'Vehicle', 'Project']`; it moves with the change or the suite fails.
- **C3 (regression checks, isolated fixtures):** the existing wiki suite already builds a throwaway
  project root with its own `wiki/` fixture pages; the new assertions belong there — exactly one
  non-empty `<title>` per document with the suffix, the approved description byte-for-byte on the root
  and on a section index built from a published fixture page, the approved label in the section title
  and `H1`, the root title unchanged.
- **C4 (no truncation):** nothing may truncate, reflow or rewrite a writer's `summary`. Blank or
  duplicate built titles/descriptions are defects the suite should fail on; an over-length summary is
  _reported_ for owner review, never silently shortened.
- **C5 (untouched):** no OG field, no structured data, no sitemap or origin change, no canonical work,
  no nav change, no media key, no new asset, no route-shape change, no wiki prose, no `publication:`
  flip.
- **Serialisation:** `t_accf6f7a` (`Build and deploy: 003-vehicle-design`, `todo`) is ahead in the dev
  queue; one `website/` card at a time still applies. The shared checkout is behind `origin/main` and
  holds unrelated edits, so the dev works from `origin/main` (worktree), where these files actually
  exist — they are absent from the shared `HEAD`.

## 8. Confidentiality scan (commands and real hit counts)

The 4-marker list was read at run time from `website/scripts/guards.mjs`; the withheld classes are named
here by count and class only, and no marker value appears in this record or in the continuity record.
The scratch scanners and their pattern source list live outside the repository.

| Target                                             | Guard markers (4, values withheld) | Structural token classes                                                                                 |
| -------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| The 8 proposed strings (4 titles + 4 descriptions) | **0 hits**                         | 0 digits, 0 years, 0 coordinates, 0 currency, 0 percent, 0 URLs, 0 repo paths, 0 card ids, 0 month names |
| Served live `/wiki/` document (4,639 bytes)        | **0 hits**                         | — (page is heading + nav chrome only)                                                                    |
| Built wiki output (`dist/`, worktree at `72743e5`) | 0 dist offences (`checkDist()`)    | 0 gated-reference offences (`scanSourceForGatedReferences()`)                                            |

## 9. Non-blocking observations

- **A — the section frame and the root frame differ.** `Published reference pages about …` ×3 against
  `Reference pages for …`. Deliberate and confirmed as D2 (§3); recorded so a later pass does not
  "align" them in the wrong direction.
- **B — `Vehicles` is a display label over the URL key `vehicle`.** The tree's settled vocabulary is the
  section value (`wikiSections = ['area','vehicle','project']`); the public label is wording. If the
  human's label settlement wants one vocabulary throughout, that is a label decision, not a URL change —
  and it is taken once, on the blocked implementation card. Owner: human story owner, on the settlement.
- **C — the deferred real-content checks still stand.** Nothing in this package can verify a _rendered_
  section index or leaf page, because no wiki page is published; the first-page workflow must repeat the
  length/uniqueness/link/alt/canonical/JSON-LD checks against real content. Already carried by the
  planner on `t_bb11a025`; not re-carded here.
- **D — the leaf breadcrumb's raw section value is a pre-existing small defect.** `[slug].astro:53`
  prints `{entry.data.section}` (lowercase `area`) while the rest of the tree prints the label. It is
  invisible today (no leaf route exists) and is carried as C1 rather than fixed by this gate — this gate
  changes no artifact.
- **E — the audit tool is a package tool, not a guard.** `wiki-audit.py` inventories findings and
  asserts the length targets on the proposed strings; it does not fail the build and must not be wired
  into `postbuild`. Recorded so a later reader does not mistake it for a fence.
- **F — a tool artifact, not a regression.** A tool-mediated DOM read of the live `/wiki/` showed the
  document title with a session marker prefix; the served bytes (`fetch` response body, hashed
  `c4b22582…`) carry `<title>Wiki | Red Horizon</title>` with no prefix. The live title is 18 chars.

## 10. Release boundary and what remains outstanding

`approved` here is an **editorial gate over wording**. It is not a release, not canon approval, and not
authorisation to build, preview, deploy or publish.

1. **The human's section-label settlement** — the single missing input. It is not on the board: the two
   human gates on this tree (`t_9b2a308d`, `t_c77be834`) stand `blocked` with no comments, and no human
   comment anywhere mentions the label. Owner: human story owner.
2. **The implementation card** — created `blocked` by this gate for `mars-ai-simulator-dev`, waiting on
   (1). Unblocking it is an operator action once the settlement is recorded.
3. **`/wiki/` keeps its inherited description until then.** That is today's live, measured state: 200,
   title 18 chars, description 108 chars inherited, no canonical, no JSON-LD, empty listing.
4. **No wiki page's publication state is touched by anything here.** The first public wiki content
   still needs the editorial chain and the human's release sentence on its own release card.

## 11. Mid-run movements (recorded; none material to this verdict)

The shared checkout is edited by other profiles while this gate runs. Three things moved between the
first input hash pass (13:31) and the verdict (13:38); the eleven gate inputs in §1 were re-hashed at
13:36:32 and **all eleven were unchanged**, so this verdict stands on the bytes it names.

| Time (CEST) | Movement                                                                                                                                                                                                                                                                          | Effect on this gate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13:33:32    | `.agents/work/seo/wiki-sitemap-resolution.md` created (concurrent planner card `t_bb11a025`)                                                                                                                                                                                      | None. It records the missing-sitemap decision that this package explicitly leaves to that card (§2, §7 C5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 13:34:50    | `.agents/work/releases/wiki-001-vehicle.md` created (same card) — a **planned** first-wiki-content release record whose own status line reads "Planned — not approved. Human gates t_9b2a308d and t_c77be834 remain blocked."                                                     | None material. It plans a future vehicle-wiki release and publishes nothing; it does not flip a `publication:` field, does not answer the section-label question, and its own gate list keeps the human gates open. Recorded so a later reader sees both lanes at once                                                                                                                                                                                                                                                                                                                                                |
| 13:35:56    | `AGENTS.md` modified by the operator: the project instruction file now states that the merged editorial role alone decides releasability and canon confirmation, and that a human alone authors new scenario canon, advances the release order, and performs the external actions | **Considered, and it does not settle the label.** The edit addresses scenario canon, the release order and external actions — not the commissioned taxonomy label for a wiki section. My card body (`t_5ed4eee2`, written 13:29) reserves that settlement to the human, and the label is a wording choice the commissioned plan left open rather than a canon fact. Nothing in this review changes. If the operator intends the section-label call to sit with the merged role now, one word on this card settles it and the blocked implementation card can be unblocked with `Landing Zones` adopted as recommended |

## 12. Record identity

First review record for the `wiki-index-metadata` slug. There is no superseded revision of this file. If
a later pass re-checks this package, re-hash the SEO package and the four route sources first and state
what moved around them; a re-check that finds the article-side bytes unchanged may stand on this
reading.

Evidence paths for a later reader: `/tmp/t_5ed4eee2/strings.py`, `surface.mjs`, `live_scan.py`,
`board_scan.py`, `live-wiki.html` — outside the repository, read-only, re-runnable.

## Final status

`approved` — the four wording pairs as proposed; the area label's adoption and the whole implementation
withheld pending the human's settlement; nothing released.
