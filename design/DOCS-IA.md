# Liquid Glass UI — 文档站信息架构 & 组件页模板

**Status**: Design in progress (new project; blog Figma freeze untouched)  
**Repo**: https://github.com/Wxy971103/liquid-glass-ui  
**PRD**: `/workspace/projects/liquid-glass-ui/PRD-v0.1.md`  
**Visual source (frozen reference)**: https://www.figma.com/design/cvPXjZWxk5bQZRA4yS4aDh  
**Tokens**: `design/tokens.css` · `design/tokens.json` · `design/LIQUID-GLASS.md`

对标 [Element Plus](https://element-plus.org/) 文档站：顶栏 + 左侧边栏 + 主内容（示例 / 代码 / API）。

---

## 1. 路由 IA

| Route | Purpose |
|---|---|
| `/` | 首页：Hero（Liquid Glass CTA）+ 特性三列 + Quick start |
| `/guide/installation` | 安装（pnpm / packages/ui） |
| `/guide/quickstart` | 快速开始 |
| `/guide/design-tokens` | 色板 / 字体 / 间距 / radius |
| `/guide/theming` | Dark / Light · `data-theme` |
| `/guide/glass-layering` | 可玻璃 vs 不适合整块玻璃 |
| `/components/:name` | 组件页（见模板） |
| `/theme` | 主题切换实时演示 |

### 侧栏分组（建议）

1. **Guide** — Installation · Quickstart · Design Tokens · Theming · Glass Layering  
2. **Basic** — Button · Icon（Lucide）· Typography  
3. **Form** — Input · Select · Checkbox · Radio · Switch  
4. **Data** — Table（单元格无玻璃）· Pagination · Tag · Badge · Empty · Loading  
5. **Navigation** — Tabs · Menu/Nav · Breadcrumb（可后置）  
6. **Feedback** — Dialog/Modal（五型）· Toast/Message · Tooltip  

P0 优先落地页：文档壳 + Button · Input · Dialog · Tabs。

---

## 2. 文档壳布局（Desktop 1440 / Tablet 768 / Mobile 390）

```
┌─────────────────────────────────────────────────────────┐
│ Topbar (Liquid Glass)  Logo · Guide · Components · Theme │
├──────────┬──────────────────────────────────────────────┤
│ Sidebar  │  Page header (H1 + 一句话描述)                 │
│ (sticky) │  Anchor tabs: Examples | API                 │
│          │  ─────────────────────────────────────────   │
│ Guide    │  Demo canvas (Dark stage / Light stage)      │
│ Basic    │  Code block + Copy                           │
│ Form     │  Props table                                 │
│ …        │  Related links                               │
└──────────┴──────────────────────────────────────────────┘
```

- **Topbar**：高 56–64；Liquid Glass 壳；右侧 Theme toggle + GitHub  
- **Sidebar**：宽 240；折叠 `<768`；激活态 adjusted cyan（Light）/ cyan（Dark）  
- **Demo canvas**：圆角 16；可切换预览主题；示例外框可用轻玻璃，**避免卡片墙**  
- **Code**：JetBrains Mono；一键复制  
- **API**：Props 表 — Name / Type / Default / Description  

---

## 3. 组件页模板（`/components/:name`）

固定区块顺序：

1. **Title + Intro**  
2. **When to use**（1–3 条）  
3. **Examples**（每例：标题 · Demo · 代码折叠）  
4. **Glass notes**（是否允许 Glass 变体；分层引用）  
5. **API**（Props / Events / Slots if any）  
6. **Accessibility**（焦点、键盘、对比度）  

### 示例命名约定

`Basic` · `Variants` · `Sizes` · `States` · `Glass` · `Dark / Light` · `Disabled / Loading`

---

## 4. P0 视觉规范摘要（对齐冻结 v3）

| Token | Dark | Light |
|---|---|---|
| Stage | `#03040A` | `#FAFAFB` |
| Text | `#EEF2FF` | `#17171C` |
| Muted | `#8B9BB8` | `#5C6578` |
| Accent | `#5CE1E6` | `#0A8A90` |
| Font | Syne / Inter / JetBrains Mono | same |

**Liquid Glass**（控件变体，非卡片墙）：blur 20–40 · saturate 160–180% · specular inset · rim；见 `LIQUID-GLASS.md`。  
**Input**：玻璃描边 + 实色底（防字糊）。  
**Dialog**：Confirm / Form / Detail / Destructive / Scroll。  
**禁止文字伪 icon** — 一律 Lucide 矢量。

### Button
- Variants: Primary · Secondary · Ghost · Destructive · Glass  
- Sizes: sm · md · lg · icon  
- States: Default · Hover · Focus · Disabled · Loading（Lucide loader）

### Input
- States: Default · Hover · Focus · Disabled · Loading · Error  
- Optional leading Lucide icon（SearchField）  
- Glass = border + solid fill（dense form）

### Dialog / Modal
- Types: Confirm · Form · Detail · Destructive · Scroll  
- Theme: Dark · Light · Property: Solid · Glass  
- Compact footer；无按钮下死白

### Tabs
- Active pill + track；Glass track 可选  
- States: Default · Hover · Focus · Disabled · Loading  

---

## 5. 交付物

| Item | Location |
|---|---|
| 本文 IA + 模板 | `design/DOCS-IA.md` |
| Tokens / Glass | `design/tokens.*` · `design/LIQUID-GLASS.md` |
| Figma（文档站专用，不改博客冻结稿） | 待建 `Liquid Glass UI — Docs` |

