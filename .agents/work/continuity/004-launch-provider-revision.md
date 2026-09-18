# Continuity verdict — revision, 004-launch-provider

Card `t_3ad3378a` (`mars-ai-simulator-reviewer`) · companion to
`.agents/work/reviews/004-launch-provider-revision.md` · written
2026-09-18 22:5x CEST.

Verdict: **`continuity clear`** for the post-delta MDX
(`2875165efc5dab1603e2d0d3fd966d3f5f595b755e7cd7087820125dd9c62a70`,
4,468 B) and the on-main plumbing that renders it. The release decision
is recorded in the review's §7; this file is the chronology / canon /
plausibility / spoiler verdict the merged role owes as a separate
artefact at the operator's request.

---

## A. Chronology

- **Plate:** no date in pixels; studio-only render with no mission
  landmark. The plate does not advance the release order.
- **Article body:** unchanged from the published revision (the
  Form A `coalition` → `programme` amendment's only edit on this
  article was the line-14 substitution, already cleared and
  pushed). The body continues to state "no launch day or time has been
  announced" and "no day within it has been announced" — both in
  present tense and held against the article's own record date, so
  falsifiable only when the step that names a date is published. This
  is the same continuity verdict the prior gate reached; no change to
  negative-claim framing.
- **Frontmatter delta:** +3 frontmatter lines, +1 trailing newline;
  the body unchanged assertion holds, the body's surrounding
  frontmatter stays on its ordering (`title`, `category`, `status`,
  `publication`, `simulatedDate`, `summary`, `linkLabel`, `order`,
  inserted `media`, `mediaAlt`, `mediaLabel`, `accent`).
