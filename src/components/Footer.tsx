import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-[var(--text-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} Nhut Nguyen. {t.footer.rights}
        </p>
        <a href="#top" className="transition-colors hover:text-[var(--accent)]">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
