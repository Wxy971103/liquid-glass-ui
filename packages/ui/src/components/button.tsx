"use client";

import * as React from "react";
import { LoaderCircle } from "lucide-react";

import { cn } from "../lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "destructive"
  | "glass"
  | "default" /* legacy */
  | "outline"; /* legacy */

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

function variantClass(variant: ButtonVariant) {
  const v: ButtonVariant =
    variant === "default" ? "primary" : variant === "outline" ? "secondary" : variant;

  switch (v) {
    case "primary":
      return "bg-[color:var(--lg-cyan)] text-[color:var(--lg-bg)] hover:brightness-105 active:brightness-95";
    case "secondary":
      return "bg-[color:var(--lg-elevated)] text-[color:var(--lg-text)] border border-[color:var(--lg-glass-border)] hover:bg-[color:color-mix(in_oklab,var(--lg-elevated)_88%,transparent)]";
    case "ghost":
      return "bg-transparent text-[color:var(--lg-text)] hover:bg-[color:color-mix(in_oklab,var(--lg-elevated)_72%,transparent)]";
    case "destructive":
      return "bg-[color:color-mix(in_oklab,#ff2e55_82%,var(--lg-violet)_18%)] text-white hover:brightness-105 active:brightness-95";
    case "glass":
      return "u-liquid-glass text-[color:var(--lg-text)] hover:brightness-110 active:brightness-95";
    default:
      return "";
  }
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 px-0"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none transition",
          "rounded-full font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
          "disabled:opacity-45 disabled:pointer-events-none",
          variantClass(variant),
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

