# Public-safe brief: milestone-2031-stack-arrival

## Package metadata

- Slug: `milestone-2031-stack-arrival`
- Proposed public angle: a short mission-status capsule about the Red Horizon One flight stack reaching the launch campaign site.
- Linked release-order step: `005-launch` (the capsule is a pre-launch status update in the launch sequence; the reviewer must confirm this mapping before any graph is created).
- Locked milestone source: `docs/SCENARIO.md:191` — `13 January 2031 | Flight stack arrives at Kourou`.
- Public wording boundary: use `launch campaign site` in prose unless the reviewer has a separately recorded approval for the real facility name. Do not expose the private timeline or the locked scenario document on the public route.
- Proposed reviewer-assigned frontmatter line: `simulatedDate: 2031-01-13`

## Release goal

Give readers one compact, concrete update: the already-selected Red Horizon One flight architecture has reached the next ground-based phase of its campaign. Explain that the stack is the mission hardware travelling together under the selected launch architecture, and that arrival starts site-side integration and readiness work rather than proving launch success.

This is a planning brief only. It does not establish public canon, choose a release date, approve wording, or authorise publication.

## Allowed facts

The writer may use only these facts, with each material sentence traced in the source pack:

- Red Horizon is a fictional, AI-assisted Mars exploration programme.
- The mission is uncrewed and combines a launcher interface, cruise stage, entry/descent/landing hardware, and RH-01 Pathfinder into one Earth-to-Mars flight stack. Use only the level of detail needed to explain “flight stack”; do not add new subsystem specifications.
- Ariane 64 is the released launch-vehicle designation for the architecture selected in article 004. It is a real launcher designation used here for a fictional programme; no real provider, operator, facility, participation, approval, or endorsement may be implied.
- The locked milestone is that the flight stack arrives at the launch campaign site on 13 January 2031. The public article may describe the arrival as the capsule’s event, subject to reviewer confirmation of the release mapping.
- Arrival marks a ground-campaign transition: integration, site checks, and readiness work remain. This must be phrased as process context, not as a claim that any specific test, review, or launch-readiness gate has passed.
- Previously released architecture context may link to `/news/004-launch-provider/` and the RH-01 vehicle article only when needed for comprehension.
- The site must identify Red Horizon as fictional and AI-assisted, and generated or illustrative media must never be presented as documentary evidence.

## Forbidden / spoiler facts

The draft, SEO package, filenames, links, captions, alt text, and summaries must not include:

- Any private timeline path or copied private timeline wording.
- The exact launch day, launch time, countdown, launch-readiness review, telemetry, weather, fuelling, pad activity, or claim that launch is imminent; those are outside this capsule's approved scope.
- Any claim of successful launch, Earth departure, cruise checkout, trajectory correction, anomaly status, landing, surface operations, science result, or later milestone.
- Asteria Field, landing coordinates, landing ellipse, Mars-surface imagery, traverse plans, hazards, or any surface target.
- Real facility, operator, provider, agency, company, or institution names, including Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA, or any implied partnership, unless a current reviewer record explicitly clears the exact public wording. The safe default is `launch campaign site`.
- Unapproved mass, performance, cost, schedule, technical-readiness, or exact integration claims.
- Any wording that turns illustrative artwork into a photograph or documentary record.
- Any new canon, public timing decision, release decision, or publication statement.

## Assets and image decision

Text-only is the default and is acceptable for this short status capsule. No approved asset currently carries the specific arrival moment without risking an invented launch-site scene. The article graph should therefore request no new imagery unless the writer or reviewer demonstrates a comprehension need. If the graph includes an IMAGES card, its brief must say `no new imagery: text-only capsule` and require a manifest at `.agents/work/assets/milestone-2031-stack-arrival/assets.md` documenting that decision; it must not generate an arrival scene. The existing Ariane 64 studio reference is architecture context only and must not be relabelled as a stack-arrival or launch-site image.

## Draft contract

- Target: `website/news/milestone-2031-stack-arrival.mdx`.
- Keep `publication: draft` until the reviewer records approval and a release decision.
- Writer owns the integrated SEO pass: search intent, metadata, headings, internal links, and any alt-text recommendation. No separate SEO card.
- Writer leaves `simulatedDate` unset; the reviewer assigns and verifies exactly `simulatedDate: 2031-01-13` from the locked milestone table and records the source line.
- Keep the capsule short: one central update plus only the architecture context needed to understand it.

## Acceptance criteria for downstream work

- Every material claim has a canonical source record in `.agents/work/sources/milestone-2031-stack-arrival.md` or is explicitly unresolved.
- The article distinguishes the fictional programme from real launcher history and does not imply endorsement or participation.
- The article uses the generic `launch campaign site` wording unless the reviewer records a cleared alternative.
- No private timeline text or later-step fact appears in prose, metadata, links, filenames, captions, or alt text.
- The visual decision is explicit: text-only/no new imagery, with a manifest if the graph creates the IMAGES card.
- Reviewer checks chronology, canon, confidentiality, and the exact simulated-date line; dev validation waits for that recorded release decision.
- No public file, canon change, release decision, commit, or push is part of this planning task.

## Next serial graph recommendation

After this brief and source pack are reviewed, create one serial graph for this capsule: research/source validation -> writer draft with integrated SEO -> one text-only/no-new-imagery manifest card if required by the graph contract -> reviewer continuity/editorial gate and release decision -> developer build/publish validation. Only after that graph is complete should the planner consider the separate `005-launch` factual launch update, which must remain downstream and must not be pre-announced by this capsule.

## Handoff

- Next owner: `mars-ai-simulator-planner`, to review this brief/source pack and create the bounded serial graph.
- Review still outstanding: reviewer-in-chief must confirm the `005-launch` mapping, public wording, simulated date, and release scope; no approval is implied here.
