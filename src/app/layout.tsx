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
    "I build scalable web applications, maintain IT systems, and turn raw data into real-world decisions. Based in Abia State, Nigeria.",
  keywords: [
    "full-stack developer Nigeria",
    "Next.js developer",
    "React developer",
    "data analyst",
    "IT professional",
    "Divine Nnata",
    "Eminence",
  ],
  authors: [{ name: "Divine Moses Nnata", url: "https://github.com/Eminence-Pyro" }],
  openGraph: {
    title:       "Divine Moses Nnata — Developer. Problem Solver.",
    description: "Portfolio of Divine Moses Nnata — Full-Stack Developer, IT Professional & Data Analyst.",
    type:        "website",
    locale:      "en_NG",
  },
  twitter: {
    card:  "summary_large_image",
    title: "Divine Moses Nnata — Developer. Problem Solver.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
