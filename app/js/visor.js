// visor.js — abre um respiro em tela cheia (a partir de Guardados).
// Ações: presentear, remover (re-renderiza via callback) e fechar (✕ / Esc).

import * as cofre from './storage.js';

let overlay = null;

export function abrirVisor(r, opcoes = {}) {
  fechar();

  overlay = document.createElement('div');
  overlay.className = 'visor';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'respiro em tela cheia');
  overlay.innerHTML =
    `<button type="button" class="visor__fechar" aria-label="fechar">✕</button>` +
    `<picture class="respiro__foto"><img src="${esc(r.imagem)}" alt="${esc(r.alt || '')}" decoding="async"></picture>` +
    `<div class="respiro__gradiente"></div>` +
    `<div class="respiro__conteudo respiro__conteudo--${r.posicao_frase || 'inferior'}">` +
      `<p class="respiro__frase">${esc(r.frase)}</p>` +
      `<p class="respiro__assinatura">garopaba · marina gomes</p>` +
      `<div class="respiro__acoes"></div>` +
    `</div>`;

  const acoes = overlay.querySelector('.respiro__acoes');
  acoes.append(
    botao('presentear', () => {
      try { sessionStorage.setItem('vc:presentear', r.id); } catch (_) {}
      fechar();
      location.hash = '#/presentear';
    }),
    botao('remover', () => {
      cofre.remover(r.id);
      fechar();
      if (typeof opcoes.aoRemover === 'function') opcoes.aoRemover();
    })
  );

  overlay.querySelector('.visor__fechar').addEventListener('click', fechar);
  document.addEventListener('keydown', onKey);

  const app = document.querySelector('.app') || document.body;
  app.appendChild(overlay);
}

function fechar() {
  if (!overlay) return;
  overlay.remove();
  overlay = null;
  document.removeEventListener('keydown', onKey);
}

function onKey(e) {
  if (e.key === 'Escape') fechar();
}

function botao(rotulo, onClick) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'respiro__acao';
  b.textContent = rotulo;
  b.addEventListener('click', onClick);
  return b;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
