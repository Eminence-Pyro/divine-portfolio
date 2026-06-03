"use client";
import { Code2, Server, BarChart2, Layout, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  "code-2":     Code2,
  "server":     Server,
  "bar-chart-2":BarChart2,
  "layout":     Layout,
};

export default function Services() {
  return (
    <section id="skills" className="py-28 bg-dark-100/60">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-5">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">What I Do</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-white leading-tight">
            Solutions Across <span className="gold-text">Tech & Data</span>
          </h2>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed md:text-right">
            I help businesses and teams build efficient digital solutions, maintain reliable systems, and turn data into meaningful insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] ?? Code2;
            return (
              <div key={i}
                className={`group relative bg-gradient-to-br ${svc.color} bg-dark-300/50 border border-gold/08 rounded-2xl p-7 hover:border-gold/30 transition-all duration-300 overflow-hidden cursor-default`}>
                {/* Background number watermark */}
                <span className="absolute -bottom-3 -right-3 font-serif font-black text-[5rem] text-white/[0.02] select-none leading-none">
                  {String(i+1).padStart(2,"0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all">
                  <Icon size={22} className="text-gold" />
                </div>

                <h3 className="text-white font-bold text-base mb-3 leading-snug">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
