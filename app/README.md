# app/ — PWA Verso Calmo (v1)

Segundo cômodo da mesma casa técnica do site: HTML/CSS/JS puro, sem build, deploy Vercel.
Vive em `versocalmo.com.br/app/`. Herda `/tokens.css` e as fontes (Fraunces + Manrope) do site — sem duplicar.

## Estado — v1 completa (4 telas)
- **Shell + PWA**: `manifest.webmanifest` + `sw.js` (navegação network-first, dados network-first, demais assets stale-while-revalidate; cache versionado). Navegação inferior discreta, dual-mode Respiro/Profundidade.
- **Tela 1 — Respiro do dia**: lê `data/respiros.json`, respiro determinístico por data, swipe do acervo, botões guardar/presentear.
- **Tela 2 — Guardados**: grade editorial (storage.js), visor em tela cheia (presentear/remover) com foco gerenciado.
- **Tela 3 — Loja**: cartas de `data/colecoes.json`, gesto "levar comigo" → checkout Kiwify (`checkout_url`) ou, enquanto pendente, a página `/respiro-de-garopaba/`.
- **Tela 4 — Presentear**: respiro pré-selecionado + Web Share API gerando `versocalmo.com.br/r/<id>` (página servida pelo site, em `/r/`).
- Camadas isoladas: `storage.js` (localStorage) e `dados.js` (loader + `esc`).

## Rodar local
```bash
# na RAIZ do repo (não dentro de /app), para os caminhos absolutos
# /assets e /tokens.css resolverem como em produção:
python3 -m http.server 8080
# abrir: http://localhost:8080/app/
```

## Pendências conhecidas
- **Ícones PWA em PNG** (192 / 512 / maskable): hoje há SVG em `assets/icons/`. Exportar PNG melhora a instalação no iOS/Android.
- **Banco de respiros**: `data/respiros.json` traz só um seed. Empacotar 30–60 pares foto+frase, com `imagem_poster` (LQIP) e os 3 formatos (avif/webp/jpg) para reativar o `<picture>` (gancho `// [Fase 7]` em `respiro.js`).
- **Kiwify**: `data/colecoes.json` usa `#checkout-pendente`. Plugar a URL real quando existir.
- **Presentes**: ao mudar o banco, rodar `python3 scripts/gerar-presentes.py` e recomitar `/r/`.

## Ganchos futuros
`// [v2]` assinatura Respiro+, sync de guardados com login, acervo de clipes.
`// [v3]` wallpaper vivo (hora→imagem), empacotamento nativo, push opcional.
