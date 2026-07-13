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
    work: 'work',
    stack: 'stack',
    frontend: 'frontend',
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
      'Authorial studies — from concept to final HTML/CSS/JS. Not deployed; they serve as reference of what I can deliver. Hover to scroll the full page, or click to open fullscreen.',
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
