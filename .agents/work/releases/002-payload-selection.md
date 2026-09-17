# Release record: 002-payload-selection

## Status

**`released` — the `publication` flip is applied by card `t_5a62fb28`, 2026-09-17 10:36 CEST.**

The article is now `publication: published` with `media: payload-sensor-illustration`, so the
frontmatter predicate that drives the listing, the card and the static route
(`website/src/lib/publication.ts` + `src/features/news/query.ts`) admits it. The fail-closed
default held by revision 2 of this record no longer applies: Gate 2 was recorded, and the media
chain that the flip depends on (`t_a9964b8d` → `t_4b49346b`) completed.

**This card did not build, did not deploy and did not set public timing.** Build + guard proof
belongs to the dev card `t_b429a50d`, which this card gates. The publication _step_ is automatic:
the human story owner's recorded statement is "deployment is made automatically by commit/push",
so the dev card's push of the flipped article to `main` is what makes the connected Cloudflare
Workers Build publish the site. No agent holds the deploy action itself.

## Gate ledger — every gate traceable to a quoted comment, none inferred

| Gate                                   | Decision                                                                                                                                          | The words actually recorded                                                                                                                                                                                                                                                           | Where recorded                                                                                                                                      | When          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1 — Identity mark on the 002 news card | **answered, re-scoped to gathered media**; the human waived their own sign-off on the media choice, so the editor's recorded sign-off is the gate | `"1 gather media, either by generating using visualizer agent or retrieve from web; automatically approve if editor is ok with it; 3 ; 4 - handle it"`                                                                                                                                | comment by `default` on `t_5a62fb28`; the sign-off itself is card `t_327899d5` / `.agents/work/reviews/002-payload-selection-media.md` (`approved`) | 09:12 / 10:25 |
| 2 — Canon and release approval         | **approved**                                                                                                                                      | `"Article 002-payload-selection canon and release: approved"`                                                                                                                                                                                                                         | comment by `default` on `t_5a62fb28` — a verbatim match to the sentence the card body requires                                                      | 10:32         |
| 3 — Sensor-illustration go-ahead       | **folded, not separately required**                                                                                                               | the Gate 1 answer commissions the recorded sensor-focused illustration, so production was authorised with the media work                                                                                                                                                              | comment by `default` on `t_5a62fb28`                                                                                                                | 09:12         |
| 4 — Public title and byline            | **settled by the project under "4 - handle it"**                                                                                                  | `title` keeps the editorially approved `Choosing what a Mars rover carries.` (the SEO package's applied title, a pinned field in the approved review); **no byline**, because the content schema has no author field (`website/src/content.config.ts`) and no credit line is invented | comment by `default` on `t_5a62fb28`                                                                                                                | 09:12         |

No gate was inferred from the plan to publish, from the request to plan the release, or from the
completion of the media chain. Each row above cites the comment that carries it.

**Sentence fidelity, stated precisely because the card asked for verbatim text.** Only **Gate 2**
arrived as the exact template sentence the card body specified
(`"Article 002-payload-selection canon and release: approved"`, comment by `default`, 10:32). Gates
1, 3 and 4 were answered **in the human's own words instead of the template sentences**, relayed
verbatim as `"1 gather media, either by generating using visualizer agent or retrieve from web;
automatically approve if editor is ok with it; 3 ; 4 - handle it"`, and the operator's comment
reads that answer gate by gate and states what each part does and does not release. That comment is
the human instruction for this card, so the re-scope is recorded, not inferred; where the human
spoke in their own words, this record uses the operator's recorded reading rather than inventing a
sentence the human did not say. The literal strings `"Identity mark reuse on the 002 news card: …"`,
`"Sensor-illustration production for 002: …"`, `"002 public title: …"` and `"002 author: …"` appear
on this card **only** as the card body's own template and as the planner's planning card
`t_9466382f` — never as a recorded decision. A board-wide scan at 10:44 CEST (154 `task_comments`
rows) confirms that: every non-planner hit for the Gate 2 sentence is this card's relay.

**Media sign-off carried forward (Gate 1's delegated decision):** candidate
`01-spectral-sampling`, SHA-256 `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67`,
approved with the alt text and label below and **no caption** — `.agents/work/reviews/002-payload-selection-media.md`,
card `t_327899d5`. The candidate was copied byte-identically to its canonical path by card
`t_4b49346b`; re-hashed here, unchanged.

## The release change applied

`website/news/002-payload-selection.mdx`, frontmatter only. The body is untouched — this is the
approved editorial revision plus its frontmatter flip.

```diff
-publication: draft
+publication: published
 order: 2
+media: payload-sensor-illustration
+mediaAlt: "Illustrative artwork, not mission photography: several coloured beams of light slant down through dusty air onto a rough dark rock, and a couple of bright points glow on the stone where the light lands. A stand-in image for a payload built to sense what a rock is made of."
+mediaLabel: Red Horizon // payload sensor illustration
 accent: amber
```

Three things the card body got wrong and this run did **not** follow:

- Item 1 said to use the three-plate Asteria Field key if Gate 1 is approved. Superseded by the
  operator's correction of 09:08 on `t_5a62fb28`: that key is a three-plate set
  (`website/src/lib/media.ts:35`, plateCount 3 / altCount 3 / captionCount 3 / `requiresLabel`
  true) whose plates are released for article 001 only (`docs/SCENARIO.md:279`), so it must not be
  placed on this article. The key applied is `payload-sensor-illustration`
  (`website/src/lib/media.ts:44`, contract 1 / 1 / 0 / `requiresLabel` false), added end to end by
  `t_4b49346b`. As revision 2 of this record did, the superseded frontmatter literal is named only
  by location and not written out here, so the tree gains no new copy of a withheld token; the
  literal itself and its correction live on the card comment of 09:08.
- `mediaLabel` is schema-optional for this key but **load-bearing**: for a one-plate key the card
  chip is drawn from `mediaLabel` (`website/src/features/news/NewsCard.astro:25`) and an unset
  label renders an empty chip. It is set.
- No `mediaCaption` is present. The schema rejects one for this key (`captionCount: 0`), and the
  "illustrative" statement reaches the reader through the approved alt text instead — the resolver
  prints `set.provenance` only through `plateCaptionText()`, which runs for plate sets.

## Released hashes and identity

| Item                                       | Value                                                                                                               |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Article, approved revision before the flip | `6437379171bdcc1a3929821ab14715ccfa15f9805b0f87ff9ef78ad0c7fd1b5b` (mtime 2026-09-17 01:19:14 +0200)                |
| **Article, released revision (the flip)**  | **`adc6a1a68cefac0e1ee0ec9e7cd705158e98d83ce9b4b430ad41523ceb709711`**                                              |
| Canonical asset (not touched by this card) | `docs/payload/payload-sensor-illustration.png` — `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67` |
| Release timestamp                          | 2026-09-17 10:36:17 CEST                                                                                            |
| Editor identity                            | `mars-ai-simulator-editor` (profile), card `t_5a62fb28`                                                             |
| Frontmatter added by the flip              | `publication: published`, `media: payload-sensor-illustration`, one `mediaAlt`, one `mediaLabel`                    |
| Diff size                                  | 1 file changed, 4 insertions, 1 deletion — frontmatter only, no body change                                         |

## Public surface at flip time — the artwork was already fetchable, verified

Measured by me from outside the host at 10:38 CEST (a direct `curl` is refused by this session's
command scanner, so the check ran as an in-page `fetch` on the live origin with `crypto.subtle`
hashing — same bytes, same digest):

| Surface                                          | Result                                                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `/_astro/payload-sensor-illustration.<hash>.png` | **200**, `image/png`, 1,402,406 bytes, SHA-256 `8839f66a…` — byte-identical to the editor-approved export |
| `/news/002-payload-selection/`                   | **404** (correct: the article was still `draft` in the deployed build)                                    |
| `/news/` and `/`                                 | 200; **0** references to the asset, **0** to the slug; the only news link on either page is article 001   |

The dev card `t_4b49346b` reported this, and the measurement above confirms it independently.
Cause: a media key's asset is statically imported in `website/src/lib/assets.ts`, so Astro emits it
into `dist/_astro/` even when no route renders it; commit `4a66a69` was pushed at ~10:33 CEST, and
by the human instruction recorded in `73b1fd6` a push to `main` **is** the automatic Workers Build
deploy — so the artwork reached the live site before the article did.

**Editorial judgement, because the operator asked for one: this is not a blocker for the release,
and it is not a release.** The image is editor-approved (`t_327899d5`); it carries no gated text
marker in its filename, alt text or label; it depicts no vehicle, hardware, launcher, landing area,
date or coordinate, and names no real agency; it is unlinked from every live page; and its URL is
content-hashed and unguessable in practice. It publishes nothing withheld. The one consequence that
belongs on the record is that observation 4 below moved from "a precondition for public use" to
"already on a public surface" — the asset can now be fetched by anyone, so the licensing record is
live work rather than a gate this release waits behind.

Whether a media key's asset should stay un-emitted until an article names the key is a
**registry-architecture** decision, not an editorial one, and not this card's to make. The board
already carries the question: `t_70d50bd3` ("Site: an unpublished step's media asset is emitted into
dist and served…"). Recommend folding the fetchable-before-release case into that card rather than
opening a new one.

## Verification performed by this card — read-only, measured

No build was run. `website/scripts/check-dist.mjs` **prunes** offending files from `dist/` when it
fails, so a release card must not run the build or the postbuild guard to check a change it is
handing to the build card; `dist/` here is a freshly emitted tree (10:32:20 CEST) owned by the dev
card's chain. Instead the flip was validated against the real schema module the build uses:

A scratch Node script outside the repository (`/tmp/rh_002_release_check.mjs`, so the tree gains no
new file) parses the article frontmatter with the same YAML parser the content pipeline resolves
(`js-yaml` from `website/node_modules`) and calls `newsMediaIssues()` imported from
`website/src/lib/media.ts` — the module `src/content.config.ts` loads in its `superRefine`.

| Check                                                                        | Result        |
| ---------------------------------------------------------------------------- | ------------- |
| `publication` is `published`                                                 | PASS          |
| `media` is `payload-sensor-illustration` (the key that exists)               | PASS          |
| `mediaAlt` equals the approved alt text byte-for-byte (272 chars both sides) | PASS          |
| `mediaAlt` is a single entry, matching `altCount: 1`                         | PASS          |
| no `mediaCaption` present, matching `captionCount: 0`                        | PASS          |
| `mediaLabel` present and equal to the approved label                         | PASS          |
| `newsMediaIssues()` returns **no** issues for this frontmatter               | PASS (`[]`)   |
| `title` unchanged at the editorially approved string (Gate 4)                | PASS          |
| no `author` field invented                                                   | PASS          |
| `category`, `status`, `summary`, `linkLabel`, `order`, `accent` untouched    | PASS          |
| every schema-required field present                                          | PASS          |
| no gated text marker in the article file                                     | PASS (0 hits) |
| no gated text marker in the new alt text or label                            | PASS (0 hits) |

13 of 13 checks pass. The alt text is 272 characters — see the observation below.

## Observations — recorded, none blocking this release

1. **Alt-text length against the SEO package's guidance.** `.agents/work/seo/002-payload-selection.md`
   §8 asks for "roughly ≤160 characters" per alt entry; the approved alt is 272. The SEO package's
   media table also predates this key (it describes the two keys that existed then) and states a
   future illustration "needs a site change before any frontmatter can use it" — which is what
   `t_4b49346b` did. The wording applied is the one the editor signed off at `t_327899d5`, verified
   against the pixels; shortening an approved alt is an editorial act needing a fresh sign-off, and
   an accessibility-adequate description is not automatically a short one. **Owner:** the human or
   `mars-ai-simulator-editor` on a new card, if a stricter length is wanted.
2. **A known test condition the build card must not read as a release regression.**
   `website/public/googlef5c43421bd049659.html` (the human's search-console verification file) is
   present, and `listRoutes()` counts `website/public/` passthrough files, so the `route identity`
   assertion in `website/test/guards.test.mjs` ("gives every generated route a distinct, non-empty
   title") fails on that file's prescribed content — a condition diagnosed and owned by card
   `t_2d243ea8`, not caused by this flip. `npm run build` and postbuild `check-dist` both exited 0
   with it present on the media-key card. **Owner:** `t_2d243ea8`.
3. **Label chip width.** `Red Horizon // payload sensor illustration` is 43 characters against 32
   for the existing identity label, so the card chip is wider than any precedent. It is not
   measurable until the card renders — verify it in the dev card's build. A shorter string would be
   an implementation detail needing one editor line, not a re-gate. **Owner:** `t_b429a50d`, then
   the editor if it needs shortening.
4. **Rights — now live, not just a precondition.** The local model files' licences and their terms
   on generated output are recorded nowhere in the repository, and `tools/visual-generator/LICENSE`
   explicitly grants no rights to third-party models or generated content. This was a precondition
   for public use; since the artwork is already fetchable (see the section above) it is now live
   work. No agent should settle the licensing position by assumption. **Owner:** human story owner,
   with `mars-ai-simulator-visuals` recording the citations.
5. **`docs/README.md` dossier row** for the new `docs/payload/` tree, owed under that file's own
   rule once the tree changes. No card exists and no documentation profile is on this board.
   **Owner:** the planner.
6. **Six dev cards were running in this same checkout while the flip was applied** (board probe at
   10:44 CEST: `t_4383dbcc`, `t_2d243ea8`, `t_704ceab5`, `t_a5abca85`, `t_dd78c8e6`, plus this
   card), and the dev role commits and pushes its own card's scoped change. A card that staged
   `website/news/**` or pushed the whole tree would carry this flip to `main` and publish the
   article before `t_b429a50d` runs its build proof. That would not be unapproved — Gate 2 is
   recorded — but it would publish without the build/route/listing/guard proof this chain expects.
   Nothing in this card regenerates `dist/` or commits; **Owner:** `t_b429a50d` should claim
   promptly, and any dev card touching `website/` should keep to `AGENTS.md`'s rule of staging only
   the paths its own card touched.

## Release mechanism, re-read at flip time

The released-slug list is retired. Commit `2d9ee0d` removed `website/src/lib/releases.ts`;
`website/src/lib/publication.ts` (`isPublishedEntry`, `selectPublicNews`) and
`website/src/features/news/query.ts` (`getPublishedNews()`) make the frontmatter `publication`
field the single predicate for the listing, the card **and** `getStaticPaths`, so a published item
cannot be listed without also being openable. The frontmatter flip applied above is therefore both
necessary and sufficient for publication; there is no second list to update. Earlier upstream
handoffs that told a worker to "record an entry in `website/src/lib/releases.ts`" name a file that
no longer exists — superseded, not broken.

## What remains outstanding after this card

1. **`t_b429a50d` (dev) — build, route, listing, card image + alt, guard proof, then commit and
   push.** Its push is the publication step (automatic Workers Build). It is gated on this card
   (now satisfied) and on `t_183d9f11`, which is already `done`. Note for that card: the
   **artwork** is already being served from `/_astro/` by the pre-flip deploy (see the measured
   section above), and only the **article** is newly public with this flip — so its
   `/news/002-payload-selection/` route check is still a real first-time check, while the asset URL
   is not new.
2. The rights item (observation 4) — now live, because the illustration is already fetchable.
3. The `docs/README.md` dossier row (observation 5).
4. The fetchable-before-release architecture question (observation in the measured section) —
   `t_70d50bd3`.
5. Human canon/release approval is **recorded** for this article; a production deploy action still
   belongs to no agent. The public-use sign-off on the derived transparent mark is a separate,
   still-open human item (`docs/brand/BRAND.md`, "Publication boundary").

## Inputs this release rests on

- Research: `.agents/work/sources/002-payload-selection.md`
- Draft: `website/news/002-payload-selection.mdx`
- SEO: `.agents/work/seo/002-payload-selection.md`
- Assets: `.agents/work/assets/002-payload-selection/assets.md` (SHA-256 `6ee80707ba7f1f35d223a3fe86019d6a6e599cd1dbeb560831281f3d46ef81bf`)
- Continuity: `.agents/work/continuity/002-payload-selection.md` — `continuity clear`
- Editorial: `.agents/work/reviews/002-payload-selection.md` — `approved`, cards `t_0f626603` / `t_ff937d33`
- Media sign-off: `.agents/work/reviews/002-payload-selection-media.md` — `approved`, card `t_327899d5`
- Media key: `website/src/lib/media.ts`, `website/src/features/news/media.ts`, `website/src/lib/assets.ts` — card `t_4b49346b` (commit `4a66a69`)

## Confidentiality check on this record and on the released article

- Gated material is named **by location, not by value**: withheld directory names as the list in
  `website/scripts/guards.mjs` (`gatedDirectoryNames`), the withheld text markers as
  `gatedTextMarkers` in the same file, and the plate key released for article 001 only as the key in
  `src/lib/media.ts`. No withheld marker, dossier name, coordinate, landing-area name or date is
  written here as a value, and none appears in the released filename, label or alt text.
- The released article file was scanned for all four `gatedTextMarkers`: **0 hits**. The flip adds
  no prose, so no unreleased timeline material enters the public surface through it.
- The public surface was checked live, not only in the tree: the served asset, the two listing
  routes and the 404 detail route carry **0** references to the slug and **0** to the asset, and the
  served asset's filename, label and alt text carry no gated marker. The withheld Asteria Field
  plate key is named here only as "the key in `src/lib/media.ts`", never by value.
- No `docs/` file was written by this card, and no canon was authored. `docs/` was read only.

## Revision history of this record

| Revision                     | SHA-256                                                            | Author                                                | What moved                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — planner placeholder      | `dd7e60efc2c89ee70a93b98136c4593eea2cbceebe4af22d6446b2ddd8eb0e75` | `mars-ai-simulator-planner` (`t_9466382f`)            | gate template with `circle one` placeholders and the superseded Asteria Field media-key instruction                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2 — blocked                  | `57758defe622d4e9055dbe653281b58fb90d14689d654bd44052abd822cf72b7` | `mars-ai-simulator-editor` (`t_5a62fb28`, first run)  | all four gates recorded as **not recorded**, with the evidence; fail-closed state verified in fact; media-key instruction corrected; release change prepared but **not applied**; release mechanism moved to the post-`2d9ee0d` model                                                                                                                                                                                                                                                                      |
| 3 — this revision (released) | recorded on card `t_5a62fb28` (self-embedding is impossible)       | `mars-ai-simulator-editor` (`t_5a62fb28`, second run) | flip **applied**: `publication: published` + the `payload-sensor-illustration` media fields; gate ledger final with the recorded sentences **and a sentence-fidelity note** (only Gate 2 arrived verbatim; Gates 1/3/4 in the human's own words); read-only 13-check schema validation; **measured live-surface check** (artwork already served, article 404 before the flip); the prepared change superseded by the applied diff; deploy mechanism stated as automatic on push; observations 1–6 recorded |

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
`docs/brand/BRAND.md`. The editorial and media verdicts are gates, not releases; the human canon
and release approval for this article is recorded on card `t_5a62fb28` and is what licensed the
flip above._
