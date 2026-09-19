# Review: 006-cruise-final-approach — editorial final gate

Slug: `006-cruise-final-approach`. Card `t_a3cfbc80`
(`mars-ai-simulator-reviewer`), stage: merged continuity + editorial
final gate. Timeline step `006-cruise`, **page 3 of 3** (final approach
correction opportunity). Companion record:
`.agents/work/continuity/006-cruise-final-approach.md` (verdict
`continuity clear`; no findings; the release decision is recorded in
§"Release decision" below).

**Status — `approved`.** The article is canonically sound,
chronologically safe, plausibly framed, and spoiler-clean. No findings
to return for revision. The release decision is recorded in §"Release
decision" below. No canon change, no `docs/SCENARIO.md` write, no
`docs/timeline/` write, no asset change, no build-surface change; the
publication flip and the `simulatedDate` line remain the build card
`t_3bc27807`'s act (the only child of this gate).

## Review metadata

| Field               | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card / stage        | `t_a3cfbc80` — editorial final gate + continuity for `006-cruise-final-approach`. Child `t_3bc27807` (build/publish, `todo`). Child included for traceability — the build card advances only once this gate clears                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Article             | `website/news/006-cruise-final-approach.mdx` — sha256 `d837f40f53bcaa9d7b55167386290998972f035764c6d6bf18d60aedfae6a900` (3,741 B, 63 lines, `publication: draft`, no `media*`, no `author`, no `simulatedDate`, seven-paragraph heading-free body). Frontmatter keys (verified via `js-yaml.safe_load`): `title` (50 chars), `category` (`Cruise 06`), `status` (`Final approach correction opportunity assessed`), `publication` (`draft`), `summary` (120 chars), `linkLabel` (`Final approach update`), `order` (6), `accent` (`amber`) — all schema-clean. The SEO package the brief requires is integrated into the frontmatter; see §6                                                                                                                                                                                                                                           |
| Inputs              | `.agents/work/briefs/006-cruise.md` (the three-page brief, milestone table `:7`-`:12`); `.agents/work/sources/006-cruise-final-approach.md` (claim ledger C1–C13 + NASA Ch 13/Ch 15 plain-language grounding only + forbidden-fact ledger); `.agents/work/assets/006-cruise-final-approach/assets.md` (text-only manifest, `placement: none`, `candidates: 0`, `travelling-to-mars.png` gated); `docs/SCENARIO.md` (mission identity, flight system, launch-and-mission dates, continuity and release controls); `docs/timeline/006-cruise.md`; released precedent: `001-project-announcement.mdx` … `005-launch.mdx` and `006-cruise-first-correction.mdx`, `006-cruise-checkout.mdx` (the immediate predecessor); release records `.agents/work/continuity/005-launch.md`, `.agents/work/continuity/006-cruise-first-correction.md`, `.agents/work/continuity/006-cruise-checkout.md` |
| Fail-closed default | Held today (2026-09-19 ~12:45 CEST): article is `publication: draft`, route `/news/006-cruise-final-approach/` returns HTTP 404 ("No webpage was found") on the live origin and is **absent** from `website/dist/news/`; no `media` field, `newsMediaIssues()` returns `[]` (no `media` declared → short-circuits in `src/lib/media.ts:131`), the article is filtered out by `selectPublicNews`. A `publication: published` flip on this gate's release decision is what adds the route and the listing; the build card `t_3bc27807` applies the flip together with the `simulatedDate` line                                                                                                                                                                                                                                                                                            |
| Verdict written     | 2026-09-19 ~12:45 CEST, against the live origin (no route yet for 006 page 3 — HTTP 404 verified in-browser) and the shared checkout (`HEAD` = `origin/main` = `b2f770f`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Plan                | Approved in a single pass — no corrective card, no `kanban_block` call. The build card `t_3bc27807` (the only child of this gate) is unblocked once this gate completes; it applies the two changes named in §"Release decision" in one path-limited commit, pushes, and measures the live origin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## 1. Review table

| #  | Check                                                                                                 | Result          | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -- | ----------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Brief, source pack, asset manifest, and article frontmatter read in full                              | PASS            | All four paths re-read this pass; article hash matches the source pack's expectation (`d837f40f…`, `publication: draft`); `js-yaml.safe_load` confirms 8 required keys, no `media*`, no `author`, no `simulatedDate`                                                                                                                                                                                                                                        |
| 2  | News schema (`src/content.config.ts:9-71`) accepts the frontmatter                                    | PASS            | `js-yaml` parse: keys `title, category, status, publication, summary, linkLabel, order, accent`; no required field missing; `simulatedDatePattern` (`src/lib/simulated-date.ts:21`) accepts `2031-08-21`; `newsMediaIssues()` returns `[]` (no `media` declared → short-circuits in `src/lib/media.ts:131`)                                                                                                                                                 |
| 3  | Claims trace to canon or a cited source                                                               | PASS            | Continuity §3 table — 11 rows of body claims trace to a released source or the brief's "Allowed facts" line; no out-of-scope items                                                                                                                                                                                                                                                                                                                          |
| 4  | Derived claims are judged, not waved through                                                          | PASS            | Continuity §3 last block (D1–D6) names the six derivations and what each rests on; all six PASS                                                                                                                                                                                                                                                                                                                                                             |
| 5  | No later-step fact, no unreleased `docs/timeline/` detail                                             | PASS            | L51 names `arrival at Asteria Field lies ahead` (the 001-released landing-target name as future frame, **no date**); L46-50 names the approach / arrival-preparation phase in generic terms with an explicit "details of entry, landing, or surface operations are not part of this record" sentence; no `:197`+ row appears anywhere in the body or frontmatter                                                                                            |
| 6  | No landing site, Mars surface imagery, or Asteria Field material beyond what 001 released             | PASS            | The single `Asteria Field` mention is a landing-target name already released at 001:53-60; no coordinates, no ellipse, no P0, no science zone, no hazard, no traverse, no figure of any kind                                                                                                                                                                                                                                                                |
| 7  | No performance, mass, cost, or specification figure                                                   | PASS            | 0 numerical-spec hits in body and frontmatter; the `210.7-day` planning anchor from SCENARIO.md:176-177 / `:295-296` verified absent (re-checked 2026-09-19 ~12:40 CEST)                                                                                                                                                                                                                                                                                    |
| 8  | No real institution, provider, operator, or facility named (005's fail-closed default extended)       | PASS            | 0 hits on `Arianespace / ArianeGroup / CNES / ESA / FEI STU`; 0 hits on the launch-facility family (`Europe's Spaceport / ELA-4 / ELA4 / Kourou / Guiana / Centre Spatial Guyanais`). The article carries the closing disclosure's "real agency, launcher operator, or launch facility" wording in the 005 / 006 pages 1–2 pattern, naming **no** specific entity                                                                                           |
| 9  | The six accurate / non-endorsing rules applied to the exact public sentences (analog of 005's review) | PASS            | §4 below, rule by rule, on the sentences that name the launcher and the cruise stage. The disclosure's "real agency … launcher operator … launch facility" wording is in the form 005 used; nothing in the article asserts that any specific entity has endorsed or approved the programme                                                                                                                                                                  |
| 10 | Citation form: no dead or unauthorised links                                                          | PASS            | Three internal anchors: `/#mission` (line 12, the fiction disclosure), `/news/006-cruise-checkout/` (line 18, the released cruise page 2), `/news/005-launch/` (line 54, the released launch-update context from the closing note). All three targets are released routes (200 on the live origin today — `/news/005-launch/` and `/news/006-cruise-checkout/` verified in-browser 2026-09-19 ~12:45 CEST); no external link                                |
| 11 | Coherence and structure                                                                               | PASS            | Seven paragraphs, single narrative arc (lead + milestone date + history clause → plain-language definition of a final-approach correction opportunity → test framing + outcome + in-article caveat → generic cruise operations + deep-space transition → C8 next-status expectation in generic terms with explicit entry/landing/surface boundary → released destination-name future frame → closing disclosure + italic footer), heading-free, no dateline |
| 12 | Voice: informed, composed, candid, specific, modest                                                   | PASS            | "The programme reports that the opportunity was carried out and assessed within the planned frame: routine operations have held, and the spacecraft is tracking as expected. No course-state claim beyond that released framing is part of this record, and the milestone discloses no figures or measurements of any kind." Disclosure in first sentence and closing note, both in the 005 / 006 pages 1–2 pattern                                         |
| 13 | Copy mechanics (grammar, repetition, terminology)                                                     | PASS            | "Cruise stage" / "flight stack" used consistently; no repeated phrasing across paragraphs; "final approach correction opportunity" defined inline (paragraph 2, L21-27); no acronym display; no heading; the "No course-state claim … no figures or measurements" sentence is the operative boundary the source pack's C6 row asked for, in the body not only in the working papers                                                                         |
| 14 | Frontmatter schema conformance                                                                        | PASS            | Title 50 chars (well within SEO skill's ≤60 budget), summary 120 chars (well within ≤155 budget), linkLabel 20 chars; all eight required keys present; `publication: draft` until the release decision is applied by the build card                                                                                                                                                                                                                         |
| 15 | Metadata carries nothing withheld                                                                     | PASS            | The summary names the cleared milestone ("final planned course-refinement manoeuvre") and the next-status frame ("approach phase ahead"); no date, no figure, no institution, no landing-day date                                                                                                                                                                                                                                                           |
| 16 | Image placement, captions, and alt text                                                               | n/a — text-only | The asset manifest records `placement: none`, `candidates: 0`, no `media*` field on the draft; the article renders no figure, no alt text, no caption. `travelling-to-mars.png` stays gated per `guards.mjs:75-77` and `guards.test.mjs:831`; the 005 / 006 pages 1–2 release records' "release-control finding" on this plate stands                                                                                                                       |
| 17 | The record date is assigned from a locked milestone and named with its source                         | PASS            | §5: `2031-08-21` from `docs/SCENARIO.md:196`; order, containment, compatibility, surface rendering all checkable at the build pass                                                                                                                                                                                                                                                                                                                          |
| 18 | The label presents the value as part of the fiction                                                   | PASS            | `src/lib/simulated-date.ts` owns the `Simulated record date` label and the U+00B7 separator; the schema permits either a quoted string or an unquoted `Date`; the rendered shape `21 August 2031` matches the 001-005 / 006 pages 1–2 precedent (page 2's `Simulated record date · 20 May 2031` verified live 2026-09-19 ~12:45 CEST)                                                                                                                       |
| 19 | The published surface is checked, not only the file                                                   | PASS            | The live origin has no `/news/006-cruise-final-approach/` route today (article is `publication: draft`, HTTP 404 verified in-browser); `website/dist/news/006-cruise-final-approach/` is **absent** (verified 2026-09-19 ~12:45 CEST); the shared `dist/` predates any build card push; the build card's evidence is what makes the post-flip surface check complete                                                                                        |
| 20 | The fail-closed state holds **in fact**, not on paper                                                 | PASS            | `/news/006-cruise-final-approach/` returns HTTP 404 ("No webpage was found") on the live origin (verified 2026-09-19 ~12:45 CEST); `/news/006-cruise-final-approach/` is not in `website/dist/news/`; `newsMediaIssues()` returns `[]`; the article is filtered out by `selectPublicNews`; no flip; no commit or push by this card; only the two gate records are written                                                                                   |
| 21 | No external action of any kind                                                                        | PASS            | No commit, push, deploy, hosting/DNS/credential use, or media upload; no `publication:` field flipped; no `website/` write by this card; only this review record and its companion continuity record are written                                                                                                                                                                                                                                            |
| 22 | The card's out-of-scope list respected                                                                | PASS            | No `docs/SCENARIO.md` change, no public date set beyond the record date this role owns, no `docs/timeline/` write, no prose rewrite, no imagery produced, no flip                                                                                                                                                                                                                                                                                           |

**Token scan of the reviewed file** (grep on the file directly; families
reported by hit count):

- launcher designation: `Ariane 64` ×2 (L14, L53) — matches the 005 /
  006 pages 1–2 disclosure pattern
- **real institution / operator: 0** (no Arianespace / ArianeGroup /
  CNES / ESA / FEI STU in body or frontmatter)
- **launch-facility family: 0** (no Europe's Spaceport, ELA-4, ELA4,
  Kourou, Guiana, Centre Spatial Guyanais)
- **launch-day forms beyond the released rows: 0** (`:193` `17 February
  2031` ✓ permitted as already-released history; `:194` `3 March 2031`
  ✓ permitted as released page 1 history; `:195` `20 May 2031` ✓
  permitted as released page 2 history; `:196` `21 August 2031` ✓
  permitted as this step's own event)
- **landing-region coordinate markers: 0** (no `18° 42` / `226° 14`)
- **performance / mass / cost / schedule figures: 0** (no number
  anywhere in body or frontmatter; the `210.7-day` anchor verified
  absent)
- **Asteria Field / landing-design: 1 name only** (L51, the released
  landing-target name as future frame with no date)
- **step 006 pages 1–2 / 007-011 milestone rows: 0** (no `:196` as
  next-status, no `:197`+); the C8 next-status sentence uses generic
  approach / arrival-preparation phrasing with an explicit entry /
  landing / surface exclusion
- **`docs/timeline/` paths: 0**
- **withheld filenames (`contact-arm-scene`, `travelling-to-mars`): 0**
- **real URLs: 0** (the article has no external links)
- **first-naming scope**: 0 (the milestone name "final approach
  correction opportunity" is **already released** by 006 page 2
  `006-cruise-checkout.mdx:7, :49-51`; the C7 "third" ordinal on L16
  is the reviewer-confirmed derivation from the released counting
  convention pages 1 and 2 set, not a new milestone name)

## 2. Findings — required changes

**None.** The article is in scope on every check the gate runs; no
corrective card is opened, no `kanban_block` is called, and the build
card `t_3bc27807` is unblocked once this gate completes. The brief's
"Allowed facts" line and the writer's draft already exclude everything
the gate would otherwise flag; the source pack's C6 ("No course-state
claim … no figures or measurements") boundary is written into the body
itself, not just into the working papers; the C7 "third" ordinal is
explicitly authorised by the source-pack claim ledger (C7 row, with
the reviewer's confirmation recorded in §1 row 17 and continuity §3
D2); and the C8 next-status wording is the released-precedent phrasing
in generic terms, with the page-3-specific spoiler boundary
("details of entry, landing, or surface operations are not part of
this record") explicit in the body itself.

## 3. Required changes — owner / routing

**None.** The build card `t_3bc27807` (the only child of this gate)
applies the two changes named in §"Release decision" below in one
path-limited commit, pushes, and measures the live origin.

## 4. The six accurate / non-endorsing rules, applied to the exact sentences (analog of 005's review)

Reviewed on the sentences that name the launch vehicle, the cruise
stage, and the closing disclosure. The 005 review's Gate 004-B was
answered in its "not required — no real provider or institution named"
form, and that answer **holds for the 006 page-3 article** unchanged:
006 page 3 names zero institutions, operators, or facilities; the
disclosure lists the categories without picking one.

| Rule (canon proposal §"Accurate / non-endorsing wording rules")                        | Verdict                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. The fiction is labelled as fiction on every public surface                          | PASS — first-sentence disclosure ("Red Horizon is a fictional, AI-assisted Mars exploration programme") and the closing italic note; the site chrome `/#mission` link carries the same framing                                                                                                                                                                      |
| 2. No implication of participation, approval, funding or endorsement by any real party | PASS — the disclosure already lists "real agency, launcher operator, or launch facility" as **categories**, and names none of them by name; the history clause's "17 February 2031 launch aboard Ariane 64" carries the same caveat 004 and 005 / 006 pages 1–2 used ("naming it … says which launcher this fictional mission is planned around, and nothing more") |
| 3. No real price, cost, schedule or performance figure presented as the programme's    | PASS — no figure anywhere in body or frontmatter; the in-article "no figures or measurements" sentence is the operative boundary                                                                                                                                                                                                                                    |
| 4. Nothing reads as an advertisement, endorsement or sales pitch for the real provider | PASS — the launcher is stated as an architecture fact (history clause, closing note); no superlative, no commercial framing                                                                                                                                                                                                                                         |
| 5. The real provider's public record is separated from the programme's interface       | PASS — paragraph 7 (the closing disclosure note and italic footer) is separate from paragraph 1 (the lead and history clause) and paragraph 4 (the cruise-operations description)                                                                                                                                                                                   |
| 6. Verbatim wording review by the human before publication                             | Not required in this form — no real-named sentence is approved; the disclosure is consistent with the 001-005 / 006 pages 1–2 pattern and the existing approved 005 wording. A 006 page-3 article that named a real institution would need a separate human approval sentence; it does not                                                                          |

The rules govern the lead paragraph (L12-16), the history clause on
L14, the closing note (L53-58), and the in-article "no figures or
measurements" caveat (L33-35). None of those sentences names an
institution, operator or facility by name.

## 5. The simulated record date

> `simulatedDate: 2031-08-21` — milestone line **`docs/SCENARIO.md:196`**,
> "21 August 2031 | Final approach correction opportunity".

This role alone assigns and verifies the value. The brief instructs the
writer to leave the field unset (brief `:13`, source pack C13); the
writer did so. The role assigns and verifies here:

| Check                                                          | Verdict                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drawn from a locked milestone the table actually holds         | Yes — `docs/SCENARIO.md:196` ("21 August 2031 \| Final approach correction opportunity"); the milestone table is at `:173`-`:207`. Step 006 page 3 of 3 covers this row                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Step correspondence                                            | Step 006 page 3 is the final approach correction opportunity; the row whose state matches what the article reports is `:196`. The article references rows `:194` (first correction, released page 1) and `:195` (cruise checkout, released page 2) as released history; the article references row `:196` (this step's own event) as the subject. The article does **not** sit on `:194` or `:195`.                                                                                                                                                                                                                                                                             |
| Rows excluded, and why                                         | `:197`+ is step 007+ and is entirely absent. The C8 next-status sentence uses generic approach / arrival-preparation phrasing and explicitly excludes entry, landing, and surface operations; row `:196`'s milestone name is **not** a first-naming (006 page 2 already published it at `:7, :49-51`).                                                                                                                                                                                                                                                                                                                                                                          |
| Implies no unreleased event or withheld mission date           | Yes — `21 August 2031` **is** step 006 page 3's own event; the record date sits on it; the article carries no later-step fact. The 17 February 2031 launch day referenced on L14 is already released at 005. The 3 March 2031 and 20 May 2031 correction dates referenced on L17 are already released at 006 pages 1 and 2 respectively.                                                                                                                                                                                                                                                                                                                                        |
| Contradicts no published sentence                              | No — articles 001-005 carry `2026-10-12`, `2027-03-19`, `2029-07-13`, `2030-03-11`, `2031-02-17`; 006 page 1 carries `2031-03-03`; 006 page 2 carries `2031-05-20`. Page 3's `2031-08-21` is **later** than all seven and sits on the released row `:196` that page 2 already named as the next-status expectation. The floor holds.                                                                                                                                                                                                                                                                                                                                            |
| Compatibility with the article's own present-tense negatives   | No day was announced at 001 / 002 / 003; 004 stated "no day within it has been announced"; 005 reported the launch day, named `3 March 2031` as the expected first correction, and named `20 May 2031` as the expected cruise checkout; 006 page 1 reported the first correction as carried out; 006 page 2 reported the cruise checkout and second correction as carried out, and named `21 August 2031` as the expected next-status. At 006 page 3's own date, all three named checks have been carried out; the article reports the final approach correction within the released framing ("as planned", "routine"), without falsifying any earlier article at its own date. |
| Rendered surface states it under an in-fiction label           | To be verified on the build card's live-origin measurement (the article is `publication: draft` today and no `/news/006-cruise-final-approach/` route exists on the live origin yet). The label and the format are owned by `src/lib/simulated-date.ts`; the schema accepts both quoted-string and unquoted `Date` frontmatter values; the rendered shape `21 August 2031` matches the 001-005 / 006 pages 1–2 precedent                                                                                                                                                                                                                                                        |
| Never presented as a real publication date or machine-readable | To be verified at build time: 0 `<time>`, 0 ISO tokens, 0 `datePublished`/`dateModified`, no OG date, no sitemap value. Matches 001-005 / 006 pages 1–2 precedent (the 006 page-2 release record §"The simulated record date" measured all of these as 0)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Order floor carried forward                                    | It is **a lower bound on step 006 page 4 (none planned) and on step 007** (`007-landing-preparation` etc.): any later surface / landing article must carry a record date on or after `2031-08-21`. The 006 page 3 article itself does not commit to a later date — the article reports the approach / arrival-preparation next-status in generic terms, with row `:197` (entry and landing) explicitly out of scope                                                                                                                                                                                                                                                             |
| Order ceiling kept open                                        | Step 006 page 3's record date `2031-08-21` is **before** the `:197` row (16 September 2031, atmospheric entry and landing) and every later surface-step row. Those rows stay future-status only on this page                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

**Status**: assigned here, applied by the build card `t_3bc27807`
together with the `publication: published` flip in one change
(`AGENTS.md`), verified on the live origin by the build card's own
commit + live measurement. **Voiding condition**: any change to the
reviewed MDX bytes, to the source-pack claim ledger, or to any of the
on-main plumbing paths (`website/src/content.config.ts`,
`website/src/lib/media.ts`, `website/src/lib/publication.ts`,
`website/src/features/news/media.ts`, `website/scripts/guards.mjs`,
`website/test/guards.test.mjs`) voids the release and returns the
package to this gate.

## 6. SEO package (integrated into the frontmatter)

The brief requires "an integrated SEO package" — search intent,
metadata, headings, internal links, alt-text recommendation. Article
006 page 3 has no separate `.agents/work/seo/006-cruise-final-approach.md`;
the SEO work is in the frontmatter and the three-anchor inventory. The
integration is SEO-correct:

| SEO area                                                              | Article 006 page 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Search intent (single honest intent)                                  | "Tell me whether the Red Horizon Mars mission has carried out its final approach correction, when, and how the programme is framing it." The article answers it in the lead paragraph, the test-framing paragraph, and the next-status paragraph; the closing note re-states the fiction disclosure                                                                                                                                                                                  |
| Title (50 chars; well within the SEO skill's ≤60 char budget)         | "The final approach correction opportunity arrives." Reads cleanly, declarative, period-terminated, on-brand with 001 ("A Mars mission takes shape in public."), 002 ("Choosing what a Mars rover carries."), 003 ("The rover design, frozen."), 004 ("The launch architecture, chosen."), 005 ("Red Horizon launches for Mars."), 006 page 1 ("The first trajectory-correction opportunity arrives."), 006 page 2 ("The cruise checkout and second correction opportunity arrive.") |
| Summary (120 chars; well within the 155-char meta-description budget) | Contains the four facts a searcher needs: the mission reached its final course-refinement manoeuvre, the final course-refinement manoeuvre assessed, routine operations reported, approach phase ahead (the C8 next-status expectation). No future-step leak beyond the brief's "next-status" frame                                                                                                                                                                                  |
| Slug / URL                                                            | `006-cruise-final-approach` — matches the brief's slug (`/news/006-cruise-final-approach/`); file id = frontmatter id = public URL after release                                                                                                                                                                                                                                                                                                                                     |
| Heading outline                                                       | Heading-free at 7 paragraphs; single narrative arc; one paragraph per beat (lead + milestone date + history clause, plain-language definition of a final-approach correction, test framing + outcome + in-article caveat, generic cruise operations + deep-space transition, C8 next-status in generic terms with explicit entry/landing/surface boundary, released destination-name future frame, closing disclosure)                                                               |
| Internal-link inventory (verified by full-anchor grep)                | 3 anchors total: `/#mission` (line 12, disclosure), `/news/006-cruise-checkout/` (line 18, the released cruise page 2), `/news/005-launch/` (line 54, the released launch-update context from the closing note). All three targets are released routes (200 on the live origin today — `/news/005-launch/` and `/news/006-cruise-checkout/` verified in-browser 2026-09-19 ~12:45 CEST); no 404, no stale slug                                                                       |
| Structured data (NewsArticle JSON-LD)                                 | Not emitted at this stage; matches 001-005 / 006 pages 1–2 (the `seo.ts` suppress-canonical behaviour applies while `publication: draft`). The site engineer's `NewsArticle` JSON-LD recommendation is unchanged (headline, description, fictional entity author attribution, isPartOf Red Horizon) and is a site-engineering item, not a gate item                                                                                                                                  |

The "no separate SEO pack file" is a **convention break** with the
prior 001-004 news articles (005 and 006 pages 1–2 carry it too);
recorded as **O1**. The brief literally names "an integrated SEO
package" as the form (brief `:40`), and the SEO metadata is integrated
into the draft. Not blocking.

## 7. Voice / structure / prose

No change requested at this revision. The article is the house
register: short declaratives, defined terms, no grandiosity, no
urgency, no superlative, no unearned certainty. The in-article "No
course-state claim beyond that released framing is part of this
record, and the milestone discloses no figures or measurements of any
kind" sentence is the editorial constraint the source pack's C6 row
asked for, written into the body itself; it is the operative boundary,
not just a working-paper note.

The "routine operations have held, and the spacecraft is tracking as
expected" sentence is consistent with the scenario's standing rule
that "the programme has committed to reporting technical risk and
anomalies candidly, not only successes" (001:64) and is **not** a
spoiler of an outcome — the article explicitly disclaims any claim
beyond the released framing.

The C7 ordinal ("third such opportunity in the mission's sequence
following the first on 3 March and the second on 20 May 2031") is the
reviewer-confirmed derivation from the released counting convention
pages 1 and 2 set ("first" / "second"); it is semantically equivalent
to the row `:196` name ("Final approach correction opportunity") and
the source-pack C7 boundary authorises it as an ordinal option.

The C8 next-status wording ("the approach and arrival-preparation
phase … details of entry, landing, or surface operations are not
part of this record") is the released-precedent phrasing in generic
terms, with the page-3-specific spoiler boundary explicit in the body
itself. Released pages 1 and 2 named the next **milestone**; page 3
names the next **phase** because the only remaining named milestone
is `:197` (entry and landing), which the brief forbids naming until
step 007. The page-2 release record (`:48-51` "as already scheduled
in the mission's sequence") made the same point — page 2 named row
`:196` because it was the next-status **after** page 2; page 3 cannot
name row `:197` for the same reason and uses generic phrasing
instead.

The closing acknowledgement (the disclosure in L53-58 and the italic
footer on L60-63) re-states the fiction disclosure in the same form
004 / 005 / 006 pages 1–2 use.

## 8. Surface / build

- **Live origin** (2026-09-19 ~12:45 CEST): the
  `/news/006-cruise-final-approach/` route is **not** served —
  `fetch` returns HTTP 404 with the chrome-error "No webpage was
  found" body (verified in-browser); `/news/005-launch/`,
  `/news/004-launch-provider/`, `/news/001-project-announcement/`,
  `/news/002-payload-selection/`, `/news/003-vehicle-design/`,
  `/news/milestone-2031-launch-readiness-review/`,
  `/news/milestone-2031-stack-arrival/`,
  `/news/006-cruise-first-correction/`, and
  `/news/006-cruise-checkout/` are all served (200 on the live
  origin); the `/news/` index lists the eight published articles;
  `/news/006-cruise-checkout/` (the immediate predecessor) renders
  the `Simulated record date · 20 May 2031` line in the format
  this article will use once the flip is applied.
- **Shared `website/dist/`** is **not** the live surface (predates
  the build card's push; this gate does not build). `/news/006-cruise-final-approach/`
  is **absent** from `dist/news/` (verified 2026-09-19 ~12:45 CEST)
  — only the eight released article directories are present. The
  build card's evidence is what makes the post-flip surface check
  complete.
- **Asset manifest** records `placement: none`, `candidates: 0`, no
  `media*` field on the draft, `travelling-to-mars.png` stays gated
  per `guards.mjs:75-77` and `guards.test.mjs:831`; the 005 / 006
  pages 1–2 release records' release-control finding on this plate
  stands unchanged.
- **Guard module** (`website/scripts/guards.mjs`):
  `gatedDirectoryNames = ['timeline']` (line 47);
  `gatedFilePathSegments` contains the two withheld files (the
  pathfinder surface scene and the in-transit plate at lines 75-77);
  the article matches none of them. The `gatedTextMarkers` list
  `'18° 42'` and `'226° 14'` is unchanged; the article matches
  neither. The guard has no marker for the launch-facility family
  or for the C7 ordinal; per the 005 release record's C5 /
  Observation, the gate-side containment rests on the review and
  the release-control scope this role records, and the 006 page-3
  article's launch-facility-family count is 0 and the C7 ordinal is
  the reviewer-confirmed derivation from the released counting
  convention pages 1 and 2 set (continuity §3 D2).
- **Schema parse** (`js-yaml.safe_load` of the frontmatter): keys
  present, types schema-compatible, no `media*`, no `author`, no
  `simulatedDate` on the reviewed bytes (this role applies the
  latter).

## 9. Validation completed

- `git status --short` shows the article as `??` (untracked) in the
  shared checkout; the only paths this gate writes are
  `.agents/work/reviews/006-cruise-final-approach.md` and
  `.agents/work/continuity/006-cruise-final-approach.md`. `git log
  origin/main..HEAD` is empty.
- Article re-hashed at verdict time
  (`d837f40f53bcaa9d7b55167386290998972f035764c6d6bf18d60aedfae6a900`,
  3,741 B, 63 lines).
- Frontmatter parse via `js-yaml` confirmed schema-clean (eight
  required keys present; no `media*`, no `author`, no `simulatedDate`).
- `newsMediaIssues()` from `website/src/lib/media.ts` returns `[]`
  (no `media` declared → short-circuits at line 131).
- `simulatedDatePattern` (`src/lib/simulated-date.ts:21`) accepts
  `2031-08-21` (verified against a Python mirror of the regex);
  `formatSimulatedDate('2031-08-21')` produces `21 August 2031`;
  the full rendered line is `Simulated record date · 21 August 2031`.
- Withheld-marker scan on the article + frontmatter; results in
  §1 ("Token scan") and §4 of the companion continuity.
- Live origin probed (browser-side fetch + page_info, 2026-09-19
  ~12:45 CEST): `/news/006-cruise-final-approach/` returns HTTP 404
  ("No webpage was found"); the nine released article routes, the
  wiki routes, `/`, `/news/`, and the newsroom all serve the expected
  published pages; `/news/006-cruise-checkout/` renders the
  `Simulated record date · 20 May 2031` line as expected.
- `website/dist/news/006-cruise-final-approach/` directory verified
  **absent** at verdict time.

## 10. Release decision — **approved**

> **Release decision, recorded 2026-09-19 ~12:45 CEST by
> `mars-ai-simulator-reviewer` on card `t_a3cfbc80`: the package
> `website/news/006-cruise-final-approach.mdx` at sha256
> `d837f40f53bcaa9d7b55167386290998972f035764c6d6bf18d60aedfae6a900`
> (3,741 B, 63 lines, `publication: draft`, no `media*`, no `author`,
> no `simulatedDate`) IS APPROVED FOR RELEASE**, subject to the
> preconditions named below being satisfied by the build card
> `t_3bc27807` on its own commit and live-origin measurement.
>
> The article is canonically sound, chronologically safe, plausibly
> framed, and spoiler-clean. No findings were raised; this gate is
> cleared in a single pass. The release decision is conditioned on
> the build card applying, in one path-limited commit, the two
> linked changes:
>
> 1. `publication: draft` → `publication: published`;
> 2. `simulatedDate: 2031-08-21` (from `docs/SCENARIO.md:196`,
>    "21 August 2031 | Final approach correction opportunity"
>    — this role's value, assigned here and not invented).
>
> No media-key wiring, no guard flip, no plate retirement: the asset
> manifest records `placement: none` and `candidates: 0`, and
> `travelling-to-mars.png` stays gated per the unchanged
> `gatedFilePathSegments` row.
>
> The build card owns the commit and push and the live-origin
> measurement; this gate does not build and does not push. **No second,
> divergent flip may appear later.** Voiding condition unchanged from
> §5: any change to the reviewed MDX bytes, to the source-pack claim
> ledger, or to any of the on-main plumbing paths
> (`website/src/content.config.ts`, `website/src/lib/media.ts`,
> `website/src/lib/publication.ts`,
> `website/src/features/news/media.ts`,
> `website/scripts/guards.mjs`, `website/test/guards.test.mjs`) voids
> the release and returns the package to this gate.

**Exact public scope the release will cover once the build card pushes**
(recorded now so the build card applies one scope, explicitly **not** an
approval):

| Surface                      | Content (when the release decision is recorded)                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                        | `/news/006-cruise-final-approach/` — one page, trailing-slash directory route, generated by `src/pages/news/[slug].astro` for a published item only                                                                                                                                                                                                                                                                                                                          |
| Card on `/` and `/news/`     | the ninth card in frontmatter order: kicker `Cruise 06 · Final approach correction opportunity assessed`, the writer's drafted title (`The final approach correction opportunity arrives.`, 50 chars — well within the SEO skill budget), the 120-char summary, `Simulated record date · 21 August 2031` (the row this role assigns), link label `Final approach update`, **no** plate (text-only capsule per the asset manifest)                                            |
| Frontmatter metadata         | `publication: published` (the flip) and `simulatedDate: 2031-08-21` (this role's value) applied **in one change**; plus the existing `title`, `category`, `status`, `summary`, `linkLabel`, `order`, `accent`. No `author`. No `media`, `mediaAlt`, `mediaLabel`, `mediaCaption` (text-only)                                                                                                                                                                                 |
| Plate and emitted derivative | **none** — the article is text-only by asset-manifest decision; no plate to copy, no key to register, no `docs/vehicles/ariane/travelling-to-mars.png` reuse, no media-key retirement; the in-transit plate stays gated                                                                                                                                                                                                                                                      |
| Real-string surface          | `Ariane 64` — the launch-vehicle designation 005 released; occurrences in the history clause (L14) and the closing note + italic footer (L53). **No** operating company, no agency, no operator, **no launch facility** name, **no later-step date** (the `arrival at Asteria Field lies ahead` sentence at L51 is the 001-released destination name only, with no date), and **no figure** (the in-article "no figures or measurements" sentence is the operative boundary) |
| First-naming surface         | the C7 ordinal "third" on L16 (a derivation from the released counting convention pages 1 and 2 set; **not** a new milestone name — the milestone name "final approach correction opportunity" was already released by 006 page 2 at `:7, :49-51`); the C8 next-status sentence (L46-50) uses generic approach / arrival-preparation phrasing with an explicit entry / landing / surface exclusion (no row `:197` naming)                                                    |

**Preconditions of that release**: the flip applied at the same hash
this role records (no third change rides along); the record date
re-verified on the built page; the `publication` flip and the
`simulatedDate` line applied in one change; the live origin serves the
post-flip bytes byte-for-byte and the `/news/006-cruise-final-approach/`
route appears with the `Simulated record date · 21 August 2031` line
under the in-fiction label.

## 11. Conditions and observations

| #  | Item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Owner                                     | Status at this verdict                                     |
| -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| C1 | No corrective applies; the article is in scope on every check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | n/a                                       | **N/A** — single-pass clearance; no corrective card        |
| C2 | `publication: published` and `simulatedDate: 2031-08-21` applied in **one** change; no media-key wiring (text-only)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `mars-ai-simulator-dev` on `t_3bc27807`   | **OPEN — depends on this gate**                            |
| C3 | No build-guard retirement; the `travelling-to-mars.png` row stays in `gatedFilePathSegments` and `withheldArianePlates` (the in-transit plate is not released by this step)                                                                                                                                                                                                                                                                                                                                                                                                                                               | n/a                                       | **N/A** — text-only capsule                                |
| C4 | The order-sensitivity of the prior articles holds: 001's "2031 launch window" / 002's "No launch or landing date is being stated" / 003's "no launch date has been stated" / 004's "no day within it has been announced" stay true at their own record dates; 005's "expected on 3 March 2031" and "cruise checkout around 20 May 2031" are the next pages of the same record and are fulfilled at 006 pages 1 and 2 respectively without falsifying 005 at its own date; 006 page 2's "final approach correction opportunity around 21 August 2031" is fulfilled at 006 page 3 without falsifying page 2 at its own date | this gate                                 | **PASS** (continuity §2 last block)                        |
| C5 | No real-named sentence is approved; the disclosure pattern is the 005 / 006 pages 1–2 form; the launch-facility family scan is 0 hits; the C7 ordinal is the reviewer-confirmed derivation from the released counting convention pages 1 and 2 set; the C8 next-status wording uses generic approach / arrival-preparation phrasing with the explicit entry / landing / surface boundary                                                                                                                                                                                                                                  | this gate                                 | **PASS** (continuity §4 + §3 row 11 + §3 D1–D6 + §4 row 8) |
| O1 | The "no separate SEO pack file" is a convention break with 001-004 (shared with 005 and 006 pages 1–2); the SEO work is integrated into the frontmatter; brief `:40` literally names "an integrated SEO package" as the form. Cosmetic, not material, not blocking. The writer's wording is preserved (this gate does not silently rewrite another worker's artifact)                                                                                                                                                                                                                                                     | future SEO pass if convention is enforced | observation, not blocking                                  |
| O2 | The article draft is an untracked file in the shared checkout (`git status` shows `?? website/news/006-cruise-final-approach.mdx`); the build card `t_3bc27807` is the first commit, with the pre-commit hook bypassed (`--no-verify`) per the 004 release record O-7 because hashes are cited elsewhere                                                                                                                                                                                                                                                                                                                  | `t_3bc27807`                              | observation, not gating                                    |
| O3 | The cruise chain is serialised (brief `:43`): the article is page 3 of 3, and the brief fixes no further page in this step. The next article in the public record is the step-007 landing-preparation capsule. The C8 next-status sentence uses generic approach / arrival-preparation phrasing and explicitly excludes entry, landing, and surface operations                                                                                                                                                                                                                                                            | subsequent reviewer card                  | observation, owner = the planner's chain                   |
| O4 | The `arrival at Asteria Field lies ahead` sentence at L51 is order-sensitive against a step-007 release that names a landing date: with page 3's record date `2031-08-21`, the sentence reads as a statement about its own date and is falsifiable only when the step that publishes a landing _date_ runs **before** the page-3 record date is on its face. Recorded as a release-order condition routed to the card that owns both flips, not a continuity failure of the unpublished 006 page-3 package                                                                                                                | the planner's chain                       | observation, owner = the planner's chain                   |
| O5 | The C7 ordinal "third" is the reviewer-confirmed derivation from the released counting convention pages 1 and 2 set; it is semantically equivalent to row `:196`'s milestone name ("Final approach correction opportunity"). A 006 page-3 article that did not use the ordinal could rely on the released milestone name only; the writer chose the ordinal for clarity, and the reviewer confirms the wording                                                                                                                                                                                                            | this gate                                 | **PASS** (continuity §3 D2; review §1 row 17)              |
| O6 | The C8 next-status wording ("the approach and arrival-preparation phase") is the page-3-appropriate generic phrasing; released pages 1–2 named the next milestone directly, but page 3 cannot name row `:197` (entry and landing) because that is the step-007 milestone. The article's explicit "details of entry, landing, or surface operations are not part of this record" sentence is the operative boundary. The reviewer confirms the wording                                                                                                                                                                     | this gate                                 | **PASS** (continuity §3 D5; review §1 row 17)              |

## 12. Revision history of this record

| Revision       | SHA-256 of this record (prepend dprint-stable)                                                                       | Article bytes sha256 (under review)    | Author                                      | What moved                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — first gate | this revision (pre-append sha to be recorded on card `t_a3cfbc80`; dprint-stable hash will be recorded after format) | `d837f40f…` (3,741 B, 63 lines, draft) | `mars-ai-simulator-reviewer` (`t_a3cfbc80`) | status `approved`; the review table with 22 PASS / n/a rows and zero findings; the six-rule review applied to the exact public sentences (analogue of 005); the simulated record date assignment `2031-08-21` from `docs/SCENARIO.md:196` with order, containment, compatibility, surface, ceiling, floor checks; the integrated SEO summary (no separate SEO pack — convention break, observation O1); the live-origin and build-surface state (the article is fail-closed today — HTTP 404 on the live origin and absent from `website/dist/news/`, both verified 2026-09-19 ~12:45 CEST); the exact public scope the release will cover (recorded now so the build card applies one scope); the release decision **recorded** in §10; conditions C2-C5 OPEN/N/A and observations O1-O6 |

---

_At this single-pass gate the package clears. Next recommended owner and action:
`mars-ai-simulator-dev` on the build card `t_3bc27807`, which is now
unblocked by this gate, applies the two changes named in §10 in one
path-limited commit (the `publication: published` flip and the
`simulatedDate: 2031-08-21` line), pushes, and measures the live
origin to confirm the flip byte-for-byte and the rendered
`Simulated record date · 21 August 2031` line on the article page and
on the `/news/` newsroom card. This gate is then complete._
