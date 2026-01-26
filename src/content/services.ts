import { Service } from '@/types';

export const services: Service[] = [
  {
    icon: '🌐',
    title: 'WEBSITES',
    shortDescription: 'Fast sites that actually convert',
    longDescription: `Landing pages, marketing sites, portfolios — whatever you need. 
    No WordPress themes. No Squarespace. Just code that loads fast and does its job.`,
    features: [
      'Custom design tailored to your brand',
      'Blazing fast performance (95+ Lighthouse scores)',
      'Mobile-first responsive design',
      'SEO optimized from the ground up',
      'Content management systems',
      'E-commerce solutions'
    ]
  },
  {
    icon: '⚡',
    title: 'WEB APPS',
    shortDescription: 'Apps that handle real logic',
    longDescription: `SaaS products, internal tools, customer portals — if it needs a database 
    and user accounts, we build it. Modern stack, clean architecture.`,
    features: [
      'Modern React/Next.js architecture',
      'Secure user authentication',
      'Database design and optimization',
      'API development and integration',
      'Real-time features and notifications',
      'Cloud infrastructure and deployment'
    ]
  },
  {
    icon: '🎮',
    title: 'GAMES',
    shortDescription: 'Browser games to MMOs',
    longDescription: `Small browser games, mobile titles, or full multiplayer experiences. 
    We handle the netcode nightmares so you don't have to.`,
    features: [
      'Browser and mobile games',
      'Multiplayer and netcode expertise',
      'Unity and Unreal development',
      'Game design and balancing',
      'Live service operations',
      'Community management tools'
    ]
  },
  {
    icon: '🤖',
    title: 'AI TOOLS',
    shortDescription: 'Bots and automation that work',
    longDescription: `Chatbots, workflow automation, AI integrations. We build tools that 
    actually save you time instead of creating more problems.`,
    features: [
      'Custom AI/ML model development',
      'Chatbots and virtual assistants',
      'Process automation',
      'Data analysis and insights',
      'Natural language processing',
      'Integration with existing systems'
    ]
  }
];
