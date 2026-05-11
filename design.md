# DoPay Back-Office Design System

A reusable design guide extracted from the DoPay Enterprise Portal (EWA configuration UI). Use this document as a reference when building new back-office or enterprise admin interfaces with the same visual language.

---

## 1. Brand & Identity

**Product name:** DoPay Enterprise Portal  
**Primary brand color:** Purple — `#6e37cc`  
**Design personality:** Clean, minimal, professional. Subtle shadows, soft borders, no flashy gradients inside the app. Purpose-built for back-office operators, not consumers.

---

## 2. Typography

**Primary font stack:**
```css
font-family: "Euclid Circular A", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

> "Euclid Circular A" is the preferred brand typeface. The stack gracefully degrades to system sans-serif fonts.

### Type Scale

| Use case | Size | Weight | Color |
|---|---|---|---|
| Hero / landing headline | `clamp(34px, 5vw, 48px)` | 400 | `#181818` |
| Page / portal title | `38px` | 400 | `#181818` |
| Section title | `18px` | 500 | `#181818` |
| Card heading (v2) | `20px` | 500 | `#181818` |
| Modal title | `18px` | 600 | `#181818` |
| Body / field label | `14px` | 500 | `#181818` |
| Body / help text | `13–14px` | 400 | `#5f5e5f` |
| Small / meta | `12–13px` | 400–500 | `#5f5e5f` |
| Eyebrow / label chip | `11–12px` | 700 | varies |
| Table header | `11px` | 700 | `#5f5e5f` |

### Heading Rules
- Large hero headings use tight `letter-spacing: -0.04em`
- Section eyebrow labels use `text-transform: uppercase`, `letter-spacing: 0.08em`, color `#6e37cc`
- Table headers use `text-transform: uppercase`, `letter-spacing: 0.04em`
- Font numbers (amounts, IDs) use `font-variant-numeric: tabular-nums`

---

## 3. Color Palette

### Brand Purple
| Token | Value | Usage |
|---|---|---|
| Primary | `#6e37cc` | CTAs, active states, links, icons |
| Primary hover | `#5f2fc0` / `#5d2eb2` | Button hover, link hover |
| Primary light | `#f1eafe` | Active nav backgrounds, selected states |
| Primary muted | `#e0d1fa` | Disabled primary button, badge bg |
| Primary border | `#d7c6f5` / `#c7b0ee` | Version switcher border, active nav border |
| Deep purple | `#3d0f8a` | Badge text on light purple bg |
| Nav active | `#201d34` | Split-nav default text |

### Teal / Success
| Token | Value | Usage |
|---|---|---|
| Teal badge bg | `#cce6e5` | Status badges, chips |
| Teal text | `#004d4a` | Badge text, enabled status label |
| Teal active | `#00807c` | Employee enabled status |

### Neutrals
| Token | Value | Usage |
|---|---|---|
| Ink (darkest) | `#181818` | Primary text, headings |
| Dark shell | `#1b1b1b` | Topbar background |
| Body bg | `#f8f7f8` | Page background |
| Surface | `#ffffff` | Cards, inputs, menus |
| Subtle bg | `#f3f1f6` | Disabled inputs, muted backgrounds |
| Toolbar bg | `#f1eff1` / `#efecf2` | Pill group bg, search bg |
| Muted text | `#5f5e5f` | Descriptions, help text, secondary labels |
| Placeholder | `#b9b3c2` | Input placeholders |
| Lighter muted | `#726a86` / `#7f7592` / `#8a8495` | Various subtle labels |
| Disabled | `#8c839b` | Disabled text/icons |
| Divider | `rgba(24, 24, 24, 0.08)` | All borders, separators |
| Card border | `rgba(24, 24, 24, 0.06)` | Card outer border |

### Semantic
| Token | Value | Usage |
|---|---|---|
| Error / warning | `#d44e2c` | Unsaved changes note |
| Inactive toggle | `#bebcbe` | Toggle off state |

### Landing page only
```css
background: linear-gradient(180deg, #f8f7f8 0%, #f2eef6 100%);
```

