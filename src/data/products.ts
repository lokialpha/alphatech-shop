export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: 'bots' | 'scripts' | 'templates' | 'toolkits' | 'saas';
  features: string[];
  requirements: string[];
  whatsIncluded: string[];
  faq: { question: string; answer: string }[];
  telegramLink: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'canva-pro',
    title: 'Canva Pro',
    shortDescription: 'Premium Canva subscription with unlimited access to all pro features and templates.',
    fullDescription: 'Get full access to Canva Pro with unlimited premium templates, brand kits, background remover, magic resize, and 100GB cloud storage. Perfect for creators and businesses.',
    price: 10000,
    category: 'bots',
    badge: 'Popular',
    features: [
      '100+ million premium templates',
      'Background remover tool',
      'Magic resize for all formats',
      'Brand kit with custom fonts',
      '100GB cloud storage',
      'Schedule social media posts'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Canva Pro subscription',
      'Access to all premium features',
      'Canva AI (Magic Write, Text to Image, Text to Video)',
      'Priority customer support',
      'Instant account activation',
      'Renewal reminder'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Is this a personal or team account?', answer: 'This is a personal Canva Pro account with full premium features.' },
      { question: 'Can I use this for commercial projects?', answer: 'Yes! Canva Pro license allows commercial use of all designs.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=canva-pro'
  },
  {
    id: '2',
    slug: 'automation-scripts-python',
    title: 'Automation Scripts (Python)',
    shortDescription: 'Save hours daily with 20+ Python automation scripts for common tasks.',
    fullDescription: 'Automate repetitive tasks with our curated collection of Python scripts. From file management to web scraping, API integrations to data processing.',
    price: 39,
    category: 'scripts',
    features: [
      'File & folder automation',
      'Web scraping templates',
      'API integration examples',
      'Data processing pipelines',
      'Email automation',
      'Schedule & cron ready'
    ],
    requirements: [
      'Python 3.8+',
      'pip package manager',
      'Basic Python knowledge'
    ],
    whatsIncluded: [
      '20+ automation scripts',
      'Detailed documentation',
      'Requirements.txt for each script',
      'Usage examples',
      'Lifetime updates'
    ],
    faq: [
      { question: 'Are these scripts beginner-friendly?', answer: 'Yes! Each script includes comments and documentation. Perfect for learning automation.' },
      { question: 'Can I modify the scripts?', answer: 'Absolutely. You get the full source code and can modify as needed.' },
      { question: 'What if I need help?', answer: 'We provide 14 days of email support to help you get started.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=automation-scripts-python'
  },
  {
    id: '3',
    slug: 'nodejs-api-starter',
    title: 'Node.js API Starter',
    shortDescription: 'Enterprise-grade API boilerplate with authentication, validation, and more.',
    fullDescription: 'Skip the boilerplate and start building features. Includes JWT auth, role-based access, request validation, rate limiting, and comprehensive error handling.',
    price: 79,
    category: 'templates',
    badge: 'Best Seller',
    features: [
      'JWT & OAuth2 authentication',
      'Role-based access control',
      'Request validation (Zod)',
      'Rate limiting & security',
      'PostgreSQL + Prisma ORM',
      'Docker & CI/CD ready'
    ],
    requirements: [
      'Node.js 18+',
      'PostgreSQL database',
      'Docker (optional)'
    ],
    whatsIncluded: [
      'Complete API boilerplate',
      'Database migrations',
      'API documentation (Swagger)',
      'Testing setup (Jest)',
      'Deployment guides',
      '60 days support'
    ],
    faq: [
      { question: 'Can I use a different database?', answer: 'The template uses Prisma ORM, so you can easily switch to MySQL, SQLite, or MongoDB.' },
      { question: 'Is this suitable for production?', answer: 'Yes! It\'s built with security and scalability in mind. Used by companies processing millions of requests.' },
      { question: 'Do updates cost extra?', answer: 'No, all future updates are included in your purchase.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=nodejs-api-starter'
  },
  {
    id: '4',
    slug: 'content-creator-toolkit',
    title: 'Content Creator Toolkit',
    shortDescription: 'All-in-one toolkit for content creators: templates, scripts, and automation.',
    fullDescription: 'Streamline your content creation workflow. Includes social media templates, scheduling scripts, analytics dashboards, and AI-powered content helpers.',
    price: 59,
    category: 'toolkits',
    features: [
      'Social media templates (50+)',
      'Content calendar system',
      'Batch posting scripts',
      'Analytics dashboard',
      'AI content prompts',
      'Thumbnail generator'
    ],
    requirements: [
      'Canva or Figma (for templates)',
      'Python 3.8+ (for scripts)',
      'Social media accounts'
    ],
    whatsIncluded: [
      '50+ design templates',
      'Automation scripts',
      'Content calendar spreadsheet',
      'AI prompt library',
      'Video tutorial series',
      'Private Discord access'
    ],
    faq: [
      { question: 'What platforms are supported?', answer: 'Twitter/X, Instagram, LinkedIn, TikTok, and YouTube. More coming soon!' },
      { question: 'Do I need design skills?', answer: 'No! Templates are drag-and-drop in Canva. Just add your content.' },
      { question: 'Is there a community?', answer: 'Yes! Get access to our private Discord with 500+ creators.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=content-creator-toolkit'
  },
  {
    id: '5',
    slug: 'website-templates',
    title: 'Website Templates',
    shortDescription: 'Modern, responsive website templates built with React and Tailwind CSS.',
    fullDescription: 'Launch stunning websites fast. Our templates are built with React, Tailwind CSS, and include dark mode, animations, and optimized for Core Web Vitals.',
    price: 69,
    category: 'templates',
    features: [
      '10 unique templates',
      'React + Tailwind CSS',
      'Dark/light mode',
      'Framer Motion animations',
      'SEO optimized',
      'Mobile-first design'
    ],
    requirements: [
      'Node.js 16+',
      'npm or yarn',
      'Basic React knowledge'
    ],
    whatsIncluded: [
      '10 complete templates',
      'Component library',
      'Documentation',
      'Figma source files',
      'Free updates',
      '30 days support'
    ],
    faq: [
      { question: 'Can I use these for client projects?', answer: 'Yes! The license allows unlimited personal and commercial use.' },
      { question: 'What\'s the tech stack?', answer: 'React, TypeScript, Tailwind CSS, and Framer Motion. Vite for blazing-fast development.' },
      { question: 'Are Figma files included?', answer: 'Yes, you get the complete Figma source files for customization.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=website-templates'
  },
  {
    id: '6',
    slug: 'mini-saas-boilerplate',
    title: 'Mini SaaS Boilerplate',
    shortDescription: 'Complete SaaS starter with auth, payments, dashboard, and landing page.',
    fullDescription: 'Everything you need to launch your SaaS in a weekend. Authentication, Stripe payments, user dashboard, admin panel, and a converting landing page.',
    price: 149,
    category: 'saas',
    badge: 'Premium',
    features: [
      'Complete auth system',
      'Stripe subscription billing',
      'User & admin dashboards',
      'Landing page templates',
      'Email notifications',
      'Analytics integration'
    ],
    requirements: [
      'Node.js 18+',
      'PostgreSQL',
      'Stripe account',
      'Email service (optional)'
    ],
    whatsIncluded: [
      'Full source code',
      'Database schema',
      'Stripe integration guide',
      'Deployment tutorials',
      '90 days priority support',
      'Lifetime updates'
    ],
    faq: [
      { question: 'What\'s the tech stack?', answer: 'Next.js 14, TypeScript, Tailwind CSS, Prisma, PostgreSQL, and Stripe.' },
      { question: 'Can I use a different payment provider?', answer: 'The boilerplate is built for Stripe, but the architecture makes it easy to swap providers.' },
      { question: 'Is there a demo?', answer: 'Yes! Contact us on Telegram for a live demo link.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=mini-saas-boilerplate'
  }
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'bots', label: 'Editing Subs' },
  { value: 'scripts', label: 'Ai Subs' },
  { value: 'templates', label: 'Learning Subs' },
  { value: 'toolkits', label: 'Movies Subs' },
  { value: 'saas', label: 'SaaS' }
];

export const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100+', label: '$100+' }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function filterProducts(
  category: string,
  priceRange: string
): Product[] {
  return products.filter(product => {
    const categoryMatch = category === 'all' || product.category === category;
    
    let priceMatch = true;
    if (priceRange === '0-50') {
      priceMatch = product.price < 50;
    } else if (priceRange === '50-100') {
      priceMatch = product.price >= 50 && product.price <= 100;
    } else if (priceRange === '100+') {
      priceMatch = product.price > 100;
    }
    
    return categoryMatch && priceMatch;
  });
}
