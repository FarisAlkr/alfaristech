"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const contactMethodsData = [
  { icon: Mail, key: "email", value: "alkrenawi@faris.com", href: "mailto:alkrenawi@faris.com" },
  { icon: Phone, key: "phone", value: "+972-53-520-3839", href: "tel:+972535203839" },
  { icon: Linkedin, key: "linkedin", value: "faris-alkrenawi", href: "https://linkedin.com/in/faris-alkrenawi" },
  { icon: Github, key: "github", value: "FarisAlkr", href: "https://github.com/FarisAlkr" },
];

const serviceKeys = ["ai", "mobile", "web", "education", "consulting", "devops", "other"];

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = contactMethodsData.map((m) => ({
    ...m,
    label: t(`methods.${m.key}`),
  }));

  const serviceOptions = serviceKeys.map((key) => t(`form.services.${key}`));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-navy-deep relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute bottom-0 start-0 w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />

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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg sm:text-xl text-cream mb-3 sm:mb-4">{t("subtitle")}</h3>
            <p className="text-cream/60 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base">
              {t("description")}
            </p>

            <div className="space-y-5">
              {contactMethods.map((m) => (
                <a
                  key={m.key}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <m.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-cream/50 text-xs uppercase tracking-wider">{m.label}</div>
                    <div className="text-cream font-medium group-hover:text-gold transition-colors preserve-ltr">{m.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-dark rounded-2xl p-5 sm:p-8 border border-gold/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-gold mb-4" />
                  <h3 className="font-display text-2xl font-bold text-cream mb-2">{t("form.success.title")}</h3>
                  <p className="text-cream/60">{t("form.success.message")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-cream/60 text-sm mb-1.5 block">{t("form.name")}</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder={t("form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="text-cream/60 text-sm mb-1.5 block">{t("form.email")}</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder={t("form.emailPlaceholder")}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cream/60 text-sm mb-1.5 block">{t("form.service")}</label>
                    <select
                      required
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy">{t("form.servicePlaceholder")}</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-navy">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-cream/60 text-sm mb-1.5 block">{t("form.details")}</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                      placeholder={t("form.detailsPlaceholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient text-primary font-semibold py-3.5 rounded-lg hover:-translate-y-0.5 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {t("form.submit")} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
