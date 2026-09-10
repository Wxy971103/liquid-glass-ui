import * as React from "react";

import { cn } from "../lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  glass?: boolean;
};

export function Card({ className, glass = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-5",
        glass
          ? "lg-glass"
          : "bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]",
        className
      )}
      {...props}
    />
  );
}

