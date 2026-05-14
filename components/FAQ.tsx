'use client';

import { useState } from 'react';
import Image from 'next/image';
import { site } from '@/lib/site-data';

export function FAQ() {
  const { faq } = site;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-beige-light py-20 sm:py-24">
      <div className="container-app grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <span className="badge">{faq.eyebrow}</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-black sm:text-4xl">
            {faq.title}
          </h2>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl bg-brand-beige-light">
            <Image
              src={faq.image}
              alt="Cliente do Parcele Aqui sorrindo em um ambiente de trabalho"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="space-y-3">
          {faq.items.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-2xl border border-brand-black/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-brand-yellow-light/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-black">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black transition ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-brand-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
