// respiro.js — Tela 1 (Respiro do dia). Abre em Modo Profundidade.
//
// Fase 1: a tela já está montada em HTML (foto real de Garopaba + frase aprovada).
// Os ganchos abaixo entram nas próximas fases.

export default {
  modo: 'profundidade',

  montar(sec) {
    // [Fase 2] ler /app/data/respiros.json e renderizar o respiro do dia
    //          determinístico por data (mesma data → mesmo respiro para todos).
    // [Fase 2] swipe horizontal → acervo cronológico reverso (ontem, anteontem).
    // [Fase 2] botões discretos "guardar este respiro" (→ storage.js) e "presentear".
    // [v3]     wallpaper vivo: trocar a imagem conforme a hora do dia em Garopaba.
  },

  aoEntrar(sec) {
    // [Fase 2] recalcular o respiro do dia ao reabrir a tela (virada de data).
  }
};
