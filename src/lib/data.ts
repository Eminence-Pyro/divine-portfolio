// ─── All site content lives here. Edit freely. ──────────────────────────────

export const PERSONAL = {
  name:          "Divine Moses Nnata",
  monogram:      "DMN",
  tagline:       "FULL-STACK DEVELOPER  ·  IT PROFESSIONAL  ·  DATA ANALYST",
  headline:      ["I BUILD. I SOLVE.", "I CREATE"],
  headlineAccent:"IMPACT.",
  subBrand:      "Eminence",
  motto:         "Building Solutions. Impacting Lives.",
  bio:
    "I'm a full-stack developer and IT professional with hands-on experience building web applications, maintaining IT systems, and analysing data that drives real-world decisions.",
  bioExtended:
    "I combine a passion for teaching with technical expertise. Whether I'm architecting a full-stack application, maintaining network infrastructure, or surfacing insights from messy data — I bring precision, creativity, and a genuine desire to solve problems that matter.",
  location: "Abia State, Nigeria",
  email:    "nnatadivine19@gmail.com",
  phone:    "+234 704 316 1642",
  github:   "https://github.com/Eminence-Pyro",
  linkedin: "https://linkedin.com/in/divine-nnata",
  cvUrl:    "/cv/Divine-Moses-Nnata-CV.pdf",
};

export const STATS = [
  { value: "10+", label: "Projects Completed",   icon: "code" },
  { value: "5+",  label: "Technologies Mastered", icon: "monitor" },
  { value: "2",   label: "3MTT Fellowships",      icon: "award" },
  { value: "3+",  label: "Years Experience",       icon: "users" },
];

export const SERVICES = [
  {
    icon:  "code-2",
    title: "Full-Stack Development",
    desc:  "Building responsive, scalable web applications — React, Next.js, Node.js, Flask, MongoDB, PostgreSQL.",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    icon:  "server",
    title: "IT Support & Systems",
    desc:  "End-to-end IT support, network administration, hardware troubleshooting, and system maintenance.",
    color: "from-purple-500/10 to-purple-600/5",
  },
  {
    icon:  "bar-chart-2",
    title: "Data Analysis",
    desc:  "Collecting, cleaning, and analysing datasets to surface actionable insights and drive smarter decisions.",
    color: "from-green-500/10 to-green-600/5",
  },
  {
    icon:  "layout",
    title: "UI/UX & Design",
    desc:  "Designing clean, user-centred interfaces that are both visually compelling and highly functional.",
    color: "from-orange-500/10 to-orange-600/5",
  },
];

export const PROJECTS = [
  {
    id:          "smartvision",
    title:       "SmartVision",
    subtitle:    "Eye Clinic Management System",
    description:
      "A full-featured clinic management system built for eye care centres. Handles patient records, appointments, consultations, prescriptions, billing, and reporting — all in one secure web platform.",
    longDesc:
      "Designed and built from the ground up to replace paper-based clinic workflows. Features role-based access (admin, doctor, receptionist), a real-time appointment dashboard, prescription management, and printable patient reports.",
    tags:     ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    category: "Full-Stack",
    github:   "https://github.com/Eminence-Pyro",
    live:     "",
    featured: true,
    status:   "In Development",
    color:    "from-cyan-500/20 to-blue-500/10",
    accent:   "#06B6D4",
    year:     "2025",
  },
  {
    id:          "innerpeace",
    title:       "InnerPeace Hub",
    subtitle:    "Mental Wellness Blog Platform",
    description:
      "A production-grade Flask blog platform built for a mental wellness brand. Features dark mode, podcast uploads via Cloudinary, comment moderation, post scheduling, PWA support, guest authors, and Sentry error monitoring.",
    longDesc:
      "Migrated database from Render to Neon (permanent free-tier Postgres). Implemented 14 features including RSS feeds, sitemap generation, AI-suggested related posts, Open Graph social previews, TOTP-based 2FA, and an admin series system.",
    tags:     ["Flask", "PostgreSQL", "Neon", "Cloudinary", "PWA", "Python"],
    category: "Full-Stack",
    github:   "https://github.com/Eminence-Pyro/InnerPeace_Hub",
    live:     "",
    featured: true,
    status:   "Live",
    color:    "from-emerald-500/20 to-teal-500/10",
    accent:   "#10B981",
    year:     "2024–2025",
  },
  {
    id:          "mednest",
    title:       "MedNest",
    subtitle:    "AI Student Hub for Health Sciences",
    description:
      "An AI-powered platform for health sciences students. Features NestMate AI (study companion powered by Groq Llama 3.3), Aura (wellness AI), real-time Supabase chatrooms, and a multi-tool academic dashboard.",
    longDesc:
      "Built on React + TypeScript + Supabase. The AI backend is a Supabase Edge Function that proxies requests to Groq's LLM API, keeping keys server-side. Includes real conversation history, auto-scroll, topic quick-cards, and a health disclaimer system.",
    tags:     ["React", "TypeScript", "Supabase", "Groq AI", "Tailwind CSS"],
    category: "Full-Stack",
    github:   "https://github.com/Eminence-Pyro/mednest",
    live:     "",
    featured: true,
    status:   "In Development",
    color:    "from-violet-500/20 to-purple-500/10",
    accent:   "#8B5CF6",
    year:     "2025–2026",
  },
  {
    id:          "task-manager",
    title:       "Task Manager App",
    subtitle:    "Full-Stack Productivity Tool",
    description:
      "A full-stack task management application with user authentication, task CRUD, priority levels, and deadline tracking. Built with React, Node.js, Express, and MongoDB.",
    longDesc:    "",
    tags:        ["React", "Node.js", "Express", "MongoDB"],
    category:    "Full-Stack",
    github:      "https://github.com/Eminence-Pyro",
    live:        "",
    featured:    false,
    status:      "Completed",
    color:       "from-amber-500/20 to-yellow-500/10",
    accent:      "#F59E0B",
    year:        "2024",
  },
  {
    id:          "data-dashboard",
    title:       "Data Insights Dashboard",
    subtitle:    "Sales & Operations Analysis",
    description:
      "Data analysis and visualisation project using Excel pivot tables, advanced charts, and statistical summaries to surface business insights from raw transactional data.",
    longDesc:    "",
    tags:        ["Excel", "Pivot Tables", "Data Visualisation", "Statistics"],
    category:    "Data Analysis",
    github:      "",
    live:        "",
    featured:    false,
    status:      "Completed",
    color:       "from-pink-500/20 to-rose-500/10",
    accent:      "#EC4899",
    year:        "2025",
  },
  {
    id:          "business-landing",
    title:       "Business Landing Page",
    subtitle:    "Responsive Frontend Build",
    description:
      "A clean, responsive business landing page with modern UI, strong call-to-action sections, and mobile-first design.",
    longDesc:    "",
    tags:        ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category:    "Frontend",
    github:      "https://github.com/Eminence-Pyro",
    live:        "",
    featured:    false,
    status:      "Completed",
    color:       "from-sky-500/20 to-blue-500/10",
    accent:      "#0EA5E9",
    year:        "2024",
  },
];

