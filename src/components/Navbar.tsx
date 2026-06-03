"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActive(href.replace("#", ""));
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-100/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center gold-glow transition-all duration-300 group-hover:scale-105">
            <span className="gold-text font-serif font-bold text-sm">
              {PERSONAL.monogram.slice(0, 2)}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-semibold text-sm leading-none">
              {PERSONAL.name}
            </p>
            <p className="text-gold text-xs mt-0.5">Building solutions.</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                active === link.href.replace("#", "")
                  ? "text-gold border-b border-gold pb-0.5"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Let's Connect
          </button>
          <button
            className="md:hidden text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-dark-200/98 backdrop-blur-md border-t border-gold/10 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-gray-300 hover:text-gold text-base font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 w-full py-3 rounded-full border border-gold text-gold font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Let's Connect
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
