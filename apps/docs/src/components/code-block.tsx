"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button, cn } from "@liquid-glass/ui";

export function CodeBlock({
  code,
  className
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className={cn("relative rounded-xl border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)]", className)}>
      <pre className="overflow-auto p-4 text-sm lg-code text-[color:var(--lg-text)]">
        <code>{code}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <Button variant="ghost" size="sm" onClick={onCopy} aria-label="复制代码">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="hidden sm:inline">{copied ? "已复制" : "复制"}</span>
        </Button>
      </div>
    </div>
  );
}

