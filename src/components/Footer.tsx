"use client";

import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy-deep border-t border-gold/15 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center">
            <Image
              src="/tranparentLogowhite.png"
              alt="AlfarisTech"
              width={240}
              height={70}
              className="h-12 w-auto"
            />
          </a>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/faris-alkrenawi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/FarisAlkr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-colors">
              <Github size={16} />
            </a>
            <a href="mailto:alkrenawi@faris.com" className="w-9 h-9 rounded-lg bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/30 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <p className="text-center text-cream/40 text-xs sm:text-sm mt-4 sm:mt-6">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
