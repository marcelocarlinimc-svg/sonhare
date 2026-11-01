# Ateliê Sonhare — site vitrine com pedidos pelo WhatsApp

Site em Next.js (App Router) + TypeScript + Tailwind. Sem banco de dados, sem pagamento online, sem serviços pagos.
O visitante vê o produto e o preço, toca em **comprar** e cai direto no WhatsApp `(31) 97533-3615` com a mensagem pronta.

> **Estado atual (versão 1):** 7 produtos cadastrados com fotos reais enviadas pelo ateliê. **Todos estão com preço "em breve"** (`priceType: "pending"`) porque os valores ainda não foram informados: veja a seção 3 para preencher. Nenhum preço é inventado. Categorias sem produto (papelaria, bebê e saúde) levam ao WhatsApp. A logo e as cores vieram da logo e do flyer enviados (seção 7).
>
> As fotos atuais são de baixa resolução (recortes de prints). Substitua pelas originais mantendo o mesmo nome de arquivo (seção 4).
>
> **Nome:** a logo e o Instagram escrevem **"Sonhare"**. O site usa "Ateliê Sonhare". Se o nome correto for outro, mude `name` em `src/config/site.ts`.

---

## 1. Como executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev        # abre em http://localhost:3000
```

Para testar a versão de produção: `npm run build && npm start`.

---

## 2. Como cadastrar produtos

1. Coloque as fotos em `public/images/products/` (ex.: `caneca-01.jpg`).
2. Abra `src/data/products.ts`.
3. Copie o **modelo comentado** no final da lista, cole dentro de `products` e preencha.
4. Salve. O produto aparece no catálogo, na página própria (`/produtos/<slug>`), no sitemap e no botão de WhatsApp, automaticamente.

Campos principais:

| Campo | O que é |
|---|---|
| `slug` | Endereço da página: `caneca-personalizada` vira `/produtos/caneca-personalizada`. Minúsculas, sem acento, com hífens. Precisa ser único. |
| `category` | `canecas` (canecas, chopp, taças), `festa` (caixinhas, topper de bolo), `papelaria` (agenda, cadernos, diário de bordo, devocional, capa, etiquetas), `bebe` (caderneta da saúde, livro do bebê) ou `presentes` (porta retrato MDF etc.). Para criar outra, edite `categories` no mesmo arquivo. |
| `images` | Lista de fotos; a primeira é a principal. Sempre preencha o `alt` descrevendo a foto. |
| `featured` | `true` para aparecer em "Em destaque" na página inicial |
| `popular` | `true` para aparecer em "Mais procurados" |
| `customization` | O que o cliente pode personalizar. Só escreva o que for verdade. |
| `productionTime` | Só preencha se o prazo for confirmado (senão, apague a linha) |

Para **remover** um produto, apague o bloco dele da lista.

---

## 3. Como atualizar preços

Os preços ficam só em `src/data/products.ts`, nos campos `priceType` e `price` (em reais, ex.: `29.9`).

| `priceType` | Aparece como | Precisa de `price`? |
|---|---|---|
| `"fixed"` | R$ 29,90 | sim |
| `"from"` | A partir de R$ 29,90 | sim |
| `"quote"` | Sob consulta (botão vira "Pedir orçamento") | não |
| `"pending"` | Preço em breve (botão vira "Pedir orçamento") | não |

Use `"pending"` enquanto o valor não estiver confirmado. Nunca publique um valor "de exemplo". A mensagem do WhatsApp já inclui o preço quando ele existe.

---

## 4. Como substituir fotografias

- Troque o arquivo em `public/images/products/` mantendo o mesmo nome, **ou** adicione o novo arquivo e atualize `src` em `images`.
- Use as fotos originais do produto real. Pode ajustar luz, contraste e enquadramento, mas **nunca** altere o produto, as cores, os textos ou as estampas.
- Formato recomendado: JPG, lado maior de uns 1600 px, proporção retrato 4:5. O site otimiza o tamanho automaticamente.

---

## 5. Como alterar informações comerciais

Tudo em `src/config/site.ts`:

- **WhatsApp:** `whatsapp.number` (só dígitos, com 55 + DDD) e `whatsapp.display`
- **Mensagem do botão geral:** `whatsapp.generalMessage`
- **Instagram:** `instagram.url` e `instagram.handle`
- **Logo:** `logo` (cabeçalho) e `logoFull` (página inicial) apontam para `public/images/brand/logo.png` e `logo-completa.png`, recortadas das imagens enviadas. Quando tiver o arquivo original (PNG transparente ou SVG), substitua esses arquivos e ajuste `width`/`height` se a proporção mudar.
- **Foto de capa da página inicial (opcional):** `heroImage`. Sem ela, o site usa a foto do primeiro produto em destaque.
- **Passo a passo "Como funciona":** `howItWorks`. Ajuste para refletir o atendimento real.
- **Frase e descrição da marca:** `tagline` e `description`.

O texto da página "Sobre o ateliê" está em `src/app/sobre/page.tsx`. É genérico de propósito (sem história ou números inventados); troque pela história real quando houver.

---

## 6. Como publicar (e atualizar) na Vercel

**Primeira publicação**

1. Crie uma conta gratuita em vercel.com.
2. Envie a pasta do projeto para um repositório no GitHub (`git init`, `git add .`, `git commit`, `git push`).
3. Na Vercel: **Add New → Project**, escolha o repositório e clique em **Deploy**. Não precisa configurar nada: o Next.js é detectado sozinho.
4. O site fica disponível em um endereço `https://<nome>.vercel.app` (gratuito). O sitemap e o robots usam esse endereço automaticamente.

**Variáveis de ambiente:** nenhuma é obrigatória. Opcional: `NEXT_PUBLIC_SITE_URL` (ex.: `https://sonhar-atelie.vercel.app`) se quiser fixar o endereço usado em sitemap e links de compartilhamento.

**Atualizações:** edite os arquivos, faça `git add . && git commit -m "Atualiza produtos" && git push`. A Vercel publica sozinha em cerca de 1 minuto.
Alternativa sem Git: `npx vercel --prod` na pasta do projeto.

**Depois de publicar:** coloque o link do site na bio do Instagram.

---

## 7. Cores e fontes

As cores foram medidas na logo e no flyer enviados (Instagram bloqueia leitura automática): fundo creme `#FAF5F1`, rosa claro, dourado `#C9A45C` e rosa de botão `#D6336C` (o rosa vibrante do flyer, `#F6296C`, escurecido só para o texto branco ficar legível). Para ajustar: `src/app/globals.css`, bloco `:root`, no formato `R G B` (ex.: `#D6336C` = `214 51 108`).

As fontes são do sistema (rápidas, sem dependência). A logo traz a identidade em letra cursiva; para usar uma fonte própria nos títulos, use `next/font/google` em `src/app/layout.tsx` e ajuste `--font-display`.

---

## Estrutura

```
public/images/brand/      logo original e capa
public/images/products/   fotos dos produtos
src/config/site.ts        dados comerciais
src/data/products.ts      catálogo e preços
src/lib/commerce.ts       preço formatado e links do WhatsApp
src/components/           cabeçalho, rodapé, cards, botão flutuante...
src/app/                  páginas (início, produtos, produto, sobre), sitemap, robots
```

## SEO incluído

Título e descrição por página, URLs amigáveis, Open Graph, sitemap, robots, dados estruturados (Organization na home; Product por produto, com `offers` apenas quando há preço numérico). Sem endereço físico ou área de entrega afirmados.
