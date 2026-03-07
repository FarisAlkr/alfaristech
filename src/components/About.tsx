"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Trophy, Award, Globe } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BGU Computer Science",
    desc: "B.Sc. + Technion Mathematics",
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    desc: "OncoRisk EC — Medical AI",
    link: "https://www.linkedin.com/posts/faris-alkrenawi_healthtech-ai-machinelearning-activity-7417580302157570048-xC7k",
  },
  {
    icon: Award,
    title: "NVIDIA & Microsoft",
    desc: "AI Certified — The;Institution",
    link: "https://www.linkedin.com/posts/faris-alkrenawi_ai-will-not-replace-usbut-those-who-understand-activity-7398410319217418241-vUan",
  },
  {
    icon: Globe,
    title: "Trilingual",
    desc: "Arabic, Hebrew, English",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-8 text-primary">
            Building Intelligent Software That Makes a{" "}
            <span className="text-gold-gradient">Difference</span>
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
              I'm a Computer Science student at Ben-Gurion University with a background in Mathematics from the Technion — Israel Institute of Technology. My passion lies at the intersection of AI and real-world impact — from clinical decision support systems deployed in hospitals to mobile apps with hundreds of users.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Certified in AI by The;Institute (with BGU, NVIDIA & Microsoft), I specialize in LLMs, RAG architectures, and ML models. I also bring over 4 years of experience tutoring 200+ students, which gives me a unique ability to translate complex technology into clear, actionable solutions.
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
