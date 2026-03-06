"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Faris delivered our website on time and beyond expectations. His ability to understand our business needs and translate them into a clean, professional design was remarkable.",
    author: "Client",
    role: "Architecture Firm",
    project: "Web Development Project",
    initials: "AF",
  },
  {
    quote: "The Nawaqeet app transformed how our community manages events. Hundreds of downloads on launch day speaks for itself. Faris's technical skills and attention to detail are exceptional.",
    author: "Community Event Organizer",
    role: "",
    project: "Mobile App Project",
    initials: "CE",
  },
  {
    quote: "As a physics student, I struggled for months. Faris explained concepts in a way that finally clicked. I went from barely passing to scoring in the top of my class.",
    author: "University Student",
    role: "",
    project: "Physics Tutoring",
    initials: "US",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-cream-dark" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Client Feedback</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-primary">
            What People Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-xl p-5 sm:p-8 border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="font-display text-4xl sm:text-5xl text-gold leading-none">"</span>
              <p className="italic text-muted-foreground leading-relaxed mt-2 mb-4 sm:mb-6 text-sm sm:text-base">{t.quote}</p>
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-navy flex items-center justify-center text-gold font-display font-bold text-xs sm:text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary text-xs sm:text-sm">{t.author}{t.role ? `, ${t.role}` : ""}</div>
                  <div className="text-muted-foreground text-xs">{t.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm italic mt-8">
          * Replace with your real client testimonials for authenticity
        </p>
      </div>
    </section>
  );
}
