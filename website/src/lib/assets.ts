import type { ImageMetadata } from 'astro';

import asteriaMarsLocatorSource from '../../../docs/area/asteria-field-01-mars-locator.png';
import asteriaRegionalContextSource from '../../../docs/area/asteria-field-02-regional-context.png';
import asteriaLocalOperationsSource from '../../../docs/area/asteria-field-03-local-operations.png';
import identityMarkSource from '../../../docs/brand/logo-bg-black.png';
import identityMarkTransparentSource from '../../../docs/brand/logo-transparent.png';
import payloadSensorIllustrationSource from '../../../docs/payload/payload-sensor-illustration.png';
import vehicleStudioReferenceSource from '../../../docs/vehicle/canonical.png';

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
 * The 002 sensor illustration, imported from its canonical `docs/payload/`
 * copy.
 *
 * Chosen and signed off by the editor (card `t_327899d5`, 2026-09-17) under the
 * human story owner's Gate 1 delegation recorded on `t_5a62fb28`, from the three
 * candidates the visuals card produced (`t_a9964b8d`). The approved candidate is
 * `01-spectral-sampling`, SHA-256 `8839f66a…`; card `t_4b49346b` copied that
 * file to the canonical path unchanged — no re-encode, crop or redraw — and the
 * export re-hashes to the same digest.
 *
 * It is illustrative artwork, not mission imagery: no payload hardware is
 * depicted or named, and the approved alt text carries that statement to the
 * reader (a one-plate key renders no per-plate caption, so the registry cannot
 * print it). Only the `payload-sensor-illustration` media key renders this
 * asset, and only the article the release card wires that key into.
 */
export const payloadSensorIllustration: ImageMetadata = payloadSensorIllustrationSource;

/**
 * The approved studio reference of the surface vehicle, imported from its
 * canonical `docs/vehicle/` copy.
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
