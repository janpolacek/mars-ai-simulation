# Source pack: milestone-2028-power-readiness

## Source-pack metadata

| Field         | Value                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Slug          | `milestone-2028-power-readiness`                                                                   |
| Timeline step | `milestone-2028-power-readiness` — public capsule tied to the locked 20 October 2028 milestone row |
| Brief         | `.agents/work/briefs/milestone-2028-power-readiness.md`                                            |
| Status        | `complete for planning; not an approval or release decision`                                       |
| Public target | `website/news/milestone-2028-power-readiness.mdx` (future draft; not created in this task)         |

This pack deliberately uses the locked milestone row in `docs/SCENARIO.md`, released public articles, released dossiers, and the scenario's listed real-world grounding source. It does not reproduce or paraphrase private `docs/timeline/` material. A missing review outcome is treated as unresolved, not inferred.

## Release boundary

### Public angle

A short engineering update about why a Mars rover needs a carefully matured power system, what Red Horizon's fictional design assumes, and why a preliminary design review is the point at which that assumption is examined. The package may explain the distinction between a design objective, a technology assumption, and a flight-qualified system.

### Explicitly unresolved

- Whether the 20 October 2028 maturity gate passes or fails.
- Whether the assumed system is qualified, built, integrated, or ready for flight.
- Any resulting schedule or hardware decision.
- Any power budget, mass, output, isotope quantity, test result, or thermal-performance figure.

The writer must not turn these unresolved items into either positive or negative claims.

## Claims and canonical sources

| ID  | Claim permitted for the draft                                                                                                             | Canonical source                                                                                                                                                                                                                                   | Status / handling                                                                                                                                                                                     |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C1  | Red Horizon is a fictional, AI-assisted Mars exploration programme.                                                                       | `docs/SCENARIO.md:3-10`; released `website/news/001-project-announcement.mdx:23-27`                                                                                                                                                                | Grounded; retain disclosure on the public surface.                                                                                                                                                    |
| C2  | RH-01 Pathfinder is the released compact, six-wheel rover with a dark equipment deck and established vehicle silhouette.                  | `docs/vehicles/pathfinder/VEHICLE.md:1-7, 13-17, 42-46`; released `website/news/003-vehicle-design.mdx:16-19, 24-46`                                                                                                                               | Grounded released canon; mention only for continuity.                                                                                                                                                 |
| C3  | The released payload covers imaging, local weather observation, mineral and rock-context sensing, and a close-contact tool.               | `docs/vehicles/pathfinder/VEHICLE.md:144-151`; released `website/news/002-payload-selection.mdx:21-24, 66-83`; released `website/news/003-vehicle-design.mdx:62-67`                                                                                | Grounded released canon; no new instrument names or power figures.                                                                                                                                    |
| C4  | RH-01's fictional power design uses an americium-241 radioisotope power system with rechargeable batteries for peak loads.                | `docs/SCENARIO.md:142-147`                                                                                                                                                                                                                         | Grounded scenario canon; label as fictional design assumption, not present-day availability.                                                                                                          |
| C5  | Radioisotope heater units protect the sample tool and critical electronics during cold periods.                                           | `docs/SCENARIO.md:144-147`                                                                                                                                                                                                                         | Grounded scenario canon; do not add temperatures or heater performance.                                                                                                                               |
| C6  | The fictional design objective is support for two complete Martian seasonal cycles.                                                       | `docs/SCENARIO.md:144-147`; `docs/SCENARIO.md:203-205` for the locked two-Mars-year context                                                                                                                                                        | Grounded, but write as a design objective / scenario statement, not a demonstrated result.                                                                                                            |
| C7  | The scenario explicitly says the fictional European americium-241 unit is not a claim that a flight-qualified European unit exists today. | `docs/SCENARIO.md:149-152`                                                                                                                                                                                                                         | Required boundary sentence or equivalent; prevents real-world misrepresentation.                                                                                                                      |
| C8  | Europe's ENDURE work is the real-world grounding direction for long-duration lunar and Martian americium-241 radioisotope power.          | `docs/SCENARIO.md:149-152, 284-310`; ESA ENDURE link listed at `docs/SCENARIO.md:309-310`: https://ideas.esa.int/core/servlet/hype?documentId=5b97ca7b7a3225e64d37841fe1fe9a21&documentTableId=6134754942843243628&templateName=&userAction=Browse | Grounded real-world context; separate clearly from Red Horizon and do not imply endorsement or programme participation.                                                                               |
| C9  | The locked milestone is `20 October 2028 — Preliminary Design Review and radioisotope-power maturity gate`.                               | `docs/SCENARIO.md:173-187`, Launch and mission dates table row dated 20 October 2028                                                                                                                                                               | Exact locked row; reviewer uses it to assign the simulated record date. Do not expose the row's milestone name in the rendered date label unless the reviewer explicitly approves the public wording. |
| C10 | The already released public schedule frame is a 2031 launch window, without a launch day or time in this package.                         | `website/news/001-project-announcement.mdx:66-75`; released `website/news/004-launch-provider.mdx:16-21, 51-56`                                                                                                                                    | Optional context only; omit unless needed. Never add the private launch day or exact time.                                                                                                            |

