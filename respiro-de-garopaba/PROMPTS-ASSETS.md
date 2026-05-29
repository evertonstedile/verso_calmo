# Respiro de Garopaba — Direção visual e prompts de produção

Documento de referência autossuficiente. Pode ser lido em qualquer sessão, sem contexto anterior.
Contém tudo que é necessário para produzir os assets finais da coleção.

---

## Contexto rápido

**Verso Calmo** é uma marca autoral criada por Marina Gomes em Garopaba/SC.
**Respiro de Garopaba** é a primeira coleção paga: 5 wallpapers autorais para celular, R$ 17.

A marca é editorial, contemplativa, premium e silenciosa. Nada de wellness genérico, nada de infoproduto, nada de banco de imagem.

---

## 1. Direção visual geral

### Atmosfera

Fim de tarde em Garopaba. Não a praia turística — a praia de quem mora lá e ainda consegue ficar quieto olhando pro mar às 17h30 de uma terça. Silêncio de qualidade. Presença. A sensação de que o tempo desacelerou por um minuto.

### Luz

- **Assinatura:** golden hour — 30 minutos antes do pôr do sol até 20 minutos depois.
- Luz lateral, sombras longas, gradiente quente no céu.
- Pode ser: manhã com neblina leve, hora azul, dia nublado com intenção narrativa.
- Evitar: sol a pino, luz de meio-dia dura, brilho plástico de foto de veraneio.

### Cores

Paleta restrita. Sem vibrância artificial.

| Token | HEX | Função na imagem |
|---|---|---|
| Sal | `#F6EFE5` | altas luzes, céu claro, areia seca |
| Areia clara | `#E8D9C2` | areia úmida, texturas neutras |
| Areia úmida | `#C8A77D` | rochas, pedras, tons médios |
| Âmbar suave | `#D8915A` | luz de entardecer, reflexo na água |
| Tinta de mar | `#3A4A55` | mar em profundidade, sombras frias |
| Céu quieto | `#AFC7C9` | céu de manhã, água rasa |

**Tratamento de cor (preset Verso Calmo):**
- Saturação geral: −10 a −15
- Highlights: levemente âmbar (+10 amarelo, +5 laranja)
- Sombras: levemente quentes (−5 azul, +5 vermelho), nunca esmagadas
- Curva: S suave (contraste editorial, não dramático)
- Grão: 2–4% para textura analógica
- Sem HDR, sem clareamento forçado, sem filtros nomeados

### Textura

Análoga, ligeiramente granulada. Não existe imagem perfeitamente limpa nessa estética — o grão é parte da linguagem. Pele da imagem visível.

### Enquadramento

- Regra dos terços como base
- Um único ponto focal por imagem
- Mínimo **40% de espaço negativo** (céu, mar, areia, neblina)
- Equivalente 24–50mm. Sem grande-angular extrema
- Horizonte pode estar levemente inclinado para respirar — mas não como efeito
- Composição vertical (9:16). Pensar no que aparece atrás dos ícones do celular — evitar detalhes densos no terço central inferior (onde ficam os ícones)

### O que evitar (lista direta)

- Fotos de turista (guarda-sol, biquíni, selfie, mosaico colorido)
- Saturação de aplicativo
- Filtros com nome (Clarendon, Valencia, Nashville)
- Efeitos de brilho, lens flare artificial
- Clichê de praia motivacional
- Texto, logo, marca d'água, frase sobreposta
- Pessoas no centro com rosto nítido
- Surfe, esportes, agitação
- Composição simétrica demais (parece banco de imagem)
- Aparência de IA (iluminação impossível, proporções erradas, textura de plástico)

### Unidade da coleção

Os 5 wallpapers precisam parecer feitos pela mesma pessoa no mesmo lugar. A variação é de tema e hora do dia — não de estética. Aplicar o mesmo preset em todos antes de avaliar. Se dois parecem de "planetas diferentes", refazer.

---

## 2. Os 5 wallpapers

### Wallpaper 01 — Amanhecer

**Nome interno:** `amanhecer`
**Intenção emocional:** começo suave. A sensação de um dia que ainda não tem decisão tomada. Promessa calma.

