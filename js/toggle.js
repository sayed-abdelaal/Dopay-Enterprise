/* ============================================================
   Toggle Switch — .ewa-toggle
   Listens to the hidden checkbox inside each toggle.
   ============================================================ */

(function () {
  'use strict';

  function syncToggle(wrapper) {
    const input = wrapper.querySelector('.ewa-toggle__input');
    if (!input) return;
    wrapper.classList.toggle('is-on', input.checked);
    wrapper.setAttribute('aria-pressed', input.checked);
  }

  function initToggles() {
    document.querySelectorAll('.ewa-toggle').forEach(wrapper => {
      const input = wrapper.querySelector('.ewa-toggle__input');
      if (!input) return;

      syncToggle(wrapper);

      input.addEventListener('change', () => syncToggle(wrapper));

      // Allow clicking the wrapper itself (not just the track)
      wrapper.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          input.checked = !input.checked;
          input.dispatchEvent(new Event('change'));
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggles);
  } else {
    initToggles();
  }
})();
