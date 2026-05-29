# Respiro de Garopaba — Configuração do checkout

Guia para configurar o produto na Kiwify (ou plataforma equivalente).
Preencher campo a campo antes de ativar a página de venda.

---

## Dados do produto

| Campo | Valor |
|---|---|
| **Nome do produto** | Respiro de Garopaba |
| **Preço** | R$ 17,00 |
| **Tipo** | Produto digital |
| **Entrega** | arquivo para download (link automático por e-mail) |
| **Parcelamento** | não se aplica para R$ 17 — deixar somente à vista |
| **Garantia** | a critério da Marina; o produto é simples e direto |

**Nome do arquivo ZIP:**
```
respiro-de-garopaba-wallpapers.zip
```
Não usar nomes técnicos como `pack_1_v3_final.zip` ou `wallpapers_alta_res.zip`.
O nome do arquivo chega para o cliente — precisa ser limpo e coerente com a marca.

---

## Descrição curta (exibida no checkout)

```
Uma coleção com 5 wallpapers autorais de Garopaba para a tela do seu celular.
```

Usar exatamente esse texto. Não mencionar "arquivo digital", "alta resolução", "download imediato" como chamadas principais — são informações secundárias, não o produto.

---

## Campos mínimos no checkout

O checkout deve pedir apenas:
- **e-mail** (obrigatório — é para onde vai o link de download)
- **nome** (opcional, mas melhora o e-mail de entrega)

Não adicionar campos desnecessários: CPF, telefone, endereço, data de nascimento. Cada campo a mais reduz a conversão.

---

## Mensagem pós-compra (página de obrigado)

Exibida imediatamente após o pagamento, antes do e-mail chegar:

```
seu respiro chegou.

o link de download foi enviado para o seu e-mail.
se não aparecer em alguns minutos, confira o spam.

qualquer dúvida: direct do @versocalmo.
```

Evitar: "parabéns pela sua compra", "obrigado por confiar em nós", linguagem de e-commerce genérico.

---

## Cuidados com o nome do produto

O nome **Respiro de Garopaba** deve aparecer:
- na página de checkout (título do produto)
- no e-mail de entrega (assunto e corpo)
- na descrição do débito no cartão (se a plataforma permitir personalizar)
- no recibo/nota enviada ao cliente

Não deixar o sistema exibir nomes internos como "VCWP001", "Pack Wallpaper", "Produto Digital 1" ou qualquer variação técnica.

---

## Configuração do e-mail de entrega

Usar o texto de `ENTREGA.md` como base.

Pontos críticos:
- o link de download deve funcionar sem login
- o link não deve expirar em menos de 30 dias (o cliente pode precisar baixar de novo)
- o arquivo `respiro-de-garopaba-wallpapers.zip` deve conter os 5 wallpapers em alta resolução
- testar o fluxo completo antes de ativar: comprar, receber e-mail, clicar no link, baixar o ZIP, abrir as imagens

---

## Onde configurar o CHECKOUT_URL na página

No arquivo `respiro-de-garopaba/index.html`, no `<script>` no fim da página:

```js
var CHECKOUT_URL = '#checkout-pendente'; // ← trocar pela URL real aqui
```

Exemplo com URL da Kiwify:
```js
var CHECKOUT_URL = 'https://pay.kiwify.com.br/xxxxxxxx';
```

Apenas essa linha precisa ser trocada. Todos os botões da página atualizam automaticamente.

---

## Checklist de teste antes de ativar

- [ ] produto criado na plataforma com nome correto
- [ ] preço configurado como R$ 17,00 à vista
- [ ] arquivo ZIP correto vinculado ao produto
- [ ] e-mail de entrega configurado com texto de `ENTREGA.md`
- [ ] URL do checkout copiada e configurada em `CHECKOUT_URL` na página
- [ ] compra de teste realizada (cartão de teste ou valor real)
- [ ] e-mail de entrega chegou no endereço correto
- [ ] link de download funciona sem login
- [ ] ZIP baixa sem erro e contém os 5 wallpapers
- [ ] imagens abrem corretamente em iOS e Android
- [ ] nome do produto aparece corretamente no recibo

---

*Verso Calmo — Respiro de Garopaba — guia de checkout v1.0*
