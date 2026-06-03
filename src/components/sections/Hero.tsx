"use client";
import Image from "next/image";
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background effects ── */}
      {/* Radial gold haze */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 70% at 72% 45%, rgba(201,168,76,0.09) 0%, transparent 68%)" }} />
      {/* Subtle dot grid */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      {/* Bottom gradient fade */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0A0A)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[82vh]">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Tagline badge */}
            <div className="inline-flex mb-6">
              <span className="px-4 py-1.5 rounded-full border border-gold/35 bg-gold/5 text-gold text-[11px] font-bold tracking-[0.18em] uppercase">
                {PERSONAL.tagline}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif font-black leading-[1.05] mb-6">
              <span className="block text-white text-5xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-sm">
                {PERSONAL.headline[0]}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl tracking-tight">
                {PERSONAL.headline[1]}{" "}
                <span className="gold-text">{PERSONAL.headlineAccent}</span>
              </span>
            </h1>

            {/* Bio */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-4">
              {PERSONAL.bio}
            </p>

            {/* Sub-brand signature */}
            <div className="mb-8 pl-1">
              <p className="font-serif italic text-gold/60 text-xl leading-none">{PERSONAL.subBrand}</p>
              <p className="text-gray-600 text-[10px] tracking-[0.22em] uppercase mt-0.5">{PERSONAL.motto}</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-dark font-bold text-sm hover:bg-gold-light transition-all duration-300 gold-glow"
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={PERSONAL.cvUrl}
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold font-semibold text-sm hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                <Download size={14} /> Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 flex-wrap">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gold text-sm transition-colors">
                <Github size={17} /> GitHub
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gold text-sm transition-colors">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-2 text-gray-500 hover:text-gold text-sm transition-colors">
                <Mail size={17} /> Email Me
              </a>
            </div>
          </div>

          {/* ── Right: Hero photo ── */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 py-8">
            {/* Outer pulse ring */}
            <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border border-gold/15 animate-pulse" />
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-gold/08" />

            {/* Gold radial glow behind photo */}
            <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)" }} />

            {/* Photo frame */}
            <div className="relative w-60 h-[340px] md:w-72 md:h-[420px] rounded-2xl overflow-hidden border border-gold/25 gold-glow z-10">
              <Image
                src="/images/hero.jpg"
                alt="Divine Moses Nnata — Full-Stack Developer"
                fill
                priority
                className="object-cover object-top"
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat badge */}
            <div className="float-badge absolute bottom-6 -left-4 md:-left-10 z-20 bg-dark-300/95 backdrop-blur border border-gold/30 rounded-2xl px-5 py-3.5 shadow-xl">
              <p className="gold-text font-serif font-black text-2xl leading-none">3+</p>
              <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Years of Experience</p>
            </div>

            {/* Floating project badge */}
            <div className="float-badge absolute top-10 -right-4 md:-right-6 z-20 bg-dark-300/95 backdrop-blur border border-gold/30 rounded-2xl px-5 py-3.5 shadow-xl" style={{ animationDelay: "1.5s" }}>
              <p className="gold-text font-serif font-black text-2xl leading-none">10+</p>
              <p className="text-gray-400 text-xs mt-0.5 tracking-wide">Projects Built</p>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {STATS.map((stat, i) => (
            <div key={i}
              className="bg-dark-300/60 border border-gold/10 rounded-2xl p-5 text-center hover:border-gold/30 hover:bg-dark-400/60 transition-all duration-300 group cursor-default">
              <p className="gold-text font-serif font-black text-3xl md:text-4xl group-hover:scale-105 transition-transform origin-center">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-gold transition-colors animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
