# Wiki content plan: first three public reference pages

Stage: wiki content (planner) — this card plans and files the content graph. It writes
no page, flips no publication state, and publishes nothing itself.

Commissioned by the human story owner, 2026-09-17. Verbatim:

> _"wiki page is empty ; https://mars-ai-simulation.janpolacek.workers.dev/wiki/ ;
> use planner and setup articles about mars, area with landing, vehicles; -> keep
> wiki style, not news like article"_

Three subjects named, three sections already exist in the wiki tree (`area`,
`vehicle`, `project`). This brief records the planner decisions, the per-page
sources, the editorial bindings, and the serialisation rules before any draft is
authored. The graph is filed in this same dispatch; no prose is written, no MDX is
staged, no frontmatter is touched, no publication flip is performed.

## Measured state (verified 2026-09-17, do not re-derive)

- The live `/wiki/` is an empty index: 200, 4,599 bytes, an `<h1>Wiki</h1>` and the
  site chrome; no section group, no link, no breadcrumb. Cause: `website/wiki/`
  does not exist, so the glob loader yields nothing, `getPublishedWiki()`
  returns `[]`, and `groupWikiBySection` drops the empty groups.
- The tree machinery is complete and live: `pages/wiki/index.astro`,
  `pages/wiki/[section]/index.astro`, `pages/wiki/[section]/[slug].astro`, nav
  entry `Wiki`, sections `area · vehicle · project` with the reviewed labels
  `Landing Zones · Vehicles · Project` (`website/src/lib/wiki-query.ts:20,66-70`),
  one selection (`selectPublicWiki`) behind index, section index and routes,
  publication predicate `publication === 'published'`, fail-closed `draft` default.
- The wiki content schema (`website/src/content.config.ts:78-117`) requires
  `title`, `section`, `publication`, `order`, `summary`; allows `related`,
  `canonicalDocs`, and the same media fields as news (`media`, `mediaAlt`,
  `mediaLabel`, `mediaCaption`), validated by the same module (`newsMediaIssues`).
- Existing planning shells (`t_f9298a63` area, `t_927e91b5` project, `t_fea1e735`
  launch-vehicle) are `done` shells — no stage children, no prose, no MDX. They
  remain in the board as historical reference; this graph files the **next** set
  of cards.
- Public steps today: articles 001–004 are published (`website/news/`), so wiki
  prose may reference material up to step 004 and no further.
- The shared checkout is dirty with operator work: 13 modified tracked files,
  seven staged renames under `docs/vehicles/pathfinder/`, **untracked
  `docs/vehicles/ariane/`** (the launcher dossier and six plates — **not approved
  canon** until the human says so, and the planning shell `t_fea1e735` already
  records the launch-vehicle page is gated on that release), and the operator's
  002 plate swap (under media-decision card `t_00b65567`).

## Decisions (recorded here, not re-litigated by each writer)

### 1. The page set, with slugs

One page per subject the human named; three pages total, mapped 1:1 to the three
existing tree sections. No fourth node; no `payload` or `mars` node this round.

| Section   | Page title              | Slug (URL segment) | `order` | Brief summary (≤155 chars, news-deck form forbidden)                                                                                                                                                           |
| --------- | ----------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `area`    | Asteria Field           | `asteria-field`    | 1       | Fictional operational landing region in Margaritifer Terra that Red Horizon One targets: a compact highland-to-basin transition; planning centre 17.80°S, 332.20°E (27.80°W).                                  |
| `vehicle` | RH-01 Pathfinder        | `rh-01-pathfinder` | 1       | Red Horizon One's compact six-wheel Mars surveyor: a warm-white rectangular body, six open-mesh wheels on visible suspension, a short stereo mast, and a single front contact arm nested in its travel cradle. |
| `project` | Red Horizon (programme) | `red-horizon`      | 1       | Red Horizon is a fictional, AI-assisted Mars exploration programme: a ten-nation coalition building a single uncrewed lander and rover, with a 2031 launch window and a two-Mars-year design life.             |

Routes once published: `/wiki/area/asteria-field/`, `/wiki/vehicle/rh-01-pathfinder/`,
`/wiki/project/red-horizon/`. No `related:` cross-links this round — every
sibling page is at most one cross-link target and the wiki is brand new, so the
`related:` list adds noise rather than navigation; revisit after the first three
land.

