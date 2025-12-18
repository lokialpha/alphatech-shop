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
    slug: 'chatgpt-plus',
    title: 'ChatGPT Plus',
    shortDescription: 'Premium ChatGPT subscription with GPT-4, faster responses, and priority access.',
    fullDescription: 'Get full access to ChatGPT Plus with GPT-5.2, DALL-E image generation, advanced data analysis, and priority access during peak times.',
    price: 15000,
    category: 'scripts',
    features: [
      'GPT-5.2 access',
      'DALL-E 3 image generation',
      'Advanced Data Analysis',
      'Custom GPTs creation',
      'Priority access during peak times',
      'Faster response speed'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month ChatGPT Plus subscription',
      'Access to all GPT-5.2 features',
      'DALL-E 3 image generation',
      'Code X feature',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Can I use GPT-4 unlimited?', answer: 'Yes! You get full access to GPT-4 and all premium features.' },
      { question: 'Is this a shared account?', answer: 'No, this is your personal ChatGPT Plus account with full access.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=chatgpt-plus'
  },
  {
    id: '3',
    slug: 'duolingo-plus',
    title: 'Duolingo Plus',
    shortDescription: 'Premium Duolingo subscription with unlimited lives, no ads, and offline access.',
    fullDescription: 'Learn any language with Duolingo Plus. Enjoy unlimited hearts, no ads, offline lessons, and progress tracking across all devices.',
    price: 8000,
    category: 'templates',
    badge: 'Best Seller',
    features: [
      'Unlimited hearts',
      'No ads experience',
      'Offline lesson access',
      'Unlimited skill tests',
      'Progress tracking',
      'Mastery quizzes'
    ],
    requirements: [
      'Valid email address',
      'Duolingo app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Duolingo Plus subscription',
      'Access to all premium features',
      'Unlimited hearts & lives',
      'Ad-free learning experience',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Which languages can I learn?', answer: 'You can learn 40+ languages including Spanish, French, German, Japanese, Korean, and more.' },
      { question: 'Can I use on multiple devices?', answer: 'Yes! Your progress syncs across all devices - phone, tablet, and computer.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=duolingo-plus'
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
  { value: 'saas', label: 'Music Subs' }
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
