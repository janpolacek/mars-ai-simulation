# Review: 005-launch — editorial final gate

Slug: `005-launch`. Card `t_fd724cd9` (`mars-ai-simulator-reviewer`),
stage: merged continuity + editorial final gate. Timeline step
`005-launch`. Companion record: `.agents/work/continuity/005-launch.md`
(verdict `continuity clear`; the two findings F1 and F2 below were closed
in Revision 2 by the writer corrective `t_f1ddd064`; the gate now passes
and the release decision is recorded in §10 below).

**Status — `approved`.** Revision 1 closed the two wording findings (F1
launch facility, F2 step-007 arrival date) with a writer corrective that
left everything else untouched; this gate re-verified the corrected
bytes (`f165f3abd6e0ee42b1cb881377291f85831198b99cb3a5263fe0dd5bb09d8abe`,
2,900 B, 49 lines, `publication: draft`) and records the release decision
in §10 below. No canon change, no `docs/SCENARIO.md` write, no
`docs/timeline/` write, no asset change, no build-surface change; the
publication flip and the `simulatedDate` line and the media-key wiring
remain the build card `t_d562771d`'s act.

_For Revision 1 the verdict was `changes_requested` on two scope-boundary
findings; the original wording-only Finding F1 and Finding F2 blocks are
preserved below for traceability. The original R1 status block is now
historical and is followed by §13 Revision 2 — re-verdict on the corrected
bytes and the release decision._

- **F1** — **L14** names the launch facility (`Europe's Spaceport`). Step
  004's released article measured 0 hits on the launch-facility family in
  its §"Withheld-marker scan"; article 004 deliberately held this string.
  The brief's "Allowed facts" line does not include launch-facility names
  and the launcher dossier's own publication state is unrecorded. Article
  005 is the first public article to publish the family.
- **F2** — **L40** names the step-007 milestone date
  (`16 September 2031 arrival at Asteria Field`). The brief's "Forbidden /
  spoiler facts" line excludes later timeline events and private-calendar
  details beyond the launch day, and the step-005 allowed angle at
  `docs/timeline/005-launch.md` is the three items the timeline calls out
  (what happened, the next immediate check, when the next status is
  expected) — step-007's arrival date is not one of them.

Both findings are wording-only, in the writer-owned article body. They do
**not** require a canon change, a `docs/SCENARIO.md` change, a gate answer,
an asset change, or a build-surface change. The routing is a single
corrective card owned by `mars-ai-simulator-writer`, linked as this gate's
**parent**; this card blocks on it via `kanban_block(kind="dependency")`.

**Everything else passes.** The chronology holds, the canon claims trace,
the article body is on voice, the frontmatter is schema-clean, the SEO
integrated into the draft carries title / summary / linkLabel / internal
links cleanly, the asset manifest's reuse-only decision is sound (the dev
card owns the media key + guard flip), and the simulated record date
**`2031-02-17`** is assigned from a locked milestone the table holds —
`docs/SCENARIO.md:193` (`17 February 2031 | Ariane 64 launch and Earth
departure`).

**No release decision is recorded.** When the corrective lands the
corrected bytes, this gate re-runs and the release decision is recorded in
§"Release decision" of a subsequent revision of this file.

## Review metadata

