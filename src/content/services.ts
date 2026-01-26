import { Service } from '@/types';

export const services: Service[] = [
  {
    icon: '🌐',
    title: 'WEBSITES',
    shortDescription: 'Custom sites that load fast and look amazing',
    longDescription: `We build websites that stand out from the crowd. From simple landing pages 
    to complex web applications, we craft every pixel with purpose. Our sites are fast, accessible, 
    and built with modern technologies that scale.`,
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
    shortDescription: 'Full-stack applications built to scale',
    longDescription: `Need more than a website? We build full-stack web applications that handle 
    real business logic. From SaaS products to internal tools, we architect solutions that grow 
    with your needs.`,
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
    shortDescription: 'Browser games to full MMORPGs',
    longDescription: `From casual browser games to massive multiplayer experiences, we bring 
    game ideas to life. Our team combines creative vision with technical expertise to create 
    engaging gaming experiences players love.`,
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
    shortDescription: 'Smart automation and chatbots',
    longDescription: `Leverage the power of AI to automate workflows and enhance user experiences. 
    We build intelligent tools that save time, reduce costs, and unlock new possibilities for 
    your business.`,
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
