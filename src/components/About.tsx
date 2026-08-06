import { Cloud, Code2, Users, ClipboardList, Landmark, Target } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const focusAreas = [
  {
    icon: Code2,
    title: 'Fullstack Development',
    description:
      'End-to-end delivery across React, Vue, Laravel, Django, Spring Boot and Node — from data models to pixel-level UI.',
  },
  {
    icon: Landmark,
    title: 'Banking & Payments',
    description:
      'Core banking integration and card-issuing systems at Sacombank — CPV/CNS verification, Omnicard, and T24 synchronization.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description:
      'Leading cross-functional teams of 3–15 through the full delivery cycle — requirements, architecture, CI/CD and code review.',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    description:
      'Deployment pipelines and infrastructure on AWS, GCP and Docker, keeping releases fast and reliable.',
  },
  {
    icon: ClipboardList,
    title: 'Business Analysis',
    description:
      'Turning client requirements into clear specs and system design that ship the right thing the first time.',
  },
]

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page">
        <div
          ref={ref}
          className={visible ? 'animate-fade-up' : 'opacity-0'}
        >
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">About</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Solving hard integration problems across legacy and modern systems.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
            8+ years building and scaling web, mobile and backend systems, including
            mission-critical banking integrations — from a PHP developer at Sharing Innovation, to
            an onsite full-stack engineer at Pascalia Asia, to a team lead at Salto Vietnam
            shipping 15 client projects, and today a System Integration Specialist on Core
            Omnicard (Core Card) at Sacombank. Known for solving hard integration problems
            rather than specializing in a single stack.
          </p>

          <div className="mt-6 flex max-w-2xl gap-3 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5">
            <Target size={20} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)]">Goal:</span> transition
              into a Technical Lead role — owning architecture decisions, mentoring developers,
              and shipping high-impact products — while continuing to deepen hands-on technical
              depth.
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
