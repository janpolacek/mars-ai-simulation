# Editorial review: wiki-rh-01-pathfinder

Card: `t_d6ec1166` (Editorial final gate: wiki-rh-01-pathfinder). Role: `mars-ai-simulator-editor` (merged
continuity + editorial + release authority).
Mission-timeline step: **`003-vehicle-design`**. Package: `website/wiki/rh-01-pathfinder.mdx`, route
`/wiki/vehicle/rh-01-pathfinder/`, `publication: draft` at review time.
Review recorded **2026-09-17 20:25 CEST**.

**Final status: `approved`** — with the release decision in §"The release decision" below.

Companion continuity verdict: `.agents/work/continuity/wiki-rh-01-pathfinder.md` (`continuity clear`, same
bytes).

## Inputs

| Input                                    | Path / value                                                                                                                                             |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page under review                        | `website/wiki/rh-01-pathfinder.mdx` — 9,311 B, sha256 `5bd37229282da26433ba0ebcb308958d03d92bd3de1d1f0b384f029ae5e5d813`, mtime 2026-09-17 20:12:09 CEST |
| Brief                                    | `.agents/work/briefs/wiki-content-plan.md`                                                                                                               |
| Source pack                              | `.agents/work/sources/wiki-rh-01-pathfinder.md` (6,833 B; exists — see note N-5)                                                                         |
| SEO package                              | `.agents/work/seo/wiki-rh-01-pathfinder.md`                                                                                                              |
| Asset manifest (reuse only)              | `.agents/work/assets/wiki-rh-01-pathfinder/assets.md` (29,870 B, sha256 `1a02b50d…`)                                                                     |
| Canonical dossier (released at step 003) | `docs/vehicles/pathfinder/VEHICLE.md`                                                                                                                    |
| Released articles                        | `website/news/001…004-*.mdx` (all `publication: published`)                                                                                              |
| Scenario / milestone table               | `docs/SCENARIO.md` (cited, not amended)                                                                                                                  |
| Skills applied                           | `editorial-review`, `copy-editing`, `brand-voice`, `article-drafting` §Reference entry (wiki)                                                            |

Assumptions: the page's own bytes are the package (its frontmatter flip is the build card's action); the
shared checkout is edited concurrently, so every reading below was re-taken at verdict time; the live origin
`https://mars-ai-simulation.janpolacek.workers.dev` is the authoritative released surface, not the local
`website/dist/`.

## Review table

