// presentear.js — Tela 4 (Presentear). O respiro semeado: motor de aquisição.
//
// Mostra o respiro pré-selecionado (vindo da Tela 1 ou do visor de Guardados),
// gera o link único versocalmo.com.br/r/<id> e compartilha via Web Share API
// (WhatsApp etc.). Sem respiro selecionado, mostra o convite para escolher um.
//
// A página /r/<id> é servida pelo SITE (mesmo repo, rota nova) — etapa à parte.

import { carregarRespiros, porId, esc } from './dados.js';

const BASE_LINK = 'https://versocalmo.com.br/r/';
let secEl = null;

async function render() {
  if (!secEl) return;
  const vazio = secEl.querySelector('[data-vazio="presentear"]');
  const palco = secEl.querySelector('[data-presente]');

  let id = null;
  try { id = sessionStorage.getItem('vc:presentear'); } catch (_) {}

  if (!id) return mostrarConvite(vazio, palco);

  const respiros = await carregarRespiros();
  const r = porId(respiros, id);
  if (!r) return mostrarConvite(vazio, palco);

  vazio.hidden = true;
  palco.hidden = false;
  palco.innerHTML = '';
  palco.appendChild(cartao(r));
}

function mostrarConvite(vazio, palco) {
  vazio.hidden = false;
  palco.hidden = true;
  palco.innerHTML = '';
}

function cartao(r) {
  const link = BASE_LINK + encodeURIComponent(r.id);
  const wrap = document.createElement('div');
  wrap.className = 'presente';
  wrap.innerHTML =
    `<div class="presente__previa">` +
      `<img src="${esc(r.imagem)}" alt="${esc(r.alt || '')}" loading="lazy" decoding="async">` +
      `<div class="presente__gradiente"></div>` +
      `<p class="presente__frase">${esc(r.frase)}</p>` +
    `</div>` +
    `<p class="presente__texto">um respiro pra mandar pra quem você quiser. ele abre numa página feita em garopaba — não um print.</p>` +
    `<div class="presente__acoes">` +
      `<button type="button" class="gesto" data-acao="enviar">enviar este respiro <span class="gesto__seta" aria-hidden="true">→</span></button>` +
      `<button type="button" class="presente__trocar" data-acao="trocar">escolher outro</button>` +
    `</div>` +
    `<p class="presente__feedback" data-feedback hidden aria-live="polite"></p>`;

  wrap.querySelector('[data-acao="enviar"]').addEventListener('click', () => compartilhar(r, link, wrap));
  wrap.querySelector('[data-acao="trocar"]').addEventListener('click', () => {
    try { sessionStorage.removeItem('vc:presentear'); } catch (_) {}
    location.hash = '#/respiro';
  });
  return wrap;
}

async function compartilhar(r, link, wrap) {
  const fb = wrap.querySelector('[data-feedback]');
  if (navigator.share) {
    try {
      await navigator.share({ title: 'um respiro de Garopaba', text: r.frase, url: link });
    } catch (_) {
      // o usuário cancelou o compartilhamento nativo → silêncio
    }
    return;
  }
  // sem Web Share: tenta copiar; se falhar (permissão/contexto inseguro), mostra o link cru
  try {
    await navigator.clipboard.writeText(link);
    feedback(fb, 'link copiado — é só colar onde quiser.');
  } catch (_) {
    feedback(fb, link);
  }
}

function feedback(el, msg) { el.textContent = msg; el.hidden = false; }

export default {
  modo: 'respiro',
  montar(sec) { secEl = sec; },
  aoEntrar(sec) { secEl = sec || secEl; render(); }
};
