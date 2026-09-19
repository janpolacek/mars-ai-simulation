# Asset manifest: wiki-ariane-64

## Manifest metadata

| Field            | Value                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Slug             | `wiki-ariane-64`                                                                         |
| Timeline step    | `004-launch-provider`                                                                    |
| Brief            | `.agents/work/briefs/wiki-ariane-64.md`                                                  |
| Canonical source | `docs/vehicles/ariane/ariane-64.md`                                                      |
| Draft placement  | `website/wiki/ariane-64.mdx`                                                             |
| Card             | `t_f15eef66`                                                                             |
| Decision         | **No new imagery. Reuse the exact released plate** `docs/vehicles/ariane/canonical.png`. |
| Generation       | None. `image_generate` and ComfyUI were not used.                                        |
| Status           | Reuse manifest complete; review remains outstanding.                                     |

## Reuse candidate

| Field                        | Value                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proposed stable filename     | `docs/vehicles/ariane/canonical.png` (existing canonical file; no copy, rename, crop, or re-encode)                                                                                                                                                                                                                                                           |
| Subject                      | Neutral studio engineering reference of the Ariane 64 identity: one central core, four strap-on boosters, two on each side, five dark engine bells, and a short fairing.                                                                                                                                                                                      |
| Story step                   | `004-launch-provider` — released launcher identity only; the wiki leaf is a reference page derived from this step.                                                                                                                                                                                                                                            |
| Source SHA-256               | `cf3323bf5dfb45e77b3400cd0d0dc1b107359a1d9403a6d7442a480d1228c44b`                                                                                                                                                                                                                                                                                            |
| File dimensions              | `1122 × 1402` pixels; PNG; 8-bit RGB; non-interlaced; `1,040,823` bytes                                                                                                                                                                                                                                                                                       |
| Aspect ratio                 | `4:5` portrait (`0.8003`); placement uses the source ratio.                                                                                                                                                                                                                                                                                                   |
| Placement target             | Wiki media slot in `website/wiki/ariane-64.mdx`, through the `launch-vehicle-reference` media key. The key resolves one plate.                                                                                                                                                                                                                                |
| Caption                      | **No caption.** The media-key contract requires one plate and no `mediaCaption`; the approved label is rendered by the site.                                                                                                                                                                                                                                  |
| Media label                  | `Ariane 64 · engineering reference` (U+00B7 middle dot; preserve verbatim)                                                                                                                                                                                                                                                                                    |
| Alt text                     | `Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied.` |
| Crop notes                   | Do not crop. Preserve the complete fairing, all four boosters, all five engine bells, and the faint grounded shadow. The wiki placement should contain the full portrait plate.                                                                                                                                                                               |
| Visible-pixel check          | The source shows a tall white launcher on a seamless white studio background/floor with soft broad lighting and a faint shadow. Four boosters are visible, two per side, with five dark bells at the base. No launch pad, tower, plume, people, institutional logo, flag, or embedded text is visible.                                                        |
| Private provenance reference | Reuse provenance: `.agents/work/reviews/ariane-plates-selection.md` §§6–10 and `.agents/work/releases/004-launch-provider.md` exact public-scope record. Source file: `docs/vehicles/ariane/canonical.png`; source hash above. This is not a generated candidate and has no `imagegen_request_id`.                                                            |
| Rights / permission          | Existing operator-supplied plate released for public placement by the recorded step-004 media decision; the release record retains the human story owner's rights/account statement as a precondition of push. Artwork is illustrative, not a photograph or endorsement, and does not imply participation by a real institution, operator, or facility.       |
| Canon status                 | Released for this public wiki placement within step-004 scope. The plate does not release launch-day, pad, in-transit, later mission, landing, or facility details.                                                                                                                                                                                           |

## Validation and handoff

- Re-measured the live source file with `sha256sum`, `file`, and `stat`: hash, dimensions, format, and byte count above.
- Read the Ariane 64 dossier and wiki brief; the reuse is limited to the released four-booster engineering identity.
- Read the existing media contract and draft: `launch-vehicle-reference` is the one-plate key used by `website/wiki/ariane-64.mdx`; no caption is supplied.
- Performed a pixel-level visual check of the exact source file against the alt text and forbidden-scene list.
- Public/canon impact: this manifest authorizes no new canon and creates no new image; it records reuse of an already released plate for the draft wiki slot only.
- Review outstanding: `mars-ai-simulator-reviewer` must review the wiki package and record the release decision before publication.
- Next owner/action: reviewer; verify this manifest and the wiki draft, then record the continuity/editorial decision. The site engineer may wire or publish only after that review gate and the rights condition are satisfied.