| #  | Check                                                     | Verdict                   | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | --------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Citations — every material claim traces to released canon | **PASS**                  | 25-claim trace in the continuity record §3, each against `docs/vehicles/pathfinder/VEHICLE.md` and the article that released it. No claim traces to nothing; no canon question left open.                                                                                                                                                                                                                                                                                                                                                                                          |
| 2  | Links resolve                                             | **PASS**                  | Two anchors, `/news/003-vehicle-design/` and `/news/002-payload-selection/`, both published and both live (200, 11,380 B measured for the first; the second routes). No link into an unpublished route, no `docs/` link, no `docs/timeline/` reference.                                                                                                                                                                                                                                                                                                                            |
| 3  | Coherence — structure, register, internal consistency     | **PASS**                  | Subject-heading-led: `Identity`, `Visual identity and silhouette` (+ six H3s), `Science and operations`, `Relationship to the mission`. No H1 in the body (the layout renders it). No contradiction between sections. One near-duplicate sentence recorded as note N-1 (non-blocking).                                                                                                                                                                                                                                                                                             |
| 4  | Voice, grammar, clarity (`copy-editing` + `brand-voice`)  | **PASS**                  | Informed, composed, specific, modest. No grandiosity, no marketing language, no unearned certainty, no unsupported superlative. No acronym used. Paragraphs are scannable; proper names and in-universe terms preserved. No unexplained value.                                                                                                                                                                                                                                                                                                                                     |
| 5  | Wiki voice rule (reference entry, not news)               | **PASS**                  | No news lead / inverted pyramid, no "has been selected" framing, no dateline, no attribution, no "recently / latest / now / this week / this year", no "will soon / is expected to" (measured: zero hits). Nothing is dated; the page describes what the vehicle _is_.                                                                                                                                                                                                                                                                                                             |
| 6  | Image placement                                           | **PASS**                  | `media: vehicle-references` → one plate → the single lead-figure branch of `website/src/pages/wiki/[section]/[slug].astro:64-75` (`isPlateSet()` is `plates.length > 1`, `src/features/news/plates.ts:67-69`), not the `MediaPlates` block. One plate only; nothing imports the dossier's other four renders or the withheld scene image.                                                                                                                                                                                                                                          |
| 7  | Alt text — contract and fidelity to the pixels            | **PASS**                  | One `mediaAlt`, 451 bytes/chars, ASCII, sha256 `06501e8ff6a463e2f1307f4290e0ebcc60e0a193805d2d25a9894cc5ee6eda3e`. My own vision read of `canonical.png` confirms every cue at the position the string names: warm-white body, dark instrument deck, open-mesh wheels on visible articulated suspension, short central stereo mast with two dark lenses, one front arm nested in a recessed cradle, neutral white background, faint grounded shadow, no rocks / soil / astronaut / captions / overlay. The six-wheels-five-visible nuance is ruled on in the continuity record §8. |
| 8  | Caption / label                                           | **PASS**                  | `captionCount: 0` and `requiresLabel: false` for the key, and the page declares neither — the figure renders image-only, and `set.provenance` is not printed for a single-plate key in any case (`src/features/news/media.ts:75-77`). Nothing is stated around the image that is not the alt text.                                                                                                                                                                                                                                                                                 |
| 9  | Metadata and schema                                       | **PASS**                  | The real `newsMediaIssues(frontmatter)` returns `[]` against `website/src/lib/media.ts`. `title`, `section: vehicle` (a member of `wikiSections`), `publication: draft`, `order: 1`, `summary` all satisfy the wiki schema (`website/src/content.config.ts:78-117`). No undeclared key.                                                                                                                                                                                                                                                                                            |
| 10 | Title length                                              | **PASS**                  | ``RH-01 Pathfinder`` = 16 chars; with the layout's `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Red Horizon` suffix = 30 chars (≤60). |
| 11 | Summary length                                            | **PASS**                  | 154 chars (≤155). It is a reference gloss of the subject, not a news standfirst. The brief's pinned 206-char summary is over budget and is not what the page carries — recorded, no action needed (N-2).                                                                                                                                                                                                                                                                                                                                                                           |
| 12 | Canonical / sitemap / JSON-LD                             | **PASS**                  | `SITE_URL` is unset, so `canonicalUrl()` returns `undefined` and no `<link rel="canonical">` is emitted; no sitemap is generated; zero `application/ld+json` scripts in the layout or the page. The page cannot be read as carrying a real publication date or a machine-readable date of any kind.                                                                                                                                                                                                                                                                                |
| 13 | Asset provenance by content hash                          | **PASS**                  | The plate in use is `docs/vehicles/pathfinder/canonical.png`, sha256 `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267`, 1,889,350 B, 1448 × 1086 — the hash the step-003 gate approved (`.agents/work/reviews/003-vehicle-design.md` §7). No re-export, crop or transparent variant is in use.                                                                                                                                                                                                                                                                    |
| 14 | Containment / confidentiality                             | **PASS**                  | Zero hits for the gated coordinate markers, `ariane`/launcher terms, four-digit years or month names, real-institution names, `docs/timeline`, performance figures, Asteria Field terms, or step-004/005 terms. The real `scanSourceForGatedReferences()` returns `[]`; `checkDist()` over `website/dist/` returns `[]`. Full table in the continuity record §5.                                                                                                                                                                                                                   |
| 15 | Published surface at review time                          | **PASS**                  | Live origin: `/wiki/vehicle/rh-01-pathfinder/` → **404**, `/wiki/vehicle/` → 404, `/wiki/` → the empty 4,599 B index with no mention of the slug, `/news/003-vehicle-design/` → 200. The fail-closed state is measured in fact, not asserted from `publication: draft`.                                                                                                                                                                                                                                                                                                            |
| 16 | Simulated record date                                     | **N/A — none exists**     | The wiki schema has no `simulatedDate` field (`website/src/content.config.ts:78-117`); the wiki voice rule forbids presenting one, and the card body states the same. No value is assigned, and none may be added — an undeclared key is a build failure, not a harmless extra. See §"The record date" below.                                                                                                                                                                                                                                                                      |
| 17 | Fiction / AI-assisted disclosure                          | **PASS**                  | Closing paragraph states the programme is fictional and AI-assisted, the vehicle is fictional and described from the programme's dossier, the studio reference is illustrative artwork and not mission photography, and no real space agency is named or implied. The alt text repeats the disclosure.                                                                                                                                                                                                                                                                             |
| 18 | Path convention for this graph                            | **PASS — flat**           | The page is `website/wiki/rh-01-pathfinder.mdx`; `section: vehicle` in frontmatter yields `/wiki/vehicle/rh-01-pathfinder/`. The card body's nested path would break the build (glob loader id `vehicle/rh-01-pathfinder` → `/wiki/vehicle/vehicle/…`, `TypeError: Missing parameter: section`). Flat is the convention for later wiki pages too.                                                                                                                                                                                                                                  |
| 19 | Build-surface checks                                      | **Deferred, named owner** | Route 200, rendered title/summary, emitted derivative, guard over served bytes and the post-flip `dist/` scan belong to the build card `t_cac9c84e`. This review does not claim them, and deliberately ran no build (a build here would prune the shared `dist/`).                                                                                                                                                                                                                                                                                                                 |

