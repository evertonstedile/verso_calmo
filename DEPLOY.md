# Verso Calmo — Guia de Deploy

Documentação operacional para publicar o site no ar com domínio real.

---

## Dados do projeto

| Item | Valor |
|------|-------|
| **Domínio oficial** | `versocalmo.com.br` |
| **URL canônica** | `https://versocalmo.com.br` |
| **Branch de produção** | `claude/adoring-wright-VgQFf` |
| **Repositório** | `evertonstedile/verso_calmo` |
| **Plataforma de deploy** | Vercel (estático, sem build) |

---

## Arquivos principais

| Arquivo | Função |
|---------|--------|
| `index.html` | Home editorial |
| `respiro-de-garopaba/index.html` | Página de venda do Respiro |
| `em-breve/verso-calmo-preview4.html` | Página de pré-lançamento (transitória) |
| `vercel.json` | Cache headers para Vercel |
| `robots.txt` | Indexação + referência ao sitemap |
| `sitemap.xml` | Mapa de URLs indexáveis |
| `favicon.svg` | Ícone da aba |
| `.nojekyll` | Desativa Jekyll caso use GitHub Pages |

---

## Teste local antes do deploy

```bash
# Na pasta raiz do projeto
python3 -m http.server 8080
```

| URL local | Página |
|-----------|--------|
| `http://localhost:8080/` | Home |
| `http://localhost:8080/respiro-de-garopaba/` | Respiro de Garopaba |
| `http://localhost:8080/em-breve/verso-calmo-preview4.html` | Em breve |
| `http://localhost:8080/sitemap.xml` | Sitemap |
| `http://localhost:8080/robots.txt` | Robots |

**Para testar no celular na mesma rede Wi-Fi:**
1. Descubra seu IP local: `ipconfig getifaddr en0` (Mac) / `hostname -I` (Linux)
2. Acesse `http://SEU_IP:8080/` no celular

---

## Checklist pré-deploy

- [ ] Revisar Home no celular (hero, seções, CTA ponte)
- [ ] Revisar Respiro no celular (hero, preço, FAQ, fechamento)
- [ ] Confirmar que `CHECKOUT_URL` em `respiro-de-garopaba/index.html` ainda é `'#checkout-pendente'` (NÃO publicar venda antes de ter checkout real)
- [ ] Confirmar que as imagens OG ainda estão comentadas (assets ainda não existem)

---

## Passo a passo: conectar na Vercel

### 1. Importar o repositório

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **Add New → Project**
3. Conecte sua conta GitHub se ainda não estiver conectada
4. Localize o repositório `evertonstedile/verso_calmo` e clique em **Import**

### 2. Configurar o projeto

Na tela de configuração do projeto:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Other (sem framework — site estático) |
| **Root Directory** | `.` (raiz do repositório) |
| **Build Command** | *(deixar em branco)* |
| **Output Directory** | *(deixar em branco)* |
| **Branch** | `claude/adoring-wright-VgQFf` |

> A Vercel detecta automaticamente sites estáticos sem build command.

3. Clique em **Deploy**

### 3. Verificar o deploy inicial

Após o deploy, a Vercel gera uma URL temporária como `verso-calmo-xxx.vercel.app`.

Testar nessa URL:
- [ ] `https://verso-calmo-xxx.vercel.app/` — retorna 200
- [ ] `https://verso-calmo-xxx.vercel.app/respiro-de-garopaba/` — retorna 200
- [ ] `https://verso-calmo-xxx.vercel.app/sitemap.xml` — retorna conteúdo XML
- [ ] `https://verso-calmo-xxx.vercel.app/robots.txt` — retorna conteúdo correto

---

## Passo a passo: adicionar o domínio na Vercel

### 4. Adicionar domínio

1. No painel do projeto, acesse **Settings → Domains**
2. Adicione: `versocalmo.com.br`
3. Adicione também: `www.versocalmo.com.br` (a Vercel pode configurar redirect automático www → raiz)
4. A Vercel mostrará os **registros DNS exatos** que precisam ser configurados

> ⚠️ **Os registros DNS exatos devem ser copiados da tela da Vercel.** Não use valores genéricos — a Vercel pode usar IPs ou CNAMEs específicos para a sua conta.

---

## Passo a passo: configurar DNS no provedor do domínio

