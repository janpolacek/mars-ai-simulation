/**
 * Canonical URL helper.
 *
 * The production origin is not recorded in this repository (no domain or
 * provider has been authorised), so `astro.config.mjs` reads it from the
 * `SITE_URL` environment variable. When it is unset, `Astro.site` is undefined
 * and no canonical link is emitted rather than a wrong one.
 *
 * This module emits no date of any kind, and it is the only metadata module the
 * head composes from (`src/layouts/BaseLayout.astro`): the head carries
 * `description`, `generator`, `canonical`, and `robots`, and a published
 * article's simulated record date deliberately reaches none of them. That value
 * is in-fiction prose stated under its own label
 * (`src/lib/simulated-date.ts`) and must never become `datePublished`,
 * `dateModified`, a `lastmod`, an Open Graph date, a `<time datetime>`, or a
 * sitemap entry — the site publishes no sitemap or structured-date data at all,
 * and `test/news-simulated-date.test.mjs` fails the suite if one appears in the
 * built output.
 */
export function canonicalUrl(pathname: string, siteUrl: URL | undefined): string | undefined {
    if (!siteUrl) return undefined;
    return new URL(pathname, siteUrl).href;
}