**Descrição visual:**
Horizonte de Garopaba ao amanhecer. Céu em gradiente de azul-cinza para âmbar pálido. Mar calmo, levemente reflexivo. Ausência de pessoas. A luz ainda não chegou inteira — está chegando. Espaço negativo dominante no terço superior (céu). Areia úmida no primeiro plano, sem detalhes distraidores.

**Prompt principal (para geração ou referência de seleção):**
```
Garopaba beach at dawn, 9:16 vertical composition, calm flat sea reflecting pale amber sky,
blue-gray gradient sky transitioning to warm light near the horizon, wet sand foreground,
no people, minimal composition, editorial photography style, film grain 4%,
Portra 800 color palette, warm shadows, desaturated highlights,
vast empty sky occupying top 50% of frame, contemplative mood, soft coastal light,
analog warmth, muted tones, no text, no watermark
```

**Negative prompt:**
```
tourists, people, surfing, umbrellas, colorful objects, oversaturated, HDR, lens flare,
neon, artificial light, sharp midday sun, blue vivid sky, instagram filter,
text, watermark, logo, symmetrical composition, stock photo look, AI artifacts,
plastic texture, impossible lighting
```

**Instrução de exportação:**
- Exportar em JPEG qualidade 92–95
- Resolução mínima 1080×1920, ideal 1440×2560
- Achatar em sRGB antes de exportar
- Remover metadados EXIF (ver seção de metadados)

**Nome do arquivo:** `wallpaper-01.jpg`
**Pasta:** `assets/wallpapers/`

---

### Wallpaper 02 — Mar calmo

**Nome interno:** `mar-calmo`
**Intenção emocional:** pausa. Não há nada urgente aqui. O mar existe sem pedir nada de volta.

**Descrição visual:**
Vista do mar de Garopaba em hora quieta — meio da manhã com luz suave ou tarde encoberta. Ondas pequenas ou superfície quase plana. Horizonte centralizado no terço inferior ou médio. Cor do mar: mistura de tinta de mar e azul acinzentado. Céu: branco-sal ou cinza luminoso. Sem praia visível — só mar e céu. Proporção dominada pelo céu. Textura de água visível mas não violenta.

**Prompt principal:**
```
Garopaba ocean view, 9:16 vertical, flat calm sea, overcast soft light or gentle morning haze,
desaturated blue-gray water, pale off-white sky, horizon in lower third of frame,
vast sky dominating composition, no beach, no people, no objects,
editorial travel photography, film grain, muted coastal palette,
Portra 160 feel, contemplative, empty, spacious, analog quality
```

**Negative prompt:**
```
waves crashing, dramatic stormy sky, oversaturated blue, vivid turquoise,
tourists, boats, surfboards, colorful objects, midday harsh light,
HDR, instagram filter, sharp shadows, lens flare, AI glow,
text, watermark, busy composition, stock photo
```

**Instrução de exportação:** igual ao wallpaper 01.
**Nome do arquivo:** `wallpaper-02.jpg`
**Pasta:** `assets/wallpapers/`

---

### Wallpaper 03 — Céu amplo

**Nome interno:** `ceu-amplo`
**Intenção emocional:** respiro. Quando a tela se abre, a pessoa sente que há espaço. Não aperto.

**Descrição visual:**
Composição dominada pelo céu — 70–80% da imagem. Céu de fim de tarde em Garopaba com nuvens altas e leves ou céu limpo em gradiente âmbar-azul. No terço inferior: linha de terra ou mar com morros ao fundo, silhueta suave. Luz dourada rasando horizontalmente. Sensação de altitude emocional, não geográfica — como se houvesse ar suficiente.

**Prompt principal:**
```
Garopaba coastal landscape, 9:16 vertical, vast sky composition, sky occupying 75% of frame,
golden hour late afternoon light, amber-blue gradient sky, soft cumulus clouds or clear sky,
distant hillside silhouette and ocean line in bottom quarter, horizontal warm light rays,
no people, film photography aesthetic, Portra 400 palette, analog grain,
warm highlights cool shadows, editorial minimalism, contemplative
```

