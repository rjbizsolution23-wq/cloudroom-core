---
name: tailwind-tailwind-v4
description: "Next-gen Tailwind v4 utility composition, CSS-only config overrides, and performance optimizations."
---

# Tailwind CSS Core Team Engineering Rules (v4.x)

Guidelines for utilizing Tailwind CSS v4 in production web apps.

## 🎨 CSS-Only Configuration & Design Tokens
1. **No tailwind.config.js**: Tailwind v4 uses a purely CSS-based configuration. Define your custom fonts, animation scales, and color themes directly using `@theme` syntax inside your `globals.css` file.
2. **Tailwind Directives**: Import Tailwind CSS using `@import "tailwindcss";` at the top of your global CSS sheet.
3. **Variable Overrides**: Map customized CSS variables directly inside the design system to ensure seamless dark mode transitions using HSL tailoring.
