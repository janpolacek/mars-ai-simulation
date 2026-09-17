# Continuity check: 001-project-announcement (retro)

Card: `t_0b3434e8` (`mars-ai-simulator-continuity`) · mission-timeline step 001
(project announcement) · retro check of an article that went public before the
pipeline existed. Reviewer role: continuity redactor. This is an editorial gate,
not a release approval.

> **Superseded for the revised article.** Everything below is the retro record for
> the 252-word pre-revision text. The revised article has its own check, appended at
> the end of this file (card `t_23c10313`, 2026-09-17 02:06 CEST); its verdict is the
> label on the last line of the file. The retro record below, and its own
> `continuity clear` label, are preserved unchanged: the file carries two labels by
> design, and only the last line states the current verdict.

## Verdict

**continuity clear** — see section 9 for what that does and does not authorise.
The open human decisions in section 7 stay open; nothing in them was settled by
this check.

## 1. Gate inputs (re-read immediately before writing this verdict, 2026-09-17 01:26 CEST)

| Input | Path | State at check time |
| ----- | ---- | ------------------- |
| Published article | `website/news/001-project-announcement.mdx` | modified vs. HEAD (frontmatter only); SHA-256 `e7652bd6b8dfd2d31c3b290420760cac5cf64b6bc7ff92a22d9a39f17860ffd8` |
| Released timeline step | `docs/timeline/001-project-announcement.md` | unmodified; SHA-256 `3aa1bca721348fcc9d4a2594974480528031726168fb37a0d685f8e4d038e942` |
| Locked scenario canon | `docs/SCENARIO.md` | unmodified; SHA-256 `fb63b3e6c8c13d692051d3408dc06707b704276290b728dc5904021a422e4261` |
| SEO package (retro pass) | `.agents/work/seo/001-project-announcement.md` | read; one applied frontmatter change (`mediaAlt`) |
| Prior editorial gate | `.agents/work/reviews/001-project-announcement.md` | read (`changes_requested`, retro record) |
| Brief / source pack / asset manifest (revision) | `.agents/work/briefs/001-project-announcement.md`, `.agents/work/sources/001-project-announcement.md`, `.agents/work/assets/001-project-announcement/assets.md` | read; these are templates awaiting the revision chain, not inputs to this retro check |
| Site chrome / surface | `website/src/pages/{index.astro,news/index.astro,news/[slug].astro}`, `website/src/{layouts,components,features,lib}/**`, `website/scripts/{guards.mjs,check-dist.mjs}`, `website/src/lib/assets.ts`, build output `website/dist/` | read; current as of the check |
| Brand guidance | `docs/brand/BRAND.md` | read |

Two paths named by the card or by the pre-existing template no longer exist and
were resolved to their current equivalents instead of being reported as broken:

- `website/scripts/sync-assets.mjs` — deleted by the in-flight site refactor.
  The surface work it used to do is now split across `website/scripts/guards.mjs`
  (build/output guards), `website/scripts/check-dist.mjs` (postbuild check) and
  `website/src/lib/assets.ts` (the single import of the identity mark). The
  corrective card's `website/scripts/assets.mjs` is gone for the same reason.
- `docs/brand/BRAND_GUIDELINES.md` (named in the template) — renamed to
  `docs/brand/BRAND.md` in commit `8f005be`.

## 2. Method and evidence (this run)

Read-only inspection plus scans; **no build, no preview, no deploy, no canon or
content edit**. Scratch checkers live under `/tmp/rh-continuity-001/`, outside the
repository, so no withheld token is added to the tree by this check. The gated
term list is **cited, not copied**: it is the "Forbidden token set" in
`.agents/work/briefs/001-project-announcement.md` plus the editorial review's
section 1 list, read from those files at check time.

| Check | Command (from the repository root) | Result |
| ----- | ---------------------------------- | ------ |
| Article measurement and gated-term scan (frontmatter + body, word-boundary, case-insensitive) | `python3 /tmp/rh-continuity-001/article_check.py` | body 248 words / 1,642 characters / 0 headings / 0 links / 5 paragraphs / fiction disclosure once; **0 gated hits**; permitted tokens present: region name ×1, `2031` ×2, `2.10 billion` ×1, `constant 2026 euros` ×1 |
| Gated-term grep over the article and its frontmatter | `grep -inE "asteria\|ariane\|kourou\|guiana\|pathfinder\|RH-01\|17 february\|16 september\|21 june\|2035\|FEI STU\|two mars years\|spectrom\|raman\|americium\|radioisotope\|sample.return\|crewed" website/news/001-project-announcement.mdx` | only two lines matched, both the substring inside "un**crewed**" (lines 6 and 18) — a substring false positive, no withheld term |
| Gated-term grep over the build output | same pattern plus `18° 42` / `226° 14` over `website/dist/` | no matches |
| Route inventory / withheld-material guard on the current build output | `npm --prefix website run check:dist` | pass (01:26): generated routes `/index.html`, `/news/index.html`; "no reference into a withheld directory, and no withheld file or marker in dist/" |
| Is the article body rendered anywhere public? | `grep -c "<closing sentence of the body>" website/dist/index.html website/dist/news/index.html` | 0 and 0 — the body renders on no route; only the card (kicker, title, summary, label, image) is public |
| Identity-mark cues measured in the file the site actually imports | `python3 /tmp/rh-continuity-001/mark_cues.py` | `docs/brand/logo-bg-black.png` 1254 × 1254: Sun core 1093 px (bbox x 368–536, y 267–512), rim light 920 px, Earth cue 56 px (x 995–1003, y 319–328), Moon cue 20 px (x 1016–1021, y 338–343) |
| Stale asset references | `grep -rn "assets/logo" website/src website/news website/scripts` | no match — the RGBA derivative is referenced nowhere in the site source |
| Gate-input drift | `git status --short`, `sha256sum` on the three gate inputs | recorded in section 1; article and timeline/scenario files unchanged during this check |

