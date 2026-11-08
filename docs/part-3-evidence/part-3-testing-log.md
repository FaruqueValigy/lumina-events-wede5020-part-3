# Lumina Events Part 3 testing log

Testing date: 8 November 2026
Test environment: local HTTP server at `http://localhost:8765`

| ID | Test | Expected result | Result |
|---|---|---|---|
| P3-01 | Open homepage | Homepage loads with styling and navigation | PASS locally |
| P3-02 | Open gallery | Portfolio page loads local event photographs | PASS locally |
| P3-03 | Open enquiry page | Dedicated `enquiry.html` loads and contains required controls | PASS by source and screenshot |
| P3-04 | Open contact page | Contact form and map area load | PASS by source and screenshot |
| P3-05 | JavaScript syntax | Script parses without syntax errors | PASS with Node syntax check |
| P3-06 | Local asset references | Gallery image files resolve | PASS; local references verified |
| P3-07 | SEO support files | `robots.txt`, `sitemap.xml` and `404.html` exist | PASS locally |
| P3-08 | Responsive evidence | Desktop, tablet and mobile homepage screenshots captured | PASS locally |
| P3-09 | Form validation | Required fields and email validation work in the browser | Requires live manual interaction before submission |
| P3-10 | Lightbox and search | Gallery modal and search/filter interactions work in the browser | Requires live manual interaction before submission |
| P3-11 | Interactive map | Leaflet map loads with Johannesburg marker | Requires browser/network confirmation |
| P3-12 | Deployment | Live site opens at final URL | NOT YET TESTED; hosting access blocked |
| P3-13 | Email delivery | Enquiry/contact message opens a message to the student's email account | NOT VERIFIED; forms now target `mailto:st10520864@myemeris.edu.za`; manually test from the live site |

## Remaining evidence actions

- Capture live deployment screenshot after Netlify or another approved platform is available.
- Test the live URL, 404 route, map, gallery, forms and mobile layout.
- Replace the assumed GitHub Pages URL in `robots.txt` and `sitemap.xml` with the verified deployment URL if Netlify is used.
