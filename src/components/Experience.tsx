"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

const experienceKeys = ["siraj", "freelance", "tutor"] as const;
const experienceIcons = [Briefcase, Code2, GraduationCap];

export default function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = experienceKeys.map((key, i) => ({
    icon: experienceIcons[i],
    company: t(`items.${key}.company`),
    role: t(`items.${key}.role`),
    period: t(`items.${key}.period`),
    desc: t(`items.${key}.desc`),
    tags: (t.raw(`items.${key}.tags`) as string[]) ?? [],
  }));

  return (
    <section id="experience" className="py-16 sm:py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">{t("label")}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-primary">
            {t("title")}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline rail */}
          <div className="absolute top-2 bottom-2 start-4 sm:start-6 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" aria-hidden />

          <ol className="space-y-6 sm:space-y-8">
            {items.map((item, i) => (
              <motion.li
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative ps-12 sm:ps-16"
              >
                {/* Timeline dot */}
                <div className="absolute start-0 top-1 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-card border border-gold/30 shadow-sm flex items-center justify-center">
                  <item.icon className="text-gold" size={18} />
                </div>

                <div className="bg-card rounded-xl border border-border p-5 sm:p-6 hover:-translate-y-1 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-primary">
                      {item.role}
                      <span className="text-muted-foreground font-body font-normal"> · {item.company}</span>
                    </h3>
                    <span className="text-xs sm:text-sm text-gold font-medium tracking-wide whitespace-nowrap preserve-ltr">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                    {item.desc}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 sm:px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10 preserve-ltr"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
