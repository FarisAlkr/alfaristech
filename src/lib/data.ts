export type Service = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  icon: string;
  badge?: string;
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const services: Service[] = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description: "Custom ML models, RAG systems, and LLM integrations for intelligent decision-making. From clinical prediction to financial analysis.",
    tags: ["XGBoost", "LangChain", "FAISS", "SHAP", "RAG"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Cross-platform iOS & Android apps built with Flutter and Firebase. From concept to App Store deployment with real-time backends.",
    tags: ["Flutter", "Firebase", "iOS", "Android"]
  },
  {
    icon: "🌐",
    title: "Web Applications",
    description: "Full-stack web development with modern frameworks. Responsive, performant, and scalable platforms tailored to your business needs.",
    tags: ["Next.js", "FastAPI", "Python", "Docker"]
  },
  {
    icon: "🏫",
    title: "Tech Education",
    description: "University-level tutoring in mathematics, physics, and computer science. Complex concepts explained clearly, with 200+ students trained.",
    tags: ["Mathematics", "Physics", "CS Fundamentals"]
  },
  {
    icon: "⚙️",
    title: "AI Consulting",
    description: "Strategic guidance on integrating AI into your workflows. Prompt engineering, agent architectures, and vector embedding strategies.",
    tags: ["Prompt Engineering", "MCP", "Agents"]
  },
  {
    icon: "🛠️",
    title: "DevOps & Cloud",
    description: "Containerized deployments, CI/CD pipelines, and cloud infrastructure. Ensuring your applications are reliable, scalable, and production-ready.",
    tags: ["Docker", "AWS", "GitHub Actions", "Linux"]
  }
];

export const projects: Project[] = [
  {
    title: "OncoRisk EC",
    subtitle: "Clinical Decision Support System",
    category: "AI / Healthcare",
    description: "Production system for Soroka Medical Center predicting endometrial cancer risk. Won hackathon award as sole developer, collaborating with physicians and approved by the medical board for real-world deployment. Features XGBoost ensemble model with SHAP explainability for clinical interpretability.",
    tech: ["Python", "FastAPI", "Next.js 14", "XGBoost", "SHAP", "Docker"],
    icon: "🏥",
    badge: "Award Winner",
    featured: true
  },
  {
    title: "Nawaqeet",
    subtitle: "Event Management Platform",
    category: "Mobile App",
    description: "Full-featured event management platform published on iOS & Android, achieving hundreds of downloads in its first hours. Manages transactions, event announcements, and vendor directories for weddings and community events.",
    tech: ["Flutter", "Firebase", "iOS", "Android"],
    icon: "🎉",
    badge: "Published"
  },
  {
    title: "NetoBox",
    subtitle: "Invoice Management System",
    category: "Mobile App / Fintech",
    description: "Smart invoice management with live Israeli tax calculations and automated receipt generation. Streamlines financial workflows for freelancers and businesses.",
    tech: ["Flutter", "Firebase"],
    icon: "📄"
  },
  {
    title: "Financial Hybrid RAG System",
    subtitle: "Semantic Search Engine",
    category: "AI / Fintech",
    description: "Intelligent retrieval system combining semantic and keyword-based search for financial data analysis. Uses vector embeddings and FAISS for rapid, context-aware results.",
    tech: ["Python", "LangChain", "FAISS"],
    icon: "🔍"
  },
  {
    title: "CarNotify",
    subtitle: "Driver Alert System",
    category: "Mobile App / Safety",
    description: "Vehicle monitoring app for critical safety alerts — lights on, door open, and child detection. Designed to prevent accidents and currently pending regulatory approval.",
    tech: ["Flutter", "Firebase"],
    icon: "🚗"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Faris delivered our website on time and beyond expectations. His ability to understand our business needs and translate them into a clean, professional design was remarkable.",
    name: "Client — Architecture Firm",
    role: "Web Development Project",
    initials: "AH"
  },
  {
    quote: "The Nawaqeet app transformed how our community manages events. Hundreds of downloads on launch day speaks for itself. Faris's technical skills and attention to detail are exceptional.",
    name: "Community Event Organizer",
    role: "Mobile App Project",
    initials: "MK"
  },
  {
    quote: "As a physics student, I struggled for months. Faris explained concepts in a way that finally clicked. I went from barely passing to scoring in the top of my class.",
    name: "University Student",
    role: "Physics Tutoring",
    initials: "SB"
  }
];

export const aboutHighlights = [
  {
    icon: "🎯",
    title: "Problem Solver",
    subtitle: "From concept to production"
  },
  {
    icon: "🏆",
    title: "Award Winner",
    subtitle: "Healthcare AI hackathon"
  },
  {
    icon: "📚",
    title: "Educator",
    subtitle: "200+ students trained"
  },
  {
    icon: "🌍",
    title: "Multilingual",
    subtitle: "Hebrew, Arabic, English"
  }
];

export const aboutParagraphs = [
  "I'm Faris Alkrenawi, a software engineer specializing in AI/ML, mobile development, and full-stack web applications. Based in Israel, I build production-grade systems that bridge the gap between cutting-edge technology and real-world impact.",
  "My work spans healthcare AI systems deployed in hospitals, mobile apps with thousands of users, and intelligent RAG systems for financial analysis. I combine technical depth with clear communication — whether I'm architecting a machine learning pipeline or tutoring university students in physics and mathematics."
];
