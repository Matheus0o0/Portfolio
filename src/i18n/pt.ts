import type { WorkStatus } from '../data';

export const pt = {
  meta: {
    title: 'Matheus Amorim — Tech Lead',
    description:
      'Matheus Amorim — Tech Lead. AI Agents, WhatsApp APIs e Backend Systems. Node · TypeScript · Python · React · PostgreSQL.',
  },

  nav: {
    about: 'about',
    certs: 'certs',
    work: 'work',
    stack: 'stack',
    frontend: 'frontend',
    automations: 'automations',
    contact: 'contact',
    skipLink: 'Ir para o conteúdo',
    ariaGithub: 'GitHub',
    ariaLinkedin: 'LinkedIn',
    ariaLangToggle: 'Mudar idioma',
  },

  hero: {
    identity: {
      handle: 'matheus_amorim',
      status: 'online · aceitando novos projetos',
    },
    eyebrow: 'tech_lead · full-stack · ai engineering',
    titleBefore: 'Tech Lead & Front-end focado em ',
    titleGrad1: 'IA',
    titleMid: ' e ',
    titleGrad2: 'automações inteligentes',
    titleAfter: '.',
    lead:
      'Especialista em fluxos automatizados, bots inteligentes e integrações avançadas — n8n, Supabase, APIs REST e Webhooks. JavaScript, React e TypeScript para construir sistemas escaláveis.',
    ctaPrimary: 'Ver o que eu faço',
    ctaSecondary: 'Falar comigo',
    meta: {
      location: { label: 'location', value: 'Bahia, BR' },
      edu: { label: 'edu', value: 'IFBA · SI' },
      focus: { label: 'focus', value: 'Automações · IA' },
    },
    terminal: {
      windowTitle: '~/matheus — zsh — 80×24',
      whoamiCmd: 'whoami',
      whoamiOut: 'matheus_amorim — 22 anos',
      roleCmd: 'cat role.log',
      roleOut: 'Tech Lead',
      focusCmd: 'cat focus.log',
      focusOut: ['Automações', 'IA & Agentes', 'Integrações'],
      statusCmd: 'status',
      statusOnline: 'ONLINE',
      statusDetail: '— disponível para novos projetos',
    },
  },

  about: {
    eyebrow: 'about_me',
    title: 'O que eu faço.',
    description:
      'Tech Lead e Desenvolvedor Front-end com foco em automações inteligentes e soluções baseadas em IA.',
    bio: [
      'Uno desenvolvimento moderno com JavaScript, React e TypeScript à construção de sistemas escaláveis que aumentam produtividade, reduzem processos manuais e otimizam operações empresariais. Perfil autodidata, com rápida adaptação a novas tecnologias e experiência liderando projetos voltados para performance e eficiência.',
      'Apaixonado por tecnologia desde a infância, encontrei no desenvolvimento e na inteligência artificial a oportunidade de transformar ideias em soluções práticas e escaláveis.',
    ],
    pillars: [
      {
        icon: 'sparkles' as const,
        title: 'AI Agent Engineering',
        body:
          'Orquestração de LLMs (Claude, OpenAI) com memória, ferramentas e roteamento contextual para automações que resolvem problemas de negócio.',
      },
      {
        icon: 'zap' as const,
        title: 'WhatsApp Automations',
        body:
          'Integrações profundas com Evolution API, Baileys e ZPro. Bots que conversam, escalam para humanos e processam pagamentos.',
      },
      {
        icon: 'server' as const,
        title: 'Backend em Produção',
        body:
          'Node.js e Python sobre PostgreSQL, PGVector e Redis. Deploy em VPS Linux com Docker, Nginx e Let’s Encrypt.',
      },
    ],
  },

  certs: {
    eyebrow: 'certificates',
    title: 'Formação e certificações.',
    description:
      'Cronologia dos cursos que fundamentaram minha base — do primeiro contato com programação ao React já dentro da faculdade.',
    hoursLabel: 'h',
    viewCertificate: 'ver certificado',
    education: {
      label: '// formação acadêmica',
      institution: 'IFBA — Instituto Federal da Bahia',
      degree: 'Bacharelado em Sistemas de Informação',
      area: 'Tecnologia da Informação',
      period: 'ago/2022 — 2027',
      badge: 'em curso',
    },
    certsLabel: '// certificações',
    items: [
      {
        date: '2022-06-15',
        dateLabel: 'jun/2022',
        title: 'Programação Básica — Módulo 00: Primeiros Passos',
        institution: 'Estudonauta',
        hours: 20,
        file: '/certificates/programacao-basica-modulo-00-estudonauta.pdf',
        tags: ['Lógica', 'Primeiros passos'],
      },
      {
        date: '2022-08-02',
        dateLabel: 'ago/2022',
        title: 'Linguagem JavaScript',
        institution: 'Estudonauta',
        hours: 40,
        file: '/certificates/linguagem-javascript-estudonauta.pdf',
        tags: ['JavaScript', 'Fundamentos'],
      },
      {
        date: '2022-11-08',
        dateLabel: 'nov/2022',
        title: 'Minicurso MC2 — React.js para Iniciantes',
        institution: 'IFBA · BSI Integra',
        hours: 4,
        file: '/certificates/react-para-iniciantes-ifba.pdf',
        tags: ['React', 'Faculdade'],
      },
    ],
  },

  work: {
    eyebrow: 'what_i_do',
    title: 'O que eu construo.',
    description:
      'Da agência que virou meu foco principal aos experimentos noturnos. Um mapa do que tem me ocupado.',
    labels: {
      services: '// serviços',
      stack: '// stack',
      clients: '// clientes',
      othersLabel: 'Outros trabalhos',
      viewGallery: 'ver galeria',
    },
    featured: {
      status: 'main' as WorkStatus,
      statusLabel: 'principal foco nos últimos anos',
      name: 'Agência de IA & Automação',
      summary:
        'Venda de soluções sob medida para empresas — do agente conversacional ao fluxo automatizado completo. Ponta-a-ponta: descoberta, projeto, implantação e operação.',
      services: [
        'Agentes de IA para WhatsApp',
        'Automações em n8n',
        'Landing pages',
        'Dashboards',
        'Integrações',
      ],
      stack: [
        'n8n',
        'Supabase',
        'Evolution API',
        'OpenAI',
        'Docker',
        'VPS Hostinger',
        'Node.js',
        'TypeScript',
        'React',
      ],
      clients: [
        'Neo Inteligência Empresarial',
        'Clientes para agentes personalizados',
      ],
    },
    items: [
      {
        status: 'lab' as WorkStatus,
        statusLabel: 'laboratório contínuo',
        name: 'Sistema de Atendimento WhatsApp',
        summary:
          'Plataforma própria em evolução constante. É o motor que roda dentro de todos os clientes da agência.',
        bullets: [
          'IA + atendimento humano híbrido',
          'Pausa automática e transferência',
          'RAG com base de conhecimento',
          'Histórico completo por contato',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'active' as WorkStatus,
        statusLabel: 'em desenvolvimento',
        name: 'Dashboard de Marketing',
        summary:
          'Sistema para acompanhar campanhas em tempo real com integrações multi-fonte.',
        bullets: [
          'Meta Ads',
          'Google Ads',
          'Looker Studio',
          'Análise em tempo real',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'wip' as WorkStatus,
        statusLabel: 'projeto pessoal',
        name: 'Chrome Extension — WhatsApp Web',
        summary:
          'Extensão de produtividade para o WhatsApp Web. Roda 100% local, sem servidor.',
        bullets: [
          'Respostas rápidas',
          'Catálogo integrado',
          'Sugestões com IA',
          'Foco em produtividade',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'service' as WorkStatus,
        statusLabel: 'serviço ativo',
        name: 'Landing Pages sob demanda',
        summary:
          'Design e desenvolvimento autoral de landing pages. Referências visuais na galeria acima.',
        bullets: [
          'Design autoral',
          'HTML/CSS/JS + React',
          'Foco em conversão',
          'Entrega chave-na-mão',
        ],
        href: '#frontend' as string | undefined,
      },
      {
        status: 'experiment' as WorkStatus,
        statusLabel: 'experimento',
        name: 'Automação de Canal Dark',
        summary:
          'Pipeline de criação e publicação automática de conteúdo para canais dark.',
        bullets: [
          'Geração de roteiro',
          'Áudio sintetizado',
          'Edição automática',
          'Publicação agendada',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'experiment' as WorkStatus,
        statusLabel: 'experimento',
        name: 'Dashboards Financeiros com IA',
        summary:
          'Análise de dados financeiros com IA sobre diferentes fontes — ou sobre input livre, sem base pré-existente.',
        bullets: ['Obsidian', 'Planilhas', 'Banco de dados', 'Input livre'],
        href: undefined as string | undefined,
      },
    ],
  },

  stack: {
    eyebrow: 'stack',
    title: 'Ferramentas do dia a dia.',
    description: 'A stack que uso para levar ideias do protótipo à produção.',
    groups: [
      {
        label: 'languages',
        accent: 'primary' as 'primary' | 'accent',
        items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
      },
      {
        label: 'ai & voice',
        accent: 'accent' as 'primary' | 'accent',
        items: ['Anthropic Claude', 'OpenAI', 'ElevenLabs'],
      },
      {
        label: 'backend',
        accent: 'primary' as 'primary' | 'accent',
        items: ['Node.js', 'REST APIs', 'Webhooks'],
      },
      {
        label: 'database & cache',
        accent: 'primary' as 'primary' | 'accent',
        items: ['PostgreSQL', 'Supabase', 'PGVector', 'Redis'],
      },
      {
        label: 'frontend',
        accent: 'primary' as 'primary' | 'accent',
        items: ['React', 'Vite'],
      },
      {
        label: 'devops & infra',
        accent: 'primary' as 'primary' | 'accent',
        items: ['Linux', 'Docker', 'Nginx', "Let's Encrypt", 'Hostinger VPS'],
      },
      {
        label: 'integrations',
        accent: 'primary' as 'primary' | 'accent',
        items: [
          'Evolution API',
          'ZPro',
          'Baileys',
          'Twilio',
          'ASAAS',
          'InfinitePay',
        ],
      },
      {
        label: 'tools',
        accent: 'primary' as 'primary' | 'accent',
        items: ['VS Code', 'Git', 'GitHub', 'ClickUp', 'Postman', 'Insomnia'],
      },
    ],
  },

  frontend: {
    eyebrow: 'frontend_experience',
    title: 'Landing pages que eu desenhei e codei.',
    description:
      'Meu contato com front-end começou na pandemia, brincando com HTML, CSS e JavaScript puro. Em 2022 entrei na faculdade e passei a mergulhar em React, TypeScript e Node — hoje uso essa stack para tudo, do protótipo à produção. Os estudos abaixo são autorais, do conceito ao código final. Passe o mouse para ver a página inteira rolar, ou clique para abrir em tela cheia.',
    authorBadge: 'by @matheus_amorim',
    lightbox: {
      hint: 'ESC para fechar · ← → para navegar',
      prev: 'Imagem anterior',
      next: 'Próxima imagem',
      close: 'Fechar',
      counterSeparator: '/',
      viewingPrefix: 'Visualizando',
      openPrefix: 'Abrir',
      openSuffix: 'em tela cheia',
      screenshotOf: 'Screenshot completo de',
    },
    items: [
      {
        name: 'Landing #01',
        tagline: 'Academia · Musculação',
        image: '/screenshots/mega-physicus.png',
        domain: 'landing-01.preview',
      },
      {
        name: 'Landing #02',
        tagline: 'Academia · Musculação',
        image: '/screenshots/fibrado-gym.png',
        domain: 'landing-02.preview',
      },
      {
        name: 'Landing #03',
        tagline: 'Loja fitness',
        image: '/screenshots/star-fitness.png',
        domain: 'landing-03.preview',
      },
      {
        name: 'Landing #04',
        tagline: 'Pilates & Fisioterapia',
        image: '/screenshots/core-studio.png',
        domain: 'landing-04.preview',
      },
      {
        name: 'Landing #05',
        tagline: 'Academia · Musculação',
        image: '/screenshots/jhonees-fitness.png',
        domain: 'landing-05.preview',
      },
      {
        name: 'Landing #06',
        tagline: 'Academia · Público feminino',
        image: '/screenshots/garota-fitness.png',
        domain: 'landing-06.preview',
      },
      {
        name: 'Landing #07',
        tagline: 'Academia · Saúde e bem-estar',
        image: '/screenshots/conexao-saude.png',
        domain: 'landing-07.preview',
      },
      {
        name: 'Landing #08',
        tagline: 'Studio boutique',
        image: '/screenshots/studio-zero-7.png',
        domain: 'landing-08.preview',
      },
    ],
  },

  automations: {
    eyebrow: 'n8n_automations',
    title: 'Automações que rodam em produção.',
    description:
      'Workflows n8n que orquestram integrações reais — de bots WhatsApp a pipelines de dados. Cada card abaixo é um fluxo em uso, com gatilhos, condicionais e chamadas para APIs externas. Clique para abrir o print em tela cheia.',
    authorBadge: 'n8n · self-hosted',
    statusActive: 'active',
    statusDraft: 'draft',
    galleryBadge: 'telas',
    lightbox: {
      hint: 'ESC para fechar · ← → para navegar',
      prev: 'Anterior',
      next: 'Próximo',
      close: 'Fechar',
      counterSeparator: '/',
      viewingPrefix: 'Visualizando',
      openPrefix: 'Abrir',
      openSuffix: 'em tela cheia',
      screenshotOf: 'Screenshot de',
    },
    items: [
      {
        name: 'RAG Conversacional · WhatsApp',
        tagline:
          'Agente com memória, roteamento contextual e base de conhecimento vetorial.',
        image: '/screenshots/n8n/agente-conversacional-rag.png',
        slug: 'agente-conversacional-rag',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Bot de Bom Dia · Micro-SaaS',
        tagline:
          'App dentro do WhatsApp que gera imagens de bom dia sob demanda — assinatura mensal, envio direto no chat.',
        image: '/screenshots/n8n/bot-gerador-de-imagem-wpp.png',
        slug: 'bot-gerador-de-imagem-wpp',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Prévia com Logo · Módulo do RAG',
        tagline:
          'Extensão em cima do agente conversacional: interpreta a foto do cliente e injeta a logo automaticamente na prévia.',
        image: '/screenshots/n8n/agente-cria-imagens-previa.png',
        slug: 'agente-cria-imagens-previa',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Notificação de Lead · Formulário',
        tagline:
          'Webhook do formulário dispara alerta "novo lead" direto no WhatsApp — sem atendimento, só o aviso pra não perder o contato.',
        image: '/screenshots/n8n/formulario.png',
        slug: 'formulario',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Notificação de Lead · Link na Bio',
        tagline:
          'Mesma ideia do formulário, mas via link na bio: alerta em tempo real assim que alguém preenche.',
        image: '/screenshots/n8n/link-bio.png',
        slug: 'link-bio',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'NeoHub · CRM Full-Stack',
        tagline:
          'Plataforma completa com painel admin, tickets, pipelines e dashboard — toda a lógica de backend orquestrada por workflows n8n.',
        image: '/screenshots/n8n/crm/01-dashboard.jpg',
        slug: 'neohub-crm',
        status: 'active' as 'active' | 'draft',
        gallery: [
          {
            src: '/screenshots/n8n/crm/01-dashboard.jpg',
            caption: 'Dashboard · visão geral da plataforma',
          },
          {
            src: '/screenshots/n8n/crm/02-tickets.png',
            caption: 'Gerenciamento de tickets de suporte',
          },
          {
            src: '/screenshots/n8n/crm/03-fluxo-mover-lead.png',
            caption:
              'Fluxos n8n · mover lead no pipeline + criar instância WhatsApp',
          },
          {
            src: '/screenshots/n8n/crm/04-fluxo-dados-pipeline.png',
            caption: 'Fluxos n8n · dados de pipeline + movimentação automática',
          },
          {
            src: '/screenshots/n8n/crm/05-fluxo-dashboard.png',
            caption: 'Fluxos n8n · agregação de dados do dashboard',
          },
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'get_in_touch',
    title: 'Vamos construir algo juntos?',
    description:
      'Aberto a projetos de AI agents, automações WhatsApp e sistemas backend. Responder normalmente em até 24h.',
    channels: {
      email: 'email',
      github: 'github',
      linkedin: 'linkedin',
      instagram: 'instagram',
    },
  },

  footer: {
    built: '// construído com react · vite · typescript',
    copyPrefix: '©',
    copySuffix: 'matheus_amorim · exit 0',
  },
};

export type Translations = typeof pt;
