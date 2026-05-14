# Deploy no GitHub + Vercel — POTUX-003

Guia passo a passo pra publicar a LP B2B Parcele Aqui (Mar Aberto V1) em produção via Vercel, com deploy automático a cada push no GitHub.

## Pré-requisitos

- Conta GitHub (Grupo Potencial) — já tem
- Conta Vercel logada com GitHub — já tem
- Git instalado no Windows: https://git-scm.com/download/win
- Node.js 20 LTS instalado: https://nodejs.org/

Pra checar se Git e Node estão instalados, abre o PowerShell e roda:

```powershell
git --version
node --version
```

Se algum não responder, instala antes de seguir.

## Parte 1 — Criar o repositório no GitHub

1. Acessa https://github.com/new
2. Preenche:
   - **Owner:** sua org do GP (ou conta pessoal)
   - **Repository name:** `lp-b2b-parcele-aqui` (ou `potux-003-lp-b2b`)
   - **Description:** "LP B2B Parcele Aqui — Mar Aberto V1 (POTUX-003)"
   - **Visibility:** Private
   - **Não marque** "Add a README", "Add .gitignore" nem "Choose a license" (esses arquivos já existem no projeto)
3. Clica em "Create repository"
4. Copia a URL do repositório que aparece (ex: `https://github.com/grupopotencial/lp-b2b-parcele-aqui.git`)

## Parte 2 — Subir o código local pro GitHub

Abre o PowerShell **dentro da pasta do projeto**:

```powershell
cd "C:\Users\poten\Meu Drive (vmata@potencialgrupo.com.br)\PROJETOS POTENCIAL\Gerador de landing pages\02-LPs-em-producao\LP-B2B-Mar-Aberto-V1"
```

### Primeiro push

```powershell
# 1. Inicializa o repositório local
git init
git branch -M main

# 2. Configura seu usuário (só na primeira vez)
git config user.name "Seu Nome"
git config user.email "seu.email@potencialgrupo.com.br"

# 3. Adiciona todos os arquivos (respeitando .gitignore)
git add .

# 4. Primeiro commit
git commit -m "feat: inicializa LP B2B Parcele Aqui Mar Aberto V1 (POTUX-003)"

# 5. Conecta com o GitHub (substitui pela URL que você copiou)
git remote add origin https://github.com/grupopotencial/lp-b2b-parcele-aqui.git

# 6. Sobe pro GitHub
git push -u origin main
```

Se o `git push` pedir login, vai abrir o navegador pra você autenticar pelo GitHub. Aceita.

## Parte 3 — Conectar Vercel ao repositório

1. Acessa https://vercel.com/new
2. Procura por `lp-b2b-parcele-aqui` na lista e clica em **Import**
3. Na tela de configuração:
   - **Project Name:** `lp-b2b-parcele-aqui` (pode renomear)
   - **Framework Preset:** Next.js (detecta sozinho)
   - **Root Directory:** deixa em branco (raiz do repo)
4. **Environment Variables** — clica em "Add" e adiciona:

| Name                    | Value                                                                | Environment            |
| ----------------------- | -------------------------------------------------------------------- | ---------------------- |
| `KOMO_WEBHOOK_URL`      | (URL do webhook Komo)                                                | Production, Preview    |
| `LEAD_SOURCE`           | `lp-b2b-mar-aberto-v1`                                               | Production, Preview    |
| `NEXT_PUBLIC_SITE_URL`  | `https://lp-b2b-parcele-aqui.vercel.app` (ajustar depois do domínio) | Production             |

Se ainda não tem a URL do Komo, deixa em branco e adiciona depois. A LP funciona sem isso (form só não envia pro CRM).

5. Clica em **Deploy**

Em 1 a 2 minutos a Vercel termina o build e te entrega uma URL tipo `https://lp-b2b-parcele-aqui-xxxxx.vercel.app`.

## Parte 4 — Custom domain (opcional, mas recomendado)

Pra usar `b2b.parceleaqui.com.br` em vez da URL `.vercel.app`:

1. Dentro do projeto na Vercel, vai em **Settings → Domains**
2. Em "Add", digita `b2b.parceleaqui.com.br`
3. Vercel mostra os registros DNS que você precisa criar (geralmente um `CNAME` apontando pra `cname.vercel-dns.com`)
4. Vai no seu provedor de DNS (Registro.br, Cloudflare, etc.) e adiciona o registro
5. Volta na Vercel e aguarda alguns minutos. A Vercel emite o certificado SSL automaticamente

## Parte 5 — Deploy contínuo

Daqui pra frente, todo `git push origin main` dispara um deploy de produção na Vercel automaticamente.

Pra criar uma branch de preview (testar uma variação antes de subir pra prod):

```powershell
git checkout -b feature/nova-secao
# faz alterações
git add .
git commit -m "feat: adiciona seção X"
git push -u origin feature/nova-secao
```

A Vercel gera uma URL de preview única pra essa branch, sem afetar a produção. Quando aprovar, faz merge na main pelo GitHub.

## Comandos úteis no dia a dia

```powershell
# Ver status (o que mudou)
git status

# Adicionar mudanças e commitar
git add .
git commit -m "fix: ajusta título do hero"

# Subir pro GitHub (e disparar deploy automático na Vercel)
git push

# Baixar mudanças que outra pessoa fez
git pull
```

## Troubleshooting

**`git push` falha com erro de permissão**
- Confere se o email do `git config` está vinculado à sua conta GitHub
- Verifica se você é colaborador do repositório (ou owner)

**Build falha na Vercel mas funciona localmente**
- Provavelmente diferença de Node version. Configura em **Settings → Functions → Node.js Version → 20.x**
- Confere os logs de build na aba "Deployments" pra ver o erro exato

**Form não envia leads**
- Verifica se `KOMO_WEBHOOK_URL` foi adicionada em **Environment Variables** na Vercel
- Depois de adicionar/alterar env vars, é preciso **redeploy** (botão "Redeploy" no último deployment)

**LP carrega mas as imagens ficam quebradas**
- Confirma que a pasta `public/images/` foi commitada pro Git: `git ls-files public/images | head -5`
- Se vazia, rodar `git add public/images && git commit -m "fix: adiciona imagens" && git push`

## Estrutura de branches sugerida

- `main` → produção (Vercel deploy automático em `https://b2b.parceleaqui.com.br`)
- `staging` → ambiente de homologação (deploy automático em `https://staging-...vercel.app`)
- `feature/<nome>` → branches de feature (geram URLs de preview por commit)

## Próximos passos pós-deploy

1. Configurar Google Analytics 4 (env var `NEXT_PUBLIC_GA_ID`)
2. Configurar Meta Pixel (env var `NEXT_PUBLIC_META_PIXEL_ID`)
3. Adicionar Vercel Analytics nativo (1 clique nas Settings)
4. Configurar alertas de deploy via Slack/email
5. Habilitar Vercel Speed Insights pra monitorar Core Web Vitals
