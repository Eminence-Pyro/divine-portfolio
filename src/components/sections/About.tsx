"use client";
import Image from "next/image";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import { PERSONAL, EXPERIENCE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left: Photo ── */}
          <div className="relative group mx-auto lg:mx-0 w-full max-w-md">
            {/* Accent frame lines */}
            <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-gold/40 rounded-tl-xl" />
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-gold/40 rounded-br-xl" />

            {/* Photo */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 gold-glow">
              <Image
                src="/images/about.jpg"
                alt="Divine Moses Nnata — full-length portrait"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
            </div>

            {/* "Available" chip */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-300/95 border border-gold/30 rounded-full px-5 py-2 flex items-center gap-2 whitespace-nowrap shadow-xl backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-300 text-xs font-medium">Open to Opportunities</span>
            </div>
          </div>

          {/* ── Right: Bio + details ── */}
          <div className="pt-4">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Who I <span className="gold-text">Am</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {PERSONAL.bio}
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              {PERSONAL.bioExtended}
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: MapPin,   label: "Location", value: PERSONAL.location },
                { icon: Mail,     label: "Email",    value: PERSONAL.email    },
                { icon: Phone,    label: "Phone",    value: PERSONAL.phone    },
                { icon: Briefcase,label: "Status",   value: "Open to Work"   },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 bg-dark-300/40 border border-gold/08 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-wider font-bold mb-0.5">{label}</p>
                    <p className="text-gray-300 text-sm break-all leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Experience timeline ── */}
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Experience
            </h3>

            <div className="space-y-6 pl-2">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-gold/15 hover:border-gold/40 transition-colors duration-300 pb-2">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${exp.current ? "border-gold bg-gold/20" : "border-gold/40 bg-dark"}`}>
                    {exp.current && <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />}
                  </div>

                  <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                    <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                    <span className="text-gold text-xs font-semibold whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span key={s} className="px-2.5 py-0.5 text-[11px] bg-gold/08 text-gold/80 rounded-full border border-gold/15">
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
