"use client";

import * as React from "react";
import { Input, Divider } from "@liquid-glass/ui";
import { Search } from "lucide-react";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "variant", type: "\"solid\" | \"glass\"", default: "\"solid\"", description: "外观：glass 为玻璃描边 + 实体填充（不会 blur 文本）。" },
  { name: "size", type: "\"sm\" | \"md\" | \"lg\"", default: "\"md\"", description: "尺寸。" },
  { name: "leadingIcon", type: "ReactNode", default: "-", description: "前置图标（SearchField 等）。" },
  { name: "error", type: "boolean", default: "false", description: "错误状态。" },
  { name: "loading", type: "boolean", default: "false", description: "加载状态（右侧 loader 并禁用）。" },
  { name: "type", type: "string", default: "\"text\"", description: "原生 input type。" },
  { name: "placeholder", type: "string", default: "-", description: "占位文本。" },
  { name: "value", type: "string", default: "-", description: "受控值。" },
  { name: "onChange", type: "(event) => void", default: "-", description: "输入变化回调。" }
];

export default function InputDocPage() {
  const [value, setValue] = React.useState("");
  const [query, setQuery] = React.useState("");

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold lg-h1">
          Input 输入框
        </h1>
        <p className="lg-muted">输入类遵循“玻璃边框 + 实体填充”的原则，保证可读性与稳定性。</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#examples" className="text-[color:var(--lg-cyan)] hover:underline">
            Examples
          </a>
          <a href="#api" className="text-[color:var(--lg-cyan)] hover:underline">
            API
          </a>
        </div>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">When to use</h2>
        <ul className="text-sm lg-muted list-disc pl-5 space-y-1">
          <li>表单输入、搜索、过滤条件等。</li>
          <li>Glass 仅用于描边与 rim，高对比文本始终在实体填充上渲染。</li>
        </ul>
      </section>

      <div id="examples" className="space-y-6">
      <DemoBlock
        title="Basic"
        code={`import { Input } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [value,setValue]=React.useState(\"\");\n  return (\n    <div className=\"space-y-2\">\n      <Input value={value} onChange={(e)=>setValue(e.target.value)} placeholder=\"输入一些内容…\" />\n      <div className=\"text-sm lg-muted\">value: {value}</div>\n    </div>\n  );\n}`}
      >
        <div className="space-y-2">
          <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="输入一些内容…" />
          <div className="text-sm lg-muted">value: {value || "（空）"}</div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="SearchField (leading icon)"
        code={`import { Input } from "@liquid-glass/ui";\nimport { Search } from \"lucide-react\";\n\nexport function Demo(){\n  const [query,setQuery]=React.useState(\"\");\n  return (\n    <Input\n      value={query}\n      onChange={(e)=>setQuery(e.target.value)}\n      placeholder=\"Search…\"\n      leadingIcon={<Search className=\"h-4 w-4\" />}\n    />\n  );\n}`}
      >
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          leadingIcon={<Search className="h-4 w-4" />}
        />
      </DemoBlock>

      <DemoBlock
        title="Sizes"
        code={`<div className=\"grid gap-3\">\n  <Input size=\"sm\" placeholder=\"Small\" />\n  <Input size=\"md\" placeholder=\"Medium\" />\n  <Input size=\"lg\" placeholder=\"Large\" />\n</div>`}
      >
        <div className="grid gap-3">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </DemoBlock>

      <DemoBlock
        title="States"
        description="Error / Loading / Disabled"
        code={`<div className=\"grid gap-3\">\n  <Input error placeholder=\"Error\" />\n  <Input loading placeholder=\"Loading\" />\n  <Input disabled placeholder=\"Disabled\" />\n</div>`}
      >
        <div className="grid gap-3">
          <Input error placeholder="Error" />
          <Input loading placeholder="Loading" />
          <Input disabled placeholder="Disabled" />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Glass stroke + solid fill"
        code={`<Input variant=\"glass\" placeholder=\"Glass stroke\" />`}
      >
        <Input variant="glass" placeholder="Glass stroke" />
      </DemoBlock>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">Glass notes</h2>
        <p className="text-sm lg-muted">
          Input 的玻璃形态只用于描边与 rim，内部填充仍是 <span className="lg-code">--lg-elevated</span>，保证文字对比度与可读性。
        </p>
      </section>

      <Divider />
      <section id="api" className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">A11y</h2>
        <ul className="text-sm lg-muted list-disc pl-5 space-y-1">
          <li>SearchField 请保留可读的 placeholder 或配套 label。</li>
          <li>错误状态建议配合辅助文本与 aria-invalid。</li>
        </ul>
      </section>
    </div>
  );
}

