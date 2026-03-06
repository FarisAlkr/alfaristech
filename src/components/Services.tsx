"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Smartphone, Globe, School, Cog, Wrench } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom ML models, RAG systems, and LLM integrations for intelligent decision-making. From clinical prediction to financial analysis.",
    tags: ["XGBoost", "LangChain", "FAISS", "SHAP", "RAG"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform iOS & Android apps built with Flutter and Firebase. From concept to App Store deployment with real-time backends.",
    tags: ["Flutter", "Firebase", "iOS", "Android"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Full-stack web development with modern frameworks. Responsive, performant, and scalable platforms tailored to your business needs.",
    tags: ["Next.js", "FastAPI", "Python", "Docker"],
  },
  {
    icon: School,
    title: "Tech Education",
    desc: "University-level tutoring in mathematics, physics, and computer science. Complex concepts explained clearly, with 200+ students trained.",
    tags: ["Mathematics", "Physics", "CS Fundamentals"],
  },
  {
    icon: Cog,
    title: "AI Consulting",
    desc: "Strategic guidance on integrating AI into your workflows. Prompt engineering, agent architectures, and vector embedding strategies.",
    tags: ["Prompt Engineering", "MCP", "Agents"],
  },
  {
    icon: Wrench,
    title: "DevOps & Cloud",
    desc: "Containerized deployments, CI/CD pipelines, and cloud infrastructure. Ensuring your applications are reliable, scalable, and production-ready.",
    tags: ["Docker", "AWS", "GitHub Actions", "Linux"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-24 bg-navy-deep relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">What I Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-cream">
            Services & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group glass-dark rounded-xl p-5 sm:p-6 border-t-2 border-t-transparent hover:border-t-gold transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <s.icon className="text-gold mb-3 sm:mb-4" size={28} />
              <h3 className="font-display text-lg sm:text-xl font-bold text-cream mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gold/10 text-gold/80 border border-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