**Wiki authoring convention — flat files.** The wiki collection's glob loader
(`website/src/content.config.ts:73-77`, base `./wiki`) has no `generateId`, so
`entry.id` is the base-relative path with the extension stripped. A nested file
like `website/wiki/area/asteria-field.mdx` therefore has `id = "asteria-field"`,
and the leaf route generator (`pages/wiki/[section]/[slug].astro:32-35`) maps
that to the URL `/wiki/area/asteria-field/`. A nested file like
`website/wiki/area/<slug>.mdx` has `id = "area/<slug>"` and produces
`/wiki/area/area/<slug>/` — the build fails with
`TypeError: Missing parameter: section`. The site already asserts the flat
shape in `website/test/wiki-index.test.mjs` and the SEO structural review
recommends it (`.agents/work/seo/wiki-collection.md:58`). **All wiki pages
author flat** at `website/wiki/<slug>.mdx` (with `section:` in frontmatter),
regardless of the URL segment. The brief's earlier "page set" table is
corrected accordingly.

### 2. Where "Mars" lives — the human's third subject

The human asked for "articles about mars". The tree's sections are a closed enum
(`area · vehicle · project`); a fourth top-level node is a schema change
(`wikiSections`, plus labels and descriptions, plus tests, plus the route generator
loop). I read the human's "mars" as _the setting the programme operates in_ —
which fits the existing `project` node with no schema change.

The **subject** is "Red Horizon (programme)": what the programme is, who is in it,
what the lifecycle budget frame is, what "fictional, AI-assisted" means in the
public disclosure. The page links to `/news/001-project-announcement/`, `/news/002-payload-selection/`,
and (when published) the asteroid-region wiki page for the Mars context — without
paraphrasing their released content into a wiki prose.

If your reading of the human's request is that "mars" wants its own fourth node
(for example, a planet / geological-history page rather than a programme overview),
say so and file the schema card as part of this graph; until then, the page set
above is the graph.

### 3. Where the wiki voice rule is recorded

Extend `.agents/skills/article-drafting/SKILL.md` with a **Reference entry (wiki)**
section. The drafting role is the consumer of the wiki MDX; one place to record
the rule, force-loaded on every writer card. The rule is:

- A wiki page is a **reference entry**. It describes what its subject _is_, in a
  stable present, and never reports an event. No news lead / inverted pyramid;
  no announcement or "has been selected" framing; no dateline; no journalist
  attribution; no "recently / latest / now / this week / this year"; no promise of
  future events ("will soon", "is expected to").
