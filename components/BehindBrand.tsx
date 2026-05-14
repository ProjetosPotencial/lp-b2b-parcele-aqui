import { site } from '@/lib/site-data';

export function BehindBrand() {
  const { behindBrand } = site;
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-brand-green py-20 text-white sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-20 bg-grid" aria-hidden />
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
            {behindBrand.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            {behindBrand.title}
          </h2>
          <p className="mt-5 text-base text-white/85">{behindBrand.description}</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {behindBrand.pillars.map((p) => (
            <article key={p.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
