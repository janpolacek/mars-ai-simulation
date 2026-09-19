# Release package brief: milestone-2028-power-readiness

## Package identity

| Field                 | Value                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                  | `milestone-2028-power-readiness`                                                                                                                                                                       |
| Proposed public title | `Powering a rover through the Martian seasons.` _(writer recommendation; reviewer may revise)_                                                                                                         |
| Timeline step         | `milestone-2028-power-readiness` — public milestone capsule for the locked scenario row dated 20 October 2028                                                                                          |
| Status                | `proposal` — no public file, canon change, release decision, commit, or push                                                                                                                           |
| Source pack           | `.agents/work/sources/milestone-2028-power-readiness.md`                                                                                                                                               |
| Audience              | Curious space readers following Red Horizon's engineering decisions; readers should understand why power maturity is a mission-level design question without needing spacecraft engineering background |

## Release goal

Prepare one short, calm newsroom update explaining that Red Horizon One's rover power approach has reached its preliminary design and maturity-gate moment. The article should distinguish the fictional programme's locked design assumption from the real-world research direction that grounds it, explain the role of stored energy and cold-weather protection in plain language, and leave the public record at the gate itself rather than reporting an outcome that is not supplied by this brief.

The draft must identify Red Horizon as fictional and AI-assisted, preserve the already released rover, payload, and launch-architecture context only where needed for comprehension, and avoid turning a design review into a launch-readiness claim.

## Allowed public facts

Every material claim must trace to the source pack and its cited canonical source.

- Red Horizon is a fictional, AI-assisted Mars exploration programme.
- Red Horizon One uses RH-01 Pathfinder, the already released compact, six-wheel rover; the vehicle's established dark equipment deck and silhouette remain the continuity baseline.
- The released rover payload includes imaging, weather observation, mineral and rock-context sensing, and a close-contact tool; the power paragraph may connect energy demand to operating instruments and protecting critical equipment, but must not invent a power budget.
- The scenario's fictional rover power assumption is a European americium-241 radioisotope power system with rechargeable batteries for peak loads.
- Radioisotope heater units protect the sample tool and critical electronics during cold periods.
- The stated design objective is support for two complete Martian seasonal cycles; explain this as an in-fiction mission-design objective, not as demonstrated performance.
- The scenario explicitly frames the European americium-241 unit as a technology assumption, not proof that a flight-qualified European unit is available today.
- Europe's real ENDURE work is the real-world grounding reference for the technology direction; it is not a Red Horizon partner, endorsement, flight unit, or qualification result.
- The locked scenario milestone is `20 October 2028 — Preliminary Design Review and radioisotope-power maturity gate` (`docs/SCENARIO.md`, Launch and mission dates table). The reviewer owns the simulated record date below.
- The already released 2031 launch window may be mentioned only if needed as broad schedule context; do not add a launch day, time, or readiness claim.

## Forbidden / spoiler facts

These constraints apply to prose, frontmatter, summaries, headings, links, filenames, alt text, captions, and SEO recommendations.

- Do not copy, quote, paraphrase, or expose any `docs/timeline/` text or private situation details.
- Do not report whether the gate passed, failed, or was deferred; do not invent a review finding, vote, readiness verdict, or launch delay.
- Do not claim that the radioisotope system is flight-qualified, manufactured, integrated, tested, delivered, or available as a European flight unit.
- Do not state a power budget, mass, output, isotope quantity, thermal figure, lifetime beyond the two-season design objective, or performance result.
- Do not redesign the rover, add a solar array to RH-01, alter the silhouette, or imply a fallback hardware choice.
- Do not reveal later design authorisation, flight-model assembly, test campaigns, launch-site activity, launch day/time, transfer events, landing, surface operations, samples, discoveries, anomalies, or end-of-life material.
- Do not add private calendar rows or any date other than the reviewer-assigned simulated record date and the already released broad 2031 launch window if strictly necessary.
- Do not name FEI STU, Arianespace, a real operator, launch facility, or any institution as a Red Horizon partner or endorser. Do not imply ESA's ENDURE work belongs to or endorses Red Horizon.
- Do not reuse Asteria Field plates or any vehicle/launch image merely as a generic engineering illustration. No new imagery is needed for this capsule.

## Required article package

The writer card owns the integrated SEO pass: search intent, title/description metadata, headings, internal links, and any alt-text recommendation. No separate SEO card should be created.

- Draft target: `website/news/milestone-2028-power-readiness.mdx`, kept `publication: draft` and with no writer-selected `simulatedDate`.
- Working source pack: `.agents/work/sources/milestone-2028-power-readiness.md`.
- Visual decision: text-only / no new imagery. The visual card, if created by the article graph, must record the no-new-imagery determination and not spend GPU time.
- Internal links should be limited to already public context pages, such as the released vehicle-design and launch-architecture articles, only where they improve comprehension and resolve.

## Reviewer-owned date

The editorial reviewer must assign and verify exactly:

`simulatedDate: 2028-10-20`

Canonical source: `docs/SCENARIO.md`, Launch and mission dates table, row `20 October 2028 — Preliminary Design Review and radioisotope-power maturity gate`.

The reviewer must verify that the rendered label presents this as an in-fiction simulated record date, not a real publication date, and that the date does not expose the milestone name or any later event.

## Acceptance criteria

- The brief and source pack contain no unreleased timeline text or future-event detail.
- Every material draft claim has a canonical source or an explicit unresolved note; real-world technical context is separated from fictional programme facts.
- The draft states the fictional/AI-assisted disclosure and does not imply real institutional participation or endorsement.
- The draft does not report a gate outcome and does not convert a maturity review into flight readiness.
- `publication: draft` remains in place until the reviewer records approval; the writer leaves `simulatedDate` unset.
- The reviewer can apply and verify the exact simulated-date line above from the locked milestone table.
- The package is text-only with no new imagery and no reuse of an unrelated approved image.
- Recommended next serial graph: after editorial approval of this capsule, create `milestone-2029-critical-design-review` for the next locked milestone, `13 July 2029 — Critical Design Review and flight-build authorisation`, with its own brief and source pack. Do not create that graph or expose its facts in this task.

## Handoff and confidentiality

Input sources: `docs/SCENARIO.md` locked canon and released public articles 001–004; the source pack enumerates exact paths and URLs. Assumption: the requested capsule is limited to the milestone row and already released context, with no private outcome supplied. Public/canon impact: proposal only; it establishes no canon and authorises no release. Validation completed: source boundary and approved-asset reuse scan performed; no suitable approved image carries this power-readiness moment. Review outstanding: writer package, visual determination, editorial continuity/release gate, and technical validation. Next owner: planner, after this brief/source pack is reviewed, creates the serial article graph with writer-first SEO, one text-only visual card, reviewer gate, and dev card.