No row failed. No material factual, accessibility, licensing or coherence failure remains, so no corrective
card is raised and no row blocks the release.

## The release decision

**Release decision (this role's own sentence, `mars-ai-simulator-editor`, 2026-09-17 20:25 CEST):** the wiki
reference page `website/wiki/rh-01-pathfinder.mdx` at sha256
`5bd37229282da26433ba0ebcb308958d03d92bd3de1d1f0b384f029ae5e5d813` (9,311 B) is **confirmed against released
canon** — `docs/vehicles/pathfinder/VEHICLE.md`, released at step `003-vehicle-design`, and articles 001–004 —
and is **released for publication** at `/wiki/vehicle/rh-01-pathfinder/`, subject to conditions C-1 and C-2
below. This decision **is** the page's `publication: published` flip; the build card `t_cac9c84e` applies it,
and no separate human approval sentence is required (2026-09-17 authority change). The card-body approval
templates are therefore **unapplied** and must not be read as a decision.

**Exact public scope of this release:**

| Element                  | Value                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                    | `/wiki/vehicle/rh-01-pathfinder/` (new; currently 404 on the live origin)                                                                                                                                                                                                                                                                    |
| Body bytes released      | `website/wiki/rh-01-pathfinder.mdx`, sha256 `5bd37229…`, 9,311 B — the whole file: frontmatter (title, section, publication, order, summary, canonicalDocs, related, media, mediaAlt) and all 145 lines of body                                                                                                                              |
| The one frontmatter flip | `publication: draft` → `publication: published`. Exactly +4 bytes (`draft` → `published`); 9,311 B → **9,315 B**; the expected post-flip hash is **`edfbddec8fe98f72ac2dc6582c934c0d6c0a44fb47924acfeaa4c409a1b914b5`** (reconstructed in this pass). No other frontmatter edit, and no `simulatedDate`.                                     |
| Plate                    | `docs/vehicles/pathfinder/canonical.png`, sha256 `8dbb33d5…`, 1,889,350 B, 1448 × 1086 — already public through article 003; this page adds no new exposure of the plate bytes.                                                                                                                                                              |
| Emitted derivative       | The wiki leaf's own `<Image … width={1024} format="webp" loading="eager" />` derivative in `website/dist/_astro/`: a new file (article 003's is the 1152-wide `canonical.C1rFlAX3_12caC6.webp`, 57,342 B, sha256 `10d55484…`, live and unchanged by this page). The build card records the emitted file's exact name, byte count and sha256. |
| Alt text                 | 451 bytes, ASCII, sha256 `06501e8f…`, verbatim from frontmatter; no caption, no label.                                                                                                                                                                                                                                                       |
| Index/section surfaces   | The page's entry in `/wiki/` and in `/wiki/vehicle/` (section label `Vehicles`), and its position by `order: 1`.                                                                                                                                                                                                                             |
| Record date              | **None.** The wiki collection has no record-date field and the page presents no date (see below).                                                                                                                                                                                                                                            |

