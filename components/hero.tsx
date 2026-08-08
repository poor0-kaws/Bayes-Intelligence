// This component receives no data and outputs the first screen with Imperium's name.
export function Hero() {
  return (
    <section className="hero-glow film-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <h1
        className="animate-rise relative z-10 font-serif text-6xl font-normal leading-none text-balance sm:text-8xl md:text-9xl"
        style={{ animationDelay: "150ms", fontOpticalSizing: "auto" }}
      >
        Imperium
      </h1>
      <p
        className="animate-rise relative z-10 mt-6 font-sohne text-[14px] font-normal uppercase tracking-[0.1em] text-muted-foreground"
        style={{ animationDelay: "500ms" }}
      >
        AI-Native Hedge Fund
      </p>
    </section>
  )
}
