# Brief: milestone-2030-integrated-tests

Timeline step: `milestone-2030-integrated-tests` (milestone row in `docs/SCENARIO.md`; this is a planning slug, not a private timeline file).

## Release goal

Prepare a short, public-safe Red Horizon update about the start of the integrated test campaign for the rover, lander, and cruise-stage elements. The article should explain the public meaning of integration work in plain language: the mission is moving from a selected architecture toward evidence that its elements can operate as one mission system. Keep the tone measured; this is a campaign-start update, not a launch-readiness declaration or a report of test results.

The programme must be identified as fictional and AI-assisted. The article may link back to the released launch-architecture article for context, but should not retell its full architecture.

## Allowed facts

- Red Horizon is a fictional, AI-assisted Mars exploration programme.
- Red Horizon One is an uncrewed Mars lander-and-rover mission.
- The released architecture consists of the Ariane 64 injection/payload-adapter segment, a solar-powered cruise stage for navigation, thermal control and Earth communications, an aeroshell and powered stationary landing platform for entry/descent/landing, and RH-01 Pathfinder, the roughly two-metre six-wheel rover (`docs/SCENARIO.md:122-132`). Use only the elements needed to explain the test campaign.
- Ariane 64, the four-booster Ariane 6 variant, is the launcher selected for the fictional mission; public wording must not imply real-provider participation or endorsement (`website/news/004-launch-provider.mdx:23-27`).
- The released launch-architecture article says that integration and readiness work remains after the architecture decision and that the architecture decision is not a countdown (`website/news/004-launch-provider.mdx:51-56`).
- The locked milestone table records: `30 August 2030 — Integrated rover, lander, and cruise-stage test campaign begins` (`docs/SCENARIO.md:173-190`). The reviewer owns the in-fiction record date and must assign the exact frontmatter line `simulatedDate: 2030-08-30`.
- The article may describe an integrated test campaign at a high level as work that brings mission elements together and checks interfaces, communications, command/data flow, sequencing, and operational coordination, but must present these as the purpose/meaning of this kind of campaign, not as observed test results or invented test procedures.
- The article may state that the campaign has begun. It may not claim that any test passed, failed, completed, or demonstrated flight readiness unless a later approved record supplies that fact.

## Forbidden and spoiler facts

- Any private timeline wording, file content, or future-step material.
- Test results, pass/fail status, anomalies, corrective actions, test counts, test locations, exact test hardware configuration, test duration, telemetry, readiness scores, or named personnel/teams not already released.
- Environmental qualification or landing-system rehearsal completion (the next milestone row), launch-stack arrival, Launch Readiness Review, launch day/time, Earth departure, cruise operations, landing, surface operations, discoveries, repairs, or end-of-life.
- Any claim that the campaign makes the mission launch-ready, flight-proven, safe, certified, on schedule, in transit, or committed to a launch date. The 2031 launch window may be omitted; no specific launch date may appear.
- Asteria Field details, landing ellipse/zone/terrain/hazards, Mars surface scenes, or imagery implying a real test site.
- New partner assignments, real agency/company/operator/facility names, endorsements, contracts, performance figures, mass figures, or budget claims unless the writer can trace them to already released canon and the reviewer accepts their necessity.
- Spoiler leakage through title, slug, summary, metadata, headings, internal links, filenames, captions, alt text, or image prompts.

## Audience and article shape

Target audience: general readers following the Red Horizon public record, with enough technical curiosity to want to know why integrated tests matter. Define "integration" on first use. Aim for one central update with a short explainer and a restrained "what this does not mean yet" section. Avoid a test checklist that would imply unreleased mission operations.

Suggested public title: `Red Horizon begins integrated mission testing`
Suggested slug: `milestone-2030-integrated-tests`

The writer owns the SEO package in the draft card: search intent, metadata, headings, internal links, and alt-text recommendation. Do not create a separate SEO card.

## Images

Text-only / no new imagery is recommended. Existing approved plates depict the Ariane 64 in an engineering-reference setting, RH-01 in a studio reference, or the earlier Asteria planning release; none carries the integrated-test moment, and reusing one would risk implying a test scene or a current physical state. Do not generate or commission a substitute for this brief. If the article graph still requires an IMAGES card, its body must say explicitly: `no new imagery: text-only article; no approved existing image carries the integrated-test moment`. The manifest must document that decision at `.agents/work/assets/milestone-2030-integrated-tests/assets.md` and contain no public asset placement.

## Canonical sources required

- `docs/SCENARIO.md:122-132` — locked flight-system architecture.
- `docs/SCENARIO.md:173-190` — locked milestone row and exact date.
- `website/news/004-launch-provider.mdx:16-21, 29-55` — released architecture context and the distinction between architecture selection and readiness.
- `website/news/003-vehicle-design.mdx:16-22, 62-71` — released RH-01 identity and the warning that design freeze is not build or launch readiness.
- `.agents/work/sources/milestone-2030-integrated-tests.md` — claim-level source pack produced alongside this brief.

## Reviewer requirements

The reviewer-in-chief must verify every material claim against the source pack and released canon, check all metadata and links for spoiler leakage, and assign/verify exactly:

`simulatedDate: 2030-08-30`

The reviewer must record the milestone line used for that date and make the release decision. A release recommendation is not approval; no public file or canon change is authorized by this brief.

## Next serial graph recommendation

After this brief is reviewed, the planner should create one article container and a strictly serial graph:

1. planner — research/source validation, using `.agents/work/sources/milestone-2030-integrated-tests.md`;
2. writer — draft `website/news/milestone-2030-integrated-tests.mdx` with integrated SEO package and no writer-selected simulated date;
3. visuals — one IMAGES card, text-only/no-new-imagery manifest at `.agents/work/assets/milestone-2030-integrated-tests/assets.md`;
4. reviewer — continuity, editorial review, exact simulated date, and release decision in `.agents/work/reviews/milestone-2030-integrated-tests.md` and `.agents/work/continuity/milestone-2030-integrated-tests.md`;
5. dev — build/guard/preview validation and publication only after the recorded release decision, with the required commit/push handoff and clean pushed tree.

The graph must be `RESEARCH -> DRAFT -> IMAGES -> REVIEW -> DEPLOY`; the article container is linked as the child of the deploy card. No separate SEO card and no parallel image card.

## Handoff status

This is a planning artifact only. No public file, canon change, release decision, commit, push, or deployment is made here.
