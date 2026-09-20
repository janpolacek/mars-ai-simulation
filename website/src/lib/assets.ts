import type { ImageMetadata } from 'astro';

import asteriaMarsLocatorSource from '../../../docs/area/asteria-field-01-mars-locator.png';
import asteriaRegionalContextSource from '../../../docs/area/asteria-field-02-regional-context.png';
import asteriaLocalOperationsSource from '../../../docs/area/asteria-field-03-local-operations.png';
import egressSource from '../../../docs/area/asteria-field-egress-01.png';
import surfacePanoramaSource from '../../../docs/area/asteria-field-panorama-02.png';
import identityMarkSource from '../../../docs/brand/logo-bg-black.png';
import identityMarkTransparentSource from '../../../docs/brand/logo-transparent.png';
import archiveFinalReportSource from '../../../docs/mission/archive-final-report.png';
import cruiseCheckoutSource from '../../../docs/mission/cruise-checkout.png';
import cruiseCorrectionSource from '../../../docs/mission/cruise-correction.png';
import cruiseFinalApproachSource from '../../../docs/mission/cruise-final-approach.png';
import endOfLifeSource from '../../../docs/mission/end-of-life.png';
import firstDriveSource from '../../../docs/mission/first-drive.png';
import landingConfirmationSource from '../../../docs/mission/landing-confirmation.png';
import readinessReviewSource from '../../../docs/mission/readiness-review.png';
import stackArrivalSource from '../../../docs/mission/stack-arrival.png';
import payloadSensorIllustrationSource from '../../../docs/payload/payload-sensor-illustration.png';
import launchVehicleReferenceSource from '../../../docs/vehicles/ariane/canonical.png';
import launchLiftOffSource from '../../../docs/vehicles/ariane/lunch.png';
import vehicleStudioReferenceSource from '../../../docs/vehicles/pathfinder/canonical.png';

/**
 * The approved identity mark, and the only import of it in the site.
 *
 * This is the hash-approved black-field source named in
 * `docs/brand/BRAND.md` (SHA-256 `f9543989…`), not the RGBA derivative
 * `logo.png`: the 001 editorial review failed the derivative, and the guidelines
 * forbid re-deriving the mark for public use.
 *
 * Canonical media stays under `docs/`; nothing is copied into `website/public`.
 * Astro's asset pipeline reads the file from the canonical location at build
 * time and emits an optimised, hashed file. Components that render the mark
 * (`SplashScreen`, `SiteHeader`, `Hero`, and the news media registry) import it
 * from here rather than re-importing the source.
 *
 * The mission timeline stays private and the surface-vehicle dossier's scene
 * image stays withheld, so `scripts/guards.mjs` fails the build if a reference
 * to either withheld path appears anywhere in the site source. The dossier's
 * approved studio reference below is released material and resolves normally.
 */
export const identityMark: ImageMetadata = identityMarkSource;

/**
 * The transparent-background variant of the approved mark, for the homepage
 * hero only.
 *
 * `Hero.astro` stacks the mark over the page field and the two `.hero-orbit`
 * rings, where the black-field square reads as a hard edge; the rest of the
 * mark is identical, so the homepage uses this variant. It is derived
 * mechanically from `identityMark` — never redrawn, re-rendered or cropped —
 * by `scripts/derive-identity-mark.mjs`, and its recipe, hash and fidelity
 * measurement are recorded in `docs/brand/BRAND.md` §Transparent variant
 * (human instruction 2026-09-17, card `t_183d9f11`).
 *
 * Every other placement — the site header, the splash screen and the news
 * `programme-identity` media key — keeps the black-field `identityMark`: the
 * human decision of 2026-09-17 is homepage-hero only, and each further public
 * placement is its own decision under BRAND.md's Publication boundary.
 */
export const identityMarkTransparent: ImageMetadata = identityMarkTransparentSource;

