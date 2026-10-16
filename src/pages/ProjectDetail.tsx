import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <Link
        to="/projects"
        className="text-sm text-base-content/60 hover:text-primary mb-8 inline-block"
      >
        ← Back to projects
      </Link>

      <span className="badge badge-primary badge-sm font-semibold mb-4">
        {project.category}
      </span>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        {project.title}
      </h1>
      <p className="text-base-content/60 mb-8">{project.year}</p>

      <p className="text-xl text-base-content/80 leading-relaxed mb-10">
        {project.summary}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mb-12">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-full"
          >
            View Code →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline rounded-full"
          >
            Live Demo →
          </a>
        )}
        {!project.repo && !project.demo && (
          <span className="text-sm text-base-content/40 italic">
            Links coming soon
          </span>
        )}
      </div>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-black tracking-tight">Screenshots</h2>
          {project.screenshots.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-base-300 bg-base-200"
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.innerHTML =
                      '<div class="p-12 text-center text-base-content/30 text-sm">Screenshot coming soon</div>';
                  }
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Story */}
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl font-black tracking-tight">The story</h2>
        <p className="text-lg text-base-content/80 leading-relaxed">
          {project.story}
        </p>
      </div>

      {/* Stack */}
      <div>
        <h2 className="text-2xl font-black tracking-tight mb-4">Tech used</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="badge badge-primary badge-outline">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}