## 3. Claim-level traceability

Every material claim in the article, its frontmatter and its card copy, against
the released step and locked canon. Line numbers are from the files as hashed in
section 1.

| # | Claim (article / surface) | Canonical source | Result |
| - | ------------------------- | ---------------- | ------ |
| 1 | "fictional, AI-assisted Mars exploration programme" (body and `summary`) | `docs/INSTRUCTIONS.md` "Canon and information safety" (fiction disclosure); `docs/GENERAL.md` | PASS |
| 2 | Ten national programme teams, named in that order | `docs/SCENARIO.md` line 36 (same ten, same order); line 40 (fictional national teams; no real agency is a partner) | PASS — no real institution, agency or company is named or implied |
| 3 | "build a single uncrewed Mars lander and rover together, sharing one mission architecture, one science archive, and one public record" | `docs/SCENARIO.md` line 19 (mission type); line 53–55 (shared archive, no national exclusivity); `docs/timeline/001-project-announcement.md` lines 11–13 | PASS — mission type and shared-record principle are step-001 mission identity; no architecture detail, mass, element list or ownership follows from it |
| 4 | Purpose: "mineralogy and the reconstruction of ancient habitable conditions" | `docs/SCENARIO.md` line 20 (primary science) | PASS |
| 5 | "how water changed an ancient equatorial landscape in the Margaritifer Terra region" | `docs/SCENARIO.md` line 84 (objective framing); line 21 (region); step 001 allowed angle line 30 ("the target region") | PASS — the region name is the permitted level of geographic specificity; no site designation, coordinate or ellipse appears |
| 6 | "mapping clay-bearing, chloride-bearing, sulfate-bearing, and basaltic units" | `docs/SCENARIO.md` line 87 (objective 1) | PASS |
| 7 | "long-lived lake or groundwater system or in shorter episodic events" | `docs/SCENARIO.md` line 88 (objective 2) | PASS |
| 8 | "does not search for living organisms or claim evidence of life"; habitability framed as water, chemistry, energy sources, environmental stability | `docs/SCENARIO.md` lines 28–30 and 89–91 | PASS — preserves the no-life-detection invariant in `docs/timeline/README.md` |
| 9 | "each partner holds one vote whatever it contributes" | `docs/SCENARIO.md` lines 46–50 (one voting representative per partner; contributions unequal, governance equal) | PASS — the council's name, the vote thresholds and the safety panel are correctly withheld |
| 10 | "committed to reporting technical risk and anomalies candidly, not only successes" | `docs/timeline/001-project-announcement.md` line 23; `docs/SCENARIO.md` lines 51–52 | PASS |
| 11 | "a launch window in 2031" (body and `summary`) | `docs/SCENARIO.md` line 23 (locked launch date withheld); step 001 allowed angle line 33 ("Use the window and year only") | PASS — no month, day, provider or campaign reference |
| 12 | "€2.10 billion in constant 2026 euros, covering concept work through the final science archive" | `docs/SCENARIO.md` line 26 and lines 216–217 | PASS — no breakdown, no per-partner share, no cost table |
| 13 | "Technical selections — what the rover carries, who builds what, and how the mission reaches Mars — are still ahead of us" | `docs/timeline/001-project-announcement.md` lines 36–39 (payload, ownership and provider belong to later steps); `docs/SCENARIO.md` lines 277–278 | PASS — the article states these are undecided rather than hinting at any decision |
| 14 | `mediaAlt` visual description (Mars disc, low highlighted hills, small Sun behind the upper-left edge, blue Earth with a dimmer Moon at the upper right) | `docs/brand/BRAND.md` canonical alt text (lines 19–21); measured in the file actually imported (section 2) | PASS — every named cue exists in the asset the site uses, at the position described |
| 15 | `mediaLabel` "Red Horizon // programme identity"; `category` "Announcement 01"; `order: 1` | `docs/brand/BRAND.md` (identity mark); `docs/timeline/001-project-announcement.md` (first public step) | PASS — accurate label, correct series order, no withheld term |
| 16 | Homepage/chrome claims that carry the article: "Current state: Coalition planning", "Launch date: To be announced", "Landing date: To be announced", progress log "Coalition planning / Mission architecture / Surface operations" | step 001 allowed angle (schedule frame only); `docs/SCENARIO.md` line 23 (dates withheld) | PASS — nothing in the chrome names a date, a site, a provider or a vehicle |
| 17 | Card copy `status: "Now opening"` and `linkLabel: "First public briefing"` | not a canon claim | OUT OF THIS GATE — copy/affordance questions already raised by the editorial review and the SEO pass (section 8); no withheld fact involved |

## 4. Release-order and withheld-material checks (template checklist a–i)

| Check | Result | Evidence |
| ----- | ------ | -------- |
| a. Every material claim agrees with the released step and `docs/SCENARIO.md` | PASS | section 3, all 17 rows |
| b. No later-step fact (step 002 or beyond) appears | PASS | no payload or instrument selection, no hardware ownership, no provider; gated scan 0 hits (section 2) |
| c. No landing-area designation or coordinate appears | PASS | gated scan 0 hits in the article and in `website/dist/`; the region name is the only geographic term, which step 001 permits |
| d. No map or planning-envelope reference appears | PASS | `website/dist/` holds two HTML routes and favicon/identity-mark assets only; nothing imports or copies the withholding dossiers (guard passes) |
| e. No surface-vehicle name or design detail appears | PASS | the name is absent from the article; the homepage chrome was corrected to "its first surface vehicle" / "the surface vehicle" by `t_fc952c7d`, re-verified in `dist/` |
| f. No launch-provider or launch-site reference appears | PASS | gated scan 0 hits; provider belongs to a later step |
| g. No exact launch or landing date appears (only a 2031 window) | PASS | "2031" ×2, no month/day; chrome shows "To be announced" for both dates |
| h. No supported surface-life duration appears without a recorded human release | PASS | no duration, no Mars-year figure, no end date in article, frontmatter or chrome |
| i. Brand voice preserved (concrete, unsentimental, no grandeur, no urgency, no unearned certainty) | PASS | five short declarative paragraphs; uncertainty stated as uncertainty ("Technical selections … are still ahead of us"); fiction disclosure is in the body and on every page; nothing promises a result (`brand-voice` skill criteria) |
| Public/canon impact of this check | none — no file in `website/`, `docs/` or `news/` was edited by this card |

