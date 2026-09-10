"use client";

import * as React from "react";
import { Switch, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "checked", type: "boolean", default: "-", description: "受控选中状态。" },
  { name: "onCheckedChange", type: "(checked: boolean) => void", default: "-", description: "变化回调。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用。" }
];

export default function SwitchDocPage() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Switch 开关
        </h1>
        <p className="lg-muted">非全玻璃：使用实体轨道，保证信息密度与可读性。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Switch } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [checked,setChecked]=React.useState(true);\n  return (\n    <label className=\"flex items-center gap-3 text-sm\">\n      <Switch checked={checked} onCheckedChange={setChecked} />\n      启用功能\n    </label>\n  );\n}`}
      >
        <div className="space-y-2">
          <label className="flex items-center gap-3 text-sm">
            <Switch checked={checked} onCheckedChange={setChecked} />
            启用功能
          </label>
          <div className="text-sm lg-muted">checked: {checked ? "true" : "false"}</div>
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

