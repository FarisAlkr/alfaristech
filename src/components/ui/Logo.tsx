interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: number;
}

export default function Logo({ variant = "dark", className = "", size = 150 }: LogoProps) {
  const fillColor = variant === "light" ? "#ffffff" : "#0a2351";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 130"
      className={className}
      width={size}
      height={size * (130/150)}
    >
      <defs>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#b8860b" }} />
          <stop offset="100%" style={{ stopColor: "#f0e68c" }} />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M60.5,92.8 C62.1,86.2 63.9,82.1 66,80.5 C68.1,78.9 70.5,78.1 73.2,78.1 C75.9,78.1 78.3,78.9 80.4,80.5 C82.5,82.1 84.3,86.2 85.9,92.8 L60.5,92.8 Z M73.2,12.3 C83.9,12.3 93.6,16.4 100.8,23.1 C108,29.8 112.4,38.9 112.4,49.2 C112.4,51.9 112,54.5 111.2,56.9 C109.6,62.3 105.8,66.4 101.7,69.4 C98.9,71.4 95.7,73.1 92.3,74.4 C86.3,76.7 79.9,78.1 73.2,78.1 C66.5,78.1 60.1,76.7 54.1,74.4 C50.7,73.1 47.5,71.4 44.7,69.4 C40.6,66.4 36.8,62.3 35.2,56.9 C34.4,54.5 34,51.9 34,49.2 C34,38.9 38.4,29.8 45.6,23.1 C52.8,16.4 62.5,12.3 73.2,12.3 Z M34.7,100 L111.7,100 L115.5,111.7 L30.9,111.7 L34.7,100 Z M30.2,114 L116.2,114 L116.2,118.7 L30.2,118.7 L30.2,114 Z"
          fill={fillColor}
        />
        <path
          d="M55,30 L65,30 M60,25 L60,35 M70,25 L70,45 M65,40 L80,40 M75,35 L75,55 M50,50 L60,50 M55,45 L55,65 M65,60 L80,60 M75,55 L75,70 M60,70 L70,70 M65,65 L65,75 M85,35 L95,35 M90,30 L90,45 M100,40 L110,40 M105,35 L105,50 M95,55 L105,55 M100,50 L100,65 M90,65 L100,65 M95,60 L95,70 M80,70 L90,70 M85,65 L85,75"
          stroke="url(#gold-grad)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="60" cy="30" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="75" cy="40" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="65" cy="50" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="70" cy="65" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="90" cy="35" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="105" cy="45" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="100" cy="60" r="1.5" fill="url(#gold-grad)"/>
        <circle cx="95" cy="70" r="1.5" fill="url(#gold-grad)"/>
      </g>
    </svg>
  );
}
