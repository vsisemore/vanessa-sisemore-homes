# Vanessa Sisemore Homes: website

Static website for Vanessa Sisemore, real estate in Nashville and Middle Tennessee. Hosted on Netlify.

## Structure

| Path | Page |
|---|---|
| `public/index.html` | Home |
| `public/about/index.html` | About Vanessa |
| `public/team/index.html` | Vanessa & Pam |
| `public/investing/index.html` | Investing |
| `public/hendersonville-guide/index.html` | Hendersonville Insider’s Guide landing page (**not live yet**: `noindex`, not in the menu or sitemap) |
| `public/hendersonville-guide/thanks/index.html` | Download page shown after the guide form when JavaScript is off |
| `public/guides/` | Guide PDFs (folder to create when the first PDF is ready) |
| `public/thanks.html` | Thank-you page, used only when a visitor's browser has JavaScript turned off |
| `public/assets/` | Images, favicon, `forms.js` for the contact forms, `guide.js` for guide pages (records UTM tags, referring site and the marketing opt-in), and `menu.js`, which closes the phone and tablet menu after a tap |
| `public/_headers` | Security headers |
| `public/_redirects` | Sends the old test address, vsre.netlify.app, to vanessasisemore.com |
| `public/robots.txt`, `public/sitemap.xml` | Search engine files |
| `netlify.toml` | Netlify settings (publish folder: `public`, no build step) |

## Contact forms

Each page's contact form uses Netlify Forms. Form detection must be turned on in Netlify. Submissions appear in the Netlify dashboard under **Forms**. The page shows its thank-you message only after Netlify confirms it received the form.

## Status

Live at https://vanessasisemore.com (launched Oct 22, 2026). Unfinished content is kept out of the pages inside HTML comments marked `PLACEHOLDER removed for launch`. Fill one in, then remove its comment markers and the `launch-hidden` class.

## Guide landing pages

The guide form (`guide-hendersonville`) uses Netlify Forms like the contact forms. It asks for first name and email, plus an optional question and an optional, unticked marketing box. Each entry also stores the guide name, `source`, `marketing_consent` (Yes/No), UTM tags and the referring site. After Netlify confirms the entry, the page shows a download button for the PDF. Nothing emails the guide to the visitor; that needs an email service, which is not connected.

**Only email people for marketing when `marketing_consent` is Yes.**

### Go-live checklist: Hendersonville guide

1. Save the finished, fact-checked PDF as `public/guides/hendersonville-insiders-guide.pdf`.
2. On the deploy preview, send a test entry. Confirm the download works, the entry appears in Netlify → Forms → guide-hendersonville, and the alert email arrives.
3. Add the cover image as `og:image` (1200×630) in the page's `<head>`.
4. Confirm the privacy wording and brokerage disclosures with Compass.
5. Remove `<meta name="robots" content="noindex">` from the landing page and add the page to `sitemap.xml`.
6. Use `https://vanessasisemore.com/hendersonville-guide/` (no `www`, with the closing slash) in Instagram so the link opens without a redirect.
