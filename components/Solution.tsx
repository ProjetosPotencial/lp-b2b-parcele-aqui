import Image from 'next/image';
import { site } from '@/lib/site-data';

export function Solution() {
  const { solution } = site;
  return (
    <section className="py-20 sm:py-24" aria-label="A solução Parcele Aqui">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="badge">{solution.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {solution.title}
          </h2>
          <p className="mt-5 text-lg text-brand-gray-700">{solution.description}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {solution.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl bg-brand-yellow-light p-4 text-center">
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-gray-700">
                  {h.label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-brand-black sm:text-xl">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-brand-gray-100 shadow-card sm:aspect-[5/6]">
            <Image
              src={solution.image}
              alt={solution.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
