import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riadh Chibani — Java Backend & AI Developer" },
      {
        name: "description",
        content:
          "Riadh Chibani — IT professional with 4 years of experience in Java backend development, data engineering, and applied AI. Spring Boot, Angular, Flutter, TensorFlow.",
      },
      { property: "og:title", content: "Riadh Chibani — Java Backend & AI Developer" },
      {
        property: "og:description",
        content:
          "4 years of Java backend and data engineering experience, now focused on AI. View projects in Spring Boot, Angular, Flutter and deep learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Multimodal AI for Cardiovascular Risk & Diabetic Retinopathy Prediction",
    image: "/images/proj-ai.png",
    tags: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
    description:
      "Designed and implemented a hybrid AI model combining retinal image analysis with structured clinical data, applying multimodal fusion to predict cardiovascular risk and diabetic retinopathy.",
  },
  {
    title: "Client Portal with Spring Boot & Angular",
    image: "/images/proj-portal.png",
    tags: ["Spring Boot", "Angular", "JWT", "PostgreSQL"],
    description:
      "Built a secure client portal integrating front-end and back-end components, with JWT authentication and PostgreSQL schemas designed to support real business operations.",
  },
  {
    title: "Dynamic Database Generator with Flutter",
    image: "/images/proj-flutter.png",
    tags: ["Flutter", "Dart", "Cross-platform"],
    description:
      "Developed a mobile feature that lets users dynamically generate custom databases across platforms, with a seamless and responsive user experience.",
  },
  {
    title: "Dynamic Web Components using lit-html",
    image: "/images/proj-web.png",
    tags: ["lit-html", "JavaScript", "Web Components"],
    description:
      "Designed lightweight, reusable web components that improve front-end rendering performance and modularity in web applications.",
  },
];

const skillGroups = [
  {
    label: "Backend & Languages",
    items: ["Java", "Spring Boot", "Drools", "Python", "SQL", "TypeScript", "JavaScript", "Dart"],
  },
  {
    label: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Preprocessing", "Model Evaluation"],
  },
  {
    label: "Front-end & Mobile",
    items: ["Angular", "Flutter", "Angular Material", "Bootstrap", "HTML", "CSS"],
  },
  {
    label: "Data Engineering & Reporting",
    items: ["SSIS", "SSRS", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "Maven", "Docker", "Jenkins", "Nexus", "Jira"],
  },
];

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "10+", label: "Technologies mastered" },
  { value: "15+", label: "Projects delivered" },
];

function Index() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const message = data.get("message");
    window.location.href = `mailto:riadh.chibani@example.com?subject=Portfolio contact from ${encodeURIComponent(
      String(email ?? "")
    )}&body=${encodeURIComponent(String(message ?? ""))}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-sm font-semibold tracking-wider text-primary">
            riadh<span className="text-foreground">.dev</span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs tracking-widest text-muted-foreground uppercase md:flex">
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a
              href="#contact"
              className="rounded-full border border-primary/40 px-4 py-1.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-16">
        <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-36">
          <div>
            <p className="animate-fade-up font-mono text-sm tracking-widest text-primary uppercase">
              Java Backend · Data Engineering · AI
            </p>
            <h1 className="animate-fade-up delay-100 mt-4 font-display text-5xl leading-[1.05] font-bold tracking-tight text-glow md:text-7xl">
              Riadh Chibani
            </h1>
            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              IT professional with 4 years of experience in Java-based software development and data
              engineering — now building expertise in AI. I turn complex ideas into functional,
              elegant solutions.
            </p>
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_var(--glow)] transition-transform hover:scale-[1.03]"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Get in touch
              </a>
            </div>
            <div className="animate-fade-up delay-400 mt-14 flex gap-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up delay-200 relative mx-auto w-64 md:w-full md:max-w-sm">
            <div
              className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle,var(--glow),transparent_70%)] blur-2xl"
              aria-hidden="true"
            />
            <img
              src="/images/profile.png"
              alt="Portrait of Riadh Chibani"
              className="relative aspect-square w-full rounded-3xl border border-border object-cover shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card px-5 py-2 font-mono text-xs whitespace-nowrap text-primary shadow-lg">
              ✦ Open to opportunities
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="font-mono text-sm tracking-widest text-primary uppercase">01 — Selected work</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Projects</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-lift group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-border bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 border-y border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-sm tracking-widest text-primary uppercase">02 — Toolbox</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Skills</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.label} className="card-lift rounded-2xl border border-border bg-card p-7">
                <h3 className="font-mono text-xs tracking-widest text-primary uppercase">{g.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <p className="font-mono text-sm tracking-widest text-primary uppercase">03 — Who I am</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">About me</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a developer who grows every day — grounded in Java and its ecosystem, with backend
            expertise and an eye on the AI horizon. I take on projects across frameworks and
            languages, and I'm passionate about data-driven solutions and continuous learning.
          </p>
          <div className="space-y-4">
            {[
              "4 years of Java-based software development & data engineering",
              "Deep learning & multimodal AI applied to real clinical problems",
              "Full-stack delivery: Spring Boot, Angular, Flutter, PostgreSQL",
              "CI/CD and enterprise tooling: Docker, Jenkins, Nexus, Jira",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-0.5 text-primary">▸</span>
                <span className="text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-border bg-surface/60">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-mono text-sm tracking-widest text-primary uppercase">04 — Say hello</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let's build something together
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm open to new opportunities and collaborations. Send a message and I'll get back to you.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-input bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none"
            />
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Your message"
              className="w-full resize-none rounded-xl border border-input bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3.5 font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_var(--glow)] transition-transform hover:scale-[1.01]"
            >
              {sent ? "Opening your email app…" : "Send message"}
            </button>
          </form>
          <div className="mt-8 flex justify-center gap-6 font-mono text-xs text-muted-foreground">
            <a
              href="https://github.com/riadhchibani"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/riadh-chibani"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Riadh Chibani — Always learning, always evolving.
      </footer>
    </div>
  );
}
