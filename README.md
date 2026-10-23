# Vanessa Sisemore Homes: website

Static website for Vanessa Sisemore, real estate in Nashville and Middle Tennessee. Hosted on Netlify.

## Structure

| Path | Page |
|---|---|
| `public/index.html` | Home |
| `public/about/index.html` | About Vanessa |
| `public/team/index.html` | Vanessa & Pam |
| `public/investing/index.html` | Investing |
| `public/thanks.html` | Thank-you page, used only when a visitor's browser has JavaScript turned off |
| `public/assets/` | Images, favicon, `forms.js` for the contact forms, and `menu.js`, which closes the phone and tablet menu after a tap |
| `public/_headers` | Security headers |
| `public/_redirects` | Sends the old test address, vsre.netlify.app, to vanessasisemore.com |
| `public/robots.txt`, `public/sitemap.xml` | Search engine files |
| `netlify.toml` | Netlify settings (publish folder: `public`, no build step) |

## Contact forms

Each page's contact form uses Netlify Forms. Form detection must be turned on in Netlify. Submissions appear in the Netlify dashboard under **Forms**. The page shows its thank-you message only after Netlify confirms it received the form.

## Status

Live at https://vanessasisemore.com (launched Oct 22, 2026). Unfinished content is kept out of the pages inside HTML comments marked `PLACEHOLDER removed for launch`. Fill one in, then remove its comment markers and the `launch-hidden` class.
