import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Noto_Sans_Arabic, Noto_Sans_Hebrew } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, isRtl, Locale } from "@/i18n/routing";
import "../globals.css";

// English fonts
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Arabic font
const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Hebrew font
const notoHebrew = Noto_Sans_Hebrew({
  variable: "--font-hebrew",
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "software engineer",
      "AI specialist",
      "machine learning",
      "flutter developer",
      "web development",
      "Israel",
    ],
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const rtl = isRtl(locale as Locale);

  // Determine font classes based on locale
  const getFontClasses = () => {
    if (locale === "ar") {
      return `${notoArabic.variable} ${playfair.variable} font-arabic`;
    }
    if (locale === "he") {
      return `${notoHebrew.variable} ${playfair.variable} font-hebrew`;
    }
    return `${playfair.variable} ${dmSans.variable}`;
  };

  return (
    <html lang={locale} dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : "ltr"}>
      <body className={`${getFontClasses()} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
