# Verso Calmo — Brand System v1.1

Documento operacional. Substitui v1.0. Base única de verdade para Marina, designer, social media, fotógrafo, Claude Design e Claude Code.

-----

## 1. Essência da marca

A Verso Calmo é uma marca autoral de presença, escrita em primeira pessoa por **Marina Gomes**, ancorada em **Garopaba/SC**.

Une mar, céu, paisagem real, escrita curta e gestos cotidianos para entregar **um minuto de respiro no dia** de quem chega.

Não é página de frases. Não é wellness. Não é coach. Não é loja editorial. É **carta visual de uma mulher que escreve daqui** — e que, com o tempo, transforma esse gesto em objetos e telas que cabem na rotina de quem se identifica.

**Promessa emocional:** um respiro bonito no meio da rotina.  
**Território proprietário:** Garopaba real + Marina viva + frases concretas + estética editorial clara.

-----

## 2. Princípios inegociáveis

1. **A marca é clara e respirável**, não escura e luxuosa. A sensação principal é luz de fim de tarde, não hotel boutique.
2. **Garopaba é personagem**, não cenário. Aparece nominalmente, geograficamente, atmosfericamente.
3. **Marina existe na escrita.** Primeira pessoa, autoria visível, presença discreta no visual.
4. **Convite, nunca comando.** A marca não manda — oferece.
5. **Frase curta é forma, não regra universal.** Cada formato tem sua medida.
6. **Venda é gesto.** Wallpaper aparece como respiro antes de aparecer como produto.
7. **Editorial na forma, humana na voz.** Sofisticação sem frieza, sensibilidade sem clichê.
8. **Silêncio vale mais que urgência.** Nunca timer, contador, "últimas unidades", prova social agressiva.

-----

## 3. Sistema cromático em dois modos

A paleta opera em **dois modos coexistentes**. Cada peça declara qual modo está usando.

### 3.1 Modo Respiro (uso principal — 70% da marca)

Luz, areia, sal, céu, âmbar suave. Aplicação dominante em **Instagram, wallpapers, posts, stories, primeira dobra do site, capas, embalagens leves**.

| Token | Nome | HEX | Função |
|---|---|---|---|
| `--vc-sal` | Branco sal | `#F6EFE5` | Fundo principal claro, base de respiro |
| `--vc-areia-clara` | Areia clara | `#E8D9C2` | Fundo secundário, blocos suaves |
| `--vc-areia-umida` | Areia úmida | `#C8A77D` | Acento quente, dourado terroso |
| `--vc-ambar-suave` | Âmbar suave | `#D8915A` | Acento principal claro, golden hour leve |
| `--vc-ceu-quieto` | Azul céu quieto | `#AFC7C9` | Acento frio, atmosfera matinal |
| `--vc-rosa-memoria` | Rosa memória | `#D8A6A0` | Acento afetivo raro |
| `--vc-tinta-mar` | Tinta de mar | `#3A4A55` | Texto sobre claro, hierarquia |

**Regra:** 60% sal + areia clara, 25% acentos quentes, 15% texto/contraste.

### 3.2 Modo Profundidade (uso secundário — 30% da marca)

Noite, marrom sombra, mar profundo. Aplicação em **rodapés, seções densas do site, manifesto institucional, contraste pontual, peças noturnas, embalagens premium futuras**.

| Token | Nome | HEX | Função |
|---|---|---|---|
| `--vc-noite-mar` | Noite de mar | `#101417` | Profundidade extrema, rodapé |
| `--vc-mar-profundo` | Mar profundo | `#1F3A3D` | Background institucional |
| `--vc-marrom-sombra` | Marrom sombra | `#3A2A22` | Ancoragem quente |
| `--vc-ambar` | Âmbar profundo | `#B66F32` | Acento sobre escuro |
| `--vc-verde-restinga` | Verde restinga | `#69755C` | Vegetação, morro |

**Regra:** usar Profundidade em blocos delimitados, não como base de marca. Texto sobre Profundidade sempre `--vc-sal`.

### 3.3 Regra de equilíbrio

