"use client";

import * as React from "react";
import { Card, cn } from "@liquid-glass/ui";

import { CodeBlock } from "./code-block";

export function DemoBlock({
  title,
  description,
  code,
  children,
  className
}: {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card glass={false} className={cn("space-y-4 p-6", className)}>
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        {description ? <div className="text-sm lg-muted">{description}</div> : null}
      </div>
      <div className="rounded-2xl border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-bg)]/5 p-5">
        {children}
      </div>
      <CodeBlock code={code} />
    </Card>
  );
}

