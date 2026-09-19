# Source pack: milestone-2030-environmental-qualification

Access date for web sources: 2026-09-18.

Scope: planning support for a public-safe Red Horizon capsule. Fictional programme facts come only from the locked scenario and already released public articles/dossiers. Real-world sources explain general engineering terminology only; they do not substantiate fictional Red Horizon test results.

## Claim-level source records

### C1 — The milestone and its simulated record date

Claim: The locked scenario milestone table records “Environmental qualification and landing-system rehearsal complete” on 22 November 2030.

Canonical source: `docs/SCENARIO.md:173-193`, especially line 190.

Support: This is the sole source for the milestone wording and date. Reviewer-owned article frontmatter must use exactly `simulatedDate: 2030-11-22` and must identify the date as an in-fiction record date on the public page. The writer leaves the field unset.

Confidentiality: Do not copy or expose private timeline material. The milestone row is the only scenario-calendar fact needed for this brief.

### C2 — Red Horizon is fictional and uncrewed

Claim: Red Horizon is a fictional, AI-assisted, uncrewed Mars lander-and-rover programme; real organisations are not implied partners or endorsers.

Canonical sources: `docs/SCENARIO.md:3-5`, `docs/SCENARIO.md:18-28`; released public wording in `website/news/001-project-announcement.mdx:23-27` and its closing programme framing.

Support: The public announcement establishes the accessible wording and the non-endorsement boundary. Keep the disclaimer in the capsule.

### C3 — Previously released flight architecture

Claim: The public architecture includes a launcher/injection and payload-adapter segment, a solar-powered cruise stage, an aeroshell and powered stationary landing platform, and RH-01 Pathfinder; the landing concept uses atmospheric entry, a supersonic parachute, terrain-relative navigation, and throttleable terminal descent.

Canonical sources: `docs/SCENARIO.md:118-141`; released `website/news/004-launch-provider.mdx:16-43`.

Support: Article 004 is the public source and explains that this is an architecture decision, not a launch promise. Use only this high-level description; do not add mass, facility, provider, or flight-readiness claims.

### C4 — Previously released rover and payload context

Claim: RH-01 Pathfinder is a compact six-wheel rover with a short stereo-camera mast and one front contact arm; its public payload scope covers imaging, weather, mineral/rock sensing, and close inspection.

Canonical sources: released `website/news/003-vehicle-design.mdx:16-20,34-47,62-67`; released `website/news/002-payload-selection.mdx:16-24`; canonical dossier `docs/vehicles/pathfinder/VEHICLE.md` (vehicle identity and silhouette).

Support: These sources allow the writer to explain what integrated hardware the rehearsal concerns without inventing new instrument names or specifications.

### C5 — Qualification as a general engineering concept (real-world grounding only)

Claim: Environmental qualification is a form of verification in which flight hardware is exposed to mission-relevant environmental stresses and functional checks to demonstrate design adequacy and margin; actual programmes tailor the test plan to the mission.

Canonical source: NASA, “NASA-STD-7002B, Payload Test Requirements,” official technical standard PDF:
https://standards.nasa.gov/sites/default/files/standards/NASA/B/0/nasa-std-7002b.pdf

Publisher: National Aeronautics and Space Administration, NASA Technical Standards.
Publication/update date: not recorded in the search result used here; writer should identify the document revision date from the PDF if quoting it.

Support: The standard describes mechanical, thermal, electromagnetic, and functional test categories, defines qualification testing, and notes that mission-specific tailoring is required. Paraphrase in plain language; do not imply Red Horizon follows NASA requirements or that the fictional programme has NASA involvement.

Limitation: This source supports the generic meaning of qualification only. It does not support any Red Horizon test profile, result, facility, or certification.

### C6 — Generic distinction between rehearsal evidence and flight guarantee

Claim: A ground rehearsal can exercise an integrated sequence and expose interface or procedure issues, but it is not itself a guarantee of a future Mars landing.

Canonical sources: C3 for the fictional architecture; C5 for the general verification context.

Support: This is a cautious editorial inference from the difference between a ground verification activity and an actual flight environment. Keep it explicitly qualified (“helps the team rehearse,” “does not make landing automatic”) and subject to reviewer approval.

Limitation: No fictional rehearsal procedure, success metric, anomaly status, or telemetry is released. Do not present this inference as a Red Horizon-specific test report.

## Claims the source pack does not support

- Exact temperatures, pressures, vibration or acoustic levels, durations, test facilities, test articles, telemetry, anomalies, corrective actions, or acceptance thresholds.
- “Flawless,” “fully qualified,” “flight-ready,” “launch-ready,” “proved safe,” or any equivalent outcome.
- Flight-stack arrival, launch-readiness-review outcome, launch, departure, cruise, landing, surface operations, or discovery.
- Named real provider/operator/facility participation or endorsement.
- New Asteria Field landing geometry, hazard, traverse, touchdown, or operations details.
- Any date other than the exact simulated record date drawn from C1 and the already released broad 2031 launch window.

## Citation and handoff checklist

- Use repository paths for fictional claims in the writer's working notes and reviewer evidence; public prose may link only released public pages.
- Cite the NASA standard only for a generic explanation, with a disclaimer that Red Horizon is fictional and unrelated to NASA.
- Mark any unsupported detail as unresolved instead of filling it from the private timeline or general aerospace assumptions.
- Required artifact path: `.agents/work/sources/milestone-2030-environmental-qualification.md`.
- Input brief: `.agents/work/briefs/milestone-2030-environmental-qualification.md`.
- Next owner: `mars-ai-simulator-writer` after the planner creates the serial graph; writer owns SEO in the same draft card.
- Review outstanding: `mars-ai-simulator-reviewer` must verify every material claim, assign `simulatedDate: 2030-11-22`, and record the release decision before any technical validation.

## Card handoff

Card: `t_7ed4d4b1`.
Mission step: locked `docs/SCENARIO.md:190` milestone only.
Result: source pack prepared with claim-level canonical support and explicit unresolved boundaries.
Canon/public impact: planning artifact only; it does not establish new canon or publication.
Confidentiality check: no private timeline text is reproduced; later-step facts are listed only as forbidden boundaries.
Validation completed: checked the locked milestone row, released article sources, vehicle dossier path, and official NASA standard URL; web access date recorded above.
Review still outstanding: editorial and continuity gate.
Next recommended owner/action: planner reviews these artifacts, then creates the serial research -> draft/SEO -> one text-only IMAGES decision -> editorial gate -> dev validation graph.
