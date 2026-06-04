# 16 — Experiência Imersiva do Site (versocalmo.com.br)

> **Status:** o site já está no ar (Claude Code + GitHub). Este documento **não reconstrói** o site — ele redesenha a *camada de experiência* sobre o que já existe. Domínio, deploy e tudo que já funciona permanecem. A primeira tarefa em execução (seção 10) é **ler a estrutura atual antes de propor qualquer código**.

Este documento define a experiência de navegação do site como uma peça única: uma antessala emocional de Garopaba que conduz o visitante, pelo scroll, do silêncio ao desejo — e do desejo para os wallpaper sem quebra de atmosfera. Ele é base de execução, sujeito à validação da direção de som (seção 5) e à leitura do repositório.

---

## 1. O que o site precisa fazer

Não vender. **Fazer desejar.**

O site é a versão "página dupla de revista editorial" do que o `03_identidade_visual` já define para todas as peças: paisagem fala primeiro, frase respira em cima, marca assina por último. A diferença é que aqui a página *se atravessa devagar*, com tempo, luz e som.

Três regras inegociáveis:

- **Mobile-first.** A audiência é ~69% feminina vinda de Stories/Reels — quase tudo celular (`13_otimizacao`). Qualquer decisão pensada para desktop primeiro é erro estratégico.
- **Silêncio é o estado inicial.** A marca é sobre pausa. O site entra mudo. Som é convite, nunca imposição.
- **A experiência não persuade — ela faz sentir.** O desejo nasce sozinho. O wallpaper aparece como *resposta* a um desejo já existente, não como pitch. É o silent selling do `14_lancamento` aplicado à navegação.

---

## 2. Correções de rota já alinhadas

- **Som opcional, não automático.** Navegador nenhum toca áudio sozinho ao carregar (bloqueio padrão desde 2018). E forçar som contradiz a marca. O som é ativado por gesto — ver seção 5.
- **Vocabulário: desejo, não convencimento.** O site não "convence". Quem se sente convencido sentiu que uma operação foi feita sobre ele. Quem deseja, deseja sozinho.
- **A Kiwify é parte da experiência.** A transição do site para o checkout é o ponto mais frágil de toda a jornada (seção 6). A customização total da Kiwify exigida pelo `14_lancamento` deixa de ser detalhe e vira parte deste projeto.
- **Refino de direção (corrige a rodada anterior):** o site **não é todo escuro**. Ele respira entre **Modo Respiro** (claro — dominante, onde se lê) e **Modo Profundidade** (escuro — hero e rodapé), como a luz de um dia em Garopaba. Detalhe na seção 4.

---

## 3. Duas observações de coerência (decisões já aplicadas neste doc)

Ao cruzar o texto do `03_identidade_visual` com o guia visual aprovado (imagem `01_guia_visual_paleta_tipografia`, designada referência principal de cor/tipografia pelo `15_referencias_visuais`), surgiram dois conflitos. Pela regra do projeto — decisão mais recente / referência aprovada prevalece — resolvi assim:

**Tipografia secundária: Manrope** (não Inter). O texto do doc 03 ainda diz Inter; o guia aprovado e o sistema atual usam Manrope. → **Fraunces (títulos/frases) + Manrope (texto/UI).**

**Paleta: a do guia aprovado** (mais rica, quente e profunda que a do texto do doc 03). Tokens do site:

| Nome | HEX | Uso no site |
|---|---|---|
| Noite de mar | `#101417` | Fundo Modo Profundidade (hero overlay, rodapé) |
| Mar profundo | `#1F3A3D` | Fundo profundidade secundário |
| Marrom sombra | `#3A2A22` | Ancoragem, blocos densos |
| Branco sal | `#F6EFE5` | Fundo Modo Respiro, texto sobre escuro |
| Areia úmida | `#C8A77D` | Fundo secundário claro, texto auxiliar sobre escuro |
| Âmbar de fim de tarde | `#B66F32` | **Acento único** — links/gesto, raríssimo |
| Rosa memória `#D8A6A0` · Azul céu quieto `#AFC7C9` · Verde restinga `#69755C` | — | Pontuais, quase nunca |

Regra de sempre: máximo de uma cor de destaque por seção. Âmbar é o acento focal — usá-lo só onde o olhar deve pousar (o gesto de compra).

---

## 4. A jornada (o scroll como um dia em Garopaba)

