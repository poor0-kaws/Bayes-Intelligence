import type { Metadata } from "next"

import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Results | Bayes Intelligence",
  description: "Monthly investment returns from Bayes Intelligence.",
}

const monthlyReturns = [
  { month: "January", shortMonth: "Jan", value: "+7.45%", isPositive: true },
  { month: "February", shortMonth: "Feb", value: "+6.94%", isPositive: true },
  { month: "March", shortMonth: "Mar", value: "-5.75%", isPositive: false },
  { month: "April", shortMonth: "Apr", value: "+22.49%", isPositive: true },
  { month: "May", shortMonth: "May", value: "+7.98%", isPositive: true },
  { month: "June", shortMonth: "Jun", value: "+7.14%", isPositive: true },
  { month: "July", shortMonth: "Jul", value: "-12.47%", isPositive: false },
]

export default function ResultsPage() {
  return (
    <main
      id="top"
      className="relative min-h-[100dvh] bg-background text-foreground"
    >
      <SiteHeader currentPage="results" />

      <section
        aria-labelledby="results-heading"
        className="mx-auto flex min-h-[100dvh] w-full max-w-[1600px] flex-col justify-center px-5 py-28 sm:px-8"
      >
        <div className="mb-8 max-w-xl sm:mb-10">
          <h1
            id="results-heading"
            className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl"
          >
            Monthly returns
          </h1>
          <p className="mt-3 ml-0.5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Performance by month.
          </p>
        </div>

        <ul
          className="grid grid-cols-12 gap-px bg-border"
          aria-label="Monthly returns"
        >
          {monthlyReturns.map((result, index) => {
            const isBottomRow = index >= 4

            return (
              <li
                key={result.month}
                aria-label={`${result.month}: ${result.value}`}
                className={`col-span-6 min-h-36 bg-background p-5 sm:min-h-44 sm:p-6 ${
                  isBottomRow ? "md:col-span-4" : "md:col-span-3"
                } ${index === monthlyReturns.length - 1 ? "max-md:col-span-12" : ""}`}
              >
                <article className="flex h-full flex-col justify-between">
                  <h2 className="text-base font-medium tracking-[-0.02em] sm:text-lg">
                    {result.shortMonth}
                  </h2>
                  <p
                    className={`font-mono text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.05em] tabular-nums ${
                      result.isPositive ? "text-positive" : "text-destructive"
                    }`}
                  >
                    {result.value}
                  </p>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
