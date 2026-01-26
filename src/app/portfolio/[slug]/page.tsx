import { notFound } from "next/navigation";
import { Window, Button, FancyHR, Badge } from "@/components/ui";
import { projects, getProject, getAllProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | QuirkyBytes Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-5">
        {/* Project Header */}
        <Window title={`📂 C:\\QuirkyBytes\\Portfolio\\${project.slug}.exe`}>
          <div className={`bg-gradient-to-br ${project.gradient} text-center p-12`}>
            <div className="text-8xl animate-spin3d inline-block mb-4">{project.icon}</div>
            <h1 className="font-pixel text-2xl text-white drop-shadow-lg mb-2">
              {project.title.toUpperCase()}
              {project.isHot && <span className="hot-badge ml-3">HOT!</span>}
              {project.isNew && <span className="hot-badge ml-3">NEW!</span>}
            </h1>
            <p className="font-terminal text-2xl text-white/90">{project.tagline}</p>
            <div className="mt-4">
              <span
                className={`inline-block px-4 py-2 font-pixel text-[0.6rem] ${
                  project.status === "live"
                    ? "bg-neon-green text-black animate-pulse"
                    : project.status === "soon"
                      ? "bg-neon-yellow text-black"
                      : "bg-neon-blue text-black"
                }`}
              >
                {project.status === "live"
                  ? "● CURRENTLY ONLINE"
                  : project.status === "soon"
                    ? "◐ COMING SOON"
                    : "◑ IN DEVELOPMENT"}
              </span>
            </div>
          </div>
        </Window>

        <FancyHR />

        {/* Description */}
        <Window title="📝 README.txt">
          <div className="p-6 bg-white font-terminal text-lg leading-relaxed">
            {project.description}
          </div>
        </Window>

        {/* Tech Stack */}
        <Window title="⚙️ TECH_STACK.ini">
          <div className="p-5 bg-black">
            <div className="flex flex-wrap gap-3 justify-center">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#001100] text-neon-green font-terminal text-lg border border-neon-green [text-shadow:0_0_10px_#00ff00]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Window>

        {/* Features */}
        <Window title="✨ FEATURES.exe">
          <div className="p-5 bg-[#ffffcc]">
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 font-terminal text-lg">
                  <span className="text-neon-green">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Window>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          {project.url && project.status === "live" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-b from-neon-green to-green-600 text-black font-terminal text-xl border-[3px] border-t-green-300 border-l-green-300 border-b-green-800 border-r-green-800 no-underline hover:from-green-400 hover:to-green-500"
            >
              🌐 VISIT LIVE SITE
            </a>
          )}
          <Button href="/contact" variant="hot">
            📧 HIRE US FOR SIMILAR
          </Button>
          <Button href="/portfolio">← ALL PROJECTS</Button>
        </div>

        {/* Other Projects */}
        <FancyHR />
        <Window title="📂 MORE_PROJECTS.lnk">
          <div className="p-5 bg-win-bg">
            <h3 className="font-pixel text-sm text-win-blue mb-4 text-center">
              CHECK OUT OUR OTHER WORK:
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {projects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/portfolio/${p.slug}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-win-dark font-terminal no-underline text-black hover:bg-[#ffffcc]"
                  >
                    <span>{p.icon}</span>
                    <span>{p.title}</span>
                  </a>
                ))}
            </div>
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
