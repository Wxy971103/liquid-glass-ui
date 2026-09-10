import * as React from "react";
import { X } from "lucide-react";

import { cn } from "../lib/cn";

export type TagVariant = "default" | "cyan" | "violet" | "muted";

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
  closable?: boolean;
  onClose?: () => void;
};

const variants: Record<TagVariant, string> = {
  default:
    "bg-[color:var(--lg-elevated)] text-[color:var(--lg-text)] border border-[color:var(--lg-glass-border)]",
  cyan:
    "bg-[color:color-mix(in_oklab,var(--lg-cyan)_14%,transparent)] text-[color:var(--lg-text)] border border-[color:color-mix(in_oklab,var(--lg-cyan)_32%,transparent)]",
  violet:
    "bg-[color:color-mix(in_oklab,var(--lg-violet)_14%,transparent)] text-[color:var(--lg-text)] border border-[color:color-mix(in_oklab,var(--lg-violet)_32%,transparent)]",
  muted:
    "bg-[color:var(--lg-elevated)] text-[color:var(--lg-muted)] border border-[color:var(--lg-glass-border)]"
};

export function Tag({ className, variant = "default", closable, onClose, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-2 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {closable ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClose?.();
          }}
          className={cn(
            "ml-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full",
            "text-[color:var(--lg-muted)] hover:text-[color:var(--lg-text)] hover:bg-[color:var(--lg-elevated)]/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--lg-cyan)]/60"
          )}
          aria-label="关闭"
        >
          <X className="h-3 w-3" />
        </button>
      ) : null}
    </span>
  );
}

