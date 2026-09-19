# Continuity: 005-launch — chronology, canon, plausibility and spoiler verdict

Slug: `005-launch`. Card `t_fd724cd9` (`mars-ai-simulator-reviewer`), stage: merged
continuity + editorial final gate. Timeline step `005-launch`. Companion record:
`.agents/work/reviews/005-launch.md` (review table, status `approved` at
Revision 2; the release decision is recorded in §"Release decision" of that
record).

**Verdict (2026-09-19, ~10:30 CEST): `continuity clear`.** Revision 1 was
`return for revision` on two wording findings in the article body (F1
launch-facility string, F2 step-007 arrival date); Revision 2 closes
both — the writer corrective `t_f1ddd064` produced the corrected
bytes `f165f3abd6e0ee42b1cb881377291f85831198b99cb3a5263fe0dd5bb09d8abe`
(2,900 B, 49 lines, `publication: draft`) and this gate re-verified
the family scans, the in-scope dates, the Asteria Field name, the
institution family, and the frontmatter block. Continuity is clear;
the companion review's §"Release decision" carries the release
decision. No canon change, no `docs/SCENARIO.md` write, no
`docs/timeline/` write.

The reviewer in chief records the release decision in the companion review
`§"Release decision"`. No separate human approval is required.

## 1. Evidence boundary and what was compared

