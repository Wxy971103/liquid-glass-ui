import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "../lib/cn";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-5 w-5 shrink-0 rounded-[6px]",
        "bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]",
        "data-[state=checked]:bg-[color:color-mix(in_oklab,var(--lg-cyan)_30%,var(--lg-elevated))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="grid place-items-center text-[color:var(--lg-text)]">
        <Check className="h-3.5 w-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = "Checkbox";

