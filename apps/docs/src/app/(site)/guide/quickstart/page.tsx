import { Card, Divider } from "@liquid-glass/ui";

export default function QuickstartPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          快速开始
        </h1>
        <p className="lg-muted">最小可用示例：引入样式、放一个按钮、切换主题。</p>
      </header>

      <Card glass={false} className="space-y-4">
        <div className="text-sm font-semibold">1) 引入样式</div>
        <Divider />
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`@import "@liquid-glass/ui/styles.css";`}</code>
        </pre>
      </Card>

      <Card glass={false} className="space-y-4">
        <div className="text-sm font-semibold">2) 使用组件</div>
        <Divider />
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`import { Button } from "@liquid-glass/ui";\n\nexport function Example(){\n  return <Button>Liquid Glass</Button>;\n}`}</code>
        </pre>
      </Card>

      <Card glass={false} className="space-y-2">
        <div className="text-sm font-semibold">3) 主题切换</div>
        <div className="text-sm lg-muted">
          在 <span className="lg-code">&lt;html&gt;</span> 上设置{" "}
          <span className="lg-code">data-theme</span> 即可：
        </div>
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`<html data-theme="dark"> ...\n<html data-theme="light"> ...`}</code>
        </pre>
      </Card>
    </div>
  );
}

