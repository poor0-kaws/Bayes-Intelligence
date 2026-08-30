import Link from "next/link"

import { LogoMark } from "@/components/logo-mark"

type SiteHeaderProps = {
  currentPage?: "home" | "results"
}

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-60 active:translate-y-px"
          aria-label="Bayes Intelligence home"
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          <LogoMark />
          <span className="hidden text-base font-medium tracking-[-0.025em] min-[480px]:inline sm:text-lg">
            Bayes Intelligence
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-6">
            <li>
              <Link
                href="/results"
                aria-current={currentPage === "results" ? "page" : undefined}
                className="text-base font-medium tracking-[-0.025em] text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground active:translate-y-px aria-[current=page]:decoration-foreground sm:text-lg"
              >
                Results
              </Link>
            </li>
            <li>
              <a
                href="mailto:kswaroop.hebbar@gmail.com"
                className="text-base font-medium tracking-[-0.025em] text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground active:translate-y-px sm:text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
