"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { generalWhatsappUrl } from "@/lib/commerce";

const links = [
  { href: "/produtos", label: "Produtos" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/sobre", label: "Sobre o ateliê" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink hover:text-brand">
              {l.label}
            </Link>
          ))}
          <a
            href={generalWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu" className="border-t border-line bg-bg px-4 pb-5 pt-2 md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={generalWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex h-14 items-center justify-center gap-2 rounded-full bg-brand text-base font-semibold text-white"
          >
            <WhatsAppIcon /> Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
