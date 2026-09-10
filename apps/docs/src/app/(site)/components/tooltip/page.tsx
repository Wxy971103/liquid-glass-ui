"use client";

import { Button, Divider, Tooltip, TooltipTrigger, TooltipContent } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "side / sideOffset", type: "Radix Tooltip props", default: "-", description: "位置与偏移。" },
  { name: "delayDuration", type: "number", default: "Provider 级", description: "延迟展示时间。" }
];

export default function TooltipDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Tooltip 文字提示
        </h1>
        <p className="lg-muted">用于解释型文本、icon-only 按钮等。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Tooltip>\n      <TooltipTrigger asChild>\n        <Button variant=\"secondary\">Hover me</Button>\n      </TooltipTrigger>\n      <TooltipContent>这是一个 Tooltip</TooltipContent>\n    </Tooltip>\n  );\n}`}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>这是一个 Tooltip</TooltipContent>
        </Tooltip>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

