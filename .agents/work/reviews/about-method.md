# Review: about-method — editorial final gate (`/about/` and the optional `/404`)

## Review metadata

| Field                 | Value                                                                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug / route          | `about-method` / `/about/` (optional second item: `/404`)                                                                                                                                                                                                |
| Card                  | `t_e7e82218` — `mars-ai-simulator-editor`, stage `review`                                                                                                                                                                                                |
| Chain                 | writer `t_16ec6ba2` → SEO `t_2bf95f76` → continuity `t_a0ee9abf` (`continuity clear`) → **this gate** → build routes `t_e89fb389` (dev, released by this verdict)                                                                                        |
| Stage / timeline step | `site-foundation` (`docs/PLAN.md` Phase 1 item 2, the About / Method page with a persistent footer link). Advances no timeline step; factual bound = the released step-001 record + the method statements `docs/GENERAL.md` / `docs/INSTRUCTIONS.md` own |
| Brief                 | `.agents/work/briefs/about-method.md` — sha256 `85bf34c8…` (unchanged since the continuity pass)                                                                                                                                                         |
| Draft (frozen copy)   | `.agents/work/drafts/about-method.md` — sha256 `1bf923c3ebb639a74db618cd5ec9ca72118496decf887d40cd347c6b71ee0cbc` (unchanged since the continuity pass)                                                                                                  |
| SEO package           | `.agents/work/seo/about-method.md` — sha256 `d210070d…`                                                                                                                                                                                                  |
| Continuity verdict    | `.agents/work/continuity/about-method.md` — sha256 `9eb6e72d…`, final label `continuity clear`                                                                                                                                                           |
| Approved copy block   | `.agents/work/drafts/about-method.md` §"Transcribable strings for `website/src/lib/about.ts`" (lines 86–135), block text sha256 `9ab39b70b32b2389f4aea8e53b58c59dd1fb6e695bf14c622c1b6c91606e6a62`                                                       |
| Approved `/404` block | same file, §"Optional `/404` copy" (lines 166–177), block text sha256 `15bd4ce3e8ac4b41f4e1c99cfb39e23a67d76f5fae4111f2448cf4aa0f320a61` — approved **with the condition in §12**                                                                        |
| Skills applied        | `editorial-review` (project), with `copy-editing` and `brand-voice` on the copy rows                                                                                                                                                                     |
| Verdict written       | 2026-09-17 01:58–02:02 CEST, against the live shared working tree (HEAD `8f005be`); re-verified at 02:00:25 CEST after the `/news/` title moved during the run (§15)                                                                                     |
| Status                | `approved` (editorial gate only — not a canon decision, not a release)                                                                                                                                                                                   |

**Path substitution recorded.** My role definition names `docs/content/reviews/` as the review-record
location; the docs restructure moved per-article working papers under `.agents/work/reviews/`, which
is where this card, the card chain and `docs/INSTRUCTIONS.md` §"Project source layout" place them.
This file is that record, not a second copy of it.

## Verdict

`approved`.

Every review row passes. No material factual, accessibility, licensing, coherence, or metadata
failure remains open, and the continuity gate on the same package returned `continuity clear` with an
empty open-failure table. Eleven items are recorded in §13 as non-blocking and routed to named
owners; each is listed explicitly so nothing is lost and **nothing is changed by assumption**.

This approval is about to release `t_e89fb389` (dev, build routes). It is an **editorial gate only**:
it is not canon approval and it is not a release. `/about/` and `/404` are public surface, and their
first public deployment still needs a current human release reference recorded on the build card.
No file under `website/` was edited by this gate.

## Review table

