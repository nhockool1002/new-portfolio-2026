import { skillGroups } from '../data/experience'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="border-y border-white/5 bg-[var(--bg-elevated)] py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Skills
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            A versatile toolbox, built project by project
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="font-[var(--font-heading)] text-sm font-semibold tracking-wide text-[var(--text-primary)] uppercase">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 font-[var(--font-mono)] text-xs text-[var(--text-secondary)]"
                    >
                      {skill}
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
