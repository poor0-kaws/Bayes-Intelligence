import { LogoMark } from "@/components/logo-mark"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-60 active:translate-y-px"
          aria-label="Bayesian Intelligence home"
        >
          <LogoMark />
          <span className="text-base font-medium tracking-[-0.025em] sm:text-lg">
            Bayesian Intelligence
          </span>
        </a>

        <a
          href="mailto:kswaroop.hebbar@gmail.com"
          className="text-base font-medium tracking-[-0.025em] text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground active:translate-y-px sm:text-lg"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
