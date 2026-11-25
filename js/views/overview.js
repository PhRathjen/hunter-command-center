'use strict';
/* Seite: Übersicht. */

function overview() {
  const f = focusTasks();
  return `<div class="focus"><div class="eyebrow">Grakash · Wolfspear · Horde</div><h3>Gear-Ziel erreicht. Jetzt Vermögen und Legacy.</h3><p>Onyxia Attunement erledigt, Consumables vollständig, Dawn Armor und Beaststalker's Boots erhalten. Kein Pflicht-Grind für Kirtonos, PvP-Set oder teure T0.5-Questline mehr.</p><div class="topstrip">${chip('8 % Hit')}${chip('T0-Dreierbonus')}${chip('Cape of the Black Baron')}${chip('Ranger’s Belt')}</div></div><div class="sectionhead"><h3>Deine drei Fokusziele</h3><small>Per ☆ Fokus selbst anpassbar</small></div><div class="cards3">${f.map(renderSpot).join('')}</div><div class="two-col" style="margin-top:16px"><section class="panel"><h3>Heute, wenn du Lust hast</h3><p>Keine Pflichtliste – ein Run je Dungeon ist deine freiwillige Obergrenze, nicht dein Soll.</p>${DAILY.slice(
    0,
    5,
  )
    .map(
      ([id, title, note]) =>
        `<div class="pathitem"><input class="ck" type="checkbox" data-daily="${id}" ${data.daily.checks[id] ? 'checked' : ''}><div><b>${esc(title)}</b><small>${esc(note)}</small></div></div>`,
    )
    .join(
      '',
    )}<button class="btn sm" data-jump="daily" style="margin-top:12px">Rotation & Mats →</button></section><section class="panel"><h3>Ressourcen schnell pflegen</h3>${resourceInputs()}<button class="btn sm" data-jump="resources" style="margin-top:12px">Goldplanung & Ruf →</button></section></div><div class="sectionhead"><h3>Noch offen für den Raid</h3><small>Head und Legs nicht erzwingen</small></div><div class="tasklist">${['raid-boots', 'raid-head', 'raid-chest', 'raid-consumables', 'raid-attune'].map(getTask).filter(Boolean).map(taskCard).join('')}</div><div class="sectionhead"><h3>Legacy und T0 sammeln</h3></div><div class="tasklist">${['legacy-cap', 'legacy-mantle', 'legacy-key', 'legacy-belt'].map(getTask).filter(Boolean).map(taskCard).join('')}</div>`;
}
