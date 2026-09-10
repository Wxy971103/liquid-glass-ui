import * as React from "react";

import { cn } from "../lib/cn";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  vertical?: boolean;
};

export function Divider({ className, vertical, ...props }: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={vertical ? "vertical" : "horizontal"}
      className={cn(
        vertical
          ? "w-px h-full bg-[color:var(--lg-glass-border)]"
          : "h-px w-full bg-[color:var(--lg-glass-border)]",
        className
      )}
      {...props}
    />
  );
}

