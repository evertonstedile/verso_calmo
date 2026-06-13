// guardados.js — Tela 2 (Guardados). Coleção pessoal, persistida no aparelho.
import * as cofre from './storage.js';

export default {
  modo: 'respiro',

  aoEntrar(sec) {
    const ids = cofre.listar();
    // [Fase 3] havendo ids, trocar o estado vazio por uma grade editorial
    //          (≥40% de espaço negativo) lendo os respiros de /app/data/respiros.json.
    //          Tocar num card → respiro em tela cheia (presentear / remover).
    // [v2]     com login/assinatura, os guardados sincronizam via backend:
    //          basta trocar o miolo de storage.js, sem mexer nesta tela.
    void ids;
  }
};
