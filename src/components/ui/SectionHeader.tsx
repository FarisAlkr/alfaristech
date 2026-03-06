"use client";

import RevealOnScroll from "./RevealOnScroll";
import GoldText from "./GoldText";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlightWord?: string;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  highlightWord,
  light = false
}: SectionHeaderProps) {
  const titleParts = highlightWord
    ? title.split(highlightWord)
    : [title];

  return (
    <RevealOnScroll className="text-center mb-16">
      <span className={`inline-block text-sm font-medium tracking-widest uppercase mb-4 ${
        light ? "text-gold" : "text-gold"
      }`}>
        {label}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl font-bold ${
        light ? "text-navy" : "text-white"
      }`}>
        {highlightWord ? (
          <>
            {titleParts[0]}
            <GoldText>{highlightWord}</GoldText>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6 rounded-full" />
    </RevealOnScroll>
  );
}
