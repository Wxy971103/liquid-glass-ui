"use client";

import * as React from "react";
import { Input, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "type", type: "string", default: "\"text\"", description: "原生 input type。" },
  { name: "placeholder", type: "string", default: "-", description: "占位文本。" },
  { name: "value", type: "string", default: "-", description: "受控值。" },
  { name: "onChange", type: "(event) => void", default: "-", description: "输入变化回调。" }
];

export default function InputDocPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Input 输入框
        </h1>
        <p className="lg-muted">输入类遵循“玻璃边框 + 实体填充”的原则，保证可读性与稳定性。</p>
      </header>

      <DemoBlock
        title="受控输入"
        code={`import { Input } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [value,setValue]=React.useState(\"\");\n  return (\n    <div className=\"space-y-2\">\n      <Input value={value} onChange={(e)=>setValue(e.target.value)} placeholder=\"输入一些内容…\" />\n      <div className=\"text-sm lg-muted\">value: {value}</div>\n    </div>\n  );\n}`}
      >
        <div className="space-y-2">
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="输入一些内容…" />
          <div className="text-sm lg-muted">value: {value || "（空）"}</div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="禁用与类型"
        code={`<div className=\"grid gap-3 sm:grid-cols-2\">\n  <Input placeholder=\"Email\" type=\"email\" />\n  <Input placeholder=\"Disabled\" disabled />\n</div>`}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Disabled" disabled />
        </div>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

