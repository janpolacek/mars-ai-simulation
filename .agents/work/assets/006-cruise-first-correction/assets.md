# Asset manifest: 006-cruise-first-correction

Card: `t_a751ca6a` (Create visual assets: 006-cruise-first-correction) — stage `visuals`, **text-only**.
Article: `website/news/006-cruise-first-correction.mdx` — route `/news/006-cruise-first-correction/` once published.
Linked release-order step: `006-cruise` (page 1 — first planned trajectory-correction opportunity; reviewer `t_f0689b4a` confirms the mapping).

## Decision

**No new imagery: text-only capsule.**

The article carries no `media` key and no image of any kind. The step-006 brief
(`.agents/work/briefs/006-cruise.md` §Assets and image decision :34-36) fixes
`no new imagery: text-only updates` for all three cruise pages: no approved
in-transit visual exists, the Ariane plates under `docs/vehicles/ariane/` are
launch/vehicle plates and none of them carries an in-cruise moment, and
`travelling-to-mars.png` remains gated. Generating a cruise image would invent
in-transit architecture, real-institution marks, or later-step facts the
approved assets do not support. The article graph must not generate a cruise
scene.

The in-transit plate `docs/vehicles/ariane/travelling-to-mars.png` remains
**gated** and is **not** reused, imported, renamed, cropped, or relabelled as a
cruise-update, in-cruise, trajectory, or documentary-evidence image anywhere in
this package, and no copy of it is placed for this article. (Brief :36, card
requirement; build guards `website/scripts/guards.mjs:68-77` — the plate
carries a roundel mark and unapproved burned-in text and sits in
`gatedFilePathSegments` at :77 — and `website/test/guards.test.mjs:831`, where
`withheldArianePlates = ['travelling-to-mars.png']` pins the fail-closed state;
the 005-manifest release-control finding at
`.agents/work/assets/005-launch/assets.md:77-79` records the same standing.)

**No candidate exists.** No `image_generate` call was made (provider
`openai-codex`, model `gpt-image-2-medium` **not** invoked), no ComfyUI server
was started, no prompt was written, and no local generator or image tool was
used. There is nothing in the profile image cache for this slug, and no
`imagegen_request_id` exists for any candidate here; a text-only card needs no
backend probe because there is no generation to authorise.

## Manifest metadata

| Field            | Value                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug             | `006-cruise-first-correction`                                                                                                                                                                                                 |
| Timeline step    | ``006-cruise`` (page 1 — first planned trajectory-correction opportunity); locked milestone row ``docs/SCENARIO.md:194`` (`3 March 2031                                                                                       | First planned trajectory-correction opportunity`) |
| Brief            | `.agents/work/briefs/006-cruise.md` §Assets and image decision (:34-36 — no new imagery: text-only updates, no in-cruise plate, `travelling-to-mars.png` gated)                                                               |
| Source pack      | `.agents/work/sources/006-cruise-first-correction.md` (claims C1–C11 per parent handoff)                                                                                                                                      |
| Canonical source | `docs/SCENARIO.md:194`; released step-005 launch page (`/news/005-launch/`, 17 February 2031 launch, next-checks naming) — both already released; Ariane 64 dossier `docs/vehicles/ariane/ariane-64.md`                       |
| Draft            | `website/news/006-cruise-first-correction.mdx` — SHA-256 `9193de2cf44e109524a449bd35c11fbec0710adb13d09332edda44e281f44570`, 3,401 B, 57 lines, `publication: draft`, `simulatedDate` unset, **no `media*` field** (verified) |
| Decision         | `no new imagery: text-only capsule`                                                                                                                                                                                           |
| Placement        | `none` — no media key, no figure, no card art, no OG image                                                                                                                                                                    |
| Candidates       | `0` — none generated, none proposed, none selected                                                                                                                                                                            |
| Generation       | None. `image_generate`, ComfyUI, and the retired local generator were **not** used.                                                                                                                                           |
| Card             | `t_a751ca6a` — `mars-ai-simulator-visuals`, run 321, 2026-09-19                                                                                                                                                               |
| Status           | Manifest complete; reviewer records the release decision and confirms the 006-cruise page-1 mapping.                                                                                                                          |
| Downstream       | Editorial final gate `t_f0689b4a` (owns the release decision; confirms the capsule mapping and `simulatedDate: 2031-03-03` from `docs/SCENARIO.md:194`)                                                                       |

