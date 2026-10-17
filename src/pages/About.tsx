import { profile, skills } from "../data/portfolio";
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaJs, FaBrain, FaShieldAlt } from "react-icons/fa";
import FadeIn from "../components/FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  "Python": <FaPython />,
  "React": <FaReact />,
  "Node.js": <FaNodeJs />,
  "JavaScript": <FaJs />,
  "HTML/CSS": <FaHtml5 />,
  "Machine Learning": <FaBrain />,
  "NLP": <FaBrain />,
  "Cybersecurity": <FaShieldAlt />,
};

export default function About() {
  const groups = [
    { title: "Programming", items: skills.programming },
    { title: "AI & ML", items: skills.aiMl },
    { title: "IT & Systems", items: skills.itSystems },
    { title: "Soft Skills", items: skills.soft },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <FadeIn>
        {/* Centered Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-base-content">
            About <span className="text-primary">Me</span>
          </h1>
        </div>

        {/* Bio with Highlights - Written in your voice */}
        <div className="text-center text-lg md:text-xl text-base-content/80 leading-relaxed space-y-6 max-w-3xl mx-auto">
          <p>
            Hey, I'm <span className="text-primary font-bold">Dan Kwemoi</span>. I'm a Computer Science student at Laikipia University, but my real passion lives at the intersection of{" "}
            <span className="text-primary font-bold">Artificial Intelligence and Systems Development</span>. I don't just want to write code—I want to build tools that solve actual problems, like my{" "}
            <span className="text-primary font-bold">multilingual phishing detection model</span> for Swahili and English text.
          </p>
          <p>
            When I'm not in class, you'll usually find me fixing hardware, exploring IT infrastructure, or diving deep into{" "}
            <span className="text-primary font-bold">Machine Learning</span>. I'm endlessly curious about how things work under the hood, and I'm currently pushing my boundaries by adding{" "}
            <span className="text-primary font-bold">Data Science</span> to my toolkit. If it's a complex problem, I want to be the one solving it.
          </p>
        </div>
      </FadeIn>

      {/* Skills section */}
      <FadeIn delay={0.2}>
        <h2 className="text-2xl font-black tracking-tight mt-20 mb-8 text-center">
          What I work with
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="card bg-base-200 border border-base-300 p-6">
              <h3 className="font-bold text-primary mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-4">
                {g.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-base-content/80 hover:text-primary transition-colors cursor-default">
                    {iconMap[item] && <span className="text-xl">{iconMap[item]}</span>}
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}