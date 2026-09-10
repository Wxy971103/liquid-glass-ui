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
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Tabs 标签页
        </h1>
        <p className="lg-muted">TabsList 使用玻璃材质，内容区域保持实体/卡片承载。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Tabs defaultValue=\"a\">\n      <TabsList>\n        <TabsTrigger value=\"a\">A</TabsTrigger>\n        <TabsTrigger value=\"b\">B</TabsTrigger>\n        <TabsTrigger value=\"c\">C</TabsTrigger>\n      </TabsList>\n      <TabsContent value=\"a\">内容 A</TabsContent>\n      <TabsContent value=\"b\">内容 B</TabsContent>\n      <TabsContent value=\"c\">内容 C</TabsContent>\n    </Tabs>\n  );\n}`}
      >
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a">A</TabsTrigger>
            <TabsTrigger value="b">B</TabsTrigger>
            <TabsTrigger value="c">C</TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <Card glass={false} className="p-4">
              <div className="text-sm">内容 A</div>
              <div className="text-sm lg-muted mt-1">适合放表单/详情等。</div>
            </Card>
          </TabsContent>
          <TabsContent value="b">
            <Card glass={false} className="p-4">
              <div className="text-sm">内容 B</div>
            </Card>
          </TabsContent>
          <TabsContent value="c">
            <Card glass={false} className="p-4">
              <div className="text-sm">内容 C</div>
            </Card>
          </TabsContent>
        </Tabs>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