Seis momentos. O fundo migra de luz como um dia inteiro: hora dourada → clareza → entardecer → noite. Isso respeita o sistema dual-mode (Respiro dominante, Profundidade no hero e no fim) e transforma o scroll numa passagem de luz — o tema mais profundo da marca.

Para cada momento: **objetivo · o que aparece · comportamento · copy sugerida** (frases já do banco aprovado — docs 12/14 e imagem 06).

### Momento 1 — Chegada · *hora dourada*
- **Objetivo:** primeiro fôlego. Atmosfera antes de qualquer informação.
- **Aparece:** vídeo cinematográfico de Garopaba em loop, wordmark `verso calmo` + `por Marina Gomes` em branco sal. O convite ao som dorme aqui, discreto.
- **Comportamento:** vídeo em autoplay mudo, loop contínuo. Texto entra em fade lento (0.5–1s, nunca saltado — regra do doc 03).
- **Copy:** só a assinatura. Silêncio textual proposital.

### Momento 2 — Imersão · *clareza, Modo Respiro (claro)*
- **Objetivo:** desacelerar o corpo de quem chega.
- **Aparece:** o fundo abre para luz (branco sal). Uma a duas frases surgem em fade conforme o scroll.
- **Comportamento:** reveals suaves no scroll. Muito espaço negativo (mín. 40% do quadro).
- **Copy:** *a vida também acontece nos intervalos.* — depois — *o céu não precisa gritar para lembrar que existe.*

### Momento 3 — A voz · *dia*
- **Objetivo:** resolver o gargalo nº 1 do `13_otimizacao` — sem autoria e sem origem, não há conexão premium.
- **Aparece:** Marina e Garopaba como lugar real. Foto/vídeo dela ou de bastidor (sem exposição forçada — mão, silhueta, mesa, janela).
- **Copy:** *escrevo e fotografo de garopaba.* + *escrevo para lembrar o que o coração costuma esquecer.* — marina gomes

### Momento 4 — O desejo · *entardecer*
- **Objetivo:** plantar o "eu quero levar isto comigo".
- **Aparece:** wallpapers aplicados em **telas reais de celular**, sobre a mesma atmosfera. Não mockup de loja — cena editorial.
- **Comportamento:** o fundo esquenta para o fim de tarde. Transição para o âmbar começa aqui.
- **Copy:** *o que você olha cem vezes por dia também pode te fazer bem.*

### Momento 5 — O gesto · *noite, Modo Profundidade (escuro)*
- **Objetivo:** o convite. Não um CTA de loja — um gesto.
- **Aparece:** o produto de wallpapers (Versos do Mar — `14_lancamento`), fundo noite de mar.
- **Copy:** *Versos do Mar* / *respiros de Garopaba para a tela do seu dia.* Botão-gesto: **levar comigo** (acento âmbar). → leva ao checkout Kiwify customizado (seção 6).

### Momento 6 — Assinatura · *rodapé, escuro*
- **Aparece:** rodapé denso, selo V/C, *criado em garopaba, santa catarina. por marina gomes.* Links discretos (Instagram, contato). Fim como quem assina uma carta.

---

## 5. O convite ao som — a forma "fora da caixa"

O clichê é um ícone de alto-falante no canto. Essa é a caixa. A forma da Verso Calmo é **uma pergunta que a Marina faz**, não um botão.

### Conceito

No hero, depois que o wordmark assenta, surge no terço inferior — em fade lento, sobre o vídeo, **sem modal, sem pop-up** — uma linha íntima, em primeira pessoa:

> *gravei o som do mar de garopaba pra este instante.*
>
> **ouvir** · seguir em silêncio

Dois caminhos **igualmente dignos** — nada de "ouvir" em destaque e "silêncio" apagado. Quem toca em *ouvir* faz o mar **subir como uma maré**, em fade de 2–3s (nunca corte seco). A linha então se dissolve. Quem ignora e começa a rolar **já escolheu o silêncio pela ação** — sem barreira, sem clique obrigatório.

### Controle permanente

Depois do som ativado, fica no canto inferior um traço fino que **ondula devagar, como uma respiração / maré**. Tocar nele aquieta o traço (pista visual de "mudo") e dissolve o som. Baixa opacidade (60–75%, como a assinatura do doc 03). **Sem ícone de alto-falante.**

### Regras

- Os dois caminhos são honrados igualmente (quem ativa mergulha; quem não ativa navega em paz).
- Respeitar `prefers-reduced-motion`: menos animação, mas o convite ao som continua funcionando.
- Mobile: é texto tocável — sem depender de hover.
- A escolha persiste durante a sessão (não repergunta a cada scroll).

