import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BarChart3, Download, Github, Linkedin, Mail, Menu } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/atharva-presenting.png";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { projects } from "@/data/projects";

const navigation = ["About", "Experience", "Projects", "Skills", "Education", "Contact", "Resume"];
const skillGroups = [
  { title: "Product Analytics", items: ["Product Analytics", "Web Analytics", "A/B Testing"] },
  { title: "Data & BI", items: ["SQL", "Power BI", "Excel", "Looker Studio", "BigQuery"] },
  { title: "Tracking", items: ["GA4", "Google Tag Manager", "CustomerLabs", "CustomFit"] },
  { title: "Programming & AI", items: ["Python", "Generative AI Integration"] },
  { title: "Tools", items: ["Jira", "Google Apps Script", "GitHub", "Jupyter Notebook"] },
];

const resumeUrl = "/resume.pdf";
const contactLinks = {
  email: "co21atharvathakare@gmail.com",
  linkedIn: "https://www.linkedin.com/in/atharva-thakare1207/",
  github: "https://github.com/co21atharvathakare-gif",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atharva Thakare — Product & Data Analyst" },
      { name: "description", content: "Explore Atharva Thakare's product, data, and web analytics portfolio, experience, skills, and projects." },
      { property: "og:title", content: "Atharva Thakare — Product & Data Analyst" },
      { property: "og:description", content: "Product analytics, data analytics, web analytics, and experimentation portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return navigation.map((item) => {
    const isResume = item === "Resume";

    const link = isResume ? (
      <a
        href={resumeUrl}
        download
        onClick={() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: "resume_download",
            button_position: "HB",
          });
        }}
        className={
          mobile
            ? "border-b border-border py-4 text-lg font-medium"
            : "text-sm text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        Resume
      </a>
    ) : (
      <a
        href={`#${item.toLowerCase()}`}
        className={
          mobile
            ? "border-b border-border py-4 text-lg font-medium"
            : "text-sm text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        {item}
      </a>
    );

    return mobile ? (
      <SheetClose asChild key={item}>
        {link}
      </SheetClose>
    ) : (
      <span key={item}>{link}</span>
    );
  });
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 leading-relaxed text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

function PortfolioPage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = showAllProjects ? projects : featuredProjects;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
        <nav aria-label="Main navigation" className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-glass-border bg-glass px-4 py-3 shadow-card backdrop-blur-xl sm:px-5 md:flex md:justify-between">
          <a href="#home" className="min-w-0 truncate font-display text-sm font-semibold">Atharva Thakare<span className="text-primary">.</span></a>
          <div className="hidden items-center gap-6 md:flex"><NavLinks /></div>
              <Button asChild variant="portfolio" size="sm" className="hidden md:inline-flex"><a
  onClick={() => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: "resume_download",
    button_position: "top",
  });
}}
>
  <Download /> Resume
</a></Button>
          <Sheet>
            <SheetTrigger asChild>
  <Button
    variant="glass"
    size="icon"
    className="shrink-0 md:hidden"
    aria-label="Open navigation"
    onClick={() => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "HB",
      });
    }}
  >
    <Menu />
  </Button>
