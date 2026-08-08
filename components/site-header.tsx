import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1400px] items-start justify-between px-6 py-6 sm:px-10">
        {/* Top-left: brand */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-foreground" aria-hidden="true" />
            <span className="text-sm font-medium tracking-[0.2em]">IMPERIUM</span>
          </div>
          <span className="pl-4 text-[10px] font-medium tracking-[0.25em] text-muted-foreground sm:text-xs">
            AI-NATIVE HEDGE FUND
          </span>
        </div>

        {/* Top-middle: Manifesto nav link */}
        <nav className="absolute left-1/2 top-7 -translate-x-1/2">
          <a
            href="#manifesto"
            className="text-sm font-medium tracking-[0.2em] text-muted-foreground underline-offset-8 transition-colors hover:text-foreground hover:underline"
          >
            MANIFESTO
          </a>
        </nav>

        {/* Top-right: replaceable logo */}
        <div className="flex items-center">
          {/* Replace /imperium-logo.png with your own logo */}
          <Image
            src="/imperium-logo.png"
            alt="Imperium logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
        </div>
      </div>
    </header>
  )
}
