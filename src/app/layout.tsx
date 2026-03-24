import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T-SEG | Sistemas de Segurança — Proteção de Alto Padrão",
  description:
    "A T-SEG oferece soluções completas em segurança eletrônica: câmeras CFTV, alarmes inteligentes, cerca elétrica, portão eletrônico e controle de acesso. Proteção 24/7 para seu patrimônio.",
  keywords: [
    "segurança eletrônica",
    "câmeras de segurança",
    "CFTV",
    "alarmes",
    "cerca elétrica",
    "portão eletrônico",
    "controle de acesso",
    "T-SEG",
    "monitoramento 24h"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0f1c]">{children}</body>
    </html>
  );
}
