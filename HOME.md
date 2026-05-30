# Verso Calmo — Home (`index.html`)

Documentação operacional da página inicial do site. Leitura rápida para retomar após reset.

---

## O que é

A home é a entrada editorial da Verso Calmo — não é página de venda. É uma experiência de marca que apresenta a Marina, o território, o acervo e aponta para o produto (Respiro de Garopaba).

**URL:** `/` (raiz do projeto)
**Arquivo:** `index.html`
**Status:** estrutura completa, aguardando assets visuais (mesmos que o Respiro de Garopaba aguarda).

---

## Seções

| # | Seção | Fundo | Conteúdo |
|---|---|---|---|
| 1 | Hero Sensorial | Foto Garopaba (parallax) | Headline, tagline, assinatura, scroll indicator |
| 2 | Manifesto | `--vc-noite-mar` escuro | Declaração de identidade da marca |
| 3 | Marina | `--vc-sal` claro | Bio em primeira pessoa + foto |
| 4 | Território | `--vc-areia-clara` | Garopaba como personagem |
| 5 | Acervo em Movimento | `--vc-sal` | 4 cards com vídeo hover/viewport |
| 6 | Respiro de Garopaba | `--vc-mar-profundo` | Ponte para o produto + prévia dos wallpapers |
| 7 | Palavra + Paisagem | `--vc-noite-mar` | Frase editorial em Fraunces itálico |
| — | Rodapé | `--vc-noite-mar` | Logo, @versocalmo, links, copyright |

---

## Assets necessários

### Hero
| Arquivo | Status | Notas |
|---|---|---|
| `assets/garopaba/01-hero-garopaba.jpg` | ✅ existe (1,5 MB) | Recomendado comprimir para < 500 KB |

### Marina
| Arquivo | Status | Notas |
|---|---|---|
| `assets/garopaba/marina-origem-respiro.jpg` | ❌ pendente | Placeholder: gradiente âmbar → areia |

### Vídeos do Acervo (4 arquivos)
| Arquivo | Status | Notas |
|---|---|---|
| `assets/video/garopaba-areia.mp4` | ❌ pendente | + poster correspondente |
| `assets/video/garopaba-luz.mp4` | ❌ pendente | + poster correspondente |
| `assets/video/garopaba-restinga.mp4` | ❌ pendente | + poster correspondente |
| `assets/video/garopaba-ondas.mp4` | ❌ pendente | + poster correspondente |

Ver especificações em `assets/video/README.md`.

### Wallpapers (Seção Respiro)
Os mesmos 5 wallpapers de `respiro-de-garopaba/`. Ver `respiro-de-garopaba/ASSETS.md`.

---

## Interações implementadas

### Nav transparente → fosco
- Inicia transparente sobre o hero (texto branco)
- Após 60px de scroll: `backdrop-filter: blur(14px)` + fundo sal semi-opaco
- Cor do texto: branco → tinta-mar

### Parallax hero
- Somente se `prefers-reduced-motion` não estiver ativo
- Fator: 0,25 (imagem se move a 25% da velocidade do scroll)
- Implementação: `requestAnimationFrame` + `transform: translateY`
- Cobertura: `top: -25%; height: 130%` (garante sem buracos até scrollY = 100vh)

### Reveal de entrada
- Mesmo padrão do Respiro de Garopaba
- `IntersectionObserver`, threshold 12%, rootMargin `-36px`
- Classes: `.reveal`, `.reveal-delay-1/2/3`
- Respeitado `prefers-reduced-motion`

### Cards de vídeo
- Desktop (`hover: hover`): `mouseenter` inicia vídeo, `mouseleave` pausa e reseta
- Mobile (`hover: none`): `IntersectionObserver` com threshold 0,6 (60% visível)
- Ambos: `focusin/focusout` para teclado (desktop)
- Todos os vídeos: `muted`, `playsinline`, `loop`, `preload="none"`
- Fallback: gradiente + poster se vídeo não existir

---

## Ponte para o Respiro (seção 6) — tom de preview, não de venda

A home **não é página de venda**. Enquanto o checkout do Respiro está pendente
(`CHECKOUT_URL = '#checkout-pendente'` em `respiro-de-garopaba/index.html`), a
ponte fica em tom editorial:

- preço: **"em preparação"** (não exibir "R$ 17" aqui antes do checkout existir);
- CTA: **"conhecer o respiro"** (evitar "ver a coleção", "comprar", "garantir").

**Quando o checkout estiver pronto e testado** (ver `respiro-de-garopaba/CHECKOUT.md`
e `AUDITORIA-FINAL.md`), aí sim pode-se reativar o preço e um CTA mais direto na
ponte, se a Marina quiser. Até lá, manter o tom de preview.

---

## O que não tocar

- Copy: headline, manifesto, bio, frase editorial — aprovados
- Estrutura de seções e ordem
- Tokens CSS (`:root`)
- Padrão de acessibilidade (skip-link, aria-labels, sr-only)
- Nav link para `respiro-de-garopaba/`
- Tom da ponte do Respiro enquanto o checkout não estiver no ar (ver acima)

---

## O que pode ser ajustado quando os assets chegarem

1. **Comprimir hero:** `01-hero-garopaba.jpg` (1,5 MB) → meta < 500 KB para mobile
2. **Ativar OG:** descomentar tags `og:image` / `og:url` no `<head>` após definir domínio
3. **Posters dos vídeos:** `assets/video/posters/garopaba-*.jpg` — a seção os usa como `<img>` de fallback
4. **Foto da Marina:** `assets/garopaba/marina-origem-respiro.jpg` — substitui o gradiente na seção 3

---

## Mapa de arquivos da home

```
verso_calmo/
├── index.html               ← esta página
├── HOME.md                  ← este documento
├── assets/
│   ├── garopaba/
│   │   ├── 01-hero-garopaba.jpg   ✅ (hero, parallax)
│   │   └── marina-origem-respiro.jpg  ❌ (seção Marina)
│   ├── video/
│   │   ├── README.md
│   │   ├── garopaba-areia.mp4     ❌ (card 1)
│   │   ├── garopaba-luz.mp4       ❌ (card 2)
│   │   ├── garopaba-restinga.mp4  ❌ (card 3)
│   │   ├── garopaba-ondas.mp4     ❌ (card 4)
│   │   └── posters/
│   │       ├── garopaba-areia.jpg    ❌
│   │       ├── garopaba-luz.jpg      ❌
│   │       ├── garopaba-restinga.jpg ❌
│   │       └── garopaba-ondas.jpg    ❌
│   └── wallpapers/
│       ├── wallpaper-01.jpg  ❌  (prévia na seção Respiro)
│       └── ... (02–05)       ❌
```

---

## Próximo prompt recomendado (pós-reset)

> Estou retomando a home da Verso Calmo. A estrutura, interações e documentação já estão prontas e commitadas.
>
> 1. Leia `HOME.md` para recuperar contexto.
> 2. Vou adicionar os vídeos em `assets/video/` (garopaba-areia, garopaba-luz, garopaba-restinga, garopaba-ondas — MP4 + posters JPG).
> 3. Confirme que os cards de vídeo carregam poster e reproduzem ao hover.
> 4. Comprima o hero (`01-hero-garopaba.jpg`) para < 500 KB.
> 5. Quando tiver foto da Marina, adicione em `assets/garopaba/marina-origem-respiro.jpg` e confirme que a seção funciona.
> 6. Não altere copy, seções, tokens ou interações.

---

*Verso Calmo — documentação da home v1.0*
