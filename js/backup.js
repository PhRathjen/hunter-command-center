'use strict';
/* Backup-Export/-Import, JSON-Patch und Zusammenfassung. */

function exportBackup() {
  download('wow-forever-hunter-backup-' + new Date().toISOString().slice(0, 10) + '.json', {
    app: APP,
    format: 3,
    exportedAt: new Date().toISOString(),
    ...data,
  });
  toast('Backup gespeichert. Datei sicher aufbewahren.');
}

function importBackup(file) {
  if (!file) return;
  if (file.size > 5000000) {
    toast('Datei ist zu groß.');
    return;
  }
  file
    .text()
    .then((s) => {
      try {
        const o = JSON.parse(s);
        if (o.app !== APP || ![2, 3].includes(o.format))
          throw Error('Nur Command-Center-Backups v2/v3 werden unterstützt.');
        let newer;
        if (o.format === 3) {
          newer = validateState(o);
          if (
            !confirm(
              'V3-Backup importieren? Aktueller Stand wird ersetzt. Vorher Backup exportieren.',
            )
          )
            return;
        } else {
          if (
            !confirm(
              'V2-Backup migrieren? Aktuelle V3-Aufgaben bleiben erhalten; neue alte Aufgaben und News werden ergänzt. Ressourcen werden NICHT überschrieben.',
            )
          )
            return;
          newer = clone(data);
          for (const t of validated(o.tasks)) {
            if (!newer.tasks.some((x) => x.id === t.id)) newer.tasks.push(t);
          }
          for (const n of (Array.isArray(o.updates) ? o.updates : []).map(validNews)) {
            if (!newer.updates.some((x) => x.id === n.id)) newer.updates.push(n);
          }
        }
        data = newer;
        save();
        render();
        toast('Backup erfolgreich importiert.');
      } catch (e) {
        toast('Import fehlgeschlagen: ' + e.message);
      }
    })
    .catch(() => toast('Datei konnte nicht eingelesen werden.'));
}

function importPatch() {
  const input = document.getElementById('patchArea')?.value.trim();
  if (!input) {
    toast('Bitte zuerst JSON einfügen.');
    return;
  }
  try {
    const obj = JSON.parse(input);
    if (
      obj.type !== 'wow-forever-patch' ||
      obj.version !== 1 ||
      !Array.isArray(obj.updates) ||
      !Array.isArray(obj.tasks)
    )
      throw Error('Falsches Patch-Format.');
    if (obj.updates.length > 100 || obj.tasks.length > 100) throw Error('Zu viele Einträge.');
    let u = 0,
      t = 0;
    for (const x of obj.updates) {
      const n = validNews(x);
      if (!data.updates.some((item) => item.id === n.id)) {
        data.updates.push(n);
        u++;
      }
    }
    for (const x of obj.tasks) {
      const item = validTask(
        { ...x, id: x.id || uid(), phase: x.phase || 'now' },
        data.tasks.length,
      );
      if (!getTask(item.id)) {
        data.tasks.push(item);
        t++;
      }
    }
    save();
    render();
    toast(`${u} Meldungen und ${t} neue Aufgaben importiert. Vorhandene Aufgaben unangetastet.`);
  } catch (e) {
    toast('Patch ungültig: ' + e.message);
  }
}

function summary() {
  let s = `WoW Forever Hunter Tracker V3 – Stand ${localDay()}\nGear-Ziel: 8 % Hit, Dawn Armor, T0 3er, Baron Cape.\nGold: ${data.gold ?? 'unbekannt'}${data.economy.goldConfirmed ? '' : ' (alter Stand)'}; Reals: ${data.reals}/${data.realsCap}${data.economy.realsConfirmed ? '' : ' (alter Stand)'}; Darkspear Fortschritt ab Honored: ${data.economy.rep}/33000; Runecloth: ${data.economy.cloth} ${data.economy.repConfirmed ? '' : '(alter Stand)'}.\nFokus: ${focusTasks()
    .map((t) => t.title)
    .join(
      ' | ',
    )}\nHeute: ${DAILY.map(([id, n]) => (data.daily.checks[id] ? '[x] ' : '[ ] ') + n).join(' | ')}\n\n`;
  for (const [cat, label] of Object.entries(CAT)) {
    const tasks = sortTasks(data.tasks.filter((t) => t.category === cat));
    if (!tasks.length) continue;
    s += `[${label[0]}]\n`;
    for (const t of tasks)
      s += `- [${t.status === 'done' ? 'x' : ' '}] ${t.title} | ${STATUSES[t.status]} | ${PRI[t.priority]}${t.notes ? ' | ' + t.notes : ''}\n`;
    s += '\n';
  }
  return s + 'Bitte nur bestätigte Updates übernehmen.';
}
