import type { Company } from '../data/experience'
import { accentStyles } from '../lib/accents'
import { monthIndex, parsePeriod } from '../lib/timeline'
import { useLanguage } from '../i18n/LanguageContext'
import { pick } from '../i18n/types'

export default function CareerTimeline({ companies }: { companies: Company[] }) {
  const { lang, t } = useLanguage()

  const parsed = companies.map((company) => ({ company, ...parsePeriod(company.period) }))

  const startYear = Math.min(...parsed.map((p) => p.start.year))
  const endYear = Math.max(...parsed.map((p) => p.end.year))
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

  // Anchor the axis to calendar-year boundaries so year ticks land at even
  // intervals instead of clamping against the first company's exact start month.
  const axisStart = monthIndex({ month: 1, year: startYear })
  const axisEnd = monthIndex({ month: 1, year: endYear + 1 })
  const totalMonths = Math.max(axisEnd - axisStart, 1)

  const hasPresent = parsed.some((p) => p.isPresent)

  return (
    <div className="mt-10 md:mt-12">
      <p className="text-xs font-medium text-[var(--text-muted)]">
        {t.experience.timelineLabel} · {startYear} – {hasPresent ? t.experience.present : endYear}
      </p>

      <div className="relative mt-4 h-2.5 overflow-visible rounded-full bg-white/5">
        {parsed.map(({ company, start, end }) => {
          const segStart = monthIndex(start)
          const segEnd = monthIndex(end)
          const leftPct = ((segStart - axisStart) / totalMonths) * 100
          const widthPct = Math.max(((segEnd - segStart) / totalMonths) * 100, 1.2)
          const accent = accentStyles[company.accent]

          return (
            <span
              key={company.name}
              title={`${company.name} · ${company.period}`}
              className={`absolute top-0 h-full rounded-full ${accent.dot} opacity-80 transition-opacity hover:opacity-100`}
              style={{ left: `${leftPct}%`, width: `${widthPct}%` }}
            />
          )
        })}
      </div>

      <div className="relative mt-2 h-4">
        {years.map((year, index) => {
          const leftPct = ((monthIndex({ month: 1, year }) - axisStart) / totalMonths) * 100
          const isFirst = index === 0
          const isLast = index === years.length - 1
          // With 10+ years the labels crowd on narrow screens, so thin them to
          // every other year (keeping the first/last) below the sm breakpoint.
          const hideOnMobile = years.length > 8 && !isFirst && !isLast && index % 2 !== 0
          return (
            <span
              key={year}
              className={`absolute font-[var(--font-mono)] text-[10px] text-[var(--text-muted)] ${
                isFirst ? '' : isLast ? '-translate-x-full' : '-translate-x-1/2'
              } ${hideOnMobile ? 'hidden sm:inline' : ''}`}
              style={{ left: `${leftPct}%` }}
            >
              {year}
            </span>
          )
        })}
      </div>

      <ul className="sr-only">
        {companies.map((company) => (
          <li key={company.name}>
            {company.name}: {pick(lang, company.role)}, {company.period}
          </li>
        ))}
      </ul>
    </div>
  )
}
