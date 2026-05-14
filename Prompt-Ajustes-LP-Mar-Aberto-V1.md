# Prompt de Ajustes, LP B2B Parcele Aqui Mar Aberto V1

**Para:** chat de desenvolvimento Cowork
**Origem:** comparação Figma POTUX-003 (file `RwuhephWodGcWjsP4piaGi`, frame `2151:15208`) versus preview.html atual
**Data:** 14/05/2026
**Stack:** HTML, Tailwind CSS, custom CSS classes (container-fig, heading, kicker, h2, h4, content, btn-primary, btn-secondary)

## Contexto rápido

O preview.html atual em `02-LPs-em-producao/LP-B2B-Mar-Aberto-V1/preview.html` está em ~70% de fidelidade ao Figma. As divergências abaixo são estruturais, ordenadas por impacto visual. Aplica uma por vez, valida com Victor antes de seguir.

Cores e tipografia já estão corretas. Não mexer em `tailwind.config.ts`.

**Critério geral de pronto:** cada Dobra do preview deve reproduzir a estrutura visual da Dobra equivalente no Figma. Não inventar componentes. Não adicionar imagens decorativas extras.

---

## Ajuste 1, Hero (linhas 105-162)

**Atual.** Botões de navegação do carrossel (setas 56x56) com `style="left: -8px; bottom: 10%;"`, posicionados fora da imagem, à esquerda.

**Figma.** Botões sobrepostos à imagem com offset negativo. Aparecem sobre a foto, perto da base, à direita.

**Patch.** No `<div class="relative w-full" style="max-width: 627px; aspect-ratio: 660/620;">` (linha 137), mover o `<div class="absolute z-20 flex flex-col gap-3">` dos botões:

```html
<div class="absolute z-20 flex flex-col gap-3" style="right: -28px; bottom: 25%;">
```

Trocar `rounded-md` por `rounded-full` nos dois botões.

---

## Ajuste 2, Dobra 12 Como Funciona (linhas 282-313)

**Atual.** Imagem grande de homem asiático sorrindo (aspect 16/7) entre o título e os 4 cards numerados.

**Figma.** Dobra 12 é só os 4 cards numerados horizontais com separadores verticais. Sem imagem grande. A imagem de pessoa pertence à Dobra 11.

**Patch.** Apagar o bloco da imagem (linhas 288-293):

```html
<div class="mt-12 relative">
  <div class="absolute -top-4 -right-4 h-1/2 w-1/3 rounded-3xl bg-brand-yellow hidden lg:block z-0" aria-hidden></div>
  <div class="relative z-10 aspect-[16/7] w-full overflow-hidden rounded-3xl bg-brand-beige-light shadow-card">
    <img src="public/images/sections/secao-como-funciona.jpg" alt="Equipe trabalhando" class="h-full w-full object-cover" />
  </div>
</div>
```

Ajustar grid dos 4 cards (linha 294) para adicionar separadores verticais:

```html
<div class="mt-10 grid grid-cols-1 md:grid-cols-4 gap-0 lg:divide-x lg:divide-brand-yellow/40">
```

Cada card recebe `lg:px-6` no padding interno.

---

## Ajuste 3, Dobra 7 Empresas que já utilizam (linhas 371-392)

**Atual.** 2 colunas: texto à esquerda, grid 3x3 de 9 logos à direita.

**Figma.** Coluna única vertical. Texto no topo, 4 fileiras horizontais de logos empilhadas, cada fileira com 1152px largura.

**Patch.** Reestruturar a Dobra 7 inteira:

```html
<section class="py-20 bg-brand-beige-light">
  <div class="container-fig">
    <div class="max-w-4xl">
      <span class="kicker">Empresas que já utilizam</span>
      <h2 class="heading h2 mt-4">Presente em empresas que utilizam o parcelamento como estratégia de fechamento</h2>
      <p class="content mt-6 text-brand-text-secondary">O Parcele Aqui já apoia empresas de diferentes segmentos, ajudando a transformar barreiras financeiras em oportunidades reais de fechamento, com operações processadas por meio da adquirência Cielo, garantindo segurança, confiabilidade e liquidação à vista para você.</p>
    </div>
    <div class="mt-12 space-y-6">
      <div class="flex items-center justify-between gap-8 py-6 border-b border-brand-yellow/20">
        <img src="public/images/logos/Component 2.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 3.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 4.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
      </div>
      <div class="flex items-center justify-between gap-8 py-6 border-b border-brand-yellow/20">
        <img src="public/images/logos/Component 14.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 15.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 16.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
      </div>
      <div class="flex items-center justify-between gap-8 py-6 border-b border-brand-yellow/20">
        <img src="public/images/logos/Component 17.svg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 5.jpg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="public/images/logos/Component 6.jpg" alt="" class="h-10 object-contain grayscale hover:grayscale-0 transition" />
      </div>
    </div>
  </div>
</section>
```

