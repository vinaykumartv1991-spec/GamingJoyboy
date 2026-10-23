// Mock data for GamingIndia website

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: number;
  emoji: string;
  image: string;
  platform?: string;
  isHot?: boolean;
  isKarnataka?: boolean;
}

export interface Game {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  genre: string;
  platform: string;
  rating: number;
  players: string;
  gradient: string;
}

export interface Tournament {
  id: string;
  title: string;
  game: string;
  gameEmoji: string;
  prize: string;
  prizeRaw: number;
  date: string;
  location: string;
  format: string;
  status: 'open' | 'upcoming' | 'ongoing';
  isKarnataka: boolean;
  gradient: string;
}

export interface Deal {
  id: string;
  name: string;
  brand: string;
  category: string;
  emoji: string;
  priceNew: number;
  priceOld: number;
  discount: number;
  rating: number;
  reviews: number;
  platform: 'flipkart' | 'amazon' | 'both';
  inStock: boolean;
  emi?: string;
  gradient: string;
}

export interface KannadaArticle extends Article {
  titleKn: string;
  excerptKn: string;
  categoryKn: string;
  dateKn: string;
}

// ===== ARTICLES =====
export const trendingArticles: Article[] = [
  {
    id: '1',
    title: 'BGMI Season 7 Complete Guide: New Map, Weapons & Best Settings',
    slug: 'bgmi-season-7-complete-guide',
    excerpt: 'Everything you need to know about BGMI Season 7 — new map Kalahari, updated weapon meta, and the best graphics settings for budget Android phones.',
    category: 'BGMI',
    categoryColor: 'tag-tertiary',
    author: 'Rahul K.',
    date: 'Oct 22, 2026',
    readTime: 8,
    emoji: '🔫',
    image: '/images/hero-bgmi.jpg',
    platform: 'Mobile',
    isHot: true,
  },
  {
    id: '2',
    title: 'Best Gaming PC Under ₹60,000 in India — October 2026 Build Guide',
    slug: 'gaming-pc-under-60000',
    excerpt: 'Build the ultimate gaming PC under ₹60,000 with parts from Flipkart and Amazon India. Full component list with benchmark results.',
    category: 'PC Build',
    categoryColor: 'tag-secondary',
    author: 'Vikram P.',
    date: 'Oct 21, 2026',
    readTime: 10,
    emoji: '💻',
    image: '/images/thumb-setup.jpg',
    platform: 'PC',
    isHot: false,
  },
  {
    id: '3',
    title: 'Karnataka Gamers Cup 2026: Full Schedule, Teams & How to Register',
    slug: 'karnataka-gamers-cup-2026',
    excerpt: 'India\'s biggest regional esports event is back with a ₹25 lakh prize pool. Here\'s everything you need to know to participate or watch.',
    category: 'Esports',
    categoryColor: 'tag-gold',
    author: 'Keerthi B.',
    date: 'Oct 20, 2026',
    readTime: 6,
    emoji: '🏆',
    image: '/images/esports-arena.jpg',
    platform: 'Esports',
    isHot: true,
  },
  {
    id: '4',
    title: 'Valorant Agents Tier List for Indian Servers — October 2026 Meta',
    slug: 'valorant-agents-tier-list-india-october-2026',
    excerpt: 'Updated tier list for all 25 Valorant agents based on performance on Indian servers. Which agents dominate the current meta?',
    category: 'Valorant',
    categoryColor: 'tag-primary',
    author: 'Arjun S.',
    date: 'Oct 19, 2026',
    readTime: 7,
    emoji: '🎯',
    image: '/images/thumb-fps.jpg',
    platform: 'PC',
  },
  {
    id: '5',
    title: 'Top 5 Gaming Phones Under ₹20,000 for BGMI & Free Fire MAX',
    slug: 'best-gaming-phones-under-20000',
    excerpt: 'Get 60 FPS gameplay on BGMI and Free Fire MAX without breaking the bank. Our top picks under ₹20,000 for Indian gamers.',
    category: 'Phones',
    categoryColor: 'tag-success',
    author: 'Priya M.',
    date: 'Oct 18, 2026',
    readTime: 9,
    emoji: '📱',
    image: '/images/thumb-mobile.jpg',
    platform: 'Mobile',
  },
  {
    id: '6',
    title: 'How to Start an Esports Career in India: 2026 Complete Guide',
    slug: 'esports-career-guide-india-2026',
    excerpt: 'From weekend player to professional esports athlete — a step-by-step guide to building an esports career in India in 2026.',
    category: 'Career',
    categoryColor: 'tag-secondary',
    author: 'Keerthi B.',
    date: 'Oct 16, 2026',
    readTime: 12,
    emoji: '🎮',
    image: '/images/thumb-headset.jpg',
    platform: 'Esports',
  },
];

