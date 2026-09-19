# Research source pack: milestone-2030-integrated-tests

## Source pack metadata

| Field            | Value                                                                              |
| ---------------- | ---------------------------------------------------------------------------------- |
| Slug             | `milestone-2030-integrated-tests`                                                  |
| Planning step    | `milestone-2030-integrated-tests`                                                  |
| Locked milestone | `30 August 2030 — Integrated rover, lander, and cruise-stage test campaign begins` |
| Brief            | `.agents/work/briefs/milestone-2030-integrated-tests.md`                           |
| Output           | `.agents/work/sources/milestone-2030-integrated-tests.md`                          |
| Status           | Planning source pack; not an editorial approval or release decision                |

## Confidentiality boundary

The private numbered timeline is not used as a source for public claims and is not copied here. This pack uses the locked milestone table in `docs/SCENARIO.md`, already released article text, and the released scenario/dossier facts needed for comprehension. No future milestone, test outcome, operational event, or private situation is exposed. The date is provided to the reviewer because it is a locked milestone value; the reviewer alone assigns it to the article frontmatter.

## Claim-level source records

### C-1 — Programme identity

- Claim: Red Horizon is a fictional, AI-assisted Mars exploration programme.
- Canonical source: `website/news/001-project-announcement.mdx:23-27`.
- Publisher/author: Red Horizon public record; fictional programme editorial team.
- Publication/update date: simulated record date `2026-10-12` in the source frontmatter.
- Accessed: 2026-09-18 (repository inspection).
- Support: The released announcement identifies the programme as fictional and AI-assisted and describes one uncrewed lander-and-rover mission.
- Limitation: This is fictional canon, not evidence of a real programme or institutional participation.

### C-2 — Mission architecture elements

- Claim: The locked architecture contains an Ariane 64 injection/payload-adapter segment, a solar-powered cruise stage, an aeroshell and powered stationary landing platform, and RH-01 Pathfinder.
- Canonical source: `docs/SCENARIO.md:122-132`.
- Publisher/author: Red Horizon scenario canon.
- Publication/update date: locked scenario canon; no public publication date assigned by this pack.
- Accessed: 2026-09-18 (repository inspection).
- Support: The flight-system section enumerates the four architecture elements and describes their high-level roles.
- Public-release trace: The launcher, cruise-stage, landing-platform, and rover relationship is already explained in released form at `website/news/004-launch-provider.mdx:29-43`.
- Limitation: Use only the high-level elements needed to explain integration. Do not expose private specifications, exact mass, launch site, or future operations.

### C-3 — Architecture selection is not a readiness or countdown claim

- Claim: The mission has a selected delivery architecture, while integration and readiness work remains; the selection is not a countdown.
- Canonical source: `website/news/004-launch-provider.mdx:16-21, 51-56`.
- Publisher/author: Red Horizon public record; fictional programme editorial team.
- Publication/update date: simulated record date `2030-03-11` in the source frontmatter.
- Accessed: 2026-09-18 (repository inspection).
- Support: The released article explicitly distinguishes an architecture decision from a launch promise and names integration/testing/readiness work as remaining.
- Limitation: This source does not establish any result of the later integrated campaign. Do not turn it into a claim that readiness has been achieved.

### C-4 — RH-01 identity and design boundary

- Claim: RH-01 Pathfinder is the compact six-wheel robotic surface vehicle, and a fixed design is not the same as a built or launch-ready vehicle.
- Canonical source: `website/news/003-vehicle-design.mdx:16-22, 34-47, 62-71`.
- Publisher/author: Red Horizon public record; fictional programme editorial team.
- Publication/update date: simulated record date `2029-07-13` in the source frontmatter.
- Accessed: 2026-09-18 (repository inspection).
- Support: The released vehicle article identifies the rover and its stable studio design, then preserves the design-freeze boundary.
- Limitation: Do not infer assembly completion, test performance, surface activity, or flight readiness from the design description.

### C-5 — Integrated campaign start and exact simulated record date

