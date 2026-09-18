# Editorial review: wiki-asteria-field

Card: `t_06da3c70` (Editorial final gate: wiki-asteria-field). Role: `mars-ai-simulator-editor` (merged
continuity + editorial + release authority).
Mission-timeline step: **`003-vehicle-design`**. Package: `website/wiki/asteria-field.mdx`, route
`/wiki/area/asteria-field/`, `publication: draft` at review time.
Review recorded **2026-09-17 21:02 CEST**.

**Final status: `approved`** — with the release decision in §"The release decision" below.

Companion continuity verdict: `.agents/work/continuity/wiki-asteria-field.md` (`continuity clear`, same
bytes).

## Inputs

| Input                                  | Path / value                                                                                                                                          |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Page under review                      | `website/wiki/asteria-field.mdx` — 8,739 B, sha256 `fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed`, mtime 2026-09-17 20:11:01 CEST |
| Brief                                  | `.agents/work/briefs/wiki-content-plan.md` (`88960d83…`)                                                                                              |
| Source pack                            | `.agents/work/sources/wiki-asteria-field.md` (7,995 B, `c781b001…`) — exists; lands after the draft (§Notes N-1)                                      |
| SEO package                            | `.agents/work/seo/wiki-asteria-field.md` (10,979 B, `b8a97265…`)                                                                                      |
| Asset manifest (reuse only)            | `.agents/work/assets/wiki-asteria-field/assets.md` (32,247 B, `b13f6859…`)                                                                            |
| Canonical dossier (partially released) | `docs/area/AREA.md` (23,948 B, `53bc13f2…`)                                                                                                           |
| Releasing article                      | `website/news/001-project-announcement.mdx` (`published`, `simulatedDate: 2026-10-12`, `923a12d8…`)                                                   |
| Scenario / release controls            | `docs/SCENARIO.md` (`99206373…`), §Launch and mission dates `:173-212`; wiki area-page exception `:279`                                               |
| Skills applied                         | `editorial-review`, `copy-editing`, `brand-voice`, `article-drafting` §Reference entry (wiki)                                                         |

Assumptions: the page's own bytes are the package (its frontmatter flip is the build card's action); the
shared checkout is edited concurrently, so every reading below was re-taken at verdict time; the live origin
`https://mars-ai-simulation.janpolacek.workers.dev` is the authoritative released surface, not the local
`website/dist/`.

## Review table

