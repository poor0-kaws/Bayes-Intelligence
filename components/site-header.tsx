"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { AnimatedLink } from "@/components/ui/animated-link";
import { Button } from "@/components/ui/button";

const links = [{ href: "#thesis", label: "Our thesis" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 border-b border-border">
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
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
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
        </nav>
      )}
    </header>
  );
}
