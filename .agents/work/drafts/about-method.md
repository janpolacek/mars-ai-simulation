# Draft: about-method — `/about/` (and optional `/404`) prose

## Draft metadata

| Field                | Value                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug / route         | `about-method` / `/about/` (optional second item: `/404`)                                                                                                                         |
| Content type         | Site page copy (static page strings), **not** a news article — decided in `.agents/work/briefs/about-method.md` §"Deliverable decision"                                            |
| Timeline step        | `site-foundation` (route authority: `docs/PLAN.md` Phase 1 item 2). Factual bound: the step-001 public release only.                                                              |
| Card                 | `t_16ec6ba2` (`mars-ai-simulator-writer`), child of `t_774e7298`                                                                                                                  |
| Brief                | `.agents/work/briefs/about-method.md`                                                                                                                                             |
| Sources read         | `website/news/001-project-announcement.mdx`; `docs/timeline/001-project-announcement.md`; `docs/GENERAL.md`; `docs/INSTRUCTIONS.md`; `docs/SCENARIO.md`; `docs/PLAN.md`; `docs/brand/BRAND.md`; `website/src/{lib/site.ts,lib/navigation.ts,lib/releases.ts,content.config.ts}`; `website/src/components/*`; `website/src/features/**`; `.agents/work/reviews/001-project-announcement.md` |
| Status               | `draft` — not approved, not published, no route built. Awaiting SEO → continuity → editorial.                                                                                     |
| Public/canon impact  | No new canon. Re-states step-001 public facts and the project's own method.                                                                                                        |
| Human release reference | **None.** An editorial `approved` review is not a release (`.agents/skills/create-article-workflow/SKILL.md` "Approval boundary").                                              |

Word counts and metadata lengths below were produced by a scratch script outside the repository
(`/tmp/about-method-measure.py`); the numbers are measured, not estimated.

## The page as a reader sees it

**About**
# About Red Horizon and how it is made.
*A fictional Mars mission, published one step at a time, in the order it happens.*

### What this is

Red Horizon is a fictional Mars exploration programme. Its partners, its mission, and its findings
are invented. The Mars it describes is real.

The fiction is produced by a real project, Mars AI Simulation: an experiment in whether AI agents
can research, write, design, build, and check a website as a coordinated team, with people holding
the decisions. Every page here came through that process.

### How a page is made

Each page starts from an approved brief that states what may be said. Agents draft it, check every
material claim against the project's reference material, review the title and description it will
carry in search results, and test it against the mission's own continuity. An editorial pass
follows, and then a person decides whether the page is published at all. Agents do not approve
canon, and agents do not publish.

### How the record moves

The record follows the mission's own order. A decision is not described here before the part of the
story it belongs to, and no page hints at what comes later. When something published turns out to be
wrong, the correction is explicit and dated rather than quietly rewritten.

Images and video made for the project are illustrations of the fiction. They are never presented as
mission photography, and they are not evidence of anything on Mars.

### What is public today

The public record opens with the programme announcement. Ten national programme teams have agreed to
build one uncrewed lander and rover together, with a mineralogy mission: to work out whether an
ancient equatorial landscape once held water, and whether the conditions there could once have
supported life as science understands it. The mission does not search for life, and it does not
claim to have found any.

The announcement also set the programme's schedule and budget frames, and the partner teams vote
equally, whatever each contributes. The technical work is still ahead: what the rover carries, who
builds what, and how the mission reaches Mars are not settled, and this site will say so until they
are.

### What this is not

Red Horizon is not a real space programme, agency, or launch. It is not affiliated with or endorsed
by any real space agency, and its partner teams are fictional national teams, not real institutions.
Real places and published science are used to keep the fiction technically grounded, and using them
implies no participation or approval.

### Where to start

The home page carries the current state of the mission and the latest updates. The newsroom collects
everything published so far.

Measured: **404 words** of body paragraph text (442 including headings and standfirst). Links
in the last paragraph: "home page" → `/`, "newsroom" → `/news/`.

## Transcribable strings for `website/src/lib/about.ts`

