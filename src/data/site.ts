export const site = {
  name: 'VolleyballTech',
  tagline: 'Volleyball gear, explained',
  url: 'https://volleyballtech.com',
  description:
    'Clear comparisons, real specs and practical training tips for volleyball players — from your first pair of court shoes to jump trackers and ball machines.',
};

export const amazonTag = 'volleyballtec-20';

/** Amazon search link carrying our Associates tag. */
export const amazonSearchUrl = (query: string) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;

export const nav = [
  { href: '/gear/', label: 'Gear' },
  { href: '/best/', label: 'Best Picks' },
  { href: '/guides/', label: 'Guides' },
  { href: '/drills/', label: 'Drills' },
  { href: '/community/', label: 'Community' },
];

/** Article sections. Each one gets its own URL prefix, e.g. /guides/<slug>/ */
export const sections = [
  {
    id: 'guides',
    label: 'Guide',
    title: 'Guides',
    description: 'Buying guides and explainers that help you understand what actually matters before you spend money.',
  },
  {
    id: 'best',
    label: 'Best Picks',
    title: 'Best Picks',
    description: 'Our shortlists of the best volleyball gear for each position, level and budget.',
  },
  {
    id: 'compare',
    label: 'Comparison',
    title: 'Comparisons',
    description: 'Head-to-head comparisons of popular volleyball products, spec by spec.',
  },
] as const;

export const sectionIds = ['guides', 'best', 'compare'] as const;

/** Gear categories. Products and drills reference these ids. */
export const categoryIds = [
  'shoes',
  'knee-pads',
  'ankle-braces',
  'balls',
  'training-equipment',
  'tech',
] as const;

export const categories: { id: (typeof categoryIds)[number]; name: string; blurb: string }[] = [
  {
    id: 'shoes',
    name: 'Volleyball Shoes',
    blurb: 'Court shoes for every position — grip, cushioning and lateral support compared.',
  },
  {
    id: 'knee-pads',
    name: 'Knee Pads',
    blurb: 'From low-profile sleeves to thick foam pads for defenders who live on the floor.',
  },
  {
    id: 'ankle-braces',
    name: 'Ankle Braces',
    blurb: 'Lace-up and hinged braces to protect your ankles at the net.',
  },
  {
    id: 'balls',
    name: 'Volleyballs',
    blurb: 'Indoor, beach and training balls — sizes, weights and materials explained.',
  },
  {
    id: 'training-equipment',
    name: 'Training Equipment',
    blurb: 'Ball machines, setting targets, rebounders and other gear for solo and team practice.',
  },
  {
    id: 'tech',
    name: 'Volleyball Tech',
    blurb: 'Jump trackers, video analysis apps, cameras and wearables to measure your progress.',
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
