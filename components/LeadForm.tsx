'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  monthlyVolume: string;
  message: string;
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  monthlyVolume: '',
  message: '',
};

export function LeadForm() {
  const [data, setData] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'lp-b2b-mar-aberto-v1',
          path: typeof window !== 'undefined' ? window.location.pathname : '/',
          utm: typeof window !== 'undefined' ? Object.fromEntries(new URLSearchParams(window.location.search)) : {},
        }),
      });
      const body = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(body?.error ?? 'Não foi possível enviar agora. Tente novamente em instantes.');
        return;
      }
      setStatus('success');
      setData(initial);
    } catch (err) {
      setStatus('error');
      setErrorMessage('Sem conexão com o servidor. Verifique sua internet e tente novamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-black">Recebemos seu contato.</h3>
        <p className="mt-2 text-sm text-brand-gray-700">
          Nosso time comercial vai entrar em contato em até 1 dia útil pelos canais informados.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-black underline underline-offset-4"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-card sm:p-8" noValidate>
      <h3 className="text-xl font-bold text-brand-black">Fale com um especialista</h3>
      <p className="mt-1 text-sm text-brand-gray-700">
        Responda em 60 segundos. Sem compromisso, sem letras miúdas.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Nome completo" required>
          <input
            required
            type="text"
            value={data.name}
            onChange={onChange('name')}
            autoComplete="name"
            className={inputClass}
            placeholder="Como podemos te chamar?"
          />
        </Field>
        <Field label="E-mail corporativo" required>
          <input
            required
            type="email"
            value={data.email}
            onChange={onChange('email')}
            autoComplete="email"
            className={inputClass}
            placeholder="voce@imobiliaria.com.br"
          />
        </Field>
        <Field label="Telefone / WhatsApp" required>
          <input
            required
            type="tel"
            value={data.phone}
            onChange={onChange('phone')}
            autoComplete="tel"
            className={inputClass}
            placeholder="(11) 99999-9999"
          />
        </Field>
        <Field label="Empresa" required>
          <input
            required
            type="text"
            value={data.company}
            onChange={onChange('company')}
            autoComplete="organization"
            className={inputClass}
            placeholder="Nome da imobiliária"
          />
        </Field>
        <Field label="Cargo">
          <input
            type="text"
            value={data.role}
            onChange={onChange('role')}
            autoComplete="organization-title"
            className={inputClass}
            placeholder="Diretor, gerente, corretor..."
          />
        </Field>
        <Field label="Volume mensal estimado">
          <select value={data.monthlyVolume} onChange={onChange('monthlyVolume')} className={inputClass}>
            <option value="">Selecione</option>
            <option value="ate-100k">Até R$ 100 mil</option>
            <option value="100-500k">R$ 100 mil a R$ 500 mil</option>
            <option value="500k-1m">R$ 500 mil a R$ 1 milhão</option>
            <option value="acima-1m">Acima de R$ 1 milhão</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="O que você gostaria de resolver?">
            <textarea
              value={data.message}
              onChange={onChange('message')}
              rows={3}
              className={`${inputClass} resize-y`}
              placeholder="Conte um pouco do contexto do seu negócio (opcional)"
            />
          </Field>
        </div>
      </div>

      <p className="mt-4 text-xs text-brand-gray-500">
        Ao enviar, você concorda com nossa política de privacidade e autoriza o contato comercial.
      </p>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-6 w-full justify-center"
      >
        {status === 'loading' ? 'Enviando...' : 'Quero falar com a Parcele Aqui'}
      </button>

      {status === 'error' ? (
        <p role="alert" className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  'block w-full rounded-xl border border-brand-black/10 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-gray-500 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-brand-gray-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
    </label>
  );
}
