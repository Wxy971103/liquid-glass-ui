"use client";

import { Card, Divider, cn } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "vertical", type: "boolean", default: "false", description: "是否竖向分割线。" },
  { name: "className", type: "string", default: "-", description: "自定义样式。" }
];

export default function DividerDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Divider 分割线
        </h1>
        <p className="lg-muted">用于区域分割。属于“非全玻璃”元素，保持干净。</p>
      </header>

      <DemoBlock
        title="横向 / 纵向"
        code={`import { Divider } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <div className=\"space-y-4\">\n      <Divider />\n      <div className=\"flex items-stretch gap-4\">\n        <div>A</div>\n        <Divider vertical />\n        <div>B</div>\n      </div>\n    </div>\n  );\n}`}
      >
        <div className="space-y-4">
          <Divider />
          <div className="flex items-stretch gap-4">
            <Card glass={false} className="px-3 py-2">
              A
            </Card>
            <Divider vertical />
            <Card glass={false} className="px-3 py-2">
              B
            </Card>
          </div>
        </div>
      </DemoBlock>

      <Divider className={cn("my-2")} />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

