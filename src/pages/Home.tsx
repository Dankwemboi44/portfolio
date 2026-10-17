import { Link } from "react-router-dom";
import { profile, projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import Typewriter from "../components/Typewriter";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text - Slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
              {profile.location}
            </p>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Hey, I'm <span className="text-primary">Dan</span>.
            </h1>

            {/* Understandable dynamic intro */}
            <div className="text-2xl md:text-3xl font-bold mb-6 text-base-content/90 leading-tight">
              I'm a <span className="text-base-content">Computer Science Student</span>.
              <br />
              <span className="text-primary/90 text-xl md:text-2xl mt-2 block font-semibold">
                {" "}
                <Typewriter
                  words={[
                    "Software Development.",
                    "Systems Development.",
                    "Machine Learning.",
                    "Data Science.",
                    "Artificial Intelligence.",
                  ]}
                />
              </span>
            </div>

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
          </motion.div>

          {/* Hero Image - Scales up and fades in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
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
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <FadeIn>
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
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            /* Stagger the project cards so they fade in one after another */
            <FadeIn key={p.id} delay={i * 0.15}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}