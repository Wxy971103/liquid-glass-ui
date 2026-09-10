"use client";

import * as React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@liquid-glass/ui";

export function DialogDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>打开对话框</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认操作</DialogTitle>
          <DialogDescription>这是一个可滚动内容/表单的基础容器示例。</DialogDescription>
        </DialogHeader>

        <div className="mt-4 rounded-lg border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)]/70 p-4 text-sm lg-muted">
          这里可以放表单、详情、或 destructive confirm。你可以通过外部状态控制打开/关闭。
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>
            确认
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

