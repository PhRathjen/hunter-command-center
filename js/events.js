'use strict';
/* Event-Handler: Navigation, Aufgaben, Filter, Dialog, Backup. */

// Global interactions
const root = document.getElementById('mainContent');

document.getElementById('nav').addEventListener('click', (e) => {
  const n = e.target.closest('[data-nav]');
  if (!n) return;
  page = n.dataset.nav;
  textFilter = '';
  modeFilter = 'all';
  statusFilter = 'open';
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
});

root.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.open) {
    openEditor(b.dataset.open);
    return;
  }
  if (b.dataset.edit) {
    openEditor(b.dataset.edit);
    return;
  }
  if (b.dataset.pin) {
    pin(b.dataset.pin);
    return;
  }
  if (b.dataset.realstep) {
    data.reals = clampInt(data.reals + Number(b.dataset.realstep), 0, 9999, data.reals);
    data.economy.realsConfirmed = true;
    save();
    render();
    return;
  }
  if (b.dataset.newsTask) {
    newsTask(b.dataset.newsTask);
    return;
  }
  if (b.dataset.newsDelete) {
    if (confirm('Diese Watcher-Meldung löschen?')) {
      data.updates = data.updates.filter((n) => n.id !== b.dataset.newsDelete);
      save();
      render();
    }
    return;
  }
  if (b.id === 'patchBtn') {
    importPatch();
    return;
  }
  if (b.id === 'samplePatchBtn') {
    const p = { type: 'wow-forever-patch', version: 1, updates: [], tasks: [] };
    document.getElementById('patchArea').value = JSON.stringify(p, null, 2);
    return;
  }
  if (b.id === 'copySummary') {
    copyText(summary());
    return;
  }
  if (b.id === 'copyPatchPrompt') {
    copyText(
      'Bitte gib mir den WoW-Forever-Fund als JSON-Patch im Format {"type":"wow-forever-patch","version":1,"updates":[{"id":"watch-eindeutig","title":"...","summary":"...","source":"https://...","kind":"official|datamined|podcast|speculation","date":"YYYY-MM-DD"}],"tasks":[{"id":"watch-task-eindeutig","title":"...","category":"future","priority":3,"status":"todo","mode":"research","notes":"..."}]} aus. Keine bereits vorhandenen Aufgaben löschen oder als erledigt markieren.',
    );
    return;
  }
});

root.addEventListener('change', (e) => {
  const x = e.target;
  if (x.dataset.check) {
    setStatus(x.dataset.check, x.checked ? 'done' : 'todo');
    return;
  }
  if (x.dataset.status) {
    setStatus(x.dataset.status, x.value);
    return;
  }
  if (x.id === 'modeFilter') {
    modeFilter = x.value;
    render();
    return;
  }
  if (x.id === 'statusFilter') {
    statusFilter = x.value;
    render();
    return;
  }
  if (x.id === 'realInput') {
    data.reals = clampInt(x.value, 0, 9999, data.reals);
    data.economy.realsConfirmed = true;
    save();
    render();
    return;
  }
  if (x.id === 'goldInput') {
    data.gold = x.value === '' ? null : clampInt(x.value, 0, 99999999, 0);
    data.economy.goldConfirmed = x.value !== '';
    save();
    render();
    toast('Goldstand gespeichert.');
    return;
  }
});

root.addEventListener('input', (e) => {
  if (e.target.id === 'search') {
    textFilter = e.target.value;
    const list = filtered();
    const host = document.getElementById('taskList');
    if (host)
      host.innerHTML = list.length
        ? list.map(taskCard).join('')
        : '<div class="empty">Keine passenden Einträge.</div>';
    const counter = document.querySelector('.sectionhead small');
    if (counter) counter.textContent = list.length + ' Aufgaben angezeigt';
  }
});

document.getElementById('addBtn').addEventListener('click', () => openEditor());

document.getElementById('backupBtn').addEventListener('click', exportBackup);

document
  .getElementById('restoreBtn')
  .addEventListener('click', () => document.getElementById('importFile').click());

document.getElementById('importFile').addEventListener('change', (e) => {
  importBackup(e.target.files[0]);
  e.target.value = '';
});

document.getElementById('cancelEdit').addEventListener('click', () => dialog.close());

document.getElementById('editForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('editId').value;
  const payload = {
    id: id || uid(),
    title: document.getElementById('fTitle').value,
    category: document.getElementById('fCategory').value,
    status: document.getElementById('fStatus').value,
    priority: Number(document.getElementById('fPriority').value),
    mode: document.getElementById('fMode').value,
    phase: document.getElementById('fPhase').value,
    location: document.getElementById('fLocation').value,
    notes: document.getElementById('fNotes').value,
    source: document.getElementById('fSource').value,
    order: data.tasks.length,
  };
  const t = validTask(payload, data.tasks.length);
  if (id) {
    const original = getTask(id);
    if (original) Object.assign(original, t, { order: original.order });
  } else data.tasks.push(t);
  if (t.status === 'done') data.focus = data.focus.filter((x) => x !== t.id);
  save();
  dialog.close();
  render();
  toast('Aufgabe gespeichert.');
});

document.getElementById('deleteBtn').addEventListener('click', () => {
  const id = document.getElementById('editId').value;
  const t = getTask(id);
  if (!t || !confirm('Aufgabe wirklich löschen: ' + t.title + '?')) return;
  data.tasks = data.tasks.filter((x) => x.id !== id);
  data.focus = data.focus.filter((x) => x !== id);
  save();
  dialog.close();
  render();
  toast('Aufgabe gelöscht.');
});
