export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-6xl font-normal leading-none tracking-tight text-balance sm:text-8xl md:text-9xl">
        Imperium
      </h1>
      <p className="mt-6 text-sm font-medium tracking-[0.35em] text-muted-foreground sm:text-base">
        AI-NATIVE HEDGE FUND
      </p>

      <a
        href="#manifesto"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to Manifesto"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <span className="h-10 w-px bg-current" aria-hidden="true" />
      </a>
    </section>
  )
}