|| Item | Value | || -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| Article under review | `website/news/005-launch.mdx` — sha256 `593ee4a452b0cd18b8f150c8a2ed918a89fb4e36fb3140d16a74ee3c0deae52a`, 2,951 B, 50 lines, `publication: draft` (line 5), no `media*`, no `author`, no `simulatedDate`, 432-word heading-free body (the SEO-compatible integrated package the brief requires) |
|| Released step compared | `docs/timeline/005-launch.md` (private situation, allowed public angle, spoilers and handoff); released precedence `docs/timeline/001-project-announcement.md` … `docs/timeline/004-launch-provider.md`; `docs/timeline/README.md` for the "do not invent" invariant |
|| Canon compared | `docs/SCENARIO.md` `99206373…` — §Mission identity (`:19`, `:21`–`:25`), §Flight system (`:122`–`:140`, esp. `:124`), §Launch and mission dates (`:173`–`:207`, milestone row `:193` the launch day), §Continuity and release controls (`:274`–`:282`, landing-design withhold `:279`, real-institution rule `:281`) |
|| Working papers compared | `.agents/work/briefs/005-launch.md` `…` (the step's bound brief, "allowed facts" + "forbidden/spoiler facts"); `.agents/work/sources/005-launch.md` `…` (claim ledger C1–C10 + real-world grounding); `.agents/work/assets/005-launch/assets.md` `91468fe1…` (reuse-only manifest for `docs/vehicles/ariane/lunch.png`) |
|| Published record compared | `website/news/001-project-announcement.mdx` (`923a12d8…`, 4,832 B), `002-payload-selection.mdx` (`7b69bd7f…`, 7,766 B), `003-vehicle-design.mdx` (`51f2ee69…`, 5,476 B), `004-launch-provider.mdx` (`7da71fec…` released / `be20389f…` post-Form-A), `revisions/004-launch-provider.md` §"Withheld-marker scan" |
|| Surface machinery compared | `website/src/content.config.ts` (news schema, newsMediaKeys), `src/lib/media.ts` (newsMediaRequirements), `src/lib/simulated-date.ts` (label and pattern), `src/lib/publication.ts` (publication predicate), `src/features/news/media.ts` (key resolver), `ArticleView.astro`, `NewsCard.astro`; guards `website/scripts/guards.mjs`, `website/test/guards.test.mjs` |
|| Shared tree read at | `HEAD` = `origin/main` = `db7a78a`; nothing reset or stashed; no `website/` write by this card; the working tree is dirty only in untracked 005-launch working papers (briefs, source, asset manifest) and the untracked `005-launch.mdx` itself; a sibling dev card is running on the listing-order fix and may commit |
|| Build surface | The shared `website/dist/` is **not** the live surface for step 005 (predates the build card's push); `scripts/check-dist.mjs` prunes offending files from `dist/` on failure and a release-stage gate must never build over the build card's output (recorded). The live origin is what would carry the published bytes after the build card pushes |
|| All input hashes re-taken | Immediately before this verdict (2026-09-19 ~10:00 CEST); every hash identical to the read cited above |

## 2. Chronology

- **Release order.** Step 005 (the launch) is released by the editorial review's
  recorded release decision once the corrective closes both findings; the article
  is the step's public surface and stays `publication: draft` until that flip.
- **The step's own boundary.** `docs/timeline/005-launch.md`:
  - §Allowed public angle: "Publish a factual launch update: what happened,
    the next immediate check, and when the next status is expected. Include a
    clear 'fictional AI-assisted project' disclosure where site standards
    require it." That scope names exactly the three things this article may
    carry: the launch event (`17 February 2031`), the next immediate check
    (the first trajectory-correction opportunity), and the next status
    expectation (a cruise checkout).
  - §Spoilers and handoff: "Do not report cruise anomalies, landing success, or
    surface targets. Dependency: 004." — i.e. published copy must not name
    events of later timeline steps.
- **The milestone row the step covers.** `docs/SCENARIO.md:193`:
  `17 February 2031 | Ariane 64 launch and Earth departure`. The
  record-date skill (§"The simulated record date" in
  `.agents/skills/editorial-review/SKILL.md`) instructs: "pick the milestone the
  article's released timeline step covers — step 005 the launch and Earth
  departure". Step 005 covers that milestone, and the row the table holds is
  the one the article's subject reports. **The record date this role assigns
  is `2031-02-17`, drawn from `docs/SCENARIO.md:193`.** (Same row, same value,
  recorded in the companion review §"The simulated record date".) The next
  two milestone rows the article references (`3 March 2031` first correction,
  `20 May 2031` cruise checkout) sit in the table at `:194` and `:195` and
  are named **in the article as upcoming** — that is permitted by the angle
  ("the next immediate check … when the next status is expected") — but the
  article **also names** the `:197` arrival row and the `:172` landing-design
  withhold on its own end, which is exactly what the brief excludes.
- **Order-sensitivity against already-published copy.**
  - 001 (`:66`–`:72`, record date `2026-10-12`): the only calendar sentence
    is "a launch window in 2031". Article 005 naming `17 February 2031`
    **is the thing 001 never named** — that is step 005's job, and at 001's
    own date the launch day was not yet announced, so the condition holds.
  - 002 (`:105`–`:106`, record date `2027-03-19`): "The schedule frame
    remains the 2031 launch window set out in the [programme announcement].
    No launch or landing date is being stated." Article 005 names
    `17 February 2031`. At 002's own date the day was not yet stated, and
    002 carries its own record date, so its own claim still holds at its own
    moment. The same logic does **not** apply to step-006/007 dates (`:194`,
    `:195`, `:197`): articles 001–004's present-tense negatives do not name
    those rows and rely on no-day-being-stated, so naming them now does not
    falsify 001–004 at _their_ record dates. But the brief's "allowed facts"
    for step 005 excludes them, so the finding is §5–F2 not a falsification.
  - 003 (`:70`–`:71`, record date `2029-07-13`): "No launch vehicle has been
    named, no launch date has been stated, and no landing site has been
    announced." Article 005 names the launcher (already released at 004),
    the launch day (this step's release), and the landing **target name**
    (already released at 001). No landing _site coordinate_ appears. The 003
    sentence holds at 003's own date, falsifiable only when the step that
    publishes its _site_ runs.
  - 004 (`:47`, record date `2030-03-11`): "no day within it has been
    announced". Article 005 names `17 February 2031`. At 004's own date
    the day was not yet announced; at 005's own date it is. The 004 release
    record §"Conditions" row 3 set step 005's record date as **"a lower
    bound"** on the date this role now assigns — `2031-02-17` is later than
    `2030-03-11` and the bound holds.
- **Lower bound carried forward.** Step 005's record date is **later than
  2030-03-11** (004's). The bound holds.

## 3. Canon consistency — material claims

Every material claim in the body and frontmatter, with the released source it traces to.

|| # | Claim (article, by paragraph) | Source | Verdict | || -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| 1 | "Red Horizon is a fictional, AI-assisted Mars exploration programme" | 001:23 (the disclosure pattern); canon proposal identity | PASS — first-sentence disclosure as 001/002/003/004 do |
|| 2 | "now left Earth … On 17 February 2031, Red Horizon One launched aboard Ariane 64 from Europe's Spaceport" | SCENARIO.md:22, `:124`, `:193` | **F1** — launch-facility string "Europe's Spaceport" expanded the article's allowed-angle scope (the launcher dossier's publication state is unrecorded and 004 measured 0 hits on this family; §5) |
|| 3 | "Early spacecraft checkout met nominal criteria, and the mission has entered cruise toward Mars" | SCENARIO.md:147 (the launch event), brief "Allowed facts" (no telemetry/anomaly) | PASS |
|| 4 | "The launch vehicle is Ariane 64, the four-booster variant of the Ariane 6 family" | 004:23 (released), SCENARIO.md:22, `:124` | PASS — designation + configuration already cleared by step 004 |
|| 5 | "Ariane 64 is a real vehicle … no real agency, launcher operator, or launch facility is a partner in this programme" | 004:25–:27, SCENARIO.md:281, accurate/non-endorsing rules 1–2 | PASS — re-states the fail-closed non-endorsement language; **no** institution, operator or facility is named here (the disclosure explicitly lists them but does not pick one) |
|| 6 | "What happened on launch day is that the vehicle deployed the flight stack into an interplanetary trajectory, and the programme's ground teams completed the early spacecraft checkout they had planned" | SCENARIO.md:124 (injection-and-payload-adapter segment; "places the flight stack on its Mars trajectory"), 005 timeline §Allowed public angle "what happened" | PASS — high-level event framing only; no time, no trajectory details, no checkout specifics |
|| 7 | "The mission is now in cruise: the flight stack is travelling toward Mars under its own power, with the cruise stage handling navigation, thermal control, and communications with Earth" | SCENARIO.md:125 (the cruise stage) | PASS — same cruise-stage description as 004 |
|| 8 | "That transition from ground control to deep-space operations is the moment the mission's own team takes full responsibility for the vehicle's journey, and it brings a different kind of risk" | 005 timeline §Constraints ("Do not write a flawless spectacle: acknowledge the transition from ground control to deep-space operations and the remaining risk") | PASS — exact editorial constraint the step calls out, paraphrased |
|| 9 | "the first planned trajectory-correction opportunity, expected on 3 March 2031" | SCENARIO.md:194 ("3 March 2031 | First planned trajectory-correction opportunity"); 005 timeline §Allowed angle "the next immediate check" | PASS — locked milestone row, named as expected/upcoming |
|| 10 | "the navigation and communications systems are performing as designed during the long cruise phase" | SCENARIO.md:125 + 005 timeline §Allowed angle "the immediate check" | PASS — capability framing, no telemetry/health numbers |
|| 11 | "a cruise checkout around 20 May 2031, covering the health of all flight elements" | SCENARIO.md:195 ("20 May 2031 | Cruise checkout and second correction opportunity"); 005 timeline §Allowed angle "when the next status is expected" | PASS — locked milestone row, named as the next status expectation |
|| 12 | "on track for its 16 September 2031 arrival at Asteria Field" | SCENARIO.md:197 ("16 September 2031 | Atmospheric entry and landing at Asteria Field") | **F2** — names the step-007 milestone row `:197` (atmospheric entry and landing at Asteria Field) on a step-005 article; the allowed-angle scope at this step is the three items the timeline calls out, and `:197` is not one of them (§5) |
|| 13 | "the programme's own reporting has always treated uncertainty as part of the record rather than a gap to hide" | 001:65 (the equal-governance pattern) + 005 timeline §Constraints | PASS — governance / reporting principle already cleared |
|| 14 | Closing note: "no real agency, launcher operator, or launch facility is a partner in Red Horizon, and none of them has endorsed or approved it" | Same as row 5 | PASS |

**Derived claims, judged, not waved through:**

- **D1 — "On 17 February 2031 … launched aboard Ariane 64 from Europe's Spaceport"**
  (rows 2): SCENARIO.md puts the launch at 17 February 2031 and the launcher at
  Ariane 64, both released by `:193` and `:124`. The launch **facility** name
  is not in any released source for an article surface; this role is unable
  to release one without the dossier's own publication state being
  recorded. **F1**.
- **D2 — "the mission has entered cruise"** (row 3): a transition that
  follows the launch in locked canon (`:147` flight-system architecture +
  `:178`–`:197` interplanetary dates) but is **not itself a milestone row**.
  The phrase names the post-separation state the four-element architecture
  already commits to. PASS as a transition rather than an event with a row.
- **D3 — "the next immediate check is the first planned trajectory-correction
  opportunity, expected on 3 March 2031"** (row 9): step-006 milestone, named
  in the locked milestone table at `:194`. Permitted by the brief's angle as
  "the next immediate check". PASS.
- **D4 — "16 September 2031 arrival at Asteria Field"** (row 12): step-007
  milestone, named in the locked milestone table at `:197`. The brief's angle
  names **three** permitted items — what happened, the next immediate check,
  when the next status is expected — and `:197` is none of those.
  **F2**.

## 4. The launch-facility string (F1)

The article carries **one** launch-facility family string on L14:

> "from Europe's Spaceport"

### 4.1 Why this is a finding

- The launch-facility family — the real-life names of the Centre Spatial
  Guyanais and its launch complex, in any language and any name form — is
  in the canonical `withheld` set. `docs/SCENARIO.md:281`: "Real
  institutions, including FEI STU and Arianespace, require explicit review
  before any public mention. Their appearance in this scenario does not
  imply real participation." The launch facility sits one tier below
  provider/operator in the family, and the released step-004 article
  measured **0 hits for the launch-facility family** in
  `.agents/work/releases/004-launch-provider.md` §"Withheld-marker scan".
- The 004 release record conditions the dossier's own publication as
  unresolved (Observation O-2 / Condition 7 / C6): the dossier
  `docs/vehicles/ariane/ariane-64.md` carries one launch-facility-family
  string and **its own publication state is unrecorded**; no gate answer
  approves the family on a public surface. Article 005 newly publishes it.
- The brief's "Allowed facts" line (`.agents/work/briefs/005-launch.md:5`)
  is unambiguous: "the 17 February 2031 launch day from locked scenario
  canon; the already-released Ariane 64 architecture only as needed for
  context; the step-005 public angle; an illustrative launch visual if its
  provenance and wording clear review." "Europe's Spaceport" is none of
  those.
- Article 004 said **"launched … from Europe's Spaceport"** is **not** what
  the released 004 article says — article 004 says "the launch vehicle is
  Ariane 64" without naming the launch facility. Article 005 carries a
  name article 004 deliberately did not. That is the regression.

### 4.2 The fix

Wording-only, in the article body. Replace the facility name with a
geographical phrasing (so the reader still understands the launch was from
the Guiana launch zone) or remove the clause entirely. Two acceptable
forms the writer can pick:

|| Option | Replacement | Why it works | || ------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
|| A | "On 17 February 2031, Red Horizon One launched aboard Ariane 64 from the European launch site in French Guiana." | Names geography, not the facility; same disambiguation function without naming the operator/launch-complex entity. |
|| B | "On 17 February 2031, Red Horizon One launched aboard Ariane 64 from Kourou, French Guiana." | "Kourou" is the city; the family scanner flagged it, but naming a city is **not** naming the launch complex (the dossier's binding list is launch-facility-family, not city). The 004 release record measured 0 hits on the launch-facility family on the released article, but it never measured whether "Kourou" alone has been used. **Both options stay in the writer's hands**, but option B is also acceptable. |

Either option resolves F1 with no canon change, no `docs/` write, and no
build-surface impact. The corrected bytes then pass the same scan that
returned `Europe's Spaceport` = 1, with the launch-facility family at 0.

### 4.3 The non-fix

Naming "Ariane 6's launch zone", "the launch zone", or equivalent — is
acceptable but quieter. Removing the clause is also fine; the launch is
already pinpointed by `17 February 2031` and `aboard Ariane 64` and the
sentence does not lose meaning without the facility noun.

## 5. The later-step arrival date (F2)

The article carries **one** later-step fact on L40:

> "the mission remains on track for its 16 September 2031 arrival at Asteria Field"

### 5.1 Why this is a finding

- `docs/SCENARIO.md:197`: "16 September 2031 | Atmospheric entry and
  landing at Asteria Field". That row is step-007's event. The 005 timeline
  step (its file is `docs/timeline/005-launch.md`) does not own the row.
- The brief's "Forbidden/spoiler facts" line
  (`.agents/work/briefs/005-launch.md:7`): "later timeline events,
  private-calendar details beyond the approved launch day … landing
  success, surface targets". An arrival is the inverse of "landing
  success": a date at which the landing will be attempted. Naming the date
  pre-announces the landing-day window one step ahead of its own release.
- The brief's "Allowed facts" line is also unambiguous: the permitted
  public angle is **three** items, "what happened, the next immediate
  check, and when the next status is expected" — the wording
  `docs/timeline/005-launch.md` uses verbatim. `17 February 2031` is
  "what happened". `3 March 2031` is "the next immediate check".
  `20 May 2031` is "when the next status is expected". An arrival date
  is none of the three.
- The published article 001 (`:67`–`:68`) and article 004 (`:47`) both
  state the **schedule frame only** — "a launch window in 2031", "2031
  launch window", "no day within it has been announced" — and never
  name arrival. Article 005 names the arrival day one step before the
  step that releases it.

### 5.2 The fix

Wording-only, in the article body. Two acceptable forms:

|| Option | Replacement | Why it works | || ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| A | "The next status the programme expects to report is a cruise checkout around 20 May 2031, covering the health of all flight elements. The mission is still in cruise, and arrival at Asteria Field lies ahead." | Splits the sentence so the article no longer names an arrival day; preserves the cruise-checkout-as-next-status framing the brief authorises. |
|| B | "The next status the programme expects to report is a cruise checkout around 20 May 2031, covering the health of all flight elements and confirming that the mission remains on track for the surface phase." | Same idea, slightly more compact; uses "the surface phase" rather than naming Asteria Field (which is already released at 001). |

Either option resolves F2 with no canon change, no `docs/` write, no
build-surface impact. **Option B retains the Asteria Field mention on L40
without the date**, which is consistent with article 001's prior release
of that name; the day's name disappears.

### 5.3 The non-fix

Dropping the sentence entirely is acceptable; the "next status" sentence
already covers the reader-facing need. **Both options stay in the
writer's hands**; option B preserves a touch of the article's tone.

## 6. Withheld-marker scan — full inventory (Revision 1)

Scanned against the article and the frontmatter, by family. (Numbers in
parentheses are the pre-F1/F2 counts the scanner recorded; the F1/F2 lines
are the only material content items.) The Revision 2 re-scan is in the
companion review's §13 (family-scan table).

|| Family | Hits | Notes | || ----------------------------------------------------------------------------------------------------------------- | ---------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|| Real institution / operating-company (Arianespace, CNES, ESA, FEI STU) | 0 | The disclosure's reference is the word "organisations", which the scanner does not pick up |
|| **Launch-facility family (Europe's Spaceport, ELA-4, ELA4, Kourou, Guiana)** | **1** | **F1** — L14 `Europe's Spaceport` (above); the 004 release record scanned 0 hits on the same family on the released article |
|| Withheld launch-day forms (`13 January 2031`, `11 February 2031`, `22 November 2030`, `30 August 2030`) | 0 | None of those rows appears in the article |
|| Named milestone dates | — | The four named milestone dates (`17 February 2031`, `3 March 2031`, `20 May 2031`, `16 September 2031`) are reported individually; F2 covers the `:197` row; the `:193`, `:194`, `:195` rows are within the allowed angle |
|| Landing-region coordinate markers (`18° 42`, `226° 14`) | 0 | The scanner pattern is identical to 004's |
|| Private-timeline paths or withheld filenames | 0 | No `docs/timeline/` reference; no AF-*, no `contact-arm-scene`, no `travelling-to-mars` |
|| Asteria Field / landing-design (Asteria Field, ellipse, P0, science zone, hazard, traverse) | 1 | The single mention is `Asteria Field` on L40 — already released at 001, not a landing-design fact; the finding is the _date_ (F2), not the name |
|| Performance / cost / mass / schedule figures (`4,250 kg`, `€2.10 billion`, `€180 million`) | 0 | No figure anywhere in body or frontmatter |

## 7. Plausibility

- **Article body.** 432 words, heading-free, eight paragraphs (paragraphs
  1–5 carrying the launch report; paragraph 6 carrying the "transition
  brings risk" acknowledgement the brief asks for; paragraph 7 carrying the
  next-check and next-status framing; paragraph 8 closing with the "uncertainty
  is part of the record" line; the closing italic disclosure). Voice is
  consistent with 001/002/003/004: short declaratives, defined terms ("cruise
  stage", "flight stack", "deep-space operations"), no acronym display
  (EDL/EDL-concept untouched here; "trajectory-correction opportunity"
  spelled out).
- **Frontmatter renders.** Title 30 chars, summary 138 chars, linkLabel
  13 chars — all well within site budgets; `category`, `status`, `order`,
  `accent` all carry the established convention; `publication: draft`
  stays until the release decision is applied by the build card.
- **Internal-link inventory.** Two anchors: `/#mission` (the
  fiction-disclosure link to the homepage mission brief), and
  `/news/004-launch-provider/` (the prior released article on the launch
  architecture decision). Both targets are released routes (200 on the live
  origin). No external link, so no real institution's URL carries a name
  onto a public surface.
- **No `media*` field.** The article carries no `media`, `mediaAlt`,
  `mediaLabel` or `mediaCaption`; `newsMediaIssues()` has nothing to
  require. The asset manifest reuses the existing
  `docs/vehicles/ariane/lunch.png` plate and proposes the
  `launch-lift-off` media key; the dev card `t_d562771d` is the owner of
  the key registration and the guard flip, gated on this gate's release
  decision.
- **Step-005 source format is consistent with the brief's instruction**
  for `no out-of-date-order leakage`: every dated token the article prints
  is either the step's own event (`:193`), the next immediate check
  (`:194`), the next status expectation (`:195`), or a step-007 detail the
  brief excludes (`:197` — F2). No number, no launch-time, no telemetry,
  no cruise anomaly, no rover-deployment number, no surface target.

## 8. Spoiler safety

Of the four families the step-004 release record flagged (institution /
operator / facility, launch-day forms, private calendar, withheld file
names), article 005 scores **0 hits** on three. The one launch-facility
hit is F1; the one later-step date is F2. Both are wording-only fixes; the
rest of the body and the frontmatter are spoiler-clean.

The two-step-005 dates that **are** permitted by the brief's angle
(`17 February 2031` the launch, `3 March 2031` the correction, `20 May
2031` the cruise checkout) are milestone rows `:193`/`:194`/`:195` —
all **public rows** the step owns. The fourth date in the article
(`16 September 2031`) sits on `:197`, which is **step-007**; that is
exactly what F2 resolves.

Step-006 to step-011 detail (rover deployment, surface results, science
findings, end-of-life anomaly, the release record `O-3` of 004 concerning
the dossier's publication) is fully withheld — confirmed by the four
families measuring 0 above and by no token matching the step-007+
milestone names (`:198`–`:207`, rover egress onwards; nowhere in
article 005).

## 9. Continuity verdict (Revision 1)

`return for revision`. The article is canonically sound, chronologically
safe, plausibly framed, and spoiler-clean **except** for F1 (a launch-
facility string the released step-004 article deliberately withheld) and
F2 (a step-007 milestone date the step-005 allowed angle does not
include). Both are wording-only fixes in the article body, in another
role's artifact (writer). The companion review record carries the routing,
the voiding condition, and the simulated-date assignment this role
delivers at the gate.

When the corrective completes and the corrected bytes pass this gate's
re-verification, the release decision is recorded in the companion
review's §"Release decision".

## 10. Continuity verdict (Revision 2)

`continuity clear`. The writer corrective `t_f1ddd064` produced the
corrected bytes
`f165f3abd6e0ee42b1cb881377291f85831198b99cb3a5263fe0dd5bb09d8abe`
(2,900 B, 49 lines, `publication: draft`). This gate re-verified the
corrected bytes on every R1 check that the two findings sat on, and
nothing else moved.

- **Chronology.** Unchanged from R1 §2. Articles 001 (record date
  `2026-10-12`), 002 (`2027-03-19`), 003 (`2029-07-13`), 004
  (`2030-03-11`) all stay true at their own dates; the 005 article's
  launch day (`17 February 2031`) is later than 004's bound and is
  step 005's own event; the next immediate check (`3 March 2031`) and
  the next status expectation (`20 May 2031`) sit on locked rows
  `:194`/`:195`. No later-step date leaks; the F2 fix removes
  `16 September 2031` from the body.
- **Canon consistency.** Re-verified on the corrected bytes: every
  material claim in §3 of R1 traces to a released source. F1 row 2
  is now compliant (no facility named); F2 row 12 is now compliant
  (no later-step date named; the `Asteria Field` name is the
  001-released landing-target name and is permitted).
- **Real-institution / launch-facility family.** 0 hits on
  `Arianespace`, `CNES`, `ESA`, `FEI STU`; 0 hits on the
  launch-facility family (`Europe's Spaceport`, `Guiana`,
  `Centre Spatial Guyanais`, `Kourou`, `ELA-4`). Rule 2 of the
  six-rule review holds; rule 6 is moot (no real-named sentence).
- **Plausibility.** Unchanged. 425-word heading-free body, eight
  paragraphs, single narrative arc, two internal anchors
  (`/#mission`, `/news/004-launch-provider/`) both released routes
  on the live origin.
- **Spoiler safety.** Unchanged. 0 hits on withheld launch-day
  forms; 0 hits on `docs/timeline/` paths; 0 hits on
  landing-region coordinate markers; 0 hits on
  performance / mass / cost / schedule figures; 0 hits on
  withheld filenames (`contact-arm-scene`, `travelling-to-mars`).
  The corrected body reports only the three milestone rows the
  step-005 brief's "Allowed public angle" enumerates.

The continuity verdict in §9 of R1 becomes a historical block; this
section is the operative verdict for the gate. The companion review
record's §"Release decision" carries the recorded release decision;
no separate human approval is required.

---

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md` and
the dossiers under `docs/vehicles/`. The continuity verdict above is this role's
chronological / canonical / spoiler half of the editorial gate's verdict; the
editorial half is in `.agents/work/reviews/005-launch.md`._
