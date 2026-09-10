# Liquid Glass UI — P0 组件视觉规范（前端可落地）

**Status**: Design delivery · Docs site  
**Figma (docs, NEW — not blog freeze)**: https://www.figma.com/design/Vb41nSSeDfP08A2T912uaC  
**Reference freeze (do not edit)**: https://www.figma.com/design/cvPXjZWxk5bQZRA4yS4aDh  
**Tokens**: `tokens.css` · `tokens.json` · `LIQUID-GLASS.md` · `DOCS-IA.md`

优先：文档壳 + **Button · Input · Dialog · Tabs**。其余 P0 同 token，按矩阵补齐。

---

## 0. 全局约定

| Item | Spec |
|---|---|
| Grid | 8px |
| Radius control | pill (`9999`) for Button / Tabs pill |
| Radius panel | `16–20` |
| Font UI | Inter |
| Font display | Syne（文档 H1） |
| Font code | JetBrains Mono |
| Icons | Lucide only（禁止文字伪 icon） |
| Themes | Dark default · Light via `data-theme="light"` |
| Glass | Apple Liquid Glass 层：base tint · blur · specular · rim（见 LIQUID-GLASS.md） |
| Dense form Input | **玻璃描边 + 实色底**（防字糊） |
| Non-glass | Checkbox / Radio / Switch / Divider / Table cell |

### Token quick ref

| Token | Dark | Light |
|---|---|---|
| `--bg-stage` | `#03040A` | `#FAFAFB` |
| `--bg-elevated` | `#0F1117` | `#FFFFFF` |
| `--text` | `#EEF2FF` | `#17171C` |
| `--text-muted` | `#8B9BB8` | `#5C6578` |
| `--accent` | `#5CE1E6` | `#0A8A90` |
| `--accent-violet` | `#8B5CFF` | `#6B3FE0` |
| `--danger` | `#FF6B7A` (approx) | `#D1435B` |
| Glass fill | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.55)` |
| Glass stroke | `rgba(255,255,255,0.35)` | `rgba(0,0,0,0.08)` |

---

## 1. Docs shell（Element Plus 对标）

### Topbar · 56–64h · Liquid Glass
- Left: Logo mark + wordmark `Liquid Glass UI`
- Center/right links: Guide · Components · Theme
- Far right: Theme toggle（Sun/Moon Lucide）· GitHub Lucide
- Active link: accent underline or pill

### Sidebar · 240w · sticky
- Groups: Guide / Basic / Form / Data / Navigation / Feedback
- Item height ~36；padding 12/16
- Active: left accent bar 2px OR accent text + soft fill `@0.06`
- Collapses `<768` to drawer

### Content
- Max width ~920 for prose+demo
- Page H1 Syne; intro Inter muted
- Anchor: `Examples` | `API`
- Demo canvas: radius 16; stage bg; optional Light/Dark preview toggle
- Code block: elevated + Mono; Copy button (Lucide copy)

---

## 2. Button

### Variants
| Variant | Dark fill | Dark text | Notes |
|---|---|---|---|
| Primary | `#5CE1E6` | `#03040A` | Solid; hover brighten |
| Secondary | elevated + stroke white@0.14 | text | |
| Ghost | transparent | text | Hover fill white@0.06 |
| Destructive | `#FF6B7A` / soft tint | white or stage | |
| Glass | Liquid Glass stack | text | Specular + rim |

Light: Primary fill `#0A8A90` text white; Glass = light stack.

### Sizes
| Size | Height | Pad X | Font |
|---|---|---|---|
| sm | 32 | 12 | 13 |
| md | 40 | 16 | 14 |
| lg | 48 | 20 | 15 |
| icon | 40×40 | 0 | Lucide 18 |

### States
Default · Hover · Focus（外环 accent 2px offset）· Disabled（opacity ~0.45）· Loading（leading Lucide `loader-circle`，禁用二次点击）

### Composition
Leading / trailing Lucide 16–18；gap 8。

---

## 3. Input

### Anatomy
Label (optional) · Field · Helper/Error · optional leading icon

### Field
- Height md 40 / sm 32 / lg 48
- Radius 12
- **Fill**: solid elevated（Dark `#0F1117` / Light `#FFFFFF`）
- **Stroke**: default white@0.14 / black@0.10；Focus accent 1.5–2；Error danger
- **Glass variant**: stroke uses Liquid Glass rim + fill stays **solid**（勿整块高 blur 盖在字上）
- Placeholder muted；value primary；Mono optional for code-ish fields

### States
Default · Hover（stroke ↑）· Focus · Disabled · Error · Loading（trailing Lucide loader）

### SearchField
Leading Lucide `search` 16；clear optional `x`

---

## 4. Tabs

### Variants
1. **Underline** — active cyan underline 2px  
2. **Pill** — active pill on track  
3. **Glass** — track = Liquid Glass；active pill higher opacity / specular

### States
Default · Hover · Active · Focus · Disabled · Loading（tab 内 loader）

### Sizes
sm / md；item pad 8×12（sm）/ 10×16（md）；gap 4–8

---

## 5. Dialog / Modal

### Types（必须五型）
| Type | Purpose | Footer |
|---|---|---|
| Confirm | 短确认 | Cancel + Primary |
| Form | 表单内容 | Cancel + Submit |
| Detail | 只读详情 | Close |
| Destructive | 危险确认 | Cancel + Destructive |
| Scroll | 长内容可滚动 body | Cancel + Primary |

### Chrome
- Overlay: black `@0.55–0.65`
- Panel: radius 16–20；max-width Confirm 400 / Form 480 / Detail 560 / Scroll 560
- Header: title + optional Lucide close
- Body: 16–24 pad；Scroll type `max-height` + overflow
- Footer: gap 8；右对齐；紧凑无大白底死区
- **Solid** vs **Glass** property：Glass = Liquid Glass panel；Solid = elevated fill

### Themes
Dark · Light 各一套；示例页需矩阵可见

---

## 6. 组件页示例清单（文档）

### Button 页
Basic · Variants · Sizes · Icons · Loading · Glass · Dark/Light

### Input 页
Basic · With icon · Sizes · States · Error · Glass border · Dark/Light

### Tabs 页
Underline · Pill · Glass · Disabled · Dark/Light

### Dialog 页
五型各一 Demo + Solid/Glass 切换说明 + Dark/Light

---

## 7. 前端映射提示

| Design | Code (`packages/ui`) |
|---|---|
| Button Glass | `variant="glass"` + `u-liquid-glass` |
| Input Glass | `variant="glass"` → border glass, fill solid |
| Tabs Glass | `variant="glass"` on list track |
| Dialog type | `type="confirm|form|detail|destructive|scroll"` |
| Theme | `data-theme="dark|light"` on html |

Props 表列在各组件文档页 API 区（Name / Type / Default / Description）。

---

## 8. 验收（设计侧）

- [ ] Figma Docs 文件有：Cover · Docs Shell · Button · Input · Tabs · Dialog  
- [ ] 每组件含 Dark+Light 与关键状态  
- [ ] Dialog 五型可见  
- [ ] 无文字伪 icon  
- [ ] 博客冻结 Figma 零改动  
