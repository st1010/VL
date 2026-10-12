# VIRTUAL LIBRARY · A World of Knowledge Awaits

An interactive browser-based 3D library built to match the Assignment 4 design brief, scene flow, sketches and presentation supplied for Shambhavi Tuli's **Virtual Library** project.

## Fastest way to play

**Open `PLAY_SINGLE_FILE.html` in a modern browser.** Chrome, Edge, Firefox, and Safari are supported in principle; performance will depend on the graphics device and browser.

The standalone HTML is self-contained: no install, server, Unity, npm, external fonts, 3D assets, or internet connection required.

## Editable development files

- `index.html` — interface structure, semantic markup, dialogs, controls.
- `styles.css` — responsive editorial styling, reader view, book covers, navigation.
- `game.js` — procedural 3D library, animation loop, physics-like movement, visual selection, 20-book catalog, reading logic, saved collection, settings, and accessible fallback.
- `PLAY_SINGLE_FILE.html` — complete bundled offline copy.

To edit it, open the directory in any code editor, change the three source files, and refresh `index.html` in a browser. You can publish the source directory using GitHub Pages or another static host; no build step or server back end is needed.

## Explore the library

| Control | Action |
| --- | --- |
| W / A / S / D | Walk through the hall |
| Arrow keys (when exploring) | Walk through the hall |
| Click and drag | Look around |
| Click a highlighted book | Open its information card |
| E | Open books in the nearest collection |
| Section buttons | Instantly visit Fiction, Design, Science or History |
| Catalog tab | Search/select titles without 3D navigation |
| My Library tab | View your saved titles |
| Escape | Close dialogs and reader |
| Left/Right arrows (while reading) | Turn the page |
| Aa (while reading) | Change reading text size and page theme |
| M | Show/hide minimap |

## Features

- A fully modeled, explorable 3D hall with shelves, books, columns, chandeliers, a rear reading area, furniture, lamps and interior decorations. All 3D geometry is generated within the JavaScript.
- Real click targets on books in the 3D scene; book preview panels, decorative book covers, author/title/description, and readable excerpts.
- 20 original short reading samples over four shelves: Fiction, Design, Science, History.
- 3 readable pages per sample, next/previous navigation, optional night reading, adjustable text size, return-to-library controls, and last-page tracking.
- My Library saved collection, unsave button, saved-state confirmation, and local-device storage where the browser permits it.
- Searchable 2D catalog and teleport category buttons as accessible alternatives to first-person movement.
- Adjustable look sensitivity, reduced motion, ambient chimes, keyboard access and clear close/back commands.
- WebGL hardware renderer, with a software-projected Canvas2D fallback for browsers that block WebGL. The fallback uses the same 3D world coordinates, and some materials will look simpler than with graphics acceleration.

## Scope and responsible content

This is a **browser-based interactive 3D prototype, not a headset VR application**. The older Assignment 2 sketch described buying books and headset controls. The newer Assignment 4 brief and scene-flow report describe keyboard/mouse exploration, reading and saving; this implementation follows the newer design.

The reading samples are **original, prototype-only content**. They are not full-length published books, and they are not represented as copyrighted commercial publications. There is no real checkout, purchase, user account or catalog API.

No personally identifiable information is collected. Saved titles/settings are stored in localStorage where allowed; the app functions without storage if the browser denies it. The app sends no analytics and requests no external assets. Device-specific settings may affect WebGL performance or availability.

## QA

- JavaScript syntax validation: passed.
- Browser UI smoke tests in Chromium: welcome, entrance, teleport, direct on-shelf book selection, book preview, saving, reading page turn, My Library, search, filtering, settings, Escape, E, and map controls passed.
- The Chromium test environment had WebGL disabled. The Canvas2D geometry fallback was visually tested. Actual GPU WebGL output has not been verified on the recipient's device.

Made as an interactive realization of the user's supplied academic materials.
