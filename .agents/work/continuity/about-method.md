# Continuity check: about-method (`/about/` and the optional `/404`)

## Check metadata

| Field             | Value                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug / route      | `about-method` / `/about/` (optional second item: `/404`)                                                                                                |
| Package           | Brief `.agents/work/briefs/about-method.md`; draft `.agents/work/drafts/about-method.md` (frozen copy strings); SEO package `.agents/work/seo/about-method.md` |
| Timeline step     | `site-foundation` (`docs/PLAN.md` Phase 1 item 2). Advances **no** timeline step; factual bound = the released step-001 announcement plus the method statements `docs/GENERAL.md` / `docs/INSTRUCTIONS.md` own |
| Card              | `t_a0ee9abf` — `mars-ai-simulator-continuity` (parent `t_2bf95f76` SEO; child `t_e7e82218` editorial)                                                     |
| Role / skill      | Continuity redactor; `.agents/skills/editorial-review/SKILL.md` (continuity procedure)                                                                    |
| Checked           | 2026-09-17 01:49–01:54 CEST, against the live shared working tree                                                                                        |
| Package state     | Copy frozen as site strings in the draft; **no** `website/src/pages/about.astro`, **no** `404.astro`, **no** `src/lib/about.ts` / `not-found.ts`, **no** About entry in `src/lib/navigation.ts`; nothing built, deployed or approved |
| Verdict           | `continuity clear` (a continuity gate only — see §11)                                                                                                    |

Method: read-only inspection plus scripted scans. **No build, no preview, no deploy, no canon,
content or `website/` edit** by this card. Scratch checkers live at
`/tmp/rh-continuity-about/{extract,scan2,prose_check}.py`, outside the repository, so no withheld
value enters the tree.

## 1. Gate inputs (re-read and hashed immediately before this verdict, 01:53 CEST)

| Input                                           | SHA-256 (working tree)                                                     | State                                             |
| ----------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------- |
| `.agents/work/briefs/about-method.md`           | `85bf34c8404b09179e17aff6fd810b65d3aa247d433b8627a00c6fb6b91d6700`          | untracked; unchanged during the check             |
| `.agents/work/drafts/about-method.md`           | `1bf923c3ebb639a74db618cd5ec9ca72118496decf887d40cd347c6b71ee0cbc`          | untracked; unchanged during the check             |
| `.agents/work/seo/about-method.md`              | `d210070d9067c5b3bd6eddd8b2bf0b1628c053a37ebcfe14bc7d5bba0bb7d20a`          | untracked; unchanged during the check             |
| `website/news/001-project-announcement.mdx`     | `f5d00e03a38960b7ab95a79d436ed6d16c8418856eb15033b6f0d902ebeb1655`          | **modified vs HEAD, and changed since the retro gates hashed it** (§10.2) |
| `docs/timeline/001-project-announcement.md`     | `3aa1bca721348fcc9d4a2594974480528031726168fb37a0d685f8e4d038e942`          | unmodified; matches the hash the 001 gates recorded |
| `docs/SCENARIO.md` (release controls)           | `c045a4c9ba12823e27cc4e188f709dc1716ad0a87c2c7f5e8aab8e2cffa16293`          | modified vs HEAD (carries the partial-release note, §10.2) |
| `website/src/lib/site.ts` (disclosure)          | `ce1dd441a28f841337df88f10472cc1351a71ede8624329a2cd5c73cb4bd852f`          | untracked; disclosure block unchanged             |
| `website/src/layouts/BaseLayout.astro`          | `12c2783d4a6cb328eb06096384fc972746ba69dca3a88f9e234302c16f3463af`          | untracked                                         |
| `website/src/components/DisclosureNote.astro`   | `86bc3a9be07fc5c8153d0f870d257997555546cd5391e2db19b4a1bb24b6fef4`          | untracked                                         |
| `website/src/lib/navigation.ts` / `releases.ts` | `9c11b23eb5a7caf8321635a3e099e1096647fe2382dbba8d450c5d6eb1612ff5` / `9173aa3a7998a3a5b015448d500e4c3890745ccbc9917e9b3465bed172fe9fee` | untracked; no About entry; released list empty |
| `website/src/features/news/query.ts`            | `961085299d3203067947b5d766258e7c14f81eda0a0d6444912fb084981d782b`          | untracked                                         |
| `website/src/features/mission/facts.ts`         | `b97d2726bdca8a4d14675e8838ae6ee30fd5c725a08da16e8050318f95f495b3`          | untracked                                         |
| `website/src/features/progress/steps.ts`        | `24de1edd91dd0b13e47e970c9a3ef1a3db97c1561e666b7e0b1d5d81b0afcee4`          | untracked                                         |
| `website/src/pages/news/index.astro`            | `0bf2e37b7d4c5f11647962b8d6f639b1a2b8be7e6cf8551f0ac21f44a51ac5fc`          | carries the SEO pass's applied title/description  |
| `website/scripts/guards.mjs` (marker list)      | `65d31b917f99fc2779f95031768041dd159ba9ff107259072071e50624786cea`          | untracked; read for the gated-marker set          |
| `docs/GENERAL.md` / `docs/INSTRUCTIONS.md` / `docs/PLAN.md` / `docs/timeline/README.md` | `7b998176…` / `195a02d7…` / `ba0527e0…` / `212c3366…`        | unmodified during the check                       |

