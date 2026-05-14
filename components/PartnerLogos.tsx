import Image from 'next/image';
import { site } from '@/lib/site-data';

const logos = [
  '/images/logos/Component 2.svg',
  '/images/logos/Component 3.svg',
  '/images/logos/Component 4.svg',
  '/images/logos/Component 14.svg',
  '/images/logos/Component 15.svg',
  '/images/logos/Component 16.svg',
  '/images/logos/Component 17.svg',
];

export function PartnerLogos() {
  const { partnerLogos } = site;
  return (
    <section className="border-y border-brand-black/5 bg-brand-gray-50 py-14">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">
            {partnerLogos.eyebrow}
          </p>
          <h2 className="mt-3 text-xl font-bold text-brand-black sm:text-2xl">
            {partnerLogos.title}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-3 items-center justify-items-center gap-x-8 gap-y-6 opacity-80 sm:grid-cols-4 md:grid-cols-7">
          {logos.map((src, idx) => (
            <div key={src} className="relative h-10 w-28 grayscale transition hover:grayscale-0">
              <Image src={src} alt={`Parceiro ${idx + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-gray-500">{partnerLogos.note}</p>
      </div>
    </section>
  );
}
