"use client";

// Adapts Cult UI Text Animate's staggered-word entrance. See COMPONENTS.md.
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function TextAnimate({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (
      !inView ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.span
      ref={ref}
      className="animated-text-line"
      initial={false}
      animate={controls}
      variants={{
        visible: {
          transition: { staggerChildren: 0.065, delayChildren: delay },
        },
      }}
    >
      {text.split(" ").map((word, index, words) => (
        <span key={`${word}-${index}`}>
          <span className="animated-word-mask">
            <motion.span
              className="animated-word"
              variants={{
                visible: {
                  y: ["0.65em", "0em"],
                  opacity: [0.35, 1],
                  filter: ["blur(3px)", "blur(0px)"],
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}
