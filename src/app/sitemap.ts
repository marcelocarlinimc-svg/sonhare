import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/produtos`, priority: 0.9 },
    { url: `${base}/sobre`, priority: 0.5 },
    ...products.map((p) => ({ url: `${base}/produtos/${p.slug}`, priority: 0.8 })),
  ];
}
