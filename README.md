# Liquid Glass UI

React 组件库 + 文档站（对标 Element Plus 文档体验，React 版）。

纯前端，可 Vercel 部署。视觉基于 Liquid Glass + 双主题 token。

## Monorepo

- `packages/ui` — React 19 + TypeScript 组件库（Tailwind v4 class + CSS Tokens）
- `apps/docs` — Next.js App Router 文档站（Guide + Components + Theme）

## 本地开发

```bash
pnpm install
pnpm dev
```

或仅启动 docs：

```bash
pnpm -C apps/docs dev
```

## 构建

```bash
pnpm build
```

## Vercel 部署

- **Root Directory**：`apps/docs`
- **Install Command**：`pnpm install`
- **Build Command**：`pnpm build`

> `apps/docs` 的 build 会先构建 `packages/ui`（生成 `dist`），再执行 Next.js build。

