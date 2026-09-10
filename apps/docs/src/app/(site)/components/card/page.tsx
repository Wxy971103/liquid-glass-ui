"use client";

import { Card, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "glass", type: "boolean", default: "true", description: "是否使用玻璃材质。" },
  { name: "children", type: "ReactNode", default: "-", description: "内容。" }
];

export default function CardDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Card 卡片
        </h1>
        <p className="lg-muted">信息承载层的核心组件：支持玻璃与实体两种材质。</p>
      </header>

      <DemoBlock
        title="玻璃卡片"
        code={`import { Card } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Card>\n      <div className=\"text-sm font-semibold\">Liquid Glass</div>\n      <div className=\"text-sm lg-muted mt-1\">用于突出信息层级。</div>\n    </Card>\n  );\n}`}
      >
        <Card>
          <div className="text-sm font-semibold">Liquid Glass</div>
          <div className="text-sm lg-muted mt-1">用于突出信息层级。</div>
        </Card>
      </DemoBlock>

      <DemoBlock
        title="实体卡片"
        code={`<Card glass={false}>...</Card>`}
      >
        <Card glass={false}>
          <div className="text-sm font-semibold">Solid</div>
          <div className="text-sm lg-muted mt-1">用于密集信息与更稳定的阅读区域。</div>
        </Card>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