## Candidate record

| Field                    | Value                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate count          | **0** (none)                                                                                                                                                        |
| Proposed stable filename | — (none)                                                                                                                                                            |
| Subject / story step     | — (none; the private milestone is the 2031-03-03 first planned trajectory-correction opportunity, released in fiction by this capsule's own draft, not by an image) |
| Caption                  | — (no caption: no media)                                                                                                                                            |
| Alt text                 | — (no alt: no media)                                                                                                                                                |
| Private provenance       | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance)                                                                                    |
| Rights / permission      | — (no generated work; no ariane plate reused here, `travelling-to-mars.png` stays gated)                                                                            |

The absence of candidates is the deliverable: the article resolves as a
text-only cruise-update capsule on the `/news/` index and its own route,
rendering no figure, card image, or carousel slide.

## Forbidden / relabel boundary

- `docs/vehicles/ariane/travelling-to-mars.png` is **not** reused, imported,
  renamed, or described as a cruise / in-transit / trajectory / documentary
  image. No asset name, caption, alt, or link in this package relabels it —
  there is no media placement of any kind. (Brief :36, card requirement,
  guards `website/scripts/guards.mjs:77`, `website/test/guards.test.mjs:831`.)
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's
  Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no
  telemetry, no delta-v / burn-time figure, no landing ellipse, no entry-
  readiness claim before step 007, no landing/surface fact, no later-step
  event (steps 007–011), and no invented figure appears in any asset name,
  caption, or alt — there are no assets, so there is no surface for a leak.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

| Check                              | Method                                                                                                                                                                                                                                                                           | Result                                                                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Draft media presence               | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)'`                                                                                                                                                                                                          | **no `media*` field** — text-only confirmed (grep exit 1)                                                                       |
| Forbidden strings in draft         | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|ela-4\|telemetry\|delta-v\|burn time\|landing ellipse\|traverse\|sample\|egress\|16 september\|17 september\|23 september\|30 september\|31 october\|18 april\|docs/timeline\|travelling-to-mars\|canonical\.png'` | **no matches** (grep exit 1) — no launch-date leak beyond the released 17 February 2031, no later-step fact, no relabel surface |
| `travelling-to-mars.png` reference | `grep -n 'travelling-to-mars'` (draft + manifest)                                                                                                                                                                                                                                | not referenced by the draft; named in this manifest only to record the gating fact                                              |
| `docs/timeline` leak               | `grep -rn 'docs/timeline'` draft + manifest                                                                                                                                                                                                                                      | none in the draft                                                                                                               |
| Draft hash                         | `sha256sum`                                                                                                                                                                                                                                                                      | `9193de2cf44e109524a449bd35c11fbec0710adb13d09332edda44e281f44570` (3,401 B, 57 lines)                                          |
| Manifest hash                      | `sha256sum` (post-write)                                                                                                                                                                                                                                                         | recorded in the card handoff; working paper, not canon                                                                          |
| Generation backend                 | role rule + skill                                                                                                                                                                                                                                                                | **not probed** — deliberately: no generation is attempted on a text-only card; nothing to authorise                             |
| Card graph                         | `kanban_show` child `t_f0689b4a`                                                                                                                                                                                                                                                 | review gate waits on this card; parent draft done                                                                               |
| Repository hygiene                 | `git status --short`                                                                                                                                                                                                                                                             | this card writes only `.agents/work/assets/006-cruise-first-correction/assets.md`; nothing committed                            |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon,
  and adds no media placement. The capsule's public facts are the locked
  milestone row (`docs/SCENARIO.md:194`) plus released step-005 context (17
  February launch, destination name, next-checks naming — all already public);
  the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator
  name, no unreleased milestone value, no trajectory parameter, and no
  later-step fact appears in any asset string — there are no assets, captions,
  or alt texts to leak, and `travelling-to-mars.png` is untouched and stays
  fail-closed in the build.
- **Review outstanding:** `mars-ai-simulator-reviewer` must confirm the
  `006-cruise` page-1 mapping, the `3 March 2031` milestone wording, the
  `simulatedDate: 2031-03-03` line from `docs/SCENARIO.md:194`, and record the
  release decision on `t_f0689b4a`.
- **Next owner/action:** reviewer (child gate `t_f0689b4a`); no dev/build work
  is required for any media — the article publishes text-only with no guard
  flip and no media-key wiring.
