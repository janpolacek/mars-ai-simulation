# Public-safe brief: Environmental qualification and landing-system rehearsal

## Release goal

Prepare one short, text-first Red Horizon news capsule about the locked milestone in which environmental qualification and a landing-system rehearsal are complete. The story should explain why qualification is a meaningful transition from integrated testing toward launch preparation, while staying precise about what the public record does and does not establish. It is a proposal for the next serial release package, not a canon change or release decision.

Proposed title: Environmental qualification gives Red Horizon One a harder test
Proposed slug: `milestone-2030-environmental-qualification`
Target surface: one public news article under `website/news/`, with `publication: draft` until the editorial gate approves it.
Audience: general readers following a fictional Mars mission; assume no aerospace-test vocabulary and define “environmental qualification” on first use.

## Timeline and simulated record date

Linked locked milestone row: `docs/SCENARIO.md:190`, `22 November 2030 | Environmental qualification and landing-system rehearsal complete`.

The reviewer must assign and verify this exact frontmatter line from the locked milestone table:

`simulatedDate: 2030-11-22`

The writer must leave `simulatedDate` unset in the draft. The page label must present the value as an in-fiction simulated record date, never as the repository or real publication date.

## Allowed public facts

Use only these facts, with source citations in the source pack:

- Red Horizon is a fictional, AI-assisted, uncrewed Mars lander-and-rover programme; it is not a real agency partnership or endorsement.
- Red Horizon One's public architecture comprises a launcher/injection and payload-adapter segment, a solar-powered cruise stage, an aeroshell and powered stationary landing platform, and RH-01 Pathfinder, a compact six-wheel rover.
- The programme's previously public architecture includes atmospheric entry, a supersonic parachute, terrain-relative navigation, and a throttleable terminal-descent stage; the landing platform is also the primary relay for the rover.
- RH-01 Pathfinder's released design is a compact six-wheel rover with a short stereo-camera mast and one front-centre contact arm. Its public payload scope covers imaging, weather measurement, mineral and rock sensing, and close inspection.
- The locked milestone table records that environmental qualification and a landing-system rehearsal were complete on 22 November 2030.
- “Environmental qualification” may be explained generically as testing hardware against representative or deliberately demanding conditions relevant to its mission, such as mechanical, thermal, vacuum, electrical, or functional environments. Do not imply that Red Horizon used any particular test profile unless a source pack later resolves it.
- The capsule may say that qualification and rehearsal provide evidence for engineering review and readiness work; it must not convert that evidence into a launch guarantee.
- The already released schedule frame is a 2031 launch window. Do not add a day, time, countdown, or launch-site claim.

## Forbidden, spoiler, or unresolved facts

Do not include:

- Any text copied from `docs/timeline/` or any private event, anomaly, decision, outcome, or future scene not represented in released canon.
- Exact test dates beyond the milestone record date, test levels, durations, temperatures, pressures, vibration spectra, telemetry, facility names, personnel, suppliers, or pass/fail details.
- The words “flawless,” “fully qualified,” “flight-ready,” “launch-ready,” “proved safe,” or equivalent claims unless the reviewer has an explicit canonical source for that wording.
- A claim that the rehearsal reproduced the complete flight, guaranteed landing, or closed every remaining risk.
- Flight-stack arrival, launch-readiness-review outcome, launch, departure, cruise, landing, surface operations, or discovery; these belong to later releases.
- A named launch facility, operator, or real organisation as a Red Horizon partner. Preserve the non-endorsement language for real-world references.
- New landing-site geometry, hazard maps, traverse plans, touchdown-zone details, or Asteria Field operational facts. Existing released references may be linked only at the already published level and must not be expanded.
- New hardware specifications, mass, performance margins, or instrument names not present in the released articles and dossiers.

## Article shape and SEO owned by writer

Keep the capsule short (approximately 500–800 words unless the writer finds that a shorter explanation is clearer). Suggested structure:

1. Headline and lede: the milestone is complete, framed as a test and rehearsal result rather than a promise.
2. Plain-language definition of environmental qualification.
3. What the public architecture had to represent: rover, lander, cruise stage, entry/descent/landing concept.
4. Why a landing-system rehearsal matters and what it cannot prove on Earth.
5. What remains: review and launch preparation inside the published 2031 window, without a launch date.
6. A compact “what this does not mean” paragraph preserving uncertainty and non-endorsement.

The writer owns the SEO pass in the same draft card: search intent, metadata, headings, internal links to the released architecture, vehicle, payload, and announcement pages where useful, and descriptive alt-text recommendations. No separate SEO card is needed. Avoid private milestone names in metadata, filenames, link labels, captions, summaries, and alt text.

## Imagery decision

Text-only; no new imagery. Existing approved vehicle and launcher renders show hardware identity but do not depict this specific qualification/rehearsal moment, and inventing a test-facility scene would add unsupported detail. The single IMAGES card should state exactly: `no new imagery: text-only` and write a manifest at `.agents/work/assets/milestone-2030-environmental-qualification/assets.md` documenting that decision, placement (none), and the confidentiality check. If the writer or reviewer later finds a comprehension gap, visuals may receive a bounded follow-up brief without depicting unreleased test details.

## Required acceptance criteria

- Brief and source pack exist at the declared `.agents/work/` paths.
- Every material fictional claim is tied to `docs/SCENARIO.md` or a released article/dossier path; every real-world technical explanation has a direct official source.
- The exact reviewer-owned line `simulatedDate: 2030-11-22` is recorded, and the draft instruction leaves the field unset.
- Forbidden facts above are preserved in the writer and reviewer handoffs; no private timeline text is copied into public work.
- The visual decision is one text-only/no-new-imagery card, not an unbounded asset request.
- Editorial review and continuity verification remain outstanding; no publication, canon change, commit, or push is authorized by this brief.

## Next serial graph recommendation

After this brief is reviewed, create one serial article graph for this slug in the order research source pack -> writer + SEO draft -> one IMAGES decision card -> reviewer-in-chief editorial/continuity gate -> developer build/deploy validation. Gate each stage on its predecessor. The next recommended capsule after this package, subject to the human story owner's release order and a fresh brief, is `milestone-2031-stack-arrival` for the locked 2031-01-13 milestone; do not create that graph in this task.

## Handoff

- Card: `t_7ed4d4b1`
- Mission step: locked milestone row in `docs/SCENARIO.md:190` (not a private timeline excerpt)
- Inputs: `docs/SCENARIO.md`; released `website/news/001-project-announcement.mdx`, `002-payload-selection.mdx`, `003-vehicle-design.mdx`, `004-launch-provider.mdx`; dossiers named in the source pack.
- Canon/public impact: planning only; no public route, canon, release decision, or timing decision is created.
- Confidentiality check: no `docs/timeline/` text is included; later launch, cruise, landing, and surface facts are explicitly withheld.
- Review still outstanding: editorial reviewer-in-chief must confirm canon, simulated date, spoiler safety, and release scope.
- Next owner/action: planner creates the serial article graph after brief review; writer then drafts the bounded capsule and SEO package.
