'use strict';
/* Wiederverwendbare UI-Bausteine. */

function bar(p, green = false) {
  return `<div class="bar ${green ? 'green' : ''}"><span style="width:${Math.max(0, Math.min(100, p))}%"></span></div>`;
}

function chip(text, className = '') {
  return `<span class="pill ${className}">${esc(text)}</span>`;
}

function taskCard(t, compact = false) {
  const done = t.status === 'done';
  const pinned = data.focus.includes(t.id);
  return `<article class="task ${done ? 'done' : ''}"><input type="checkbox" class="ck" data-check="${esc(t.id)}" aria-label="${esc(t.title)} erledigt" ${done ? 'checked' : ''}/><div><h4 class="tasktitle">${esc(t.title)}</h4><div class="meta">${chip(CAT[t.category]?.[0] || 'Weitere Ziele')}${chip(PRI[t.priority], 'p' + t.priority)}${chip(MODES[t.mode])}${t.status !== 'todo' ? chip(STATUSES[t.status], t.status === 'check' ? 'verify' : t.status) : ''}${t.phase !== 'now' ? chip(PHASE[t.phase]) : ''}</div>${t.location ? `<div class="taskdesc">⌖ ${esc(t.location)}</div>` : ''}${!compact && t.notes ? `<p class="taskdesc">${esc(t.notes)}</p>` : ''}${t.source ? `<div style="margin-top:7px;font-size:11px"><a href="${esc(t.source)}" target="_blank" rel="noopener noreferrer">Quelle öffnen ↗</a></div>` : ''}</div><div class="task-actions"><select class="statussel" data-status="${esc(t.id)}" aria-label="Status ${esc(t.title)}">${Object.entries(
    STATUSES,
  )
    .map(([key, v]) => `<option value="${key}" ${key === t.status ? 'selected' : ''}>${v}</option>`)
    .join(
      '',
    )}</select>${!done && t.phase === 'now' ? `<button type="button" class="btn sm ${pinned ? 'pin' : 'quiet'}" data-pin="${esc(t.id)}" title="${pinned ? 'Aus Fokus entfernen' : 'In Fokus aufnehmen'}">${pinned ? '★ Fokus' : '☆ Fokus'}</button>` : ''}<button type="button" class="btn quiet sm" data-edit="${esc(t.id)}" title="Aufgabe bearbeiten">✎</button></div></article>`;
}

function renderSpot(t, i) {
  return `<div class="spot"><div class="num">0${i + 1}</div><h4>${esc(t.title)}</h4><p>${esc(t.location || t.notes || CAT[t.category][0])}</p><div class="buttons">${chip(PRI[t.priority], 'p' + t.priority)}<button class="btn sm" data-open="${esc(t.id)}">Details ↗</button></div></div>`;
}
