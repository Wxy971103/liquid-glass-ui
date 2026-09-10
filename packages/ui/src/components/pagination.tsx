import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "../lib/cn";
import { Button } from "./button";

export type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  siblings?: number;
  className?: string;
};

function range(start: number, end: number) {
  const out: number[] = [];
  for (let i = start; i <= end; i++) out.push(i);
  return out;
}

function getPages(page: number, pageCount: number, siblings: number) {
  const totalNumbers = siblings * 2 + 5;
  if (pageCount <= totalNumbers) return range(1, pageCount);

  const leftSibling = Math.max(page - siblings, 1);
  const rightSibling = Math.min(page + siblings, pageCount);
  const shouldShowLeftDots = leftSibling > 2;
  const shouldShowRightDots = rightSibling < pageCount - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const left = range(1, 3 + siblings * 2);
    return [...left, "dots" as const, pageCount] as const;
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const right = range(pageCount - (2 + siblings * 2), pageCount);
    return [1, "dots" as const, ...right] as const;
  }

  const middle = range(leftSibling, rightSibling);
  return [1, "dots" as const, ...middle, "dots" as const, pageCount] as const;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  siblings = 1,
  className
}: PaginationProps) {
  const items = React.useMemo(() => getPages(page, pageCount, siblings), [page, pageCount, siblings]);

  return (
    <nav className={cn("flex items-center gap-1", className)} aria-label="分页">
      <Button
        variant="ghost"
        size="sm"
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        aria-label="上一页"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {items.map((it, idx) => {
        if (it === "dots") {
          return (
            <span
              key={`dots-${idx}`}
              className="inline-flex h-9 w-9 items-center justify-center text-[color:var(--lg-muted)]"
              aria-hidden="true"
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          );
        }
        const p = it as number;
        const active = p === page;
        return (
          <Button
            key={p}
            variant={active ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onPageChange(p)}
            aria-current={active ? "page" : undefined}
          >
            {p}
          </Button>
        );
      })}

      <Button
        variant="ghost"
        size="sm"
        disabled={page >= pageCount}
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        aria-label="下一页"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}

