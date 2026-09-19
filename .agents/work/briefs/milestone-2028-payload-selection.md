# Release brief: Payload Selection Review capsule

Slug: `milestone-2028-payload-selection`
Mission-timeline step: `002-payload-selection` / locked milestone row `7 April 2028 — Payload Selection Review`
Proposed public package: one short news update only; no context page unless the writer identifies a comprehension gap that can be met by linking the already released payload article.

## Release goal

Show the public record moving from a broad payload scope to a compact, explainable functional package for Red Horizon One. Explain what kinds of evidence the rover is equipped to collect and why the functions work together. Keep the update about selection and measurement, not vehicle design, launch, landing, or results.

This is a planning brief, not canon approval or a release decision. The reviewer-in-chief owns the final continuity verdict, the exact public wording, and the simulated record date.

## Audience and angle

Audience: general readers following how a fictional Mars mission becomes technically testable, including readers who saw the earlier payload-scope article.

Suggested angle: “The payload selection review turns four broad jobs into a compact measurement set.” The article should link to `/news/002-payload-selection/` as the preceding public step and use plain-language explanations before technical terms.

## Allowed public facts

Use only these facts, with the cited sources in the source pack:

- Red Horizon One is a fictional, AI-assisted, uncrewed Mars lander-and-rover mission.
- Its primary science asks how water changed an ancient equatorial landscape and whether past conditions were compatible with habitability; it does not search for living organisms or claim evidence of life.
- The selection is compact and function-led: panoramic and navigation imaging; a close-up context imager on the contact tool; mineral composition sensing using Raman and visible-near-infrared spectroscopy; elemental chemistry sensing for rock and regolith context; pressure, temperature, wind, and airborne-dust measurements; and a two-joint contact arm for abrasion, grain capture, and local onboard analysis.
- The contact tool may collect no more than one cubic centimetre of loose material for analysis in a reusable chamber, then return the material near its source. In public copy, “sample” means locally collected and onboard-analysed Martian material.
- The package is designed to cross-check context, composition, weather, and close-up texture rather than rely on one measurement.
- The programme shares science data after instrument calibration and safety review; no national exclusivity period is part of the locked scenario.
- Real Mars missions may be cited as technical precedents, but they are unrelated to Red Horizon and their organisations must not be presented as partners or endorsers.

## Forbidden / spoiler facts

Do not include or imply:

- Any private timeline text, internal deliberation, vote, unresolved instrument name, or private team assignment.
- A final rover render, detailed vehicle layout, design freeze, chassis dimensions, or other step-003 vehicle-design material.
- Any launch vehicle, launch provider, launch site, launch date, landing date, cruise date, or transfer detail.
- A confirmed public landing site, Asteria Field coordinates, ellipse, touchdown zone, science zones, hazards, traverse routes, or map identifiers.
- Any discovery, mineral detection, biosignature, life claim, returned sample, sealed cache, ascent vehicle, Earth-return capsule, or biological life-detection experiment.
- A promise that every engineering implementation, instrument name, or flight configuration is final beyond the functional selection described here.
- Real-agency, university, laboratory, company, or national-institution participation, endorsement, funding, or approval.
- A real publication date. The page must present its date as an in-fiction simulated record date only.

## Required assets and media decision

Text-only is recommended. No new imagery is needed for comprehension, and the approved `docs/payload/payload-sensor-illustration.png` is bound to the earlier 002 article rather than this capsule. Do not reuse it on this article and do not create a final rover image before step 003. The article graph still requires one visuals card; its visual brief should say: `no new imagery: text-only; no approved reuse`, and require `.agents/work/assets/milestone-2028-payload-selection/assets.md` to document that decision, placement review, and the confidentiality check.

## Writer and SEO requirements

The writer owns the SEO pass in the draft card: search intent for readers looking for Mars rover payload selection and planetary instruments; a factual title and summary; one clear H1; descriptive section headings; internal link to `/news/002-payload-selection/`; canonical external sources from the source pack; and no private milestone, future-step, or unreleased term in metadata, slug, alt text, or link text. With no media, no image alt text is required for this article.

Leave `simulatedDate` unset in the draft. The reviewer must verify and assign this exact frontmatter line from the locked milestone table:

`simulatedDate: 2028-04-07`

The rendered page must label it as an in-fiction record date, never as a real publication date.

## Acceptance criteria for the release package

- Brief and source pack exist at the exact paths named by this card.
- Every material claim in the draft can be traced to a canonical scenario line, released article, or listed real-world source; gaps are marked unresolved rather than invented.
- The draft remains `publication: draft` until the editorial gate.
- The visuals manifest documents text-only/no new imagery and does not claim reuse of the 002-only illustration.
- The reviewer checks chronology, canon, spoiler safety, factual wording, metadata, internal link, and the exact `simulatedDate` line above, then records the release decision and public scope.
- Technical validation happens only after the recorded editorial approval.

## Next serial graph recommendation

After this brief is reviewed, create one serial article graph for this slug:

1. Research source pack — `mars-ai-simulator-planner` — `.agents/work/sources/milestone-2028-payload-selection.md`
2. Draft article plus SEO — `mars-ai-simulator-writer` — `website/news/milestone-2028-payload-selection.mdx`
3. Visual manifest — `mars-ai-simulator-visuals` — `.agents/work/assets/milestone-2028-payload-selection/assets.md`; text-only/no new imagery, gated on the draft
4. Editorial final gate and continuity — `mars-ai-simulator-reviewer` — `.agents/work/reviews/milestone-2028-payload-selection.md` and `.agents/work/continuity/milestone-2028-payload-selection.md`
5. Build and deploy — `mars-ai-simulator-dev` — only after the recorded release decision; the dev card must commit and push its scoped change, report commit SHA and push result, and end with `git status --short` clean and `git log origin/main..HEAD` empty.

Use blocking edges RESEARCH → DRAFT → IMAGES → REVIEW → DEPLOY. The article container is linked after DEPLOY and remains pending until the serial graph is complete. No separate SEO card.

## Downstream reviewers and handoff

- Research: planner self-checks source coverage and unresolved gaps; writer is next.
- Draft: reviewer-in-chief is the editorial owner; visuals follows the draft.
- Visuals: reviewer-in-chief checks that the manifest makes the no-imagery decision without leaking private material.
- Editorial: reviewer-in-chief alone confirms canon and records the release decision; no separate human approval card is implied.
- Dev: reviewer-in-chief's recorded decision is the prerequisite; dev validates build/guards and owns commit-and-push for its scoped change.

Public/canon impact: proposal only. This file is private working material; it adds no public route and establishes no canon or release timing.

Confidentiality check: the brief intentionally excludes `docs/timeline/` prose and later-step facts. The only date named is the locked milestone row, carried as reviewer input rather than a new story-owner decision.
