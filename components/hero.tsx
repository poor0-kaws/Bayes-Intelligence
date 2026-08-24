"use client"

import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-background px-5 pb-16 pt-8 text-foreground sm:px-8 sm:pb-20 sm:pt-12">
      <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-7xl flex-col justify-between">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/50">
            AI-native hedge fund
          </p>
          <p className="max-w-sm text-base leading-relaxed text-foreground/60 sm:justify-self-end">
            We use AI to expand the research process while people remain
            responsible for every decision.
          </p>
        </div>

        <motion.h1
          className="my-16 text-[clamp(5.4rem,21vw,18rem)] font-medium leading-[0.72] tracking-[-0.08em] sm:my-20"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Forsium
        </motion.h1>

        <motion.p
          className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:ml-auto sm:text-5xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          Clear thinking for a world with{" "}
          <span className="text-accent">more information</span> than time.
        </motion.p>
      </div>
    </section>
  )
}
