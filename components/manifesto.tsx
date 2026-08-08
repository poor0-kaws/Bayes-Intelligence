// This component receives no data and outputs the light manifesto section below the hero.
export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="scroll-mt-24 border-t border-brass/40 bg-primary px-6 py-24 text-primary-foreground sm:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-7 h-px w-12 bg-brass" aria-hidden="true" />
        <h2 className="font-serif text-6xl font-normal leading-none sm:text-7xl">
          Manifesto
        </h2>

        <div className="mt-12 flex flex-col gap-6 font-sohne text-lg leading-relaxed text-primary-foreground/70">
          <p>
            We are Imperium. We are a small team building an AI-native hedge fund
            that treats capital allocation as an engineering problem, not a
            spreadsheet ritual.
          </p>
          <p>
            Our edge is not a single strategy — it is a system. Autonomous agents
            research markets, generate hypotheses, and stress-test them against
            decades of data before a single dollar moves. Humans set the
            direction; the machine does the tireless work in between.
          </p>
          <p>
            We were founded by researchers and operators from quantitative
            trading, machine learning, and distributed systems, and we are
            building in public where it counts.{" "}
            <a
              href="#manifesto"
              className="text-primary-foreground underline decoration-brass underline-offset-4 transition-opacity hover:opacity-70"
            >
              Read the story
            </a>
            .
          </p>
        </div>

        <h3 className="mt-16 text-xl font-medium text-primary-foreground">
          The Thesis
        </h3>

        <div className="mt-6 flex flex-col gap-6 font-sohne text-lg leading-relaxed text-primary-foreground/70">
          <p>
            The problem we are working on is one of the hardest open problems in
            finance: markets are adaptive, noisy, and adversarial. Most funds
            react. We want to anticipate.
          </p>
          <p>
            The firms that win the next decade will be the ones that compound
            knowledge as fast as they compound capital. We are building the
            infrastructure — data pipelines, agentic research, and disciplined
            risk — to make that real across every market we touch.
          </p>
          <p>
            If that sounds like the work you want to do, we&apos;d love to hear
            from you.
          </p>
        </div>
      </div>
    </section>
  )
}
