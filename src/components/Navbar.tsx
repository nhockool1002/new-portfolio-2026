import { useEffect, useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import { contact } from '../data/contact'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/types'

const languageOptions: { code: Lang; flag: string }[] = [
  { code: 'vi', flag: '🇻🇳' },
  { code: 'en', flag: '🇬🇧' },
  { code: 'lo', flag: '🇱🇦' },
  { code: 'ja', flag: '🇯🇵' },
]

function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={`flex items-center gap-0.5 rounded-full border border-[var(--border)] p-1 ${className}`}
    >
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          title={t.language[option.code]}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-base leading-none transition-colors ${
            lang === option.code ? 'bg-[var(--accent)]/15 ring-1 ring-[var(--accent)]/50' : 'hover:bg-white/5'
          }`}
        >
          <span aria-hidden="true">{option.flag}</span>
          <span className="sr-only">{t.language[option.code]}</span>
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#090c13]/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-3">
        <a
          href="#top"
          className="font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--text-primary)]"
        >
          NhutNM<span className="accent-gradient-text">.ID.VN</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Mail size={16} aria-hidden="true" />
            {t.nav.getInTouch}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] lg:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#090c13]/95 backdrop-blur-md lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            <LanguageSwitcher className="mb-2 w-fit" />
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 flex items-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-3 text-base font-medium text-[#06110f]"
            >
              <Mail size={18} aria-hidden="true" />
              {t.nav.getInTouch}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