- Feed do Instagram: **80% Modo Respiro**, 20% Profundidade (manifesto, peças noturnas raras).
- Site: Modo Respiro nas seções de entrada e produto. Modo Profundidade em rodapé e manifesto.
- Wallpapers: lockscreen pode usar Profundidade (legibilidade); homescreen prefere Respiro.
- Nunca mais que 4 cores ativas numa mesma peça.

-----

## 4. Sistema tipográfico

### 4.1 Famílias

| Família | Pesos permitidos | Função |
|---|---|---|
| **Fraunces** | Light 300, Regular 400, Italic 400, Semibold 600 (raro) | Títulos, frases poéticas, logo, manifesto, frases sobre paisagem |
| **Manrope** | Regular 400, Medium 500, Semibold 600 | Texto corrido, navegação, botões, legendas, UI, microcopy |

Ambas gratuitas no Google Fonts. Substitutos só em emergência: Cormorant Garamond ↔ Fraunces; Work Sans ↔ Manrope.

### 4.2 Hierarquia

| Nível | Família | Peso | Uso |
|---|---|---|---|
| Frase poética | Fraunces | Light | Wallpaper, capa, post de frase |
| Título editorial | Fraunces | Regular | Manifesto, hero do site, capítulos |
| Subtítulo | Fraunces | Light Italic | Sob título, cadência |
| Corpo de texto | Manrope | Regular | Manifesto longo, sobre Marina, página de venda |
| Apoio/legenda | Manrope | Regular | "por Marina Gomes", créditos |
| Microtexto | Manrope | Medium | UI, datas, navegação |

### 4.3 Regras

- **Caixa baixa por padrão.** Maiúsculas só em labels institucionais (`MANIFESTO`, `PALETA`) com tracking aberto (+80 a +120).
- **Itálico Fraunces** para palavras-chave dentro da frase: "palavras que chegam devagar e *ficam*".
- **Alinhamento:** esquerda ou centro. Justificado nunca.
- **Entrelinha:** 1.4–1.6 em corpo; 1.2–1.3 em títulos grandes.
- **Tracking:** títulos +20 a +40; logo +40; labels institucionais +80 a +120.

### 4.4 Uso do nome da marca

- **Textos institucionais, corridos, jurídicos, biografia, manifesto em prosa, comunicação formal:** "Verso Calmo" (com maiúsculas).
- **Aplicações visuais — logo, wordmark, assinatura sobre paisagem, capas, wallpapers, monograma:** "verso calmo" (caixa baixa, escolha estética).
- **Monograma reduzido:** `V | C` (Fraunces Regular, filete vertical separador). Avatar, favicon, marca d'água, etiquetas.

-----

## 5. Sistema fotográfico

### 5.1 Horário e luz

- **Assinatura principal:** golden hour (30 min antes do pôr até 20 min depois). Luz lateral, sombras longas, gradiente quente.
- **Secundárias:** manhãs com neblina, hora azul, dias cinza com intenção narrativa.
- **Evitar:** sol a pino, luz dura, dia ensolarado clichê de praia turística.

### 5.2 Tratamento (preset Verso Calmo)

Um único preset, aplicado a tudo. Sem isso, fotos de dias diferentes não conversam.

- Saturação geral: **−10 a −15**.
- Highlights: levemente âmbar (+10 amarelo, +5 laranja).
- Sombras: levemente quentes (−5 azul, +5 vermelho), com detalhe (nunca esmagadas).
- Curva: S suave (contraste editorial, não dramático).
- Grão: 2–4% para textura analógica.
- Sem HDR. Sem clareamento forçado. Sem filtros nomeados de Instagram.

### 5.3 Composição

- Regra dos terços como padrão.
- Um único ponto focal.
- Mínimo **40% de espaço negativo** (céu, mar, neblina, areia).
- Lente equivalente 24–50mm. Sem grande-angular extrema.

### 5.4 Presença humana

Permitido com parcimônia: mão escrevendo, silhueta distante, sombra, perfil parcial, bastidor sutil de Marina.

Proibido: rosto performando emoção, surfistas, esportes, casas, postes, fios, placas, bandeiras, mochileiros.

### 5.5 Banco de imagens

