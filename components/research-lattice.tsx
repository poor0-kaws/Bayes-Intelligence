"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// A decorative field that slowly shifts between scattered and aligned points.
const points = Array.from({ length: 72 }, (_, index) => ({
  column: index % 9,
  row: Math.floor(index / 9),
  offsetX: ((index * 7) % 17) - 8,
  offsetY: ((index * 11) % 19) - 9,
}));

export function ResearchLattice() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();
  return (
    <div ref={ref} className="research-lattice" aria-hidden="true">
      <svg viewBox="0 0 280 240" fill="none">
        <path
          d="M32 32H248M32 112H248M32 192H248M60 16V224M140 16V224M220 16V224"
          stroke="currentColor"
          strokeOpacity=".07"
          strokeWidth=".7"
        />
        {points.map((point, index) => (
          <motion.rect
            key={index}
            x={36 + point.column * 26}
            y={26 + point.row * 26}
            width={3}
            height={3}
            rx={0.5}
            fill="currentColor"
            opacity={point.column > 5 ? 0.65 : 0.25}
            initial={false}
            animate={
              inView && !reducedMotion
                ? {
                    x: [point.offsetX, 0, point.offsetX],
                    y: [point.offsetY, 0, point.offsetY],
                    opacity: [0.25, 0.7, 0.25],
                  }
                : { x: 0, y: 0, opacity: point.column > 5 ? 0.65 : 0.25 }
            }
            transition={{
              duration: 8,
              delay: point.column * 0.09 + point.row * 0.05,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <path
          d="M20 220H260"
          stroke="currentColor"
          strokeOpacity=".14"
          strokeWidth=".7"
        />
      </svg>
    </div>
  );
}
