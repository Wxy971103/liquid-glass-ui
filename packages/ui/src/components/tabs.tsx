"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../lib/cn";

export const Tabs = TabsPrimitive.Root;

type TabsVariant = "underline" | "pill" | "glass";
const TabsVariantContext = React.createContext<TabsVariant>("glass");

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: TabsVariant }
>(({ className, variant = "glass", ...props }, ref) => {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-1",
          variant === "glass"
            ? "u-liquid-glass h-10 rounded-2xl p-1"
            : variant === "pill"
              ? "h-10 rounded-2xl bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)] p-1"
              : "h-10 border-b border-[color:var(--lg-glass-border)]",
          className
        )}
        {...props}
      />
    </TabsVariantContext.Provider>
  );
});
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(TabsVariantContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium transition",
        "text-[color:var(--lg-muted)] data-[state=active]:text-[color:var(--lg-text)]",
        variant === "underline"
          ? "rounded-none data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:left-2 data-[state=active]:after:right-2 data-[state=active]:after:-bottom-px data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[color:var(--lg-cyan)]"
          : "rounded-full data-[state=active]:bg-[color:color-mix(in_oklab,var(--lg-elevated)_78%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
        "disabled:pointer-events-none disabled:opacity-45",
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = "TabsContent";

