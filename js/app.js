'use strict';
const SEED = [
  {
    "id": "g-bindings",
    "category": "gear",
    "title": "Beaststalker's Bindings",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-rune",
    "category": "gear",
    "title": "Rune of the Guard Captain",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-trident",
    "category": "gear",
    "title": "Beastslayer's Trident",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-pants",
    "category": "gear",
    "title": "Beaststalker's Pants",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-gloves",
    "category": "gear",
    "title": "Beaststalker's Gloves",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-rifle",
    "category": "gear",
    "title": "Deep Jungle Rifle",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-signet",
    "category": "gear",
    "title": "Cutthroat's Signet",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Von dir als vorhanden bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-mark",
    "category": "gear",
    "title": "Mark of Fordring",
    "status": "done",
    "priority": 4,
    "mode": "short",
    "location": "In Dreams · Tirion Fordring",
    "notes": "Erhalten, im bisherigen Gear bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-helm",
    "category": "gear",
    "title": "Backwood Helm",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "Dire Maul West · Athenaeum",
    "notes": "Erhalten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-belt",
    "category": "gear",
    "title": "Ranger's Belt",
    "status": "done",
    "priority": 4,
    "mode": "short",
    "location": "Booty Bay · Pix Xizzix",
    "notes": "Erhalten; für 100 Reals gekauft.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-blackhand",
    "category": "gear",
    "title": "Blackhand's Breadth",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "LBRS / UBRS",
    "notes": "Erhalten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-hauberk",
    "category": "gear",
    "title": "Ogre Forged Hauberk",
    "status": "todo",
    "priority": 4,
    "mode": "dungeon",
    "location": "Dire Maul North · Gordok Tribute Chest",
    "notes": "Kein Bedarf mit Dawn Armor; optionaler Loot.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-elven",
    "category": "gear",
    "title": "Tarnished Elven Ring",
    "status": "todo",
    "priority": 4,
    "mode": "dungeon",
    "location": "Dire Maul North · Gordok Tribute Chest",
    "notes": "10 Agility / 1 % Hit laut Nutzer-Tooltip; nur als flexible Alternative, kein Pflichtfarm.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-shoulders",
    "category": "gear",
    "title": "Shadowcraft Spaulders",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "Stratholme Live · Cannon Master Willey",
    "notes": "Erhalten; Shadowcraft Spaulders für Raid-Kombination behalten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-cape",
    "category": "gear",
    "title": "Cape of the Black Baron",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "Stratholme Undead · Baron Rivendare",
    "notes": "Drop in Stratholme Undead bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "g-greaves",
    "category": "gear",
    "title": "Windreaver Greaves",
    "status": "todo",
    "priority": 4,
    "mode": "dungeon",
    "location": "Scholomance · Kirtonos the Herald",
    "notes": "Nicht mehr nötig: Dawn Armor liefert Hit, Beaststalker’s Boots stellen T0-Dreierbonus wieder her. Nur optional.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5542",
    "category": "tirion",
    "title": "Demon Dogs",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5542",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5543",
    "category": "tirion",
    "title": "Blood Tinged Skies",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5543",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5544",
    "category": "tirion",
    "title": "Carrion Grubbage",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5544",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5742",
    "category": "tirion",
    "title": "Redemption",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5742",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5781",
    "category": "tirion",
    "title": "Of Forgotten Memories",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5781",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5845",
    "category": "tirion",
    "title": "Of Lost Honor",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5845",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5846",
    "category": "tirion",
    "title": "Of Love and Family – Part 1",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5846",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5848",
    "category": "tirion",
    "title": "Of Love and Family – Part 2",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5848",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5861",
    "category": "tirion",
    "title": "Find Myranda",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5861",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5862",
    "category": "tirion",
    "title": "Scarlet Subterfuge",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5862",
    "source": "",
    "phase": "now"
  },
  {
    "id": "t-5944",
    "category": "tirion",
    "title": "In Dreams",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern / Western Plaguelands",
    "notes": "Tirion-Questreihe laut deiner aktuellen Aussage vollständig abgeschlossen. Quest-ID #5944",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-attune",
    "category": "raid",
    "title": "Onyxia Attunement / Drakefire Amulet prüfen",
    "status": "done",
    "priority": 4,
    "mode": "quest",
    "location": "Horde · Onyxia Attunement",
    "notes": "Prequest vollständig abgeschlossen laut Nutzer.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-consumables",
    "category": "raid",
    "title": "Raid-Consumables planen und besorgen",
    "status": "done",
    "priority": 4,
    "mode": "ah",
    "location": "Auction House / Cooking",
    "notes": "Alle Consumables vorhanden laut Nutzer; vor späteren Raids Bestand nachfüllen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-enchants",
    "category": "raid",
    "title": "Letzte Raid-Enchants abschließen",
    "status": "doing",
    "priority": 2,
    "mode": "ah",
    "location": "Enchanting / Auction House",
    "notes": "Nur Boots Enchant als letzter Pflicht-Enchant; Head optional, Legs +10 AP / +40 Armor behalten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-prices",
    "category": "raid",
    "title": "AH-Preise vor Raidstart beobachten",
    "status": "todo",
    "priority": 4,
    "mode": "ah",
    "location": "Auction House",
    "notes": "Consumable- und Enchant-Materialpreise vergleichen. Preissteigerung vor Raidstart ist möglich, aber nicht garantiert.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-build",
    "category": "raid",
    "title": "MM Raid-Spec und Hit-Ziel erreicht",
    "status": "done",
    "priority": 4,
    "mode": "research",
    "location": "Talentbaum / Ausrüstung",
    "notes": "Marksmanship, 8 % Hit als aktuelles Raid-Ziel; persönliche Gear-Kombination erreicht.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "raid-raidweek",
    "category": "raid",
    "title": "Erste Raid-Woche vorbereiten (09.12.2026)",
    "status": "todo",
    "priority": 2,
    "mode": "raid",
    "location": "Barrow Deeps · Hyjal Summit · Onyxia’s Lair",
    "notes": "Raidzeiten, Gruppenplatz, Attunements, Consumables, Reparaturgold und Verzauberungen klären.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "farm-reals100",
    "category": "farm",
    "title": "10 weitere Tarnished Undermine Real sammeln",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "Level-60-Dungeons",
    "notes": "Ranger’s Belt gekauft; alter 100-Reals-Farm abgeschlossen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "farm-realsbuffer",
    "category": "farm",
    "title": "Undermine-Reals als Reserve ansparen",
    "status": "doing",
    "priority": 2,
    "mode": "dungeon",
    "location": "Level-60-Dungeons",
    "notes": "Reserve für Raid-Content. Cap 165 laut Nutzer, am Currency-Tooltip prüfen; Überschuss ggf. in Damaged Undermine Supply Crate (5 Reals).",
    "source": "",
    "phase": "now"
  },
  {
    "id": "farm-dmtribute",
    "category": "farm",
    "title": "Dire Maul North Tribute Runs organisieren",
    "status": "doing",
    "priority": 2,
    "mode": "dungeon",
    "location": "Dire Maul North",
    "notes": "Erster freiwilliger Dungeon-Fokus; Materialien vorher prüfen. Tarnished Elven Ring nur optional.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "farm-dungeontour",
    "category": "farm",
    "title": "Dungeon-Runs gezielt kombinieren",
    "status": "doing",
    "priority": 2,
    "mode": "dungeon",
    "location": "Dire Maul / Stratholme / Scholomance / UBRS",
    "notes": "Freiwillig einmal je Dungeon pro Tag, keine Pflicht. Rotation im eigenen Tab.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-silithus",
    "category": "quests",
    "title": "Silithus weitgehend durchquesten",
    "status": "todo",
    "priority": 2,
    "mode": "quest",
    "location": "Silithus",
    "notes": "Zuletzt 1–2 Quests offen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-winterspring",
    "category": "quests",
    "title": "Winterspring weitgehend durchquesten",
    "status": "todo",
    "priority": 3,
    "mode": "quest",
    "location": "Winterspring",
    "notes": "Zuletzt 1–2 Quests offen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-azshara",
    "category": "quests",
    "title": "Azshara: Restquests prüfen",
    "status": "todo",
    "priority": 4,
    "mode": "quest",
    "location": "Azshara",
    "notes": "Optional, solange keine wichtigen Quests oder Vorteile offen sind.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-cleanup",
    "category": "quests",
    "title": "Questlog entrümpeln / High-Level-Zonen abschließen",
    "status": "doing",
    "priority": 3,
    "mode": "quest",
    "location": "Eastern & Western Plaguelands",
    "notes": "Eastern Plaguelands: zuletzt 2 Elite-Quests offen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-ras",
    "category": "quests",
    "title": "Ras Frostwhisper Questabschluss prüfen",
    "status": "check",
    "priority": 4,
    "mode": "dungeon",
    "location": "Stratholme Undead → Scholomance",
    "notes": "Zuletzt Menethil’s Gift aktiv; Folgeschritte und tatsächlichen Abschluss prüfen. Spectral Essence behalten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-demet",
    "category": "quests",
    "title": "The Scarlet Oracle, Demetria: Status prüfen",
    "status": "check",
    "priority": 4,
    "mode": "quest",
    "location": "Eastern Plaguelands",
    "notes": "Demetria und Crimson Courier sind verschiedene NPCs. Questabschluss bisher nicht bestätigt.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "quest-restless",
    "category": "quests",
    "title": "The Restless Souls (optional)",
    "status": "todo",
    "priority": 4,
    "mode": "dungeon",
    "location": "Stratholme",
    "notes": "Egan’s Blaster; für Pre-Raid-Hunter-Gear nicht nötig. Nur nebenbei erledigen, wenn ohnehin in Stratholme.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "pvp-bgs",
    "category": "pvp",
    "title": "Battlegrounds gelegentlich spielen",
    "status": "doing",
    "priority": 4,
    "mode": "pvp",
    "location": "Warsong Gulch / Arathi Basin / Alterac Valley",
    "notes": "Nur freiwillig; lange Queues, kein gezielter Gear-Grind mehr.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "pvp-quests",
    "category": "pvp",
    "title": "Battleground-Quests und Marks sichern",
    "status": "todo",
    "priority": 4,
    "mode": "pvp",
    "location": "BG-Questgeber",
    "notes": "Einmalige Aufgaben und nützliche Marken mitnehmen; Voraussetzungen/BG-Rewards vorab prüfen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "pvp-warraptor",
    "category": "pvp",
    "title": "Whistle of the Black War Raptor (Rank 11)",
    "status": "todo",
    "priority": 3,
    "mode": "pvp",
    "location": "PvP-Ranks",
    "notes": "Langfristiges Wunsch-Mount statt normalem Raptor. Wowhead Forever nennt Rank 11. Zeitaufwand realistisch prüfen.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "pvp-frostwolf",
    "category": "pvp",
    "title": "Frostwolf Clan-Reputation langfristig steigern",
    "status": "todo",
    "priority": 3,
    "mode": "pvp",
    "location": "Alterac Valley",
    "notes": "PvP mit Ruf und BG-Rewards kombinieren; kein täglicher Pflichtgrind.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "rep-cenarion",
    "category": "rep",
    "title": "Cenarion Circle-Ruf neben Silithus sammeln",
    "status": "todo",
    "priority": 2,
    "mode": "quest",
    "location": "Silithus",
    "notes": "Mit Quests, Twilight-Mobs und ggf. Folgeevents kombinieren; AQ-Relevanz/Rewards prüfen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "rep-argent",
    "category": "rep",
    "title": "Argent Dawn-Ruf aufbauen",
    "status": "todo",
    "priority": 3,
    "mode": "dungeon",
    "location": "Eastern Plaguelands / Scholomance / Stratholme",
    "notes": "Für langfristige Naxx-Vorbereitung; tatsächlichen Stand und Forever-Anforderungen prüfen.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "rep-timbermaw",
    "category": "rep",
    "title": "Timbermaw Hold-Reputation fortsetzen",
    "status": "todo",
    "priority": 4,
    "mode": "solo",
    "location": "Felwood / Winterspring",
    "notes": "Zuvor von Unfriendly in Richtung Friendly gearbeitet; Quests und Farming kombinieren.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "rep-darkspear",
    "category": "rep",
    "title": "Darkspear Trolls-Reputation / Raptor Riding prüfen",
    "status": "doing",
    "priority": 2,
    "mode": "quest",
    "location": "Orgrimmar / Darkspear",
    "notes": "Letzter bestätigter Stand 11.965/12.000 Honored; Runecloth sammeln, Preise beobachten, Exalted langfristig.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "rep-earthen",
    "category": "rep",
    "title": "Earthen Ring – Honored erreicht",
    "status": "done",
    "priority": 4,
    "mode": "research",
    "location": "Unstable Magic Turn-ins",
    "notes": "Honored erreicht; 89 Motes of Unstable Magic zuletzt gemeldet, auf Bank behalten; keine bestätigte weitere Nutzung.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "rep-hyjal",
    "category": "rep",
    "title": "Guardians of Hyjal – weitere Quellen prüfen",
    "status": "check",
    "priority": 4,
    "mode": "research",
    "location": "Hyjal",
    "notes": "Questgebiet laut dir vollständig gemacht; zusätzliche Rufwege und zukünftige Raid-Relevanz unklar.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "prof-cook300",
    "category": "professions",
    "title": "Cooking 225 → 300",
    "status": "done",
    "priority": 4,
    "mode": "solo",
    "location": "Cooking Trainer / Rezepte",
    "notes": "In letzter interaktiver Checkliste abgehakt (Cooking 300).",
    "source": "",
    "phase": "now"
  },
  {
    "id": "prof-food",
    "category": "professions",
    "title": "Bestes Hunter-Food für Forever prüfen",
    "status": "todo",
    "priority": 4,
    "mode": "research",
    "location": "Cooking / AH",
    "notes": "Grilled Squid ist ein Kandidat, Forever-Buffs unterscheiden sich teils von Classic. Mit anderen neuen Buff-Foods vergleichen und Rezept rechtzeitig organisieren.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "prof-tribal",
    "category": "professions",
    "title": "Tribal Leatherworking prüfen / abschließen",
    "status": "check",
    "priority": 3,
    "mode": "solo",
    "location": "Leatherworking 300",
    "notes": "Leatherworking 300 vorhanden; Tribal-Spezialisierung war geplant. Status und Nutzen im aktuellen Forever-Tier prüfen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "prof-fishing",
    "category": "professions",
    "title": "Fishing aufbauen (optional)",
    "status": "todo",
    "priority": 4,
    "mode": "solo",
    "location": "Azeroth",
    "notes": "Nützlich für Food-Materialien wie Raw Winter Squid, aber AH-Kauf ggf. effizienter.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "gold-leather",
    "category": "gold",
    "title": "Rugged Leather farmen / verkaufen",
    "status": "doing",
    "priority": 2,
    "mode": "solo",
    "location": "High-Level-Beasts",
    "notes": "Verkaufspreis zuletzt attraktiv. AH-Preis prüfen; Gold/Stunde statt Einzelpreis betrachten.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "gold-puffer",
    "category": "gold",
    "title": "Goldpuffer vor Epic Mount aufbauen",
    "status": "doing",
    "priority": 2,
    "mode": "solo",
    "location": "Auktionshaus / Quests / Dungeons",
    "notes": "Letzter bestätigter Goldstand 904g nach Materialkauf für Dawn Armor; neu eintragen. Goldpuffer vor Epic Riding wieder aufbauen.",
    "source": "",
    "phase": "now"
  },
  {
    "id": "gold-epicmount",
    "category": "gold",
    "title": "Epic Riding / Epic Mount kaufen",
    "status": "todo",
    "priority": 2,
    "mode": "short",
    "location": "Horde Mount Vendor",
    "notes": "Kauf bewusst zurückgestellt; 900g als editierbare Planungsannahme, Preis im Spiel prüfen.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "gold-darkspear",
    "category": "gold",
    "title": "Normalen Raptor als Alternative offenhalten",
    "status": "todo",
    "priority": 4,
    "mode": "research",
    "location": "Darkspear / Raptor Riding",
    "notes": "Nur falls Black War Raptor mittelfristig nicht erreichbar oder Epic Riding separat gebraucht wird.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "future-rhok",
    "category": "future",
    "title": "Rhok'delar, Longbow of the Ancient Keepers",
    "status": "blocked",
    "priority": 3,
    "mode": "raid",
    "location": "Hunter Epic Quest",
    "notes": "Längerfristiges Hunter-Ziel. Ancient Petrified Leaf aus Molten Core benötigt; Molten Core ist nicht für den Raidstart 09.12. angekündigt.",
    "source": "",
    "phase": "future"
  },
  {
    "id": "future-onyxsinew",
    "category": "future",
    "title": "Mature Black Dragon Sinew von Onyxia",
    "status": "blocked",
    "priority": 3,
    "mode": "raid",
    "location": "Onyxia's Lair · ab 09.12.2026",
    "notes": "Baustein für die klassische Hunter-Epic-Quest. Loot/Drop im Forever-Raid beim Start prüfen; nicht als bereits verfügbar behaupten.",
    "source": "",
    "phase": "future"
  },
  {
    "id": "future-leaf",
    "category": "future",
    "title": "Ancient Petrified Leaf aus Molten Core",
    "status": "blocked",
    "priority": 3,
    "mode": "raid",
    "location": "Molten Core · späterer Content",
    "notes": "Klassisch aus der Majordomo-Cache. Release von Molten Core in Forever nicht als bestätigt annehmen.",
    "source": "",
    "phase": "future"
  },
  {
    "id": "future-aq",
    "category": "future",
    "title": "AQ-Prepping erst bei belastbaren News konkretisieren",
    "status": "blocked",
    "priority": 4,
    "mode": "research",
    "location": "Silithus / Ahn’Qiraj",
    "notes": "Naturresistenz, Ruf, Dungeon-Items und Termin erst bei offiziellen Ankündigungen oder klar gekennzeichnetem Datamining konkretisieren.",
    "source": "",
    "phase": "future"
  },
  {
    "id": "future-watch",
    "category": "future",
    "title": "Forever-Watcher-Ergebnisse regelmäßig prüfen",
    "status": "todo",
    "priority": 3,
    "mode": "research",
    "location": "Wowhead / Blizzard / Podcasts",
    "notes": "Tägliche ChatGPT-Automation eingerichtet. Relevante Funde manuell oder über JSON-Patch in dieser lokalen App übernehmen.",
    "source": "",
    "phase": "long"
  },
  {
    "id": "g-dawn",
    "category": "gear",
    "title": "Dawn Armor",
    "status": "done",
    "priority": 4,
    "mode": "solo",
    "location": "Leatherworking",
    "notes": "Rezept gekauft (50g), selbst gecraftet und angelegt; +37 Agility, +1 % Hit, +1 % Crit laut Nutzer. Materialaufwand etwa 200g.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-t0boots",
    "category": "gear",
    "title": "Beaststalker's Boots",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "Stratholme Undead",
    "notes": "Drop erhalten; T0-Dreierbonus wieder aktiv laut Nutzer.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-t0chest",
    "category": "gear",
    "title": "Beaststalker's Tunic",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Vorhanden, durch Dawn Armor ersetzt; für Sammlung behalten.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-painweaver",
    "category": "gear",
    "title": "Painweaver Band",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Zuletzt getragen laut Gear-Vergleich.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-trueaim",
    "category": "gear",
    "title": "Trueaim Gauntlets",
    "status": "done",
    "priority": 4,
    "mode": "dungeon",
    "location": "",
    "notes": "Aktuelles Gear laut letztem Vergleich; frühere Beaststalker’s Gloves für Sammlung behalten.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-premier-shoulders",
    "category": "gear",
    "title": "Premier Chain Shoulders",
    "status": "done",
    "priority": 4,
    "mode": "pvp",
    "location": "",
    "notes": "Gekauft; PvP-Zweierbonus nicht mehr für Raid erforderlich.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-premier-boots",
    "category": "gear",
    "title": "Premier Chain Boots",
    "status": "todo",
    "priority": 4,
    "mode": "pvp",
    "location": "Darkspear Islands",
    "notes": "Optional; zuletzt 7 Marken fehlend, nicht mehr gezielt farmen.",
    "phase": "long",
    "source": ""
  },
  {
    "id": "g-howler",
    "category": "gear",
    "title": "Howler's Furs",
    "status": "todo",
    "priority": 4,
    "mode": "short",
    "location": "Pix Xizzix · Booty Bay",
    "notes": "75 Reals; nicht nötig, Baron Cape vorhanden. Reserve bevorzugen.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "g-pendant",
    "category": "gear",
    "title": "Pendant of Celerity",
    "status": "todo",
    "priority": 4,
    "mode": "dungeon",
    "location": "Lord Valthalak · UBRS",
    "notes": "Optional, kein Hit-Blocker mehr.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "raid-boots",
    "category": "raid",
    "title": "Beaststalker's Boots verzaubern",
    "status": "todo",
    "priority": 1,
    "mode": "ah",
    "location": "",
    "notes": "Enchant Boots – Greater Agility (+7 Agility), letzte Pflichtaufgabe.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "raid-head",
    "category": "raid",
    "title": "Head Enchant (optional)",
    "status": "todo",
    "priority": 4,
    "mode": "ah",
    "location": "",
    "notes": "Lesser Arcanum of Voracity (+8 Agility); bewusst zurückgestellt.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "raid-legs",
    "category": "raid",
    "title": "Legs Enchant beibehalten",
    "status": "done",
    "priority": 4,
    "mode": "ah",
    "location": "",
    "notes": "+10 AP / +40 Armor vorhanden. Kein teurer Austausch geplant.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "raid-chest",
    "category": "raid",
    "title": "Dawn Armor – Chest Enchant",
    "status": "check",
    "priority": 4,
    "mode": "ah",
    "location": "",
    "notes": "+3 All Stats war angekündigt, tatsächlicher Erhalt nicht separat bestätigt. Laut Nutzer nur noch Boots offen; bei Gelegenheit prüfen.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "legacy-cap",
    "category": "legacy",
    "title": "Beaststalker's Cap",
    "status": "todo",
    "priority": 2,
    "mode": "dungeon",
    "location": "Darkmaster Gandling · Scholomance",
    "notes": "T0-Sammlung; kein Raid-Gear-Zwang.",
    "phase": "now",
    "source": "https://www.wowhead.com/forever/guide/tier-05-dungeon-set-2-quest-locations-rewards"
  },
  {
    "id": "legacy-mantle",
    "category": "legacy",
    "title": "Beaststalker's Mantle",
    "status": "todo",
    "priority": 2,
    "mode": "dungeon",
    "location": "Overlord Wyrmthalak · LBRS",
    "notes": "T0-Sammlung; mit UBRS-Key kombinieren.",
    "phase": "now",
    "source": "https://www.wowhead.com/forever/guide/tier-05-dungeon-set-2-quest-locations-rewards"
  },
  {
    "id": "legacy-belt",
    "category": "legacy",
    "title": "Beaststalker's Belt – Besitz prüfen",
    "status": "check",
    "priority": 3,
    "mode": "ah",
    "location": "LBRS / AH",
    "notes": "Nicht separat bestätigt; für vollständiges T0-Set prüfen.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "legacy-key",
    "category": "legacy",
    "title": "Seal of Ascension (UBRS-Key)",
    "status": "doing",
    "priority": 2,
    "mode": "dungeon",
    "location": "LBRS → Emberstrife → Vaelan",
    "notes": "Ein Gemstone fehlt laut Nutzer; welcher ist offen. Omokk: Spirestone; Voone: Smolderthorn; Wyrmthalak: Bloodaxe.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "legacy-t05",
    "category": "legacy",
    "title": "T0.5 Questline / Legacy Point",
    "status": "todo",
    "priority": 4,
    "mode": "quest",
    "location": "",
    "notes": "Nur langfristig für Vollständigkeit und Legacy; keine teure Investition für MM-Pre-Raid.",
    "phase": "long",
    "source": "https://www.wowhead.com/forever/guide/tier-05-dungeon-set-2-quest-locations-rewards"
  },
  {
    "id": "prof-salt",
    "category": "professions",
    "title": "Leatherworking-Cooldown nutzen",
    "status": "doing",
    "priority": 3,
    "mode": "solo",
    "location": "",
    "notes": "Refined Deeprock Salt / Cured Rugged Hide; tatsächliche Marge prüfen, 2 Cured Rugged Hide pro Craft laut Nutzer.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "prof-dawn",
    "category": "professions",
    "title": "Pattern: Dawn Armor",
    "status": "done",
    "priority": 4,
    "mode": "ah",
    "location": "",
    "notes": "Rezept für 50g gekauft.",
    "phase": "now",
    "source": ""
  },
  {
    "id": "alt-pala",
    "category": "alt",
    "title": "Paladin entspannt weiterleveln",
    "status": "doing",
    "priority": 4,
    "mode": "quest",
    "location": "",
    "notes": "Optional. Kleine Investitionen für Taschen / Waffen; keine teuren Leveling-Epics.",
    "phase": "long",
    "source": ""
  },
  {
    "id": "alt-prof",
    "category": "alt",
    "title": "Paladin-Berufe planen",
    "status": "check",
    "priority": 4,
    "mode": "research",
    "location": "",
    "notes": "Alchemy / Tailoring als mögliche Cooldown-Berufe prüfen; nicht blind Gold investieren.",
    "phase": "long",
    "source": ""
  },
  {
    "id": "gold-runecloth",
    "category": "gold",
    "title": "Runecloth sammeln / AH beobachten",
    "status": "doing",
    "priority": 2,
    "mode": "ah",
    "location": "",
    "notes": "Keine teuren Massenkäufe erzwingen. Darkspear Exalted vor späterem Raptor.",
    "phase": "now",
    "source": ""
  }
];
const STORAGE='wow_forever_hunter_command_center_v3';
const APP='WoW Forever Hunter Command Center';
const CAT={gear:['Gear & Alternativen','⚔'],tirion:['Tirion Fordring','✓'],raid:['Raidvorbereitung','♜'],farm:['Dungeon & Reals','◇'],quests:['Quests & Gebiete','▤'],pvp:['PvP','⚑'],rep:['Ruf','✦'],professions:['Berufe','⚒'],gold:['Gold & Mounts','◈'],future:['Zukunft & Rhok’delar','◎'],legacy:['T0 & Legacy','✧'],alt:['Paladin / Twink','♞'],custom:['Weitere Ziele','＋']};
const NAV=[['overview','Übersicht','◈'],['daily','Daily-Rotation','↻'],['resources','Ressourcen','◇'],['legacy','T0 & Legacy','✧'],['alt','Paladin / Twink','♞'],['all','Alle Aufgaben','▦'],['gear','Gear & Alternativen','⚔'],['raid','Raids','♜'],['farm','Dungeons & Reals','◇'],['quests','Quests & Gebiete','▤'],['pvp','PvP','⚑'],['rep','Ruf','✦'],['professions','Berufe','⚒'],['gold','Gold & Mounts','◈'],['future','Langzeitziele','◎'],['watcher','Watcher & News','⌁'],['archive','Erledigt','✓']];
const MODES={short:'Kurz erledigen',solo:'Solo-Farm',dungeon:'Dungeon-Gruppe',quest:'Questen',pvp:'Battleground',raid:'Raid',ah:'Auktionshaus',research:'Prüfen / Planen'};
const STATUSES={todo:'Offen',doing:'In Arbeit',check:'Status prüfen',blocked:'Noch nicht verfügbar',done:'Erledigt'};
const PRI={1:'P1 · Jetzt',2:'P2 · Hoch',3:'P3 · Nebenbei',4:'P4 · Optional'};
const PHASE={now:'Jetzt machbar',long:'Langzeit',future:'Zukünftig'};
const KIND={official:'Offiziell bestätigt',datamined:'Datamining',podcast:'Podcast / Interview',speculation:'Spekulation'};
const BASE_NEWS=[{id:'source-raids-2026',date:'2026-11-21',kind:'official',title:'Erste Forever-Raids ab 09.12.2026',summary:'Blizzard nennt Barrow Deeps (10), Hyjal Summit (20) und Onyxia’s Lair (40). Molten Core ist nicht Teil dieser Startliste.',source:'https://worldofwarcraft.blizzard.com/en-us/news/24303862/world-of-warcraft-forever-whats-next'}];
function clone(x){return JSON.parse(JSON.stringify(x))}
const DAILY=[['dm','Dire Maul North · Tribute','Frost Oil, Thorium Widget und Suit-Mats prüfen. Optionaler Tribute-Loot, Reals.'],['strat','Stratholme · Full Run','Living + Undead, Gold, Runecloth, Righteous Orbs, Argent Dawn, Reals.'],['lbrs','LBRS · Full Run','T0 Mantle und letzter Gemstone für Seal of Ascension.'],['scholo','Scholomance · Full Run','T0 Cap von Darkmaster Gandling, Dark Runes, Gold, Reals.'],['ubrs','UBRS · Full Run (optional)','Gold, Reals, Lord Valthalak bei verfügbarer Beschwörung.'],['salt','Leatherworking-Cooldown (falls bereit)','Kein täglicher Zwang; nur bei verfügbarem Cooldown.'],['pvp','PvP / Paladin (optional)','Nur bei Lust; Rank 11 langfristig, Paladin als Nebenprojekt.']];
function localDay(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function blank(){return {tasks:clone(SEED),reals:67,realsTarget:165,realsCap:165,gold:904,focus:['raid-boots','gold-puffer','farm-dmtribute'],updates:clone(BASE_NEWS),updatedAt:null,daily:{date:localDay(),checks:{},mats:{},runs:'1',craft:false},economy:{mount:900,reserve:500,alt:50,rep:11965,cloth:22,price:5,goldConfirmed:false,realsConfirmed:false,repConfirmed:false},runLog:[]}}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function safeUrl(url){return /^https:\/\//i.test(String(url||''))?String(url):''}
function validTask(t,i){if(!t||typeof t!=='object')throw Error('Ungültiger Task.');const id=String(t.id||'');const title=String(t.title||'').trim();if(!id||!title||id.length>180||title.length>200)throw Error('Ungültige Task-ID oder Titel.');return {id,title,category:CAT[t.category]?t.category:'custom',status:STATUSES[t.status]?t.status:'todo',priority:[1,2,3,4].includes(Number(t.priority))?Number(t.priority):3,mode:MODES[t.mode]?t.mode:'solo',location:String(t.location||'').slice(0,220),notes:String(t.notes||'').slice(0,2400),source:safeUrl(t.source),phase:PHASE[t.phase]?t.phase:'now',order:Number.isFinite(Number(t.order))?Number(t.order):i}}
function validated(tasks){if(!Array.isArray(tasks)||tasks.length>1800)throw Error('Aufgabenliste ungültig oder zu groß.');const ids=new Set();return tasks.map((t,i)=>{const x=validTask(t,i);if(ids.has(x.id))throw Error('Doppelte Task-ID.');ids.add(x.id);return x})}
function validNews(n){if(!n||typeof n!=='object')throw Error('Ungültige Nachricht.');return {id:String(n.id||'news-'+Math.random().toString(36).slice(2)).slice(0,180),title:String(n.title||'Neuer Fund').slice(0,220),date:String(n.date||new Date().toISOString().slice(0,10)).slice(0,20),summary:String(n.summary||'').slice(0,2000),source:safeUrl(n.source),kind:KIND[n.kind]?n.kind:'speculation'}}
function validateState(raw){return {tasks:validated(raw.tasks),reals:clampInt(raw.reals,0,9999,67),realsTarget:clampInt(raw.realsTarget,1,9999,165),realsCap:clampInt(raw.realsCap,1,9999,165),gold:raw.gold==null||raw.gold===''?null:clampInt(raw.gold,0,99999999,0),focus:Array.isArray(raw.focus)?raw.focus.filter(x=>typeof x==='string').slice(0,3):[],updates:Array.isArray(raw.updates)?raw.updates.slice(0,500).map(validNews):[],updatedAt:raw.updatedAt||null,daily:{date:typeof raw.daily?.date==='string'?raw.daily.date:localDay(),checks:raw.daily?.checks&&typeof raw.daily.checks==='object'?raw.daily.checks:{},mats:raw.daily?.mats&&typeof raw.daily.mats==='object'?raw.daily.mats:{},runs:['1','5','10'].includes(String(raw.daily?.runs))?String(raw.daily.runs):'1',craft:!!raw.daily?.craft},economy:{mount:clampInt(raw.economy?.mount,0,999999,900),reserve:clampInt(raw.economy?.reserve,0,999999,500),alt:clampInt(raw.economy?.alt,0,999999,50),rep:clampInt(raw.economy?.rep,0,33000,11965),cloth:clampInt(raw.economy?.cloth,0,999999,22),price:Math.max(0,Math.min(9999,Number(raw.economy?.price??5)||0)),goldConfirmed:!!raw.economy?.goldConfirmed,realsConfirmed:!!raw.economy?.realsConfirmed,repConfirmed:!!raw.economy?.repConfirmed},runLog:Array.isArray(raw.runLog)?raw.runLog.filter(x=>x&&typeof x==='object').slice(0,365).map(x=>({date:String(x.date||'').slice(0,10),name:String(x.name||'').slice(0,60),gold:clampInt(x.gold,0,999999,0),minutes:clampInt(x.minutes,1,1440,1)})):[]}}
function clampInt(v,min,max,fallback){const n=Number(v);return Number.isFinite(n)?Math.max(min,Math.min(max,Math.floor(n))):fallback}
function load(){try{const v=localStorage.getItem(STORAGE);if(v)return validateState(JSON.parse(v))}catch(e){console.warn('Local storage unavailable:',e)}return blank()}
let data=load(),page='overview',modeFilter='all',statusFilter='open',textFilter='',showDone=false,querySource='';
function save(){data.updatedAt=new Date().toISOString();try{localStorage.setItem(STORAGE,JSON.stringify(data))}catch(e){toast('Speichern fehlgeschlagen. Bitte Backup exportieren!')}}
function toast(s){const el=document.getElementById('toast');el.textContent=s;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3900)}
function getTask(id){return data.tasks.find(t=>t.id===id)}
function categoryTasks(cat){return data.tasks.filter(t=>t.category===cat)}
function gearStats(){const tasks=categoryTasks('gear');return {done:tasks.filter(x=>x.status==='done').length,total:tasks.length}}
function tirionStats(){const tasks=categoryTasks('tirion');return {done:tasks.filter(x=>x.status==='done').length,total:tasks.length}}
function active(t){return t.status!=='done'&&t.status!=='blocked'}
function sortTasks(items){const s={doing:0,check:1,todo:2,blocked:3,done:4};return [...items].sort((a,b)=>a.priority-b.priority||s[a.status]-s[b.status]||a.order-b.order)}
function focusTasks(){const marked=data.focus.map(getTask).filter(t=>t&&active(t));const pool=sortTasks(data.tasks.filter(t=>t.category!=='tirion'&&t.phase==='now'&&active(t)&&!marked.some(m=>m.id===t.id)));return marked.concat(pool).slice(0,3)}
function renderNav(){document.getElementById('nav').innerHTML=NAV.map(([key,label,ico])=>{const n=key==='all'?data.tasks.filter(active).length:key==='archive'?data.tasks.filter(t=>t.status==='done').length:CAT[key]?data.tasks.filter(t=>t.category===key&&(key==='future'?t.status!=='done':active(t))).length:null;return `<button data-nav="${key}" class="${page===key?'active':''}"><span class="ico">${ico}</span>${esc(label)}${n!==null?`<span class="count">${n}</span>`:''}</button>`}).join('')}
function bar(p,green=false){return `<div class="bar ${green?'green':''}"><span style="width:${Math.max(0,Math.min(100,p))}%"></span></div>`}
function renderStats(){const d=localDay(),days=Math.ceil((new Date(2026,11,9).getTime()-new Date(d+'T00:00:00').getTime())/86400000),boots=getTask('raid-boots')?.status==='done';document.getElementById('stats').innerHTML=`<div class="stat"><small>Raidbereitschaft · MM</small><div class="big">${boots?'Fertig':'Fast fertig'}</div><div class="note">8 % Hit · T0 3er · Dawn Armor</div>${bar(boots?100:95,true)}</div><div class="stat"><small>Gold ${data.economy.goldConfirmed?'':'· letzter Stand'}</small><div class="big">${data.gold==null?'—':data.gold.toLocaleString('de-DE')} <span>g</span></div><div class="note">Goldpuffer vor Epic Riding</div>${bar(100*(data.gold||0)/Math.max(1,data.economy.mount+data.economy.reserve+data.economy.alt))}</div><div class="stat"><small>Undermine Reals ${data.economy.realsConfirmed?'':'· zuletzt gemeldet'}</small><div class="big">${data.reals} <span>/ ${data.realsCap}</span></div><div class="note">Reserve · Cap editierbar</div>${bar(100*data.reals/data.realsCap)}</div><div class="stat"><small>Raidstart · 09.12.2026</small><div class="big">${days>0?days+' <span>Tage</span>':days===0?'Heute':'Live'}</div><div class="note">Barrow Deeps · Hyjal · Onyxia</div>${bar(days<=0?100:Math.max(0,100-days/14*100))}</div>`}
function chip(text,className=''){return `<span class="pill ${className}">${esc(text)}</span>`}
function taskCard(t,compact=false){const done=t.status==='done';const pinned=data.focus.includes(t.id);return `<article class="task ${done?'done':''}"><input type="checkbox" class="ck" data-check="${esc(t.id)}" aria-label="${esc(t.title)} erledigt" ${done?'checked':''}/><div><h4 class="tasktitle">${esc(t.title)}</h4><div class="meta">${chip(CAT[t.category]?.[0]||'Weitere Ziele')}${chip(PRI[t.priority],'p'+t.priority)}${chip(MODES[t.mode])}${t.status!=='todo'?chip(STATUSES[t.status],t.status==='check'?'verify':t.status):''}${t.phase!=='now'?chip(PHASE[t.phase]):''}</div>${t.location?`<div class="taskdesc">⌖ ${esc(t.location)}</div>`:''}${!compact&&t.notes?`<p class="taskdesc">${esc(t.notes)}</p>`:''}${t.source?`<div style="margin-top:7px;font-size:11px"><a href="${esc(t.source)}" target="_blank" rel="noopener noreferrer">Quelle öffnen ↗</a></div>`:''}</div><div class="task-actions"><select class="statussel" data-status="${esc(t.id)}" aria-label="Status ${esc(t.title)}">${Object.entries(STATUSES).map(([key,v])=>`<option value="${key}" ${key===t.status?'selected':''}>${v}</option>`).join('')}</select>${!done&&t.phase==='now'?`<button type="button" class="btn sm ${pinned?'pin':'quiet'}" data-pin="${esc(t.id)}" title="${pinned?'Aus Fokus entfernen':'In Fokus aufnehmen'}">${pinned?'★ Fokus':'☆ Fokus'}</button>`:''}<button type="button" class="btn quiet sm" data-edit="${esc(t.id)}" title="Aufgabe bearbeiten">✎</button></div></article>`}
function renderSpot(t,i){return `<div class="spot"><div class="num">0${i+1}</div><h4>${esc(t.title)}</h4><p>${esc(t.location||t.notes||CAT[t.category][0])}</p><div class="buttons">${chip(PRI[t.priority],'p'+t.priority)}<button class="btn sm" data-open="${esc(t.id)}">Details ↗</button></div></div>`}
function overview(){const f=focusTasks();return `<div class="focus"><div class="eyebrow">Grakash · Wolfspear · Horde</div><h3>Gear-Ziel erreicht. Jetzt Vermögen und Legacy.</h3><p>Onyxia Attunement erledigt, Consumables vollständig, Dawn Armor und Beaststalker's Boots erhalten. Kein Pflicht-Grind für Kirtonos, PvP-Set oder teure T0.5-Questline mehr.</p><div class="topstrip">${chip('8 % Hit')}${chip('T0-Dreierbonus')}${chip('Cape of the Black Baron')}${chip('Ranger’s Belt')}</div></div><div class="sectionhead"><h3>Deine drei Fokusziele</h3><small>Per ☆ Fokus selbst anpassbar</small></div><div class="cards3">${f.map(renderSpot).join('')}</div><div class="two-col" style="margin-top:16px"><section class="panel"><h3>Heute, wenn du Lust hast</h3><p>Keine Pflichtliste – ein Run je Dungeon ist deine freiwillige Obergrenze, nicht dein Soll.</p>${DAILY.slice(0,5).map(([id,title,note])=>`<div class="pathitem"><input class="ck" type="checkbox" data-daily="${id}" ${data.daily.checks[id]?'checked':''}><div><b>${esc(title)}</b><small>${esc(note)}</small></div></div>`).join('')}<button class="btn sm" data-jump="daily" style="margin-top:12px">Rotation & Mats →</button></section><section class="panel"><h3>Ressourcen schnell pflegen</h3>${resourceInputs()}<button class="btn sm" data-jump="resources" style="margin-top:12px">Goldplanung & Ruf →</button></section></div><div class="sectionhead"><h3>Noch offen für den Raid</h3><small>Head und Legs nicht erzwingen</small></div><div class="tasklist">${['raid-boots','raid-head','raid-chest','raid-consumables','raid-attune'].map(getTask).filter(Boolean).map(taskCard).join('')}</div><div class="sectionhead"><h3>Legacy und T0 sammeln</h3></div><div class="tasklist">${['legacy-cap','legacy-mantle','legacy-key','legacy-belt'].map(getTask).filter(Boolean).map(taskCard).join('')}</div>`}
function sectionAll(){return `<div class="controls"><input id="search" class="in" placeholder="Suche nach Item, Quest, Ort, NPC ..." value="${esc(textFilter)}"/><select id="modeFilter" class="sel"><option value="all">Alle Aktivitäten</option>${Object.entries(MODES).map(([v,k])=>`<option value="${v}" ${modeFilter===v?'selected':''}>${esc(k)}</option>`).join('')}</select><select id="statusFilter" class="sel"><option value="open" ${statusFilter==='open'?'selected':''}>Offen & prüfen</option><option value="all" ${statusFilter==='all'?'selected':''}>Alle Status</option>${Object.entries(STATUSES).map(([k,l])=>`<option value="${k}" ${statusFilter===k?'selected':''}>${esc(l)}</option>`).join('')}</select></div>`}
function filtered(){let tasks=data.tasks.filter(t=>{if(page==='archive')return t.status==='done';if(CAT[page]&&t.category!==page)return false;if(page==='all'&&t.category==='tirion'&&statusFilter==='open')return false;if(page==='gear'||page==='tirion'||page==='future')return true;return page==='all'||CAT[page]});if(statusFilter==='open'&&page==='future')tasks=tasks.filter(t=>t.status!=='done');else if(statusFilter==='open'&&page!=='gear'&&page!=='tirion'&&page!=='archive')tasks=tasks.filter(active);else if(statusFilter!=='all'&&statusFilter!=='open'&&page!=='archive')tasks=tasks.filter(t=>t.status===statusFilter);if(modeFilter!=='all')tasks=tasks.filter(t=>t.mode===modeFilter);if(textFilter)tasks=tasks.filter(t=>[t.title,t.location,t.notes,CAT[t.category]?.[0]].join(' ').toLocaleLowerCase('de').includes(textFilter.toLocaleLowerCase('de')));return sortTasks(tasks)}
function taskView(){const list=filtered();let head=page==='all'?'Alle Aufgaben':page==='archive'?'Erledigt & archiviert':CAT[page]?.[0]||'Aufgaben';let extra='';if(page==='gear')extra='<div class="notice">Persönliches Pre-Raid-Ziel erreicht. Diese Liste ist Besitz- und Alternativen-Archiv, keine BiS-Pflichtliste. Offene Alternativen sind optional.</div>';if(page==='future')extra='<div class="notice">Diese Ziele bleiben bewusst außerhalb des aktuellen Fokus: Rhok’delar wird erst mit dem passenden Raid-Content konkret. Die Onyxia-Sinew ist frühestens ab Raidstart ein Thema; für Ancient Petrified Leaf ist Molten Core notwendig.</div>';if(page==='quests')extra='<div class="notice">Silithus und Winterspring fast fertig; Eastern Plaguelands zuletzt zwei Elite-Quests offen. Die abgeschlossene Tirion-Questreihe bleibt separat im Archiv erfasst.</div>';if(page==='raid')extra='<div class="notice">Offiziell angekündigt für 09.12.2026: Barrow Deeps, Hyjal Summit und Onyxia’s Lair. Onyxia Attunement abgeschlossen; Consumables vollständig.</div>';return `${extra}<div class="sectionhead"><h3>${esc(head)}</h3><small>${list.length} Aufgaben angezeigt</small></div>${sectionAll()}<div class="tasklist" id="taskList">${list.length?list.map(taskCard).join(''):'<div class="empty">Keine passenden Aufgaben. Filter ändern oder eine neue Aufgabe anlegen.</div>'}</div>`}
function watcher(){const items=[...data.updates].sort((a,b)=>String(b.date).localeCompare(String(a.date)));return `<section class="watchbox"><div class="eyebrow">Einmal täglich · durch ChatGPT</div><h3 style="font:500 24px Georgia,serif;margin:9px 0">Forever Watcher – neue Erkenntnisse</h3><p>Der tägliche Watcher ist in ChatGPT eingerichtet. Er prüft neue offizielle Meldungen, Datamining, Podcasts und mögliche Hunter-Vorbereitungen. <b>Diese Offline-Datei aktualisiert er nicht selbst.</b> Wenn du von ChatGPT einen JSON-Patch erhältst, kopiere ihn hier hinein und übernimm ihn bewusst in die App.</p><label class="fieldlabel" for="patchArea">Watcher-Patch (JSON)</label><textarea id="patchArea" class="area" spellcheck="false" placeholder='{"type":"wow-forever-patch","version":1,"updates":[],"tasks":[]}'></textarea><div class="topstrip"><button class="btn primary" id="patchBtn">Patch importieren</button><button class="btn" id="samplePatchBtn">Beispielformat einfügen</button></div><details><summary>Welches Format akzeptiert die App?</summary><pre>${esc(JSON.stringify({type:'wow-forever-patch',version:1,updates:[{id:'watch-unique-1',date:'2026-11-21',kind:'official',title:'Titel der Meldung',summary:'Warum für meinen Hunter relevant?',source:'https://www.wowhead.com/forever/'}],tasks:[{id:'watch-task-unique-1',category:'future',title:'Relevante neue Vorbereitung prüfen',status:'todo',priority:3,mode:'research',location:'',notes:'Begründung + Quellhinweis'}]},null,2))}</pre></details></section><div class="sectionhead"><h3>Erfasste Meldungen</h3><small>${items.length} Einträge</small></div><div class="newslist">${items.length?items.map(n=>`<article class="news"><div class="newshdr"><span class="pill ${n.kind==='official'?'done':n.kind==='datamined'?'verify':''}">${esc(KIND[n.kind])}</span><span class="hint">${esc(n.date)}</span></div><h4>${esc(n.title)}</h4><p>${esc(n.summary)}</p><div class="topstrip">${n.source?`<a href="${esc(n.source)}" rel="noopener noreferrer" target="_blank">Originalquelle ↗</a>`:''}<button class="btn sm quiet" data-news-task="${esc(n.id)}">Als Aufgabe übernehmen</button><button class="btn sm quiet" data-news-delete="${esc(n.id)}">Löschen</button></div></article>`).join(''):'<div class="empty">Noch keine Watcher-Meldungen importiert.</div>'}</div><div class="sectionhead"><h3>Mit ChatGPT synchronisieren</h3></div><div class="panel"><p>Hier kannst du deinen aktuellen Stand für die nächste ChatGPT-Unterhaltung kopieren. Vollständige Backups exportierst du rechts oben. Achte darauf, Änderungen regelmäßig zu sichern.</p><div class="topstrip"><button class="btn primary" id="copySummary">Status für ChatGPT kopieren</button><button class="btn" id="copyPatchPrompt">Watcher-Aufgabenformat kopieren</button></div></div>`}
function setHeader(){const h={overview:['Raidbereit. Was macht heute Spaß?','Raid-ready statt endlosem Gear-Grind. Deine nächsten Ziele auf einen Blick.'],all:['Dein gesamter Backlog','Alle offenen Ziele – priorisiert und jederzeit editierbar.'],archive:['Bereits geschafft','Alles Erreichte bleibt dokumentiert.'],daily:['Deine freiwillige Daily-Rotation','Jeden Tag neu, ohne die einmaligen Ziele zurückzusetzen.'],resources:['Gold, Reals & Reputation','Zähler und Budget jederzeit anpassen.'],watcher:['Updates & neue Entdeckungen','Offizielle Informationen von Datamining und Gerüchten unterscheiden.']};const title=h[page]||[CAT[page]?.[0]||'Aufgaben','Alles geordnet, ohne den Überblick zu verlieren.'];document.getElementById('title').textContent=title[0];document.getElementById('intro').textContent=title[1];document.getElementById('subtitle').textContent=page==='watcher'?'Recherche · Quellen · Aktuelle Erkenntnisse':'WoW Forever · Horde Hunter · Level 60'}
function render(){ensureDay();renderNav();renderStats();setHeader();const root=document.getElementById('mainContent');root.innerHTML=page==='overview'?overview():page==='daily'?dailyView():page==='resources'?resourcesView():page==='watcher'?watcher():taskView()}
function setStatus(id,status){const t=getTask(id);if(!t||!STATUSES[status])return;t.status=status;if(status==='done')data.focus=data.focus.filter(x=>x!==id);save();render();toast('Status gespeichert: '+t.title)}
function pin(id){const t=getTask(id);if(!t||!active(t)||t.phase!=='now')return;if(data.focus.includes(id)){data.focus=data.focus.filter(x=>x!==id)}else{data.focus.push(id);if(data.focus.length>3)data.focus.shift()}save();render()}
function uid(){return 'user-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)}
const dialog=document.getElementById('editDialog');
function openEditor(id=null,defaults={}){const t=getTask(id)||defaults;document.getElementById('editHeading').textContent=id?'Aufgabe bearbeiten':'Neue Aufgabe';document.getElementById('editId').value=id||'';document.getElementById('fTitle').value=t.title||'';document.getElementById('fCategory').value=t.category|| (CAT[page]?page:'custom');document.getElementById('fStatus').value=t.status||'todo';document.getElementById('fPriority').value=String(t.priority||3);document.getElementById('fMode').value=t.mode||'solo';document.getElementById('fPhase').value=t.phase||'now';document.getElementById('fLocation').value=t.location||'';document.getElementById('fNotes').value=t.notes||'';document.getElementById('fSource').value=t.source||'';document.getElementById('deleteBtn').style.visibility=id?'visible':'hidden';dialog.showModal();document.getElementById('fTitle').focus()}
function initForm(){const opts=(m)=>Object.entries(m).map(([v,l])=>`<option value="${esc(v)}">${esc(Array.isArray(l)?l[0]:l)}</option>`).join('');document.getElementById('fCategory').innerHTML=opts(CAT);document.getElementById('fStatus').innerHTML=opts(STATUSES);document.getElementById('fPriority').innerHTML=opts(PRI);document.getElementById('fMode').innerHTML=opts(MODES)}
function download(filename,obj){const content=JSON.stringify(obj,null,2);const blob=new Blob([content],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200)}
function exportBackup(){download('wow-forever-hunter-backup-'+new Date().toISOString().slice(0,10)+'.json',{app:APP,format:3,exportedAt:new Date().toISOString(),...data});toast('Backup gespeichert. Datei sicher aufbewahren.')}
function importBackup(file){if(!file)return;if(file.size>5000000){toast('Datei ist zu groß.');return}file.text().then(s=>{try{const o=JSON.parse(s);if(o.app!==APP||![2,3].includes(o.format))throw Error('Nur Command-Center-Backups v2/v3 werden unterstützt.');let newer;if(o.format===3){newer=validateState(o);if(!confirm('V3-Backup importieren? Aktueller Stand wird ersetzt. Vorher Backup exportieren.'))return;}else{if(!confirm('V2-Backup migrieren? Aktuelle V3-Aufgaben bleiben erhalten; neue alte Aufgaben und News werden ergänzt. Ressourcen werden NICHT überschrieben.'))return;newer=clone(data);for(const t of validated(o.tasks)){if(!newer.tasks.some(x=>x.id===t.id))newer.tasks.push(t)}for(const n of (Array.isArray(o.updates)?o.updates:[]).map(validNews)){if(!newer.updates.some(x=>x.id===n.id))newer.updates.push(n)}}data=newer;save();render();toast('Backup erfolgreich importiert.')}catch(e){toast('Import fehlgeschlagen: '+e.message)}}).catch(()=>toast('Datei konnte nicht eingelesen werden.'))}
function importPatch(){const input=document.getElementById('patchArea')?.value.trim();if(!input){toast('Bitte zuerst JSON einfügen.');return}try{const obj=JSON.parse(input);if(obj.type!=='wow-forever-patch'||obj.version!==1||!Array.isArray(obj.updates)||!Array.isArray(obj.tasks))throw Error('Falsches Patch-Format.');if(obj.updates.length>100||obj.tasks.length>100)throw Error('Zu viele Einträge.');let u=0,t=0;for(const x of obj.updates){const n=validNews(x);if(!data.updates.some(item=>item.id===n.id)){data.updates.push(n);u++}}for(const x of obj.tasks){const item=validTask({...x,id:x.id||uid(),phase:x.phase||'now'},data.tasks.length);if(!getTask(item.id)){data.tasks.push(item);t++}}save();render();toast(`${u} Meldungen und ${t} neue Aufgaben importiert. Vorhandene Aufgaben unangetastet.`)}catch(e){toast('Patch ungültig: '+e.message)}}
async function copyText(s){try{await navigator.clipboard.writeText(s);toast('In die Zwischenablage kopiert.')}catch(_){const area=document.createElement('textarea');area.value=s;area.style.cssText='position:fixed;top:-2000px';document.body.appendChild(area);area.select();const ok=document.execCommand('copy');area.remove();toast(ok?'Kopiert.':'Kopieren wurde im Browser blockiert.')}}
function summary(){let s=`WoW Forever Hunter Tracker V3 – Stand ${localDay()}\nGear-Ziel: 8 % Hit, Dawn Armor, T0 3er, Baron Cape.\nGold: ${data.gold??'unbekannt'}${data.economy.goldConfirmed?'':' (alter Stand)'}; Reals: ${data.reals}/${data.realsCap}${data.economy.realsConfirmed?'':' (alter Stand)'}; Darkspear Fortschritt ab Honored: ${data.economy.rep}/33000; Runecloth: ${data.economy.cloth} ${data.economy.repConfirmed?'':'(alter Stand)'}.\nFokus: ${focusTasks().map(t=>t.title).join(' | ')}\nHeute: ${DAILY.map(([id,n])=>(data.daily.checks[id]?'[x] ':'[ ] ')+n).join(' | ')}\n\n`;for(const [cat,label] of Object.entries(CAT)){const tasks=sortTasks(data.tasks.filter(t=>t.category===cat));if(!tasks.length)continue;s+=`[${label[0]}]\n`;for(const t of tasks)s+=`- [${t.status==='done'?'x':' '}] ${t.title} | ${STATUSES[t.status]} | ${PRI[t.priority]}${t.notes?' | '+t.notes:''}\n`;s+='\n'}return s+'Bitte nur bestätigte Updates übernehmen.'}
function newsTask(id){const n=data.updates.find(x=>x.id===id);if(!n)return;openEditor(null,{title:n.title,category:'future',mode:'research',priority:n.kind==='official'?2:3,notes:n.summary+`\nVerlässlichkeit: ${KIND[n.kind]}.`,location:'Neuer Forever-Content',source:n.source,phase:'long'})}

function ensureDay(){if(data.daily.date!==localDay()){data.daily.date=localDay();data.daily.checks={};data.daily.mats={};save()}}
function resourceInputs(){return `<label class="fieldlabel">Gold (g)</label><input class="in" type="number" min="0" id="goldInput" value="${data.gold??''}"><p class="hint">${data.economy.goldConfirmed?'Aktualisiert':'904g zuletzt nach Dawn-Armor-Materialkauf; neu eintragen.'}</p><label class="fieldlabel">Tarnished Undermine Real</label><div class="counter"><button class="btn" data-realstep="-1">−</button><input class="in" type="number" min="0" id="realInput" value="${data.reals}"><button class="btn" data-realstep="1">+</button><span class="hint">/ ${data.realsCap}</span></div><p class="hint">${data.economy.realsConfirmed?'Aktualisiert':'67 zuletzt vor weiteren Runs gemeldet; aktuellen Wert prüfen.'}</p>`}
function dailyView(){const m=[['Frost Oil',1],['Thorium Widget',1],['Bolt of Runecloth',data.daily.craft?2:4],['Rugged Leather',data.daily.craft?4:8],['Rune Thread',data.daily.craft?1:2]];return `<div class="focus"><div class="eyebrow">${esc(data.daily.date)} · freiwillig</div><h3>Ein Run je Dungeon – wenn du Lust hast.</h3><p>Dire Maul North zuerst, danach Strat, LBRS oder Scholo nach Laune. Keine East-/West-Pflicht. Häkchen wechseln automatisch mit dem lokalen Kalendertag; kein Anspruch auf exakten Server-Reset.</p></div><div class="sectionhead"><h3>Daily-Rotation</h3><button class="btn sm" id="resetDaily">Heute zurücksetzen</button></div><div class="tasklist">${DAILY.map(([id,title,note])=>`<article class="task ${data.daily.checks[id]?'done':''}"><input class="ck" type="checkbox" data-daily="${id}" ${data.daily.checks[id]?'checked':''}><div><h4 class="tasktitle">${esc(title)}</h4><p class="taskdesc">${esc(note)}</p></div></article>`).join('')}</div><div class="sectionhead"><h3>Dire Maul Tribute · Einkaufsliste</h3></div><div class="panel"><div class="controls"><label>Vorrat für <select class="sel" id="matRuns">${[1,5,10].map(n=>`<option value="${n}" ${String(n)===data.daily.runs?'selected':''}>${n} Run${n>1?'s':''}</option>`).join('')}</select></label><label class="toggle"><input type="checkbox" id="matCraft" ${data.daily.craft?'checked':''}> Suit selbst craften (LW 285, Rezept gelernt)</label></div>${m.map(([name,q],i)=>`<div class="pathitem"><input class="ck" type="checkbox" data-mat="${i}" ${data.daily.mats[i]?'checked':''}><div><b>${q*Number(data.daily.runs)}× ${name}</b></div><button class="btn sm" data-copy="${name}">Kopieren</button></div>`).join('')}<p class="hint">Ogre Tannin: 1 pro Run innerhalb der Instanz sammeln. Standardmaterialien für Knot; Selbstcraft nur mit gelerntem Rezept. <a href="https://www.wowhead.com/forever/guide/dire-maul-gordoks-commons-north-dungeon-overview-location-rewards" target="_blank" rel="noopener">Guide</a> · <a href="https://metabot.gg/en/wow-forever/items/gordok-ogre-suit" target="_blank" rel="noopener">Craft-Rezept</a></p><button class="btn sm" id="copyMats">Ganze Einkaufsliste kopieren</button></div><div class="sectionhead"><h3>Gold-Run-Log (optional)</h3><small>Realisierter Gewinn statt theoretischem Loot-Value</small></div><div class="panel"><div class="formrow"><div><label class="fieldlabel">Dungeon</label><select class="sel" id="logName">${DAILY.slice(0,5).map(([id,n])=>`<option>${esc(n)}</option>`).join('')}</select></div><div><label class="fieldlabel">Gold netto (g, gerundet)</label><input class="in" type="number" min="0" id="logGold" placeholder="z. B. 45"></div><div><label class="fieldlabel">Dauer (Minuten)</label><input class="in" type="number" min="1" id="logMinutes" placeholder="z. B. 60"></div><div style="align-self:end"><button class="btn primary" id="addRun">Run speichern</button></div></div><div class="divider"></div>${runLogView()}</div>`}
function runLogView(){let g=data.runLog.reduce((a,x)=>a+x.gold,0),m=data.runLog.reduce((a,x)=>a+x.minutes,0);return `<p><b>${data.runLog.length} Runs · ${g}g netto · ${m?Math.round(g/m*60):0}g/Stunde</b> (nur geloggte Runs; Goldzähler separat pflegen)</p>${data.runLog.slice(0,15).map((x,i)=>`<div class="pathitem"><span class="hint">${esc(x.date.slice(5))}</span><div><b>${esc(x.name)}</b><small>${x.gold}g · ${x.minutes} min</small></div><button class="btn sm quiet" data-delrun="${i}">Entfernen</button></div>`).join('')}`}
function resourcesView(){const e=data.economy,target=e.mount+e.reserve+e.alt,rep=e.rep,need=Math.max(0,33000-rep),turns=Math.ceil(need/50),cloth=Math.max(0,turns*20-e.cloth),cost=cloth*e.price/100;const num=(x)=>Number(x).toLocaleString('de-DE',{maximumFractionDigits:2});return `<div class="two-col"><section class="panel"><h3>Gold & Reals</h3>${resourceInputs()}<label class="fieldlabel">Reals-Cap (165 laut Nutzer, editierbar)</label><input class="in" type="number" min="1" data-field="realsCap" value="${data.realsCap}"><p class="hint">Am Cap nur Überschuss in Damaged Undermine Supply Crate (5 Reals) investieren. ${Math.max(0,data.realsCap-data.reals)} Platz bis Cap. Nicht automatisch verrechnet.</p></section><section class="panel"><h3>Epic Riding & Puffer</h3>${[['mount','Epic Riding (Planwert)'],['reserve','Gewünschter Puffer'],['alt','Paladin-Budget']].map(([key,label])=>`<label class="fieldlabel">${label} (g)</label><input class="in" type="number" min="0" data-econ="${key}" value="${e[key]}">`).join('')}<div class="divider"></div><p>Goldziel: <b>${num(target)}g</b> · Noch ${num(Math.max(0,target-(data.gold||0)))}g</p>${bar(100*(data.gold||0)/Math.max(1,target))}<p class="hint">Rufkäufe und Raptor separat. Keine automatische Ausgabe.</p></section></div><div class="sectionhead"><h3>Darkspear Trolls · Exalted</h3><small>${e.repConfirmed?'Wert aktualisiert':'Letzter bekannter Stand; bitte prüfen'}</small></div><div class="panel"><div class="formrow"><div><label class="fieldlabel">Rufstufe</label><select id="repTier" class="sel"><option value="h" ${rep<12000?'selected':''}>Honored</option><option value="r" ${rep>=12000&&rep<33000?'selected':''}>Revered</option><option value="e" ${rep>=33000?'selected':''}>Exalted</option></select></div><div><label class="fieldlabel">Ruf innerhalb der Stufe</label><input class="in" id="repValue" type="number" min="0" max="${rep<12000?12000:21000}" value="${rep<12000?rep:rep<33000?rep-12000:21000}"></div><div><label class="fieldlabel">Runecloth auf Tasche / Bank</label><input class="in" type="number" min="0" data-econ="cloth" value="${e.cloth}"></div><div><label class="fieldlabel">AH-Preis pro Runecloth (Silber)</label><input class="in" type="number" step="0.1" min="0" data-econ="price" value="${e.price}"></div></div>${bar(100*rep/33000,true)}<p><b>${num(need)}</b> Ruf fehlen · ${num(turns)} Abgaben · <b>${num(cloth)} Runecloth</b> zusätzlich · ca. <b>${num(cost)}g</b>.</p><p class="hint">Planungsannahme: 20 Runecloth = 50 Ruf. Startwert 11.965 Honored und 22 Runecloth zuletzt bestätigt; spätere Fortschritte unbekannt. Bei Exalted ist kein weiterer Stoff nötig.</p></div>`}

// Global interactions
const root=document.getElementById('mainContent');
document.getElementById('nav').addEventListener('click',e=>{const n=e.target.closest('[data-nav]');if(!n)return;page=n.dataset.nav;textFilter='';modeFilter='all';statusFilter='open';render();window.scrollTo({top:0,behavior:'instant'})});
root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.open){openEditor(b.dataset.open);return}if(b.dataset.edit){openEditor(b.dataset.edit);return}if(b.dataset.pin){pin(b.dataset.pin);return}if(b.dataset.realstep){data.reals=clampInt(data.reals+Number(b.dataset.realstep),0,9999,data.reals);data.economy.realsConfirmed=true;save();render();return}if(b.dataset.newsTask){newsTask(b.dataset.newsTask);return}if(b.dataset.newsDelete){if(confirm('Diese Watcher-Meldung löschen?')){data.updates=data.updates.filter(n=>n.id!==b.dataset.newsDelete);save();render()}return}if(b.id==='patchBtn'){importPatch();return}if(b.id==='samplePatchBtn'){const p={type:'wow-forever-patch',version:1,updates:[],tasks:[]};document.getElementById('patchArea').value=JSON.stringify(p,null,2);return}if(b.id==='copySummary'){copyText(summary());return}if(b.id==='copyPatchPrompt'){copyText('Bitte gib mir den WoW-Forever-Fund als JSON-Patch im Format {"type":"wow-forever-patch","version":1,"updates":[{"id":"watch-eindeutig","title":"...","summary":"...","source":"https://...","kind":"official|datamined|podcast|speculation","date":"YYYY-MM-DD"}],"tasks":[{"id":"watch-task-eindeutig","title":"...","category":"future","priority":3,"status":"todo","mode":"research","notes":"..."}]} aus. Keine bereits vorhandenen Aufgaben löschen oder als erledigt markieren.');return}});
root.addEventListener('change',e=>{const x=e.target;if(x.dataset.check){setStatus(x.dataset.check,x.checked?'done':'todo');return}if(x.dataset.status){setStatus(x.dataset.status,x.value);return}if(x.id==='modeFilter'){modeFilter=x.value;render();return}if(x.id==='statusFilter'){statusFilter=x.value;render();return}if(x.id==='realInput'){data.reals=clampInt(x.value,0,9999,data.reals);data.economy.realsConfirmed=true;save();render();return}if(x.id==='goldInput'){data.gold=x.value===''?null:clampInt(x.value,0,99999999,0);data.economy.goldConfirmed=x.value!=='';save();render();toast('Goldstand gespeichert.');return}});
root.addEventListener('input',e=>{if(e.target.id==='search'){textFilter=e.target.value;const list=filtered();const host=document.getElementById('taskList');if(host)host.innerHTML=list.length?list.map(taskCard).join(''):'<div class="empty">Keine passenden Einträge.</div>';const counter=document.querySelector('.sectionhead small');if(counter)counter.textContent=list.length+' Aufgaben angezeigt'}});
document.getElementById('addBtn').addEventListener('click',()=>openEditor());document.getElementById('backupBtn').addEventListener('click',exportBackup);document.getElementById('restoreBtn').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',e=>{importBackup(e.target.files[0]);e.target.value=''})
document.getElementById('cancelEdit').addEventListener('click',()=>dialog.close());document.getElementById('editForm').addEventListener('submit',e=>{e.preventDefault();const id=document.getElementById('editId').value;const payload={id:id||uid(),title:document.getElementById('fTitle').value,category:document.getElementById('fCategory').value,status:document.getElementById('fStatus').value,priority:Number(document.getElementById('fPriority').value),mode:document.getElementById('fMode').value,phase:document.getElementById('fPhase').value,location:document.getElementById('fLocation').value,notes:document.getElementById('fNotes').value,source:document.getElementById('fSource').value,order:data.tasks.length};const t=validTask(payload,data.tasks.length);if(id){const original=getTask(id);if(original)Object.assign(original,t,{order:original.order})}else data.tasks.push(t);if(t.status==='done')data.focus=data.focus.filter(x=>x!==t.id);save();dialog.close();render();toast('Aufgabe gespeichert.')});document.getElementById('deleteBtn').addEventListener('click',()=>{const id=document.getElementById('editId').value;const t=getTask(id);if(!t||!confirm('Aufgabe wirklich löschen: '+t.title+'?'))return;data.tasks=data.tasks.filter(x=>x.id!==id);data.focus=data.focus.filter(x=>x!==id);save();dialog.close();render();toast('Aufgabe gelöscht.')});
root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.jump){page=b.dataset.jump;render();window.scrollTo(0,0)}if(b.id==='resetDaily'&&confirm('Nur heutige Häkchen und Mats zurücksetzen?')){data.daily.checks={};data.daily.mats={};save();render()}if(b.dataset.copy)copyText(b.dataset.copy);if(b.id==='copyMats'){const q=data.daily.craft?[1,1,2,4,1]:[1,1,4,8,2];copyText(['Frost Oil','Thorium Widget','Bolt of Runecloth','Rugged Leather','Rune Thread'].map((n,i)=>q[i]*Number(data.daily.runs)+'× '+n).join('\n'))}if(b.id==='addRun'){const g=document.getElementById('logGold'),m=document.getElementById('logMinutes');if(g.value===''||m.value===''||Number(g.value)<0||Number(m.value)<1){toast('Gold und Dauer korrekt eintragen.');return}data.runLog.unshift({date:localDay(),name:document.getElementById('logName').value,gold:clampInt(g.value,0,999999,0),minutes:clampInt(m.value,1,1440,1)});save();render()}if(b.dataset.delrun!==undefined&&confirm('Run aus Log entfernen?')){data.runLog.splice(Number(b.dataset.delrun),1);save();render()}});
root.addEventListener('change',e=>{const x=e.target;if(x.dataset.daily!==undefined){data.daily.checks[x.dataset.daily]=x.checked;save();render()}if(x.dataset.mat!==undefined){data.daily.mats[x.dataset.mat]=x.checked;save();render()}if(x.id==='matRuns'||x.id==='matCraft'){data.daily.runs=document.getElementById('matRuns').value;data.daily.craft=document.getElementById('matCraft').checked;data.daily.mats={};save();render()}if(x.dataset.econ){const k=x.dataset.econ;data.economy[k]=k==='price'?Math.max(0,Math.min(9999,Number(x.value)||0)):clampInt(x.value,0,999999,0);save();render()}if(x.dataset.field==='realsCap'){data.realsCap=clampInt(x.value,1,9999,165);data.realsTarget=data.realsCap;save();render()}if(x.id==='repTier'||x.id==='repValue'){const t=document.getElementById('repTier').value,v=x.id==='repTier'?0:(Number(document.getElementById('repValue').value)||0);data.economy.rep=t==='e'?33000:t==='r'?12000+clampInt(v,0,21000,0):clampInt(v,0,12000,0);data.economy.repConfirmed=true;save();render()}});
initForm();render();
