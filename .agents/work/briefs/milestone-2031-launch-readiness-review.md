# Public-safe brief: milestone-2031-launch-readiness-review

## Package metadata

- Slug: `milestone-2031-launch-readiness-review`
- Proposed public angle: a short mission-status capsule explaining that Red Horizon One reaches its launch-readiness review milestone, while leaving the review outcome and launch status unresolved.
- Linked release-order step: `005-launch` (the capsule is proposed as a bounded pre-launch update in the launch sequence; the reviewer must confirm this mapping before any graph is created).
- Locked milestone source: `docs/SCENARIO.md:192` — `11 February 2031 | Launch Readiness Review`.
- Proposed reviewer-assigned frontmatter line: `simulatedDate: 2031-02-11`
- Public wording boundary: describe the event as a review of readiness for the planned mission. Do not claim a pass, approval, launch authorization, or imminent launch unless a separately released source establishes it.

## Release goal

Give readers one compact, concrete update about how a complex uncrewed Mars mission is checked before flight. Explain that the Launch Readiness Review is a programme milestone at which the team examines whether the mission is ready for the next phase, without reporting an outcome that the locked milestone row does not provide.

This is a planning brief only. It does not establish public canon, choose a public release date, approve wording, assign a review outcome, or authorise publication.

## Target audience

General readers following the fictional Red Horizon programme. Assume no specialist launch-operations knowledge; define readiness review in plain language and keep the capsule to one central update plus only the previously released architecture context needed for comprehension.

## Allowed facts

The writer may use only these facts, with each material sentence traced in the source pack:

- Red Horizon is a fictional, AI-assisted Mars exploration programme.
- Red Horizon One is an uncrewed Mars mission with the previously released delivery architecture: Ariane 64 interface, cruise stage, entry/descent/landing platform, and RH-01 Pathfinder. Use only enough detail to explain the context of the review.
- Article 004 publicly established that integration, testing, and readiness reviews are work between the selected architecture and flight; link to `/news/004-launch-provider/` only if needed for reader comprehension.
- The locked milestone is `11 February 2031 | Launch Readiness Review` in `docs/SCENARIO.md:192`. The article may describe that review as the capsule's event, subject to reviewer confirmation of its release-order mapping.
- A readiness review is process context: a structured check of mission systems, operations, and open risks before flight. Keep this generic unless a source pack claim supports a more specific description.
- The milestone row does not state the review outcome. The draft must therefore leave the outcome unresolved rather than inventing pass/fail, authorization, or schedule consequences.
- The site must identify Red Horizon as fictional and AI-assisted. Real launcher history or technical context must not imply real participation, endorsement, or approval.

## Forbidden / spoiler facts

The draft, SEO package, filenames, links, captions, alt text, and summaries must not include:

- Any private timeline path, copied private timeline wording, or reference to the hidden scenario backbone.
- A review pass/fail result, launch authorization, certification, safety concurrence, waiver, readiness score, named anomaly, corrective action, unresolved risk, or claim that the mission is ready to launch.
- The exact launch day or date (17 February 2031) and any wording implying how soon launch follows the review. The launch date is a locked later milestone row reserved for the separate future `005-launch` factual update; this capsule must not scoop it.
- Exact review time, countdown, fuelling, pad activity, weather, telemetry, launch window execution, launch success, Earth departure, cruise operations, trajectory corrections, landing, surface operations, science results, or any later milestone.
- Asteria Field, landing coordinates, landing ellipse, Mars-surface imagery, traverse plans, hazards, or surface targets.
- Real facility, operator, provider, agency, company, or institution names, or any partnership or endorsement implication. Use the already safe public architecture wording and avoid adding a launch-site scene.
- Unapproved mass, performance, cost, schedule, staffing, test, readiness, or risk numbers.
- Any wording that turns illustrative artwork into a photograph or documentary record.
- Any new canon, public timing decision, release decision, or publication statement.

## Assets and image decision

`no new imagery: text-only capsule`. The review milestone is procedural and a generated scene would add no comprehension value while inviting invented control-room, pad, telemetry, or launch-status details. If the article graph includes the mandatory IMAGES stage, its single card must say exactly `no new imagery: text-only capsule` and write `.agents/work/assets/milestone-2031-launch-readiness-review/assets.md` documenting the decision, placement (`none`), and absence of new candidates. Do not reuse the Ariane 64 studio reference as a review image or relabel it as documentary evidence.

## Draft contract

- Target: `website/news/milestone-2031-launch-readiness-review.mdx`.
- Keep `publication: draft` until the reviewer records approval and a release decision.
- Writer owns the integrated SEO pass: search intent, metadata, headings, internal links, and any alt-text recommendation. No separate SEO card.
- Writer leaves `simulatedDate` unset. The reviewer assigns and verifies exactly `simulatedDate: 2031-02-11` from `docs/SCENARIO.md:192` and records that source line.
- Keep the capsule short: one central readiness-review update plus only the architecture context needed to understand it.
- Use date-scoped language so the article does not imply an evergreen current status after its fictional record date.

## Acceptance criteria for downstream work

- Every material claim has a canonical source record in `.agents/work/sources/milestone-2031-launch-readiness-review.md` or is explicitly unresolved.
- The article distinguishes the fictional programme from real launcher history and does not imply endorsement, participation, or approval.
- The article reports the review milestone without inventing its outcome or equating the review with launch authorization.
- No private timeline text or later-step fact appears in prose, metadata, links, filenames, captions, alt text, or summaries.
- The visual decision is explicit: text-only/no new imagery, with a manifest if the graph creates the IMAGES card.
- Reviewer checks chronology, canon, confidentiality, and the exact simulated-date line; developer validation waits for that recorded release decision.
- No public file, canon change, release decision, commit, or push is part of this planning task.

## Next serial graph recommendation

After this brief and source pack are reviewed, create one serial graph for this capsule: research/source validation -> writer draft with integrated SEO -> one text-only/no-new-imagery manifest card if required by the graph contract -> reviewer continuity/editorial gate and release decision -> developer build/publish validation. The reviewer must first confirm the proposed `005-launch` mapping, public scope, and `simulatedDate` source. Keep any later factual launch update downstream; this capsule must not pre-announce a launch or its result.

## Handoff

- Next owner: `mars-ai-simulator-planner`, after review, to create the bounded serial graph.
- Reviewers by downstream stage: planner validates the source pack; writer owns prose and SEO; visuals records the text-only decision; `mars-ai-simulator-reviewer` owns continuity, canon confirmation, simulated-date assignment, and release decision; `mars-ai-simulator-dev` performs post-approval build/deployment validation.
- Review still outstanding: the reviewer-in-chief must confirm the `005-launch` mapping, the no-outcome wording, the text-only decision, and `simulatedDate: 2031-02-11`. No approval is implied here.
