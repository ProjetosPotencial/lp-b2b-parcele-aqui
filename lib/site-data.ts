// Conteúdo da LP B2B Parcele Aqui - Mar Aberto V1 (POTUX-003)
// Fonte: Figma nó 2151:15208 (versão final B2B genérica)
// IMPORTANTE: copy é literal do Figma. Não alterar sem alinhamento.

export const site = {
  brand: {
    name: 'Parcele Aqui',
    tagline: 'B2B',
    logo: '/images/logo-parcele-aqui.svg',
    company: 'Potencial Tecnologia',
    cnpj: '21.301.803/0001-56',
    supportEmail: 'suporte@potencialtecnologia.com.br',
    supportPhone: '(11) 3159-1380',
  },
  nav: [
    { label: 'Solução', href: '#solucao' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Quem somos', href: '#quem-somos' },
  ],
  hero: {
    kicker: 'Parcelamento B2B sem risco para sua empresa',
    title: 'Destrave negociações B2B com parcelamento no cartão e receba à vista, sem inadimplência',
    subtitle: 'Seus clientes parcelam em até 12x. Sua empresa recebe à vista e sem risco.',
    bullets: [
      'Sua empresa recebe à vista',
      'Zero risco de inadimplência',
      'Ativação rápida e 100% digital',
    ],
    cta: { label: 'Falar com um especialista', href: '#cta' },
    ctaSecondary: { label: 'Como funciona', href: '#como-funciona' },
    image: '/images/sections/hero-principal.jpg',
    imageAlt: 'Profissional sorridente',
  },
  infrastructure: {
    kicker: 'Infraestrutura financeira confiável',
    title: 'Infraestrutura sólida para operações financeiras B2B',
    body: 'Desenvolvido pela Potencial Tecnologia, com mais de 25 anos de experiência em meios de pagamento. Infraestrutura certificada, segura e com liquidação à vista para o emissor.',
    pillars: [
      { title: 'Potencial Tecnologia', description: 'Mais de 25 anos em meios de pagamento e gestão financeira.' },
      { title: 'Segurança certificada', description: 'PCI-DSS, LGPD e governança bancária em cada transação.' },
      { title: 'Processamento Cielo', description: 'Adquirência da líder de mercado em pagamentos no Brasil.' },
      { title: '100% digital', description: 'Onboarding online, contratação por assinatura eletrônica.' },
    ],
  },
  problem: {
    kicker: 'O gargalo está no pagamento',
    title: 'O que realmente trava negociações no B2B',
    body: 'O problema raramente é falta de interesse. É a forma de pagamento que trava o fechamento.',
    subcardTitle: 'Sem uma alternativa de parcelamento:',
    bullets: [
      'Vendas que não avançam',
      'Ciclo de fechamento mais longo',
      'Risco ao oferecer parcelamento próprio',
    ],
    closing: 'E assumir parcelamento internamente gera risco, inadimplência e complexidade operacional.',
    image: '/images/sections/secao-gargalo.jpg',
    imageAlt: 'Profissional reflexivo sobre operação B2B',
  },
  solution: {
    kicker: 'Solução Parcele Aqui',
    title: 'Pagamento não pode ser o motivo de um negócio não fechar.',
    body: 'Permita que seus clientes parcelem no cartão enquanto sua empresa recebe à vista, com segurança, controle e zero risco de inadimplência.',
    bullets: [
      'Redução do ciclo de vendas',
      'Aumento da taxa de conversão',
      'Preservação total do caixa',
      'Zero inadimplência para sua empresa',
    ],
    image: '/images/sections/secao-solucao.jpg',
    imageAlt: 'Cliente usando cartão e celular',
  },
  howItWorks: {
    kicker: 'Como funciona na prática',
    title: 'Simples, rápido e 100% digital.',
    image: '/images/sections/secao-como-funciona.jpg',
    imageAlt: 'Equipe trabalhando',
    steps: [
      { number: '01.', text: 'Sua empresa emite o boleto normalmente' },
      { number: '02.', text: 'O cliente escolhe parcelar com o Parcele Aqui' },
      { number: '03.', text: 'O cliente escolhe as parcelas e paga no cartão' },
      { number: '04.', text: 'Boleto liquidado à vista para sua empresa' },
    ],
  },
  impact: {
    kicker: 'Impacto real no B2B',
    title: 'Onde o Parcele Aqui gera impacto real no seu negócio',
    body: 'O Parcele Aqui se adapta às necessidades reais da sua empresa.',
    // 6 casos a definir junto com comercial — copy temporária
    items: [
      { title: 'Vendas consultivas', description: 'Tickets altos, ciclo longo. O cliente quer parcelar, sua empresa quer receber à vista.' },
      { title: 'Serviços profissionais', description: 'Honorários e contratos de longa duração que destravam com parcelamento estruturado.' },
      { title: 'Operações imobiliárias', description: 'Comissões, sinais, ITBI e taxas cartoriais sem travar o fechamento.' },
      { title: 'Educação e mensalidades', description: 'Matrículas, anuidades e cursos com fluxo previsível pra escola.' },
      { title: 'Setor público e contratos', description: 'Atendimento a tributos, taxas e contratações com liquidação imediata.' },
      { title: 'Contabilidades e BPOs', description: 'Honorários e serviços recorrentes sem inadimplência no caixa.' },
    ],
  },
  clients: {
    kicker: 'Empresas que já utilizam',
    title: 'Presente em empresas que utilizam o parcelamento como estratégia de fechamento',
    body: 'O Parcele Aqui já apoia empresas de diferentes segmentos, ajudando a transformar barreiras financeiras em oportunidades reais de fechamento, com operações processadas por meio da adquirência Cielo, garantindo segurança, confiabilidade e liquidação à vista para você.',
  },
  models: {
    kicker: 'Flexibilidade para o seu modelo de negócio',
    title: 'Você escolhe como operar com o Parcele Aqui',
    body: 'O mesmo produto, a mesma segurança e eficiência, no formato que melhor fortalece o posicionamento do seu escritório.',
    options: [
      {
        title: 'Com a sua marca',
        suffix: '(Whitelabel)',
        bullets: [
          'O cliente percebe a solução como parte do seu negócio',
          'Mais valor agregado à sua operação',
          'Experiência personalizada',
        ],
      },
      {
        title: 'Com a marca',
        suffix: 'Parcele Aqui',
        bullets: [
          'Solução pronta e validada no mercado',
          'Implementação ainda mais rápida',
          'Comunicação clara e objetiva para o cliente',
        ],
      },
    ],
    closing: 'Dois modelos, o mesmo objetivo: fechar mais negócios sem risco.',
  },
  behindBrand: {
    eyebrow: 'POTENCIAL TECNOLOGIA',
    title: 'Quem está por trás do Parcele Aqui',
    body1: 'O Parcele Aqui é desenvolvido pela Potencial Tecnologia, empresa brasileira com mais de 25 anos de experiência em meios de pagamento, automação e gestão financeira.',
    body2: 'Infraestrutura robusta, certificações de segurança e operações em larga escala em todo o Brasil.',
    pillars: [
      { title: '25+ anos', description: 'Em meios de pagamento' },
      { title: 'Multi-canal', description: 'Web, mobile e API' },
      { title: 'Tempo real', description: 'Liquidação à vista' },
      { title: 'Escala nacional', description: 'Operações em todo Brasil' },
      { title: 'Parceria sólida', description: 'Com Cielo e bandeiras' },
      { title: 'Flexibilidade', description: 'White-label e co-branded' },
    ],
  },
  security: {
    kicker: 'Segurança comprovada',
    title: 'Excelência e confiança em cada transação',
    body1: 'A parceria com a Cielo, uma das principais adquirentes do mercado, reforça a confiabilidade no processamento de pagamentos seguro, eficiente e de alta performance.',
    body2: 'Com infraestrutura certificada e padrões rigorosos de segurança o Parcele Aqui garante operações confiáveis, escaláveis e em conformidade regulatória.',
  },
  faq: {
    kicker: 'Dúvidas frequentes',
    title: 'Perguntas frequentes sobre o Parcele Aqui',
    note: 'Copy temporária. O Figma deixou placeholder. Ajustar conforme briefing comercial.',
    items: [
      { question: 'Quanto tempo leva para integrar o Parcele Aqui?', answer: '7 dias úteis no modelo co-branded, até 30 dias no white-label, dependendo da complexidade da personalização.' },
      { question: 'Qual a taxa cobrada por transação?', answer: 'Trabalhamos com modelo MDR competitivo, ajustado por volume, número de parcelas e modelo. Fale com um especialista para uma proposta personalizada.' },
      { question: 'O cliente final precisa baixar algum app?', answer: 'Não. Cliente recebe link de pagamento por WhatsApp ou e-mail e finaliza pelo navegador, em qualquer dispositivo.' },
      { question: 'E se o cliente der chargeback?', answer: 'O risco de chargeback é coberto dentro das regras da bandeira. Sua empresa recebe à vista sem preocupação com inadimplência.' },
      { question: 'Posso integrar com o meu CRM?', answer: 'Sim. Oferecemos API REST e webhooks para integração com qualquer CRM (Komo, Resale, Tecimob e outras).' },
      { question: 'Em quanto tempo recebo o valor?', answer: 'Sua empresa recebe à vista. O cliente parcela em até 12x e o Parcele Aqui assume a operação financeira completa.' },
    ],
  },
  finalCta: {
    kicker: 'Hora de fechar mais negócios',
    title: 'Transforme barreiras financeiras em oportunidades de fechamento',
    body: 'Ofereça parcelamento sem risco, aumente suas conversões e entregue mais valor aos seus clientes com o Parcele Aqui.',
    image: '/images/sections/secao-cta-final.jpg',
    imageAlt: 'Time comercial',
  },
  footer: {
    description: 'Plataforma de parcelamento B2B desenvolvida pela Potencial Tecnologia.',
    columns: [
      {
        title: 'Parcele Aqui',
        links: [
          { label: 'Quem somos', href: '#quem-somos' },
          { label: 'Parceiros e certificações', href: '#' },
        ],
      },
      {
        title: 'Links',
        links: [
          { label: 'Sobre nós', href: '#quem-somos' },
          { label: 'Como funciona', href: '#como-funciona' },
          { label: 'Soluções', href: '#solucao' },
        ],
      },
      {
        title: 'Contato',
        links: [
          { label: 'Suporte técnico:', href: '#' },
          { label: 'suporte@potencialtecnologia.com.br', href: 'mailto:suporte@potencialtecnologia.com.br' },
          { label: '(11) 3159-1380', href: 'tel:+551131591380' },
        ],
      },
    ],
    legal: '© PARCELE AQUI - POTENCIAL TECNOLOGIA · CNPJ: 21.301.803/0001-56',
    privacy: { label: 'Política de privacidade', href: '#' },
    terms: { label: 'Termos de serviço', href: '#' },
  },
} as const;

export type SiteData = typeof site;
