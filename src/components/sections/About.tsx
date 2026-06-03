"use client";
import Image from "next/image";
import { PERSONAL, EXPERIENCE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">About Me</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Photo ── */}
          <div className="relative group">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-gold/20 gold-glow">
              <Image
                src="/images/about.jpg"
                alt="Divine Moses Nnata — portfolio preview"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/20 rounded-xl -z-10" />
          </div>

          {/* ── Right: Bio + Experience ── */}
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-2">
              Who I <span className="gold-text">Am</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              {PERSONAL.bio}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              I combine a passion for teaching with hands-on technical expertise. Whether it's architecting a full-stack web application, maintaining IT infrastructure, or turning raw data into clear insights — I approach every challenge with precision and purpose.
            </p>

            {/* Key details */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Location", value: PERSONAL.location },
                { label: "Email", value: PERSONAL.email },
                { label: "Phone", value: PERSONAL.phone },
                { label: "Available", value: "Open to Opportunities" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-gold text-xs uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className="text-gray-300 text-sm break-all">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Experience timeline */}
            <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l border-gold/20 hover:border-gold/50 transition-colors">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-gold/80" />
                  <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-1">{exp.period}</p>
                  <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                  <p className="text-gray-500 text-xs mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 text-xs bg-gold/10 text-gold/80 rounded-full border border-gold/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
