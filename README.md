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
| `public/assets/` | Images, favicon, and `forms.js` for the contact forms |
| `public/_headers` | Security headers |
| `netlify.toml` | Netlify settings (publish folder: `public`, no build step) |

## Contact forms

Each page's contact form uses Netlify Forms. Form detection must be turned on in Netlify. Submissions appear in the Netlify dashboard under **Forms**. The page shows its thank-you message only after Netlify confirms it received the form.

## Status

Pre-launch. Every page has a `noindex` tag, so search engines skip it until launch is approved. Remove that tag only when the site is approved to go public.
