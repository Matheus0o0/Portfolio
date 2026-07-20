import type { WorkStatus } from '../data';
import type { Translations } from './pt';

export const en: Translations = {
  meta: {
    title: 'Matheus Amorim — Tech Lead',
    description:
      'Matheus Amorim — Tech Lead. AI Agents, WhatsApp APIs and Backend Systems. Node · TypeScript · Python · React · PostgreSQL.',
  },

  nav: {
    about: 'about',
    certs: 'certs',
    work: 'work',
    stack: 'stack',
    frontend: 'frontend',
    automations: 'automations',
    contact: 'contact',
    skipLink: 'Skip to content',
    ariaGithub: 'GitHub',
    ariaLinkedin: 'LinkedIn',
    ariaLangToggle: 'Change language',
  },

  hero: {
    identity: {
      handle: 'matheus_amorim',
      status: 'online · accepting new projects',
    },
    eyebrow: 'tech_lead · full-stack · ai engineering',
    titleBefore: 'Tech Lead & Front-end focused on ',
    titleGrad1: 'AI',
    titleMid: ' and ',
    titleGrad2: 'smart automations',
    titleAfter: '.',
    lead:
      'Specialist in automated workflows, intelligent bots and advanced integrations — n8n, Supabase, REST APIs and Webhooks. JavaScript, React and TypeScript to build scalable systems.',
    ctaPrimary: 'See what I do',
    ctaSecondary: 'Get in touch',
    meta: {
      location: { label: 'location', value: 'Bahia, BR' },
      edu: { label: 'edu', value: 'IFBA · CS' },
      focus: { label: 'focus', value: 'Automation · AI' },
    },
    terminal: {
      windowTitle: '~/matheus — zsh — 80×24',
      whoamiCmd: 'whoami',
      whoamiOut: 'matheus_amorim — 22 years old',
      roleCmd: 'cat role.log',
      roleOut: 'Tech Lead',
      focusCmd: 'cat focus.log',
      focusOut: ['Automation', 'AI & Agents', 'Integrations'],
      statusCmd: 'status',
      statusOnline: 'ONLINE',
      statusDetail: '— available for new projects',
    },
  },

  about: {
    eyebrow: 'about_me',
    title: 'What I do.',
    description:
      'Tech Lead and Front-end Developer focused on smart automations and AI-based solutions.',
    bio: [
      'I combine modern development with JavaScript, React and TypeScript to build scalable systems that boost productivity, reduce manual processes and optimize business operations. Self-taught profile, with fast adaptation to new technologies and experience leading projects focused on performance and efficiency.',
      'Passionate about technology since childhood, I found in development and artificial intelligence the opportunity to turn ideas into practical, scalable solutions.',
    ],
    pillars: [
      {
        icon: 'sparkles' as const,
        title: 'AI Agent Engineering',
        body:
          'Orchestration of LLMs (Claude, OpenAI) with memory, tools and contextual routing for automations that solve real business problems.',
      },
      {
        icon: 'zap' as const,
        title: 'WhatsApp Automations',
        body:
          'Deep integrations with Evolution API, Baileys and ZPro. Bots that talk, escalate to humans and process payments.',
      },
      {
        icon: 'server' as const,
        title: 'Production Backend',
        body:
          'Node.js and Python on PostgreSQL, PGVector and Redis. Deployed on Linux VPS with Docker, Nginx and Let’s Encrypt.',
      },
    ],
  },

  certs: {
    eyebrow: 'certificates',
    title: 'Education & certifications.',
    description:
      'Chronology of the courses that laid the foundation — from the very first contact with programming to React already inside college.',
    hoursLabel: 'h',
    viewCertificate: 'view certificate',
    education: {
      label: '// education',
      institution: 'IFBA — Instituto Federal da Bahia',
      degree: 'BSc in Information Systems',
      area: 'Information Technology',
      period: 'Aug/2022 — 2027',
      badge: 'in progress',
    },
    certsLabel: '// certifications',
    items: [
      {
        date: '2022-06-15',
        dateLabel: 'Jun/2022',
        title: 'Basic Programming — Module 00: First Steps',
        institution: 'Estudonauta',
        hours: 20,
        file: '/certificates/programacao-basica-modulo-00-estudonauta.pdf',
        tags: ['Logic', 'First steps'],
      },
      {
        date: '2022-08-02',
        dateLabel: 'Aug/2022',
        title: 'JavaScript Language',
        institution: 'Estudonauta',
        hours: 40,
        file: '/certificates/linguagem-javascript-estudonauta.pdf',
        tags: ['JavaScript', 'Fundamentals'],
      },
      {
        date: '2022-11-08',
        dateLabel: 'Nov/2022',
        title: 'MC2 Minicourse — React.js for Beginners',
        institution: 'IFBA · BSI Integra',
        hours: 4,
        file: '/certificates/react-para-iniciantes-ifba.pdf',
        tags: ['React', 'College'],
      },
    ],
  },

  work: {
    eyebrow: 'what_i_do',
    title: 'What I build.',
    description:
      'From the agency that became my main focus to the late-night experiments. A map of what has been keeping me busy.',
    labels: {
      services: '// services',
      stack: '// stack',
      clients: '// clients',
      othersLabel: 'Other work',
      viewGallery: 'view gallery',
    },
    featured: {
      status: 'main' as WorkStatus,
      statusLabel: 'main focus in recent years',
      name: 'AI & Automation Agency',
      summary:
        'Custom solutions for businesses — from the conversational agent to the full automated workflow. End-to-end: discovery, design, deployment and operation.',
      services: [
        'AI agents for WhatsApp',
        'n8n automations',
        'Landing pages',
        'Dashboards',
        'Integrations',
      ],
      stack: [
        'n8n',
        'Supabase',
        'Evolution API',
        'OpenAI',
        'Docker',
        'Hostinger VPS',
        'Node.js',
        'TypeScript',
        'React',
      ],
      clients: [
        'Neo Inteligência Empresarial',
        'Various clients with custom agents',
      ],
    },
    items: [
      {
        status: 'lab' as WorkStatus,
        statusLabel: 'continuous lab',
        name: 'WhatsApp Support System',
        summary:
          'In-house platform in constant evolution. It’s the engine that runs inside every agency client.',
        bullets: [
          'Hybrid AI + human support',
          'Auto-pause and transfer',
          'RAG with knowledge base',
          'Full contact history',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'active' as WorkStatus,
        statusLabel: 'in development',
        name: 'Marketing Dashboard',
        summary:
          'System to track campaigns in real time with multi-source integrations.',
        bullets: [
          'Meta Ads',
          'Google Ads',
          'Looker Studio',
          'Real-time analytics',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'wip' as WorkStatus,
        statusLabel: 'personal project',
        name: 'Chrome Extension — WhatsApp Web',
        summary:
          'Productivity extension for WhatsApp Web. Runs 100% locally, no server.',
        bullets: [
          'Quick replies',
          'Integrated catalog',
          'AI suggestions',
          'Productivity focus',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'service' as WorkStatus,
        statusLabel: 'active service',
        name: 'On-demand Landing Pages',
        summary:
          'Authorial design and development of landing pages. Visual references in the gallery above.',
        bullets: [
          'Authorial design',
          'HTML/CSS/JS + React',
          'Conversion-focused',
          'Turn-key delivery',
        ],
        href: '#frontend' as string | undefined,
      },
      {
        status: 'experiment' as WorkStatus,
        statusLabel: 'experiment',
        name: 'Dark Channel Automation',
        summary:
          'Pipeline that creates and auto-publishes content for dark channels.',
        bullets: [
          'Script generation',
          'Synthesized audio',
          'Automated editing',
          'Scheduled publishing',
        ],
        href: undefined as string | undefined,
      },
      {
        status: 'experiment' as WorkStatus,
        statusLabel: 'experiment',
        name: 'AI Financial Dashboards',
        summary:
          'AI-powered financial data analysis on different sources — or on free input, without a pre-existing base.',
        bullets: ['Obsidian', 'Spreadsheets', 'Database', 'Free input'],
        href: undefined as string | undefined,
      },
    ],
  },

  stack: {
    eyebrow: 'stack',
    title: 'Day-to-day tools.',
    description: 'The stack I use to take ideas from prototype to production.',
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
    title: 'Landing pages I designed and coded.',
    description:
      'My front-end journey started during the pandemic, tinkering with plain HTML, CSS and JavaScript. In 2022 I got into college and dove into React, TypeScript and Node — today that stack drives everything I ship, from prototype to production. The studies below are authorial, from concept to final code. Hover to scroll the full page, or click to open fullscreen.',
    authorBadge: 'by @matheus_amorim',
    lightbox: {
      hint: 'ESC to close · ← → to navigate',
      prev: 'Previous image',
      next: 'Next image',
      close: 'Close',
      counterSeparator: '/',
      viewingPrefix: 'Viewing',
      openPrefix: 'Open',
      openSuffix: 'fullscreen',
      screenshotOf: 'Full screenshot of',
    },
    items: [
      {
        name: 'Landing #01',
        tagline: 'Gym · Bodybuilding',
        image: '/screenshots/mega-physicus.png',
        domain: 'landing-01.preview',
      },
      {
        name: 'Landing #02',
        tagline: 'Gym · Bodybuilding',
        image: '/screenshots/fibrado-gym.png',
        domain: 'landing-02.preview',
      },
      {
        name: 'Landing #03',
        tagline: 'Fitness retail',
        image: '/screenshots/star-fitness.png',
        domain: 'landing-03.preview',
      },
      {
        name: 'Landing #04',
        tagline: 'Pilates & Physical therapy',
        image: '/screenshots/core-studio.png',
        domain: 'landing-04.preview',
      },
      {
        name: 'Landing #05',
        tagline: 'Gym · Bodybuilding',
        image: '/screenshots/jhonees-fitness.png',
        domain: 'landing-05.preview',
      },
      {
        name: 'Landing #06',
        tagline: 'Gym · Women-only',
        image: '/screenshots/garota-fitness.png',
        domain: 'landing-06.preview',
      },
      {
        name: 'Landing #07',
        tagline: 'Gym · Health & wellness',
        image: '/screenshots/conexao-saude.png',
        domain: 'landing-07.preview',
      },
      {
        name: 'Landing #08',
        tagline: 'Boutique studio',
        image: '/screenshots/studio-zero-7.png',
        domain: 'landing-08.preview',
      },
    ],
  },

  automations: {
    eyebrow: 'n8n_automations',
    title: 'Automations running in production.',
    description:
      'n8n workflows orchestrating real integrations — from WhatsApp bots to data pipelines. Each card below is a flow in use, with triggers, conditionals and external API calls. Click to open the screenshot fullscreen.',
    authorBadge: 'n8n · self-hosted',
    statusActive: 'active',
    statusDraft: 'draft',
    galleryBadge: 'screens',
    lightbox: {
      hint: 'ESC to close · ← → to navigate',
      prev: 'Previous',
      next: 'Next',
      close: 'Close',
      counterSeparator: '/',
      viewingPrefix: 'Viewing',
      openPrefix: 'Open',
      openSuffix: 'fullscreen',
      screenshotOf: 'Screenshot of',
    },
    items: [
      {
        name: 'Conversational RAG · WhatsApp',
        tagline:
          'Agent with memory, contextual routing and vector knowledge base.',
        image: '/screenshots/n8n/agente-conversacional-rag.png',
        slug: 'agente-conversacional-rag',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Good Morning Bot · Micro-SaaS',
        tagline:
          'WhatsApp-native app that generates daily good-morning images on demand — monthly subscription, delivered right in the chat.',
        image: '/screenshots/n8n/bot-gerador-de-imagem-wpp.png',
        slug: 'bot-gerador-de-imagem-wpp',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Logo Preview · RAG Module',
        tagline:
          'Add-on for the conversational agent: reads the client photo and drops the logo into the preview automatically.',
        image: '/screenshots/n8n/agente-cria-imagens-previa.png',
        slug: 'agente-cria-imagens-previa',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Lead Notification · Form',
        tagline:
          'Form webhook fires a "new lead" alert straight to your WhatsApp — no conversation, just the ping so you never miss the contact.',
        image: '/screenshots/n8n/formulario.png',
        slug: 'formulario',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'Lead Notification · Bio Link',
        tagline:
          'Same idea as the form, but from the bio link: real-time alert the moment someone submits.',
        image: '/screenshots/n8n/link-bio.png',
        slug: 'link-bio',
        status: 'active' as 'active' | 'draft',
        gallery: undefined as
          | Array<{ src: string; caption: string }>
          | undefined,
      },
      {
        name: 'NeoHub · Full-Stack CRM',
        tagline:
          'Complete platform with admin panel, tickets, pipelines and dashboard — all backend logic orchestrated by n8n workflows.',
        image: '/screenshots/n8n/crm/01-dashboard.jpg',
        slug: 'neohub-crm',
        status: 'active' as 'active' | 'draft',
        gallery: [
          {
            src: '/screenshots/n8n/crm/01-dashboard.jpg',
            caption: 'Dashboard · platform overview',
          },
          {
            src: '/screenshots/n8n/crm/02-tickets.png',
            caption: 'Support ticket management',
          },
          {
            src: '/screenshots/n8n/crm/03-fluxo-mover-lead.png',
            caption:
              'n8n flows · move lead in pipeline + create WhatsApp instance',
          },
          {
            src: '/screenshots/n8n/crm/04-fluxo-dados-pipeline.png',
            caption: 'n8n flows · pipeline data + automated lead movement',
          },
          {
            src: '/screenshots/n8n/crm/05-fluxo-dashboard.png',
            caption: 'n8n flows · dashboard data aggregation',
          },
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'get_in_touch',
    title: "Let's build something together?",
    description:
      'Open to AI agent projects, WhatsApp automations and backend systems. Usually reply within 24h.',
    channels: {
      email: 'email',
      github: 'github',
      linkedin: 'linkedin',
      instagram: 'instagram',
    },
  },

  footer: {
    built: '// built with react · vite · typescript',
    copyPrefix: '©',
    copySuffix: 'matheus_amorim · exit 0',
  },
};
