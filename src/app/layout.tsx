import type { ReactNode } from "react";

// Root layout - minimal wrapper
// The actual layout logic is in [locale]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
