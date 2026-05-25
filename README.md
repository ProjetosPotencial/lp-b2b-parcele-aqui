# LP B2B Parcele Aqui - Mar Aberto V1

Landing page B2B do Parcele Aqui, vertical genérica empresarial. Responsiva (mobile + desktop).

## Stack

- HTML estático + Tailwind (via CDN — ver nota de produção abaixo)
- Fontes: Kufam (headings), DM Sans (body)
- Design System Parcele Aqui aplicado via Tailwind config inline
- Carrosséis e slider em JS vanilla (sem dependências externas)

## Deploy

Sem build step necessário. Servir como conteúdo estático.

### Vercel
```
vercel --prod
```
Configurado em `vercel.json` (sem framework, com headers de segurança e cache de imagens).

### Domínio
Apontar `parceleaqui.com.br/b2b` para o deploy.

## Estrutura
- `index.html` — página única (mobile + desktop no mesmo arquivo, responsivo via @media max-width:767px)
- `robots.txt` — SEO crawlers
- `sitemap.xml` — SEO indexação
- `public/images/` — assets (sections, logos, icons)

## SEO (implementado)
- Meta description, keywords, canonical, robots
- Open Graph (Facebook/LinkedIn/WhatsApp) + Twitter Card
- Schema.org JSON-LD: Organization + Service + WebPage + FAQPage
- 1 único `<h1>` (hero); demais títulos em hierarquia h2/h3
- Lazy loading + decoding async nas imagens abaixo da dobra
- Todas as imagens com atributo `alt`

## PENDÊNCIAS antes de ir ao ar

1. **WhatsApp**: substituir `55XXXXXXXXXXX` (em index.html, busque por "PENDENTE") pelo número real do WhatsApp Business. Aguardando Daniel Damázio Naves.
2. **Links de menu/footer**: 7 links marcados com `data-pendente="true"` (Entrar, Política de privacidade, Termos de serviço, Soluções, Parceiros e certificações, Preciso de ajuda). Definir as URLs reais e remover o `data-pendente` + o handler de preventDefault.
3. **Tracking**: adicionar GTM container ID e Meta Pixel ID.
4. **Form / CRM**: configurar webhook endpoint do CRM no form de lead (destino dos leads — aguardando Daniel).
5. **Otimização de imagens**: rodar TinyPNG nas imagens grandes de `public/images/sections/` antes do commit.
6. **Tailwind em produção**: o `cdn.tailwindcss.com` é recomendado apenas para desenvolvimento. Na integração Next.js (Wesley), trocar por Tailwind compilado (build step) para melhor performance.

## Notas de manutenção
- Mudanças mobile vivem dentro de `@media (max-width: 767px)` e não devem afetar o desktop.
- A trava `overflow-x: clip/hidden` em html/body previne rolagem horizontal.
- Carrosséis (Impacto, Quem está por trás) e slider do hero inicializados em `initAll()` no fim do arquivo.
