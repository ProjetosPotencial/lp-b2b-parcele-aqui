import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadToKomo } from '@/lib/komo';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const LeadSchema = z.object({
  name: z.string().trim().min(2, 'Nome inválido').max(120),
  email: z.string().trim().email('E-mail inválido').max(160),
  phone: z
    .string()
    .trim()
    .min(8, 'Telefone inválido')
    .max(30)
    .regex(/^[+()\-\s0-9]+$/, 'Telefone com caracteres inválidos'),
  company: z.string().trim().min(2, 'Empresa inválida').max(160),
  role: z.string().trim().max(120).optional().default(''),
  monthlyVolume: z
    .enum(['ate-100k', '100-500k', '500k-1m', 'acima-1m', ''])
    .optional()
    .default(''),
  message: z.string().trim().max(2000).optional().default(''),
  source: z.string().trim().max(120),
  path: z.string().trim().max(500).optional().default('/'),
  utm: z.record(z.string(), z.string()).optional().default({}),
});

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  // Anti-flood
  const rl = rateLimit(`leads:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Aguarde alguns segundos e tente novamente.' },
      { status: 429, headers: { 'Retry-After': String(Math.ceil(rl.retryAfterMs / 1000)) } },
    );
  }

  // Parse + validação
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Corpo inválido' }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Dados inválidos. Verifique os campos.',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Honeypot opcional: rejeita se o payload tiver campo "company_name" (bots costumam preencher)
  if ((payload as Record<string, unknown>).company_name) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  try {
    const result = await sendLeadToKomo(lead);

    if (!result.ok) {
      console.error('[leads] Falha ao enviar para Komo:', result);
      return NextResponse.json(
        {
          error:
            'Não conseguimos registrar seu contato agora. Tente novamente em instantes ou nos chame no WhatsApp.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: true, provider: result.provider },
      { status: 200 },
    );
  } catch (err) {
    console.error('[leads] Erro inesperado:', err);
    return NextResponse.json({ error: 'Erro inesperado no servidor.' }, { status: 500 });
  }
}

// Health check simples
export async function GET() {
  return NextResponse.json({ ok: true, service: 'leads', timestamp: new Date().toISOString() });
}
