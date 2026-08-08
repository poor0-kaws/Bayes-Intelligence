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
            For decades, hedge funds have employed hundreds, if not thousands, to
            research, monitor risk, and test ideas to run their operation. We
            believe a small team can now go head-to-head against a larger company.
          </p>
          <p>
            AI agents have already reached a point where they can execute complex
            research and analysis and provide quality results that outperform an
            analyst. These capabilities will only improve over the next few
            months.
          </p>
          <p>
            We are building purpose-built tools placed into every part of our
            operation, giving our lean team insights at the speed and efficiency
            of thousands.
          </p>
          <p>
            We believe AI will strengthen our decision-making process; therefore,
            the team makes every final call.
          </p>
        </div>
      </div>
    </section>
  )
}
