# LP B2B Parcele Aqui - Mar Aberto V1

Landing page B2B do Parcele Aqui, vertical genérica empresarial.

## Stack

- HTML estático (Tailwind CDN)
- Fontes: Kufam (headings), DM Sans (body), Inter (buttons)
- DS Parcele Aqui aplicado via Tailwind config inline

## Deploy

Sem build step necessário. Servir como conteúdo estático.

### Vercel

```
vercel --prod
```

Configurado em `vercel.json` (sem framework).

### Domínio

Apontar `parceleaqui.com.br/b2b` ou subdomínio para o deploy Vercel.

## Estrutura

- `index.html` - Página única
- `robots.txt` - SEO crawlers
- `sitemap.xml` - SEO indexação
- `public/images/` - Assets visuais

## Tracking (pendente)

Adicionar GTM container ID e Meta Pixel ID antes de subir produção.

## Form Komo (pendente)

Webhook endpoint do Komo a configurar no form de lead.
