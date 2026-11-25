# Hunter Command Center

Persönliche Companion-Web-App für **WoW Forever**: Aufgaben, Gear, Gold, Reals, News und Fokus-Ziele an einem Ort.

Live: https://phrathjen.github.io/hunter-command-center/ (nicht verlinkt, per `noindex` und `robots.txt` von Suchmaschinen ausgeschlossen)

## Struktur

```
index.html        Markup und Einstiegspunkt (Script-Reihenfolge steht hier)
css/styles.css    Dark-Mode-Design
data/             Content-Layer (JSON): tasks.json, news.json, daily.json
js/content.js     Lädt data/*.json beim Start
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

## Content-Layer

Drei Schichten, strikt getrennt:

- **Application:** `index.html`, `css/`, `js/`.
- **Content:** `data/*.json`, öffentlich, vom Watcher aktualisierbar. Wird bei jedem Start per `fetch` geladen.
- **Personal Data:** localStorage im Browser. Content-Updates überschreiben sie nie.

Formate:

- `news.json`: Array von `{id, date, kind, title, summary, source}`. `kind` ist `official`, `datamined`, `podcast` oder `speculation`. `id` muss eindeutig sein, `source` eine `https://`-URL oder leer.
- `daily.json`: Array von `[id, Titel, Hinweis]`.
- `tasks.json`: Start-Aufgaben, werden nur für neue oder zurückgesetzte Stände verwendet. Bereits gespeicherte Aufgaben bleiben unverändert.

News aus `news.json` erscheinen automatisch auch bei bestehenden Nutzern. Sie lassen sich nicht in der App löschen, sondern nur im Repo.

## Lokal starten

Die Seite lädt JSON per `fetch` und braucht deshalb einen Webserver, z. B. `npx serve .`. Per `file://` werden keine Inhalte geladen.

Fällt eine `data/*.json` aus oder ist ungültig, nutzt die App die zuletzt geladene Version aus einem eigenen Cache (`wow_forever_content_cache_v1`) und zeigt einen Hinweis. Fehlen Start-Aufgaben und es gibt weder Cache noch gespeicherten Stand, startet sie bewusst nicht.

## Veröffentlichen (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## Roadmap

Watcher-Anbindung (automatische Commits in `data/`), Vorschlagsliste für neue Aufgaben, Charakterverwaltung, Raid Planner, optional Supabase-Sync.
