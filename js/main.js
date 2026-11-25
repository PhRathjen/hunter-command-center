'use strict';
/* Einstiegspunkt: Content laden, State laden, erstes Rendern. */

function hasSavedState() {
  try {
    return !!localStorage.getItem(STORAGE);
  } catch (e) {
    return false;
  }
}

(async function start() {
  const { failed } = await loadContent();
  // Ohne Start-Aufgaben und ohne gespeicherten Stand würde ein leerer Stand angelegt und gespeichert.
  if (!SEED.length && !hasSavedState()) {
    document.getElementById('mainContent').innerHTML =
      '<div class="empty">Start-Inhalte konnten nicht geladen werden. Bitte über einen Webserver öffnen (nicht per file://) oder später erneut versuchen.</div>';
    return;
  }
  data = load();
  initForm();
  render();
  if (failed.length) toast('Inhalte teilweise nicht aktuell (' + failed.join(', ') + '). Gespeicherte Version wird genutzt.');
})();
