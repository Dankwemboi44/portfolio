import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
        Experience
      </p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-12">
        Where I've worked
      </h1>

      <div className="space-y-8">
        {experience.map((job) => (
          <div
            key={job.role}
            className="card bg-base-200 border border-base-300 p-8"
          >
            <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
              <div>
                <h2 className="text-2xl font-bold">{job.role}</h2>
                <p className="text-primary font-semibold">{job.org}</p>
              </div>
              <span className="badge badge-primary badge-outline">
                {job.period}
              </span>
            </div>

            <p className="text-base-content/80 mb-6 leading-relaxed">
              {job.story}
            </p>

            <ul className="space-y-2">
              {job.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base-content/80">
                  <span className="text-primary mt-1">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}