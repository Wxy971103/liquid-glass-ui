import * as React from "react";

import { cn } from "../lib/cn";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "lg-glass text-[color:var(--lg-text)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-[color:var(--lg-elevated)]/80 text-[color:var(--lg-text)] border border-[color:var(--lg-glass-border)] hover:bg-[color:var(--lg-elevated)]",
  outline:
    "bg-transparent text-[color:var(--lg-text)] border border-[color:var(--lg-glass-border)] hover:bg-[color:var(--lg-elevated)]/35",
  ghost:
    "bg-transparent text-[color:var(--lg-text)] hover:bg-[color:var(--lg-elevated)]/35",
  destructive:
    "bg-[color:color-mix(in_oklab,var(--lg-violet)_18%,#ff2e55_82%)] text-white hover:brightness-110 active:brightness-95"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap select-none transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

