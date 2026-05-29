# Respiro de Garopaba — Auditoria final

Auditoria técnica, de marca/conversão e operacional do ecossistema completo.
Feita como se o projeto fosse para produção. Documento de leitura única para retomar com segurança.

Data da auditoria: ver histórico git (commit desta rodada).

---

## 1. Resumo executivo

**Estado atual:** a página está **tecnicamente pronta para produção**. A copy, a estrutura, a acessibilidade, o responsivo e os fallbacks estão sólidos. A documentação operacional é consistente e suficiente para retomar após reset.

**O que está pronto:**
- Página `index.html` — HTML semântico, acessível, responsivo, mobile-first, com fallback visual em todas as imagens.
- Documentação completa: ASSETS, ENTREGA, CHECKOUT, LANCAMENTO, PROMPTS-ASSETS, README dos wallpapers.
- Checkout centralizado em uma constante, seguro enquanto pendente.
- Hero já renderiza com imagem real existente (`01-hero-garopaba.jpg`).

**O que ainda falta (impede venda real):**
- Os 5 wallpapers finais (o produto em si).
- O mockup de celular (peça-chave de desejo).
- A configuração do checkout + URL real.
- A OG image (antes de compartilhar o link).

**Pode ser publicada hoje?**
- **Como página técnica / preview interno:** sim, renderiza sem quebrar.
- **Como página comercial (link na bio, venda real):** ❌ **não.** Faltam o produto (wallpapers), o mockup e o checkout testado. Publicar agora seria oferecer algo que não tem imagem real nem botão funcional.

**Veredito:** projeto auditado e aprovado tecnicamente. Bloqueado comercialmente por assets e checkout — exatamente como esperado nesta fase.

---

## 2. Mapa de arquivos

| Arquivo | Função | Quando usar | Não mexer em |
|---|---|---|---|
| `index.html` | A página de venda em si | Editar só para trocar `CHECKOUT_URL`, descomentar OG, ou trocar imagens | Arquitetura, copy aprovada, rota, tom |
| `ASSETS.md` | Lista de assets + checklist de publicação | Ao produzir/conferir imagens e antes de publicar | — |
| `PROMPTS-ASSETS.md` | Direção visual + prompts para gerar os assets | Ao produzir os wallpapers, mockup, origem e OG | Conceitos aprovados dos 5 wallpapers |
| `CHECKOUT.md` | Configuração do produto na Kiwify | Ao montar o checkout | Nome do produto, preço, nome do ZIP |
| `ENTREGA.md` | Texto do e-mail pós-compra | Ao configurar a entrega na plataforma | Tom e estrutura do e-mail |
| `LANCAMENTO.md` | Ordem de execução + stories + ManyChat + bio | Para conduzir o lançamento passo a passo | Ordem estratégica, fluxos A/B |
| `assets/wallpapers/README.md` | Nomes/resoluções exatas dos arquivos | Ao salvar os wallpapers na pasta | Nomes de arquivo |
| `AUDITORIA-FINAL.md` | Este documento | Para retomar contexto e decidir publicação | — |

**Ordem de leitura ao retomar:** este arquivo → `LANCAMENTO.md` → `PROMPTS-ASSETS.md` (produzir imagens) → `CHECKOUT.md` (montar venda) → `ASSETS.md` (checklist final).

---

## 3. Pendências bloqueadoras

Impedem a venda comercial real. Sem isto, não há teste de intenção de compra.

1. **5 wallpapers finais** — `assets/wallpapers/wallpaper-01.jpg` a `05.jpg`. É o produto. Ver `PROMPTS-ASSETS.md`.
2. **Mockup de celular** — `assets/wallpapers/mockup-celular-respiro.jpg`. Sem ele, o desejo fica capado (a pessoa não vê o produto aplicado).
3. **Checkout configurado + testado** — produto na Kiwify, e-mail de entrega, compra de teste completa. Ver `CHECKOUT.md`.
4. **`CHECKOUT_URL` real** — trocar `'#checkout-pendente'` no `<script>` da página. Enquanto pendente, os botões não levam a lugar nenhum (por segurança).
5. **OG image** — `assets/og/respiro-de-garopaba.jpg` + descomentar as tags no `<head>`. Bloqueador **só para compartilhamento** de link (WhatsApp/Instagram). Sem ela, o link aparece sem imagem.

