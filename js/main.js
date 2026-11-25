'use strict';
/* Einstiegspunkt: Content laden, State laden, erstes Rendern. */

(async function start() {
  try {
    await loadContent();
  } catch (e) {
    document.getElementById('mainContent').innerHTML =
      '<div class="empty">Inhalte konnten nicht geladen werden. Bitte über einen Webserver öffnen (nicht per file://). ' +
      esc(e.message) +
      '</div>';
    return;
  }
  data = load();
  initForm();
  render();
})();
