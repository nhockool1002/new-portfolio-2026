import { companies } from '../data/experience'
import CompanyMilestone from './CompanyMilestone'
import CareerTimeline from './CareerTimeline'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-page">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
          {t.experience.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          {t.experience.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{t.experience.subheading}</p>

        <CareerTimeline companies={companies} />

        <ol className="relative mt-12 border-l border-[var(--border)] pl-0 md:ml-4">
          {companies.map((company, index) => (
            <CompanyMilestone key={company.name} company={company} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