/**
 * The Asteria Field map plates (AF-01, AF-02, AF-03), imported from their
 * canonical `docs/area/` copies and rendered through the `asteria-plates` media
 * key.
 *
 * Release: human story owner, 2026-09-17 (relayed by the operator), recorded in
 * `.agents/work/briefs/001-project-announcement.md` and
 * `docs/SCENARIO.md` §Continuity and release controls — the name, the planning
 * centre coordinates, and these three plates are released for article 001. The
 * wiki area-page node `/wiki/area/asteria-field/` is additionally public at step
 * 003 on the strength of the operator's Gate A answer 2026-09-17 13:40 CEST on
 * gate card `t_9b2a308d` (Gate A selected A), recorded in `docs/SCENARIO.md`
 * §Continuity and release controls; the withheld families — landing-design
 * facts: ellipse geometry, P0 touchdown zone, science-zone plan, hazard
 * inventory, traverse logic, `AF-*` unit identifiers — stay withheld per H1
 * decision 2026-09-17 option i.
 *
 * The plates are generated visualizations, not orbital imagery: whoever renders
 * them must print the provenance sentence registered in
 * `src/features/news/media.ts`. The same exception applies to them: only article
 * 001 and the wiki area-page node release these plates; every other Asteria
 * Field planning artefact, and the landing-design material inside
 * `docs/area/AREA.md`, stays gated (`scripts/guards.mjs`).
 */
export const asteriaPlate01: ImageMetadata = asteriaMarsLocatorSource;
export const asteriaPlate02: ImageMetadata = asteriaRegionalContextSource;
export const asteriaPlate03: ImageMetadata = asteriaLocalOperationsSource;

/**
 * The 002 sensor illustration, imported from its `docs/payload/` dossier.
 *
 * The placed plate is the released 002 candidate — `03-dust-and-contact-closeup`,
 * SHA-256 `47d39a0b…` — exported to the stable dossier path
 * `payload-sensor-illustration.png` by the editor's 2026-09-17 decision on card
 * `t_00b65567` (recorded in `.agents/work/reviews/002-payload-selection-media.md`
 * §11.4), replacing the plate card `t_4b49346b` first exported
 * (`01-spectral-sampling`, SHA-256 `8839f66a…`, which stays an approved,
 * unplaced candidate). The dossier keeps its other 002 candidate renders; only
 * the stable export is placed.
 *
 * The operator's 2026-09-17 swap candidate (SHA-256 `a70d306c…`) was returned
 * by that decision: the bytes are the render the review entered as
 * `03-attempt2-REJECTED-side-mattes-stars` (black side mattes, a star field),
 * so no site source imports or references it. The decision and its supersession
 * ledger are the §11 record named above.
 *
 * It is illustrative artwork, not mission imagery: no payload hardware is
 * depicted or named, and the article's `mediaAlt` carries that statement to the
 * reader (a one-plate key renders no per-plate caption, so the registry cannot
 * print it). Only the `payload-sensor-illustration` media key renders this
 * asset, and only the article the release card wires that key into.
 */
export const payloadSensorIllustration: ImageMetadata = payloadSensorIllustrationSource;

/**
 * The approved studio reference of the surface vehicle, imported from its
 * canonical `docs/vehicles/pathfinder/` copy.
 *
 * Release: step 003 (2026-09-17), recorded by the editorial gate on
 * `t_1e84c815` (`.agents/work/reviews/003-vehicle-design.md` §2, §8.1). The
 * placed asset is `canonical.png` — sha256 `8dbb33d5…`, 1,448 × 1,086, 1,889,350
 * B — and it is the only file of the dossier this site imports: the other four
 * studio renders are approved canonical references that nothing places, and
 * `contact-arm-scene.png` stays withheld (`scripts/guards.mjs` fails the build
 * if any reference resolves to it).
 *
 * It is illustrative artwork, not mission imagery: the studio views are renders
 * of a fictional vehicle for a fictional programme, and only the article the
 * release card wires the `vehicle-references` media key into renders it.
 */
export const vehicleStudioReference: ImageMetadata = vehicleStudioReferenceSource;

/**
 * The approved studio reference of the Ariane 64 launch vehicle, imported from
 * its canonical `docs/vehicles/ariane/` copy.
 *
 * Release: step 004 (2026-09-17), recorded by the editorial gate on
 * `t_58c90eb5` (`.agents/work/reviews/ariane-plates-selection.md` §8, §10).
 * The placed asset is `canonical.png` — sha256 `cf3323bf…`, 1,122 × 1,402,
 * 1,040,823 B — and card C verified that it already sits at its admitted
 * canonical name. It is the only file of the ariane dossier this site imports;
 * the dossier's other studio renders are approved or withheld canonical
 * references that nothing places (`front-left` is an admitted alternative
 * only), so this is the one plate the `launch-vehicle-reference` key resolves.
 *
 * It is illustrative artwork, not mission imagery: the studio views are renders
 * of a fictional vehicle for a fictional programme, and only the article the
 * release card wires the `launch-vehicle-reference` media key into renders it.
 */
