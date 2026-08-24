const approachItems = [
  {
    title: "Research",
    description:
      "Agents gather evidence across more sources without adding layers of handoffs.",
  },
  {
    title: "Testing",
    description:
      "Ideas face repeated checks before they reach the people making the call.",
  },
  {
    title: "Risk",
    description:
      "Purpose-built tools monitor assumptions and exposures as the work changes.",
  },
  {
    title: "Decisions",
    description:
      "AI supports the process. The team remains responsible for every final decision.",
  },
]

export function Approach() {
  return (
    <section className="bg-background px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <h2 className="max-w-xl text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-7xl">
          Scale the <span className="text-accent">research</span>, not the
          headcount.
        </h2>

        <div>
          {approachItems.map((item) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-border py-7 sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <h3 className="text-base font-medium text-accent">{item.title}</h3>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
