# Publicação — Verso Calmo Em Breve

Guia técnico para publicar a landing page `em-breve/verso-calmo-preview4.html` com domínio próprio, via **Vercel**.

> **Regra central:** o visual da página está aprovado como MVP final.
> Não redesenhar, não alterar layout, textos principais, estética ou
> responsividade. Tudo neste guia é preparação técnica, performance,
> deploy, SEO e documentação — sem tocar na aparência aprovada.

---

## Estado atual do projeto

| Item | Estado |
|---|---|
| Página HTML | ✅ aprovada (MVP final) |
| Assets originais (hero + celular JPG) | ✅ preservados, intocados |
| Versões WebP | ✅ criadas (48% / 59% menores) |
| Versões AVIF | ✅ criadas (66% / 73% menores) |
| `<picture>` com fallback AVIF→WebP→JPG | ✅ implementado |
| `width`/`height` nas imagens (anti-CLS) | ✅ adicionados |
| `index.html` (redirect raiz) | ✅ presente |
| `.nojekyll` | ✅ presente |
| `vercel.json` | ✅ criado (headers de cache) |
| `robots.txt` | ✅ criado |
| `sitemap.xml` | ✅ criado (revisar URL no domínio final) |
| `favicon.svg` | ✅ criado (provisório — monograma "vc") |
| Open Graph / Twitter Card / canonical | ✅ presentes (URLs placeholder a confirmar) |
| `meta robots` | ✅ `index,follow` |
| Formulário com backend | ❌ pendente — atualmente apenas visual |
| Domínio próprio ativo | ❌ pendente |

---

## Hospedagem — recomendação: Vercel

Vercel funciona com repositório **privado**, deploy automático a cada push,
HTTPS via Let's Encrypt, CDN global e domínio custom gratuito. É o menor
esforço para um resultado profissional.

### Passos

