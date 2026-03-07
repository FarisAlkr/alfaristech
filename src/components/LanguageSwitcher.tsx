"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, Locale } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languageNames: Record<Locale, string> = {
  en: "EN",
  ar: "ع",
  he: "עב",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-cream/20 bg-cream/5 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 text-cream"
        aria-label="Select language"
      >
        <Globe size={16} className="text-gold" />
        <span className="text-sm font-medium">{languageNames[locale]}</span>
        <ChevronDown
          size={14}
          className={`text-cream/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 end-0 min-w-[140px] bg-navy-deep/95 backdrop-blur-md border border-gold/20 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full flex items-center justify-center px-4 py-3 text-center transition-colors duration-200 ${
                  locale === loc
                    ? "bg-gold/20 text-gold"
                    : "text-cream/80 hover:bg-gold/10 hover:text-cream"
                }`}
              >
                <span className="text-sm font-medium">{loc === "en" ? "English" : loc === "ar" ? "العربية" : "עברית"}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