## The record date

No simulated record date is assigned, and none may be: the wiki schema (`website/src/content.config.ts:78-117`)
declares no date field, the `article-drafting` wiki voice rule states that a wiki page is not "written on" a
date, and the card body records the same. This is not a milestone gap to fill later — the page's public
surface must carry no date at all. The published-surface consequence is checked rather than assumed: no
four-digit year, no month name, no "as of"/"in [year]" construction appears anywhere in the file, and the
layout emits no `datePublished` and no `lastmod` (no JSON-LD, canonical suppressed, no sitemap — row 12).

## Conditions attached to the release

- **C-1 — one-line flip, hash-anchored.** The build card applies exactly the `publication: draft` →
  `published` line and nothing else, and only while the page still hashes to `5bd37229…`. Any other movement
  of the file invalidates this decision and needs a re-read against the moved bytes. Expected result:
  9,315 B, sha256 `edfdec…` (full hash above).
- **C-2 — the `docs/vehicle/ → docs/vehicles/` split (carried finding F3).** The page's `canonicalDocs:`
  string and the media registry's import both name the post-split path. The split is staged (`R100`) but
  uncommitted, so the build card must confirm at build time that `docs/vehicles/pathfinder/canonical.png`
  resolves on disk, and must report the live path-vs-string state in its handoff. If the split were reverted
  before the flip, the media import — not the metadata string — is what would break the build; the fix is to
  land the split with the page, never to edit the page's path back.
- **C-3 — no build by this card, and none in the shared checkout for verification.** This gate ran no build
  (the postbuild guard prunes the shared `dist/`); the build card owns build, guard, tests and the built
  surface. Stated so a later reader does not read the missing build here as an omission.

## Editorial notes (non-blocking, recorded so a later reader does not re-litigate them)

- **N-1 — one repeated sentence.** "Mobility exists to put instruments in front of the right ground"
  (`:132`) and "to place the mission's measurements in front of the right ground" (`:137-138`) say the same
  thing twice. A reference page may carry it as a refrain; it is a copy-editing nicety, not a defect, and
  changing it would change the page hash for no editorial gain. Recorded only.
- **N-2 — summary shorter than the brief's pinned deck.** The brief pinned a 206-char summary; the page
  carries a 154-char gloss, which is what the ≤155 budget allows. The shorter form is the correct one and is
  what the release covers.
- **N-3 — the SEO record's alt measurement is stale and internally inconsistent.** `.agents/work/seo/wiki-rh-01-pathfinder.md`
  §8 quotes the alt as 449 chars and states "measured length: 383 characters", while the file's string is
  **451** chars and differs from the quoted form by one word (`short central` → `a short central`). The
  difference is the file's post-SEO edit already carried as finding F1; the shipped artifact is unaffected, so
  no corrective card is raised. Owner of the record: the SEO role. This review's numbers supersede that row
  for anyone anchoring on it.
- **N-4 — `canonicalDocs` names the post-split path** while `docs/vehicle/` no longer exists on disk. Correct
  and intended (see C-2); recorded because a reader diffing against an older checkout will see the old path in
  a released article's history, not an error.
- **N-5 — the source pack post-dates the draft.** `.agents/work/sources/wiki-rh-01-pathfinder.md` (6,833 B,
  written 20:14) states that the writer was dispatched without it and traced claims to the dossier directly.
  It exists, so the operator's input requirement is met; but it is a restatement of the dossier rather than
  independent research, so this review traced every claim against `docs/vehicles/pathfinder/VEHICLE.md`
  itself, not against the pack.
