"use client";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-5">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Tech Stack</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight">
            Tools I <span className="gold-text">Work With</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs md:text-right">
            Languages, frameworks, and platforms I reach for day-to-day.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {TECH_STACK.map((tech) => (
            <div key={tech.name}
              className="group flex flex-col items-center gap-3 bg-dark-300/50 border border-gold/08 rounded-2xl p-4 hover:border-gold/30 hover:bg-dark-400/60 transition-all duration-300 cursor-default">
              {/* SimpleIcons CDN */}
              <div className="w-9 h-9 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.cdnSlug}`}
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-gray-500 text-[11px] text-center leading-tight group-hover:text-gray-300 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}

          {/* & More */}
          <div className="flex flex-col items-center gap-3 bg-gold/05 border border-gold/15 rounded-2xl p-4">
            <div className="w-9 h-9 flex items-center justify-center">
              <span className="gold-text font-black text-xl">+</span>
            </div>
            <span className="text-gold/70 text-[11px] font-medium">& More</span>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mt-20" />
      </div>
    </section>
  );
}
