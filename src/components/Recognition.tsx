import { GraduationCap, Award, Heart } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

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
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className={visible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            {t.recognition.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            {t.recognition.heading}
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.recognition.educationTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {t.recognition.educationText}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                {t.recognition.educationPrize}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:col-span-2">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                <Award size={20} aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {t.recognition.testingTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {t.recognition.testingIntro}{' '}
                <strong className="text-[var(--text-primary)]">{t.recognition.favoriteTester}</strong>{' '}
                {t.recognition.testingClientsNote}{' '}
                <strong className="text-[var(--text-primary)]">{t.recognition.dedicatedTester}</strong>{' '}
                {t.recognition.testingClientsNote2}
                <strong className="text-[var(--text-primary)]"> {t.recognition.testTeamLead}</strong>{' '}
                {t.recognition.testingOutro}
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
              <span className="font-semibold text-[var(--text-primary)]">{t.recognition.hobbiesLabel}</span>{' '}
              {t.recognition.hobbiesText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
