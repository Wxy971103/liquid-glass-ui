"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { ToastRoot, TooltipProvider } from "@liquid-glass/ui";

import { SiteNav } from "./site-nav";
import { Sidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        <ToastRoot>
          <div className="docs-shell">
            <SiteNav activeHref={pathname} onOpenSidebar={() => setSidebarOpen(true)} />

            <div className="lg-container flex gap-8">
              <div className="hidden md:block">
                <div className="sticky top-16 h-[calc(100vh-64px)]">
                  <div className="h-full border-r border-[color:var(--lg-glass-border)] pr-4">
                    <Sidebar activeHref={pathname} />
                  </div>
                </div>
              </div>

              <main className="min-w-0 flex-1 py-10">
                <div className="max-w-[920px]">{children}</div>
              </main>
            </div>

            {sidebarOpen ? (
              <div className="fixed inset-0 z-50 md:hidden">
                <button
                  className="absolute inset-0 bg-black/60"
                  aria-label="关闭侧边栏"
                  onClick={() => setSidebarOpen(false)}
                />
                <div className="absolute left-3 top-3 bottom-3 w-[min(86vw,320px)] rounded-2xl u-liquid-glass">
                  <div className="h-full overflow-auto p-2">
                    <Sidebar activeHref={pathname} className="w-full pr-0" />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </ToastRoot>
      </TooltipProvider>
    </ThemeProvider>
  );
}

