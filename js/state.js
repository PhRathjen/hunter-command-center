'use strict';
/* State: Default-Daten, Validierung, localStorage, Selektoren und Mutationen. */

function blank() {
  return {
    tasks: clone(SEED),
    reals: 67,
    realsTarget: 165,
    realsCap: 165,
    gold: 904,
    focus: ['raid-boots', 'gold-puffer', 'farm-dmtribute'],
    updates: [],
    handledSuggestions: [],
    updatedAt: null,
    daily: { date: localDay(), checks: {}, mats: {}, runs: '1', craft: false },
    economy: {
      mount: 900,
      reserve: 500,
      alt: 50,
      rep: 11965,
      cloth: 22,
      price: 5,
      goldConfirmed: false,
      realsConfirmed: false,
      repConfirmed: false,
    },
    runLog: [],
  };
}

function validTask(t, i) {
  if (!t || typeof t !== 'object') throw Error('Ungültiger Task.');
  const id = String(t.id || '');
  const title = String(t.title || '').trim();
  if (!id || !title || id.length > 180 || title.length > 200)
    throw Error('Ungültige Task-ID oder Titel.');
  return {
    id,
    title,
    category: CAT[t.category] ? t.category : 'custom',
    status: STATUSES[t.status] ? t.status : 'todo',
    priority: [1, 2, 3, 4].includes(Number(t.priority)) ? Number(t.priority) : 3,
    mode: MODES[t.mode] ? t.mode : 'solo',
    location: String(t.location || '').slice(0, 220),
    notes: String(t.notes || '').slice(0, 2400),
    source: safeUrl(t.source),
    phase: PHASE[t.phase] ? t.phase : 'now',
    order: Number.isFinite(Number(t.order)) ? Number(t.order) : i,
  };
}

function validated(tasks) {
  if (!Array.isArray(tasks) || tasks.length > 1800)
    throw Error('Aufgabenliste ungültig oder zu groß.');
  const ids = new Set();
  return tasks.map((t, i) => {
    const x = validTask(t, i);
    if (ids.has(x.id)) throw Error('Doppelte Task-ID.');
    ids.add(x.id);
    return x;
  });
}

function validNews(n) {
  if (!n || typeof n !== 'object') throw Error('Ungültige Nachricht.');
  return {
    id: String(n.id || 'news-' + Math.random().toString(36).slice(2)).slice(0, 180),
    title: String(n.title || 'Neuer Fund').slice(0, 220),
    date: String(n.date || new Date().toISOString().slice(0, 10)).slice(0, 20),
    summary: String(n.summary || '').slice(0, 2000),
    source: safeUrl(n.source),
    kind: KIND[n.kind] ? n.kind : 'speculation',
  };
}

// Aufgabenvorschlag aus dem Content-Layer: Task-Felder (ohne Status/Order) plus Datum und Begründung.
function validSuggestion(s) {
  const t = validTask(s, 0);
  return {
    id: t.id,
    title: t.title,
    category: t.category,
    priority: t.priority,
    mode: t.mode,
    phase: t.phase,
    location: t.location,
    notes: t.notes,
    source: t.source,
    date: String(s.date || '').slice(0, 20),
    reason: String(s.reason || '').slice(0, 400),
  };
}

