import { useState } from 'react'
import { Building2, ChevronDown } from 'lucide-react'
import type { Company } from '../data/experience'
import { accentStyles } from '../lib/accents'
import { formatDuration } from '../lib/duration'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'
import { pick, pickList } from '../i18n/types'
import ProjectRow from './ProjectRow'

const COLLAPSED_COUNT = 3

export default function CompanyMilestone({ company, index }: { company: Company; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>()
  const [expanded, setExpanded] = useState(false)
  const { lang, t } = useLanguage()
  const accent = accentStyles[company.accent]

  const hasAdditional = (company.additionalProjects?.length ?? 0) > 0
  const soleProject = company.projects.length === 1 && !hasAdditional ? company.projects[0] : null
  const majorProjects = soleProject ? [] : company.projects
  const additionalProjects = company.additionalProjects ?? []
  const visibleAdditional = expanded ? additionalProjects : additionalProjects.slice(0, COLLAPSED_COUNT)
  const hiddenCount = additionalProjects.length - visibleAdditional.length

  return (
    <li ref={ref} className="relative pb-12 pl-16 last:pb-0 md:pl-20">
      <span
        className={`absolute top-0 left-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border-2 border-[var(--bg)] ${accent.dot} md:left-6`}
        aria-hidden="true"
      >
        <Building2 size={18} className="text-[#06110f]" />
      </span>

      <div
        className={`rounded-2xl border bg-[var(--surface)] p-6 transition-all duration-500 sm:p-7 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        } ${company.current ? accent.border : 'border-[var(--border)]'} hover:border-[var(--border-strong)]`}
        style={{ transitionDelay: `${Math.min(index, 4) * 80}ms` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <h3 className="flex items-center gap-2 font-[var(--font-heading)] text-xl font-semibold text-[var(--text-primary)]">
            {company.name}
            {company.current && (
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase ${accent.badgeBg} ${accent.badgeText}`}
              >
                {t.experience.current}
              </span>
            )}
          </h3>
          <span className="font-[var(--font-mono)] text-xs text-[var(--text-muted)]">
            {company.period.replace('Present', t.experience.present)} · {formatDuration(company.period, lang)}
          </span>
        </div>

        <p className={`mt-1.5 text-sm font-medium ${accent.text}`}>{pick(lang, company.role)}</p>

        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          {pick(lang, company.summary)}
        </p>

        {soleProject && (
          <div className="mt-5 border-t border-[var(--border)] pt-5">
            {soleProject.note && (
              <p className="text-xs leading-relaxed text-[var(--text-muted)] italic">
                {t.experience.projectsLabel} {soleProject.note}
              </p>
            )}

            {soleProject.highlights ? (
              <ul className="mt-3 space-y-1.5">
                {pickList(lang, soleProject.highlights).map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span
                      className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              pick(lang, soleProject.description) && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {pick(lang, soleProject.description)}
                </p>
              )
            )}

            <ul className="mt-4 flex flex-wrap gap-2">
              {soleProject.stack.map((tech) => (
                <li
                  key={tech}
                  className={`rounded-full px-2.5 py-1 font-[var(--font-mono)] text-[11px] ${accent.badgeBg} ${accent.badgeText}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {majorProjects.length > 0 && (
          <div className="mt-5 border-t border-[var(--border)] pt-5">
            <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase">
              {t.experience.keyProjects} ({majorProjects.length})
            </p>

            <ul className="mt-1">
              {majorProjects.map((project) => (
                <ProjectRow key={project.name} project={project} accent={company.accent} emphasized />
              ))}
            </ul>
          </div>
        )}

        {additionalProjects.length > 0 && (
          <div className="mt-5 border-t border-[var(--border)] pt-5">
            <p className="text-xs font-semibold tracking-wide text-[var(--text-muted)] uppercase">
              {t.experience.additionalEngagements} ({additionalProjects.length})
            </p>

            <ul className="mt-1">
              {visibleAdditional.map((project) => (
                <ProjectRow key={project.name} project={project} accent={company.accent} />
              ))}
            </ul>

            {hiddenCount > 0 ? (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {t.experience.showMore} {hiddenCount}{' '}
                {hiddenCount > 1 ? t.experience.moreProjects : t.experience.moreProject}
                <ChevronDown size={15} aria-hidden="true" />
              </button>
            ) : (
              expanded &&
              additionalProjects.length > COLLAPSED_COUNT && (
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {t.experience.showLess}
                  <ChevronDown size={15} className="rotate-180" aria-hidden="true" />
                </button>
              )
            )}
          </div>
        )}
      </div>
    </li>
  )
}
