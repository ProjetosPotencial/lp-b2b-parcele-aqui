import { site } from '@/lib/site-data';

export function CredibilityStats() {
  const { credibilityStats } = site;
  return (
    <section className="py-16 sm:py-20" aria-label="Indicadores de credibilidade">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-brand-black sm:text-3xl">
            {credibilityStats.title}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityStats.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-yellow/40 bg-brand-yellow-light p-6"
            >
              <h3 className="text-base font-bold text-brand-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
