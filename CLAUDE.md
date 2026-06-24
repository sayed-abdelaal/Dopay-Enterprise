# DoPay Enterprise Portal — Claude Instructions

## Project Overview

A **vanilla HTML/CSS/JS** back-office portal for DoPay. No framework, no build step, no npm. Files are served directly as static HTML.

---

## Project Structure

```
css/
  tokens.css         ← CSS custom properties (single source of truth)
  base.css           ← Reset + typography defaults
  layout.css         ← Shell structure (.bo-shell, .bo-topbar, .bo-header, .bo-main)
  components.css     ← Reusable UI components
  responsive.css     ← Breakpoints (≤900px, ≤1100px)
js/
  tabs.js            ← data-tab-group / data-tab / data-tab-panel
  toggle.js          ← Toggle switches (aria-pressed + .is-on)
  modal.js           ← Modal open/close
  nav.js             ← Navigation behavior
design.md            ← Design system reference (authoritative)
CLAUDE.md            ← This file
```

Pages are standalone `.html` files: `index.html` → `companies.html` → `company/*.html`

---

## Frontend Stack

| Layer | What's used |
|---|---|
| Markup | Plain HTML5 — one `.html` file per page/tab |
| Styling | Vanilla CSS — 5 files loaded in order |
| Scripting | Vanilla JS — plain IIFE modules, no bundler |
| Fonts | "Euclid Circular A", fallback to system sans-serif |
| Icons | Inline SVG — no icon library |
| Server | Static file server (PowerShell `serve.ps1`) |

---

## CSS Architecture

Files must load in this exact order in every HTML page:

```html
<link rel="stylesheet" href="css/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/responsive.css">
```

**Page-specific styles go in a `<style>` block inside the HTML file — never create per-page CSS files.**

---

## JS Architecture

Four small IIFE scripts, each handling one concern. Include only what the page needs via `<script>` tags. Custom page behavior goes in a `<script>` block at the bottom of the HTML file.

JS is purely **DOM-driven via data attributes** — no component framework, no state management.

---

## Naming Conventions

| Prefix | Context |
|---|---|
| `.bo-` | Back-office shell (topbar, header, tabs, main) |
| `.ewa-` | Feature-specific components |
| `.portal-` | Portal-level pages |
| `.landing-` | Landing / entry screens |
| `.btn` | Generic button (paired with `.btn-primary`, `.btn-ghost`) |

**State classes:** `.is-active`, `.is-on`, `.is-disabled`  
**Data attributes for JS:** `data-tab-group`, `data-tab`, `data-tab-panel`, `data-open`, `data-state`

---

## Shell Structure

Every back-office page uses this HTML skeleton:

```html
<div class="bo-shell">
  <header class="bo-topbar">...</header>
  <div class="bo-header">
    <div class="bo-header__inner">
      <div class="bo-header__top">
        <nav class="bo-breadcrumb">...</nav>
      </div>
      <nav class="bo-tabs scroll-hidden">...</nav>
    </div>
  </div>
  <main class="bo-main">...</main>
</div>
```

---

## How to Implement a New Page or Feature

1. **Read `design.md`** — confirm tokens, spacing, and the right page pattern (settings vs. data table vs. landing)
2. **Read an existing similar page** for the exact HTML structure in use
3. **Create the `.html` file** using the shell skeleton above
4. **Link the 5 CSS files** (adjust paths for subdirectory depth, e.g. `../css/` inside `company/`)
5. **Use existing component classes** from `components.css` — avoid writing new CSS unless genuinely needed
6. **Add page-specific styles** in a `<style>` block in the `<head>`
7. **Include only needed JS files** + any custom `<script>` at bottom of `<body>`
8. **Verify in the preview** — take a screenshot before reporting done

---

## Dev Server

No Node.js installed. Server runs via PowerShell:

```
.claude/launch.json  ← preview_start config (uses powershell + serve.ps1)
serve.ps1            ← static file server on port 3000
```

Start with: `preview_start("dopay-enterprise")`

---

## Design System Reference

`design.md` is the authoritative source for all visual decisions:
- Brand colors, typography scale, spacing rhythm
- Border radius, shadows, transitions
- Component specs (cards, buttons, toggles, tables, modals, etc.)
- Responsive breakpoints
- Accessibility requirements

`tokens.css` maps every value in `design.md` to a CSS custom property (`--color-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--transition-*`). Always use tokens — never hardcode values.
