'use strict';
/* Seite: Übersicht. */

function overview() {
  const f = focusTasks();
  const raid = categoryProgress('raid');
  const openRaid = openTasks('raid').slice(0, 6);
  const openLegacy = openTasks('legacy').slice(0, 6);
  const nextRequired = openRaid.find((t) => t.priority < 4);
  const readyHeadline = !raid.total
    ? 'Noch keine Raid-Aufgaben.'
    : raid.open === 0
      ? 'Raid-Vorbereitung abgeschlossen.'
      : raid.open + (raid.open === 1 ? ' Schritt' : ' Schritte') + ' bis raidbereit.';
  const readyText = nextRequired
    ? 'Als Nächstes im Raid-Block: ' + nextRequired.title + '.'
    : raid.total
      ? 'Alle Pflichtaufgaben für den Raid sind erledigt.'
      : 'Lege im Bereich Raids Aufgaben an, dann erscheint hier dein Fortschritt.';
  return `<div class="focus"><div class="eyebrow">Grakash · Wolfspear · Horde</div><h3>${esc(readyHeadline)}</h3><p>${esc(readyText)}</p><div class="topstrip">${['gear', 'raid', 'legacy', 'rep'].map((c) => { const all = categoryTasks(c); return chip(`${CAT[c][0]} ${all.filter((t) => t.status === 'done').length}/${all.length}`); }).join('')}</div></div><div class="sectionhead"><h3>Deine drei Fokusziele</h3><small>Per ☆ Fokus selbst anpassbar</small></div><div class="cards3">${f.map(renderSpot).join('')}</div><div class="two-col" style="margin-top:16px"><section class="panel"><h3>Heute, wenn du Lust hast</h3><p>Keine Pflichtliste – ein Run je Dungeon ist deine freiwillige Obergrenze, nicht dein Soll.</p>${DAILY.slice(
    0,
    5,
  )
    .map(
      ([id, title, note]) =>
        `<div class="pathitem"><input class="ck" type="checkbox" data-daily="${id}" ${data.daily.checks[id] ? 'checked' : ''}><div><b>${esc(title)}</b><small>${esc(note)}</small></div></div>`,
    )
    .join(
      '',
    )}<button class="btn sm" data-jump="daily" style="margin-top:12px">Rotation & Mats →</button></section><section class="panel"><h3>Ressourcen schnell pflegen</h3>${resourceInputs()}<button class="btn sm" data-jump="resources" style="margin-top:12px">Goldplanung & Ruf →</button></section></div><div class="sectionhead"><h3>Noch offen für den Raid</h3><small>${raid.open} Pflichtaufgaben offen</small></div><div class="tasklist">${openRaid.length ? openRaid.map(taskCard).join('') : '<div class="empty">Nichts mehr offen.</div>'}</div><div class="sectionhead"><h3>Legacy und T0 sammeln</h3></div><div class="tasklist">${openLegacy.length ? openLegacy.map(taskCard).join('') : '<div class="empty">Nichts mehr offen.</div>'}</div>`;
}
