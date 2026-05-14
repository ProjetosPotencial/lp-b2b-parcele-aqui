// Rate limit em memória (single instance)
// Para múltiplas instâncias, trocar por Redis/Upstash

const hits = new Map<string, number>();
const WINDOW_MS = Number(process.env.RATE_LIMIT_SECONDS ?? 10) * 1000;

export function rateLimit(key: string): { ok: boolean; retryAfterMs: number } {
  const now = Date.now();
  const last = hits.get(key) ?? 0;
  const diff = now - last;
  if (diff < WINDOW_MS) {
    return { ok: false, retryAfterMs: WINDOW_MS - diff };
  }
  hits.set(key, now);
  // Limpeza preguiçosa: se mapa crescer demais, descarta entradas antigas
  if (hits.size > 5000) {
    for (const [k, t] of hits) {
      if (now - t > WINDOW_MS * 10) hits.delete(k);
    }
  }
  return { ok: true, retryAfterMs: 0 };
}
