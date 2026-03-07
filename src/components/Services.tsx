"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Smartphone, Globe, School, Cog, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

const serviceIcons = [Brain, Smartphone, Globe, School, Cog, Wrench];
const serviceKeys = ["ai", "mobile", "web", "education", "consulting", "devops"];
const serviceTags = [
  ["XGBoost", "LangChain", "FAISS", "SHAP", "RAG"],
  ["Flutter", "Firebase", "iOS", "Android"],
  ["Next.js", "FastAPI", "Python", "Docker"],
  ["Mathematics", "Physics", "CS Fundamentals"],
  ["Prompt Engineering", "MCP", "Agents"],
  ["Docker", "AWS", "GitHub Actions", "Linux"],
];

export default function Services() {
  const t = useTranslations("services");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const services = serviceKeys.map((key, i) => ({
    icon: serviceIcons[i],
    title: t(`items.${key}.title`),
    desc: t(`items.${key}.desc`),
    tags: serviceTags[i],
  }));

  return (
    <section id="services" className="py-16 sm:py-24 bg-navy-deep relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 end-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">{t("label")}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-cream">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
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
                    className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gold/10 text-gold/80 border border-gold/20 preserve-ltr"
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