- Claim: The integrated rover, lander, and cruise-stage test campaign begins on 30 August 2030.
- Canonical source: `docs/SCENARIO.md:173-190`, specifically the locked milestone row at line 189.
- Publisher/author: Red Horizon locked scenario canon.
- Publication/update date: milestone date is `2030-08-30`; this is the in-fiction date of the event, not a repository or real-world publication timestamp.
- Accessed: 2026-09-18 (repository inspection).
- Support: The milestone table states exactly: `30 August 2030 | Integrated rover, lander, and cruise-stage test campaign begins`.
- Reviewer instruction: The editorial gate must assign and verify the exact frontmatter line `simulatedDate: 2030-08-30`, and record this milestone row as its source.
- Limitation: The row states the campaign begins only. It does not state test objectives beyond the campaign label, test results, readiness, anomalies, location, duration, or completion.

### C-6 — Plain-language explanatory framing for integration

- Claim allowed as explanatory framing: An integrated test campaign is the stage at which mission elements are brought together so interfaces and coordinated operation can be checked as a system.
- Canonical sources: `docs/SCENARIO.md:122-132` (the elements being integrated) and `website/news/004-launch-provider.mdx:51-56` (released statement that integration/testing/readiness work remains).
- Publisher/author: Red Horizon canon and released public record.
- Publication/update date: not separately dated; explanatory framing derived from the cited records.
- Accessed: 2026-09-18 (repository inspection).
- Support: The sources establish the distinct elements and that integration/testing is the remaining work after architecture selection.
- Limitation: Keep this generic and clearly explanatory. Do not state that a particular interface, communications link, command sequence, or procedure was tested, passed, or failed unless a canonical source is added and the reviewer clears it. Do not present generic engineering practice as a reported Red Horizon test result.

## Claims explicitly unresolved / excluded

- No source establishes any test pass, failure, anomaly, corrective action, test count, test location, environmental condition, duration, or completion.
- No source establishes that integrated testing makes the mission launch-ready, flight-proven, certified, safe, on schedule, or in transit.
- No source in this pack authorizes the next milestone (`22 November 2030`), launch-stack arrival, Launch Readiness Review, launch, cruise, landing, surface operations, discoveries, repairs, or end-of-life.
- No source authorizes a real provider, operator, facility, partner endorsement, or test-site name.
- No source authorizes Asteria Field or Mars surface imagery for this article.
- No source authorizes an exact launch date or time. The 2031 launch window may be omitted entirely from this update.

## Recommended article source use

Use C-5 as the central update, C-2 for a short architecture explanation, C-3 for the boundary that this is not a countdown, and C-4 only if RH-01 needs a concise reminder for readers. Use C-6 as restrained explanatory language, not as a report of observed testing. Do not add a real-world analogue unless the writer submits a separate canonical source and the reviewer clears its inclusion; it is not needed to satisfy this brief.

## Asset decision

No new imagery is required. No approved existing image carries the integrated-test moment without implying a studio, launch, or surface scene. The visuals card should write `.agents/work/assets/milestone-2030-integrated-tests/assets.md` documenting `text-only/no new imagery`, with no candidate, public asset, caption, alt text, or media key.

## Validation and handoff

Checks completed: inspected `docs/SCENARIO.md`, released articles 001–004, the Ariane 64 and RH-01 dossiers, and the repository timeline index; confirmed the exact milestone row; confirmed no private timeline text is copied into this pack; checked that all proposed material claims have an internal canonical source or an explicit unresolved note.

Review outstanding: writer SEO/draft, visual manifest, continuity review, editorial release decision, and technical validation. The reviewer must verify the exact `simulatedDate: 2030-08-30` line against the locked milestone row before any publication graph proceeds.

Next recommended owner/action: after the brief is reviewed, planner creates the serial article graph. The writer then drafts the public article from this pack; visuals records text-only/no-new-imagery; reviewer owns canon confirmation and release decision; dev validates and publishes only after that decision.
