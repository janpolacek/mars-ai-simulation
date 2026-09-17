/**
 * Media keys a news item may name in its `media:` frontmatter field, and the
 * authoring requirements each key carries.
 *
 * Article copy cannot import an image, so frontmatter names a key and
 * `src/features/news/media.ts` resolves it to the canonical `docs/` assets. An
 * unknown key fails the content schema instead of silently dropping the image,
 * and a key whose fields are missing, blank, or short of its plate count fails
 * as well: a three-plate set must not build as two plates, an unlabelled figure
 * block, or a caption the article never wrote.
 *
 * This module deliberately imports nothing: the content schema in
 * `src/content.config.ts` loads it, and the schema must not pull in an image.
 */

/** Media keys a news item may declare. */
export const newsMediaKeys = ['programme-identity', 'asteria-plates', 'payload-sensor-illustration'] as const;

export type NewsMediaKey = (typeof newsMediaKeys)[number];

/** What one media key requires of the article's frontmatter. */
export interface NewsMediaRequirement {
    /** Plates `src/features/news/media.ts` must supply for this key. */
    readonly plateCount: number;
    /** `mediaAlt` entries the frontmatter must carry — one per plate, in plate order. */
    readonly altCount: number;
    /** `mediaCaption` entries the frontmatter must carry — 0 when the key renders no caption. */
    readonly captionCount: number;
    /** Whether `mediaLabel` is required. */
    readonly requiresLabel: boolean;
}

export const newsMediaRequirements: Record<NewsMediaKey, NewsMediaRequirement> = {
    'programme-identity': { plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false },
    'asteria-plates': { plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true },
    /**
     * One illustration, one alt text, no caption (card `t_4b49346b`).
     *
     * The plate count is the binding half: `src/features/news/media.ts` must
     * resolve the key to one plate or the build fails, so a key whose asset was
     * never placed cannot reach the site. `requiresLabel` stays `false` as the
     * card specifies — the label is optional here, not required.
     */
    'payload-sensor-illustration': { plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false },
};

export function isNewsMediaKey(value: string): value is NewsMediaKey {
    return (newsMediaKeys as readonly string[]).includes(value);
}

/** A per-plate frontmatter value: one entry, or one entry per plate. */
export type NewsMediaText = string | readonly string[];

/** A frontmatter value as a list, so a single entry and a per-plate list read alike. */
export function newsMediaTextList(value: NewsMediaText | undefined): string[] {
    if (value === undefined) return [];
    return typeof value === 'string' ? [value] : [...value];
}

const isBlank = (value: string) => value.trim().length === 0;

/** A field whose value must be corrected before the article can build. */
export interface NewsMediaIssue {
    readonly field: 'media' | 'mediaAlt' | 'mediaLabel' | 'mediaCaption';
    readonly message: string;
}

function textIssue(field: 'mediaAlt' | 'mediaCaption', media: NewsMediaKey, count: number): NewsMediaIssue {
    return {
        field,
        message: count === 1
            ? `${field} must be exactly one non-empty entry when media is ${media}`
            : `${field} must be exactly ${count} non-empty entries when media is ${media} — one per plate, in plate order`,
    };
}

/**
 * Check the media fields an article declares against the requirements of its
 * key. Returns one entry per problem, so the content schema can fail the build
 * with a field path and a message instead of dropping a plate or a caption.
 */
export function newsMediaIssues(data: {
    media?: string | undefined;
    mediaAlt?: NewsMediaText | undefined;
    mediaLabel?: string | undefined;
    mediaCaption?: NewsMediaText | undefined;
}): NewsMediaIssue[] {
    const { media } = data;
    if (media === undefined) return [];

    if (!isNewsMediaKey(media)) {
        return [{ field: 'media', message: `media must be one of: ${newsMediaKeys.join(', ')}` }];
    }

    const requirement = newsMediaRequirements[media];
    const issues: NewsMediaIssue[] = [];

    const alts = newsMediaTextList(data.mediaAlt);
    if (alts.length !== requirement.altCount || alts.some(isBlank)) {
        issues.push(textIssue('mediaAlt', media, requirement.altCount));
    }

    if (requirement.requiresLabel && isBlank(data.mediaLabel ?? '')) {
        issues.push({
            field: 'mediaLabel',
            message: `mediaLabel is required, and must not be empty, when media is ${media}`,
        });
    }

    const captions = newsMediaTextList(data.mediaCaption);
    if (captions.length !== requirement.captionCount || captions.some(isBlank)) {
        issues.push(
            requirement.captionCount === 0
                ? {
                    field: 'mediaCaption',
                    message: `media renders no per-plate caption when media is ${media}; remove mediaCaption`,
                }
                : textIssue('mediaCaption', media, requirement.captionCount),
        );
    }

    return issues;
}