Organizar acervo em pastas temáticas: `amanhecer/`, `fim_tarde/`, `neblina/`, `mar_calmo/`, `mar_agitado/`, `ceu/`, `detalhes/`, `marina_bastidor/`, `objetos/`. Toda imagem tratada antes de entrar no banco — não tratar na hora de postar.

-----

## 6. Sistema verbal

### 6.1 Tom

Carta para uma amiga próxima, num fim de tarde, em Garopaba, sem pressa. Quatro qualidades:

1. **Calma** — nunca urgência.
2. **Concretude** — paisagem, gesto, objeto. Nunca abstração genérica.
3. **Cadência** — pausa como pontuação, respiro como ritmo.
4. **Autoria** — Marina existe na escrita. Pronome "eu" aparece.

### 6.2 Vocabulário da marca

**Substantivos:** respiro, pausa, presença, calma, silêncio, mar, céu, morro, praia, areia, janela, café, manhã, fim de tarde, luz, gesto, palavra, verso, lembrança, refúgio, intervalo, recomeço, abrigo.

**Verbos:** respirar, parar, ficar, voltar, lembrar, escutar, guardar, escrever, acolher, atravessar, descansar, recomeçar, sentar, observar.

**Adjetivos:** simples, baixinho, devagar, leve, bonito, calmo, quieto, sereno (sempre com parcimônia).

**Marcadores autorais:** "por Marina Gomes", "de Garopaba", "aqui dentro", "escrevo daqui".

### 6.3 Palavras proibidas

- **Coach:** jornada, melhor versão, alta performance, transformação, abundância, mindset, alinhamento, vibração, manifestação, blindar, ressignificar, expansão, elevação.
- **E-commerce agressivo:** imperdível, oferta, promoção, garanta o seu, últimas unidades, frete grátis, agora, hoje, corre.
- **Clichês motivacionais:** confie no processo, o universo conspira, gratidão sempre, você é luz, energia, fluxo abundante.
- **Espiritual pesado:** bênção, propósito divino, milagre, glória, unção.

### 6.4 Quatro modelos de frase

1. **Convite curto.** "fica. respira. o resto pode esperar."
2. **Observação editorial.** "tem palavra que chega baixinho e muda o dia."
3. **Pausa em duas linhas.** "a vida não deixou de ser bonita. / talvez você só esteja passando rápido demais por ela."
4. **Afirmação serena.** "o agora também sabe falar baixo."

Evitar: pergunta retórica, exclamação, dois-pontos com lista, comando direto.

### 6.5 Diferenciação verbal — como não cair no genérico

A Verso Calmo escapa do genérico **citando o concreto**:

- Genérico: "respire fundo, tudo vai passar."
- Verso Calmo: "o vento de Garopaba sopra diferente no fim de tarde."
- Genérico: "encontre sua paz interior."
- Verso Calmo: "tem dia que o mar daqui já organiza a gente por dentro."

Regra: sempre que possível, ancorar em **lugar, objeto, gesto ou hora real**.

-----

## 7. Regras de composição por formato

A regra "frase curta" vale para capas e wallpapers — não para textos longos. Cada formato tem sua medida.

### 7.1 Frase curta (wallpaper, capa, story de frase)

- 5 a 14 palavras totais.
- 4 a 7 palavras por linha.
- Sem ponto final agressivo.
- Sem verbo de comando.
- Fraunces Light, contraste mínimo 4.5:1.

### 7.2 Manifesto

- 80 a 250 palavras em prosa editorial.
- Estrutura: anáfora ("acreditamos em…" / "tem coisa que…") + fechamento síntese.
- Parágrafos curtos com respiro generoso.
- Fraunces para abertura, Manrope para corpo, assinatura manuscrita de Marina ao final.
- Sem bullets. Sem listas.

### 7.3 Carrossel editorial (4:5)

- 3 a 7 slides.
- Slide 1 (capa): frase curta forte (regra 7.1).
- Slides intermediários: 30 a 80 palavras cada, em Manrope Regular ou Fraunces Light.
- Slide final: assinatura V|C + microconvite suave ("salve para um dia apressado", "envie para quem precisa").
- Paleta consistente entre slides — não pular bruscamente de Respiro para Profundidade.

### 7.4 Página de espera (`/em-breve`)