| #  | Check                                                                              | Result              | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -- | ---------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Continuity verdict exists and reads `continuity clear`                             | PASS                | `.agents/work/continuity/about-method.md`, sha256 `9eb6e72d…`, final label line `continuity clear`, open-failure table empty (§9 of that record)                                                                                                                                                                                                                                                                                   |
| 2  | Continuity verdict unchanged since it was written                                  | PASS                | Re-hashed 01:58 CEST: `9eb6e72d2f181a3aa4600ed475a4e281684cddcc96d9def9adacf4ff06f31a46` — identical to the hash the verdict records for itself                                                                                                                                                                                                                                                                                    |
| 3  | Every material claim traces to a canonical source                                  | PASS                | 15-row trace re-verified (§5). Five mission-fact rows re-checked against the **current** revision of the published 001 article (sha256 `5755f92e…`, moved mid-run from `f5d00e03…`); every one still holds. Method rows re-checked against `docs/GENERAL.md` §Purpose and `docs/INSTRUCTIONS.md`. One sentence the writer's table does not carry ("Every page here came through that process.") is added as row 3b and adjudicated |
| 4  | No fact from a later step, no spoiler                                              | PASS                | Copy carries no step number, future event, decision or result. Structural scan of the 29 copy strings (§14): digits 0, four-digit years 0, degree signs 0, currency/percent 0, internal paths and card ids 0, URLs 0, month names 0. Continuity check 5 (spoiler safety) independently PASS                                                                                                                                        |
| 5  | No withheld material in the copy, headings, links or metadata                      | PASS                | Guard marker list read from `website/scripts/guards.mjs` at scan time: **0 hits** across all 29 strings. No numeric, coordinate, provider, date or duration token. Continuity's wider scan (36 strings × 83 patterns over nine classes, one benign hit) cited at `continuity` §4                                                                                                                                                   |
| 6  | Copy-editing: grammar, agreement, tense, punctuation                               | PASS                | Read sentence by sentence (§3). No grammatical defect found; longest sentence 43 words (the mineralogy sentence), next 35 and 31; recorded as a scannability note, not a failure                                                                                                                                                                                                                                                   |
| 7  | Unexplained terms and sentence accessibility                                       | PASS with note      | Four process terms are used without a gloss (`brief`, `canon`, `editorial pass`, `continuity`); `brief` is defined in place by its own clause. `docs/INSTRUCTIONS.md` §Quality baseline is cited and the optional glosses are routed — observation 3                                                                                                                                                                               |
| 8  | Repetition and internal consistency                                                | PASS with note      | Term counts over the copy: `page` 11, `mission` 10, `published` 6, `fiction` 6, `programme` 5, `record` 3. The only adjacency problem is the `About` eyebrow directly above the `About …` headline — observation 1                                                                                                                                                                                                                 |
| 9  | Brand voice (grounded, unsentimental, no grandeur, no urgency, unearned certainty) | PASS                | No superlative, no slogan, no urgency, no implied real-agency endorsement. Uncertainty is stated as uncertainty ("not settled", "this site will say so until they are"). The disclosure is in the first body sentence of the page's identity section, not a footnote                                                                                                                                                               |
| 10 | Disclosure sentence consistent with `website/src/lib/site.ts`                      | PASS                | The clause "not affiliated with or endorsed by any real space agency" appears verbatim in the About paragraph. The disclosure **body** is not reproduced and cannot stand in for the site-wide note, which `BaseLayout` renders by default through its `disclosure` slot                                                                                                                                                           |
| 11 | Links resolve to routes that exist today                                           | PASS                | Both targets exist and build: `/` → `src/pages/index.astro`, `/news/` → `src/pages/news/index.astro`; `npm run check:dist` route list is `/index.html`, `/news/index.html`. No link to any `/news/<slug>/` route — `src/lib/releases.ts` ships `releasedNewsSlugs = []`                                                                                                                                                            |
| 12 | Metadata: `<title>` and description lengths and contract                           | PASS                | `<title>` 56 chars ≤ 60, self-contained (no site suffix is appended: `BaseLayout.astro` line 31); description 145 ≤ 155. Both distinct from `/` (`Red Horizon \| A Mars mission in progress`, 40) and from `/news/` (the newsroom string live at verdict time, §15)                                                                                                                                                                |
| 13 | Heading outline                                                                    | PASS                | One `h1` (37 chars) and six `h2`, in the order identity → method → record → status → boundary → next; no skipped level, no second `h1`, eyebrow is a paragraph and therefore not a heading. No heading carries a date, figure, vehicle, provider or later-step noun                                                                                                                                                                |
| 14 | Metadata/schema: nothing asserted to a machine the page does not say to a reader   | PASS                | Recommendation is to emit no structured data (no JSON-LD, no Open Graph, no Twitter card anywhere in `website/src/`); nothing was added. `canonicalUrl` emits nothing while `SITE_URL` is unrecorded                                                                                                                                                                                                                               |
| 15 | Chrome delta from the navigation entry recorded, not treated as a copy change      | PASS                | §11 records what changes and where; the measured `innerText` delta is handed to `t_e89fb389` with the deploy interaction spelled out                                                                                                                                                                                                                                                                                               |
| 16 | SEO package's open items covered                                                   | PASS                | Adopt/revert decisions taken for every item (§9): §2/§3 adopted with revert strings; §5 optional and routed; §6 resolved in favour of `/news/`; §9 the `/404` head condition is made an approval condition; §11's title judged at the revision live at verdict time (both revisions recorded, §15) and its description adopted; §11's heading observation and guard suggestion routed                                              |
| 17 | Continuity package's routed observations answered                                  | PASS                | All five (§10) answered by name: the universal process wording is adjudicated (observation 2), the widened 001-only release is not adopted here, the window-frame question is decided as frame-only wording (approved option, no canon settled), the newsroom-index link state is recorded, and the measurement-definition note is reproduced                                                                                      |
| 18 | Optional `/404` judged independently                                               | PASS with condition | Copy carries no mission fact, 31 words, two resolving links; approved **only if** it ships with the `BaseLayout` head opt-out (§12)                                                                                                                                                                                                                                                                                                |
| 19 | No new imagery, asset work, or licensing question                                  | PASS                | The page carries no image; the identity mark continues to ship through `src/lib/assets.ts` from the one approved source. No asset file is referenced by the copy                                                                                                                                                                                                                                                                   |
| 20 | Published surface still clean                                                      | PASS                | `npm run check:dist` → exit 0 at 01:58:29, `[check-dist] generated routes: /index.html, /news/index.html`, `no reference into a withheld directory, and no withheld file or marker in dist/.` `/about/` is absent from `dist/`. The probe surfaces the SEO pass flagged (`plate-probe`, a planted page) are gone from `src/pages` and from `dist/`                                                                                 |
| 21 | Approval is unambiguous for a transcribing card                                    | PASS                | The approved block is named by heading, line range and content hash, with rendering conditions (§2)                                                                                                                                                                                                                                                                                                                                |

## 1. Scope and method

Editorial gate over the whole about-method package as it stands at 2026-09-17 01:58–02:02 CEST: the
brief, the frozen copy, the SEO package, the continuity verdict, and the site surfaces the copy
depends on (`site.ts`, `navigation.ts`, `facts.ts`, `BaseLayout`, `SiteHeader`, `SiteFooter`,
`steps.ts`, `releases.ts`, `seo.ts`, `guards.mjs`, the published 001 article, `docs/GENERAL.md`,
`docs/INSTRUCTIONS.md`). Work was **verification plus judgement only** — this gate writes this record
and changes nothing else. No deployment, no preview, no publication, no `website/` edit.

Commands run (repository root unless noted):

