"use client";

import * as React from "react";
import { LoaderCircle } from "lucide-react";

import { cn } from "../lib/cn";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "solid" | "glass";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: InputSize;
  variant?: InputVariant;
  leadingIcon?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
};

const sizeClass: Record<InputSize, string> = {
  sm: "h-8 text-sm px-4",
  md: "h-10 text-sm px-5",
  lg: "h-12 text-base px-6"
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      size = "md",
      variant = "solid",
      leadingIcon,
      error,
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    const hasLeading = Boolean(leadingIcon);
    return (
      <div
        className={cn(
          "relative w-full",
          variant === "glass"
            ? "rounded-2xl border border-[color:var(--lg-glass-border)] shadow-[inset_0_1px_0_color-mix(in_oklab,var(--lg-text)_14%,transparent)]"
            : "rounded-2xl",
          error ? "border-[color:color-mix(in_oklab,#ff2e55_70%,var(--lg-glass-border))]" : null
        )}
      >
        <input
          ref={ref}
          type={type}
          disabled={disabled || loading}
          className={cn(
            "w-full rounded-2xl",
            "bg-[color:var(--lg-elevated)] text-[color:var(--lg-text)]",
            "border border-[color:var(--lg-glass-border)]",
            "placeholder:text-[color:var(--lg-muted)]",
            "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--lg-text)_12%,transparent)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--lg-bg)]",
            "disabled:opacity-45 disabled:pointer-events-none",
            sizeClass[size],
            hasLeading ? "pl-11" : null,
            loading ? "pr-11" : null,
            className
          )}
          {...props}
        />

        {hasLeading ? (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--lg-muted)]">
            {leadingIcon}
          </div>
        ) : null}

        {loading ? (
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[color:var(--lg-muted)]">
            <LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

