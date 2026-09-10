import Link from "next/link";
import { Droplets } from "lucide-react";
import { cn } from "@liquid-glass/ui";

import { topNav } from "../lib/ia";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav({ activeHref }: { activeHref?: string }) {
  return (
    <div className="sticky top-0 z-40 border-b border-[color:var(--lg-glass-border)] bg-[color:var(--lg-bg)]/75 backdrop-blur">
      <div className="lg-container h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid place-items-center h-9 w-9 rounded-xl lg-glass">
            <Droplets className="h-4 w-4 text-[color:var(--lg-cyan)]" />
          </span>
          <span className="font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
            Liquid Glass UI
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="hidden md:flex items-center gap-1">
            {topNav.slice(1).map((item) => {
              const active = activeHref?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition",
                    active
                      ? "text-[color:var(--lg-text)] bg-[color:var(--lg-elevated)]/45"
                      : "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:var(--lg-elevated)]/30"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

