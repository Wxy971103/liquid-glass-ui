import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../lib/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "lg-glass inline-flex h-10 items-center justify-center rounded-lg p-1",
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition",
        "text-[color:var(--lg-muted)] data-[state=active]:text-[color:var(--lg-text)]",
        "data-[state=active]:bg-[color:var(--lg-elevated)]/60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
        "disabled:pointer-events-none disabled:opacity-50",
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

