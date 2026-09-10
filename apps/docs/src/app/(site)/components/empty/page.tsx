"use client";

import { Divider, Empty } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";

const props: PropRow[] = [
  { name: "title", type: "string", default: "\"暂无内容\"", description: "标题。" },
  { name: "description", type: "string", default: "默认文案", description: "描述。" },
  { name: "icon", type: "ReactNode", default: "-", description: "自定义图标。" }
];

export default function EmptyDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Empty 空状态
        </h1>
        <p className="lg-muted">列表/搜索无结果时的默认占位。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Empty } from "@liquid-glass/ui";\n\nexport function Demo(){\n  return <Empty title=\"无数据\" description=\"请调整筛选条件后重试。\" />;\n}`}
      >
        <Empty title="无数据" description="请调整筛选条件后重试。" />
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

