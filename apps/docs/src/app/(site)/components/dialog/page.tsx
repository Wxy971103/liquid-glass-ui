import { Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";
import { DialogDemo } from "../../../../demos/dialog-demo";

const props: PropRow[] = [
  { name: "open", type: "boolean", default: "-", description: "受控打开状态。" },
  { name: "defaultOpen", type: "boolean", default: "false", description: "非受控默认打开。" },
  { name: "onOpenChange", type: "(open: boolean) => void", default: "-", description: "状态变更回调。" }
];

export default function DialogDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Dialog 对话框
        </h1>
        <p className="lg-muted">
          支持 confirm/form/detail/destructive/scroll 等常见形态。对话框本体使用玻璃材质，Overlay 具备 blur 并遵循 reduced-motion。
        </p>
      </header>

      <DemoBlock
        title="基础示例"
        code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button>打开对话框</Button>\n      </DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>确认操作</DialogTitle>\n          <DialogDescription>这是一个基础容器示例。</DialogDescription>\n        </DialogHeader>\n        <DialogFooter>\n          <Button variant=\"ghost\">取消</Button>\n          <Button variant=\"destructive\">确认</Button>\n        </DialogFooter>\n      </DialogContent>\n    </Dialog>\n  );\n}`}
      >
        <DialogDemo />
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