## Real-world source notes

### Primary grounding source: ESA ENDURE

- URL: https://ideas.esa.int/core/servlet/hype?documentId=5b97ca7b7a3225e64d37841fe1fe9a21&documentTableId=6134754942843243628&templateName=&userAction=Browse
- Publisher/context: European Space Agency Ideas platform, as cited by the scenario.
- Use: support only the statement that European development work is exploring americium-241 radioisotope power for long-duration lunar and Martian applications.
- Boundary: this source does not support any claim that Red Horizon exists in the real world, that a flight-qualified unit is available, or that ESA participates in or endorses the fictional programme. The writer should keep the external reference subordinate to the fictional explanation.

### Released programme context

1. `website/news/001-project-announcement.mdx` — released programme identity, science purpose, ten-group coalition, 2031 launch window, and fiction disclosure. Use only the minimum needed; do not restate budget or geography unless essential.
2. `website/news/002-payload-selection.mdx` — released payload scope and the distinction between capability categories and unsettled instrument details.
3. `website/news/003-vehicle-design.mdx` — released RH-01 name, compact six-wheel design, dark equipment deck, and caution that a frozen design is not a built vehicle.
4. `website/news/004-launch-provider.mdx` — released high-level flight architecture and the rule that an architecture decision is not a countdown. Link only if the writer needs context; do not add later launch facts.

### Canonical design sources

- `docs/SCENARIO.md:122-155` — flight-system architecture, power and thermal design, radioisotope assumption, batteries, heaters, two-season objective, and maturity-gate framing.
- `docs/SCENARIO.md:157-171` — released payload vocabulary and the rule that “sample” means locally collected and onboard-analysed material; avoid sampling detail unless necessary.
- `docs/vehicles/pathfinder/VEHICLE.md:1-7, 42-46, 144-164` — released rover identity, deck, payload relationship, and operating appearance boundaries.
- `docs/SCENARIO.md:173-207` — locked milestone table. The exact row for this package is at line 186 in the current file; line references are pointers, while the row text is authoritative.
- `docs/SCENARIO.md:260-282` — scenario risk/response and continuity controls. Use only the continuity rule needed to keep later facts out; do not copy private risk responses into the article.

## Forbidden classes for prose, metadata, links, assets, and alt text

- Any `docs/timeline/` content, private review situation, gate result, vote, or decision note.
- Pass/fail/defer language for the maturity gate; launch delay; redesign or fallback system.
- Flight-qualified availability, manufacture, integration, test, delivery, or readiness claims for the fictional power unit.
- Exact power, thermal, mass, cost, isotope, battery, seasonal, or performance figures beyond the two-season design objective.
- Later critical-design review, flight-build, test campaign, launch-site, launch, cruise, landing, surface, discovery, anomaly, repair, or end-of-life facts.
- Real institution/operator/facility names as Red Horizon participants or endorsers; no FEI STU or Arianespace in the draft.
- Asteria Field details, plates, or unrelated vehicle/launch imagery.

## Media determination

No approved image in `docs/vehicles/`, `docs/area/`, or `docs/brand/` carries the specific power-readiness moment. The RH-01 studio plate depicts the vehicle baseline, not power hardware; launch and Asteria plates would add unrelated or withheld context. Therefore the article should be text-only / no new imagery. The future single IMAGES card should write `.agents/work/assets/milestone-2028-power-readiness/assets.md` documenting `no new imagery` and the exact rejected-reuse rationale, without running GPU generation.

## Simulated-date instruction for reviewer

The reviewer must assign:

`simulatedDate: 2028-10-20`

Source: `docs/SCENARIO.md`, Launch and mission dates table, exact row `20 October 2028 — Preliminary Design Review and radioisotope-power maturity gate`.

The writer leaves the field unset. The reviewer must verify the built page renders the date only as an in-fiction simulated record date and does not expose a machine-readable real publication date or the private row text.

## Validation checklist

- [x] Locked milestone row identified exactly.
- [x] Released programme and vehicle context identified by public file paths.
- [x] Real-world grounding source identified and separated from fictional canon.
- [x] Exact simulatedDate instruction recorded for the reviewer.
- [x] No suitable approved image carries the moment; text-only determination recorded.
- [x] Private timeline text not copied into this source pack.
- [x] Gate outcome, flight qualification, schedule response, and later milestones marked unresolved/forbidden.
- [ ] Writer's article and integrated SEO package — downstream.
- [ ] Visual manifest documenting text-only decision — downstream.
- [ ] Editorial continuity/release decision — downstream.
- [ ] Technical build and publication validation — downstream.

## Handoff

Result: planning source pack complete. Timeline source: locked scenario row dated 20 October 2028; private timeline content intentionally excluded. Canon impact: proposal only; no canon or release decision made. Files: `.agents/work/sources/milestone-2028-power-readiness.md` and companion brief. Validation completed: source paths, date row, released canon boundaries, real-world grounding, forbidden classes, and media reuse decision checked. Review outstanding: writer, visual, reviewer, and dev stages. Next owner: planner creates the serial article graph after this brief is reviewed; recommended next graph after release is the 13 July 2029 critical-design-review capsule, which requires its own package.
