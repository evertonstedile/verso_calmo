// dados.js — carrega e cacheia os dados estáticos (respiros, coleções).
// Uma fetch por arquivo; respiro.js, guardados.js, loja.js e presentear.js
// compartilham daqui (sem buscar o mesmo JSON várias vezes).

let respirosP = null;
let colecoesP = null;

export function carregarRespiros() {
  if (!respirosP) {
    respirosP = fetch('data/respiros.json', { cache: 'no-cache' })
      .then((r) => r.json())
      .then((d) => (Array.isArray(d.respiros) ? d.respiros : []))
      .catch(() => []);
  }
  return respirosP;
}

export function carregarColecoes() {
  if (!colecoesP) {
    colecoesP = fetch('data/colecoes.json', { cache: 'no-cache' })
      .then((r) => r.json())
      .then((d) => (Array.isArray(d.colecoes) ? d.colecoes : []))
      .catch(() => []);
  }
  return colecoesP;
}

export function porId(respiros, id) {
  return respiros.find((r) => r.id === id) || null;
}
