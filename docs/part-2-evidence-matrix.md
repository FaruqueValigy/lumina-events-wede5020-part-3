# Lumina Events Part 2 Evidence Matrix

This record uses the supplied Part 1 proposal and the inspected project as its current evidence base. The official Part 2 rubric/template was not present in the repository, project library, or referenced conversation at the time of inspection, so rubric-specific wording and marks remain pending verification.

| Evidence area | Status | Evidence | Notes / action |
|---|---|---|---|
| Six-page HTML structure | DONE | `index.html`, `about.html`, `services.html`, `gallery.html`, `booking.html`, `contact.html` | All six pages are present and load locally. |
| Internal navigation | DONE | Shared navigation on all six pages; 36 tested primary targets | All tested targets returned HTTP 200. |
| CSS styling | DONE | `css/style.css`; shared stylesheet loaded on all six pages | Responsive media queries are present at 800px and 560px. |
| Responsive layout | EVIDENCE | `css/style.css` media queries | Static CSS evidence is present; live narrow viewport retest remains required. |
| Booking enquiry form | DONE | `booking.html` | Required full name and email fields plus event details are labelled. |
| Booking form validation | EVIDENCE | Native browser validation test | Empty required fields and invalid email are detected; no server submission exists. |
| JavaScript functionality | MISSING | `js/script.js` is empty | Do not add functionality until the official Part 2 rubric confirms it is required; Part 1 places JavaScript in a later phase. |
| Portfolio images | MISSING | `gallery.html` references three absent files | Add `images/wedding.jpg`, `images/corporate.jpg`, and `images/birthday.jpg` when source assets are available. |
| Image alternative text | DONE | Three gallery `<img>` elements each have `alt` text | Review wording after the final images are selected. |
| Accessibility basics | EVIDENCE | Labels, headings, focus-visible CSS, semantic sections | Keyboard and contrast checks still need evidence at final viewport sizes. |
| Information architecture | DONE | `README.md` sitemap and repeated navigation | Home, About, Services, Portfolio, Plan Your Event, Contact. |
| User flow | EVIDENCE | Part 1 proposal and implemented links/form | Browse pages -> Plan Your Event -> submit enquiry. |
| Wireframe evidence | MISSING | No Figma export/screenshot is stored in the project | Verify the official Part 2 requirement and add actual evidence if required. Do not claim it exists. |
| GitHub version control | DONE | Existing history; `f535bbf` is on `origin/main` | Working tree was clean before this work. |
| Part 2 rubric/template | MISSING | No authoritative file found locally or in the referenced conversation | User must provide the official rubric/template before an exact rubric matrix can be completed. |

## Evidence boundary

No Part 2 marks, optional features, Figma completion, image availability, JavaScript behavior, or responsive pass result are claimed without direct evidence.
