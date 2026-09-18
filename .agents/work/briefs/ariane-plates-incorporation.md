# Planning brief — incorporation of the six new Ariane 64 plates

Operator commission, 2026-09-17 19:57 CEST. Operator's instruction, verbatim:

> "i have added new images of ariane vehicle; plan it (using planner) to
> incorporate it news and article too"

This brief is the planner's deliverable. The orchestration card is
`t_723e991f` (planner, running, workspace `dir:/home/janpolacek/Projects/mars-ai-simulator`).
The downstream graph — the seven cards A–G, their gates with fail-closed
defaults, and the human-only escalations — is recorded below. **No `website/` edit, no `docs/` write,
no asset placement, no commit, no push, no deploy, no publication, and no
authoring of the plates' prose happens in this card.**

---

## 1. What the operator's words resolve to (measured, then decided)

The operator names **two surfaces**: the news card/list and the article page.
In this repo both are fed by one mechanism (the article's `media:` frontmatter
key), so the plan has **one** asset decision and **two** renderings. The wiki
leaf named by the card body is **not** in the operator's words; see §6.

| Surface                                   | How a plate reaches it                                                                                                                                                                                                                                                                                                                                                                  | Source |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| News card on `/` and `/news/`             | `NewsCard.astro` renders `media.plates[0]` only — "The card carries one image, so a multi-plate set leads with its first plate" (`NewsCard.astro:14-16`), labelled with `mediaLabel` when the set has one plate (`NewsCard.astro:24-26,63-67`). On `/news/` the index cell is sized by its own plate (`NewsCard.astro:205-213`, measured cells 586.1 / 644.6 / 527.1 tall at 1280×800). |        |
| Article page `/news/004-launch-provider/` | One-plate set → lead `<figure class="article-media">`; multi-plate set → `MediaPlates` block. (`ArticleView.astro:39-67`.)                                                                                                                                                                                                                                                              |        |
| Wiki leaf `/wiki/vehicle/ariane-64/`      | The same `media:` key machinery; wiki schema validates and resolves it through `src/lib/media.ts` + `src/features/news/media.ts`. `website/src/content.config.ts:118-135`; `src/pages/wiki/[section]/[slug].astro:41-46`. **Not opened by this graph.**                                                                                                                                 |        |

The article 004 is **already published**. Current bytes: 4,029 B, sha256
`7da71fec1f2ce0dbaff8aa2966e802b6de439eb78b73e34b1a8eafab5d764ca3`,
`publication: published`, `simulatedDate: 2030-03-11`, **no `media` field**.
The step-004 release record (`/.agents/work/releases/004-launch-provider.md`)
states: _"Any change to the article's bytes voids the decision and returns the
package to the editorial gate"_ (the editorial review §12.5; the release
record's "release decision" section repeats it). A second-published flip is a
**revision**: the graph carries an editorial re-gate **before** the dev card
may push.

The launcher's wiki leaf (`/wiki/vehicle/ariane-64/`) does not exist — there is
no `website/wiki/` directory, the wiki route `/wiki/vehicle/` 404s today, and
the planned-but-unopened chain for it is recorded in the closing comment of
`t_fea1e735` (research pack → MDX draft → SEO → IMAGES → editorial gate →
publication flip). This graph does **not** open it by inference; see §6.

---

## 2. The measured inventory (re-verified 2026-09-17 20:04 CEST)

`docs/vehicles/ariane/` is untracked in git, no card on the board owns it. The
dossier next to the plates is `ariane-64.md` (31,797 B, sha256
`3ef87d9d6de17beeae4a4ca66ebd471ca879364ab108ea087b98bfcfd8249034`); the six
plates are mtime 19:52–19:53 — **added after the dossier was written**, and
no file in the folder names them.

```
$ sha256sum docs/vehicles/ariane/*.png
cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b  canonical.png
7407fa7d4b8d8f65cc7b64f49a625c951d2ae62448094a83994b0d2acc521fa1  front-left.png
c4744fff0da848e509dfbc8ab95e702a469eeac85c15f98f8f490041b0e60895  lunch.png
8669bf7537c0cdfa75fd6da92c76ffed9b81c8c9b82b7a58df8606e5c0c88f44  rear-right.png
458618791a82d75bd733b31d37692e9972b36570fce59c266a24e806bc533334  side-view.png
6f133b76c7e67111de3660ae1e957ec0f9d293e4a96ff5687d96e3e020dc53b4  travelling-to-mars.png
```

