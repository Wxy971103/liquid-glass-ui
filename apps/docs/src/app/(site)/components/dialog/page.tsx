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
        title="Confirm"
        description="确认类弹窗：主操作明确，文案简洁。"
        code={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return (\n    <Dialog>\n      <DialogTrigger asChild>\n        <Button>打开 Confirm</Button>\n      </DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>确认操作</DialogTitle>\n          <DialogDescription>该操作会立即生效，且无法撤销。</DialogDescription>\n        </DialogHeader>\n        <DialogFooter>\n          <Button variant=\"ghost\">取消</Button>\n          <Button>继续</Button>\n        </DialogFooter>\n      </DialogContent>\n    </Dialog>\n  );\n}`}
      >
        <DialogConfirmDemo />
      </DemoBlock>

      <DemoBlock
        title="Form"
        description="表单弹窗：输入类保持实体填充，footer 负责提交/取消。"
        code={`<Dialog>\n  <DialogTrigger asChild><Button>打开 Form</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader>...</DialogHeader>\n    <form>\n      {/* form fields */}\n      <DialogFooter>...</DialogFooter>\n    </form>\n  </DialogContent>\n</Dialog>`}
      >
        <DialogFormDemo />
      </DemoBlock>

      <DemoBlock
        title="Detail"
        description="详情弹窗：适合 key-value 信息与只读内容。"
        code={`<Dialog>\n  <DialogTrigger asChild><Button variant=\"secondary\">查看详情</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader>...</DialogHeader>\n    {/* details */}\n    <DialogFooter>...</DialogFooter>\n  </DialogContent>\n</Dialog>`}
      >
        <DialogDetailDemo />
      </DemoBlock>

      <DemoBlock
        title="Destructive"
        description="破坏性操作：使用 destructive 变体并加强风险提示。"
        code={`<Dialog>\n  <DialogTrigger asChild><Button variant=\"destructive\">删除</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader>...</DialogHeader>\n    <DialogFooter>\n      <Button variant=\"ghost\">取消</Button>\n      <Button variant=\"destructive\">确认删除</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`}
      >
        <DialogDestructiveDemo />
      </DemoBlock>

      <DemoBlock
        title="Scroll"
        description="长内容：内容区滚动，footer 保持固定操作区。"
        code={`<DialogContent>\n  <DialogHeader />\n  <div className=\"max-h-[60vh] overflow-auto\">...</div>\n  <DialogFooter />\n</DialogContent>`}
      >
        <DialogScrollDemo />
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