## 5. Public-surface verification (the surface the article renders on)

- **The article body is not publicly rendered.** `website/src/lib/releases.ts`
  ships `releasedNewsSlugs = []`, `website/src/pages/news/[slug].astro` generates
  `getStaticPaths()` from that gate, and the current build emits exactly two
  routes (`/index.html`, `/news/index.html`). The 001 card (kicker, title,
  summary, label, identity mark) is public; the body is not. That matches the
  corrective card's decision not to wire a detail route without a human release
  reference.
- **News listing content.** `website/dist/news/index.html` carries one card
  (counter `01 / 01`). The step-002 article is `publication: draft`
  (`website/news/002-payload-selection.mdx`) and is correctly excluded from the
  listing and from any route.
- **Metadata surface.** No canonical link (production origin not authorised —
  `SITE_URL` unset), no Open Graph, no `ld+json`, no `robots.txt`, no sitemap, no
  `keywords` meta. Titles and descriptions are the pre-existing site strings plus
  the article's own `summary`; none promises a date, instrument, vehicle, site or
  briefing page.
- **Asset surface.** The build emits hashed webp derivatives of the approved
  identity mark only (`website/dist/_astro/logo-bg-black.*.webp`) and the two
  favicons. No vehicle render, no map, no dossier file. No asset or file name
  carries a withheld term.
- **Affordance honesty.** `NewsCard.astro` renders `linkLabel` as a `<span>` while
  no released route exists for the item, so the label does not advertise
  navigation that cannot happen; the hero call to action targets the in-page
  `#updates` section and uses an in-page arrow.
- **Identity mark provenance (resolved since the retro review).** The site now
  imports `docs/brand/logo-bg-black.png` — whose SHA-256 matches the approved
  source hash recorded in `docs/brand/BRAND.md` lines 9–10 — through Astro's
  asset pipeline (`website/src/lib/assets.ts`). The RGBA derivative the editorial
  review failed (hash `d23d7c99…`) is referenced nowhere in the site source and is
  no longer emitted. The variant/placement question itself remains the human's
  (section 7).
- **Transient observation in the shared checkout.** At 01:25 CEST a build output
  in this checkout contained a withheld vehicle render at
  `website/dist/assets/canonical.png` — byte-identical to the dossier file
  (SHA-256 `8dbb33d5…`), with a copy at `website/public/assets/canonical.png` —
  and `npm run check:dist` failed on it (`gated-name` + `gated-content`). Both
  copies were gone by 01:25:58, and the guard passes again (01:26). The file and
  hash match the guard-proving experiment recorded in `t_fc952c7d`'s evidence, so
  this was another worker's transient test artefact, not a regression in the site
  source: nothing under `website/src/` or `website/scripts/` references the
  withholding dossiers except the guard itself. Recorded here because
  `website/public/assets/*` is gitignored, so a leftover plant is invisible to
  `git status` and only the build guard catches it (and it did, fail-closed).
  No corrective card is raised for a self-cleared test artefact.

## 6. Corrective card `t_fc952c7d` — closed items, re-verified and not duplicated