### 5. Configurar DNS

1. Acesse o painel do provedor onde `versocalmo.com.br` foi comprado
2. Localize a área de **Gerenciamento de DNS** ou **Zona DNS**
3. Adicione os registros exatamente como a Vercel indicou na tela anterior

**Padrão comum da Vercel** *(referência apenas — sempre confirmar na tela da Vercel):*

| Tipo | Nome | Valor |
|------|------|-------|
| `A` | `@` (raiz) | IP fornecido pela Vercel |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> ⚠️ Isso é apenas referência. A Vercel é a fonte final dos registros corretos para o seu projeto.

### 6. Aguardar propagação DNS

- Tempo típico: 5 minutos a 48 horas
- A Vercel mostra o status de verificação no painel de Domains
- Quando aparecer "Valid Configuration" ou ✅, o domínio está ativo

---

## Checklist pós-deploy

### Verificação técnica

- [ ] `https://versocalmo.com.br/` retorna 200 e carrega a Home
- [ ] `https://versocalmo.com.br/respiro-de-garopaba/` retorna 200 e carrega a página Respiro
- [ ] `https://versocalmo.com.br/sitemap.xml` retorna o XML correto
- [ ] `https://versocalmo.com.br/robots.txt` retorna o conteúdo correto
- [ ] `https://www.versocalmo.com.br/` redireciona para `https://versocalmo.com.br/` (sem www)
- [ ] HTTPS ativo (cadeado verde) — a Vercel provisiona certificado SSL automaticamente

### Verificação visual

- [ ] Hero da Home carrega com a foto de Garopaba (AVIF/WebP/JPG)
- [ ] Seção Marina mostra a foto de Garopaba como visual de apoio
- [ ] Seção Respiro (ponte) exibe "em preparação" e CTA "conhecer o respiro"
- [ ] Página Respiro carrega completa: hero, galeria, preço, FAQ, fechamento
- [ ] Botões de checkout na página Respiro NÃO redirecionam (checkout ainda pendente)
- [ ] Testar no celular iOS e Android

### Antes de colocar o link na bio do Instagram

> ⚠️ **Não coloque o link na bio antes de confirmar todos os itens acima.**

- [ ] Deploy testado e aprovado visualmente no celular
- [ ] Checkout real configurado e testado (quando estiver pronto)
- [ ] Assets finais dos wallpapers inseridos na galeria
- [ ] OG image criada e tags `og:image` descomentadas em ambas as páginas

---

## Pendências para publicar a venda (Respiro)

| Pendência | Arquivo | O que fazer |
|-----------|---------|-------------|
| Checkout URL | `respiro-de-garopaba/index.html` | Trocar `var CHECKOUT_URL = '#checkout-pendente'` pela URL real |
| Wallpapers | `assets/wallpapers/wallpaper-01.jpg` … `05.jpg` | Adicionar os 5 arquivos |
| Mockup celular | `assets/wallpapers/mockup-celular-respiro.jpg` | Adicionar o arquivo |
| Foto Marina/origem | `assets/garopaba/marina-origem-respiro.jpg` | Adicionar o arquivo |
| OG image Home | `assets/og/verso-calmo-home.jpg` | Criar (1200×630px) e descomentar tag |
| OG image Respiro | `assets/og/respiro-de-garopaba.jpg` | Criar (1200×630px) e descomentar tag |
| Vídeos do Acervo | `assets/video/garopaba-*.mp4` | Adicionar os 4 vídeos + posters |

---

## Observações

**Branch de produção:** `claude/adoring-wright-VgQFf` é a branch consolidada e oficial. Sempre fazer deploy dessa branch. Se a Vercel pedir para definir uma branch "principal", configurar como `claude/adoring-wright-VgQFf` por ora — ou abrir PR para `main` antes do deploy, conforme preferir.

**Página em-breve:** `em-breve/verso-calmo-preview4.html` não está no sitemap e não tem canonical. Continuará acessível pela URL direta mas não será indexada pelos buscadores. Pode ser removida do rodapé da Home quando o site estiver no ar.

**www vs sem-www:** A Vercel gerencia o redirect automaticamente quando você adiciona os dois domínios no painel. Não é necessário configurar redirect manual no `vercel.json`.

---

*Verso Calmo — DEPLOY.md v1.0 · 2026-05-30*
