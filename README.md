# Backroom VA website

Plain HTML and CSS, no build step. Deploy the whole folder to Netlify (drag and drop at app.netlify.com/drop, or connect a Git repo). `netlify.toml` publishes the folder as is.

## Pages
- index.html (Home), about.html, services.html, enquire.html, contact.html
- thank-you.html (shown after an enquiry), 404.html
- css/styles.css, js/main.js

## Enquiry form
The form on enquire.html uses Netlify Forms (`data-netlify="true"`, form name `enquiry`, spam honeypot). After the first deploy, submissions appear under Site > Forms in Netlify. Turn on email notifications there (Forms > Form notifications) to get each enquiry in your inbox.

## Brand
- Colours from the logo: teal #0d5c63, off-white #faf9f5, amber #f0a830
- Fonts: Anton for headings, buttons and the name; Instrument Sans for paragraphs
- Logo files: images/logo.png, images/logo-512.png, images/favicon.png

## Contact details on the site
- Email: adminbackroomva@gmail.com
- Instagram: https://www.instagram.com/backroomva/
- Facebook: "Backroom VA" (shown as text until the page URL is added)

No pricing is shown. Every call to action points to the enquiry form for a free discovery call.
