# Respiro de Garopaba — Plano de lançamento

Documento operacional. Registra a ordem exata de execução para lançar com segurança.
Não depende da memória da sessão. Ler do início antes de tomar qualquer ação.

---

## 1. Status atual

| Item | Status |
|---|---|
| Página `respiro-de-garopaba/index.html` | ✅ criada e aprovada |
| QA técnico e acessibilidade | ✅ feito |
| Docs operacionais (ASSETS, ENTREGA, CHECKOUT) | ✅ criados |
| Assets visuais (wallpapers, mockup, origem) | ⏳ pendentes |
| Checkout configurado | ⏳ pendente |
| OG image | ⏳ pendente |
| Link na bio | 🔒 não alterar ainda |
| Página com link público | 🔒 não publicar ainda |

A página está tecnicamente pronta. O lançamento não existe sem os assets e o checkout.

---

## 2. Ordem de execução

### A) Antes das imagens finais — agora

- Manter a página sem link público
- Não colocar CTA na bio
- Não vender ainda
- Não mencionar wallpaper nos conteúdos
- Usar stories do sábado apenas para fechar fachada e aquecer com sutileza (ver seção 3)
- Usar stories do domingo para medir temperatura da audiência (ver seção 4)
- Usar stories da segunda versão A se a página ainda não estiver pronta (ver seção 5)

---

### B) Quando as imagens estiverem prontas

Executar nessa ordem:

1. Copiar wallpapers para a pasta do projeto:
   ```
   assets/wallpapers/wallpaper-01.jpg
   assets/wallpapers/wallpaper-02.jpg
   assets/wallpapers/wallpaper-03.jpg
   assets/wallpapers/wallpaper-04.jpg
   assets/wallpapers/wallpaper-05.jpg
   ```
   Proporção 9:16, mínimo 1080×1920. Ver `assets/wallpapers/README.md`.

2. Copiar mockup de celular:
   ```
   assets/wallpapers/mockup-celular-respiro.jpg
   ```

3. Copiar foto da origem, se existir:
   ```
   assets/garopaba/marina-origem-respiro.jpg
   ```
   Proporção 3:4 ou 4:5. Não bloqueia o lançamento se não existir.

4. Criar OG image:
   ```
   assets/og/respiro-de-garopaba.jpg
   ```
   Dimensão: 1200×630. Ver `ASSETS.md` para orientação visual.

5. Descomentar no `<head>` da página:
   ```html
   <meta property="og:image" content="https://seudominio.com.br/assets/og/respiro-de-garopaba.jpg">
   <meta property="og:url" content="https://seudominio.com.br/respiro-de-garopaba">
   ```

6. Testar a página localmente:
   ```bash
   cd verso_calmo
   python3 -m http.server 8080
   # abrir: http://localhost:8080/respiro-de-garopaba/
   ```
   Confirmar que as fotos aparecem nos cards, o mockup carrega e nenhum placeholder de gradiente persiste onde deveria ter foto.

---

### C) Checkout

1. Criar o produto na Kiwify (ou plataforma equivalente). Ver `CHECKOUT.md` para todos os campos.
   - Nome: **Respiro de Garopaba**
   - Preço: **R$ 17,00**
   - Tipo: produto digital
   - Arquivo de entrega: `respiro-de-garopaba-wallpapers.zip` com os 5 wallpapers em alta resolução
   - Confirmar que o checkout não exibe nome técnico ou interno

2. Configurar o e-mail de entrega com o texto de `ENTREGA.md`

3. Fazer uma compra de teste:
   - e-mail de entrega chegou?
   - link de download funciona sem login?
   - ZIP baixa e abre corretamente?
   - imagens abrem em iOS e Android?

4. Após teste bem-sucedido: colar a URL do checkout no arquivo `respiro-de-garopaba/index.html`:
   ```js
   // encontrar esta linha no <script> no fim da página:
   var CHECKOUT_URL = '#checkout-pendente';
   // substituir por:
   var CHECKOUT_URL = 'https://pay.kiwify.com.br/xxxxxxxx';
   ```
   Apenas essa linha. Todos os botões da página atualizam automaticamente.

