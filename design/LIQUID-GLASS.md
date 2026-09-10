# Apple Liquid Glass — Material Spec (web-implementable approximation)

**Status**: **Frozen** — Design v3 user-approved 2026-09-10 · Figma https://www.figma.com/design/cvPXjZWxk5bQZRA4yS4aDh · Do not change visual baseline without a new product change request.
**Figma**: https://www.figma.com/design/cvPXjZWxk5bQZRA4yS4aDh · Foundations board section **Apple Liquid Glass — material stack** (node `59:2`)  
**v3 对照**: Foundations Glass card + theme blurbs say **Apple Liquid Glass (not frosted)** — material tokens on-canvas: **blur · saturate · specular · rim/edge**  
**Companion**: `LIGHT-THEME.md` · `FRONTEND-HANDOFF.md` · `V3-REWORK-CHECKLIST.md`

This is a **web-implementable approximation** of Apple’s Liquid Glass language (multi-layer refraction + specular + blur). It is **not** a flat frosted fill + single blur.

---

## 1. Layer stack (dark)

Apply layers from back → front on the glass surface:

| # | Layer | Spec | CSS / Figma approx |
|---|---|---|---|
| 1 | **Base tint** | `rgba(255,255,255,0.06–0.10)` with slight cool bias (tiny blue toward `#EEF2FF`) | `background-color` / solid fill opacity 0.06–0.10; cool bias e.g. `rgba(238,242,255,0.08)` |
| 2 | **Backdrop blur** | `20–40px` + optional `saturate(160–180%)` | `backdrop-filter: blur(20–40px) saturate(160–180%)`; Figma `BACKGROUND_BLUR` radius **40** (≈20px CSS; Figma uses 2×) — use stronger blur than legacy frosted 16 |
| 3 | **Specular top highlight** | Linear white `0.35 → 0` inset ~1px (or inner shadow) | `box-shadow: inset 0 1px 0 rgba(255,255,255,0.35)` or Figma `INNER_SHADOW` offset `(0,1)`, color white @ 0.35, radius 0–2 |
| 4 | **Edge refraction ring** | 1px border, gradient-ish: top/left lighter white `@0.35–0.45`, bottom/right `@0.08–0.12` | Dual strokes or `border-image` / layered borders; Figma: primary stroke white @ ~0.22–0.35 + optional second inset stroke darker on bottom |
| 5 | **Soft ambient bloom** (optional) | Outer shadow cyan/violet at very low opacity | `box-shadow: 0 8px 32px rgba(92,225,230,0.06), 0 4px 24px rgba(139,92,255,0.05)` |
| 6 | **Continuous corner radius** | Pill for buttons/nav; **16–20** for panels | `--radius-pill` / `border-radius: 16px–20px` |

**Default dark chip recipe (Figma)**

- Fill: `#FFFFFF` @ **0.08** (cool bias via near-white blue if available)  
- Stroke: `#FFFFFF` @ **0.35** (top emphasis via annotation; uniform stroke as approx) + optional second stroke `@0.10`  
- Effects: `BACKGROUND_BLUR` **40** + `INNER_SHADOW` white `@0.35`, offset y=1, radius 0–2  
- Optional DROP_SHADOW cyan/violet `@0.04–0.06`

---

## 2. Layer stack (light)

| Layer | Spec |
|---|---|
| Base tint | White fill `@0.45–0.65` — **avoid dirty grey** |
| Border | Black `@0.06–0.10` |
| Specular | Still **white** inset highlight (`@0.55–0.85`) |
| Blur | `16–28px` (+ optional saturate 140–160%) |
| Radius | Same as dark (pill / 16–20 panels) |
| Bloom | Soft black or cool violet at **very** low opacity (optional) |

```css
[data-theme="light"] .u-liquid-glass {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.75),
    0 8px 28px rgba(107, 63, 224, 0.04);
  border-radius: 16px; /* or pill for controls */
}
```

---

## 3. Motion / interaction