---

## 4. Spacing System

Spacing follows a base-4 / base-8 rhythm.

| Scale | Value | Common use |
|---|---|---|
| XS | `4px` | Tight icon gaps, micro padding |
| SM | `8px` | Badge padding, gap between small elements |
| MD | `12px` | Input padding, toolbar gaps |
| LG | `16px` | Modal padding, table cell padding |
| XL | `18px` | Section spacing, card padding |
| 2XL | `24px` | Section internal padding |
| 3XL | `32px` | Section horizontal padding, page padding |
| 4XL | `36px` | Portal/topbar horizontal padding |
| Page bottom | `96px` | Main content bottom padding |

---

## 5. Border Radius

| Element | Radius |
|---|---|
| Landing card | `20px` |
| Split nav container | `18px` |
| Version switcher menu | `16px` |
| Split nav button (active) | `14px` |
| Cards / modals | `14px` |
| Buttons (default) | `8px` |
| Inputs / selects | `8px` |
| Search bar | `10px` |
| Pill group container | `8–10px` |
| Pill group buttons | `6–8px` |
| Badges / chips / toggles | `999px` (full pill) |
| Table action button | `10px` |
| Landing CTA | `12px` |

---

## 6. Shadows & Elevation

```css
/* Card / standard surface */
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);

/* Floating menu / dropdown */
box-shadow: 0 12px 32px rgba(25, 24, 38, 0.1);

/* Version switcher toggle */
box-shadow: 0 10px 24px rgba(25, 24, 38, 0.12);

/* Modal dialog */
box-shadow: 0 24px 60px rgba(32, 29, 52, 0.18);

/* Landing card */
box-shadow: 0 20px 60px rgba(31, 26, 43, 0.08);

/* Focus ring (all interactive elements) */
box-shadow: 0 0 0 3px rgba(110, 55, 204, 0.18);

/* Toggle hover ring */
box-shadow: 0 0 0 4px rgba(110, 55, 204, 0.08);

/* Active pill in pill-group */
box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08–0.1);
```

---

## 7. Layout

### Shell Structure
```
.bo-shell                  ← full-height flex column
  .bo-topbar               ← dark top bar (branding + org context)
  .bo-header               ← white sub-header (breadcrumb + tabs)
  .bo-main                 ← max-width 1280px, centered, padded
```

### Main Content Width
```css
max-width: 1280px;
margin: 0 auto;
padding: 32px 36px 96px;
```

### Split Layout (Settings pages)
```css
display: grid;
grid-template-columns: 220px minmax(0, 1fr); /* or 250px for wider versions */
gap: 18px;
align-items: start;
```
The left column is a sticky sidebar nav; the right column is the content area.

### Field Layout (Two-column form rows)
```css
display: grid;
grid-template-columns: 1fr 380px;
gap: 24px 32px;
align-items: start;
```
Left: label + help text. Right: control (input, toggle, select, etc.)

### Two-Column Card Grid
```css
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 18px;
```

### Modal
```css
width: min(448px, calc(100vw - 32px));
border-radius: 14px;
```

---

## 8. Components

### 8.1 Topbar
- Background: `#1b1b1b` (near-black)
- Flex row, space-between, `padding: 10px 36px`
- Contains logo/branding on left, user context on right
- Environment pills: `background: rgba(255,255,255,0.1)`, `color: #ebe6f2`, uppercase, 10px font

### 8.2 Header & Breadcrumb
- White background, `border-bottom: 1px solid rgba(24,24,24,0.08)`
- Breadcrumb: `font-size: 13px`, separators `#bebcbe`, active link `#6e37cc`
- Tabs sit at bottom of header, flush with border

### 8.3 Navigation Tabs (Top-level)
```css
.bo-tab {
  padding: 11px 16px;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  color: #5f5e5f;
}
.bo-tab.active {
  color: #6e37cc;
  border-bottom-color: #6e37cc;
  font-weight: 500;
}
```

