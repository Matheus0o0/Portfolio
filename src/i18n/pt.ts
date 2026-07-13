import type { WorkStatus } from '../data';

export const pt = {
  meta: {
    title: 'Matheus Amorim — Tech Lead',
    description:
      'Matheus Amorim — Tech Lead. AI Agents, WhatsApp APIs e Backend Systems. Node · TypeScript · Python · React · PostgreSQL.',
  },

  nav: {
    about: 'about',
    work: 'work',
    stack: 'stack',
    frontend: 'frontend',
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
      'Estudos autorais — do conceito ao HTML/CSS/JS final. Não estão no ar; servem como referência do que sou capaz de entregar. Passe o mouse para ver a página inteira rolar, ou clique para abrir em tela cheia.',
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
