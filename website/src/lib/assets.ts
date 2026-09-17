import type { ImageMetadata } from 'astro';

import identityMarkSource from '../../../docs/brand/logo-bg-black.png';
import asteriaLocalOperationsSource from '../../../docs/area/asteria-field-03-local-operations.png';
import asteriaMarsLocatorSource from '../../../docs/area/asteria-field-01-mars-locator.png';
import asteriaRegionalContextSource from '../../../docs/area/asteria-field-02-regional-context.png';

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
 * The surface-vehicle dossier is withheld and the mission timeline is private,
 * so `scripts/guards.mjs` fails the build if a reference into either one appears
 * anywhere in the site source.
 */
export const identityMark: ImageMetadata = identityMarkSource;

/**
 * The Asteria Field map plates (AF-01, AF-02, AF-03), imported from their
 * canonical `docs/area/` copies and rendered through the `asteria-plates` media
 * key.
 *
 * Release: human story owner, 2026-09-17 (relayed by the operator), recorded in
 * `.agents/work/briefs/001-project-announcement.md` and
 * `docs/SCENARIO.md` §Continuity and release controls — the name, the planning
 * centre coordinates, and these three plates are released for article 001 only.
 * Every other Asteria Field planning artefact, and the landing-design material
 * inside `docs/area/AREA.md`, stays gated (`scripts/guards.mjs`).
 *
 * The plates are generated visualizations, not orbital imagery: whoever renders
 * them must print the provenance sentence registered in
 * `src/features/news/media.ts`. Only article 001 has a release for them.
 */
export const asteriaPlate01: ImageMetadata = asteriaMarsLocatorSource;
export const asteriaPlate02: ImageMetadata = asteriaRegionalContextSource;
export const asteriaPlate03: ImageMetadata = asteriaLocalOperationsSource;
