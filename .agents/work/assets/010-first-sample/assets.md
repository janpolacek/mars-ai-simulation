# Asset manifest: 010-first-sample

**Card**: t_7ad916ed
**Article**: 010-first-sample (`website/news/010-first-sample.mdx`)
**Timeline step**: 010-operations-and-discovery — first onboard sample collection and mineral analysis (31 Oct 2031)
**Decision**: REUSE — no new imagery generated.

## Reuse determination

The payload dossier (`docs/payload/`) records approved instrument plates:

| File                                           | SHA-256                                                            | Status                                                                                        |
| ---------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `docs/payload/01-spectral-sampling.png`        | `8839f66a6d5688c0bd39a7331a800da562df59f69a6a5f352395cd315ca0de67` | Approved, unplaced candidate (per `website/src/lib/assets.ts` line 91)                        |
| `docs/payload/04-dust-and-contact-closeup.png` | `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9` | Approved — identical content to the released `payload-sensor-illustration.png` (same SHA-256) |
| `docs/payload/payload-sensor-illustration.png` | `47d39a0bbe4e69992f3aa5c005015b2373aa19b0d4126787536701cf3562aed9` | Released stable dossier path (editorial decision, card `t_00b65567`, 2026-09-17)              |

Both candidate files named in the brief (`01-spectral-sampling.png` and `04-dust-and-contact-closeup.png`) are approved instrument plates in the payload dossier. Reuse applies.

**Reuse path**: `docs/payload/payload-sensor-illustration.png` — the stable dossier path the article frontmatter already references via `media: payload-sensor-illustration`.

## Candidate record

No new image was generated. The approved plate `docs/payload/payload-sensor-illustration.png` is reused as-is.

| Field                  | Value                                                                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stable filename        | `payload-sensor-illustration.png`                                                                                                                                                                                             |
| Source path            | `docs/payload/payload-sensor-illustration.png`                                                                                                                                                                                |
| Subject                | Illustrative artwork of a payload sensor — several coloured beams of light slanting down through dusty air onto a rough dark rock surface; a stand-in image for a payload built to sense what a rock is made of               |
| Story step             | 010-operations-and-discovery: first onboard sample collection and mineral analysis (31 Oct 2031)                                                                                                                              |
| Placement target       | `media: payload-sensor-illustration` — article lead, newsroom card, homepage card, carousel                                                                                                                                   |
| Alt text               | "Illustrative artwork showing several coloured beams of light slanting down through dusty air onto a rough dark rock surface; a stand-in image for a payload built to sense what a rock is made of. Not mission photography." |
| Caption                | none (key renders no per-plate caption)                                                                                                                                                                                       |
| Aspect ratio           | article-defined (not an image-generation constraint)                                                                                                                                                                          |
| Tool                   | `image_generate`, provider `openai-codex`, model `gpt-image-2-medium` — **not used; reuse only**                                                                                                                              |
| Private provenance     | `imagegen_request_id`: N/A — no generation performed                                                                                                                                                                          |
| Cache filename         | N/A — no generation performed                                                                                                                                                                                                 |
| Licence and permission | Existing released asset; generated for the fictional Red Horizon programme; provider's terms apply; not canon itself                                                                                                          |

## Continuity check

- Article frontmatter `media: payload-sensor-illustration` matches the resolved media key in `website/src/features/news/media.ts`
- `website/src/lib/assets.ts` imports `payloadSensorIllustrationSource` from `docs/payload/payload-sensor-illustration.png`
- SHA-256 of `docs/payload/04-dust-and-contact-closeup.png` matches `docs/payload/payload-sensor-illustration.png` (both `47d39a0b...`)
- `01-spectral-sampling.png` (`8839f66a...`) is also approved but remains an unplaced candidate per editorial decision on `t_00b65567`
- Forbidden content (sealed cache, ascent vehicle, Earth-return capsule, life-detection framing, stratigraphy scenery, institution marks, documentary framing) is not present in the reused plate — the plate is an illustrative sensor illustration, not a surface-operation photograph

## Next

Reviewer confirms canon and records the release decision. No generation was performed; no backend was invoked. `hermes auth status openai-codex` returned `logged in` and was not needed for this card.
