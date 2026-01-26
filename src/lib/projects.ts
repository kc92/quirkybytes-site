export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  status: "live" | "soon" | "dev";
  year: string;
  tech: string[];
  features: string[];
  url?: string;
  isHot?: boolean;
  isNew?: boolean;
}

export const projects: Project[] = [
  {
    slug: "desperados-destiny",
    title: "Desperado's Destiny",
    tagline: "Wild West MMORPG Adventure",
    description:
      "Saddle up partner! Desperado's Destiny is an immersive Wild West MMORPG where you forge your own legend. Rob banks, hunt bounties, build your ranch, or become the sheriff. The frontier awaits!",
    icon: "🤠",
    gradient: "from-[#8b4513] to-[#d2691e]",
    status: "live",
    year: "2025",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
    features: [
      "Real-time multiplayer across the frontier",
      "Dynamic economy with player-driven markets",
      "Build and customize your ranch",
      "Faction system: Outlaws vs Lawmen",
      "Weekly events and tournaments",
      "Cross-platform play",
    ],
    url: "https://desperados-destiny.com",
    isHot: true,
  },
  {
    slug: "wardian",
    title: "Wardian",
    tagline: "Next-Gen Dashboard Platform",
    description:
      "Wardian transforms how teams visualize and interact with their data. Built for speed, designed for clarity. Real-time dashboards that actually make sense.",
    icon: "📊",
    gradient: "from-[#001a33] to-[#003366]",
    status: "live",
    year: "2024",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    features: [
      "Drag-and-drop dashboard builder",
      "Real-time data streaming",
      "50+ chart types and visualizations",
      "Team collaboration tools",
      "Custom widget SDK",
      "Enterprise SSO support",
    ],
    url: "https://wardian.io",
  },
  {
    slug: "astrogenesis",
    title: "AstroGenesis",
    tagline: "Space Exploration RPG",
    description:
      "Explore the cosmos in this upcoming space exploration RPG. Build your fleet, discover alien civilizations, and write your name in the stars. Currently in development.",
    icon: "🚀",
    gradient: "from-[#1a0033] to-[#4a0080]",
    status: "soon",
    year: "2026",
    tech: ["Unity", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Procedurally generated universe",
      "Ship customization and building",
      "Diplomacy with alien races",
      "Trade routes and economy",
      "Multiplayer expeditions",
      "Coming Q3 2026",
    ],
    isNew: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
