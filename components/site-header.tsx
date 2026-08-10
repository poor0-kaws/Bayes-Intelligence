import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/20 bg-black">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-60"
          aria-label="NullSpace home"
        >
          <Image
            src="/nullspace-mark.png"
            alt="NullSpace mark"
            width={1024}
            height={1024}
            className="h-8 w-8"
            priority
          />
          <span className="text-base font-medium tracking-tight text-white">
            NullSpace
          </span>
        </a>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
          <a
            href="#manifesto"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Manifesto
          </a>
        </nav>

        <a
          href="mailto:kswaroop.hebbar@gmail.com"
          className="group inline-flex items-center gap-1.5 text-sm text-white transition-opacity hover:opacity-60"
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
