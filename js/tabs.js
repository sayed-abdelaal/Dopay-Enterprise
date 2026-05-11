/* ============================================================
   Tabs — handles .bo-tab, .ewa-subtabs__btn, .ewa-pill-group__btn
   All tab groups use data-tab-group + data-tab attributes.
   ============================================================ */

(function () {
  'use strict';

  function initTabGroup(groupEl) {
    const groupId = groupEl.dataset.tabGroup;
    if (!groupId) return;

    const buttons = groupEl.querySelectorAll('[data-tab]');
    const panels  = document.querySelectorAll(`[data-tab-panel="${groupId}"]`);

    function activate(tab) {
      buttons.forEach(btn => {
        const isActive = btn.dataset.tab === tab;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', isActive);
      });

      panels.forEach(panel => {
        const isVisible = panel.dataset.tab === tab;
        panel.hidden = !isVisible;
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => activate(btn.dataset.tab));
    });

    // Activate first tab by default, or any already marked active
    const initial = groupEl.querySelector('[data-tab].is-active') || buttons[0];
    if (initial) activate(initial.dataset.tab);
  }

  function init() {
    document.querySelectorAll('[data-tab-group]').forEach(initTabGroup);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