### Dependências (atenção)

- **Som de mar real, gravado em Garopaba pela Marina.** É o mesmo princípio do "foto real, não IA": o som de Garopaba é tão proprietário quanto a paisagem. *Se a gravação não existir no lançamento, usar copy neutra: "tem o som do mar daqui, se você quiser."*
- **Música (se houver): instrumental contemplativa, licenciada ou original.** Nada com copyright — ou o site vira passivo legal. Carregar o áudio **só após o gesto** (não gastar dados de quem não pediu).

*Variação possível, se a Marina quiser algo ainda mais sutil: amarrar o despertar do som ao primeiro scroll, em vez da linha-convite. Recomendo a linha-convite como principal — é mais autoral e mais clara.*

---

## 6. A ponte comercial (o ponto mais frágil de tudo)

O site **faz desejar**; a **Kiwify executa a venda**. Entre os dois há uma troca de contexto que pode derrubar toda a atmosfera construída — sair do site imersivo e cair num checkout com cara de infoproduto no clímax.

Mitigação (já prevista no `14_lancamento`, agora obrigatória):

- A Kiwify recebe **100% de customização**: logo, cores oficiais (paleta seção 3), fontes, e **reescrita de todos os textos padrão**. Nenhum texto de plataforma sobrevive.
- A imagem de capa e a página de obrigado usam a **mesma fotografia editorial** do site/feed. Continuidade visual total.
- O link do gesto vai **direto para o checkout** — uma porta a menos.
- Copy do gesto e do botão Kiwify no mesmo tom: *levar comigo* / *quero a coleção*. Nunca "comprar agora".

Sem isso, construímos uma catedral e despejamos a pessoa num corredor de infoproduto bem no momento do desejo.

---

## 7. Requisitos técnicos e de performance

Requisitos (o *quê*). A implementação (o *como*) sai na seção 10, depois de ler o stack.

### Vídeo do hero
- Loop curto e contínuo (ideal 8–15s), **mudo**, inline (`muted`, `loop`, `playsinline`, `autoplay` — autoplay de vídeo **mudo** é permitido, diferente de áudio).
- **Imagem-poster** (frame estático) aparece instantânea enquanto o vídeo carrega → protege o LCP e evita tela preta.
- Formatos: MP4 H.264 (universal) + opcional WebM/VP9 ou HEVC menor. Comprimir forte; manter o loop bem leve.
- **Mobile / 4G:** servir encode mais leve/curto **ou** cair para o poster estático. Não dar autoplay de vídeo HD em conexão móvel. Considerar `Save-Data`.

### "Vídeo que roda com o scroll" — decisão honesta
Há duas leituras desse pedido:
- **(a) Vídeo scroll-scrubbed** (frames avançam conforme o scroll). É pesado e instável em celular — armadilha de performance conhecida. **Desktop-only, no máximo como enhancement opcional.**
- **(b) Vídeo em loop próprio + o scroll move textos/seções em parallax suave.** Robusto em mobile, mesmo efeito cinematográfico percebido. **Recomendado como padrão.**

Recomendação: adotar (b) em todos os dispositivos; (a) só se desktop comportar, sem prejudicar o celular.

### Áudio
- **Não pré-carregar** até o gesto do usuário. Loop sem emenda. Mute persistente na sessão.

### Geral
- Metas de LCP (poster/texto do hero rápidos), sem layout shift.
- Lazy-load de mídia abaixo da dobra.
- `prefers-reduced-motion` honrado (reduz parallax e movimento).
- Contraste de texto mín. 4.5:1 (regra da marca). Controle de som acessível e rotulado.

---

## 8. Riscos e cuidados

| Risco | Mitigação |
|---|---|
| Vídeo pesado mata o LCP e o usuário sai antes de ver | Poster instantâneo + vídeo comprimido + fallback estático em mobile/lenta |
| Consumo de dados afasta a audiência (mobile) | Sem autoplay HD em 4G; encode leve no celular |
| Cara de IA / template (já doeu no `/em-breve`) | Vídeo e fotos reais de Garopaba como herói absoluto. Zero stock, zero ilustração genérica |
| Scroll-scrubbing travando em celular | Padrão = loop + parallax leve (opção b); scrubbing só desktop |
| Quebra brutal na ida para a Kiwify | Customização total da Kiwify como parte do projeto (seção 6) |
| Imersão longa demais adia a oferta — ou oferta cedo demais quebra o tom | Calibrar o momento 4→5 em teste real, não no achismo |
| Música com copyright | Só licenciada ou original. Sem exceção |
| Som tratado como gimmick | A linha-convite é gesto autoral, não enfeite. Ambos os caminhos dignos |

