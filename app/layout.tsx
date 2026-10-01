import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escolha sua Carreira em TI | Árvore de Decisão Vocacional",
  description:
    "Descubra qual especialidade na área de Tecnologia combina mais com o seu perfil através de uma árvore de decisão inteligente com disciplinas e roadmaps recomendados.",
  keywords: [
    "carreira de TI",
    "árvore de decisão TI",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "ciência de dados",
    "cibersegurança",
    "faculdade computação",
  ],
  authors: [{ name: "TechCareerPath" }],
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
