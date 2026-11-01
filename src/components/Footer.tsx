import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { generalWhatsappUrl } from "@/lib/commerce";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-soft/60 pb-24 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
          <p className="mt-1 text-sm text-muted">{site.paymentNote}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4" /> {site.city} - {site.state}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Fale com a gente</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={generalWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand"
              >
                <Instagram className="h-4 w-4" /> {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Navegue</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li><Link href="/produtos" className="hover:text-brand">Produtos</Link></li>
            <li><Link href="/#como-funciona" className="hover:text-brand">Como funciona</Link></li>
            <li><Link href="/sobre" className="hover:text-brand">Sobre o ateliê</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
