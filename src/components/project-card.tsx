import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-glass-border bg-glass p-4 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-5">
      {project.image ? (
        <div className="overflow-hidden rounded-2xl bg-muted">
          <img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" width={1024} height={640} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-border/70 bg-surface/65">
          <div className="text-center text-muted-foreground"><ImageIcon className="mx-auto size-6 text-primary" /><p className="mt-2 text-xs">Project visual ready to add</p></div>
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{project.category}</span>
        {project.featured ? <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">Featured</span> : null}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-glass-border bg-surface/70 px-2 py-1 text-xs text-foreground/75">{technology}</span>)}
      </div>
      <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-4 text-xs text-muted-foreground">
        {project.keyPoints.map((point) => <li key={point} className="flex gap-2"><span className="text-primary">✓</span><span>{point}</span></li>)}
      </ul>
      {(project.caseStudyUrl || project.githubUrl || project.demoUrl) ? (
        <div className="mt-auto flex items-center gap-4 pt-5 text-sm font-medium">
          {project.caseStudyUrl ? <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary">Case study <ArrowUpRight className="size-4" /></a> : null}
          {project.githubUrl ? <a href={project.githubUrl} aria-label={`${project.title} on GitHub`} target="_blank" rel="noreferrer" className="ml-auto text-muted-foreground hover:text-foreground"><Github className="size-4" /></a> : null}
          {project.demoUrl ? <a href={project.demoUrl} aria-label={`${project.title} live demo`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><ArrowUpRight className="size-4" /></a> : null}
        </div>
      ) : null}
    </article>
  );
}