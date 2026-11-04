import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import profile from "@/assets/manikandan-profile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manikandan B — Cloud Infrastructure Support & Technical Author" },
      {
        name: "description",
        content:
          "Portfolio of Manikandan B: AWS cloud infrastructure, IT support and DITA XML technical documentation projects.",
      },
      { property: "og:title", content: "Manikandan B — Cloud Infrastructure & Technical Author" },
      {
        property: "og:description",
        content: "AWS cloud projects, IT support skills and structured technical documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "manikandanbalaji121@gmail.com";
const EMAILJS_SERVICE = "service_yzkzxa5";
const EMAILJS_TEMPLATE = "template_ym17w2a";
const EMAILJS_PUBLIC_KEY = "Y1uqGkEINyw6quP02";
const LINKEDIN = "https://linkedin.com/in/manikandan-b-132cc";
const GITHUB = "https://github.com/Mani9787";

const nav = ["Home", "About", "Skills", "Services", "Projects", "Experience", "Education", "Contact"];

const skills: { title: string; items: string[] }[] = [
  { title: "Cloud Infrastructure", items: ["Amazon EC2", "Amazon S3", "AWS IAM", "Amazon VPC", "Amazon RDS", "AWS Lambda", "API Gateway", "CloudWatch", "Textract", "Bedrock", "DynamoDB", "NAT Gateway", "Security Groups"] },
  { title: "Operating Systems", items: ["Linux", "Ubuntu", "Amazon Linux", "Windows Admin Fundamentals"] },
  { title: "Networking", items: ["TCP/IP", "DNS", "DHCP", "Subnetting", "Routing", "VPN Concepts", "Network Security"] },
  { title: "Programming & Databases", items: ["Python", "SQL", "MySQL", "Shell Scripting", "REST API Integration"] },
  { title: "Technical Authoring", items: ["DITA XML 1.3", "ASD-STE100", "Service Manuals", "SOPs & Work Instructions", "REST API Docs", "Illustrated Parts Catalog", "Engineering BOM"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Linux CLI", "Microsoft Office"] },
];

const services = [
  { icon: "☁️", title: "Cloud Infrastructure", desc: "Hands-on exposure to AWS cloud infrastructure configuration, deployment, networking, and troubleshooting.", items: ["AWS infrastructure setup", "EC2 and VPC configuration", "Cloud networking fundamentals", "Infrastructure monitoring"] },
  { icon: "🛠️", title: "IT Support", desc: "Applying technical troubleshooting, incident management, networking fundamentals, and root cause analysis.", items: ["Technical troubleshooting", "Incident management", "Linux fundamentals", "Networking support", "Root cause analysis"] },
  { icon: "📘", title: "Technical Authoring", desc: "Creating structured documentation that helps users, developers, and engineers understand systems and procedures.", items: ["Technical manuals", "SOPs and work instructions", "API documentation", "DITA XML structured content", "ASD-STE100 writing"] },
];

type Project = { cat: string; title: string; desc: string; tech: string[]; points: string[]; github?: string; live?: string; diagram: string[] };
const projects: Project[] = [
  { cat: "Cloud", title: "AWS Three-Tier Secure Web Application", desc: "Designed and deployed a secure three-tier cloud architecture using a custom AWS VPC with public and private subnets.", tech: ["EC2", "VPC", "RDS", "NAT Gateway", "Nginx", "Flask", "MySQL", "Linux"], points: ["Configured Nginx as a reverse proxy on a public EC2 instance.", "Hosted a Flask backend on a private EC2 instance.", "Secured RDS MySQL with private subnet isolation and security groups.", "Implemented password hashing and session management.", "Troubleshot NAT routing, SSH connectivity, and reverse proxy configuration."], diagram: ["Users", "Nginx · Public EC2", "Flask · Private EC2", "RDS MySQL"] },
  { cat: "Cloud", title: "Serverless AI Resume Scoring & Job Matching", desc: "Serverless AI-powered resume analysis platform that extracts resume content and evaluates candidate profiles.", tech: ["Lambda", "API Gateway", "S3", "Textract", "Bedrock", "DynamoDB", "JavaScript"], points: ["Secure direct-to-S3 uploads using pre-signed URLs.", "Asynchronous Textract for multi-page PDF extraction.", "Amazon Bedrock for AI-based resume scoring.", "REST APIs with Lambda and API Gateway.", "Structured results stored in DynamoDB."], diagram: ["S3", "Textract", "Bedrock", "Lambda + API GW", "DynamoDB"] },
  { cat: "Documentation", title: "AI Support Log Analyzer — Docs & REST API Spec", desc: "Modular technical documentation for a support log analysis system, including architecture, integration and API reference.", tech: ["DITA XML 1.3", "ASD-STE100", "REST APIs", "Lambda", "S3", "GitHub Pages"], points: ["Authored modular DITA XML documentation.", "Separated concepts, tasks, and API reference.", "Applied ASD-STE100 writing principles.", "Documented endpoints, schemas, and HTTP status codes.", "Included sample curl commands and safety cautions.", "Published using GitHub Pages."], diagram: ["Concept", "Task", "Reference", "API Spec"] },
  { cat: "Documentation", title: "Disc Brake Caliper — Service Manual & IPC", desc: "Technical service manual and Illustrated Parts Catalog for a single-piston floating disc brake caliper assembly.", tech: ["DITA XML 1.3", "ASD-STE100", "IPC", "Engineering BOM", "GitHub Pages"], points: ["Created an overhaul service manual.", "Wrote service procedures, safety cautions, and inspection checks.", "Applied ASD-STE100 principles.", "Created an assembly callout diagram.", "Mapped the diagram to an eight-item BOM table.", "Published using GitHub Pages."], github: "https://github.com/Mani9787/automotive-technical-publication", live: "https://mani9787.github.io/automotive-technical-publication/", diagram: ["Exploded View", "Callouts", "8-item BOM", "Manual"] },
  { cat: "AI", title: "AI Mobile Solution for Personalized Healthcare (2025)", desc: "AI-powered healthcare mobile app supporting personalized services through symptom analysis and intelligent backend processing.", tech: ["Android", "Python", "Flask", "BERT", "MySQL", "REST APIs"], points: ["Mobile healthcare solution using AI-based symptom analysis.", "Integrated BERT for symptom analysis.", "Built backend REST APIs using Flask.", "MySQL database for user records and responses.", "Presented at IEEE International Conference on Data Science and Business Systems."], diagram: ["Android App", "Flask API", "BERT", "MySQL"] },
];

const experience = [
  { company: "Molex India Pvt. Ltd.", role: "Production Quality Operator", place: "Bangalore, Karnataka", period: "Dec 2019 – Apr 2022", points: ["Monitored production quality and operational processes.", "Followed SOPs and work instructions.", "Performed dimensional inspection and first-piece checking.", "Conducted root cause analysis on component deviations.", "Maintained operational documentation and quality reports.", "Collaborated with engineering and production teams to resolve issues."] },
  { company: "TVS Motor Company Pvt. Ltd.", role: "Engineering Services Group — Quality", place: "Hosur, Tamil Nadu", period: "Sep 2017 – May 2019", points: ["Managed Quality Job Orders and workflow tracking in SAP QM/PP.", "Performed quality inspection and parameter validation.", "Applied engineering drawings, tolerances, and specifications.", "Conducted CMM auditing using Zeiss Calypso.", "Performed root cause analysis and data validation.", "Maintained inspection reports and incident logs."] },
];

const certs = [
  { t: "AWS re/Start Graduate", o: "Cloud Computing & Infrastructure", y: "2026" },
  { t: "CCNAv7 Introduction to Networks", o: "Cisco Networking Academy", y: "2024" },
  { t: "Introduction to Cloud Computing", o: "Infosys Springboard", y: "2024" },
  { t: "IBM Python for Data Science", o: "Etrain Education", y: "2025" },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const btnOrange = "inline-flex items-center justify-center gap-2 rounded-full bg-highlight px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-cta transition hover:-translate-y-0.5";
const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5";
const btnOutline = "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary";

function Index() {
  const [menu, setMenu] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<"ok" | "err" | null>(null);
  const shown = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 bg-primary/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-extrabold text-primary-foreground">
            Manikandan<span className="text-highlight">.</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-sm font-medium text-primary-foreground/80 transition hover:text-highlight">
                {n}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setResumeOpen(true)} className={`${btnOrange} hidden px-5 py-2.5 sm:inline-flex`}>
              Download CV
            </button>
            <button onClick={() => setMenu(!menu)} className="text-2xl text-primary-foreground lg:hidden" aria-label="Menu">
              ☰
            </button>
          </div>
        </div>
        {menu && (
          <div className="flex flex-col gap-1 border-t border-primary-foreground/10 px-6 pb-4 lg:hidden">
            {nav.map((n) => (
              <a key={n} onClick={() => setMenu(false)} href={`#${n.toLowerCase()}`} className="py-2 text-primary-foreground/90">
                {n}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="topo-bg relative bg-primary pt-28 text-primary-foreground">
        <div className="absolute left-6 top-40 hidden flex-col gap-4 2xl:flex">
          {[0, 1, 2, 3, 4].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-primary-foreground/80" />)}
        </div>
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-6 md:grid-cols-2">
          <div className="fade-up pb-20 md:pb-28">
            <p className="font-semibold text-highlight">Hello, I'm</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">Manikandan B</h1>
            <p className="mt-3 text-xl font-bold md:text-2xl">Cloud Infrastructure Support Engineer | Technical Author</p>
            <p className="mt-5 max-w-lg text-primary-foreground/80">
              B.Tech Information Technology graduate with 4 years of industrial experience, hands-on AWS cloud training, and practical experience in cloud infrastructure, technical support, and structured technical documentation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className={btnOrange}>Explore My Projects</a>
              <button onClick={() => setResumeOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-bold transition hover:bg-primary-foreground/10">
                Download Resume
              </button>
              <a href="#contact" className="text-sm font-semibold underline-offset-4 hover:underline">Let's Connect →</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["AWS", "Linux", "Networking", "Python", "DITA XML", "Technical Documentation"].map((b) => (
                <span key={b} className="rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium">{b}</span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md self-end">
            <div className="float-slow absolute -left-6 top-16 z-20 h-20 w-24 rounded-[45%] bg-highlight" />
            <div className="relative z-10 mx-auto h-[440px] w-[90%] overflow-hidden rounded-t-full bg-highlight shadow-card">
              <img src={profile.url} alt="Manikandan B" className="h-full w-full scale-105 object-cover object-top" />
            </div>
            <div className="absolute right-0 top-1/3 z-20 flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-card-foreground shadow-card">
              <span className="text-2xl font-extrabold text-primary">4+</span>
              <span className="text-xs leading-tight">Years<br />Experience</span>
            </div>
            <div className="absolute bottom-14 left-0 z-20 rounded-xl bg-card px-4 py-3 text-card-foreground shadow-card">
              <p className="text-xs text-muted-foreground">Certified</p>
              <p className="text-sm font-bold">AWS re/Start ☁️</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="topo-light py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary" />
            <div className="absolute inset-6 overflow-hidden rounded-full bg-highlight">
              <img src={profile.url} alt="" loading="lazy" className="h-full w-full scale-105 object-cover object-[center_18%]" />
            </div>
            <span className="absolute -right-2 top-6 h-6 w-6 rounded-full border-2 border-highlight" />
            <span className="absolute bottom-4 left-0 h-4 w-4 rounded-full border-2 border-primary" />
          </div>
          <div>
            <Eyebrow>About Me</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Bridging Industry, Cloud & Clear Documentation</h2>
            <p className="mt-5 text-muted-foreground">
              I am a B.Tech IT graduate with a Diploma in Automobile Engineering and 4 years of industrial experience at TVS Motor Company and Molex India. My background combines manufacturing quality operations, technical troubleshooting, engineering documentation, and IT infrastructure fundamentals.
            </p>
            <p className="mt-4 text-muted-foreground">
              I completed AWS re/Start training and built projects in AWS cloud infrastructure, serverless AI applications, and documentation using DITA XML 1.3 and ASD-STE100. I'm seeking roles in Cloud Infrastructure Support, IT Support, and Technical Authoring.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["🎓", "B.Tech IT — 8.33 CGPA", "bg-highlight-soft"],
                ["🏭", "4 years industrial experience", "bg-primary-soft"],
                ["☁️", "AWS re/Start Graduate", "bg-primary-soft"],
                ["📄", "Cloud & Documentation projects", "bg-highlight-soft"],
              ].map(([i, t, bg]) => (
                <div key={t} className={`${bg} rounded-xl p-4 text-sm font-semibold`}>
                  <span className="mr-2">{i}</span>{t}
                </div>
              ))}
            </div>
            <button onClick={() => setResumeOpen(true)} className={`${btnOrange} mt-8`}>Download CV →</button>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Skills" title="Technical Toolkit" sub="Grouped by domain — practical technologies used across training, projects and industry." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="rounded-2xl bg-card p-6 transition hover:-translate-y-1 hover:shadow-card">
                <h3 className="font-bold">{s.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Areas of Expertise" title="What I Bring to the Team" sub="Career interests backed by training, projects and industrial practice." />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, idx) => {
              const featured = idx === 1;
              return (
                <div key={s.title} className={`group rounded-2xl p-8 transition hover:-translate-y-1 ${featured ? "bg-primary text-primary-foreground shadow-card" : "bg-secondary hover:bg-primary hover:text-primary-foreground"}`}>
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className={`mt-3 text-sm ${featured ? "text-primary-foreground/80" : "text-muted-foreground group-hover:text-primary-foreground/80"}`}>{s.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.items.map((i) => <li key={i}>✓ {i}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Portfolio" title="Project Showcase" />
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {["All", "Cloud", "Documentation", "AI"].map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={f === filter ? btnPrimary : btnOutline}>{f}</button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl bg-card transition hover:-translate-y-1 hover:shadow-card">
                <div className="flex flex-wrap items-center justify-center gap-1.5 bg-primary-soft p-5 text-xs font-semibold">
                  {p.diagram.map((d, i) => (
                    <span key={d} className="flex items-center gap-1.5">
                      <span className="rounded-md bg-card px-2 py-1.5 text-primary shadow-sm">{d}</span>
                      {i < p.diagram.length - 1 && <span className="text-highlight">→</span>}
                    </span>
                  ))}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-highlight">{p.cat}</span>
                  <h3 className="mt-2 font-bold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 5).map((t) => <span key={t} className="rounded bg-secondary px-2 py-0.5 text-xs">{t}</span>)}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <button onClick={() => setOpen(p)} className={btnPrimary}>View Details</button>
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={btnOutline}>GitHub</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={btnOutline}>Live Docs</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead eyebrow="Experience" title="Industrial Journey" />
          <div className="relative space-y-10 border-l-2 border-primary/20 pl-8">
            {experience.map((e) => (
              <div key={e.company} className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-highlight" />
                <div className="rounded-2xl bg-secondary p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold">{e.company}</h3>
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-primary">{e.role}</p>
                  <p className="text-xs text-muted-foreground">{e.place}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((pt) => <li key={pt}>• {pt}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section id="education" className="topo-light bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead eyebrow="Education & Certifications" title="Learning That Powers the Work" />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { d: "B.Tech — Information Technology", i: "KCG College of Technology, Chennai", p: "Aug 2022 – May 2025", s: "CGPA 8.33" },
              { d: "Diploma — Automobile Engineering", i: "Rajagopal Polytechnic College, Vellore", p: "Jun 2015 – Apr 2017", s: "89%" },
            ].map((e) => (
              <div key={e.d} className="flex gap-5 rounded-2xl bg-card p-6 shadow-card">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-2xl">🎓</div>
                <div>
                  <h3 className="font-bold">{e.d}</h3>
                  <p className="text-sm text-muted-foreground">{e.i}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{e.p}</p>
                  <span className="mt-3 inline-block rounded-full bg-highlight-soft px-3 py-1 text-xs font-bold">{e.s}</span>
                </div>
              </div>
            ))}
          </div>
          <div id="certifications" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((c) => (
              <div key={c.t} className="rounded-2xl bg-card p-6 transition hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-highlight-soft">🏅</div>
                <h4 className="mt-4 text-sm font-bold">{c.t}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{c.o}</p>
                <p className="mt-3 text-xs font-bold text-primary">{c.y}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="topo-bg rounded-3xl bg-primary p-10 text-primary-foreground">
            <Eyebrow><span className="text-highlight">Contact</span></Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold">Let's Connect</h2>
            <p className="mt-4 text-primary-foreground/80">Interested in discussing cloud infrastructure, IT support, or technical documentation opportunities? Let's connect.</p>
            <ul className="mt-8 space-y-3 text-sm">
              <li>✉️ {EMAIL}</li>
              <li>📞 +91 9787869137</li>
              <li>📍 Bangalore, Karnataka, India</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className={`${btnOrange} px-5 py-2.5`}>Email</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10">LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10">GitHub</a>
            </div>
          </div>
          <form
            className="space-y-4 rounded-3xl bg-secondary p-10"
            onSubmit={async (e) => {
              e.preventDefault();
              const formEl = e.currentTarget;
              const f = new FormData(formEl);
              setSending(true);
              setSent(null);
              try {
                await emailjs.send(
                  EMAILJS_SERVICE,
                  EMAILJS_TEMPLATE,
                  {
                    name: String(f.get("name")),
                    from_email: String(f.get("email")),
                    reply_to: String(f.get("email")),
                    subject: String(f.get("subject")),
                    message: String(f.get("message")),
                    time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                  },
                  EMAILJS_PUBLIC_KEY,
                );
                setSent("ok");
                formEl.reset();
              } catch {
                setSent("err");
              } finally {
                setSending(false);
              }
            }}
          >
            <h3 className="text-xl font-bold">Send a message</h3>
            <p className="text-xs text-muted-foreground">Delivered straight to Manikandan's inbox.</p>
            {["name", "email", "subject"].map((n) => (
              <input key={n} required name={n} type={n === "email" ? "email" : "text"} placeholder={n.charAt(0).toUpperCase() + n.slice(1)} className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            ))}
            <textarea required name="message" rows={4} placeholder="Message" className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary" />
            <button disabled={sending} className={`${btnOrange} disabled:opacity-60`}>
              {sending ? "Sending…" : "Send Message"}
            </button>
            {sent === "ok" && <p className="text-sm font-semibold text-green-600">Message sent — thank you! I'll get back to you soon.</p>}
            {sent === "err" && <p className="text-sm font-semibold text-red-600">Something went wrong. Please try again or email me directly.</p>}
          </form>
        </div>
      </section>

      <footer className="bg-primary py-8 text-center text-sm text-primary-foreground/80">
        © {new Date().getFullYear()} Manikandan B · Cloud Infrastructure & Technical Authoring
      </footer>

      {/* PROJECT MODAL */}
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/60 p-4" onClick={() => setOpen(null)}>
          <div className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-card p-8" onClick={(e) => e.stopPropagation()}>
            <span className="text-xs font-bold uppercase tracking-wider text-highlight">{open.cat}</span>
            <h3 className="mt-2 text-2xl font-extrabold">{open.title}</h3>
            <p className="mt-3 text-muted-foreground">{open.desc}</p>
            <h4 className="mt-6 font-bold">Key contributions</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              {open.points.map((pt) => <li key={pt}>✓ {pt}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {open.tech.map((t) => <span key={t} className="rounded-full bg-primary-soft px-3 py-1 text-xs text-primary">{t}</span>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {open.github && <a href={open.github} target="_blank" rel="noreferrer" className={btnOutline}>GitHub</a>}
              {open.live && <a href={open.live} target="_blank" rel="noreferrer" className={btnPrimary}>Live Documentation</a>}
              <button onClick={() => setOpen(null)} className={btnOutline}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* RESUME MODAL */}
      {resumeOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/60 p-4" onClick={() => setResumeOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-card p-8" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-extrabold">Choose a resume</h3>
            <p className="mt-2 text-sm text-muted-foreground">Pick the version that fits the role. I'll send it straight to your inbox.</p>
            <div className="mt-6 space-y-3">
              {["Cloud Infrastructure Support Resume", "Technical Author Resume"].map((r) => (
                <a key={r} href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Request: ${r}`)}`} className="block rounded-xl border border-border p-4 font-semibold transition hover:border-primary hover:bg-primary-soft">
                  📄 {r}
                </a>
              ))}
            </div>
            <button onClick={() => setResumeOpen(false)} className={`${btnOutline} mt-6`}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
