import { site } from '@/lib/site-data';

const icons = [
  // gavel / leilão
  <svg key="i1" viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden>
    <path d="M14 4l6 6m-3-3L7 17l-3-3L14 4zM5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // money / comissão
  <svg key="i2" viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden>
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>,
  // key / sinal
  <svg key="i3" viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden>
    <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M11 14h10l-2 2m2-2l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // file / cartório
  <svg key="i4" viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden>
    <path d="M7 3h7l5 5v13H7V3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M14 3v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>,
];

export function UseCases() {
  const { useCases } = site;
  return (
    <section id="casos-de-uso" className="py-20 sm:py-24">
      <div className="container-app">
        <div className="mx-auto max-w-3xl">
          <span className="badge">{useCases.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {useCases.title}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.items.map((item, idx) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-brand-black/10 bg-white p-6 transition hover:border-brand-yellow hover:shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow-light text-brand-black">
                {icons[idx]}
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-black">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-gray-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
