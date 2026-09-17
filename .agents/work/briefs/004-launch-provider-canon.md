# 004 launch-provider canon — proposal package (NOT canon)

> **This document is a proposal, never canon.** `docs/INSTRUCTIONS.md` source-of-truth item 5: a well-marked proposal is not an invented fact presented as established canon. Nothing here is canon until the human story owner records the verbatim decision on the gate card `004-launch-provider-gates` (Gates 004-A through 004-E, see Deliverable A2 of `t_5fbd61ee`).
>
> Workflow stage: article flow preparation + canon preparation + a wiki `vehicle` node for timeline step `004-launch-provider`.
>
> The locked canon today names a real launcher. This proposal packages the only open decisions into the smallest possible set of human-only questions.

## Why this exists as a proposal, not a decision

The human story owner's brief, relayed by the operator on 2026-09-17, asked for three things at once:

1. Prepare the news article for step 004 (launch provider).
2. Prepare the canon for that article.
4. Create a new vehicle / rocket, to become part of the wiki.

Items 1 and 4 collide on item 2: the locked canon already names a real launch vehicle, and the human asked for "a new vehicle / rocket". Only the human story owner can author canon or advance the release order (`docs/INSTRUCTIONS.md` source-of-truth item 1, `AGENTS.md` agent context, this planner's role `SOUL.md`). This package therefore does not decide — it presents the fork the human answers and the consequences each option carries, so every downstream card can be built so that nothing can start before the human's sentence exists.

## The three options

### Option A — The locked canon stands

> "004 launch provider canon: option A — the locked canon stands (Ariane 64 from Europe's Space's Spaceport near Kourou); the launch vehicle documented is Ariane 64."

**What this means in fiction.** No `docs/SCENARIO.md` change is needed. The launch vehicle documented in `docs/vehicle/<launcher>.md` and shown on the wiki `vehicle` page is Ariane 64, and the launcher interface to the programme is the **Ariane 64 injection and payload-adapter segment** already named at `docs/SCENARIO.md:124`.

**Consequence — no canon amendment.** The mission-identity row `Launcher = Ariane 64 from Europe's Spaceport near Kourou, French Guiana` (`docs/SCENARIO.md:22`), the calendar row `17 February 2031 — Ariane 64 launch and Earth departure` (`docs/SCENARIO.md:193`), the cost row `Ariane 64 launch service and Kourou campaign — €180 M` (`docs/SCENARIO.md:230`), and the flight-system element `an Ariane 64 injection and payload-adapter segment` (`docs/SCENARIO.md:124`) are all retained as-is.

**Consequence — a real provider is named in public copy.** Article 004 may name Ariane 64 and Europe's Spaceport near Kourou, and the wiki `vehicle` page documents the real vehicle accurately. This option therefore requires Gate 004-B (real-provider wording review): the public surface must be accurate and non-endorsing (`docs/SCENARIO.md:281`: "Real institutions, including FEI STU and **Arianespace**, require explicit review before any public mention"). The wording rules that gate must satisfy are listed in "Accurate / non-endorsing wording rules" below.

**Consequence — "the new vehicle / rocket" means "Ariane 64 gets its own dossier and its own wiki `vehicle` entry".** The dossier and the page describe the real launch vehicle, with the fictional programme's interface (payload adapter, injection segment, integration and Kourou campaign context) kept clearly separate from the real vehicle's public record. No fictional launch vehicle is invented.

### Option B — A new fictional launch provider and its launch vehicle

> "004 launch provider canon: option B — new fictional provider and launch vehicle. Provider name: <…>. Vehicle name: <…>. Class / configuration: <…>. Operator / facility: <…>."

**What this means in fiction.** The locked canon at `docs/SCENARIO.md:22, :124, :193, :230` is replaced with the human-supplied provider name, vehicle name, class / configuration, and operator / facility. The fictional provider is the one named in article 004, in the dossier, and on the wiki `vehicle` page.

**Consequence — `docs/SCENARIO.md` amendment.** The four canon rows above are **locked canon fields owned by the human story owner**. Changing them is new scenario canon. `docs/SCENARIO.md:44-53` (Equal governance, "changes to mission purpose, landing target, launch date, total budget, or public canon require eight of ten votes") makes this an eight-of-ten Council threshold change, not a planner edit. The exact rows to amend and the proposed value for each are listed under Gate 004-E so the human can record the amendment on the gate card; the planner does **not** edit `docs/SCENARIO.md`.

**Consequence — fictional provider needs its own canon fields authored.** Provider name, vehicle name, vehicle class / configuration, operator or launch facility, heritage / first-flight framing, what "the vehicle" may be called in public copy, and the in-fiction terms it must never be said to be (e.g. crew-rated, reusable, in transit). The fill-in canon table below records every value the human must set; every value is marked `human-only`.

**Consequence — no real-provider wording review required.** A purely fictional provider cannot misrepresent a real one. Gate 004-B is not required for Option B unless the human also wants to name a real institution (e.g. a fictional operator "based at" a real range) — in which case Gate 004-B still binds.

### Option C — Hybrid

> "004 launch provider canon: option C — hybrid. Real provider named for the service: <…>. Fictional vehicle designation for the programme's own stack: <…>."

This third option is available if it fits the story: a real provider (e.g. Arianespace) is named for the **service** it provides, and a fictional **vehicle designation** is given to the programme's own launch stack. It is not silently preferred or silently dropped.

**Consequences.** The four canon rows at `docs/SCENARIO.md:22, :124, :193, :230` are amended only where the human's wording requires it (typically the vehicle name at `:124` and the launcher / vehicle at `:22`); the provider-side value at `:230` may stay. Gate 004-B still binds if a real institution is named. Gate 004-E lists the proposed amendments.

## Fill-in canon field table (every value marked `human-only`)

| Field | `human-only` value | Required? | Source / format note |
| --- | --- | --- | --- |
| Provider name (public string) | _human-only_ | yes, for B and C | Public copy and dossier use this string verbatim. |
| Vehicle name (public string) | _human-only_ | yes, for A (verify against SCENARIO:24), C | The string the public reads; dossier and wiki page match. |
| Vehicle class / configuration | _human-only_ | yes, for B and C | E.g. "single-stick kerosene–liquid-oxygen launcher with two strap-on boosters"; must be plausible, must not be exact performance figures. |
| Operator or launch facility | _human-only_ | if not real, required | Real (Kourou / Europe's Spaceport) or fictional. If fictional, the location / operator name is canonical. |
| Heritage / first-flight framing | _human-only_ | required for B and C | Whether the vehicle has prior flights, a maiden-flight year, an in-fiction test record, or a fictional operator's existing launch record. |
| Public copy names the launcher as… | _human-only_ | required | "Ariane 64" for A; the human-supplied vehicle name for B and C. Wiki `vehicle` page title and summary use the same string. |
| Real-world sources that may be cited | _human-only_ | if A: cite SCENARIO:284-296 + only what step 004 needs; if B: source the real analogue only | Each citation appears in `.agents/work/sources/004-launch-provider.md` with publisher, date, access date, and a one-line statement of support. |
| The vehicle must never be said to be… | _human-only_ | required | At minimum: not crew-rated, not reusable, not in transit, not flight-ready, not on the pad, not integrated at the campaign site. Add anything else the human wants bound. |
| Release-order advance to step 004 | _human-only_ | required (Gate 004-C) | Verbatim: "Step 004 release order advance: approved" (or its negative). The publication FLIP for the launch-vehicle wiki node is the merged editorial role's recorded release decision on its own release card; the human sentence is the release-order advance, not the flip itself. |
| Public title and byline (article 004, wiki page title) | _human-only_ | required (Gate 004-D) | Verbatim: "004 public title: <…>" · "004 author: <name or 'anonymous'>". |

## Real-world grounding (cited, separated from scenario fact)

These are the only sources the article and the dossier may cite. Every claim in the eventual article must trace to one of these, to released canon, or to the human-set fields above.

Reuse the locked-canon sources already in `docs/SCENARIO.md` §Real-world grounding sources:

- **5. Ariane 6 User's Manual** — https://www.arianespace.com/wp-content/uploads/2021/03/Mua-6_Issue-2_Revision-0_March-2021.pdf — reference escape performance, payload environment, mission-interface constraints. *Used for any general "Ariane 6 family" framing only.*
- **6. Arianespace's first operational Ariane 64 report** — https://newsroom.arianespace.com/arianespace-successfully-launches-32-amazon-leo-satellites-with-the-first-ariane-64/?lang=eng — real four-booster configuration and Kourou operations context. *This is the source the eventual Ariane 64 framing must cite for the four-booster / Kourou operations fact.*
- **4. Earth–Mars transfer study** — https://www.esa.int/gsp/ACT/doc/MAD/pub/ACT-RPR-MAD-2003-DESIGN%20OF%20EARTH-MARS%20TRANSFER%20TRAJECTORIES%20USING%20EVOLUTION-BRANCHING.pdf — 17 February 2031 departure and 210.7-day outbound transfer as the scenario planning anchor. *Cite for the transfer-window framing; cite SCENARIO.md for the planning anchor as scenario fact.*

Add only what step 004 needs, if Option A or Option C:

- **Ariane 6 User's Manual Issue 2 Revision 0 (March 2021), §Mission analysis, payload interface, and launch site** — for the Ariane 64 payload-adapter and Kourou interface framing. *Cite by section, not the whole document.*
- **CSG / Europe's Spaceport description (Guiana Space Centre, Kourou)** — Arianespace's "Launch site" pages or equivalent institutional description of the ELA-4 launch complex and its campaign flow. *Real, accurate, non-endorsing.*
- **The Ariane 64 launch service description** — Arianespace's product description of the four-booster Ariane 6 variant, including its payload capacity envelope (qualitative, no exact figures for the fictional programme). *Real, accurate, non-endorsing.*
- **Integration campaign description (CSG / ELA-4)** — Arianespace's general description of payload-to-launch-vehicle integration at ELA-4. *Real, accurate, non-endorsing; do not paraphrase as the fictional programme's specific campaign.*

If Option B or a hybrid Option C: the sources are the analogue the human names. No real launch vehicle is cited as the fictional provider.

## Accurate / non-endorsing wording rules (Gate 004-B)

These rules bind the public surface whenever a real provider, real operator, or real launch facility is named (Options A, C, and any B variant that names a real institution):

1. The fictional Red Horizon programme is labelled as fictional on every public surface (this is the standing rule from `docs/SCENARIO.md:3-6`).
2. No implication of participation, approval, funding, or endorsement by the real provider, operator, or institution. `docs/SCENARIO.md:281` is explicit: "Real institutions, including FEI STU and **Arianespace**, require explicit review before any public mention. Their appearance in this scenario does not imply real participation."
3. No real price, cost, schedule, or performance figure presented as the fictional programme's. The €180 M launch-service line at `docs/SCENARIO.md:230` is a **programme planning allowance**, not a price or commitment from any real supplier (`docs/SCENARIO.md:255-258`).
4. Nothing in the article or the dossier reads as an advertisement, endorsement, recommendation, or sales pitch for the real provider. Tonally, the launch architecture is a technical fact about how the mission is being assembled, not a marketing line about the launcher.
5. The wiki `vehicle` page and the article distinguish between **the real provider's public record** (the launcher's documented public history, accurate) and **the fictional programme's interface** (the payload adapter, the injection segment, the integration campaign as the mission uses them). The two are documented separately, not blended into one undifferentiated claim.
6. The verbatim wording must be reviewed by the human story owner before publication (Gate 004-B). The merged editorial role records the release decision; the human story owner reviews the wording.

## Withheld-fact list (containment, for every card that could touch public text)

The canon package itself cannot become the leak. Every card that touches public text must carry this list verbatim:

- No launch day, time, or date beyond what the released record already carries. Article 001 released the **2031 launch window** (article 001 summary and line 65). The launch day belongs to step 005 (`docs/timeline/005-launch.md`).
- No statement or implication that the vehicle is in transit, integrated at the pad, or flight-ready. The step 004 announcement is a decision, not a launch-date promise (`docs/timeline/004-launch-provider.md`).
- No landing site, no Mars surface imagery, no Asteria Field material beyond what article 001 already released. The H1 decision of 2026-09-17 (`docs/SCENARIO.md:279`) still bars landing-design facts from prose, alt text, and captions: no ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifiers. The surface mission lifetime — two and two Mars years, 1,374 Earth days — was released for article 001 and is not reusable here without the editorial gate's clearance.
- No performance, mass, cost, or specification figure that is not approved canon. No real provider's price or performance presented as the programme's.
- No real institution or provider named without Gate 004-B.
- No step 005–011 fact, no private-calendar fact, no unreleased detail from `docs/timeline/`.
- No commit message that names a provider, a vehicle designation, or a date that step 004 has not released (`docs/INSTRUCTIONS.md`).

## What this proposal does and does not do

- **Does:** present the fork; record every canon field the human must set; cite the real-world sources; record the accurate / non-endorsing wording rules; record the withheld-fact list for downstream cards.
- **Does not:** author canon; edit `docs/SCENARIO.md`, `docs/timeline/`, or any dossier; advance the release order; decide releasability or canon confirmation; flip any publication state; write article prose, wiki prose, or a dossier; generate or select imagery; build, deploy, or publish anything; commit or push.

## Inputs this proposal rests on

- `docs/SCENARIO.md` — mission identity row `Launcher = Ariane 64 from Europe's Spaceport near Kourou, French Guiana` (`:22`), flight-system element `an Ariane 64 injection and payload-adapter segment` (`:124`), calendar row `17 February 2031 — Ariane 64 launch and Earth departure` (`:193`), cost row `Ariane 64 launch service and Kourou campaign — €180 M` (`:230`), release control `Ariane 64 waits for step 004` (`:277`), real-institution review rule (`:281`), equal-governance threshold (`:44-53`).
- `docs/timeline/004-launch-provider.md` — private situation, allowed public angle, constraints and decisions.
- `docs/timeline/005-launch.md` — step 005 owns the launch day; step 004 must not pre-empt it.
- `docs/timeline/README.md` — timeline invariants: do not invent calendar dates, mission sol counts, mass figures, partner names, or launch provider until approved as canon.
- `.agents/work/briefs/003-vehicle-design.md` — article 003 forbade the launch vehicle outright ("No Ariane 64 or other specific launch vehicle named" — step 004 owns it), and the 003 corrective `t_9f191d53` tightened the wording when a related landing-site claim was rejected for not being canon-traceable.
- `docs/INSTRUCTIONS.md` — source-of-truth order, containment rules, public-timing rule, no-private-timeline-in-public rule.
- The wiki tree plan (`.agents/work/briefs/wiki-tree-plan.md`) and its release plan (`.agents/work/releases/wiki-001-vehicle.md`) — wiki tree structure (`area`, `vehicle`, `project`); section labels `Landing Zones` / `Vehicles` / `Project` (`website/src/lib/wiki-query.ts`); the wiki vehicle-page parent card that this proposal asks the planner to create does not duplicate the area or project parent cards (`t_f9298a63`, `t_927e91b5`).
- `website/src/lib/media.ts` and the article 003 key `vehicle-references` — the article 004 key (if any) needs a new media-key contract plus a dev card, and the dossier plate needs an approved asset under `docs/` first; that dependency is written into the parent card, not assumed.

_This record is working material, not canon. Canon lives in `docs/SCENARIO.md`. No content is published by this proposal._