- `sha256sum` of every gate input, taken at 01:58:19 CEST and re-taken at 02:02 CEST (hashes in §14).
- `git status --short` and `git log --oneline -3` at 01:55 and again before this verdict.
- `npm --prefix website run check:dist` → exit 0, route list `/index.html`, `/news/index.html`.
- `npm --prefix website test` → 2 files, **37 tests passed** (01:58:59 CEST).
- `node /tmp/rh-editor-about/scan.mjs` and `node /tmp/rh-editor-about/measure.mjs` — scratch scanners
  outside the repository: string extraction, per-string length and word counts, non-ASCII report,
  structural token classes, guard-marker scan, sentence-length distribution, block hashes.
- `grep -o '<title>…</title>' website/dist/{index.html,news/index.html}` → the two current titles.
- Direct read of the current revision of `website/news/001-project-announcement.mdx` for the five
  mission-fact rows (grep for the phrases the About copy paraphrases).

**Not run, and not this card's:** any build, preview, deploy, DNS or provider action; any asset
regeneration; any canon, copy, or `website/` edit.

## 2. Approved copy — the exact scope of this approval

**Approval names one block.** The dev card `t_e89fb389` may transcribe the string values of
`.agents/work/drafts/about-method.md` §"Transcribable strings for `website/src/lib/about.ts`"
(lines 86–135; block sha256 `9ab39b70b32b2389f4aea8e53b58c59dd1fb6e695bf14c622c1b6c91606e6a62`)
**verbatim** into `website/src/lib/about.ts`: the eyebrow, the `title` (the visible `h1`), the
standfirst, the six sections with their paragraphs and headings, and the two links. Property names
and the export shape are the dev's; the string values are frozen. The block hash above is the check
against a later edit of the draft.

**Rendering conditions attached to this approval** (visible-copy conditions, so the rendered page
matches the copy this gate judged):

1. The two `links` labels anchor the words **inside** the last paragraph ("home page", "newsroom"),
   exactly as the draft states ("Links in the last paragraph"). They must not also be rendered as a
   separate link list: a list would repeat "home page" and "newsroom" a second time directly under a
   paragraph that already names both. The lowercase labels are correct for that inline use — see §12
   for why the `/404`'s title-case labels are equally correct in their different context.
2. The `title` string is the page's **only** `h1`; the six `heading` strings are `h2`; the `eyebrow`
   renders as a non-heading label. This is the outline row 13 of the review table.
3. The page renders inside `BaseLayout`, so the chrome and the site-wide disclosure persist (a
   continuity build-stage condition that this gate confirms).

**Metadata adopted for `website/src/pages/about.astro`** (SEO owns metadata wording; the writer's
proposals are superseded, not overridden — §9):

- `<title>`: `About Red Horizon | How a fictional Mars mission is made` (56 chars)
- `<meta name="description">`: `What Red Horizon is: a fictional Mars mission made by Mars AI
  Simulation. How a page is written, checked, and released, and what is public today.` (145 chars)
- Passed to `BaseLayout` as `title` / `description`; neither string is visible copy.

**Not approved by this verdict:** any change to the frozen strings; any nav wording beyond the single
label `About` (§11); the `/404` copy without its head condition (§12); any statement that the route is
released (§16).

## 3. Copy edit

No edit was applied. This card is the review gate, the `editorial-review` skill limits edits here to
the review record itself, and the copy is the writer's frozen artifact. Everything I found is
recorded below and in §13 as a routed, non-blocking note with a named owner.

Checked and found sound:

- **Grammar, agreement, tense.** Every sentence reads correctly. Two places are deliberate and
  correct as written: `The announcement also set the programme's schedule and budget frames, and the
  partner teams vote equally…` mixes past (the announcement's act) with present (the standing
  governance rule, which the published article also states in the present tense), and
  `Agents do not approve canon, and agents do not publish.` uses deliberate parallelism.
- **Sentence lengths.** Longest sentence is 43 words — the mineralogy sentence in "What is public
  today". Next longest are 35 (the description of the experiment), 31 (the agent chain) and 31 (the
  process-example sentence). Everything else is under 25 words, and the short-sentence pairs
  ("…Its partners, its mission, and its findings are invented. The Mars it describes is real.")
  carry the voice. The 43-word sentence is a compound claim with a colon list; it is accurate and
  readable, and it is recorded as a scannability note rather than a defect (observation 4).
- **Repetition.** `page` appears 11 times and `mission` 10 times, but in different senses and never
  twice in the same breath; the copy reads as a page about pages. The one adjacency problem is the
  eyebrow `About` sitting directly above the headline `About Red Horizon and how it is made.`
  (observation 1).
- **Terminology.** `programme` (the fiction) vs `mission` (the first flight) is used loosely — the
  standfirst and the metadata say "fiction(al) … mission", the body says "fictional Mars exploration
  programme". That looseness is the **site's**, not this page's: the approved site-wide disclosure
  (`site.ts` `disclosure.body`) and `site.defaultDescription` both say "fictional Mars mission".
  The copy is consistent with the approved disclosure wording and with `docs/GENERAL.md` §Terminology;
  no change, recorded so a later reader does not read it as drift.
- **Accessibility of the interface.** Two links, plain lowercase anchor text, both naming their
  destination; no "click here"; no image on the page and therefore no alt-text risk; the site-wide
  disclosure is present in plain text, not hidden behind markup.

## 4. Brand voice

The copy reads as the Red Horizon newsroom voice on its most candid page: concrete, unsentimental,
and comfortable with an open question.