| #  | Check                                                     | Verdict                   | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -- | --------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1  | Citations — every material claim traces to released canon | **PASS**                  | The 20-row claim trace in the continuity record §4: each row resolves to article 001's published prose, to a dossier line the operator's Gate A answer covers, or to articles 002–003. No claim traces to nothing; the three items that rest on the dossier rather than the published text are reconciled explicitly in §5 of that record.                                                                                                                                                                                                       |
| 2  | Links resolve                                             | **PASS**                  | Five anchors: one internal `/news/001-project-announcement/` (published; live 200, 11,882 B) and four external research citations (Gazetteer, USGS SIM 3209, USGS SIM 3489, NASA Science resource). No link into an unpublished route, no `docs/` link, no `docs/timeline/` reference.                                                                                                                                                                                                                                                           |
| 3  | Coherence — structure, register, internal consistency     | **PASS**                  | Subject-heading-led: `Control record`, `The real region it sits in`, `Scenario boundary`, `Regional setting` (+ one H3), `Operational identity`, `Planning plates`, `Release boundary`. No H1 in the body (the layout renders the title). The two apparent tensions — the plates depicting what `## Release boundary` calls unreleased, and the `AF-` prefix on a revision label — are ruled on in the continuity record §7 (notes 2 and 3) and §5.                                                                                              |
| 4  | Voice, grammar, clarity (`copy-editing` + `brand-voice`)  | **PASS**                  | Informed, composed, candid, specific and modest. No grandiosity, no marketing language, no artificial urgency, no unearned certainty. No acronym is used and none is left unexplained. Paragraphs are scannable; proper names and in-universe terms are preserved. Fiction disclosure is stated in the body and never as a footnote.                                                                                                                                                                                                             |
| 5  | Wiki voice rule (reference entry, not news)               | **PASS**                  | No news lead / inverted pyramid, no "has been selected" or announcement framing, no dateline, no journalist attribution, no "recently / latest / now / this week / this year", no "will soon / is expected to" (measured: zero hits). Nothing is dated; the page describes what the region _is_, in a stable present. Structure is by subject headings, not by narrative chronology.                                                                                                                                                             |
| 6  | Image placement                                           | **PASS**                  | `media: asteria-plates` is a plate set (`plateCount: 3`), so the wiki leaf takes the `MediaPlates` branch (`src/pages/wiki/[section]/[slug].astro:77-84`), not the single-figure branch (`isPlateSet()` is `plates.length > 1`). Three plates render with the per-plate labels and the composed captions; nothing else is imported.                                                                                                                                                                                                              |
| 7  | Alt text — contract and fidelity to the pixels            | **PASS**                  | Three `mediaAlt` entries, all ASCII: 156 B `2a2a8cb0…`, 171 B `c8b0bab6…`, 150 B `d63c9245…`. My own vision pass over the three canonical plates (20:58 CEST) confirms every named cue: AF-01 a whole-planet Mars view with a target callout reading ASTERIA FIELD inside/near the MARGARITIFER TERRA label; AF-02 a regional envelope with coordinate ticks, five labelled terrain classes and a centre crosshair; AF-03 the local operations frame with its overlay set. No alt text enumerates a withheld value.                              |
| 8  | Captions and label                                        | **PASS**                  | Three `mediaCaption` entries (53 B `68554e75…`, 71 B `a16fd7be…`, 61 B `20d88d06…`) and one `mediaLabel` (54 B `a33257e9…`); the key requires all three (`captionCount: 3`, `requiresLabel: true`). The captions match the plates' own scale bars (planet scale; ≈200 km; 8 × 6 km at 1 km) and name no withheld fact. The label is byte-identical to article 001's. The registry provenance sentence and the plate-3 `captionNote` are printed by `plateFigures()`/`plateCaptionText()` and are deliberately not duplicated in the frontmatter. |
| 9  | Metadata and schema                                       | **PASS**                  | The real `newsMediaIssues()` (bundled from `website/src/lib/media.ts` with the project's own esbuild) returns `[]`; the wiki collection calls the same function in a `superRefine` (`src/content.config.ts:112-116`), so the contract is build-enforced. Frontmatter keys are exactly the ten the wiki schema declares — no undeclared key, and in particular no `simulatedDate` (row 16).                                                                                                                                                       |
| 10 | Title length                                              | **PASS**                  | `Asteria Field` = 13 chars; the layout composes `Asteria Field \| Red Horizon` = **27** chars (≤60). The leaf route passes `{title} \| {site.name}`.                                                                                                                                                                                                                                                                                                                                                                                             |
| 11 | Summary length and form                                   | **PASS**                  | 149 chars (≤155) — the page's meta description and its index deck. It is a reference gloss of the subject, not a news standfirst, and it keeps every fact. The brief's pinned 173-char string is over budget and is not what the page carries (the writer's trim is confirmed as the correct form, continuity record §8).                                                                                                                                                                                                                        |
| 12 | Canonical / sitemap / JSON-LD                             | **PASS**                  | `SITE_URL` is unset, so `canonicalUrl()` returns `undefined` and no `<link rel="canonical">` is emitted; no sitemap integration exists or is added; zero `application/ld+json` scripts in the layout or the page. The page cannot be read as carrying a real publication date or any machine-readable date.                                                                                                                                                                                                                                      |
| 13 | Asset provenance by content hash                          | **PASS**                  | The three plates in use are `docs/area/asteria-field-0{1,2,3}-*.png` at `f12c58f5…` / `25378457…` / `2890e343…` (2,333,852 / 3,311,859 / 3,492,102 B) — the hashes the article-001 release covers. No re-export, crop or transparent variant is in use. `docs/brand/BRAND.md` records the _identity mark_ only, so the article-001 record and the assets manifest are the approved-hash anchors for these plates.                                                                                                                                |
| 14 | Containment / confidentiality                             | **PASS**                  | Zero hits for the landing-design families (ellipse geometry, P0, science zones, hazards, traverse logic, `AF-H0/B1/C2/L3/E4`) in prose, alt text, captions or label; zero four-digit years, month names or "as of"; zero `ariane`/launcher terms; zero `docs/timeline` references; zero gated build markers. The real `scanSourceForGatedReferences()` returns `[]` and `checkDist()` over `website/dist/` returns `[]`. Full table in the continuity record §7.                                                                                 |
| 15 | Published surface at review time                          | **PASS**                  | Live origin: `/wiki/area/asteria-field/` → **404**, `/wiki/area/` → 404, sibling leaf routes 404, `/wiki/` → the empty 4,599 B index (sha256 `821a2d84…`) with no mention of the slug, `/news/001-project-announcement/` → 200. The fail-closed state is measured in fact, not asserted from `publication: draft`.                                                                                                                                                                                                                               |
| 16 | Simulated record date                                     | **N/A — none exists**     | The wiki schema (`website/src/content.config.ts:78-117`) declares no date field; the page carries none, by rule and by measurement (no four-digit year, no month name, no "as of"; `BaseLayout` emits no `datePublished`/`lastmod`/`<time>`). No `docs/SCENARIO.md` milestone line is drawn on, because none applies to a page that carries no date. See §"The record date".                                                                                                                                                                     |
| 17 | Fiction / AI-assisted disclosure                          | **PASS**                  | The word "fictional" appears in the summary, in two section headings' prose, in the label and in every alt text; the page states it is not an IAU-approved name, that no real agency endorsed or surveyed it and that no real institution is a partner. The plate provenance ("generated visualization … not orbital imagery") reaches the reader on every plate.                                                                                                                                                                                |
| 18 | Path convention for this graph                            | **PASS — flat**           | The page is `website/wiki/asteria-field.mdx`; `section: area` yields `/wiki/area/asteria-field/`. The nested path named in this card's body (and in the build card's) cannot route (glob id `area/asteria-field` → `/wiki/area/area/…`, `TypeError: Missing parameter: section`). Flat is the convention for later wiki pages.                                                                                                                                                                                                                   |
| 19 | Release-order effect                                      | **PASS with condition**   | The page states no fact that needs a later step, and the node's publication is the operator's Gate A answer (`SCENARIO.md:279`). The one order-sensitive item is _outside_ this page: the plates it carries also remain public via article 001, so no later flip can stale this page's claims. C-3 records the stale release-scope wording that must not be read as a blocker.                                                                                                                                                                   |
| 20 | Build-surface checks                                      | **Deferred, named owner** | Route 200, rendered title/summary, emitted derivative names/bytes/hashes, guards over the served bytes, the index and section listings, and the post-flip `dist/` scan belong to the build card `t_d05accab`. This review claims none of them and deliberately ran no build (a build here would prune the shared `dist/`).                                                                                                                                                                                                                       |

No row failed. No material factual, accessibility, licensing or coherence failure remains, so no corrective
card is raised and no row blocks the release. Two documentation-hygiene items are routed without blocking
(§"Outstanding, and next owner").

## The release decision

**Release decision (this role's own sentence, `mars-ai-simulator-editor`, 2026-09-17 21:02 CEST):** the wiki
reference page `website/wiki/asteria-field.mdx` at sha256
`fdc5a902865ef2d9d970b68b373201517ceaad560ed2123b251b55d0cec8eeed` (8,739 B) is **confirmed against released
canon** — article 001 (published, `simulatedDate: 2026-10-12`) with the values it published, articles 002–004,
the three plates AF-01/AF-02/AF-03 as released, and `docs/area/AREA.md` as the operator's Gate A answer
releases the `/wiki/area/` node at `docs/SCENARIO.md:279` — and is **released for publication** at
`/wiki/area/asteria-field/`, subject to conditions C-1 to C-5 below. This decision **is** the page's
`publication: published` flip; the build card `t_d05accab` applies it, and no separate human approval
sentence is required (2026-09-17 authority change, recorded on `t_9b2a308d` and in `SCENARIO.md:279`). Gate
C's withhold ("I approve on the release card when the page is ready") and consequence 2 of the operator's
gate comment are **superseded** by that authority change and are not applied. The card-body templates are
therefore **unapplied** and must not be read as a decision.

**Exact public scope of this release:**

| Element                  | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                    | `/wiki/area/asteria-field/` (new; 404 on the live origin at verdict time)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Body bytes released      | `website/wiki/asteria-field.mdx`, sha256 `fdc5a902…`, 8,739 B — the whole file: frontmatter (`title`, `section: area`, `publication`, `order: 1`, `summary`, `canonicalDocs`, `media`, three `mediaAlt`, three `mediaCaption`, `mediaLabel`) and all 120 lines of body                                                                                                                                                                                                                                                                            |
| The one frontmatter flip | `publication: draft` → `publication: published`. Exactly +4 bytes; 8,739 B → **8,743 B**; expected post-flip sha256 **`5ad75613b7529335d195efb6fb72161af778e15d87af1777bbdab0ca72b7bf9c`** (reconstructed in this pass, and reverse-proved back to `fdc5a902…`). No other frontmatter edit, and no `simulatedDate`.                                                                                                                                                                                                                               |
| Plates                   | `docs/area/asteria-field-01-mars-locator.png` `f12c58f5…`, `-02-regional-context.png` `25378457…`, `-03-local-operations.png` `2890e343…` — already public through article 001; the live origin already serves their 1152-wide derivatives (§"Validation"). The page adds no new exposure of the plate bytes.                                                                                                                                                                                                                                     |
| Emitted derivatives      | The wiki leaf renders `MediaPlates` (`width={1152}`, `format="webp"`), the same width and format article 001 uses, so the expected output is the three derivative files already live: `asteria-field-01-mars-locator.DGegv0O8_ZELxfV.webp` (81,000 B, `b95b7e49…`), `asteria-field-02-regional-context.gxqFQfZd_Z20s5M0.webp` (205,738 B, `deeafa96…`), `asteria-field-03-local-operations.Dw0Ze8o1_Z10x0xQ.webp` (415,150 B, `1beda1f7…`). The build card reports the names, byte counts and hashes it actually emits, and flags any _new_ file. |
| Alt text / captions      | Three alt strings (156 / 171 / 150 B, ASCII, hashes above), three captions (53 / 71 / 61 B), one label (54 B) — verbatim from frontmatter, with the registry provenance sentence and the plate-3 note composed onto each caption.                                                                                                                                                                                                                                                                                                                 |
| Metadata surface         | `title` "Asteria Field"; document title `Asteria Field \| Red Horizon` (27 chars); meta description = the 149-char summary; canonical suppressed; no JSON-LD; no sitemap entry.                                                                                                                                                                                                                                                                                                                                                                   |
| Index / section surfaces | The page's entry in `/wiki/` and in `/wiki/area/` (section label `Landing Zones`), at its `order: 1`.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Record date              | **None.** The wiki collection declares no date field and the page presents no date (§"The record date").                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## The record date

No simulated record date is assigned, and none may be: the wiki schema declares no date field, the
`article-drafting` wiki voice rule states that a wiki page is not "written on" a date, and the card body
records the same. This is not a milestone gap to fill later — the page's public surface must carry no date at
all. The consequence is checked rather than assumed: no four-digit year, no month name and no "as of"
construction appears anywhere in the file; the wiki leaf passes only `title` and `description` to
`BaseLayout`; and the head emits `description`, `generator`, `canonical` (suppressed) and `robots` only —
no `datePublished`, no `lastmod`, no `<time datetime>`, no structured data, no sitemap. `docs/SCENARIO.md`'s
milestone table is therefore not drawn on, and no `simulatedDate` line can be cited: the correct output here
is a stated absence.

## Conditions attached to the release

- **C-1 — one-line flip, hash-anchored.** The build card applies exactly the `publication: draft` →
  `published` line and nothing else, and only while the page still hashes to `fdc5a902…`. Expected result:
  8,743 B, sha256 `5ad75613…` (full hash in the scope table). Any other movement of the file invalidates this
  decision and needs a re-read against the moved bytes.
- **C-2 — the flip target is the flat path** `website/wiki/asteria-field.mdx`. Both this card's body and the
  build card's body name a nested `website/wiki/area/asteria-field.mdx` that does not exist and cannot route;
  the public URL is unchanged by the flat shape. Routed to the build card by handoff comment.
- **C-3 — the plate reuse rests on the operator's Gate A answer**, recorded at `SCENARIO.md:279`, not on a
  widened reading of `AREA.md:18-19` / `src/lib/assets.ts:59,65`, which still say "article 001 only" and are
  stale. The build card must not read those lines as a blocker and must not edit `docs/`. A reconciliation
  card is filed (see below).
- **C-4 — no build by this card, and the local `dist/` is not the live surface.** This gate ran no build (the
  postbuild guard prunes the shared `dist/`). The build card owns build, guards, tests, the built surface and
  the live measurement, and should report the authoritative live table rather than a local one.
- **C-5 — serialisation (observed; it binds the deploy, owner named).** The board carries the planner's full
  dev chain `t_1476a18c → t_d05accab → t_cac9c84e → t_23484bb2` (`task_links`, read directly at 21:06 CEST),
  so completing this gate does **not** promote the build card: it stays `todo` until `t_1476a18c`
  ("Publish the verified shared-checkout change set") completes, and `t_1476a18c` waits on `t_206bee14`,
  which is `blocked` on a human answer. The release itself is safe (`AGENTS.md` requires only that this
  recorded decision exists before the flip is pushed, and it now does); what the operator should see is that
  this page's deploy is chained behind an unrelated, human-blocked card. Shortening that chain is the
  planner's and the human's call, not this gate's.
  **Correction (21:06 CEST):** the first version of this condition stated that the edge was absent and that
  completing this card promoted the build card immediately. That was false — the edge exists — and it came
  from a board-read fault in this run (a nested `sqlite3` query on the same cursor truncated the parent list
  to one row). Corrected from a direct `task_links` read; see the revision history at the end of this record.

## Editorial notes (non-blocking, recorded so a later reader does not re-litigate them)

- **N-1 — the source pack post-dates the draft.** `.agents/work/sources/wiki-asteria-field.md` exists (7,995 B,
  mtime 20:23 CEST; the page is 20:11). It supplied the checklist the operator asked for, but it is a
  restatement of the dossier rather than independent research, and it carries two defects: its header
  paragraph lists the planning envelope and the local operations frame among withheld material while its own
  table marks both released by article 001 (`:55-56`) — the table is right; and its table cites article 001 as
  the release of "Working revision: AF-0.2", which article 001 does not carry — that value is cleared on the
  Gate A grant instead. No shipped artifact depends on the pack's prose, so no corrective card is raised;
  owner of the record: the research role (planner). This review traced against `docs/area/AREA.md` itself.
- **N-2 — the page carries dossier prose beyond article 001's published text.** Three items plus two
  sentences: the `AF-0.2` revision label, the regional-setting arrangement, the evidence classes' descriptive
  detail and test rationale, and the "chain of evidence rather than a discovery" framing. Continuity record §5
  reconciles the brief's narrower "may use only" line and `AREA.md:18-19` against the later, controlling
  `SCENARIO.md:279` exception and clears them; nothing on the withhold list is stated, and the same regional
  content is already depicted by the publicly released plates. Recorded because the reconciliation is the
  gate's own judgement, not a fact the page establishes.
- **N-3 — `## Release boundary` reads against the page's own plates.** The sentence calls landing-site
  geometry and surface-operations planning "not released material" while AF-03 visibly prints the ellipse, P0,
  the science points and the hazards. It is a statement about text, it names no withheld value, and the plates
  are public by the H1 option-i decision. Ruled a pass (continuity record §7, note 2); no wording change, since
  a change would move the page hash for no factual gain.
- **N-4 — the alt/caption wording differs from article 001's.** Deliberate per the assets manifest and passed
  by SEO; my vision pass confirms each string against the pixels. The differing strings are the shipped ones
  and need no change (continuity record §8, F4).
- **N-5 — the section label is `Landing Zones`**, the human story owner's settled term for `area`
  (`website/src/lib/wiki-query.ts:66-70`, settled 2026-09-17). The page inherits it in the breadcrumb and the
  section index; nothing in the page contradicts it.
- **N-6 — a sibling writer card is live in the shared checkout.** `t_98e891c8` (writer, homepage roadmap round
  3) was `running` throughout this pass, writing `.agents/work/drafts/…` and later `website/src/…` strings. It
  cannot touch `website/wiki/`; the page hash and every gate input were re-measured after the pass began and
  were unchanged (continuity record §1).

## Validation executed in this pass

| Check                                      | Method                                                                                                                         | Result                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Page bytes / hash / mtime at verdict       | `readFileSync` + `createHash('sha256')` + `stat` in a scratch script outside the repository                                    | 8,739 B, `fdc5a902…`, mtime 2026-09-17T20:11:01+02:00                                                                     |
| Media contract against the real module     | `newsMediaIssues()` bundled from `website/src/lib/media.ts` with the project's esbuild, run over the page's parsed frontmatter | `[]`; `mediaAlt` 3, `mediaCaption` 3, `mediaLabel` present                                                                |
| Frontmatter parse (the pipeline's parser)  | `js-yaml` from `website/node_modules`, the loader the content layer resolves                                                   | parses; exactly the ten keys the wiki schema declares; no `simulatedDate`                                                 |
| String fidelity                            | byte length + sha256 per public string                                                                                         | title 13; summary 149; label 54; alt 156/171/150 (ASCII); caption 53/71/61                                                |
| Withheld-token scan (17 families)          | scratch scanner over the whole file (frontmatter + body)                                                                       | clean, except released/negated `sulfate` and the citation/denial agency names (continuity record §7)                      |
| Source-tree guard                          | real `scanSourceForGatedReferences()` from `website/scripts/guards.mjs`                                                        | `[]`                                                                                                                      |
| Build-output guard (read-only, no pruning) | real `checkDist()` over `website/dist/`                                                                                        | `[]`                                                                                                                      |
| Route inventory (local)                    | real `listRoutes()`                                                                                                            | 10 routes; no `/wiki/area/…` route and no `asteria-field` route string                                                    |
| Test suite                                 | `npm --prefix website test` (vitest)                                                                                           | 14 files, **153 tests passed**                                                                                            |
| Plate provenance                           | `sha256sum` of the three files in use                                                                                          | `f12c58f5…` / `25378457…` / `2890e343…` — unchanged, matching the article-001 release                                     |
| Alt text vs the pixels                     | `vision_analyze` over the three canonical plates, 20:58 CEST                                                                   | every named cue confirmed; AF-02 prints the envelope, ticks and five terrain-class labels; AF-03 prints the overlay set   |
| Live fail-closed state                     | in-page `fetch(…, {cache:'no-store'})` + `crypto.subtle` digests over `arrayBuffer()` bytes                                    | page route 404, `/wiki/area/` 404, `/wiki/` empty index 4,599 B, `/news/001-project-announcement/` 200                    |
| Plate derivatives already live             | same method over the four `img src` values on the live article 001                                                             | three plate derivatives 200 / 81,000 / 205,738 / 415,150 B with the hashes in the scope table                             |
| Flip reconstruction                        | forward-applied the authorised four-byte change and hashed the result; reverse-applied and re-hashed                           | 8,743 B, `5ad75613…`; reverse proof returns `fdc5a902…`                                                                   |
| Tree movement since the reads              | `git rev-parse HEAD` / `origin/main`, `git status --short`, `git log --name-only -- website/wiki`                              | `HEAD` = `origin/main` = `5a59f34`, 0 ahead; page untracked; no commit touches `website/wiki`; all input hashes unchanged |

Hygiene of this card: no `website/` edit, no frontmatter flip, no build, no commit, no push, no deploy, no
publication, no `docs/` edit, no canon written. Scratch files live outside the repository at
`/tmp/wiki-af-gate/`.

## Outstanding, and next owner

| Item                                                                                                                                                                                                | Owner                                                                                          | Where it is recorded                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Apply the flip under C-1 on the flat path (C-2), then measure the built surface, the live route and the emitted derivatives                                                                         | `mars-ai-simulator-dev` (`t_d05accab`)                                                         | handoff comment on `t_d05accab`; this record |
| Reconcile the stale "article 001 only" release wording (`docs/area/AREA.md:18-19`, `website/src/lib/assets.ts:59,65`) with the Gate A answer and `SCENARIO.md:279` (operator binding consequence 4) | `mars-ai-simulator-planner` (canon record) / `mars-ai-simulator-dev` (the `assets.ts` comment) | reconciliation card filed from this gate     |
| Deploy ordering: `t_d05accab` is chained behind `t_1476a18c`, which is `blocked` on `t_206bee14` (C-5)                                                                                              | `mars-ai-simulator-planner` / human story owner                                                | this record §Conditions C-5                  |
| One owner for the three `.agents/work/assets/wiki-*/assets.md` manifests (carried hotspot)                                                                                                          | orchestrator                                                                                   | this record; the visuals handoff metadata    |

This review's status is final for the bytes it names. A later pass on different bytes supersedes it and must
record the superseded hash here.

Revision history: **revision 2 — 2026-09-17 21:06 CEST**, superseding revision 1 (sha256
`fe37f47d1e69280901e49e5909095e2808dff33204ebb9526f8c28bd08a8c49f`, the hash recorded in this gate's
completion metadata). One condition moved: **C-5**, plus the "Outstanding" row that quoted it. Revision 1
said the board edge `t_1476a18c → t_d05accab` was absent and that completing the gate promoted the build card
immediately; revision 2 records that the edge is present (linked 20:13:03 CEST, confirmed by a direct
`task_links` read) and that the build card therefore stays `todo` behind the planner's chain until
`t_1476a18c` completes. The cause was a board-read fault in this run — a nested `sqlite3` query on the same
cursor as the outer one truncated the parent list to a single row — not a movement of the graph. Nothing else
moved: the page bytes remain `fdc5a902…`, the release decision, the public scope and every other condition
stand exactly as written, and no input hash changed. No earlier record exists for this slug.