---

### D) Antes de colocar o link na bio

Rodar este checklist na ordem:

- [ ] Todos os 5 wallpapers visíveis na galeria da página
- [ ] Mockup de celular visível na seção produto
- [ ] Nenhum placeholder gradiente onde deveria ter foto
- [ ] Botão "levar para a minha tela" abre o checkout correto
- [ ] Botão "quero meu respiro" abre o checkout correto
- [ ] Compra de teste bem-sucedida
- [ ] E-mail de entrega chegou e link funciona
- [ ] Arquivo ZIP completo e abre sem erro
- [ ] Testado em celular iOS e Android
- [ ] ManyChat Fluxo B configurado com o link da página (ver seção 6)
- [ ] Bio atualizada com link e CTA (ver seção 7)

Só depois de tudo marcado: colocar o link na bio.

---

## 3. Stories — sábado

**Objetivo:** fechar fachada. Não vender. Não mencionar wallpaper.

**Sequência:**

1. "organizei a casa por aqui"
2. "passei os últimos dias cuidando desse espaço com mais calma. nos destaques, deixei alguns caminhos para você entender melhor o verso calmo."
3. "dá uma olhada quando tiver um minuto 🕊️"
4. Postar os stories dos destaques existentes e adicioná-los aos destaques corretos
5. Encerrar com: "bom sábado 🕊️"

**Regras do sábado:**
- Não vender
- Não mencionar wallpaper
- Não fazer enquete
- Não postar Reels

---

## 4. Stories — domingo

**Objetivo:** medir temperatura da audiência. Não vender.

**Sequência:**

1. "domingo aqui tem outro ritmo."
2. Enquete:
   > "quando você abre o celular, a tela te acalma ou te acelera?"
   - opção A: "me acalma"
   - opção B: "me acelera"
3. "às vezes a menor pausa muda o tom do dia inteiro."
4. "boa semana 🕊️"

**Como interpretar os resultados:**
- Maioria "me acelera" → audiência receptiva a uma tela mais calma. Bom sinal para a proposta do produto.
- DMs espontâneas sobre a enquete → sinal mais forte do que o percentual da enquete em si.
- Não vender nesse momento. Observar e guardar os dados.

---

## 5. Stories — segunda

### Versão A — página ainda não pronta

Usar se a página ainda não estiver com checkout funcionando.

- Não usar o nome "Respiro de Garopaba"
- Não usar CTA de compra
- Não falar preço
- Não falar "wallpaper" diretamente

**Sequência:**

1. "essa semana tem algo chegando."
2. "passei os últimos dias preparando algo com calma. vem de Garopaba. cabe na palma da sua mão."
3. "mais em breve. 🕊️"

---

### Versão B — página quase pronta ou pronta

Usar quando o checkout estiver testado e a página puder receber tráfego.

- Pode usar o nome como semente
- Não revelar preço nos stories
- Não colocar link antes de estar funcionando

**Sequência:**

1. "essa semana tem algo chegando."
2. "chama-se Respiro de Garopaba."
3. "é pequeno. é calmo. é para a tela que você olha todos os dias."
4. "em breve o link chega aqui. 🕊️"
5. *(opcional)* "se quiser ser avisada quando abrir: comenta RESPIRO em qualquer post e eu te mando no direct."

---

## 6. ManyChat

### Fluxo A — pré-lançamento / lista de aviso

Usar antes do link estar no ar. Objetivo: construir lista de pessoas com intenção real.

**Palavra-chave:** RESPIRO
**Chamada nos stories:** "comente RESPIRO e eu te aviso quando abrir 🕊️"

**Sequência de mensagens:**

> Mensagem 1:
> "oi 🕊️ obrigada por comentar. tem algo vindo de Garopaba essa semana. quando abrir, você é uma das primeiras a saber."

> Mensagem 2 (com botões):
> "posso te mandar o aviso aqui no direct quando estiver pronto?"
> — botão A: "sim, me avisa"
> — botão B: "não precisa"

