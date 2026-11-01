import type { Metadata } from "next";
import { products } from "@/data/products";
import { CatalogBrowser } from "@/components/CatalogBrowser";
import { EmptyCatalog } from "@/components/EmptyCatalog";
import { HowItWorks } from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Produtos personalizados",
  description:
    "Canecas, taças, caixinhas para festa, topper de bolo, cadernos, agendas e papelaria personalizada em Belo Horizonte. Escolha e peça pelo WhatsApp.",
  alternates: { canonical: "/produtos" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Nossos produtos</h1>
        <p className="mt-2 max-w-xl text-muted">
          Escolha o seu, toque em comprar e combine a personalização pelo WhatsApp.
        </p>
        <div className="mt-6">{products.length === 0 ? <EmptyCatalog /> : <CatalogBrowser products={products} />}</div>
      </section>
      <HowItWorks />
    </>
  );
}
