export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        {/* Top-left: Imperium serif wordmark as the logo */}
        <a
          href="#top"
          className="font-serif text-2xl leading-none tracking-tight text-foreground transition-opacity hover:opacity-70 sm:text-3xl"
        >
          Imperium
        </a>

        {/* Top-middle: Manifesto nav link */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            href="#manifesto"
            className="text-xs font-medium tracking-[0.25em] text-muted-foreground underline-offset-8 transition-colors hover:text-foreground hover:underline sm:text-sm"
          >
            MANIFESTO
          </a>
        </nav>
      </div>
    </header>
  )
}