### 8.4 Card
```css
.ewa-card {
  background: #ffffff;
  border: 1px solid rgba(24, 24, 24, 0.06);
  border-radius: 14px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
}
```
Cards contain sections separated by `border-top: 1px solid rgba(24,24,24,0.08)`.

### 8.5 Section (inside card)
```css
.ewa-section {
  padding: 24px 32px;
}
.ewa-section__label   { color: #6e37cc; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.ewa-section__title   { font-size: 18px; font-weight: 500; color: #181818; }
.ewa-section__desc    { font-size: 13px; color: #5f5e5f; max-width: 640px; }
```

### 8.6 Toggle Switch
```css
/* Off */
background: #bebcbe;  width: 36px; height: 20px; border-radius: 999px;
/* On */
background: #6e37cc;
/* Knob moves 16px right on .is-on */
```
Hover adds a soft purple glow ring. Focus adds the universal focus ring.

### 8.7 Inputs & Selects
```css
height: 40px;
border: 1px solid rgba(24, 24, 24, 0.16);
border-radius: 8px;
font-size: 14px;
padding: 0 12px;
```
- Hover: border `rgba(24,24,24,0.26)`
- Focus: border `#6e37cc`
- Disabled: border `rgba(24,24,24,0.08)`, background `#f3f1f6`, text `#8c839b`

Select uses a custom chevron SVG via `background-image`.

**Small select:**
```css
height: 32–34px; padding: 0 28px 0 10px; font-size: 14px;
```

### 8.8 Buttons

**Primary:**
```css
background: #6e37cc; color: #ffffff; height: 40px; padding: 0 16px;
border-radius: 8px; font-size: 14px; font-weight: 500;
/* Hover */ background: #5f2fc0;
/* Disabled */ background: #e0d1fa;
```

**Ghost:**
```css
background: #ffffff; border: 1px solid rgba(24,24,24,0.16); color: #181818;
/* Hover */ border-color: rgba(24,24,24,0.26); background: #f8f7f8;
```

**Text / Link button:**
```css
color: #6e37cc; font-size: 13px; font-weight: 500;
padding: 2px 6px; border-radius: 4px;
/* Hover */ color: #5f2fc0; background: rgba(110,55,204,0.08);
```

**Landing CTA:**
```css
height: 48px; border-radius: 12px; background: #6e37cc;
font-size: 15px; font-weight: 700;
/* Hover */ background: #5d2eb2; transform: translateY(-1px);
```

### 8.9 Pill Group (Segmented Control)
```css
.ewa-pill-group {
  display: inline-flex; padding: 4px; background: #efecf2; border-radius: 10px;
}
.ewa-pill-group__btn { padding: 8px 18px; border-radius: 8px; font-size: 14px; }
.ewa-pill-group__btn.is-active {
  background: #ffffff; color: #181818;
  box-shadow: 0 1px 0 rgba(0,0,0,0.08);
}
```

### 8.10 Inline Tab Nav
```css
.ewa-inline-nav {
  padding: 4px; border: 1px solid rgba(24,24,24,0.08);
  border-radius: 12px; background: #ffffff;
}
.ewa-inline-nav__btn { padding: 10px 14px; border-radius: 10px; }
.ewa-inline-nav__btn.is-active { background: #f1eafe; color: #6e37cc; }
```

### 8.11 Split (Sidebar) Nav
```css
.ewa-split-nav {
  position: sticky; top: 28px;
  padding: 12px; border: 1px solid #ebe6f2;
  border-radius: 18px; background: #ffffff;
  box-shadow: 0 1px 0 rgba(0,0,0,0.08);
}
.ewa-split-nav__btn {
  padding: 12px 14px; border-radius: 14px;
  font-size: 14px; font-weight: 500; color: #201d34;
}
.ewa-split-nav__btn.is-active {
  border: 1px solid #c7b0ee;
  background: #f1eafe; color: #6e37cc;
}
```

