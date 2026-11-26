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
  if (page === 'gear')
    extra =
      '<div class="notice">Persönliches Pre-Raid-Ziel erreicht. Diese Liste ist Besitz- und Alternativen-Archiv, keine BiS-Pflichtliste. Offene Alternativen sind optional.</div>';
  if (page === 'future')
    extra =
      '<div class="notice">Diese Ziele bleiben bewusst außerhalb des aktuellen Fokus: Rhok’delar wird erst mit dem passenden Raid-Content konkret. Die Onyxia-Sinew ist frühestens ab Raidstart ein Thema; für Ancient Petrified Leaf ist Molten Core notwendig.</div>';
  if (page === 'quests')
    extra =
      '<div class="notice">Silithus und Winterspring fast fertig; Eastern Plaguelands zuletzt zwei Elite-Quests offen. Die abgeschlossene Tirion-Questreihe bleibt separat im Archiv erfasst.</div>';
  if (page === 'raid')
    extra =
      raidStartInfo() && RAIDSTART.raids.length
        ? '<div class="notice">Offiziell angekündigt für ' + raidStartInfo().label + ': ' + esc(RAIDSTART.raids.join(', ')) + '.</div>'
        : '';
  return `${extra}<div class="sectionhead"><h3>${esc(head)}</h3><small>${list.length} Aufgaben angezeigt</small></div>${sectionAll()}<div class="tasklist" id="taskList">${list.length ? list.map(taskCard).join('') : '<div class="empty">Keine passenden Aufgaben. Filter ändern oder eine neue Aufgabe anlegen.</div>'}</div>`;
}
