import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Página não encontrada</h1>
      <p className="mt-3 text-muted">Esse link não existe ou o produto saiu do catálogo.</p>
      <Link
        href="/produtos"
        className="mt-6 inline-flex h-14 items-center justify-center rounded-full bg-brand px-7 font-semibold text-white"
      >
        Ver produtos
      </Link>
    </section>
  );
}
