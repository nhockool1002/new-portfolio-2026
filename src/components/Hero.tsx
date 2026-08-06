import { ArrowDown, ArrowUpRight, Download, Mail, Phone } from 'lucide-react'
import { contact } from '../data/contact'
import LinkedInIcon from './icons/LinkedInIcon'

const stats = [
  { value: '8+', label: 'Years of experience' },
  { value: '15+', label: 'Shipped projects' },
  { value: '20+', label: 'Technologies' },
]

const quickContacts = [
  { icon: Phone, label: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: LinkedInIcon, label: contact.linkedin, href: contact.linkedinHref },
]

export default function Hero() {
  return (
    <section id="top" className="grid-glow relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="container-page">
        <p className="animate-fade-up mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-300 uppercase shadow-[0_0_24px_rgba(52,211,153,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" aria-hidden="true" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          </span>
          Open to new opportunities
        </p>

        <h1
          className="animate-fade-up flex flex-wrap items-baseline gap-x-3 max-w-3xl text-5xl leading-[1.05] font-semibold text-[var(--text-primary)] sm:text-6xl md:text-7xl"
          style={{ animationDelay: '80ms' }}
        >
          {contact.name}
          <span className="text-2xl font-medium text-[var(--text-muted)] sm:text-3xl">
            ({contact.alias})
          </span>
        </h1>

        <p
          className="accent-gradient-text animate-fade-up mt-3 max-w-2xl text-xl font-semibold sm:text-2xl md:text-3xl"
          style={{ animationDelay: '140ms' }}
        >
          {contact.title}
        </p>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          style={{ animationDelay: '200ms' }}
        >
          8+ years building and scaling web, mobile and backend systems, including
          mission-critical banking integrations. Proven track record leading cross-functional
          teams of 3–15 through the full delivery cycle — requirements, architecture, CI/CD and
          code review — across React/Vue front ends and Laravel/Python/Node.js/Spring Boot
          backends.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '260ms' }}
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06110f] transition-transform hover:scale-[1.03]"
          >
            View experience
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={contact.resumeHref}
            download="Nhut-Nguyen-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </div>

        <div
          className="animate-fade-up mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
          style={{ animationDelay: '300ms' }}
        >
          {quickContacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <Icon size={14} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>

        <dl
          className="animate-fade-up mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/5 pt-8"
          style={{ animationDelay: '340ms' }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-[var(--font-heading)] text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:block"
      >
        <ArrowDown size={22} aria-hidden="true" />
      </a>
    </section>
  )
}
