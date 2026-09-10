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
                      "block rounded-xl px-3 py-2 text-sm transition",
                      active
                        ? "text-[color:var(--lg-text)] bg-[color:var(--lg-elevated)]/45"
                        : "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:var(--lg-elevated)]/30"
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