// ===== GAMES =====
export const featuredGames: Game[] = [
  { id: 'bgmi', name: 'BGMI', slug: 'bgmi', emoji: '🔫', genre: 'Battle Royale', platform: 'Mobile', rating: 4.5, players: '100M+ India', gradient: 'linear-gradient(135deg,#100025,#200040)' },
  { id: 'valorant', name: 'Valorant', slug: 'valorant', emoji: '🎯', genre: 'Tactical FPS', platform: 'PC', rating: 4.7, players: '15M+ India', gradient: 'linear-gradient(135deg,#1a0015,#300025)' },
  { id: 'free-fire', name: 'Free Fire MAX', slug: 'free-fire-max', emoji: '🔥', genre: 'Battle Royale', platform: 'Mobile', rating: 4.3, players: '80M+ India', gradient: 'linear-gradient(135deg,#1a1000,#2a1800)' },
  { id: 'cs2', name: 'CS2', slug: 'cs2', emoji: '💣', genre: 'Tactical FPS', platform: 'PC', rating: 4.6, players: '8M+ India', gradient: 'linear-gradient(135deg,#001525,#002540)' },
  { id: 'gta-v', name: 'GTA V', slug: 'gta-v', emoji: '🚗', genre: 'Open World', platform: 'PC/Console', rating: 4.8, players: '5M+ India', gradient: 'linear-gradient(135deg,#001000,#002500)' },
  { id: 'dream11', name: 'Dream11', slug: 'dream11', emoji: '🏏', genre: 'Fantasy Sports', platform: 'Mobile', rating: 4.4, players: '180M+ India', gradient: 'linear-gradient(135deg,#001020,#002040)' },
];

// ===== TOURNAMENTS =====
export const tournaments: Tournament[] = [
  {
    id: '1',
    title: 'Karnataka Gamers Cup 2026',
    game: 'BGMI / Valorant / CS2',
    gameEmoji: '🏆',
    prize: '₹25,00,000',
    prizeRaw: 2500000,
    date: 'Nov 22–24, 2026',
    location: 'Bengaluru LAN',
    format: 'Squad (4v4)',
    status: 'open',
    isKarnataka: true,
    gradient: 'linear-gradient(135deg,#1a1000,#2a1800)',
  },
  {
    id: '2',
    title: 'BGMI India Open Season 5',
    game: 'BGMI',
    gameEmoji: '🔫',
    prize: '₹50,00,000',
    prizeRaw: 5000000,
    date: 'Nov 28 – Dec 5, 2026',
    location: 'Online + Mumbai Finals',
    format: 'Squad (4v4)',
    status: 'upcoming',
    isKarnataka: false,
    gradient: 'linear-gradient(135deg,#100025,#200040)',
  },
  {
    id: '3',
    title: 'Valorant Challengers India S2',
    game: 'Valorant',
    gameEmoji: '🎯',
    prize: '₹30,00,000',
    prizeRaw: 3000000,
    date: 'Dec 1–7, 2026',
    location: 'Online',
    format: '5v5',
    status: 'upcoming',
    isKarnataka: false,
    gradient: 'linear-gradient(135deg,#1a0015,#300025)',
  },
  {
    id: '4',
    title: 'Mysuru Gamers League',
    game: 'BGMI',
    gameEmoji: '🔫',
    prize: '₹50,000',
    prizeRaw: 50000,
    date: 'Nov 25, 2026',
    location: 'Mysuru Gaming Cafe',
    format: 'Squad (4v4)',
    status: 'open',
    isKarnataka: true,
    gradient: 'linear-gradient(135deg,#001025,#002040)',
  },
  {
    id: '5',
    title: 'ESL India CS2 Championship',
    game: 'CS2',
    gameEmoji: '💣',
    prize: '₹20,00,000',
    prizeRaw: 2000000,
    date: 'Dec 10–15, 2026',
    location: 'Online + Delhi Finals',
    format: '5v5',
    status: 'upcoming',
    isKarnataka: false,
    gradient: 'linear-gradient(135deg,#001525,#002540)',
  },
  {
    id: '6',
    title: 'Free Fire MAX India Cup',
    game: 'Free Fire MAX',
    gameEmoji: '🔥',
    prize: '₹15,00,000',
    prizeRaw: 1500000,
    date: 'Nov 15–20, 2026',
    location: 'Online',
    format: 'Squad (4v4)',
    status: 'ongoing',
    isKarnataka: false,
    gradient: 'linear-gradient(135deg,#1a1000,#2a1800)',
  },
  {
    id: '7',
    title: 'Hubballi-Dharwad LAN Party',
    game: 'CS2 / Valorant',
    gameEmoji: '💻',
    prize: '₹25,000',
    prizeRaw: 25000,
    date: 'Dec 3, 2026',
    location: 'Hubballi-Dharwad',
    format: 'Mixed',
    status: 'open',
    isKarnataka: true,
    gradient: 'linear-gradient(135deg,#001520,#002030)',
  },
];

