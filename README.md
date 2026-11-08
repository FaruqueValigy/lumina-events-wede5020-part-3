# Lumina Events

## Student information

- **Student:** Faruque Valigy
- **Student number:** ST10520864
- **Module:** WEDE5020 Web Development (Introduction)
- **Submission:** Portfolio of Evidence, Part 2

## Project overview

Lumina Events is a multi-page event-planning website for weddings, corporate events, birthdays and private celebrations. Visitors can learn about the company, view portfolio work, contact the team and submit a client enquiry.

The six pages are `index.html`, `about.html`, `services.html`, `gallery.html`, `booking.html` and `contact.html`. Each page uses the shared stylesheet at `css/style.css`; the booking form and portfolio lightbox use `js/script.js`.

## Part 2 implementation

Part 2 extends the semantic HTML foundation from Part 1 with:

- one external stylesheet linked on all six pages;
- a reset/default style layer, consistent colour palette and typography scale;
- Flexbox for the site header/navigation and Grid for service, portfolio and contact layouts;
- decorated cards, borders, rounded corners, buttons and box shadows;
- `:hover`, `:focus`, `:focus-visible` and `:active` states for links, form controls, buttons and gallery items;
- desktop, tablet and mobile breakpoints at `64rem`, `48rem` and `30rem`;
- responsive stacked layouts, typography, navigation and images;
- native form validation plus client-side confirmation feedback; and
- an accessible keyboard/click gallery lightbox.

## Part 1 feedback and corrections

No narrative lecturer feedback sheet was supplied with the project. The only available rubric note was **“Images folder?”**; it is recorded here without inventing additional lecturer comments. The repository now includes an `images/` folder with the three local SVG gallery assets and an `images/README.md` attribution note. The Part 2 record also documents only changes evidenced by the repository and the Part 1 project structure: the existing six-page navigation was retained, shared styling was applied consistently, the form and gallery were made usable, and responsive behaviour and link/asset checks were added. See the detailed history in [docs/part-2-evidence-matrix.md](docs/part-2-evidence-matrix.md) and [docs/part-2-testing-log.md](docs/part-2-testing-log.md).

## Responsive screenshots

These screenshots are saved evidence captured from the local site at the stated viewport sizes:

| View | Viewport | Evidence |
|---|---:|---|
| Desktop | 1440 × 900 | [desktop screenshot](docs/screenshots/desktop.png) |
| Tablet | 768 × 900 | [tablet screenshot](docs/screenshots/tablet.png) |
| Mobile | 480 × 844 | [mobile screenshot](docs/screenshots/mobile.png) |

## Testing summary

The site was tested through a local HTTP server and browser developer-style viewport checks. All six pages loaded, all 36 primary navigation targets returned successfully, shared CSS/JavaScript references resolved, portfolio assets loaded, the booking form rejected invalid required input, valid form feedback appeared, and the gallery opened and closed by click and keyboard. Desktop, tablet and mobile screenshots provide visual evidence; the full test cases and limitations are recorded in the [testing log](docs/part-2-testing-log.md).

## Project structure

```text
Lumina/
├── index.html, about.html, services.html, gallery.html, booking.html, contact.html
├── css/style.css
├── js/script.js
├── images/                 # self-contained original SVG illustrations
├── docs/                   # evidence matrix, testing log, screenshots and source records
└── README.md
```

## Technologies and tools

- HTML5 and semantic page structure
- CSS3, Flexbox, Grid, media queries and relative units (`rem`, `%`, `vw`)
- Vanilla JavaScript for form feedback and the gallery lightbox
- Visual Studio Code, Git and GitHub
- Browser developer tools/viewport emulation for responsive testing

## References and attribution

- MDN Web Docs. *CSS media queries, Flexbox, Grid, pseudo-classes and form validation.* https://developer.mozilla.org/
- W3C. *HTML and CSS accessibility guidance.* https://www.w3.org/WAI/
- W3Schools. *HTML and CSS reference material.* https://www.w3schools.com/
- Simplilearn. 2020. *HTML in 10 Minutes | HTML Tutorial for Beginners.*
- Steve Griffith / Prof3ssorSt3v3. 2018. *Whitespace in HTML.*
- TutorialsPoint. 2018. *HTML5 – Basic Syntax.*
- Xoaxdotnet. 2020. *HTML Lesson 27: Deprecated Elements.*
- Yusuf Shakeel. 2017. *HTML | Block and Inline Elements.*
- Gallery assets: original self-contained SVG illustrations created for this coursework and stored in `images/`; no external photographs, icons or fonts are embedded.
- AI/tool use: ChatGPT/Codex assisted with rubric auditing, documentation wording and test planning. All project files and results were reviewed and verified against the local implementation before commit.

## Changelog

### Part 3 SEO foundation — 8 November 2026

- Added descriptive meta descriptions and page-specific keywords to the About, Services, Portfolio, Plan Your Event and Contact pages.
- Added root-level `robots.txt` and `sitemap.xml` files for crawler guidance and site structure discovery.
- The deployment hostname in these files is a provisional placeholder and must be replaced with the verified live URL after deployment.

### Part 3 functionality — 8 November 2026

- Restored the accessible portfolio lightbox using the existing local SVG assets.
- Added live portfolio search with result feedback and no-result handling.
- Added live service search using data attributes and DOM filtering.
- Extended the JavaScript interaction layer with reusable filtering logic and accessible status messages.
- Added a dedicated `enquiry.html` form with event-specific fields, client-side validation and an indicative cost response.
- Added a general contact form with validation feedback and an interactive Leaflet/OpenStreetMap map centred on Johannesburg.
- Added a custom `404.html` page for invalid routes.
- Added Open Graph metadata and a keyboard-friendly FAQ accordion on the home page.
- Replaced the portfolio placeholders with locally stored event photographs and added `images/photo-credits.md` with source and licence information.

### Part 2 finalisation — 5 October 2026

- Audited the project against the supplied WEDE5020 Part 2 checklist.
- Added a complete reset/default layer with margin and padding reset, consistent sizing, global font sizing and shared list/control styling.
- Strengthened typography for headings H1–H6, paragraphs, lists, navigation and buttons with readable relative sizes, weight, line-height and letter spacing.
- Added box shadows to the header, cards, form and lightbox while preserving the existing purple Lumina colour system.
- Added explicit `:focus` and `:active` states alongside existing hover and focus-visible states.
- Aligned responsive evidence to desktop/tablet/mobile breakpoints at 64rem, 48rem and 30rem, including small-screen typography and navigation spacing.
- Captured and linked desktop, tablet and mobile screenshots in this README.
- Updated the evidence matrix and testing log with the checklist structure, browser checks and the limitation that lecturer feedback was not supplied.
- Recorded the available Part 1 rubric note, “Images folder?”, without attributing unsupported narrative feedback.

### Part 2 development — September–October 2026

- Added shared styling and responsive layout rules across all pages.
- Added booking validation feedback and an accessible portfolio lightbox.
- Added self-contained local SVG portfolio artwork and descriptive alt text.
- Removed broken placeholder social links and documented direct contact details.
- Added evidence records for page loading, links, assets, labels, validation, JavaScript interactions and responsive behaviour.

### Part 1 foundation — 1 September 2026

- Created the six-page project structure and semantic HTML content.
- Added internal navigation, booking enquiry form, portfolio page and contact page, then prepared the project for GitHub.

## Figma note

Figma is not claimed as a Part 2 requirement in the supplied WEDE5020 checklist. The existing Part 1 design link is retained only as historical project context; no new Figma work is required for this checklist.
