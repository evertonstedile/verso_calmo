# DESIGN.md — Verso Calmo

> Sistema visual. Fonte da verdade de tokens, tipografia, modos e anti-padrões. Substitui qualquer inferência do site atual. Os valores de cor abaixo já estão corrigidos — ver notas.

## Tipografia
- Display / títulos / frases: Fraunces — pesos 300 (Light) e 400 (Regular). Semibold só em destaque pontual. Nunca Black.
- Texto / UI / botões: Manrope — pesos 400 e 500. Semibold só em botão / microdestaque.
- Frases e títulos em minúsculas. Entrelinha generosa (1.3–1.5). Tracking levemente aberto em títulos (+20 a +40). Alinhamento à esquerda ou centro. Justificado nunca.
- Proibidas: Playfair, Lora, Montserrat, Poppins, Roboto, Open Sans, e scripts (Pacifico, Dancing Script, Great Vibes…).

## Cor — sistema de tokens

### Núcleo (9 cores oficiais do guia da marca)
| Token | HEX | Nome | Papel |
|---|---|---|---|
| --vc-sal | #F6EFE5 | Branco sal | Fundo principal claro; texto sobre escuro |
| --vc-areia-umida | #C8A77D | Areia úmida | Fundo secundário claro; texto auxiliar sobre escuro |
| --vc-ambar | #B66F32 | Âmbar de fim de tarde | Acento quente focal, raríssimo |
| --vc-ceu-quieto | #AFC7C9 | Azul céu quieto | Acento pontual, raro |
| --vc-rosa-memoria | #D8A6A0 | Rosa memória | Acento pontual, raro |
| --vc-verde-restinga | #69755C | Verde restinga | Detalhe pontual |
| --vc-noite-mar | #101417 | Noite de mar | Texto primário; fundo Modo Profundidade |
| --vc-mar-profundo | #1F3A3D | Mar profundo | Fundo escuro secundário — corrigido: faltava o # |
| --vc-tinta-mar | #3A2A22 | Marrom sombra | Dark quente para texto/tinta e ancoragem — corrigido de #3A4A55 |

Nota sobre --vc-tinta-mar: o valor antigo #3A4A55 era um azul-acinzentado frio, fora da paleta, que dava ao site uma temperatura "tech" em conflito com o DNA quente. O valor correto é #3A2A22 (Marrom sombra). O nome do token foi mantido (em vez de renomear em todo o CSS) por estabilidade — só o valor mudou.

### Derivados (tons intermediários legítimos do núcleo — não inventar novos)
| Token | HEX | Papel |
|---|---|---|
| --vc-areia-clara | #E8D9C2 | Areia mais clara (entre sal e areia-úmida); fundo de seção |
| --vc-ambar-suave | #D8915A | Âmbar mais suave |
| --vc-tinta-mar-suave | #6B5B50 | Tinta mais suave (warm), texto secundário — re-derivado warm (era #5a6770 frio) |
| --vc-borda | rgba(58,42,34,0.12) | Borda sutil — re-derivada do novo tinta-mar |

Derivados podem ser afinados para contraste, desde que permaneçam quentes. Nunca reintroduzir tons frios/slate.

### Regras de uso
- 80% da composição entre Branco sal, Areia úmida, Noite de mar e Marrom sombra.
- 15% Mar profundo + Verde restinga como apoio.
- 5% os acentos (Âmbar, Rosa memória, Azul céu quieto) — pontuam, nunca preenchem.
- Uma cor de destaque por seção. Âmbar é o acento focal — só onde o olhar deve pousar (o gesto de compra).
- Nunca preto puro (#000) nem branco puro (#FFF).

## Dois modos cromáticos
- Modo Respiro (claro — dominante): fundo Branco sal / Areia clara, texto Noite de mar / Marrom sombra. Onde se lê.
- Modo Profundidade (escuro): fundo Noite de mar / Mar profundo, texto Branco sal / Areia úmida. Reservado a hero, rodapé e seções densas (manifesto, frase editorial, ponte do produto).
- O site respira entre os dois ao longo do scroll, como a luz de um dia em Garopaba.

## Movimento
- Fades lentos (0.5–1s). Nunca animação saltada.
- Reveal no scroll (fade + leve subida) — já implementado, manter.
- Parallax sutil no hero.
- Vídeo do hero: loop mudo, autoplay, playsinline, + imagem-poster + fallback estático no mobile/4G.
- Som: opcional, ativado por gesto (ver 16_experiencia_site.md §5). Áudio = faixa extraída do próprio vídeo do hero. Respeitar prefers-reduced-motion.

## Layout
- Editorial. Mínimo 40% de espaço negativo por quadro.
- Um ponto focal por seção. Margens generosas. Mobile-first.

## Anti-padrões a bloquear (tells de slop / fora da marca)
- Gradiente em texto; sombra dura, contorno ou glow em texto.
- Caixa sólida atrás de frase; vinheta nos cantos; filtros nomeados.
- Mais de uma cor de destaque por seção; mais de uma frase principal por peça.
- Molduras, faixas coloridas, adesivos de "novo/promoção", selos com %.
- Stickers, GIFs, enquetes coloridas.
- Qualquer coisa com cara de IA / template / Canva genérico.

## tokens.css canônico (fonte única de verdade)
:root {
  /* Núcleo — paleta oficial */
  --vc-sal: #F6EFE5;
  --vc-areia-umida: #C8A77D;
  --vc-ambar: #B66F32;
  --vc-ceu-quieto: #AFC7C9;
  --vc-rosa-memoria: #D8A6A0;
  --vc-verde-restinga: #69755C;
  --vc-noite-mar: #101417;
  --vc-mar-profundo: #1F3A3D;        /* corrigido: faltava o # */
  --vc-tinta-mar: #3A2A22;           /* corrigido: era #3A4A55 (azul frio, fora da paleta) */
  /* Derivados */
  --vc-areia-clara: #E8D9C2;
  --vc-ambar-suave: #D8915A;
  --vc-tinta-mar-suave: #6B5B50;     /* re-derivado warm */
  --vc-borda: rgba(58, 42, 34, 0.12);/* re-derivado do novo tinta-mar */
}
