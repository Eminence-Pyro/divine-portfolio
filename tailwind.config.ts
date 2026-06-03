import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#F0D080",
          dark:    "#A8872F",
          muted:   "rgba(201,168,76,0.15)",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#0f0f0f",
          200: "#141414",
          300: "#1a1a1a",
          400: "#222222",
          500: "#2a2a2a",
          600: "#333333",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)",     "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)",  "Georgia",   "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#C9A84C 0%,#F0D080 50%,#A8872F 100%)",
      },
      keyframes: {
        fadeUp:   { "0%":{opacity:"0",transform:"translateY(30px)"},"100%":{opacity:"1",transform:"translateY(0)"} },
        fadeIn:   { "0%":{opacity:"0"},"100%":{opacity:"1"} },
        shimmer:  { "0%":{backgroundPosition:"-200% 0"},"100%":{backgroundPosition:"200% 0"} },
        spin3d:   { "0%":{transform:"rotateY(0deg)"},"100%":{transform:"rotateY(360deg)"} },
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.8s ease forwards",
        "shimmer":   "shimmer 2.5s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
