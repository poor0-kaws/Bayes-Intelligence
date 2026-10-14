"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedTheta() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="signal-art" aria-hidden="true">
      <div className="signal-grid" />
      <svg viewBox="0 0 560 500" className="signal-curves">
        <defs>
          <linearGradient id="signal-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8c9aab" stopOpacity=".3" />
            <stop offset="100%" stopColor="#8c9aab" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M20 365 C100 365 135 355 170 310 C210 260 220 135 280 135 C340 135 350 260 390 310 C425 355 460 365 540 365 L540 420 L20 420Z"
          fill="url(#signal-fill)"
        />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.path
            key={i}
            d={`M20 ${365 + i * 9} C100 ${365 + i * 9} 135 ${355 + i * 8} 170 ${310 + i * 7} C210 ${260 + i * 5} 220 ${135 + i * 13} 280 ${135 + i * 13} C340 ${135 + i * 13} 350 ${260 + i * 5} 390 ${310 + i * 7} C425 ${355 + i * 8} 460 ${365 + i * 9} 540 ${365 + i * 9}`}
            fill="none"
            stroke={i === 0 ? "#0a2342" : "#8c9aab"}
            strokeWidth={i === 0 ? 1.8 : 1}
            initial={{ opacity: 1 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: [1, 0.45, 1] }}
            transition={{ duration: 6, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
        <line
          x1="280"
          y1="80"
          x2="280"
          y2="440"
          stroke="#8c9aab"
          strokeDasharray="3 6"
          strokeOpacity=".5"
        />
        <circle
          cx="280"
          cy="135"
          r="5"
          fill="#0a2342"
          stroke="#f9fafc"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
