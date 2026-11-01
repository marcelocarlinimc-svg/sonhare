import { site } from "@/config/site";
import type { Product } from "@/data/products";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function hasNumericPrice(p: Product): p is Product & { price: number } {
  return (p.priceType === "fixed" || p.priceType === "from") && typeof p.price === "number" && p.price > 0;
}

/** Texto do preço exatamente como aparece no site */
export function priceLabel(p: Product): string {
  if (hasNumericPrice(p)) {
    return p.priceType === "from" ? `A partir de ${brl.format(p.price)}` : brl.format(p.price);
  }
  return p.priceType === "quote" ? "Sob consulta" : "Preço em breve";
}

/** Texto curto para o botão dos cards (cabe em 2 colunas no celular) */
export function ctaLabelShort(p: Product): string {
  return hasNumericPrice(p) ? "Quero o meu" : "Orçamento";
}

/** Texto do botão principal */
export function ctaLabel(p: Product): string {
  return hasNumericPrice(p) ? "Quero personalizar o meu" : "Pedir orçamento";
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function generalWhatsappUrl(): string {
  return whatsappUrl(site.whatsapp.generalMessage);
}

export function categoryWhatsappUrl(categoryName: string): string {
  return whatsappUrl(
    `Olá! Vim pelo site do ${site.name} e tenho interesse em: ${categoryName}. Poderia me passar mais informações sobre a personalização?`,
  );
}

export function productWhatsappUrl(p: Product): string {
  const base = `Olá! Vim pelo site do ${site.name} e gostaria de fazer um pedido de ${p.name}.`;
  const price = hasNumericPrice(p)
    ? ` O valor anunciado é ${brl.format(p.price)}${p.priceType === "from" ? " (a partir de)" : ""}.`
    : "";
  return whatsappUrl(`${base}${price} Poderia me passar mais informações sobre a personalização?`);
}
