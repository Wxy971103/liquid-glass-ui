import * as React from "react";

import { cn } from "../lib/cn";

export type BadgeVariant = "default" | "cyan" | "violet" | "muted";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-[color:var(--lg-elevated)] text-[color:var(--lg-text)] border border-[color:var(--lg-glass-border)]",
  cyan:
    "bg-[color:color-mix(in_oklab,var(--lg-cyan)_18%,transparent)] text-[color:var(--lg-text)] border border-[color:color-mix(in_oklab,var(--lg-cyan)_35%,transparent)]",
  violet:
    "bg-[color:color-mix(in_oklab,var(--lg-violet)_18%,transparent)] text-[color:var(--lg-text)] border border-[color:color-mix(in_oklab,var(--lg-violet)_35%,transparent)]",
  muted:
    "bg-[color:var(--lg-elevated)] text-[color:var(--lg-muted)] border border-[color:var(--lg-glass-border)]"
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

