"use client";

import { LgTabs, LgTabsList, LgTabsTrigger, LgTabsContent, Card, Divider } from "@liquid-glass/ui";

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
        code={`import { LgTabs, LgTabsList, LgTabsTrigger, LgTabsContent } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgTabs defaultValue=\"a\">\n      <LgTabsList variant=\"underline\">\n        <LgTabsTrigger value=\"a\">Overview</LgTabsTrigger>\n        <LgTabsTrigger value=\"b\">API</LgTabsTrigger>\n        <LgTabsTrigger value=\"c\" disabled>Disabled</LgTabsTrigger>\n      </LgTabsList>\n      <LgTabsContent value=\"a\">...</LgTabsContent>\n      <LgTabsContent value=\"b\">...</LgTabsContent>\n      <LgTabsContent value=\"c\">...</LgTabsContent>\n    </LgTabs>\n  );\n}`}
      >
        <LgTabs defaultValue="a">
          <LgTabsList variant="underline">
            <LgTabsTrigger value="a">Overview</LgTabsTrigger>
            <LgTabsTrigger value="b">API</LgTabsTrigger>
            <LgTabsTrigger value="c" disabled>
              Disabled
            </LgTabsTrigger>
          </LgTabsList>
          <LgTabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Underline tabs</div>
              <div className="text-sm lg-muted mt-1">适合顶栏导航与信息切换。</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">Content B</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">Disabled</div>
            </Card>
          </LgTabsContent>
        </LgTabs>
      </DemoBlock>

      <DemoBlock
        title="Pill"
        code={`import { LgTabs, LgTabsList, LgTabsTrigger } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgTabs defaultValue=\"a\">\n      <LgTabsList variant=\"pill\">\n        <LgTabsTrigger value=\"a\">One</LgTabsTrigger>\n        <LgTabsTrigger value=\"b\">Two</LgTabsTrigger>\n        <LgTabsTrigger value=\"c\">Three</LgTabsTrigger>\n      </LgTabsList>\n    </LgTabs>\n  );\n}`}
      >
        <LgTabs defaultValue="a">
          <LgTabsList variant="pill">
            <LgTabsTrigger value="a">One</LgTabsTrigger>
            <LgTabsTrigger value="b">Two</LgTabsTrigger>
            <LgTabsTrigger value="c">Three</LgTabsTrigger>
          </LgTabsList>
          <LgTabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Pill tabs</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">Two</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">Three</div>
            </Card>
          </LgTabsContent>
        </LgTabs>
      </DemoBlock>

      <DemoBlock
        title="Glass track"
        description="适合强调区域或玻璃面板上。"
        code={`import { LgTabs, LgTabsList, LgTabsTrigger } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgTabs defaultValue=\"a\">\n      <LgTabsList variant=\"glass\">\n        <LgTabsTrigger value=\"a\">Glass</LgTabsTrigger>\n        <LgTabsTrigger value=\"b\">Pill</LgTabsTrigger>\n        <LgTabsTrigger value=\"c\">Underline</LgTabsTrigger>\n      </LgTabsList>\n    </LgTabs>\n  );\n}`}
      >
        <LgTabs defaultValue="a">
          <LgTabsList variant="glass">
            <LgTabsTrigger value="a">Glass</LgTabsTrigger>
            <LgTabsTrigger value="b">Pill</LgTabsTrigger>
            <LgTabsTrigger value="c">Underline</LgTabsTrigger>
          </LgTabsList>
          <LgTabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">Glass track</div>
              <div className="text-sm lg-muted mt-1">TabsList 使用 .u-liquid-glass。</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">…</div>
            </Card>
          </LgTabsContent>
          <LgTabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">…</div>
            </Card>
          </LgTabsContent>
        </LgTabs>
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

