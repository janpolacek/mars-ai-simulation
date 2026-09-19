/*
 * Media contract suite: the `media:` frontmatter rules and the plate registry.
 *
 * These are the checks the content schema applies (`src/lib/media.ts`) and the
 * text composition the plate figures render (`src/features/news/plates.ts`).
 * They are asserted directly because `astro:content` is not loadable under
 * vitest, and because a three-plate article must fail the build — not render
 * two plates and a caption that lies — when its frontmatter is short.
 */
import { describe, expect, it } from 'vitest';

import { newsMedia, resolveNewsMedia } from '../src/features/news/media';
import { isPlateSet, plateAltText, plateCaptionText, plateFigures } from '../src/features/news/plates';
import {
    isNewsMediaKey,
    newsMediaIssues,
    newsMediaKeys,
    newsMediaRequirements,
    newsMediaTextList,
} from '../src/lib/media';

/** The provenance sentence every `asteria-plates` caption must carry. */
const provenance = 'Generated visualization for Red Horizon scenario planning, 2026-09-16. Not orbital imagery.';

const asteriaFrontmatter = {
    media: 'asteria-plates',
    mediaAlt: ['AF-01 alt text', 'AF-02 alt text', 'AF-03 alt text'],
    mediaLabel: 'Asteria Field // three map plates',
    mediaCaption: ['AF-01 caption', 'AF-02 caption', 'AF-03 caption'],
};

/**
 * The one-plate key the 002 payload illustration resolves through (card
 * `t_4b49346b`): one alt entry, no caption, label optional.
 */
const payloadFrontmatter = {
    media: 'payload-sensor-illustration',
    mediaAlt: 'Illustrative artwork, not mission photography: coloured beams fall on a rough dark rock.',
};

/**
 * The one-plate key the 003 surface-vehicle studio reference resolves through
 * (card `t_accf6f7a`): one alt entry, no caption, and the label the editorial
 * gate approved for it — which carries a U+00B7 MIDDLE DOT that must not be
 * normalised.
 */
const vehicleFrontmatter = {
    media: 'vehicle-references',
    mediaAlt: 'Illustrative artwork of the RH-01 Pathfinder rover in its studio baseline configuration.',
    mediaLabel: 'RH-01 Pathfinder · studio reference',
};

/**
 * The one-plate key the 004 launcher studio reference resolves through (card
 * `t_58c90eb5`): one alt entry, no caption, and the label the editorial
 * verdict approved for it — with a U+00B7 MIDDLE DOT that must not be
 * normalised.
 */
const launcherFrontmatter = {
    media: 'launch-vehicle-reference',
    mediaAlt:
        'Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied.',
    mediaLabel: 'Ariane 64 · engineering reference',
};

/**
 * The one-plate key the 005 pad lift-off resolves through (card `t_d562771d`,
 * step `005-launch`): one alt entry, no caption, and the label the editorial
 * gate approved with it — carrying the same U+00B7 MIDDLE DOT the other
 * Ariane labels use, which must not be normalised.
 */
const liftOffFrontmatter = {
    media: 'launch-lift-off',
    mediaAlt:
        'Illustrative artwork, not mission photography: a white uncrewed heavy-lift launcher lifts off and climbs from its pad, one central core with four strap-on boosters and five firing engine bells, bright engine flame and heavy trailing smoke, two lattice towers beside the pad, blue sky with clouds. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied.',
    mediaLabel: 'Ariane 64 · lift-off',
};

/**
 * The one-plate key the 009 first surface panorama resolves through
 * (card `t_2d42e950`, step `009-health-packet-panorama`): one alt
 * entry, no caption, and the label the editorial gate approved for it.
 */
const surfacePanoramaFrontmatter = {
    media: 'surface-panorama',
    mediaAlt:
        "Illustrative panorama of the fictional Red Horizon mission's landing terrain at Asteria Field from the rover's first mast-height view: a wide rocky plain scattered with dark rocks and dust ripples, a pale layered mesa near the horizon under a dusty ochre sky, with the edge of the landing platform and part of the rover's wheel just visible in one corner for scale. Not mission photography.",
    mediaLabel: 'RH-01 Pathfinder · first surface panorama',
};

const fieldsOf = (issues) => issues.map((issue) => issue.field);

