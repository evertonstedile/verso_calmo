// presentear.js — Tela 4 (Presentear). O respiro semeado: motor de aquisição orgânica.

export default {
  modo: 'respiro',

  montar(sec) {
    // [Fase 5] receber um respiro (pré-selecionado da Tela 1) e gerar um link único
    //          versocalmo.com.br/r/<id>; compartilhar via Web Share API (WhatsApp).
    //          A página /r/<id> é servida pelo SITE (mesmo repo, rota nova) lendo o
    //          mesmo respiros.json — acessível a quem ainda não tem o app.
  },

  aoEntrar(sec) {
    // [Fase 5] se vier um respiro selecionado, montar o cartão + botão compartilhar.
  }
};
