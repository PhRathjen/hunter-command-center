'use strict';
/* Seite: Watcher & News. */

const PATCH_EXAMPLE = {
  type: 'wow-forever-patch',
  version: 1,
  updates: [
    {
      id: 'watch-unique-1',
      date: '2026-11-21',
      kind: 'official',
      title: 'Titel der Meldung',
      summary: 'Warum für meinen Hunter relevant?',
      source: 'https://www.wowhead.com/forever/',
    },
  ],
  tasks: [
    {
      id: 'watch-task-unique-1',
      category: 'future',
      title: 'Relevante neue Vorbereitung prüfen',
      status: 'todo',
      priority: 3,
      mode: 'research',
      location: '',
      notes: 'Begründung + Quellhinweis',
    },
  ],
};

function watcher() {
  const items = allNews().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const fresh = new Set(unseenNews().map((n) => n.id));
  const pending = pendingSuggestions().length;
  const last = items[0] ? items[0].date : '–';
  return `<section class="watchbox"><div class="eyebrow">Automatisch über GitHub</div><h3 style="font:500 24px Georgia,serif;margin:9px 0">Watcher &amp; News</h3><p>ChatGPT recherchiert täglich neue offizielle Meldungen, Datamining, Podcasts und mögliche Hunter-Vorbereitungen und legt sie im Repository ab. Die App lädt sie bei jedem Start.</p><div class="topstrip"><span class="pill ${pending ? 'fresh' : ''}">${pending} offene Vorschläge</span><span class="pill ${fresh.size ? 'fresh' : ''}">${fresh.size} neue Meldungen</span><span class="pill">${items.length} Meldungen gesamt</span><span class="pill">Letzte Meldung: ${esc(last)}</span></div></section>${suggestionsSection()}<div class="sectionhead"><h3>Meldungen</h3><small>${items.length} Einträge</small></div><div class="newslist">${items.length ? items.map((n) => newsCard(n, fresh.has(n.id))).join('') : '<div class="empty">Noch keine Meldungen.</div>'}</div>${fallbackPanel()}`;
}

function newsCard(n, isNew) {
  const own = data.updates.some((x) => x.id === n.id);
  return `<article class="news"><div class="newshdr"><span><span class="pill ${n.kind === 'official' ? 'done' : n.kind === 'datamined' ? 'verify' : ''}">${esc(KIND[n.kind])}</span>${isNew ? ' <span class="pill fresh">Neu</span>' : ''}</span><span class="hint">${esc(n.date)}</span></div><h4>${esc(n.title)}</h4><p>${esc(n.summary)}</p><div class="topstrip">${n.source ? `<a href="${esc(n.source)}" rel="noopener noreferrer" target="_blank">Originalquelle ↗</a>` : ''}<button class="btn sm quiet" data-news-task="${esc(n.id)}">Als Aufgabe übernehmen</button>${own ? `<button class="btn sm quiet" data-news-delete="${esc(n.id)}">Löschen</button>` : ''}</div></article>`;
}

// Fallback: manueller Import und Abgleich mit ChatGPT, standardmäßig eingeklappt.
function fallbackPanel() {
  return `<details class="panel fallback"><summary>Notfall-Import &amp; ChatGPT-Abgleich</summary><p>Nur nötig, falls ein automatisches Update ausbleibt oder du einen JSON-Patch von ChatGPT bekommst.</p><label class="fieldlabel" for="patchArea">Manueller Import (JSON)</label><textarea id="patchArea" class="area" spellcheck="false" placeholder='{"type":"wow-forever-patch","version":1,"updates":[],"tasks":[]}'></textarea><div class="topstrip"><button class="btn primary" id="patchBtn">Patch importieren</button><button class="btn" id="samplePatchBtn">Beispielformat einfügen</button></div><details><summary>Welches Format akzeptiert die App?</summary><pre>${esc(JSON.stringify(PATCH_EXAMPLE, null, 2))}</pre></details><p>Stand für die nächste ChatGPT-Unterhaltung kopieren. Vollständige Backups exportierst du oben rechts.</p><div class="topstrip"><button class="btn primary" id="copySummary">Status für ChatGPT kopieren</button><button class="btn" id="copyPatchPrompt">Watcher-Aufgabenformat kopieren</button></div></details>`;
}

function suggestionsSection() {
  const list = pendingSuggestions();
  if (!list.length) return '';
  return `<div class="sectionhead"><h3>Vorgeschlagene Aufgaben</h3><small>${list.length} offen</small></div><div class="newslist">${list
    .map(
      (s) =>
        `<article class="news"><div class="newshdr"><span class="hint">${esc(s.date)}</span></div><h4>${esc(s.title)}</h4>${s.reason ? `<p>${esc(s.reason)}</p>` : ''}<div class="topstrip">${s.source ? `<a href="${esc(s.source)}" rel="noopener noreferrer" target="_blank">Quelle ↗</a>` : ''}<button class="btn sm" data-sug-accept="${esc(s.id)}">Übernehmen</button><button class="btn sm quiet" data-sug-dismiss="${esc(s.id)}">Ablehnen</button></div></article>`,
    )
    .join('')}</div>`;
}
