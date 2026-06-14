#!/usr/bin/env python3
# gerar-presentes.py — gera as páginas editoriais de presente /r/<id>.html
# (uma por respiro, com og:image própria para preview rico no WhatsApp).
#
# Lê app/data/respiros.json e escreve r/<id>.html + r/index.html (fallback).
# Site estático (sem build no deploy): rode este script quando o banco mudar
# e comite os arquivos gerados.
#
#   python3 scripts/gerar-presentes.py
#
# A rota limpa /r/<id> -> /r/<id>.html é feita pelo rewrite no vercel.json.

import html
import json
import os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RESPIROS = os.path.join(RAIZ, "app", "data", "respiros.json")
SAIDA = os.path.join(RAIZ, "r")
DOMINIO = "https://versocalmo.com.br"

# Fallback genérico para /r/ sem id (ou banco vazio).
GENERICO = {
    "id": "",
    "imagem": "/assets/garopaba/01-hero-garopaba.jpg",
    "frase": "um respiro de garopaba.",
    "alt": "entardecer dourado sobre o mar e a montanha em garopaba",
    "og": "/assets/og/og-home.jpg",
}

TEMPLATE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>um respiro de Garopaba — verso calmo</title>
  <meta name="description" content="__DESC__">
  <meta name="theme-color" content="#101417">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta name="robots" content="noindex,follow">
  <!-- Open Graph — preview rico ao compartilhar (WhatsApp etc.) -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="Verso Calmo">
  <meta property="og:title" content="__OGTITLE__">
  <meta property="og:description" content="um respiro feito em Garopaba — por Marina Gomes">
  <meta property="og:url" content="__OGURL__">
  <meta property="og:image" content="__OGIMG__">
  <meta property="og:image:alt" content="__OGALT__">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="__OGTITLE__">
  <meta name="twitter:description" content="um respiro feito em Garopaba — por Marina Gomes">
  <meta name="twitter:image" content="__OGIMG__">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300;1,9..144,400&family=Manrope:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/tokens.css">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    body { font-family: 'Manrope', sans-serif; background: var(--vc-noite-mar); color: var(--vc-sal); }
    img { display: block; max-width: 100%; }
    a { color: inherit; text-decoration: none; }
    .presente {
      position: relative; width: 100%;
      min-height: 100vh; min-height: 100svh;
      overflow: hidden; isolation: isolate;
    }
    .presente__foto {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; object-position: center 25%; z-index: 0;
    }
    .presente__gradiente {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: linear-gradient(to top,
        rgba(16,20,23,0.85) 0%, rgba(16,20,23,0.45) 40%,
        rgba(16,20,23,0.08) 72%, rgba(16,20,23,0) 100%);
    }
    .presente__conteudo {
      position: absolute; z-index: 2;
      left: 1.75rem; right: 1.75rem;
      bottom: calc(env(safe-area-inset-bottom, 0px) + 2.75rem);
      display: flex; flex-direction: column; gap: 1rem;
      max-width: 640px;
    }
    .presente__frase {
      font-family: 'Fraunces', serif; font-weight: 300;
      font-size: clamp(2rem, 8.5vw, 3.5rem); line-height: 1.08; letter-spacing: -0.01em;
      color: var(--vc-sal); max-width: 18ch;
    }
    .presente__assinatura {
      font-family: 'Manrope', sans-serif; font-weight: 400;
      font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;
      color: rgba(246,239,229,0.6);
    }
    .presente__convite {
      margin-top: 1.5rem; padding-top: 1.5rem;
      border-top: 1px solid rgba(246,239,229,0.14);
      display: flex; flex-direction: column; gap: 0.9rem; align-items: flex-start;
    }
    .presente__convite-texto {
      font-family: 'Fraunces', serif; font-weight: 300; font-style: italic;
      font-size: 1.0625rem; line-height: 1.4; color: rgba(246,239,229,0.82);
    }
    .presente__gesto {
      display: inline-flex; align-items: center; gap: 0.6rem;
      font-family: 'Manrope', sans-serif; font-weight: 500;
      font-size: 0.9375rem; letter-spacing: 0.02em; text-transform: lowercase;
      color: var(--vc-ambar-suave);
      padding: 0.35rem 0; border-bottom: 1px solid var(--vc-ambar-suave);
      transition: gap 0.3s ease;
    }
    .presente__gesto:hover { gap: 0.9rem; }
    @media (prefers-reduced-motion: reduce) { .presente__gesto { transition: none; } }
  </style>
</head>
<body>
  <main class="presente">
    <img class="presente__foto" src="__IMAGEM__" alt="__ALT__" fetchpriority="high" decoding="async">
    <div class="presente__gradiente"></div>
    <div class="presente__conteudo">
      <p class="presente__frase">__FRASE__</p>
      <p class="presente__assinatura">garopaba &middot; marina gomes</p>
      <div class="presente__convite">
        <p class="presente__convite-texto">este respiro foi feito em Garopaba. tem mais.</p>
        <a class="presente__gesto" href="/">conhecer a verso calmo <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </main>
</body>
</html>
"""


def render(r):
    rid = r.get("id", "")
    frase = r.get("frase", "um respiro de garopaba.")
    imagem = r.get("imagem", GENERICO["imagem"])
    alt = r.get("alt", "")
    og = r.get("og", imagem)  # respiros usam a própria foto; genérico usa og-home
    og_url = DOMINIO + "/r/" + rid if rid else DOMINIO + "/r/"

    a = lambda s: html.escape(str(s), quote=True)   # contexto de atributo
    t = lambda s: html.escape(str(s), quote=False)  # contexto de texto

    return (TEMPLATE
            .replace("__DESC__", a(frase + " — um respiro de Garopaba, por Marina Gomes."))
            .replace("__OGTITLE__", a(frase))
            .replace("__OGURL__", a(og_url))
            .replace("__OGIMG__", a(DOMINIO + og))
            .replace("__OGALT__", a(alt))
            .replace("__IMAGEM__", a(imagem))
            .replace("__ALT__", a(alt))
            .replace("__FRASE__", t(frase)))


def main():
    with open(RESPIROS, encoding="utf-8") as f:
        dados = json.load(f)
    respiros = dados.get("respiros", [])

    os.makedirs(SAIDA, exist_ok=True)

    # fallback /r/ (sem id)
    with open(os.path.join(SAIDA, "index.html"), "w", encoding="utf-8") as f:
        f.write(render(GENERICO))

    n = 0
    for r in respiros:
        rid = r.get("id")
        if not rid:
            continue
        with open(os.path.join(SAIDA, rid + ".html"), "w", encoding="utf-8") as f:
            f.write(render(r))
        n += 1

    print(f"gerado: r/index.html + {n} página(s) de respiro em {SAIDA}")


if __name__ == "__main__":
    main()
