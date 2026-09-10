"use client";

import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Divider
} from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "value", type: "string", default: "-", description: "受控值。" },
  { name: "onValueChange", type: "(value: string) => void", default: "-", description: "选择变化回调。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用。" }
];

export default function SelectDocPage() {
  const [value, setValue] = React.useState<string>("cyan");

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Select 选择器
        </h1>
        <p className="lg-muted">Trigger 使用玻璃材质；下拉内容使用实体 elevated 面板，提高可读性。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [value,setValue]=React.useState(\"cyan\");\n  return (\n    <Select value={value} onValueChange={setValue}>\n      <SelectTrigger>\n        <SelectValue placeholder=\"选择一个颜色\" />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value=\"cyan\">Cyan</SelectItem>\n        <SelectItem value=\"violet\">Violet</SelectItem>\n        <SelectItem value=\"muted\">Muted</SelectItem>\n      </SelectContent>\n    </Select>\n  );\n}`}
      >
        <div className="space-y-2">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger>
              <SelectValue placeholder="选择一个颜色" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cyan">Cyan</SelectItem>
              <SelectItem value="violet">Violet</SelectItem>
              <SelectItem value="muted">Muted</SelectItem>
            </SelectContent>
          </Select>
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

