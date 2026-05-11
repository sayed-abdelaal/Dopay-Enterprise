/* ============================================================
   Navigation — Split nav, inline nav, pill group
   These follow the same pattern as tabs but are scoped here
   since they control visible section content via scroll or show/hide.
   ============================================================ */

(function () {
  'use strict';

  /* ── Split Nav: scrolls to section anchor ───────────────── */

  function initSplitNav() {
    document.querySelectorAll('.ewa-split-nav__btn[data-section]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.section);
        if (!target) return;

        // Update active state
        const nav = btn.closest('.ewa-split-nav');
        nav.querySelectorAll('.ewa-split-nav__btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Smooth scroll to section
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Highlight nav item based on scroll position
    const sections = document.querySelectorAll('[data-nav-section]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.ewa-split-nav__btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  /* ── Pagination ─────────────────────────────────────────── */

  function initPagination() {
    document.querySelectorAll('[data-pagination]').forEach(paginationEl => {
      const pages = paginationEl.querySelectorAll('.ewa-pagination__page');
      const prev  = paginationEl.querySelector('.ewa-pagination__prev');
      const next  = paginationEl.querySelector('.ewa-pagination__next');

      function getActive() {
        return paginationEl.querySelector('.ewa-pagination__page.is-active');
      }

      pages.forEach(page => {
        page.addEventListener('click', () => {
          pages.forEach(p => p.classList.remove('is-active'));
          page.classList.add('is-active');
          updateArrows();
        });
      });

      function updateArrows() {
        if (!prev || !next) return;
        const active = getActive();
        const idx = Array.from(pages).indexOf(active);
        prev.disabled = idx === 0;
        next.disabled = idx === pages.length - 1;
      }

      if (prev) {
        prev.addEventListener('click', () => {
          const active = getActive();
          const idx = Array.from(pages).indexOf(active);
          if (idx > 0) pages[idx - 1].click();
        });
      }

      if (next) {
        next.addEventListener('click', () => {
          const active = getActive();
          const idx = Array.from(pages).indexOf(active);
          if (idx < pages.length - 1) pages[idx + 1].click();
        });
      }

      updateArrows();
    });
  }

  function init() {
    initSplitNav();
    initPagination();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
