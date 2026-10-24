import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
  ArrowUpRight,
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Smartphone,
  Target,
  Server,
  FileCode,
  Coffee,
  Cpu,
  Terminal,
  Database,
  GitBranch,
  SquareTerminal,
  Wrench,
  Download,
  FileType,
  Triangle, 
  Boxes, 
  Layers, 
  Lock, 
  CreditCard, 
  Rocket, 
  Cloud,
  Sun,
  Moon,
} from "lucide-react";

/*
  Edit guide
  ----------
  - Images: this component expects these files in your project's `public`
    folder: `/images/hanin-photo.jpg`, `/images/plano-eve.png`,
    `/images/plano-eve-mobile.png`, and `/images/beit-al-hajj.png`. All are
    included alongside this file — just copy them into `public/images/`.
  - Resume: expects `/Hanin_Al_Hajj_CV.pdf` in `public/`. Also included.
  - Photo: swap the placeholder circle in the hero for your own photo by
    replacing the commented-out <img> tag with a real `src`.
  - Content below (skills, projects, experience) is pulled from your CV —
    edit the arrays directly to update anything.
*/

const skillGroups = [
  {
    title: "Frontend & mobile",
    items: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Flutter", icon: Smartphone },
      { name: "Dart", icon: Target },
      { name: "TypeScript", icon: FileType },
      { name: "Next.js", icon: Triangle },
    ],
  },
  {
    title: "Backend & languages",
    items: [
      { name: "Laravel", icon: Server },
      { name: "PHP", icon: FileCode },
      { name: "Java", icon: Coffee },
      { name: "C++", icon: Cpu },
      { name: "Python", icon: Terminal },
      { name: "SQL", icon: Database },
      { name: "PostgreSQL", icon: Boxes },
      { name: "Prisma", icon: Layers },
      { name: "NextAuth", icon: Lock },
      { name: "Stripe API", icon: CreditCard },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: SquareTerminal },
      { name: "MySQL Workbench", icon: Wrench },
      { name: "Vercel", icon: Rocket },
      { name: "Railway", icon: Cloud },
    ],
  },
];

const projects = [
  {
  num: "01",
  title: "MK7 Services",
  tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "NextAuth", "Stripe"],
  description:
    "A full-stack e-commerce and business platform for a local retail business, with guest, customer, and admin roles. Includes a dynamic product catalog, admin-managed categories and photo uploads, checkout with card and cash/WhatsApp payment options, and an admin dashboard with sales analytics and order management.",
 github: "https://github.com/Hanin-Al-Hajj/mk7",
image: "/images/mk7.png",
},
  {
    num: "02",
    title: "Plano-eve",
    tags: ["Flutter", "Dart", "Laravel", "REST API"],
    description:
      "A cross-platform event planning solution with three user roles, real-time messaging, AI-powered budget generation, vendor coordination, task assignment, analytics, and calendar scheduling — with a Laravel REST API integrated across both web and mobile.",
    github: "https://github.com/Hanin-Al-Hajj/EventPlanningApp",
    image: "/images/plano-eve.png",
    mobileImage: "/images/plano-eve-mobile.png",
  },
  {
    num: "03",
    title: "Beit Al Hajj",
    tags: ["PHP", "Laravel", "MySQL"],
    description:
      "A full-stack e-commerce site built for my family's furniture business, supporting guest and authenticated customers with category browsing, cart, and a secure checkout flow with session management.",
    github: "https://github.com/Hanin-Al-Hajj/beit-el-hajj",
    image: "/images/beit-al-hajj.png",
  },
  {
    num: "04",
    title: "Other projects",
    tags: [],
    description:
      "A few smaller projects and coursework exercises — scripts, UI practice, and other full-stack experiments — live on my GitHub.",
    github: "https://github.com/Hanin-Al-Hajj?tab=repositories",
    image: null,
  },
];