- No grandeur, no slogan, no artificial urgency, no emoji or exclamation, no marketing adjective.
- No unearned certainty: the technical record is described as "not settled" and the page commits to
  saying so "until they are". The strongest certainty claims are about **the project's own method**
  ("Each page starts from an approved brief…", "Agents do not approve canon, and agents do not
  publish."), which is the one kind of claim this page is entitled to make strongly.
- The disclosure is not a footnote: it opens the identity section and returns in "What this is not".
- "Mars AI Simulation" is named once, in the same section that names the fiction it produces; the
  name is already published in the footer of every page. Kept, as the SEO pass decided (`seo` §10
  item 2).

## 5. Claim trace re-verified

The writer's 15-row trace (draft §"Claim-by-claim trace") was re-verified, and the five mission-fact
rows were re-checked against the **current** revision of the published article (`5755f92e…` at
01:58 CEST — it moved from `f5d00e03…` during this run; the revision chain is rewriting it
concurrently). Every row still holds; no About claim becomes false, and the About page states
strictly **less** than the article does.

| # (writer's table) | Claim                                                                                                                                                      | Re-verified against                                                                                                                                                                                                                                       | Result                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| 1–2, 14–15         | Fiction/real-world boundary; non-affiliation                                                                                                               | 001 ¶1 (published), `docs/GENERAL.md` §Story world, `docs/SCENARIO.md` header note, `site.ts` disclosure                                                                                                                                                  | PASS                            |
| 3                  | Mars AI Simulation is a real project; the experiment                                                                                                       | `docs/GENERAL.md` §Purpose ("real-world testbed for multi-agent creative and technical work"; agents across writing, image/video, continuity review, web development, operations, deployment)                                                             | PASS                            |
| 3b **(new row)**   | "Every page here came through that process."                                                                                                               | No row in the writer's table. As a claim about the documented process (`docs/INSTRUCTIONS.md` §Mandatory working sequence, the workflow skill's stages) it holds; as a claim about the provenance of every _existing_ page it strains (see observation 2) | PASS, with a routed observation |
| 4–5                | Pages start from a brief; claims checked; metadata reviewed; continuity tested; editorial pass; a person decides; agents neither approve canon nor publish | `docs/INSTRUCTIONS.md` §Mandatory working sequence, §External actions and secrets; `AGENTS.md`; the workflow skill's stage graph (brief → source pack → draft → SEO → assets → continuity → editorial → build)                                            | PASS                            |
| 6–8                | Record order; corrections explicit and dated; images are illustrations                                                                                     | `docs/PLAN.md` Phase 4; `docs/timeline/README.md`; `docs/INSTRUCTIONS.md` §Canon and information safety; `docs/SCENARIO.md` §Continuity and release controls                                                                                              | PASS                            |
| 9                  | Ten national programme teams, one uncrewed lander and rover                                                                                                | Current 001 revision, paragraph 1 (and its country list of ten)                                                                                                                                                                                           | PASS                            |
| 10–11              | Mineralogy mission; water/habitability framing; no life search, no life claim                                                                              | Current 001 revision ¶2 ("The purpose is mineralogy…", "does not search for living organisms or claim evidence of life")                                                                                                                                  | PASS                            |
| 12                 | Frames set at the announcement; equal votes                                                                                                                | Current 001 revision (schedule frame, lifecycle budget frame, "each partner holds one vote whatever it contributes")                                                                                                                                      | PASS                            |
| 13                 | What the rover carries, who builds what, how the mission reaches Mars are not settled                                                                      | Current 001 revision, closing paragraphs ("…are still ahead of us")                                                                                                                                                                                       | PASS                            |

There is no third kind of claim on the page: every sentence is either already published in the
released step-001 record or a statement about this project's own documented method.

## 6. Disclosure

| Check                                       | Result | Evidence                                                                                                                                                                                                              |
| ------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non-affiliation clause verbatim             | PASS   | "not affiliated with or endorsed by any real space agency" appears word for word in the "What this is not" paragraph                                                                                                  |
| Site-wide disclosure not replaced           | PASS   | The About paragraph does not contain the disclosure body; `BaseLayout` renders `DisclosureNote` by default through its `disclosure` slot                                                                              |
| Disclosure string untouched by this package | PASS   | `site.ts` `disclosure.mark`/`title`/`body` unchanged. `site.ts` **did** move during this run (`ce1dd441…` → `dcb2d716…`): the only change is a new `newsTitle` string added by `t_1828a6d4`, not the disclosure block |
| No drift introduced by the echo             | PASS   | The echo extends the clause with "fictional national teams, not real institutions", which is `docs/SCENARIO.md`'s own wording                                                                                         |

## 7. Metadata and heading outline

There is no MDX schema for this page (it is site strings, not a collection item — brief §Deliverable
decision), so this row judges the document head and the outline.

- `<title>` 56 chars, within the 60 limit, and self-contained: `BaseLayout.astro` line 31 writes the
  prop straight into `<title>` with no suffix, so the string must carry the brand itself, and it does.
- Description 145 chars, within the 155 limit; the fiction is disclosed in the first clause, which is
  the project rule and also what a reader searching "is it real" sees in a snippet.