---

## 4. Pendências recomendadas

Melhoram resultado/qualidade, mas não impedem a venda.

1. **Comprimir a imagem do hero.** `01-hero-garopaba.jpg` tem **1,5 MB** — pesado para mobile. Recomendado reexportar para < 400 KB (JPEG qualidade 80–85, ~1600px de largura). Hoje é o maior risco de performance da página.
2. **Foto de origem** — `assets/garopaba/marina-origem-respiro.jpg`. O placeholder de gradiente segura o layout, mas a foto real fortalece a seção origem.
3. **Twitter Card + `rel="canonical"`** — adicionar quando o domínio final existir (melhora preview no X e evita conteúdo duplicado). Hoje não faz falta.
4. **CSS morto de `.preview__rodape`** — após a remoção da legenda duplicada (ver seção 10), as regras CSS de `.preview__rodape` ficaram sem uso. Mantidas de propósito, para reverter fácil caso prefira a legenda sob a galeria. Podem ser removidas com segurança a qualquer momento.

---

## 5. Riscos estratégicos

| Risco | Gravidade | Mitigação |
|---|---|---|
| **Publicar/linkar com checkout pendente** | Alto | Botões não navegam enquanto `CHECKOUT_URL = '#checkout-pendente'` (segurança embutida). Mas o clique fica silencioso — parece quebrado. **Só linkar na bio após checkout testado.** |
| **Publicar sem os wallpapers** | Alto | A galeria mostra gradientes no lugar das fotos. Parece inacabado. Não publicar sem os 5 arquivos. |
| **Usar imagem genérica/turística** | Alto | Ver alertas em `PROMPTS-ASSETS.md` seção 8. Se a foto puder ser de qualquer praia, não serve. |
| **Prometer gratuito por engano** | Médio | A decisão é produto **pago** R$ 17. Stories e ManyChat não devem prometer brinde. Ver `LANCAMENTO.md` seção 9. |
| **Trocar o link da bio cedo demais** | Médio | A bio só muda **depois** do checkout testado. Ordem em `LANCAMENTO.md` seção 2-D. |
| **Confundir ManyChat Fluxo A e B** | Médio | A = pré-lançamento (avisa quando abrir). B = link no ar (manda link). Substituir A por B só quando a página estiver vendendo. Ver `LANCAMENTO.md` seção 6. |
| **OG não testada recorta no WhatsApp** | Baixo | Testar via opengraph.xyz antes de divulgar. |

---

## 6. Checklist final antes da bio

Ordem exata. Não pular etapas.

1. [ ] **Colocar imagens** — 5 wallpapers + mockup (+ origem se houver) nas pastas, com nomes exatos.
2. [ ] **Testar página** — `python3 -m http.server 8080`, abrir `/respiro-de-garopaba/`, confirmar que as fotos substituem os gradientes e nada quebra.
3. [ ] **(Recomendado) comprimir o hero** para < 400 KB.
4. [ ] **Criar OG image** + descomentar tags `og:image`/`og:url` no `<head>`.
5. [ ] **Configurar checkout** na Kiwify (nome, preço, ZIP, e-mail de entrega) — `CHECKOUT.md`.
6. [ ] **Testar compra** real — comprar, receber e-mail, baixar ZIP sem login, abrir imagens no iOS e Android.
7. [ ] **Colar `CHECKOUT_URL`** real na página e confirmar que os dois botões abrem o checkout.
8. [ ] **Configurar ManyChat Fluxo B** com o link da página.
9. [ ] **Atualizar bio** com o CTA (`LANCAMENTO.md` seção 7).
10. [ ] **Postar aquecimento** (stories — `LANCAMENTO.md` seções 3–5).
11. [ ] **Acompanhar métricas** (seção 7 abaixo).

---

## 7. Métricas de validação