The dev card transcribes this block verbatim; it does not reword, reorder, or re-punctuate it. The
final property names are the dev's; the string values are frozen.

```ts
export const about = {
    eyebrow: 'About',
    title: 'About Red Horizon and how it is made.',
    standfirst: 'A fictional Mars mission, published one step at a time, in the order it happens.',
    sections: [
        {
            heading: 'What this is',
            paragraphs: [
                'Red Horizon is a fictional Mars exploration programme. Its partners, its mission, and its findings are invented. The Mars it describes is real.',
                'The fiction is produced by a real project, Mars AI Simulation: an experiment in whether AI agents can research, write, design, build, and check a website as a coordinated team, with people holding the decisions. Every page here came through that process.',
            ],
        },
        {
            heading: 'How a page is made',
            paragraphs: [
                "Each page starts from an approved brief that states what may be said. Agents draft it, check every material claim against the project's reference material, review the title and description it will carry in search results, and test it against the mission's own continuity. An editorial pass follows, and then a person decides whether the page is published at all. Agents do not approve canon, and agents do not publish.",
            ],
        },
        {
            heading: 'How the record moves',
            paragraphs: [
                "The record follows the mission's own order. A decision is not described here before the part of the story it belongs to, and no page hints at what comes later. When something published turns out to be wrong, the correction is explicit and dated rather than quietly rewritten.",
                'Images and video made for the project are illustrations of the fiction. They are never presented as mission photography, and they are not evidence of anything on Mars.',
            ],
        },
        {
            heading: 'What is public today',
            paragraphs: [
                'The public record opens with the programme announcement. Ten national programme teams have agreed to build one uncrewed lander and rover together, with a mineralogy mission: to work out whether an ancient equatorial landscape once held water, and whether the conditions there could once have supported life as science understands it. The mission does not search for life, and it does not claim to have found any.',
                "The announcement also set the programme's schedule and budget frames, and the partner teams vote equally, whatever each contributes. The technical work is still ahead: what the rover carries, who builds what, and how the mission reaches Mars are not settled, and this site will say so until they are.",
            ],
        },
        {
            heading: 'What this is not',
            paragraphs: [
                'Red Horizon is not a real space programme, agency, or launch. It is not affiliated with or endorsed by any real space agency, and its partner teams are fictional national teams, not real institutions. Real places and published science are used to keep the fiction technically grounded, and using them implies no participation or approval.',
            ],
        },
        {
            heading: 'Where to start',
            paragraphs: [
                'The home page carries the current state of the mission and the latest updates. The newsroom collects everything published so far.',
            ],
        },
    ],
    links: [
        { label: 'home page', href: '/' },
        { label: 'newsroom', href: '/news/' },
    ],
} as const;
```

## Proposed metadata (SEO owns the final wording)

| Field             | Proposed value                                                                                                     | Measured |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------- |
| Route             | `/about/`                                                                                                            | —        |
| Nav label         | `About`                                                                                                              | —        |
| `<title>`         | `About Red Horizon \| How this fiction is made`                                                                       | 44 chars (limit 60) |
| Meta description  | `Red Horizon is a fictional Mars mission. How an AI-assisted project writes, reviews, and releases it, and what is public today.` | 127 chars (limit 155) |
| H1                | `About Red Horizon and how it is made.`                                                                              | 37 chars |
| Heading order     | H1 → six H2 sections in the order above                                                                              | —        |

## Proposed internal links (must resolve today)

| Anchor text  | Target   | Where                | Why it is safe                                                                 |
| ------------ | -------- | -------------------- | ------------------------------------------------------------------------------ |
| home page    | `/`      | "Where to start"     | generated route; the wordmark and nav already point here                        |
| newsroom     | `/news/` | "Where to start"     | route exists in the working tree and builds to `/news/index.html`                |

**Deliberately absent:** no link to `/news/001-project-announcement/` or any other
`/news/<slug>/` route — `website/src/lib/releases.ts` ships `releasedNewsSlugs = []`, so no detail
page is generated and such a link would 404 (same finding as `.agents/work/seo/002-payload-selection.md`
§6). Also absent: any link to `/about/` from a page that has no release reference — the dev card
must keep the nav entry honest in the same way the news card label is.

