# Asset manifest: milestone-2031-stack-arrival

Card: `t_1b243ff5` (Create visual assets: milestone-2031-stack-arrival) — stage `visuals`, **text-only**.
Article: `website/news/milestone-2031-stack-arrival.mdx` — route `/news/milestone-2031-stack-arrival/` once published.
Linked release-order step: `005-launch` (pre-launch status capsule; reviewer `t_a3877295` confirms the mapping).

## Decision

**No new imagery: text-only capsule.**

The article carries no `media` key and no image of any kind. The arrival
milestone is procedural: no approved asset documents the specific stack-arrival
moment, and generating one would invent a launch-site scene the approved assets
do not support (brief line 45). The article graph must not generate an arrival
scene.

The studio launcher reference `docs/vehicles/ariane/canonical.png` remains
architecture context only (the step-004 Ariane 64 studio plate). It is **not**
relabelled as a stack-arrival or launch-site image anywhere in this package, and
no copy of it is placed for this article. Its own release and alt contract are
handled by the `launch-vehicle-reference` key on the `/news/003-vehicle-design/`
surface and by the reuse records in the 004/005 visual chains; this capsule has
no media placement.

**No candidate exists.** No `image_generate` call was made (provider
`openai-codex`, model `gpt-image-2-medium` **not** invoked), no ComfyUI server
was started, no prompt was written, and no local generator or image tool was
used. There is nothing in the profile image cache for this slug, and no
`imagegen_request_id` exists for any candidate here; a text-only card needs no
backend probe because there is no generation to authorise.

## Manifest metadata

| Field            | Value                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug             | `milestone-2031-stack-arrival`                                                                                                                                                                          |
| Timeline step    | ``005-launch`` capsule — arrival at the launch campaign site; locked milestone row ``docs/SCENARIO.md:191`` (`13 January 2031                                                                           | Flight stack arrives at Kourou``, public wording ``launch campaign site`) |
| Brief            | `.agents/work/briefs/milestone-2031-stack-arrival.md` §Assets and image decision (:45 — text-only default, no new imagery, no arrival scene)                                                            |
| Source pack      | `.agents/work/sources/milestone-2031-stack-arrival.md` §Asset finding (:130-138); claims C1–C8 (:28-38)                                                                                                 |
| Canonical source | `docs/SCENARIO.md:191`; released step-004 architecture context (`website/news/004-launch-provider.mdx`); Ariane 64 dossier `docs/vehicles/ariane/ariane-64.md` (designation only)                       |
| Draft            | `website/news/milestone-2031-stack-arrival.mdx` — SHA-256 `690cc299c61752a1e8e541908c9f60b665348e96dd0a3cc972e0f42dc23984e8`, 2,423 B, 47 lines, `publication: draft`, **no `media*` field** (verified) |
| Decision         | `no new imagery: text-only capsule`                                                                                                                                                                     |
| Placement        | `none` — no media key, no figure, no card art, no OG image                                                                                                                                              |
| Candidates       | `0` — none generated, none proposed, none selected                                                                                                                                                      |
| Generation       | None. `image_generate`, ComfyUI, and the retired local generator were **not** used.                                                                                                                     |
| Card             | `t_1b243ff5` — `mars-ai-simulator-visuals`, run 309, 2026-09-19                                                                                                                                         |
| Status           | Manifest complete; reviewer records the release decision and confirms the 005-launch mapping.                                                                                                           |
| Downstream       | Editorial final gate `t_a3877295` (owns the release decision; confirms the capsule mapping and `simulatedDate: 2031-01-13`)                                                                             |

## Candidate record

| Field                    | Value                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate count          | **0** (none)                                                                                                                              |
| Proposed stable filename | — (none)                                                                                                                                  |
| Subject / story step     | — (none; the private milestone is the 2031-01-13 stack arrival, already released in fiction by this capsule's own draft, not by an image) |
| Caption                  | — (no caption: no media)                                                                                                                  |
| Alt text                 | — (no alt: no media)                                                                                                                      |
| Private provenance       | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance)                                                          |
| Rights / permission      | — (no generated work; `canonical.png` not reused here)                                                                                    |