### 8.12 Subtabs (Secondary Tab Bar)
```css
.ewa-subtabs { border-bottom: 1px solid rgba(24,24,24,0.08); }
.ewa-subtabs__btn {
  padding: 12px 16px;
  border-bottom: 2px solid transparent;
  font-size: 14px; color: #5f5e5f;
}
.ewa-subtabs__btn.is-active { color: #6e37cc; border-bottom-color: #6e37cc; }
/* Count badge inside tab */
.ewa-subtabs__count {
  padding: 2px 7px; border-radius: 999px;
  background: #edebed; color: #5f5e5f; font-size: 11px;
}
.ewa-subtabs__btn.is-active .ewa-subtabs__count {
  background: #e0d1fa; color: #3d0f8a;
}
```

### 8.13 Table
```css
.ewa-table th {
  padding: 12px 16px; background: #f8f7f8;
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.04em; color: #5f5e5f;
  border-bottom: 1px solid rgba(24,24,24,0.08);
}
.ewa-table td {
  padding: 14px 16px; font-size: 14px; color: #181818;
  border-bottom: 1px solid rgba(24,24,24,0.06);
}
```

**Name cell with avatar:**
```css
.ewa-avatar {
  width: 32px; height: 32px; border-radius: 999px;
  background: #e3d5f3; color: #6f42c1; font-size: 13px; font-weight: 600;
}
.ewa-name-cell__primary  { font-size: 14px; font-weight: 500; color: #181818; }
.ewa-name-cell__secondary { font-size: 12px; color: #999999; }
```

### 8.14 Badges & Status Chips
```css
/* Teal — active/enabled */
background: #cce6e5; color: #004d4a;

/* Purple — branded */
background: #e0d1fa; color: #3d0f8a;

/* Generic chip */
padding: 3–4px 8–10px; border-radius: 999px; font-size: 12px; font-weight: 500;
```

### 8.15 Search Bar
```css
.ewa-search {
  display: inline-flex; align-items: center; gap: 10px;
  height: 34px; padding: 0 12px;
  border-radius: 10px; background: #f1eff1;
}
/* Input inside is borderless, transparent bg */
.ewa-search__input::placeholder { color: #b9b3c2; }
```

### 8.16 Toolbar
```css
display: flex; align-items: center; justify-content: space-between;
gap: 16px; padding: 10–16px 16px;
border-bottom: 1px solid rgba(24,24,24,0.06);
```

### 8.17 Modal
```css
/* Backdrop */
background: rgba(24, 24, 24, 0.24);
/* Dialog */
width: min(448px, calc(100vw - 32px));
border-radius: 14px; overflow: hidden;
box-shadow: 0 24px 60px rgba(32, 29, 52, 0.18);
/* Sections: header 20/12px, body 8/18px, footer 16/16px — all 24px side */
/* Footer has border-top: 1px solid rgba(24,24,24,0.08) */
```

### 8.18 Pagination
```css
/* Arrow button */
border: 0; background: transparent; color: #5f5e5f; font-size: 22px;
/* Active page pill */
width: 28px; height: 28px; border-radius: 8px; background: #6e37cc; color: #fff;
```

### 8.19 Eyebrow / Label Chip (Landing)
```css
background: #ede6fa; color: #6e37cc;
padding: 5px 10px; border-radius: 999px;
font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
```

---

## 9. Interactive States

All interactive elements share a **universal focus ring**:
```css
outline: 0;
box-shadow: 0 0 0 3px rgba(110, 55, 204, 0.18);
```

Apply this to: buttons, toggles, inputs, selects, nav items, and any focusable element.

### State Summary
| State | Visual |
|---|---|
| Default | Base styles |
| Hover | Slightly darker border / bg; buttons get `#5f2fc0` |
| Focus | Purple ring `rgba(110,55,204,0.18)` |
| Active/Selected | Purple bg `#f1eafe`, purple text `#6e37cc`, purple border |
| Disabled | Opacity 0.55 or muted colors `#8c839b`, `cursor: not-allowed` |
| On (toggle) | `#6e37cc` background |
| Off (toggle) | `#bebcbe` background |

---

## 10. Motion & Transitions