**`git status --short` observation (shared checkout, 01:53 CEST, HEAD `8f005be`):** 53 entries;
the about-method package (`.agents/work/briefs/about-method.md`, `.agents/work/drafts/`,
`.agents/work/seo/about-method.md`, `.agents/work/continuity/`) is **untracked**; the 001 article,
`docs/SCENARIO.md`, `docs/area/AREA.md`, `website/src/pages/index.astro`, `website/src/content.config.ts`
and several skills are modified by other cards. Nothing under `website/src/` was edited by this card.
Because the tree is shared, every input above was re-hashed immediately before this verdict and
nothing is asserted from an earlier snapshot.

## 2. Check 1 — every sentence of §"What is public today"

Compared sentence by sentence against `website/news/001-project-announcement.mdx`
(`publication: published`, `order: 1`), with whitespace normalised. Nine material claims;
all nine agree and none adds a fact.

| # | Claim in the copy | Released source (001) | Result |
| - | ----------------- | --------------------- | ------ |
| 1 | "The public record opens with the programme announcement." | `docs/timeline/README.md`: step 001 has no minimum public prerequisite; the released article is `order: 1`, `category: Announcement 01` | PASS |
| 2 | "Ten national programme teams have agreed to build one uncrewed lander and rover together" | "Ten national programme teams … have agreed to build a single uncrewed Mars lander and rover together" | PASS — the country list, architecture, mass and responsibilities stay off the page |
| 3 | "with a mineralogy mission" | "The purpose is mineralogy and the reconstruction of ancient habitable conditions" | PASS |
| 4 | "to work out whether an ancient equatorial landscape once held water" | "how water changed an ancient equatorial landscape"; "Its question is whether the site once offered water, chemistry, energy sources, and environmental stability…" | PASS — a condensation of released framing; the unit list published in 001 is not repeated |
| 5 | "whether the conditions there could once have supported life as science understands it" | "compatible with life as science understands it" | PASS |
| 6 | "The mission does not search for life, and it does not claim to have found any." | "The mission does not search for living organisms or claim evidence of life" | PASS — preserves the no-life-detection invariant in `docs/timeline/README.md` |
| 7 | "The announcement also set the programme's schedule and budget frames" | "The schedule frame is a launch window in …"; "The lifecycle budget frame is …" | PASS — the frames are referred to, neither released value is restated (draft open item 1, kept frame-only by SEO §10) |
| 8 | "the partner teams vote equally, whatever each contributes" | "each partner holds one vote whatever it contributes" | PASS — the fictional council's name and the vote thresholds stay withheld |
| 9 | "what the rover carries, who builds what, and how the mission reaches Mars are not settled" | "Technical selections — what the rover carries, who builds what, and how the mission reaches Mars — are still ahead of us" | PASS — undecided is stated as undecided; no hint that a decision exists |

