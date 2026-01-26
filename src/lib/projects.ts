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
    tagline: "Wild West MMORPG",
    description:
      "An online Wild West game where you rob banks, hunt bounties, or play sheriff. Real players, real economy, real gunfights.",
    icon: "🤠",
    gradient: "from-[#8b4513] to-[#d2691e]",
    status: "live",
    year: "2025",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "WebSocket", "Redis"],
    features: [
      "Real-time multiplayer",
      "Player-driven economy",
      "Ranch building",
      "Outlaws vs Lawmen factions",
      "Weekly events",
      "Cross-platform",
    ],
    isHot: true,
  },
  {
    slug: "wardian",
    title: "Wardian",
    tagline: "Dashboard Platform",
    description:
      "Wardian makes data visualization simple. Drag, drop, and see your metrics in real-time. No PhD required.",
    icon: "📊",
    gradient: "from-[#001a33] to-[#003366]",
    status: "live",
    year: "2024",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB"],
    features: [
      "Drag-and-drop dashboard builder",
      "Real-time data streaming",
      "50+ chart types",
      "Team collaboration",
      "Custom widget SDK",
      "SSO support",
    ],
  },
  {
    slug: "astrogenesis",
    title: "AstroGenesis",
    tagline: "Space Exploration RPG",
    description:
      "Build ships. Find aliens. Trade or fight. A space RPG where the universe is procedurally generated and no two runs are the same.",
    icon: "🚀",
    gradient: "from-[#1a0033] to-[#4a0080]",
    status: "soon",
    year: "2026",
    tech: ["Unity", "C#", "Node.js", "PostgreSQL"],
    features: [
      "Procedural universe generation",
      "Ship building & customization",
      "Alien diplomacy system",
      "Trade route management",
      "Co-op expeditions",
      "Targeting Q3 2026",
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
