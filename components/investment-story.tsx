"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Cpu, Network, Scale, ScanSearch } from "lucide-react"

import { AnimatedTheta } from "@/components/animated-theta"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const pillars = [
  {
    title: "Research at scale.",
    description: "AI agents expand what a lean team can research, analyze and monitor.",
    icon: ScanSearch,
    label: "RESEARCH",
  },
  {
    title: "Grounded in financial reality.",
    description:
      "We post-train models to reason from financial evidence and interpret market sentiment, bringing financial expertise and market awareness into AI research.",
    icon: Scale,
    label: "REASONING",
  },
  {
    title: "Engineering the investment process.",
    description:
      "We build our own investment systems for AI infrastructure, turning research into knowledge that compounds.",
    icon: Cpu,
    label: "SYSTEMS",
  },
  {
    title: "Long/short, with discipline.",
    description:
      "We pursue opportunities on both sides of the market, with deliberate position sizing and portfolio risk management.",
    icon: Network,
    label: "PORTFOLIO",
  },
]

export function InvestmentStory() {
  const shouldReduceMotion = useReducedMotion()
  const reveal = {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
  }

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-5 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-20 lg:min-h-[760px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-0 lg:pt-32 lg:pb-16"
      >
        <motion.div
          {...reveal}
          animate={shouldReduceMotion ? undefined : { y: [12, 0] }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-[850px]"
        >
          <h1
            id="hero-heading"
            className="max-w-[850px] text-[clamp(3.25rem,6.6vw,7rem)] leading-[1.02] font-medium tracking-[-0.065em]"
          >
            Built to compete<br />beyond our size.
          </h1>
          <a
            href="#approach"
            className={cn(buttonVariants({ variant: "default" }), "mt-9 h-12 gap-6 rounded-none px-5 text-sm")}
          >
            Explore our approach
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="relative flex min-w-0 items-center justify-center max-lg:hidden">
          <div className="absolute top-1/2 left-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 aspect-square w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/5" aria-hidden="true" />
          <AnimatedTheta />
        </div>
      </section>

      <section
        id="approach"
        aria-labelledby="approach-heading"
        className="scroll-mt-8 border-t border-border"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24">
          <motion.div
            {...reveal}
            className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-x-24 lg:gap-y-5"
          >
            <h2 id="approach-heading" className="max-w-md text-3xl leading-tight font-medium tracking-[-0.045em] sm:text-4xl">
              A lean team.<br />An institutional ambition.
            </h2>
            <dl className="grid max-w-[640px] gap-7">
              <div className="border-l border-border pl-5">
                <dt className="mb-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Traditional firms</dt>
                <dd className="text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground sm:text-xl">
                  Large teams research markets, test ideas and monitor risk.
                </dd>
              </div>
              <div className="border-l border-foreground/40 pl-5">
                <dt className="mb-2 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Our approach</dt>
                <dd className="text-lg leading-relaxed tracking-[-0.02em] sm:text-xl">
                  We believe AI helps a lean team compete with larger institutions by building that capability into software.
                </dd>
              </div>
            </dl>
          </motion.div>

          <ul className="mt-14 grid gap-px border border-border bg-border sm:mt-16 md:grid-cols-2 xl:grid-cols-4" aria-label="Our investment principles">
            {pillars.map((pillar, index) => (
              <motion.li
                key={pillar.title}
                {...reveal}
                whileInView={shouldReduceMotion ? reveal.whileInView : { y: [16, 0] }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="h-full bg-background"
              >
                <Card className="group h-full gap-7 rounded-none bg-transparent py-7 ring-0 transition-colors duration-300 hover:bg-secondary/60 sm:py-8">
                  <CardHeader className="px-6 sm:px-7">
                    <div className="mb-8 flex items-center justify-between">
                      <pillar.icon className="size-7 stroke-[1.25] transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" />
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">0{index + 1}</span>
                    </div>
                    <p className="mb-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">{pillar.label}</p>
                    <h3 className="max-w-[240px] text-xl leading-snug font-medium tracking-[-0.035em]">{pillar.title}</h3>
                  </CardHeader>
                  <CardContent className="px-6 sm:px-7">
                    <p className="text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-medium tracking-[-0.02em]">Bayes Intelligence</p>
          </div>
          <a href="mailto:kswaroop.hebbar@gmail.com" className="inline-flex w-fit items-center gap-3 text-sm underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground">
            Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  )
}
