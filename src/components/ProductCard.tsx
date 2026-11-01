import { Photo } from "./Photo";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { categoryName, type Product } from "@/data/products";
import { ctaLabelShort, priceLabel, productWhatsappUrl } from "@/lib/commerce";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const photo = product.images[0];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <Link href={`/produtos/${product.slug}`} className="block" aria-label={`Ver ${product.name}`}>
        <div className="relative aspect-square w-full bg-soft">
          {photo ? (
            <Photo
              src={photo.src}
              alt={photo.alt}
              fit={photo.fit}
              priority={priority}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
              <ImageIcon className="h-8 w-8" />
              <span className="text-xs">Foto em breve</span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-xs text-muted">{categoryName(product.category)}</p>
        <h3 className="mt-1 font-display text-base font-semibold leading-snug sm:text-lg">
          <Link href={`/produtos/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 hidden text-sm text-muted sm:block">{product.shortDescription}</p>
        <p className="mt-2 text-base font-bold text-brand-dark sm:text-lg">{priceLabel(product)}</p>

        <a
          href={productWhatsappUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          <span className="truncate">{ctaLabelShort(product)}</span>
        </a>
      </div>
    </article>
  );
}
