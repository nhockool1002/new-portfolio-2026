import { companies } from '../data/experience'
import CompanyMilestone from './CompanyMilestone'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-page">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
          Experience
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
          4 companies, 15 projects shipped
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
          Career milestones from PHP developer at Sharing Innovation, to onsite full-stack &amp;
          BA work at Pascalia Asia, to team lead at Salto Vietnam, to system integration
          specialist in core banking at Sacombank today.
        </p>

        <ol className="relative mt-12 border-l border-[var(--border)] pl-0 md:ml-4">
          {companies.map((company, index) => (
            <CompanyMilestone key={company.name} company={company} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
