"use client";

import * as React from "react";
import { Pagination } from "@liquid-glass/ui";

export function PaginationDemo() {
  const [page, setPage] = React.useState(1);
  return (
    <div className="space-y-3">
      <div className="text-sm lg-muted">当前页：{page}</div>
      <Pagination page={page} pageCount={24} onPageChange={setPage} />
    </div>
  );
}

