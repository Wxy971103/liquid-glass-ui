"use client";

import * as React from "react";
import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Divider,
  Input
} from "@liquid-glass/ui";

export function DialogConfirmDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Solid</Button>
        </DialogTrigger>
        <DialogContent surface="solid" size="sm">
          <DialogHeader>
            <DialogTitle>Confirm action</DialogTitle>
            <DialogDescription>
              This will publish the current draft to production. Continue?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="glass">Glass</Button>
        </DialogTrigger>
        <DialogContent surface="glass" size="sm">
          <DialogHeader>
            <DialogTitle>Confirm action</DialogTitle>
            <DialogDescription>
              This will publish the current draft to production. Continue?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function DialogDestructiveDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">删除</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>删除项目？</DialogTitle>
          <DialogDescription>删除后将无法恢复。请确认你理解风险。</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost">取消</Button>
          <Button variant="destructive">确认删除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogDetailDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">查看详情</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>请求详情</DialogTitle>
          <DialogDescription>用于 detail 模式：展示关键信息与字段。</DialogDescription>
        </DialogHeader>

        <Card glass={false} className="mt-4 p-4">
          <div className="text-sm font-semibold">Order #LG-2026</div>
          <Divider className="my-3" />
          <div className="grid gap-2 text-sm">
            <Row k="状态" v="Paid" />
            <Row k="金额" v="$129.00" />
            <Row k="渠道" v="Stripe" />
            <Row k="更新时间" v="2026-09-10 02:22" />
          </div>
        </Card>

        <DialogFooter>
          <Button variant="ghost">关闭</Button>
          <Button>复制 ID</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogFormDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>打开 Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>创建记录</DialogTitle>
          <DialogDescription>用于 form 模式：在对话框内提交表单。</DialogDescription>
        </DialogHeader>

        <form
          className="mt-4 grid gap-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="grid gap-1 text-sm">
            <span className="lg-muted">名称</span>
            <Input placeholder="例如：Liquid Glass" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="lg-muted">描述</span>
            <Input placeholder="一句话说明…" />
          </label>

          <DialogFooter className="mt-2">
            <Button variant="ghost" type="button">
              取消
            </Button>
            <Button type="submit">提交</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function DialogScrollDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开 Scroll</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>滚动容器</DialogTitle>
          <DialogDescription>用于 scroll 模式：内容区可滚动，footer 固定。</DialogDescription>
        </DialogHeader>

        <div className="mt-4 max-h-[60vh] overflow-auto rounded-lg border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)]/70 p-4">
          <div className="space-y-3 text-sm">
            {Array.from({ length: 18 }).map((_, i) => (
              <p key={i} className="lg-muted">
                这是第 {i + 1} 段内容：用于模拟长文本详情、协议、或变更日志。滚动区域使用实体背景提高对比度。
              </p>
            ))}
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost">关闭</Button>
          <Button>同意</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-[color:var(--lg-muted)]">{k}</div>
      <div className="lg-code text-[color:var(--lg-text)]">{v}</div>
    </div>
  );
}

