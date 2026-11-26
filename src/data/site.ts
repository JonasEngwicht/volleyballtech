export const site = {
  name: 'VolleyballTech',
  tagline: 'Volleyball gear, explained',
  homeTitle: 'VolleyballTech – Volleyball Gear, Shoes & Tech, Explained',
  url: 'https://volleyballtech.com',
  description:
    'Volleyball gear, explained: honest comparisons of volleyball shoes, knee pads, balls and volleyball tech, plus drills and training tips for players and coaches.',
};

export const amazonTag = 'volleyballtec-20';

/** Amazon search link carrying our Associates tag. */
export const amazonSearchUrl = (query: string) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;

export const nav = [
  { href: '/gear/', label: 'Gear' },
  { href: '/learn/', label: 'Learn' },
  { href: '/best/', label: 'Best Picks' },
  { href: '/compare/', label: 'Compare' },
  { href: '/guides/', label: 'Guides' },
  { href: '/drills/', label: 'Drills' },
  { href: '/community/', label: 'Community' },
];

/** Article sections. Each one gets its own URL prefix, e.g. /guides/<slug>/ */
export const sections = [
  {
    id: 'learn',
    label: 'Learn',
    title: 'Learn Volleyball',
    h1: 'Learn Volleyball: Rules, Skills and Basics',
    seoTitle: 'Learn Volleyball: Rules, Court, Rotations & Skills',
    description:
      'Volleyball rules, court dimensions, net height, rotations and step-by-step skill guides for serving, passing, setting and spiking. Written in plain English for new players, parents and coaches.',
  },
  {
    id: 'guides',
    label: 'Guide',
    title: 'Guides',
    h1: 'Volleyball Guides',
    seoTitle: 'Volleyball Guides: Gear, Shoes, Training & Basics',
    description: 'Volleyball buying guides and explainers that help you understand what actually matters before you spend money on gear.',
  },
  {
    id: 'best',
    label: 'Best Picks',
    title: 'Best Picks',
    h1: 'Best Volleyball Gear: Our Picks',
    seoTitle: 'Best Volleyball Gear: Shoes and Equipment Picks',
    description: 'Our shortlists of the best volleyball shoes and gear for each position, level and budget.',
  },
  {
    id: 'compare',
    label: 'Comparison',
    title: 'Comparisons',
    h1: 'Volleyball Gear Comparisons',
    seoTitle: 'Volleyball Gear Comparisons: Shoes Head to Head',
    description: 'Head-to-head comparisons of popular volleyball shoes and gear, spec by spec.',
  },
] as const;

export const sectionIds = ['learn', 'guides', 'best', 'compare'] as const;

/** Gear categories. Products and drills reference these ids. */
export const categoryIds = [
  'shoes',
  'knee-pads',
  'ankle-braces',
  'balls',
  'training-equipment',
  'tech',
] as const;

export const categories: {
  id: (typeof categoryIds)[number];
  name: string;
  blurb: string;
  seoTitle: string;
  intro: string;
}[] = [
  {
    id: 'shoes',
    name: 'Volleyball Shoes',
    blurb: 'Court shoes for every position — grip, cushioning and lateral support compared.',
    seoTitle: 'Volleyball Shoes: Specs, Comparisons & Buying Guides',
    intro:
      'Volleyball shoes are the most important piece of gear you will buy. On this page you find every volleyball shoe we cover, each with full specs, pros and cons and a clear note on who should skip it. Not sure where to start? Our buying guides below explain grip, cushioning and fit in plain English.',
  },
  {
    id: 'knee-pads',
    name: 'Knee Pads',
    blurb: 'From low-profile sleeves to thick foam pads for defenders who live on the floor.',
    seoTitle: 'Volleyball Knee Pads: Guides & Comparisons',
    intro:
      'Volleyball knee pads protect you from bruises and floor burns when you dive. Here we collect knee pads for every position, from slim sleeves for hitters to thick padding for liberos.',
  },
  {
    id: 'ankle-braces',
    name: 'Ankle Braces',
    blurb: 'Lace-up and hinged braces to protect your ankles at the net.',
    seoTitle: 'Volleyball Ankle Braces: Guides & Comparisons',
    intro:
      'Ankle sprains are the most common volleyball injury, and many players wear ankle braces at the net. This is where we cover lace-up and hinged volleyball ankle braces.',
  },
  {
    id: 'balls',
    name: 'Volleyballs',
    blurb: 'Indoor, beach and training balls — sizes, weights and materials explained.',
    seoTitle: 'Volleyballs: Indoor, Beach & Training Balls Compared',
    intro:
      'Indoor volleyballs, beach volleyballs and lighter youth balls differ in size, weight and pressure. Here we cover volleyballs for every court and age group.',
  },
  {
    id: 'training-equipment',
    name: 'Training Equipment',
    blurb: 'Ball machines, setting targets, rebounders and other gear for solo and team practice.',
    seoTitle: 'Volleyball Training Equipment: Machines, Targets & Aids',
    intro:
      'Volleyball training equipment helps you get more touches in less time. This category covers ball machines, setting targets, rebounders and other training aids for solo and team practice.',
  },
  {
    id: 'tech',
    name: 'Volleyball Tech',
    blurb: 'Jump trackers, video analysis apps, cameras and wearables to measure your progress.',
    seoTitle: 'Volleyball Tech: Jump Trackers, Apps & Smart Gear',
    intro:
      'Volleyball tech covers everything that measures or records your game: jump trackers, video analysis apps, auto-tracking cameras and wearables. Here we explain what the technology does and whether it is worth the money for players and coaches.',
  },
];

export const skillLabels: Record<string, string> = {
  serving: 'Serving',
  passing: 'Passing',
  setting: 'Setting',
  attacking: 'Attacking',
  blocking: 'Blocking',
  defense: 'Defense',
  footwork: 'Footwork',
  jumping: 'Jumping',
};
