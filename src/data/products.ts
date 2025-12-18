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
    slug: 'netflix-premium',
    title: 'Netflix Premium',
    shortDescription: 'Premium Netflix subscription with 4K Ultra HD, multiple screens, and all content.',
    fullDescription: 'Stream unlimited movies and TV shows with Netflix Premium. Watch on 4 screens at once in 4K Ultra HD quality. Download and watch offline on any device.',
    price: 15000,
    category: 'toolkits',
    features: [
      '4K Ultra HD streaming',
      'Watch on 4 screens',
      'Unlimited movies & shows',
      'Download for offline',
      'No ads experience',
      'New releases weekly'
    ],
    requirements: [
      'Valid email address',
      'Netflix app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Netflix Premium subscription',
      '4K Ultra HD quality',
      'Watch on 4 devices simultaneously',
      'Download for offline viewing',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Which devices are supported?', answer: 'Smart TVs, phones, tablets, laptops, gaming consoles - watch anywhere!' },
      { question: 'Can I download for offline viewing?', answer: 'Yes! Download your favorite shows and movies to watch offline.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=netflix-premium'
  },
  {
    id: '5',
    slug: 'skillshare-premium',
    title: 'Skillshare Premium',
    shortDescription: 'Premium Skillshare subscription with unlimited access to 30,000+ creative classes.',
    fullDescription: 'Learn from industry experts with Skillshare Premium. Access 30,000+ classes in design, business, photography, video, and more. Download for offline viewing.',
    price: 10000,
    category: 'templates',
    features: [
      'Unlimited class access',
      '30,000+ creative classes',
      'Offline viewing',
      'No ads experience',
      'Download lessons',
      'Skill tracks & paths'
    ],
    requirements: [
      'Valid email address',
      'Skillshare app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Skillshare Premium subscription',
      'Access to all premium classes',
      'Offline download feature',
      'Ad-free learning experience',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'What topics are available?', answer: 'Design, illustration, photography, video, freelancing, marketing, business, and more.' },
      { question: 'Can I download classes for offline?', answer: 'Yes! Premium allows you to download classes and watch offline on mobile.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=skillshare-premium'
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
