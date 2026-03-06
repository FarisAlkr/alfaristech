"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const floatingTags = [
  { label: "AI/ML", top: "15%", left: "65%", delay: 0 },
  { label: "Flutter", top: "30%", left: "75%", delay: 0.5 },
  { label: "Python", top: "50%", left: "68%", delay: 1 },
  { label: "FastAPI", top: "25%", left: "85%", delay: 1.5 },
  { label: "LangChain", top: "60%", left: "80%", delay: 0.8 },
  { label: "Next.js", top: "45%", left: "90%", delay: 1.2 },
  { label: "Docker", top: "70%", left: "72%", delay: 0.3 },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "200+", label: "Students Tutored" },
  { value: "3", label: "Languages Fluent" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-navy-deep overflow-hidden flex items-center">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-navy-light/30 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-medium tracking-wide">Available for Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              <span className="text-cream">Software Engineer &</span>
              <br />
              <span className="text-gold-gradient">AI Specialist</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-cream/70 text-lg leading-relaxed mb-8 max-w-xl"
            >
              I'm Faris Alkrenawi — I build production-grade AI systems, mobile apps, and web platforms that solve real-world problems in healthcare, fintech, and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-gold-gradient text-primary font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-md hover:-translate-y-1 hover:shadow-gold-glow transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                Start a Project <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("#portfolio")}
                className="border border-cream/20 text-cream font-medium px-5 sm:px-7 py-3 sm:py-3.5 rounded-md hover:border-gold/50 hover:text-gold hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-8 border-t border-cream/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-[80px]">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="text-cream/50 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating tags */}
          <div className="relative hidden lg:block h-[500px]">
            {floatingTags.map((tag) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + tag.delay, duration: 0.5 }}
                className="absolute glass-dark px-4 py-2 rounded-lg text-cream/90 text-sm font-medium"
                style={{
                  top: tag.top,
                  left: tag.left,
                  animation: `float ${3 + tag.delay}s ease-in-out ${tag.delay}s infinite`,
                }}
              >
                {tag.label}
              </motion.div>
            ))}

            {/* Geometric decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="w-full h-full border border-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-gold/15 rounded-full animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gold/60 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
