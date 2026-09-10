"use client";

import { Badge, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "variant", type: "\"default\" | \"cyan\" | \"violet\" | \"muted\"", default: "\"default\"", description: "徽标风格。" },
  { name: "children", type: "ReactNode", default: "-", description: "内容。" }
];

export default function BadgeDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Badge 徽标
        </h1>
        <p className="lg-muted">用于状态、小标签、版本信息等。</p>
      </header>

      <DemoBlock
        title="变体"
        code={`import { Badge } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <div className=\"flex flex-wrap gap-2\">\n      <Badge>Default</Badge>\n      <Badge variant=\"cyan\">Cyan</Badge>\n      <Badge variant=\"violet\">Violet</Badge>\n      <Badge variant=\"muted\">Muted</Badge>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="cyan">Cyan</Badge>
          <Badge variant="violet">Violet</Badge>
          <Badge variant="muted">Muted</Badge>
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

