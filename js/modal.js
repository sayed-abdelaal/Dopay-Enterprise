/* ============================================================
   Modal — .modal-backdrop[data-modal]
   Opened by [data-modal-open="id"], closed by [data-modal-close]
   or clicking the backdrop.
   ============================================================ */

(function () {
  'use strict';

  function openModal(id) {
    const backdrop = document.querySelector(`.modal-backdrop[data-modal="${id}"]`);
    if (!backdrop) return;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');

    // Trap focus on first focusable element
    const focusable = backdrop.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();

    document.body.style.overflow = 'hidden';
  }

  function closeModal(id) {
    const backdrop = document.querySelector(`.modal-backdrop[data-modal="${id}"]`);
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop.is-open').forEach(backdrop => {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  function init() {
    // Open triggers
    document.addEventListener('click', e => {
      const opener = e.target.closest('[data-modal-open]');
      if (opener) {
        openModal(opener.dataset.modalOpen);
        return;
      }

      // Close via [data-modal-close]
      const closer = e.target.closest('[data-modal-close]');
      if (closer) {
        const backdrop = closer.closest('.modal-backdrop');
        if (backdrop) closeModal(backdrop.dataset.modal);
        return;
      }

      // Close by clicking backdrop itself (not the dialog)
      if (e.target.classList.contains('modal-backdrop')) {
        closeModal(e.target.dataset.modal);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