The closing clause "and this site will say so until they are" is a commitment to keep stating the
released unsettled status; it names no step and implies no outcome (§5).

§"Where to start" was checked against the live routes as well: "The home page carries the current
state of the mission and the latest updates" → `features/mission/MissionPanel.astro` (`#mission`,
fact row "Current state") plus `features/news/NewsCarousel.astro` (`#updates`); "The newsroom
collects everything published so far" → `website/src/pages/news/index.astro` renders
`getPublishedNews()`, a published-only query. Both link targets exist in the tree (`/` →
`src/pages/index.astro`; `/news/` → `src/pages/news/index.astro`). PASS.

**Nothing on the page exceeds the released record.** The page is strictly *less* specific than the
released article: it omits the region, the target designation, the plates, the window year, the
lifecycle figure and the duration that released step 001 publishes (§10.2 records that the released
set widened after the draft was written; none of it is adopted here).

## 3. Check 2 — method statements: true of this repository's process, and owned

Every method statement is owned by a canonical document or the project's own procedure; none is
invented, and no statement about the world exists outside the released record.

| Claim | Owner / evidence | Result |
| ----- | ---------------- | ------ |
| "Each page starts from an approved brief that states what may be said." | `.agents/skills/create-article-workflow/SKILL.md` ("Reject a missing brief"; the brief fixes the allowed claims); `docs/INSTRUCTIONS.md` "Mandatory working sequence" | PASS, with the scope observation in §10.1 |
| "Agents draft it, check every material claim against the project's reference material" | `docs/INSTRUCTIONS.md` "Source-of-truth order"; `AGENTS.md` ("Cite a canonical source for every material factual claim"); this package's own 15-row claim trace | PASS |
| "review the title and description it will carry in search results" | SEO stage, `create-article-workflow` required outputs | PASS |
| "test it against the mission's own continuity" | continuity stage, same skill | PASS |
| "An editorial pass follows, and then a person decides whether the page is published at all." | editorial final gate; the release gate `website/src/lib/releases.ts`; `AGENTS.md` ("A human alone approves public canon, content publication…") | PASS |
| "Agents do not approve canon, and agents do not publish." | `docs/INSTRUCTIONS.md` "External actions and secrets"; `AGENTS.md` | PASS |
| "Mars AI Simulation: an experiment in whether AI agents can research, write, design, build, and check a website as a coordinated team, with people holding the decisions." | `docs/GENERAL.md` "Purpose" (real-world testbed for multi-agent creative and technical work; tests agent orchestration across writing, image/video generation, continuity review, web development, operations, deployment) | PASS |
| "The record follows the mission's own order. A decision is not described here before the part of the story it belongs to, and no page hints at what comes later." | `docs/PLAN.md` Phase 4 ("never spoil a later one"); `docs/timeline/README.md` (release order; no public page may reveal a later step) | PASS |
| "When something published turns out to be wrong, the correction is explicit and dated rather than quietly rewritten." | `docs/INSTRUCTIONS.md` "Canon and information safety" (corrections explicit, dated, reviewed, not silent) | PASS — a subset of the rule, nothing added |
| "Images and video made for the project are illustrations of the fiction. They are never presented as mission photography…" | `docs/SCENARIO.md` "Continuity and release controls" (generated visuals labelled illustrative, never documentary mission imagery); `docs/GENERAL.md` "Media policy" | PASS |
| "Its partners, its mission, and its findings are invented. The Mars it describes is real." | `docs/SCENARIO.md` header note; `docs/GENERAL.md` "Story world"; the released article's real-Mars grounding sources | PASS |
| "Real places and published science are used to keep the fiction technically grounded, and using them implies no participation or approval." | `docs/SCENARIO.md` header note and release controls (real institutions require explicit review; appearance implies no participation) | PASS |
| "Red Horizon is not a real space programme, agency, or launch… partner teams are fictional national teams, not real institutions." | `docs/SCENARIO.md` coalition section ("fictional national programme teams"; the fictional bodies must not be presented as a real intergovernmental institution); the site disclosure | PASS — see §6 |

