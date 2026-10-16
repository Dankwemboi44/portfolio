import { profile, skills } from "../data/portfolio";

export default function About() {
  const groups = [
    { title: "Programming", items: skills.programming },
    { title: "AI & ML", items: skills.aiMl },
    { title: "IT & Systems", items: skills.itSystems },
    { title: "Soft Skills", items: skills.soft },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
        About
      </p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-10">
        A bit about me
      </h1>

      <div className="prose prose-invert max-w-none text-lg text-base-content/80 leading-relaxed space-y-6 mb-16">
        <p>{profile.bio}</p>
        <p>
          I'm currently studying Computer Science at Laikipia University. When
          I'm not in class, I'm usually building something — experimenting with
          AI, breaking and fixing systems, or learning whatever tool will let me
          ship ideas faster.
        </p>
        <p>
          I care about software that solves real problems. Not just demos. If
          something I build makes someone's day slightly easier, that's a win.
        </p>
      </div>

      <h2 className="text-2xl font-black tracking-tight mb-8">What I work with</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="card bg-base-200 border border-base-300 p-6"
          >
            <h3 className="font-bold text-primary mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="badge badge-outline">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}