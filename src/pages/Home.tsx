import { Link } from "react-router-dom";
import { profile, projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
              {profile.location}
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Hey, I'm{" "}
              <span className="text-primary">Dan</span>.
              <br />
              {profile.tagline}
            </h1>
            <p className="text-lg text-base-content/70 mb-8 max-w-lg">
              {profile.bio.split(".")[0]}.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn btn-primary btn-lg rounded-full">
                See my work →
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg rounded-full">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full ring-4 ring-primary/40"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Dan+Kwemoi&size=400&background=f59e0b&color=0c0c0d&bold=true";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-2">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Things I've built
            </h2>
          </div>
          <Link
            to="/projects"
            className="link link-primary text-sm font-semibold hidden sm:inline"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}