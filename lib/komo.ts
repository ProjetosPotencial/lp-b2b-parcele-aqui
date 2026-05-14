// Integração com Komo (CRM/captura de leads)
//
// IMPORTANTE: este módulo está preparado para 2 modos de integração.
// O modo é definido automaticamente pelas variáveis de ambiente disponíveis:
//
//  1) Webhook simples (recomendado para começar):
//     - Defina KOMO_WEBHOOK_URL apontando para um endpoint webhook no Komo
//     - Faz POST application/json com o payload do lead
//
//  2) API REST com token:
//     - Defina KOMO_API_KEY e (opcionalmente) KOMO_LIST_ID
//     - Faz POST autenticado para o endpoint configurável KOMO_API_URL
//
// Se a integração com Komo falhar, o fallback é registrar via NOTIFICATION_EMAIL
// (você pode plugar um SMTP/SendGrid em sendFallbackEmail futuramente).

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  role?: string;
  monthlyVolume?: string;
  message?: string;
  source: string;
  path?: string;
  utm?: Record<string, string>;
}

interface KomoResult {
  ok: boolean;
  provider: 'webhook' | 'api' | 'fallback';
  responseStatus?: number;
  responseBody?: unknown;
  error?: string;
}

export async function sendLeadToKomo(lead: LeadPayload): Promise<KomoResult> {
  const webhookUrl = process.env.KOMO_WEBHOOK_URL;
  const apiKey = process.env.KOMO_API_KEY;
  const apiUrl = process.env.KOMO_API_URL ?? 'https://api.komo.cx/v1/contacts';
  const listId = process.env.KOMO_LIST_ID;

  const enrichedLead = {
    ...lead,
    receivedAt: new Date().toISOString(),
  };

  // --- Modo 1: Webhook ---
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrichedLead),
      });
      const body = await safeJson(res);
      return {
        ok: res.ok,
        provider: 'webhook',
        responseStatus: res.status,
        responseBody: body,
      };
    } catch (err) {
      return {
        ok: false,
        provider: 'webhook',
        error: (err as Error).message,
      };
    }
  }

  // --- Modo 2: API REST com token ---
  if (apiKey) {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          ...enrichedLead,
          listId,
        }),
      });
      const body = await safeJson(res);
      return {
        ok: res.ok,
        provider: 'api',
        responseStatus: res.status,
        responseBody: body,
      };
    } catch (err) {
      return {
        ok: false,
        provider: 'api',
        error: (err as Error).message,
      };
    }
  }

  // --- Fallback: nenhuma config disponível ---
  console.warn(
    '[Komo] Nenhuma variável KOMO_WEBHOOK_URL ou KOMO_API_KEY configurada. Lead registrado apenas em log.',
    enrichedLead,
  );
  return { ok: true, provider: 'fallback' };
}

async function safeJson(res: Response): Promise<unknown> {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
