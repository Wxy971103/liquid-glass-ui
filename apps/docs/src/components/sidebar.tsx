import Link from "next/link";
import { cn } from "@liquid-glass/ui";

import { componentsNav, guideNav } from "../lib/ia";

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

export function Sidebar({ activeHref }: { activeHref?: string }) {
  return (
    <aside className="hidden lg:block w-[280px] shrink-0">
      <div className="sticky top-16 h-[calc(100vh-64px)] overflow-auto py-6 pr-3">
        <div className="space-y-6">
          <Group title="指南">
            {guideNav.map((it) => {
              const active = activeHref === it.href;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition",
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

          <Group title="组件">
            {componentsNav.map((it) => {
              const active = activeHref === it.href;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition",
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

          <Group title="主题">
            <Link
              href="/theme"
              className={cn(
                "block rounded-md px-3 py-2 text-sm transition",
                activeHref === "/theme"
                  ? "text-[color:var(--lg-text)] bg-[color:var(--lg-elevated)]/45"
                  : "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:var(--lg-elevated)]/30"
              )}
            >
              Playground
            </Link>
          </Group>
        </div>
      </div>
    </aside>
  );
}

