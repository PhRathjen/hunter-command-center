'use strict';
/* Seite: Daily-Rotation und Run-Log. */

function dailyView() {
  const m = [
    ['Frost Oil', 1],
    ['Thorium Widget', 1],
    ['Bolt of Runecloth', data.daily.craft ? 2 : 4],
    ['Rugged Leather', data.daily.craft ? 4 : 8],
    ['Rune Thread', data.daily.craft ? 1 : 2],
  ];
  return `<div class="focus"><div class="eyebrow">${esc(data.daily.date)} · freiwillig</div><h3>Ein Run je Dungeon – wenn du Lust hast.</h3><p>Dire Maul North zuerst, danach Strat, LBRS oder Scholo nach Laune. Keine East-/West-Pflicht. Häkchen wechseln automatisch mit dem lokalen Kalendertag; kein Anspruch auf exakten Server-Reset.</p></div><div class="sectionhead"><h3>Daily-Rotation</h3><button class="btn sm" id="resetDaily">Heute zurücksetzen</button></div><div class="tasklist">${DAILY.map(([id, title, note]) => `<article class="task ${data.daily.checks[id] ? 'done' : ''}"><input class="ck" type="checkbox" data-daily="${id}" ${data.daily.checks[id] ? 'checked' : ''}><div><h4 class="tasktitle">${esc(title)}</h4><p class="taskdesc">${esc(note)}</p></div></article>`).join('')}</div><div class="sectionhead"><h3>Dire Maul Tribute · Einkaufsliste</h3></div><div class="panel"><div class="controls"><label>Vorrat für <select class="sel" id="matRuns">${[1, 5, 10].map((n) => `<option value="${n}" ${String(n) === data.daily.runs ? 'selected' : ''}>${n} Run${n > 1 ? 's' : ''}</option>`).join('')}</select></label><label class="toggle"><input type="checkbox" id="matCraft" ${data.daily.craft ? 'checked' : ''}> Suit selbst craften (LW 285, Rezept gelernt)</label></div>${m.map(([name, q], i) => `<div class="pathitem"><input class="ck" type="checkbox" data-mat="${i}" ${data.daily.mats[i] ? 'checked' : ''}><div><b>${q * Number(data.daily.runs)}× ${name}</b></div><button class="btn sm" data-copy="${name}">Kopieren</button></div>`).join('')}<p class="hint">Ogre Tannin: 1 pro Run innerhalb der Instanz sammeln. Standardmaterialien für Knot; Selbstcraft nur mit gelerntem Rezept. <a href="https://www.wowhead.com/forever/guide/dire-maul-gordoks-commons-north-dungeon-overview-location-rewards" target="_blank" rel="noopener">Guide</a> · <a href="https://metabot.gg/en/wow-forever/items/gordok-ogre-suit" target="_blank" rel="noopener">Craft-Rezept</a></p><button class="btn sm" id="copyMats">Ganze Einkaufsliste kopieren</button></div><div class="sectionhead"><h3>Gold-Run-Log (optional)</h3><small>Realisierter Gewinn statt theoretischem Loot-Value</small></div><div class="panel"><div class="formrow"><div><label class="fieldlabel">Dungeon</label><select class="sel" id="logName">${DAILY.slice(
    0,
    5,
  )
    .map(([id, n]) => `<option>${esc(n)}</option>`)
    .join(
      '',
    )}</select></div><div><label class="fieldlabel">Gold netto (g, gerundet)</label><input class="in" type="number" min="0" id="logGold" placeholder="z. B. 45"></div><div><label class="fieldlabel">Dauer (Minuten)</label><input class="in" type="number" min="1" id="logMinutes" placeholder="z. B. 60"></div><div style="align-self:end"><button class="btn primary" id="addRun">Run speichern</button></div></div><div class="divider"></div>${runLogView()}</div>`;
}

function runLogView() {
  let g = data.runLog.reduce((a, x) => a + x.gold, 0),
    m = data.runLog.reduce((a, x) => a + x.minutes, 0);
  return `<p><b>${data.runLog.length} Runs · ${g}g netto · ${m ? Math.round((g / m) * 60) : 0}g/Stunde</b> (nur geloggte Runs; Goldzähler separat pflegen)</p>${data.runLog
    .slice(0, 15)
    .map(
      (x, i) =>
        `<div class="pathitem"><span class="hint">${esc(x.date.slice(5))}</span><div><b>${esc(x.name)}</b><small>${x.gold}g · ${x.minutes} min</small></div><button class="btn sm quiet" data-delrun="${i}">Entfernen</button></div>`,
    )
    .join('')}`;
}
