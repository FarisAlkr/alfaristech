"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const projects = [
  {
    title: "OncoRisk EC — Clinical Decision Support",
    category: "AI / Healthcare",
    badge: "Award Winner",
    featured: true,
    desc: "Production system for Soroka Medical Center predicting endometrial cancer risk. Won hackathon award as sole developer, collaborating with physicians and approved by the medical board for real-world deployment. Features XGBoost ensemble model with SHAP explainability for clinical interpretability.",
    tech: ["Python", "FastAPI", "Next.js 14", "XGBoost", "SHAP", "Docker"],
    color: "from-rose-500/20 to-amber-500/20",
    emoji: "🏥",
  },
  {
    title: "Nawaqeet — Event Management Platform",
    category: "Mobile App",
    badge: "Published",
    featured: false,
    desc: "Full-featured event management platform published on iOS & Android, achieving hundreds of downloads in its first hours. Manages transactions, event announcements, and vendor directories.",
    tech: ["Flutter", "Firebase", "iOS", "Android"],
    color: "from-violet-500/20 to-blue-500/20",
    emoji: "🎉",
  },
  {
    title: "NetoBox — Invoice Management System",
    category: "Mobile App / Fintech",
    badge: null,
    featured: false,
    desc: "Smart invoice management with live Israeli tax calculations and automated receipt generation. Streamlines financial workflows for freelancers and businesses.",
    tech: ["Flutter", "Firebase"],
    color: "from-emerald-500/20 to-teal-500/20",
    emoji: "📊",
  },
  {
    title: "Financial Hybrid RAG System",
    category: "AI / Fintech",
    badge: null,
    featured: false,
    desc: "Intelligent retrieval system combining semantic and keyword-based search for financial data analysis. Uses vector embeddings and FAISS for rapid, context-aware results.",
    tech: ["Python", "LangChain", "FAISS"],
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "💹",
  },
  {
    title: "CarNotify — Driver Alert System",
    category: "Mobile App / Safety",
    badge: null,
    featured: false,
    desc: "Vehicle monitoring app for critical safety alerts — lights on, door open, and child detection. Designed to prevent accidents and currently pending regulatory approval.",
    tech: ["Flutter", "Firebase"],
    color: "from-orange-500/20 to-red-500/20",
    emoji: "🚗",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">My Work</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-primary">
            Featured Projects
          </h2>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border overflow-hidden mb-6 sm:mb-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="grid md:grid-cols-2">
            <div className={`bg-gradient-to-br ${featured.color} p-8 sm:p-12 flex items-center justify-center min-h-[200px] sm:min-h-[260px]`}>
              <div className="text-center">
                <span className="text-5xl sm:text-7xl">{featured.emoji}</span>
                <div className="mt-3 sm:mt-4 text-sm font-medium text-primary/60">{featured.category}</div>
              </div>
            </div>
            <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                {featured.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gold/15 text-gold px-3 py-1 rounded-full">
                    <Star size={12} /> {featured.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">{featured.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">{featured.desc}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="text-xs px-2 sm:px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${p.color} p-6 sm:p-8 flex items-center justify-center`}>
                <span className="text-4xl sm:text-5xl">{p.emoji}</span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gold font-medium uppercase tracking-wider">{p.category}</span>
                  {p.badge && (
                    <span className="text-xs font-semibold bg-gold/15 text-gold px-2 py-0.5 rounded-full">{p.badge}</span>
                  )}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 sm:mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-primary/5 text-primary/60 border border-primary/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
