// guardados.js — Tela 2 (Guardados). Coleção pessoal, persistida no aparelho.
// Lê os IDs salvos (storage.js), monta uma grade editorial e abre cada respiro
// em tela cheia (visor.js) para presentear ou remover.

import * as cofre from './storage.js';
import { carregarRespiros, porId } from './dados.js';
import { abrirVisor } from './visor.js';

let secEl = null;

async function render() {
  if (!secEl) return;
  const grade = secEl.querySelector('[data-grade]');
  const vazio = secEl.querySelector('[data-vazio="guardados"]');
  const ids = cofre.listar();

  if (!ids.length) {
    vazio.hidden = false;
    grade.hidden = true;
    grade.innerHTML = '';
    return;
  }

  const respiros = await carregarRespiros();
  const salvos = ids.map((id) => porId(respiros, id)).filter(Boolean).reverse(); // mais recentes primeiro

  if (!salvos.length) { // ids existem mas não batem com o banco atual
    vazio.hidden = false;
    grade.hidden = true;
    grade.innerHTML = '';
    return;
  }

  vazio.hidden = true;
  grade.hidden = false;
  grade.innerHTML = '';
  salvos.forEach((r) => grade.appendChild(card(r)));
}

function card(r) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'guardado-card';
  btn.dataset.id = r.id;
  btn.setAttribute('aria-label', `abrir respiro: ${r.frase}`);
  btn.innerHTML =
    `<span class="guardado-card__foto">` +
      `<img src="${esc(r.imagem)}" alt="${esc(r.alt || '')}" loading="lazy" decoding="async">` +
    `</span>` +
    `<span class="guardado-card__frase">${esc(r.frase)}</span>`;
  btn.addEventListener('click', () => abrirVisor(r, { aoRemover: render }));
  return btn;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export default {
  modo: 'respiro',
  montar(sec) { secEl = sec; },
  aoEntrar(sec) { secEl = sec || secEl; render(); }
};
