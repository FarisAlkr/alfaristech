"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "alkrenawi@faris.com", href: "mailto:alkrenawi@faris.com" },
  { icon: Phone, label: "Phone", value: "+972-53-520-3839", href: "tel:+972535203839" },
  { icon: Linkedin, label: "LinkedIn", value: "faris-alkrenawi", href: "https://linkedin.com/in/faris-alkrenawi" },
  { icon: Github, label: "GitHub", value: "FarisAlkr", href: "https://github.com/FarisAlkr" },
];

const serviceOptions = [
  "AI & Machine Learning",
  "Mobile Development",
  "Web Applications",
  "Tech Education",
  "AI Consulting",
  "DevOps & Cloud",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-navy-deep relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-cream">
            Let's Build Something Great
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg sm:text-xl text-cream mb-3 sm:mb-4">Ready to bring your idea to life?</h3>
            <p className="text-cream/60 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base">
              Whether you need an AI-powered system, a mobile app, a professional website, or technical education — I'd love to hear about your project.
            </p>

            <div className="space-y-5">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
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
                    <div className="text-cream font-medium group-hover:text-gold transition-colors">{m.value}</div>
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
                  <h3 className="font-display text-2xl font-bold text-cream mb-2">Message Sent!</h3>
                  <p className="text-cream/60">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-cream/60 text-sm mb-1.5 block">Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-cream/60 text-sm mb-1.5 block">Email</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cream/60 text-sm mb-1.5 block">Service Needed</label>
                    <select
                      required
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-navy">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-cream/60 text-sm mb-1.5 block">Project Details</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient text-primary font-semibold py-3.5 rounded-lg hover:-translate-y-0.5 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
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
