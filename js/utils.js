'use strict';
/* Allgemeine Helfer ohne App-Wissen (Escaping, Clamp, Toast, Download, Clipboard). */

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}

function localDay() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function esc(v) {
  return String(v ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
}

function safeUrl(url) {
  return /^https:\/\//i.test(String(url || '')) ? String(url) : '';
}

function clampInt(v, min, max, fallback) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(min, Math.min(max, Math.floor(n))) : fallback;
}

function uid() {
  return 'user-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function toast(s) {
  const el = document.getElementById('toast');
  el.textContent = s;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 3900);
}

function download(filename, obj) {
  const content = JSON.stringify(obj, null, 2);
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

async function copyText(s) {
  try {
    await navigator.clipboard.writeText(s);
    toast('In die Zwischenablage kopiert.');
  } catch (_) {
    const area = document.createElement('textarea');
    area.value = s;
    area.style.cssText = 'position:fixed;top:-2000px';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    toast(ok ? 'Kopiert.' : 'Kopieren wurde im Browser blockiert.');
  }
}
