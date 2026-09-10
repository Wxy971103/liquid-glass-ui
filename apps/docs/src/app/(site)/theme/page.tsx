"use client";

import * as React from "react";
import {
  Badge,
  Button,
  Card,
  Divider,
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Switch
} from "@liquid-glass/ui";

import { useTheme } from "../../../components/theme-provider";

export default function ThemePlaygroundPage() {
  const { theme } = useTheme();
  const [blur, setBlur] = React.useState(18);
  const [sat, setSat] = React.useState(150);
  const [glassOn, setGlassOn] = React.useState(true);
  const [accent, setAccent] = React.useState("cyan");

  const style = {
    ["--lg-glass-blur" as any]: `${blur}px`,
    ["--lg-glass-saturate" as any]: `${sat}%`
  } as React.CSSProperties;

  return (
    <div className="space-y-10" style={style}>
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Theme Playground
        </h1>
        <p className="lg-muted">
          当前主题：<span className="lg-code">{theme}</span>。此页面用于调试玻璃参数与 token 覆盖方式（不改变库默认值）。
        </p>
      </header>

      <Card glass={false} className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold">玻璃参数（CSS Variables）</div>
          <div className="flex items-center gap-2 text-sm lg-muted">
            预览玻璃
            <Switch checked={glassOn} onCheckedChange={setGlassOn} />
          </div>
        </div>
        <Divider />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <div className="text-sm">
              Blur <span className="lg-muted">({blur}px)</span>
            </div>
            <input
              type="range"
              min={0}
              max={28}
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <label className="space-y-2">
            <div className="text-sm">
              Saturate <span className="lg-muted">({sat}%)</span>
            </div>
            <input
              type="range"
              min={100}
              max={200}
              value={sat}
              onChange={(e) => setSat(Number(e.target.value))}
              className="w-full"
            />
          </label>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card glass={glassOn} className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan">Preview</Badge>
            <Badge variant="muted">Liquid Glass</Badge>
          </div>
          <Divider />
          <div className="grid gap-3">
            <Input placeholder="输入类：玻璃边框 + 实体填充" />
            <Select value={accent} onValueChange={setAccent}>
              <SelectTrigger>
                <SelectValue placeholder="Accent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cyan">Cyan</SelectItem>
                <SelectItem value="violet">Violet</SelectItem>
                <SelectItem value="muted">Muted</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>
          <div className="text-sm lg-muted">
            提示：在应用中可覆盖 <span className="lg-code">--lg-glass-blur</span> /{" "}
            <span className="lg-code">--lg-glass-saturate</span> 以适配不同背景与层级。
          </div>
        </Card>

        <Card glass={false} className="space-y-4">
          <div className="text-sm font-semibold">Token 速查</div>
          <Divider />
          <div className="grid gap-3">
            {[
              ["--lg-bg", "var(--lg-bg)"],
              ["--lg-elevated", "var(--lg-elevated)"],
              ["--lg-text", "var(--lg-text)"],
              ["--lg-muted", "var(--lg-muted)"],
              ["--lg-cyan", "var(--lg-cyan)"],
              ["--lg-violet", "var(--lg-violet)"]
            ].map(([name, value]) => (
              <div
                key={name}
                className="flex items-center justify-between gap-3 rounded-lg border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)] px-4 py-3"
              >
                <div className="lg-code text-sm">{name}</div>
                <div className="flex items-center gap-3">
                  <div className="lg-code text-sm lg-muted">{value}</div>
                  <div
                    className="h-6 w-6 rounded-md border border-[color:var(--lg-glass-border)]"
                    style={{ background: `var(${name})` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