- **Record date:** `simulatedDate: 2030-03-11` unchanged; milestone
  `docs/SCENARIO.md:188` ("11 March 2030 | RH-01 flight-model assembly
  begins") is the only row in the window whose state matches what the
  article claims, and an added plate is not a dated event — no new
  record date is set by this revision.
- **Lower bound on step 005's value:** still **`2030-03-11`**. Step
  005's record date must be later than this article's, or the present-
  tense negative is false in-fiction.
- **Timeline ordering:** preserved. Articles 001–003 carry
  `2026-10-12`, `2027-03-19`, `2029-07-13`; this article's
  `2030-03-11` is later; article 005–011 are unreleased and carry no
  published dates.

## B. Canon consistency

Verified against the dossier's binding list
(`docs/vehicles/ariane/ariane-64.md:121-136`) line by line against the
post-delta bytes:

| "Never" claim (dossier binding list)                                                                                                                              | Status in the post-delta bytes                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Crew-rated.** No crew hardware, no life-support.                                                                                                                | Holds — the article body says "**uncrewed** heavy-lift launcher", and the alt text says "a white **uncrewed** heavy-lift launcher". Both are negation-leaning descriptions.                                                                                               |
| **Reusable.** No recovery legs, no catch mechanism, no retrieval.                                                                                                 | Holds — no reusable / reusable / leg / catch / recovery / refurbish in the post-delta bytes (containment scan reports **0 hits** on this family).                                                                                                                         |
| **In transit.** It is a launcher, not a spacecraft.                                                                                                               | Holds — the plate depicts a studio render on a plain floor, no Earth limb, no Mars upper-right, no engine firing on the canvas. The "In transit" plate (`travelling-to-mars.png`, sha256 `6f133b76…`) is withheld at the source by card A's verdict.                      |
| **Flight-ready.** Step 004 is a design decision, not a launch-readiness statement.                                                                                | Holds — article body: "**The programme has published a decision, not a countdown**" (line 53), "**no part of the flight stack has been integrated with a launcher** or delivered to a launch site" (line 17–18).                                                          |
| **On the pad.** No on-pad image, no launch-tower image, no service-gantry image, no mobile-gantry image, no launch-site image specific to a real launch facility. | Holds — the plate carries no pad, no tower, no gantry, no mobile gantry, no smoke/plume/flame (card A's §6 measured scene = "studio only"). The withheld plate `lunch.png` (sha256 `c4744fff…`) is the pad lift-off; card C did not place it and card E does not move it. |
| **Integrated at the campaign site.** Real launch facility, real launch complex, real integration team not named.                                                  | Holds — the post-delta bytes contain **zero** occurrences of `FEI`, `CNES`, `Arianespace`, `ESA`, `Kourou`, `ELA-4`, `ELA4`, `Europe's Spaceport`, `Guiana` (containment scan, **0 hits**).                                                                               |
| **Endorsed / funded / partnered with / approved by any real institution.**                                                                                        | Holds — the alt text ends "**no real agency is named or implied**"; the article's closing note repeats the fail-closed framing. Gate 004-B's "not required" form still binds — no sentence names one.                                                                     |
| **Carrying a contracted payload mass to Mars.**                                                                                                                   | Holds — the mass figure (4,250 kg) is **not** in the post-delta bytes. The target-mass claim is a programme-controlled ceiling, not a launcher performance figure, and this article does not assert it.                                                                   |

The reading order binds: every dossier "never" item is held in the
article prose, the alt text, the label, and the rendered plate, with
zero positive-form leakage of any withheld family.

A canon-consistency check against the released step scope, the
scenario's standing rule, and the dossier's own canon:

- **`docs/SCENARIO.md:124`** — the programme interface is the "Ariane
  64 injection and payload-adapter segment". The post-delta body uses
  the same phrasing ("an injection and payload-adapter segment",
  paragraph 3) — verbatim, no drift.
- **`docs/SCENARIO.md:230, 255-258`** — the €180 M launch-service
  planning allowance and the program-controlled-mass caveat are
  **not** in the post-delta bytes; the article body deliberately
  withholds the figures (recording them is the dossier's job, and the
  step-004 release record's `C2` and the prior gate's containments
  evaluated it as held).
- **`docs/SCENARIO.md:281`** — the standing rule on real institutions
  (the literals `FEI STU` and `Arianespace` are named in the rule
  itself; `FEI STU` is the issuer of the `trainedAlgorithmicMedia`
  signer's CA chain that the C2PA manifest references; `Arianespace` is
  the operating company of the real launcher the dossier describes).
  Those literals are **not** in the post-delta bytes; the binding
  framing carries the article's own hedging language ("**no real
  agency, launcher operator, or launch facility is a partner** …
  **has endorsed it**") instead.
- **`docs/SCENARIO.md:280`** — generated visuals are labelled as
  fictional or illustrative. Holds — the alt text opens "**Illustrative
  artwork, not a photograph**", and the article body never refers to
  the plate by any other framing.
- **`docs/vehicles/ariane/ariane-64.md:84`** — "an engineering
  reference appearance". Holds — `mediaLabel: "Ariane 64 · engineering
  reference"`, the dossier's own term.

## C. Plausibility

- **Plate.** A studio render of a single-stick uncrewed heavy-lift
  launcher with one core, four strap-on boosters, two per side, and
  five engine bells, on a plain seamless floor with a faint grounded
  shadow. Every booster count and bell count measured against
  canonical crops with two independent pixel instruments plus a
  zoomed vision read (card A's §5). No text in the pixels. No scene.
  No contact arm, no tower, no gantry, no people. The image is
  presented as illustrative artwork, not as engineering drawing or
  photograph, and the alt text carries the same framing.
- **Article body.** The architecture decision is described in
  programme terms ("an injection and payload-adapter segment"; "a
  solar-powered cruise stage for navigation, thermal control, and
  communications with Earth"; "uses terrain-relative navigation to
  compare the ground below with the terrain its guidance expects, and
  finishes the descent on a throttleable engine stage"). The relay
  architecture (platform ↔ rover short-range link; steerable X-band
  downlink; rover low-rate direct-to-Earth) is internally consistent
  with article 002's prior release of the lander platform's relay
  role and article 003's prior release of the rover's instrument
  suite. **No contradiction found** between this article and the
  already-public 001–003 prose.
- **Frontmatter rendering.** Three inserted lines, schema-valid, no
  schema key widens to new territory, no `mediaCaption` (the key
  renders no per-plate caption, and the schema rejects a caption).

## D. Spoiler safety

Four family scans, all reported as **0 hits** in §4 of the editorial
review:

1. real-institution / provider / operator / facility literals →
   **0**;
2. step `005-launch` launch-day forms →
   **0**;
3. step `005-launch` private-calendar / transfer-time forms →
   **0**;
4. private-timeline paths or withheld-file names (`docs/timeline/`,
   `/timeline/`, `AF-`, `Asteria Field`) →
   **0**.

The withheld plates (`lunch.png`, `side-view.png`, `rear-right.png`,
`travelling-to-mars.png`) sit untracked under
`docs/vehicles/ariane/` and are **not** referenced by any path in the
post-delta bytes. The dossier's "Real provider's public record"
section, which carries the operating-company, agency and facility
families, is untracked and unrendered.

A separate scan of the post-delta bytes for `Asteria Field`,
`landing site`, `ellipse`, `P0`, `touchdown`, `science zone`,
`hazard`, `traverse` (gate markers from `guards.mjs` and the
`gatedDirectoryNames = ['timeline']` directory rule) reports
**0 hits** — the `gatedDirectoryNames` rule stays untouched and the
`gatedTextMarkers` list stays untouched, so the build's guard
configuration is unchanged.

---

## E. Continuity verdict

`continuity clear`. The post-delta MDX is releasable on the conditions
recorded in the editorial review §7 (P1–P4). No material continuity
failure remains unresolved. The record date stays on its locked
milestone, the body is unchanged, the withholding (and its scope) is
preserved, and the public scope extends by exactly one named plate on
exactly the surfaces the prior decision cleared.

---

_This record is working material, not canon. Canon lives in
`docs/SCENARIO.md` and the dossier under `docs/vehicles/ariane/`. The
verdict above is the chronological / canonical / spoiler half of the
editorial gate's verdict; the editorial half is in
`.agents/work/reviews/004-launch-provider-revision.md`._
