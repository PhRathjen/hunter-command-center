# Hunter Command Center

Persönliche Companion-Web-App für **WoW Forever**: Aufgaben, Gear, Gold, Reals, News und Fokus-Ziele an einem Ort.

Live: https://phrathjen.github.io/hunter-command-center/ (nicht verlinkt, per `noindex` und `robots.txt` von Suchmaschinen ausgeschlossen)

## Struktur

```
index.html        Markup und Einstiegspunkt (Script-Reihenfolge steht hier)
css/styles.css    Dark-Mode-Design
js/data/          Seed-Aufgaben und Basis-Content (späterer Content-Layer)
js/config.js      Konstanten, Kategorien, Navigation
js/utils.js       Allgemeine Helfer
js/state.js       State, Validierung, localStorage
js/views/         Eine Datei pro Seite plus Komponenten und Layout
js/editor.js      Aufgaben-Dialog
js/backup.js      Backup, Import, Patch
js/events*.js     Event-Handler
js/main.js        Start
robots.txt        Crawler aussperren
```

Reines HTML/CSS/JS, kein Build-Schritt. Die Scripts sind klassische Script-Tags und teilen sich einen globalen Scope.

## Daten und Datenschutz

- Persönlicher Fortschritt liegt nur im **localStorage des Browsers**, nie im Repository.
- Backup/Import läuft über JSON-Export in der App.
- Das Repository ist öffentlich. Die URL ist nicht geheim, nur unauffällig. Keine sensiblen Daten einchecken.

## Lokal starten

`index.html` im Browser öffnen oder z. B. `npx serve .`

## Veröffentlichen (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## Roadmap

Content-Layer als JSON (`data/`) für automatische News- und Aufgaben-Updates, Charakterverwaltung, Raid Planner, optional Supabase-Sync.
