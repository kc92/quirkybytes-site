"use client";

import { Window, Button, FancyHR } from "@/components/ui";

const services = [
  {
    icon: "🌐",
    name: "WEBSITES",
    tagline: "From landing pages to complex platforms",
    description:
      "Custom-built websites that load fast, look amazing, and work on every device. No templates, no bloat — just clean, efficient code tailored to your needs.",
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
    tagline: "Full-stack solutions that scale",
    description:
      "From internal tools to customer-facing platforms, we build web applications that handle real-world demands. Modern tech stack, robust architecture.",
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
    tagline: "From browser games to MMORPGs",
    description:
      "Whether it's a simple browser game or a full-scale multiplayer experience, we bring game concepts to life with engaging mechanics and polished execution.",
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
    tagline: "Smart tools that work for you",
    description:
      "Chatbots, automation workflows, AI integrations — we build intelligent systems that save time and enhance user experiences.",
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
              Quality work. No shortcuts. Every project gets our full attention.
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
                READY TO BUILD?
              </h2>
              <p className="font-terminal text-lg text-white mb-6">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <Button href="/contact" variant="hot">
                📧 GET IN TOUCH
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
