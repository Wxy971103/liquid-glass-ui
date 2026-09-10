import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "../lib/cn";

export const RadioGroup = RadioGroupPrimitive.Root;

export const RadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "h-5 w-5 shrink-0 rounded-full",
        "bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]",
        "data-[state=checked]:border-[color:color-mix(in_oklab,var(--lg-cyan)_55%,transparent)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="grid place-items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-[color:var(--lg-cyan)]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioItem.displayName = "RadioItem";

