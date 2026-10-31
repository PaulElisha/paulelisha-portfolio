# AGENTS.md

## Architecture decisions
- Portfolio is a multi-page SPA (home / work / work/:id / research / research/:id / cv) routed in src/App.tsx; single-page layouts were replaced by the Base44-style structure — why: user migrated their Base44 portfolio code over.
- All portfolio content (ledger, research, cv copy) lives in src/lib/portfolioData.ts (re-exported as src/lib/cvData.ts); pages never hardcode copy — why: one place to edit content.
- Shared page chrome (PageShell, DetailShell, DockNav, PageLoader, ThemeToggle) lives in src/components/site/ — why: every route reuses the same boot loader, dock nav and theme toggle.
- Base44-only pieces from the original code (AuthProvider/login pages, app-params, MCP consent) were intentionally dropped — why: this project has no backend and no auth.
- Typeface is Space Grotesk via @fontsource (user's explicit choice), overriding the pasted theme's Inter/Archivo Black variables — why: user set it deliberately; keep unless they ask.
