# Brief: 004-launch-provider

## Article metadata

| Field             | Value                                                                  |
| ----------------- | ---------------------------------------------------------------------- |
| Slug              | `004-launch-provider`                                                   |
| Title             | _(to be confirmed by human story owner — Gate 004-D)_                  |
| Author            | _(to be confirmed by human story owner — Gate 004-D)_                  |
| Timeline step     | `004-launch-provider`                                                   |
| Status            | `draft`                                                                |
| Canonical sources | `.agents/work/sources/004-launch-provider.md` _(planned, not yet run)_ |

> The article body cannot be drafted until Gate 004-A on `004-launch-provider-gates` records the canon choice (Option A / B / C, see `.agents/work/briefs/004-launch-provider-canon.md`). The draft card `t_<draft>` is parent-gated on `004-launch-provider-gates` so it cannot become `ready` before that sentence exists. This brief is therefore written as **the brief the writer will be handed**, not as a complete article brief with prose attached.

## Brief

_(Human story owner: the public-safe article brief is filled in once Gate 004-A records the canon choice. Below is the shape of what it must say — the exact public-angle sentence comes from the human, not from this brief.)_

### Allowed angle (from `docs/timeline/004-launch-provider.md`)

> Explain why a launch architecture was chosen and what remains before flight: integration, tests, and final readiness. Candidate media is a non-sensational mission-architecture diagram or approved launch integration image.

The article may state:

- That the coalition has selected an Earth-to-Mars delivery architecture (high-level: launch vehicle, cruise stage, communications plan, high-level EDL concept — `docs/timeline/004-launch-provider.md`).
- Why the architecture was chosen, at the level the canon settles (the human-supplied values from Gate 004-A; see the canon proposal's fill-in table).
- What remains before flight: integration, tests, and final readiness — phrased as a status, not as a launch-date promise.
- The accurate, non-endorsing description of the launch service and the launch facility (Options A and C only, and only after Gate 004-B).
- The fictional programme's interface to the launch service (payload adapter, injection segment, integration campaign context) as described in the dossier, separated from the real provider's public record.
- The 2031 launch window already released by article 001 (`/news/001-project-announcement/`). The launch day belongs to step 005 (`docs/timeline/005-launch.md`).

### Forbidden angle (spoilers)

The article must NOT state:

- Any launch day, time, or date beyond the **2031 launch window** already released by article 001. No 17 February 2031 calendar row (the calendar row is private canon at `docs/SCENARIO.md:193`).
- Any statement or implication that the vehicle is **in transit**, **integrated at the pad**, or **flight-ready** — the announcement is a decision, not a launch-date promise (`docs/timeline/004-launch-provider.md`).
- Any landing site, Mars surface imagery, or Asteria Field material beyond what article 001 already released. Landing-design facts are withheld for prose, alt text, and captions per `docs/SCENARIO.md:279` (H1 decision 2026-09-17 option i): no ellipse geometry, no P0 touchdown zone, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifiers. The surface mission lifetime — two Mars years, 1,374 Earth days — was released for article 001 and is not reusable here without the editorial gate's clearance.
- Any performance, mass, cost, or specification figure that is not approved canon. The €180 M launch-service line is a programme planning allowance, not a price or commitment from any real supplier (`docs/SCENARIO.md:230`, `:255-258`).
- Any real institution or provider named without Gate 004-B's verbatim approval sentence (`docs/SCENARIO.md:281`).
- Any step 005–011 fact, any private-calendar fact, any unreleased detail from `docs/timeline/`.
- Any cost breakdown, partner share, or budget figure beyond what article 001 already published.

### Canonical sources

The article's source text is `.agents/work/sources/004-launch-provider.md` (planned, see Deliverable A2 / research card). It will trace every claim to:

1. **Released canon and the private timeline** — only what the released timeline step and `docs/SCENARIO.md` allow at step 004.
2. **The dossier** (after Gate 004-A) — `docs/vehicle/<launcher>.md`, the launch-vehicle dossier created by the dossier card (also parent-gated on `004-launch-provider-gates`).
3. **The real-world grounding sources** listed in `.agents/work/briefs/004-launch-provider-canon.md` — Options A and C only, after Gate 004-B.

### Required containment checklist (written into the continuity / editorial gate)

- [ ] No launch day, time, or date beyond the **2031 launch window** already released by article 001.
- [ ] No statement that the vehicle is in transit, integrated at the pad, or flight-ready.
- [ ] No landing site, no Mars surface imagery, no Asteria Field material beyond what article 001 released.
- [ ] No performance, mass, cost, or specification figure that is not approved canon.
- [ ] No real institution or provider named without Gate 004-B's verbatim approval.
- [ ] No step 005–011 fact, no private-calendar fact, no unreleased detail from `docs/timeline/`.
- [ ] If Option A or C — the launcher's real public record is documented separately from the programme's interface.
- [ ] If Option B or C — the fictional provider / vehicle names match the human-set canon values from Gate 004-A exactly.
- [ ] The article agrees with `docs/timeline/004-launch-provider.md` (private situation) and with `docs/SCENARIO.md` (released canon at step 004).
- [ ] "Design decision" or "architecture decision" does not imply a built vehicle or a launch-ready stack.
- [ ] No commit message that names a provider, a vehicle designation, or a date that step 004 has not released.

## Media

The IMAGES card (`t_<images>`, parent-gated on `004-launch-provider-gates`) decides new vs reuse first.

- **Reuse first.** Check `docs/vehicle/`, `docs/area/`, `docs/brand/`, and approved renders recorded in earlier manifests under `.agents/work/assets/` for an image that already carries the moment. If reuse is enough, the card body states `no new imagery: reuse <exact path>` and the asset manifest records the reuse.
- **New imagery options** (the timeline step's candidates): a mission-architecture diagram, or an approved launch integration image. Any new launcher imagery must:
  - have approved canon references before any editorial scene image (the RH-01 precedent),
  - need a **new media key** plus a dev card (Options A / C only — `website/src/lib/media.ts:17` does not have a launch / launcher key today; the dev card is parent-gated on an approved asset under `docs/`),
  - be GPU work: one image card per article, never two that can become ready at once (one 8 GB local GPU, one generation at a time).

The visuals role owns how the image is rendered (model, prompt, ComfyUI lifecycle). The IMAGES card body may require the `comfyctl status` report in the handoff but must not dictate prompts or models.

## Acceptance criteria

- Every material claim in the brief traces to a source listed above, to released canon, or is an explicit unresolved note in `.agents/work/sources/004-launch-provider.md`.
- No fact from `docs/timeline/` steps 005–011 appears.
- No landing-site, Mars-surface, or Asteria Field material beyond what article 001 released.
- No real institution or provider named without Gate 004-B's verbatim approval sentence on the gate card.
- The draft preserves `publication: draft` until the editorial gate's recorded release decision (which requires Gate 004-A, 004-B if applicable, 004-C, 004-D all answered) and the dev card's verified build.
- The IMAGES card has either `no new imagery: reuse <exact path>` recorded in its body, or a full visual brief (moment, placement, candidates, aspect ratio, reference assets, allowed canon facts, forbidden spoiler facts, intended alt-text meaning, manifest path).
- No commit, no push, no `website/` frontmatter edit, no publication by this brief's authoring card (`t_5fbd61ee`).

## Out of scope

- Deciding the provider, the vehicle, or any canon value — that is Gate 004-A and the human story owner.
- Amending `docs/SCENARIO.md` — that is the human story owner (Gate 004-E).
- Advancing the release order — that is Gate 004-C and the human story owner.
- Authoring the article prose (the writer card).
- Writing the launch-vehicle dossier (the dossier card, project-documentation).
- Selecting or generating imagery (the visuals card).
- SEO wording (the seo card), editorial review (the editorial card), and build / deploy (the dev card).
- Editing `website/`, flipping any publication state, running a build or a deploy, publishing.