import * as React from "react";

import { cn } from "../lib/cn";

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7"
} as const;

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-[color:var(--lg-glass-border)] border-t-[color:var(--lg-cyan)]",
        "motion-reduce:animate-none",
        sizeMap[size],
        className
      )}
      {...props}
    />
  );
}

