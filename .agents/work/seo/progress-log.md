# SEO package: progress-log (homepage `#timeline` strings)

## Package metadata

| Field             | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Surface           | Homepage `/` — the progress-log section (`<section id="timeline">`, rendered last), the site strings in `website/src/features/progress/steps.ts`, plus one consistency string in `website/src/features/mission/facts.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Stage / step      | `site-foundation` (homepage chrome copy). Advances no timeline step. Factual bound: the published record — `website/news/001-project-announcement.mdx` (`publication: published`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Card              | `t_365846b7` (`mars-ai-simulator-seo`), parent `t_11eee417` (writer); children `t_1abe4cae` (continuity) → `t_bd1fd539` (editorial gate) → `t_4383dbcc` (dev transcription, also chained behind `t_4b49346b`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Inputs read       | `.agents/work/drafts/progress-log.md` (deck, sha256 `9d2a14e62b7cbec6c61b1943c91fc33624e86bd6d15a66c9efc9366d8796d24e`, 374 lines, re-hashed at the start of this pass); `website/src/features/progress/{steps.ts,ProgressLog.astro}`; `website/src/components/SectionHeading.astro`; `website/src/features/mission/{facts.ts,MissionPanel.astro,Hero.astro}`; `website/src/pages/{index.astro,404.astro}`; `website/src/layouts/BaseLayout.astro`; `website/src/lib/{navigation.ts,seo.ts,site.ts,publication.ts}`; `website/src/features/news/{NewsCarousel.astro,query.ts}`; `website/news/{001-project-announcement.mdx,002-payload-selection.mdx}`; `website/scripts/{guards.mjs,check-dist.mjs}`; `website/dist/**` (last build 09:18 CEST this session); `.agents/work/seo/{about-method.md,001-project-announcement.md}` for the applied-metadata record |
| Conventions read  | `.agents/skills/seo-content/SKILL.md` (including "Verified practice"); `.agents/skills/brand-voice/SKILL.md` (brand-voice, via the `seo-content` preload)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Artifact          | this file (`.agents/work/seo/progress-log.md`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Applied this pass | **nothing under `website/`.** Every string is the deck's §8 block, reviewed here and frozen for the dev card `t_4383dbcc` to transcribe. `git status --short` on `website/` shows no file touched by this card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Verdict           | **approved as proposed** — no required wording change (§10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Status            | recommendations issued; **no approval, no release, no deploy, no canon decision**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

Assumptions recorded (nothing here is treated as approved):

1. `SITE_URL` is still unrecorded, so no route emits a canonical link today, and no origin-dependent
   recommendation here is live. That is the correct state, not a gap.
2. The deck's §8 strings are the writer's, and this pass may not change their values. Everything below is
   either a confirmation, an accepted alternative recorded for the record, or a check I cannot answer with the
   writer's words at all (§7 is implementation, not wording).
3. The homepage document title and meta description are **already applied** values from earlier passes
   (`site.defaultTitle` / `site.defaultDescription`; `about-method.md` §1 table row `/` and §2 record the
   homepage title as "site default, unchanged", and `001-project-announcement.md` §2's surface-inventory rows
   record the homepage title and description as accepted). This package confirms them and supersedes neither —
   §4 names both explicitly.
4. `docs/timeline/` was **not** re-read for this pass. The deck's §5 D1 cites it for the "in hand" half of the
   highlighted step's claim; the public half rests on published article 001. Verifying the canon claim is the
   continuity owner's job on `t_1abe4cae`; no unpublished material appears anywhere in this package, and §6
   reports the scan result rather than a term inventory.

---

## 1. One reader intent

**Single honest intent for `/`.** _What is Red Horizon, and where is the programme now?_

The homepage answers it in four moves: the hero says what the project is doing (`A mission to read Mars
carefully.`), the mission brief gives the at-a-glance facts, the newsroom section lists what has been
published, and the progress log states which step is done, which is in hand, and which is not settled. The
progress log is the **state** answer; it must not try to be the record (that is `/news/`) or the identity
answer (that is `/about/` — the three-route division recorded in `about-method.md` §1).

- **Primary query theme:** the brand name plus a state question — `Red Horizon` + "mission / progress /
  status / announcement". People who have met the name want to know how far the programme has got.
- **Secondary themes the new wording honestly serves:** "Mars mission coalition / international Mars mission
  partners", "Mars rover mission architecture", "why study water on Mars / ancient equatorial landscape",
  "Mars surface operations".
- **Queries this section must not chase:** live Mars news ("Mars rover news", "Perseverance", "ExoMars"),
  "Mars 2031 launch" (the 2031 window is 001's fictional programme frame and is not repeated here at all),
  landing-region or instrument queries (step 003+, withheld), and any query whose answer waits for the
  release-gated step 002.
- Theme (one phrase, used consistently): _the public record, one step at a time._

---

## 2. Check 1 — heading outline

`SectionHeading` (`website/src/components/SectionHeading.astro`) renders the section title as `h2` unless a
page passes `level={1}`; `ProgressLog.astro:12` passes no `level`, and `ProgressLog.astro:21` renders each
step title as `h3`. The section is `aria-labelledby="timeline-title"`, which is the `id` the component puts on
the `h2`.

Measured on both builds (`document.querySelectorAll('h1,h2,h3')` in the rendered page):

| # | Current (repo `dist/index.html`, built 09:18)          | Proposed (probe build of the deck's §8 strings)        |
| - | ------------------------------------------------------ | ------------------------------------------------------ |
| 1 | `H1` A mission to read Mars carefully.                 | `H1` A mission to read Mars carefully.                 |
| 2 | `H2` The programme at a glance                         | `H2` The programme at a glance                         |
| 3 | `H2` The story starts before launch.                   | `H2` The story starts before launch.                   |
| 4 | `H3` A Mars mission takes shape in public. (news card) | `H3` A Mars mission takes shape in public. (news card) |
| 5 | `H2` One step at a time. (id `timeline-title`)         | `H2` One step at a time. (id `timeline-title`)         |
| 6 | `H3` Coalition planning                                | `H3` **Coalition and purpose**                         |
| 7 | `H3` Mission architecture                              | `H3` Mission architecture (unchanged)                  |
| 8 | `H3` Surface operations                                | `H3` Surface operations (unchanged)                    |

**Verdict: the order is still correct under the new titles.** Level runs `h1 → h2 → h3` with no skipped
level; the three step `h3`s still sit inside the one `h2` that carries the section name, which is the outline
`<ol>` of a titled list should produce. One `h1` on the page (the hero), as before.

**No heading text duplicates the section title or the eyebrow.** Measured, the section's own strings are
`Progress log` (eyebrow, 12 chars), `One step at a time.` (h2, 19), and the three step titles `Coalition and
purpose` (21), `Mission architecture` (20), `Surface operations` (18) — five distinct strings, none repeating
another, and none repeating the newsroom `h2` or the card `h3` above them.

**One change worth naming as an improvement, not a defect.** `Coalition planning` → `Coalition and purpose`
also removes a heading that a reader could misread as an activity still running directly above a step the log
now labels `Announced`. The heading text now states the outcome, which is what the `Announced` state and the
linked article both say.

No change required.

---

## 3. Check 2 — the one new internal link

**Proposed link:** `Read the announcement` → `routes.newsArticle('001-project-announcement')` =
`/news/001-project-announcement/`, on step 1 only.

| Question the card asks                                          | Evidence                                                                                                                                                                                                                                                                                                                                    | Result                           |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Is the target the published article that carries step-1 claims? | `website/news/001-project-announcement.mdx` frontmatter `publication: published`, `status: Programme announced`, `order: 1`. Step-1 detail claims: "Ten national programme teams" ← `:23–26`; "one uncrewed lander and rover" ← `:25–26`; "how water changed an ancient equatorial landscape" ← `:29–32`. All three are 001's own sentences | **yes**                          |
| Does the route exist?                                           | Probe build route list: `/404.html, /about/index.html, /index.html, /news/001-project-announcement/index.html, /news/index.html`; the article is also listed on `/news/` (`href="/news/001-project-announcement/"`)                                                                                                                         | **yes, live and listed**         |
| Is the route form right?                                        | Rendered `href="/news/001-project-announcement/"` — from `routes.newsArticle(slug)`, with the trailing slash `astro.config.mjs` (`trailingSlash: 'always'`) requires. A hand-typed path without the slash would not resolve                                                                                                                 | **yes**                          |
| Anchor text descriptive of the destination, not "read more"?    | `Read the announcement` (21 chars) names the action and the destination's document type, and it is not a bare URL, not "click here", and not "read more". It also does not restate the article's own title (`A Mars mission takes shape in public.`) or duplicate the card's `linkLabel` (`Announcement summary`)                           | **acceptable — keep as written** |
| Does any step link to an unpublished article?                   | Only step 1 carries a `link` at all; step 2 (which is where 002 would belong) carries none, and the built homepage contains zero occurrences of `002` and no `/news/002-payload-selection/` route                                                                                                                                           | **none**                         |

**Link inventory of the page after the change** (measured `href` set on the built probe homepage):
`#updates`, `/#mission`, `/#timeline`, `/#top`, `/about/` (footer), `/news/`, `/news/001-project-announcement/`
(news card), `/news/001-project-announcement/` (progress step). No new link is recommended beyond this one:
the homepage is chrome around four sections, not a hub page, and every additional link would duplicate the
nav or the newsroom listing.

**Accepted, recorded alternative for the anchor.** `Read the announcement` is generic in the sense that it
carries no subject noun. The subject-bearing variant I considered — e.g. a label built from the article's own
title — was rejected because (a) it restates a title the card beside it already shows, (b) it would exceed the
step-detail register, and (c) it would make the frozen string depend on an article title that a future
editorial pass may change. Because the anchor must either be accepted or sent back to the writer (§10's
verdict rule), acceptance is the correct call: the anchor is honest, specific as to document type, and not a
"read more".

---

## 4. Check 3 — homepage indexable prose, and the metadata question

### 4.1 What changes in visible homepage text

Measured line by line from the rendered `#timeline` section (script `/tmp/seo-progress-compare.py`):

| Element                       | Current (chars) | Proposed (chars)  | Note                                                                          |
| ----------------------------- | --------------- | ----------------- | ----------------------------------------------------------------------------- |
| eyebrow `Progress log`        | 12              | 12                | unchanged                                                                     |
| title `One step at a time.`   | 19              | 19                | unchanged                                                                     |
| description                   | 145             | **184**           | rewritten; no longer promises milestones nothing adds                         |
| step 1 state / title / detail | 16 / 18 / 66    | **9 / 21 / 137**  | `Current progress`/`Coalition planning` → `Announced`/`Coalition and purpose` |
| step 2 state / title / detail | 12 / 20 / 68    | **16 / 20 / 122** | moves to the highlighted step; detail is 001's own sentence                   |
| step 3 state / title / detail | 5 / 18 / 73     | 5 / 18 / **78**   | `the surface vehicle` → `the rover`                                           |
| new link label                | —               | +21               | `Read the announcement`                                                       |
| section total visible text    | 472             | **662**           | +190 chars                                                                    |

The section grows by about 40% of its own text, and the page by ~190 characters on a homepage that renders
~2,060 characters of visible text in total. Measured in the browser at a 1280 px viewport, with the site's
CSS applied: the section's rendered height goes **641 px → 703 px** (+62 px, and no horizontal overflow —
`document.body.scrollWidth` is 1265 px against a 1280 px viewport on both builds). Every added sentence is a
claim, a source sentence, or a reading instruction; none of it is filler, and none of it is a keyword list.

### 4.2 Does the new wording help or harm the homepage's reader intent?

**It helps, and it fixes a defect that was actively costing the homepage its honesty.**

- The homepage's state answer was wrong in public: the log flagged `Coalition planning` as `Current progress`
  while the published article had already announced the coalition, its purpose and its partners, and while the
  sentence describing the real open work (001's `:73–74`) sat in step 2 under `Next chapter`. A reader
  arriving from a search for the programme's status was told the programme was one step behind where its own
  published record said it was.
- The old description promised a mechanism the page does not have ("later milestones will be added as the
  record develops" — nothing adds them: `progressSteps` is a hand-written array with no relation to the news
  collection). The replacement describes how to read the list instead of promising maintenance.
- The new headline step gives the section a plain-language statement of what is actually open — "what the
  rover carries, who builds what, and how the mission reaches Mars" — which is 001's own sentence, so the
  homepage's most load-bearing state claim is now quoted from the record rather than paraphrased beside it.
- The section's three steps now read as _done / in hand / not settled_, which is the one reading order a
  progress log owes a first-time reader, and they read that way without stating anything step 002 has in the
  release gate.

**Where it costs something (stated, accepted).** The description is now one sentence of reading instructions
("Published steps link to the article that carries them; …") rather than a statement about the mission. It
spends ~35 words on framing inside a section whose eyebrow and title are 5 words. The deck put the state claim
in the highlighted step deliberately — a description that states the current step would go stale every time the
step moves, which is the exact defect this pass removes. I accept the trade and recommend no change; the
alternative (a description that names the current step) is the option the deck already rejected with a
recorded reason.

### 4.3 Does the homepage `<title>` / meta description need a compensating change?

**No. Confirmed: no metadata change.** The card's premise places the homepage pair in `src/lib/seo.ts`, but
that file holds only `canonicalUrl` — the pair lives in `src/layouts/BaseLayout.astro` (props, with
`src/lib/site.ts` `defaultTitle` / `defaultDescription` as the defaults) and `src/pages/index.astro` passes
neither prop, so the homepage inherits the site defaults.

| Surface                           | Applied value (measured)                                                                                                         | Decision                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage `<title>`                | `Red Horizon \| A Mars mission in progress` (40 chars)                                                                           | **keep — no change.** Previously settled: `about-method.md` §1 (`/` row: "site default, unchanged") and §2, and `001-project-announcement.md` §2 (surface inventory row: "brand-first, no topic noun; acceptable for the only page"). The string stays true under the new step: the page is still a mission in progress, and the section now shows exactly which step. |
| Homepage meta description         | `Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface.` (108 chars ≤ 155) | **keep — no change.** It is a range statement about what the record covers, not a claim about the current step, so moving the highlight inside the section cannot falsify it. It is also a previously applied value and is superseded by nothing here.                                                                                                                 |
| `<meta name="description">` count | exactly **1** on the built homepage (verified on the probe build)                                                                | the new 184-character section description is **visible page prose and not a meta description**; it renders inside `SectionHeading`'s `.section-description` paragraph. It is over the 155-character meta budget, which is harmless where it sits and would matter if a later pass ever tried to reuse it as one — recorded so that reuse is not attempted silently     |
| `robots` / canonical              | none emitted (`SITE_URL` unset)                                                                                                  | correct state, unchanged                                                                                                                                                                                                                                                                                                                                               |

**No conflict with brand voice or with the three-route division.** The new strings keep the mission's own
voice (no "fiction" word, which belongs to `/about/` and the footer disclosure), state no date, figure,
instrument, vehicle, or provider, and leave `/news/` as the place that answers "what has been published".

---

## 5. Check 4 — terminology and searchable nouns

**Verdict on the writer's deliberate choice — keep as written.** Step 2's detail uses the record's own "what
the rover carries" rather than the term `payload`.

Reasoning, with the measurement behind it:

- `payload` is **not** published vocabulary anywhere yet: 0 occurrences in `website/news/001-project-announcement.mdx`
  (case-insensitive), 7 in `website/news/002-payload-selection.mdx`, which is `publication: draft` behind a
  blocked release record. Putting the word on the homepage would import the vocabulary of the still-gated
  step into the homepage's chrome, and 002's whole subject _is_ payload selection — the closest the homepage
  could come to hinting at an unreleased step without stating a fact from it.
- The query intent is served anyway. At a 1280 px viewport the homepage now carries these terms (counted
  case-insensitively over the rendered page, proposal build, script `/tmp/seo-progress-terms2.py`): `mars` 11,
  `mission` 14, `rover` 4, `fictional` 5, `ai-assisted` 3, `programme` 4, `announcement` 4, `surface` 3,
  `launch` 3, `coalition` 3, `architecture` 2, `terrain` 2, `rocks` 2, `lander` 2, `water` 1. "What a Mars rover
  carries" is plain language for the same intent, and it is the sentence the published record already owns.
- The step titles are searchable, plainly worded nouns — `Coalition and purpose`, `Mission architecture`,
  `Surface operations` — and none of them is jargon. `Surface operations` in particular is the phrase a reader
  would use, and step 3's detail now names `the rover` instead of `the surface vehicle`, which removes a real
  ambiguity (the landing platform is also a surface vehicle).

**Rejected alternative (recorded):** adding `payload` to step 2's detail. Rejected because the published
record does not use the word, and because a homepage may not carry the gated step's vocabulary ahead of its
release; the same intent is met by the record's own phrasing.

**Rejected alternative (recorded):** naming the region (`Margaritifer Terra`, published in 001 `:29–30`) in
step 1's detail instead of "an ancient equatorial landscape". Rejected: the step detail summarises the
announcement rather than the geography, the place name is one click away in the linked article, the name is
already on `/news/001-project-announcement/` where it belongs, and a step that names the region invites the
same detail in step 3, where region specifics are withheld. No search intent on the homepage depends on it.

**One coverage note, no change required.** The word `Mars` does not appear in the new description or in step
1's or step 3's detail (it does appear in step 2's: "how the mission reaches Mars"). The page carries `Mars` 11
times elsewhere — hero, mission brief, disclosure, title — so the page-level term coverage is unchanged, and
repeating `Mars` inside two more sentences to reach a count would be the stuffing this role exists to refuse.

**Outside-section consistency string (`facts.ts`, deck §8.2).** `{ label: 'Current state', value: 'Mission
architecture' }` — the label/value register of the fact grid is short and noun-like (`Red Horizon`,
`To be announced`), and `Mission architecture` matches it. It is also the same claim the highlighted step
makes, so the at-a-glance panel and the log stop contradicting each other. From this pass's remit it is
meaning-neutral (no title, description, slug, heading, link, or alt text involved) and I have no objection to
it. Recorded conflict it does **not** resolve, and must not be read as resolving: the same grid still reads
`Launch date: To be announced` while published 001 carries a 2031 launch window. That is a pre-existing
coherence question already routed by `about-method.md` §5 row 5 (continuity `t_a0ee9abf`), unchanged by this
pass.

---

## 6. Check 5 — disclosure audit of every recommended metadata surface

Every surface this pass could recommend is listed, with its state after the change and why it cannot outrun
the record.

| Surface                             | Recommendation                                                                                                                                                                                                                           | Later-step exposure                                                                                                                                                                                                                                                             |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage `<title>`                  | unchanged (`Red Horizon \| A Mars mission in progress`)                                                                                                                                                                                  | none — brand + progress state, no step, no date                                                                                                                                                                                                                                 |
| Homepage meta description           | unchanged (108 chars)                                                                                                                                                                                                                    | none — range statement; no 2031 window, no instrument, no region                                                                                                                                                                                                                |
| `robots` / canonical                | unchanged (no canonical while `SITE_URL` is unset)                                                                                                                                                                                       | none                                                                                                                                                                                                                                                                            |
| Section heading text (h2)           | unchanged (`One step at a time.`)                                                                                                                                                                                                        | none                                                                                                                                                                                                                                                                            |
| Step titles (h3 ×3)                 | as the deck: `Coalition and purpose`, `Mission architecture`, `Surface operations`                                                                                                                                                       | none — the third names work the record has not reached, in the same words the section already published                                                                                                                                                                         |
| Step states                         | `Announced`, `Current progress`, `Later`                                                                                                                                                                                                 | none — no timing, no percentage, no completion                                                                                                                                                                                                                                  |
| Step details                        | as the deck (137 / 122 / 78 chars)                                                                                                                                                                                                       | none from step 002: the highlighted detail is 001's own sentence (`:73–74`) about the _open_ selections, not 002's answer. Nothing states a step-003+ fact: no vehicle designation, no landing-area detail, no launch provider, no dates, no surface-life figure, no instrument |
| New internal link + anchor          | `/news/001-project-announcement/` — a published route                                                                                                                                                                                    | none — no link to 002, and no link whose anchor hints at an unreleased article                                                                                                                                                                                                  |
| Image alt text                      | **no recommendation** — no new image; the section's markers are decorative CSS (`span`s inside `.timeline-marker`, no `img`, no `role`)                                                                                                  | none                                                                                                                                                                                                                                                                            |
| Structured data                     | **none recommended** — `NewsArticle` still needs a recorded first-publication date, a byline policy, a stable released URL and a machine-readable fiction disclosure; `Organization` markup for a fictional programme must never be used | none                                                                                                                                                                                                                                                                            |
| Sitemap / `robots.txt` / Open Graph | not touched by this change                                                                                                                                                                                                               | none                                                                                                                                                                                                                                                                            |

**Confidentiality scan (result, not an inventory).** The four markers the site's own fail-closed guard exports
as `gatedTextMarkers` in `website/scripts/guards.mjs` were searched programmatically
(`/tmp/seo-progress-gated.py`, which reads the list from that file so no token is copied into this package or
into any repository file): **0 hits** across the deck's §8 strings, and **0 hits** in the built homepage of the
probe. Independently, the site's own post-build guard ran over the probe's build —
`[check-dist] no reference into a withheld directory, and no withheld file or marker in dist/.` — and the
probe's only added material is the deck's §8 block. The withheld classes the deck itself lists by class
(vehicle designation and design step, landing-area detail, launcher and spaceport, dates and surface-life
figure, instrument names, real institutions, and the answers to the open technical decisions) are absent from
every recommended string; §5 records the two places where a term or a name was considered and left out.

---

## 7. Implementation constraints for the dev card (verified — not a wording issue)

This pass found two rendering facts the transcription card must handle. Neither changes a string, and neither
blocks the verdict in §10.

1. **The existing detail rule keys on position, and appending the link after the detail `<p>` silently
   unstyles the linked step.** `ProgressLog.astro` styles the detail paragraph with
   `.timeline-list li > div:last-child > p:last-child`. With the anchor appended after the paragraph, that
   selector no longer matches step 1's detail. Measured in the browser on the same build:

   | Step                               | matches the rule | font-size | colour             | width           |
   | ---------------------------------- | ---------------- | --------- | ------------------ | --------------- |
   | step 1 (link appended after `<p>`) | **false**        | 16 px     | `rgb(255,248,232)` | 100% (636 px)   |
   | step 2                             | true             | 15.2 px   | `rgb(220,198,177)` | 480 px (30 rem) |
   | step 3                             | true             | 15.2 px   | `rgb(220,198,177)` | 480 px (30 rem) |

   So the one step that gains a link would render its detail brighter, larger and full-width while its two
   neighbours stay muted and measured — a visible inconsistency that no test or guard covers. **Verified
   remediation:** giving the detail paragraph a class and keying the rule on the class (probe: `p.timeline-detail`
   with `.timeline-detail { … }`) restores all three steps to 15.2 px / `rgb(220,198,177)` / 480 px, and the
   build still passes the guard with the same five routes. The transcription card may implement the link
   placement however it prefers, provided the detail paragraph keeps the rule's styling on the linked step.
2. **No rule exists for the new link.** Its unstyled box measures 185 px at 16 px in the primary text colour,
   immediately under a muted 15.2 px paragraph. The dev card owns the styling; this package only records that
   it must be added (and that the link is the only interactive element inside `.timeline-list`).

Two smaller notes for the same card:

- **Import placement.** ESM allows `import { routes } from '../../lib/navigation'` anywhere at top level, but
  placing it after the interface (as the deck's §8.1 ordering might suggest, "the import added above it") is
  legal yet against the file's own ordering. The file head is the right place; the probe built, type-checked and
  linted clean there.
- **No `website/` file was edited by this card.** The probe lives entirely outside the repository
  (`/tmp/seo-progress-root.Dif2LP/repo/website`, a copy with `node_modules` symlinked), so the dev card's
  transcription remains the first change to those files.

Evidence for the probe: `npm run build` → 5 routes, guard clean; `npx astro check` → "44 files, 0 errors,
0 warnings, 0 hints"; `npm run lint` → clean.

---

## 8. Validation performed on this card

| Check                                | Command / source                                                                                                          | Result                                                                                                                                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deck read and hashed                 | `sha256sum .agents/work/drafts/progress-log.md`, `wc -l`                                                                  | `9d2a14e6…` (matches the parent card's handoff), 374 lines                                                                                                                                                                                                              |
| Current strings read from source     | `read_file` on `steps.ts`, `ProgressLog.astro`, `SectionHeading.astro`, `facts.ts`                                        | §4.1 "current" column matches the files byte-for-byte                                                                                                                                                                                                                   |
| Proposed strings render and build    | copy of `website/` at `/tmp/seo-progress-root.Dif2LP/repo/website` with the deck's §8 block applied, then `npm run build` | 5 routes (`/`, `/news/`, `/news/001-project-announcement/`, `/about/`, `/404`); `[check-dist]` clean                                                                                                                                                                    |
| Heading outline, current vs proposed | rendered DOM `querySelectorAll('h1,h2,h3')` over both builds (HTTP, CSS applied)                                          | §2 table; `h1 → h2 → h3`, no duplicate heading text                                                                                                                                                                                                                     |
| Link target, route form, anchor      | built probe `dist/index.html`: `href="/news/001-project-announcement/"`; `dist/news/index.html` lists the same route      | target published, listed, trailing-slash correct                                                                                                                                                                                                                        |
| No link to an unpublished article    | `re.findall("002", dist/index.html)` and the full `href` set of the built homepage                                        | 0 occurrences of `002`; no `/news/002-payload-selection/` route                                                                                                                                                                                                         |
| Rendered layout / growth             | browser measurement at 1280 px on both builds: section height, detail widths and computed styles, `body.scrollWidth`      | 641 px → 703 px; details 480 px / 15.2 px / muted on all three steps after §7.1's remediation; no overflow                                                                                                                                                              |
| String measurements                  | `/tmp/seo-progress-measure2.py`                                                                                           | description 184 (was 145); details 137 / 122 / 78 (were 66 / 68 / 73); every proposed string under the 155-character meta budget is not required — the 184-character string is visible prose, and the page carries exactly one `<meta name="description">` at 108 chars |
| Metadata surfaces on the built page  | `grep`/regex over probe `dist/index.html`                                                                                 | title, description, `robots`, canonical unchanged; no new meta surface                                                                                                                                                                                                  |
| Confidentiality                      | `/tmp/seo-progress-gated.py` (markers read from `website/scripts/guards.mjs`), plus the site's own `postbuild` guard      | 0 hits in the strings, 0 hits in the built page, guard exit 0                                                                                                                                                                                                           |
| Type/lint on the probe               | `npx astro check`, `npm run lint`                                                                                         | 0 errors / 0 warnings / 0 hints; eslint clean                                                                                                                                                                                                                           |
| No `website/` file edited            | `git status --short`                                                                                                      | only other cards' in-flight files appear (see §9); no file this card touched                                                                                                                                                                                            |

**Shared-checkout note.** The repository was moving while this pass ran, and one card landed mid-pass: the
identity-mark card (`t_183d9f11`) committed `c87101c` at 09:21 CEST, which modified
`website/src/features/mission/Hero.astro` and `website/src/lib/assets.ts` while I was measuring. I re-read
`Hero.astro` after the commit: the change swaps only the hero image source (`identityMark` →
`identityMarkTransparent`); the hero's `h1`, summary and `Read the first announcement` link are byte-identical,
so §2's outline and §9's first observation stand as measured. The `dist/` I measured as "current" is the 09:18
build (the last one on disk before my session); the proposed strings were measured on my own copy under
`/tmp`, so no concurrent edit can have influenced §2–§5. `git status --short` at the end of the pass shows only
the deck, this package, and the untracked `.agents/work/releases/` directory belonging to another card — no
file this card touched.

---

## 9. Observations routed, not required (no change requested from this card)

1. **Two different announcement links in the page body.** The hero's `Read the first announcement` points at
   `#updates` (the on-page newsroom section, whose first card then links to the article), while the new
   progress link `Read the announcement` goes straight to `/news/001-project-announcement/`. Both are honest
   and both work; the pair reads as one phrase doing two things. Not a defect this card may fix — the hero's
   link is outside the progress log's strings — and not worth a corrective card while the website queue has a
   tail. Recorded for the next homepage pass; if it is ever changed, `about-method.md` §6 still records
   `/#updates` as the correct target for _newsroom content on the homepage_.
2. **One word in the deck's rationale, for the editorial gate.** The deck drops step 2's old detail because
   "testable" asserts an outcome the record does not carry; 001 does in fact say "the practical decisions that
   turn a mission idea into a testable plan" (`:76–77`) and "that comparison is what makes a reading of the
   past testable" (`:39`). What the old string over-claimed was the named artefacts ("vehicle and science
   plan"), not the adjective. The replacement is still the better sentence (it is 001's own list), so this
   needs no change — recorded so the editorial gate does not have to re-derive it. Owner: `t_bd1fd539`.
3. **Fact-grid launch date vs 001's 2031 window** — pre-existing, already routed (`about-method.md` §15 row 5 →
   continuity `t_a0ee9abf`). Unchanged by this deck, and not re-opened here.

---

## 10. Verdict, and what is outstanding

**Verdict: approved as proposed.** All five checks pass with the wording exactly as the deck freezes it in
§8: the heading order holds (`h2` section title, `h3` steps, no duplicate heading text); the single new
internal link targets the published article that carries step 1's claims, with a descriptive anchor, the
correct trailing-slash route form, and no link into an unpublished article; the rewritten homepage prose
improves the page's honest state answer and needs no compensating `<title>`/meta-description change (both
confirmed as already-applied values this pass does not supersede); the terminology holds up without stuffing
(`payload` and the region name both considered and deliberately left out); and no recommended metadata surface
names a step the record has not released.

**No required wording change, so no corrective writer card and no block.** The only issues found are
implementation constraints on the transcription card (§7: the `p:last-child` styling collision, the unstyled
link, import placement) — they belong to `t_4383dbcc` and change no string.

Outstanding before anything here is public: the continuity verdict (`t_1abe4cae`), the editorial gate
(`t_bd1fd539`), and the human release reference that the first public deployment of the homepage still
requires. An editorial `approved` is not a release.

**Next owner:** `mars-ai-simulator-continuity` on `t_1abe4cae`.

---

## 11. Lessons offered to the `seo-content` skill (not applied — no skill file was edited by this card)

Recorded here rather than smuggled into `.agents/skills/seo-content/SKILL.md`, because the project ships skill
lessons through their own card (cf. the editorial-review lessons card) and this card's scope is the package.

1. **A rule keyed on position breaks the moment a sibling is appended, and nothing tests for it.** Templates
   that style a paragraph as `li > div:last-child > p:last-child` lose that rule for any item where a link or
   caption is added after the paragraph. Read the component's `<style>` block for positional selectors before
   approving new markup, and verify parity by comparing `getComputedStyle` of the same element in _every_ item
   — the presence of the new href is not evidence the styling survived. Report the measured values and one
   verified remediation.
2. **Measure candidate strings on a served build, never on `file://`.** Absolute asset paths (`/_astro/…`) do
   not resolve from `file://`, so computed styles and line counts come back as unstyled defaults and any
   conclusion drawn from them is worthless. Copy the site outside the repository, apply the candidate strings,
   build, serve `dist/` (`python3 -m http.server <free port> --directory <dist>` as a tracked background task,
   then a `curl` readiness check) and measure over `http://127.0.0.1:<port>/`. Two traps: the copy needs the
   `docs/` subtrees the site imports (`docs/brand`, `docs/area`, referenced by `src/lib/assets.ts`) beside
   `website/`, or the build fails on `UNRESOLVED_IMPORT`; and never stop the server with
   `pkill -f "http.server <port>"` — the pattern matches the pkill command's own shell and kills it. Find the
   pid with `ss -ltnp` and `kill` that.
3. **Derive the gated-marker list at scan time instead of copying it.** Read the markers out of
   `website/scripts/guards.mjs` (`gatedTextMarkers`) inside the scan script, so no repository file — including
   the package — ever becomes a copy of the token inventory, and report hit counts only.
