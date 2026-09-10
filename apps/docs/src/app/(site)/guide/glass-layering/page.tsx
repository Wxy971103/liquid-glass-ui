import { Badge, Card, Divider } from "@liquid-glass/ui";

export default function GlassLayeringPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          玻璃分层
        </h1>
        <p className="lg-muted">
          “玻璃”不是所有组件都适用：高频信息承载层玻璃化，密集交互与表格细胞保持实体材质，避免噪声与可读性下降。
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card glass={false} className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold">适合玻璃（OK）</div>
            <Badge variant="cyan">Glass</Badge>
          </div>
          <Divider />
          <ul className="text-sm lg-muted space-y-1">
            <li>Button、Nav、Tabs、Select Trigger</li>
            <li>Dialog、Toast、Pagination、Card</li>
          </ul>
        </Card>

        <Card glass={false} className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold">不建议全玻璃</div>
            <Badge variant="muted">Solid</Badge>
          </div>
          <Divider />
          <ul className="text-sm lg-muted space-y-1">
            <li>Checkbox、Radio、Switch</li>
            <li>Divider、表格 cell</li>
            <li>输入类：玻璃边框 + 实体填充</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

