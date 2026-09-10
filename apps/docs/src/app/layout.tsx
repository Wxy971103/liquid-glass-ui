import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Liquid Glass UI",
  description: "Liquid Glass UI — React component library & docs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}

