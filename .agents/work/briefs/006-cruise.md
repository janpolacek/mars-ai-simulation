# Brief: 006 cruise updates (three timed pages)

Timeline step: `006-cruise`; dependency: released step 005 (`005-launch`, published 2031-02-17). Public-safe goal: publish periodic short mission updates during the interplanetary cruise, one page per dated milestone row. The step yields three public pages because the locked milestone table holds three distinct cruise events; each page is written as if recorded on its own in-universe date, and the reviewer alone assigns each `simulatedDate` from the locked table.

## Pages in this brief

| Page slug                     | Locked milestone row                                            | SCENARIO line | Proposed `simulatedDate` |
| ----------------------------- | --------------------------------------------------------------- | ------------- | ------------------------ |
| `006-cruise-first-correction` | 3 Mar 2031 — First planned trajectory-correction opportunity    | :194          | 2031-03-03               |
| `006-cruise-checkout`         | 20 May 2031 — Cruise checkout and second correction opportunity | :195          | 2031-05-20               |
| `006-cruise-final-approach`   | 21 Aug 2031 — Final approach correction opportunity             | :196          | 2031-08-21               |

Proposed dates are for the reviewer's verification only; writers leave `simulatedDate` unset and no card body carries a date.

## Allowed facts (all pages)

- Red Horizon is a fictional, AI-assisted Mars exploration programme; the site and every page must keep the standard disclosure present and prominent.
- Red Horizon One is in interplanetary cruise after its already-released 17 February 2031 launch on Ariane 64 (link to `/news/005-launch/` and `/news/004-launch-provider/` only as needed).
- A trajectory-correction opportunity is a planned manoeuvre to refine the course toward Mars; a cruise checkout is a scheduled health check of the flight stack's systems. Explain each in plain, accessible language.
- The already-released step-005 page publicly names the next checks (3 March 2031 first correction; 20 May 2031 cruise checkout) and the destination (Asteria Field). Those facts are released canon and may be referenced.
- Routine cruise operations (navigation, thermal control, communications with Earth, instrument safing) may be described generically at the just-released public level.
- The step-006 public angle allows a cautious explanation of at most one manageable technical concern (for example sensor calibration drift, thermal margin, or a communications schedule constraint) with its next review — only if the writer can trace it to an approved source; otherwise routine is the valid story. The concern must never contradict safe landing or the later rover condition.

## Forbidden / spoiler facts (all pages)

- Exact trajectory parameters (correction magnitude, delta-v, burn times), telemetry, or fuel state.
- Any claim of entry readiness before step 007, landing success, surface operations, egress, drive results, samples, or discovery.
- Landing ellipse, landing-site details beyond the already-released destination name, traverse plans, hazards, or surface targets.
- The name or details of any real facility, operator, agency, or partner; no real-provider endorsement.
- Final-repair plans, anomalies that contradict later steps, or any later-step event (steps 007–011).
- Private timeline text or paths; invented dates, mass figures, or technical numbers.
- Any wording that turns illustrative artwork into a photograph or documentary record.

## Assets and image decision

`no new imagery: text-only updates`. No approved in-transit visual exists: the Ariane plates under `docs/vehicles/ariane/` are launch/vehicle plates (and `travelling-to-mars.png` remains gated), none of them carries an in-cruise moment. Each IMAGES card body states `no new imagery: text-only capsule` and writes `.agents/work/assets/<page-slug>/assets.md` documenting the decision, `placement: none`, and no candidates. If a writer or reviewer later demonstrates a comprehension need, a separate bounded visual proposal is required; no generation is requested by default.

## Draft contract (each page)

- Target: `website/news/<page-slug>.mdx`, `publication: draft` until the reviewer records approval and a release decision; `simulatedDate` left unset.
- Writer owns the integrated SEO pass (search intent, metadata, headings, internal links, alt-text recommendation); no separate SEO card.
- Keep each update short: one central update plus only the already-released context needed to understand it. Use date-scoped language so the page does not imply an evergreen current status after its fictional record date.
- The cruise chain is serialised with the rest of the dated backlog: each page's chain starts only after the previous page's release (container-complete).

## Acceptance criteria (each page)

- Every material claim traces to a canonical source in `.agents/work/sources/<page-slug>.md` or is explicitly unresolved.
- The page distinguishes the fictional programme from real launcher/spaceflight history and never implies endorsement.
- No later-step fact, private timeline text, or invented figure appears in prose, metadata, links, filenames, captions, or alt text.
- The visual decision is explicit (text-only, manifest written).
- Reviewer checks chronology, canon, confidentiality, and assigns/verifies the exact `simulatedDate` from the locked row; dev validation waits for that recorded release decision.
- No public file, canon change, release decision, commit, or push is part of this plan.
