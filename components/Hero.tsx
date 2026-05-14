import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site-data';

export function Hero() {
  const { hero } = site;
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32" id="solucao">
      <div className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 bg-brand-yellow-light/40 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" aria-hidden />
      <div className="container-app grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <span className="badge">{hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-brand-black sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-lg text-brand-text-secondary sm:text-xl">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={hero.cta.href} className="btn-primary">
              {hero.cta.label}
            </Link>
            <Link href={hero.ctaSecondary.href} className="btn-secondary">
              {hero.ctaSecondary.label}
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-brand-text-muted">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden />
              <span>Aprovação em segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden />
              <span>Sem cadastro do cliente</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl bg-brand-beige-light shadow-card sm:aspect-[5/6]">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-brand-yellow sm:block" aria-hidden />
          <div className="absolute -right-4 top-8 hidden rounded-2xl bg-white p-4 shadow-card sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Em até</p>
            <p className="text-2xl font-bold text-brand-black">12x no cartão</p>
            <p className="text-xs text-brand-text-muted">Você recebe à vista</p>
          </div>
        </div>
      </div>
    </section>
  );
}
