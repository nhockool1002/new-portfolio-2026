import { Rocket, ArrowUpRight } from 'lucide-react'
import { sideProjects } from '../data/sideProjects'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="border-y border-white/5 bg-[var(--bg-elevated)] py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Side Projects
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Built outside the day job
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Personal products shipped to real users and the open-source community, end to end.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Rocket size={18} aria-hidden="true" />
                </div>
                <h3 className="flex items-center gap-1.5 text-base font-semibold text-[var(--text-primary)]">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[var(--accent)]"
                    >
                      {project.name}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-[var(--font-mono)] text-[11px] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
