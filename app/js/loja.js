// loja.js — Tela 3 (Loja). Silent selling: a carta editorial antes do produto.

export default {
  modo: 'respiro',

  montar(sec) {
    // [Fase 4] renderizar as cartas de /app/data/colecoes.json.
    //          O gesto "levar comigo" vai DIRETO ao checkout Kiwify (checkout_url)
    //          quando a URL real existir. Hoje a Kiwify ainda está pendente
    //          (o site usa CHECKOUT_URL = '#checkout-pendente') — manter fonte única,
    //          então por ora o gesto leva à página de venda /respiro-de-garopaba/.
    // [v2]     assinatura "Respiro+": acervo completo + packs mensais (Kiwify recorrência).
  }
};
