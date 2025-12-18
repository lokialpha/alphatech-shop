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
  image: string;
}

import canvaProImg from '@/assets/products/canva-pro.png';
import chatgptPlusImg from '@/assets/products/chatgpt-plus.png';
import duolingoPlusImg from '@/assets/products/duolingo-plus.png';
import netflixPremiumImg from '@/assets/products/netflix-premium.png';
import skillsharePremiumImg from '@/assets/products/skillshare-premium.png';
import spotifyPremiumImg from '@/assets/products/spotify-premium.png';

export const products: Product[] = [
  {
    id: '1',
    slug: 'premium-design-tool',
    title: 'ကမ်ဗာ ပရို',
    shortDescription: 'Premium ကမ်ဗာ ပရို subs with unlimited access to all pro features and templates.',
    fullDescription: 'Get full access to ကမ်ဗာ ပရို with unlimited premium templates, brand kits, background remover, magic resize, and 100GB cloud storage. Perfect for creators and businesses.',
    price: 10000,
    category: 'bots',
    badge: 'Popular',
    image: canvaProImg,
    features: [
      '100+ million premium templates',
      'Background remover tool',
      'resize for all formats',
      'myanmar fonts',
      'custom brand asset management',
      '100GB cloud storage',
      'Schedule social media posts'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month ကမ်ဗာ ပရို subs',
      'Access to all premium features',
      'ကမ်ဗာ အေအိုင် (Magic Write, Text to Image, Text to Video)',
      'Priority customer support',
      'Instant account activation',
      'Renewal reminder'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Is this a personal or team account?', answer: 'This is a personal Canva Pro account with full premium features.' },
      { question: 'Can I use this for commercial projects?', answer: 'Yes! ကမ်ဗာ ပရို license allows commercial use of all designs.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=ကမ်ဗာ-ပရို'
  },
  {
    id: '2',
    slug: 'ချက်ဂျီပီတီ +',
    title: 'ချက်ဂျီပီတီ +',
    shortDescription: 'ချက်ဂျီပီတီ+ subs with GPT-4, faster responses, and priority access.',
    fullDescription: 'Get full access to ချက်ဂျီပီတီ+ with GPT-5.2, DALL-E image generation, advanced data analysis, and priority access during peak times.',
    price: 15000,
    category: 'scripts',
    image: chatgptPlusImg,
    features: [
      'ဂျီပီတီ-5.2 access',
      'DALL-E 3 image generation',
      'Advanced Data Analysis',
      'Custom ဂျီပီတီ creation',
      'Priority access during peak times',
      'Faster response speed'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month ချက်ဂျီပီတီ + subs',
      'Access to all ဂျီပီတီ-5.2 features',
      'DALL-E 3 image generation',
      'Code X feature',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Can I use GPT-4 unlimited?', answer: 'Yes! You get full access to ဂျီပီတီ-5.2 and all premium features.' },
      { question: 'Is this a shared account?', answer: 'No, this is your personal ချက်ဂျီပီတီ+ with full access.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=ချက်ဂျီပီတီပလပ်'
  },
  {
    id: '3',
    slug: 'Duolinngo-plus',
    title: 'Duolinngo Plus',
    shortDescription: 'Premium Duolingo subscription with unlimited lives, no ads, and offline access.',
    fullDescription: 'Learn any language with Duolingo Plus. Enjoy unlimited hearts, no ads, offline lessons, and progress tracking across all devices.',
    price: 8000,
    category: 'templates',
    badge: 'Best Seller',
    image: duolingoPlusImg,
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
    image: netflixPremiumImg,
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
    image: skillsharePremiumImg,
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
    slug: 'spotify-premium',
    title: 'Spotify Premium',
    shortDescription: 'Premium Spotify subscription with ad-free music, offline downloads, and unlimited skips.',
    fullDescription: 'Stream unlimited music with Spotify Premium. Enjoy ad-free listening, download songs for offline, unlimited skips, and high-quality audio on any device.',
    price: 8000,
    category: 'saas',
    badge: 'Premium',
    image: spotifyPremiumImg,
    features: [
      'Ad-free music streaming',
      'Unlimited skips',
      'Offline downloads',
      'High-quality audio',
      '100M+ songs library',
      'Podcasts included'
    ],
    requirements: [
      'Valid email address',
      'Spotify app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Spotify Premium subscription',
      'Ad-free music experience',
      'Download for offline listening',
      'High-quality audio (320kbps)',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Can I download songs for offline?', answer: 'Yes! Download unlimited songs and playlists to listen offline.' },
      { question: 'Which devices are supported?', answer: 'Phone, tablet, computer, smart speakers, gaming consoles, and car audio systems.' }
    ],
    telegramLink: 't.me/AlphaTechBot?start=spotify-premium'
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
  { value: '0-9000', label: 'Under 9,000 MMK' },
  { value: '9000-12000', label: '9,000 - 12,000 MMK' },
  { value: '12000+', label: '12,000+ MMK' }
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
    if (priceRange === '0-9000') {
      priceMatch = product.price < 9000;
    } else if (priceRange === '9000-12000') {
      priceMatch = product.price >= 9000 && product.price <= 12000;
    } else if (priceRange === '12000+') {
      priceMatch = product.price > 12000;
    }
    
    return categoryMatch && priceMatch;
  });
}
