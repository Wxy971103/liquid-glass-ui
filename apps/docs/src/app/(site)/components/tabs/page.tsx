"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent, Card, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "value", type: "string", default: "-", description: "受控当前 tab。" },
  { name: "defaultValue", type: "string", default: "-", description: "非受控默认 tab。" },
  { name: "onValueChange", type: "(value: string) => void", default: "-", description: "切换回调。" }
];

export default function TabsDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold lg-h1">
          Tabs 标签页
        </h1>
        <p className="lg-muted">
          支持 Underline / Pill / Glass 三种风格，用于内容切换与导航分段。
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#examples" className="text-[color:var(--lg-cyan)] hover:underline">
            Examples
          </a>
          <a href="#api" className="text-[color:var(--lg-cyan)] hover:underline">
            API
          </a>
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">When to use</h2>
        <ul className="text-sm lg-muted list-disc pl-5 space-y-1">
          <li>同一页面下的分段内容切换。</li>
          <li>Underline 适合导航栏；Pill 适合表单/卡片内；Glass track 适合高层级浮层或强调区域。</li>
        </ul>
      </section>

      <div id="examples" className="space-y-6">
      <DemoBlock
        title="Underline"
        code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Tabs defaultValue=\"a\">\n      <TabsList variant=\"underline\">\n        <TabsTrigger value=\"a\">Overview</TabsTrigger>\n        <TabsTrigger value=\"b\">API</TabsTrigger>\n        <TabsTrigger value=\"c\" disabled>Disabled</TabsTrigger>\n      </TabsList>\n      <TabsContent value=\"a\">...</TabsContent>\n      <TabsContent value=\"b\">...</TabsContent>\n      <TabsContent value=\"c\">...</TabsContent>\n    </Tabs>\n  );\n}`}
      >
        <Tabs defaultValue="a">
          <TabsList variant="underline">
            <TabsTrigger value="a">Overview</TabsTrigger>
            <TabsTrigger value="b">API</TabsTrigger>
            <TabsTrigger value="c" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Underline tabs</div>
              <div className="text-sm lg-muted mt-1">适合顶栏导航与信息切换。</div>
            </Card>
          </TabsContent>
          <TabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">Content B</div>
            </Card>
          </TabsContent>
          <TabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">Disabled</div>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoBlock>

      <DemoBlock
        title="Pill"
        code={`<Tabs defaultValue=\"a\">\n  <TabsList variant=\"pill\">...\n  </TabsList>\n</Tabs>`}
      >
        <Tabs defaultValue="a">
          <TabsList variant="pill">
            <TabsTrigger value="a">One</TabsTrigger>
            <TabsTrigger value="b">Two</TabsTrigger>
            <TabsTrigger value="c">Three</TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Pill tabs</div>
            </Card>
          </TabsContent>
          <TabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">Two</div>
            </Card>
          </TabsContent>
          <TabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">Three</div>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoBlock>

      <DemoBlock
        title="Glass track"
        description="适合强调区域或玻璃面板上。"
        code={`<Tabs defaultValue=\"a\">\n  <TabsList variant=\"glass\">...\n  </TabsList>\n</Tabs>`}
      >
        <Tabs defaultValue="a">
          <TabsList variant="glass">
            <TabsTrigger value="a">Glass</TabsTrigger>
            <TabsTrigger value="b">Pill</TabsTrigger>
            <TabsTrigger value="c">Underline</TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Glass track</div>
              <div className="text-sm lg-muted mt-1">TabsList 使用 .u-liquid-glass。</div>
            </Card>
          </TabsContent>
          <TabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">…</div>
            </Card>
          </TabsContent>
          <TabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">…</div>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoBlock>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">Glass notes</h2>
        <p className="text-sm lg-muted">
          <span className="lg-code">TabsList variant=&quot;glass&quot;</span> 使用 <span className="lg-code">.u-liquid-glass</span>，
          在 reduced-transparency 或不支持 backdrop-filter 时自动降级为实体表面。
        </p>
      </section>

      <Divider />
      <section id="api" className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">A11y</h2>
        <ul className="text-sm lg-muted list-disc pl-5 space-y-1">
          <li>触发器支持键盘左右方向键切换（Radix Tabs）。</li>
          <li>禁用项应避免承载关键路径操作。</li>
        </ul>
      </section>
    </div>
  );
}

