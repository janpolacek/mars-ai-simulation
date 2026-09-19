# Asset manifest: 007-landing-preparation

Card: `t_021419c1` (Create visual assets: 007-landing-preparation) — stage `visuals`, **image reuse**.
Article: `website/news/007-landing-preparation.mdx` — route `/news/007-landing-preparation/` once published.
Linked release-order step: `007-landing-preparation` (between 006-cruise close, 21 Aug 2031, and 008 landing confirmation, 16 Sep 2031).
Parent draft card: `t_084f4fbd` (writer; draft complete, SEO pass done).

> Decision: **no new imagery: reuse `docs/mission/cruise-final-approach.png`.**
> The plate is the cruise-stage stand-in firing its final correction burn with Mars
> rust-red disc ahead — the approach/preparation moment, pre-landing framing.
> No `landing-confirmation` plate is used (that depicts the rover already landed on
> the platform — a later-step image, forbidden by the brief).

## Decision

**No new imagery: reuse the approved `cruise-final-approach` plate.**

The article hero/card carries `media: cruise-final-approach` pointing at the
already-released `docs/mission/cruise-final-approach.png` plate (same stand-in
craft as the other mission-phase illustrations, final correction burn with Mars
ahead). The plate shows the approach/preparation moment — the spacecraft is
still in cruise, Mars ahead, final correction burn in progress — and nothing
has landed. This matches the 007 pre-landing framing exactly: preparation for
arrival, not arrival itself.

The `landing-confirmation` plate (`docs/mission/landing-confirmation.png`, rover
aboard the platform, everything still on the surface) is **not** used. It
depicts step 008 (landing confirmed), which is a later-step image forbidden by
the 007 brief (`docs/mission/cruise-final-approach.png` is the approved
approach/preparation plate; `landing-confirmation.png` is gated for 008).

No `image_generate` call was made (provider `openai-codex`, model
`gpt-image-2-medium` **not** invoked), no ComfyUI server was started, no
prompt was written, and no local generator or image tool was used. There is
nothing in the profile image cache for this slug and no `imagegen_request_id`
exists for any candidate here; a reuse card needs no backend probe because no
new generation is attempted.

## Manifest metadata

|                  | Field                                                                                                                                                                                                                                                       | Value |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Slug             | `007-landing-preparation`                                                                                                                                                                                                                                   |       |
| Timeline step    | `007-landing-preparation`; between 006-cruise close (21 Aug 2031) and 008 landing confirmation (16 Sep 2031)                                                                                                                                                |       |
| Brief            | `.agents/work/briefs/007-landing-preparation.md` §Assets and image decision (:38 — no new imagery: reuse `docs/mission/cruise-final-approach.png`)                                                                                                          |       |
| Source pack      | `.agents/work/sources/007-landing-preparation.md` (claims C1–C14)                                                                                                                                                                                           |       |
| Canonical source | `docs/mission/cruise-final-approach.png` (released, placed on 006-cruise-final-approach); media registry `website/src/features/news/media.ts:202-203`                                                                                                       |       |
| Draft            | `website/news/007-landing-preparation.mdx` — SHA-256 `c4a36ba1407066fb0f28d258a79b851d8234a9e3fa35d9bce80e85d4eccfa5d0`, 3,868 B, 76 lines, `publication: draft`, `simulatedDate` unset (reviewer gate `t_0c98f3bf` applies `2031-09-07` from `t_fb4e97da`) |       |
| Decision         | `no new imagery: reuse docs/mission/cruise-final-approach.png`                                                                                                                                                                                              |       |
| Placement        | `media: cruise-final-approach` — article hero/card via `media: cruise-final-approach` in the 007 draft                                                                                                                                                      |       |
| Reused plate     | `docs/mission/cruise-final-approach.png` (1024×576, SHA-256 `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270`)                                                                                                                             |       |
| Candidates       | `0` — none generated, none proposed; pure reuse, no new imagery                                                                                                                                                                                             |       |
| Generation       | None. `image_generate`, ComfyUI, and the retired local generator were **not** used. No GPU/comfyctl session was started (not needed for a reuse).                                                                                                           |       |
| Card             | `t_021419c1` — `mars-ai-simulator-visuals`, run 445, 2026-09-19                                                                                                                                                                                             |       |
| Status           | Manifest complete; reviewer records the release decision and confirms the 007 placement.                                                                                                                                                                    |       |
| Downstream       | Editorial final gate `t_0c98f3bf` (owns the release decision; confirms chronology/canon/confidentiality, applies `simulatedDate: 2031-09-07` from `t_fb4e97da`)                                                                                             |       |

