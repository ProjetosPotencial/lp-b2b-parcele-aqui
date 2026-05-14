import Image from 'next/image';
import { site } from '@/lib/site-data';

const trustLogos = [
  '/images/logos/Bradesco default.svg',
  '/images/logos/Component 5.jpg',
  '/images/logos/Component 6.jpg',
  '/images/logos/Component 7.jpg',
  '/images/logos/Component 9.jpg',
];

export function TrustLogos() {
  const { trustLogos: data } = site;
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-xl font-bold text-brand-black sm:text-2xl">
            {data.title}
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {trustLogos.map((src, idx) => (
            <div key={src} className="relative h-10 w-32 grayscale transition hover:grayscale-0">
              <Image src={src} alt={`Bandeira/parceiro ${idx + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
