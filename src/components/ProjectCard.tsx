import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group card bg-base-200 border border-base-300 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Screenshot preview with Hover Overlay */}
      <figure className="relative aspect-video overflow-hidden bg-base-300">
        {project.screenshots[0] ? (
          <>
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold tracking-wide flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Project →
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base-content/20 text-4xl font-black">
            {project.title.charAt(0)}
          </div>
        )}
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-primary badge-sm font-semibold">
            {project.category}
          </span>
          <span className="text-xs text-base-content/50">{project.year}</span>
        </div>

        <h3 className="card-title text-lg group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-base-content/70 text-sm">{project.summary}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="badge badge-outline badge-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="card-actions mt-4">
          <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}