Nothing in the copy asserts a fact about the world that is not either released at step 001 or a
statement about this project's own documented method: the page has no third kind of claim.

## 4. Check 3 — withheld material (counts only; no value is copied into this record)

- **Copy and metadata surfaces:** 36 strings — the 22 About copy strings, the 7 `/404` strings, and
  the 7 metadata/revert strings of the SEO package and the writer's superseded pair — scanned against
  83 patterns in nine withheld classes (calendar/provider/site, vehicle, institution/ownership,
  payload/instrument, landing region and coordinates, duration, governance detail, budget, internal
  machinery). **1 hit**, and it is benign: the phrase naming the three *unsettled* technical
  questions, which is the released article's own wording, reviewed and passed by the 001 gates.
- **Structural scan of the copy itself:** digits **0**, degree signs **0**, currency/percent **0**,
  four-digit years **0**, date-like strings **0**, internal paths/card ids **0**, model or tool names
  **0**, em dashes **0**. The single non-ASCII character is the typographic apostrophe in the frozen
  `/404` heading (house style; `features/progress/steps.ts` uses the same).
- **Whole-file scans of the three working papers** (70 / 56 / 87 raw pattern matches): every match
  falls in a benign class — the substring inside the permitted word "uncrewed"; a repository
  *filename* of a different working paper cited by path; and category words used to *describe* what
  is withheld. The only numeric values in the working papers are the two the released article
  already publishes, cited in the draft's own open-item discussion.
- The user-facing copy names **no** withheld value: no payload/instrument/hardware detail, no vehicle
  name or imagery claim, no launch provider or site, no fictional target designation or coordinate,
  no exact date, no supported-lifetime duration, no real institution. Withheld material is cited by
  class and location throughout the package, matching the practice the 001 gates recorded.

## 5. Check 4 — spoiler safety

| Check | Result | Evidence |
| ----- | ------ | -------- |
| Nothing implies a later step with a known outcome | PASS | No step number, no future event, no decision, no result. The three forward-looking sentences are the release-order policy ("published one step at a time, in the order it happens"; "no page hints at what comes later"), the commitment to keep stating the unsettled status, and the two link targets — all consistent with what the released pages already publish (`features/progress/steps.ts`: "later milestones will be added as the record develops"). |
| No heading promises what the body withholds | PASS | One `h1` (37 chars), six `h2`, no skipped level, no `h3`. Every heading describes its own section; none carries a date, a figure, a vehicle, a provider, a region or a later-step noun. |
| No anchor promises anything withheld | PASS | Two anchors only: "home page" → `/`, "newsroom" → `/news/`. Both name their destination; neither promises a page that does not exist. |
| No false affordance | PASS | No link to a `/news/<slug>/` detail route (`releasedNewsSlugs` is empty, so none is generated). |
| The page reveals nothing the released record does not | PASS | The copy is a strict subset of released step-001 material plus method; it omits every released detail of the article's geographic paragraph. |

## 6. Check 5 — the site-wide disclosure

| Check | Result |
| ----- | ------ |
| Non-affiliation clause verbatim in the approved string (`website/src/lib/site.ts`, `disclosure.body`) | Yes — the About paragraph contains the clause word for word (including punctuation up to the sentence end) |
| Page replaces the site-wide disclosure | No — `BaseLayout.astro` renders `DisclosureNote` by default through its `disclosure` slot, so a page composed in the layout cannot drop it; the About paragraph does not contain the disclosure body, so it cannot stand in for it |
| Disclosure string modified by this package | No — `site.ts` `disclosure.mark`/`title`/`body` are unchanged; the only `site.ts` movement in the tree is another card's `splashLabel` value, which is not part of the disclosure |
| Drift | None found. The About sentence *echoes* one approved clause and extends it with "fictional national teams, not real institutions", which is `docs/SCENARIO.md`'s own wording, not a new disclosure claim |

