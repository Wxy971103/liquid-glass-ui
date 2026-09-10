import { Divider } from "@liquid-glass/ui";

import { DemoBlock } from "../../../../components/demo-block";
import { PropsTable, type PropRow } from "../../../../components/props-table";
import { PaginationDemo } from "../../../../demos/pagination-demo";

const props: PropRow[] = [
  { name: "page", type: "number", default: "-", description: "当前页（1-based）。" },
  { name: "pageCount", type: "number", default: "-", description: "总页数。" },
  { name: "onPageChange", type: "(page: number) => void", default: "-", description: "页码变更回调。" },
  { name: "siblings", type: "number", default: "1", description: "当前页左右显示的兄弟页数量。" }
];

export default function PaginationDocPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
          Pagination 分页
        </h1>
        <p className="lg-muted">适合列表/表格分页；控制点使用按钮体系（glass/ghost）。</p>
      </header>

      <DemoBlock
        title="基础用法"
        code={`import { Pagination } from "@liquid-glass/ui";\n\nexport function Demo(){\n  const [page,setPage]=React.useState(1);\n  return <Pagination page={page} pageCount={24} onPageChange={setPage} />;\n}`}
      >
        <PaginationDemo />
      </DemoBlock>

      <Divider />
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Props</h2>
        <PropsTable rows={props} />
      </section>
    </div>
  );
}

