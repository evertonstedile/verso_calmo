// dados.js — carrega e cacheia os dados estáticos (respiros, coleções) e
// utilitários compartilhados. Uma fetch por arquivo; respiro/guardados/loja/
// presentear/visor compartilham daqui (sem buscar o mesmo JSON várias vezes).

let respirosP = null;
let colecoesP = null;

export function carregarRespiros() {
  if (!respirosP) {
    respirosP = fetch('data/respiros.json', { cache: 'no-cache' })
      .then((r) => r.json())
      .then((d) => (Array.isArray(d.respiros) ? d.respiros : []))
      .catch(() => { respirosP = null; return []; }); // falhou (offline no boot): não fixa o vazio, tenta de novo
  }
  return respirosP;
}

export function carregarColecoes() {
  if (!colecoesP) {
    colecoesP = fetch('data/colecoes.json', { cache: 'no-cache' })
      .then((r) => r.json())
      .then((d) => (Array.isArray(d.colecoes) ? d.colecoes : []))
      .catch(() => { colecoesP = null; return []; });
  }
  return colecoesP;
}

export function porId(respiros, id) {
  return respiros.find((r) => r.id === id) || null;
}

// Escapa texto para inserção segura via innerHTML (centralizado aqui).
export function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