- Headline: frase curta Fraunces Light (regra 7.1).
- Subtítulo: 8 a 20 palavras Manrope Regular.
- Campo de email + botão silencioso.
- Microcopy de confirmação: 6 a 12 palavras.
- Rodapé: V|C + autoria + lugar.
- **Sem timer, sem contador, sem prova social agressiva, sem upsell.**

### 7.5 Textos de venda silenciosa (página do produto, descrição Kiwify)

- 150 a 400 palavras.
- Estrutura: promessa emocional → o que vem dentro (em prosa, não bullet agressivo) → para quem é → entrega → preço discreto → CTA gesto.
- Tom de carta, não de página de oferta.
- Preço aparece no final, sem destaque pulsante, sem riscado de "de/por".
- CTA: "quero levar para a minha tela", "guardar comigo", "levar essa coleção".

### 7.6 Legendas do Instagram

- 40 a 180 palavras.
- Primeira linha: gancho contemplativo (vira pré-texto antes do "ver mais").
- Corpo: 2 a 4 parágrafos curtos.
- Sem hashtags no manifesto institucional. Em posts comuns: até 5 hashtags discretas no fim, em linha separada com respiro.
- Fechamento: gesto autoral ("com calma, Marina") ou pergunta aberta suave.

-----

## 8. Componentes reutilizáveis

Catálogo nomeado para Claude Design materializar e Claude Code implementar.

| Componente | Formato | Uso |
|---|---|---|
| `CapaDestaque` | 1080×1920 (área visível ~1080×1080) | Destaques do Instagram |
| `StoryEditorial` | 1080×1920 | Stories diários, narrativa |
| `Carrossel45` | 1080×1350, 3–7 slides | Manifesto, "três coisas", apresentação |
| `PostFrase` | 1080×1350 | Post de frase com paisagem |
| `WallpaperLock` | 1290×2796 | Tela de bloqueio com frase |
| `WallpaperHome` | 1290×2796 | Tela inicial sem frase |
| `PaginaEmBreve` | web responsivo | Lista de interesse wallpapers |
| `SecaoManifesto` | web full-width | Manifesto no site |
| `SecaoMarina` | web 2 colunas → 1 col mobile | Sobre Marina |
| `SecaoGaropaba` | web galeria 3 col → 1 col mobile | Garopaba como lugar |
| `SecaoWallpapers` | web | Quando produto existir |
| `CTASilencioso` | botão | Padrão de chamada |
| `RodapeMinimalista` | web full-width | Rodapé do site |
| `Wordmark` | SVG | Logo nas três variações |
| `Monograma` | SVG | V |

**Estados de cada componente** (Claude Design): default, Modo Respiro, Modo Profundidade, mobile.

-----

## 9. Venda silenciosa dos wallpapers

Princípio estrutural, não tática.

### 9.1 Regra central

**Wallpaper aparece como gesto antes de aparecer como produto.**

- Antes de existir página de venda, o wallpaper já apareceu na tela de bloqueio da Marina nos Stories.
- Antes de existir preço, já apareceu como print grátis para download.
- Antes de existir lista de interesse, já apareceu como sensação ("o que eu olho cem vezes por dia precisa me fazer bem").

### 9.2 O que NÃO se vende

- Não se vende "arquivo digital em alta resolução".
- Não se vende "pack de 12 imagens 1290×2796".
- Não se vende "downloads imediatos via Kiwify".

### 9.3 O que se vende

- Vende-se **respiro** ("um minuto de Garopaba na sua tela").
- Vende-se **gesto** ("uma coleção pequena, feita devagar").
- Vende-se **presença** ("para a tela que você olha cem vezes por dia").
- Vende-se **lembrança** ("o mar daqui, agora também aí").

### 9.4 Mapa de transformação verbal

| Comercial agressivo | Versão Verso Calmo |
|---|---|
| Compre agora | guardar meu lugar / levar para a minha tela |
| Lançamento exclusivo | uma coleção pequena, feita devagar |
| Garanta o seu | fica um aviso para você quando chegar |
| Por tempo limitado | (nada — silêncio é melhor) |
| Aproveite! | se quiser, fica |
| Adicione ao carrinho | levar essa coleção |
| Finalizar compra | quero a coleção |

