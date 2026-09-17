import {
    asteriaPlate01,
    asteriaPlate02,
    asteriaPlate03,
    identityMark,
    payloadSensorIllustration,
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
     * The asset is the editor-approved candidate (`t_327899d5`); the label is
     * the one approved with it. No `provenance` line: the registry prints it
     * only through `plateCaptionText()`, which runs for plate sets, and this key
     * renders no caption — the "illustrative artwork" statement reaches the
     * reader through the article's approved `mediaAlt` instead.
     */
    'payload-sensor-illustration': {
        plates: [{ src: payloadSensorIllustration, label: 'Red Horizon // payload sensor illustration' }],
    },
};

export function resolveNewsMedia(key: NewsMediaKey | undefined): NewsMediaSet | undefined {
    return key ? newsMedia[key] : undefined;
}
