import { ArrowUpRight } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10">
        {/* Top-left: Imperium serif wordmark as the logo */}
        <a
          href="#top"
          className="font-serif text-xl font-medium leading-none text-foreground transition-opacity hover:opacity-70 sm:text-2xl"
          style={{ letterSpacing: "-0.01em", fontOpticalSizing: "auto" }}
        >
          Imperium
        </a>

        {/* Top-middle: Manifesto nav link with brass accent dot */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            href="#manifesto"
            className="group flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            <span
              className="h-1 w-1 rounded-full bg-brass transition-transform group-hover:scale-150"
              aria-hidden="true"
            />
            MANIFESTO
          </a>
        </nav>

        {/* Top-right: Contact link */}
        <a
          href="#contact"
          className="group flex items-center gap-1.5 text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          CONTACT
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-colors group-hover:text-brass"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  )
}
