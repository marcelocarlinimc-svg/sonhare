import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronLeft, Clock, ImageIcon } from "lucide-react";
import { site, siteUrl } from "@/config/site";
import { categoryName, getProduct, getRelated, products } from "@/data/products";
import { ctaLabel, hasNumericPrice, priceLabel, productWhatsappUrl } from "@/lib/commerce";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const title = `${p.name} personalizado(a)`;
  return {
    title,
    description: p.shortDescription,
    alternates: { canonical: `/produtos/${p.slug}` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.shortDescription,
      images: p.images[0] ? [{ url: p.images[0].src, alt: p.images[0].alt }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = getRelated(p);
  const wa = productWhatsappUrl(p);

  // Dados estruturados só com o que é real: oferta só se houver preço numérico.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.shortDescription,
    ...(p.images.length ? { image: p.images.map((i) => `${siteUrl()}${i.src}`) } : {}),
    brand: { "@type": "Brand", name: site.name },
    ...(hasNumericPrice(p)
      ? { offers: { "@type": "Offer", priceCurrency: "BRL", price: p.price.toFixed(2), url: `${siteUrl()}/produtos/${p.slug}` } }
      : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-6xl px-4 pb-28 pt-5 md:pb-10">
        <Link href="/produtos" className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand">
          <ChevronLeft className="h-4 w-4" /> Todos os produtos
        </Link>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {/* Galeria (rolagem horizontal no celular) */}
          <div>
            {p.images.length > 0 ? (
              <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
                {p.images.map((img, i) => (
                  <div
                    key={img.src}
                    className={`relative aspect-square w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl bg-soft md:w-auto ${
                      i === 0 && p.images.length > 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <Photo
                      src={img.src}
                      alt={img.alt}
                      fit={img.fit}
                      priority={i === 0}
                      sizes="(min-width: 768px) 50vw, 85vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl bg-soft text-muted">
                <ImageIcon className="h-10 w-10" />
                <span className="text-sm">Foto em breve</span>
              </div>
            )}
          </div>

          {/* Informações */}
          <div>
            <p className="text-sm text-muted">{categoryName(p.category)}</p>
            <h1 className="mt-1 font-display text-3xl font-semibold leading-tight sm:text-4xl">{p.name}</h1>
            <p className="mt-4 text-3xl font-bold text-brand-dark">{priceLabel(p)}</p>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 hidden h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white hover:bg-brand-dark md:inline-flex"
            >
              <WhatsAppIcon /> {ctaLabel(p)}
            </a>
            <p className="mt-2 hidden text-sm text-muted md:block">Você será direcionado ao WhatsApp para combinar os detalhes.</p>

            <div className="mt-8 space-y-3 text-base leading-relaxed">
              {p.description.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {p.customization && p.customization.length > 0 && (
              <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
                <h2 className="font-semibold">O que você pode personalizar</h2>
                <ul className="mt-3 space-y-2">
                  {p.customization.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.productionTime && (
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" /> Prazo de produção: {p.productionTime}
              </p>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold">Você também pode gostar</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Barra de compra fixa no celular */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-muted">{p.name}</p>
            <p className="text-lg font-bold leading-tight text-brand-dark">{priceLabel(p)}</p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" /> {ctaLabel(p)}
          </a>
        </div>
      </div>
    </>
  );
}
