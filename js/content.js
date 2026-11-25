'use strict';
/* Content-Layer: lädt die öffentlichen Inhalte aus data/*.json.
   Diese Dateien enthalten nie persönlichen Fortschritt und dürfen vom Watcher aktualisiert werden.

   Jede Datei wird einzeln geladen und geprüft. Ist sie nicht erreichbar oder ungültig, wird die
   zuletzt erfolgreich geladene Version aus dem Content-Cache verwendet (eigener localStorage-Key,
   getrennt vom persönlichen Stand). Gibt es auch keinen Cache, bleibt der Inhalt leer. */

const CONTENT_CACHE_KEY = 'wow_forever_content_cache_v1';

let SEED = [];
let BASE_NEWS = [];
let DAILY = [];

// Pro Datei: Pfad und eine Prüffunktion, die den Inhalt validiert und normalisiert (oder wirft).
const CONTENT_FILES = {
  tasks: {
    path: 'data/tasks.json',
    check: (json) => validated(json),
  },
  news: {
    path: 'data/news.json',
    check: (json) => {
      if (!Array.isArray(json)) throw Error('Kein Array.');
      return json.filter((n) => n && typeof n === 'object').map(validNews);
    },
  },
  daily: {
    path: 'data/daily.json',
    check: (json) => {
      if (!Array.isArray(json)) throw Error('Kein Array.');
      const rows = json.filter(
        (r) =>
          Array.isArray(r) && r.length >= 2 && typeof r[0] === 'string' && r[0] && typeof r[1] === 'string',
      );
      if (json.length && !rows.length) throw Error('Keine gültigen Einträge.');
      return rows.map((r) => [r[0], r[1], String(r[2] ?? '')]);
    },
  },
};

function readContentCache() {
  try {
    return JSON.parse(localStorage.getItem(CONTENT_CACHE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function writeContentCache(cache) {
  try {
    localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.warn('Content-Cache nicht speicherbar:', e);
  }
}

async function fetchJson(path) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw Error(path + ': HTTP ' + res.status);
  return res.json();
}

// Lädt alle Dateien. Gibt { failed } zurück: Namen der Dateien, die nicht frisch geladen werden konnten.
async function loadContent() {
  const cache = readContentCache();
  const failed = [];
  const out = {};
  await Promise.all(
    Object.entries(CONTENT_FILES).map(async ([key, def]) => {
      try {
        out[key] = def.check(await fetchJson(def.path));
        cache[key] = out[key];
      } catch (e) {
        console.warn('Content "' + key + '" nicht geladen:', e.message);
        failed.push(key);
        try {
          out[key] = def.check(cache[key] ?? []);
        } catch (e2) {
          out[key] = [];
        }
      }
    }),
  );
  if (failed.length < Object.keys(CONTENT_FILES).length) writeContentCache(cache);
  SEED = out.tasks;
  BASE_NEWS = out.news;
  DAILY = out.daily;
  return { failed };
}
