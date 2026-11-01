/**
 * CATÁLOGO — única fonte de dados dos produtos.
 *
 * Para cadastrar: copie o modelo comentado no final, cole dentro da lista
 * `products` e preencha. Não precisa mexer em nenhum componente.
 *
 * A lista começa VAZIA de propósito: nenhum produto, foto ou preço
 * fictício é publicado. Enquanto estiver vazia, o site mostra um aviso
 * de "catálogo em cadastro" com o botão de WhatsApp.
 */

export type CategoryId = "canecas" | "festa" | "papelaria" | "bebe" | "presentes";

/**
 * Categorias montadas a partir da lista de produtos do flyer do ateliê.
 * `items` é só texto de apresentação (não são produtos cadastrados).
 */
export const categories: { id: CategoryId; name: string; description: string }[] = [
  { id: "canecas", name: "Canecas e taças", description: "Canecas, canecas chopp e taças personalizadas." },
  { id: "festa", name: "Para festa", description: "Caixinhas personalizadas para festa e topper de bolo." },
  { id: "papelaria", name: "Papelaria criativa", description: "Agenda, caderno de anotações, diário de bordo, devocional, capa para caderno e etiquetas escolares." },
  { id: "bebe", name: "Bebê e saúde", description: "Caderneta da saúde e livro do bebê personalizados." },
  { id: "presentes", name: "Presentes", description: "Porta retrato MDF e outras ideias para presentear." },
];

/**
 * Tipos de preço:
 *  - "fixed"   -> preço fixo           (precisa de `price`)
 *  - "from"    -> "A partir de"        (precisa de `price`)
 *  - "quote"   -> "Sob consulta"       (sem `price`)
 *  - "pending" -> preço ainda não definido; mostra "Preço em breve" (sem `price`)
 */
export type PriceType = "fixed" | "from" | "quote" | "pending";

export type Product = {
  id: string;
  /** Vira a URL: /produtos/<slug>. Minúsculas, sem acento, com hífens. */
  slug: string;
  name: string;
  category: CategoryId;
  /** Uma ou duas frases, aparece no card */
  shortDescription: string;
  /** Texto completo da página do produto (um parágrafo por item) */
  description: string[];
  priceType: PriceType;
  /** Em reais. Ex.: 29.9 */
  price?: number;
  /** Fotos reais em public/images/products/. A primeira é a principal. */
  images: { src: string; alt: string; fit?: "cover" | "contain" }[];
  /** Aparece em "Em destaque" na página inicial */
  featured?: boolean;
  /** Aparece em "Mais procurados" na página inicial */
  popular?: boolean;
  /** O que o cliente pode personalizar. Só preencha o que for verdade. */
  customization?: string[];
  /** Só preencha se o prazo for confirmado. Ex.: "7 dias úteis após aprovação" */
  productionTime?: string;
};

