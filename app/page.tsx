import { Approach } from "@/components/approach"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"

export default function Home() {
  return (
    <div id="top" className="relative min-h-[100dvh] bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Approach />
        <Manifesto />
      </main>
    </div>
  )
}
