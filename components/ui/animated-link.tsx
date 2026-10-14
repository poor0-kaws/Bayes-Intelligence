// Adapted from Skiper UI skiper40 Link000. See COMPONENTS.md.
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export const AnimatedLink = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) => {
  const LinkComponent = href.startsWith("#") ? "a" : Link;
  return (
    <LinkComponent
      href={href}
      className={cn(
        "group relative flex items-center",
        className,
        "before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:h-[0.05em] before:w-full before:bg-current before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:before:origin-left hover:before:scale-x-100 focus-visible:before:scale-x-100 motion-reduce:before:transition-none",
        className,
      )}
    >
      {children}
    </LinkComponent>
  );
};
