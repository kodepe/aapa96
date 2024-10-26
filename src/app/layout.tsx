import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";
import { LanguageProvider } from "@/context/language";
import "animate.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alex Paredes - Desarrollador Fullstack",
  description:
    "Portafolio de Alex Paredes, desarrollador fullstack con experiencia en frontend y backend utilizando tecnologías como React, Next.js, y NestJS.",
  authors: [{ name: "Alex Andre Paredes Aranzamendi" }],
  category: "Portafolio",
  keywords: [
    "Alex Paredes",
    "Desarrollador Fullstack",
    "Frontend",
    "React",
    "Next.js",
    "Portafolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.alexportfolio.com",
    title: "Alex Paredes - Desarrollador Fullstack",
    description:
      "Portafolio de Alex Paredes, destacando sus proyectos y experiencia en desarrollo frontend y backend.",
    images: [
      {
        url: "https://www.alexportfolio.com/images/portafolio-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Paredes - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alexparedes",
    title: "Alex Paredes - Desarrollador Fullstack",
    description:
      "Explora el portafolio de Alex Paredes con proyectos de desarrollo fullstack utilizando tecnologías modernas.",
    // image: "https://www.alexportfolio.com/images/portafolio-thumbnail.jpg",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
