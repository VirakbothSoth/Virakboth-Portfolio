import type { Metadata } from "next";
import { JetBrains_Mono, Oxygen_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const oxygen = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oxygen",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is Virakboth's Portfolio",
  keywords: ["Virakboth", "Virakboth Soth"],
  authors: [{ name: "Virakboth Soth" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Virakboth's Portfolio",
    description: "This is Virakboth's Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${oxygen.variable}`}>
      <body>{children}</body>
    </html>
  );
}
