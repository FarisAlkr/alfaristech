"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const projectKeys = ["oncorisk", "nawaqeet", "netobox", "rag", "carnotify"];
const projectData = [
  {
    tech: ["Python", "FastAPI", "Next.js 14", "XGBoost", "SHAP", "Docker"],
    color: "from-rose-500/20 to-amber-500/20",
    emoji: "🏥",
    url: "https://frontend-seven-henna-16.vercel.app",
    image: "/oncorisk-screenshot.gif",
    hasBadge: true,
  },
  {
    tech: ["Flutter", "Firebase", "iOS", "Android"],
    color: "from-violet-500/20 to-blue-500/20",
    emoji: "🎉",
    url: "https://nawaqeet.com/",
    image: "/nawaqeet-screenshot.png",
    hasBadge: true,
  },
  {
    tech: ["Flutter", "Firebase"],
    color: "from-emerald-500/20 to-teal-500/20",
    emoji: "📊",
    url: null,
    image: null,
    hasBadge: false,
  },
  {
    tech: ["Python", "LangChain", "FAISS"],
    color: "from-blue-500/20 to-indigo-500/20",
    emoji: "💹",
    url: null,
    image: null,
    hasBadge: false,
  },
  {
    tech: ["Flutter", "Firebase"],
    color: "from-orange-500/20 to-red-500/20",
    emoji: "🚗",
    url: null,
    image: null,
    hasBadge: false,
  },
];

function ProjectCard({
  project,
  index,
  inView,
  t,
  isRtl,
}: {
  project: {
    title: string;
    category: string;
    badge: string | null;
    desc: string;
    tech: string[];
    color: string;
    emoji: string;
    url: string | null;
    image: string | null;
  };
  index: number;
  inView: boolean;
  t: ReturnType<typeof useTranslations>;
  isRtl: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const CardWrapper = project.url ? motion.a : motion.div;
  const cardProps = project.url
    ? {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden mb-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`grid md:grid-cols-2 ${isRtl ? "md:grid-flow-dense" : ""}`}>
        {/* Live Preview / Image Section */}
        <div
          className={`bg-gradient-to-br ${project.color} relative flex items-center justify-center min-h-[220px] sm:min-h-[280px] overflow-hidden ${isRtl ? "md:col-start-2" : ""}`}
        >
          {project.url ? (
            <>
              {/* Live iframe preview */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <iframe
                  src={project.url}
                  className="w-full h-full border-0 pointer-events-auto"
                  style={{
                    transform: "scale(0.5)",
                    transformOrigin: "top left",
                    width: "200%",
                    height: "200%",
                  }}
                  title={project.title}
                  loading="lazy"
                />
              </div>
              {/* Static image fallback */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl sm:text-7xl">{project.emoji}</span>
                  </div>
                )}
              </div>
              {/* Hover hint */}
              <div
                className={`absolute bottom-3 ${isRtl ? "end-3" : "start-3"} bg-black/60 text-white text-xs px-2 py-1 rounded transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("hoverPreview")}
              </div>
            </>
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          ) : (
            <span className="text-5xl sm:text-7xl">{project.emoji}</span>
          )}
          {project.url && (
            <ExternalLink
              className={`absolute top-3 ${isRtl ? "start-3" : "end-3"} text-white/70 drop-shadow-md z-10`}
              size={20}
            />
          )}
        </div>

        {/* Content Section */}
        <div className={`p-5 sm:p-8 lg:p-10 flex flex-col justify-center ${isRtl ? "md:col-start-1" : ""}`}>
          <div className="flex items-center gap-3 mb-2 sm:mb-3 flex-wrap">
            <span className="text-xs text-gold font-medium uppercase tracking-wider">
              {project.category}
            </span>
            {project.badge && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-gold/15 text-gold px-3 py-1 rounded-full">
                <Star size={12} /> {project.badge}
              </span>
            )}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 sm:px-3 py-1 rounded-full bg-primary/5 text-primary/70 border border-primary/10 preserve-ltr"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const isRtl = locale === "ar" || locale === "he";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const projects = projectKeys.map((key, i) => ({
    title: t(`projects.${key}.title`),
    category: t(`projects.${key}.category`),
    badge: projectData[i].hasBadge ? t(`projects.${key}.badge`) : null,
    desc: t(`projects.${key}.desc`),
    ...projectData[i],
  }));

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-cream" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            {t("label")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-12 text-primary">
            {t("title")}
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                inView={inView}
                t={t}
                isRtl={isRtl}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-gold hover:text-gold/80 font-semibold text-lg transition-colors duration-300 group"
            >
              {showAll ? t("showLess") : t("seeMore")}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : "group-hover:translate-y-1"
                }`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
