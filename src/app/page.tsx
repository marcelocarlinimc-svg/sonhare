import Image from "next/image";
import { Photo } from "@/components/Photo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, siteUrl } from "@/config/site";
import { categories, products } from "@/data/products";
import { categoryWhatsappUrl, generalWhatsappUrl } from "@/lib/commerce";
import { ProductCard } from "@/components/ProductCard";
import { EmptyCatalog } from "@/components/EmptyCatalog";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const popular = products.filter((p) => p.popular && !p.featured);
  const heroImage = site.heroImage ?? products.find((p) => p.featured && p.images[0])?.images[0] ?? null;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl(),
    sameAs: [site.instagram.url],
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", telephone: `+${site.whatsapp.number}`, availableLanguage: "pt-BR" }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-6 pt-8 md:grid-cols-2 md:pt-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
            {site.descriptor} · {site.city}/{site.state}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{site.tagline}</h1>
          <p className="mt-4 max-w-md text-lg text-muted">{site.slogan}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produtos"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white hover:bg-brand-dark"
            >
              Conheça nossos produtos <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={generalWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-brand px-7 text-base font-semibold text-brand-dark hover:bg-soft"
            >
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>

        {heroImage ? (
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-soft">
            <Photo src={heroImage.src} alt={heroImage.alt} fit={heroImage.fit} priority sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        ) : (
          site.logoFull && (
            <div className="flex items-center justify-center">
              <Image
                src={site.logoFull.src}
                width={site.logoFull.width}
                height={site.logoFull.height}
                alt={`${site.name} — ${site.descriptor}. ${site.tagline}`}
                priority
                sizes="(min-width: 768px) 50vw, 90vw"
                className="h-auto w-full max-w-md"
              />
            </div>
          )
        )}
      </section>

      {/* CATEGORIAS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Encontre um presente especial</h2>
        <p className="mt-2 text-muted">Personalize do seu jeito. Toque em uma categoria.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const hasProducts = products.some((p) => p.category === c.id);
            const cls = "block h-full rounded-2xl border border-line bg-surface p-5 hover:border-brand";
            return (
              <li key={c.id}>
                {hasProducts ? (
                  <Link href="/produtos" className={cls}>
                    <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted">{c.description}</p>
                  </Link>
                ) : (
                  <a href={categoryWhatsappUrl(c.name)} target="_blank" rel="noopener noreferrer" className={cls}>
                    <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted">{c.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
                      <WhatsAppIcon className="h-4 w-4" /> Consultar pelo WhatsApp
                    </span>
                  </a>
                )}
              </li>
            );
          })}
          <li>
            <a
              href={generalWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-2xl border border-dashed border-brand/50 bg-soft/60 p-5 hover:border-brand"
            >
              <h3 className="font-display text-lg font-semibold">E muito mais!</h3>
              <p className="mt-1 text-sm text-muted">Tem uma ideia diferente? Conte para a gente.</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
                <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
              </span>
            </a>
          </li>
        </ul>
      </section>

      {/* DESTAQUES */}
      {products.length === 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-6">
          <EmptyCatalog />
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Em destaque</h2>
            <Link href="/produtos" className="text-sm font-semibold text-brand-dark hover:underline">
              Ver todos
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {(featured.length ? featured : products.slice(0, 4)).map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 2} />
            ))}
          </div>

          {popular.length > 0 && (
            <>
              <h2 className="mt-12 font-display text-2xl font-semibold sm:text-3xl">Mais procurados</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {popular.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      <HowItWorks />

      {/* SOBRE RESUMIDO */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-3xl bg-soft px-6 py-10 sm:px-10">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Sobre o ateliê</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Cada pedido é preparado com atenção aos detalhes, e você conversa diretamente com quem produz.
            Personalize do seu jeito.
          </p>
          <Link href="/sobre" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-dark hover:underline">
            Conhecer o {site.name} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="mx-auto max-w-6xl px-4 py-10 text-center">
        <h2 className="font-display text-3xl font-semibold">Gostou? Vamos criar o seu!</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">Faça seu pedido pelo WhatsApp e consulte opções de personalização.</p>
        <a
          href={generalWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white hover:bg-brand-dark"
        >
          <WhatsAppIcon /> Chamar no WhatsApp
        </a>
      </section>
    </>
  );
}