export const launchVehicleReference: ImageMetadata = launchVehicleReferenceSource;

/**
 * The approved pad lift-off plate of the Ariane 64 launcher, imported from its
 * canonical `docs/vehicles/ariane/` copy.
 *
 * Release: step 005 (2026-09-19), recorded by the editorial gate on
 * `t_fd724cd9` (`.agents/work/reviews/005-launch.md` §10). The placed asset is
 * `lunch.png` — sha256 `c4744fff…`, 1,122 × 1,402, 2,054,094 B — the pad
 * lift-off frame step 004 deliberately withheld for step 005
 * (`.agents/work/reviews/ariane-plates-selection.md` §6 row 5). It is the
 * second file of the ariane dossier this site imports; the dossier's in-transit
 * plate `travelling-to-mars.png` stays withheld (`scripts/guards.mjs` fails the
 * build if any reference resolves to it, and the matching
 * `withheldArianePlates` row pins it in `test/guards.test.mjs`).
 *
 * It is illustrative artwork, not mission photography: the alt text carries
 * that statement, and only the article the release card wires the
 * `launch-lift-off` media key into renders it.
 */
export const launchLiftOff: ImageMetadata = launchLiftOffSource;

/**
 * The first surface panorama plate, imported from its canonical
 * `docs/area/` copy and rendered through the `surface-panorama` media
 * key (card `t_2d42e950`, step `009-health-packet-panorama`).
 *
 * Release: reviewer gate t_26edaeda, 2026-09-19. The placed asset is
 * candidate 02-terrain-forward — sha256 `fec43bacc306b73a09e181b26bf964dd79feb7c94dc21645e4b2e0f32c402c9b`,
 * 1344×768 PNG 8-bit RGB non-interlaced. It is illustrative artwork,
 * not mission photography: the alt text carries that statement, and the
 * key renders no per-plate caption, so the "illustrative, not mission
 * photography" statement reaches the reader through `mediaAlt` instead.
 * Only this plate is placed; the sibling candidate `01-rover-scene`
 * (sha256 `9fc4bd2e…`) is usable as an alternative only, not placed.
 */
export const surfacePanorama: ImageMetadata = surfacePanoramaSource;

/**
 * The egress plate, imported from its canonical `docs/area/` copy and
 * rendered through the `egress` media key (card `t_b9751c8c`, step
 * `009-first-surface-checks`).
 *
 * Release: reviewer gate t_f3dd8fd2 (run 372), 2026-09-19. The placed
 * asset is `01-egress.png` — sha256 `4c3968e9…`, 1200×896 PNG 8-bit
 * RGB non-interlaced — the corrected candidate approved in the
 * re-gate: clearly visible inclined ramp, stationary rover fully on
 * the ramp, no wheel tracks behind, contact arm stowed, six wheels,
 * warm-white body with muted red panels, dark deck, short mast.
 *
 * It is illustrative artwork, not mission photography: the alt text
 * carries that statement, and the key renders no per-plate caption,
 * so the "illustrative, not mission photography" statement reaches
 * the reader through `mediaAlt` instead. Only this plate is placed.
 */
export const egress: ImageMetadata = egressSource;

/**
 * The flight stack at the launch campaign site, imported from its
 * `docs/mission/` copy and rendered through the `stack-arrival` media
 * key (card `t_b30fae21`, audit item #1).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * The image depicts the flight stack assembled and upright inside a
 * clean industrial preparation hall. It is illustrative artwork, not
 * documentary: the alt text carries that statement.
 */
export const stackArrival: ImageMetadata = stackArrivalSource;

/**
 * The flight stack under review in the integration hall, imported from
 * its `docs/mission/` copy and rendered through the `readiness-review`
 * media key (card `t_b30fae21`, audit item #2).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * The mood is a methodical systems check — composed, calm, nothing
 * dramatic. Illustrative artwork, not documentary.
 */
