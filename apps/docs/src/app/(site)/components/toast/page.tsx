import { Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";
import { ToastDemo } from "../../../../demos/toast-demo";

const props: PropRow[] = [
  { name: "toast({ title, description, duration })", type: "function", default: "-", description: "触发一条 Toast。" },
  { name: "duration", type: "number", default: "-", description: "展示时长（ms）。" }
];

export default function ToastDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Toast 提示
        </h1>
        <p className="lg-muted">用于轻量反馈与确认信息。默认右上角堆叠，支持 swipe 关闭。</p>
      </header>

      <DemoBlock
        title="触发 Toast"
        code={`import { useToast, LgButton } from "@liquid-glass/ui";\n\nexport function Example() {\n  const { toast } = useToast();\n  return (\n    <LgButton onClick={() => toast({ title: \"已保存\", description: \"你的设置已成功保存。\" })}>\n      触发 Toast\n    </LgButton>\n  );\n}`}
      >
        <ToastDemo />
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

