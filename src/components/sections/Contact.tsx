"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Using mailto fallback — replace with EmailJS or Resend in production
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ── Left: Info ── */}
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">
              Let's <span className="gold-text">Connect</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Have a project in mind, an opportunity to discuss, or just want to say hello?
              I'm always open to meaningful conversations. Reach out — let's build something great together.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: Phone, label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g,"")}` },
                { icon: MapPin, label: "Location", value: PERSONAL.location, href: "" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-300 hover:text-gold transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="text-gray-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              {[
                { icon: Github, href: PERSONAL.github, label: "GitHub" },
                { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-200"
                  title={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-dark-200 border border-gold/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-dark-200 border border-gold/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">Subject</label>
              <input
                type="text" name="subject" value={form.subject} onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-dark-200 border border-gold/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider">Message</label>
              <textarea
                name="message" required rows={5} value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className="w-full bg-dark-200 border border-gold/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-dark font-bold text-sm hover:bg-gold-light transition-all duration-300 gold-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Opening email…" : status === "sent" ? "✓ Email client opened!" : (
                <><Send size={16} /> Send Message</>
              )}
            </button>
            <p className="text-gray-600 text-xs text-center">
              Or email me directly at{" "}
              <a href={`mailto:${PERSONAL.email}`} className="text-gold hover:underline">{PERSONAL.email}</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
