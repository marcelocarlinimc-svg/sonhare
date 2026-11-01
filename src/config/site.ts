/**
 * INFORMAÇÕES COMERCIAIS — único lugar para editar dados do negócio.
 *
 * Nome: a logo e o Instagram escrevem "Sonhare" (Ateliê Sonhare).
 * Se o nome correto for outro, troque `name` aqui e ele muda no site todo.
 */
export const site = {
  name: "Ateliê Sonhare",
  shortName: "Sonhare",
  /** Lema que aparece na logo */
  tagline: "Transformando sonhos em detalhes",
  /** Subtítulo da logo */
  descriptor: "Personalizados e Papelaria Criativa",
  /** Frase do flyer do ateliê */
  slogan: "Produtos feitos com amor, para momentos especiais.",
  description:
    "Ateliê Sonhare: personalizados e papelaria criativa em Belo Horizonte, MG. Canecas, taças, caixinhas para festa, topper de bolo, cadernos, agendas e mais. Peça pelo WhatsApp.",
  city: "Belo Horizonte",
  state: "MG",

  whatsapp: {
    /** DDI + DDD + número, só dígitos */
    number: "5531975333615",
    /** Como aparece para o cliente */
    display: "(31) 97533-3615",
    /** Mensagem do botão de contato geral */
    generalMessage:
      "Olá! Conheci o Ateliê Sonhare pelo site e gostaria de conhecer os produtos.",
  },

  instagram: {
    handle: "@sonhareateliebh",
    url: "https://www.instagram.com/sonhareateliebh/",
  },

  /** Informado no flyer do ateliê */
  paymentNote: "Aceitamos cartão",

  /**
   * Logos (arquivos em public/images/brand/), recortadas das imagens enviadas.
   * - logo: só o nome (cabeçalho)
   * - logoFull: nome + subtítulo + lema (página inicial)
   * Para trocar pelo arquivo original em alta/PNG transparente, substitua os
   * arquivos mantendo os nomes (e ajuste width/height se mudar a proporção).
   */
  logo: { src: "/images/brand/logo.png", width: 704, height: 226 } as null | { src: string; width: number; height: number },
  logoFull: { src: "/images/brand/logo-completa.png", width: 704, height: 348 } as null | { src: string; width: number; height: number },

  /**
   * Foto de capa da página inicial (opcional). Enquanto for null, a capa
   * mostra a logo completa.
   * Ex.: { src: "/images/brand/capa.jpg", alt: "Canecas personalizadas do ateliê" }
   */
  heroImage: null as null | { src: string; alt: string; fit?: "cover" | "contain" },

  /** Como funciona — edite os passos para refletir o atendimento real */
  howItWorks: [
    {
      title: "Escolha o produto",
      text: "Veja as opções no catálogo e confira o valor de cada uma.",
    },
    {
      title: "Toque em comprar",
      text: "O WhatsApp abre com uma mensagem pronta sobre o produto escolhido.",
    },
    {
      title: "Combine a personalização",
      text: "Converse direto com quem produz e defina nomes, cores e detalhes.",
    },
    {
      title: "Acerte os detalhes do pedido",
      text: "Prazo, entrega e pagamento são combinados na conversa. Aceitamos cartão.",
    },
  ],
} as const;

/** Domínio usado em sitemap/SEO. Na Vercel é detectado automaticamente. */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
