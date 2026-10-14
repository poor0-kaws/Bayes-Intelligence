"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { AnimatedLink } from "@/components/ui/animated-link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links = [{ href: "#thesis", label: "Our thesis" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  return (
    <header className="relative z-30">
      <div className="site-container flex h-24 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Bayes Intelligence home"
        >
          <LogoMark />
          <span className="text-base font-medium tracking-[-0.025em] sm:text-lg">
            Bayes Intelligence
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => (
            <AnimatedLink
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </AnimatedLink>
          ))}
        </nav>
        <a
          href="mailto:kswaroop.hebbar@gmail.com"
          className="hidden items-center gap-5 rounded-full border border-border px-5 py-3 text-xs font-medium transition-colors hover:bg-secondary sm:inline-flex"
        >
          Let’s talk <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          id="mobile-menu-button"
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <Separator />
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reducedMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reducedMotion ? 0 : 0.18 }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                document.getElementById("mobile-menu-button")?.focus();
              }
            }}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full border-b border-border bg-background px-6 py-5 shadow-lg lg:hidden"
          >
            {[
              ...links,
              { href: "mailto:kswaroop.hebbar@gmail.com", label: "Let’s talk" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
