---
name: rj-brand-system
description: "Authoritative RJ Business Solutions Brand Universe design system, CSS tokens, Space Grotesk/Inter typography, HTML scaffolds, UI components, tone of voice, and brand compliance for all apps, funnels, web pages, and documents."
---

# RJ Business Solutions · Brand System Skill

Use this skill whenever designing or implementing any frontend UI, landing page, dashboard, document, email, social asset, or funnel for Rick Jefferson / RJ Business Solutions.

## Core Tokens Cheat Sheet

### CSS Variables
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --rj-blue: #2563eb;
  --rj-sky: #0ea5e9;
  --rj-deep: #1e3a8a;
  --rj-navy: #0f172a;
  --rj-white: #ffffff;
  --rj-soft: #f8fafc;
  --rj-light: #eff6ff;
  --rj-border: #bfdbfe;
  --rj-muted: #dbeafe;
  --rj-text: #0f172a;
  --rj-muted-text: #475569;
  --rj-line: #e2e8f0;

  --font-head: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Grotesk", ui-monospace, monospace;

  --grad-primary: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
  --grad-dark: linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%);
  --grad-light: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);

  --logo-url: url("https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg");
}
```

## Standard HTML Scaffold
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RJ Business Solutions</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="brand.css">
</head>
<body>
  <!-- Header / Navigation -->
  <header style="background: var(--rj-navy); color: #fff; padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <img src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" alt="RJ Business Solutions" style="height: 36px; border-radius: 6px;">
      <span style="font-family: var(--font-head); font-weight: 700; font-size: 1.1rem; letter-spacing: -0.02em;">RJ BUSINESS SOLUTIONS</span>
    </div>
  </header>
</body>
</html>
```

## Available Global Brand Assets
- **Design Tokens**: `~/.gemini/config/brand/tokens.json` & `tokens.css`
- **Master CSS**: `~/.gemini/config/brand/brand.css`
- **SVG Icon Pack**: `~/.gemini/config/brand/icons.svg`
- **Photos of Rick**: `~/.gemini/config/brand/photos/` (`rick-hero.jpg`, `rick-vision.jpg`, `rick-vault.jpg`, `rick-portrait.jpg`, `rick-signing.jpg`, `rick-circuit.jpg`)
- **Master Documentation**: `~/.gemini/config/brand/RJ-MASTER.md`
