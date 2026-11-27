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

export const author = {
  name: 'VolleyballTech team',
  url: '/about/',
};

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

export interface Category {
  id: (typeof categoryIds)[number];
  name: string;
  /** Lower-case noun used in running text, e.g. "volleyball shoes". */
  noun: string;
  blurb: string;
  seoTitle: string;
  intro: string;
  /** Buying guide that explains this category in depth. */
  guide: { href: string; label: string };
  /** Three things to check before buying. */
  checklist: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const categories: Category[] = [
  {
    id: 'shoes',
    name: 'Volleyball Shoes',
    noun: 'volleyball shoes',
    blurb: 'Court shoes for every position — grip, cushioning and lateral support compared.',
    seoTitle: 'Volleyball Shoes: Specs, Comparisons & Buying Guides',
    intro:
      'Volleyball shoes are the most important piece of gear you will buy. On this page you find every volleyball shoe we cover, each with full specs, pros and cons and a clear note on who should skip it. Not sure where to start? Our buying guides below explain grip, cushioning and fit in plain English.',
    guide: { href: '/guides/how-to-choose-volleyball-shoes/', label: 'How to choose volleyball shoes' },
    checklist: [
      {
        title: 'Grip on a clean indoor floor',
        text: 'Volleyball shoes use soft, non-marking rubber that sticks to hardwood and sport court. That grip is the main reason not to play in running shoes.',
      },
      {
        title: 'Cushioning that matches your jump count',
        text: 'Hitters and middle blockers land dozens of times a match and need more foam under the forefoot and heel. Setters and liberos usually prefer a lower, lighter shoe.',
      },
      {
        title: 'A locked-in fit',
        text: 'Your heel should not lift and your foot should not slide sideways when you cut. Try shoes on with your game socks, and with your ankle braces if you wear them.',
      },
    ],
    faq: [
      {
        q: 'Do I really need volleyball shoes?',
        a: 'If you play indoors more than now and then, yes. Running shoes are built for moving forward: they have tall, soft heels and little side support. Volleyball shoes are flatter, grip the court better and hold your foot when you move sideways.',
      },
      {
        q: 'How long do volleyball shoes last?',
        a: 'With two or three sessions a week, expect about one season. Replace them when the outsole stops gripping a clean floor or the cushioning feels flat. They last longer if you only wear them indoors.',
      },
      {
        q: 'Can I wear volleyball shoes outside?',
        a: 'It is better not to. Dust, asphalt and concrete wear down the soft rubber and the shoes lose their grip on the court. Change into them at the gym.',
      },
    ],
  },
  {
    id: 'knee-pads',
    name: 'Knee Pads',
    noun: 'volleyball knee pads',
    blurb: 'From low-profile sleeves to thick foam pads for defenders who live on the floor.',
    seoTitle: 'Volleyball Knee Pads: Guides & Comparisons',
    intro:
      'Volleyball knee pads protect you from bruises and floor burns when you dive. Here we collect knee pads for every position, from slim sleeves for hitters to thick padding for liberos.',
    guide: { href: '/guides/how-to-choose-volleyball-knee-pads/', label: 'How to choose volleyball knee pads' },
    checklist: [
      {
        title: 'Padding thickness',
        text: 'Thick pads protect more but feel bulky when you jump. Players who dive on most rallies want more foam; hitters and setters often pick a slim pad.',
      },
      {
        title: 'Sleeve length',
        text: 'A longer sleeve stays in place and covers more skin. A short sleeve is cooler and lighter. Both work, so this is mostly about comfort.',
      },
      {
        title: 'A snug size',
        text: 'A pad that slides down is useless. Measure around your knee and use the brand size chart. Many volleyball pads run small, so check buyer feedback for your size.',
      },
    ],
    faq: [
      {
        q: 'Where should volleyball knee pads sit?',
        a: 'Most players wear them centered on the kneecap or slightly below it, because the lower part of the knee usually touches the floor first when you slide forward. The pad should stay there when you bend your leg fully.',
      },
      {
        q: 'How do I wash volleyball knee pads?',
        a: 'Read the label first. Most pads can be washed cold on a gentle cycle, ideally in a laundry bag, and then air-dried. Heat from a dryer breaks down the foam and the elastic.',
      },
      {
        q: 'How tight should knee pads be?',
        a: 'Tight enough that they do not slide when you bend, jump and dive, but not so tight that they pinch behind the knee or leave your lower leg tingling. New pads loosen a little after a few sessions.',
      },
    ],
  },
  {
    id: 'ankle-braces',
    name: 'Ankle Braces',
    noun: 'volleyball ankle braces',
    blurb: 'Lace-up and hinged braces to protect your ankles at the net.',
    seoTitle: 'Volleyball Ankle Braces: Guides & Comparisons',
    intro:
      'Ankle sprains are the most common volleyball injury, and many players wear ankle braces at the net. This is where we cover lace-up and hinged volleyball ankle braces.',
    guide: { href: '/guides/how-to-choose-volleyball-ankle-braces/', label: 'How to choose volleyball ankle braces' },
    checklist: [
      {
        title: 'Lace-up or hinged',
        text: 'Lace-up braces are soft, slim and fit in almost any shoe. Hinged braces have stiff side supports that block the ankle from rolling while still letting it bend up and down.',
      },
      {
        title: 'Room in your shoe',
        text: 'A rigid brace takes up space. Try braces on with the shoes you play in. Some players go up half a size or loosen the laces.',
      },
      {
        title: 'Prevention or comeback',
        text: 'If you are returning from a sprain, ask a doctor, physical therapist or athletic trainer which level of support you need. We explain products, not injuries.',
      },
    ],
    faq: [
      {
        q: 'Should I wear a brace on both ankles?',
        a: 'Many players do. Most volleyball ankle sprains happen when you land on another player\'s foot at the net, and that can happen to either ankle. In the end it is a personal choice, and some clubs set their own rules.',
      },
      {
        q: 'Do ankle braces make your ankles weaker?',
        a: 'The research we have read has not shown that wearing a brace for sport weakens the ankle. A brace does not replace strength and balance training, though. If you are worried, talk to a physical therapist or athletic trainer.',
      },
      {
        q: 'Do ankle braces fit in every volleyball shoe?',
        a: 'Lace-up braces fit in most shoes if you loosen the laces. Hinged braces need more room and work best in low-top shoes with a normal or wide fit. Always try both on together.',
      },
    ],
  },
  {
    id: 'balls',
    name: 'Volleyballs',
    noun: 'volleyballs',
    blurb: 'Indoor, beach and training balls — sizes, weights and materials explained.',
    seoTitle: 'Volleyballs: Indoor, Beach & Training Balls Compared',
    intro:
      'Indoor volleyballs, beach volleyballs and lighter youth balls differ in size, weight and pressure. Here we cover volleyballs for every court and age group.',
    guide: { href: '/guides/volleyball-size-guide/', label: 'Volleyball size and weight guide' },
    checklist: [
      {
        title: 'Indoor or outdoor',
        text: 'Indoor balls are a little smaller, harder and made for clean courts. Beach and outdoor balls are slightly larger, softer and built to handle sand and water.',
      },
      {
        title: 'The ball your league uses',
        text: 'High schools need a ball with the NFHS mark, and many clubs play with one brand. Practising with the same ball you compete with makes a real difference.',
      },
      {
        title: 'Cover material',
        text: 'Microfiber composite covers feel soft and grippy and are the standard for match balls. Cheap recreational balls use sponge-backed synthetic leather that is kind to beginners\' arms.',
      },
    ],
    faq: [
      {
        q: 'What size is an official volleyball?',
        a: 'An official indoor ball (size 5) measures 65–67 cm around and weighs 260–280 g. An official beach ball is slightly bigger at 66–68 cm, with the same weight and lower pressure.',
      },
      {
        q: 'Can I use an indoor volleyball outside?',
        a: 'You can, but it will not last. Sand, water and rough ground damage the cover and the seams. Buy an outdoor ball for the beach, the park or the backyard.',
      },
      {
        q: 'Which volleyball should a beginner buy?',
        a: 'For the backyard or the beach, a soft recreational ball is enough. If you have joined a school or club team, buy the composite ball your team plays with so the touch feels the same at home.',
      },
    ],
  },
  {
    id: 'training-equipment',
    name: 'Training Equipment',
    noun: 'volleyball training equipment',
    blurb: 'Ball machines, setting targets, rebounders and other gear for solo and team practice.',
    seoTitle: 'Volleyball Training Equipment: Machines, Targets & Aids',
    intro:
      'Volleyball training equipment helps you get more touches in less time. This category covers ball machines, setting targets, rebounders and other training aids for solo and team practice.',
    guide: { href: '/best/best-volleyball-training-equipment/', label: 'Best volleyball training equipment' },
    checklist: [
      {
        title: 'One skill at a time',
        text: 'The best training aids fix one habit: palming the ball when you set, swinging your arms when you pass, a toss that drifts. Decide what you want to fix before you buy.',
      },
      {
        title: 'Solo or team',
        text: 'Rebounders and ball-on-a-cord trainers are for practising alone. Nets, carts and targets make more sense for teams and families.',
      },
      {
        title: 'Space and setup',
        text: 'Check how much room you need and how long setup takes. Gear that is a hassle to set up usually stays in the garage.',
      },
    ],
    faq: [
      {
        q: 'What do I need to practise volleyball at home?',
        a: 'A ball and a wall are enough to start: our wall drills cover passing, setting and hitting. A rebounder or a solo trainer adds more repetitions, and a portable net lets you serve and hit over a real height.',
      },
      {
        q: 'Are volleyball training aids worth it?',
        a: 'For one specific habit, yes. They give you instant feedback that is hard to get alone. They do not replace a coach or simply touching the ball more often.',
      },
      {
        q: 'How high should I set a practice net?',
        a: 'The official height is 2.43 m (7 ft 11 5/8 in) for men and 2.24 m (7 ft 4 1/8 in) for women. Youth and recreational nets are often lower. See our net height guide for every age group.',
      },
    ],
  },
  {
    id: 'tech',
    name: 'Volleyball Tech',
    noun: 'volleyball tech',
    blurb: 'Jump trackers, video analysis apps, cameras and wearables to measure your progress.',
    seoTitle: 'Volleyball Tech: Jump Trackers, Apps & Smart Gear',
    intro:
      'Volleyball tech covers everything that measures or records your game: jump trackers, video analysis apps, auto-tracking cameras and wearables. Here we explain what the technology does and whether it is worth the money for players and coaches.',
    guide: { href: '/guides/volleyball-tech-guide/', label: 'Volleyball tech guide' },
    checklist: [
      {
        title: 'What you want to measure',
        text: 'Jump height and jump count, serve speed, match stats or simply video. Each needs a different tool, and no single device does everything well.',
      },
      {
        title: 'The running costs',
        text: 'Many cameras and apps need a subscription for the useful features. Add the yearly cost to the price before you compare products.',
      },
      {
        title: 'Who will use the data',
        text: 'Numbers only help if someone looks at them. A coach with a plan gets more out of tech than a player who checks the app once.',
      },
    ],
    faq: [
      {
        q: 'What is volleyball tech?',
        a: 'We use the term for hardware and apps that record or measure the game: jump monitors, radar guns, auto-tracking cameras, video analysis and stats apps. Shoes and balls with new materials are gear, not tech.',
      },
      {
        q: 'How should I film a volleyball match?',
        a: 'Put the camera as high as you can behind one end line, so the whole court and both sidelines are in the picture. A tall tripod and a wide lens matter more than an expensive camera.',
      },
      {
        q: 'Is volleyball tech worth it for beginners?',
        a: 'Usually not. A phone on a tripod gives a beginner all the feedback they can use. Jump monitors and tracking cameras pay off for club teams, coaches and players who already train several times a week.',
      },
    ],
  },
];

/** Products shown on the homepage and preferred in "gear for this drill" lists. */
export const featuredProducts = [
  'asics-gel-rocket-12',
  'mizuno-wave-lightning-z8',
  'mizuno-lr6-knee-pads',
  'active-ankle-t2',
  'mikasa-v200w',
  'xbotgo-chameleon',
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
