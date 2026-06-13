# app/ — PWA Verso Calmo (v1)

Segundo cômodo da mesma casa técnica do site: HTML/CSS/JS puro, sem build, deploy Vercel.
Vive em `versocalmo.com.br/app/`. Herda `/tokens.css` e as fontes (Fraunces + Manrope) do site — sem duplicar.

## Estado — Fase 1 (andaime)
- Shell instalável (`manifest.webmanifest` + `sw.js`), navegação inferior discreta, **4 telas no padrão da marca**.
- As telas estão montadas em HTML (rápidas, visíveis sem JS). O comportamento dinâmico entra nas próximas fases — ver os ganchos `// [Fase x]` em `/js`.
- `js/storage.js` já é funcional (localStorage, lista de IDs) atrás de uma interface isolada.

## Rodar local
```bash
# na RAIZ do repo (não dentro de /app), para os caminhos absolutos
# /assets e /tokens.css resolverem como em produção:
python3 -m http.server 8080
# abrir: http://localhost:8080/app/
```

## Pendências conhecidas
- **Ícones PWA em PNG** (192 / 512 / maskable): hoje há só SVG em `assets/icons/`. Instala em Android/desktop; exportar PNG antes do lançamento melhora a fidelidade no iOS.
- **Banco de respiros**: `data/respiros.json` traz só um seed (2 entradas reais). Empacotar 30–60 pares foto+frase (+ poster/LQIP).
- **Kiwify**: `data/colecoes.json` usa `#checkout-pendente` (mesmo placeholder do site). Plugar a URL real quando existir — fonte única.

## Próximas fases
2. Respiro do dia (JSON determinístico por data + swipe + guardar/presentear)
3. Guardados (storage.js → grade editorial)
4. Loja (cartas de colecoes.json + checkout Kiwify)
5. Presentear (Web Share API + rota `/r/<id>` no site)
6. Performance / A11y / Offline · 7. Checklist de marca (doc 03 §13 + doc 16 §9)