- Structure by **subject headings** — identity and control facts (the canonical
  dossier's "Control record"), description, constraints, relationships — not by
  narrative chronology.
- One page, one subject, stable enough to be linked to from anywhere and re-read
  unchanged. The same prose stands for every reader on every visit.
- Every material claim traces to the canonical dossier in `docs/`
  (`canonicalDocs:` names it); where the dossier is silent, the page names the
  gap or omits the claim.
- `summary` is a reference gloss of the subject (renders as the index deck and
  the meta description, ≤155 chars), never a news standfirst.
- Cross-links: `related:` for wiki→wiki (none this round); inline `/news/<slug>/`
  links to the published article that first released a fact.
- **No record date.** The wiki schema has no `simulatedDate` field, and no page
  may present one. A wiki page is not "written on" a fictional day.
- Media, if any, reuses an already-approved media key (`vehicle-references`,
  `asteria-plates`, `programme-identity`); a new key is a decision plus a dev
  card, never a discovery by the visuals worker.

Force-load this skill on every wiki writer card (`--skills article-drafting`).

### 4. Media, per page (reuse first, no new keys)

- **`area/asteria-field`** — reuse the `asteria-plates` media key. The three
  plates AF-01 / AF-02 / AF-03 were released for article 001 on 2026-09-17; the
  key already declares `plateCount: 3, altCount: 3, captionCount: 3,
  requiresLabel: true` (`website/src/lib/media.ts:40`). The wiki page must
  declare `media: asteria-plates`, three `mediaAlt` strings, three `mediaCaption`
  strings, and `mediaLabel` — exactly the same shape article 001 carries. **No
  new imagery**, no `launch-vehicle-reference` style new key. The IMAGES card is
  a pure reuse manifest.
- **`vehicle/rh-01-pathfinder`** — reuse the `vehicle-references` media key. The
  placed plate is `docs/vehicles/pathfinder/canonical.png`
  (sha256 `8dbb33d5…`, 1,889,350 B; approved by `t_1e84c815` for step 003).
  The key declares `plateCount: 1, altCount: 1, captionCount: 0,
  requiresLabel: false`. The wiki page declares `media: vehicle-references`,
  one `mediaAlt` string (background-neutral wording per `seo-content` SKILL:
  "Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline
  configuration …"), no caption, no label. IMAGES card is a pure reuse manifest.
  **Note**: this page depends on the unmerged `docs/vehicle/ → docs/vehicles/`
  split being either committed or reverting back; see serialisation note below.
- **`project/red-horizon`** — reuse the `programme-identity` media key. The
  placed mark is `docs/brand/logo-bg-black.png`
  (sha256 `f9543989…`; approved 2026-09-15). Key declares
  `plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false`. The wiki
  page declares `media: programme-identity`, one `mediaAlt` string (the brand's
  approved alt wording verbatim), no caption, no label. IMAGES card is a pure
  reuse manifest.

The three media decisions are reuse-only; the visuals card body for each page
states `no new imagery: reuse <key>` and the acceptance criterion is the
manifest recording that reuse. No ComfyUI start, no GPU time, no
`tools/visual-generator/` write. **No new media key is created this round.**

### 5. Which card carries the first release decision (and every flip)

Every `publication: published` flip on a wiki MDX lives on the page's
**Editorial final gate** card (`mars-ai-simulator-editor`). The merged editorial
role confirms the page against released canon and records the release decision
in its own sentence on that card; that is the flip's license, with no separate
human approval sentence (2026-09-17 authority change). No other card may flip
`publication`. The build card applies the flip and pushes to `main` only after
the editorial decision is recorded.

Per the SEO structural review's deferred checks
(`.agents/work/seo/wiki-collection.md` §1, §3, §4, §6), the editorial gate must
verify on the **built surface**, not only on the MDX bytes: title length, summary
length, no JSON-LD, canonical suppression (since `SITE_URL` is unset), and that
the wiki page's `/news/` internal links only point at routes the site renders.

## Sources for each page

| Page               | Canonical dossier                     | Article 001    | Article 002    | Article 003 | Article 004 |
| ------------------ | ------------------------------------- | -------------- | -------------- | ----------- | ----------- |
| Asteria Field      | `docs/area/AREA.md`                   | yes            | —              | —           | —           |
| RH-01 Pathfinder   | `docs/vehicles/pathfinder/VEHICLE.md` | —              | —              | yes         | —           |
| Red Horizon (proj) | `docs/SCENARIO.md`, `docs/GENERAL.md` | yes (taxonomy) | yes (taxonomy) | —           | —           |

Each source pack restates the canonical dossier's releasable lines (Landing
design material is withheld per `docs/SCENARIO.md:279` H1 option i). The
project source pack adds the programme-frame restriction (step 002/003/004+
claims are linked, not paraphrased).

## Bounds — binding on every page in this graph

These are restated from the card body and from the existing planning shells so
that the writer and the editorial gate agree on the same line.

- **Landing-design withhold** (`docs/SCENARIO.md:279`, H1 decision 2026-09-17
  option i). No ellipse geometry, no P0 touchdown zone, no science-zone plan, no
  hazard inventory, no traverse logic, no AF-* unit identifier in prose, alt text
  or captions. The area page may use only: the designation _Asteria Field_, the
  planning centre coordinates, and the three plates already released for article
  1. The two-Mars-year / 1,374 Earth-day surface lifetime stays article-001-only
     until the editorial gate clears it for wiki reuse.
- **No step beyond the published record.** Articles 001–004 are public; nothing
  from `docs/timeline/005+` reaches a wiki page, summary, slug, caption, alt
  string or commit message.
- **`docs/vehicles/ariane/` is untracked and unapproved.** Do not treat it as
  canon, do not stage it, do not link it. The launch-vehicle wiki page is gated
  on `t_206bee14`'s release decision; this graph does not include it.
- **No new scenario canon.** A page states what released material already
  establishes; where the material is silent, the page names the gap or omits the
  claim.
- **Programme-frame restriction** (`docs/SCENARIO.md:275–279`, restated on
  `t_927e91b5`). The project page may only describe material introduced with the
  project announcement (step 001) and the fiction disclosure already in
  `docs/GENERAL.md`. It links to `/news/002-payload-selection/`,
  `/news/003-vehicle-design/` and `/news/004-launch-provider/` rather than
  paraphrasing them; no RH-01 imagery; no Ariane 64 (step 004); no launch or
  landing date; no Asteria Field material beyond name and centre coordinates; no
  real-institution claim beyond SCENARIO's research-grounding context (no
  endorsement, no partnership).
- **Wiki voice rule.** §3 above is recorded in
  `.agents/skills/article-drafting/SKILL.md` (Reference entry section), and
  every wiki writer card carries it via `--skills article-drafting`.

## Graph filed with this brief

Three per-page pipelines, each the same six-stage chain, each serialised behind
the running cards. This planner card (`t_f2713ffa`) is the container: it is the
parent of the three research cards; the page container cards were **not** created
(the wiki commission is one multi-page flow, not three separate articles, so a
separate container per page would be redundant). A future planner worker who
finds this card already `done` does not rebuild the graph — the ids below are the
graph.

