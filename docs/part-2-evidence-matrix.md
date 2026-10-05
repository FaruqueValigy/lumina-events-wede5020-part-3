# WEDE5020 Part 2 rubric audit — Lumina Events

Audit date: 5 October 2026
Authority: supplied **WEDE5020 POE Part 2 — Submission & Marking Checklist**
Repository state audited: `689accd` on `origin/main` before this audit

Status meanings: **DONE** = implemented and evidenced; **GAP** = not yet evidenced or incomplete; **FIX** = change made during this audit.

## Feedback from Part 1 — 10 marks

| Checklist item | Status | Evidence | Gap / fix |
|---|---|---|---|
| Review class/lecturer feedback | GAP | No lecturer-marked feedback sheet is present in the repository or supplied conversation | This limitation is recorded; no feedback is invented. User must supply the actual feedback if it must be quoted. |
| Correct Part 1 HTML issues | DONE | Six semantic pages, shared navigation, labelled form controls, descriptive image alt text; `git log` shows staged development | Corrections are described only as repository-evidenced improvements. |
| Record corrections in README changelog | DONE / FIX | `README.md` Part 1 section and dated Part 2 changelog | Added explicit feedback limitation and evidence boundary. |

## Desktop CSS styling — 40 marks

| Criterion | Status | Evidence | Gap / fix |
|---|---|---|---|
| External stylesheet on every page — 10 | DONE | All six HTML files contain `link rel="stylesheet" href="css/style.css"` | Automated source check passed. |
| Default website styling — 5 | DONE / FIX | `css/style.css:15-50`: universal reset, global font, size, palette, body defaults, list/control defaults | Added margin/padding reset and explicit global font size. |
| Typography — 5 | DONE / FIX | `css/style.css:35-48, 92-100, 318-327`: H1–H6, paragraphs, lists, nav, controls; relative sizes, weight, line-height, letter spacing | Added explicit H4–H6 and stronger shared typography evidence. |
| Layout structure — 5 | DONE | Header/nav use Flexbox; services, portfolio and contact use Grid; cards and form have consistent spacing | No fix required. |
| Decoration and colour — 5 | DONE / FIX | Purple palette, surface colours, borders, radii, buttons and shadows in shared stylesheet | Added box shadows to header/cards/form/lightbox. |
| Pseudo-classes — 10 | DONE / FIX | `:hover`, `:focus`, `:focus-visible`, `:active` for links, nav, fields, buttons and gallery | Added explicit plain `:focus` and `:active` rules. |

## Responsive design — 30 marks

| Criterion | Status | Evidence | Gap / fix |
|---|---|---|---|
| Media queries and breakpoints — 10 | DONE / FIX | `css/style.css` uses `64rem`, `48rem` and `30rem` breakpoints | Aligned the source and evidence to desktop/tablet/mobile terminology. |
| Responsive layout — 5 | DONE | Grid changes from multi-column to two-column and then stacked; preview cards stack; no horizontal overflow in browser checks | Confirmed by screenshots and testing log. |
| Responsive typography — 5 | DONE | Relative `rem`, `%`, `vw`/viewport-based widths; small-screen body and heading scale at `30rem` | Confirmed by screenshots and source audit. |
| Responsive navigation — 5 | DONE | Flex header wraps at tablet; two-column navigation grid at mobile; links remain visible and usable | Confirmed at 1440px, 768px and 390px. |
| Responsive images — 5 | DONE | `img { max-width: 100%; height: auto; display: block; }`, gallery aspect ratio/object-fit | Three local SVG assets loaded; no overflow observed. |

## GitHub, README and documentation — 20 marks

| Criterion | Status | Evidence | Gap / fix |
|---|---|---|---|
| Multiple descriptive commits — 5 | DONE | `git log` includes descriptive commits such as `Complete Part 2 interactions assets and evidence`, `Clarify responsive test evidence`, `Complete responsive Lumina Events styling` | New audit commit will remain descriptive and will be pushed. |
| README updates — 5 | DONE / FIX | README now includes Part 2 overview, CSS/responsive summary, testing summary, screenshots and references | Rewritten to match supplied checklist. |
| Detailed changelog — 5 | DONE / FIX | README changelog contains Part 1 foundation, Part 2 development and dated finalisation entries | Added explicit HTML/CSS/layout/responsive/testing details. |
| References — 5 | DONE / FIX | README credits tutorials, MDN/W3C, local SVG assets and ChatGPT/Codex tool use | Added resource/tool/asset attribution and no-external-assets statement. |

## Additional screenshot and testing requirements

| Requirement | Status | Evidence | Gap / fix |
|---|---|---|---|
| Desktop screenshot | DONE / FIX | `docs/screenshots/desktop.png`, linked from README | Captured from local HTTP site at 1440×900. |
| Tablet screenshot | DONE / FIX | `docs/screenshots/tablet.png`, linked from README | Captured at 768×900. |
| Mobile screenshot | DONE / FIX | `docs/screenshots/mobile.png`, linked from README | Captured at 390×844. |
| Browser developer-tool style testing | DONE | `docs/part-2-testing-log.md` | Viewport, console, form, navigation, asset and interaction checks recorded. |
| Relative units | DONE | `css/style.css` uses `rem`, `%`, `min()`, `vw` and `aspect-ratio` | No fixed-pixel text sizing used for the responsive scale. |
| Responsive image technique | DONE | Shared image rule and gallery aspect-ratio/object-fit | `srcset`/`picture` was not necessary for the small local SVG set; this is documented. |
| Figma work | NOT REQUIRED | Supplied checklist has no Figma criterion | No new Figma prompt or work generated. |

## Overall result

The implementation covers every assessable checklist area except the portion
that depends on lecturer-marked Part 1 feedback, which was not supplied. The
project records that boundary honestly and identifies the remaining user action:
attach the official feedback if a feedback-specific claim is required.
