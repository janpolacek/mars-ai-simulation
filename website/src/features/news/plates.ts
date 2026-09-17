import type { ImageMetadata } from 'astro';

import { type NewsMediaText, newsMediaTextList } from '../../lib/media';

/**
 * One canonical plate in a media set.
 *
 * The plates themselves are imported through `src/lib/assets.ts`, the single
 * import point for canonical `docs/` media; nothing is copied into
 * `website/public`.
 */
export interface NewsMediaPlate {
    /** The canonical `docs/` asset. */
    readonly src: ImageMetadata;
    /** Short plate label, printed in every caption and used as a card label. */
    readonly label: string;
    /** Mandatory sentence this plate's caption must carry (safety or provenance). */
    readonly captionNote?: string;
}

/**
 * The plates one `media:` key resolves to, plus the text the site guarantees
 * for them. The provenance line lives here rather than in article frontmatter
 * so an author cannot forget it: every plate in the set prints it.
 */
export interface NewsMediaSet {
    readonly plates: readonly NewsMediaPlate[];
    /** Provenance sentence appended to every caption in the set. */
    readonly provenance?: string;
}

/** Alt text for one plate: its own frontmatter entry, or a shared entry led by the plate label. */
export function plateAltText(
    { value, plates, index }: { value: NewsMediaText | undefined; plates: readonly NewsMediaPlate[]; index: number },
): string {
    const entries = newsMediaTextList(value);
    if (entries.length === plates.length) return entries[index] ?? '';
    const shared = entries[0] ?? '';
    if (!shared) return '';
    const plate = plates[index];
    return plate ? `${plate.label}. ${shared}` : shared;
}

/** One plate's caption: its label, then the article's own caption line, its note, and the set provenance. */
export function plateCaptionText(
    { plate, plates, captions, provenance, index }: {
        plate: NewsMediaPlate;
        plates: readonly NewsMediaPlate[];
        captions: NewsMediaText | undefined;
        provenance: string | undefined;
        index: number;
    },
): string {
    const entries = newsMediaTextList(captions);
    const own = entries.length === plates.length ? entries[index] : entries[0];
    const text = [own, plate.captionNote, provenance]
        .filter((part): part is string => typeof part === 'string' && part.trim().length > 0)
        .join(' ');
    return text.length > 0 ? `${plate.label} — ${text}` : plate.label;
}

/**
 * Whether a set renders as a plate block (`MediaPlates.astro`) rather than as
 * the single lead figure in `ArticleView.astro`. Keyed on the plate count, not
 * on the media key, so a key can never resolve to an unrendered image.
 */
export function isPlateSet(set: NewsMediaSet): boolean {
    return set.plates.length > 1;
}

/** One rendered plate figure: its asset plus the text the figure prints. */
export interface NewsMediaFigure {
    readonly src: ImageMetadata;
    readonly alt: string;
    readonly caption: string;
}

/**
 * The figures a plate set renders, in plate order, with alt text and captions
 * already composed.
 *
 * The component is a plain renderer over this list, so the alt/caption rules
 * live in one typed place that a test can assert (`test/news-media.test.mjs`)
 * rather than in markup inference.
 */
export function plateFigures(
    { set, mediaAlt, mediaCaption }: {
        set: NewsMediaSet;
        mediaAlt: NewsMediaText | undefined;
        mediaCaption: NewsMediaText | undefined;
    },
): NewsMediaFigure[] {
    return set.plates.map((plate, index) => ({
        src: plate.src,
        alt: plateAltText({ value: mediaAlt, plates: set.plates, index }),
        caption: plateCaptionText({
            plate,
            plates: set.plates,
            captions: mediaCaption,
            provenance: set.provenance,
            index,
        }),
    }));
}
