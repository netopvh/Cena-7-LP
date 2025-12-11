import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import { getMetadataBase } from "./_utils/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = getMetadataBase();

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Cena7",
    template: "%s | Cena7",
  },
  description:
    "Base otimizada para a futura landing page da Cena7, pronta para SEO e instrumentação.",
  applicationName: "Cena7",
  keywords: [
    "Cena7",
    "landing page",
    "experiência digital",
    "marketing",
    "tecnologia",
  ],
  authors: [{ name: "Cena7" }],
  creator: "Cena7",
  publisher: "Cena7",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cena7",
    description:
      "Estrutura inicial da landing page da Cena7 com foco em SEO e mensuração.",
    url: "/",
    siteName: "Cena7",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cena7",
    description:
      "Estrutura inicial da landing page da Cena7 com foco em SEO e mensuração.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "technology",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