## Optional `/404` copy

Reads: **Page not found | Red Horizon** / *This page isn’t here.* / one paragraph / two links.

```ts
export const notFound = {
    title: 'Page not found | Red Horizon',
    heading: 'This page isn\u2019t here.',
    paragraphs: [
        'The address may be mistyped, or the link may be out of date. The home page carries the current state of the mission, and the newsroom lists everything published so far.',
    ],
    links: [
        { label: 'Home page', href: '/' },
        { label: 'Newsroom', href: '/news/' },
    ],
} as const;
```

Measured: title 28 chars; 31 words. It carries **no mission facts at all**, so it cannot outrun any
release step; it must render inside `BaseLayout` so the chrome, the site-wide disclosure, and the
About link persist. Approved or dropped independently of the About page.

## Claim-by-claim trace

| # | Claim in the copy                                                                                     | Source                                                                                          |
| - | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 1 | Red Horizon is a fictional Mars exploration programme                                                  | published 001 announcement ¶1; `docs/GENERAL.md` "Purpose"                                        |
| 2 | Its partners, mission, and findings are invented; the Mars it describes is real                        | `docs/SCENARIO.md` header note; `docs/GENERAL.md` "Story world"                                   |
| 3 | Mars AI Simulation is a real project and an experiment in AI agents doing research/writing/design/development/checking as a team, with people holding decisions | `docs/GENERAL.md` "Purpose"; `docs/INSTRUCTIONS.md` ("A human alone approves public canon, content publication…") |
| 4 | Pages start from an approved brief; claims are checked; titles/descriptions are reviewed; continuity is tested; an editorial pass follows; a person decides publication | `docs/INSTRUCTIONS.md` "Mandatory working sequence"; `.agents/skills/create-article-workflow/SKILL.md` (stages); `docs/GENERAL.md` "Canon, drafts, and publication" |
| 5 | Agents do not approve canon and do not publish                                                        | `docs/INSTRUCTIONS.md` "External actions and secrets"; `AGENTS.md`                                |
| 6 | The record follows the mission's own order; nothing runs ahead of it                                    | `docs/timeline/README.md`; `docs/PLAN.md` Phase 4 ("never spoil a later one"); existing public wording in `website/src/features/progress/steps.ts` |
| 7 | Corrections are explicit and dated, not silent rewrites                                                 | `docs/INSTRUCTIONS.md` "Canon and information safety"                                             |
| 8 | Project images and video are illustrations, never mission photography                                   | `docs/SCENARIO.md` "Continuity and release controls"                                              |
| 9 | Ten national programme teams agreed to build one uncrewed lander and rover together                     | published 001 announcement ¶1                                                                     |
| 10 | Mineralogy mission: whether an ancient equatorial landscape once held water and could once have supported life as science understands it | published 001 announcement ¶2                                          |
| 11 | The mission does not search for life and does not claim to have found any                               | published 001 announcement ¶2                                                                     |
| 12 | Schedule and budget frames were set at the announcement; partners vote equally whatever each contributes | published 001 announcement ¶3–4                                                                   |
| 13 | What the rover carries, who builds what, and how the mission reaches Mars are not settled                | published 001 announcement ¶5                                                                     |
| 14 | Not a real programme/agency/launch; not affiliated with or endorsed by any real space agency; partner teams are fictional | site disclosure string in `website/src/lib/site.ts` (echoed, not replaced); `docs/GENERAL.md` "Story world" |
| 15 | Real places and published science keep the fiction grounded and imply no participation or approval      | `docs/SCENARIO.md` header note                                                                     |

Every claim is either (a) already published in `website/news/001-project-announcement.mdx`
(`publication: published`), or (b) a statement about the project's own method, owned by
`docs/GENERAL.md` / `docs/INSTRUCTIONS.md`. There is no third kind.

## Withheld material — checked, not copied

