'use strict';
/* Event-Handler: Daily, Ressourcen, Sprünge. */

root.addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.jump) {
    page = b.dataset.jump;
    render();
    window.scrollTo(0, 0);
  }
  if (b.id === 'resetDaily' && confirm('Nur heutige Häkchen und Mats zurücksetzen?')) {
    data.daily.checks = {};
    data.daily.mats = {};
    save();
    render();
  }
  if (b.dataset.copy) copyText(b.dataset.copy);
  if (b.id === 'copyMats') {
    const q = data.daily.craft ? [1, 1, 2, 4, 1] : [1, 1, 4, 8, 2];
    copyText(
      ['Frost Oil', 'Thorium Widget', 'Bolt of Runecloth', 'Rugged Leather', 'Rune Thread']
        .map((n, i) => q[i] * Number(data.daily.runs) + '× ' + n)
        .join('\n'),
    );
  }
  if (b.id === 'addRun') {
    const g = document.getElementById('logGold'),
      m = document.getElementById('logMinutes');
    if (g.value === '' || m.value === '' || Number(g.value) < 0 || Number(m.value) < 1) {
      toast('Gold und Dauer korrekt eintragen.');
      return;
    }
    data.runLog.unshift({
      date: localDay(),
      name: document.getElementById('logName').value,
      gold: clampInt(g.value, 0, 999999, 0),
      minutes: clampInt(m.value, 1, 1440, 1),
    });
    save();
    render();
  }
  if (b.dataset.delrun !== undefined && confirm('Run aus Log entfernen?')) {
    data.runLog.splice(Number(b.dataset.delrun), 1);
    save();
    render();
  }
});

root.addEventListener('change', (e) => {
  const x = e.target;
  if (x.dataset.daily !== undefined) {
    data.daily.checks[x.dataset.daily] = x.checked;
    save();
    render();
  }
  if (x.dataset.mat !== undefined) {
    data.daily.mats[x.dataset.mat] = x.checked;
    save();
    render();
  }
  if (x.id === 'matRuns' || x.id === 'matCraft') {
    data.daily.runs = document.getElementById('matRuns').value;
    data.daily.craft = document.getElementById('matCraft').checked;
    data.daily.mats = {};
    save();
    render();
  }
  if (x.dataset.econ) {
    const k = x.dataset.econ;
    data.economy[k] =
      k === 'price'
        ? Math.max(0, Math.min(9999, Number(x.value) || 0))
        : clampInt(x.value, 0, 999999, 0);
    save();
    render();
  }
  if (x.dataset.field === 'realsCap') {
    data.realsCap = clampInt(x.value, 1, 9999, 165);
    data.realsTarget = data.realsCap;
    save();
    render();
  }
  if (x.id === 'repTier' || x.id === 'repValue') {
    const t = document.getElementById('repTier').value,
      v = x.id === 'repTier' ? 0 : Number(document.getElementById('repValue').value) || 0;
    data.economy.rep =
      t === 'e' ? 33000 : t === 'r' ? 12000 + clampInt(v, 0, 21000, 0) : clampInt(v, 0, 12000, 0);
    data.economy.repConfirmed = true;
    save();
    render();
  }
});
