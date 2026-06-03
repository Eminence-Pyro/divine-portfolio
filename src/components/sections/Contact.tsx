"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { PERSONAL } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm]     = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const sub  = encodeURIComponent(form.subject || "Portfolio Enquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${PERSONAL.email}?subject=${sub}&body=${body}`);
    setTimeout(() => { setStatus("sent"); setForm({ name:"", email:"", subject:"", message:"" }); }, 800);
  };

  return (
    <section id="contact" className="py-28 bg-dark-100/60 relative">
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Get In Touch</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left */}
          <div>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              Let's <span className="gold-text">Build Something</span> Together
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-md">
              Have a project in mind, a collaboration to discuss, or just want to say hello?
              I'm always open to meaningful conversations.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail,   label:"Email",    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
                { icon: Phone,  label:"Phone",    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone.replace(/\s/g,"")}` },
                { icon: MapPin, label:"Location", value: PERSONAL.location, href: "" },
              ].map(({ icon:Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 bg-dark-300/40 border border-gold/08 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-wider font-bold">{label}</p>
                    {href
                      ? <a href={href} className="text-gray-300 text-sm hover:text-gold transition-colors">{value}</a>
                      : <p className="text-gray-300 text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github,   href: PERSONAL.github,               label:"GitHub" },
                { icon: Linkedin, href: PERSONAL.linkedin,             label:"LinkedIn" },
                { icon: Mail,     href:`mailto:${PERSONAL.email}`,     label:"Email" },
              ].map(({ icon:Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/50 hover:bg-gold/5 transition-all duration-200">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name:"name",  label:"Name",  type:"text",  placeholder:"Your full name",  required:true },
                { name:"email", label:"Email", type:"email", placeholder:"your@email.com",  required:true },
              ].map(f => (
                <div key={f.name}>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-semibold">{f.label}</label>
                  <input type={f.type} name={f.name} required={f.required}
                    value={form[f.name as keyof typeof form]} onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-dark-300/60 border border-gold/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-semibold">Subject</label>
              <input type="text" name="subject"
                value={form.subject} onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-dark-300/60 border border-gold/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-semibold">Message</label>
              <textarea name="message" required rows={5}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                className="w-full bg-dark-300/60 border border-gold/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>

            <button type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-dark font-bold text-sm hover:bg-gold-light transition-all duration-300 gold-glow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sent"
                ? <><CheckCircle size={16} /> Message Sent!</>
                : status === "sending"
                ? "Opening email client…"
                : <><Send size={15} /> Send Message</>
              }
            </button>

            <p className="text-gray-600 text-xs text-center">
              Or reach me directly at{" "}
              <a href={`mailto:${PERSONAL.email}`} className="text-gold/70 hover:text-gold transition-colors underline underline-offset-2">
                {PERSONAL.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