const experience = [
  {
    role: "Frontend Development Intern",
    org: "Vast.lb",
    time: "Jan 2026 — Jun 2026",
    bullets: [
      "Built and delivered portfolio sites and landing pages with HTML, Tailwind CSS, and JavaScript to client specs.",
      "Developed around 3 full-scale React web apps plus several smaller projects for real client needs.",
      "Used Git and GitHub in a structured team workflow — branching, pull requests, merge conflicts.",
    ],
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}, [dark]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,480;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-20 bg-stone-50/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
          <a href="#home" className="font-display text-lg tracking-tight">
            Hanin <span className="text-rose-800">Al Hajj</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-body text-sm text-stone-600">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-rose-800 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
<button
  onClick={() => setDark((d) => !d)}
  aria-label="Toggle theme"
  className="text-stone-600 hover:text-rose-800 transition-colors"
>
  {dark ? <Sun size={18} /> : <Moon size={18} />}
</button>

          <button
            className="md:hidden text-stone-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-body text-sm text-stone-600 border-t border-stone-200">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-rose-800 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        
      </nav>



      <main id="home" className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Hero */}
        <section className="pt-20 md:pt-28 pb-16 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-stone-500 border border-stone-300 rounded-full px-3 py-1 mb-8 font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
              Full-stack, frontend & mobile developer — based in Lebanon
            </div>

            <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Full-stack, frontend & mobile developer.
            </h1>

            <p className="font-body text-stone-600 text-base md:text-lg mt-6 max-w-xl">
              I'm Hanin — a full-stack developer with hands-on experience
              building web apps, mobile apps, and AI-powered features from
              idea to production.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 bg-rose-800 text-stone-50 font-body text-sm px-5 py-2.5 rounded-full hover:bg-rose-900 transition-colors"
              >
                See my work
              </a>
              <a
                href="/Hanin_Al_Hajj_CV.pdf"
                download
                className="inline-flex items-center gap-1.5 border border-stone-300 text-stone-700 font-body text-sm px-5 py-2.5 rounded-full hover:border-rose-800 hover:text-rose-800 transition-colors"
              >
                <Download size={15} /> Download CV
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto md:mx-0">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-rose-100 rounded-[2rem]" />
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-[2rem] bg-stone-200 border border-stone-300 overflow-hidden">
              <img
                src="/images/hanin-photo.jpeg"
                alt="Hanin Al Hajj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t border-stone-200">
          <p className="font-body text-xs text-stone-500 mb-3">About</p>
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
            <h2 className="font-display text-2xl md:text-3xl">Who I am</h2>
            <div className="font-body text-stone-600 space-y-4 max-w-xl">
              <p>
                I'm a full-stack developer with hands-on experience building
                web apps, mobile apps, and AI-powered features — comfortable
                across Java, React, Next.js, Flutter, and Laravel.
              </p>
              <p>
                I've taken several projects from idea to finished product,
                including a full event-planning platform and an online store
                for a small local business, and previously worked as a Frontend Development Intern at Vast.lb.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Frontend dev", "Mobile apps", "Full-stack", "Prompt engineering"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-rose-800 border border-rose-200 bg-rose-50 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t border-stone-200">
          <p className="font-body text-xs text-stone-500 mb-3">Skills</p>
          <h2 className="font-display text-2xl md:text-3xl mb-10">My toolkit</h2>

          <div className="grid sm:grid-cols-3 gap-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-body text-sm text-stone-500 mb-4">{group.title}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {group.items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      title={name}
                      className="flex flex-col items-center justify-center gap-2 text-center border border-stone-200 rounded-lg py-4 px-2 hover:border-rose-800 hover:text-rose-800 text-stone-700 transition-colors"
                    >
                      <Icon size={20} strokeWidth={1.75} />
                      <span className="font-body text-[11px] leading-tight">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-16 border-t border-stone-200">
          <p className="font-body text-xs text-stone-500 mb-3">Work</p>
          <h2 className="font-display text-2xl md:text-3xl mb-10">Projects</h2>

          <div className="space-y-14">
            {projects.map((project) => (
              <article key={project.num} className="pb-14 border-b border-stone-200 last:border-b-0">
                <div className="grid md:grid-cols-[64px_1fr] gap-4 md:gap-8">
                  <span className="font-display text-2xl text-stone-300">{project.num}</span>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-body text-stone-500 border border-stone-200 rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-2">{project.title}</h3>
                    <p className="font-body text-stone-600 max-w-xl mb-4">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-sm text-rose-800 hover:text-rose-900"
                    >
                      View on GitHub <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {project.image && (
                  <div className="mt-6 md:ml-[104px] flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-stone-200">
                      <img
                        src={project.image}
                        alt={`${project.title} — web screenshot`}
                        className="w-full h-auto block"
                      />
                    </div>
                    {project.mobileImage && (
                      <div className="w-full sm:w-40 shrink-0 rounded-xl overflow-hidden border border-stone-200 mx-auto sm:mx-0">
                        <img
                          src={project.mobileImage}
                          alt={`${project.title} — mobile app screenshot`}
                          className="w-full h-auto block"
                        />
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-t border-stone-200">
          <p className="font-body text-xs text-stone-500 mb-3">Experience</p>
          <h2 className="font-display text-2xl md:text-3xl mb-10">Where I've worked</h2>

          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={job.role}
                className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 pb-8 border-b border-stone-200 last:border-b-0"
              >
                <span className="font-body text-sm text-stone-500">{job.time}</span>
                <div>
                  <h3 className="font-body text-base font-medium text-stone-900">
                    {job.role} <span className="text-rose-800">· {job.org}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="font-body text-sm text-stone-600 flex gap-2">
                        <span className="text-rose-800 mt-1">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-stone-200">
          <p className="font-body text-xs text-stone-500 mb-3">Contact</p>
          <h2 className="font-display text-2xl md:text-3xl max-w-md mb-4">
            Let's talk about your next project.
          </h2>
          <p className="font-body text-stone-600 max-w-md mb-8">
            Whether it's a project, a collaboration, or just a hello — I'd love to hear
            from you.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hanin.al.hajj999@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 font-body text-sm border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-800 hover:text-rose-800 transition-colors"
>
  <Mail size={18} /> hanin.al.hajj999@gmail.com
</a>
            <a
              href="https://github.com/Hanin-Al-Hajj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-800 hover:text-rose-800 transition-colors"
            >
              <Github size={18} /> Hanin-Al-Hajj
            </a>
            <a
              href="https://www.linkedin.com/in/hanin-al-hajj999/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-800 hover:text-rose-800 transition-colors"
            >
              <Linkedin size={18} /> Hanin Al Hajj
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-body text-xs text-stone-500">
          <span>© 2026 Hanin Al Hajj</span>
          <span>Full-Stack, Frontend & Mobile Developer</span>
        </div>
      </footer>
    </div>
  );
}