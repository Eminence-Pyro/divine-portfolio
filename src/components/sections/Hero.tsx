"use client";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/data";

export default function Hero() {
  const scrollDown = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Grid lines overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* ── Left: Text ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase">
                {PERSONAL.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-bold leading-tight mb-2">
              <span className="block text-white text-5xl md:text-6xl xl:text-7xl tracking-tight">
                {PERSONAL.headline[0]}
              </span>
              <span className="block text-5xl md:text-6xl xl:text-7xl tracking-tight">
                {PERSONAL.headline[1]}{" "}
                <span className="gold-text">{PERSONAL.headlineAccent}</span>
              </span>
            </h1>

            {/* Bio */}
            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
              {PERSONAL.bio}
            </p>

            {/* Eminence badge */}
            <div className="mt-4 mb-8">
              <p className="font-serif italic text-gold/70 text-lg">Eminence</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase">
                Building Solutions. Impacting Lives.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-dark font-bold text-sm hover:bg-gold-light transition-all duration-300 gold-glow"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <a
                href={PERSONAL.cvUrl}
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-gold font-semibold text-sm hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                Download CV ↓
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm transition-colors"
              >
                <Mail size={18} /> Email Me
              </a>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Outer glow ring */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-gold/20 animate-pulse" />
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-gold/10" />
            {/* Gold circle bg */}
            <div
              className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Photo */}
            <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-gold/30 gold-glow">
              <Image
                src="/images/hero.jpg"
                alt="Divine Moses Nnata"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-0 bg-dark-200/90 backdrop-blur border border-gold/30 rounded-xl px-4 py-3 text-center">
              <p className="gold-text font-serif font-bold text-lg">10+</p>
              <p className="text-gray-400 text-xs">Projects Built</p>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-200/80 border border-gold/10 rounded-xl p-5 text-center hover:border-gold/30 transition-all duration-300 group"
            >
              <p className="gold-text font-serif font-bold text-3xl md:text-4xl group-hover:scale-105 transition-transform">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gold transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