</SheetTrigger>
            <SheetContent className="border-glass-border bg-background/95 backdrop-blur-xl">
              <SheetTitle className="font-display">Atharva Thakare</SheetTitle>
              <div className="mt-8 flex flex-col"><NavLinks mobile /></div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-primary backdrop-blur-xl"><span className="size-1.5 rounded-full bg-primary" /> Product & Data Analyst</div>
            <p className="mt-6 font-display text-lg font-semibold text-primary">Hi, I’m Atharva Thakare.</p>
            <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">Turning complex data into clear product decisions.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Final-year B.E. student in Artificial Intelligence with hands-on experience in product, data, and web analytics. I work with user behavior, experimentation, tracking, and business data to turn analysis into actionable insights.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="portfolio" size="lg"><a href="#projects">View projects <ArrowDown /></a></Button>
              <Button asChild variant="glass" size="lg"><a href="#contact">Contact me <ArrowRight /></a></Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-6">
              <div><p className="font-display text-xl font-semibold">3</p><p className="mt-1 text-xs text-muted-foreground">Analytics disciplines</p></div>
              <div><p className="font-display text-xl font-semibold">10</p><p className="mt-1 text-xs text-muted-foreground">Core capabilities</p></div>
              <div><p className="font-display text-xl font-semibold">2026</p><p className="mt-1 text-xs text-muted-foreground">Industry experience</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-glass-border bg-glass p-3 shadow-card backdrop-blur-2xl"><img src={heroImage} alt="Atharva Thakare presenting on stage with a microphone" width={1200} height={1600} className="aspect-[3/4] w-full rounded-2xl object-cover object-center" /></div>
            <div className="absolute -bottom-5 left-3 rounded-2xl border border-glass-border bg-glass px-4 py-3 shadow-card backdrop-blur-xl sm:-left-5"><p className="text-[10px] uppercase text-muted-foreground">Analytical approach</p><p className="mt-1 font-display text-sm font-semibold text-primary">Measure → Learn → Improve</p></div>
          </div>
        </section>

        <section id="about" className="border-y border-border/60 bg-surface/35"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <SectionHeading eyebrow="About" title="Curious about the why behind the numbers." />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground"><p>I’m a Product and Data Analyst with hands-on experience in web analytics, experimentation, tracking, and data analysis.</p><p>During my experience at The Sleep Company, I worked with GA4, Google Tag Manager, A/B testing, dashboards, and event tracking to understand user behavior and support product and marketing decisions.</p><p>My engineering background in Artificial Intelligence gives me a technical foundation in Python, SQL, analytics, and intelligent systems.</p><p>I enjoy finding patterns in data, investigating why metrics change, and turning those findings into practical recommendations.</p></div>
        </div></section>

        <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <SectionHeading eyebrow="Experience" title="Applying analytics in a product environment." />
          <div className="mt-8 grid gap-5 rounded-3xl border border-glass-border bg-glass p-6 shadow-card backdrop-blur-xl md:grid-cols-[0.55fr_1.45fr] md:p-8">
            <div><p className="text-sm font-medium text-primary">March 2026 — August 2026</p><h3 className="mt-2 font-display text-xl font-semibold">Data Analyst Intern</h3><p className="mt-1 text-muted-foreground">The Sleep Company</p></div>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              <li className="rounded-xl bg-surface/70 p-4">Owned A/B testing for 4 collection pages, from tracking specs and 15+ GTM tags/triggers through GA4 analysis.</li>
              <li className="rounded-xl bg-surface/70 p-4">Led 8+ A/B tests using CustomFit and GA4, including tests across 495K+ users.</li>
              <li className="rounded-xl bg-surface/70 p-4">Diagnosed an Add-to-Cart drop through funnel analysis and traced it to a newly added pincode-verification step.</li>
              <li className="rounded-xl bg-surface/70 p-4">Built an Excel anomaly-detection dashboard using 14-day rolling averages across 300+ website events.</li>
              <li className="rounded-xl bg-surface/70 p-4">Built self-serve Looker Studio dashboards and automated recurring QA with Google Apps Script.</li>
              <li className="rounded-xl bg-surface/70 p-4">Managed 50+ Jira tickets across tracking, QA, and bug fixes with product, developers, and QA.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="border-y border-border/60 bg-surface/35"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><SectionHeading eyebrow="Selected work" title="Analytics case studies" intro="Projects spanning analytics, business intelligence, and AI-powered data automation." /><p className="shrink-0 text-sm text-muted-foreground">{projects.length} projects</p></div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
          {projects.length > featuredProjects.length ? <div className="mt-8 flex justify-center"><Button variant="glass" size="lg" onClick={() => setShowAllProjects((current) => !current)}>{showAllProjects ? "Show featured projects" : "View all projects"}<ArrowDown className={showAllProjects ? "rotate-180" : ""} /></Button></div> : null}
        </div></section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]"><SectionHeading eyebrow="Skills" title="An analyst’s toolkit." /><div className="grid gap-5 sm:grid-cols-2">{skillGroups.map((group) => <div key={group.title}><h3 className="font-display text-sm font-semibold text-primary">{group.title}</h3><div className="mt-2 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-xl border border-glass-border bg-glass px-3 py-2 text-sm font-medium shadow-card backdrop-blur-xl">{skill}</span>)}</div></div>)}</div></div>
        </section>

        <section id="education" className="border-y border-border/60 bg-surface/35"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <SectionHeading eyebrow="Education" title="Engineering meets analytics." />
          <div className="grid gap-4">
            <div className="rounded-3xl border border-glass-border bg-glass p-6 shadow-card backdrop-blur-xl"><p className="text-sm font-medium text-primary">September 2024 — May 2027</p><h3 className="mt-2 font-display text-xl font-semibold">Bachelor of Engineering — Artificial Intelligence</h3><p className="mt-1 text-muted-foreground">Universal College of Engineering</p></div>
            <div className="rounded-3xl border border-glass-border bg-glass p-6 shadow-card backdrop-blur-xl"><p className="text-sm font-medium text-primary">August 2021 — June 2024</p><h3 className="mt-2 font-display text-xl font-semibold">Diploma in Computer Engineering</h3><p className="mt-1 text-muted-foreground">Pravin Patil College of Engineering and Polytechnic</p></div>
          </div>
        </div></section>

        <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-6"><div className="grid gap-6 rounded-3xl border border-glass-border bg-glass p-7 shadow-card backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center md:p-10"><div><p className="text-xs font-semibold uppercase text-primary">Resume</p><h2 className="mt-2 font-display text-3xl font-semibold">Want a concise view of my experience?</h2></div><Button asChild variant="portfolio" size="lg">
          <a
            href={resumeUrl}
           download
           onClick={() => {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
              event: "resume_download",
              button_position: "bottom",
            });
           }}
          >
  <Download /> Download Resume
