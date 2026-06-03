"use client";
import { useState } from "react";
import { Github, ExternalLink, Star, Clock, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = ["All", "Full-Stack", "Data Analysis", "Frontend"];

const STATUS_CONFIG: Record<string, { color: string; icon: React.ReactNode }> = {
  "Live":           { color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30", icon: <CheckCircle2 size={11} /> },
  "In Development": { color: "text-amber-400 bg-amber-400/10 border-amber-400/30",       icon: <Clock size={11} /> },
  "Completed":      { color: "text-blue-400 bg-blue-400/10 border-blue-400/30",          icon: <CheckCircle2 size={11} /> },
};

export default function Projects() {
  const [filter, setFilter]     = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 relative">
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Recent Projects</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight">
              A Selection of <span className="gold-text">My Work</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
              From full-stack web apps to data analysis — here's what I've been building.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  filter === cat
                    ? "bg-gold text-dark border-gold"
                    : "border-gold/20 text-gray-400 hover:border-gold/40 hover:text-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured row — top 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {filtered.filter(p => p.featured).map(proj => (
            <div
              key={proj.id}
              className={`group relative bg-dark-300/60 border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/35 transition-all duration-400 flex flex-col cursor-pointer ${expanded === proj.id ? "ring-1 ring-gold/40" : ""}`}
              onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${proj.color.replace("/20","").replace("/10","")}`}
                style={{ background: `linear-gradient(90deg, ${proj.accent}60, ${proj.accent}20)` }} />

              {/* Card art */}
              <div className={`relative h-44 bg-gradient-to-br ${proj.color} flex items-center justify-center overflow-hidden`}>
                {/* Large monogram watermark */}
                <span className="font-serif font-black text-[7rem] leading-none select-none transition-all duration-500"
                  style={{ color: proj.accent + "18" }}>
                  {proj.title.slice(0,2).toUpperCase()}
                </span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${proj.accent}15, transparent 70%)` }} />

                {/* Top-right links */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 bg-dark/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <Github size={13} />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 bg-dark/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                {/* Featured + Category badges */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full border"
                    style={{ color: proj.accent, borderColor: proj.accent + "50", background: proj.accent + "15" }}>
                    {proj.category}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gold/15 text-gold border border-gold/25 flex items-center gap-1">
                    <Star size={8} /> Featured
                  </span>
                </div>

                {/* Year */}
                <span className="absolute bottom-3 right-3 text-[10px] text-gray-500 font-mono">{proj.year}</span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-white font-bold text-lg leading-tight">{proj.title}</h3>
                  <span className={`flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-full border flex-shrink-0 ${STATUS_CONFIG[proj.status]?.color || ""}`}>
                    {STATUS_CONFIG[proj.status]?.icon} {proj.status}
                  </span>
                </div>
                <p className="text-xs font-semibold mb-3" style={{ color: proj.accent }}>{proj.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{proj.description}</p>

                {/* Expanded detail */}
                {expanded === proj.id && proj.longDesc && (
                  <div className="mt-4 pt-4 border-t border-gold/10">
                    <p className="text-gray-500 text-sm leading-relaxed">{proj.longDesc}</p>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 text-[11px] bg-dark-500/60 text-gray-400 rounded-full border border-dark-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand hint */}
                <button className="mt-4 text-[11px] text-gray-600 hover:text-gold transition-colors flex items-center gap-1 self-start">
                  {expanded === proj.id ? "Show less ↑" : "Read more ↓"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        {filtered.filter(p => !p.featured).length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.filter(p => !p.featured).map(proj => (
              <div key={proj.id}
                className="group bg-dark-300/40 border border-gold/08 rounded-2xl p-5 hover:border-gold/25 hover:bg-dark-300/60 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: proj.accent + "18", border: `1px solid ${proj.accent}30` }}>
                    <span className="font-bold text-sm" style={{ color: proj.accent }}>
                      {proj.title.slice(0,1)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gold transition-colors opacity-0 group-hover:opacity-100">
                        <Github size={15} />
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gold transition-colors opacity-0 group-hover:opacity-100">
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-white font-semibold text-base mb-0.5">{proj.title}</h3>
                <p className="text-xs mb-3 font-medium" style={{ color: proj.accent }}>{proj.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.tags.slice(0,3).map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-dark-500/50 text-gray-500 rounded-full border border-dark-600">
                      {t}
                    </span>
                  ))}
                  {proj.tags.length > 3 && <span className="px-2 py-0.5 text-[10px] text-gray-600">+{proj.tags.length-3}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a href="https://github.com/Eminence-Pyro" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/30 text-gold font-semibold text-sm hover:bg-gold/5 hover:border-gold/60 transition-all duration-300">
            <Github size={16} /> View All on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