1. Acessar [vercel.com](https://vercel.com) e fazer login com GitHub
2. "Add New Project" → importar `evertonstedile/verso_calmo`
3. Manter tudo no padrão — **não há build**, é site estático.
   - Framework Preset: **Other**
   - Build Command: vazio
   - Output Directory: vazio (raiz)
4. Selecionar a branch a publicar (`claude/busy-ride-nXyIl` ou `main` após merge)
5. Clicar em "Deploy"
6. A Vercel gera uma URL `*.vercel.app` — usar para preview/teste com a Marina

### O que o `vercel.json` faz

Mínimo e seguro. Só define cabeçalhos de cache:
- `/assets/*` → cache de 1 ano, `immutable` (imagens/fontes não mudam de nome)
- `/favicon.svg` → cache de 1 semana
- `*.html` → `must-revalidate` (sempre busca a versão mais nova da página)

Não define build, não define framework, não cria rewrites. **Não afeta o
funcionamento local nem o GitHub Pages** (ambos ignoram o arquivo).

---

## Conectar o domínio versocalmo.com.br na Vercel

1. No painel do projeto → aba **Domains** → adicionar `versocalmo.com.br`
   (e `www.versocalmo.com.br`)
2. A Vercel mostra os registros DNS a configurar
3. No registrador do domínio (registro.br / Locaweb / etc.), apontar:

```
Tipo    Nome    Valor
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

> Os IPs/valores exatos são os que a Vercel exibir no momento — sempre
> usar os do painel, pois podem variar.

4. Aguardar propagação de DNS (alguns minutos a algumas horas)
5. A Vercel emite o certificado HTTPS automaticamente

---

## Atualizar metatags após o domínio ativo

Hoje as metatags usam `https://versocalmo.com.br/` como **domínio
pretendido** (placeholder). Quando o domínio estiver confirmado e ativo,
revisar em `em-breve/verso-calmo-preview4.html`:

```html
<meta property="og:url" content="https://versocalmo.com.br/">
<meta property="og:image" content="https://versocalmo.com.br/assets/garopaba/01-hero-garopaba.jpg">
<meta name="twitter:image" content="https://versocalmo.com.br/assets/garopaba/01-hero-garopaba.jpg">
<link rel="canonical" href="https://versocalmo.com.br/">
```

E também:
- `robots.txt` → linha `Sitemap:`
- `sitemap.xml` → `<loc>` e `<lastmod>`

> `og:image` permanece em **JPG** de propósito: WhatsApp, Facebook e
> Instagram têm melhor compatibilidade com JPG/PNG para preview do que AVIF/WebP.

Quando o domínio estiver na raiz, considerar mover o HTML para a raiz e
simplificar/remover o redirect do `index.html`.

---

## Performance de imagens — feito

As imagens foram otimizadas **sem alterar a aparência** (mesmas dimensões,
mesmas cores, sem corte, sem filtro). Os JPGs originais foram preservados
como fallback universal.

| Arquivo | Original JPG | WebP | AVIF |
|---|---|---|---|
| `01-hero-garopaba` | 1.47MB | 790KB (−48%) | 514KB (−66%) |
| `02-celular-wallpaper-real` | 1.87MB | 778KB (−59%) | 519KB (−73%) |

O HTML usa `<picture>` com ordem de preferência **AVIF → WebP → JPG**.
Navegadores modernos baixam o AVIF; os mais antigos caem para WebP; e os
sem suporte usam o JPG. A regra CSS `picture{display:contents}` garante
que o wrapper `<picture>` não altere o layout — o `<img>` continua se
comportando exatamente como antes.

`width`/`height` foram adicionados aos `<img>` com a proporção real de
cada imagem, reduzindo CLS (saltos de layout) sem mudar o tamanho exibido.

### Sobre preload da hero

**Não** foi adicionado `<link rel="preload">` da hero. Com `<picture>`
multi-formato, o preload se torna complexo e arrisca download duplicado.
O `<img>` da hero já tem `fetchpriority="high"`, que dá o ganho de LCP
necessário de forma segura.

### Pendência opcional (v2)

Se quiser reduzir ainda mais o peso, é possível gerar versões
redimensionadas (ex.: 1080px de largura) e usar `srcset` por tamanho.
Não é necessário para o lançamento.

---

## Favicon

Criado `favicon.svg` na raiz — monograma minimalista "vc" em itálico
serifado, nas cores da marca (`#3A2A22` sobre `#F6EFE5`).

> **Provisório.** Não substitui a identidade visual principal. Se a Marina
> tiver uma marca gráfica definida, trocar por ela depois.

Referenciado em:
- `em-breve/verso-calmo-preview4.html` → `../favicon.svg`
- `index.html` (raiz) → `favicon.svg`

---

## Formulário — conectar backend antes de publicar

O formulário hoje mostra a mensagem de sucesso mas **não envia nada**.
Conectar a um serviço antes do lançamento. (Não alterar o visual do form.)

### Recomendação

- **Brevo** ou **MailerLite** — se o objetivo é já construir a lista de
  e-mail para avisar quando a coleção chegar (recomendado: a lista já
  fica pronta para o disparo do lançamento, sem migração depois).
- **Formspree** ou **Tally** — se o objetivo é só capturar rápido agora
  e exportar/contatar depois (mais simples, menos recursos de e-mail).

**Decisão sugerida:** Brevo ou MailerLite, porque quando os wallpapers
ficarem prontos a Marina vai querer disparar um e-mail para quem se
cadastrou — e a lista já estará no lugar certo.

### Como conectar (exemplo Brevo)

```javascript
form.addEventListener('submit', function(e){
  e.preventDefault();
  var email = form.querySelector('[name="email"]').value.trim();
  if(!email) return;
  fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'api-key': 'SUA_API_KEY'},
    body: JSON.stringify({email: email, listIds: [ID_DA_LISTA]})
  }).then(function(){
    form.style.display = 'none';
    ok.style.display = 'block';
  });
});
```

### Formspree (mais simples)

1. Conta em [formspree.io](https://formspree.io) → criar form → copiar endpoint
2. No `<form>`, adicionar `action="https://formspree.io/f/SEU_ID"` e `method="post"`
3. Ajustar o JS para deixar o envio acontecer (ou usar o submit nativo)

---

## GitHub Pages vs Vercel vs Cloudflare Pages

| | GitHub Pages | Vercel | Cloudflare Pages |
|---|---|---|---|
| Repo privado | ❌ (exige público no free) | ✅ | ✅ |
| Domínio custom | ✅ | ✅ | ✅ |
| HTTPS automático | ✅ | ✅ | ✅ |
| Deploy on push | ✅ | ✅ | ✅ |
| Preview profissional | médio | ✅ | ✅ |
| Simplicidade hoje | média | **alta** | alta |

**Recomendação final: Vercel** para a publicação oficial — mantém o repo
privado, domínio próprio, HTTPS e previews por commit, com o menor atrito.

> GitHub Pages serviria como preview público, mas exigiria tornar o repo
> público. `index.html` + `.nojekyll` já estão prontos caso essa opção
> seja escolhida no futuro. URL seria `https://evertonstedile.github.io/verso_calmo/`.

---

## Checklist pré-publicação

- [ ] Projeto importado na Vercel e deploy `*.vercel.app` funcionando
- [ ] Domínio adquirido e DNS apontado para a Vercel
- [ ] URLs de OG / canonical / robots / sitemap atualizadas com o domínio real
- [ ] Formulário conectado ao backend (Brevo / MailerLite / Formspree)
- [ ] Favicon definitivo (se a marca tiver um) ou manter o provisório
- [ ] Testar no iPhone Safari (aba privada, sem cache)
- [ ] Testar preview do link no WhatsApp (imagem OG aparece)

## Checklist de teste no iPhone

- [ ] Hero ocupa a tela inteira, sem barra branca embaixo
- [ ] A headline aparece com presença (não some abaixo da dobra)
- [ ] Scroll suave entre as seções
- [ ] Imagem do celular nítida e bem enquadrada
- [ ] Formulário utilizável com o teclado do iOS
- [ ] Footer com a assinatura e o copyright legíveis

## Checklist de preview / OG (WhatsApp, Instagram)

- [ ] Colar o link num chat: aparece título, descrição e imagem
- [ ] Imagem do preview corresponde à hero de Garopaba
- [ ] Texto do preview corresponde à marca (sem placeholder)

## Checklist de performance

- [ ] Navegador moderno baixa AVIF (DevTools → Network → tipo `image/avif`)
- [ ] Sem salto de layout ao carregar (CLS baixo)
- [ ] Hero carrega rápido em 4G (LCP)

## Checklist do formulário

- [ ] E-mail é realmente salvo no serviço escolhido
- [ ] Mensagem de sucesso aparece após o envio
- [ ] E-mail inválido é tratado (validação)

---

## Checklist para mostrar a página à Marina

Roteiro para a conversa com a Marina (foco emocional, não técnico):

1. Abrir a página **no iPhone dela**, não no computador
2. Pedir para ela rolar a página devagar, sem explicar nada antes
3. Observar a reação à **hero** (a foto de Garopaba)
4. Observar a leitura do **texto** (headline + manifesto)
5. Observar a reação à **imagem do celular** com o wallpaper
6. Ver se ela entende o **formulário** ("guardar meu lugar")
7. Ver se ela nota a assinatura no **footer**

Perguntas para fazer depois:

- "Você se reconhece nessa página?"
- "Isso parece Garopaba pra você?"
- "Parece uma **marca** — ou só uma página bonita?"
- "Você mandaria esse link pra uma amiga?"
- "Tem alguma palavra que você trocaria?"

---

## O que NÃO mexer (para não descaracterizar)

- ❌ Layout, composição e hierarquia da página
- ❌ Textos principais (headline, manifesto, convite, microcopy)
- ❌ Estética da hero, do formulário e do footer
- ❌ Paleta de cores e tipografia (Fraunces + Manrope)
- ❌ Responsividade visual aprovada
- ❌ Os arquivos JPG originais (são o fallback)
- ❌ Converter para React/Next ou adicionar build complexo

Permitido sem autorização extra: otimização invisível, metatags,
documentação, performance, deploy — desde que a aparência permaneça
idêntica.

---

## Estrutura de arquivos atual

```
verso_calmo/
├── index.html                          — redirect para a página + favicon
├── .nojekyll                           — GitHub Pages: desativa Jekyll
├── vercel.json                         — headers de cache (deploy estático)
├── robots.txt                          — SEO (revisar domínio)
├── sitemap.xml                         — SEO (revisar domínio/data)
├── favicon.svg                         — monograma "vc" provisório
├── em-breve/
│   └── verso-calmo-preview4.html      — página principal (aprovada)
├── assets/
│   ├── garopaba/
│   │   ├── 01-hero-garopaba.jpg       — original (fallback)
│   │   ├── 01-hero-garopaba.webp      — otimizado
│   │   └── 01-hero-garopaba.avif      — otimizado (melhor)
│   └── em-breve/
│       ├── 02-celular-wallpaper-real.jpg   — original (fallback)
│       ├── 02-celular-wallpaper-real.webp  — otimizado
│       └── 02-celular-wallpaper-real.avif  — otimizado (melhor)
└── docs/
    └── PUBLICACAO_EM_BREVE.md         — este arquivo
```

---

## Pendências antes do lançamento oficial

1. **Formulário** — conectar backend (Brevo/MailerLite recomendado)
2. **Domínio** — adquirir/confirmar e apontar DNS na Vercel
3. **Metatags** — confirmar URLs (OG, canonical, robots, sitemap)
4. **Favicon** — manter o provisório ou substituir pelo definitivo
5. **Teste real** — iPhone + preview de link no WhatsApp
6. **Validação com a Marina** — checklist acima
