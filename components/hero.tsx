"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown } from "lucide-react"

import { Card } from "@/components/ui/card"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden bg-black px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 lg:items-end lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
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
            NullSpace
          </h1>
          <p className="mt-8 max-w-[calc(100vw-2.5rem)] text-lg leading-relaxed text-white/65 sm:max-w-lg sm:text-xl">
            Clear thinking for a world with more information than time.
          </p>
          <a
            href="#manifesto"
            className="group mt-10 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Read the manifesto
            <ArrowDown
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <motion.div
          className="w-full max-w-md justify-self-end"
          initial={shouldReduceMotion ? false : { scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="relative aspect-square w-full rounded-none border border-white/25 bg-black p-0 shadow-none ring-0">
            <motion.div
              className="absolute left-[15%] top-[15%] h-[55%] w-[55%] border border-white"
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[15%] top-[15%] h-[25%] w-[25%] bg-white"
              animate={shouldReduceMotion ? undefined : { x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[15%] left-[44%] h-[20%] w-[20%] bg-white"
              animate={shouldReduceMotion ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.16em] text-white/45">
              Signal / Noise
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
