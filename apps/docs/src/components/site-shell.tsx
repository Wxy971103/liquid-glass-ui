"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { ToastRoot, TooltipProvider } from "@liquid-glass/ui";

import { SiteNav } from "./site-nav";
import { Sidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        <ToastRoot>
          <SiteNav activeHref={pathname} />
          <div className="lg-container flex gap-10">
            <Sidebar activeHref={pathname} />
            <main className="min-w-0 flex-1 py-8">{children}</main>
          </div>
        </ToastRoot>
      </TooltipProvider>
    </ThemeProvider>
  );
}

