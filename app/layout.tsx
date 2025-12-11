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
    default: "Sofisticação em móveis sob medida na Grande Florianópolis | Cena 7",
    template: "%s | Cena 7",
  },
  description:
    "Cozinhas, closets e painéis sob medida com ferragens de alta performance. Atendimento próximo, cronograma claro e pós-instalação garantida. Cena 7: qualidade, prazo e elegância para seu projeto.",
  applicationName: "Cena7",
  keywords: [
    "Cena 7",
    "móveis sob medida",
    "móveis planejados",
    "acabamento premium",
    "montagem profissional",
    "garantia 5 anos",
    "São José SC",
    "Grande Florianópolis",
    "cozinhas planejadas",
    "closets planejados",
    "painéis de living",
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
    title: "Sofisticação em móveis sob medida na Grande Florianópolis | Cena 7",
    description:
      "Cozinhas, closets e painéis sob medida com ferragens de alta performance. Atendimento próximo, cronograma claro e pós-instalação garantida.",
    url: "/",
    siteName: "Cena 7",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofisticação em móveis sob medida na Grande Florianópolis | Cena 7",
    description:
      "Cozinhas, closets e painéis sob medida com ferragens de alta performance. Atendimento próximo, cronograma claro e pós-instalação garantida.",
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