- Both strings are distinct from the other two live routes' metadata: `/` is `Red Horizon | A Mars
  mission in progress` (40) and `/news/` is `Red Horizon newsroom | Every published step so far`
  (the string live when this verdict was written; that route's title changed twice during this run —
  see §15). Three routes, three identities.
- Neither string carries a date, figure, instrument, vehicle, provider or later-step noun.
- Outline: one `h1`, six `h2`, no third level, no second `h1`.
- Structured data: none recommended and none present; `canonicalUrl` emits nothing while `SITE_URL`
  is unrecorded, so no wrong origin is asserted.

## 8. Links

Both link targets exist today and build: `/` (`src/pages/index.astro`) and `/news/`
(`src/pages/news/index.astro`); `check:dist` lists exactly `/index.html` and `/news/index.html`.
No link targets a `/news/<slug>/` detail route, which `releases.ts` keeps ungenerated
(`releasedNewsSlugs = []`), so the page carries no false affordance. The `/404`'s two links are the
same two routes. Both sentences the links sit in are true of the site as built: the home page carries
the mission panel's current state and the news section, and the newsroom index renders the
published-only query.

## 9. SEO package — adopt or revert, item by item

| SEO item                                      | Decision                                                                          | Detail / revert string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| §2 `<title>` (recommended, 56)                | **Adopt**                                                                         | Revert value: `About Red Horizon \| How this fiction is made` (the writer's proposal, 44) — retained in the SEO package                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| §3 description (recommended, 145)             | **Adopt**                                                                         | Revert value: `Red Horizon is a fictional Mars mission. How an AI-assisted project writes, reviews, and releases it, and what is public today.` (127)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| §4 route `/about/`                            | Adopt, no change                                                                  | Trailing-slash form `/about/` is the site's canonical spelling (`astro.config.mjs` `trailingSlash: 'always'`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| §5 heading order                              | Adopt, no change                                                                  | Order kept. The optional wording half for `How the record moves` stays the writer's call — observation 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| §6 internal links (`/`, `/news/`)             | Adopt                                                                             | The writer's open item 4 is resolved in favour of the live index route; `/#updates` is not substituted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| §7 images / alt text                          | Adopt, vacuous                                                                    | No image on the page, so no alt text; if a mark plate is ever added it is a new card with a manifest                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| §8 structured data: emit none                 | Adopt                                                                             | Nothing added to the head beyond `<title>` and `<meta name="description">`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| §9 `/404` metadata condition                  | **Accepted as a condition of the 404 approval** — §12                             | Opt-out on `BaseLayout` (suppress canonical, emit `noindex`), used only by `404.astro`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| §10 item 1 (frames referred to, not restated) | **Decided: keep frame-only wording** — §11                                        | No year and no figure in the body or in any metadata string; reasoning in §11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| §10 item 2 (naming Mars AI Simulation)        | Adopt as decided                                                                  | The name is already published in the footer; it stays, once                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| §11 `/news/` title                            | **Judged at the revision live when this verdict was written; not mine to decide** | That revision is `Red Horizon newsroom \| Every published step so far` (`site.newsTitle` in `src/lib/site.ts`, sha256 `86991815…`, passed by `src/pages/news/index.astro`, built into `dist/news/index.html` at 02:00). The string changed twice during this run: `News \| Red Horizon` from `t_1828a6d4` at 01:54:52, then back to the newsroom string after the 001 revision SEO re-pass `t_3bd87425` settled it that way (01:58:46) and `t_1828a6d4` moved it into `site.newsTitle`. Both values are recorded here; the convention conflict and the record amendment are `t_ef895257` (`seo` §11a), and nothing in this gate's approval depends on that title |
| §11 `/news/` description                      | **Adopt**                                                                         | `Red Horizon is a fictional Mars mission. Every step the programme has published so far is listed here.` (102). Revert: the homepage default description. It is the only string of the `t_2bf95f76` pair still open; it is true of the page (which renders the published-only query and lists every published item), discloses the fiction in its first clause, and states no fact the page does not already show. `/` keeps the AI-assistance qualifier in its own description, which is the right split: `/` is the page that explains what the project is. The SEO role's amendment records the same recommendation; this row is the editorial decision       |
| §11 newsroom heading observation              | Routed, non-blocking                                                              | The `/news/` index `h1` and the homepage `#updates` `h2` are the same sentence (`The story starts before launch.` — `NewsList.astro` line 14, `NewsCarousel.astro`); a distinct index heading is a writer change. Also live on that page: card titles render as `h3` directly under the page `h1` (`NewsCard.astro` line 59), a skipped heading level — routed to dev + SEO as an accessibility item                                                                                                                                                                                                                                                             |
| §11 guard suggestion (distinct titles)        | Routed, non-blocking                                                              | A cheap assertion over `listRoutes()` would have caught the duplicate title; the duplicate-title half is now fixed by `t_1828a6d4`, the assertion is still worth having — routed to dev                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| §15 conflicts 1–3, 4, 6, 7                    | Addressed                                                                         | 1 and 6: §11 vocabulary resolution below; 2: the fiction vocabulary belongs to `/about/` and the footer disclosure, and it is used nowhere else; 3 and 4: observations 3 and 5; 7: the duplicate-title defect is fixed (verified in the built output)                                                                                                                                                                                                                                                                                                                                                                                                            |

**Vocabulary resolution (§15 rows 1 and 6).** One word, two roles, and the site now uses `newsroom`
in both of them except the navigation label: `News` is the **nav label** (`navigation.ts`), while
`newsroom` is the site's own word for the surface everywhere else it is written — the document title
of `/news/` (`site.newsTitle`, live at verdict time), the visible eyebrow of both the homepage news
section and the `/news/` index (built output), and the About page's last paragraph. So the About
copy's "The newsroom collects everything published so far." matches the site's own wording for that
surface, is not invented copy, and needs **no copy change**; the About page's link label `newsroom`
names the same surface the nav calls `News`. Recorded here so a later reader does not read the two
words as drift, and so the one remaining alignment option (changing the About anchor/label wording
towards the nav label) is understood to be a writer change to frozen copy, not an editing fix
available to this gate.

## 10. Continuity package — its routed observations, answered

1. **Universal process wording vs two pre-pipeline surfaces** (`continuity` §10.1) — answered in
   §13 observation 2: the claim is true of the documented process, and the record is exact; scoping
   it is a writer wording call. Owner: writer (optional), routed.
2. **The released bound widened after the draft was written, and is scoped to article 001**
   (`continuity` §10.2) — recorded and **not adopted here**. This package adds no region, target
   designation, coordinate, duration or figure; the About copy states strictly less than the widened
   bound, so no About claim becomes false either way. Adopting the newly released values would need
   this package's own decision, and there is nothing on `/about/` that wants them.
