# Brief: 008 landing confirmation

Timeline step: `008-landing`; dependency: step 006 (released) and step 007 (preparation briefing — see backlog note). Public-safe goal: a landing confirmation page recorded on the 16 September 2031 entry and landing milestone: what is known, what remains to be checked, and the first expected surface operations.

## Page in this brief

| Page slug     | Locked milestone row                                         | SCENARIO line | Proposed `simulatedDate` |
| ------------- | ------------------------------------------------------------ | ------------- | ------------------------ |
| `008-landing` | 16 Sep 2031 — Atmospheric entry and landing at Asteria Field | :197          | 2031-09-16               |

## Allowed facts

- Red Horizon is a fictional, AI-assisted Mars exploration programme; keep the standard disclosure present and prominent.
- The flight stack reached Mars and confirmed entry, descent, and landing at Asteria Field (the destination name is already released in step 005 and the Asteria Field wiki leaf).
- Basic power, communications, and rover survival are confirmed before the landing is reported successful — the page must order its claims that way.
- Report what is known first (touchdown confirmed by signal and health factors that are actually releasable), what remains to be checked (commissioning, sensors, ramps, environment), and the first expected surface operations (platform checks before egress, per released architecture).
- An early uncertainty may be public — e.g. a dust-related calibration concern, actuator margin, or intermittent thermal/communications behaviour — only as an open question with no premature cause, and only at the released level; the exact condition is decided later and must stay consistent with steps 009–011.
- Landing-day health checks, relay/communications, and the plan for the next update may be described generically.

## Forbidden / spoiler facts

- Claiming all systems are perfect, the first rover point-of-view or panoramic image, egress, drive results, samples, or the final repair plan.
- Landing-site geometry beyond the released destination name: ellipse coordinates, hazards, traverse plans, or surface targets.
- Real facility, operator, agency, or partner claims; documentary framing; invented telemetry, mass, or technical numbers.
- Any later-step event (009–011), private timeline text or paths.
- Any wording that turns illustrative artwork or map plates into a photograph or documentary record.

## Assets and image decision

`no new imagery: reuse approved Asteria Field area plates`. The landing page may reuse the approved map plates `docs/area/asteria-field-01-mars-locator.png` and/or `docs/area/asteria-field-02-regional-context.png` for landing-target context only (the same plates already cleared for the released Asteria Field wiki leaf). No landed-rover or platform scene: the first surface imagery belongs to step 009. The IMAGES card body states `no new imagery: reuse <exact path(s)>` and writes `.agents/work/assets/008-landing/assets.md` documenting hash, dimensions, placement, alt/caption, provenance, and rights for the reused plate(s).

## Draft contract

- Target: `website/news/008-landing.mdx`, `publication: draft`; `simulatedDate` unset (reviewer assigns 2031-09-16 from `docs/SCENARIO.md:197`).
- Writer owns the integrated SEO pass; no separate SEO card.
- One central update plus only the released context needed; date-scoped language; accessible structure.

## Acceptance criteria

- Every material claim traces to a canonical source or explicit unresolved note in `.agents/work/sources/008-landing.md`.
- Landing success is reported only after basic power/communications/survival confirmation; uncertainties stay open questions.
- No later-step fact, private timeline text, or invented figure; confidentiality scan clean.
- Visual decision explicit (reuse of approved plates, manifest written).
- Reviewer checks chronology/canon/confidentiality, verifies the exact `simulatedDate` line, and records the release decision before dev validation.
- No public file, canon change, release decision, commit, or push in this plan.
