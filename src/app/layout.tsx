import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site, siteUrl } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${site.name} | Personalizados e papelaria criativa em Belo Horizonte`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "canecas personalizadas",
    "taças personalizadas",
    "caixinhas personalizadas para festa",
    "topper de bolo",
    "caderneta da saúde personalizada",
    "livro do bebê personalizado",
    "agenda personalizada",
    "papelaria criativa",
    "presentes personalizados",
    "Belo Horizonte",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} | ${site.descriptor}`,
    description: site.description,
    images: [{ url: "/images/brand/logo-completa.png", alt: site.name }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF5F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
