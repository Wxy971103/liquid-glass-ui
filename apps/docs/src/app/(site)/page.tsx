import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Button, Card, Divider } from "@liquid-glass/ui";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="cyan">React 19</Badge>
          <Badge variant="violet">Tailwind v4</Badge>
          <Badge variant="muted">Vercel-ready</Badge>
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Liquid Glass UI
        </h1>
        <p className="text-base sm:text-lg lg-muted max-w-2xl">
          以“液态玻璃”视觉为核心的 React 组件库与文档站，参考 Element Plus 的文档体验：
          清晰的 Guide、可交互的组件示例、主题与 token 体系。
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link href="/guide/installation">
            <Button>
              开始使用 <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/components/button">
            <Button variant="outline">查看组件</Button>
          </Link>
        </div>
      </section>

      <Divider />

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="text-sm font-semibold">液态玻璃</div>
          <div className="mt-2 text-sm lg-muted">
            统一的 blur/saturate、边缘高光与渐变叠加；同时尊重 reduced-transparency。
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold">双主题 + Tokens</div>
          <div className="mt-2 text-sm lg-muted">
            暗色基准 token 已冻结；提供 light theme 作为对照与生产可用默认方案。
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold">示例可复制</div>
          <div className="mt-2 text-sm lg-muted">
            组件页包含 live demo 与可复制代码片段，帮助快速落地。
          </div>
        </Card>
      </section>
    </div>
  );
}