## Reused plate record

|                   | Field                                                                                                                                                                           | Value |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Path              | `docs/mission/cruise-final-approach.png`                                                                                                                                        |       |
| Dimensions        | 1024 × 576 (16:9)                                                                                                                                                               |       |
| SHA-256           | `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270`                                                                                                              |       |
| Format            | PNG, 8-bit/color RGB, non-interlaced                                                                                                                                            |       |
| Description       | Same cruise-stage stand-in fires its final correction burn, Mars rust-red disc ahead, thin plume against planet. Final planned course-refinement, approach/preparation framing. |       |
| Media key         | `cruise-final-approach`                                                                                                                                                         |       |
| Registry entry    | `website/src/features/news/media.ts:202-203` — `plates: [{ src: cruiseFinalApproach, label: 'Red Horizon · final approach correction' }]`                                       |       |
| Current placement | `006-cruise-final-approach` (`cruise-final-approach`)                                                                                                                           |       |
| Status            | `released` — approved export, placed on the published 006 final-approach article                                                                                                |       |
| Reuse decision    | Approved for 007 landing-preparation article hero/card                                                                                                                          |       |

## Provenance (image-index rows 7/8)

Per `.agents/work/image-index.md` "Requested-new images (2026-09-19 audit)" section
(card `t_e8a2fe11` / `t_b30fae21`):

| Row | Id                         | SHA-256                                                            | Role                                                                                                                                                                                                |
| --- | -------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | `cruise-final-approach-01` | `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270` | **Candidate origin** — matches the approved export SHA. Generated via ComfyUI Flux.2 Klein Base 4B. The raw generation that became the approved export at `docs/mission/cruise-final-approach.png`. |
| 8   | `cruise-final-approach-02` | `3b9fc2dac144dda5d149b2903c9fa9cb3433aa2f1969b207086b6bd1b25c4330` | Alternate candidate — not selected. Craft close in foreground, Mars limb rising behind. Not reused.                                                                                                 |

The approved export `docs/mission/cruise-final-approach.png` (SHA `4989b707...`) is
row 7's output — the same hash confirms the candidate origin and the approved
export are byte-identical. Row 8 is an alternate that was not carried forward.

