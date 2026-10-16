import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
        Projects
      </p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        Things I've built
      </h1>
      <p className="text-base-content/70 mb-12 max-w-2xl">
        Real projects, with real constraints. Each one taught me something I
        couldn't have learned from a tutorial.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}