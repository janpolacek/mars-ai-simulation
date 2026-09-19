import {
    asteriaPlate01,
    asteriaPlate02,
    asteriaPlate03,
    egress,
    identityMark,
    launchLiftOff,
    launchVehicleReference,
    payloadSensorIllustration,
    surfacePanorama,
    vehicleStudioReference,
    stackArrival,
    readinessReview,
    cruiseCorrection,
    cruiseCheckout,
    cruiseFinalApproach,
    landingConfirmation,
    firstDrive,
} from '../../lib/assets';
import type { NewsMediaKey } from '../../lib/media';

import type { NewsMediaSet } from './plates';

/**
 * Resolves the `media:` key an article declares in its frontmatter to the
 * canonical `docs/` assets it renders. The content schema (`src/lib/media.ts`)
 * validates the key and the fields it requires, so an unknown key or a plate
 * set with missing text fails the build instead of silently dropping an image.
 *
 * Every key must resolve to exactly `newsMediaRequirements[key].plateCount`
 * plates — `website/test/news-media.test.mjs` asserts that, so a key added
 * without its assets cannot reach the site.
 */
export const newsMedia: Record<NewsMediaKey, NewsMediaSet> = {
    'programme-identity': {
        plates: [{ src: identityMark, label: 'Red Horizon programme identity' }],
    },
    'asteria-plates': {
        /**
         * Mandatory on every plate in this set (article 001 release, 2026-09-17):
         * the plates are generated visualizations, not orbital imagery. Printed
         * from here, not from frontmatter, so it cannot be omitted.
         */
        provenance: 'Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery.',
        plates: [
            { src: asteriaPlate01, label: 'AF-01 · Mars locator' },
            { src: asteriaPlate02, label: 'AF-02 · Regional context' },
            {
                src: asteriaPlate03,
                label: 'AF-03 · Local operations frame',
                captionNote:
                    'The local-operations frame is fictional scenario planning, not a confirmed operational plan.',
            },
        ],
    },
    /**
     * One illustration for the 002 payload article (card `t_4b49346b`).
     *
     * The asset is `docs/payload/payload-sensor-illustration.png` — the
     * released 002 candidate (`03-dust-and-contact-closeup`, SHA-256
     * `47d39a0b…`) exported to the stable dossier path by the editor's
     * 2026-09-17 decision on `t_00b65567`; the label is the one approved with
     * the key. The operator's swap candidate (SHA-256 `a70d306c…`) was
     * returned by that decision and no site source imports it. No `provenance`
     * line: the registry prints it only through `plateCaptionText()`, which runs
     * for plate sets, and this key renders no caption — the "illustrative
     * artwork" statement reaches the reader through the article's approved
     * `mediaAlt` instead.
     */
    'payload-sensor-illustration': {
        plates: [{ src: payloadSensorIllustration, label: 'Red Horizon // payload sensor illustration' }],
    },
    /**
     * One approved studio reference of the surface vehicle (card `t_accf6f7a`,
     * step `003-vehicle-design`).
     *
     * The asset is `docs/vehicles/pathfinder/canonical.png`, the primary studio view the
     * editorial gate confirmed by content hash (`t_1e84c815`,
     * `.agents/work/reviews/003-vehicle-design.md` §2). The label is the one
     * approved with it and carries a U+00B7 MIDDLE DOT, which must not be
     * normalised. No `provenance` line: this key renders no caption, so the
     * "illustrative artwork" statement reaches the reader through the article's
     * approved `mediaAlt` instead.
     *
     * Only this plate is placed. The dossier's other four studio renders are
     * canonical references that nothing imports, and its scene image stays
     * withheld — `scripts/guards.mjs` fails the build on a reference to it.
     */
    'vehicle-references': {
        plates: [{ src: vehicleStudioReference, label: 'RH-01 Pathfinder · studio reference' }],
    },
    /**
     * One approved studio reference of the Ariane 64 launch vehicle (card
     * `t_58c90eb5`, step `004-launch-provider`).
     *
     * The asset is `docs/vehicles/ariane/canonical.png`, the primary studio
     * view the editorial gate admitted and released (`.agents/work/reviews/
     * ariane-plates-selection.md` §10, hash `cf3323bf…`). The label is the one
     * approved with it and carries a U+00B7 MIDDLE DOT, which must not be
     * normalised. No `provenance` line: this key renders no caption, so the
     * "illustrative artwork" statement reaches the reader through the article's
     * approved `mediaAlt` instead.
     *
     * Only this plate is placed. The dossier's other studio renders are
     * canonical references that nothing imports; nothing in them matches a
     * guard marker, and `scripts/guards.mjs` keeps its `timeline`-only withheld
     * directory set.
     */
    'launch-vehicle-reference': {
        plates: [{ src: launchVehicleReference, label: 'Ariane 64 · engineering reference' }],
    },
    /**
     * One approved pad lift-off plate of the Ariane 64 launcher (card
     * `t_d562771d`, step `005-launch`).
     *
     * The asset is `docs/vehicles/ariane/lunch.png`, the pad lift-off frame the
     * step-004 plate review withheld for step 005 and the 005 editorial gate
     * released (`.agents/work/reviews/005-launch.md` §10). The label is the one
     * approved with it and carries a U+00B7 MIDDLE DOT, which must not be
     * normalised. No `provenance` line: this key renders no caption, so the
     * "illustrative artwork, not mission photography" statement reaches the
     * reader through the article's approved `mediaAlt` instead.
     *
     * Only this plate is placed. The dossier's in-transit render
     * `travelling-to-mars.png` stays withheld — `scripts/guards.mjs` fails the
     * build on a reference to it.
     */
    'launch-lift-off': {
        plates: [{ src: launchLiftOff, label: 'Ariane 64 · lift-off' }],
    },
    /**
     * One approved first surface panorama of the Asteria Field terrain
     * (card `t_2d42e950`, step `009-health-packet-panorama`).
     *
     * The asset is `docs/area/asteria-field-panorama-02.png`
     * — the 02-terrain-forward candidate, SHA-256 `fec43bac…`,
     * released by the 009 editorial gate (`.agents/work/reviews/
     * 009-health-packet-panorama.md` §14). The label is the one
     * approved with it and carries a U+00B7 MIDDLE DOT, which must
     * not be normalised. No `provenance` line: this key renders no
     * caption, so the "illustrative artwork, not mission photography"
     * statement reaches the reader through the article's approved
     * `mediaAlt` instead.
     *
     * Only this plate is placed; the sibling candidate `01-rover-scene`
     * (SHA-256 `9fc4bd2e…`) is usable as an alternative only, not placed.
     */
    'surface-panorama': {
        plates: [{ src: surfacePanorama, label: 'RH-01 Pathfinder · first surface panorama' }],
    },
    /**
     * One approved egress plate of RH-01 leaving the landing platform
     * (card `t_b9751c8c`, step `009-first-surface-checks`).
     *
     * The asset is `docs/area/asteria-field-egress-01.png` — the
     * corrected candidate approved in the re-gate (run 372),
     * sha256 `4c3968e9…`, 1200×896 — with a clearly visible inclined
     * ramp, stationary rover fully on the ramp, no wheel tracks
     * behind, contact arm stowed, six wheels, warm-white body with
     * muted red panels, dark deck, short mast. The label carries a
     * U+00B7 MIDDLE DOT that must not be normalised. No
     * `provenance` line: this key renders no caption, so the
     * "illustrative artwork, not mission photography" statement
     * reaches the reader through the article's approved `mediaAlt`
     * instead.
     */
    'egress': {
        plates: [{ src: egress, label: 'RH-01 Pathfinder · egress' }],
    },
    /**
     * One approved illustration of the flight stack at the launch
     * campaign site (card `t_b30fae21`, audit item #1).
     */
    'stack-arrival': {
        plates: [{ src: stackArrival, label: 'Red Horizon · stack at launch campaign site' }],
    },
    /**
     * One approved illustration of the flight stack under review in the
     * integration hall (card `t_b30fae21`, audit item #2).
     */
    'readiness-review': {
        plates: [{ src: readinessReview, label: 'Red Horizon · stack under review' }],
    },
    /**
     * One approved illustration of the first trajectory-correction burn
     * in deep space (card `t_b30fae21`, audit item #3).
     */
    'cruise-correction': {
        plates: [{ src: cruiseCorrection, label: 'Red Horizon · first correction burn' }],
    },
    /**
     * One approved illustration of the cruise checkout in deep space
     * (card `t_b30fae21`, audit item #4).
     */
    'cruise-checkout': {
        plates: [{ src: cruiseCheckout, label: 'Red Horizon · cruise checkout' }],
    },
    /**
     * One approved illustration of the final correction burn with Mars
     * ahead (card `t_b30fae21`, audit item #5).
     */
    'cruise-final-approach': {
        plates: [{ src: cruiseFinalApproach, label: 'Red Horizon · final approach correction' }],
    },
    /**
     * One approved illustration of the landing platform on the surface
     * with the rover aboard (card `t_b30fae21`, audit item #6).
     */
    'landing-confirmation': {
        plates: [{ src: landingConfirmation, label: 'Red Horizon · landing confirmed' }],
    },
    /**
     * One approved illustration of RH-01 after its first controlled drive
     * (card `t_b30fae21`, audit item #7).
     */
    'first-drive': {
        plates: [{ src: firstDrive, label: 'RH-01 Pathfinder · first drive' }],
    },
};

export function resolveNewsMedia(key: NewsMediaKey | undefined): NewsMediaSet | undefined {
    return key ? newsMedia[key] : undefined;
}