export const products: Product[] = [
  {
    id: "caixinha-ursinho",
    slug: "caixinhas-festa-ursinho",
    name: "Caixinhas de festa tema ursinho",
    category: "festa",
    shortDescription: "Caixinhas com laço de cetim e tag com o nome da festa.",
    description: [
      "Caixinhas para lembrancinha com tema de ursinho, laço de cetim com detalhe de pérola e uma tag com o nome ou a frase da sua festa.",
      "Chame no WhatsApp, conte o tema e o nome, e a gente combina os detalhes do seu pedido.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caixinha-ursinho.jpg", alt: "Duas caixinhas de festa tema ursinho com laço rosa de cetim e tag 'Chá da Luisa'" },
    ],
    featured: true,
    customization: ["Nome ou frase na tag", "Tema da festa"],
  },
  {
    id: "caneca-personalizada",
    slug: "caneca-personalizada",
    name: "Caneca personalizada",
    category: "canecas",
    shortDescription: "Caneca branca com a arte, o tema ou o nome que você escolher.",
    description: [
      "Uma caneca feita do seu jeito: escolha o tema, o desenho ou a frase e peça com o nome de quem vai receber.",
      "Chame no WhatsApp, conte sua ideia e a gente combina os detalhes da personalização.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caneca-leao.jpg", alt: "Caneca branca personalizada com estampa de leão com coroa dourada" },
      { src: "/images/products/caneca-beatles.jpg", alt: "Caneca branca personalizada com estampa The Beatles" },
    ],
    featured: true,
    customization: ["Nome", "Tema ou desenho", "Frase"],
  },
  {
    id: "caneca-chopp-fosca",
    slug: "caneca-chopp-fosca-personalizada",
    name: "Caneca chopp fosca personalizada",
    category: "canecas",
    shortDescription: "Caneca chopp com acabamento fosco, arte e nome.",
    description: [
      "Caneca chopp com acabamento fosco, personalizada com a arte e o nome que você escolher. Uma ideia diferente para presentear.",
      "Chame no WhatsApp e conte o que você imaginou.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caneca-chopp-fosca.jpg", alt: "Caneca chopp fosca personalizada com emblema e o nome Geraldinho" },
    ],
    featured: true,
    customization: ["Nome", "Arte ou emblema"],
  },
  {
    id: "caixinhas-bob-esponja",
    slug: "caixinhas-festa-bob-esponja",
    name: "Caixinhas de festa tema Bob Esponja",
    category: "festa",
    shortDescription: "Caixinhas em formatos variados para a festa do Bob Esponja.",
    description: [
      "Caixinhas de lembrancinha com tema Bob Esponja, em formatos variados: com alça, com laço e em formato alto.",
      "Chame no WhatsApp e conte o tema da sua festa.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caixinhas-bob-esponja.jpg", alt: "Quatro caixinhas de festa tema Bob Esponja em formatos diferentes", fit: "contain" },
    ],
    featured: true,
    customization: ["Tema da festa"],
  },
  {
    id: "caixinha-cone-homem-aranha",
    slug: "caixinha-cone-homem-aranha",
    name: "Caixinha cone tema Homem-Aranha",
    category: "festa",
    shortDescription: "Caixinha cone com a idade e o nome do aniversariante.",
    description: [
      "Caixinha em formato de cone com tema Homem-Aranha, com o número da idade e o nome do aniversariante.",
      "Chame no WhatsApp, conte o nome e a idade, e a gente combina os detalhes.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caixinha-cone-homem-aranha.jpg", alt: "Caixinha cone tema Homem-Aranha com o número 4 e o nome Lucas" },
    ],
    customization: ["Nome", "Idade", "Tema da festa"],
  },
  {
    id: "caneca-professora",
    slug: "caneca-personalizada-professores",
    name: "Caneca personalizada para professores",
    category: "canecas",
    shortDescription: "Caneca com ilustração de coruja professora e o nome de quem você quer homenagear.",
    description: [
      "Uma lembrança para o Dia dos Professores: caneca com ilustração de coruja de óculos, lousa e o nome da professora.",
      "Chame no WhatsApp e peça a sua com o nome de quem você quer presentear.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/caneca-professora.jpg", alt: "Caneca com ilustração de coruja de óculos, lousa 'Feliz Dia dos Professores' e o nome Lidiane" },
    ],
    customization: ["Nome"],
  },
  {
    id: "porta-joias",
    slug: "porta-joias-personalizado",
    name: "Porta-joias personalizado",
    category: "presentes",
    shortDescription: "Porta-joias com zíper, frase e nome.",
    description: [
      "Porta-joias com zíper, personalizado com uma frase, uma ilustração e o nome de quem vai receber. Um presente com carinho, ótimo para professoras e muitas outras pessoas especiais.",
      "Chame no WhatsApp e conte a frase e o nome que você quer.",
    ],
    priceType: "pending",
    images: [
      { src: "/images/products/porta-joias.jpg", alt: "Dois porta-joias brancos com zíper, personalizados com frases e os nomes Cláudia e Gabi", fit: "contain" },
    ],
    customization: ["Nome", "Frase", "Ilustração"],
  },
];

/*
  ---------- MODELO (copie, cole acima e preencha) ----------

  {
    id: "caneca-01",
    slug: "caneca-personalizada",
    name: "Caneca personalizada",
    category: "canecas",
    shortDescription: "Caneca com o nome e o desenho que você escolher.",
    description: [
      "Primeiro parágrafo da descrição.",
      "Segundo parágrafo (opcional).",
    ],
    priceType: "from",
    price: 0, // <- troque pelo valor real
    images: [
      { src: "/images/products/caneca-01.jpg", alt: "Caneca personalizada com ..." },
    ],
    featured: true,
    popular: false,
    customization: ["Nome", "Cores", "Tema"],
    productionTime: undefined,
  },
*/

// ---------------- helpers (não precisa editar) ----------------

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, limit = 3) {
  const same = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
  return [...same, ...others].slice(0, limit);
}

export function categoryName(id: CategoryId) {
  return categories.find((c) => c.id === id)?.name ?? id;
}