function validateState(raw) {
  return {
    tasks: validated(raw.tasks),
    reals: clampInt(raw.reals, 0, 9999, 67),
    realsTarget: clampInt(raw.realsTarget, 1, 9999, 165),
    realsCap: clampInt(raw.realsCap, 1, 9999, 165),
    gold: raw.gold == null || raw.gold === '' ? null : clampInt(raw.gold, 0, 99999999, 0),
    focus: Array.isArray(raw.focus)
      ? raw.focus.filter((x) => typeof x === 'string').slice(0, 3)
      : [],
    updates: Array.isArray(raw.updates) ? raw.updates.slice(0, 500).map(validNews) : [],
    handledSuggestions: Array.isArray(raw.handledSuggestions)
      ? raw.handledSuggestions
          .filter((x) => typeof x === 'string' && x.length <= 180)
          .slice(0, 2000)
      : [],
    updatedAt: raw.updatedAt || null,
    daily: {
      date: typeof raw.daily?.date === 'string' ? raw.daily.date : localDay(),
      checks: raw.daily?.checks && typeof raw.daily.checks === 'object' ? raw.daily.checks : {},
      mats: raw.daily?.mats && typeof raw.daily.mats === 'object' ? raw.daily.mats : {},
      runs: ['1', '5', '10'].includes(String(raw.daily?.runs)) ? String(raw.daily.runs) : '1',
      craft: !!raw.daily?.craft,
    },
    economy: {
      mount: clampInt(raw.economy?.mount, 0, 999999, 900),
      reserve: clampInt(raw.economy?.reserve, 0, 999999, 500),
      alt: clampInt(raw.economy?.alt, 0, 999999, 50),
      rep: clampInt(raw.economy?.rep, 0, 33000, 11965),
      cloth: clampInt(raw.economy?.cloth, 0, 999999, 22),
      price: Math.max(0, Math.min(9999, Number(raw.economy?.price ?? 5) || 0)),
      goldConfirmed: !!raw.economy?.goldConfirmed,
      realsConfirmed: !!raw.economy?.realsConfirmed,
      repConfirmed: !!raw.economy?.repConfirmed,
    },
    runLog: Array.isArray(raw.runLog)
      ? raw.runLog
          .filter((x) => x && typeof x === 'object')
          .slice(0, 365)
          .map((x) => ({
            date: String(x.date || '').slice(0, 10),
            name: String(x.name || '').slice(0, 60),
            gold: clampInt(x.gold, 0, 999999, 0),
            minutes: clampInt(x.minutes, 1, 1440, 1),
          }))
      : [],
  };
}

function load() {
  try {
    const v = localStorage.getItem(STORAGE);
    if (v) return validateState(JSON.parse(v));
  } catch (e) {
    console.warn('Local storage unavailable:', e);
  }
  return blank();
}

let data, // wird in main.js nach dem Laden des Contents gesetzt
  page = 'overview',
  modeFilter = 'all',
  statusFilter = 'open',
  textFilter = '',
  showDone = false,
  querySource = '';

function save() {
  data.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE, JSON.stringify(data));
  } catch (e) {
    toast('Speichern fehlgeschlagen. Bitte Backup exportieren!');
  }
}

// Alle News: Content-Layer plus persönlich importierte Meldungen (gleiche id = persönliche gewinnt).
function allNews() {
  const own = new Set(data.updates.map((n) => n.id));
  return [...data.updates, ...BASE_NEWS.filter((n) => !own.has(n.id)).map(validNews)];
}

// Vorschläge, die weder übernommen noch abgelehnt wurden. Entscheidungen bleiben im persönlichen State.
function pendingSuggestions() {
  const done = new Set(data.handledSuggestions);
  return BASE_SUGGESTIONS.filter((s) => !done.has(s.id));
}

function getTask(id) {
  return data.tasks.find((t) => t.id === id);
}

function categoryTasks(cat) {
  return data.tasks.filter((t) => t.category === cat);
}

function gearStats() {
  const tasks = categoryTasks('gear');
  return { done: tasks.filter((x) => x.status === 'done').length, total: tasks.length };
}

function tirionStats() {
  const tasks = categoryTasks('tirion');
  return { done: tasks.filter((x) => x.status === 'done').length, total: tasks.length };
}

function active(t) {
  return t.status !== 'done' && t.status !== 'blocked';
}

function sortTasks(items) {
  const s = { doing: 0, check: 1, todo: 2, blocked: 3, done: 4 };
  return [...items].sort(
    (a, b) => a.priority - b.priority || s[a.status] - s[b.status] || a.order - b.order,
  );
}

function focusTasks() {
  const marked = data.focus.map(getTask).filter((t) => t && active(t));
  const pool = sortTasks(
    data.tasks.filter(
      (t) =>
        t.category !== 'tirion' &&
        t.phase === 'now' &&
        active(t) &&
        !marked.some((m) => m.id === t.id),
    ),
  );
  return marked.concat(pool).slice(0, 3);
}

function ensureDay() {
  if (data.daily.date !== localDay()) {
    data.daily.date = localDay();
    data.daily.checks = {};
    data.daily.mats = {};
    save();
  }
}

function setStatus(id, status) {
  const t = getTask(id);
  if (!t || !STATUSES[status]) return;
  t.status = status;
  if (status === 'done') data.focus = data.focus.filter((x) => x !== id);
  save();
  render();
  toast('Status gespeichert: ' + t.title);
}

function pin(id) {
  const t = getTask(id);
  if (!t || !active(t) || t.phase !== 'now') return;
  if (data.focus.includes(id)) {
    data.focus = data.focus.filter((x) => x !== id);
  } else {
    data.focus.push(id);
    if (data.focus.length > 3) data.focus.shift();
  }
  save();
  render();
}
