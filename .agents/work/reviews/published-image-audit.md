# Published-image audit — published articles without art (card t_b30fae21)

Reviewer: `mars-ai-simulator-reviewer` · written 2026-09-19 (session), run 388.
Human instruction (operator, verbatim): "schedule task for reviewer (no blocker) to immidiate
check of published articles; summarize, which articles does not have image; -> either use
existing images for them or generate new image; summarize missing / requested new images first".
This file is the audit's verdict table **and** the REQUESTED-NEW-IMAGES handoff that the
downstream visuals batch card (t_e8a2fe11) and the dev carousel card read.

## Scope and ground truth (re-verified at write time)

Every published article under `website/news/` (`publication: published`), current frontmatter
re-read 2026-09-19; article hashes at the bottom of this record. 14 published articles; **7 carry a
`media:` key, 7 carry none** and render the numbered placeholder in the homepage carousel /
news index. The ground-truth list from the card body is confirmed unchanged:

| Article (published)                                       | `media:` key                  | Has image? |
| --------------------------------------------------------- | ----------------------------- | ---------- |
| `website/news/001-project-announcement.mdx`               | `asteria-plates`              | yes        |
| `website/news/002-payload-selection.mdx`                  | `payload-sensor-illustration` | yes        |
| `website/news/003-vehicle-design.mdx`                     | `vehicle-references`          | yes        |
| `website/news/004-launch-provider.mdx`                    | `launch-vehicle-reference`    | yes        |
| `website/news/005-launch.mdx`                             | `launch-lift-off`             | yes        |
| `website/news/006-cruise-first-correction.mdx`            | —                             | **no**     |
| `website/news/006-cruise-checkout.mdx`                    | —                             | **no**     |
| `website/news/006-cruise-final-approach.mdx`              | —                             | **no**     |
| `website/news/008-landing.mdx`                            | —                             | **no**     |
| `website/news/009-health-packet-panorama.mdx`             | `surface-panorama`            | yes        |
| `website/news/009-egress.mdx`                             | `egress`                      | yes        |
| `website/news/009-first-drive.mdx`                        | —                             | **no**     |
| `website/news/milestone-2031-stack-arrival.mdx`           | —                             | **no**     |
| `website/news/milestone-2031-launch-readiness-review.mdx` | —                             | **no**     |

(`010-first-sample.mdx` is `draft` and out of scope; it already declares
`payload-sensor-illustration`.)

## 009-first-drive art status (the card asked to note it)

