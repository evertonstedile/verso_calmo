// storage.js — camada de persistência dos "guardados".
//
// v1: localStorage (uma lista de IDs basta). Toda a UI fala SÓ com esta interface,
// então a v2 troca o miolo por backend + login sem tocar em nenhuma tela.
// [v2] substituir lerLista/salvarLista por chamadas ao backend autenticado.

const CHAVE = 'vc:guardados';

function lerLista() {
  try {
    const bruto = localStorage.getItem(CHAVE);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch (_) {
    return []; // storage indisponível (modo privado, etc.) → degrada em silêncio
  }
}

function salvarLista(lista) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch (_) { /* sem espaço/permissão: guardados é conveniência, não cofre */ }
}

export function listar() {
  return lerLista();
}

export function estaGuardado(id) {
  return lerLista().includes(id);
}

export function guardar(id) {
  const lista = lerLista();
  if (!lista.includes(id)) { lista.push(id); salvarLista(lista); }
  return lista;
}

export function remover(id) {
  const lista = lerLista().filter((x) => x !== id);
  salvarLista(lista);
  return lista;
}

export function alternar(id) {
  return estaGuardado(id) ? remover(id) : guardar(id);
}
