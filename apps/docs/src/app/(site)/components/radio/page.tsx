"use client";

import * as React from "react";
import { RadioGroup, RadioItem, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "value", type: "string", default: "-", description: "当前选中值。" },
  { name: "onValueChange", type: "(value: string) => void", default: "-", description: "变化回调。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用（Item 级）。" }
];

export default function RadioDocPage() {
  const [value, setValue] = React.useState("a");

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Radio 单选框
        </h1>
        <p className="lg-muted">非全玻璃：小控件使用实体背景，提升清晰度。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { RadioGroup, RadioItem } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [value,setValue]=React.useState(\"a\");\n  return (\n    <RadioGroup value={value} onValueChange={setValue} className=\"grid gap-3\">\n      <label className=\"flex items-center gap-2 text-sm\">\n        <RadioItem value=\"a\" /> 选项 A\n      </label>\n      <label className=\"flex items-center gap-2 text-sm\">\n        <RadioItem value=\"b\" /> 选项 B\n      </label>\n    </RadioGroup>\n  );\n}`}
      >
        <div className="space-y-2">
          <RadioGroup value={value} onValueChange={setValue} className="grid gap-3">
            <label className="flex items-center gap-2 text-sm">
              <RadioItem value="a" /> 选项 A
            </label>
            <label className="flex items-center gap-2 text-sm">
              <RadioItem value="b" /> 选项 B
            </label>
          </RadioGroup>
          <div className="text-sm lg-muted">value: {value}</div>
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

