# Public-safe brief: milestone-2027-system-requirements

## Release goal

Prepare a short, text-first Red Horizon news capsule about the 24 September 2027
System Requirements Review and the confirmation of Asteria Field as the mission
target. The article should explain what a requirements review means in plain
language and record the target confirmation only at the public level already
released in the project announcement. It must not turn the milestone row into a
report of unprovided review minutes, test results, or landing-design detail.

This is a planning brief, not public canon, a release decision, or a publication
instruction. The reviewer-in-chief owns the final canon and release decision.

## Timeline and simulated date

- Linked mission-timeline step: the milestone `2027-09-24 — System Requirements
  Review and Asteria Field target confirmation` in `docs/SCENARIO.md`'s locked
  milestone table (line 184); this capsule belongs to the pre-launch milestone
  sequence after the already released project, payload, vehicle, and launch-
  architecture articles.
- Exact line for the reviewer to assign and verify:
  `simulatedDate: 2027-09-24`
- The reviewer must cite the milestone-table line in the review record. The
  writer leaves `simulatedDate` unset in the draft; the date is not new canon.

## Proposed public shape

- Proposed title: `Red Horizon checks the requirements before the next design step.`
- Proposed slug: `milestone-2027-system-requirements`
- Format: one short news update, approximately 350–550 words, with a brief
  definition of a System Requirements Review (a structured check that the
  mission's needs and constraints are clear enough to guide later design work).
- Audience: general readers following a fictional Mars programme; assume no
  systems-engineering background.
- Tone: concrete, restrained, accessible, and explicit that Red Horizon and
  Asteria Field are fictional. Do not imply a real agency, supplier, university,
  or government endorsement.

## Allowed facts

The writer may use only these claims, with the source pack's citations:

1. Red Horizon is a fictional, AI-assisted, uncrewed international Mars
   programme with a shared science purpose and ten national programme teams, as
   already released in article 001.
2. The programme's public science frame is mineralogy and reconstruction of
   ancient habitable conditions in the Margaritifer Terra region; it does not
   search for living organisms or claim evidence of life (article 001).
3. Asteria Field is a fictional Red Horizon operational region in Margaritifer
   Terra. Its public planning centre and envelope may be restated only with the
   same qualification and scope already used in article 001: 17.80°S, 332.20°E
   (27.80°W), and 12.5–24.0°S / 327.0–338.0°E. These are scenario planning
   coordinates, not a real feature.
4. The 24 September 2027 milestone is the System Requirements Review and
   Asteria Field target confirmation. The article may say the requirements review
   marks a formal checkpoint and that the target confirmation narrows the
   mission's planning focus. It may not claim any unprovided vote, pass/fail
   result, certification, or engineering closure.
5. Previously released payload scope may be mentioned only if useful for explaining
   what requirements must remain coherent: panoramic/navigation imaging, weather
   measurement, mineral and rock sensing, and a contact tool. Individual final
   instrument names remain outside this capsule unless the source pack identifies
   them as already public (it does not).
6. Previously released RH-01 Pathfinder design may be linked as context, but this
   capsule should not repeat detailed vehicle specifications unless needed for
   comprehension. The milestone is about requirements, not a new vehicle reveal.
7. The public schedule frame remains a 2031 launch window; do not state an exact
   launch or landing date in this capsule.
8. Real Mars context may be used narrowly: Margaritifer Terra is real and has
   regional evidence of ancient water-related geology. Asteria Field is not a
   real official place name, and local Red Horizon geometry is fictional.

## Forbidden, spoiler, and unresolved facts

Do not include or imply:

- Any private timeline wording, internal review minutes, attendees, vote counts,
  open decisions, or unannounced requirements.
- Any landing-design geometry or operations: ellipse dimensions or orientation,
  touchdown-zone details, science-zone plan, hazards, route logic,
  communications details, local geology labels, slope limits, stand-off
  distances, or map-derived operational conclusions.
- Any claim that the System Requirements Review passed, approved flight hardware,
  certified a design, closed all requirements, guaranteed the target, or changed
  the launch schedule. The milestone row supplies the event label only.
- Exact launch or landing dates, launch readiness, flight status, spacecraft
  integration, test results, performance numbers, mass, cost breakdown, or power
  maturity outcomes.
- New payload names, partner hardware assignments, real institutional names,
  launch-provider claims, or supplier/contract claims.
- Discovery, water currently present, confirmed minerals, habitability, life,
  sample return, surface operations, landing imagery, or future mission events.
- Any new image, map, caption, alt text, filename, metadata, or link that exposes
  withheld landing-design facts.

## Assets and imagery decision

No new imagery is needed. The article is text-first: the target-confirmation
milestone can be understood without a visual, and reusing the Asteria plates
would risk repeating landing-design depiction outside the narrowly approved
article-001 context. The article graph must contain one IMAGES card stating:
`no new imagery: text-only` and requiring a manifest at
`.agents/work/assets/milestone-2027-system-requirements/assets.md` documenting
that decision. No visual generation or asset reuse is authorized by this brief.

## Recommended internal links

The writer may link to the already released:

- `/news/001-project-announcement/` for the public programme and target framing;
- `/news/002-payload-selection/` for the payload scope, if referenced;
- `/news/003-vehicle-design/` for RH-01 context, if referenced;
- `/news/004-launch-provider/` only if the article needs the already public
  high-level delivery architecture. Do not use the link to introduce new
  launch, landing, or target detail.

## Acceptance criteria for downstream cards

- Every material article claim is present in the source pack or explicitly marked
  unresolved; no claim relies on private timeline text.
- The draft keeps publication as `draft` and leaves `simulatedDate` unset for the
  reviewer; the reviewer assigns exactly `2027-09-24` from `docs/SCENARIO.md:184`.
- The article identifies Red Horizon and Asteria Field as fictional where needed,
  contains no forbidden landing-design family, and does not imply a review outcome
  beyond the locked milestone label.
- The IMAGES manifest records `no new imagery: text-only` at the required path.
- Editorial review writes the continuity and review records, confirms the exact
  public scope, and records the release decision before any technical validation.
- Technical validation, if later assigned, is sequenced after editorial approval
  and does not publish a file without that recorded decision.

## Next serial graph recommendation

After this brief is reviewed, create one serial article graph in this order:

1. planner source-pack card → `.agents/work/sources/milestone-2027-system-requirements.md`;
2. writer draft card (writer owns the SEO pass) →
   `website/news/milestone-2027-system-requirements.mdx`;
3. one visuals card gated on the draft and SEO pass, with the text-only brief
   above → `.agents/work/assets/milestone-2027-system-requirements/assets.md`;
4. reviewer-in-chief editorial/continuity gate →
   `.agents/work/reviews/milestone-2027-system-requirements.md` and
   `.agents/work/continuity/milestone-2027-system-requirements.md`, including
   the release decision and simulated-date verification;
5. only after that gate, the dev validation/publication card.

The coordinator should keep the capsule in date order with the other missing
pre-launch milestones. Do not create a separate SEO card. Any canon or timing
choice beyond the locked milestone line escalates to the human story owner.

## Handoff

- Result: bounded public-safe article brief for the 2027-09-24 milestone.
- Source/timeline step: locked `docs/SCENARIO.md:184`, with released article
  context from articles 001–004; private timeline prose is not copied here.
- Canon impact: none; this brief proposes no new canon and grants no release.
- Files: this brief; source pack at
  `.agents/work/sources/milestone-2027-system-requirements.md`.
- Validation completed: checked the locked milestone table, timeline index,
  released news articles, Asteria Field release restrictions, and the existing
  pre-launch milestone gap plan.
- Review outstanding: reviewer-in-chief must verify the future draft and record
  the release decision; no publication is authorized by this planning task.
- Next owner/action: planner creates the serial graph after this brief is
  reviewed; writer then drafts with the source pack and owns SEO.
