'use strict';
/* Seite: Ressourcen. */

function resourceInputs() {
  return `<label class="fieldlabel">Gold (g)</label><input class="in" type="number" min="0" id="goldInput" value="${data.gold ?? ''}"><p class="hint">${data.economy.goldConfirmed ? 'Aktualisiert' : '904g zuletzt nach Dawn-Armor-Materialkauf; neu eintragen.'}</p><label class="fieldlabel">Tarnished Undermine Real</label><div class="counter"><button class="btn" data-realstep="-1">−</button><input class="in" type="number" min="0" id="realInput" value="${data.reals}"><button class="btn" data-realstep="1">+</button><span class="hint">/ ${data.realsCap}</span></div><p class="hint">${data.economy.realsConfirmed ? 'Aktualisiert' : '67 zuletzt vor weiteren Runs gemeldet; aktuellen Wert prüfen.'}</p>`;
}

function resourcesView() {
  const e = data.economy,
    target = e.mount + e.reserve + e.alt,
    rep = e.rep,
    need = Math.max(0, 33000 - rep),
    turns = Math.ceil(need / 50),
    cloth = Math.max(0, turns * 20 - e.cloth),
    cost = (cloth * e.price) / 100;
  const num = (x) => Number(x).toLocaleString('de-DE', { maximumFractionDigits: 2 });
  return `<div class="two-col"><section class="panel"><h3>Gold & Reals</h3>${resourceInputs()}<label class="fieldlabel">Reals-Cap (165 laut Nutzer, editierbar)</label><input class="in" type="number" min="1" data-field="realsCap" value="${data.realsCap}"><p class="hint">Am Cap nur Überschuss in Damaged Undermine Supply Crate (5 Reals) investieren. ${Math.max(0, data.realsCap - data.reals)} Platz bis Cap. Nicht automatisch verrechnet.</p></section><section class="panel"><h3>Epic Riding & Puffer</h3>${[
    ['mount', 'Epic Riding (Planwert)'],
    ['reserve', 'Gewünschter Puffer'],
    ['alt', 'Paladin-Budget'],
  ]
    .map(
      ([key, label]) =>
        `<label class="fieldlabel">${label} (g)</label><input class="in" type="number" min="0" data-econ="${key}" value="${e[key]}">`,
    )
    .join(
      '',
    )}<div class="divider"></div><p>Goldziel: <b>${num(target)}g</b> · Noch ${num(Math.max(0, target - (data.gold || 0)))}g</p>${bar((100 * (data.gold || 0)) / Math.max(1, target))}<p class="hint">Rufkäufe und Raptor separat. Keine automatische Ausgabe.</p></section></div><div class="sectionhead"><h3>Darkspear Trolls · Exalted</h3><small>${e.repConfirmed ? 'Wert aktualisiert' : 'Letzter bekannter Stand; bitte prüfen'}</small></div><div class="panel"><div class="formrow"><div><label class="fieldlabel">Rufstufe</label><select id="repTier" class="sel"><option value="h" ${rep < 12000 ? 'selected' : ''}>Honored</option><option value="r" ${rep >= 12000 && rep < 33000 ? 'selected' : ''}>Revered</option><option value="e" ${rep >= 33000 ? 'selected' : ''}>Exalted</option></select></div><div><label class="fieldlabel">Ruf innerhalb der Stufe</label><input class="in" id="repValue" type="number" min="0" max="${rep < 12000 ? 12000 : 21000}" value="${rep < 12000 ? rep : rep < 33000 ? rep - 12000 : 21000}"></div><div><label class="fieldlabel">Runecloth auf Tasche / Bank</label><input class="in" type="number" min="0" data-econ="cloth" value="${e.cloth}"></div><div><label class="fieldlabel">AH-Preis pro Runecloth (Silber)</label><input class="in" type="number" step="0.1" min="0" data-econ="price" value="${e.price}"></div></div>${bar((100 * rep) / 33000, true)}<p><b>${num(need)}</b> Ruf fehlen · ${num(turns)} Abgaben · <b>${num(cloth)} Runecloth</b> zusätzlich · ca. <b>${num(cost)}g</b>.</p><p class="hint">Planungsannahme: 20 Runecloth = 50 Ruf. Startwert 11.965 Honored und 22 Runecloth zuletzt bestätigt; spätere Fortschritte unbekannt. Bei Exalted ist kein weiterer Stoff nötig.</p></div>`;
}