**Negative prompt:**
```
dramatic storm, dark ominous sky, oversaturated sunset, cliché orange sky,
tourists, buildings, power lines, flags, cars, boats visible,
HDR, lens flare, Instagram filter, busy foreground, sharp artificial light,
text, watermark, AI artifacts, surreal colors
```

**Instrução de exportação:** igual ao wallpaper 01.
**Nome do arquivo:** `wallpaper-03.jpg`
**Pasta:** `assets/wallpapers/`

---

### Wallpaper 04 — Detalhe natural

**Nome interno:** `detalhe`
**Intenção emocional:** presença. Slow down. A menor coisa tem textura. Essa imagem convida a parar de correr.

**Descrição visual:**
Close editorial em detalhe natural de Garopaba — pode ser: areia molhada com padrões de onda, textura de rocha com musgo sutil, espuma de onda que está chegando, reflexo de luz na areia seca, rastro de onda, casca de algo natural. Sem pessoas. Composição abstrata mas reconhecível. Paleta quente e terrosa. Profundidade de campo reduzida se for close — foco seletivo suave.

**Prompt principal:**
```
macro editorial detail of Garopaba beach, 9:16 vertical, sand patterns with wave marks,
or wet rock texture, or receding wave foam on sand, warm earth tones,
amber and sand palette, shallow depth of field, soft bokeh background,
late afternoon warm light, analog film texture, Portra 800 grain,
no people, no objects, abstract natural texture, contemplative mood,
editorial nature photography style
```

**Negative prompt:**
```
seashells arranged artificially, colorful objects, people, feet, hands posed,
oversaturated, vivid colors, sharp clean commercial look, stock photo,
Instagram filter, HDR, artificial light, plastic texture, AI glow, unnatural colors,
text, watermark, logo
```

**Instrução de exportação:** igual ao wallpaper 01.
**Nome do arquivo:** `wallpaper-04.jpg`
**Pasta:** `assets/wallpapers/`

---

### Wallpaper 05 — Entardecer

**Nome interno:** `entardecer`
**Intenção emocional:** fechamento. O dia que está acabando mas termina bem. A luz mais bonita do dia.

**Descrição visual:**
Pôr do sol em Garopaba — mas sem o clichê laranja-vermelho saturado. Tons âmbar, dourado-areia, com o mar recebendo a luz. Silhueta de morro ou vegetação de restinga no terceiro inferior. Céu com degradê quente mas contido — nunca gritante. Pode ter uma pessoa de costas ou silhueta distante, muito pequena, como ponto de escala humana sem ser foco.

**Prompt principal:**
```
Garopaba sunset, 9:16 vertical, muted golden hour, amber and warm sand tones,
calm ocean reflecting golden light, distant hill or restinga silhouette in lower frame,
desaturated warm sky gradient, no saturated orange or red,
optional: distant tiny human silhouette facing ocean, back view only,
analog warmth, film grain 3-4%, Portra 800 palette, editorial photography,
contemplative mood, no text, no watermark, no harsh contrasts
```

**Negative prompt:**
```
oversaturated orange red sunset, cliché postcard sunset, Instagram filter,
people posing facing camera, tourists, surfboards, umbrellas,
HDR, lens flare, vivid colors, neon sky, bright artificial colors,
text, watermark, logo, symmetrical composition, stock photo, AI artifacts
```

**Instrução de exportação:** igual ao wallpaper 01.
**Nome do arquivo:** `wallpaper-05.jpg`
**Pasta:** `assets/wallpapers/`

---

## 3. Mockup do celular

**Arquivo final:** `assets/wallpapers/mockup-celular-respiro.jpg`
**Proporção:** 9:16 vertical ou 9:19.5 (retrato de celular)
**Resolução mínima:** 800px de largura

### Direção

Não é um mockup de site de template com fundo branco e sombra perfeita. É uma foto real — ou próxima de real — de um celular com um dos wallpapers aplicado, em ambiente coerente com a marca.