3. **Released launch-window frame vs the homepage panel's date rows** (`continuity` §10.3) —
   continuity's finding stands: **not a canon conflict** (a window frame and an exact date answer
   different questions, and both are true at their own precision). My option decision is in §11. The
   reader-facing reconciliation, if the human wants one, remains a homepage/writer card. Owner: human
   story owner → writer + homepage owner.
4. **The newsroom index is the only route into the published record today** (`continuity` §10.4) —
   the About copy's two links are honest under that state and claim no readable article body. If
   article 001 ever gets a released detail route, adding that link is a writer/editor change to the
   last paragraph, not a metadata edit.
5. **Measurement-definition note** (`continuity` §10.5) — reproduced: the paragraphs-only body count
   is **404 words**, exactly the writer's figure (independently recomputed here from the nine
   paragraph strings). Heading-inclusive counts differ by definition (draft 442, continuity 454,
   this gate 456 counting link labels). No action; both are inside the 400–550 band.

## 11. The two surface facts this card asked me to weigh

**1. Adding `About` to `website/src/lib/navigation.ts` adds a rendered label to every page's chrome.**
**Recorded, accepted as chrome wording, and handed to the dev card — not treated as a copy change.**

- What changes: `navigation.ts` gains `routes.about = '/about/'` and one item `{ label: 'About',
  href: routes.about }`. Because `SiteHeader.astro` and `SiteFooter.astro` both map over that single
  list, every route's rendered chrome gains **one token in each nav**: the header nav goes from three
  items to four (`News`, `Mission`, `Progress`, `About`) and the footer nav likewise (rendered
  uppercase, `ABOUT`, since `.site-footer` carries `text-transform: uppercase`).
- What does **not** change: no existing page's body copy, headings, metadata, or links. The delta is
  confined to the two nav elements, so the earlier baseline (`t_774e7298`: homepage `innerText`
  1910 → 1932 chars, the sole delta being the footer nav block) is extended rather than broken. The
  retro gate `t_8059da5f` re-verified that surface as `approved` with the footer nav in place; this
  entry is a further delta on the same cluster and is recorded here so the earlier verdict is not
  read as covering a label that did not exist then.
- Card-body accuracy note: the sibling gate named in this card, `t_3302ef7e`, is archived, and its
  record concerns the step-001 article surface, not the nav. The homepage surface it was watching was
  in fact re-verified by `t_8059da5f` (editorial retro gate, `done`) — which is the verdict that
  stands for the current chrome. Recorded so the chain is not read from a stale card reference.
- What I require of the dev: measure and report the `innerText` delta for `/` before/after (as the
  parent card did), confirm the About link resolves in **header and footer** with no dead `href`,
  and re-run the guard suite after the change. If four header items overflow at 320 px, the
  footer-only link is the acceptable fallback — the label does not change either way.
- **Deploy interaction, worth stating explicitly:** the nav entry and `/about/` ship in the same
  build, so the first deployment of the nav label is also the first deployment of the route — one
  human release reference has to cover both. The label is interface copy on pages that are already
  public, which is why this gate records it as a surface delta rather than a silent copy change.

**2. The page deliberately does not restate the released launch-window frame or the lifecycle budget
frame while `website/src/features/mission/facts.ts` publishes `Launch date: To be announced` /
`Landing date: To be announced`.**

**Approved option: keep the frame-only wording as drafted. Do not restate the year or the figure, in
the body or in any metadata string.**

Reasons, in the order they matter to a reader:

- The About page is not the mission-facts page. The facts panel answers "when?" with the released
  answer to _that_ question — the exact dates are not public — while the published article owns the
  window frame. Restating the year on `/about/` would put a number next to a panel that says "To be
  announced" on the same site, without the page being able to explain the difference between a
  window frame and a date.
- The page's own method section promises the record does not run ahead of the mission ("A decision is
  not described here before the part of the story it belongs to"). The frame-only wording is the
  version that keeps that promise visible on the page.
- Nothing on the page becomes weaker: "The announcement also set the programme's schedule and budget
  frames" is true, sourced, and tells the reader where the values live.
- This decides the **option**, not a canon question. Continuity ruled the coexistence of the two
  surfaces not a conflict, and if the human story owner wants reader-facing reconciliation, that is a
  homepage/writer card. Approving the frame-only wording settles nothing about the canon and blocks
  nothing.

## 12. The optional `/404`

**Approved, conditionally.** The copy is judged on its own terms: title `Page not found | Red
Horizon` (28 chars), heading `This page isn't here.`, one 31-word paragraph, two links to `/` and
`/news/` — no mission fact of any kind, so it cannot outrun any release step; it renders inside
`BaseLayout`, so the chrome and the site-wide disclosure persist.

**The condition:** it may only be built together with the `BaseLayout` head opt-out the SEO package
recommends (`seo` §9) — suppress the canonical on the error route and emit
`<meta name="robots" content="noindex">`, used by `404.astro` and by nothing else. `BaseLayout`
derives a canonical from `Astro.url.pathname` for every route and emits it whenever `SITE_URL` is set,
so without the opt-out the error page would ship a canonical for a URL the reader never asked for and
would become indexable the moment the origin is recorded. If the opt-out is not implemented, the
`/404` is **not** approved and must be dropped rather than shipped indexable. `/about/` must never
carry `noindex`.

Two accepted details, recorded so they are not read as defects: the title puts the page state before
the brand (every other title is brand-first) — deliberate and better in a browser tab, and irrelevant
to search because the page is `noindex`; and the meta description is left at the site default
(homepage wording) — inert behind `noindex`, and not worth a new copy string. The 404's title-case
link labels (`Home page`, `Newsroom`) are correct in its context: the About page's lowercase labels
are anchors _inside_ a sentence, while the 404's are standalone links under a separate paragraph.

## 13. Routed observations — non-blocking, numbered, with owners

None of these is a pass/fail row, none changes a fact, a date, a name or Markdown semantics, and none
is applied by this gate. They are listed so the human and the next owner can act on any of them
without re-reading the whole package.

