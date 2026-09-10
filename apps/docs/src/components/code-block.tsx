"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button, cn } from "@liquid-glass/ui";

export function CodeBlock({
  code,
  language = "TSX",
  className
}: {
  code: string;
  language?: string;
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
    <div
      className={cn(
        "relative rounded-2xl border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-[color:var(--lg-glass-border)] px-4 py-2">
        <div className="text-xs font-semibold tracking-wide text-[color:var(--lg-muted)]">
          {language}
        </div>
        <Button variant="ghost" size="icon" onClick={onCopy} aria-label="复制代码" title="复制">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <pre className="overflow-auto p-4 text-sm lg-code text-[color:var(--lg-text)]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