The card body instructs this check not to duplicate that work; it is recorded
here as satisfied. All five scoped items were re-verified against the current
tree by this run (not accepted on the card's narrative alone):

1. Withheld vehicle imagery out of the public build — closed; the current
   mechanism is `scripts/guards.mjs` (source references + dist files by name,
   stem and content hash) with `scripts/check-dist.mjs` as `postbuild`, which
   fails closed. Re-verified: guard pass on the current `dist/`, and a live
   observation of it failing while a gated file was planted (section 5).
2. Vehicle name out of the homepage chrome — closed; chrome now says "its first
   surface vehicle" / "the surface vehicle", re-verified in source and in
   `dist/`.
3. Unlabelled stray coordinate removed — closed; the value and its CSS are absent
   from the source and the build, and it survives only in the guard's marker list
   as something to block.
4. False link affordance removed — closed; label is a non-interactive `<span>`,
   no `href`, no arrow, non-link styling.
5. News-card image presentation — closed; `object-fit: contain`, intrinsic size
   corrected, and this check confirms every cue named in `mediaAlt` is present in
   the asset in use with the full square visible in the card's rendered box.

## 7. Escalations — human decisions that remain open (nothing settled here)

These are recorded, routed and left open. None of them is a conflict between the
article and released canon, which is why they do not change the verdict; all are
human calls this role may not take.

1. Identity-mark variant and any new public placement of the mark. `docs/brand/BRAND.md`
   ("Publication boundary", lines 90–95) requires a separate human release
   decision for public-site use beyond the current Preparing site, and the
   variant choice is listed as open in the editorial review and in `t_fc952c7d`'s
   "not yours to decide" list. The site currently renders the hash-approved
   black-field source; no agent approval of that placement exists.
2. Public title and author credit for article 001 — unconfirmed; there is no
   byline field and no byline policy in canon.
3. Whether any budget figure beyond the announced €2.10 bn frame may go public
   (none is published).
4. Whether the supported surface-life duration belongs in the announced schedule
   frame (currently withheld; the article is vaguer, not wrong).
5. The Slovak partner institution's public wording, if it is ever used.
6. Whether article 001 gets a released detail route at all — requires a recorded
   human release reference; until then the release gate stays empty and the body
   stays unrendered.
7. Copy items routed to the editor, not canon questions: the `linkLabel` wording
   ("First public briefing" when no briefing page exists) and the `status` string
   ("Now opening").

## 8. Observations routed outside this gate (recorded, not fixed)

- `docs/brand/BRAND.md`'s publication-boundary paragraph still describes the mark
  as reaching the website "through the generated `website/public/assets/`
  directory". The refactor imports it from `docs/brand/` through the Astro asset
  pipeline and copies nothing into `public/`. Documentation drift only; owner
  `project-documentation`.
- The retro review's "Media variant and asset provenance" failure and its
  "Image placement and caption" failure are both closed by the current tree
  (sections 5 and 6); the editorial record should incorporate them as resolved
  rather than re-report them.
- The revision chain's brief, source pack and asset manifest are still
  templates awaiting that chain (`t_8059da5f` → draft). This check covers the
  **current published text only**; the 400–550-word revision needs its own
  continuity pass, including its three HELD items (surface-life duration,
  the landing-area designation, any map), each of which requires a recorded
  human release first.

## 9. What this verdict means, and what happens next

`continuity clear` means: the current published article package agrees with the
released step-001 canon and the locked scenario, reveals no later-step fact and
no withheld landing-area detail through text, frontmatter, metadata, asset names,
alt text or the build surface, and does not present uncertainty as certainty.

It does **not** mean the package is approved for publication or released. Human
canon approval and human release approval are still outstanding, as are the
decisions in section 7. The next gate is the retro editorial verification
(`t_8059da5f`, `mars-ai-simulator-editor`), which reads this verdict together
with `.agents/work/seo/001-project-announcement.md` and the existing review record
and must incorporate the closed `t_fc952c7d` items as resolved.

Validation completed by this check: section 2. Validation not run and not mine:
no build, preview, deployment, DNS or provider action; no asset regeneration; no
canon or content edit.

---

continuity clear

---

## Revision check: 2026-09-17 (card `t_23c10313`) — revised article 001

| Field | Value |
| ----- | ----- |
| Card | `t_23c10313` (`mars-ai-simulator-continuity`), child of revision parent `t_855de80a`, blocked by `t_6498855e` (visual assets, completed) |
| Reviewer role | continuity redactor — editorial continuity gate only |
| Mission-timeline step | `site-foundation` / step 001 (project announcement) |
| **Verdict** | **`human decision required`** — three items cannot be settled by an agent (§R5). Everything else in the package passes (§R3, §R4). |
| Article under check | `website/news/001-project-announcement.mdx` — SHA-256 `5755f92eb03bf16823116a8d3abb63e1f2c6d99ea65a74c59ee2e65cf67e770e`, 4,778 B, mtime 2026-09-17 01:54:13 CEST (unchanged before and after this check) |
| Check written | 2026-09-17 02:06 CEST (host date) |

### R1. Instruction state — what governs this check, and what is superseded

Four instructions touch this card and they do not all say the same thing. Recorded in
order, with what this check did about each:

1. **The card body** (planner, 01:23 CEST) — checks (c) and (d) forbid the target's
   name/coordinates and any map reference, and its grep forbids `asteria`.
2. **A comment from the operator relayed on this card** (01:26 CEST) — "the article
   publishes NO numeric coordinate and no bounding-box lat/long figure for the target
   region … Asteria Field's name and coordinates stay out."
3. **A planner comment on this card** (01:37 CEST) — records human story-owner answers
   of 2026-09-17: the designed surface lifetime (two Mars years), the target name and its
   coordinates, and reuse of the three `docs/area/` plates; it states it supersedes card
   checks (c) and (d) and removes the `asteria` token from the forbidden set.
4. **The recorded canon state**, which is what this check verified: `docs/SCENARIO.md`
   §Continuity and release controls line 279 and `docs/area/AREA.md` §Control record lines
   18–19 both carry the same 2026-09-17 **partial release** — name, centre coordinates and
   plates AF-01/AF-02/AF-03, for article 001 only — and both add that **all other Asteria
   Field material remains gated** / requires separate human approval. `docs/area/AREA.md`
   line 18 carries the release into the dossier's canon status (revision AF-0.2), and the
   brief's "Human release approval reference" records the answers verbatim.

**How this check treated the conflict.** It did not resolve it. Card checks 1 and the
operator comment are superseded *as instructions* by 3–4, which are later and are
corroborated inside canon, so this check judged the article against the release as
recorded in canon — and found the name and coordinates published correctly and qualified
(§R3 rows 9–13). The operator comment is **not** treated as withdrawn, only as older than
the recorded release: it is carried forward as open item H3 (§R5), because only the human
can say whether the recorded release was meant to replace it. Nothing in this verdict
rests on an agent's reading of which human message wins.

### R2. Method and evidence (this pass)

Read-only inspection, scans, one test run and one postbuild guard run. **No build of my
own, no preview, no deploy, no canon edit and no edit to the article** — this card's
deliverable is this record, and the article's hash above is unchanged by it. Scratch work
lives under `/tmp/rh-continuity-001/`, outside the repository, so no gated term is added
to the tree by this check; gated material is cited by class or by location, never copied.

| Check | Command / source (run 2026-09-17 02:04–02:06 CEST in the shared checkout) | Result |
| --- | --- | --- |
| Gate-input snapshot | `sha256sum` on the article, step 001, `docs/SCENARIO.md`, `docs/area/AREA.md`, the brief, the asset manifest, the SEO package, the editorial record, `guards.mjs`, `releases.ts` | article `5755f92e…`; step 001 `3aa1bca7…`; SCENARIO `c045a4c9…`; AREA `ae5bf08c…`; brief `73f850ed…`; asset manifest `5e33d451…`; SEO package `9c14cfc6…`; editorial record `5bb7408c…`; `guards.mjs` `65d31b91…`; `releases.ts` `9173aa3a…` |
| Canon drift since the retro record | `git diff -- docs/SCENARIO.md docs/area/AREA.md` | Exactly two hunks, both the 2026-09-17 partial-release note (SCENARIO line 279; AREA Control record lines 17–19, revision AF-0.1 → AF-0.2). No other canon line moved, so the SCENARIO hash differing from the retro record's `fb63b3e6…` is this documented release, not drift |
| Forbidden-token scan (the planner's updated list, case-insensitive) | `grep -inE "17 february\|16 september\|21 june\|2035\|ariane 64\|kourou\|rh-01\|pathfinder\|fei stu\|sample.return\|crewed\|spectrometer\|raman\|isotope.power\|americium\|radioisotope" website/news/001-project-announcement.mdx` | Two matching lines, both the substring inside the already-public word "un**crewed**" (frontmatter `summary` line 6; body line 25). The card's "expected: no matches" is a substring artefact of `crewed`; word-boundary analysis finds **0 hits** for every forbidden token |
| Released-value scan | read of the article's frontmatter and body against `docs/area/AREA.md` §Control record and `docs/SCENARIO.md` lines 25, 209, 216–217 | Released values present and exact (§R3 rows 9–12, 17–18); no unreleased value added |
| Plate caption/alt contract in the renderer | `website/src/features/news/plates.ts` (`plateCaptionText`, `plateAltText`), `website/src/features/news/media.ts` line 26, `website/src/features/news/MediaPlates.astro` line 34 | Each caption composes `label — caption + plate note + set provenance`; the provenance sentence comes from the registry, not frontmatter, so a caption cannot ship without it |
| Caption-provenance contract asserted | `cd website && npx vitest run test/news-media.test.mjs` (02:05:17) | **18/18 pass** — re-run by this check, not accepted from the parent's narrative |
| Build output: what is actually public | `find website/dist -type f`; `grep -oE "_astro/asteria[^\" ]*" website/dist/**.html` | Two routes (`/index.html`, `/news/index.html`). Only **AF-01** is referenced, as `_astro/asteria-field-01-mars-locator…webp`, on both. **AF-02 and AF-03 also sit in `dist/_astro/` as PNGs no HTML references, byte-identical to the `docs/area/` originals** (`sha256sum` matched) — see H2 |
| Release gate | `website/src/lib/releases.ts` (`releasedNewsSlugs` empty) | No article detail route exists; the body renders nowhere. The homepage and newsroom cards for 001 render title, summary, kicker and the AF-01 plate |
| Withheld-material guard | `npm --prefix website run check:dist` (02:05) | exit 0 — "no reference into a withheld directory, and no withheld file or marker in dist/". It does not cover the plates: `docs/area/` is not a withheld directory, and the released name was retired from `gatedTextMarkers` (four entries remain) |
| Public text scan | regex over both built HTML files for the target name, the region name, the released coordinate values, the four guard markers, `2035`, the provider and landing-design classes | No coordinate, no date, no provider, no guard marker and no landing-design term in either built page; the only case-insensitive `asteria` hits are the AF-01 **file name** in the asset path. The released name and coordinates appear in the article body, which has no route |
| External citations | `curl -s -o /dev/null -w "%{http_code}" -L` on the article's three links | 200, 200, 200 |
| Plate description (canon's statement of what the plates show) | `docs/area/AREA.md` §Map package lines 230–250; §"What is invented for Red Horizon" lines 66–70 | Recorded; the basis of H1 |
| Repository hygiene | `git status --porcelain` | This card wrote only this file. The article, the step files, canon, the plates, the manifest, the SEO package and the editorial record were left as found; nothing committed |

**Reader's caveat on plate pixels.** This pass could not independently re-read the text
inside the three PNGs: this environment has no OCR tool (`tesseract`, `pytesseract`,
`cv2`, `easyocr` all absent), and the vision channel returned the plates for inspection
without a transcribable text result. Every statement in this record about what a plate
*shows* therefore comes from (a) `docs/area/AREA.md` §Map package — the plates' own
canonical record, whose AF-03 row names the ellipse, the P0 touchdown zone, science
zones, hazards, traverses and comms shoulder — and (b) the asset manifest's recorded pixel
read of 2026-09-17 02:00–02:03 CEST, minutes earlier in this same working session. No
pixel-level claim is made here that is not backed by one of those two sources, and H1
does not depend on either: canon's own plate description is enough to raise it.

### R3. Claim-level traceability — the revised article against released step-001 canon

Line numbers are from the article as hashed in §R1. "Step 001" is
`docs/timeline/001-project-announcement.md`; "SCENARIO" is `docs/SCENARIO.md`; "AREA" is
`docs/area/AREA.md`.

| # | Claim (article line) | Canonical source | Result |
| - | -------------------- | ---------------- | ------ |
| 1 | "fictional, AI-assisted Mars exploration programme", linked to `/#mission` (22; `summary` 6) | `docs/INSTRUCTIONS.md` fiction-disclosure rule; SCENARIO line 3 | PASS — disclosure in the first clause of the body and of `summary`; the internal link resolves to the mission panel |
| 2 | Ten national programme teams, in canon order (23–26) | SCENARIO line 36 (same ten, same order); line 38 (fictional national teams; no real agency is a partner) | PASS — no real institution or company named or implied |
| 3 | "a single uncrewed Mars lander and rover together, sharing one mission architecture, one science archive, one public record" (25–26) | SCENARIO line 19 (mission type); lines 46–54 (equal governance, shared archive, no national exclusivity); step 001 lines 11–13, 19 | PASS — mission type and the shared-record principle are step-001 identity; no architecture, element or ownership detail follows |
| 4 | Purpose: "mineralogy and the reconstruction of ancient habitable conditions" (28) | SCENARIO line 20; lines 84–85 | PASS |
| 5 | Clay-, chloride-, sulfate-bearing and basaltic units; long-lived lake/groundwater or shorter episodic events (29–32) | SCENARIO lines 87–88 | PASS |
| 6 | Terrain-class paragraph: clay/sulfate record what water did; highland-to-basin transition; basement, basin-margin sediment and layered deposits compared; "that comparison is what makes a reading of the past testable" (34–39) | AREA lines 30–40 (evidence classes), 44–58 (real regional context and its USGS sources), 76–90 (the scenario's transition arrangement); brief depth area 1 | PASS — real-Mars grounding plus the scenario's own design framing; no landing site, unit or coordinate named |
| 7 | "does not search for living organisms or claim evidence of life"; habitability = water, chemistry, energy sources, environmental stability (41–43) | SCENARIO lines 28–30, 89–91; `docs/timeline/README.md` line 46 | PASS — the no-life-detection invariant is preserved in substance |
| 8 | Margaritifer Terra "a real, officially catalogued region", equatorial part of the ancient southern highlands; impact craters, valley networks, basin deposits; mineral evidence of past water (45–50) | AREA lines 46–52, 60–63; SCENARIO lines 289–290; citations: USGS Gazetteer Feature 3701, `pubs.usgs.gov/publication/sim3041`, the NASA clay/hydrated-mineral resource | PASS — real region, correct framing, every claim cited, all three links HTTP 200, and they are exactly the URLs canon cites |
| 9 | "Asteria Field: a fictional Red Horizon operational region designated for mission planning" (52–53) | AREA lines 11–13, 21–24; SCENARIO line 21; recorded release (AREA lines 18–19) | PASS — released for article 001 and qualified "fictional" in the same sentence; AREA line 23's qualification rule met in prose |
| 10 | Planning centre 17.80°S, 332.20°E (27.80°W) (53–54) | AREA line 14; recorded release | PASS — matches the released value exactly; the east→west conversion is arithmetically correct (360 − 332.20 = 27.80) |
| 11 | Planning envelope 12.5–24.0°S and 327.0–338.0°E (54) | AREA line 15; recorded release | PASS — matches the released envelope exactly |
| 12 | Local operations frame "about 8 by 6 kilometres at that centre" (54–55) | AREA line 16 | PASS — released |
| 13 | "scenario coordinates chosen to keep mission design consistent. They are not a claim that a real feature sits at that position, and nothing in the programme has established what is present there." (55–58) | AREA lines 21–22; SCENARIO line 280 | PASS — this is the framing AREA itself requires, and it is the substance of what the operator's 01:26 comment asked for, delivered by qualification rather than removal |
| 14 | "Landing-site design work stays out of the public record for now." (58) | Brief gated items 2 and 5; step 001 lines 36–39 | **Text PASS / package CONDITIONAL** — true of the article's own prose and metadata, which name no landing-design material; contradicted by the published plate set as canon describes it. Open item H1 |
| 15 | Equal governance: "each partner holds one vote whatever it contributes"; candid reporting of technical risk and anomalies (60–62) | SCENARIO lines 46–52; step 001 line 23 | PASS — the council's name, the vote thresholds, the safety panel and the rotating director are correctly withheld |
| 16 | "a launch window in 2031" (64; `summary` 6) | SCENARIO line 23 (locked launch date); step 001 lines 31–34 ("Use the window and year only") | PASS — no month, day, provider or campaign reference |
| 17 | "€2.10 billion in constant 2026 euros, covering concept work through the final science archive", and "the commitment runs beyond the years the rover spends on the surface" (64–66) | SCENARIO lines 26, 214–217, 276 | PASS — no per-partner share, table or breakdown published |
| 18 | "designed to operate for two Mars years — 1,374 Earth days — providing at least one full seasonal cycle" (66–68) | SCENARIO line 25 (two Mars years), line 209 ("exactly 1,374 Earth days", 687 per Mars year); AREA line 146 ("two complete Martian seasonal cycles"); recorded release (brief lines 3–11; card comments) | PASS — the interval is the exact released figure, not "≈1,375"; "at least one full seasonal cycle" is weaker than AREA's two, so it cannot over-claim |
| 19 | "A Mars year is about 687 Earth days, so the surface mission is designed to keep working past its first year, not to stop after one result." (69–70) | SCENARIO lines 209, 293–294 | PASS as fact (687 is canon's planning length and its cited NASA source). Voice note routed as O5: "past its first year" is trivially true of a two-Mars-year design and the trailing clause is rhetorical rather than descriptive |
| 20 | "Technical selections — what the rover carries, who builds what, and how the mission reaches Mars — are still ahead of us." (72–73) | step 001 lines 36–39; SCENARIO lines 277–278 | PASS — payload, ownership, provider and dates are stated as undecided, not hinted at; nothing from step 002 or later |
| 21 | "Red Horizon One will study how water changed…" (28–29); "Red Horizon One's target … is Asteria Field" (52) | SCENARIO line 17 (**First mission: Red Horizon One**), distinct from line 18 (Surface vehicle: RH-01 Pathfinder); `docs/GENERAL.md` lines 59–60 | PASS — and this is the one place a reader could go wrong: "Red Horizon One" is the *mission*, not the rover. The withheld vehicle designation, the vehicle dossier and the step-003 imagery release are untouched by it. The name was already in the pre-revision published text the retro gate cleared, and check (e) is about the vehicle. Recorded explicitly because it is a near-homograph of a withheld token |
| 22 | `media: asteria-plates` with three `mediaAlt` entries, three `mediaCaption` entries and `mediaLabel` (9–18) | Brief "Three map plates — RELEASED"; `website/src/lib/media.ts` (`asteria-plates`: 3 plates / 3 alts / 3 captions / label required); `website/src/features/news/media.ts` | PASS on the contract — the key resolves to exactly three plates, one alt each, each alt ending with the required "a generated visualization, not orbital imagery". The scale *number* in the first caption is routed as O1 |
| 23 | Card copy still shown publicly today: kicker "Announcement 01 · Now opening", title, `summary`, label "First public briefing", AF-01 as the card image (built `dist/index.html`) | Step 001 (series order 1); SCENARIO lines 272–282 | PASS on continuity — no date, site, provider, vehicle or landing design in the built card; the label is a plain `<span>` while `releasedNewsSlugs` is empty, so it advertises no route |

No claim in the article, its frontmatter or the built card disagrees with the released
step or with locked canon. What this check fails on is the package's **plate set**, not
its text.

### R4. Checklist (card body a–i, as superseded by the planner comment of 01:37)

| Check | Result | Basis |
| ----- | ------ | ----- |
| a. Every claim agrees with the released step and SCENARIO | PASS | §R3, all 23 rows |
| b. No later-step fact (step 002 or beyond) appears | **PASS for text and metadata; CONDITIONAL for the plate images** | No payload, instrument, ownership, provider, vehicle or date appears anywhere in the article, frontmatter or built pages (§R2 scans). The plate set is the exception under the strict reading: canon's own plate description names landing-design material, which belongs to the landing-preparation step (`docs/timeline/README.md` line 33). Open item H1 |
| c. _(superseded — name and coordinates released for article 001)_ released name and coordinates correct and qualified | PASS | Rows 9–11 match AREA's Control record exactly; the name is qualified "fictional" in the sentence that introduces it |
| d. _(superseded — the three `docs/area/` plates are released for article 001)_ no map reference beyond the release | **CONDITIONAL** | AF-01 is squarely inside the release (planet view with the arrow). AF-02/AF-03 are released *by name*, but canon's description of what they show extends past what the same release marks "gated". Open item H1 |
| e. No RH-01 name, Pathfinder name, or vehicle design detail | PASS | Neither token nor any vehicle design detail appears in the article, frontmatter, metadata or built pages (word-boundary scan). "Red Horizon One" is the mission name (row 21) |
| f. No Ariane 64, Kourou, or launch-provider reference | PASS | 0 hits; the provider belongs to a later step (SCENARIO line 277) |
| g. No exact launch or landing date (only "a launch window in 2031") | PASS | "2031" only; no month or day anywhere in the package |
| h. No two-Mars-year duration without a recorded human release | PASS — release recorded | Human release recorded (brief lines 3–11 and card comments; value in SCENARIO lines 25, 209). Routed as O4: it is **not** written into the canon control records, which list only the name, coordinates and plates |
| i. Brand voice preserved (concrete, unsentimental, no grandeur, no urgency, no unearned certainty) | PASS | Short declarative paragraphs; uncertainty stated as uncertainty (rows 14, 20); no promised result; fiction disclosure in the first clause; no date, no instrument, no "breakthrough" language. Two micro-notes routed: O1 (a checkable caption number) and O5 (one rhetorical clause) |

### R5. Open human decisions — why this verdict is `human decision required`

**H1 — Does the 2026-09-17 plate release cover what plates AF-02 and AF-03 show?**

- *The conflict.* The recorded release covers "name, centre coordinates, and plates
  AF-01/AF-02/AF-03 … for article 001 only" and immediately adds that **all other
  Asteria Field material remains gated** (`docs/SCENARIO.md` line 279;
  `docs/area/AREA.md` lines 18–19). Canon's own description of those plates says they
  carry more than that: AREA line 239 describes AF-03 as a "Local operations view with
  the landing ellipse, the P0 touchdown zone, science zones, hazards, traverses, and
  comms shoulder" and AF-02 as carrying "working terrain units"; AREA lines 66–70 list
  exactly those, plus the AF-prefixed local labels and the communications plan, as
  invented scenario design; and the brief's gated items 2 and 5 keep that class out of
  this announcement. The human's own wording for AF-03 in the release record is
  "zoomed-in locality" (brief line 11) — a description that does not mention the landing
  design overlays — and the planner's comment on this card also keeps that class barred.
- *Why I did not decide it.* Either reading is defensible — a plate is released with what
  it depicts, or the release covers only the plate files as orientation graphics — and
  choosing between them either republishes landing-preparation material ahead of its step
  or contradicts a release the human recorded in canon. Both are the human's call; my
  authority explicitly excludes resolving a canon conflict. The parent card routed this
  finding to this check; it is recorded here, not settled.
- *Options.* (i) **Release covers the plates' content** — then article line 58
  ("Landing-site design work stays out of the public record for now") is contradicted by
  the package and must be reworded by the writer, and the release records in
  `docs/area/AREA.md` and `docs/SCENARIO.md` should be amended to say so explicitly.
  (ii) **Release covers the plate files only as orientation graphics** — then AF-02/AF-03
  cannot ship on article 001: replacement or exclusion is needed (visuals card), and line
  58 stands.
- *What is not in question.* AF-01 is inside the release as described, and prints no
  coordinate that canon's record of it names. Plate content is cited by class here, not
  enumerated — this record does not republish the geometry it is asking about.

**H2 — The build output ships the disputed plates whether or not a page shows them.**

- `website/dist/_astro/` holds AF-02 and AF-03 as PNGs **byte-identical to the
  `docs/area/` originals** (`sha256sum` matched), referenced by no HTML — only AF-01 is
  referenced, on both routes. If `dist/` is ever deployed as it stands, those files are
  fetchable by URL even though no page embeds them, and `check:dist` does not cover them
  because `docs/area/` is not a withheld directory and the released name was retired from
  the guard markers. H1's ruling decides whether that matters; BUILD (`t_f63be155`) and the
  planner ruling (`t_8274703e`) own the mechanism. Recorded because the release scope and
  the deployable artifact currently disagree, and because this is the same class of
  exposure the retro record caught as a transient planted file.

**H3 — Does the operator's 01:26 instruction still stand?**

- That comment requires the article to publish **no** numeric coordinate or bounding box
  for the target region. The recorded release of the same day permits the name, centre and
  envelope, and the article publishes them with the explicit "these are scenario
  coordinates … not a claim that a real feature sits at that position" framing (row 13).
  Two human-channel instructions therefore disagree in their letter, and nothing in canon
  records which one governs: the planner's superseding comment is later and is what the
  article was written to, but confirming that reading is a human action. If the operator
  stands by the prohibition, the coordinate sentences must be removed (writer edit, then
  re-check).
- Note for the record: the article publishes **no** numeric extent for the real region —
  Margaritifer Terra is described in words and cited to the USGS Gazetteer and USGS
  mapping — so the specific failure the operator named (a bounding box for the real region
  read as the mission's position) does not occur.

### R6. Observations routed elsewhere (recorded, not fixed)

- **O1 — AF-01's caption number.** `mediaCaption[0]` reads "The fictional target region on
  the planet, at roughly 1,000 km scale" (article line 15). The number is source-backed by
  `docs/area/AREA.md` line 237 ("approximate 1,000 km scale bar"), but the asset manifest's
  recorded pixel read of the same plate says its printed scale bar runs 0–4,000 km. One of
  the two is wrong: either the canon plate description or the plate. Recommendation: drop
  the number from the caption ("at planet scale") and have the planner rule on the canon
  line. Owner: editorial gate `t_ff937d33` (caption) and planner (canon). Closable only
  with a pixel read this environment cannot make — §R2 caveat.
- **O2 — Unreferenced plate files in the build** (see H2). Owner: planner ruling
  `t_8274703e`, then BUILD `t_f63be155`.
- **O3 — `mediaLabel` (article line 18) carries the released field name unqualified**
  ("Red Horizon // Asteria Field planning plates"), while `docs/area/AREA.md` line 23 asks
  that the name "remain qualified as 'fictional' wherever this material is copied into
  another working document" and the brief says it "must always be qualified as 'fictional'
  in prose". The captions and alts do qualify it and the label is chrome rather than prose,
  so this is a recommendation, not a failure: "Red Horizon // fictional Asteria Field
  planning plates". Owner: editorial gate with the writer.
- **O4 — The canon control records do not record the duration release.** The same
  2026-09-17 release written into `docs/SCENARIO.md` line 279 and `docs/area/AREA.md`
  lines 18–19 covers the name, coordinates and plates only; the surface-lifetime release
  exists in the brief and the card comments, not in canon's control records. Recommendation:
  extend the control record to name the released lifetime, so a future check reads the
  release from canon rather than from working papers. Owner: planner /
  `project-documentation`.
- **O5 — One rhetorical clause** in the lifetime paragraph (row 19). Owner: editorial gate.
- **O6 — The homepage and newsroom cards for 001 now lead with AF-01** and print the
  frontmatter title and the 147-character summary (built evidence in §R2). Continuity is
  fine (row 23); flagged only so the visual change is not read as an unrecorded release.
  The plate-source question belongs to H1/H2, not here.

### R7. What this verdict means, and what happens next

`human decision required` means: the revised article's **text, frontmatter, metadata and
cards are continuity-correct** — every material claim agrees with the released step-001
canon and locked `docs/SCENARIO.md`; the released name, coordinates, frame and lifetime
are published exactly as released and properly qualified; no vehicle, provider, instrument,
payload or date leaks; the brand voice holds. The package cannot be called *clear* because
three questions about its **plate set and its release scope** are the human's to answer
(§R5), and H1 decides whether the published package reveals landing-preparation material
ahead of its step.

It does **not** mean the package is rejected, and it is **not** an approval for
publication: human canon approval and human release approval remain outstanding, and
`releasedNewsSlugs` is empty, so the article body still has no route and nothing new is
public. This is an editorial continuity gate only.

Next owners and actions:

1. **Human story owner** (via the planner) — answer H1, H2, H3. H1 is the blocking one:
   state whether the 2026-09-17 plate release covers what AF-02 and AF-03 depict, and
   record the answer in `docs/area/AREA.md` §Control record and `docs/SCENARIO.md`
   §Continuity and release controls, not only on the card.
2. **`mars-ai-simulator-planner`** (`t_8274703e`) — the ruling this check routes: H1's
   resolution, H2's mechanism, O1's canon line, O4's control-record gap.
3. **`mars-ai-simulator-editor`** (`t_ff937d33`) — the editorial gate reads this verdict
   and must not pass the package to BUILD on `human decision required`: O1, O3, O5 and the
   `linkLabel`/`status` copy items are theirs.
4. **`mars-ai-simulator-writer`** — applies whatever wording H1/H3 produce (article line
   58, and the coordinate sentences if H3 goes the other way).
5. **`mars-ai-simulator-dev`** (`t_f63be155`) — after the above, local build and
   release-input preparation; **no deploy**, and no `releasedNewsSlugs` entry, without a
   recorded human release reference.

### R8. Confidentiality check on this record

Passed. This record names no withheld value: no vehicle designation, no provider or
spaceport, no launch or landing date, no absolute end date, no payload or instrument, and
no landing-design figure, unit identifier, science-point label or hazard/traverse
inventory. Gated material is cited **by class** or **by location** (`docs/area/`
§Control record; the brief's gated items 2 and 5; `docs/timeline/` steps) so a human can
act on the ruling without this file becoming a second copy of what is withheld. The
released values this record does quote — the planning centre, the envelope and the local
frame — are already public in the article under the recorded release, and quoting them is
what makes rows 10–12 checkable. The record lives under `.agents/work/`, private working
material that is not imported into the site.

### R9. Final label

human decision required
