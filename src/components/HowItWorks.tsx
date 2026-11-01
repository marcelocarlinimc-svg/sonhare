import { site } from "@/config/site";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">Como funciona</h2>
      <p className="mt-2 text-muted">Personalize do seu jeito, direto com quem produz.</p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {site.howItWorks.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-line bg-surface p-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-3 font-semibold">{step.title}</h3>
            <p className="mt-1 text-sm text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