describe('media keys and their requirements', () => {
    it('declares every key it resolves, and no key it does not', () => {
        expect(newsMediaKeys).toEqual([
            'programme-identity',
            'asteria-plates',
            'payload-sensor-illustration',
            'vehicle-references',
            'launch-vehicle-reference',
            'launch-lift-off',
            'surface-panorama',
            'egress',
        ]);
        expect(isNewsMediaKey('programme-identity')).toBe(true);
        expect(isNewsMediaKey('asteria-plates')).toBe(true);
        expect(isNewsMediaKey('payload-sensor-illustration')).toBe(true);
        expect(isNewsMediaKey('vehicle-references')).toBe(true);
        expect(isNewsMediaKey('launch-vehicle-reference')).toBe(true);
        expect(isNewsMediaKey('launch-lift-off')).toBe(true);
        expect(isNewsMediaKey('surface-panorama')).toBe(true);
        expect(isNewsMediaKey('egress')).toBe(true);
        expect(isNewsMediaKey('asteria-field')).toBe(false);
    });

    it('requires three plates, three alts and three captions for asteria-plates', () => {
        expect(newsMediaRequirements['asteria-plates']).toEqual({
            plateCount: 3,
            altCount: 3,
            captionCount: 3,
            requiresLabel: true,
        });
        expect(newsMediaRequirements['programme-identity']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    it('requires one plate, one alt, no caption and no label for payload-sensor-illustration', () => {
        expect(newsMediaRequirements['payload-sensor-illustration']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    /*
     * Step 003's key (card `t_accf6f7a`). The editorial gate decided
     * `requiresLabel: false` and one placed plate, so this pins the shape the
     * approved article frontmatter is written against — a key that started
     * demanding a second plate or a caption would fail the build against an
     * article nobody changed.
     */
    it('requires one plate, one alt, no caption and no label for vehicle-references', () => {
        expect(newsMediaRequirements['vehicle-references']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    /*
     * Step 004's key (card `t_58c90eb5`). The same one-plate, one-alt,
     * no-caption, optional-label shape as `vehicle-references`, so the approved
     * article frontmatter is written against the same contract.
     */
    it('requires one plate, one alt, no caption and no label for launch-vehicle-reference', () => {
        expect(newsMediaRequirements['launch-vehicle-reference']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    /*
     * Step 005's key (card `t_d562771d`). The same one-plate, one-alt,
     * no-caption, optional-label shape as the two studio-reference keys, so the
     * approved article frontmatter is written against the same contract.
     */
    it('requires one plate, one alt, no caption and no label for launch-lift-off', () => {
        expect(newsMediaRequirements['launch-lift-off']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    it('requires one plate, one alt, no caption and no label for surface-panorama', () => {
        expect(newsMediaRequirements['surface-panorama']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    it('requires one plate, one alt, no caption and no label for egress', () => {
        expect(newsMediaRequirements['egress']).toEqual({
            plateCount: 1,
            altCount: 1,
            captionCount: 0,
            requiresLabel: false,
        });
    });

    it('accepts the existing programme-identity frontmatter', () => {
        expect(newsMediaIssues({ media: 'programme-identity', mediaAlt: 'The Red Horizon programme mark.' })).toEqual(
            [],
        );
    });

    it('accepts the three-plate frontmatter', () => {
        expect(newsMediaIssues(asteriaFrontmatter)).toEqual([]);
    });

    it('still fails an unknown media key, naming the keys that exist', () => {
        const issues = newsMediaIssues({ ...asteriaFrontmatter, media: 'asteria-field' });

        expect(fieldsOf(issues)).toEqual(['media']);
        expect(issues[0].message).toContain(
            'media must be one of: programme-identity, asteria-plates, payload-sensor-illustration, vehicle-references, launch-vehicle-reference, launch-lift-off, surface-panorama, egress',
        );
    });

    it('accepts the one-plate payload frontmatter', () => {
        expect(newsMediaIssues(payloadFrontmatter)).toEqual([]);
    });

    it('fails the payload key with no alt or one blank alt, and keeps its label optional', () => {
        expect(fieldsOf(newsMediaIssues({ media: 'payload-sensor-illustration' }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...payloadFrontmatter, mediaAlt: ['  '] }))).toEqual(['mediaAlt']);
        // `requiresLabel: false` for this key, so an absent label is not an issue.
        expect(newsMediaIssues({ ...payloadFrontmatter, mediaLabel: undefined })).toEqual([]);
    });

    it('fails a caption on the payload key rather than ignoring it', () => {
        const issues = newsMediaIssues({ ...payloadFrontmatter, mediaCaption: 'A caption nobody renders' });

        expect(fieldsOf(issues)).toEqual(['mediaCaption']);
        expect(issues[0].message).toContain('remove mediaCaption');
    });

    it('accepts the approved one-plate vehicle frontmatter, label included', () => {
        expect(newsMediaIssues(vehicleFrontmatter)).toEqual([]);
    });

    it('accepts the approved one-plate launcher frontmatter, label included', () => {
        expect(newsMediaIssues(launcherFrontmatter)).toEqual([]);
    });

    it('accepts the approved one-plate lift-off frontmatter, label included', () => {
        expect(newsMediaIssues(liftOffFrontmatter)).toEqual([]);
    });

    it('accepts the approved one-plate surface-panorama frontmatter, label included', () => {
        expect(newsMediaIssues(surfacePanoramaFrontmatter)).toEqual([]);
    });

    it('fails the surface-panorama key with no alt or one blank alt', () => {
        expect(fieldsOf(newsMediaIssues({ media: 'surface-panorama' }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...surfacePanoramaFrontmatter, mediaAlt: ['  '] }))).toEqual(['mediaAlt']);
        // `requiresLabel: false` for this key, so an absent label is not an issue.
        expect(newsMediaIssues({ ...surfacePanoramaFrontmatter, mediaLabel: undefined })).toEqual([]);
    });

    it('fails a caption on the surface-panorama key rather than ignoring it', () => {
        const issues = newsMediaIssues({ ...surfacePanoramaFrontmatter, mediaCaption: 'A caption nobody renders' });

        expect(fieldsOf(issues)).toEqual(['mediaCaption']);
        expect(issues[0].message).toContain('remove mediaCaption');
    });

    it('fails the launcher key with no alt, a blank alt, or a caption it never renders', () => {
        expect(fieldsOf(newsMediaIssues({ media: 'launch-vehicle-reference' }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...launcherFrontmatter, mediaAlt: ['  '] }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...launcherFrontmatter, mediaCaption: 'A caption nobody renders' }))).toEqual(
            [
                'mediaCaption',
            ],
        );
        // `requiresLabel: false` for this key, so an absent label is not an issue.
        expect(newsMediaIssues({ ...launcherFrontmatter, mediaLabel: undefined })).toEqual([]);
    });

    it('fails the vehicle key with no alt, a blank alt, or a caption it never renders', () => {
        expect(fieldsOf(newsMediaIssues({ media: 'vehicle-references' }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...vehicleFrontmatter, mediaAlt: ['  '] }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...vehicleFrontmatter, mediaCaption: 'A caption nobody renders' }))).toEqual([
            'mediaCaption',
        ]);
        // `requiresLabel: false` for this key, so an absent label is not an issue.
        expect(newsMediaIssues({ ...vehicleFrontmatter, mediaLabel: undefined })).toEqual([]);
    });

    it('fails a three-plate key that lists two alts instead of three', () => {
        const issues = newsMediaIssues({ ...asteriaFrontmatter, mediaAlt: ['AF-01 alt text', 'AF-02 alt text'] });

        expect(fieldsOf(issues)).toEqual(['mediaAlt']);
        expect(issues[0].message).toContain('exactly 3 non-empty entries');
    });

    it('fails a plate set with a blank alt entry or no alt at all', () => {
        expect(fieldsOf(newsMediaIssues({ ...asteriaFrontmatter, mediaAlt: '   ' }))).toEqual(['mediaAlt']);
        expect(fieldsOf(newsMediaIssues({ ...asteriaFrontmatter, mediaAlt: undefined }))).toEqual(['mediaAlt']);
    });

    it('fails a plate set with no label and with missing or blank captions', () => {
        expect(fieldsOf(newsMediaIssues({ ...asteriaFrontmatter, mediaLabel: '  ' }))).toEqual(['mediaLabel']);
        expect(fieldsOf(newsMediaIssues({ ...asteriaFrontmatter, mediaCaption: undefined }))).toEqual(['mediaCaption']);
        expect(fieldsOf(newsMediaIssues({ ...asteriaFrontmatter, mediaCaption: ['a', 'b', ' '] }))).toEqual([
            'mediaCaption',
        ]);
    });

    it('fails a caption the declared key does not render, rather than ignoring it', () => {
        const issues = newsMediaIssues({
            media: 'programme-identity',
            mediaAlt: 'The Red Horizon programme mark.',
            mediaCaption: 'A caption nobody renders',
        });

        expect(fieldsOf(issues)).toEqual(['mediaCaption']);
        expect(issues[0].message).toContain('remove mediaCaption');
    });

    it('reads one entry and a per-plate list alike', () => {
        expect(newsMediaTextList('only')).toEqual(['only']);
        expect(newsMediaTextList(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
        expect(newsMediaTextList(undefined)).toEqual([]);
    });
});

describe('plate registry', () => {
    it('resolves every declared key to its required plate count', () => {
        for (const key of newsMediaKeys) {
            const set = newsMedia[key];

            expect(set, `no registry entry for ${key}`).toBeDefined();
            expect(set.plates.length, `plate count for ${key}`).toBe(newsMediaRequirements[key].plateCount);
            expect(set.plates.every((plate) => plate.label.trim().length > 0), `labels for ${key}`).toBe(true);
        }
    });

    it('renders three plates for asteria-plates and one for programme-identity', () => {
        expect(newsMedia['asteria-plates'].plates.map((plate) => plate.label)).toEqual([
            'AF-01 · Mars locator',
            'AF-02 · Regional context',
            'AF-03 · Local operations frame',
        ]);
        expect(isPlateSet(newsMedia['asteria-plates'])).toBe(true);
        expect(isPlateSet(newsMedia['programme-identity'])).toBe(false);
    });

    it('resolves payload-sensor-illustration to exactly one plate with the approved label', () => {
        const set = newsMedia['payload-sensor-illustration'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('Red Horizon // payload sensor illustration');
        expect(isPlateSet(set)).toBe(false);
        // The plate points at the canonical docs/ export, not a copy under
        // website/public.
        expect(String(set.plates[0].src)).toContain('payload-sensor-illustration');
    });

    /*
     * The 003 studio reference (card `t_accf6f7a`). The label is the approved
     * string, and the assertion that matters is the code point: the approved
     * label separates the vehicle from the view with a U+00B7 MIDDLE DOT, so a
     * normalised copy (a hyphen, U+2027, U+30FB) is a different, unapproved
     * string even though it may look alike.
     */
    it('resolves vehicle-references to exactly one plate with the approved label', () => {
        const set = newsMedia['vehicle-references'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('RH-01 Pathfinder · studio reference');
        expect([...set.plates[0].label].filter((character) => character.codePointAt(0) === 0x00b7)).toHaveLength(1);
        expect(isPlateSet(set)).toBe(false);
        // One plate of the dossier, imported from its canonical docs/ copy.
        expect(String(set.plates[0].src)).toContain('canonical');
        expect(String(set.plates[0].src)).toContain('vehicle');
    });

    /*
     * The 004 launcher studio reference (card `t_58c90eb5`). The label is the
     * approved string and carries the same U+00B7 MIDDLE DOT the 003 label
     * does; the plate is imported from its canonical `docs/vehicles/ariane/`
     * copy.
     */
    it('resolves launch-vehicle-reference to exactly one plate with the approved label', () => {
        const set = newsMedia['launch-vehicle-reference'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('Ariane 64 · engineering reference');
        expect([...set.plates[0].label].filter((character) => character.codePointAt(0) === 0x00b7)).toHaveLength(1);
        expect(isPlateSet(set)).toBe(false);
        // One plate of the dossier, imported from its canonical docs/ copy.
        expect(String(set.plates[0].src)).toContain('canonical');
        expect(String(set.plates[0].src)).toContain('ariane');
    });

    /*
     * The 005 pad lift-off (card `t_d562771d`). The label is the approved
     * string and carries the same U+00B7 MIDDLE DOT the 003/004 labels do; the
     * plate is imported from its canonical `docs/vehicles/ariane/` copy.
     */
    it('resolves launch-lift-off to exactly one plate with the approved label', () => {
        const set = newsMedia['launch-lift-off'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('Ariane 64 · lift-off');
        expect([...set.plates[0].label].filter((character) => character.codePointAt(0) === 0x00b7)).toHaveLength(1);
        expect(isPlateSet(set)).toBe(false);
        // One plate of the dossier, imported from its canonical docs/ copy.
        expect(String(set.plates[0].src)).toContain('lunch');
        expect(String(set.plates[0].src)).toContain('ariane');
    });

    /*
     * The 009 first surface panorama (card `t_2d42e950`).
     * The label is the approved string and carries the same U+00B7
     * MIDDLE DOT the other labels do.
     */
    it('resolves surface-panorama to exactly one plate with the approved label', () => {
        const set = newsMedia['surface-panorama'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('RH-01 Pathfinder · first surface panorama');
        expect([...set.plates[0].label].filter((character) => character.codePointAt(0) === 0x00b7)).toHaveLength(1);
        expect(isPlateSet(set)).toBe(false);
        // One plate of the dossier, imported from its canonical docs/ copy.
        expect(String(set.plates[0].src)).toContain('asteria-field-panorama-02');
    });

    it('resolves egress to exactly one plate with the approved label', () => {
        const set = newsMedia['egress'];

        expect(set.plates).toHaveLength(1);
        expect(set.plates[0].label).toBe('RH-01 Pathfinder · egress');
        expect([...set.plates[0].label].filter((character) => character.codePointAt(0) === 0x00b7)).toHaveLength(1);
        expect(isPlateSet(set)).toBe(false);
        // One plate of the dossier, imported from its canonical docs/ copy.
        expect(String(set.plates[0].src)).toContain('asteria-field-egress-01');
    });

    it('resolves every declared key and nothing else', () => {
        expect(resolveNewsMedia('asteria-plates')).toBe(newsMedia['asteria-plates']);
        expect(resolveNewsMedia('programme-identity')).toBe(newsMedia['programme-identity']);
        expect(resolveNewsMedia('payload-sensor-illustration')).toBe(newsMedia['payload-sensor-illustration']);
        expect(resolveNewsMedia('vehicle-references')).toBe(newsMedia['vehicle-references']);
        expect(resolveNewsMedia('launch-vehicle-reference')).toBe(newsMedia['launch-vehicle-reference']);
        expect(resolveNewsMedia('launch-lift-off')).toBe(newsMedia['launch-lift-off']);
        expect(resolveNewsMedia('surface-panorama')).toBe(newsMedia['surface-panorama']);
        expect(resolveNewsMedia('egress')).toBe(newsMedia['egress']);
        expect(resolveNewsMedia(undefined)).toBeUndefined();
    });
});

describe('plate alt text and captions', () => {
    const set = newsMedia['asteria-plates'];
    const alts = asteriaFrontmatter.mediaAlt;
    const captions = asteriaFrontmatter.mediaCaption;

    it('uses one frontmatter alt entry per plate', () => {
        const rendered = set.plates.map((_, index) => plateAltText({ value: alts, plates: set.plates, index }));

        expect(rendered).toEqual(alts);
        expect(new Set(rendered).size).toBe(3);
    });

    it('labels a shared alt entry with the plate it describes', () => {
        expect(plateAltText({ value: 'One shared description.', plates: set.plates, index: 0 })).toBe(
            'AF-01 · Mars locator. One shared description.',
        );
    });

    it('prints the provenance sentence on every plate caption', () => {
        const rendered = set.plates.map((plate, index) =>
            plateCaptionText({ plate, plates: set.plates, captions, provenance: set.provenance, index })
        );

        expect(set.provenance).toBe(provenance);
        for (const caption of rendered) expect(caption).toContain(provenance);
        expect(rendered[0]).toBe(`AF-01 · Mars locator — AF-01 caption ${provenance}`);
        expect(rendered[1]).toBe(`AF-02 · Regional context — AF-02 caption ${provenance}`);
    });

    it('notes on AF-03 that the local-operations frame is fictional planning', () => {
        const rendered = plateCaptionText({
            plate: set.plates[2],
            plates: set.plates,
            captions,
            provenance: set.provenance,
            index: 2,
        });

        expect(rendered).toContain('AF-03 caption');
        expect(rendered).toContain('fictional scenario planning, not a confirmed operational plan');
        expect(rendered).toContain(provenance);
    });

    it('builds the three figures the plate block renders, in plate order', () => {
        const figures = plateFigures({ set, mediaAlt: alts, mediaCaption: captions });

        expect(figures.map((figure) => figure.src)).toEqual(set.plates.map((plate) => plate.src));
        expect(figures.map((figure) => figure.alt)).toEqual(alts);
        expect(figures.map((figure) => figure.caption)).toEqual([
            `AF-01 · Mars locator — AF-01 caption ${provenance}`,
            `AF-02 · Regional context — AF-02 caption ${provenance}`,
            `AF-03 · Local operations frame — AF-03 caption The local-operations frame is fictional scenario planning, not a confirmed operational plan. ${provenance}`,
        ]);
    });
});
