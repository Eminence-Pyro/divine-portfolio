import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divine Moses Nnata | Full-Stack Developer · IT Professional · Data Analyst",
  description:
    "I build scalable web applications, maintain IT systems, and turn data into meaningful insights. Based in Abia State, Nigeria.",
  keywords: ["full-stack developer", "Next.js", "React", "data analyst", "IT professional", "Nigeria"],
  authors: [{ name: "Divine Moses Nnata" }],
  openGraph: {
    title: "Divine Moses Nnata — Developer. Problem Solver.",
    description: "Portfolio of Divine Moses Nnata — Full-Stack Developer, IT Professional, and Data Analyst.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark text-white antialiased noise">
        {children}
      </body>
    </html>
  );
}
