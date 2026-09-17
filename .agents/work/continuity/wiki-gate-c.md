# Continuity: wiki-gate-c — chronology, canon, plausibility and spoiler verdict

Slug: `wiki-gate-c`. Card `t_c77be834` (`mars-ai-simulator-editor`), stage `wiki tree` (gate).
Companion record: `.agents/work/reviews/wiki-gate-c.md` (editorial gate + release decision).

**Verdict: `continuity clear` — for the withhold state this gate records, and for nothing else.**

No wiki page was submitted to this gate, so there is no page whose chronology, canon consistency,
plausibility or spoiler safety could be judged. What is judged here is the state the gate leaves
behind: _nothing published_. That state is consistent with released canon and with the release order,
and it is verified in fact rather than on paper.

## 1. Evidence boundary and what was compared

| Item                       | Value                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card under work            | `t_c77be834` (Gate C: canon confirmation and release decision for the first public wiki content). Parents `t_9b2a308d` (`done`, Gates A/B) and `t_b2c55032` (`done`, SEO structural review). Child `t_6f4f785e` (gate ledger, `todo`). No release card exists for any wiki page                                                                           |
| Contents compared          | `docs/SCENARIO.md` sha256 `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54` (release controls at `:272-282`), `.agents/work/briefs/wiki-tree-plan.md` `3fe2ec552dfbbeecd77817798f847540992275d1934ae8c6d30544e5b0a9eab8`, `.agents/work/releases/wiki-001-vehicle.md` `0e82912b6ddb320567e5c77ad2ab1c6b94a621c1bf1c517269002f676c6950fc` |
| Upstream gate records      | `.agents/work/reviews/wiki-index-metadata.md` `c545ed5c8d4c2a40cee234a7ade2937540d445214490bb1653a5ff9302fcc62c`, `.agents/work/continuity/wiki-index-metadata.md` `11b0ff50c5bafcbc91b441f841363d663a2bc19bafef80e41752c613f8f79233` — both read as prior art for this gate's route and label questions                                                  |
| Released material compared | `website/news/001-project-announcement.mdx` and `website/news/002-payload-selection.mdx` (`publication: published`); `website/news/003-vehicle-design.mdx` is `publication: draft` in this checkout. Public vocabulary from the live site                                                                                                                 |
| Build/live surfaces        | Live `/wiki/` sha256 `c4b225829df65d22374ad33da2eee1720946e3e0f243da06f04a295ce625e09d` (4,639 bytes) at 2026-09-17 13:42 CEST — byte-identical to the earlier audited build; every section and leaf wiki route 404; no sitemap document exists                                                                                                           |
| Private timeline           | **Not read, not copied, not quoted.** This gate needed no step file: nothing was published and no page claim was confirmed. The released-step statement below is taken from the published news pages and `docs/SCENARIO.md`, not from `docs/timeline/`                                                                                                    |
| Checkout read at           | shared tree `HEAD` `0ca543f815b3bd8293440f1ebca0fd5782d03933`, 13 commits behind `origin/main` `72743e5cc9e509b80217199bc368952ac1d3bf1f` (the wiki routes landed in `4500b95`)                                                                                                                                                                           |
| Gates re-hashed            | Immediately before writing this verdict (13:42 CEST); no input hash had moved since the reads above                                                                                                                                                                                                                                                       |

## 2. Chronology

- **No chronology claim is made by this gate**, because nothing was published and no page exists.
- The ordering the gate must respect: steps `001` and `002` are released (`publication: published`);
  step `003` is **not** public in this checkout (`website/news/003-vehicle-design.mdx` is
  `publication: draft`), and its own release card `t_dcd80a99` is still `todo`. `docs/SCENARIO.md:277`
  places the first RH-01 imagery at step 003 and `:279` carries the Asteria Field release controls.
- Consequence recorded as a condition, not settled here: when the first wiki page is prepared, its
  facts must sit inside what the released material already allows. Publishing a page whose facts need
  a step the release order has not reached is advancing the release order, which is the human story
  owner's call (`docs/INSTRUCTIONS.md` source-of-truth order; `AGENTS.md`). The human's Gate A/B answer
  of 2026-09-17 released the _publication state_ of the `/wiki/area/` and `/wiki/project/` nodes at
  step 003; it did not release any fact, and it did not flip anything.
