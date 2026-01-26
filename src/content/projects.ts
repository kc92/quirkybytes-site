import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'desperados-destiny',
    title: "DESPERADO'S DESTINY",
    description: 'Wild West MMORPG adventure!',
    longDescription: `Step into the untamed frontier of the Wild West in Desperado's Destiny, 
    an immersive MMORPG that combines classic Western aesthetics with modern multiplayer gameplay. 
    Build your legend as an outlaw, sheriff, or anything in between in a living, breathing world 
    filled with danger, opportunity, and adventure.`,
    icon: '🤠',
    preview: 'western',
    status: 'live',
    isHot: true,
    tech: ['Unity', 'C#', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket'],
    features: [
      'Massive open world Western sandbox',
      'Real-time multiplayer with thousands of concurrent players',
      'Dynamic economy driven by player actions',
      'Deep character customization and progression',
      'PvE missions and PvP showdowns',
      'Guild system with territory control'
    ],
    challenges: [
      'Optimizing netcode for smooth real-time combat',
      'Building a scalable economy that resists exploitation',
      'Creating an authentic Western atmosphere while maintaining gameplay balance'
    ],
    liveUrl: 'https://desperados-destiny.com'
  },
  {
    slug: 'wardian',
    title: 'WARDIAN',
    description: 'Dashboard platform',
    longDescription: `Wardian is a next-generation dashboard platform designed for teams 
    who need real-time insights without the complexity. Built with performance and usability 
    at its core, Wardian transforms your data into actionable intelligence with beautiful, 
    customizable visualizations.`,
    icon: '📊',
    preview: 'tech',
    status: 'live',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Chart.js', 'Vercel'],
    features: [
      'Real-time data synchronization',
      'Drag-and-drop dashboard builder',
      'Advanced analytics and reporting',
      'Team collaboration features',
      'Custom widget development',
      'Enterprise-grade security'
    ],
    challenges: [
      'Handling high-frequency data updates without performance degradation',
      'Building an intuitive drag-and-drop interface that works on all devices',
      'Ensuring data privacy while enabling collaboration'
    ],
    liveUrl: 'https://wardian.io'
  },
  {
    slug: 'astrogenesis',
    title: 'ASTROGENESIS',
    description: 'Coming soon...',
    longDescription: `AstroGenesis is our most ambitious project yet — a space exploration 
    and civilization building game that combines procedural generation with deep strategy 
    gameplay. Explore infinite galaxies, establish colonies, and shape the destiny of 
    humanity among the stars.`,
    icon: '🚀',
    preview: 'space',
    status: 'soon',
    isNew: true,
    tech: ['Unreal Engine 5', 'C++', 'Blueprint', 'AWS', 'Procedural Generation'],
    features: [
      'Procedurally generated infinite universe',
      'Deep space exploration mechanics',
      'Colony building and management',
      'Faction diplomacy and warfare',
      'Scientific research tree',
      'Multiplayer galaxy sharing'
    ],
    challenges: [
      'Procedural generation that feels handcrafted',
      'Balancing exploration with meaningful player choices',
      'Creating a sense of scale in an infinite universe'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
