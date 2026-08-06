import { GraduationCap, Award, Heart } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const testingClients = [
  'Airbnb',
  'Digital Guardian',
  'Monday.com',
  'Moon Active',
  'Lightricks',
  'Novo Nordisk',
]

export default function Recognition() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Education & Recognition
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Beyond the day job
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">Education</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                B.S. Information Technology — Saigon Technology University (2013 – 2017)
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                3rd Prize, "I'm Coder" contest, STU 2016
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-2">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <Award size={20} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Software Testing — uTest / TesterWork
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Hands-on experience across Regression, Smoke, Localization, Load, Automation,
                Payment and Functional Testing. <strong className="text-[var(--text-primary)]">Favorite Tester</strong> status
                with 6 major clients; <strong className="text-[var(--text-primary)]">Dedicated Tester</strong> for 10
                clients/enterprises including Expensify, Slack and TravelDuck. Promoted to
                <strong className="text-[var(--text-primary)]"> Test Team Lead</strong> at uTest, effective early 2026.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {testingClients.map((client) => (
                  <li
                    key={client}
                    className="rounded-full border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 text-[11px] text-[var(--text-secondary)]"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <Heart size={18} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">Hobbies:</span> Travel,
              swimming, lofi music, and continuous learning through courses and webinars.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
