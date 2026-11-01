"use client";

import { useState } from "react";
import { categories, type CategoryId, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function CatalogBrowser({ products }: { products: Product[] }) {
  const [active, setActive] = useState<CategoryId | "all">("all");

  // Só mostra filtros de categorias que têm produto cadastrado.
  const available = categories.filter((c) => products.some((p) => p.category === c.id));
  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  const chip = (selected: boolean) =>
    `shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium ${
      selected ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink"
    }`;

  return (
    <div>
      {available.length > 1 && (
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2" role="group" aria-label="Filtrar por categoria">
          <button type="button" className={chip(active === "all")} onClick={() => setActive("all")} aria-pressed={active === "all"}>
            Todos
          </button>
          {available.map((c) => (
            <button key={c.id} type="button" className={chip(active === c.id)} onClick={() => setActive(c.id)} aria-pressed={active === c.id}>
              {c.name}
            </button>
          ))}
        </div>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((p, i) => (
          <ProductCard key={p.id} product={p} priority={i < 2} />
        ))}
      </div>
    </div>
  );
}
