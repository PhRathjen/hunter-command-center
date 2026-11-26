'use strict';
/* Rahmen: Navigation, Statistiken, Header und zentrales render(). */

function renderNav() {
  document.getElementById('nav').innerHTML = NAV.map(([key, label, ico]) => {
    const n =
      key === 'all'
        ? data.tasks.filter(active).length
        : key === 'archive'
          ? data.tasks.filter((t) => t.status === 'done').length
          : CAT[key]
            ? data.tasks.filter(
                (t) => t.category === key && (key === 'future' ? t.status !== 'done' : active(t)),
              ).length
            : null;
    const alert = key === 'watcher' ? unseenNews().length + pendingSuggestions().length : 0;
    const group = NAV_GROUPS[key] ? `<div class="navgroup">${esc(NAV_GROUPS[key])}</div>` : '';
    return `${group}<button data-nav="${key}" class="${page === key ? 'active' : ''}"><span class="ico">${ico}</span>${esc(label)}${n !== null ? `<span class="count">${n}</span>` : ''}${alert ? `<span class="count alert" title="Neu oder offen">${alert}</span>` : ''}</button>`;
  }).join('');
}

function renderStats() {
  const start = raidStartInfo();
  const raid = categoryProgress('raid');
  const goldTarget = data.economy.mount + data.economy.reserve + data.economy.alt;
  document.getElementById('stats').innerHTML =
    `<div class="stat"><small>Raidbereitschaft</small><div class="big">${raid.pct} <span>%</span></div><div class="note">${!raid.total ? 'Keine Raid-Aufgaben' : raid.open === 0 ? 'Alle Pflichtaufgaben erledigt' : raid.open + ' Pflichtaufgaben offen'}</div>${bar(raid.pct, raid.total > 0 && raid.pct === 100)}</div><div class="stat"><small>Gold ${data.economy.goldConfirmed ? '' : '· letzter Stand'}</small><div class="big">${data.gold == null ? '—' : data.gold.toLocaleString('de-DE')} <span>g</span></div><div class="note">Ziel ${goldTarget.toLocaleString('de-DE')} g</div>${bar((100 * (data.gold || 0)) / Math.max(1, goldTarget))}</div><div class="stat"><small>Undermine Reals ${data.economy.realsConfirmed ? '' : '· zuletzt gemeldet'}</small><div class="big">${data.reals} <span>/ ${data.realsCap}</span></div><div class="note">Reserve · Cap editierbar</div>${bar((100 * data.reals) / data.realsCap)}</div><div class="stat"><small>Raidstart${start ? ' · ' + start.label : ''}</small><div class="big">${!start ? '—' : start.days > 0 ? start.days + ' <span>Tage</span>' : start.days === 0 ? 'Heute' : 'Live'}</div><div class="note">${start ? esc(RAIDSTART.raids.join(' · ')) || '&nbsp;' : 'Kein Termin hinterlegt'}</div>${bar(!start ? 0 : start.days <= 0 ? 100 : Math.max(0, 100 - (start.days / 14) * 100))}</div>`;
}

function setHeader() {
  const h = {
    overview: [
      'Raidbereit. Was macht heute Spaß?',
      'Raid-ready statt endlosem Gear-Grind. Deine nächsten Ziele auf einen Blick.',
    ],
    all: ['Dein gesamter Backlog', 'Alle offenen Ziele – priorisiert und jederzeit editierbar.'],
    archive: ['Bereits geschafft', 'Alles Erreichte bleibt dokumentiert.'],
    daily: [
      'Deine freiwillige Daily-Rotation',
      'Jeden Tag neu, ohne die einmaligen Ziele zurückzusetzen.',
    ],
    resources: ['Gold, Reals & Reputation', 'Zähler und Budget jederzeit anpassen.'],
    watcher: [
      'Updates & neue Entdeckungen',
      'Offizielle Informationen von Datamining und Gerüchten unterscheiden.',
    ],
  };
  const title = h[page] || [
    CAT[page]?.[0] || 'Aufgaben',
    'Alles geordnet, ohne den Überblick zu verlieren.',
  ];
  document.getElementById('title').textContent = title[0];
  document.getElementById('intro').textContent = title[1];
  document.getElementById('subtitle').textContent =
    page === 'watcher'
      ? 'Recherche · Quellen · Aktuelle Erkenntnisse'
      : 'WoW Forever · Horde Hunter · Level 60';
}

function render() {
  ensureDay();
  renderNav();
  renderStats();
  setHeader();
  const root = document.getElementById('mainContent');
  root.innerHTML =
    page === 'overview'
      ? overview()
      : page === 'daily'
        ? dailyView()
        : page === 'resources'
          ? resourcesView()
          : page === 'watcher'
            ? watcher()
            : taskView();
  if (page === 'watcher') markNewsSeen();
}
