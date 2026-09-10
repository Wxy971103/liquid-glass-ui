"use client";

import {
  LgButton,
  LgTooltip,
  LgTooltipContent,
  LgTooltipTrigger,
  Divider
} from "@liquid-glass/ui";
import { ArrowRight, Plus } from "lucide-react";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "variant", type: "\"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | \"glass\"", default: "\"primary\"", description: "视觉风格。" },
  { name: "size", type: "\"sm\" | \"md\" | \"lg\" | \"icon\"", default: "\"md\"", description: "尺寸。" },
  { name: "loading", type: "boolean", default: "false", description: "加载状态（显示 LoaderCircle 并禁用交互）。" },
  { name: "disabled", type: "boolean", default: "false", description: "禁用状态。" },
  { name: "onClick", type: "(event) => void", default: "-", description: "点击回调。" }
];

export default function ButtonDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold lg-h1">
          Button 按钮
        </h1>
        <p className="lg-muted">
          常用按钮组件。支持实体与 Liquid Glass 表面，并提供完整的状态矩阵（Hover/Focus/Disabled/Loading）。
        </p>
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
          <li>提交、确认、导航跳转等显式操作。</li>
          <li>Primary 用于最重要操作；Secondary/Ghost 用于次级与低权重操作。</li>
          <li>Glass 适用于顶部导航、浮层内的主操作按钮。</li>
        </ul>
      </section>

      <div id="examples" className="space-y-6">
      <DemoBlock
        title="Variants"
        description="Primary / Secondary / Ghost / Destructive / Glass"
        code={`import { LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <div className=\"flex flex-wrap gap-3\">\n      <LgButton variant=\"primary\">Primary</LgButton>\n      <LgButton variant=\"secondary\">Secondary</LgButton>\n      <LgButton variant=\"ghost\">Ghost</LgButton>\n      <LgButton variant=\"destructive\">Destructive</LgButton>\n      <LgButton variant=\"glass\">Glass</LgButton>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap gap-3">
          <LgButton variant="primary">Primary</LgButton>
          <LgButton variant="secondary">Secondary</LgButton>
          <LgButton variant="ghost">Ghost</LgButton>
          <LgButton variant="destructive">Destructive</LgButton>
          <LgButton variant="glass">Glass</LgButton>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Sizes + Icon"
        code={`import { LgButton, LgTooltip, LgTooltipTrigger, LgTooltipContent } from "@liquid-glass/ui";\nimport { Plus } from "lucide-react";\n\nexport function Example() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-3\">\n      <LgButton size=\"sm\">Small</LgButton>\n      <LgButton size=\"md\">Medium</LgButton>\n      <LgButton size=\"lg\">Large</LgButton>\n      <LgTooltip>\n        <LgTooltipTrigger asChild>\n          <LgButton size=\"icon\" aria-label=\"Add\">\n            <Plus className=\"h-4 w-4\" />\n          </LgButton>\n        </LgTooltipTrigger>\n        <LgTooltipContent>Add</LgTooltipContent>\n      </LgTooltip>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <LgButton size="sm">Small</LgButton>
          <LgButton size="md">Medium</LgButton>
          <LgButton size="lg">Large</LgButton>
          <LgTooltip>
            <LgTooltipTrigger asChild>
              <LgButton size="icon" aria-label="Add">
                <Plus className="h-4 w-4" />
              </LgButton>
            </LgTooltipTrigger>
            <LgTooltipContent>Add</LgTooltipContent>
          </LgTooltip>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Loading / Disabled"
        description="Loading 会自动禁用并显示 loader。"
        code={`import { LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <div className=\"flex flex-wrap items-center gap-3\">\n      <LgButton loading>Loading</LgButton>\n      <LgButton variant=\"secondary\" loading>Loading</LgButton>\n      <LgButton variant=\"ghost\" disabled>Disabled</LgButton>\n      <LgButton variant=\"destructive\" loading>Loading</LgButton>\n      <LgButton variant=\"glass\" loading>Loading</LgButton>\n    </div>\n  );\n}`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <LgButton loading>Loading</LgButton>
          <LgButton variant="secondary" loading>
            Loading
          </LgButton>
          <LgButton variant="ghost" disabled>
            Disabled
          </LgButton>
          <LgButton variant="destructive" loading>
            Loading
          </LgButton>
          <LgButton variant="glass" loading>
            Loading
          </LgButton>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Icons"
        code={`import { LgButton } from "@liquid-glass/ui";\nimport { ArrowRight } from "lucide-react";\n\nexport function Example() {\n  return (\n    <LgButton variant=\"primary\">\n      Continue <ArrowRight className=\"h-4 w-4\" />\n    </LgButton>\n  );\n}`}
      >
        <LgButton variant="primary">
          Continue <ArrowRight className="h-4 w-4" />
        </LgButton>
      </DemoBlock>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">Glass notes</h2>
        <p className="text-sm lg-muted">
          <span className="lg-code">variant=&quot;glass&quot;</span> 使用 <span className="lg-code">.u-liquid-glass</span>。
          当浏览器不支持 <span className="lg-code">backdrop-filter</span> 或开启 reduced-transparency 时会自动降级为 Elevated 实体表面。
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
          <li>Icon-only 按钮请提供 <span className="lg-code">aria-label</span>。</li>
          <li>Focus ring 使用 Accent，符合键盘可达性预期。</li>
        </ul>
      </section>
    </div>
  );
}

