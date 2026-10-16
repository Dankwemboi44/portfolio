export default function Community() {
  return (
    <section id="community" className="py-24 px-6 bg-base-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-primary">Community</span> & Involvement
        </h2>
        <p className="text-base-content/70 mb-8">
          I'm passionate about learning and sharing knowledge with others in the
          tech community. Here's where I'm active:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="#"
            className="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all p-6"
          >
            <h3 className="font-bold text-primary mb-1">GitHub</h3>
            <p className="text-sm text-base-content/60">
              Open-source projects & code
            </p>
          </a>
          <a
            href="#"
            className="card bg-base-100 shadow-lg hover:shadow-primary/20 transition-all p-6"
          >
            <h3 className="font-bold text-primary mb-1">LinkedIn</h3>
            <p className="text-sm text-base-content/60">
              Professional network
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}