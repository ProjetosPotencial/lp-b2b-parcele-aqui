'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site-data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="Parcele Aqui home">
          <Image
            src={site.brand.logo}
            alt="Parcele Aqui"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-gray-700 transition hover:text-brand-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#cta" className="btn-primary hidden sm:inline-flex">
            Falar com especialista
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-black/10 lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-brand-black/5 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-brand-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="#cta" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                Falar com especialista
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
