# Lumina Events Part 2 Testing Log

Testing date: 1 October 2026  
Test environment: local HTTP server, browser checks at desktop, tablet and narrow mobile widths
Project path: `C:\Users\User\Documents\web Projects\Lunima`

| Test ID | Test case | Expected result | Actual result | Status | Fix / retest |
|---|---|---|---|---|---|
| T01 | Open each of the six HTML pages | Each page loads with a title and main content | All six pages loaded successfully | PASS | No fix required |
| T02 | Load shared CSS and JS references on each page | Referenced files resolve | CSS and JS references present on all six pages | PASS | No fix required |
| T03 | Test all primary navigation targets from all six pages | Every target opens successfully | 36 target checks returned HTTP 200 | PASS | No fix required |
| T04 | Inspect gallery assets | Each portfolio image displays | Three local SVG portfolio illustrations loaded successfully | PASS | No fix required |
| T05 | Inspect gallery image alternative text | Every image has meaningful `alt` text | Three images each have `alt` text | PASS | Review wording with final assets |
| T06 | Inspect booking form labels and required fields | Form controls are labelled and required fields are enforced | Seven labels found; Full Name and Email are required | PASS | No fix required |
| T07 | Enter an invalid email | Browser identifies a type mismatch | `not-an-email` produced `typeMismatch: true`; submission was blocked | PASS | No fix required |
| T08 | Enter a valid email | Browser accepts the email format | `test@example.com` produced `typeMismatch: false` | PASS | No fix required |
| T09 | Check browser console | No page errors are logged | No errors or warnings were returned on homepage smoke check | PASS | No fix required |
| T10 | Check responsive layout | Navigation and content remain usable at smaller widths | Desktop, tablet and narrow mobile layouts rendered without horizontal overflow | PASS | No fix required |
| T11 | Test gallery interaction | Selecting an image opens a closable preview | Preview opened by keyboard/click, closed by button, backdrop and Escape | PASS | No fix required |
| T12 | Test booking JavaScript | Valid form shows confirmation feedback | Valid client-side form submission showed confirmation feedback without network submission | PASS | No fix required |
| T13 | Check contact links | No dead placeholder links remain | Placeholder social links were replaced with clear contact text | PASS | No fix required |

## Issues and notes

1. The supplied project did not include the official Part 2 rubric/template. Exact rubric terminology and marks remain unverified.
2. No Figma wireframe screenshot/export was found in the repository. This is recorded as missing evidence, not as a completed deliverable.
3. Portfolio artwork is original local SVG content so the project remains self-contained; approved photographs can replace it later.