- **N-6 — link label wording.** The page calls `/news/003-vehicle-design/` "the programme's vehicle design
  briefing"; the article's own `linkLabel` is "Rover design briefing". Both are accurate and in-voice;
  consistent enough that no change is warranted, recorded so the difference is a known one.

## Validation executed in this pass

| Check                                      | Method                                                                                      | Result                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Page bytes / hash / mtime at verdict       | `readFile` + `createHash('sha256')` + `stat` in a scratch script outside the repository     | 9,311 B, `5bd37229…`, mtime 2026-09-17T20:12:09+02:00                                  |
| Media contract against the real module     | imported `newsMediaIssues` from `website/src/lib/media.ts` over the page's real frontmatter | `[]`                                                                                   |
| Frontmatter parse (the pipeline's parser)  | `js-yaml` from `website/node_modules`, same loader the content layer resolves               | parses; all nine keys legal for the wiki schema                                        |
| Alt text byte fidelity                     | byte length + sha256 + ASCII test                                                           | 451 B, 451 chars, ASCII, `06501e8f…`                                                   |
| Withheld-token scan (15 families)          | scratch scanner over the whole file (frontmatter + body)                                    | clean, except benign substrings and two required negations (continuity record §5)      |
| Source-tree guard                          | real `scanSourceForGatedReferences()` from `website/scripts/guards.mjs`                     | `[]`                                                                                   |
| Build-output guard (read-only, no pruning) | real `checkDist()` over `website/dist/`                                                     | `[]`                                                                                   |
| Route inventory (local)                    | real `listRoutes()`                                                                         | 10 routes; no `rh-01-pathfinder` string anywhere in `dist/`                            |
| Test suite                                 | `npm --prefix website test` (vitest)                                                        | 14 files, **153 tests passed**                                                         |
| Live origin fail-closed state              | in-page `fetch(…, {cache:'no-store'})` + `crypto.subtle` digest on the production origin    | page route 404, `/wiki/` empty index 4,599 B, `/news/003-vehicle-design/` 200 11,380 B |
| Live plate derivative                      | same method                                                                                 | article 003's `canonical.C1rFlAX3_12caC6.webp`, 200, 57,342 B, `10d55484…`             |
| Plate provenance                           | `sha256sum` of the file in use                                                              | `8dbb33d5…` = the step-003 approved hash                                               |
| Flip reconstruction                        | reverse-applied the authorised four-byte change and hashed the result in the scratch script | 9,315 B, `edfdec…` (recorded as the build card's expected post-flip hash)              |
| Image fidelity                             | vision pass over `docs/vehicles/pathfinder/canonical.png`                                   | every alt cue confirmed at the position it names; five of six wheels visible           |

Hygiene of this card: no `website/` edit, no frontmatter flip, no build, no commit, no push, no deploy, no
publication, no `docs/` edit, no canon written. Scratch files live outside the repository at
`/tmp/wiki-veh-gate/`.

## Outstanding, and next owner

- **Build card `t_cac9c84e` (`mars-ai-simulator-dev`)** — apply the flip under C-1, land it with the split
  under C-2, then measure and report the built surface (route 200, rendered title/summary, emitted derivative
  name + bytes + sha256, guards, tests, live origin). It is serialised behind the wiki-asteria-field deploy
  card and must not run while another `website/` card is live.
- **SEO role** — N-3: re-measure the alt/summary row in `.agents/work/seo/wiki-rh-01-pathfinder.md` if that
  record is ever cited as a measurement source again. Not blocking; no card raised.
- **Hotspot** — `website/wiki/rh-01-pathfinder.mdx` (and the sibling wiki pages) is the file two more wiki
  chains will touch; the flat-path convention and this page's hash are the anchors later passes should use.

This review's status is final for the bytes it names. A later pass on different bytes supersedes it and must
record the superseded hash here.
