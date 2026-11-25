# Hunter Command Center

Persönliche Companion-Web-App für **WoW Forever**: Aufgaben, Gear, Gold, Reals, News und Fokus-Ziele an einem Ort.

Live: https://phrathjen.github.io/hunter-command-center/ (nicht verlinkt, per `noindex` und `robots.txt` von Suchmaschinen ausgeschlossen)

## Struktur

```
index.html      Markup und Einstiegspunkt
css/styles.css  Dark-Mode-Design
js/app.js       Logik, Seed-Daten, Rendering
robots.txt      Crawler aussperren
```

Reines HTML/CSS/JS, kein Build-Schritt.

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