export const TECH_STACK = [
  { name: "React",        cdnSlug: "react/61DAFB"        },
  { name: "Next.js",      cdnSlug: "nextdotjs/ffffff"     },
  { name: "Node.js",      cdnSlug: "nodedotjs/5FA04E"     },
  { name: "TypeScript",   cdnSlug: "typescript/3178C6"    },
  { name: "Python",       cdnSlug: "python/3776AB"        },
  { name: "Flask",        cdnSlug: "flask/ffffff"         },
  { name: "MongoDB",      cdnSlug: "mongodb/47A248"       },
  { name: "PostgreSQL",   cdnSlug: "postgresql/4169E1"    },
  { name: "MySQL",        cdnSlug: "mysql/4479A1"         },
  { name: "Tailwind CSS", cdnSlug: "tailwindcss/06B6D4"   },
  { name: "Git",          cdnSlug: "git/F05032"           },
  { name: "Supabase",     cdnSlug: "supabase/3ECF8E"      },
  { name: "Figma",        cdnSlug: "figma/F24E1E"         },
  { name: "Postman",      cdnSlug: "postman/FF6C37"       },
];

export const EXPERIENCE = [
  {
    role:        "Computer & English Teacher",
    company:     "Secondary School, Abia State",
    period:      "2020 — Present",
    current:     true,
    description:
      "Teaching Computer Science and English Language to secondary school students. Developing digital literacy, coding fundamentals, and communication skills.",
    skills:      ["Curriculum Design", "Teaching", "Digital Literacy", "Communication"],
  },
  {
    role:        "3MTT Fellow — Data Analysis",
    company:     "3 Million Technical Talent (3MTT), Nigeria",
    period:      "2025",
    current:     false,
    description:
      "Second 3MTT fellowship cohort focused on data analysis, statistical thinking, SQL, Excel advanced techniques, and data visualisation for business decision-making.",
    skills:      ["Data Analysis", "SQL", "Excel", "Data Viz", "Statistics"],
  },
  {
    role:        "3MTT Fellow — Software Engineering",
    company:     "3 Million Technical Talent (3MTT), Nigeria",
    period:      "2024",
    current:     false,
    description:
      "Selected for Nigeria's flagship tech talent initiative. Trained in full-stack development, software engineering principles, agile methodologies, and real-world project delivery.",
    skills:      ["Full-Stack Dev", "Agile", "React", "Node.js", "Project Delivery"],
  },
];

export const CERTIFICATIONS = [
  { title: "3MTT Fellow — Software Engineering", issuer: "Federal Government of Nigeria / 3MTT", year: "2024" },
  { title: "3MTT Fellow — Data Analysis",        issuer: "Federal Government of Nigeria / 3MTT", year: "2025" },
];

export const NAV_LINKS = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];
