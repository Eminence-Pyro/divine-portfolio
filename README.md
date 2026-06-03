# ✨ Divine Moses Nnata — Personal Portfolio

> **Full-Stack Developer · IT Professional · Data Analyst**
> Dark & gold theme. Built with Next.js 14 + TypeScript + Tailwind CSS.

🔗 **Repo:** `github.com/Eminence-Pyro/divine-portfolio`
🎨 **Theme:** Deep Black `#0A0A0A` + Gold `#C9A84C`

---

## ⚡ Quick Start

```bash
git clone https://github.com/Eminence-Pyro/divine-portfolio.git
cd divine-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📸 Add Your Photos (Required)

Place these in `public/images/`:

| File | Which photo to use |
|---|---|
| `public/images/hero.jpg` | Arms-crossed suit photo (upper body, dark background) |
| `public/images/about.jpg` | Full-length suit photo (hands in pockets) |

The site will work without them but will show blank image areas.

---

## ✏️ Updating Your Content

**Everything lives in `src/lib/data.ts`** — this is the only file you need to edit for content.

What you can update:
- Name, email, phone, LinkedIn, GitHub URL
- Headline and bio text
- Stats (projects, years, fellowships)
- Projects list (add new ones, update links, set `live:` URL when deployed)
- Services / What I Do cards
- Tech stack (add/remove techs using SimpleIcons slugs)
- Experience timeline (add new roles)

---

## 📄 Add Your CV

Place your CV PDF at: `public/cv/Divine-Moses-Nnata-CV.pdf`

The "Download CV" button in the navbar and hero will link to it automatically.

---

## 📬 Upgrade the Contact Form (Optional — Recommended)

The form currently uses a `mailto:` fallback (opens the user's email app).
To get proper in-browser form submission without any backend:

1. Sign up at [emailjs.com](https://www.emailjs.com/) — free tier is sufficient
2. Create a Gmail service and an email template
   - Template variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
3. Get your **Service ID**, **Template ID**, and **Public Key**
4. Copy `.env.local.example` to `.env.local` and fill in the values
5. In `src/components/sections/Contact.tsx`, replace `handleSubmit` with:

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
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

## 🌐 Deploy to Vercel (Free)

Option A — Vercel dashboard:
1. Push the repo to GitHub (already done)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `Eminence-Pyro/divine-portfolio`
4. Click Deploy — it auto-detects Next.js

Option B — Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

Your live URL will be `https://divine-portfolio.vercel.app` (or a custom domain).

---

## 🗺️ What to Build Next (Roadmap)

| Priority | Feature | Notes |
|---|---|---|
| 🔴 High | Add hero + about photos | Drop into `public/images/` |
| 🔴 High | Update project GitHub links | Edit `src/lib/data.ts` → `PROJECTS` |
| 🔴 High | Add your CV PDF | Drop into `public/cv/` |
| 🟡 Medium | Set up EmailJS contact form | See contact form section above |
| 🟡 Medium | Add project screenshots | Replace gradient placeholders in project cards |
| 🟡 Medium | Add Certifications section | 3MTT + any others |
| 🟢 Low | Scroll-reveal animations | `react-intersection-observer` already installed |
| 🟢 Low | Custom domain | Add in Vercel project settings |
| 🟢 Low | Blog/devlog section | Use MDX or Hashnode API |
| 🟢 Low | Analytics | Vercel Analytics (free, privacy-friendly) |

---

## 📁 Project Structure

```
divine-portfolio/
├── public/
│   ├── images/
│   │   ├── hero.jpg         ← ADD (arms-crossed suit photo)
│   │   └── about.jpg        ← ADD (full-length suit photo)
│   └── cv/
│       └── Divine-Moses-Nnata-CV.pdf  ← ADD
├── src/
│   ├── app/
│   │   ├── globals.css      ← gold/dark theme, utilities
│   │   ├── layout.tsx       ← fonts, SEO metadata
│   │   └── page.tsx         ← assembles all sections
│   ├── components/
│   │   ├── Navbar.tsx       ← sticky nav, scroll tracker, mobile drawer
│   │   ├── Footer.tsx       ← links, contact, back-to-top
│   │   └── sections/
│   │       ├── Hero.tsx     ← headline, photo, stats, CTAs
│   │       ├── About.tsx    ← bio, photo, experience timeline
│   │       ├── Services.tsx ← 4 service cards
│   │       ├── Projects.tsx ← 6 projects, filter tabs, expand-on-click
│   │       ├── TechStack.tsx← 14 tech icons
│   │       └── Contact.tsx  ← form + contact details
│   └── lib/
│       └── data.ts          ← ALL CONTENT — edit this file
├── tailwind.config.ts       ← gold/dark colour tokens
└── package.json
```

---

## 🔧 Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React + SimpleIcons CDN |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Images | Next.js `<Image>` (optimised) |
| Deployment | Vercel |

---

*Built by Divine Moses Nnata — Eminence. Building Solutions. Impacting Lives.*
