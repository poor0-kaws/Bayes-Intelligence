"use client";

import { type ReactNode } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { AnimatedLink } from "@/components/ui/animated-link";
import { Separator } from "@/components/ui/separator";
import { TextAnimate } from "@/components/ui/text-animate";
import { ResearchLattice } from "@/components/research-lattice";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={false}
      whileInView={reducedMotion ? undefined : { y: [14, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
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
            <TextAnimate text="Post-training AI" />
            <TextAnimate text="for financial markets." delay={0.18} />
          </h1>
        </Reveal>
        <ResearchLattice />
      </section>

      <Separator />
      <section
        id="thesis"
        aria-labelledby="thesis-heading"
        className="market-thesis-section section-space"
      >
        <div className="site-container">
          <h2 id="thesis-heading" className="sr-only">
            Our investment thesis
          </h2>
          <div className="market-thesis">
            <Reveal className="market-thesis-context">
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
            </Reveal>
            <Reveal className="market-thesis-statement" delay={0.15}>
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 left-0"
              />
              <p>
                We are an AI research lab first and a hedge fund second,
                post-training advanced models to uncover market edges and
                generate alpha.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="site-container pb-7 pt-10">
        <div className="flex flex-col justify-between gap-6 pb-8 sm:flex-row sm:items-center">
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
        <Separator />
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
