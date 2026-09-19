# Asset manifest: 009-first-drive

Card: `t_9f288780` (Create visual assets: 009-first-drive) — stage `visuals`, **text-only**.
Article: `website/news/009-first-drive.mdx` — route `/news/009-first-drive/` once published.
Linked release-order step: `009-first-surface-checks` — page 3 of 3 (this card; pages 1–2 are the released health-packet-panorama and egress records); locked milestone row `docs/SCENARIO.md:200` (`30 September 2031 | First controlled drive and mobility assessment`).

> Supersedes: the writer's short decision record for this slug (written by parent
> `t_590f09c0`; part of the draft package). Its decision — `no new imagery: text-only`,
> `placement: none` — is unchanged and re-confirmed here; this visuals card completes
> the manifest in the full form used by the sibling 009 cards.

## Decision

**No new imagery: text-only.**

The first drive moment does not require a new plate. The brief (`009-first-surface-checks.md` §Assets and image decision :37) fixes `no new imagery: text-only` for this step: no approved drive-evidence plate exists, the two approved 009 plates (p1 panorama and egress) are both stationary moments that neither depicts wheel tracks on a surface, and generating a drive scene would invent mobility evidence the released assets do not support. The single 8 GB GPU stays free for the next chain.

The article `website/news/009-first-drive.mdx` carries **no `media` key** and no image of any kind (verified: grep for `media*` fields returns exit 1). The draft is `publication: draft` with `simulatedDate` unset (reviewer assigns `2031-09-30` from `docs/SCENARIO.md:200` on the review card `t_994c9f28`).

**No candidate exists.** No `image_generate` call was made (provider `openai-codex`, model `gpt-image-2-medium` **not** invoked), no ComfyUI server was started, no prompt was written, and no local generator or image tool was used. There is nothing in the profile image cache for this slug, and no `imagegen_request_id` exists for any candidate here; a text-only card needs no backend probe because there is no generation to authorise.

## Reuse candidates (reviewer-sanctioned only)

If the reviewer sanctions reuse of an already-approved 009 plate:

| Path                                      | Dimensions | SHA-256                                                            | Origin                                         | Drive evidence?                                              |
| ----------------------------------------- | ---------- | ------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------ |
| `docs/area/asteria-field-panorama-02.png` | 1344×768   | `fec43bacc306b73a09e181b26bf964dd79feb7c94dc21645e4b2e0f32c402c9b` | 009-p1 approved plate (health-packet-panorama) | **No** — rover on platform, stationary                       |
| `docs/area/asteria-field-egress-01.png`   | 1200×896   | `4c3968e94f4b372698abbf1960ff335801a731ae0b0e7a94dc466711f92a5536` | 009-egress approved plate                      | **No** — rover stationary on ramp, no tracks on deck or ramp |

Neither plate depicts wheel tracks of a drive (p1: rover on platform; egress: stationary on ramp, no tracks on deck/ramp). A reused plate is a continuity reference, not drive evidence (source-pack C10, brief `:37`). If a plate is reused, alt text must keep the illustrative-artwork meaning and must not claim it shows the drive (`docs/SCENARIO.md:280`).

## Manifest metadata

| Field                    | Value                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug                     | `009-first-drive`                                                                                                                                                                                                                                                        |
| Timeline step            | `009-first-surface-checks` — page 3 (this card); locked milestone row `docs/SCENARIO.md:200` (`30 September 2031 \| First controlled drive and mobility assessment`)                                                                                                     |
| Proposed `simulatedDate` | `2031-09-30` (proposal only — reviewer `t_994c9f28` verifies from the locked row)                                                                                                                                                                                        |
| Brief                    | `.agents/work/briefs/009-first-surface-checks.md` §Assets and image decision (:37 — no new imagery: text-only)                                                                                                                                                           |
| Source pack              | `.agents/work/sources/009-first-drive.md` (claims C1–C10; C7 unresolved by design — no canonically-fixed symptom)                                                                                                                                                        |
| Canonical source         | `docs/SCENARIO.md:200`; released step-009 pages (009-p1 at `:198` released by `009-health-packet-panorama.mdx`, 009-egress at `:199` released by `009-egress.mdx`)                                                                                                       |
| Draft                    | `website/news/009-first-drive.mdx` — SHA-256 `770cdc55e985c932294dd850fa3d80ab2509bbb372e70d4da5b2d09486ee5ac3`, 5,450 B, 42 lines, `publication: draft`, `simulatedDate` unset, **no `media*` field** (verified)                                                        |
| Decision                 | `no new imagery: text-only`                                                                                                                                                                                                                                              |
| Placement                | `none` — no media key, no figure, no card art, no OG image                                                                                                                                                                                                               |
| Candidates               | `0` — none generated, none proposed, none selected                                                                                                                                                                                                                       |
| Generation               | None. `image_generate`, ComfyUI, and the retired local generator were **not** used.                                                                                                                                                                                      |
| Card                     | `t_9f288780` — `mars-ai-simulator-visuals`, run 377, 2026-09-19                                                                                                                                                                                                          |
| Status                   | Manifest complete; reviewer records the release decision and confirms the `009-first-surface-checks` page-3 mapping                                                                                                                                                      |
| Downstream               | Reviewer `t_994c9f28` (owns the release decision; confirms the page-3 mapping, `simulatedDate: 2031-09-30` from `docs/SCENARIO.md:200`, and the text-only/reuse asset decision); Dev `t_6b058257` (commit-and-push message `t_6b058257: publish 009 first-drive update`) |

