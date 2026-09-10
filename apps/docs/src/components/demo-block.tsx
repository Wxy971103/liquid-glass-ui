"use client";

import * as React from "react";
import { Card, Divider, cn } from "@liquid-glass/ui";

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
    <Card className={cn("space-y-4", className)}>
      <div className="space-y-1">
        <div className="text-sm font-semibold">{title}</div>
        {description ? <div className="text-sm lg-muted">{description}</div> : null}
      </div>
      <Divider />
      <div className="rounded-lg border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)]/60 p-4">
        {children}
      </div>
      <CodeBlock code={code} />
    </Card>
  );
}

