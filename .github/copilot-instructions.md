# Copilot Instructions for Dado

Short, actionable guidance for AI coding agents working in this repo.

Overview
- Single-page static site served from the local Laragon webroot (project root: c:\laragon\www\dado).
- No build step, no package manager. Edit files directly and refresh the browser to see changes.

Key files
- [.github/copilot-instructions.md](.github/copilot-instructions.md) — this file.
- [index.html](index.html) — page structure; `lang="gl"` is set.
- [css/style.css](css/style.css) — all styling (mobile-first, class-based selectors).
- [js/script.js](js/script.js) — app logic; vanilla JS only.
- [data/](data/) — static JSON data the site may fetch from (use `/data/<file>.json`).
- [img/](img/) — static image assets.

Big picture
- Static SPA-like page: `index.html` provides markup, `css/style.css` provides layout, and `js/script.js` wires behavior and optional `fetch()` data loads from `data/`.
- Keep changes minimal and focused: prefer editing existing files over adding tooling or build configs.

Conventions & patterns (project-specific)
- Vanilla JS only. Wrap top-level code in an IIFE and use `'use strict';`.
	Example pattern in `js/script.js`:
	(function(){
		'use strict';
		const state = {};
		function init(){ document.addEventListener('DOMContentLoaded', () => { /* mount app */ }); }
		init();
	})();
- Avoid creating globals. If a global is necessary, expose a single namespace like `window.Dado = {}`.
- Data files live under `data/` and are fetched with relative paths: `fetch('/data/items.json')` (check Network tab when debugging).
- CSS: single stylesheet `css/style.css`. Use descriptive class names and keep layout rules together.

Development workflow
- Serve with Laragon (project in Laragon's www folder). Open the site in a browser at the configured host (commonly `http://localhost/dado` or `http://localhost`).
- No build: edit `.html`, `.css`, or `.js` and refresh.
- Debugging: use browser DevTools Console/Network to inspect JS errors and fetch requests. Use `console.log` sparingly.

When modifying the repo
- Do not introduce npm/node tooling unless explicitly requested — this project is intentionally dependency-free.
- Keep changes localized to the relevant files listed above. Add new JSON files in `data/` for content.

Examples of actionable tasks for AI agents
- Add a new UI behavior: modify `js/script.js`, follow the IIFE pattern, add DOM event listeners, and update `index.html` with minimal markup.
- Add a data file: create `data/foo.json` and update `js/script.js` to `fetch('/data/foo.json')` and render the result.

Ask for clarification when
- A requested change implies adding build tooling, linters, or package manifests — ask whether to keep the repository dependency-free.
- The user wants to run automated tests — none exist; confirm desired test framework before adding one.

If something is unclear, ask which URL/host Laragon is configured to serve this project from, and whether adding toolchain files is permitted.

---
Please review and tell me which sections to expand or examples you'd like added.
