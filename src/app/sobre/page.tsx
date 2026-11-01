import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { site } from "@/config/site";
import { generalWhatsappUrl } from "@/lib/commerce";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Sobre o ateliê",
  description: `Conheça o ${site.name}, ateliê de presentes personalizados em Belo Horizonte, MG.`,
  alternates: { canonical: "/sobre" },
};

/*
  TEXTO INSTITUCIONAL — mantido propositalmente simples e sem fatos
  inventados (história, tempo de mercado, nº de clientes).
  Quando a proprietária enviar a história real, edite os parágrafos abaixo.
*/
export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">Sobre o {site.name}</h1>

      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        <p>
          O {site.name} é um ateliê de {site.city}, {site.state}, de {site.descriptor.toLowerCase()}: canecas,
          taças, caixinhas para festa, topper de bolo, caderneta da saúde, livro do bebê, agendas, cadernos e muito mais.
        </p>
        <p>
          Cada pedido é preparado com atenção aos detalhes. Você conversa diretamente com quem produz, conta o que
          imaginou e combina a personalização do seu jeito.
        </p>
        <p className="font-display text-2xl text-brand-dark">{site.tagline}</p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={generalWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white hover:bg-brand-dark"
        >
          <WhatsAppIcon /> Falar no WhatsApp
        </a>
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-brand px-7 text-base font-semibold text-brand-dark hover:bg-soft"
        >
          <Instagram className="h-5 w-5" /> {site.instagram.handle}
        </a>
      </div>
    </section>
  );
}
