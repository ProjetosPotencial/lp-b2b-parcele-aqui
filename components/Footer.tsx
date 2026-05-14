import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site-data';

export function Footer() {
  const { footer, brand } = site;
  return (
    <footer className="border-t border-brand-black/10 bg-white py-14">
      <div className="container-app grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Image src={brand.logo} alt="Parcele Aqui" width={140} height={32} className="h-8 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-brand-text-secondary">{footer.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-text-primary transition hover:text-brand-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-app mt-10 flex flex-col items-start justify-between gap-2 border-t border-brand-black/5 pt-6 text-xs text-brand-text-muted sm:flex-row sm:items-center">
        <p>{footer.legal}</p>
        <p>Feito com cuidado pelo time Grupo Potencial.</p>
      </div>
    </footer>
  );
}