Build-stage condition recorded for `t_e89fb389`: `/about/` and `/404` must render through
`BaseLayout` (as the draft requires) so the chrome and the site-wide disclosure persist.

## 7. Check 6 — `/404`, checked independently

| Item | Finding |
| ---- | ------- |
| Mission facts | **None.** 31 words, no digit, no date, no figure, no name, no place, no vehicle, no provider — the copy cannot outrun any release step |
| Title / heading | 28 characters; the heading sentence is a plain page-not-found line |
| Links | `Home page` → `/`, `Newsroom` → `/news/`; both routes exist and build |
| Duplication | Its one sentence repeats only what the About page's own last paragraph says and what the live routes do (current state on the home page, published list in the newsroom) |
| Metadata | The SEO pass leaves the description at the site default and recommends a `noindex`/canonical opt-out for the error route. That is a metadata-surfacing decision for the build card, **not** a continuity question, and nothing here settles it |

`/404` is clear on its own terms, independently of the About page.

## 8. Check 7 — the SEO package's metadata and links

| Check | Result |
| ----- | ------ |
| `<title>` (56 chars) introduces no unsupported claim | PASS — "fictional Mars mission" is the approved site disclosure's own wording; "how it is made" is the page's second section |
| Meta description (145 chars) introduces no unsupported claim | PASS — "a fictional Mars mission made by Mars AI Simulation" is the body's own first and second sentences; "how a page is written, checked, and released, and what is public today" names three sections the body has |
| No metadata string carries a date, figure, instrument, vehicle, provider, region or later-step noun | PASS — measured: no digits in any recommended string |
| Internal links | PASS — the two links are the body's own sentence, and both targets exist today; the writer's `/news/` vs `/#updates` item is resolved in favour of the live index route |
| Applied change to `website/src/pages/news/index.astro` (title 50 / description 102) | PASS — document-head only; "Red Horizon is a fictional Mars mission" matches the approved disclosure, and "every step the programme has published so far is listed here" is true of the page, which renders the published-only query. No visible copy changed |
| Structured data | PASS — the recommendation is to emit none; no `ld+json`, no `schema.org`, no Open Graph in the tree. Nothing is asserted to a machine that the page does not say to a reader |
| SEO §14 non-ASCII claim | PASS with a note — the claim is scoped to the pass's own proposed metadata strings, which are ASCII; the frozen `/404` heading keeps the house typographic apostrophe. No contradiction |

## 9. Open failure table

**Empty.** No material factual, canon, spoiler, disclosure or metadata failure was found in the
about-method package. No claim was stopped; no corrective card is raised by this gate.

## 10. Routed observations (no failures; nothing settled here)