**Ambiente sugerido:**
- Celular apoiado em mesa de madeira clara ou linho natural
- Luz natural entrando lateralmente (janela, não flash)
- Fundo fora de foco: madeira, pedra, tecido cru, areia ou parede branco-sal
- Pode haver um objeto discreto ao lado: xícara de café, folha seca, pedra pequena — sem exagero
- A tela deve estar ligada mostrando um dos wallpapers da coleção

**Prompt principal:**
```
editorial product photo, iPhone or Android smartphone lying on natural wood surface or linen fabric,
screen showing calm ocean landscape wallpaper in warm amber tones,
natural side window light, shallow depth of field, soft bokeh background,
warm analog tones, no harsh shadows, lifestyle editorial style,
film grain texture, no people, no text, no reflections on screen,
premium minimal composition, Garopaba inspired mood, muted earth tones
```

**Negative prompt:**
```
white studio background, harsh flash, perfect clean shadows, 3D render, fake mockup,
floating phone, neon colors, AI generated look, oversaturated,
people faces, hands posed awkwardly, objects overloaded,
cheap product photo, busy background, HDR, lens flare, text overlay
```

**Instrução de composição:**
- Celular em ângulo de 15–25° (não totalmente plano, não em pé)
- Tela visível e legível — o wallpaper deve ser reconhecível
- Mais de 50% da imagem deve ser o celular + wallpaper
- Fundo ocupa o restante — discreto, não compete

**Instrução de exportação:**
- JPEG 90–92
- Largura mínima 800px
- Achatar em sRGB
- Remover metadados EXIF
- Nome: `mockup-celular-respiro.jpg`

---

## 4. Imagem origem — Marina em Garopaba

**Arquivo final:** `assets/garopaba/marina-origem-respiro.jpg`
**Proporção recomendada:** 3:4 ou 4:5 (retrato)
**Resolução mínima:** 800px de largura

### Direção

Esta imagem aparece na seção "origem" da página de venda, ao lado do texto sobre Marina e Garopaba. Ela não precisa mostrar o rosto da Marina com clareza — na verdade, é melhor que não mostre, a não ser que seja uma foto real dela com intenção editorial.

**Estética desejada:** presença humana sutil. Fotografia documental, não produzida. Como se alguém tivesse fotografado a Marina sem que ela soubesse.

**Opções em ordem de preferência:**

1. **Foto real de referência disponível:** usar e tratar com o preset Verso Calmo. Não alterar expressão, não suavizar pele artificialmente, não mudar a luz dramática.

2. **Sem foto real:** gerar ou selecionar imagem de costas ou perfil suave de uma mulher em Garopaba — na beira do mar, olhando o horizonte, de câmera na mão, sentada numa pedra, ou caminhando na areia com o vento.

3. **Alternativa editorial:** cena de Garopaba sem pessoa — janela com vista para o mar, mesa com caderno aberto e xícara, câmera fotográfica apoiada em superfície natural.

**Prompt principal (sem foto de referência):**
```
editorial portrait, woman seen from behind on Garopaba beach, Brazil,
standing or sitting looking at the ocean, late afternoon warm light,
long dark hair, simple clothing, no pose, natural candid moment,
analog film photography aesthetic, Portra 400 colors, warm tones,
shallow depth of field, ocean background slightly out of focus,
no face visible, no glamour, no commercial styling,
documentary feel, authentic Brazilian coastal mood
```

**Negative prompt:**
```
face clearly visible, glamour pose, influencer style, posed for camera,
commercial photography, studio lighting, perfect makeup visible,
tourists, bikini, fashion, oversaturated, HDR, Instagram filter,
text, watermark, AI artifacts, plastic skin, impossible lighting,
people in background, busy composition
```

**Instrução de uso com foto real de referência:**
- Se houver uma foto real da Marina disponível: usar como base
- Aplicar preset Verso Calmo (reduzir saturação, tons quentes nas altas luzes)
- Não suavizar artificialmente — textura real é parte da linguagem
- Recortar para proporção 3:4 se necessário, com horizonte no terço superior
- Exportar em JPEG 92, sRGB, sem metadados

