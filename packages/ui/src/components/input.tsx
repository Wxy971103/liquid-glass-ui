import * as React from "react";

import { cn } from "../lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 w-full rounded-md px-3 text-sm",
          "bg-[color:var(--lg-elevated)] text-[color:var(--lg-text)]",
          "border border-[color:var(--lg-glass-border)]",
          "placeholder:text-[color:var(--lg-muted)]",
          "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--lg-text)_10%,transparent)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