### 9.5 Aspectos técnicos preservados (sem aparecer no front)

A operação (Kiwify, order bump, entrega automatizada, página de obrigado) segue o documento `14_lancamento_mvp_wallpapers.md`. A diferença é que **o front nunca expõe a operação**. O cliente vê gesto; nos bastidores, profissionalismo total.

-----

## 10. Diretrizes para Claude Design

### 10.1 Princípios

- Cada componente da seção 8 vira um **bloco nomeado e versionado** no Claude Design.
- Cada bloco existe nos dois modos (Respiro / Profundidade) quando aplicável.
- Cada bloco tem variação **mobile e desktop** quando for web.
- Variáveis editáveis: imagem de fundo, frase principal, microcopy, cor de acento.

### 10.2 Ordem de produção sugerida

1. Tokens visuais (cores, tipografia, espaçamento).
2. Wordmark e Monograma (SVG).
3. CTASilencioso e RodapeMinimalista (UI base).
4. PaginaEmBreve completa (priority 1 — já existe rascunho).
5. SecaoManifesto, SecaoMarina, SecaoGaropaba.
6. Componentes de Instagram (Stories, Capas, Carrossel, PostFrase).
7. Wallpapers (templates) quando o acervo tratado estiver pronto.

### 10.3 Restrição de output

Cada bloco deve ser exportável em PNG/SVG (para Instagram) ou HTML/CSS isolado (para web). Não criar blocos que dependam de uma stack específica.

-----

## 11. Diretrizes para Claude Code

### 11.1 Regra zero — ler antes de propor

**Antes de qualquer sugestão técnica:**

1. Ler a estrutura existente do projeto `claude/verso-calmo-em-breve-8Bgf9`.
2. Identificar: framework, gerenciador de pacotes, sistema de estilos, componentes existentes, arquivos de configuração.
3. Mapear o que já funciona e o que precisa ajuste.
4. **Só depois** propor mudanças.

Não assumir Next.js + Tailwind. Não reescrever o que já existe. Não migrar stack sem necessidade clara.

### 11.2 Princípios de implementação

- **Preservar o que funciona.** Refinar, não recriar.
- **Tokens primeiro.** Cores e tipografia desta documentação viram variáveis CSS antes de qualquer componente.
- **Mobile-first.** A maior parte da audiência abre no celular.
- **Performance editorial.** Lighthouse > 90. Imagens otimizadas. Fontes via `@font-face` local ou Google Fonts com preconnect.
- **Acessibilidade real.** Contraste AA (4.5:1) entre texto e fundo. Alt-text descritivo em toda imagem.
- **Animação contida.** Fades 600–800ms. Sem parallax pesado, sem scroll-jacking.

### 11.3 Captura de email (página `/em-breve`)

- Fase 1 (custo zero): formulário → webhook Google Apps Script → Google Sheets.
- Fase 2 (quando lista crescer): considerar Buttondown, Brevo free tier ou similar.
- Não usar Mailchimp, ConvertKit, ActiveCampaign nesta fase.

### 11.4 Roteiro incremental sugerido

1. **Sprint 1:** auditar projeto existente, aplicar tokens, refinar `/em-breve`.
2. **Sprint 2:** home + manifesto + rodapé.
3. **Sprint 3:** `/marina` + `/garopaba`.
4. **Sprint 4:** `/wallpapers` (quando produto existir) com link externo Kiwify.

### 11.5 O que evitar no código

- Bibliotecas pesadas de animação (Framer Motion só se já existir; senão CSS puro).
- Componentes "estilo dashboard" (cards com sombra, gradientes vibrantes, badges coloridos).
- Loaders agressivos, skeletons piscantes, scroll snap.
- Pop-ups de qualquer natureza.

-----

## 12. Checklist de aprovação

Aplicar a toda peça antes de publicar. Uma resposta "não" = volta para revisão.

### Identidade

- [ ] Usa apenas cores da paleta oficial (Respiro ou Profundidade declarados)?
- [ ] Usa apenas Fraunces e/ou Manrope nos pesos permitidos?
- [ ] Tem ao menos um elemento do território (mar, céu, Garopaba, gesto autoral)?
- [ ] Convive com as últimas 5 publicações sem destoar?

