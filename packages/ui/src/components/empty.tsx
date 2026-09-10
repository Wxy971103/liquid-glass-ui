import * as React from "react";
import { PackageOpen } from "lucide-react";

import { cn } from "../lib/cn";

export type EmptyProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export function Empty({
  className,
  title = "暂无内容",
  description = "这里暂时没有可展示的数据。",
  icon,
  ...props
}: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center gap-2 py-10",
        className
      )}
      {...props}
    >
      <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
        {icon ?? <PackageOpen className="h-5 w-5 text-[color:var(--lg-muted)]" />}
      </div>
      <div className="text-sm font-medium text-[color:var(--lg-text)]">{title}</div>
      <div className="text-sm text-[color:var(--lg-muted)] max-w-md">{description}</div>
    </div>
  );
}

