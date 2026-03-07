"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const testimonialKeys = ["client1", "client2", "client3"];
const initials = ["AF", "CE", "US"];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = testimonialKeys.map((key, i) => ({
    quote: t(`items.${key}.quote`),
    author: t(`items.${key}.author`),
    role: t(`items.${key}.role`),
    project: t(`items.${key}.project`),
    initials: initials[i],
  }));

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-cream-dark" ref={ref}>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-xl p-5 sm:p-8 border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="font-display text-4xl sm:text-5xl text-gold leading-none">"</span>
              <p className="italic text-muted-foreground leading-relaxed mt-2 mb-4 sm:mb-6 text-sm sm:text-base">{item.quote}</p>
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-border">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-navy flex items-center justify-center text-gold font-display font-bold text-xs sm:text-sm">
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary text-xs sm:text-sm">{item.author}{item.role ? `, ${item.role}` : ""}</div>
                  <div className="text-muted-foreground text-xs">{item.project}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
