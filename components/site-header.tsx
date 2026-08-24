import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-3 transition-opacity hover:opacity-60"
          aria-label="Forsium home"
        >
          <Image
            src="/forsium-mark.png"
            alt="Forsium mark"
            width={1024}
            height={1024}
            className="h-11 w-11"
            priority
          />
          <span className="text-xl font-medium tracking-tight text-foreground">
            Forsium
          </span>
        </a>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
          <a
            href="#manifesto"
            className="text-base text-foreground transition-colors hover:text-accent"
          >
            Manifesto
          </a>
        </nav>

        <a
          href="mailto:kswaroop.hebbar@gmail.com"
          className="group inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-accent"
        >
          Contact
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  )
}