```
$ stat -c '%s %n' docs/vehicles/ariane/*.png docs/vehicles/ariane/ariane-64.md
1040823 canonical.png
1248554 front-left.png
2054094 lunch.png
1263396 rear-right.png
1233861 side-view.png
2162513 travelling-to-mars.png
31797  ariane-64.md
```

```
$ for f in docs/vehicles/ariane/*.png; do file "$f"; done
docs/vehicles/ariane/canonical.png:          PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
docs/vehicles/ariane/front-left.png:         PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
docs/vehicles/ariane/lunch.png:              PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
docs/vehicles/ariane/rear-right.png:         PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
docs/vehicles/ariane/side-view.png:          PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
docs/vehicles/ariane/travelling-to-mars.png: PNG image data, 1122 x 1402, 8-bit/color RGB, non-interlaced
```

All six plates are **1122 × 1402 = 4:5 portrait (ratio 0.8004)**. Every plate
the newsroom publishes today is **landscape**: the area plates are 1536 × 1024
(1.5), the RH-01 studio reference is 1448 × 1086 (1.333), and the carousel cell
is pinned to `aspect-ratio: 3 / 2` (the widest plate family's ratio,
`NewsCard.astro:192-196`). On `/news/` the index cell is sized by its own
plate, so a portrait plate will make its card taller than its neighbours
(measured on the published set, 1280×800: 586.1 / 644.6 / 527.1 tall).
`object-fit: cover` was measured and rejected: it crops the plate's own
content (`NewsCard.astro:243-247`). The dev card must therefore measure the
before/after cell heights it produces and report the numbers.

**No PNG text chunk in any of the six.** Nothing on disk says who produced
them, with which tool/model, or whether any third-party material is in them.
Provenance and rights are unrecorded; that is a gate, not a formality
(see §3.6).

Per-plate verdict and the rule cited (operator's vision read, 2026-09-17; this
planner has **not** vision-read the pixels in this run — the verdict row for
each plate is the inheritance from the orchestration card's measured read,
to be re-confirmed by card A on its own vision pass before admission):

| # | Path                     | What it depicts (inherited from card body)                                                                                                                                                                           | Verdict (rule cited)                                                                                                                                                                                                                                                                                      |
| - | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `canonical.png`          | Studio: white heavy-lift launcher, **four strap-on boosters, five black bells**, short fairing, seamless near-white floor, faint grounded shadow, no text.                                                           | **Admissible** — studio + four boosters + five bells + no scene + no text matches `ariane-64.md:54-88`.                                                                                                                                                                                                   |
| 2 | `front-left.png`         | Studio three-quarter; full-frame vs full-resolution-crop disagree on count (2 boosters / 3 bells full-frame; 4 / 5 on crop `[0,600,1122,1402]`).                                                                     | **Settle on the crop, per plate, before admission.** The four-booster count is the defining feature (`ariane-64.md:56,62,70,88`); a two-booster reading contradicts canon in pixels, and the precedent is `t_6fde5f04` which rejected its first candidate for a two-booster reading.                      |
| 3 | `side-view.png`          | Studio, side view, **2 boosters visible / 5 bells** (1 core + 2 under each visible booster).                                                                                                                         | **Withhold unless re-rendered.** A side view of a four-booster vehicle can show only two boosters on the visible flank; that is **not** the launcher's silhouette as canon fixes it. The dossier defines the silhouette as "two on each side" (`ariane-64.md:62,70`).                                     |
| 4 | `rear-right.png`         | Studio, rear three-quarter, **2 boosters visible / 5 bells**, no text.                                                                                                                                               | Same shape defect as plate 3. **Withhold unless re-rendered.**                                                                                                                                                                                                                                            |
| 5 | `lunch.png`              | Lift-off from a launch pad: blue sky, clouds, concrete/steel pad structures, two lattice towers, five bells, bright exhaust, smoke.                                                                                  | **Withhold, fail-closed.** `ariane-64.md:131` forbids "on the pad" imagery, "launch-tower image, service-gantry image" for step 004; the dossier's own "Operating appearance" list puts "Launch day (step 005)" out of scope. Escalation 1.                                                               |
| 6 | `travelling-to-mars.png` | In space under thrust: Earth limb, Mars upper right, firing engine, plume. Body markings verbatim: "RED HORIZON ONE", blue **ESA logo + "esa"**, and "ariane 64" with a blue orbit mark. Top of the vehicle cut off. | **Withhold, fail-closed.** Two independent bars — the "In transit" negation at `ariane-64.md:129`, and the real-institution ESA logo. Escalation 2. A "yes" would also have to settle the burned-in text against approved wording and amend the release record's "no real institution … named" scope row. |

