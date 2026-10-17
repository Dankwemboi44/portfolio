import { useState } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import FadeIn from "../components/FadeIn";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Systems Development", "Artificial Intelligence", "Machine Learning & Cybersecurity"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Projects</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Things I've built</h1>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn btn-sm rounded-full ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.1}>
            <ProjectCard project={p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}