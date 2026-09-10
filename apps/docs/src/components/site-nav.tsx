import Link from "next/link";
import { Droplets, Github, Menu } from "lucide-react";
import { cn } from "@liquid-glass/ui";

import { topNav } from "../lib/ia";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav({
  activeHref,
  onOpenSidebar
}: {
  activeHref?: string;
  onOpenSidebar?: () => void;
}) {
  return (
    <div className="sticky top-0 z-40">
      <div className="u-liquid-glass border-b border-[color:var(--lg-glass-border)]">
        <div className="lg-container h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSidebar}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full",
                "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:color-mix(in_oklab,var(--lg-elevated)_70%,transparent)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
                "md:hidden"
              )}
              aria-label="打开侧边栏"
            >
              <Menu className="h-4 w-4" />
            </button>

        <Link href="/" className="flex items-center gap-2">
              <span className="grid place-items-center h-9 w-9 rounded-2xl u-liquid-glass">
            <Droplets className="h-4 w-4 text-[color:var(--lg-cyan)]" />
          </span>
          <span className="font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
            Liquid Glass UI
          </span>
        </Link>
          </div>

          <div className="flex items-center gap-1">
            <nav className="hidden md:flex items-center gap-1">
            {topNav.slice(1).map((item) => {
              const active = activeHref?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm rounded-full transition",
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
            <a
              href="https://github.com/Wxy971103/liquid-glass-ui"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full",
                "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:color-mix(in_oklab,var(--lg-elevated)_70%,transparent)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]"
              )}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <ThemeToggle />
        </div>
      </div>
      </div>
    </div>
  );
}