export const readinessReview: ImageMetadata = readinessReviewSource;

/**
 * The first trajectory-correction burn in deep space, imported from its
 * `docs/mission/` copy and rendered through the `cruise-correction`
 * media key (card `t_b30fae21`, audit item #3).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * A generic cruise-stage stand-in fires a small correction burn.
 * Illustrative artwork, not documentary.
 */
export const cruiseCorrection: ImageMetadata = cruiseCorrectionSource;

/**
 * The cruise checkout in deep space, imported from its `docs/mission/`
 * copy and rendered through the `cruise-checkout` media key
 * (card `t_b30fae21`, audit item #4).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * The same generic cruise-stage stand-in holds station with arrays
 * deployed, no engine firing. Illustrative artwork, not documentary.
 */
export const cruiseCheckout: ImageMetadata = cruiseCheckoutSource;

/**
 * The final correction burn with Mars ahead, imported from its
 * `docs/mission/` copy and rendered through the `cruise-final-approach`
 * media key (card `t_b30fae21`, audit item #5).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * Mars now appears clearly ahead while the same stand-in fires its
 * final correction. Illustrative artwork, not documentary.
 */
export const cruiseFinalApproach: ImageMetadata = cruiseFinalApproachSource;

/**
 * The landing platform on the surface with the rover aboard, imported
 * from its `docs/mission/` copy and rendered through the
 * `landing-confirmation` media key (card `t_b30fae21`, audit item #6).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * The moment of confirmation: landed, powered, everything still on
 * the platform. Illustrative artwork, not documentary.
 */
export const landingConfirmation: ImageMetadata = landingConfirmationSource;

/**
 * RH-01 after its first controlled drive, imported from its
 * `docs/mission/` copy and rendered through the `first-drive` media
 * key (card `t_b30fae21`, audit item #7).
 *
 * Release: 2026-09-19, generated for the published-image audit.
 * The rover on a rocky plain at Asteria Field with two clean wheel-track
 * lines behind it. Drive evidence per the article's own milestone.
 * Illustrative artwork, not documentary.
 */
export const firstDrive: ImageMetadata = firstDriveSource;

/**
 * The approved plate of the closed record shelf, imported from its
 * canonical `docs/mission/` copy and rendered through the
 * `archive-final-report` media key (card `t_8d3e08e4` → `t_44dc0760`,
 * step `011-archive-final-report`).
 *
 * Release: 2026-09-20, approved by the editorial gate on `t_44dc0760`.
 * The placed asset is `archive-final-report-1` (SHA-256
 * `5f8b1e64…`), 1344×768, 16:9, 8-bit RGB PNG — closed leather-bound
 * volumes on a dark wooden shelf in warm amber light, with muted rust
 * tones and a single cool teal-green accent. Illustrative artwork, not
 * mission photography: the alt text carries that statement, and the key
 * renders no caption, so the "illustrative artwork, not mission
 * photography" statement reaches the reader through the article's
 * approved `mediaAlt` instead.
 *
 * Only this plate is placed; candidate 2 did not generate and was not
 * re-generated (one-plate key).
 */
export const archiveFinalReport: ImageMetadata = archiveFinalReportSource;

/**
 * The approved plate of the end-of-life declaration at Asteria Field,
 * imported from its canonical `docs/mission/` copy and rendered through
 * the `end-of-life` media key (card `t_5c74d1fe` → `t_6065f75a`, step
 * `011-end-of-life`).
 *
 * Release: 2026-09-20, approved by the editorial gate on `t_6065f75a`.
 * The placed asset is `end-of-life-candidate-1` (SHA-256
 * `d55d0105…`), 1344×768, 16:9, 8-bit RGB PNG — a lone relay station
 * mast-plus-antenna silhouette on the Asteria Field plain at dusk, its
 * steerable-downlink dish raised and an abstract soft teal glow near its
 * base, under a warm rust-toned sky with a cool teal band. Illustrative
 * artwork, not mission photography: the alt text carries that statement,
 * and the key renders no caption, so the "illustrative artwork, not
 * mission photography" statement reaches the reader through the article's
 * approved `mediaAlt` instead.
 *
 * Only this plate is placed; candidate 2 was not selected
 * (alternative only).
 */
export const endOfLife: ImageMetadata = endOfLifeSource;
