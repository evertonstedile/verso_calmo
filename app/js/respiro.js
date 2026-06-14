// respiro.js — Tela 1 (Respiro do dia). Abre em Modo Profundidade.
//
// Lê /app/data/respiros.json, mostra o respiro do dia (determinístico por data:
// mesma data → mesmo respiro para todos) e permite deslizar para o acervo
// cronológico reverso (ontem, anteontem…). Botões discretos: guardar e presentear.

import * as cofre from './storage.js';
import { carregarRespiros } from './dados.js';

let respiros = null;   // cache do JSON (null = ainda não carregado)
let trilho = null;     // elemento do carrossel

export default {
  modo: 'profundidade',

  async montar(sec) {
    trilho = sec.querySelector('#respiro-trilho');
    if (!trilho) return;
    respiros = await carregarRespiros(); // [] se offline e sem cache → fica no <noscript>
    render();
  },

  aoEntrar() {
    // Reabrir a home recalcula o respiro do dia (virada de data) e re-sincroniza
    // o estado dos botões "guardar" (podem ter mudado na tela Guardados).
    if (respiros) render();
  }
};

function render() {
  if (!trilho || !respiros || !respiros.length) return;

  const hoje = hojeISO();
  const ordenados = [...respiros].sort((a, b) => (a.data < b.data ? 1 : a.data > b.data ? -1 : 0)); // data desc
  let inicio = ordenados.findIndex((r) => r.data <= hoje);
  if (inicio === -1) inicio = 0; // todos no futuro → começa do mais recente
  const visiveis = ordenados.slice(inicio); // do dia para trás (cronológico reverso)

  trilho.innerHTML = '';
  visiveis.forEach((r, i) => trilho.appendChild(slide(r, i)));
  trilho.scrollLeft = 0;
}

function slide(r, i) {
  const art = document.createElement('article');
  art.className = 'respiro__slide';
  art.dataset.id = r.id;

  // Apenas <img> por robustez: nem todo respiro tem avif/webp, e um <source>
  // que dá 404 pode quebrar a imagem em alguns navegadores (Safari/iOS).
  // [Fase 7] reintroduzir avif/webp via <picture> quando o banco garantir os 3 formatos.
  const pic = document.createElement('picture');
  pic.className = 'respiro__foto';
  pic.innerHTML =
    `<img src="${esc(r.imagem)}" alt="${esc(r.alt || '')}" ` +
    `${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

  const grad = document.createElement('div');
  grad.className = 'respiro__gradiente';

  const cont = document.createElement('div');
  cont.className = `respiro__conteudo respiro__conteudo--${r.posicao_frase || 'inferior'}`;
  cont.innerHTML =
    `<p class="respiro__label">${esc(rotuloDia(i, r.data))}</p>` +
    `<p class="respiro__frase">${esc(r.frase)}</p>` +
    `<p class="respiro__assinatura">garopaba · marina gomes</p>`;

  cont.appendChild(acoes(r));
  art.append(pic, grad, cont);
  return art;
}

function acoes(r) {
  const wrap = document.createElement('div');
  wrap.className = 'respiro__acoes';

  const guardar = document.createElement('button');
  guardar.type = 'button';
  guardar.className = 'respiro__acao';
  guardar.dataset.acao = 'guardar';
  pintarGuardar(guardar, cofre.estaGuardado(r.id));
  guardar.addEventListener('click', () => {
    cofre.alternar(r.id);
    pintarGuardar(guardar, cofre.estaGuardado(r.id));
  });

  const presentear = document.createElement('button');
  presentear.type = 'button';
  presentear.className = 'respiro__acao';
  presentear.dataset.acao = 'presentear';
  presentear.textContent = 'presentear';
  presentear.addEventListener('click', () => {
    // Pré-seleciona este respiro para a Tela 4.
    // [Fase 5] presentear.js lê 'vc:presentear' e gera o link versocalmo.com.br/r/<id>.
    try { sessionStorage.setItem('vc:presentear', r.id); } catch (_) {}
    location.hash = '#/presentear';
  });

  wrap.append(guardar, presentear);
  return wrap;
}

function pintarGuardar(btn, guardado) {
  btn.textContent = guardado ? 'guardado' : 'guardar este respiro';
  btn.dataset.guardado = guardado ? 'true' : 'false';
  btn.setAttribute('aria-pressed', guardado ? 'true' : 'false');
}

function rotuloDia(i, data) {
  if (i === 0) return 'respiro do dia';
  if (i === 1) return 'ontem';
  if (i === 2) return 'anteontem';
  return formatarData(data);
}

function formatarData(iso) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const [a, m, d] = String(iso).split('-').map(Number);
  return (a && m && d) ? `${d} de ${meses[m - 1]}` : '';
}

function hojeISO() {
  const d = new Date();
  const z = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
