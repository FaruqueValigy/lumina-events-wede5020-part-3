# Lumina Events Part 2 Evidence Matrix

This record uses the supplied Part 1 proposal and the inspected project as its evidence base. The official Part 2 rubric/template was not present in the repository, project library, or referenced conversation, so rubric-specific wording and marks remain pending verification.

| Evidence area | Status | Evidence | Notes / action |
|---|---|---|---|
| Six-page HTML structure | DONE | `index.html`, `about.html`, `services.html`, `gallery.html`, `booking.html`, `contact.html` | All six pages are present and load locally. |
| Internal navigation | DONE | Shared navigation on all six pages; 36 tested primary targets | All tested targets returned HTTP 200. |
| CSS styling | DONE | `css/style.css`; shared stylesheet loaded on all six pages | Responsive media queries are present at 800px and 560px. |
| Responsive layout | DONE | `css/style.css` media queries; desktop baseline and narrow mobile browser check | Breakpoint rules cover tablet/mobile widths; narrow mobile rendering was verified live. |
| Booking enquiry form | DONE | `booking.html` | Required full name and email fields plus event details are labelled. |
| Booking form validation | EVIDENCE | Native browser validation test | Empty required fields and invalid email are detected; no server submission exists. |
| JavaScript functionality | DONE | `js/script.js`; booking form and gallery interaction | Client-side valid-submit feedback and accessible gallery lightbox are implemented and tested. |
| Portfolio images | DONE | `images/wedding.svg`, `images/corporate.svg`, `images/birthday.svg` | Local original illustrations load without external dependencies. |
| Image alternative text | DONE | Three gallery `<img>` elements each have `alt` text | Review wording after the final images are selected. |
| Accessibility basics | EVIDENCE | Labels, headings, focus-visible CSS, semantic sections | Keyboard and contrast checks still need evidence at final viewport sizes. |
| Information architecture | DONE | `README.md` sitemap and repeated navigation | Home, About, Services, Portfolio, Plan Your Event, Contact. |
| User flow | EVIDENCE | Part 1 proposal and implemented links/form | Browse pages -> Plan Your Event -> submit enquiry. |
| Wireframe evidence | MISSING | README contains a Figma link, but no export/screenshot is stored | Requires user permission and a confirmed source design if formal Figma evidence is required. |
| GitHub version control | DONE | Existing history; `f535bbf` is on `origin/main` | Working tree was clean before this work. |
| Part 2 rubric/template | MISSING | No authoritative file found locally or in the referenced conversation | Exact rubric terminology and marks remain unverified until the official file is supplied. |

## Evidence boundary

No Part 2 marks or Figma completion are claimed without direct evidence. Functional JavaScript and responsive results are now supported by implementation and test evidence.
