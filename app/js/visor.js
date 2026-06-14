// visor.js — abre um respiro em tela cheia (a partir de Guardados).
// Ações: presentear, remover (re-renderiza via callback) e fechar (✕ / Esc).
// Acessível: move o foco para dentro, prende o foco (trap), torna o fundo
// inerte e devolve o foco à origem ao fechar.

import * as cofre from './storage.js';
import { esc, fraseHTML } from './dados.js';

let overlay = null;
let origem = null;   // elemento que tinha o foco antes de abrir
let inertes = [];    // conteúdo do app marcado inerte enquanto o visor existe

export function abrirVisor(r, opcoes = {}) {
  fechar();
  origem = document.activeElement;

  overlay = document.createElement('div');
  overlay.className = 'visor';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'respiro em tela cheia');
  overlay.innerHTML =
    `<button type="button" class="visor__fechar" aria-label="fechar">✕</button>` +
    `<picture class="respiro__foto"><img src="${esc(r.imagem)}" alt="${esc(r.alt || '')}" decoding="async"></picture>` +
    `<div class="respiro__veu"></div>` +
    `<p class="respiro__frase">${fraseHTML(r.frase)}</p>` +
    `<div class="respiro__rodape">` +
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

  // Torna o resto do app inerte (sem foco/leitor) enquanto o visor está aberto.
  const app = document.querySelector('.app') || document.body;
  inertes = [app.querySelector('.telas'), app.querySelector('.tabbar')].filter(Boolean);
  inertes.forEach((el) => { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); });

  app.appendChild(overlay);            // irmão de .telas/.tabbar → não herda o inert
  overlay.querySelector('.visor__fechar').focus();
}

function fechar() {
  if (!overlay) return;
  overlay.remove();
  overlay = null;
  document.removeEventListener('keydown', onKey);
  inertes.forEach((el) => { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); });
  inertes = [];
  if (origem && typeof origem.focus === 'function') origem.focus();
  origem = null;
}

function onKey(e) {
  if (!overlay) return;
  if (e.key === 'Escape') { fechar(); return; }
  if (e.key === 'Tab') {
    const focaveis = overlay.querySelectorAll('button');
    if (!focaveis.length) return;
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  }
}

function botao(rotulo, onClick) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'respiro__acao';
  b.textContent = rotulo;
  b.addEventListener('click', onClick);
  return b;
}
