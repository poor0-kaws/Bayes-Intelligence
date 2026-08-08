import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
      </main>
    </div>
  )
}