// ===== DEALS =====
export const hotDeals: Deal[] = [
  {
    id: '1',
    name: 'Ant Esports MK3400W Gaming Keyboard',
    brand: 'Ant Esports',
    category: 'Keyboards',
    emoji: '⌨️',
    priceNew: 2299,
    priceOld: 3499,
    discount: 34,
    rating: 4.3,
    reviews: 1247,
    platform: 'both',
    inStock: true,
    emi: '₹191/mo',
    gradient: 'linear-gradient(135deg,#001525,#002040)',
  },
  {
    id: '2',
    name: 'Cosmic Byte CB-GW17 Wireless Gaming Mouse',
    brand: 'Cosmic Byte',
    category: 'Mice',
    emoji: '🖱️',
    priceNew: 1249,
    priceOld: 1999,
    discount: 38,
    rating: 4.1,
    reviews: 843,
    platform: 'flipkart',
    inStock: true,
    gradient: 'linear-gradient(135deg,#100025,#1a0035)',
  },
  {
    id: '3',
    name: 'boAt Immortal 1000D Gaming Headset',
    brand: 'boAt',
    category: 'Headsets',
    emoji: '🎧',
    priceNew: 1499,
    priceOld: 2990,
    discount: 50,
    rating: 4.4,
    reviews: 3521,
    platform: 'both',
    inStock: true,
    emi: '₹125/mo',
    gradient: 'linear-gradient(135deg,#1a0015,#2a0025)',
  },
  {
    id: '4',
    name: 'POCO X6 Pro 5G (12GB/256GB) — Gaming Beast',
    brand: 'POCO',
    category: 'Phones',
    emoji: '📱',
    priceNew: 21999,
    priceOld: 26999,
    discount: 19,
    rating: 4.5,
    reviews: 8924,
    platform: 'flipkart',
    inStock: true,
    emi: '₹1,833/mo',
    gradient: 'linear-gradient(135deg,#001a10,#002a18)',
  },
  {
    id: '5',
    name: 'LG 24MR400-B 24" FHD IPS 100Hz Gaming Monitor',
    brand: 'LG',
    category: 'Monitors',
    emoji: '🖥️',
    priceNew: 14799,
    priceOld: 19999,
    discount: 26,
    rating: 4.3,
    reviews: 2156,
    platform: 'amazon',
    inStock: true,
    emi: '₹1,233/mo',
    gradient: 'linear-gradient(135deg,#001525,#002540)',
  },
  {
    id: '6',
    name: 'PS5 DualSense Controller — Midnight Black',
    brand: 'Sony',
    category: 'Controllers',
    emoji: '🎮',
    priceNew: 5999,
    priceOld: 7499,
    discount: 20,
    rating: 4.8,
    reviews: 5234,
    platform: 'both',
    inStock: false,
    gradient: 'linear-gradient(135deg,#001020,#001a30)',
  },
];

