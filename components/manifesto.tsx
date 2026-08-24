export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="scroll-mt-20 bg-secondary px-5 py-28 text-foreground sm:px-8 sm:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.5fr_1.5fr] lg:gap-24">
        <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] text-accent sm:text-7xl">
          Manifesto
        </h2>

        <div>
          <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-5xl">
            A small team with the right tools can compete at institutional scale.
          </p>

          <div className="mt-14 grid gap-8 text-lg leading-relaxed text-foreground/65 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            <p>
              Traditional hedge funds hire large teams to research markets,
              monitor risk, and test ideas. We think the operating model can be
              smaller and faster.
            </p>
            <p>
              AI agents can gather evidence, run analysis, and challenge a thesis
              without waiting for another handoff.
            </p>
            <p>
              We build purpose-made tools into each part of the investment
              process, giving a lean team more room to think.
            </p>
            <p>
              AI strengthens the work, but it does not own the outcome. People
              make every final decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