The absence of candidates is the deliverable: the article resolves as a
text-only status capsule on the `/news/` index and its own route, rendering no
figure, card image, or carousel slide.

## Forbidden / relabel boundary

- `docs/vehicles/ariane/canonical.png` is **not** reused, imported, renamed, or
  described as a stack-arrival / launch-site / Kourou image. No asset name,
  caption, alt, or link in this package relabels it. (Card requirement, brief
  :45, source pack :132-138, Gate 004-B facility-name withhold.)
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's
  Spaceport, Arianespace, ArianeGroup, ESA), no launch-day/launch-time/
  countdown/readiness/telemetry fact, and no later-step fact appears in any
  asset name, caption, or alt — there are no assets, so there is no surface for
  a leak.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

| Check                      | Method                                                                                                                                                                          | Result                                                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draft media presence       | frontmatter read, `grep -E '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)'`                                                                                        | **no `media*` field** — text-only confirmed                                                                                                         |
| Forbidden strings in draft | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|ela-4\|2021\|2029\|2030\|17 february\|february 17\|launch date\|countdown\|readiness review\|telemetry\|asteria'` | only line 29 `published a status, not a countdown` (negated denial, not a countdown claim — **flagged to reviewer as writer/SEO scope**, see below) |
| `canonical.png` in draft   | `grep 'canonical.png'`                                                                                                                                                          | not referenced — no relabel                                                                                                                         |
| `docs/timeline` leak       | `grep -rn 'docs/timeline'` draft + manifest                                                                                                                                     | none                                                                                                                                                |
| Draft hash                 | `sha256sum`                                                                                                                                                                     | `690cc299c61752a1e8e541908c9f60b665348e96dd0a3cc972e0f42dc23984e8` (2,423 B, 47 lines)                                                              |
| Manifest hash              | `sha256sum` (pre-edit)                                                                                                                                                          | `318d11c095fd80fe424633e8888e5529276997e01eb71238ae4ecd410fdcd597` (pre-edit working paper); this edit replaces it                                  |
| Generation backend         | role rule + skill                                                                                                                                                               | **not probed** — deliberately: no generation is attempted on a text-only card; nothing to authorise                                                 |
| Card graph                 | `kanban_show` child `t_a3877295`                                                                                                                                                | review gate waits on this card; parent draft `t_80456508` done                                                                                      |
| Repository hygiene         | `git status --short`                                                                                                                                                            | this card writes only `.agents/work/assets/milestone-2031-stack-arrival/assets.md`; nothing committed                                               |

**Observation routed to the reviewer (not a visuals finding):** the source
pack's forbidden ledger (:120) bans the word "countdown"; the draft's line 29
uses it in a negation (`"published a status, not a countdown"`). The writer's
handoff reported "no forbidden terms present"; the negation does not assert a
countdown, but the term matches the ledger string, so the editorial gate should
confirm its acceptability or adjust the line. No prose change was made by this
card.

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon,
  and adds no media placement. The capsule's public facts are the locked
  milestone row and released step-004 architecture context, both already in the
  draft; the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator
  name, no launch-day/later-step fact appears in any asset string — there are
  no assets, captions, or alt texts to leak, and `canonical.png` is untouched.
- **Review outstanding:** `mars-ai-simulator-reviewer` must confirm the
  `005-launch` capsule mapping, the `launch campaign site` wording, the
  `simulatedDate: 2031-01-13` line from `docs/SCENARIO.md:191`, the countdown
  word on draft line 29, and record the release decision on `t_a3877295`.
- **Next owner/action:** reviewer (child gate `t_a3877295`); no dev/build work
  is required for any media — the article publishes text-only with no guard
  flip and no media-key wiring.
