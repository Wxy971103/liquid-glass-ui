import { Card, Divider } from "@liquid-glass/ui";

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          主题切换
        </h1>
        <p className="lg-muted">
          主题通过 <span className="lg-code">html[data-theme]</span> 控制，并由{" "}
          <span className="lg-code">@liquid-glass/ui/styles.css</span> 提供默认值。
        </p>
      </header>

      <Card glass={false} className="space-y-4">
        <div className="text-sm font-semibold">切换方式</div>
        <Divider />
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`document.documentElement.dataset.theme = "dark";\ndocument.documentElement.dataset.theme = "light";`}</code>
        </pre>
        <div className="text-sm lg-muted">
          你也可以在 SSR 场景下提前写入 <span className="lg-code">data-theme</span>{" "}
          以避免闪烁。
        </div>
      </Card>

      <Card glass={false} className="space-y-4">
        <div className="text-sm font-semibold">覆盖 Token</div>
        <Divider />
        <div className="text-sm lg-muted">
          任何 CSS 位置都能覆盖变量，例如自定义品牌色：
        </div>
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`:root{\n  --lg-cyan:#00D4FF;\n  --lg-violet:#7C3AED;\n}\n\nhtml[data-theme=\"light\"]{\n  --lg-bg:#F8FAFF;\n}`}</code>
        </pre>
      </Card>
    </div>
  );
}