**No art was queued.** The 009-first-drive visuals card `t_9f288780` completed with
`no new imagery: text-only … 0 candidates`, and the released article is text-only by its own
editorial gate (`.agents/work/reviews/009-first-drive.md` run 380, `approved`, "no imagery
(text-only; no media key, no figure, no card art, no OG image)"). Neither existing 009 plate
depicts drive evidence, and both manifests forbid presenting a stationary plate as the drive.
This audit therefore requests new art for it (item 11–12 below).

## Verdict table — per image-less article

Decision vocabulary: `keep-key` (already has art), `reuse <key|plate>`, `request-new`. All 7
image-less items are `request-new`; every reuse candidate was examined and rejected with its
reason, per the card's rule that a reuse which contradicts the article's moment, or repeats a
neighbour's plate without editorial justification, is not acceptable.

| # | Article (simulatedDate, order)                                 | Has image? | Decision        | Rationale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| - | -------------------------------------------------------------- | ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | `milestone-2031-stack-arrival` (2031-01-13, order 5)           | no         | **request-new** | Moment: the flight stack **arrives at the launch campaign site** and ground integration begins. Reuse rejected: `launch-vehicle-reference` (ariane `canonical.png`) is already the 004 article's plate (neighbour, no justification) and is a studio **engineering reference of the launcher alone** — it does not depict the arrival/integration moment; `front-left.png` is an admitted-alternative-only plate with the same studio-subject mismatch and a portrait 4:5 frame already measured as poor for the 3:2 carousel (ariane-plates selection §C3/O-5); `travelling-to-mars.png` is guard-withheld (`website/scripts/guards.mjs`, `website/test/guards.test.mjs:831`). |
| 2 | `milestone-2031-launch-readiness-review` (2031-02-11, order 5) | no         | **request-new** | Moment: the flight stack **brought together, inspected, tested as one ready unit**; the article explicitly publishes "a status, not a clearance". Reuse rejected: `canonical.png` relabel is forbidden by the article's own manifest (`.agents/work/assets/milestone-2031-launch-readiness-review/assets.md` — "not relabelled as a readiness-review … image"), and the same plate is 004's; any pad/lift-off visual would assert launch readiness the article negates.                                                                                                                                                                                                         |
| 3 | `006-cruise-first-correction` (2031-03-03, order 6)            | no         | **request-new** | Moment: the spacecraft, in interplanetary cruise, fires its **first planned trajectory-correction** burn. Reuse rejected: `launch-lift-off` (005) is the launch moment months earlier; `travelling-to-mars.png` is guard-withheld and burned-in-text marked; no ariane studio plate carries an in-cruise moment; asteria plates are Mars cartography. The cruise brief's old "text-only" default (`.agents/work/briefs/006-cruise.md:34-36`) is superseded by the operator's instruction — a canon-safe, illustrative in-cruise plate is now requested.                                                                                                                         |
| 4 | `006-cruise-checkout` (2031-05-20, order 6)                    | no         | **request-new** | Moment: **cruise checkout of all flight elements and the second correction opportunity**. Same reuse rejections as #3; distinct visual needed so the cruise series does not repeat one plate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5 | `006-cruise-final-approach` (2031-08-21, order 6)              | no         | **request-new** | Moment: **final planned course-refinement**, the approach phase ahead. Same reuse rejections as #3; the record withholds entry/landing/surface details, so the visual must stay in-cruise (no entry, no landing, no surface).                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6 | `008-landing` (2031-09-16, order 8)                            | no         | **request-new** | Moment: **landing confirmed** — power, comms, rover responding; rover still on the platform, commissioning ahead. Reuse rejected: `asteria-plates` are already 001's and the wiki's (neighbour repeats), and they are planning cartography, not landing imagery (their own manifest calls them "landing-target context only"); `surface-panorama` (09-17) and `egress` (09-23) are later-step surface events and would read as surface operations before the article reports them; landing geometry (ellipse/P0) is a withheld family the AF-03 plate carries.                                                                                                                  |
| 7 | `009-first-drive` (2031-09-30, order 9)                        | no         | **request-new** | Moment: **first controlled drive + mobility assessment**; drive evidence. Reuse rejected: `surface-panorama` (terrain-only, already the 009-p1 plate and a neighbour repeat) and `egress` (ramp moment) are both stationary plates; both manifests state a reused plate is "a continuity reference, not drive evidence" and must not claim to show the drive.                                                                                                                                                                                                                                                                                                                   |

## REQUESTED-NEW-IMAGES — the handoff list for t_e8a2fe11

12 requested images (7 primaries + 5 alternates), one generation per request, sized so the batch
covers every image-less article and totals ≥ 10. Use Flux.2 Klein Base 4B per the visuals card;
alternates marked "edit" may be produced with Qwen-Image-Edit off the primary once it exists, or
as fresh Flux prompts — every entry below is written promptable stand-alone either way.

Shared canon constraints for **every** image (may be shortened per entry):

- Released vocabulary only: no `docs/timeline/` content or paths; no real facility/operator/
  agency name (Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA, NASA…); no launch
  day/time/countdown/telemetry/delta-v figures; no landing-design geometry (ellipse, P0,
  science zones, hazards, traverses); no later-step milestone or date; no burned-in text,
  logo, insignia, watermark of any kind in the pixels.
- The artwork is illustrative, never documentary: keep the "stand-in / illustrative" mood the
  alt text will state later (mirror `docs/SCENARIO.md:280`'s illustrative-labelling rule).
- Palette stays in the brand family (rust/ember/amber warm mass, one cool accent max, dark or
  light neutral field — no saturated greens/purples).
- 16:9 candidate preferred; the 3:2 plate family is acceptable for the surface plates.

| #  | Id                                     | Target article                         | Subject                                          | Promptable description (2–3 sentences)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Composition / aspect                     | Entry-specific canon constraints                                                                                                                                                                                                                          |
| -- | -------------------------------------- | -------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | `stack-arrival-01` (primary)           | milestone-2031-stack-arrival           | The flight stack at the launch campaign site     | A white heavy-lift launch vehicle — one central core, four strap-on boosters two on each side, five dark engine bells, a short fairing — stands fully assembled and upright inside a clean, unmarked industrial preparation hall with evenly warm amber work-light; the completed stack is the subject, seen from a low three-quarter angle so the fairing, boosters and engine band all read. The setting says "the final ground-based phase begins": pallets, tie-downs and soft inspection platforms, no personnel, no signage. | 16:9, wide                               | No facility marks or names; no launch pad, flame, smoke, countdown or clock anywhere; no rover/EDL/cruise hardware drawn outside the fairing (everything rides inside it); no text.                                                                       |
| 2  | `readiness-review-01` (primary)        | milestone-2031-launch-readiness-review | The flight stack under review, one verified unit | The same integrated flight stack stands in the middle of a clean industrial integration hall, surrounded by plain light inspection gantries and soft neutral work-lighting, with the four-booster stack filling the frame; the mood is a methodical systems check — composed, calm, nothing dramatic. No control room, no telemetry screens, no countdown elements, no people.                                                                                                                                                     | 16:9, wide                               | The image must not read as a launch or a clearance: no pad towers, no flame/smoke, no flight-readiness costume, no review outcome; same mark/facility bans; no text.                                                                                      |
| 3  | `cruise-correction-01` (primary)       | 006-cruise-first-correction            | First trajectory-correction burn in deep space   | A compact generic interplanetary cruise-stage stand-in — a plain spacecraft with modest solar arrays either side and a small dish antenna — fires a single small engine in a carefully aimed correction burn: a narrow cool flame and a thin straight plume against black space, with a sparse sprinkle of faint stars and a small distant Earth behind it. The craft is clearly illustrative, not a real vehicle.                                                                                                                 | 16:9, wide                               | No real launcher/agency marks; no orbit/telemetry/delta-v figures; star field sparse (not decorative); burn is small and precise, not a dramatic engine test; no Mars in frame (reserved for #7).                                                         |
| 4  | `cruise-correction-02` (alternate)     | 006-cruise-first-correction            | Angle variant of #3                              | The same craft from a high three-quarter rear angle so the plume trails neatly away from the camera, Earth small and low in the frame, the arrays catching cool sunlight from the upper left; identical generic stand-in craft and burn character.                                                                                                                                                                                                                                                                                 | 16:9, wide                               | Same as #3. Mark "edit" (Qwen off #3) or fresh prompt; either is acceptable.                                                                                                                                                                              |
| 5  | `cruise-checkout-01` (primary)         | 006-cruise-checkout                    | Cruise checkout — systems exercised, no burn     | The same generic cruise-stage stand-in holds station in deep space, arrays fully deployed and glinting, small dish tilted toward Earth, no engine firing; the composition is calm and symmetrical-ish, a routine health-check mood, with faint stars and Earth a small distant point. Distinct enough from the correction plates: no plume, no motion drama.                                                                                                                                                                       | 16:9, wide                               | Same as #3; explicitly no burn/plume, no Mars; nothing that implies an event beyond the routine checkout (no panels open, no floating debris).                                                                                                            |
| 6  | `cruise-checkout-02` (alternate)       | 006-cruise-checkout                    | Angle variant of #5                              | The same craft seen from a low front-quarter angle with Earth behind it at frame edge, arrays catching warm low light; same calm checkout mood.                                                                                                                                                                                                                                                                                                                                                                                    | 16:9, wide                               | Same as #5. Mark "edit" or fresh prompt.                                                                                                                                                                                                                  |
| 7  | `cruise-final-approach-01` (primary)   | 006-cruise-final-approach              | Final correction burn with Mars ahead            | Mars now appears clearly ahead and noticeably larger — a rust-red disc occupying roughly the upper third of the frame with a thin dusty limb haze — while the same generic cruise-stage stand-in, small in the lower half, fires its final precise correction burn, a thin plume against the planet. The craft is still in cruise; the planet is destination context, nothing more.                                                                                                                                                | 16:9, wide                               | No entry/landing/surface depiction: no atmosphere interface, no parachute, no heat-shield stage, no surface detail on Mars; no figures; sparse stars; same mark bans.                                                                                     |
| 8  | `cruise-final-approach-02` (alternate) | 006-cruise-final-approach              | Angle variant of #7                              | The craft close in the foreground, Mars limb rising as a thin rust arc behind it, burn plumb with the frame; close, quiet, precise mood.                                                                                                                                                                                                                                                                                                                                                                                           | 16:9, wide                               | Same as #7. Mark "edit" or fresh prompt.                                                                                                                                                                                                                  |
| 9  | `landing-01` (primary)                 | 008-landing                            | Landing platform on the surface, rover aboard    | A broad square landing platform stands settled on a rust-red rocky plain at the fictional Asteria Field, its landing legs on gravel and scattered angular rocks; a compact six-wheeled rover rests on the deck — warm-white body, muted red panels, dark deck, short central mast — and a thin dust haze with a band of pale layered outcrops stretches behind. The scene is the moment of confirmation: landed, powered, everything still on the platform.                                                                        | 16:9, wide (3:2 plate family acceptable) | No ramp deployed, no wheel tracks, nothing off the platform, no egress/surface-ops; no landing-design overlays (ellipse/P0); terrain per released vocabulary (rocks, dust, layered outcrops); rover exactly six wheels, released appearance only.         |
| 10 | `landing-02` (alternate)               | 008-landing                            | Wide establishing variant of #9                  | A much wider establishing shot: the platform small and alone in a vast rocky plain under a dusty pale-ochre sky with low cratered ridges on the horizon; the settlement/arrival reading dominates, the rover's detail legible as a small shape on the deck.                                                                                                                                                                                                                                                                        | 16:9, wide                               | Same as #9.                                                                                                                                                                                                                                               |
| 11 | `first-drive-01` (primary)             | 009-first-drive                        | RH-01 after its first controlled drive           | RH-01 Pathfinder — compact six-wheeled rover with a warm-white body, muted red panels, a dark flat deck and one short central camera mast — stands on a rocky plain at Asteria Field after a short measured movement, with two clean wheel-track lines running behind it across gravel and dust; six open-mesh wheels on visible articulated suspension, rocks and dust ripples around, layered outcrops in the mid-distance.                                                                                                      | 16:9, wide (3:2 acceptable)              | Drive evidence (tracks behind) is the article's own released milestone; no distances/speeds/sols; no sample collection, no contact tool deployed, no target approach; no later-step facts (no discovery marks); vehicle per released wiki/003 appearance. |
| 12 | `first-drive-02` (alternate)           | 009-first-drive                        | Low-angle variant of #11                         | The rover seen from a low three-quarter front-side view at mast height so all six wheels and their suspension are visible, the two track lines receding behind it across the plain under warm low light.                                                                                                                                                                                                                                                                                                                           | 16:9, wide                               | Same as #11.                                                                                                                                                                                                                                              |

Count: **12 ≥ 10**. The visuals card must generate every row. If a row errors at tool level (OOM,
server down), record the error and move on per the card's trust rule — a failed row is reported
back, not silently padded.

## Routing notes for the downstream cards (not decisions made here)

- **New media keys are required for placement.** None of the 8 registered keys
  (`website/src/lib/media.ts:17-26`) can carry these new images: each key resolves to an
  existing `docs/` asset, `plateCount` is asserted by `website/test/news-media.test.mjs`, and
  `asteria-plates` is locked at 3 plates. The dev carousel card should register ~7 new
  one-plate keys (e.g. `stack-arrival`, `readiness-review`, `cruise-correction`,
  `cruise-checkout`, `cruise-final-approach`, `landing-confirmation`, `first-drive`), resolve
  them in `website/src/features/news/media.ts` to the exported plates, and add the test
  rows — one key per article so each article can name its own primary plate.
- **Stable export + guard coordination.** Generated images stay in the visuals profile cache
  (`~/.hermes/profiles/mars-ai-simulator-visuals/cache/images/`); the selection/dev step
  exports approved plates into `docs/` (a new home, e.g. a `docs/` mission-phase folder, or
  `docs/area/` for the surface plates) and registers imports in `website/src/lib/assets.ts`.
  If an export lands under a gated directory name (`gatedDirectoryNames` in
  `website/scripts/guards.mjs`), the same change must repair the guard marker; `travelling-to-
  mars.png` and `contact-arm-scene.png` stay withheld and must not be used as references.
- **Alt/caption/label contract.** One-plate keys render no per-plate caption
  (`captionCount: 0`), so the "illustrative artwork, not mission photography" statement must
  live in each `mediaAlt` (the released 002/003/004/009 precedent). Every alt must keep the
  illustrative meaning and never claim documentary evidence (e.g. the first-drive alt must not
  assert real telemetry).
- **Confidentiality.** Every brief above deliberately leaves states unreleased (no entry/
  landing detail before 008's own record, no surface ops before their articles, no approach
  detail before 006-final-approach), so the generated pixels cannot leak a step the article
  has not released.

## Validation performed

All hashes re-measured 2026-09-19 17:14 UTC on the live shared tree; article hashes at write
time:

- Published without image: `006-cruise-first-correction.mdx` `607ec5f0…`,
  `006-cruise-checkout.mdx` `7253b4b9…`, `006-cruise-final-approach.mdx` `039d7a4a…`,
  `008-landing.mdx` `1e9ca2bd…`, `009-first-drive.mdx` `4ab8d1b4…`,
  `milestone-2031-stack-arrival.mdx` `69fdfa75…`,
  `milestone-2031-launch-readiness-review.mdx` `bb824250…`.
- Published with image (kept keys): `001` `f5223d68…`, `002` `05599258…`, `003` `51f2ee69…`,
  `004` `2875165e…`, `005` `f8338776…`, `009-p1` `0ad7a15f…`, `009-egress` `6b8ea6a0…`.
- Draft out of scope: `010-first-sample.mdx` `d8b25509…`.
- Frontmatter `media:`/`publication` re-read per file immediately before writing (0 changes
  vs the ground-truth list).
- Existing-asset inventory: `find docs -name '*.png'` + `sha256sum` (29 docs PNGs) and the
  visuals cache PNG listing (13 files) — mirrored into `.agents/work/image-index.md`.

Status: this audit is read-only wrt site files; it writes only this record, the image index, and
the skill below. Next owners: `mars-ai-simulator-visuals` (t_e8a2fe11 — generate all 12, append
index entries), then the dev carousel card (media keys, exports, guards).