// ===== KANNADA ARTICLES =====
export const kannadaArticles: KannadaArticle[] = [
  {
    id: 'k1',
    title: 'BGMI Beginners Guide (Kannada)',
    titleKn: 'BGMI ಶುರು ಮಾಡುವ ಸಂಪೂರ್ಣ ಮಾರ್ಗದರ್ಶಿ',
    slug: 'bgmi-beginners-guide-kannada',
    excerpt: 'Full BGMI guide in Kannada',
    excerptKn: 'BGMI ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದರಿಂದ ಹಿಡಿದು ಮೊದಲ ಮ್ಯಾಚ್ ಗೆಲ್ಲುವವರೆಗೆ — ಕನ್ನಡದಲ್ಲಿ ಸಂಪೂರ್ಣ ಗೈಡ್.',
    category: 'Beginner Guide',
    categoryKn: 'ಶುರುವಾತಿನ ಗೈಡ್',
    categoryColor: 'tag-success',
    author: 'ಕೀರ್ತಿ ಬಾಳ',
    date: 'Oct 14, 2026',
    dateKn: 'ಅಕ್ಟೋ 14, 2026',
    readTime: 8,
    emoji: '🔫',
    platform: 'Mobile',
    isHot: true,
  },
  {
    id: 'k2',
    title: 'BGMI Rank Up Tips Kannada',
    titleKn: 'BGMI ರ್ಯಾಂಕ್ ಅಪ್ ಮಾಡುವ ಟಿಪ್ಸ್',
    slug: 'bgmi-rank-tips-kannada',
    excerpt: 'BGMI rank up tips in Kannada',
    excerptKn: 'ಪ್ಲಾಟಿನಂ ರ್ಯಾಂಕ್‌ನಲ್ಲಿ ಸಿಕ್ಕಿ ಹಾಕಿಕೊಂಡಿದ್ದೀರಾ? ಈ ಟಿಪ್ಸ್‌ಗಳು ಡಯಮಂಡ್ ತಲುಪಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.',
    category: 'BGMI Tips',
    categoryKn: 'BGMI ಟಿಪ್ಸ್',
    categoryColor: 'tag-primary',
    author: 'ಕೀರ್ತಿ ಬಾಳ',
    date: 'Oct 13, 2026',
    dateKn: 'ಅಕ್ಟೋ 13, 2026',
    readTime: 5,
    emoji: '🎮',
  },
  {
    id: 'k3',
    title: 'Gaming PC Under 60000 Karnataka',
    titleKn: '₹60,000 ಬಜೆಟ್‌ನಲ್ಲಿ ಗೇಮಿಂಗ್ PC — ಕರ್ನಾಟಕ ಖರೀದಿ ಗೈಡ್',
    slug: 'gaming-pc-60000-kannada',
    excerpt: 'PC build guide in Kannada',
    excerptKn: 'Flipkart ಮತ್ತು Amazon India ಲಿಂಕ್‌ಗಳೊಂದಿಗೆ — ₹60,000 ಒಳಗೆ ಅತ್ಯುತ್ತಮ ಗೇಮಿಂಗ್ PC ಕಟ್ಟಿ.',
    category: 'PC Build',
    categoryKn: 'PC ಬಿಲ್ಡ್',
    categoryColor: 'tag-secondary',
    author: 'ವಿಕ್ರಮ್ ಪಾಟೀಲ್',
    date: 'Oct 10, 2026',
    dateKn: 'ಅಕ್ಟೋ 10, 2026',
    readTime: 10,
    emoji: '💻',
  },
  {
    id: 'k4',
    title: 'Karnataka Gamers Cup 2026 Kannada',
    titleKn: 'ಕರ್ನಾಟಕ ಗೇಮರ್ಸ್ ಕಪ್ 2026: ನೋಂದಣಿ ಶುರು',
    slug: 'karnataka-gamers-cup-2026-kannada',
    excerpt: 'Karnataka event news in Kannada',
    excerptKn: 'BGMI, Valorant ಮತ್ತು CS2 ವಿಭಾಗಗಳಲ್ಲಿ — ಬೆಂಗಳೂರಿನ KTPO ಕೇಂದ್ರದಲ್ಲಿ ನ. 22–24. ₹25 ಲಕ್ಷ ಬಹುಮಾನ!',
    category: 'Karnataka Esports',
    categoryKn: 'ಕರ್ನಾಟಕ ಈಸ್ಪೋರ್ಟ್ಸ್',
    categoryColor: 'tag-gold',
    author: 'ಸ್ಟಾಫ್',
    date: 'Oct 16, 2026',
    dateKn: 'ಅಕ್ಟೋ 16, 2026',
    readTime: 3,
    emoji: '🏆',
    isHot: true,
  },
  {
    id: 'k5',
    title: 'Valorant Beginners Guide Kannada',
    titleKn: 'Valorant ಹೇಗೆ ಆಡಬೇಕು? ಕನ್ನಡದಲ್ಲಿ ಶುರುವಾತಿನ ಗೈಡ್',
    slug: 'valorant-beginners-guide-kannada',
    excerpt: 'Valorant guide in Kannada',
    excerptKn: 'ಅಜೆಂಟ್ ಆಯ್ಕೆ, ಕೌಶಲ್ಯ ಉಪಯೋಗ, ಮ್ಯಾಪ್ ತಿಳುವಳಿಕೆ — ಎಲ್ಲಾ ಕನ್ನಡದಲ್ಲಿ.',
    category: 'Valorant Guide',
    categoryKn: 'Valorant ಗೈಡ್',
    categoryColor: 'tag-tertiary',
    author: 'ರಾಹುಲ್ ಕೆ.',
    date: 'Oct 8, 2026',
    dateKn: 'ಅಕ್ಟೋ 8, 2026',
    readTime: 7,
    emoji: '🎯',
  },
];

