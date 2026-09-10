"use client";

import { Divider, Spinner } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "size", type: "\"sm\" | \"md\" | \"lg\"", default: "\"md\"", description: "尺寸。" }
];

export default function SpinnerDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Spinner 加载
        </h1>
        <p className="lg-muted">默认带旋转动画，并通过 motion-reduce 自动降级。</p>
      </header>

      <DemoBlock
        title="尺寸"
        code={`import { Spinner } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <div className=\"flex items-center gap-3\">\n      <Spinner size=\"sm\" />\n      <Spinner size=\"md\" />\n      <Spinner size=\"lg\" />\n    </div>\n  );\n}`}
      >
        <div className="flex items-center gap-3">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
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

