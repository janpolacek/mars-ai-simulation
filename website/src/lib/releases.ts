/**
 * The release gate for article detail routes.
 *
 * A slug may be generated as `/news/<slug>/` only when a human has recorded a
 * release reference for it. An editor's `approved` review is **not** a release,
 * so this list stays empty until a human decision exists on the task card. The
 * release order is set by the private mission timeline and the release controls
 * in `docs/SCENARIO.md`.
 */
export const releasedNewsSlugs: readonly string[] = [];

/** Whether a news slug may have a generated detail page. */
export function isReleasedNewsSlug(slug: string, released: readonly string[] = releasedNewsSlugs): boolean {
    return released.includes(slug);
}

/** Which released slugs the current list authorises — empty by default. */
export function releasedSlugsFrom(slugs: readonly string[], released: readonly string[] = releasedNewsSlugs): string[] {
    return slugs.filter((slug) => isReleasedNewsSlug(slug, released));
}