---

## 9. Checklist de aprovação (antes de subir)

**Atmosfera**
- [ ] A navegação caberia numa revista editorial de viagem contemplativa?
- [ ] Transmite pausa, não agitação?
- [ ] O silêncio é o estado inicial e o som é convite?

**Marca**
- [ ] Só Fraunces + Manrope, pesos permitidos?
- [ ] Só a paleta aprovada (seção 3), um acento por seção?
- [ ] Fotos/vídeo reais de Garopaba — nada com cara de IA/stock?
- [ ] Autoria de Marina e origem Garopaba ficam claras?

**Conversão sem ruído**
- [ ] O wallpaper aparece como resposta a um desejo, não como pitch?
- [ ] A transição para a Kiwify é contínua (cores, fonte, foto, copy)?
- [ ] Botão-gesto na voz da marca (nunca "comprar agora")?

**Técnico**
- [ ] Abre rápido em celular real (poster instantâneo)?
- [ ] Não dá autoplay de vídeo HD em 4G?
- [ ] `prefers-reduced-motion` respeitado?

**Teste final**
- [ ] Atravessar o site inteiro em silêncio, no celular, sem pressa. Se sentir vontade de tirar algo, tirar.

---

## 10. Execução em Claude Code (Sonnet)

Este documento é estratégia/arquitetura (Opus). **A execução é Claude Code + Sonnet.** O passo 0 é ler antes de propor — regra fixa do projeto.

### Fases
1. **Ler e reportar** a estrutura atual do repo e as seções existentes do site. Não alterar nada ainda.
2. **Camada visual:** aplicar tokens (Manrope + paleta seção 3), Modo Respiro/Profundidade por seção.
3. **Hero:** vídeo loop mudo + poster + fallback mobile.
4. **Som:** linha-convite + maré fade-in + controle-respiração (seção 5).
5. **Jornada:** os 6 momentos com reveals/parallax suaves (seção 4).
6. **Ponte:** seção do gesto → checkout Kiwify customizado.
7. **Performance/acessibilidade:** LCP, lazy-load, reduced-motion, contraste.

### Prompt pronto para colar no Claude Code

```
Contexto: site da marca Verso Calmo (versocalmo.com.br), já no ar, neste repo.
Vou te passar o documento 16_experiencia_site.md como referência da experiência desejada.

PASSO 0 — antes de propor ou alterar qualquer coisa:
1. Leia a estrutura do projeto e me diga: framework/stack, como o site está
   organizado, quais seções já existem e o que já funciona (deploy, rotas, build).
2. NÃO assuma Next.js/Tailwind. NÃO reescreva o que funciona. Escopo mínimo.
3. Só depois desse relatório, proponha o plano de implementação em fases,
   seguindo o doc 16, e espere meu OK antes de codar.

Princípios fixos: mobile-first; silêncio inicial com som opcional por gesto;
fotos/vídeo reais de Garopaba (nada de IA/stock); tipografia Fraunces + Manrope;
paleta e tokens conforme a seção 3 do doc 16; preservar domínio e deploy atuais.
```

---

## 11. Próximos passos imediatos

1. **Validar** a direção de som (seção 5) e o arco de luz claro→escuro (seção 4).
2. **Confirmar o áudio:** existe gravação real do mar de Garopaba? Se não, é o provável gargalo da camada de som — definir captação ou copy neutra.
3. Levar o prompt da seção 10 ao Claude Code (Sonnet) e rodar o passo 0.
4. Em paralelo, iniciar a customização da Kiwify (seção 6) — pode andar sozinha.

---

> **Regra central deste arquivo**
>
> O site não convence. Ele faz sentir.
> A pessoa atravessa um dia em Garopaba — do silêncio ao desejo —
> e, quando o gesto de levar aparece, ela já o sentia antes de ler.
>
> Cinema na chegada. Silêncio como respeito. Som como convite.
> A venda é só a última frase de uma carta que já tinha sido escrita.

---

*Documento de execução — versão 0.1 (para validação) — sistema central da marca Verso Calmo.*
