"use client";

import { type ReactNode } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AnimatedTheta } from "@/components/animated-theta";
import { LogoMark } from "@/components/logo-mark";
import { AnimatedLink } from "@/components/ui/animated-link";
import { TextureButton } from "@/components/ui/texture-button";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reducedMotion ? undefined : { y: [14, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function InvestmentStory() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="hero-heading"
        className="site-container hero-section"
      >
        <Reveal className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            Built to compete
            <br />
            beyond our size.
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-7">
            <TextureButton
              asChild
              className="inline-flex w-fit shrink-0 [&>span]:w-auto focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <a href="#thesis">
                <span className="flex items-center gap-7 py-1.5">
                  Read our thesis{" "}
                  <ArrowDown className="size-3.5" aria-hidden="true" />
                </span>
              </a>
            </TextureButton>
            <AnimatedLink
              href="mailto:kswaroop.hebbar@gmail.com"
              className="text-xs"
            >
              Start a conversation
            </AnimatedLink>
          </div>
        </Reveal>
        <Reveal className="hero-visual">
          <AnimatedTheta />
          <p className="signal-caption">
            Evidence <span aria-hidden="true">→</span> Intelligence{" "}
            <span aria-hidden="true">→</span> Decisions
          </p>
        </Reveal>
      </section>

      <section
        id="thesis"
        aria-labelledby="thesis-heading"
        className="market-thesis-section section-space border-t border-border"
      >
        <div className="site-container">
          <h2 id="thesis-heading" className="sr-only">
            Our investment thesis
          </h2>
          <Reveal className="market-thesis">
            <div className="market-thesis-context">
              <p>
                We have seen several revolutions in the financial markets over
                the decades. Advances in computer technology gave rise to
                quantitative firms, which dominated by capitalizing on the
                synergy from computing power, market data and mathematical
                models.
              </p>
              <p>
                We are now seeing a major shift. AI capabilities have reached a
                threshold where they can analyze vast amounts of information,
                test investment ideas and support decisions across financial
                markets. This shift is creating a new category of investment
                companies that combine established investment principles with
                the latest AI models.
              </p>
            </div>
            <p className="market-thesis-statement">
              We are an AI research lab first and a hedge fund second,
              post-training advanced models to uncover market edges and generate
              alpha.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="site-container pb-7 pt-10">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-center">
          <a href="#top" className="flex w-fit items-center gap-3">
            <LogoMark />
            <span className="text-sm font-medium tracking-tight">
              Bayes Intelligence
            </span>
          </a>
          <div className="flex gap-7 text-xs text-muted-foreground">
            <AnimatedLink href="#thesis">Our thesis</AnimatedLink>
            <AnimatedLink href="mailto:kswaroop.hebbar@gmail.com">
              Contact{" "}
              <ArrowUpRight className="ml-1 inline size-3" aria-hidden="true" />
            </AnimatedLink>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 text-[10px] leading-5 text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Bayes Intelligence</p>
          <p>
            This website is for informational purposes and does not constitute
            an offer to invest.
          </p>
        </div>
      </footer>
    </MotionConfig>
  );
}