// ===== GLOSSARY =====
export const gamingGlossary = [
  { termKn: 'ಡ್ರಾಪ್', term: 'Drop (Landing Zone)', definitionKn: 'ಮ್ಯಾಚ್ ಶುರುವಾದಾಗ ವಿಮಾನದಿಂದ ಇಳಿಯುವ ಸ್ಥಳ.' },
  { termKn: 'ರ್ಯಾಂಕ್ ಪುಶ್', term: 'Rank Push', definitionKn: 'ತನ್ನ ರ್ಯಾಂಕ್ ಸುಧಾರಿಸಲು ಸತತವಾಗಿ ಆಡುವ ಪ್ರಕ್ರಿಯೆ.' },
  { termKn: 'ಪಿಂಗ್', term: 'Ping / Latency', definitionKn: 'ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್ ಮತ್ತು ಸರ್ವರ್ ನಡುವಿನ ಸಂಪರ್ಕ ವೇಗ. ಕಡಿಮೆ = ಉತ್ತಮ.' },
  { termKn: 'ಸ್ಕ್ರಿಮ್', term: 'Scrimmage', definitionKn: 'ಎರಡು ತಂಡಗಳ ನಡುವೆ ಖಾಸಗಿ ಅಭ್ಯಾಸ ಮ್ಯಾಚ್.' },
  { termKn: 'ಫ್ರ್ಯಾಗ್', term: 'Frag / Kill', definitionKn: 'ಶತ್ರು ಆಟಗಾರನನ್ನು ಸೋಲಿಸುವುದು.' },
];

// ===== PC BUILDS =====
export const pcBuilds = [
  {
    tier: 'Budget',
    budget: '₹35,000–45,000',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg,rgba(0,200,83,.08),rgba(0,212,255,.04))',
    games: ['BGMI PC', 'Valorant', 'CS2 (60 FPS)'],
    parts: {
      CPU: 'AMD Ryzen 5 5600',
      GPU: 'RX 6600 8GB',
      RAM: '16GB DDR4 3200MHz',
      Storage: '500GB NVMe SSD',
      PSU: '550W 80+ Bronze',
    },
  },
  {
    tier: 'Mid-Range',
    budget: '₹55,000–70,000',
    emoji: '🔥',
    gradient: 'linear-gradient(135deg,rgba(255,107,0,.08),rgba(123,47,255,.04))',
    games: ['Valorant 144fps', 'CS2', 'GTA V'],
    parts: {
      CPU: 'AMD Ryzen 5 7600',
      GPU: 'RX 7600 8GB',
      RAM: '16GB DDR5 5200MHz',
      Storage: '1TB NVMe SSD',
      PSU: '650W 80+ Gold',
    },
  },
  {
    tier: 'High-End',
    budget: '₹1,00,000–1,50,000',
    emoji: '👑',
    gradient: 'linear-gradient(135deg,rgba(255,215,0,.08),rgba(255,107,0,.04))',
    games: ['4K Gaming', 'VR-Ready', 'Streaming'],
    parts: {
      CPU: 'Intel Core i7-14700K',
      GPU: 'RTX 4070 Ti 12GB',
      RAM: '32GB DDR5 6000MHz',
      Storage: '2TB NVMe SSD',
      PSU: '850W 80+ Gold',
    },
  },
];
