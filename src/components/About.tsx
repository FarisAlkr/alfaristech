"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Trophy, Award, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: t("highlights.bgu.title"),
      desc: t("highlights.bgu.desc"),
    },
    {
      icon: Trophy,
      title: t("highlights.hackathon.title"),
      desc: t("highlights.hackathon.desc"),
      link: "https://www.linkedin.com/posts/faris-alkrenawi_healthtech-ai-machinelearning-activity-7417580302157570048-xC7k",
    },
    {
      icon: Award,
      title: t("highlights.nvidia.title"),
      desc: t("highlights.nvidia.desc"),
      link: "https://www.linkedin.com/posts/faris-alkrenawi_ai-will-not-replace-usbut-those-who-understand-activity-7398410319217418241-vUan",
    },
    {
      icon: Globe,
      title: t("highlights.trilingual.title"),
      desc: t("highlights.trilingual.desc"),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">{t("label")}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-8 text-primary">
            {t("title")}{" "}
            <span className="text-gold-gradient">{t("titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("p2")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((h, i) => {
              const content = (
                <>
                  <h.icon className="text-gold mb-2 sm:mb-3" size={24} />
                  <h3 className="font-display font-bold text-primary text-sm sm:text-lg leading-tight">{h.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">{h.desc}</p>
                </>
              );
              const className = "bg-card rounded-xl p-4 sm:p-6 border border-border hover:-translate-y-1 hover:shadow-lg hover:border-gold/30 transition-all duration-300";

              return h.link ? (
                <motion.a
                  key={h.title}
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`${className} cursor-pointer block`}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={className}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
