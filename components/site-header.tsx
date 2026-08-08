import { ArrowUpRight } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        {/* Top-left: Imperium monogram logo */}
        <a
          href="#top"
          className="inline-flex items-center transition-opacity hover:opacity-70"
          aria-label="Imperium — home"
        >
          <img
            src="/imperium-monogram.png"
            alt="Imperium monogram"
            className="h-8 w-auto"
          />
        </a>

        {/* Top-middle: Manifesto nav link with brass accent dot */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            href="#manifesto"
            className="group flex items-center gap-2 font-sohne text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <span
              className="h-1 w-1 rounded-full bg-brass transition-transform group-hover:scale-150"
              aria-hidden="true"
            />
            Manifesto
          </a>
        </nav>

        {/* Top-right: Contact link */}
        <a
          href="#contact"
          className="group flex items-center gap-1.5 font-sohne text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-colors group-hover:text-brass"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  )
}