1. **Universal process wording vs two pre-pipeline surfaces.** §"How a page is made" states the
   chain in the present tense and without qualification, and §"What this is" closes on "Every page
   here came through that process." The repository's own record shows that (a) the released step-001
   article's original text was written outside the pipeline and gated retroactively
   (`.agents/work/reviews/001-project-announcement.md` §4 and §10), and (b) the homepage and the
   newsroom index carry copy inherited from the Preparing site (doc comments in
   `features/mission/facts.ts` and `features/progress/steps.ts`; the site-foundation card forbade
   changing it). Read as a statement about *the experiment* (the sentence's own antecedent) or about
   *the documented process* (which is what `docs/INSTRUCTIONS.md` and the workflow skill define),
   both statements are true, so this is not a failure. It is recorded because the record is exact:
   if the editor or the human wants the wording scoped to releases that went through the chain, that
   is a writer/editor wording call — not a canon decision, and not a change this gate may make to
   frozen copy. **Owner:** `mars-ai-simulator-editor` (`t_e7e82218`), writer if scoped.
2. **The released bound widened after the draft was written.** (a) `website/news/001-project-announcement.mdx`
   is now at a hash (`f5d00e03…`) that differs from the one the retro gates verified (`e7652bd6…`) —
   the revision now in review on its own chain. (b) The recorded human release on that revision's
   brief, and `docs/SCENARIO.md` §"Continuity and release controls", widen what **article 001** may
   publish: the target designation, its centre coordinates, three map plates, and the surface-mission
   duration. Effects here: no About claim becomes false, and the About page states strictly less than
   either version of the bound. The scoping matters in the other direction — that release is limited
   to article 001, so this package must not adopt the newly released values without its own decision.
   Also recorded: this card's check-3 reference to "no supported-lifetime duration (open human
   question in the 001 review §6 item 5)" is partly superseded by that release; the About copy
   carries no duration, so the check passes on both readings. **Owner:** writer/editor if they want
   the factual paragraph refreshed to the widened record; not a continuity failure.
3. **Released launch-window frame vs the homepage panel's date rows** (raised by the SEO pass on
   `t_2bf95f76`'s comment). Continuity finding: **not a canon conflict.** The released article
   publishes a window frame; the homepage panel answers a different question — the exact date — which
   the release controls keep private. Both are true at their own precision and neither contradicts the
   locked calendar, so nothing needed to be stopped. This package changes neither surface and restates
   neither value. If a reader-facing reconciliation is wanted it is a homepage/writer card, not a
   metadata or About edit. Recorded, not settled; if the human story owner reads it as a conflict, the
   decision is theirs, and no check in this record depends on it. **Owner:** human story owner →
   writer + homepage owner if requested.
4. **The newsroom index is the only route into the published record today** (`releasedNewsSlugs`
   empty; no detail route generated). The About copy's links are honest under that state and claim no
   readable article body. If article 001 gets a released detail route, adding that link is a
   writer/editor change to the last paragraph. Recorded for `t_e89fb389` and the editor.
5. **Measurement-definition note.** Body words **404** — the writer's figure reproduces exactly.
   Heading-inclusive counts differ by definition (this check 454, counting the eyebrow, `h1` and link
   labels; the draft 442): inside the 400–550 word band either way. No action.

## 11. What this verdict means, and what happens next

`continuity clear` means: the about-method package agrees with the released step-001 record and with
the locked canon's release controls, adds no fact beyond them, carries no withheld value in its copy,
headings, links or metadata, states uncertainty as uncertainty, and does not hint that a later step
exists or how it turns out.

It is a **continuity gate only**. It is not canon approval, not editorial approval, not a release,
not authorisation to build or deploy, and it decides none of the open human questions listed below.

Still outstanding after this verdict:

- **Editorial final gate** `t_e7e82218` (`mars-ai-simulator-editor`) — including the two copy items
  the SEO pass routed (the newsroom vocabulary and the figurative section heading) and observation
  §10.1 here.
- **Build routes** `t_e89fb389` (`mars-ai-simulator-dev`) — transcribe the frozen strings verbatim,
  render through `BaseLayout` so the site-wide disclosure persists, record the `innerText` delta for
  the nav addition, and implement the `/404` `noindex` opt-out if the editor adopts it.
- **A current human release reference** for `/about/` and `/404` before their first public
  deployment; an editorial `approved` verdict is not a release. `SITE_URL` (approved origin) is
  still unrecorded, so no canonical is emitted today.

Validation completed: §1 hashes and `git status`; §2–§8 as tabled, with the scans in §4 and the
structural checks run by script (outside the repository). Not run, and not this card's: any build,
preview, deployment, DNS or provider action; any asset regeneration; any canon, copy or `website/`
edit.

## Final label

continuity clear