The copy names **no** withheld item: no payload/instrument/hardware-ownership detail, no vehicle name
or imagery reference, no launch provider or site, no fictional landing-region name or coordinates, no
exact dates, no supported-lifetime duration, no real institution, no partner responsibility split.
The withheld values are listed by location in `.agents/work/briefs/about-method.md` §"Page content
(bounded)" and in `.agents/work/reviews/001-project-announcement.md` §6 (open human questions,
including the supported surface lifetime, which is **not** public today).

Evidence: a scan of the two string blocks for the gated term set produced **0 real matches** (the only
hit was the substring inside the already-public word "uncrewed"). The scanner lives at
`/tmp/about-method-measure.py`, outside the repository, so no withheld value enters the tree.

## Claims requiring review (flagged, not settled)

1. **Schedule and budget frames are referred to but not restated.** The About page says the
   announcement "set the programme's schedule and budget frames" without repeating the 2031 window or
   the €2.10 billion figure, both of which are public in the 001 article. Reason: `website/src/features/mission/facts.ts`
   publishes "Launch date: To be announced" / "Landing date: To be announced" on the homepage, and
   repeating a year on About would sit oddly beside it. **For SEO/editorial:** restate the published
   figures on About, or keep the frame-only wording (current draft)? Either is inside the release
   bound; the decision is a coherence one.
2. **"Mars AI Simulation" naming.** The name is already public in the footer
   (`website/src/lib/site.ts` `footerLabel`) and in `docs/GENERAL.md`. If the human prefers the
   experiment to stay unnamed on public pages, drop the clause "Mars AI Simulation:" — nothing else
   depends on it.
3. **Sentence 2 of "What this is not"** deliberately echoes the approved site disclosure
   ("not affiliated with or endorsed by any real space agency"). It must not drift from that string;
   the editor should compare them side by side.
4. **`/news/` link timing.** `.agents/work/seo/002-payload-selection.md` §6 withheld a `/news/` link
   while the route was uncommitted, and used homepage anchors instead. By the time `/about/` is built
   the route is committed and builds; if SEO prefers, substitute `/#updates` for the "newsroom" link
   and keep the same label wording.
5. **Nav placement.** Adding `About` to `website/src/lib/navigation.ts` puts it in the header *and*
   footer (one source, both consumers) and therefore adds an `ABOUT` label to every page's
   `innerText`. The editorial gate `t_3302ef7e` is reviewing that surface — the dev card must record
   the delta. If four header items overflow at 320 px, the fallback is the footer-only link, which is
   the literal Phase 1 wording.

No item above blocks the draft; each is a decision for SEO, continuity, the editor, or the human.

## Visual brief

**None needed — no new imagery, no IMAGES card in this chain.** The page carries no image of its own;
the layout already renders the hash-approved identity mark (`docs/brand/logo-bg-black.png`, SHA-256
`f9543989…`). A mark plate on About would be a new card with an asset manifest, not a silent
addition here.

## Validation performed on this draft

- Every material claim traced to a source (table above); no unsourced claim.
- Withheld-material scan over both working papers: 0 withheld values. The two benign matches are
  category words in the sentence that *describes* what is withheld ("payload"/"instrument"), plus one
  already-public figure ("2031") cited in open question 1 — neither is a withheld name, coordinate,
  date, or provider. Scanner: `/tmp/about-method-measure.py`, `/tmp/about-method-verify.py`, outside
  the repository, so no withheld value enters the tree.
- Containment check: all 23 copy strings appear verbatim in this file (the SEO title appears in the
  metadata table in markdown-escaped form).
- Metadata measured with a script: title 44 ≤ 60; description 127 ≤ 155; 404 title 28 ≤ 60.
- Body word count measured: 404 words (paragraphs only), 442 with headings and standfirst.
- Internal links checked against routes that exist today (`/`, `/news/`); no link to a gated detail route.
- Disclosure string not modified; the site-wide `DisclosureNote` remains the authoritative statement.
- No `website/` source was edited by this card (brief, draft, and handoff only, under `.agents/work/`).

## Release gate

Not approved, not published, no route built. After an editorial `approved` review, `/about/` still
requires a current human release reference before its first public deployment, and `SITE_URL`
(approved origin) remains unrecorded.
