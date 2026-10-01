import { InvestmentStory } from "@/components/investment-story"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-[100dvh] overflow-hidden bg-background text-foreground"
    >
      <SiteHeader />

      <InvestmentStory />
    </main>
  )
}
