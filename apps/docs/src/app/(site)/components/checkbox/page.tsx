"use client";

import * as React from "react";
import { Checkbox, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "checked", type: "boolean | \"indeterminate\"", default: "-", description: "受控选中状态。" },
  { name: "onCheckedChange", type: "(checked) => void", default: "-", description: "变化回调。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用。" }
];

export default function CheckboxDocPage() {
  const [checked, setChecked] = React.useState<boolean>(true);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Checkbox 多选框
        </h1>
        <p className="lg-muted">非全玻璃：使用实体背景，减少小控件上的视觉噪声。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Checkbox } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [checked,setChecked]=React.useState(true);\n  return (\n    <label className=\"flex items-center gap-2 text-sm\">\n      <Checkbox checked={checked} onCheckedChange={(v)=>setChecked(!!v)} />\n      接受协议\n    </label>\n  );\n}`}
      >
        <label className="flex items-center gap-2 text-sm">
          <Checkbox checked={checked} onCheckedChange={(v) => setChecked(!!v)} />
          接受协议
        </label>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