1. **`About` appears twice in the page's opening two lines** — the eyebrow `About` directly above the
   headline `About Red Horizon and how it is made.` No other surface on the site repeats its eyebrow
   in its heading (`Hero`, `MissionPanel`, `NewsList`, `ProgressLog` all use a label that adds to the
   heading). Two minimal fixes exist: drop the eyebrow, or drop "About" from the headline (the SEO
   package's `<title>` deliberately keeps the same frame, so that choice touches metadata wording
   too). **Owner: writer** (with SEO if the headline changes); a one-string change to frozen copy, so
   it needs its own card, not this gate.
2. **Universal method claims vs the two inherited surfaces.** "Every page here came through that
   process." (added as claim row 3b) and "no page hints at what comes later." are stated without
   qualification, while the repository's own record shows the published article's original text was
   gated retroactively, the homepage and newsroom copy came from the Preparing site, and the live
   progress log names two later chapters (`steps.ts`: `Mission architecture` — "Next chapter",
   `Surface operations` — "Later"). Read as statements about the experiment and about the documented
   process (`docs/INSTRUCTIONS.md`, the workflow skill) both are true, and continuity reached the
   same conclusion; I record them because the record must be exact. If the human wants the wording
   scoped to pages that went through the chain, that is a one-clause writer change. **Owner: human
   story owner → writer.**
3. **Four process terms are used without a gloss** — `brief`, `canon`, `editorial pass`,
   `continuity` (`docs/INSTRUCTIONS.md` §Quality baseline: "plain, concrete, accessible, and
   jargon-light. Define a necessary technical term on first use."). `brief` is defined in place by
   its own clause and none of the four is load-bearing: the sentences work with them. The SEO pass
   routed the same optional gloss (`continuity` → "the facts the record has already established").
   **Owner: writer** (optional).
4. **Sentence length.** The 43-word mineralogy sentence is the longest on the page; splitting it
   would raise scannability without losing anything. **Owner: writer** (optional).
5. **One figurative heading** — `How the record moves` does not tell a scanner that the section
   covers release order and corrections; the SEO package offered `How the record moves: release order
   and corrections`. **Owner: writer** (optional).
6. **`/news/` index headings** — the index `h1` repeats the homepage `#updates` `h2`, and card titles
   are `h3` under an `h1`, skipping a level. Both are on that page, not on `/about/`; the heading
   level is an accessibility item. **Owner: dev** (heading level) and **SEO** (index heading).
7. **Distinct-titles guard** — the SEO pass's suggested assertion over `listRoutes()` (every route
   has a distinct, non-empty `<title>`) would have caught the `/news/` duplicate before it shipped.
   **Owner: dev.**
8. **Metadata title frame divergence** — three live titles use three shapes: `Red Horizon | A
   Mars mission in progress` (site default), the newsroom string on `/news/`, and `About
   Red Horizon | How a fictional Mars mission is made` (adopted here). The third carries a
   descriptive second half rather than the site's descriptive second half pattern, and the `/news/`
   title moved twice during this run (`News | Red Horizon` → the newsroom string), so the divergence
   is live rather than settled. It is a metadata-wording convention question, and it does **not**
   reopen this copy approval: an SEO-only edit that keeps the strings inside their limits and changes
   no fact (`About | Red Horizon` is the template-shaped alternative) can be applied to
   `about.astro` afterwards without re-running this gate. **Owner: SEO** (with the record
   reconciliation on `t_ef895257`).
9. **`t_3302ef7e` reference in the card body is stale** — see §11. Nothing to fix in the tree; noted
   so the chain is not read from an archived card. **Owner: orchestrator.**
10. **The two measurements in the draft's own validation section reproduce** — 404 body words and the
    404 title's 28 characters; the heading-inclusive figure is definition-dependent. **Owner: none**
    (recorded).
11. **`/about/` will be the site's first page composed entirely from a per-page string module** —
    `website/src/lib/about.ts` will be the only `about` source, and the page carries no image. If a
    mark plate is ever wanted there, it is a new card with an asset manifest and reused alt wording,
    not a silent addition. **Owner: none** (recorded).

## 14. Confidentiality check

- **What was scanned.** The 29 string literals of the two frozen blocks, extracted by script from the
  draft (the draft file hash `1bf923c3…` was confirmed before and after), plus the metadata strings
  considered for adoption.
- **Guard markers.** The marker list was read at run time from `website/scripts/guards.mjs` (four
  markers) and matched against the copy: **0 hits**. The withheld-material list itself is cited by
  location — `.agents/work/briefs/about-method.md` §"Page content (bounded)", `.agents/work/briefs/001-project-announcement.md` "Forbidden token set", `.agents/work/reviews/001-project-announcement.md` §6, `docs/SCENARIO.md` §Continuity and release controls — and never copied into this record.
- **Structural scan of the copy:** digits **0**, four-digit years **0**, degree signs **0**,
  currency/percent **0**, month names **0**, internal paths or card ids **0**, URLs **0**. The single
  non-ASCII character in the package is the typographic apostrophe in the frozen `/404` heading
  (house style; `steps.ts` uses the same), confirmed again here.
- **Wider scan cited, not repeated:** the continuity gate scanned 36 strings against 83 patterns over
  nine withheld classes and reported one benign hit (the released wording of the three unsettled
  technical questions); its result is unchanged because the draft it scanned is byte-identical.
- **This record itself:** no withheld name, coordinate, date, provider, institution, instrument or
  duration appears in it; released values are referred to as frames rather than restated. Scratch
  scanners live at `/tmp/rh-editor-about/`, outside the repository, so the tree gains no new copy.
- **Surface check:** `check:dist` passed on the current build, `/about/` is absent from `dist/`, and
  the build's route list is `/index.html` + `/news/index.html`.

