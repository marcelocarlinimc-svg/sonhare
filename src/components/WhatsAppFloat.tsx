"use client";

import { usePathname } from "next/navigation";
import { generalWhatsappUrl } from "@/lib/commerce";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  const pathname = usePathname();
  // Na página de produto, a barra de compra fixa já ocupa o rodapé no celular.
  const onProduct = pathname?.startsWith("/produtos/") ?? false;

  return (
    <a
      href={generalWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={`fixed bottom-5 right-4 z-50 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 ${
        onProduct ? "hidden md:flex" : "flex"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
