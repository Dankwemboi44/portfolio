import { learning } from "../data/portfolio";

export default function Learning() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
        Currently Learning
      </p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
        What I'm studying now
      </h1>
      <p className="text-base-content/70 mb-12 max-w-2xl">
        Tech doesn't stand still, and neither do I. Here's what I'm actively
        working on outside of coursework.
      </p>

      <div className="space-y-4">
        {learning.map((item) => (
          <div
            key={item.area}
            className="card bg-base-200 border border-base-300 p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex justify-between items-start gap-4 mb-2">
              <h2 className="text-xl font-bold">{item.area}</h2>
              <span className="badge badge-primary badge-outline badge-sm whitespace-nowrap">
                {item.progress}
              </span>
            </div>
            <p className="text-base-content/70">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 border border-primary/30 rounded-2xl bg-primary/5">
        <p className="text-base-content/80">
          <span className="font-bold text-primary">Focus right now:</span>{" "}
          Data Science. I'm building on my machine learning foundation with
          statistics, data wrangling, and visualization — aiming to work on
          real-world data problems that combine AI with practical impact.
        </p>
      </div>
    </section>
  );
}