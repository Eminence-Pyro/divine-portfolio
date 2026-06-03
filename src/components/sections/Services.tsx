"use client";
import { Code2, Server, BarChart2, Layout } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  "code-2": Code2,
  server: Server,
  "bar-chart-2": BarChart2,
  layout: Layout,
};

export default function Services() {
  return (
    <section id="skills" className="py-24 bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">What I Do</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
            Solutions Across <span className="gold-text">Tech & Data</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            I help businesses and teams build efficient digital solutions, maintain reliable systems, and turn data into meaningful insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] ?? Code2;
            return (
              <div
                key={i}
                className="group bg-dark-200 border border-gold/10 rounded-2xl p-6 hover:border-gold/40 hover:bg-dark-300 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                <button className="text-gold text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
