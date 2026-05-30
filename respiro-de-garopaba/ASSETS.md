# Respiro de Garopaba — Assets necessários

Documento operacional. Lista todos os arquivos que precisam existir antes de publicar a página `/respiro-de-garopaba`.

---

## Wallpapers da coleção

Cinco imagens autorais de Garopaba. São o produto principal. Nenhuma pode faltar.

| Arquivo | Proporção | Mínimo | Ideal | Status |
|---|---|---|---|---|
| `assets/wallpapers/wallpaper-01.jpg` | 9:16 | 1080×1920 | 1440×2560 | **obrigatório** |
| `assets/wallpapers/wallpaper-02.jpg` | 9:16 | 1080×1920 | 1440×2560 | **obrigatório** |
| `assets/wallpapers/wallpaper-03.jpg` | 9:16 | 1080×1920 | 1440×2560 | **obrigatório** |
| `assets/wallpapers/wallpaper-04.jpg` | 9:16 | 1080×1920 | 1440×2560 | **obrigatório** |
| `assets/wallpapers/wallpaper-05.jpg` | 9:16 | 1080×1920 | 1440×2560 | **obrigatório** |

**Onde aparecem na página:** seção de preview (galeria de 5 cards verticais).

**Orientação estética:**
- Garopaba real — mar, céu, areia, morro, luz.
- Golden hour como tom dominante; manhãs com neblina aceitas.
- Paleta quente: âmbar, areia, sal, tinta de mar. Sem filtro saturado.
- Preset Verso Calmo aplicado (saturação −10/−15, highlights âmbar, sombras quentes, grão 2–4%).
- Sem frase, sem texto, sem logo.
- Sem marca d'água.
- Sem metadados de IA visíveis no EXIF quando possível (usar exportação limpa).
- Sem bordas, frames ou vinheta.
- Espaço negativo generoso — ao menos 40% de céu, mar ou areia.
- Imagem limpa: a pessoa vai usar como tela de celular, não como arte de parede.

**Formato de entrega ao cliente:** as cinco imagens em alta resolução, compactadas em `respiro-de-garopaba-wallpapers.zip`. Ver `CHECKOUT.md`.

---

## Mockup de celular

| Arquivo | Proporção sugerida | Mínimo | Status |
|---|---|---|---|
| `assets/wallpapers/mockup-celular-respiro.jpg` | 9:16 ou 9:19.5 | 800px largura | **obrigatório** |

**Onde aparece na página:** seção "produto em uso", entre "o que você recebe" e "origem".

**Orientação estética:**
- Celular real (iPhone ou Android), não mockup 3D genérico de site de template.
- Um dos cinco wallpapers aplicado na tela de bloqueio.
- Superfície natural ao fundo: areia, madeira clara, linho, pedra — coerente com o produto.
- Iluminação natural. Sem flash direto.
- Composição discreta: celular apoiado ou segurado de forma natural, não posado para foto de produto.
- Opcional: mão da Marina segurando o celular — humano e autoral.

---

## Foto de origem (Marina / editorial)

| Arquivo | Proporção | Mínimo | Status |
|---|---|---|---|
| `assets/garopaba/marina-origem-respiro.jpg` | 3:4 ou 4:5 | 800px largura | **recomendado** |

**Onde aparece na página:** seção "origem", ao lado do texto sobre Marina e Garopaba.

**Orientação estética:**
- Marina em Garopaba — de costas, perfil, silhueta distante, ou cena de bastidor.
- Sem pose de influenciadora ou foto de cara sorrindo para câmera.
- Luz natural, fim de tarde preferencial.
- Ou: cena editorial de Garopaba — detalhe de areia, mar, luz entrando na janela.
- O placeholder atual (gradiente âmbar → tinta de mar) mantém o layout intacto se a foto ainda não existir.

**Nota:** se não houver foto disponível na data de publicação, a página funciona bem sem ela. Priorizar wallpapers e mockup primeiro.

---

## Open Graph Image

| Arquivo | Dimensão exata | Status |
|---|---|---|
| `assets/og/respiro-de-garopaba.jpg` | 1200×630 px | **obrigatório antes de compartilhar** |

**Onde aparece:** preview de link ao compartilhar a URL em WhatsApp, Instagram, Twitter/X, iMessage, etc.

**Orientação estética:**
- Imagem de Garopaba (mar, céu, pôr do sol) ou mockup de celular com wallpaper.
- Pode ter título discreto sobreposto: "Respiro de Garopaba" em Fraunces Light, cor sal.
- Fundo não pode ser branco puro (some no preview de link de plataformas claras).
- Sem preço, sem urgência, sem badge.
- Coerente visualmente com a página.

**Como ativar:** após criar o arquivo, descomentar no `<head>` da página:
```html
<meta property="og:image" content="https://versocalmo.com.br/assets/og/respiro-de-garopaba.jpg">
<meta property="og:url" content="https://versocalmo.com.br/respiro-de-garopaba">
```

---

## Checklist antes de publicar

Marcar cada item antes de colocar a página no ar.

### Assets visuais

- [ ] `wallpaper-01.jpg` adicionado e visível na galeria
- [ ] `wallpaper-02.jpg` adicionado e visível na galeria
- [ ] `wallpaper-03.jpg` adicionado e visível na galeria
- [ ] `wallpaper-04.jpg` adicionado e visível na galeria
- [ ] `wallpaper-05.jpg` adicionado e visível na galeria
- [ ] `mockup-celular-respiro.jpg` adicionado e visível na seção produto
- [ ] `marina-origem-respiro.jpg` adicionado (ou aceitar placeholder por ora)
- [ ] `assets/og/respiro-de-garopaba.jpg` criado e tags OG descomentadas no `<head>`
- [ ] nenhum placeholder de gradiente visível nas posições de wallpaper

### Checkout

- [ ] `CHECKOUT_URL` trocado pelo link real em `<script>` no fim da página
- [ ] nome do produto no checkout: **Respiro de Garopaba** (sem variações)
- [ ] preço configurado: R$ 17
- [ ] arquivo ZIP de entrega nomeado: `respiro-de-garopaba-wallpapers.zip`
- [ ] teste de compra real concluído (cartão de teste ou compra de R$ 1)
- [ ] e-mail de entrega chegou na caixa correta
- [ ] link de download do e-mail funciona sem login
- [ ] arquivo ZIP baixa corretamente e contém os 5 wallpapers
- [ ] imagens do ZIP abrem sem erro em iOS e Android

### Mobile

- [ ] botão "levar para a minha tela" visível sem scroll no celular
- [ ] galeria de wallpapers rola horizontalmente no mobile sem travar
- [ ] preço e CTA "quero meu respiro" legíveis e clicáveis
- [ ] nenhum texto cortado ou elemento sobreposto
- [ ] testado em pelo menos um iPhone e um Android

### Distribuição

- [ ] URL final definida e configurada no servidor
- [ ] link da bio do @versocalmo atualizado
- [ ] ManyChat Fluxo B configurado para entregar o link da página (se aplicável)
- [ ] Open Graph testado via [opengraph.xyz](https://www.opengraph.xyz) ou similar

---

*Verso Calmo — Respiro de Garopaba — documento de assets v1.0*
