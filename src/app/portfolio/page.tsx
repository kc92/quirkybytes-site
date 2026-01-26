"use client";

import Link from "next/link";
import { Window, Button, FancyHR } from "@/components/ui";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <Window title="📂 C:\\QuirkyBytes\\Portfolio\\README.txt">
          <div className="bg-gradient-to-b from-retro-dark to-[#000066] text-center p-10">
            <div className="text-6xl animate-spin3d inline-block mb-4">📂</div>
            <h1 className="font-pixel text-2xl text-neon-blue animate-glow mb-4">
              OUR PORTFOLIO
            </h1>
            <p className="font-terminal text-xl text-white max-w-xl mx-auto">
              Stuff we&apos;ve built. Real projects, real clients, real code.
            </p>
          </div>
        </Window>

        <FancyHR />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} href={`/portfolio/${project.slug}`} className="no-underline">
              <Window title={`${project.slug}.exe`}>
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}
                >
                  {project.icon}
                </div>
                <div className="p-4 bg-[#ffffcc] border-t-2 border-win-dark">
                  <h3 className="font-pixel text-[0.65rem] text-win-blue mb-2">
                    {project.title.toUpperCase()}
                    {project.isHot && <span className="hot-badge ml-2">HOT!</span>}
                    {project.isNew && <span className="hot-badge ml-2">NEW!</span>}
                  </h3>
                  <p className="font-terminal text-sm text-gray-700">{project.tagline}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span
                      className={`inline-block px-3 py-1 font-pixel text-[0.45rem] ${
                        project.status === "live"
                          ? "status-live"
                          : project.status === "soon"
                            ? "status-soon"
                            : "bg-blue-500 text-white"
                      }`}
                    >
                      {project.status === "live"
                        ? "● ONLINE"
                        : project.status === "soon"
                          ? "◐ SOON"
                          : "◑ DEV"}
                    </span>
                    <span className="font-terminal text-xs text-gray-500">{project.year}</span>
                  </div>
                </div>
              </Window>
            </Link>
          ))}
        </div>

        <FancyHR />

        {/* CTA */}
        <Window title="💡 C:\\QuirkyBytes\\Ideas.txt">
          <div className="bg-win-bg p-8 text-center">
            <h2 className="font-pixel text-lg text-win-blue mb-4">
              NEED SOMETHING BUILT?
            </h2>
            <p className="font-terminal text-lg mb-6">
              Tell us what you&apos;re working on. We&apos;ll tell you if we can help.
            </p>
            <Button href="/contact" variant="hot">
              📧 GET IN TOUCH
            </Button>
          </div>
        </Window>

        {/* Back Link */}
        <div className="text-center mt-8">
          <Button href="/">← BACK TO HOME</Button>
        </div>
      </div>
    </main>
  );
}
