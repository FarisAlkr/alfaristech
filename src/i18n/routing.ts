import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar", "he"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const rtlLocales: Locale[] = ["ar", "he"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
