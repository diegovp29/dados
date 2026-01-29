# Copilot Instructions for Dado Project

## Project Overview
Dado is a static web application served through Laragon (a local development server running at `c:\laragon\www\dado`). The project uses vanilla HTML/CSS/JavaScript with no build process or external dependencies.

## Architecture & Directory Structure

- **index.html** — Single page entry point with Galician language (`lang="gl"`)
- **css/style.css** — All styling (currently empty; contains centralized styles for the page)
- **js/script.js** — All client-side logic (currently empty; no external libraries)
- **data/** — Static JSON or data files (currently empty; reserved for content)
- **img/** — Image assets

**Key principle**: Keep the project flat and simple. No build step, no package.json, no npm dependencies.

## Development Workflow

1. **Local Server**: Access the project via Laragon at `http://localhost` (or configured port)
2. **No Build Required**: Changes to .html/.css/.js are live-refreshed in browser
3. **Testing**: Manual browser testing; use browser DevTools for debugging

## Code Conventions

### HTML
- Use semantic HTML5 tags
- Include `lang="gl"` attribute (Galician language support)
- Keep structure minimal; avoid unnecessary divs
- Always include viewport meta tag for responsive design

### CSS (style.css)
- Write vanilla CSS only (no preprocessors)
- Use simple class-based selectors
- Organize rules by component/section with comments
- Mobile-first approach recommended (though not enforced)

### JavaScript (script.js)
- Vanilla JavaScript only; no frameworks
- Use `const`/`let` (no `var`)
- Keep DOM manipulation minimal and performant
- Wrap code in an IIFE or use strict mode: `'use strict';`

## Integration Points & Data Flow

- **HTML → CSS**: Link stylesheet in `<head>`; use class/id selectors
- **HTML → JS**: Link script at end of `<body>`; listen to DOM ready events
- **Data Loading**: If needed, use `fetch()` API to load JSON from `/data/` directory
- **Image References**: Point to `/img/` directory; use relative paths

## When Adding Features

- **New Styles**: Add to `css/style.css` with descriptive comments
- **New Functionality**: Add to `js/script.js`; ensure no global scope pollution
- **New Data**: Create JSON files in `data/` and reference them via fetch

## Special Notes

- Project is Galician-language aware (metadata set in HTML)
- All files are served statically; no server-side processing
- Keep file sizes minimal for fast loading
