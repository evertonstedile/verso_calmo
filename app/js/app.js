// app.js — coração do app: roteamento por hash entre as 4 telas,
// estado da navegação inferior, modo de luz (Respiro/Profundidade) e registro do PWA.

import respiro from './respiro.js';
import guardados from './guardados.js';
import loja from './loja.js';
import presentear from './presentear.js';

const TELAS = { respiro, guardados, loja, presentear };
const PADRAO = 'respiro';

function rotaAtual() {
  const id = location.hash.replace(/^#\/?/, '').split('/')[0];
  return TELAS[id] ? id : PADRAO;
}

function navegar() {
  const id = rotaAtual();
  const ctrl = TELAS[id];
  const app = document.querySelector('.app');

  // mostra só a tela ativa
  document.querySelectorAll('.tela').forEach((sec) => {
    sec.classList.toggle('is-ativa', sec.dataset.tela === id);
  });

  // estado da navegação inferior
  document.querySelectorAll('.tabbar__item').forEach((item) => {
    const ativo = item.dataset.tela === id;
    item.classList.toggle('is-ativa', ativo);
    if (ativo) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });

  // modo de luz da tela (dual-mode herdado do site)
  app.dataset.modo = ctrl.modo || 'respiro';

  // hook de entrada da tela
  const sec = document.querySelector(`.tela[data-tela="${id}"]`);
  if (sec) { sec.scrollTop = 0; ctrl.aoEntrar?.(sec); }
}

function montarTelas() {
  Object.entries(TELAS).forEach(([id, ctrl]) => {
    const sec = document.querySelector(`.tela[data-tela="${id}"]`);
    if (sec) ctrl.montar?.(sec);
  });
}

// Módulos são deferidos: quando este código roda, o DOM já está parseado.
montarTelas();
navegar();
window.addEventListener('hashchange', navegar);

// PWA — registra o Service Worker (o app funciona normalmente se falhar).
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
