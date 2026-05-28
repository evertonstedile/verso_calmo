# Checkpoint — Etapa 1 Aprovada

Documento de registro operacional da página `/em-breve` da Verso Calmo.

Este checkpoint existe para proteger a versão segura da página antes de qualquer nova tentativa de redesign, refinamento visual ou implementação futura.

-----

## 1. Contexto

A página `/em-breve` da Verso Calmo passou por uma primeira etapa de refinamento técnico/visual chamada **Etapa 1**.

Essa etapa foi aprovada porque corrigiu problemas básicos sem descaracterizar a estrutura original da página.

Depois disso, uma **Etapa 2** foi executada com liberdade criativa excessiva e foi rejeitada. A Etapa 2 foi revertida, e o arquivo voltou para o estado aprovado da Etapa 1.

Este documento registra esse estado como ponto seguro de retorno.

-----

## 2. Arquivo principal protegido

Arquivo principal:

`/em-breve/verso-calmo-preview4.html`

Esse arquivo representa a página `/em-breve` no estado seguro da Etapa 1 aprovada.

-----

## 3. O que foi aprovado na Etapa 1

A Etapa 1 foi aprovada por corrigir a base sem redesenhar a página inteira.

Itens aprovados:

1. **Copy principal preservada**
   - Headline preservada:
     "alguns respiros vão virar tela."
   - Subtítulo preservado:
     "uma coleção pequena, feita devagar, em Garopaba."
   - CTA preservado:
     "guardar meu lugar"
   - Microcopy preservada:
     "com calma. quando chegar, eu te aviso."

2. **Estrutura HTML preservada**
   - A página não foi reescrita do zero.
   - As seções principais foram mantidas.
   - A lógica geral da página permaneceu estável.

3. **Formulário sem glassmorphism excessivo**
   - O formulário deixou de parecer card SaaS/glassmorphism.
   - A área de convite ficou mais sólida, simples e coerente.

4. **Contraste e legibilidade corrigidos**
   - Melhor leitura dos campos.
   - Melhor separação entre texto, botão e fundo.
   - Melhor coerência com o Modo Respiro.

5. **Font-display preservado**
   - Uso de Google Fonts com `display=swap`.
   - Mantém carregamento mais seguro e evita problemas visuais graves durante carregamento.

6. **Reduced motion preservado**
   - Respeito a `prefers-reduced-motion`.
   - Animações não devem ser forçadas para quem prefere menos movimento.

7. **Hotfix mobile preservado**
   - O hero em mobile foi contido para evitar uma primeira dobra alta demais.
   - A experiência mobile ficou mais funcional.

8. **Mockup sem animação flutuante**
   - A sensação de objeto flutuante foi reduzida.
   - Isso ajuda a evitar estética de template ou produto digital genérico.

-----

## 4. O que foi rejeitado na Etapa 2

A Etapa 2 foi rejeitada porque descaracterizou a Verso Calmo.

Principais problemas:

1. **Visual bege, frio e sem alma**
   - A página ficou pálida demais.
   - Perdeu calor, presença e emoção.

2. **Hero genérico**
   - O hero continuou distante de Garopaba real.
   - A página parecia abstrata e sem território.

3. **SVG/ilustração como paisagem**
   - Garopaba foi traduzida como paisagem genérica.
   - Isso quebra o território proprietário da marca.

4. **Mockup austero**
   - O mockup passou a parecer poster ou arte de template.
   - Não parecia gesto cotidiano da Marina.

5. **Tracking exagerado**
   - A tipografia ficou artificial.
   - O resultado parecia "sofisticação forçada".

6. **Espaçamento morto**
   - O respiro virou vazio.
   - Faltou relação emocional e visual entre os blocos.

7. **Ausência de Marina**
   - A página ficou abstrata.
   - Faltou autoria, bastidor e presença humana.

8. **Ausência de Garopaba real**
   - A marca perdeu seu território mais importante.
   - Sem foto real, o resultado se aproximou de wellness genérico.

-----

## 5. Regra de rollback

Se qualquer implementação futura voltar a apresentar os problemas da Etapa 2 rejeitada, deve-se retornar ao arquivo protegido da Etapa 1.

Sinais de rollback obrigatório:

- hero com SVG genérico;
- paisagem ilustrada;
- mockup 3D fake;
- tracking acima de +40;
- página bege chapada;
- ausência de Garopaba real;
- ausência de Marina/autoria;
- formulário grande e frio;
- estética SaaS, wellness ou hotel boutique;
- redesign livre sem seguir documentos aprovados.

-----

## 6. Próxima direção aprovada

A próxima tentativa de implementação deve seguir obrigatoriamente:

1. `docs/VERSO_CALMO_BRAND_SYSTEM.md`
2. `docs/DIRECAO_EM_BREVE_V3.md`
3. este checkpoint
4. fotos reais de Garopaba
5. foto real de celular/wallpaper como gesto

A próxima versão da `/em-breve` não deve ser "refinamento visual livre".

Deve ser uma implementação fiel da direção aprovada.

-----

## 7. Regra para Claude Code

Claude Code deve seguir estas regras antes de qualquer nova implementação:

1. Ler `docs/VERSO_CALMO_BRAND_SYSTEM.md`.
2. Ler `docs/DIRECAO_EM_BREVE_V3.md`.
3. Ler `checkpoints/CHECKPOINT_ETAPA_1_APROVADA.md`.
4. Confirmar que está partindo do arquivo `/em-breve/verso-calmo-preview4.html`.
5. Confirmar quais fotos reais serão usadas.
6. Listar arquivos que pretende alterar.
7. Aguardar autorização explícita.
8. Não implementar se os assets reais não estiverem disponíveis.
9. Não fazer commit sem autorização.
10. Não fazer push sem autorização.

-----

## 8. Assets obrigatórios para próxima implementação

Antes de qualquer nova implementação visual, devem existir:

1. Foto real de Garopaba para o hero:
   - caminho sugerido: `/assets/garopaba/01-hero-garopaba.jpg`

2. Foto real do celular/wallpaper como gesto:
   - caminho sugerido: `/assets/em-breve/02-celular-wallpaper-real.jpg`

3. Opcional: textura real ou fundo complementar:
   - caminho sugerido: `/assets/em-breve/03-textura-espuma.jpg`

Sem esses assets, o Claude Code deve parar e pedir as imagens.

-----

## 9. Estado aprovado resumido

Status atual da página:

- Etapa 1: aprovada.
- Etapa 2: rejeitada.
- Rollback da Etapa 2: aprovado.
- Estado seguro: `/em-breve/verso-calmo-preview4.html` no formato da Etapa 1.
- Próxima etapa: nova implementação orientada por fotos reais e pela Direção Visual v3.

-----

## 10. Regra final

A Etapa 1 é a base técnica segura.

A nova versão visual só pode avançar se preservar a estabilidade da Etapa 1 e substituir a abstração por realidade:

- Garopaba real;
- Marina presente;
- fotografia real;
- Modo Respiro dominante;
- venda silenciosa;
- formulário íntimo;
- página curta;
- nada de design genérico.

Se parecer template, volta.

Se parecer Garopaba ao lado da Marina, avança.

-----

*Checkpoint Etapa 1 Aprovada — Verso Calmo /em-breve.*  
*Documento complementar ao VERSO_CALMO_BRAND_SYSTEM.md e à DIRECAO_EM_BREVE_V3.md.*
