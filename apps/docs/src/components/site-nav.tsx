import Link from "next/link";
import { Github, Menu } from "lucide-react";
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
    <div className="sticky top-0 z-40 border-b border-[color:var(--lg-glass-border)] bg-[color:var(--lg-bg)]">
      <div className="lg-container h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
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
            <span className="h-3 w-3 rounded-full bg-[color:var(--lg-cyan)]" aria-hidden="true" />
            <span className="font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
            Liquid Glass UI
          </span>
          </Link>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="u-liquid-glass h-9 rounded-full px-1 flex items-center gap-1">
            {topNav.slice(1).map((item) => {
              const active = activeHref?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-[13px] font-semibold rounded-full transition",
                    active
                      ? "text-[color:var(--lg-cyan)]"
                      : "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="u-liquid-glass h-9 rounded-full px-1 flex items-center gap-1">
            <ThemeToggle />
            <a
              href="https://github.com/Wxy971103/liquid-glass-ui"
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full",
                "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]"
              )}
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

