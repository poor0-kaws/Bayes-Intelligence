"use client"

import { motion, useReducedMotion } from "framer-motion"

const thetaStyle =
  "absolute font-serif text-[clamp(12rem,38vw,34rem)] leading-none text-foreground"

export function AnimatedTheta() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div
        className="relative flex aspect-square w-[min(82vw,72dvh)] max-w-[680px] items-center justify-center"
        aria-hidden="true"
      >
        <span className={thetaStyle}>𝜃</span>
      </div>
    )
  }

  return (
    <div
      className="relative flex aspect-square w-[min(82vw,72dvh)] max-w-[680px] items-center justify-center"
      aria-hidden="true"
    >
      <motion.span
        className={`${thetaStyle} opacity-10`}
        animate={{ x: ["-7%", "0%", "-7%"], rotate: [-2, 0, -2] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      >
        𝜃
      </motion.span>

      <motion.span
        className={`${thetaStyle} opacity-10`}
        animate={{ x: ["7%", "0%", "7%"], rotate: [2, 0, 2] }}
        transition={{
          duration: 7,
          delay: 0.3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        𝜃
      </motion.span>

      <motion.span
        className={thetaStyle}
        animate={{ scale: [0.985, 1.015, 0.985], rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      >
        𝜃
      </motion.span>
    </div>
  )
}
