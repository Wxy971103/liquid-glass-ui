import { Card } from "@liquid-glass/ui";

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Card glass={false} className="p-0 overflow-hidden">
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-[color:var(--lg-elevated)]">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold">属性</th>
              <th className="px-4 py-3 font-semibold">类型</th>
              <th className="px-4 py-3 font-semibold">默认值</th>
              <th className="px-4 py-3 font-semibold">说明</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t border-[color:var(--lg-glass-border)]">
                <td className="px-4 py-3 font-medium">{r.name}</td>
                <td className="px-4 py-3 lg-code text-[color:var(--lg-muted)]">{r.type}</td>
                <td className="px-4 py-3 lg-code text-[color:var(--lg-muted)]">{r.default ?? "-"}</td>
                <td className="px-4 py-3 text-[color:var(--lg-muted)]">{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

