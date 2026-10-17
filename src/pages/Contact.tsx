import { useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE THE URL BELOW WITH YOUR FORMSPREE ENDPOINT
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">Contact</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Let's talk</h1>
      <p className="text-lg text-base-content/70 mb-12 max-w-xl">
        Got a project, an opportunity, or just want to say hi? Fill out the form below or reach me directly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="input input-bordered w-full bg-base-200" />
          <input type="email" name="email" placeholder="Your Email" required className="input input-bordered w-full bg-base-200" />
          <textarea name="message" placeholder="Your Message" required rows={5} className="textarea textarea-bordered w-full bg-base-200"></textarea>
          
          <button 
            type="submit" 
            disabled={status === "submitting"} 
            className="btn btn-primary w-full rounded-full"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-success text-sm font-medium">Message sent! I'll get back to you soon.</p>}
          {status === "error" && <p className="text-error text-sm font-medium">Something went wrong. Please try again or email me directly.</p>}
        </form>

        {/* Direct Info */}
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="card bg-base-200 border border-base-300 p-6 hover:border-primary/50 transition-colors block group">
            <p className="text-xs uppercase tracking-widest text-base-content/50 mb-1">Email</p>
            <p className="font-semibold group-hover:text-primary transition-colors break-all">{profile.email}</p>
          </a>
          <a href={`tel:${profile.phone}`} className="card bg-base-200 border border-base-300 p-6 hover:border-primary/50 transition-colors block group">
            <p className="text-xs uppercase tracking-widest text-base-content/50 mb-1">Phone</p>
            <p className="font-semibold group-hover:text-primary transition-colors">{profile.phone}</p>
          </a>
        </div>
      </div>
    </section>
  );
}