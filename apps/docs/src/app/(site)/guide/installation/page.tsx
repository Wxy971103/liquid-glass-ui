import { Card, Divider } from "@liquid-glass/ui";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          安装
        </h1>
        <p className="lg-muted">
          Liquid Glass UI 是纯前端组件库。建议在 Next.js / Vite 等 React 工程中使用。
        </p>
      </header>

      <Card glass={false} className="space-y-4">
        <div className="text-sm font-semibold">使用 pnpm 安装</div>
        <Divider />
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`pnpm add @liquid-glass/ui`}</code>
        </pre>
        <div className="text-sm lg-muted">
          然后在应用的全局样式中引入：<span className="lg-code">@liquid-glass/ui/styles.css</span>
        </div>
        <pre className="lg-code text-sm overflow-auto p-4 rounded-lg bg-[color:var(--lg-elevated)] border border-[color:var(--lg-glass-border)]">
          <code>{`/* app/globals.css 或 main.css */\n@import "@liquid-glass/ui/styles.css";`}</code>
        </pre>
      </Card>
    </div>
  );
}

