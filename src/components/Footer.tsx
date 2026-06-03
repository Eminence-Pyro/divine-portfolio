"use client";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (href: string) =>
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-dark-100 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center gold-glow">
                <span className="gold-text font-serif font-bold text-sm">{PERSONAL.monogram.slice(0,2)}</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{PERSONAL.name}</p>
                <p className="text-gold/60 text-xs font-light">{PERSONAL.motto}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Full-stack developer, IT professional, and data analyst based in Nigeria.
              Open to projects, collaborations, and opportunities.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Github,   href: PERSONAL.github             },
                { icon: Linkedin, href: PERSONAL.linkedin           },
                { icon: Mail,     href: `mailto:${PERSONAL.email}`  },
              ].map(({ icon:Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center text-gray-600 hover:text-gold hover:border-gold/40 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)}
                    className="text-gray-600 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href={`mailto:${PERSONAL.email}`} className="hover:text-gold transition-colors break-all">{PERSONAL.email}</a></li>
              <li><a href={`tel:${PERSONAL.phone}`}    className="hover:text-gold transition-colors">{PERSONAL.phone}</a></li>
              <li className="text-gray-700">{PERSONAL.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/08 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            © {year} {PERSONAL.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-gray-700 text-xs">
              Designed & Built with <span className="text-gold">♥</span>
            </p>
            <button
              onClick={() => scrollTo("#home")}
              className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gray-600 hover:text-gold hover:border-gold/40 transition-all"
              title="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
