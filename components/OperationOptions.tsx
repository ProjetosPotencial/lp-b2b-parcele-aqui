import Image from 'next/image';
import { site } from '@/lib/site-data';

export function OperationOptions() {
  const { operationOptions } = site;
  return (
    <section className="py-20 sm:py-24" aria-label="Modelo de operação">
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">{operationOptions.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {operationOptions.title}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {operationOptions.options.map((opt) => (
            <article
              key={opt.title}
              className="rounded-3xl border border-brand-black/10 bg-white p-8 shadow-soft transition hover:shadow-card"
            >
              <header>
                <h3 className="text-2xl font-bold text-brand-black">{opt.title}</h3>
                <p className="mt-1 text-sm text-brand-text-muted">{opt.subtitle}</p>
              </header>
              <ul className="mt-6 space-y-3">
                {opt.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-brand-text-primary">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                      aria-hidden
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="relative aspect-[16/7] overflow-hidden rounded-4xl bg-brand-beige-light">
            <Image
              src="/images/sections/secao-como-operar.png"
              alt="Pré-visualização do checkout Parcele Aqui em desktop"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
