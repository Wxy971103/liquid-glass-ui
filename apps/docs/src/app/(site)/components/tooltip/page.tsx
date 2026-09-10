"use client";

import {
  Divider,
  LgButton,
  LgTooltip,
  LgTooltipContent,
  LgTooltipTrigger
} from "@liquid-glass/ui";

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
        code={`import { LgTooltip, LgTooltipTrigger, LgTooltipContent, LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgTooltip>\n      <LgTooltipTrigger asChild>\n        <LgButton variant=\"secondary\">Hover me</LgButton>\n      </LgTooltipTrigger>\n      <LgTooltipContent>这是一个 Tooltip</LgTooltipContent>\n    </LgTooltip>\n  );\n}`}
      >
        <LgTooltip>
          <LgTooltipTrigger asChild>
            <LgButton variant="secondary">Hover me</LgButton>
          </LgTooltipTrigger>
          <LgTooltipContent>这是一个 Tooltip</LgTooltipContent>
        </LgTooltip>
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

