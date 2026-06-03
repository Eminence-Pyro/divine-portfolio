# ✨ Divine Moses Nnata — Personal Portfolio

> **Full-Stack Developer · IT Professional · Data Analyst**
> Built with Next.js 14, TypeScript, and Tailwind CSS.

🔗 **Live:** _Deploy to Vercel (see below)_
🎨 **Theme:** Deep Black + Gold (`#C9A84C`)

---

## 🚀 Quick Start (Local Dev)

```bash
git clone https://github.com/Eminence-Pyro/divine-portfolio.git
cd divine-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Add Your Photos (REQUIRED)

Place your images in `public/images/`:

| File | Usage |
|---|---|
| `public/images/hero.jpg` | Hero section (arms-crossed suit photo — black bg) |
| `public/images/about.jpg` | About section (portfolio screenshot or casual photo) |

The hero photo should be portrait-oriented and ideally have a dark background to blend with the site theme.

---

## ✏️ Customise Your Content

**All site content lives in one file:** `src/lib/data.ts`

Edit this file to update:
- Personal info (name, email, phone, location, social links)
- Stats (projects, years, fellowships)
- Services / What I Do
- Projects (add new ones, update links)
- Tech stack
- Experience / Timeline
- Nav links

No need to touch any other file for content changes.

---

## 📬 Setting Up the Contact Form (EmailJS — Free)

The contact form currently opens the user's email client via `mailto:`.
To get a proper working form that sends emails to your inbox:

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create a **Service** (Gmail recommended)
3. Create an **Email Template** — use variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Copy `.env.local.example` to `.env.local` and fill in the values
6. In `src/components/sections/Contact.tsx`, replace the `handleSubmit` function with:

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      { name: form.name, email: form.email, subject: form.subject, message: form.message },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch {
    setStatus("error");
  }
};
```

---

## 📄 Adding Your CV

Place your CV PDF at: `public/cv/Divine-Moses-Nnata-CV.pdf`

The "Download CV" button in the hero section will automatically link to it.

---

## 🌐 Deploy to Vercel (Free — Recommended)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Or connect the repo directly at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js.

Your portfolio will be live at `https://divine-portfolio.vercel.app` (or a custom domain).

---

## 🔧 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React + SimpleIcons CDN |
| Fonts | Inter (body) + Playfair Display (headings) |
| Deployment | Vercel |

---

## 🗺️ Roadmap (Things to Add)

- [ ] **Certifications section** — list your 3MTT certs, any others
- [ ] **Blog section** — short articles / devlogs (use MDX or Hashnode API)
- [ ] **Project screenshots** — replace the placeholder cards with real screenshots
- [ ] **Scroll animations** — add Framer Motion entrance animations per section (package already installed)
- [ ] **Dark/light toggle** — already have `next-themes` in dependencies
- [ ] **SEO improvements** — add `og:image` (a 1200×630 banner with your photo + name)
- [ ] **Analytics** — add Vercel Analytics or Plausible (privacy-friendly)
- [ ] **EmailJS** — replace mailto fallback with real form submission (see contact section above)
- [ ] **Smooth reveal animations** — use `react-intersection-observer` (already installed) to animate sections on scroll

---

## 📂 Project Structure

```
divine-portfolio/
├── public/
│   ├── images/
│   │   ├── hero.jpg        ← ADD THIS (your hero photo)
│   │   └── about.jpg       ← ADD THIS (your about photo)
│   └── cv/
│       └── Divine-Moses-Nnata-CV.pdf  ← ADD THIS
├── src/
│   ├── app/
│   │   ├── globals.css     ← global styles, gold theme
│   │   ├── layout.tsx      ← fonts, metadata, SEO
│   │   └── page.tsx        ← assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Services.tsx
│   │       ├── Projects.tsx
│   │       ├── TechStack.tsx
│   │       └── Contact.tsx
│   └── lib/
│       └── data.ts         ← ALL CONTENT LIVES HERE
└── tailwind.config.ts      ← gold/dark colour tokens
```

---

## 🤝 License

Personal use — built by Divine Moses Nnata.
