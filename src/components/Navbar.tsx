"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Track active section
      const sections = NAV_LINKS.map(l => l.href.replace("#",""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveId(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-dark-100/90 backdrop-blur-xl border-b border-gold/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center gold-glow transition-transform duration-300 group-hover:scale-110">
              <span className="gold-text font-serif font-bold text-sm select-none">
                {PERSONAL.monogram.slice(0, 2)}
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-white font-semibold text-sm leading-none">{PERSONAL.name}</p>
              <p className="text-gold/70 text-xs mt-0.5 font-light tracking-wide">{PERSONAL.motto}</p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#","");
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                    activeId === id
                      ? "text-gold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {label}
                  {activeId === id && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL.cvUrl}
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 text-gold text-xs font-semibold hover:bg-gold/10 transition-all"
            >
              <Download size={13} /> CV
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-dark text-sm font-bold hover:bg-gold-light transition-all duration-300 gold-glow"
            >
              Let's Connect
            </button>
            <button className="md:hidden text-gold p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-dark-200 border-l border-gold/10 flex flex-col p-8 pt-20 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left text-gray-300 hover:text-gold text-lg font-medium transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <a href={PERSONAL.cvUrl} download className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/10 transition-all">
              <Download size={14} /> Download CV
            </a>
            <button onClick={() => scrollTo("#contact")} className="w-full py-3 rounded-xl bg-gold text-dark font-bold text-sm hover:bg-gold-light transition-all">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
