import { generalWhatsappUrl } from "@/lib/commerce";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Estado "cadastro pendente": aparece enquanto não há produtos reais cadastrados. */
export function EmptyCatalog() {
  return (
    <div className="rounded-2xl border border-dashed border-brand/40 bg-soft/50 px-5 py-10 text-center">
      <h2 className="font-display text-2xl font-semibold">Catálogo em preparação</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Estamos cadastrando os produtos com fotos e valores. Enquanto isso, você já pode pedir o seu pelo
        WhatsApp e contar o que imaginou.
      </p>
      <a
        href={generalWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white hover:bg-brand-dark"
      >
        <WhatsAppIcon /> Conhecer os produtos pelo WhatsApp
      </a>
    </div>
  );
}
