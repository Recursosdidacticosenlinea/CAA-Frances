# Français pour tous — notes for Claude Code

Static website (no build step) of general French units (A1–C2) for students of any faculty, CAA Virtual (BUAP).
Same engine as the sibling site English for Communication, translated into French (UI strings, French TTS voices, accent buttons).
The owner is Angelica, a language teacher. Talk to her in Spanish; all student-facing content, instructions included, is in French.
A1–A2 instructions use very simple French.

## Structure
- `index.html` — home page. The `UNITS` array in its script lists every unit (title, theme, focus, level, url, isNew).
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- 50 unit folders: 10 per level for A1–B2, then 5 C1 and 5 C2; the order on the home page is the `UNITS` array.
- `subject` in data.js is the theme label shown in the unit header.
- Speaker voices: each speaker name needs a gender, via `speakers: { "Name": "f" | "m" }` in data.js or the
  `SPEAKERS` list in unit.js. Names starting with "La / Mme / Madame" are female, "Le / M. / Monsieur" male.

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
- Vary activity types. Types: match, sort, gap (`[[answer|alt]]`), tiles, rewrite, tf, write, speak, pronounce.
- Speaking = activity 1 `pronounce` (speech recognition, `items: [{ s, alt? }]`; give `alt` with digits when the sentence has
  numbers, because the recognizer writes "19" for "dix-neuf") + activity 2 `speak` (recorded evidence). No role-plays.
  Pass mark: all words up to 7 words, then one miss per 8 words. Repeat sentences: 3–10 words, no proper names.
- TTS: `sayable()` turns symbols into words (/, →, €, m², 8 h 30) and `chunks()` splits lines over 160 characters;
  Apple character voices (Eddy, Flo, Reed, Rocko, Sandy, Shelley) are penalized. After changing unit.js or unit.css,
  bump `?v=` in every unit index.html so browsers reload them.
  Gap/rewrite/write activities get the accent button bar automatically.
- In gaps, put an elided article inside the gap without a following space: `[[l']]eau`.
- In tiles, a lone `?` `!` `:` `;` is joined to the previous word, so French spacing (`Ça va ?`) works.
- Every unit: 4 objectives, 6 can-do statements ("Je peux…") rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (saved progress: `localStorage["fr:" + slug]`).
- The engine's markdown supports `*em*`, `**strong**` and `<br>` only (no `~~strike~~`).

## Checking changes
- No Node on this Mac: syntax-check with JXA, e.g. `osascript -l JavaScript` running `new Function(src)` on each file.
- Open the site with `python3 -m http.server` and click through all five steps and four skills.