**The booster/bell counts on plates 2–4 are the planner's inheritance, not a
re-measurement.** Card A re-runs the vision pass on each plate at full
resolution before admission; a plate whose count does not read four boosters
/ five bells does not go public.

The accepted studio plate's four booster pairs **read staggered rather than
top-and-bottom** on the previously generated candidate (`t_6fde5f04`,
`ariane-64.md` describes top-and-bottom pairs on each side) — that finding
travels forward to card A and to the editorial gate.

The dossier does **not** name the plates in any `asset name` line, so no
plate can be admitted by claiming a dossier record. The admission is decided
here and re-confirmed in card A.

---

## 3. What binds a plate before it can go public

Quoted in full in the body of the card that needs them.

1. **`docs/vehicles/ariane/ariane-64.md:121-136` — "What the vehicle must
   never be said to be"** (binding on "prose, alt text, captions, asset
   names, slugs, SEO packages, and commit messages"). Plates 5 and 6 fail it
   directly: `:129` ("In transit … It is a launcher, not a spacecraft") →
   plate 6 depicts exactly that; `:131` ("No on-pad image, no launch-tower
   image …") → plate 5 is a pad lift-off with towers. `:130` ("Flight-ready
   … Step 004 is a design decision, not a launch readiness statement");
   `:136` ("Any downstream card that wants to add a sentence covering one
   of these negations must consult the human story owner through Gate 004-B
   … before publishing").

2. **Gate 004-B's fail-closed form.** Recorded as _"not required — no real
   provider or institution named"_ (`.agents/work/releases/004-launch-provider.md`),
   so the public record today carries **no** real institution string, and the
   release record's exact public scope row says so in those words. Plate 6
   prints the **ESA logo and the word "esa"** on the vehicle, plus text
   nowhere approved ("RED HORIZON ONE", "ariane 64" burned into the image).
   Placing it would falsify that record; `docs/SCENARIO.md:281` is the standing
   rule ("Real institutions, including FEI STU and Arianespace, require
   explicit review before any public mention").

3. **Step boundary.** The lift-off moment belongs to timeline step
   `005-launch`; the dossier's own "Operating appearance" list (`:138-142`)
   puts "Launch day (step 005)" out of scope. Step 004's released scope is the
   architecture decision + the designation.

4. **The four-booster canon.** `ariane-64.md:56,62,70,88` — four solid
   boosters, two per side, "no additional strap-ons beyond the four"; the
   count is "the defining engineering feature". A plate that reads as a
   two-booster vehicle contradicts canon in pixels, and the precedent is
   measured: card `t_6fde5f04` rejected its first candidate for the
   two-booster/three-bell reading and re-rendered. Plates 2, 3, 4 each show
   fewer than four boosters (full-frame or full-view); the per-plate
   re-measurement in card A decides each.

5. **The shape precedent.** Portrait plates do not fit the newsroom's
   existing layout (see §2). Require card D to **measure** the before/after
   `/news/` cell heights it produces and report the numbers, with no crop
   (the `object-fit: cover` route was measured and rejected:
   `NewsCard.astro:243-247`).

6. **The media-key gap.** `newsMediaKeys` is `['programme-identity',
   'asteria-plates', 'payload-sensor-illustration', 'vehicle-references']`
   (`website/src/lib/media.ts:17-22`) — **no key resolves a launcher plate**.
   The 003 precedent is the shape to copy: `vehicle-references` → one plate,
   `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`
   (`media.ts:60`), rendered from `docs/vehicles/pathfinder/canonical.png`
   (`website/src/lib/assets.ts:96-119`), wired into
   `website/news/003-vehicle-design.mdx:10-12`. The earlier visuals card
   already drafted the contract this plate would need
   (`.agents/work/assets/004-launch-provider/assets.md` §"The media key
   contract this plate would render through": proposed key
   `launch-vehicle-reference`, requirement tuple, resolver entry, `assets.ts`
   import, the label `Ariane 64 · engineering reference` with its U+00B7
   MIDDLE DOT, and the verbatim alt text). Carry that draft forward as the
   **proposal** it is — the editorial role approves wording, the dev card
   owns the final key name, and a plate set (plateCount > 1) is a different
   contract that must state which surface renders plates 2..n (the news card
   shows the first only; `MediaPlates` renders a set on the article page).

7. **Article 004 is already published, and its bytes are the release.**
   See §1 above. The graph must carry an editorial re-gate **before** the
   dev card may push, and a **released revision record** in the same file
   afterwards. The flip that pushes is a publication.

8. **The tree is dirty in exactly the files the dev cards in this graph will
   touch.** Measured at 20:04 CEST, `HEAD` = `origin/main` = `5a59f34`:
   - 7 staged `R100` renames `docs/vehicle/*` → `docs/vehicles/pathfinder/*`;
   - 11 unstaged edits to `website/src/lib/assets.ts`,
     `website/src/features/news/media.ts`, `website/scripts/guards.mjs`,
     `website/test/guards.test.mjs`, `website/test/media-scope.test.mjs`,
     `website/test/news-media.test.mjs`, `website/news/002-payload-selection.mdx`,
     five `.agents/skills/*/SKILL.md`, four docs files, and the
     `tools/visual-generator/` files;
   - 4 untracked `docs/payload/{01..04}.png`, plus the deleted tracked
     `docs/payload/payload-sensor-illustration.png` (`D` in `git status`);
   - `docs/vehicles/ariane/` (dossier + six plates).

   Card `t_206bee14` (dev, blocked) measured this as the out-of-band change
   set written 19:47:48–19:53:49 by no card on the board. **Every dev card in
   this graph stages path-limited (`git commit --no-verify -m … -- <paths>`),
   never `git add -A`** — the index already holds another worker's staged
   renames. The published 002 article's image/alt swap is **not** this graph's
   to publish unless this graph card it (card B, see §4).

---

## 4. The graph to create

Cards are created with `hermes kanban create`,
`--workspace dir:/home/janpolacek/Projects/mars-ai-simulator`, one assignee
each, `--body "$(cat <file>)"`. **Before** creating anything, the board is
scanned for cards that already own the same artifact paths, so the chain is
not duplicated. The state read at 20:04 CEST:

| Path the chain will touch                                                       | Card already on the board touching it                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/vehicles/ariane/` (dossier + plates)                                      | none on the board; `t_206bee14` (blocked) names it as a hotspot but does not own it; `t_c4da077b` (planner, done) authored the dossier and listed "no commit, no push" in its out-of-scope and closing result; `t_1476a18c` deliverable 3 covers `docs/vehicles/ariane/*` under `t_206bee14`'s answer |
| `website/news/004-launch-provider.mdx`                                          | `t_de6e9055` (dev, done) flipped and pushed it; `t_35061463` (editor, done) recorded the release decision; `t_3021fd7f` (writer, done) wrote the two clauses                                                                                                                                          |
| `website/src/lib/media.ts`                                                      | **clean** in the working tree (the split did not touch it)                                                                                                                                                                                                                                            |
| `website/src/features/news/media.ts`                                            | the `docs/vehicle/` → `docs/vehicles/` split's resolver edit, still uncommitted; `t_1476a18c` owns publishing it                                                                                                                                                                                      |
| `website/src/lib/assets.ts`                                                     | the split's re-import **and** the 002 swap's payload import, both uncommitted; `t_1476a18c` owns publishing it                                                                                                                                                                                        |
| `website/test/news-media.test.mjs`                                              | the split's re-pointed fixture **and** the swap's payload file name, both uncommitted; `t_1476a18c` owns publishing it                                                                                                                                                                                |
| `docs/payload/*` and `website/news/002-payload-selection.mdx`                   | **decided**: `t_00b65567` (editor, done) returned `03-dust-scanning.png` and released `03-dust-and-contact-closeup` → `docs/payload/payload-sensor-illustration.png` with a corrected alt text; `t_1476a18c` applies it. **Out of this graph's scope.**                                               |
| `website/wiki/vehicle/ariane-64/`                                               | does not exist; `t_fea1e735` recorded the planned-but-unopened chain                                                                                                                                                                                                                                  |
| `.agents/work/briefs/ariane-plates-incorporation.md` + this graph's card bodies | this brief                                                                                                                                                                                                                                                                                            |

### The one collision that shapes the graph (measured)

`git add <path>` stages the **whole file**, not one hunk. Three files card D must commit —
`assets.ts`, `features/news/media.ts`, `test/news-media.test.mjs` — also carry another card's
**uncommitted** edits in the same shared `dir:` checkout. Committing any of them would publish
another card's half-applied work, and `main` is wired to the automatic production deploy: an
`assets.ts` import switched while the 002 article's `mediaAlt` still names the old plate is a
live-content hazard.

Therefore **card D is parented on `t_1476a18c`** (the operator-created dev card that publishes the
verified tree once `t_00b65567` and `t_206bee14` close), and the ariane chain's dev work is
strictly serial: `A → C → D → E → F → G → B`. This is the "chain, don't race" rule applied to a
real file collision, not a precaution.

Chain (cards A through G; the planner owns the split, deviate with a written reason in any
per-card handoff):

| Card                                                            | Assignee                   | Artifact                                                                                                             | Acceptance in one line                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A — canon and rights selection of the six plates**            | `mars-ai-simulator-editor` | `.agents/work/reviews/ariane-plates-selection.md`                                                                    | one verdict row per plate (admit / withhold with the rule cited `file:line`), each studio plate's booster+bell count from a full-resolution crop recorded, plates 5 and 6 routed to the human gate with the fail-closed default, provenance named as unresolved where it is, the admitted canonical name and hash noted.                                                                                                              |
| **C — place the admitted plate(s) under `docs/`**               | `mars-ai-simulator-dev`    | `docs/vehicles/ariane/<name>.png` + pushed commit                                                                    | only the file(s) card A admitted are copied, unchanged, to the admitted canonical name (hash re-verified on copy); withheld plates stay exactly where they are. **Commits and pushes its own scoped path** once escalation 3 (provenance) is answered; otherwise it makes the copy and blocks `needs_input`.                                                                                                                          |
| **D — media key, resolver, import, tests**                      | `mars-ai-simulator-dev`    | `website/src/lib/media.ts`, `website/src/features/news/media.ts`, `website/src/lib/assets.ts`, tests + pushed commit | key added with its requirement tuple, resolver + import + test assertion added, **commits and pushes those four paths only** (inert on the public surface — no `media` field exists yet), the four gates green, cell heights measured on a throwaway copy, and **the verbatim frontmatter lines recorded for card E/F**. The MDX is restored byte-identical to `7da71fec…`. **Gated on `t_1476a18c`, A, C.**                          |
| **E — editorial gate of the revised package**                   | `mars-ai-simulator-editor` | `.agents/work/reviews/004-launch-provider-revision.md` + `.agents/work/continuity/004-launch-provider-revision.md`   | the re-gate required by §3.7: verifies the on-main plumbing, the placed plate, and **the verbatim frontmatter delta**, on a throwaway copy outside the repo (the `t_35061463` pattern); records the release decision with the constructed post-delta sha256, the milestone line, and the exact public scope. Does not write the MDX.                                                                                                  |
| **F — apply the frontmatter, push the revision (build/deploy)** | `mars-ai-simulator-dev`    | pushed commit + live verification                                                                                    | applies the frontmatter **verbatim**, proves it reproduces card E's recorded bytes, path-limited commit, `--no-verify`, push is the deploy, live origin read back (`/`, `/news/`, `/news/004-launch-provider/`) with the emitted derivative hashed, and the release record's stale hashes named. Blocks `needs_input` if card E withheld.                                                                                             |
| **G — release record for the revision**                         | `mars-ai-simulator-editor` | `.agents/work/releases/004-launch-provider.md` (append)                                                              | the revision record: new article sha256, the plate's canonical path + hash, what the previous record's scope rows now supersede, the build hash and the live URL.                                                                                                                                                                                                                                                                     |
| **B — graph close-out (rescoped)**                              | `mars-ai-simulator-dev`    | the graph's own working papers published + a clean tree                                                              | publishes `.agents/work/briefs/ariane-*.md`, card A's selection record, card E's revision records and the appended release record as authored (sha256 + `dprint check` per path); publishes **no** path of the held change set (`t_1476a18c` owns those); `git status --short` clean apart from named foreign paths; `git rev-list --count origin/main..HEAD` = 0; records the ownership answer for `t_206bee14`'s questions 1 and 5. |

**Card B is rescoped, not the card the commission body described.** The body's B ("own the held
change set") duplicates `t_1476a18c`, which the operator created at 20:01 CEST for exactly those
paths (its body: _"publish the verified shared-checkout change set — the docs/vehicles refactor and
the 002 plate swap"_). Two dev cards publishing the same paths from one `dir:` checkout is the
collision this project keeps paying for, so B becomes the graph's close-out card instead. Recorded
on B as an authoritative scope amendment (comment 356).

**If card A admits no plate for public use, the chain collapses: say so in
card A's handoff, create no placement card, and leave the escalations open —
an empty admission is a legitimate outcome, and no card may invent an
approval to keep the chain moving.**

Card direction: each stage card's ``--parent`` is the **previous stage**;
articles stay ``todo`` until the chain closes. No stage card carries `--parent

<ARTICLE>`.

---

## 5. Gates, each with its default

- **Gate A — plate 5 (`lunch.png`, pad lift-off).** Default: **withhold**
  from every public surface at step 004 (`ariane-64.md:131`, `:130`), reserve
  it for step `005-launch` and record it as reserved. **Human gate,
  escalation 1.**
- **Gate B — plate 6 (`travelling-to-mars.png`, ESA-marked, in flight).**
  Default: **withhold** — two independent bars (real-institution mark; the
  "In transit" negation at `:129`). **Human gate, escalation 2.** A "yes"
  would also have to settle the burned-in text ("RED HORIZON ONE",
  "ariane 64") against the approved label/alt wording and would amend the
  release record's "no real institution … named" scope row.
- **Gate C — provenance and rights of all six plates.** Default: **unresolved
  provenance = no public placement**, and the editorial role may not infer
  an origin. The human states who made them / with what; **escalation 3**.
- **Gate D — releasability and wording of the admitted studio plate(s).**
  Not a human gate: the merged editorial role decides (AGENTS.md: "no human
  approval is required for an article's releasability or canon confirmation").
  The operator's message names no plate and approves none; the editor must
  not read it as an approval.
- **Gate E — the portrait shape.** Default: accept `object-fit: contain`
  inside the carousel's pinned 3:2 cell and the plate-sized `/news/` index
  cell, with no crop, and require card D's measurements. If the shape is
  unacceptable, ask for a re-render from the visuals role as a **new** card
  chained behind card A (4:3 or wider, four boosters, studio only).
- **Gate F — the name `lunch.png`.** Misspelled for a lift-off plate, and the
  plate family's naming precedent is `canonical` / `front-left` /
  `side-view` / `rear-right`. Default: any rename is card C's act, and the
  withheld plates are not renamed at all (a rename is a `docs/` write).
  Record it.
- **Gate G — the wiki leaf page.** Default: **not opened** by this graph;
  **escalation 6**.

Every escalation is a numbered item in §6. **The chain waits on none of them
to start** — cards A and C are ready/ungated by any escalation, and the
escalation defaults are fail-closed (the chain proceeds with the plates
withheld, never with them admitted by assumption). The one genuine wait is
**not** an escalation default but a measured file collision: card D is
gated on `t_1476a18c` (escalation 7), because the shared checkout's
`assets.ts` still carries another card's uncommitted edits.

---

## 6. Escalations for the human

1. **Plate 5 admission** (`lunch.png`). Default withhold per `ariane-64.md:131,130`.
2. **Plate 6 admission** (`travelling-to-mars.png`). Default withhold per
   `ariane-64.md:129` and Gate 004-B scope. A "yes" also rewrites the
   release record's scope row and the burned-in text.
3. **Provenance and rights of all six plates.** No tool/model string is on
   disk. Default unresolved = no public placement.
4. **Dossier release** (`docs/vehicles/ariane/ariane-64.md`, sha256
   `3ef87d9d…`). Default: dossier is `docs/` canon and the repository is
   public; `t_c4da077b` forbade commit/push; the step-004 release record
   names the dossier "(dossier, not published)". Card B classifies this; a
   `docs/` dossier carries real-world tokens (`:35`, `:115`, `:158`) that
   the editor must adjudicate. **Operator action** for `t_206bee14`'s
   question 5 (who owns the folder).
5. **002-payload swap ownership — now decided, and owned by another card.**
   `t_00b65567` (editor, **done**) returned `docs/payload/03-dust-scanning.png`
   (`a70d306c…`) as byte-identical to the rejected render and released
   `03-dust-and-contact-closeup` (`47d39a0b…`) → `docs/payload/payload-sensor-illustration.png`
   with a corrected alt text; `t_1476a18c` (dev) applies it. **This graph
   does not touch, duplicate or race it.**
6. **Wiki leaf `/wiki/vehicle/ariane-64/`.** Default not opened by this
   graph. The chain to open it is research → MDX draft → SEO → IMAGES →
   editorial gate → publication flip, recorded as planned-but-unopened in
   the closing comment of `t_fea1e735`. The operator's words ("news and
   article") do not cover it.
7. **The shared-checkout collision (operator action required).** Card D
   cannot commit until `t_1476a18c` has published the verified tree, and
   `t_1476a18c` is gated on `t_206bee14`, which is **blocked on a human
   `needs_input`**. Until the operator unblocks `t_206bee14` (and thus frees
   `t_1476a18c`), the ariane placement chain's dev stages cannot safely
   commit: `assets.ts`, `features/news/media.ts` and
   `test/news-media.test.mjs` each carry another card's uncommitted edits,
   and `main` auto-deploys. Recording the collision is not a request to
   skip it — the default is **wait**, and the chain's selection stage (A)
   still runs.

---

## 7. Invariants (named in every downstream card that touches the surface)

- The published record for 002 (`website/news/002-payload-selection.mdx`,
  its `mediaAlt`, and the plate `docs/payload/03-dust-scanning.png`) and
  the 003 article are **not** this graph's to change; card B classifies the
  002 swap, nothing here edits it.
- `docs/timeline/` stays private; no unreleased step fact enters a card
  body, a brief, a label, an alt text, a filename, a slug, an SEO package
  or a commit message.
- `website/scripts/guards.mjs` keeps its withheld set
  (`gatedDirectoryNames = ['timeline']` at `:44`, the per-file rule at `:63`,
  markers at `:86`); a card that must widen it says what it widens and why,
  fail-closed, with negative evidence.
- No dev card may `git add -A`; each stages its own named paths and ends
  with `git status --short` clean apart from paths another card owns, and
  `git rev-list --count origin/main..HEAD` at 0.
- Card D/F must not build over another card's `dist/` — check the board for
  a live sibling first.
- The article's bytes after the revision must not carry any real
  institution, operator or facility name; the same prohibition binds every
  admitted plate's alt text, label, caption and the manifest's
  `frontmatter_strings` row.

---

## 8. Ownership answer to `t_206bee14`'s questions 1 and 5

(`t_206bee14` is a dev card, blocked, holding the `docs/vehicle/` →
`docs/vehicles/` split and naming the folder's ownership as a question for
the planner.)

- **Question 1 ("may `docs/vehicles/ariane/ariane-64.md` enter the public
  repository as `docs/` canon").** The dossier's release is the human's to
  grant. The proposal recorded here, for the card that publishes it to
  confirm or refuse: the dossier is `docs/` canon and the repository is
  public; `t_c4da077b` forbade commit/push; the step-004 release record
  names it "(dossier, not published)"; Gate 004-B binds it as a surface
  that may carry no real institution name while it carries real-world
  tokens (`:35`, `:115`, `:158`). Its own `Public status` line at `:22`
  claims it is "Released for use in article 004, the wiki `vehicle` page,
  and the asset manifest — under the cleared scope of §R3.3". **Publisher
  of record: `t_1476a18c` deliverable 3, under the answer that lands on
  `t_206bee14`.** No card in this graph writes the dossier.
- **Question 5 ("who owns the folder, which also gained six uncarded 1–2 MB
  plates").** **The folder's ownership splits three ways and this is the
  answer to record:** the _held split + the dossier_ → `t_1476a18c` (dev),
  under `t_206bee14`'s answer; the _six plates_ → card A (editor, selection)
  then card C (dev, placement); the _graph's own working papers_ → card B
  (dev, close-out). Until `t_1476a18c`'s release decision lands, **no
  `docs/` path is committed by this graph.** The unblock of `t_206bee14` is
  an operator action (the dev card already records the question); this
  planner does not unblock it.
- **Question 2 ("how 004-B treats the dossier's real-world tokens").**
  `t_1476a18c` deliverable 3 / `t_206bee14`'s answer, with the editor free
  to escalate to the human story owner for a verbatim approval.
- **Question 3 ("may the next-step fact it carries sit in a tracked file
  now").** Same owner.
- **Question 4 ("may the path-only refactor ship as one snapshot commit").
  Same owner — `t_1476a18c` names it as one publication.

---

## 9. What I deliberately did not create

- **No wiki leaf cards.** The operator's words are "news and article"; the
  wiki chain is escalation 6. The card `t_fea1e735` is the planner's
  ledger for the wiki vehicle section and is not duplicated here.
- **No 002-payload cards.** The swap is decided (`t_00b65567`) and owned
  (`t_1476a18c`). This graph does not duplicate or race them.
- **No new card for the held `docs/vehicles` refactor.** `t_1476a18c`
  already owns it; card B was rescoped off it (comment 356).
- **No visuals/re-render card.** A re-render is only warranted if card A
  withholds plates 3 and 4 for the silhouette defect (or the editorial
  gate rejects the portrait shape). It is deliberately not pre-created: a
  second image card must not exist beside the selection card, and the
  GPU serialises. If it is needed, it is a **new** card chained behind
  card A, asking for 4:3-or-wider, four boosters, studio only.
- **No commit, push, deploy, publish, or `docs/` write** in this card.
- **No new canon**, no timing statement, no released milestone, no
  `simulatedDate`, no dossier file written.
- **No reversal of `t_206bee14`'s block.** Workers have no unblock tool;
  the unblock is an operator action.

---

## 10. Graph IDs (created and verified this run, 2026-09-17 20:0x CEST)

| Card                                         | Id           | Assignee                   | Parents            | Status at creation |
| -------------------------------------------- | ------------ | -------------------------- | ------------------ | ------------------ |
| A — plate selection (canon + rights)         | `t_58c90eb5` | `mars-ai-simulator-editor` | —                  | ready              |
| C — place the admitted plate(s)              | `t_8b6f0ae2` | `mars-ai-simulator-dev`    | A                  | todo (gated by A)  |
| D — media key + wiring + tests               | `t_5da0efad` | `mars-ai-simulator-dev`    | A, C, `t_1476a18c` | todo (gated)       |
| E — editorial re-gate of the revision        | `t_3ad3378a` | `mars-ai-simulator-editor` | A, D               | todo (gated)       |
| F — build, push, live-attribute the revision | `t_6607da8c` | `mars-ai-simulator-dev`    | E, C, D            | todo (gated)       |
| G — append the revision release record       | `t_d7e3aa8b` | `mars-ai-simulator-editor` | E, F               | todo (gated)       |
| B — graph close-out (rescoped)               | `t_74d301a3` | `mars-ai-simulator-dev`    | G                  | todo (gated)       |

Edges added after creation (the commission's chain needed the
`t_1476a18c` collision gate and the strict serial form):

```
A -> C
A -> D            (creation)
C -> D            (dev serialisation)
t_1476a18c -> D   (shared-checkout collision gate)
D -> E            (the re-gate runs on D's revised bytes)
A -> E            (creation)
E -> F, C -> F, D -> F   (creation)
E -> G            (creation)
F -> G            (the revision record confirms the live origin)
G -> B            (close-out runs last)
```

Serial order: **A → C → D → E → F → G → B**, with D additionally waiting on
the board card `t_1476a18c`. Nothing else is ready at the same time: the
graph has one dev lane and one editor lane, each strictly chained.

Three deviations from the commission body, each written into the affected
cards as an authoritative scope amendment:

1. **Card B rescoped** off publishing the held change set (duplicate of
   `t_1476a18c`) — comment 356.
2. **Card D gated on `t_1476a18c`**, with two corrected facts (the 002 swap
   is decided; `assets.ts:8` will read the reverted path) — comment 357.
3. **The D → E → F work split restated** so every dev card carries real
   commit-and-push authority — comments 365 (C), 366 (D), 367 (E), 368 (F).

### Git policy across the graph (named in every dev card)

The standing project instruction for `mars-ai-simulator-dev` (AGENTS.md,
human instruction 2026-09-17) makes a dev card explicit commit-and-push
authority, so **no dev card in this graph says "do not commit or push"**.
The publication rule is satisfied by _sequencing_ instead:

| Card | Pushes                                        | Why that is safe                                                                                                                    |
| ---- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| C    | the placed plate, path-limited                | the plate's provenance gate (escalation 3) is answered first; C blocks `needs_input` rather than pushing an unresolved-rights plate |
| D    | the four plumbing paths only                  | inert on the public surface: no article declares the key yet, so no route, card, image or metadata changes                          |
| B    | this graph's own working papers               | `.agents/` only — no public surface                                                                                                 |
| F    | the article frontmatter — **the publication** | card E's release decision is recorded before F runs                                                                                 |

Every dev card ends with `git status --short` clean apart from paths another
card owns and `git rev-list --count origin/main..HEAD` = 0, and every one
stages named paths only — **never `git add -A`**, because the shared
checkout carries the held split, the payload swap and other cards' work.

End of brief.