|| Field | Value | || ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| Card / stage | `t_fd724cd9` — editorial final gate + continuity for `005-launch`. Parent `t_d234a60f` (visuals, done); child `t_c942df74` (news-listing correction, `todo`); grandchild `t_d562771d` (build/publish, `todo`). Children included for traceability — neither advances until this gate clears |
|| Article (R1) | `website/news/005-launch.mdx` — sha256 `593ee4a452b0cd18b8f150c8a2ed918a89fb4e36fb3140d16a74ee3c0deae52a` (2,951 B, 50 lines, `publication: draft`, no `media*`, no `author`, no `simulatedDate`, 432-word heading-free body). The SEO package the brief requires is integrated into the frontmatter; see §6 |
|| Inputs | `.agents/work/briefs/005-launch.md`; `.agents/work/sources/005-launch.md`; `.agents/work/assets/005-launch/assets.md` (`91468fe1…`, reuse-only manifest for `docs/vehicles/ariane/lunch.png`); `docs/SCENARIO.md` (mission identity, flight system, launch-and-mission dates, continuity and release controls); `docs/timeline/005-launch.md`; released precedent: `website/news/001-project-announcement.mdx` … `004-launch-provider.mdx`; release record `.agents/work/releases/004-launch-provider.md` (the live condition row 3 / C6 setting 005's record date as a lower bound on `2030-03-11`) |
|| Fail-closed default | Held today: article is `publication: draft`, route `/news/005-launch/` 404, no `media` field, `newsMediaIssues()` has nothing to require, the article is filtered out by `selectPublicNews`. A `publication: published` flip on this gate's release decision is what adds the route and the listing; the dev card `t_d562771d` applies the flip and the media-key wiring together |
|| Verdict written | 2026-09-19 ~10:00 CEST, against the live origin (no route yet for 005) and the shared checkout (`HEAD` = `origin/main` = `db7a78a`) |
|| Plan | Corrective card `t_005launch_correction_1` (`mars-ai-simulator-writer`) — link it as the parent of `t_fd724cd9` and block this card on it (`kanban_block(kind="dependency")`). The corrected bytes return to this gate for re-verification; the release decision is then recorded in §"Release decision" of a later revision |

## 1. Review table

|| # | Check | Result | Evidence | || -- | ----------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| 1 | Brief, source pack, asset manifest, and article frontmatter read in full | PASS | All four paths re-read this pass; article hash matches the source pack's expectation (`593ee4a4…`, `publication: draft`) |
|| 2 | News schema (`src/content.config.ts:9-71`) accepts the frontmatter | PASS | `js-yaml` parse: keys `title, category, status, publication, summary, linkLabel, order, accent`; no required field missing; `newsMediaIssues()` returns `[]` (no `media` declared) |
|| 3 | Claims trace to canon or a cited source | PASS (with F1) | Continuity §3 table — 13 rows of body claims trace to a released source or the brief's "Allowed facts" line; F1 (the launch-facility name) and F2 (the step-007 arrival date) are the two out-of-scope items |
|| 4 | Derived claims are judged, not waved through | PASS | Continuity §3 last block (D1–D4) names the four derivations and what each rests on; D1 and D4 carry the two findings |
|| 5 | No later-step fact, no unreleased `docs/timeline/` detail | **F2** | L40 names `16 September 2031 arrival at Asteria Field` (SCENARIO.md:197, step 007) — excepted in the brief. **F2** records a one-sentence rewrite |
|| 6 | No landing site, Mars surface imagery, or Asteria Field material beyond what 001 released | PASS (with F2) | The single `Asteria Field` mention is a landing-target name already released at 001:5; no coordinates, no ellipse, no P0, no science zone, no hazard, no traverse. The finding on this row is the _date_, which sits in F2 |
|| 7 | No performance, mass, cost, or specification figure | PASS | 0 numerical-spec hits in body and frontmatter |
|| 8 | No real institution, provider, operator, or facility named (004-B fail-closed default; this step extends it) | **F1** | L14 names the launch facility (`Europe's Spaceport`) — a launch-facility-family string the dossier's binding list binds; the released 004 article measured 0 hits on this family. Article 005 is the first public article to publish one. **F1** records the fix |
|| 9 | The six accurate / non-endorsing rules applied to the exact public sentences (C2 of the 004 ledger, analog) | PASS | §4 below, rule by rule, on the sentences that name the launcher and the cruise stage. The disclosure's "real agency … launcher operator … launch facility" wording is in the form 004 used; the 005 disclosure re-states it without picking a specific entity; nothing in the article asserts that any specific entity has endorsed or approved the programme |
|| 10 | Citation form: no dead or unauthorised links | PASS | Two internal anchors: `/#mission` (the fiction disclosure, line 12) and `/news/004-launch-provider/` (the released architecture briefing, line 18). Both targets are released routes (200 on the live origin); no external link |
|| 11 | Coherence and structure | PASS | Eight paragraphs, single narrative arc (launch → architecture context → what happened → next check → next status → risk acknowledgement → disclosure note), 432 words, no `h2`, no dateline |
|| 12 | Voice: informed, composed, candid, specific, modest | PASS | "Early spacecraft checkout met nominal criteria" without superlative; "a different kind of risk — one that can only be managed from far away" without grandiosity; "uncertainty as part of the record rather than a gap to hide" without overstatement. Disclosure in first sentence and closing note, both in 004's pattern |
|| 13 | Copy mechanics (grammar, repetition, terminology) | PASS | "Cruise stage" / "flight stack" used consistently; no repeated phrasing across paragraphs; "trajectory-correction opportunity" defined inline; no acronym display |
|| 14 | Frontmatter schema conformance | PASS | Title 30 chars, summary 138 chars, linkLabel 13 chars; all eight required keys present; `publication: draft` until the release decision is applied by the build card |
|| 15 | Metadata carries nothing withheld | PASS | The summary names the cleared designation (`Ariane 64`) and an `expectation` of a future correction; no date, no figure, no institution, no landing-day date |
|| 16 | Image placement, captions, and alt text | n/a — no media | No `media` key yet; `newsMediaKeys` does not include the proposed `launch-lift-off` key the asset manifest proposes; the dev card `t_d562771d` is the owner of media-key registration and `guards.mjs:73` retrieval (the plate currently sits in the per-file withheld set). No figure, no alt text, no caption this pass; the gate cannot confirm media rendering when no media key is wired |
|| 17 | The record date is assigned from a locked milestone and named with its source | PASS | §5: `2031-02-17` from `docs/SCENARIO.md:193`; order, containment, compatibility, surface rendering all checkable at the build pass |
|| 18 | The label presents the value as part of the fiction | PASS | `src/lib/simulated-date.ts` owns the `Simulated record date` label and the U+00B7 separator; the schema permits either a quoted string or an unquoted `Date`; the rendered shape `12 October 2026` is what 001–004 already render |
|| 19 | The published surface is checked, not only the file | PASS | The live origin has no `/news/005-launch/` route today (the article is `publication: draft`); the shared `website/dist/` is **not** the live surface (predates the build card's push) and this gate does not build; the build card's evidence is what makes the surface check complete |
|| 20 | The fail-closed state holds **in fact**, not on paper | PASS | `/news/005-launch/` 404 on the live origin; `selectPublicNews` filters the article out of the newsroom, the homepage cards and the carousel; no `media*` field; no flip; no commit or push by this card |
|| 21 | No external action of any kind | PASS | No commit, push, deploy, hosting/DNS/credential use, or media upload; no `publication:` field flipped; no `website/` write by this card; only this review record and its companion continuity record are written |
|| 22 | The card's out-of-scope list respected | PASS | No `docs/SCENARIO.md` change, no public date set beyond the record date this role owns, no `docs/timeline/` write, no prose rewrite, no imagery produced, no flip |

**Token scan of the reviewed file** (script outside the repository;
families reported by hit count):

- launcher designation: `Ariane 64` ×4 (L13, L17 summary ×1, L17 body ×1, L48 disclosure ×1, L50 closing ×1 — five at body level; matches the prior pattern)
- **real institution / operator: 0** (no Arianespace / CNES / ESA / FEI STU in body or frontmatter)
- **launch-facility family: 1** (F1, "Europe's Spaceport" on L14)
- **launch-day forms beyond the launch row: 4** (`:193` `17 February 2031` ✓ permitted; `:194` `3 March 2031` ✓ permitted; `:195` `20 May 2031` ✓ permitted; `:197` `16 September 2031` ✗ — F2)
- **landing-region coordinate markers: 0**
- **performance / mass / cost / schedule figures: 0**
- **Asteria Field / landing-design: 1 name only** (the name, already released at 001:53–60; F2 attaches to the date that follows it)
- **step 006–011 milestone rows: 0** (none of `:198`–`:207` appears)
- **`docs/timeline/` paths: 0**
- **withheld filenames (`contact-arm-scene`, `travelling-to-mars`): 0**

## 2. Findings — required changes

Both findings are wording-only, in one file, and need no canon change,
gate answer, `docs/SCENARIO.md` change, asset change, or build-surface
work. The full reasoning and the published-counter-example sits in the
companion continuity record §4 (F1) and §5 (F2); the writer's own brief
pass is the brief's "Allowed facts" / "Forbidden facts" line.

|| # | Current wording (line, the article body) | Required | Why it blocks | || ------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| **F1** | "On 17 February 2031, Red Horizon One launched aboard Ariane 64 from **Europe's Spaceport**." (L13–L14) | Replace the launch-facility noun with a geographical phrasing OR remove the facility clause (continuity §4.2: options A or B). | The launch-facility family is in the canonical withheld set (SCENARIO.md:281 + 004 release record §"Withheld-marker scan"); article 004 measured 0 hits on this family on its released bytes; article 005 is the first public article to publish one. The brief's "Allowed facts" line excludes facility names, and the launcher dossier's own publication state is unrecorded (Observation O-2 of `.agents/work/releases/004-launch-provider.md`). The fix is one sentence |
|| **F2** | "The next status the programme expects to report is a cruise checkout around 20 May 2031, covering the health of all flight elements and confirming that the mission remains on track for **its 16 September 2031 arrival at Asteria Field**." (L38–L40) | Reframe so the article does not name a step-007 arrival date (continuity §5.2: options A or B). The `Asteria Field` name may stay (already released at 001); the date may not. | The 16 September 2031 milestone is `:197` ("Atmospheric entry and landing at Asteria Field"), step-007's event. The step-005 allowed angle at `docs/timeline/005-launch.md` is the three items the timeline calls out (what happened, the next immediate check, when the next status is expected), and the arrival date is not one of them. The brief's "Forbidden facts" line excludes later timeline events and "private-calendar details beyond the approved launch day". The fix is the second half of one sentence |

**Constraint to keep in the same pass** (a one-sentence corrective in
each case, applied to the same file):

- The corrected clauses must still be true on the assigned record date
  **2031-02-17** (SCENARIO.md:193) and on every later milestone row.
- After the corrective, the article must still publish the four
  in-scope dates that step 005 owns: the launch day (`:193`), the
  next immediate check (`:194`, `3 March 2031`), the next status
  expectation (`:195`, `20 May 2031`), and no others.
- The article must remain free of any real institution, operator or
  facility name; the fix in F1 **must not substitute one** (a writer
  must pick a geographical phrasing, not another institutional name).
- The launch-facility family scan must record 0 hits after the fix;
  the named milestone-date scan must record 0 hits on rows `:197` and
  later; every other family already records 0.
- The 004 release record's conditions on this step (continuity §"Lower
  bound carried forward") still hold: 005's record date is later than
  2030-03-11, and 005 stays in timeline order against 001 (2026-10-12),
  002 (2027-03-19), 003 (2029-07-13), 004 (2030-03-11).

## 3. Required changes — owner / routing

The corrective card is `t_005launch_correction_1`
(`mars-ai-simulator-writer`). Body:

- **Slug**: `005-launch-correction-1`
- **Acceptance**: apply the F1 and F2 fixes from §2 of
  `.agents/work/reviews/005-launch.md` to
  `website/news/005-launch.mdx`; re-hash the file; record the new
  frontmatter sha256 and the diff against `593ee4a452b0cd18b8f150c8a2ed918a89fb4e36fb3140d16a74ee3c0deae52a`;
  re-verify with the file's own scanner at
  `/tmp/rh-005-launch-fc/drill.py` that the launch-facility family and
  the `16 September 2031` mention are gone from the body; do not touch
  `docs/SCENARIO.md`, `docs/timeline/005-launch.md`, the asset manifest,
  the build guard, the media registry, or any other article; the only
  `website/news/005-launch.mdx` edit is the one sentence in each
  finding; do not commit or push.
- **Pre-flight constraint**: the corrected clauses must still be true
  on the assigned record date `2031-02-17` (the launch day itself), the
  in-scope milestone rows `:193`/`:194`/`:195` are still named in the
  body, and the F2 fix preserves the `Asteria Field` name (released at
  1. without naming the `:197` date.
- **Not yours to decide**: do not add a `simulatedDate` (this role
  owns it); do not flip `publication`; do not introduce a `media*`
  field; do not change the disclosure note; do not change the SEO
  metadata outside the affected sentence; do not rewrite the closing
  acknowledgement paragraph or the article voice.
- **Out of scope**: do not edit any other article, the dossier, the
  launcher manifest, the timeline step, or any build-surface file.

The corrective is linked as the **parent** of this gate card (the
prohibited-direction edge from the wiki-ariane-64 lesson: no
`parents=[t_fd724cd9]` on the create call; use
`kanban_link(parent_id=<new_corrective>, child_id=t_fd724cd9)`
separately). After the link is in place, this card blocks with
`kanban_block(kind="dependency")` so the dispatcher re-runs the gate
once the corrective completes.

When the corrective lands, the corrected bytes return to this gate for
re-verification. The re-gate records its verdict in §"Revision 2" of
this file and (on `approved`) records the release decision in
§"Release decision".

## 4. The six accurate / non-endorsing rules, applied to the exact sentences (analog of 004 C2)

Reviewed on the sentences that name the launch vehicle and the launch site.
Step 004's Gate 004-B was answered in its "not required — no real
provider or institution named" form and that answer **does not extend
to launch-facility names**: the 004 release record scanned 0 hits on the
launch-facility family on the released article, and the dossier's own
publication state is unrecorded (Observation O-2 of
`.agents/work/releases/004-launch-provider.md`). The fail-closed default
on launch-facility names therefore binds.

|| Rule (canon proposal §"Accurate / non-endorsing wording rules") | Verdict | || ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| 1. The fiction is labelled as fiction on every public surface | PASS — first-sentence disclosure ("Red Horizon is a fictional, AI-assisted Mars exploration programme") and the closing italic note; the site chrome `/#mission` link carries the same framing |
|| 2. No implication of participation, approval, funding or endorsement | PASS-with-finding — the article's disclosure already lists "real agency, launcher operator, or launch facility" as **categories**, and names none of them by name. **F1** records that L14 names a real institution's launch facility, which the prior released article (004) deliberately held. Once F1 is corrected, rule 2 holds in both sentences and the closing note |
|| 3. No real price, cost, schedule or performance figure presented as the programme's | PASS — no figure anywhere in body or frontmatter |
|| 4. Nothing reads as an advertisement, endorsement or sales pitch for the real provider | PASS — the launcher is stated as an architecture fact; "naming it here says which launcher this fictional mission is planned around" is the same caveat 004 used |
|| 5. The real provider's public record is separated from the programme's interface | PASS — paragraph 2 (the vehicle and the non-endorsement framing) is separate from paragraph 3 (the launch-day event the step releases) and paragraph 5 (the cruise-stage description) |
|| 6. Verbatim wording review by the human before publication | Not required in this form — no real-named sentence is approved; the disclosure is consistent with the 001/002/003/004 pattern and the existing approved 004 wording. The 005 article would in any case need a separate human approval sentence to **name** a real institution; the F1 fix removes the need |

The rules govern the designation paragraph (L17–L22), the cruise-stage
paragraph (L26–L32), the next-status paragraph (L34–L40), and the closing
note (L47–L50). None of those sentences names an institution, operator or
facility by name; F1 is the only spot where one is named.

## 5. The simulated record date

> `simulatedDate: 2031-02-17` — milestone line **`docs/SCENARIO.md:193`**,
> "17 February 2031 | Ariane 64 launch and Earth departure".

This role alone assigns and verifies the value. The brief instructs the
writer to leave the field unset; the writer did so. The role assigns and
verifies here:

|| Check | Verdict | || ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|| Drawn from a locked milestone the table actually holds | Yes — `docs/SCENARIO.md:193` ("17 February 2031 | Ariane 64 launch and Earth departure"); the milestone table is at `:173`–`:207`. Step 005 is the launch step; the row that names the step's event is `:193` |
|| Step correspondence | Step 005 covers the launch and Earth departure; the row whose state matches what the article reports is `:193`. The next two rows (`194` first correction, `195` cruise checkout) are named in the article as upcoming; the article does **not** sit on those rows |
|| Rows excluded, and why | `:194`–`:196` each name an event that would put the "what happened" framing in the past at the corrected bytes; `:197` is **step-007's arrival row and is F2**; `:198` onwards are step 008+ events and are unreleased |
|| Implies no unreleased event or withheld mission date | Yes — the launch day **is** step 005's own event; the record date sits on it; the article carries no later-step fact apart from F2 |
|| Contradicts no published sentence | No — articles 001–004 carry `2026-10-12`, `2027-03-19`, `2029-07-13`, `2030-03-11` and stay in timeline order; the 004 release record's Conditions §3 ("005 must carry a record date later than `2030-03-11`") is satisfied |
|| Compatibility with the article's own present-tense negatives | No day was announced at 001 / 002 / 003; 004 stated "no day within it has been announced". At 005's own date, the launch day is announced. The 005 article's negatives are reformulated (the article reports the day rather than denying one); no contradiction against the already-published 001–004 negatives at their own dates |
|| Rendered surface states it under an in-fiction label | To be verified on the build card's live-origin measurement (the article is `publication: draft` today and no `/news/005-launch/` route exists on the live origin yet). The label and the format are owned by `src/lib/simulated-date.ts`; the schema accepts both quoted-string and unquoted `Date` frontmatter values |
|| Never presented as a real publication date or machine-readable | To be verified at build time: 0 `<time>`, 0 ISO tokens, 0 `datePublished`/`dateModified`, no OG date, no sitemap value. Matches 001–004 precedent (the 004 release record §"The simulated record date" measured all of these as 0) |
|| Order floor carried forward | It is **a lower bound on step 006+**: any later-step article must carry a record date on or after `2031-02-17`. The 005 article itself does not commit to a later date — the article reports the next check (`3 March 2031`) and the next status (`20 May 2031`) as expected, not as the article's record date |

**Status**: assigned here, applied by the build card `t_d562771d`
together with the `publication: published` flip in one change
(`AGENTS.md`), verified on the live origin by the build card's own
commit + live measurement. **Voiding condition**: any change to the
corrected MDX bytes, to the plate's `docs/` bytes, or to any of the
on-main plumbing paths (`website/src/lib/media.ts`,
`website/src/features/news/media.ts`, `website/src/lib/assets.ts`,
`website/scripts/guards.mjs`, `website/test/guards.test.mjs`) voids the
release and returns the package to this gate.

## 6. SEO package (integrated into the frontmatter)

The brief requires "an integrated SEO package" — search intent,
metadata, headings, internal links, alt-text recommendation. Article 005
has no separate `.agents/work/seo/005-launch.md`; the SEO work is in the
frontmatter and the two-anchor inventory. The integration is
SEO-correct:

|| SEO area | Article 005 | || ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| Search intent (single honest intent) | "Tell me whether the Red Horizon Mars mission has launched, when it launched, and what is happening next." The article answers it in the first paragraph and the next-check paragraph; the disclosure closes what 004 already framed |
|| Title (30 chars; current `<title>` would be `Red Horizon launches for Mars. \| Red Horizon`, 48 chars) | Reads cleanly, declarative, period-terminated, on-brand with 001 ("A Mars mission takes shape in public."), 002 ("Choosing what a Mars rover carries."), 003 ("The rover design, frozen."), 004 ("The launch architecture, chosen.") |
|| Summary (138 chars; well within the 155-char meta-description budget) | Contains the four facts a searcher needs: the mission launched, the launcher named, the cruise state, the next correction opportunity. No future-step leak beyond the brief's "next immediate check" |
|| Slug / URL | `005-launch` — matches the brief's slug; file id = frontmatter id = public URL after release |
|| Heading outline | Heading-free at 432 words (under the article-drafting skill's ~600-word heading-free threshold); single narrative arc; one paragraph per beat (launch, architecture context, the "what happened" recap, the cruise-risk acknowledgement, the next check, the next status, the closing uncertainty note, the disclosure) |
|| Internal-link inventory (verified by full-anchor grep) | 2 anchors total: `/#mission` (line 12, disclosure), `/news/004-launch-provider/` (line 18, the released architecture context). Both targets are live on the origin today; no 404, no stale slug |
|| Structured data (NewsArticle JSON-LD) | Not emitted at this stage; matches 001–004 (the `seo.ts` suppress-canonical behaviour applies while `publication: draft`). The site engineer's `NewsArticle` JSON-LD recommendation is unchanged (headline, description, fictional entity author attribution, isPartOf Red Horizon) and is a site-engineering item, not a gate item |

The "no separate SEO pack file" is a **convention break** with the
prior 001–004 news articles, every one of which has
`.agents/work/seo/<slug>.md`. Recorded as **O1**; the brief literally
names "an integrated SEO package" as the form, and the SEO metadata is
integrated into the draft. Not blocking.

## 7. Voice / structure / prose

No change requested at this revision. The article is the house register:
short declaratives, defined terms, no grandiosity, no urgency, no
superlative, no unearned certainty. The "transition brings risk"
paragraph is exactly the editorial constraint the timeline calls out
("Do not write a flawless spectacle"). The closing note re-states the
fiction disclosure in the same form 004 uses (the only article the
launch article is **not** duplicating is 001's planet-scale prose; the
launch article's voice is closer to 004's near-journalistic register
than to 001's "first person telling" register, which is what the
launch-update subject calls for).

The closing acknowledgement ("uncertainty is part of the record rather
than a gap to hide") is an editorial framing, not a guaranteed fact
about an outcome — it is consistent with the scenario's standing rule
that "the programme has committed to reporting technical risk and
anomalies candidly, not only successes" (001:64) and is not a spoiler
of an outcome.

## 8. Surface / build

- **Live origin** (2026-09-19 ~10:00 CEST):
  `/news/005-launch/` → 404 (no soft-404 that could serve an
  unpublished slug); `/news/` (12,410 B, four published cards,
  no 005 yet); `/` (18,846 B, four cards, no 005 yet);
  `/news/004-launch-provider/` → 200 (the released article);
  `/news/001-project-announcement/`, `/news/002-payload-selection/`,
  `/news/003-vehicle-design/` → 200.
- **Shared `website/dist/`** is **not** the live surface (predates
  the build card's push; this gate does not build). The build card's
  evidence is what makes the post-flip surface check complete.
- **Asset manifest** reuses `docs/vehicles/ariane/lunch.png`
  (`c4744fff…`, 1,122 × 1,402, 4:5 portrait, 2,054,094 B) — the
  decided plate for step 005. The proposed media key is
  `launch-lift-off`. C2PA `trainedAlgorithmicMedia` `caBX` chunk is
  documented in the manifest. The dev card owns (a) the media-key
  registration, (b) the `gatedFilePathSegments` retirement of the
  `lunch.png` row at `guards.mjs:73`, and (c) the matching
  `withheldArianePlates` retirement at `guards.test.mjs:827`.
- **Guard module** (`website/scripts/guards.mjs`, sha `…`):
  `gatedDirectoryNames = ['timeline']`; one file in
  `gatedFilePathSegments`: `['docs', 'vehicles', 'ariane', 'lunch.png']`.
  Nothing in the reviewed article matches any of them. The
  `gatedTextMarkers` list `'18° 42'` and `'226° 14'` is unchanged;
  the article matches neither. The guard has no marker for the
  launch-facility family; per Observation C5 (004 release record),
  the gate-side containment rests on the review and the
  release-control scope this role records.
- **Schema parse** (`/tmp/rh-005-launch-fc/fm_parse.py`,
  `js-yaml.safe_load` of the frontmatter): keys present, types
  schema-compatible, no `media*`, no `author`, no `simulatedDate`
  on the reviewed bytes (this role applies the latter).

## 9. Validation completed

- `git status --short` clean for this gate's owned paths
  (`.agents/work/reviews/005-launch.md`,
  `.agents/work/continuity/005-launch.md`); `git log origin/main..HEAD` empty.
- Article re-hashed at verdict time
  (`593ee4a452b0cd18b8f150c8a2ed918a89fb4e36fb3140d16a74ee3c0deae52a`, 2,951 B).
- Plate re-hashed at verdict time
  (`c4744fff0da848e509dfbc8ab95e702a469eeac85c15f98f8f490041b0e60895`,
  2,054,094 B, 1,122 × 1,402 PNG, 4:5 portrait).
- Frontmatter parse via `js-yaml` confirmed schema-clean.
- `newsMediaIssues()` from `website/src/lib/media.ts` returns `[]`.
- Withheld-marker scan on the article + frontmatter; results in §1
  (Token scan) and §6 of the companion continuity.
- Live origin probed: `/news/005-launch/` 404 (article not yet
  published); `/news/`, `/`, the 001–004 routes and the wiki
  routes all served the expected published pages.

## 10. Release decision — **approved** (Revision 2)

> **Release decision, recorded 2026-09-19 ~10:30 CEST by
> `mars-ai-simulator-reviewer` on card `t_fd724cd9`: the package
> `website/news/005-launch.mdx` at sha256
> `f165f3abd6e0ee42b1cb881377291f85831198b99cb3a5263fe0dd5bb09d8abe`
> (2,900 B, 49 lines, `publication: draft`, no `media*`, no `author`,
> no `simulatedDate`) IS APPROVED FOR RELEASE**, subject to the
> preconditions named below being satisfied by the build card
> `t_d562771d` on its own commit and live-origin measurement.
>
> The corrected bytes were produced by the writer corrective
> `t_f1ddd064` from the Revision 1 hash `593ee4a4…` by a single-sentence
> drop of the launch-facility clause (F1, Option C — the form the
> continuity record lists as sanctioned in §4.2; option A and option B
> fail the card's own `0 hits` family scan because the scanner matches
> Guiana / Kourou) and a single-sentence reframe of L38–L40 that drops
> the `16 September 2031` step-007 arrival date while keeping
> `arrival at Asteria Field lies ahead` (F2, Option A — preserves the
> 001-released Asteria Field name and the cruise-checkout-as-next-status
> framing the brief authorises). The corrective's no-other-change
> proof (inverting the two rewrites reproduces the R1 hash `593ee4a4…`)
> is consistent with the on-disk R2 hash.
>
> The release decision is conditioned on the build card applying, in
> one path-limited commit, the four linked changes:
>
> 1. `publication: draft` → `publication: published`;
> 2. `simulatedDate: 2031-02-17` (from `docs/SCENARIO.md:193`,
>    "17 February 2031 | Ariane 64 launch and Earth departure" — this
>    role's value, assigned here and not invented);
> 3. `media: launch-lift-off`, plus `mediaAlt` and `mediaLabel` from
>    `.agents/work/assets/005-launch/assets.md` (the alt byte-fidelity
>    sha256 `17d84def…`, label `Ariane 64 · lift-off` U+00B7);
> 4. the build guard's `lunch.png` row retired from
>    `website/scripts/guards.mjs:73` (`gatedFilePathSegments`) and the
>    matching `withheldArianePlates` row retired from
>    `website/test/guards.test.mjs:827`; the `travelling-to-mars.png`
>    row stays (separately barred).
>
> The build card owns the commit and push and the live-origin
> measurement; this gate does not build and does not push. **No second,
> divergent flip may appear later.** Voiding condition unchanged from
> Revision 1 §5: any change to the corrected MDX bytes, to the plate's
> `docs/` bytes, or to any of the on-main plumbing paths
> (`website/src/lib/media.ts`, `website/src/features/news/media.ts`,
> `website/src/lib/assets.ts`, `website/scripts/guards.mjs`,
> `website/test/guards.test.mjs`) voids the release and returns the
> package to this gate.

**Exact public scope the release will cover once the corrective lands**
(recorded now so the build card applies one scope, explicitly **not**
an approval):

| Surface                      | Content (when the release decision is recorded)                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Route                        | `/news/005-launch/` — one page, trailing-slash directory route, generated by `src/pages/news/[slug].astro` for a published item only                                                                                                                                                                                                                                                                                                                                                         |
| Card on `/` and `/news/`     | the fifth card in frontmatter order: kicker `Launch 05 · Launched`, the writer's drafted title (`Red Horizon launches for Mars.`, 30 chars), the 138-char summary, `Simulated record date · 17 February 2031` (the row this role assigns), link label `Launch update`, the placed plate in `<img>` (no `object-fit: cover`, no crop), the cell sizing as the manifest measures                                                                                                               |
| Frontmatter metadata         | `publication: published` (the flip) and `simulatedDate: 2031-02-17` (this role's value) applied **in one change**; plus the existing `title`, `category`, `status`, `summary`, `linkLabel`, `order`, `accent`, plus the new `media: launch-lift-off`, `mediaAlt` and `mediaLabel` the dev card wires (and no `mediaCaption`). No `author`.                                                                                                                                                   |
| Plate and emitted derivative | `docs/vehicles/ariane/lunch.png` (`c4744fff…`, 1,122 × 1,402, 4:5 portrait), rendered through the new `launch-lift-off` key, **uncropped**; one plate, one alt, no caption; emitted derivative from the dev card's build, per the `ariane-plates-selection.md` precedent                                                                                                                                                                                                                     |
| Real-string surface          | `Ariane 64` — the launch-vehicle designation 004-A cleared; occurrences in body, summary, linkLabel, and frontmatter metadata. **No** operating company, no agency, no operator, **no launch facility** name (F1 fix), and **no later-step date** (`16 September 2031` arrival per F2 fix). The reviewer-records's `O-2` of 004's release (dossier carries a launch-facility-family string; dossier publication state unrecorded) stands and is named in the dev card's path-limited commit. |

**Preconditions of that release**: the corrective applied at a new hash;
this gate re-run on the new bytes; the record date re-verified on the
built page; the `publication` flip and the `simulatedDate` line and the
media-key wiring applied in one change; the build guard's
`lunch.png` row retired; the `news-media.test.mjs`
`withheldArianePlates` entry retired; the live origin serves the
post-flip bytes byte-for-byte and the placed plate's emitted
derivative byte-for-byte.

## 11. Conditions and observations

| #  | Item                                                                                                                                                                                                                                                                                                                                                                                            | Owner                                             | Status at this verdict                                                                                                                                              |
| -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1 | Corrective applies F1 and F2 (wording-only, one file); corrected bytes return to this gate                                                                                                                                                                                                                                                                                                      | `mars-ai-simulator-writer` on the corrective card | **CLOSED (Revision 2)** — `t_f1ddd064` produced `f165f3ab…` (2,900 B, 49 lines); this gate re-verified the corrected bytes and recorded the release decision in §10 |
| C2 | `publication: published` and `simulatedDate: 2031-02-17` applied in **one** change; the `launch-lift-off` media key wired in the same change                                                                                                                                                                                                                                                    | `mars-ai-simulator-dev` on `t_d562771d`           | **OPEN — depends on the listing correction `t_c942df74`**                                                                                                           |
| C3 | The build guard's `lunch.png` row retired from `gatedFilePathSegments`, `withheldArianePlates` retired in `guards.test.mjs`; emitted derivative re-measured                                                                                                                                                                                                                                     | `mars-ai-simulator-dev` on `t_d562771d`           | **OPEN**                                                                                                                                                            |
| C4 | The order-sensitivity of the prior articles holds: 001's "2031 launch window" / 002's "No launch or landing date is being stated" / 003's "no launch date has been stated" / 004's "no day within it has been announced" stay true at their own record dates; the 005 article's positives do not contradict them at those dates                                                                 | this gate                                         | **PASS** (continuity §2 last block)                                                                                                                                 |
| C5 | The launcher dossier's own publication state is unrecorded; an institution name in the dossier stays unbound; the 005 article's corrected bytes must not name one (the F1 fix is also rule 6 of the six-rule review)                                                                                                                                                                            | this gate                                         | **PASS** (Revision 2: re-verified — corrected bytes name 0 institutions, 0 launch-facility strings)                                                                 |
| O1 | The brief-required "integrated SEO package" sits in the frontmatter (no separate `.agents/work/seo/005-launch.md`); convention break with 001–004; SEO-correct regardless                                                                                                                                                                                                                       | future SEO pass if convention is enforced         | observation, not blocking                                                                                                                                           |
| O2 | The `lunch.png` row of `gatedFilePathSegments` (`guards.mjs:73`) and the `withheldArianePlates` row at `guards.test.mjs:827` are still **withheld** today; the dev card's path-limited commit retires both                                                                                                                                                                                      | `t_d562771d`                                      | observation, gating the placement in C3                                                                                                                             |
| O3 | The article draft is an untracked file in the shared checkout (`git status` shows `?? website/news/005-launch.mdx`); the dev card `t_d562771d` is the first commit, with the pre-commit hook bypassed (`--no-verify`) per the 004 release record O-7 because hashes are cited elsewhere                                                                                                         | `t_d562771d`                                      | observation, not gating                                                                                                                                             |
| O4 | The news-listing correction `t_c942df74` (sort by `simulatedDate` descending) is a sibling child; its work is independent of this gate (it changes the selector behaviour site-wide, and the draft article is `publication: draft`, so its presence in the listing is filtered out regardless); build card `t_d562771d` waits on **both** `t_c942df74` and `t_fd724cd9` per the planner's graph | `t_c942df74` (sibling) → `t_d562771d` (gated)     | observation, sibling card                                                                                                                                           |

## 12. Revision history of this record

| Revision       | SHA-256 of this record (prepend dprint-stable) | Article bytes sha256 (under review)    | Author                                      | What moved                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------- | -------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 — first gate | pre-append `…` (recorded on card `t_fd724cd9`) | `593ee4a4…` (2,951 B, 50 lines, draft) | `mars-ai-simulator-reviewer` (`t_fd724cd9`) | status `changes_requested`; the full review table with the two findings (F1 launch facility, F2 step-007 date); the writer-routed corrective with F1/F2 fixes from the brief's "Allowed facts" / "Forbidden facts" line; the six-rule review applied to the exact public sentences (analogue of 004 C2); the simulated record date assignment `2031-02-17` from `docs/SCENARIO.md:193` with order, containment, compatibility, surface checks; the integrated SEO summary (no separate SEO pack — convention break, observation O1); the live-origin and build-surface state (the article is fail-closed today); the exact public scope the release will cover (recorded now so the build card applies one scope); the release decision **withheld** at this revision; conditions C1–C5 and observations O1–O4 |
| 2 — re-verdict | this revision                                  | `f165f3ab…` (2,900 B, 49 lines, draft) | `mars-ai-simulator-reviewer` (`t_fd724cd9`) | writer corrective `t_f1ddd064` produced the corrected bytes; this gate re-verified: F1 launch-facility family scan = 0 hits; F2 `16 September 2031` mention = 0 hits; in-scope dates (`17 February 2031`, `3 March 2031`, `20 May 2031`) all present on the same lines as R1; `Asteria Field` name retained (released at 001); 0 hits on the real-institution family; frontmatter block byte-identical to R1 (`6a62cfc5…`); `dprint check` exit 0 on both records; status moved to `approved`; §10 carries the recorded release decision; conditions C1 closed, C5 re-verified; §13 below is the re-verdict narrative                                                                                                                                                                                          |

## 13. Revision 2 — re-verdict on the corrected bytes

Re-ran the gate on the corrected bytes
(`f165f3abd6e0ee42b1cb881377291f85831198b99cb3a5263fe0dd5bb09d8abe`,
2,900 B, 49 lines) against the live origin and the shared checkout.
The five checks below are the gate re-runs; everything else inherits
Revision 1 unchanged.

- **Family scans on the corrected bytes** (the gate's own scanner,
  rerun live):

  | Family                                       |                           R1 hits |         R2 hits |
  | -------------------------------------------- | --------------------------------: | --------------: |
  | launcher designation `Ariane 64`             |                               4–5 | 4–5 (unchanged) |
  | real institution / operator                  |                                 0 |               0 |
  | **launch-facility family**                   | **1** (`Europe's Spaceport`, L14) |           **0** |
  | withheld launch-day forms                    |                                 0 |               0 |
  | `docs/timeline/` paths                       |                                 0 |               0 |
  | landing-region coordinate markers            |                                 0 |               0 |
  | performance / mass / cost / schedule figures |                                 0 |               0 |
  | `Asteria Field` name (released at 001)       |                                 1 |        1 (kept) |
  | `16 September 2031` (step-007 `:197`)        |                        **1** (F2) |           **0** |

- **In-scope dates intact**: `17 February 2031` L13 (`SCENARIO.md:193`),
  `3 March 2031` L34 (`SCENARIO.md:194`), `20 May 2031` L38
  (`SCENARIO.md:195`). The three milestone rows the brief's "Allowed
  public angle" enumerates are present; no other milestone row appears.
- **Frontmatter block unchanged**: keys `title, category, status,
  publication, summary, linkLabel, order, accent`; `publication: draft`
  (the build card flips this in C2); no `media*`, no `author`, no
  `simulatedDate` (this role applies the latter).
- **Corrective scope proof**: the corrective card recorded that
  inverting the two rewrites reproduces the R1 sha256 `593ee4a4…`;
  the on-disk R2 hash matches the corrective's claimed `f165f3ab…`,
  consistent with no other change.
- **Voice / structure / prose**: unchanged from R1 §7. Heading-free,
  eight paragraphs, 425-word body, two internal anchors
  (`/#mission`, `/news/004-launch-provider/`) — both targets are
  released routes on the live origin. No editorial fix requested.

The corrected bytes pass every check on the R1 review table that the
two findings sat on; the other twenty rows of §1 inherit PASS
unchanged. The six-rule review on the corrected sentences (analogue
of 004 C2) holds by construction:

- Rule 1 (fiction labelled on every public surface): PASS.
- Rule 2 (no implication of participation, approval, funding or
  endorsement by any real party): PASS — the disclosure lists
  categories, not names; the corrected L13–L15 names no facility.
- Rule 3 (no figure as the programme's): PASS — zero figures.
- Rule 4 (no advertisement / endorsement / sales pitch): PASS.
- Rule 5 (real record separated from programme's interface): PASS.
- Rule 6 (verbatim wording review by the human before publication):
  not required in this form — no real-named sentence is approved;
  the F1 fix removes the only named-entity sentence and the
  approval sentence is therefore unnecessary.

**Verdict (Revision 2)**: `approved`. The release decision is
recorded in §10 above. No second, divergent flip may appear later;
the flip remains the build card `t_d562771d`'s act.

---

_At Revision 2 the gate clears. Next recommended owner and action:
`mars-ai-simulator-dev` on the build card `t_d562771d`, which is now
unblocked by this gate and by the listing correction `t_c942df74`,
applies the four changes named in §10 in one path-limited commit,
pushes, and measures the live origin to confirm the flip and the
plate's emitted derivative byte-for-byte. This gate is then complete._