- Zero dated or ordered statements exist anywhere in the material this gate added, so no ordering can
  be contradicted by it.

## 3. Canon consistency

- **Claim count confirmed for release: zero.** There is no wiki page, no draft, no source pack and no
  frontmatter in the tree: the shared checkout has no `website/wiki/` at all, no worktree holds wiki
  page content, and the only wiki paths on `origin/main` are the collection's code
  (`src/content.config.ts`, `src/lib/wiki-query.ts`, `src/features/wiki/query.ts`,
  `src/pages/wiki/**`, `test/wiki-index.test.mjs`). Nothing therefore needed confirming against
  released canon.
- **The withhold state agrees with canon.** `docs/SCENARIO.md:279` (as amended 2026-09-17, wiki
  area-page exception) releases the wiki area page _state_ at step 003 while keeping the publication
  _flip_ gated and keeping the landing-design withhold list intact. Leaving every page at
  `publication: draft` implements exactly that; confirming anything here would have gone beyond it.
- **Uncertainty was not written as certainty.** The gate records no release, no date and no fact. The
  card-body approval sentence is _not_ quoted as if a human had written it, and the earlier
  `WITHHOLD` answer is quoted only as an operator record.
- **`docs/SCENARIO.md:279` was not edited by this gate** — it is cited, and the one amendment it
  carries belongs to `t_9b2a308d`. `docs/timeline/` was not opened.

## 4. Plausibility

Not applicable to a withhold: no vehicle, manoeuvre, instrument, mass, performance figure or surface
outcome is described by anything this gate produced. The one plausibility-adjacent risk — a reference
tree that claims more than the programme has published — is absent by construction: the wiki root
serves an empty index and the section and leaf routes return 404 live (SS5).

## 5. Spoiler safety and the public surface (verified in fact, not on paper)

Measured live at 2026-09-17 13:42 CEST (in-page fetch on the deployment origin, hashed with
`crypto.subtle`):

| Route                                             | Result                                                                                                         |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `/wiki/`                                          | 200, 4,639 bytes, sha256 `c4b22582…`, title `Wiki \| Red Horizon`, no canonical, empty index (no page entries) |
| `/wiki/area/`, `/wiki/vehicle/`, `/wiki/project/` | 404, 0 bytes                                                                                                   |
| `/wiki/area/asteria-field/`                       | 404, 0 bytes                                                                                                   |
| `/wiki/vehicle/rh-01-pathfinder/`                 | 404, 0 bytes                                                                                                   |
| `/wiki/project/red-horizon/`                      | 404, 0 bytes                                                                                                   |
| `/sitemap-index.xml`, `/sitemap.xml`              | 404 — no sitemap document exists                                                                               |
| `/robots.txt`                                     | 200, does not mention `/wiki/` or any wiki route                                                               |

Gated-token scan of the served `/wiki/` bytes: **0 hits** for the landing-design category terms and
the plate/unit identifier families (terms read at run time, reported by count only, not by value).
Zero future-event names, dates or step references appear anywhere in the served wiki document, in the
new records this gate writes, or in metadata/asset names.

Mid-run observations (non-blocking, recorded for the next reader):

- Dev card `t_a01bca40` (wiki index metadata) is `running` in its own worktree; it changes index
  strings only and cannot publish a page. At 13:42 CEST its change had not reached the live surface
  (live `/wiki/` is still byte-identical to the pre-change build, sha256 `c4b22582…`). This gate's
  decision does not depend on those strings.
- Operator label settlement on the ledger at 13:45 CEST (`Landing Zones` / `Vehicles` / `Project`)
  settles labels only; it releases no page and no fact.

## 6. What this verdict does not cover

- It does **not** clear any wiki page for publication: no page was submitted.
- It does **not** confirm the area, project or vehicle dossiers as publishable source material in
  bulk; each page's own claims are confirmed at that page's editorial gate.
- It does **not** relax the landing-design withhold list (`docs/SCENARIO.md:279`, H1 decision
  2026-09-17 option i) or the programme-frame withhold carried in the content card bodies. Those bind
  for prose, alt text and captions independently of this gate.
