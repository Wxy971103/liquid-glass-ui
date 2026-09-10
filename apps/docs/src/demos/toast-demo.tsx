"use client";

import * as React from "react";
import { Button, useToast } from "@liquid-glass/ui";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        onClick={() =>
          toast({
            title: "已保存",
            description: "你的设置已成功保存。",
            duration: 2400
          })
        }
      >
        触发 Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            title: "操作失败",
            description: "请检查网络后重试。",
            duration: 3000
          })
        }
      >
        破坏性 Toast
      </Button>
    </div>
  );
}

