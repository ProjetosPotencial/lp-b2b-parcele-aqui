# LP B2B Parcele Aqui — Mar Aberto V1 (POTUX-003)

Landing page B2B do Parcele Aqui voltada para imobiliárias.
Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + API Route com integração Komo.

Design de referência: Figma POTUX-003 (`https://www.figma.com/design/RwuhephWodGcWjsP4piaGi`).

## Estrutura de pastas

```
LP-B2B-Mar-Aberto-V1/
├── app/
│   ├── api/leads/route.ts     # endpoint POST que recebe os leads e envia ao Komo
│   ├── globals.css            # estilos globais + tokens Tailwind
│   ├── layout.tsx             # layout raiz, SEO, fontes
│   └── page.tsx               # composição da LP
├── components/                # seções da LP (Header, Hero, FAQ, LeadForm, etc.)
├── lib/
│   ├── komo.ts                # cliente da integração com Komo
│   ├── rate-limit.ts          # rate limit em memória pra /api/leads
│   └── site-data.ts           # textos e dados da LP em um único arquivo
├── public/images/             # imagens otimizadas + logos
├── images-original/           # fonte (não versionar)
├── images-optimized/          # exportadas (não versionar)
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Como rodar localmente

Requisitos: Node.js 18.17+ (recomendado 20 LTS).

```bash
cp .env.example .env.local
# preencher KOMO_WEBHOOK_URL ou KOMO_API_KEY no .env.local

npm install
npm run dev
```

A LP fica em `http://localhost:3000`. O endpoint dos leads em `http://localhost:3000/api/leads` (POST).

## Build de produção

```bash
npm run build
npm run start
```

O `next.config.js` está com `output: 'standalone'`, então o build gera uma pasta
auto-contida em `.next/standalone/` que pode ser empacotada e movida para o servidor.

## Variáveis de ambiente

| Variável               | Obrigatória | Descrição                                                            |
| ---------------------- | ----------- | -------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Não         | URL canônica da LP (default: `https://parceleaqui.com.br`).          |
| `KOMO_WEBHOOK_URL`     | Não\*       | URL de webhook do Komo. Mais simples de configurar.                  |
| `KOMO_API_KEY`         | Não\*       | Token Bearer da API REST do Komo.                                    |
| `KOMO_API_URL`         | Não         | Endpoint da API Komo (default: `https://api.komo.cx/v1/contacts`).   |
| `KOMO_LIST_ID`         | Não         | ID da lista/segmento onde os leads devem cair.                       |
| `LEAD_SOURCE`          | Não         | Tag de origem aplicada nos leads (default: `lp-b2b-mar-aberto-v1`).  |
| `NOTIFICATION_EMAIL`   | Não         | E-mail de fallback caso Komo esteja indisponível.                    |
| `RATE_LIMIT_SECONDS`   | Não         | Janela do rate limit por IP em segundos (default `10`).              |

\* Defina **uma** das duas (`KOMO_WEBHOOK_URL` **ou** `KOMO_API_KEY`). Se ambas faltarem,
o lead é apenas logado no console — útil pra ambiente de testes.

### Configurar a integração Komo

O arquivo `lib/komo.ts` aceita dois modos. Recomendado começar pelo webhook:

1. No Komo, crie uma automação/webhook de entrada de contato.
2. Copie a URL e cole em `KOMO_WEBHOOK_URL` no `.env.local` (dev) e no `.env` do servidor (prod).
3. Reinicie o serviço (`pm2 restart` ou `docker compose restart`).

Se o time preferir API REST autenticada (com token Bearer), basta usar `KOMO_API_KEY`
e ajustar `KOMO_API_URL` caso o endpoint seja diferente.

## Deploy no servidor do Grupo Potencial

A LP foi configurada com `output: 'standalone'`, que gera um bundle Node.js auto-suficiente.

### Caminho 1 — Node + PM2 (mais simples)

No servidor (Ubuntu/Debian assumido):

```bash
# 1. Pré-requisitos
sudo apt update && sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# 2. Clonar / enviar o projeto para /var/www/lp-b2b-parcele-aqui
sudo mkdir -p /var/www/lp-b2b-parcele-aqui
sudo chown -R $USER:$USER /var/www/lp-b2b-parcele-aqui

# 3. Build local OU no servidor
npm ci --omit=dev
npm run build

# 4. Subir com PM2
PORT=3000 pm2 start npm --name "lp-b2b-parcele-aqui" -- start
pm2 save
pm2 startup systemd
```

Nginx como reverse proxy (recomendado, para HTTPS):

```nginx
server {
    listen 80;
    server_name b2b.parceleaqui.com.br;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

Depois rode `sudo certbot --nginx -d b2b.parceleaqui.com.br` para HTTPS.

### Caminho 2 — Docker (recomendado se a infra do GP já usa containers)

Crie um `Dockerfile` (sugestão, não incluído no repo):

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

E rode `docker build -t lp-b2b . && docker run -d -p 3000:3000 --env-file .env lp-b2b`.

## Checklist antes de publicar

- [ ] `.env` do servidor preenchido com Komo (webhook ou API key)
- [ ] `npm run build` rodou sem erros
- [ ] `npm run typecheck` rodou sem erros
- [ ] Domínio `b2b.parceleaqui.com.br` apontando para o servidor
- [ ] HTTPS ativo (Let's Encrypt via certbot)
- [ ] Lead de teste enviado pelo formulário caiu no Komo
- [ ] Tags UTM do tráfego pago configuradas na origem
- [ ] Imagens em `public/images/sections/` revisadas (tinified.zip recomendado)
- [ ] Logos em `public/images/logos/` com nomes definitivos (renomear `Component N`)

## Próximos passos sugeridos

1. **Renomear logos**: hoje estão como `Component N.svg`. Renomear para os nomes reais (Cielo, Mastercard, etc.) e atualizar o array em `components/PartnerLogos.tsx` e `components/TrustLogos.tsx`.
2. **Sitemap + robots**: criar `app/sitemap.ts` e `app/robots.ts` quando o domínio definitivo estiver pronto.
3. **Analytics**: plugar GA4/Meta Pixel via env var, sem hardcode.
4. **Variações por vertical**: esta versão é genérica B2B. Quando avançar com as outras 3 LPs verticalizadas (Contabilidades, Setor Público, Educacional), criar variantes em `app/(verticals)/<slug>/page.tsx` reaproveitando os componentes.
5. **Testes E2E**: adicionar Playwright para validar o fluxo do formulário antes de cada deploy.

## Referências internas

- Pasta da demanda: `Drive/Gerador de landing pages/02-LPs-em-producao/LP-B2B-Mar-Aberto-V1/`
- Figma: POTUX-003 (`RwuhephWodGcWjsP4piaGi`)
- Padrão de nomenclatura: ver `Drive/Governanca/Padrao-Nomenclatura/`
