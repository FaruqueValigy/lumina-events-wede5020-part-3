# Lumina Events Part 2 testing log

Testing date: 5 October 2026
Test environment: local HTTP server, Microsoft Edge headless screenshots and browser-style viewport checks
Project path: `C:\Users\User\Documents\web Projects\Lunima`

| ID | Test case | Expected result | Actual result | Status |
|---|---|---|---|---|
| T01 | Open each HTML page | Every page loads with a title and main content | `index.html`, `about.html`, `services.html`, `gallery.html`, `booking.html` and `contact.html` all loaded successfully | PASS |
| T02 | Check external stylesheet links | Shared CSS resolves on every page | All six pages contain `css/style.css`; local HTTP requests resolved successfully | PASS |
| T03 | Check primary navigation | Every page-to-page target works | 36 navigation targets were checked; all returned HTTP 200 | PASS |
| T04 | Check desktop styling | Shared palette, typography, layout and decoration render | Desktop homepage screenshot captured at 1440×900; header, hero, cards, spacing, colours, borders and shadows visible | PASS |
| T05 | Check tablet layout | Multi-column content and navigation remain usable | Tablet screenshot captured at 768×900; header wraps and service content changes to two columns | PASS |
| T06 | Check mobile layout | Content stacks, navigation remains usable and no horizontal overflow is visible | Mobile screenshot captured at 480×844; navigation uses two columns and hero/content fit the viewport | PASS |
| T07 | Check responsive images | Images scale without overflow | Shared `img` rule uses `max-width: 100%` and `height: auto`; gallery assets are local SVGs | PASS |
| T08 | Check typography and relative units | Text remains readable and adapts at small widths | H1–H6 and body text use relative sizing; 30rem breakpoint reduces body and heading sizes | PASS |
| T09 | Check pseudo-classes | Hover, focus and active states are present and visible | Source audit confirmed `:hover`, `:focus`, `:focus-visible` and `:active` for links, controls, buttons and gallery items | PASS |
| T10 | Check form labels and required fields | Controls are labelled and required fields are enforced | Seven labelled controls found; full name and email are required | PASS |
| T11 | Enter invalid email | Browser identifies an invalid email and blocks submission | `not-an-email` produced `typeMismatch: true`; submission was blocked | PASS |
| T12 | Enter valid booking details | Valid input shows confirmation feedback | `test@example.com` produced `typeMismatch: false`; client-side confirmation appeared without a network submission | PASS |
| T13 | Check gallery interaction | Image opens and closes by keyboard/click | Preview opened by click/keyboard and closed by close button, backdrop and Escape | PASS |
| T14 | Check browser console | No page errors or warnings | Homepage smoke check returned no console errors or warnings | PASS |
| T15 | Check assets and contact content | No missing assets or broken placeholder links | Three SVG assets loaded; placeholder social links were replaced with clear direct-contact text | PASS |
| T16 | Check documentation evidence | README, matrix and changelog describe the supplied checklist | README links the three screenshots and records the feedback limitation, CSS, responsive, testing and reference evidence | PASS |

## Screenshot evidence

- `docs/screenshots/desktop.png` — 1440×900
- `docs/screenshots/tablet.png` — 768×900
- `docs/screenshots/mobile.png` — 480×844

These are actual captures of the local homepage after the final CSS changes.

## Browser/dev-tool evidence boundary

The automated and browser-style checks above verify source references, HTTP
targets, assets, validation, interaction behaviour and viewport rendering. The
repository does not claim a formal Lighthouse score or a lecturer-supplied
device lab result. `srcset`/`picture` was not added because the three small
self-contained SVG assets do not have alternate raster sizes; the responsive
`img` rule prevents overflow and is directly evidenced in the stylesheet.

## Remaining limitation

No narrative lecturer-marked Part 1 feedback sheet was included in the supplied
materials. The only available rubric note was “Images folder?”; the README and
evidence matrix record that note without attributing unverified comments to the
lecturer. If fuller lecturer feedback is later provided, it should be added to
the feedback section and changelog before submission.