---

## Ajuste 4, Dobra 4 Você escolhe como operar (linhas 395-443)

**Atual.** 2 cards lado a lado (Whitelabel bege + Parcele Aqui verde), sem CTAs.

**Figma.** 3 sub-blocos verticais empilhados. Cada um com kicker, título, body, 4 bullets arrow_forward, e botão CTA 369x56.

**Patch.** Substituir o grid de 2 cards por stack de 3 sub-blocos. Modelos: Whitelabel, Co-branded, White-label parcial. A copy dos 3 sub-blocos precisa ser validada com Victor antes de subir (Figma estava com placeholder).

Estrutura base de cada sub-bloco:

```html
<article class="rounded-xl bg-brand-beige-light p-10 shadow-card">
  <span class="kicker">Modelo [NOME]</span>
  <h3 class="heading text-2xl font-bold text-brand-brown mt-3">[Título do modelo]</h3>
  <p class="content mt-4 text-brand-text-secondary">[Body do modelo]</p>
  <ul class="mt-6 space-y-3">
    <li class="flex items-center gap-3 content">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="text-brand-yellow"/>
      </svg>
      [Benefício 1]
    </li>
    <!-- benefícios 2, 3, 4 -->
  </ul>
  <a href="#cta" class="btn-primary mt-8 inline-flex" style="width: 369px; height: 56px; padding: 0 24px;">[CTA do modelo]</a>
</article>
```

Empilhar 3 cards desse formato dentro de `<div class="mt-12 space-y-12">`.

**Remover** a frase "Dois modelos, o mesmo objetivo" (linha 438) porque agora são 3 modelos.

A imagem `secao-como-operar.png` no final da seção pode ser mantida ou removida, a depender da preferência visual.

**Importante:** confirmar copy dos 3 modelos com Victor antes de subir. Sugestão de nomes: Whitelabel (sua marca), Co-branded (sua marca + Parcele Aqui), White-label parcial (Parcele Aqui customizado).

---

## Ajuste 5, Dobra 16 Quem está por trás (linhas 446-487)

**Atual.** Layout vertical em coluna única: texto em cima, grid 3x2 de 6 cards embaixo.

**Figma.** Layout em 2 colunas. Coluna esquerda 369px com texto institucional. Coluna direita com grid 3x2 de 6 cards.

**Patch.** Substituir o `<div class="max-w-3xl">` (linha 448) que envolve texto, e o `<div class="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6">` (linha 454) que envolve os cards, por um único grid externo de 2 colunas:

```html
<section id="quem-somos" class="py-20 bg-brand-beige-light">
  <div class="container-fig grid items-start gap-12 lg:grid-cols-[369px_1fr]">
    <div>
      <span class="kicker">POTENCIAL TECNOLOGIA</span>
      <h2 class="heading h2 mt-4">Quem está por trás do Parcele Aqui</h2>
      <p class="content mt-6 text-brand-text-secondary">O Parcele Aqui é desenvolvido pela Potencial Tecnologia, empresa brasileira com mais de 25 anos de experiência em meios de pagamento, automação e gestão financeira.</p>
      <p class="content mt-4 text-brand-text-secondary">Infraestrutura robusta, certificações de segurança e operações em larga escala em todo o Brasil.</p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 6 cards existentes (25+ anos, Multi-canal, Tempo real, Escala nacional, Parceria sólida, Flexibilidade) -->
    </div>
  </div>
</section>
```

O atual `<div class="text-brand-brown font-bold text-2xl mb-4 heading">POTENCIAL TECNOLOGIA</div>` na linha 449 vira `<span class="kicker">POTENCIAL TECNOLOGIA</span>` para consistência com as outras dobras.

Os 6 cards existentes ficam dentro do grid direito sem alteração de conteúdo.

---

## Ajuste 6, Dobra 17 Excelência e confiança (linhas 490-507)

**Atual.** 2 colunas: texto à esquerda + grid 2x3 (6 logos) à direita: Bradesco, Poupatempo, Uai, DetranPR, Capitale e outros.

**Figma.** Seção mais compacta. Apenas 2 logo containers institucionais, parceria com Cielo. Não 6 logos.

**Patch.** Reduzir o grid de logos para 2 destaques:

```html
<section class="py-20 bg-white">
  <div class="container-fig grid items-center gap-12 lg:grid-cols-2">
    <div>
      <span class="kicker">Segurança comprovada</span>
      <h2 class="heading h2 mt-4">Excelência e confiança em cada transação</h2>
      <p class="content mt-6 text-brand-text-secondary">A parceria com a Cielo, uma das principais adquirentes do mercado, reforça a confiabilidade no processamento de pagamentos seguro, eficiente e de alta performance.</p>
      <p class="content mt-4 text-brand-text-secondary">Com infraestrutura certificada e padrões rigorosos de segurança, o Parcele Aqui garante operações confiáveis, escaláveis e em conformidade regulatória.</p>
    </div>
    <div class="flex flex-col gap-6 items-center justify-center">
      <div class="w-full max-w-md rounded-2xl bg-brand-beige-light p-8 shadow-soft flex items-center justify-center" style="height: 104px;">
        <img src="public/images/logos/cielo.svg" alt="Cielo" class="h-12 object-contain" />
      </div>
      <div class="w-full max-w-md rounded-2xl bg-brand-beige-light p-8 shadow-soft flex items-center justify-center" style="height: 81px;">
        <img src="public/images/logos/bandeiras-cartao.svg" alt="Bandeiras Visa Mastercard" class="h-10 object-contain" />
      </div>
    </div>
  </div>
</section>
```

Os logos Bradesco, Poupatempo, Uai, DetranPR podem migrar para a Dobra 7 (empresas que utilizam) se ainda não estiverem lá.

**Importante:** se não houver SVGs `cielo.svg` e `bandeiras-cartao.svg` em `public/images/logos/`, baixar e adicionar antes de subir.

---

## Ajuste 7, Dobra 14 CTA Final (linhas 577+)

**Atual.** 2 colunas: texto + imagem decorativa à esquerda, formulário de lead inline à direita.

**Figma.** CTA simples e centralizado. Sem formulário inline, sem imagem decorativa. Apenas kicker, título, body e 1 botão único.

**Patch.** Substituir o layout em 2 colunas por CTA centralizado:

```html
<section id="cta" class="py-20 bg-brand-yellow/10">
  <div class="container-fig text-center max-w-2xl mx-auto">
    <span class="kicker">Hora de fechar mais negócios</span>
    <h2 class="heading h2 mt-4">Transforme barreiras financeiras em oportunidades de fechamento</h2>
    <p class="content mt-6 text-brand-text-secondary">Ofereça parcelamento sem risco, aumente suas conversões e entregue mais valor aos seus clientes com o Parcele Aqui.</p>
    <a href="#contato" class="btn-primary mt-10 inline-flex justify-center" style="width: 369px; height: 56px; padding: 0 24px; font-size: 15px;">Quero simular parcelamento</a>
  </div>
</section>
```

O formulário de lead (LeadForm) pode virar nova seção separada abaixo da Dobra 14, ou ser movido para `#contato` em página dedicada. Decisão de produto a confirmar com Victor.

---

## Ajuste 8, FAQ (linhas 510-574)

**Observação importante.** O preview tem aviso na linha 515: "Conteúdo a definir, o Figma deixou placeholder. Sugestões abaixo, ajuste conforme briefing comercial."

**Decisão pendente com Victor.** O Figma original tem dobra de FAQ marcada como `hidden="true"`, ou seja, foi desenhada mas não publicada. Duas opções:

A. Se a decisão é manter FAQ na V1: remover o aviso da linha 515, revisar as 6 perguntas e respostas com o time comercial (especialmente a sobre MDR e a sobre chargeback), e validar copy final.

B. Se a decisão é seguir o Figma estrito: remover a seção inteira (linhas 510-574).

---

## Ordem sugerida de aplicação

1. Ajuste 1, Hero (rápido, alto impacto)
2. Ajuste 2, Dobra 12 (rápido, remove ruído visual)
3. Ajuste 6, Dobra 17 (rápido, melhora foco)
4. Ajuste 5, Dobra 16 (médio, reestrutura layout)
5. Ajuste 3, Dobra 7 (médio, redesenha logos)
6. Ajuste 7, Dobra 14 CTA Final (médio, exige decisão sobre form)
7. Ajuste 4, Dobra 4 Modelos (longo, exige copy nova e 3º sub-bloco)
8. Ajuste 8, FAQ (decisão de produto, não de layout)

## Critério de validação após cada ajuste

Regenerar o preview.html, abrir no navegador, comparar visualmente com o frame do Figma (`https://www.figma.com/design/RwuhephWodGcWjsP4piaGi/?node-id=2151-15208`). Subir pra git/Vercel ao final e mandar o link de produção pra Victor confirmar fidelidade.

## O que NÃO mexer

Header, Dobra Hero (estrutura, só ajustar botões), Dobra 10 Infraestrutura, Dobra 01 Problema, Dobra 11 Solução, Dobra 2 Impacto. Já estão fiéis ao Figma.

Tokens em `tailwind.config.ts`. Já estão sincronizados com o DS.
