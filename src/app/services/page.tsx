"use client";

import { Window, Button, FancyHR } from "@/components/ui";

const services = [
  {
    icon: "🌐",
    name: "WEBSITES",
    tagline: "Fast sites that convert",
    description:
      "Landing pages, marketing sites, portfolios. No WordPress themes, no Squarespace — just code that loads fast and does its job.",
    features: [
      "Responsive design for all devices",
      "SEO optimization built-in",
      "Lightning-fast performance",
      "CMS integration (if needed)",
      "Analytics and tracking setup",
    ],
    price: "Starting at $2,500",
  },
  {
    icon: "⚡",
    name: "WEB APPLICATIONS",
    tagline: "Apps with real backend logic",
    description:
      "SaaS products, internal tools, customer portals. If it needs a database and user accounts, we build it.",
    features: [
      "React/Next.js frontend",
      "Node.js/Python backend",
      "Database design & optimization",
      "API development",
      "Authentication & security",
      "Cloud deployment",
    ],
    price: "Starting at $10,000",
  },
  {
    icon: "🎮",
    name: "GAMES",
    tagline: "Browser games to MMOs",
    description:
      "Small browser games, mobile titles, or full multiplayer experiences. We handle the netcode so you don't have to.",
    features: [
      "Browser-based games",
      "Multiplayer systems",
      "Game economy design",
      "Cross-platform support",
      "Live operations support",
    ],
    price: "Starting at $15,000",
  },
  {
    icon: "🤖",
    name: "AI & AUTOMATION",
    tagline: "Bots and automation that actually work",
    description:
      "Chatbots, workflow automation, AI integrations. Tools that save you time instead of creating more problems.",
    features: [
      "Custom chatbots",
      "Workflow automation",
      "AI/ML integration",
      "Data processing pipelines",
      "API integrations",
    ],
    price: "Starting at $5,000",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <Window title="📋 C:\\QuirkyBytes\\Services\\README.txt">
          <div className="bg-gradient-to-b from-retro-dark to-[#000066] text-center p-10">
            <div className="text-6xl animate-spin3d inline-block mb-4">📋</div>
            <h1 className="font-pixel text-2xl text-neon-blue animate-glow mb-4">
              OUR SERVICES
            </h1>
            <p className="font-terminal text-xl text-white max-w-xl mx-auto">
              No templates. No page builders. Just clean code that does what you need.
            </p>
          </div>
        </Window>

        <FancyHR />

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, i) => (
            <Window key={i} title={`🔧 ${service.name}.exe`}>
              <div className="md:flex">
                {/* Icon Side */}
                <div className="md:w-1/3 bg-gradient-to-br from-retro-dark to-[#000066] flex items-center justify-center p-10">
                  <span className="text-8xl">{service.icon}</span>
                </div>
                {/* Content Side */}
                <div className="md:w-2/3 p-6 bg-[#ffffcc]">
                  <h2 className="font-pixel text-lg text-win-blue mb-2">
                    {service.name}
                  </h2>
                  <p className="font-terminal text-lg text-gray-600 mb-4">
                    {service.tagline}
                  </p>
                  <p className="font-terminal text-base mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h3 className="font-pixel text-[0.6rem] text-win-blue mb-2">
                      WHAT&apos;S INCLUDED:
                    </h3>
                    <ul className="space-y-1">
                      {service.features.map((feature, j) => (
                        <li key={j} className="font-terminal text-sm flex items-center gap-2">
                          <span className="text-neon-green">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-gray-400">
                    <span className="font-pixel text-[0.7rem] text-win-blue">
                      {service.price}
                    </span>
                    <Button href="/contact">GET QUOTE →</Button>
                  </div>
                </div>
              </div>
            </Window>
          ))}
        </div>

        <FancyHR />

        {/* FAQ */}
        <Window title="❓ FAQ.txt">
          <div className="p-6 bg-white">
            {[
              {
                q: "How long does a typical project take?",
                a: "Depends on scope. Simple websites: 2-4 weeks. Web apps: 2-3 months. Games: 6+ months. We'll give you a realistic timeline upfront.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We offer maintenance packages and can handle updates, bug fixes, and feature additions after launch.",
              },
              {
                q: "What's your tech stack?",
                a: "We primarily use TypeScript, React/Next.js, Node.js, and PostgreSQL. But we adapt to project needs.",
              },
              {
                q: "Can you work with existing codebases?",
                a: "Absolutely. We can audit, improve, or extend existing projects. No judgment on past code decisions.",
              },
            ].map((faq, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <h3 className="font-pixel text-[0.6rem] text-win-blue mb-2">
                  Q: {faq.q}
                </h3>
                <p className="font-terminal text-base pl-4 border-l-4 border-neon-green">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Window>

        {/* CTA */}
        <div className="text-center mt-10">
          <Window title="🚀 START_PROJECT.bat">
            <div className="bg-gradient-to-b from-retro-dark to-[#000066] p-10">
              <h2 className="font-pixel text-xl text-neon-yellow mb-4">
                GOT A PROJECT?
              </h2>
              <p className="font-terminal text-lg text-white mb-6">
                Tell us what you need. We&apos;ll tell you if we&apos;re a fit.
              </p>
              <Button href="/contact" variant="hot">
                📧 SUBMIT INQUIRY
              </Button>
            </div>
          </Window>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Button href="/">← BACK TO HOME</Button>
        </div>
      </div>
    </main>
  );
}
