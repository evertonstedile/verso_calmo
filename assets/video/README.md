# assets/video — Vídeos do acervo

Pasta para os vídeos usados na seção "Acervo em Movimento" da home (`index.html`).

## Arquivos esperados

| Arquivo | Descrição | Onde aparece |
|---|---|---|
| `garopaba-areia.mp4` | Detalhe da areia molhada na beira do mar | Card 1 — "areia molhada" |
| `garopaba-luz.mp4` | Reflexos dourados da luz no entardecer | Card 2 — "luz no entardecer" |
| `garopaba-restinga.mp4` | Vegetação da restinga ao vento | Card 3 — "restinga ao vento" |
| `garopaba-ondas.mp4` | Ondas chegando — plano aberto | Card 4 — "ondas chegando" |

## Pasta `posters/`

Um frame representativo de cada vídeo, usado como:
- Thumbnail antes de reproduzir
- Fallback quando o vídeo não carrega

| Arquivo | Vídeo correspondente |
|---|---|
| `posters/garopaba-areia.jpg` | `garopaba-areia.mp4` |
| `posters/garopaba-luz.jpg` | `garopaba-luz.mp4` |
| `posters/garopaba-restinga.jpg` | `garopaba-restinga.mp4` |
| `posters/garopaba-ondas.jpg` | `garopaba-ondas.mp4` |

## Especificações

### Vídeos

- **Formato:** MP4 com codec H.264 (máxima compatibilidade)
- **Duração:** 4–12 segundos (loop)
- **Resolução:** 1080×1920 (9:16 vertical) ou 1080×1080 (quadrado)
- **Tamanho:** idealmente < 4 MB por arquivo. Comprimidos para web (CRF 28–32 no ffmpeg)
- **Áudio:** sem áudio (exportar `muted` / `an`)
- **Comportamento na página:** loop automático, sem som, sem controles — ativa ao hover (desktop) ou ao entrar 60% na viewport (mobile)

### Posters

- **Formato:** JPEG
- **Resolução:** mesma proporção do vídeo (9:16 ou 1:1)
- **Largura mínima:** 600 px
- **Tamanho:** < 80 KB (comprimidos)
- **Conteúdo:** frame representativo do vídeo — prefira o frame mais belo, não o primeiro frame

## Conversão com ffmpeg (referência)

```bash
# Comprimir vídeo para web
ffmpeg -i original.mov -vcodec libx264 -crf 30 -an -movflags faststart garopaba-areia.mp4

# Extrair poster do frame mais representativo (ex: frame 2s)
ffmpeg -i garopaba-areia.mp4 -ss 00:00:02 -vframes 1 -q:v 3 posters/garopaba-areia.jpg
```

## Sem vídeos ainda?

A página funciona sem os arquivos. Os cards exibem os gradientes de cor da marca no lugar dos vídeos. Não aparece erro nem quebra de layout.

---

*Verso Calmo — assets de vídeo — v1.0*
