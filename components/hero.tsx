"use client"

import { motion, useReducedMotion } from "framer-motion"

import { Card } from "@/components/ui/card"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-black px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <motion.div
          className="min-w-0"
          initial={shouldReduceMotion ? false : { y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            AI-native hedge fund
          </p>
          <h1 className="mt-7 max-w-3xl text-6xl font-medium leading-[0.94] tracking-tight sm:text-8xl lg:text-[7.5rem]">
            Forsyn
          </h1>
          <p className="mt-8 max-w-[calc(100vw-2.5rem)] text-lg leading-relaxed text-white/65 sm:max-w-lg sm:text-xl">
            Clear thinking for a world with more information than time.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-md justify-self-end"
          initial={shouldReduceMotion ? false : { scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="relative aspect-square w-full rounded-none border border-white/20 bg-black p-0 shadow-none ring-0">
            <div className="absolute inset-[15%] border border-white/80">
              <div className="absolute inset-x-[10%] top-1/2 h-px bg-neutral-700" />
              <div className="absolute inset-y-[10%] left-1/2 w-px bg-neutral-700" />
              <div className="absolute inset-x-[10%] bottom-[14%] flex h-[58%] items-end justify-between gap-[4%]">
                <motion.div
                  className="h-[38%] w-full bg-neutral-700"
                  animate={shouldReduceMotion ? undefined : { scaleY: [1, 0.75, 1] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.div
                  className="h-[62%] w-full bg-neutral-400"
                  animate={shouldReduceMotion ? undefined : { scaleY: [1, 1.15, 1] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.div
                  className="h-[86%] w-full bg-white"
                  animate={shouldReduceMotion ? undefined : { scaleY: [1, 0.9, 1] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.div
                  className="h-[52%] w-full bg-neutral-400"
                  animate={shouldReduceMotion ? undefined : { scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
                <motion.div
                  className="h-[72%] w-full bg-neutral-700"
                  animate={shouldReduceMotion ? undefined : { scaleY: [1, 0.8, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom" }}
                />
              </div>
            </div>
            <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.16em] text-white/45">
              Signal / Noise
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
