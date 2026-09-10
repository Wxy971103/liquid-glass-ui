"use client";

import Link from "next/link";
import { cn } from "@liquid-glass/ui";

import { sidebarGroups } from "../lib/ia";

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="px-2 text-xs font-semibold tracking-wide text-[color:var(--lg-muted)]">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export function Sidebar({
  activeHref,
  className
}: {
  activeHref?: string;
  className?: string;
}) {
  return (
    <aside className={cn("w-[240px] shrink-0", className)}>
      <div className="h-full overflow-auto py-6 pr-3">
        <div className="space-y-6">
          {sidebarGroups.map((g) => (
            <Group key={g.title} title={g.title}>
              {g.items.map((it) => {
                const active = activeHref === it.href;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={cn(
                      "flex items-center h-9 rounded-lg px-4 text-[13px] font-medium transition",
                      "border border-[color:var(--docs-nav-item-border)] bg-[color:var(--docs-nav-item-bg)]",
                      active
                        ? "text-[color:var(--docs-nav-item-active-text)] bg-[color:var(--docs-nav-item-active-bg)] border-[color:var(--docs-nav-item-active-border)]"
                        : "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)]"
                    )}
                  >
                    {it.title}
                  </Link>
                );
              })}
            </Group>
          ))}
        </div>
      </div>
    </aside>
  );
}

