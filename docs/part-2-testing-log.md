# Lumina Events Part 2 Testing Log

Testing date: 1 October 2026  
Test environment: local HTTP server, Codex in-app browser, desktop viewport  
Project path: `C:\Users\User\Documents\web Projects\Lunima`

| Test ID | Test case | Expected result | Actual result | Status | Fix / retest |
|---|---|---|---|---|---|
| T01 | Open each of the six HTML pages | Each page loads with a title and main content | All six pages loaded successfully | PASS | No fix required |
| T02 | Load shared CSS and JS references on each page | Referenced files resolve | CSS and JS references present on all six pages; JS file is empty | PASS / NOTE | JS behavior remains pending rubric confirmation |
| T03 | Test all primary navigation targets from all six pages | Every target opens successfully | 36 target checks returned HTTP 200 | PASS | No fix required |
| T04 | Inspect gallery assets | Each portfolio image displays | `wedding.jpg`, `corporate.jpg`, and `birthday.jpg` are missing | FAIL | Add source-approved images, then retest |
| T05 | Inspect gallery image alternative text | Every image has meaningful `alt` text | Three images each have `alt` text | PASS | Review wording with final assets |
| T06 | Inspect booking form labels and required fields | Form controls are labelled and required fields are enforced | Seven labels found; Full Name and Email are required | PASS | No fix required |
| T07 | Enter an invalid email | Browser identifies a type mismatch | `not-an-email` produced `typeMismatch: true` | PASS | No fix required |
| T08 | Enter a valid email | Browser accepts the email format | `test@example.com` produced `typeMismatch: false` | PASS | No fix required |
| T09 | Check browser console | No page errors are logged | No errors or warnings were returned on homepage smoke check | PASS | No fix required |
| T10 | Check responsive CSS structure | Breakpoints adapt layout for smaller screens | Media queries are present at 800px and 560px; live narrow viewport evidence not captured | EVIDENCE PENDING | Retest using a real narrow viewport |
| T11 | Check contact social links | Links should lead to actual destinations if required | Links are `#` placeholders | FIX / VERIFY | Add only rubric-required destinations |

## Issues and notes

1. The portfolio image files are referenced but absent. This is the only confirmed broken asset.
2. `js/script.js` is empty. Part 1 describes JavaScript as a later phase, so no functionality was invented.
3. The official Part 2 rubric/template was not found. Exact rubric terminology, marks, and required documentation sections cannot be asserted until it is supplied.
4. No Figma wireframe screenshot/export was found in the repository. This is recorded as missing evidence, not as a completed deliverable.
