export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: 'editingSubs' | 'aiSubs' | 'learningSubs' | 'moviesSubs' | 'musicSubs';
  features: string[];
  requirements: string[];
  whatsIncluded: string[];
  faq: { question: string; answer: string }[];
  telegramLink: string;
  badge?: string;
  stock?: 'in-stock' | 'out-of-stock';
  image: string;
}

import KanBarProImg from '@/assets/products/KanBar-pro.png';
import ChatGyiPlusImg from '@/assets/products/ChatGyi-plus.png';
import ChatGyiGoImg from '@/assets/products/ChatGyi-Go.png';
import DuoLearningPlusImg from '@/assets/products/DuoLearning-plus.png';
import NetMoviesPremiumImg from '@/assets/products/Net-Movies-premium.png';
import DiMoviesPlusImg from '@/assets/products/Di-Movies-plus.png';
import SSLearningPremiumImg from '@/assets/products/SS-Learning-premium.png';
import SpotiPremiumImg from '@/assets/products/Spoti.png';


// Product Data
export const products: Product[] = [
  {
    id: '1',
    slug: 'premium-design-tool',
  title: 'KanBar Pro',
    shortDescription: 'Premium KanBar subscription with unlimited access to all pro features and templates.',
    fullDescription: 'Get full access to KanBar Pro with unlimited premium templates, brand kits, background remover, magic resize, and 100GB cloud storage. Perfect for creators and businesses.',
    price: 10000,
    category: 'editingSubs',
    badge: 'Popular',
    image: KanBarProImg,
    features: [
      '100+ million premium templates',
      'Background remover tool',
      'Resize for all formats',
      'Custom brand asset management',
      'Myanmar font support',
      '100GB cloud storage',
      'Schedule social media posts'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month KanBar Pro subscription',
      'Access to all premium features',
      'KanBar AI (Magic Write, Text to Image, Text to Video)',
      'Priority customer support',
      'Instant account activation',
      'Renewal reminder'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Is this a personal or team account?', answer: 'This is a personal KanBar Pro account with full premium features.' },
      { question: 'Can I use this for commercial projects?', answer: 'Yes! KanBar Pro license allows commercial use of all designs.' }
    ],
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '2',
    slug: 'ChatGyi-plus',
    title: 'ChatGyi Plus',
    shortDescription: 'Premium ChatGyi subscription with ဂျီပီတီ-4, faster responses, and priority access.',
    fullDescription: 'Get full access to ChatGyi Plus with ဂျီပီတီ-5.2, ဒဲ-e 3 image generation, advanced data analysis, and priority access during peak times.',
    price: 15000,
    category: 'aiSubs',
    image: ChatGyiPlusImg,
    features: [
      'ဂျီပီတီ-5.2 access',
      'ဒဲ-e 3 image generation',
      'Advanced Data Analysis',
      'Custom creation',
      'Priority access during peak times',
      'Faster response speed'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month ChatGyi Plus subscription',
      'Access to all ဂျီပီတီ-5.2 features',
      'ဒဲ-e  3 image generation',
      'Code X feature',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Can I use ဂျီပီတီ-5.2 unlimited?', answer: 'Yes! You get full access to ဂျီပီတီ-5.2 and all premium features.' },
      { question: 'Is this a shared account?', answer: 'No, this is your personal ChatGyi Plus account with full access.' }
    ],
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '8',
    slug: 'ChatGyi-go',
    title: 'ChatGyi Go',
    shortDescription: 'Fast, lightweight ChatGyi plan for daily tasks with ဂျီပီတီ-5 mini speed and browsing.',
    fullDescription: 'ChatGyi Go is the everyday plan built on ဂျီပီတီ-5 mini for quick answers, live browsing, file uploads, and light image generation—perfect for research, drafting, and coding without the higher Plus price.',
    price: 7000,
    category: 'aiSubs',
    badge: 'Value',
    image: ChatGyiGoImg,
    features: [
      'ဂျီပီတီ-5 mini responses tuned for speed',
      'Unlimited chats with fair use protections',
      'Live web browsing for fresh answers',
      'Upload files and images for analysis',
      'Basic image generation credits included',
      'Priority over free tier during peak times'
    ],
    requirements: [
      'Valid email address',
      'Any device with browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Go subscription',
      'ဂျီပီတီ-5 mini + browsing access',
      'File uploads and data analysis',
      'Light image generation credits',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How is Go different from Plus?', answer: 'Go uses ဂျီပီတီ-5 mini for faster, lower-cost replies; Plus keeps full ဂျီပီတီ-5/4 advanced features.' },
      { question: 'Do I get browsing?', answer: 'Yes, browsing is included for fresh, up-to-date answers.' },
      { question: 'Can I upgrade later?', answer: 'You can upgrade to ChatGyi Plus anytime by contacting support.' }
    ],
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '3',
    slug: 'DuoLearning-plus',
    title: 'DuoLearning Plus',
    shortDescription: 'Premium DuoLearning subscription with unlimited lives, no ads, and offline access.',
    fullDescription: 'Learn any language with DuoLearning Plus. Enjoy unlimited hearts, no ads, offline lessons, and progress tracking across all devices.',
    price: 8000,
    category: 'learningSubs',
    badge: 'Best Seller',
    image: DuoLearningPlusImg,
    features: [
      'Unlimited ❤️',
      'No ads',
      'Offline lesson access',
      'Unlimited tests',
      'Progress tracking',
      'Mastery quizzes'
    ],
    requirements: [
      'Valid email address',
      'DuoLearning app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month DuoLearning Plus subscription',
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
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '4',
    slug: 'Net-Movies-premium',
    title: 'Net-Movies Premium',
    shortDescription: 'Premium Net-Movies subscription with 4K Ultra HD, multiple screens, and all content.',
    fullDescription: 'Stream unlimited movies and TV shows with Net-Movies Premium. Watch on 4 screens at once in 4K Ultra HD quality. Download and watch offline on any device.',
    price: 15000,
    category: 'moviesSubs',
    stock: 'out-of-stock',
    image: NetMoviesPremiumImg,
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
      'Net-Movies app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Net-Movies Premium subscription',
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
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '5',
    slug: 'SS-Learning-premium',
    title: 'SS-Learning Premium',
    shortDescription: 'Premium SS-Learning subscription with unlimited access to 30,000+ creative classes.',
    fullDescription: 'Learn from industry experts with SS-Learning Premium. Access 30,000+ classes in design, business, photography, video, and more. Download for offline viewing.',
    price: 10000,
    category: 'learningSubs',
    image: SSLearningPremiumImg,
    features: [
      'Unlimited class access',
      '30,000+ creative classes',
      'Offline viewing',
      'No ads',
      'Download lessons',
      'Skill tracks & paths'
    ],
    requirements: [
      'Valid email address',
      'app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month SS-Learning Premium subscription',
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
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '6',
    slug: 'Spoti-premium',
    title: 'Spoti Premium',
    shortDescription: 'Premium Spoti subscription with ad-free music, offline downloads, and unlimited skips.',
    fullDescription: 'Stream unlimited music with Spoti Premium. Enjoy ad-free listening, download songs for offline, unlimited skips, and high-quality audio on any device.',
    price: 8000,
    category: 'musicSubs',
    badge: 'Premium',
    stock: 'out-of-stock',
    image: SpotiPremiumImg,
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
      'Spoti app or browser',
      'Internet connection'
    ],
    whatsIncluded: [
      '1 Month Spoti Premium subscription',
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
    telegramLink: 't.me/lokialpha'
  },
  {
    id: '7',
    slug: 'Di-Movies-plus',
    title: 'Di-Movies Plus',
    shortDescription: 'Disney-style library in 4K HDR with offline downloads and multiple profiles.',
    fullDescription: 'Enjoy a Disney-inspired streaming experience with Di-Movies Plus: 4K HDR and Dolby-ready playback, ad-free streaming, multiple profiles, downloads for offline trips, and fresh movies, series, and originals added every week.',
    price: 12000,
    category: 'moviesSubs',
    image: DiMoviesPlusImg,
    features: [
      '4K HDR + Dolby Vision/Atmos support',
      'Watch on up to 4 screens simultaneously',
      'Profiles for family members with kids mode',
      'Offline downloads for trips and flights',
      'Ad-free viewing experience',
      'Weekly new movies, series, and originals'
    ],
    requirements: [
      'Valid email address',
      'Di-Movies app or browser',
      '10 Mbps+ internet for 4K'
    ],
    whatsIncluded: [
      '1 Month Di-Movies Plus subscription',
      '4K HDR & Dolby-enabled streams',
      'Up to 4 simultaneous devices',
      'Unlimited downloads for offline',
      'Instant account activation',
      '24hr support with admin'
    ],
    faq: [
      { question: 'How do I receive my subscription?', answer: 'After payment, you\'ll receive login credentials via Telegram within 5 minutes.' },
      { question: 'Can I watch on TV?', answer: 'Yes! Use smart TVs, streaming sticks, or cast from your phone.' },
      { question: 'Does it support offline downloads?', answer: 'Yes, download movies and episodes to watch without internet.' },
      { question: 'How many devices can stream?', answer: 'Up to 4 devices can stream at the same time on one account.' }
    ],
    telegramLink: 't.me/lokialpha'
  }
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'editingSubs', label: 'Editing Subs' },
  { value: 'aiSubs', label: 'Ai Subs' },
  { value: 'learningSubs', label: 'Learning Subs' },
  { value: 'moviesSubs', label: 'Movies Subs' },
  { value: 'musicSubs', label: 'Music Subs' }
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
