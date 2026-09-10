"use client";

import * as React from "react";
import { Divider, Tag } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "variant", type: "\"default\" | \"cyan\" | \"violet\" | \"muted\"", default: "\"default\"", description: "样式变体。" },
  { name: "closable", type: "boolean", default: "false", description: "是否显示关闭按钮。" },
  { name: "onClose", type: "() => void", default: "-", description: "点击关闭按钮回调。" }
];

export default function TagDocPage() {
  const [items, setItems] = React.useState(["Alpha", "Beta", "Gamma"]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold lg-h1">Tag 标签</h1>
        <p className="lg-muted">用于选择结果、状态标记与轻量筛选。为保证小尺寸可读性，Tag 使用实体材质。</p>
      </header>

      <DemoBlock
        title="变体"
        code={`import { Tag } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <div className=\"flex flex-wrap gap-2\">\n      <Tag>Default</Tag>\n      <Tag variant=\"cyan\">Cyan</Tag>\n      <Tag variant=\"violet\">Violet</Tag>\n      <Tag variant=\"muted\">Muted</Tag>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap gap-2">
          <Tag>Default</Tag>
          <Tag variant="cyan">Cyan</Tag>
          <Tag variant="violet">Violet</Tag>
          <Tag variant="muted">Muted</Tag>
        </div>
      </DemoBlock>

      <DemoBlock
        title="可关闭"
        code={`export function Demo(){\n  const [items,setItems]=React.useState([\"Alpha\",\"Beta\",\"Gamma\"]);\n  return (\n    <div className=\"flex flex-wrap gap-2\">\n      {items.map((x)=> (\n        <Tag key={x} closable onClose={()=>setItems((p)=>p.filter((i)=>i!==x))}>{x}</Tag>\n      ))}\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap gap-2">
          {items.map((x) => (
            <Tag
              key={x}
              closable
              onClose={() => setItems((p) => p.filter((i) => i !== x))}
            >
              {x}
            </Tag>
          ))}
        </div>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold lg-h2">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

