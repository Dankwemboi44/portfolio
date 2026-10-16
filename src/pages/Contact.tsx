import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">
        Contact
      </p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
        Let's talk
      </h1>
      <p className="text-lg text-base-content/70 mb-12 max-w-xl">
        Got a project, an opportunity, or just want to say hi? I'm always up
        for a good conversation.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="card bg-base-200 border border-base-300 p-6 hover:border-primary/50 transition-colors group"
        >
          <p className="text-xs uppercase tracking-widest text-base-content/50 mb-2">
            Email
          </p>
          <p className="font-semibold group-hover:text-primary transition-colors break-all">
            {profile.email}
          </p>
        </a>

        <a
          href={`tel:${profile.phone}`}
          className="card bg-base-200 border border-base-300 p-6 hover:border-primary/50 transition-colors group"
        >
          <p className="text-xs uppercase tracking-widest text-base-content/50 mb-2">
            Phone
          </p>
          <p className="font-semibold group-hover:text-primary transition-colors">
            {profile.phone}
          </p>
        </a>

        <div className="card bg-base-200 border border-base-300 p-6 sm:col-span-2">
          <p className="text-xs uppercase tracking-widest text-base-content/50 mb-2">
            Location
          </p>
          <p className="font-semibold">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}