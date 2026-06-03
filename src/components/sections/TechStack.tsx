"use client";
import { TECH_STACK } from "@/lib/data";

// Using SimpleIcons via CDN URLs as fallback when local icons aren't present
const ICON_URLS: Record<string, string> = {
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "Git": "https://cdn.simpleicons.org/git/F05032",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Python": "https://cdn.simpleicons.org/python/3776AB",
  "Flask": "https://cdn.simpleicons.org/flask/ffffff",
  "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "Figma": "https://cdn.simpleicons.org/figma/F24E1E",
};

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-dark-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Tech Stack</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-12">
          Tools I <span className="gold-text">Work With</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 bg-dark-200 border border-gold/10 rounded-xl p-4 hover:border-gold/40 hover:bg-dark-300 transition-all duration-300 cursor-default"
            >
              {/* Icon via SimpleIcons CDN */}
              <div className="w-10 h-10 flex items-center justify-center">
                {ICON_URLS[tech.name] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ICON_URLS[tech.name]}
                    alt={tech.name}
                    className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gold/20 rounded-lg" />
                )}
              </div>
              <span className="text-gray-400 text-xs text-center group-hover:text-gray-200 transition-colors leading-tight">
                {tech.name}
              </span>
            </div>
          ))}

          {/* & More card */}
          <div className="flex flex-col items-center gap-3 bg-gold/5 border border-gold/20 rounded-xl p-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="gold-text font-bold text-lg">+</span>
            </div>
            <span className="text-gold text-xs text-center font-medium">& More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
