'use strict';
/* Content-Layer: lädt die öffentlichen Inhalte aus data/*.json.
   Diese Dateien enthalten nie persönlichen Fortschritt und dürfen vom Watcher aktualisiert werden. */

let SEED = [];
let BASE_NEWS = [];
let DAILY = [];

async function fetchJson(path) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw Error(path + ': HTTP ' + res.status);
  return res.json();
}

async function loadContent() {
  [SEED, BASE_NEWS, DAILY] = await Promise.all([
    fetchJson('data/tasks.json'),
    fetchJson('data/news.json'),
    fetchJson('data/daily.json'),
  ]);
}
