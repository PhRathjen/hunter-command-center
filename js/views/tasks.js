'use strict';
/* Seiten: Aufgabenlisten, Filter und Suche. */

function sectionAll() {
  return `<div class="controls"><input id="search" class="in" placeholder="Suche nach Item, Quest, Ort, NPC ..." value="${esc(textFilter)}"/><select id="modeFilter" class="sel"><option value="all">Alle Aktivitäten</option>${Object.entries(
    MODES,
  )
    .map(
      ([v, k]) => `<option value="${v}" ${modeFilter === v ? 'selected' : ''}>${esc(k)}</option>`,
    )
    .join(
      '',
    )}</select><select id="statusFilter" class="sel"><option value="open" ${statusFilter === 'open' ? 'selected' : ''}>Offen & prüfen</option><option value="all" ${statusFilter === 'all' ? 'selected' : ''}>Alle Status</option>${Object.entries(
    STATUSES,
  )
    .map(
      ([k, l]) => `<option value="${k}" ${statusFilter === k ? 'selected' : ''}>${esc(l)}</option>`,
    )
    .join('')}</select></div>`;
}

function filtered() {
  let tasks = data.tasks.filter((t) => {
    if (page === 'archive') return t.status === 'done';
    if (CAT[page] && t.category !== page) return false;
    if (page === 'all' && t.category === 'tirion' && statusFilter === 'open') return false;
    if (page === 'gear' || page === 'tirion' || page === 'future') return true;
    return page === 'all' || CAT[page];
  });
  if (statusFilter === 'open' && page === 'future')
    tasks = tasks.filter((t) => t.status !== 'done');
  else if (statusFilter === 'open' && page !== 'gear' && page !== 'tirion' && page !== 'archive')
    tasks = tasks.filter(active);
  else if (statusFilter !== 'all' && statusFilter !== 'open' && page !== 'archive')
    tasks = tasks.filter((t) => t.status === statusFilter);
  if (modeFilter !== 'all') tasks = tasks.filter((t) => t.mode === modeFilter);
  if (textFilter)
    tasks = tasks.filter((t) =>
      [t.title, t.location, t.notes, CAT[t.category]?.[0]]
        .join(' ')
        .toLocaleLowerCase('de')
        .includes(textFilter.toLocaleLowerCase('de')),
    );
  return sortTasks(tasks);
}

function taskView() {
  const list = filtered();
  let head =
    page === 'all'
      ? 'Alle Aufgaben'
      : page === 'archive'
        ? 'Erledigt & archiviert'
        : CAT[page]?.[0] || 'Aufgaben';
  let extra = '';
  // Hinweise werden aus den aktuellen Aufgaben berechnet, nie als feste Fortschrittsaussage.
  if (page === 'gear') {
    const g = gearStats();
    extra = `<div class="notice">Gear: ${g.done} von ${g.total} erledigt. Diese Liste ist Besitz- und Alternativen-Archiv, keine BiS-Pflichtliste. Offene Einträge mit P4 sind optional.</div>`;
  }
  if (page === 'future') {
    const blocked = categoryTasks('future').filter((t) => t.status === 'blocked').length;
    if (blocked)
      extra = `<div class="notice">${blocked} ${blocked === 1 ? 'Ziel ist' : 'Ziele sind'} noch nicht verfügbar und ${blocked === 1 ? 'bleibt' : 'bleiben'} außerhalb des aktuellen Fokus, bis der Content bestätigt ist.</div>`;
  }
  if (page === 'quests') {
    const open = categoryTasks('quests').filter(active).length;
    const done = categoryTasks('quests').filter((t) => t.status === 'done').length;
    const tirion = tirionStats();
    extra = `<div class="notice">Quests: ${open} offen, ${done} erledigt.${tirion.total ? ` Die Tirion-Questreihe (${tirion.done}/${tirion.total} erledigt) wird separat erfasst.` : ''}</div>`;
  }
  if (page === 'raid')
    extra =
      raidStartInfo() && RAIDSTART.raids.length
        ? '<div class="notice">Offiziell angekündigt für ' + raidStartInfo().label + ': ' + esc(RAIDSTART.raids.join(', ')) + '.</div>'
        : '';
  return `${extra}<div class="sectionhead"><h3>${esc(head)}</h3><small>${list.length} Aufgaben angezeigt</small></div>${sectionAll()}<div class="tasklist" id="taskList">${list.length ? list.map(taskCard).join('') : '<div class="empty">Keine passenden Aufgaben. Filter ändern oder eine neue Aufgabe anlegen.</div>'}</div>`;
}
