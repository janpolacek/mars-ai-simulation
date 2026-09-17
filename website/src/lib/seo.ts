/**
 * Canonical URL helper.
 *
 * The production origin is not recorded in this repository (no domain or
 * provider has been authorised), so `astro.config.mjs` reads it from the
 * `SITE_URL` environment variable. When it is unset, `Astro.site` is undefined
 * and no canonical link is emitted rather than a wrong one.
 */
export function canonicalUrl(pathname: string, siteUrl: URL | undefined): string | undefined {
    if (!siteUrl) return undefined;
    return new URL(pathname, siteUrl).href;
}