**Nome do arquivo:** `marina-origem-respiro.jpg`
**Pasta:** `assets/garopaba/`

---

## 5. Open Graph image

**Arquivo final:** `assets/og/respiro-de-garopaba.jpg`
**Dimensão exata:** 1200×630 px (landscape, proporção ~1.91:1)
**Uso:** preview de link ao compartilhar a URL em WhatsApp, Instagram, Telegram, iMessage, etc.

### Direção

Deve funcionar em miniatura (WhatsApp mostra ~300px de largura). Precisa ser reconhecível em pequena escala — a imagem não pode ser um detalhe muito sutil.

**Layout sugerido:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [imagem de Garopaba ou mockup de celular ocupando 65%]   │
│                                                             │
│   Respiro de Garopaba          [verso calmo]               │
│   wallpapers autorais                                       │
│   para o seu celular                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Fundo: foto de Garopaba (mar, céu, golden hour) OU o mockup de celular
- Overlay escuro suave na metade inferior para legibilidade do texto (30–40% opacidade)
- Texto: "Respiro de Garopaba" em Fraunces Light, cor sal (#F6EFE5), esquerda inferior
- Subtítulo opcional: "wallpapers autorais para o seu celular" em Manrope, menor, mesma cor com 70% opacidade
- Assinatura discreta: "verso calmo" canto direito inferior, Fraunces Light, menor

**Prompt principal (para gerar ou usar como referência):**
```
1200x630 landscape image, Garopaba beach at golden hour, warm amber tones,
calm ocean and sky, minimal composition, vast sky in upper half,
lower half with subtle dark overlay gradient for text legibility,
text "Respiro de Garopaba" in elegant serif font lower left in off-white,
small text "wallpapers autorais para o seu celular" below title,
small text "verso calmo" lower right corner,
editorial premium aesthetic, film grain, warm analog tones, no clutter
```

**Instrução de produção manual (Canva ou equivalente):**
1. Base: usar `wallpaper-01.jpg` ou `wallpaper-05.jpg` recortado para 1200×630
2. Adicionar retângulo gradiente preto transparente na metade inferior (de 0% a 45% opacidade)
3. Adicionar texto "Respiro de Garopaba" — Fraunces Light 42–48pt, cor #F6EFE5
4. Adicionar subtítulo — Manrope Regular 18–20pt, cor rgba(246,239,229,0.7)
5. Adicionar "verso calmo" canto direito inferior — Fraunces Light 16pt
6. Exportar em JPEG 90, 1200×630 exatos

**Observação crítica:** Testar via [opengraph.xyz](https://www.opengraph.xyz) ou ferramenta similar antes de publicar. Especialmente no WhatsApp, que recorta de forma diferente.

**Nome do arquivo:** `respiro-de-garopaba.jpg`
**Pasta:** `assets/og/` (criar pasta se não existir)

---

## 6. Metadados — orientação de limpeza

Imagens geradas por IA frequentemente carregam metadados que identificam a ferramenta geradora (ComfyUI, Stable Diffusion, Midjourney, etc.) nos campos EXIF/XMP/IPTC.

**Por que remover:**
- Algumas plataformas de venda e redes sociais leem esses metadados
- Evitar exposição desnecessária da ferramenta de produção
- Manter a autoria editorial da Verso Calmo preservada

**Como remover (opções):**

Opção 1 — ExifTool (linha de comando):
```bash
exiftool -all= assets/wallpapers/wallpaper-01.jpg
# ou em lote:
exiftool -all= assets/wallpapers/*.jpg
```

Opção 2 — Exportar do Lightroom/Photoshop:
- Exportar como "Arquivo novo" (não "Salvar")
- Desmarcar opção "Incluir metadados" ou selecionar apenas "Copyright"
- Formato JPEG, qualidade 92–95, espaço sRGB

Opção 3 — Squoosh (web, sem instalação):
- Abrir a imagem em squoosh.app
- Exportar em JPEG com qualidade 92
- Metadados não são preservados por padrão

**Verificar após limpeza:**
```bash
exiftool assets/wallpapers/wallpaper-01.jpg | grep -i "software\|creator\|comment\|source"
```
Não deve retornar referência a ferramentas de IA.

---

## 7. Checklist de produção visual

Executar para cada arquivo antes de mover para a pasta final.

### Para cada wallpaper (01–05):
- [ ] Proporção 9:16 confirmada
- [ ] Resolução mínima 1080×1920
- [ ] Preset Verso Calmo aplicado
- [ ] Sem texto, logo, marca d'água
- [ ] Sem metadados de IA (ver seção 6)
- [ ] Nitidez adequada — não borrado, não oversharpened
- [ ] Grão analógico visível mas não excessivo
- [ ] Teste visual: olhar por 10s. Parece Garopaba real? Parece Verso Calmo?
- [ ] Nome correto: `wallpaper-0X.jpg`
- [ ] Pasta correta: `assets/wallpapers/`

### Para o mockup:
- [ ] Celular visível com wallpaper legível na tela
- [ ] Ambiente natural coerente com a marca
- [ ] Sem fundo branco genérico
- [ ] Proporção retrato (9:16 ou similar)
- [ ] Nome correto: `mockup-celular-respiro.jpg`
- [ ] Pasta correta: `assets/wallpapers/`

### Para a imagem origem:
- [ ] Proporção 3:4 ou 4:5
- [ ] Presença humana sutil (ou cena editorial sem pessoa)
- [ ] Sem rosto nítido a não ser que seja foto real da Marina com intenção
- [ ] Preset Verso Calmo aplicado
- [ ] Nome correto: `marina-origem-respiro.jpg`
- [ ] Pasta correta: `assets/garopaba/`

### Para a OG image:
- [ ] Dimensão exata: 1200×630
- [ ] Título legível em miniatura
- [ ] Testado no WhatsApp ou via opengraph.xyz
- [ ] Nome correto: `respiro-de-garopaba.jpg`
- [ ] Pasta correta: `assets/og/` (criar se não existir)

### Após todos os arquivos prontos:
- [ ] Abrir `http://localhost:8080/respiro-de-garopaba/` localmente
- [ ] Confirmar que os 5 cards da galeria mostram fotos reais (não gradientes)
- [ ] Confirmar que o mockup aparece na seção produto
- [ ] Confirmar que a imagem origem aparece na seção origem
- [ ] Testar no celular (iOS e Android se possível)
- [ ] Confirmar contraste e legibilidade do texto sobre as imagens
- [ ] Só depois: configurar checkout e CHECKOUT_URL

---

## 8. Observações críticas

**Sobre autenticidade:**
Não usar qualquer imagem bonita de praia. Garopaba tem identidade visual específica — morro, restinga, mar com cor particular, luz que vem de sul. Se a imagem puder ser de Florianópolis, de Portugal ou do Havaí, ela não serve.

**Sobre unidade:**
Os 5 wallpapers são vendidos como coleção. Precisam funcionar juntos. Testar os 5 lado a lado antes de aprovar — se um destoar visivelmente, refazer.

**Sobre uso como tela de celular:**
Wallpaper precisa funcionar atrás dos ícones do sistema. O terço central inferior da imagem é onde ficam os ícones de apps. Evitar detalhes muito contrastados ou texto nessa área. Fundos mais uniformes funcionam melhor que composições com muita informação visual fragmentada.

**Sobre frases:**
Os wallpapers desta coleção são **sem frase**. Este é o diferencial declarado na copy da página: "sem frase. só paisagem. só respiro." Adicionar frase significa mudar o produto. Não fazer.

**Sobre estética turística:**
Garopaba é famosa. Existe um universo de fotos genéricas da cidade online. Nenhuma delas serve. A estética Verso Calmo é a versão quieta de Garopaba — não a versão da Tripadvisor.

**Sobre a OG image:**
Testar em WhatsApp real antes de publicar. O WhatsApp recorta a imagem verticalmente no preview — o que parece bom no desktop pode cortar o título no celular. Deixar margem de segurança de 60px nas bordas.

---

*Verso Calmo — Respiro de Garopaba — direção visual e prompts v1.0*