All transitions are **fast and subtle**. Nothing dramatic.

```css
/* Standard interactive transition */
transition: background-color 0.16s ease, border-color 0.16s ease, color 0.16s ease, box-shadow 0.16s ease, opacity 0.16s ease;

/* Toggle knob */
transition: transform 0.15s ease;

/* Toggle background */
transition: background-color 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;

/* Landing CTA */
transition: background 0.2s ease, transform 0.2s ease;
```

---

## 11. Responsive Breakpoints

### ≤ 1100px
- Version switcher shifts from `right: 72px` to `right: 24px`

### ≤ 900px
```css
/* Split layout collapses to single column */
.ewa-split-layout { grid-template-columns: 1fr; }

/* Sticky nav becomes static */
.ewa-split-nav { position: static; }

/* Toolbars / footers stack vertically */
flex-direction: column; align-items: stretch;

/* Form fields collapse to single column */
.ewa-field { grid-template-columns: 1fr; gap: 12px; }

/* Input pairs collapse */
.ewa-input-pair { grid-template-columns: 1fr; }

/* 2-col grid collapses */
.ewa-v2-grid { grid-template-columns: 1fr; }

/* Page/portal horizontal padding reduces */
padding-left: 20px; padding-right: 20px;
```

---

## 12. Accessibility

- All interactive elements have `focus-visible` styles with a purple ring
- `outline: 0` is always paired with a `box-shadow` focus replacement
- Toggle buttons use `aria-pressed`
- Nav landmarks use `aria-label`
- `cursor: not-allowed` on all disabled states
- Scrollbar hidden on tab overflow via `::-webkit-scrollbar { display: none }`

---

## 13. Page / Screen Patterns

### Landing / Entry Screen
- Centered card on gradient background
- `landing-shell` full-height flex centering
- Card: white glass, `border-radius: 20px`, max-width 560px
- Eyebrow → H1 → subtitle → CTA button

### Back-Office Shell
- Dark topbar → white header with tabs → light grey content area
- Content max-width 1280px, centered

### Settings Page
- Split layout: sticky sidebar nav left, scrolling content right
- Content: card with labeled sections separated by hairlines
- Each section: eyebrow label → title → description → field rows
- Field row: label+help left | control right (toggle, select, input)
- Unsaved changes bar at top of heading row
- Action row (Save/Cancel) at bottom of content, right-aligned

### Data / Activity Page
- Stats strip at top (summary numbers)
- Toolbar with filter controls and segmented pill group
- Subtabs for data grouping
- Full-width table with avatar name cells
- Footer with record count and pagination

---

## 14. Naming Conventions

| Prefix | Context |
|---|---|
| `.bo-` | Back-office shell (topbar, header, tabs, main) |
| `.ewa-` | Feature-specific (EWA configuration) |
| `.portal-` | Portal-level pages |
| `.landing-` | Landing / entry screens |
| `.btn` | Generic button (paired with `.btn-primary`, `.btn-ghost`) |

**State classes:** `.is-active`, `.is-on`, `.is-disabled`  
**Data attributes for JS:** `data-open`, `data-version`, `data-v4-enabled`, `data-state`, `data-page`

---

## 15. Quick-Start Checklist for New Projects

When starting a new project based on this design system:

1. **Set the font** — Import "Euclid Circular A" (or replace with Inter/Plus Jakarta Sans as fallback)
2. **Set body/bg** — `background: #f8f7f8`, `color: #181818`
3. **Define CSS variables** for the core palette (purple, teal, neutrals)
4. **Copy the shell** — `.bo-shell > .bo-topbar + .bo-header + .bo-main`
5. **Use the card + section** pattern for all settings/config content
6. **Apply the universal focus ring** to every interactive element
7. **Use `0.16s ease` transitions** on all hover/active states
8. **Collapse gracefully** at 900px — single-column fields, stacked toolbars
9. **Stick to the spacing rhythm** — multiples of 4 or 8
10. **Keep shadows subtle** — only use the 4 elevation levels defined above
