export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-[var(--text-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Nhut Nguyen. All rights reserved.</p>
        <a href="#top" className="transition-colors hover:text-[var(--accent)]">
          Back to top
        </a>
      </div>
    </footer>
  )
}
