'use strict';
/* Aufgaben-Dialog (Anlegen / Bearbeiten). */

const dialog = document.getElementById('editDialog');

function openEditor(id = null, defaults = {}) {
  const t = getTask(id) || defaults;
  document.getElementById('editHeading').textContent = id ? 'Aufgabe bearbeiten' : 'Neue Aufgabe';
  document.getElementById('editId').value = id || '';
  document.getElementById('editSuggestion').value = defaults.suggestionId || '';
  document.getElementById('fTitle').value = t.title || '';
  document.getElementById('fCategory').value = t.category || (CAT[page] ? page : 'custom');
  document.getElementById('fStatus').value = t.status || 'todo';
  document.getElementById('fPriority').value = String(t.priority || 3);
  document.getElementById('fMode').value = t.mode || 'solo';
  document.getElementById('fPhase').value = t.phase || 'now';
  document.getElementById('fLocation').value = t.location || '';
  document.getElementById('fNotes').value = t.notes || '';
  document.getElementById('fSource').value = t.source || '';
  document.getElementById('deleteBtn').style.visibility = id ? 'visible' : 'hidden';
  dialog.showModal();
  document.getElementById('fTitle').focus();
}

function initForm() {
  const opts = (m) =>
    Object.entries(m)
      .map(([v, l]) => `<option value="${esc(v)}">${esc(Array.isArray(l) ? l[0] : l)}</option>`)
      .join('');
  document.getElementById('fCategory').innerHTML = opts(CAT);
  document.getElementById('fStatus').innerHTML = opts(STATUSES);
  document.getElementById('fPriority').innerHTML = opts(PRI);
  document.getElementById('fMode').innerHTML = opts(MODES);
}

function newsTask(id) {
  const n = allNews().find((x) => x.id === id);
  if (!n) return;
  openEditor(null, {
    title: n.title,
    category: 'future',
    mode: 'research',
    priority: n.kind === 'official' ? 2 : 3,
    notes: n.summary + `\nVerlässlichkeit: ${KIND[n.kind]}.`,
    location: 'Neuer Forever-Content',
    source: n.source,
    phase: 'long',
  });
}

function suggestionTask(id) {
  const s = pendingSuggestions().find((x) => x.id === id);
  if (!s) return;
  openEditor(null, {
    suggestionId: s.id,
    title: s.title,
    category: s.category,
    priority: s.priority,
    mode: s.mode,
    phase: s.phase,
    location: s.location,
    notes: s.notes + (s.reason ? '\nWarum: ' + s.reason : ''),
    source: s.source,
  });
}
