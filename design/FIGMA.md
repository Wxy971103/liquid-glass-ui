# Liquid Glass UI — Figma

**Docs design file (ACTIVE)**: https://www.figma.com/design/Vb41nSSeDfP08A2T912uaC  
**fileKey**: `Vb41nSSeDfP08A2T912uaC`  
**Blog / product freeze (DO NOT EDIT)**: https://www.figma.com/design/cvPXjZWxk5bQZRA4yS4aDh  
**PM review**: Passed 2026-09-10 (required fix: code samples React/TSX — done)

## Pages (built)

| Page | Page ID | Top-level children | Key nodes |
|---|---|---|---|
| Cover | `0:1` | 1 | Cover artboard `1:7` (1440×900) |
| Docs Shell | `1:2` | 4 | Dark `3:2`, Light `6:2`, Tablet `6:72`, Mobile `6:81` |
| Button | `1:3` | 9 | COMPONENT_SET `Button / md Dark` `6:150` (Variant×State, 25) · Sizes · Light row |
| Input | `1:4` | 11 | Dark states · Search+Glass · Sizes · Light states |
| Tabs | `1:5` | 15 | Underline / Pill / Glass × Dark+Light |
| Dialog | `1:6` | 43 | 5 types × Solid/Glass × Dark/Light · Confirm Glass Dark `7:200` |

## Code samples (docs shell)
- Language tab: **TSX** (not Vue)
- Example: `import { LgButton } from "@liquid-glass/ui"` + `<LgButton variant="primary" />`

## Screenshots (local `design/screenshots/`)
- `docs-shell-dark.png` — Docs Shell Desktop Dark
- `docs-shell-light.png` — Docs Shell Desktop Light
- `button-set.png` — Button Variant×State set
- `dialog-confirm-solid-dark.png` — Dialog Confirm Solid Dark
- `dialog-confirm-glass-dark.png` — Dialog Confirm Glass Dark

## Specs
- `DOCS-IA.md` — IA + page template
- `P0-COMPONENTS.md` — visual rules for frontend
- `tokens.css` / `tokens.json` / `LIQUID-GLASS.md`

Status: P0 complete + PM required TSX fix + Light/Glass screenshot archive.
