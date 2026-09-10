import { Badge, Card, Divider } from "@liquid-glass/ui";

const tokens = [
  { name: "--lg-bg", value: "#03040A", role: "Stage (Dark)" },
  { name: "--lg-elevated", value: "#0F1117", role: "Elevated (Dark)" },
  { name: "--lg-text", value: "#EEF2FF", role: "Text (Dark)" },
  { name: "--lg-muted", value: "#8B9BB8", role: "Muted (Dark)" },
  { name: "--lg-cyan", value: "#5CE1E6", role: "Accent (Dark)" },
  { name: "--lg-violet", value: "#8B5CFF", role: "Violet (Dark)" }
];

export default function DesignTokensPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold lg-h1">Design tokens</h1>
        <p className="lg-muted">
          Liquid Glass UI 使用 CSS Variables 作为设计 token。通过覆盖变量实现主题与品牌定制。
        </p>
      </header>

      <Card glass={false} className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">核心颜色</div>
          <Badge variant="muted">CSS Variables</Badge>
        </div>
        <Divider />
        <div className="grid gap-3">
          {tokens.map((t) => (
            <div
              key={t.name}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[color:var(--lg-glass-border)] bg-[color:var(--lg-elevated)] px-4 py-3"
            >
              <div className="min-w-0">
                <div className="lg-code text-sm">{t.name}</div>
                <div className="text-sm lg-muted">{t.role}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="lg-code text-sm lg-muted">{t.value}</div>
                <div
                  className="h-7 w-7 rounded-md border border-[color:var(--lg-glass-border)]"
                  style={{ background: t.value }}
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