## Candidate record

| Field                    | Value                                                                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate count          | **0** (none)                                                                                                                                                           |
| Proposed stable filename | — (none)                                                                                                                                                               |
| Subject / story step     | — (none; the private milestone is the 30 September 2031 first controlled drive and mobility assessment, released in fiction by this page's own draft, not by an image) |
| Caption                  | — (no caption: no media)                                                                                                                                               |
| Alt text                 | — (no alt: no media)                                                                                                                                                   |
| Private provenance       | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance)                                                                                       |
| Rights / permission      | — (no generated work; no 009 plate reused here)                                                                                                                        |

The absence of candidates is the deliverable: the article resolves as a
text-only first-drive update on the `/news/` index and its own route,
rendering no figure, card image, or carousel slide.

## Forbidden / relabel boundary

- No new imagery is generated, so there is no candidate to leak private timeline content, unreleased milestone data, or later-step facts through.
- Reuse candidates (if reviewer-sanctioned) are both already-released plates; they stay labelled illustrative, never documentary (`docs/SCENARIO.md:280`). No reused plate may be presented as showing the drive.
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no telemetry, no delta-v / burn-time figure, no landing ellipse, no invented figure, and no later-step fact (rows `:201`–`:207`: sample collection, mineral analysis, etc.) appears in any asset string, caption, or alt text — there are no assets, so there is no surface for a leak.
- The `docs/vehicles/pathfinder/` vehicle dossier (canonical silhouette, six-wheel geometry) and `docs/area/` plates are referenced in prose only; no image is cropped, relabelled, or repurposed from these dossiers for this step.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

| Check                        | Method                                                                                                                                                                                                                             | Result                                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Draft media presence         | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)'`                                                                                                                                                            | **no `media*` field** — text-only confirmed (grep exit 1)                                                               |
| Forbidden strings in draft   | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|telemetry\|delta-v\|burn time\|landing ellipse\|traverse distances\|sample collection\|mineral results\|stratigraphy\|diagnosis\|docs/timeline\|travelling-to-mars'` | **no matches** (grep exit 1) — no real facility/operator, no invented telemetry, no later-step fact, no relabel surface |
| Reuse candidate hashes       | `sha256sum` on `docs/area/asteria-field-panorama-02.png` and `docs/area/asteria-field-egress-01.png`                                                                                                                               | Both match source-pack C10 values (`fec43bacc306...` and `4c3968e94f4b...`)                                             |
| Reuse candidate dimensions   | PNG header parse                                                                                                                                                                                                                   | 1344×768 (panorama) and 1200×896 (egress) — confirmed                                                                   |
| Drive evidence in candidates | Visual check per source-pack C10 (panorama: rover on platform; egress: stationary on ramp, no tracks)                                                                                                                              | Neither plate depicts drive evidence                                                                                    |
| Draft hash                   | `sha256sum`                                                                                                                                                                                                                        | `770cdc55e985c932294dd850fa3d80ab2509bbb372e70d4da5b2d09486ee5ac3` (5,450 B, 42 lines)                                  |
| Generation backend           | role rule + skill                                                                                                                                                                                                                  | **not probed** — deliberately: no generation is attempted on a text-only card; nothing to authorise                     |
| Source pack alignment        | Read `.agents/work/sources/009-first-drive.md` C10                                                                                                                                                                                 | `no new imagery: text-only` confirmed; reuse candidates listed with SHA and dimensions                                  |
| Brief alignment              | Read `.agents/work/briefs/009-first-surface-checks.md` :37                                                                                                                                                                         | `no new imagery: text-only by default` confirmed; reuse option recorded                                                 |
| Card graph                   | `kanban_show` child `t_994c9f28`                                                                                                                                                                                                   | Reviewer gate waits on this card; parent draft done                                                                     |
| Repository hygiene           | `git status --short`                                                                                                                                                                                                               | this card rewrites `.agents/work/assets/009-first-drive/assets.md` only; nothing committed                              |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, and adds no media placement. The page's public facts are the locked milestone row (`docs/SCENARIO.md:200`) plus released step-009 context (009-p1 at `:198`, 009-egress at `:199` — all already public); the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator name, no unreleased milestone value, no trajectory parameter, and no later-step fact appears in any asset string — there are no assets, captions, or alt texts to leak, and both candidate plates stay untouched in `docs/area/`.
- **Review outstanding:** `mars-ai-simulator-reviewer` (`t_994c9f28`) must confirm the `009-first-surface-checks` page-3 mapping, the `2031-09-30` milestone wording from `docs/SCENARIO.md:200`, the text-only/reuse asset decision, and record the release decision.
- **Next owner/action:** reviewer (`t_994c9f28`); no dev/build work is required for any media — the article publishes text-only with no guard flip and no media-key wiring.
