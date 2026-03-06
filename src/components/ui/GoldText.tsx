interface GoldTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GoldText({ children, className = "" }: GoldTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#b8860b] to-[#f0e68c] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
