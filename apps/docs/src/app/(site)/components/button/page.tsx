import { Button, Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "variant", type: "\"default\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\"", default: "\"default\"", description: "视觉风格。" },
  { name: "size", type: "\"sm\" | \"md\" | \"lg\"", default: "\"md\"", description: "尺寸。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用状态。" },
  { name: "onClick", type: "(event) => void", default: "-", description: "点击回调。" }
];

export default function ButtonDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Button 按钮
        </h1>
        <p className="lg-muted">主按钮使用液态玻璃材质；支持 secondary/outline/ghost/destructive 等变体。</p>
      </header>

      <DemoBlock
        title="变体"
        description="用于不同语义与层级。"
        code={`import { Button } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <div className=\"flex flex-wrap gap-3\">\n      <Button>Default</Button>\n      <Button variant=\"secondary\">Secondary</Button>\n      <Button variant=\"outline\">Outline</Button>\n      <Button variant=\"ghost\">Ghost</Button>\n      <Button variant=\"destructive\">Destructive</Button>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </DemoBlock>

      <DemoBlock
        title="尺寸与禁用"
        code={`<div className=\"flex flex-wrap items-center gap-3\">\n  <Button size=\"sm\">Small</Button>\n  <Button size=\"md\">Medium</Button>\n  <Button size=\"lg\">Large</Button>\n  <Button disabled>Disabled</Button>\n</div>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
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