```
t_f2713ffa (this planner card — the wiki-content container)
  ├─ research: asteria-field    t_91cca417 (planner)
  ├─ research: rh-01-pathfinder t_bfcc9237 (planner)
  └─ research: red-horizon      t_76a5f79d (planner)
        │
        ├─ area/asteria-field   research → draft    → seo        → visuals    → review      → deploy
        │                       t_91cca417  t_10fc616a  t_b2e8e9b5  t_0c83565f   t_06da3c70    t_d05accab
        ├─ vehicle/rh-01-pathfinder
        │                       t_bfcc9237  t_18b3554b  t_aef9c659  t_4a919a79   t_d6ec1166    t_cac9c84e
        └─ project/red-horizon
                                t_76a5f79d  t_a54e97b6  t_f9fee6c1  t_d04de028   t_167fac93    t_23484bb2
```

Each stage card's `--parent` is the previous stage; the first `research` in each
chain is a child of this card. The two serialisation edges are `t_116ca903`
(previous running writer) → `t_10fc616a` and `t_1476a18c` (next `website/` dev
card) → `t_d05accab`, then writer/deploy chains internally.

Artifacts written by this card (the planner deliverables, so the downstream
stages have their declared inputs):

- `.agents/work/briefs/wiki-content-plan.md` (this file)
- `.agents/work/sources/wiki-asteria-field.md`
- `.agents/work/sources/wiki-rh-01-pathfinder.md`
- `.agents/work/sources/wiki-red-horizon.md`
- `.agents/work/assets/wiki-asteria-field/assets.md` (reuse-only manifest)
- `.agents/work/assets/wiki-rh-01-pathfinder/assets.md` (reuse-only manifest)
- `.agents/work/assets/wiki-red-horizon/assets.md` (reuse-only manifest)
- `.agents/work/seo/wiki-asteria-field.md` (the SEO package; written early so the
  editorial gate has its input, since the SEO card was dispatched ahead of its
  chain)

The three MDX drafts (`website/wiki/asteria-field.mdx`, `website/wiki/rh-01-pathfinder.mdx`,
`website/wiki/red-horizon.mdx`) were authored by the writer cards and are staged
on disk at `publication: draft`. No stage may flip them before the editorial
gate records the release decision on its own card.

**Serialisation rules (binding on this graph):**

1. **Writer serialisation.** Three writer cards (one per page) chain behind the
   currently running writer card `t_116ca903` (homepage roadmap). Two writers in
   one checkout race on the same tree. Chain:
   `t_116ca903 → t_10fc616a → t_18b3554b → t_a54e97b6`. Only one writer is
   `ready` at a time.
2. **Dev serialisation.** Three dev cards (one per page) chain behind the next
   `website/` dev card `t_1476a18c` (the operator's "publish the verified
   shared-checkout change set" card). Chain:
   `t_1476a18c → t_d05accab → t_cac9c84e → t_23484bb2`.
3. **One `website/` dev card at a time.** The shared checkout is dirty with the
   operator's edits; every dev card stages only the paths its own card touched
   and reports a dirty tree as shared rather than clearing it (the
   `site-deployment` SKILL records the recipe).
4. **Commit-and-push go-ahead** (standing human instruction, 2026-09-17). The
   `mars-ai-simulator-dev` card is itself the go-ahead to commit and push its
   scoped change. The deploy card body states: stage only the card's paths,
   card id in the commit message, rebase before push, report commit SHA and
   push result. A push to `main` is the production deploy
   (`Cloudflare Workers Build`); the editorial release decision on the review
   card must exist before the flip is pushed.

## Acceptance

- This brief is at `.agents/work/briefs/wiki-content-plan.md`, recording the
  page set with titles/sections/slugs/summaries, the decision on where Mars
  lives, the wiki-voice rule and the file that records it, the media decision
  per page, the withhold list restated, and which card carries the first
  release decision.
- The content graph is on the board with three per-page chains (research →
  draft → SEO → IMAGES → review → deploy, eighteen stage cards), with the right
  assignee profile per stage, repo workspace, no `scratch` workspace, the
  correct `--parent` chain, and the writer and dev serialisation applied.
- The first stage card is `todo` and the rest wait on the right gates; state in
  the handoff which card becomes `ready` first.
- No wiki prose by this card, no commit, no push, no publication flip, no
  `docs/` edit, no canon written, no deploy.

## Out of scope

- Writing any page prose (writer).
- Selecting or generating any imagery (visuals; all three are reuse-only).
- SEO wording (seo) and editorial review (editor).
- Dev build / deploy (dev).
- Editing `docs/timeline/` or `docs/SCENARIO.md`.
- The `mission-updates` and `media` collections, tag/entity views, the private
  validation command (`docs/PLAN.md` Phase 2 items 1, 3, 4 — still not
  delivered).
- Sitemap and canonical-origin work: Gate D is still undecided and fails
  closed — no sitemap, canonical suppressed. Do not infer `SITE_URL`.
- Re-deciding settled conventions (the `publication` predicate as the sole
  listing gate, the media-key mechanism, push→deploy).
- The launch-vehicle wiki page (gated on `t_206bee14`; out of scope this round).
- The mission-updates / about-method / other wiki tree extensions.
