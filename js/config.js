'use strict';
/* Konstanten: Storage-Key, Kategorien, Navigation, Labels. */

const STORAGE = 'wow_forever_hunter_command_center_v3';

const APP = 'WoW Forever Hunter Command Center';

const CAT = {
  gear: ['Gear & Alternativen', '⚔'],
  tirion: ['Tirion Fordring', '✓'],
  raid: ['Raidvorbereitung', '♜'],
  farm: ['Dungeon & Reals', '◇'],
  quests: ['Quests & Gebiete', '▤'],
  pvp: ['PvP', '⚑'],
  rep: ['Ruf', '✦'],
  professions: ['Berufe', '⚒'],
  gold: ['Gold & Mounts', '◈'],
  future: ['Zukunft & Rhok’delar', '◎'],
  legacy: ['T0 & Legacy', '✧'],
  alt: ['Paladin / Twink', '♞'],
  custom: ['Weitere Ziele', '＋'],
};

const NAV = [
  ['overview', 'Übersicht', '◈'],
  ['daily', 'Daily-Rotation', '↻'],
  ['watcher', 'Watcher & News', '⌁'],
  ['resources', 'Ressourcen', '◇'],
  ['legacy', 'T0 & Legacy', '✧'],
  ['alt', 'Paladin / Twink', '♞'],
  ['all', 'Alle Aufgaben', '▦'],
  ['gear', 'Gear & Alternativen', '⚔'],
  ['raid', 'Raids', '♜'],
  ['farm', 'Dungeons & Reals', '◇'],
  ['quests', 'Quests & Gebiete', '▤'],
  ['pvp', 'PvP', '⚑'],
  ['rep', 'Ruf', '✦'],
  ['professions', 'Berufe', '⚒'],
  ['gold', 'Gold & Mounts', '◈'],
  ['future', 'Langzeitziele', '◎'],
  ['archive', 'Erledigt', '✓'],
];

const MODES = {
  short: 'Kurz erledigen',
  solo: 'Solo-Farm',
  dungeon: 'Dungeon-Gruppe',
  quest: 'Questen',
  pvp: 'Battleground',
  raid: 'Raid',
  ah: 'Auktionshaus',
  research: 'Prüfen / Planen',
};

const STATUSES = {
  todo: 'Offen',
  doing: 'In Arbeit',
  check: 'Status prüfen',
  blocked: 'Noch nicht verfügbar',
  done: 'Erledigt',
};

const PRI = { 1: 'P1 · Jetzt', 2: 'P2 · Hoch', 3: 'P3 · Nebenbei', 4: 'P4 · Optional' };

const PHASE = { now: 'Jetzt machbar', long: 'Langzeit', future: 'Zukünftig' };

const KIND = {
  official: 'Offiziell bestätigt',
  datamined: 'Datamining',
  podcast: 'Podcast / Interview',
  speculation: 'Spekulation',
};
