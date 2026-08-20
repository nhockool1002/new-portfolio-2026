import { Cloud, Code2, Users, ClipboardList, Landmark, Target } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const { t } = useLanguage()

  const focusAreas = [
    { icon: Code2, title: t.about.focusFullstackTitle, description: t.about.focusFullstackDesc },
    { icon: Landmark, title: t.about.focusBankingTitle, description: t.about.focusBankingDesc },
    { icon: Users, title: t.about.focusLeadershipTitle, description: t.about.focusLeadershipDesc },
    { icon: Cloud, title: t.about.focusDevopsTitle, description: t.about.focusDevopsDesc },
    { icon: ClipboardList, title: t.about.focusBaTitle, description: t.about.focusBaDesc },
  ]

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page">
        <div
          ref={ref}
          className={visible ? 'animate-fade-up' : 'opacity-0'}
        >
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">{t.about.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text-secondary)]">{t.about.paragraph}</p>

          <div className="mt-6 flex max-w-2xl gap-3 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5">
            <Target size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">{t.about.goalLabel}</span>{' '}
              {t.about.goalText}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