### Composição

- [ ] Tem um único ponto focal claro?
- [ ] Tem espaço negativo suficiente (mín. 40%)?
- [ ] Hierarquia tipográfica respeitada?
- [ ] Texto segue a regra do formato correto (seção 7)?

### Voz

- [ ] Nenhuma palavra proibida (coach, e-commerce agressivo, clichê)?
- [ ] Tom é convite, não comando?
- [ ] Marina aparece OU Garopaba está implícita?
- [ ] Lido em voz alta tem cadência calma?

### Marca

- [ ] Nome usado corretamente (caixa alta institucional / baixa visual)?
- [ ] Monograma/wordmark em uma das três formas oficiais?
- [ ] Modo cromático (Respiro/Profundidade) coerente com o formato?

### Função

- [ ] A peça tem objetivo claro (atrair, conectar, posicionar, preparar venda)?
- [ ] Se for venda, parece gesto (seção 9)?
- [ ] Se for crescimento, tem gancho nos primeiros 1,5s?

### Teste do silêncio

- [ ] Olhar por 30s. Sentir vontade de tirar algo? **Tirar.**
- [ ] Parece página de revista que alguém arrancaria e guardaria — não post para like e esquecer?

-----

## 13. Erros proibidos

Lista direta. Cada item já foi observado em marcas similares que falharam.

### Estéticos

- Estética de Pinterest motivacional (frase grande centralizada em fundo aquoso).
- Wellness/yoga retreat genérico (folhagem verde-menta, mármore, dourado glitter).
- Café premium clichê (madeira escura + caligrafia + grão exagerado).
- Coach feminina (rosa-coral + dourado + foto de mulher de costas com cabelo ao vento).
- Infoproduto (botão laranja gigante, headline pesada, prova social com prints de WhatsApp).
- Boho místico (mandala, lua, cristal, tarot).
- Marca espiritualizada pesada (cruzes, símbolos sacros explícitos, frases bíblicas literais).

### Visuais

- Fundo predominantemente preto/noite em peças de Instagram.
- Caixa sólida atrás da frase sobre paisagem.
- Vinheta escura nos cantos.
- Filtros nomeados do Instagram.
- Texto em curva, ondas, espiral.
- Selos circulares com porcentagem.
- Stickers nativos do Instagram (GIF, enquete colorida, pulsantes).
- Frame/moldura em volta da foto.
- Mais de uma frase principal por peça.

### Verbais

- Palavras de coach, e-commerce agressivo, clichê motivacional (lista 6.3).
- Comando direto ("respire!", "pause agora!").
- Promessa de transformação ("mude sua vida em 21 dias").
- Urgência fake ("últimas horas", "só hoje").
- Prova social agressiva ("X pessoas compraram nas últimas 2h").
- Pregação espiritual explícita.
- Pergunta retórica vazia ("será que você merece?").

### Estruturais

- Vender wallpaper como "arquivo digital".
- Tratar Marina como invisível (sem autoria na voz).
- Tratar Garopaba como cenário substituível.
- Misturar Modo Respiro e Profundidade caoticamente na mesma peça.
- Usar Inter, Playfair, Lora, Montserrat ou qualquer fonte fora do sistema.
- Reescrever projeto existente sem ler primeiro.
- Criar peças sem declarar para qual formato (seção 7) está aplicando regras.

-----

## Regra central

> Verso Calmo é uma marca clara, contemplativa e respirável.  
> Editorial na forma, humana na voz, silenciosa na venda.
>
> Tudo que ela produz precisa parecer **algo que Marina escreveu hoje de tarde, com a luz dourada entrando pela janela em Garopaba** —
> não algo que uma agência produziu no Canva às pressas.

Imprimir. Fixar acima da mesa. Reler antes de cada decisão estética da marca.

-----

*Verso Calmo Brand System — versão 1.1 — documento operacional único.*  
*Substitui Design Territory v1.0 e a paleta antiga do arquivo `03_identidade_visual.md`.*  
*Próxima revisão sugerida após: (1) auditoria do projeto `/em-breve` existente, (2) primeira aplicação completa do sistema em peças reais de Instagram.*
