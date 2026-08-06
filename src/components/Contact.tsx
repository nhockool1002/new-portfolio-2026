import { Mail, Phone, Globe, ArrowUpRight } from 'lucide-react'
import { contact } from '../data/contact'
import LinkedInIcon from './icons/LinkedInIcon'

const channels = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}`, primary: true },
  { icon: Phone, label: contact.phone, href: contact.phoneHref, primary: false },
  { icon: LinkedInIcon, label: contact.linkedin, href: contact.linkedinHref, primary: false },
  { icon: Globe, label: contact.website, href: contact.websiteHref, primary: false },
]

export default function Contact() {
  return (
    <section id="contact" className="grid-glow border-t border-white/5 py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[var(--accent)] uppercase">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Let's build something together
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            Open to Technical Lead, team lead and full-stack roles. Reach out and I'll get back
            to you shortly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {channels.map(({ icon: Icon, label, href, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={
                  primary
                    ? 'inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06110f] transition-transform hover:scale-[1.03]'
                    : 'inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }
              >
                <Icon size={16} aria-hidden="true" />
                {label}
                {href.startsWith('http') && !primary && (
                  <ArrowUpRight size={14} aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
