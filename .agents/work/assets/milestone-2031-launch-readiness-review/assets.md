# Asset manifest: milestone-2031-launch-readiness-review

Card: `t_86be9858` (Create visual assets: milestone-2031-launch-readiness-review) — stage `visuals`, **text-only**.
Article: `website/news/milestone-2031-launch-readiness-review.mdx` — route `/news/milestone-2031-launch-readiness-review/` once published.
Linked release-order step: `005-launch` (launch readiness review capsule; reviewer `t_98f4e551` confirms the mapping).

## Decision

**No new imagery: text-only capsule.**

The article carries no `media` key and no image of any kind. The
launch-readiness-review milestone is procedural: no approved asset documents
the specific review moment, and generating one would invent control-room,
pad, telemetry, or launch-status details the approved assets do not support
(brief line 50, source pack :141-150). The article graph must not generate a
review scene.

The studio launcher reference `docs/vehicles/ariane/canonical.png` remains
architecture context only (the step-004 Ariane 64 studio plate). It is **not**
reused, imported, renamed, or relabelled as a readiness-review, control-room,
launch-site, or documentary-evidence image anywhere in this package, and no
copy of it is placed for this article. (Card requirement, brief :50, source
pack :143-145.) Its own release and alt contract are handled by the
`launch-vehicle-reference` key on the `/news/003-vehicle-design/` surface and
by the reuse records in the 004/005 visual chains; this capsule has no media
placement.

**No candidate exists.** No `image_generate` call was made (provider
`openai-codex`, model `gpt-image-2-medium` **not** invoked), no ComfyUI server
was started, no prompt was written, and no local generator or image tool was
used. There is nothing in the profile image cache for this slug, and no
`imagegen_request_id` exists for any candidate here; a text-only card needs no
backend probe because there is no generation to authorise.

## Manifest metadata

| Field            | Value                                                                                                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug             | `milestone-2031-launch-readiness-review`                                                                                                                                                                          |
| Timeline step    | ``005-launch`` capsule — launch readiness review; locked milestone row ``docs/SCENARIO.md:192`` (`11 February 2031                                                                                                | Launch Readiness Review`) |
| Brief            | `.agents/work/briefs/milestone-2031-launch-readiness-review.md` §Assets and image decision (:50 — text-only default, no new imagery, no review scene)                                                             |
| Source pack      | `.agents/work/sources/milestone-2031-launch-readiness-review.md` §Asset finding (:141-150); claims C1–C7 (:29-37)                                                                                                 |
| Canonical source | `docs/SCENARIO.md:192`; released step-004 architecture context (`website/news/004-launch-provider.mdx`); Ariane 64 dossier `docs/vehicles/ariane/ariane-64.md` (designation only)                                 |
| Draft            | `website/news/milestone-2031-launch-readiness-review.mdx` — SHA-256 `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37`, 2,883 B, 56 lines, `publication: draft`, **no `media*` field** (verified) |
| Decision         | `no new imagery: text-only capsule`                                                                                                                                                                               |
| Placement        | `none` — no media key, no figure, no card art, no OG image                                                                                                                                                        |
| Candidates       | `0` — none generated, none proposed, none selected                                                                                                                                                                |
| Generation       | None. `image_generate`, ComfyUI, and the retired local generator were **not** used.                                                                                                                               |
| Card             | `t_86be9858` — `mars-ai-simulator-visuals`, run 315, 2026-09-19                                                                                                                                                   |
| Status           | Manifest complete; reviewer records the release decision and confirms the 005-launch capsule mapping.                                                                                                             |
| Downstream       | Editorial final gate `t_98f4e551` (owns the release decision; confirms the capsule mapping and `simulatedDate: 2031-02-11` from `docs/SCENARIO.md:192`)                                                           |

## Candidate record

| Field                    | Value                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate count          | **0** (none)                                                                                                                                |
| Proposed stable filename | — (none)                                                                                                                                    |
| Subject / story step     | — (none; the private milestone is the 2031-02-11 launch readiness review, released in fiction by this capsule's own draft, not by an image) |
| Caption                  | — (no caption: no media)                                                                                                                    |
| Alt text                 | — (no alt: no media)                                                                                                                        |
| Private provenance       | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance)                                                            |
| Rights / permission      | — (no generated work; `canonical.png` not reused here)                                                                                      |

The absence of candidates is the deliverable: the article resolves as a
text-only status capsule on the `/news/` index and its own route, rendering no
figure, card image, or carousel slide.

## Forbidden / relabel boundary

- `docs/vehicles/ariane/canonical.png` is **not** reused, imported, renamed, or
  described as a readiness-review / control-room / launch-site / documentary
  image. No asset name, caption, alt, or link in this package relabels it.
  (Card requirement, brief :50, source pack :143-145, Gate 004-B
  facility-name withhold.)
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's
  Spaceport, Arianespace, ArianeGroup, ESA), no launch-day/launch-time
  (17 February 2031 is absent), no countdown/readiness/telemetry detail, no
  review outcome, and no later-step fact appears in any asset name, caption,
  or alt — there are no assets, so there is no surface for a leak.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

| Check                      | Method                                                                                                                                                                     | Result                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Draft media presence       | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)'`                                                                                                    | **no `media*` field** — text-only confirmed (grep exit 1)                                                       |
| Forbidden strings in draft | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|ela-4\|17 february\|february 17\|launch date\|countdown\|telemetry\|asteria\|docs/timeline\|canonical\.png'` | **no matches** (grep exit 1) — no launch date, no later-step fact, no relabel surface                           |
| `canonical.png` in draft   | `grep 'canonical.png'`                                                                                                                                                     | not referenced — no relabel                                                                                     |
| `docs/timeline` leak       | `grep -rn 'docs/timeline'` draft + manifest                                                                                                                                | none                                                                                                            |
| Draft hash                 | `sha256sum`                                                                                                                                                                | `ac0b330d6c60e6fb61b4bdddfa9255b6851534184de7873c4c463bc8eafdae37` (2,883 B, 56 lines)                          |
| Manifest hash              | `sha256sum` (post-write)                                                                                                                                                   | recorded in the card handoff; working paper, not canon                                                          |
| Generation backend         | role rule + skill                                                                                                                                                          | **not probed** — deliberately: no generation is attempted on a text-only card; nothing to authorise             |
| Card graph                 | `kanban_show` child `t_98f4e551`                                                                                                                                           | review gate waits on this card; parent draft done                                                               |
| Repository hygiene         | `git status --short`                                                                                                                                                       | this card writes only `.agents/work/assets/milestone-2031-launch-readiness-review/assets.md`; nothing committed |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon,
  and adds no media placement. The capsule's public facts are the locked
  milestone row and released step-004 architecture context, both already in the
  draft; the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator
  name, no launch date (17 February 2031), no review outcome, and no
  later-step fact appears in any asset string — there are no assets, captions,
  or alt texts to leak, and `canonical.png` is untouched.
- **Review outstanding:** `mars-ai-simulator-reviewer` must confirm the
  `005-launch` capsule mapping, the `11 February 2031` milestone wording, the
  `simulatedDate: 2031-02-11` line from `docs/SCENARIO.md:192`, and record the
  release decision on `t_98f4e551`.
- **Next owner/action:** reviewer (child gate `t_98f4e551`); no dev/build work
  is required for any media — the article publishes text-only with no guard
  flip and no media-key wiring.