> Se botão A:
> "perfeito. fica de olho no direct essa semana 🌊"

> Se botão B:
> "tudo bem. quando quiser, estou por aqui 🕊️"

---

### Fluxo B — página no ar / link de compra

Ativar somente depois que o checkout estiver testado e a página estiver com link público.
Substituir o Fluxo A por este.

**Palavra-chave:** RESPIRO
**Chamada nos stories:** "comente RESPIRO e eu te mando o link no direct 🕊️"

**Sequência de mensagens:**

> Mensagem 1:
> "oi 🕊️ que bom que você chegou."

> Mensagem 2:
> "o Respiro de Garopaba está disponível agora. são 5 paisagens autorais para a tela do seu celular — feitas com calma, em Garopaba.
> 🔗 [link da página] é por aqui."

> Mensagem de acompanhamento (opcional, 24h depois):
> "você conseguiu ver? qualquer dúvida, é só me chamar aqui 🌊"

**Lembrete:** substituir `[link da página]` pela URL real antes de ativar.

---

## 7. Bio

**Manter a bio atual até o link estar pronto.**
Não alterar antes do checkout testado.

**Bio completa para quando a página estiver no ar:**

```
Marina Gomes | Verso Calmo
um minuto de respiro no seu dia
momentos autorais e palavras que acolhem
pare, respire e fique um pouco 🕊️
↓ Respiro de Garopaba
```

**Versão compacta (se não couber):**

```
um minuto de respiro no seu dia
momentos autorais e palavras que acolhem
pare, respire e fique um pouco 🕊️
↓ Respiro de Garopaba
```

O link na bio aponta para a URL da página `/respiro-de-garopaba`.

---

## 8. Métricas do teste

**O que acompanhar após o link entrar no ar:**

| Métrica | O que indica |
|---|---|
| Visitas na página | alcance real do tráfego |
| Clique no botão (CTA) | intenção de compra |
| Início de checkout | intenção qualificada |
| Compras concluídas | conversão real |
| Taxa visita → compra | saúde da página/oferta |
| Cliques no link da bio / sticker | tráfego vindo do Instagram |
| Respostas às enquetes | temperatura da audiência |
| DMs espontâneas | sinal de desejo real |
| Retenção dos stories | interesse no conteúdo |

**Meta dos primeiros 7 dias com tráfego real:**
- 10 compras
- Taxa visita→compra acima de 1,5%

**Como interpretar se a meta não for atingida:**

- Cliques altos + compras baixas → problema na página, no checkout ou no preço. Revisar fluxo completo, testar em outro celular, verificar se o checkout carrega.
- Cliques baixos + compras proporcionais → problema de desejo, aquecimento ou tráfego. A audiência ainda não entendeu ou não se interessou. Revisar stories e estratégia de aquecimento.
- Zero cliques → link não está chegando às pessoas. Verificar bio, stickers e ManyChat.

---

## 9. Não fazer ainda

- ❌ Colocar link na bio sem checkout testado
- ❌ Prometer gratuito ou brinde
- ❌ Anunciar preço antes da página estar no ar
- ❌ Criar urgência falsa, contador ou "últimas unidades"
- ❌ Criar funil sofisticado com múltiplos passos
- ❌ Alterar posts fixados
- ❌ Reestruturar destaques durante o lançamento
- ❌ Mudar bio antes do link estar funcional e testado
- ❌ Publicar a URL da página antes de o checkout funcionar

---

## 10. Próximo passo real

> **O próximo passo real é produzir os 5 wallpapers e o mockup.**
>
> Sem esses assets, a página está tecnicamente pronta, mas o teste comercial ainda não existe.
>
> Tudo o mais — checkout, ManyChat, bio, stories de lançamento — só acontece depois que as imagens estiverem prontas e a página puder ser vista com o produto real.

A ordem não muda: imagens → checkout → teste → link na bio.

---

*Verso Calmo — Respiro de Garopaba — documento de lançamento v1.0*
