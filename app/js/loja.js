// loja.js — Tela 3 (Loja). Silent selling: cada coleção é uma carta editorial.
// Lê /app/data/colecoes.json. O gesto "levar comigo" vai DIRETO ao checkout
// Kiwify (checkout_url) quando a URL real existir; enquanto a Kiwify estiver
// pendente (checkout_url começando com "#"), leva à página de venda do site.

import { carregarColecoes, esc } from './dados.js';

let secEl = null;

async function render() {
  if (!secEl) return;
  const cont = secEl.querySelector('[data-cartas]');
  if (!cont) return;
  const colecoes = await carregarColecoes();
  cont.innerHTML = '';
  colecoes.forEach((c) => cont.appendChild(carta(c)));
}

function carta(c) {
  const art = document.createElement('article');
  art.className = 'carta';
  art.dataset.id = c.id;

  const destino = (c.checkout_url && !c.checkout_url.startsWith('#'))
    ? c.checkout_url          // checkout Kiwify real
    : (c.pagina || '#');      // fallback: página de venda do site (Kiwify pendente)
  const preco = [c.preco, c.qtd_wallpapers ? `${c.qtd_wallpapers} wallpapers` : '']
    .filter(Boolean).join(' · ');

  art.innerHTML =
    `<div class="carta__capa">` +
      `<img src="${esc(c.capa)}" alt="${esc(c.capa_alt || c.titulo)}" loading="lazy" decoding="async">` +
    `</div>` +
    `<div class="carta__corpo">` +
      `<h2 class="carta__titulo">${esc(c.titulo)}</h2>` +
      `<p class="carta__texto">${esc(c.carta)}</p>` +
      (preco ? `<p class="carta__preco">${esc(preco)}</p>` : '') +
      `<a class="gesto" href="${esc(destino)}">` +
        `levar comigo <span class="gesto__seta" aria-hidden="true">→</span>` +
      `</a>` +
    `</div>`;
  return art;
}

export default {
  modo: 'respiro',
  montar(sec) { secEl = sec; render(); }
};
