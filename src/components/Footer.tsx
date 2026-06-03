"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-dark-100 border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="gold-text font-serif font-bold text-sm">{PERSONAL.monogram.slice(0,2)}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{PERSONAL.name}</p>
                <p className="text-gold text-xs">Building solutions. Impacting lives.</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full-stack developer, IT professional, and data analyst based in Nigeria.
              Open to projects, collaborations, and opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-gray-500 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href={`mailto:${PERSONAL.email}`} className="hover:text-gold transition-colors">{PERSONAL.email}</a></li>
              <li><a href={`tel:${PERSONAL.phone}`} className="hover:text-gold transition-colors">{PERSONAL.phone}</a></li>
              <li>{PERSONAL.location}</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[{ icon: Github, href: PERSONAL.github }, { icon: Linkedin, href: PERSONAL.linkedin }, { icon: Mail, href: `mailto:${PERSONAL.email}` }].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {year} Divine Moses Nnata. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed & Built with <span className="text-gold">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
