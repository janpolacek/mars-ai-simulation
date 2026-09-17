/**
 * Client behaviour for the news carousel.
 *
 * The markup already exposes the first slide (no `hidden` attribute), so the
 * carousel is readable with JavaScript disabled; this module only moves between
 * slides once a visitor asks it to.
 */
export function initNewsCarousel(): void {
    const root = document.querySelector<HTMLElement>('[data-news-carousel]');
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>('.news-card'));
    if (cards.length === 0) return;

    const currentNews = document.querySelector<HTMLElement>('#current-news');
    const previousNews = document.querySelector<HTMLElement>('#previous-news');
    const nextNews = document.querySelector<HTMLElement>('#next-news');

    let activeSlide = 0;

    const showSlide = (index: number): void => {
        activeSlide = (index + cards.length) % cards.length;
        cards.forEach((card, cardIndex) => {
            const isActive = cardIndex === activeSlide;
            card.classList.toggle('is-active', isActive);
            card.toggleAttribute('hidden', !isActive);
            card.setAttribute('aria-hidden', String(!isActive));
        });
        if (currentNews) currentNews.textContent = String(activeSlide + 1).padStart(2, '0');
    };

    previousNews?.addEventListener('click', () => showSlide(activeSlide - 1));
    nextNews?.addEventListener('click', () => showSlide(activeSlide + 1));
}
