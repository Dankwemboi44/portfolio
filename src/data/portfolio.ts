export const profile = {
  name: "Dan Kwemoi",
  title: "Computer Science Student",
  tagline: "I build things that solve real problems.",
  bio: "Hey — I'm Dan. I'm a Computer Science student at Laikipia University who genuinely enjoys the messy part of tech: figuring out why something isn't working, then building a better version of it. Most of what I do lives at the intersection of AI, systems, and making software that's actually useful.",
  location: "Eldoret, Kenya",
  email: "dankwemboi08@gmail.com",
  phone: "0712685505",
  photo: "/photo.jpg",
  cv: "/dan-kwemoi-cv.pdf",
};

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  story: string;
  tech: string[];
  repo?: string;
  demo?: string;
  screenshots: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "quality-management-system",
    title: "Quality Management System",
    category: "Systems Development",
    summary:
      "A system I built during my IT attachment at Moi Teaching and Referral Hospital to help the team track quality processes.",
    story:
      "During my attachment at Moi Teaching and Referral Hospital, I noticed the quality team was tracking everything on paper. I designed and built a system to handle it digitally — from requirement gathering to testing. It was my first taste of building software for a real organization with real constraints.",
    tech: ["Systems Development", "Database", "Requirements", "Testing"],
    repo: "",
    demo: "",
    screenshots: [
      "/projects/qms-1.jpg",
      "/projects/qms-2.jpg",
    ],
    year: "2024",
  },
  {
    id: "ai-health-assistant",
    title: "AI Personal Health Assistant",
    category: "Artificial Intelligence",
    summary:
      "An AI-powered web app that helps people access health information, track medication, and get quick guidance.",
    story:
      "I wanted to build something that combined AI with a genuinely useful everyday problem. The assistant handles medication info, nutrition, mental health awareness, and appointments. I built both the frontend and backend, and got to explore how to make an AI actually helpful rather than just clever.",
    tech: ["Node.js", "React", "JavaScript", "AI"],
    repo: "",
    demo: "",
    screenshots: [
      "/projects/health-1.jpg",
      "/projects/health-2.jpg",
    ],
    year: "2024",
  },
  {
    id: "phishing-detection",
    title: "Phishing Detection for Swahili, English & Code-Switched Text",
    category: "Machine Learning & Cybersecurity",
    summary:
      "A machine learning model that detects phishing messages in Swahili, English, and code-switched text — something most detectors ignore.",
    story:
      "Most phishing detectors only work in English. But in Kenya, real phishing messages mix Swahili and English, switch mid-sentence, and slip past standard filters. I trained a classifier on code-switched text to catch what others miss. This one taught me a lot about NLP and how language shapes security.",
    tech: ["Python", "Machine Learning", "NLP", "Cybersecurity"],
    repo: "",
    demo: "",
    screenshots: [
      "/projects/phishing-1.jpg",
    ],
    year: "2025",
  },
];

export const experience = [
  {
    role: "IT Attachment",
    org: "Moi Teaching and Referral Hospital",
    period: "May — August 2024",
    story:
      "Four months of hands-on IT work in a busy hospital environment. I did networking, fixed hardware and software issues, installed and configured systems, and built a Quality Management System from scratch.",
    highlights: [
      "Computer networking and troubleshooting",
      "Hardware and software repairs",
      "Software installation and configuration",
      "Built a Quality Management System",
    ],
  },
];

export const learning = [
  {
    area: "Data Science",
    detail:
      "Working through statistics, data wrangling with pandas, and visualization. Aiming to combine this with my ML background for real-world data problems.",
    progress: "In progress",
  },
  {
    area: "Deep Learning",
    detail:
      "Going deeper into neural networks, transformers, and how modern models actually work under the hood.",
    progress: "In progress",
  },
  {
    area: "Cloud & Deployment",
    detail:
      "Learning how to ship what I build — Docker, cloud basics, and CI/CD pipelines.",
    progress: "Starting soon",
  },
];

export const skills = {
  programming: ["Python", "JavaScript", "HTML/CSS", "Node.js"],
  aiMl: ["Machine Learning", "NLP", "Artificial Intelligence"],
  itSystems: ["Networking", "Hardware Troubleshooting", "Systems Development"],
  soft: ["Problem Solving", "Communication", "Teamwork", "Adaptability"],
};