## 15. Validation

| Check                           | Result and real output                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Gate input hashes               | Taken 01:58:19 CEST: brief `85bf34c8…`, draft `1bf923c3…`, SEO `d210070d…`, continuity verdict `9eb6e72d…`, `site.ts` `dcb2d716…`, `navigation.ts` `9c11b23e…`, `facts.ts` `b97d2726…`, `BaseLayout.astro` `12c2783d…`, `SiteHeader.astro` `d9552a21…`, `SiteFooter.astro` `3bdad929…`, 001 article `5755f92e…`, `docs/GENERAL.md` `7b998176…`, `docs/INSTRUCTIONS.md` `195a02d7…`                                                         |
| Frozen block hashes             | about block `9ab39b70…` (3580 bytes), `/404` block `15bd4ce3…` (439 bytes), draft file `1bf923c3…` (21644 bytes)                                                                                                                                                                                                                                                                                                                           |
| Continuity verdict value        | `continuity clear`, single final label line, open-failure table empty                                                                                                                                                                                                                                                                                                                                                                      |
| Route/guard gate                | `npm --prefix website run check:dist` → exit **0**; `[check-dist] generated routes: /index.html, /news/index.html`; `no reference into a withheld directory, and no withheld file or marker in dist/.`                                                                                                                                                                                                                                     |
| Test suite                      | `npm --prefix website test` → **37 tests passed**, 2 files, 279 ms (01:58:59 CEST)                                                                                                                                                                                                                                                                                                                                                         |
| `/about/` absent from the build | `test -e website/dist/about` → ABSENT                                                                                                                                                                                                                                                                                                                                                                                                      |
| Built titles                    | `dist/index.html` → `Red Horizon \| A Mars mission in progress`; `dist/news/index.html` → `Red Horizon newsroom \| Every published step so far` (re-read at 02:00 after the title moved back; §15)                                                                                                                                                                                                                                         |
| Link targets                    | `src/pages/index.astro` and `src/pages/news/index.astro` exist; `releases.ts` `releasedNewsSlugs = []`                                                                                                                                                                                                                                                                                                                                     |
| String measurements             | `<title>` 56 ≤ 60; description 145 ≤ 155; `h1` 37; standfirst 80; `/404` title 28; body 404 words (paragraphs, recomputed); 404 body 31 words                                                                                                                                                                                                                                                                                              |
| Probe surfaces                  | The `plate-probe` page and the planted page the SEO pass flagged are gone from `src/pages` and from `dist/`                                                                                                                                                                                                                                                                                                                                |
| Not run                         | No build, preview, deploy, DNS/provider action, asset regeneration, or `website/` edit                                                                                                                                                                                                                                                                                                                                                     |
| Re-check before verdict         | `check:dist` re-run and all input hashes re-taken immediately before this record was written. Final re-verification at **02:01:50 CEST** after the `/news/` title moved: `check:dist` exit 0 (same two routes, no withheld file or marker), `npm --prefix website test` → **37/37 passed**, built titles re-read (`/` unchanged; `/news/` the newsroom string). The review record itself carries no self-hash; the card comment records it |

**Tree movement during this run (non-blocking, recorded for exactness; shared checkout):**

- `website/src/lib/site.ts`: `ce1dd441…` (when the continuity gate read it) → `dcb2d716…` at 01:58:19
  (`t_1828a6d4` added `newsTitle` as `News | Red Horizon`) → **`86991815…` at 01:58:51**, where
  `newsTitle` is `Red Horizon newsroom | Every published step so far` after the 001 revision SEO
  re-pass (`t_3bd87425`) settled the string the other way and `t_1828a6d4` moved it into
  `site.newsTitle`. The **disclosure block is byte-identical at every one of those hashes** (re-read
  and compared at 02:00), which is the only part of `site.ts` row 10 of the review table depends on.
- `website/src/pages/news/index.astro` (`14104321…` at 01:59): takes `title={site.newsTitle}`; its
  description is still the `t_2bf95f76` string, which this gate adopts (§9).
- `website/news/001-project-announcement.mdx`: `f5d00e03…` → `5755f92e…` (the concurrent revision
  chain). The five mission-fact claims the About copy paraphrases were re-verified against the
  **current** revision, not the earlier one.
- `website/dist/`: rebuilt at 02:00:38 with the newsroom title restored on `/news/`; the two route
  files and both titles were re-read after that, and `check:dist` was re-run then (exit 0).
- The about-method package itself (brief, draft, SEO, continuity) did not move: every hash still
  matches the one the continuity pass recorded. **This gate's approval does not depend on the
  newsroom title or on which of the two conventions wins** — the About page's own metadata and copy
  are unaffected, and the title question is routed (§9, §13 item 8).

## 16. What remains outstanding

1. **A current human release reference** on `t_e89fb389` before `/about/` and `/404` are first
   deployed. This `approved` is an editorial gate only. Because the nav entry ships in the same build,
   that one release reference also covers the `About` label appearing on every existing page.
2. **`SITE_URL` (approved origin)** is still unrecorded, so no canonical is emitted anywhere — an
   existing open item, not this package's to invent.
3. **Human canon and release approval** — untouched by this gate. No canon question was settled here,
   including the window-frame/date-row coexistence (option decided, canon untouched) and the
   identity-mark variant question.
4. **The optional copy notes** in §13 items 1–5 belong to the writer and would need their own card;
   they do not block the build card and the copy is frozen until a writer changes it.
5. **Deploy-time hygiene** already owned elsewhere: the release checklist must confirm the guard
   suite is green and that no probe or planted file is in `dist/`.

## Final label

`approved` — editorial gate only; frozen copy block named in §2 may be transcribed verbatim, the
`/404` copy only with the condition in §12, and no deployment is implied or prepared.
