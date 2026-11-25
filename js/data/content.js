'use strict';
/* Content-Layer: Basis-News und tägliche Rotation. */

const BASE_NEWS = [
  {
    id: 'source-raids-2026',
    date: '2026-11-21',
    kind: 'official',
    title: 'Erste Forever-Raids ab 09.12.2026',
    summary:
      'Blizzard nennt Barrow Deeps (10), Hyjal Summit (20) und Onyxia’s Lair (40). Molten Core ist nicht Teil dieser Startliste.',
    source:
      'https://worldofwarcraft.blizzard.com/en-us/news/24303862/world-of-warcraft-forever-whats-next',
  },
];

const DAILY = [
  [
    'dm',
    'Dire Maul North · Tribute',
    'Frost Oil, Thorium Widget und Suit-Mats prüfen. Optionaler Tribute-Loot, Reals.',
  ],
  [
    'strat',
    'Stratholme · Full Run',
    'Living + Undead, Gold, Runecloth, Righteous Orbs, Argent Dawn, Reals.',
  ],
  ['lbrs', 'LBRS · Full Run', 'T0 Mantle und letzter Gemstone für Seal of Ascension.'],
  ['scholo', 'Scholomance · Full Run', 'T0 Cap von Darkmaster Gandling, Dark Runes, Gold, Reals.'],
  [
    'ubrs',
    'UBRS · Full Run (optional)',
    'Gold, Reals, Lord Valthalak bei verfügbarer Beschwörung.',
  ],
  [
    'salt',
    'Leatherworking-Cooldown (falls bereit)',
    'Kein täglicher Zwang; nur bei verfügbarem Cooldown.',
  ],
  [
    'pvp',
    'PvP / Paladin (optional)',
    'Nur bei Lust; Rank 11 langfristig, Paladin als Nebenprojekt.',
  ],
];
