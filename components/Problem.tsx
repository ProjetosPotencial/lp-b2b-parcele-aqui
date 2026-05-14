import Image from 'next/image';
import { site } from '@/lib/site-data';

export function Problem() {
  const { problem } = site;
  return (
    <section className="bg-brand-gray-50 py-20 sm:py-24">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-brand-gray-100 shadow-card sm:aspect-square">
            <Image
              src={problem.image}
              alt={problem.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="badge">{problem.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-5 text-lg text-brand-gray-700">{problem.description}</p>
          <ul className="mt-8 space-y-3">
            {problem.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow"
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-base text-brand-gray-900">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