| Métrica | O que mede |
|---|---|
| Visitas na página | alcance do tráfego |
| Clique no botão (CTA) | intenção inicial |
| Início de checkout | intenção qualificada |
| Compras | conversão real |
| Taxa visita→compra | saúde de página/oferta |
| Cliques via ManyChat | tração do Instagram |
| Respostas nas enquetes de stories | temperatura da audiência |
| DMs espontâneas | sinal de desejo mais forte que enquete |

**Meta (primeiros 7 dias com tráfego real):** 10 vendas · taxa visita→compra > 1,5%.

**Diagnóstico se não vender:**
- Cliques altos + compras baixas → problema em página, checkout ou preço. Refazer o teste de compra, conferir mobile.
- Cliques baixos + proporção normal → problema de desejo/aquecimento/tráfego. Revisar stories e ManyChat.
- Zero cliques → o link não está chegando. Conferir bio, stickers e ManyChat.

---

## 8. Decisão recomendada

**Publicar agora?** Não. A página está pronta tecnicamente, mas não há produto visível (wallpapers), nem prova de uso (mockup), nem botão funcional (checkout). Publicar/vender hoje queimaria a primeira impressão e não geraria dado confiável de intenção de compra.

**Próximo passo real:** **produzir os 5 wallpapers e o mockup.** É a única coisa que destrava todo o resto. Tudo já está preparado para recebê-los sem retrabalho.

**O que precisa acontecer antes de vender, em ordem:**
1. Imagens (wallpapers + mockup).
2. Checkout configurado e testado de ponta a ponta.
3. Teste de compra real bem-sucedido.
4. Só então: link na bio + aquecimento + métricas.

A ordem aprovada permanece: **imagens → checkout → teste → link na bio.**

---

## 9. Próximo prompt recomendado (pós-reset)

> Estou retomando o Respiro de Garopaba. A página, a documentação e a auditoria final já estão prontas e commitadas. Já produzi (ou estou produzindo) os assets visuais.
>
> 1. Leia `respiro-de-garopaba/AUDITORIA-FINAL.md` e `LANCAMENTO.md` para recuperar contexto.
> 2. Vou colocar os arquivos em `assets/wallpapers/` (wallpaper-01 a 05 + mockup-celular-respiro) e, se houver, `assets/garopaba/marina-origem-respiro.jpg`.
> 3. Confirme que a página carrega as imagens reais (sem gradientes de placeholder), rode uma verificação local e aponte qualquer ajuste de enquadramento/contraste.
> 4. (Recomendado) comprima o hero para < 400 KB.
> 5. Me oriente a configurar o checkout pela `CHECKOUT.md`, e quando eu tiver a URL real, troque o `CHECKOUT_URL` na página.
> 6. Não altere copy, layout, rota ou tom. Não publique nem mexa na bio.

---

## 10. Alterações aplicadas nesta auditoria

Correções seguras e de alto valor aplicadas em `index.html` (nenhuma mudança de estratégia, layout geral, rota ou tom):

1. **Fallback do hero.** A imagem do hero era a única sem fallback. Adicionado `.hero__img-placeholder` (ativo, atrás da foto) + `onerror` na `<img>`. Se a foto falhar (deploy novo, troca de arquivo), o gradiente assume — e o pior caso de contraste do texto melhora.
2. **Acessibilidade do preço.** `aria-label` em `<span>` puro não é anunciado de forma confiável por leitores de tela. Trocado por `<span class="sr-only">dezessete reais</span>` + partes visuais com `aria-hidden`. Leitura limpa garantida.
3. **Copy duplicada removida.** A frase "cinco paisagens para lembrar de respirar no meio do dia" aparecia duas vezes na seção de preview (título `<h2>` e legenda). Mantido o `<h2>` visível (enquadra a galeria, serve de heading acessível); removida a legenda duplicada. As palavras aprovadas permanecem — só não se repetem.
4. **URL do Instagram consistente.** Página alinhada a `https://www.instagram.com/versocalmo` (igual ao `ENTREGA.md`).

Validação pós-alteração: estrutura HTML válida, headings `h1→h2×4` sem pulos, 8 imagens com `onerror`, checkout seguro em modo pendente, OG image ainda comentada como esperado.

---

*Verso Calmo — Respiro de Garopaba — auditoria final v1.0*
