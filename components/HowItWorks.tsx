import Image from 'next/image';
import { site } from '@/lib/site-data';

export function HowItWorks() {
  const { howItWorks } = site;
  return (
    <section id="como-funciona" className="bg-brand-black py-20 text-white sm:py-24">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-yellow">
              {howItWorks.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              {howItWorks.title}
            </h2>
          </div>
          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-brand-gray-900">
              <Image
                src={howItWorks.image}
                alt="Equipe demonstrando o fluxo do Parcele Aqui"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-card">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <li key={step.number} className="relative rounded-2xl border border-white/10 p-6">
              <span className="text-3xl font-bold text-brand-yellow">{step.number}</span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