The `docs/mission` section of the image-index (card `t_b30fae21`, audit items #1–7)
lists `docs/mission/cruise-final-approach.png` as `released — placed on 006-cruise-final-approach (cruise-final-approach)`.

## Caption and alt text

|                        | Field                                                                                                                                                                                        | Value |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| `media` key            | `cruise-final-approach`                                                                                                                                                                      |       |
| Media label (registry) | `Red Horizon · final approach correction`                                                                                                                                                    |       |
| `mediaAlt`             | `Illustrative artwork, not mission photography: a generic cruise-stage stand-in with Mars ahead, approaching the destination.`                                                               |       |
| Caption                | — (no separate caption field; the illustrative meaning is carried in `mediaAlt` per the one-plate-key convention: `plateCount: 1`, `altCount: 1`, `captionCount: 0`, `requiresLabel: false`) |       |
| Disclosure             | The `mediaAlt` carries the standard "Illustrative artwork, not mission photography" disclosure consistent with the project's image policy.                                                   |       |

## Forbidden / relabel boundary

- `docs/mission/landing-confirmation.png` is **not** reused, imported, renamed,
  cropped, or relabelled. It depicts the rover already landed on the platform
  (step 008) and is forbidden for the pre-landing 007 article. The approved
  approach/preparation plate is `cruise-final-approach.png`, not `landing-confirmation.png`.
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's
  Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no
  telemetry, no delta-v / burn-time figure, no landing ellipse, no entry-readiness
  claim, no later-step event (steps 008–011), and no invented figure appears in
  any asset name, caption, or alt text.
- No `landing-confirmation` reference, no `first-drive` reference, and no other
  later-step plate appears in any string — the reused plate shows the spacecraft
  in cruise with Mars ahead, nothing landed.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

| Check                           | Method                                                                    | Result                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Reused file exists              | `ls docs/mission/cruise-final-approach.png`                               | **exists**                                                                                       |
| SHA-256 matches                 | `sha256sum docs/mission/cruise-final-approach.png`                        | `4989b707a260b2c63fb93323441afde038a08785e817ce0c4e4e7e3f5df93270` ✓                             |
| Dimensions                      | `file docs/mission/cruise-final-approach.png`                             | 1024 × 576, PNG ✓                                                                                |
| Media key in registry           | `grep -n 'cruise-final-approach' website/src/features/news/media.ts`      | found at `media.ts:202-203` ✓                                                                    |
| Draft media placement           | `grep -n 'media:' website/news/007-landing-preparation.mdx`               | `media: cruise-final-approach` at line 7 ✓                                                       |
| Draft mediaAlt                  | `grep -n 'mediaAlt' website/news/007-landing-preparation.mdx`             | present, carries disclosure pattern ✓                                                            |
| Forbidden: landing-confirmation | `grep -n 'landing-confirmation' website/news/007-landing-preparation.mdx` | **no matches** ✓                                                                                 |
| Forbidden: later-step plates    | `grep -niE 'landing-confirmation                                          | first-drive                                                                                      | landing-01 | landing-02' website/news/007-landing-preparation.mdx` | **no matches** ✓ |
| Forbidden terms in draft        | `grep -niE 'kourou\\                                                      | arianespace\\                                                                                    | arianegroup\\ | esa\\ | spaceport\\ | telemetry\\ | delta-v\\ | landing ellipse\\ | traverse\\ | 16 september\\ | docs/timeline'` | **no matches** ✓ |
| Draft hash                      | `sha256sum`                                                               | `c4a36ba1407066fb0f28d258a79b851d8234a9e3fa35d9bce80e85d4eccfa5d0` (3,868 B, 76 lines) ✓         |
| image-index row 7 SHA matches   | `grep '4989b707' .agents/work/image-index.md`                             | row 7 `cruise-final-approach-01` SHA matches ✓                                                   |
| Generation backend              | role rule + skill                                                         | **not probed** — deliberately: no generation on a reuse card; nothing to authorise               |
| GPU/comfyctl session            | process check                                                             | **not started** — reuse requires no generation backend                                           |
| No new imagery stated           | manifest                                                                  | explicit: `no new imagery: reuse docs/mission/cruise-final-approach.png` ✓                       |
| Repository hygiene              | `git status --short`                                                      | this card writes only `.agents/work/assets/007-landing-preparation/assets.md`; nothing committed |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card reuses an already-released plate
  (`docs/mission/cruise-final-approach.png`, approved and placed on the
  published 006 final-approach article). No new image is generated, no new
  canon is authorized, and the media placement is a reuse decision only.
  The plate's public facts are the released step-006 final approach correction
  record (21 Aug 2031); the 007 article adds no new visual facts.
- **Confidentiality:** no private timeline path, no real facility/operator
  name, no unreleased milestone value, no trajectory parameter, and no
  later-step fact appears in any asset string. The reused plate shows a
  generic cruise-stage stand-in with Mars ahead — nothing landed, no success
  claim, no entry outcome. The `landing-confirmation` plate (rover on platform)
  is deliberately excluded and stays gated for step 008.
- **Review outstanding:** `mars-ai-simulator-reviewer` (child gate `t_0c98f3bf`)
  must confirm the 007 chronology/canon/confidentiality, apply
  `simulatedDate: 2031-09-07` from `t_fb4e97da`, and record the release
  decision.
- **Next owner/action:** reviewer (`t_0c98f3bf`); downstream dev validation
  only wires the existing `cruise-final-approach` media key — no new guard
  flip or image build required.
