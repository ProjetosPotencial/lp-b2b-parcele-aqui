import Image from 'next/image';
import { site } from '@/lib/site-data';
import { LeadForm } from './LeadForm';

export function FinalCTA() {
  const { finalCta } = site;
  return (
    <section id="cta" className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-app grid items-stretch gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="badge">{finalCta.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl lg:text-5xl">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-lg text-brand-gray-700">{finalCta.description}</p>
          <div className="mt-8 hidden overflow-hidden rounded-3xl bg-brand-gray-100 lg:block">
            <div className="relative aspect-[16/10]">
              <Image
                src={finalCta.image}
                alt={finalCta.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
