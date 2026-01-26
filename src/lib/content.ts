// Shared content across all eras
// Same information, different presentation

export const siteContent = {
  company: {
    name: "QuirkyBytes",
    tagline: "Digital Studio",
    description:
      "We build websites, apps, and games that stand out. Quality work. No shortcuts.",
    founded: "1999",
    email: "hello@quirkybytes.com",
  },

  services: [
    {
      id: "websites",
      icon: "🌐",
      name: "Websites",
      shortDesc: "Custom sites that load fast and look amazing",
      longDesc:
        "From landing pages to complex platforms. No templates, no bloat — just clean, efficient code tailored to your needs.",
      price: "Starting at $2,500",
    },
    {
      id: "webapps",
      icon: "⚡",
      name: "Web Applications",
      shortDesc: "Full-stack applications built to scale",
      longDesc:
        "From internal tools to customer-facing platforms. Modern tech stack, robust architecture, built for real-world demands.",
      price: "Starting at $10,000",
    },
    {
      id: "games",
      icon: "🎮",
      name: "Games",
      shortDesc: "Browser games to full MMORPGs",
      longDesc:
        "Whether it's a simple browser game or a full-scale multiplayer experience. Engaging mechanics, polished execution.",
      price: "Starting at $15,000",
    },
    {
      id: "ai",
      icon: "🤖",
      name: "AI & Automation",
      shortDesc: "Smart tools that work for you",
      longDesc:
        "Chatbots, automation workflows, AI integrations. Intelligent systems that save time and enhance experiences.",
      price: "Starting at $5,000",
    },
  ],

  portfolio: [
    {
      id: "desperados-destiny",
      name: "Desperado's Destiny",
      shortDesc: "Wild West MMORPG adventure",
      status: "live",
      year: "2025",
      icon: "🤠",
    },
    {
      id: "wardian",
      name: "Wardian",
      shortDesc: "Dashboard platform",
      status: "live",
      year: "2024",
      icon: "📊",
    },
    {
      id: "astrogenesis",
      name: "AstroGenesis",
      shortDesc: "Space exploration RPG",
      status: "soon",
      year: "2026",
      icon: "🚀",
    },
  ],

  testimonials: [
    {
      name: "~*CyberSurfer99*~",
      message: "OMG this site is SO cool!!! ⭐⭐⭐⭐⭐",
      date: "2026-01-15",
    },
    {
      name: "WebMaster2000",
      message: "Great portfolio! Bookmarked! 🔥",
      date: "2026-01-10",
    },
    {
      name: "xX_DarkAngel_Xx",
      message: "finally a site that gets it... 💀🖤",
      date: "2026-01-05",
    },
  ],

  awards: [
    { icon: "🏆", title: "Best of Web", subtitle: "1999" },
    { icon: "⭐", title: "5 Star Site", subtitle: "Award" },
    { icon: "🎖️", title: "Cool Site", subtitle: "of the Day" },
    { icon: "💎", title: "Webmaster", subtitle: "Excellence" },
  ],
};

export const eras = [
  {
    id: "1995",
    slug: "dawn",
    name: "The Dawn",
    years: "1995-1997",
    description: "Early HTML, gray backgrounds, basic text",
  },
  {
    id: "1997",
    slug: "geocities",
    name: "Geocities",
    years: "1997-2002",
    description: "Animated GIFs, visitor counters, webrings",
  },
  {
    id: "2003",
    slug: "web2",
    name: "Web 2.0",
    years: "2003-2007",
    description: "Glossy buttons, rounded corners, AJAX",
  },
  {
    id: "2008",
    slug: "skeuomorphism",
    name: "Skeuomorphism",
    years: "2008-2012",
    description: "Realistic textures, leather, detailed icons",
  },
  {
    id: "2013",
    slug: "flat",
    name: "Flat Design",
    years: "2013-2017",
    description: "Minimalism, bold colors, typography focus",
  },
  {
    id: "2018",
    slug: "modern",
    name: "Modern Dark",
    years: "2018-2022",
    description: "Dark mode, glassmorphism, bold type",
  },
  {
    id: "2023",
    slug: "ai-era",
    name: "AI Era",
    years: "2023+",
    description: "Clean, accessible, intelligent design",
  },
];

export function getEra(slug: string) {
  return eras.find((e) => e.slug === slug);
}

export function getEraIndex(slug: string) {
  return eras.findIndex((e) => e.slug === slug);
}