| State | Behavior |
|---|---|
| **Hover** | Slightly ↑ specular opacity + border brightness (e.g. highlight 0.35→0.45; border top 0.40→0.50; fill +0.02–0.04) |
| **Press / Active** | ↓ highlight (specular softer / shorter); fill may tick up slightly for “pressed glass” |
| **Focus** | Keep liquid stack; add focus ring (cyan / adjusted cyan) **outside** the refraction ring — do not replace glass with solid |
| **Disabled** | Lower overall opacity (~0.45–0.55); keep structure, mute specular |

---

## 4. Fallback (no `backdrop-filter`)

When `backdrop-filter` is unsupported or reduced-transparency prefers solid:

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .u-liquid-glass {
    background: var(--color-bg-elevated); /* elevated solid ~0.96 */
    border: 1px solid rgba(255, 255, 255, 0.14); /* dark */
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.20);
    /* light: border rgba(0,0,0,0.08); fill #FFFFFF */
  }
}
```

Also respect `prefers-reduced-transparency: reduce` → same elevated solid + soft border path.

---

## 5. Where Liquid Glass applies / does **not**

### Required / preferred Glass surfaces (v3)

Nav · Tabs · Button (Glass) · SearchField · Select trigger · Dialog / Drawer panel · Toast · Pagination container · Admin Sidebar / Topbar / card shells · instrument whitelist (`GlassPane`, HUDs, etc.)

### Still **NO** full Liquid Glass bodies

- **Checkbox / Radio / Switch** bodies  
- **Tooltip**  
- **Divider**  
- **Table** cell interiors  

### Dense forms (Input / Textarea)

**Solid fill + liquid edge only** — glass border / refraction ring, **no** high backdrop blur over text:

```css
.u-input-dense {
  background: var(--color-bg-elevated);
  border: 1px solid rgba(255, 255, 255, 0.22); /* dark liquid edge */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
  /* no backdrop-filter on the field body */
}
```

### Still banned

Meaningless frosted **card grids** / portfolio tile walls.

---

## 6. CSS reference (dark default)

```css
.u-liquid-glass {
  background: rgba(238, 242, 255, 0.08); /* cool-biased base tint */
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-top-color: rgba(255, 255, 255, 0.40);
  border-left-color: rgba(255, 255, 255, 0.35);
  border-right-color: rgba(255, 255, 255, 0.10);
  border-bottom-color: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(28px) saturate(170%);
  -webkit-backdrop-filter: blur(28px) saturate(170%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 10px 36px rgba(92, 225, 230, 0.05),
    0 6px 24px rgba(139, 92, 255, 0.04);
  border-radius: 9999px; /* pill — panels use 16–20px */
}

.u-liquid-glass:hover {
  background: rgba(238, 242, 255, 0.11);
  border-top-color: rgba(255, 255, 255, 0.50);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    0 10px 36px rgba(92, 225, 230, 0.07),
    0 6px 24px rgba(139, 92, 255, 0.05);
}

.u-liquid-glass:active {
  background: rgba(238, 242, 255, 0.10);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
}
```

**Figma ↔ CSS blur note**: Figma `BACKGROUND_BLUR` radius is roughly **2×** the CSS `blur()` px value used in product CSS. Prefer documenting both (e.g. Figma 40 ≈ CSS ~20px; Figma 56 ≈ CSS ~28px).

---

## 7. Annotation wording

Rename / prefer: **“Liquid Glass (Apple-aligned)”**  
Avoid: “frosted”, “simple frosted glass”, “frost only”.

---

## 8. Tokens (align with existing glass tokens)

| Token | Dark | Light |
|---|---|---|
| `--color-glass-fill` | `rgba(255,255,255,0.06–0.10)` cool | `rgba(255,255,255,0.45–0.65)` |
| `--color-glass-border` | top/left light, bottom/right soft | `rgba(0,0,0,0.06–0.10)` |
| `--color-glass-highlight` | white `@0.35` (hover `@0.45`) | white `@0.55–0.85` |
| `--blur-glass` | `20–40px` | `16–28px` |
| `--radius-glass-panel` | `16–20px` | same |
| `--radius-pill` | pill | same |

---

*Do not claim 可过审 from this doc alone — see `V3-REWORK-CHECKLIST.md`.*
