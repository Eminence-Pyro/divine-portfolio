"use client";
import { useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = ["All", "Full-Stack", "Data Analysis"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Recent Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
            A Selection of <span className="gold-text">My Work</span>
          </h2>
          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filter === cat
                    ? "bg-gold text-dark border-gold"
                    : "border-gold/20 text-gray-400 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, i) => (
            <div
              key={i}
              className="group bg-dark-200 border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Card header / placeholder image */}
              <div className="relative h-40 bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.4) 0%, transparent 70%)",
                  }}
                />
                <p className="font-serif text-5xl font-bold text-gold/20 group-hover:text-gold/30 transition-colors select-none">
                  {proj.title.slice(0, 2).toUpperCase()}
                </p>
                {/* Tags badges overlay */}
                <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gold/20 text-gold border border-gold/30">
                    {proj.category}
                  </span>
                  {proj.featured && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-white/5 text-gray-300 flex items-center gap-1">
                      <Star size={10} /> Featured
                    </span>
                  )}
                </div>
                {/* External links */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 bg-dark-200/80 rounded-full flex items-center justify-center text-gray-400 hover:text-gold transition-colors">
                      <Github size={14} />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      className="w-8 h-8 bg-dark-200/80 rounded-full flex items-center justify-center text-gray-400 hover:text-gold transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-0.5">{proj.title}</h3>
                <p className="text-gold text-xs font-medium mb-3">{proj.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{proj.description}</p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tag) => (
                    <span key={tag}
                      className="px-2 py-0.5 text-xs bg-dark-300 text-gray-400 rounded-full border border-dark-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
