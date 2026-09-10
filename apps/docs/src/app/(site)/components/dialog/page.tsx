"use client";

import { Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";
import {
  DialogConfirmDemo,
  DialogDestructiveDemo,
  DialogDetailDemo,
  DialogFormDemo,
  DialogScrollDemo
} from "../../../../demos/dialog-variants";

const props: PropRow[] = [
  { name: "open", type: "boolean", default: "-", description: "受控打开状态。" },
  { name: "defaultOpen", type: "boolean", default: "false", description: "非受控默认打开。" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "状态变更回调。" },
  { name: "surface", type: "\"glass\" | \"solid\"", default: "\"glass\"", description: "对话框表面材质。" },
  { name: "size", type: "\"sm\" | \"md\" | \"lg\"", default: "\"md\"", description: "宽度：约 400 / 480 / 560。" }
];

export default function DialogDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold lg-h1">
          Dialog 对话框
        </h1>
        <p className="lg-muted">
          支持 confirm / form / detail / destructive / scroll 五种形态。Overlay 为 black@0.55–0.65，面板支持 Solid/Glass，footer 采用紧凑排版。
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
          <li>需要打断流程、聚焦关键任务（确认/表单/详情）。</li>
          <li>破坏性操作必须使用 destructive 文案与按钮。</li>
          <li>长内容使用 Scroll 模式，内容区滚动且 footer 固定。</li>
        </ul>
      </section>

      <div id="examples" className="space-y-6">
      <DemoBlock
        title="Confirm"
        description="确认类弹窗：主操作明确，文案简洁。"
        code={`import { LgDialog, LgDialogTrigger, LgDialogContent, LgDialogHeader, LgDialogTitle, LgDialogDescription, LgDialogFooter, LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgDialog>\n      <LgDialogTrigger asChild>\n        <LgButton>打开 Confirm</LgButton>\n      </LgDialogTrigger>\n      <LgDialogContent>\n        <LgDialogHeader>\n          <LgDialogTitle>确认操作</LgDialogTitle>\n          <LgDialogDescription>该操作会立即生效，且无法撤销。</LgDialogDescription>\n        </LgDialogHeader>\n        <LgDialogFooter>\n          <LgButton variant=\"ghost\">取消</LgButton>\n          <LgButton variant=\"primary\">继续</LgButton>\n        </LgDialogFooter>\n      </LgDialogContent>\n    </LgDialog>\n  );\n}`}
      >
        <DialogConfirmDemo />
      </DemoBlock>

      <DemoBlock
        title="Form"
        description="表单弹窗：输入类保持实体填充，footer 负责提交/取消。"
        code={`import { LgDialog, LgDialogTrigger, LgDialogContent, LgDialogHeader, LgDialogTitle, LgDialogDescription, LgDialogFooter, LgButton, LgInput } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgDialog>\n      <LgDialogTrigger asChild><LgButton>打开 Form</LgButton></LgDialogTrigger>\n      <LgDialogContent>\n        <LgDialogHeader>\n          <LgDialogTitle>创建记录</LgDialogTitle>\n          <LgDialogDescription>在对话框中提交表单。</LgDialogDescription>\n        </LgDialogHeader>\n        <form className=\"mt-4 grid gap-3\">\n          <LgInput placeholder=\"名称\" />\n          <LgInput placeholder=\"描述\" />\n          <LgDialogFooter>\n            <LgButton variant=\"ghost\" type=\"button\">取消</LgButton>\n            <LgButton type=\"submit\">提交</LgButton>\n          </LgDialogFooter>\n        </form>\n      </LgDialogContent>\n    </LgDialog>\n  );\n}`}
      >
        <DialogFormDemo />
      </DemoBlock>

      <DemoBlock
        title="Detail"
        description="详情弹窗：适合 key-value 信息与只读内容。"
        code={`import { LgDialog, LgDialogTrigger, LgDialogContent, LgDialogHeader, LgDialogTitle, LgDialogDescription, LgDialogFooter, LgButton, Card, Divider } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgDialog>\n      <LgDialogTrigger asChild><LgButton variant=\"secondary\">查看详情</LgButton></LgDialogTrigger>\n      <LgDialogContent>\n        <LgDialogHeader>\n          <LgDialogTitle>请求详情</LgDialogTitle>\n          <LgDialogDescription>展示只读字段与信息。</LgDialogDescription>\n        </LgDialogHeader>\n        <Card glass={false} className=\"mt-4 p-4\">\n          ...\n          <Divider className=\"my-3\" />\n        </Card>\n        <LgDialogFooter>\n          <LgButton variant=\"ghost\">关闭</LgButton>\n          <LgButton>复制 ID</LgButton>\n        </LgDialogFooter>\n      </LgDialogContent>\n    </LgDialog>\n  );\n}`}
      >
        <DialogDetailDemo />
      </DemoBlock>

      <DemoBlock
        title="Destructive"
        description="破坏性操作：使用 destructive 变体并加强风险提示。"
        code={`import { LgDialog, LgDialogTrigger, LgDialogContent, LgDialogHeader, LgDialogTitle, LgDialogDescription, LgDialogFooter, LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgDialog>\n      <LgDialogTrigger asChild><LgButton variant=\"destructive\">删除</LgButton></LgDialogTrigger>\n      <LgDialogContent surface=\"solid\" size=\"sm\">\n        <LgDialogHeader>\n          <LgDialogTitle>删除项目？</LgDialogTitle>\n          <LgDialogDescription>删除后将无法恢复。</LgDialogDescription>\n        </LgDialogHeader>\n        <LgDialogFooter>\n          <LgButton variant=\"ghost\">取消</LgButton>\n          <LgButton variant=\"destructive\">确认删除</LgButton>\n        </LgDialogFooter>\n      </LgDialogContent>\n    </LgDialog>\n  );\n}`}
      >
        <DialogDestructiveDemo />
      </DemoBlock>

      <DemoBlock
        title="Scroll"
        description="长内容：内容区滚动，footer 保持固定操作区。"
        code={`import { LgDialogContent, LgDialogHeader, LgDialogFooter } from "@liquid-glass/ui";\n\nexport function Example() {\n  return (\n    <LgDialogContent>\n      <LgDialogHeader />\n      <div className=\"max-h-[60vh] overflow-auto\">...</div>\n      <LgDialogFooter />\n    </LgDialogContent>\n  );\n}`}
      >
        <DialogScrollDemo />
      </DemoBlock>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold lg-h2">Glass notes</h2>
        <p className="text-sm lg-muted">
          默认 <span className="lg-code">surface=&quot;glass&quot;</span> 使用 <span className="lg-code">.u-liquid-glass</span>；
          当不支持 backdrop-filter 或 reduced-transparency 时会降级为 Elevated 实体表面。Confirm/Detail 常用 Glass，
          Destructive 建议使用 Solid 提升对比度与严肃感。
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
          <li>确保标题与描述正确设置（DialogTitle/Description）。</li>
          <li>键盘用户可通过 ESC 关闭；请避免在 Dialog 内制造不可达控件。</li>
        </ul>
      </section>
    </div>
  );
}