</a></Button></div></section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:pb-20"><div className="grid gap-8 rounded-3xl border border-glass-border bg-glass p-8 shadow-card backdrop-blur-xl md:grid-cols-[1.3fr_0.7fr] md:p-12"><div><p className="text-xs font-semibold uppercase text-primary">Contact</p><h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Let’s connect.</h2><p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">I’m open to product and data analytics opportunities, collaborations, and interesting data problems.</p></div><div className="flex flex-wrap items-center gap-3 md:justify-end">
          {contactLinks.email ? <Button asChild variant="glass" size="icon"><a href={`mailto:${contactLinks.email}`} aria-label="Email Atharva"><Mail /></a></Button> : <Button variant="glass" size="icon" disabled aria-label="Email link ready to add"><Mail /></Button>}
          {contactLinks.linkedIn ? <Button asChild variant="glass" size="icon"><a href={contactLinks.linkedIn} aria-label="Atharva on LinkedIn"><Linkedin /></a></Button> : <Button variant="glass" size="icon" disabled aria-label="LinkedIn link ready to add"><Linkedin /></Button>}
          {contactLinks.github ? <Button asChild variant="glass" size="icon"><a href={contactLinks.github} aria-label="Atharva on GitHub"><Github /></a></Button> : <Button variant="glass" size="icon" disabled aria-label="GitHub link ready to add"><Github /></Button>}
        </div></div></section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 pb-8 sm:px-6"><div className="flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Atharva Thakare</span><span className="inline-flex items-center gap-2"><BarChart3 className="size-4 text-primary" /> Product & Data Analytics Portfolio</span></div></footer>
    </div>
  );
}