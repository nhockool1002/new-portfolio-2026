import { Users } from 'lucide-react'
import type { Accent, Project } from '../data/experience'
import { accentStyles } from '../lib/accents'

export default function ProjectRow({
  project,
  accent,
  emphasized = false,
}: {
  project: Project
  accent: Accent
  emphasized?: boolean
}) {
  const styles = accentStyles[accent]

  return (
    <li className={`relative border-l border-[var(--border)] pl-6 ${emphasized ? 'py-4' : 'py-3'} last:pb-0`}>
      <span
        className={`absolute top-5 -left-[5px] h-2.5 w-2.5 rounded-full ${styles.dot}`}
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
        <h4
          className={`font-semibold text-[var(--text-primary)] ${emphasized ? 'text-base' : 'text-sm'}`}
        >
          {project.name}
        </h4>
        <span className="font-[var(--font-mono)] text-[11px] text-[var(--text-muted)]">
          {project.period}
        </span>
      </div>

      <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
        <p className={`text-xs font-medium ${styles.text}`}>{project.role}</p>
        {project.team && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${styles.badgeBg} ${styles.badgeText}`}
          >
            <Users size={10} aria-hidden="true" />
            {project.team}
          </span>
        )}
      </div>

      {project.description && (
        <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
      )}

      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className={`rounded-full px-2 py-0.5 font-[var(--font-mono)] text-[10px] ${styles.badgeBg} ${styles.badgeText}`}
          >
            {tech}
          </li>
        ))}
      </ul>
    </li>
  )
}
