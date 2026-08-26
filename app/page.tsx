import { AnimatedTheta } from "@/components/animated-theta"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <main
      id="top"
      className="relative grid min-h-[100dvh] overflow-hidden bg-background text-foreground"
    >
      <SiteHeader />

      <section
        aria-label="Bayesian Intelligence"
        className="grid min-h-[100dvh] place-items-center px-5 py-24 sm:px-8"
      >
        <h1 className="sr-only">Bayesian Intelligence</h1>
        <AnimatedTheta />
      </section>

      <p className="absolute bottom-2 left-5 z-10 w-[calc(100%-2.5rem)] max-w-3xl text-[clamp(0.8rem,1.15vw,1.125rem)] leading-[1.35] tracking-[-0.015em] sm:bottom-3 sm:left-8">
        Bayesian Intelligence is an AI-native hedge fund solving institutional
        inefficiency.
      </p>
    </main>
  )
}
