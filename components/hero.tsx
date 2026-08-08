export function Hero() {
  return (
    <section className="hero-glow film-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <h1
        className="animate-rise relative z-10 font-serif text-6xl font-normal leading-none text-balance sm:text-8xl md:text-9xl"
        style={{ letterSpacing: "-0.025em", fontOpticalSizing: "auto" }}
      >
        Imperium
      </h1>
      <p
        className="animate-rise relative z-10 mt-6 font-sohne text-[14px] font-normal uppercase tracking-[0.1em] text-muted-foreground"
        style={{ animationDelay: "550ms" }}
      >
        AI-Native Hedge Fund
      </p>

      <a
        href="#manifesto"
        className="animate-rise absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
        style={{ animationDelay: "1000ms" }}
        aria-label="Scroll to Manifesto"
      >
        <span className="font-sohne text-[10px] font-medium uppercase tracking-[0.18em]">
          Scroll
        </span>
        <span className="h-10 w-px bg-brass/80" aria-hidden="true" />
      </a>
    </section>
  )
}
