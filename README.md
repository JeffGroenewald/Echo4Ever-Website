# Echo4Ever website

Marketing website for [echo4ever.com](https://echo4ever.com). The app itself (`app.echo4ever.com`) lives in a separate repository.

## Stack

- **Astro** (static output) in `src/`, built to `dist/`
- **Cloudflare Pages** hosting, with **Pages Functions** in `functions/`
- **Workers AI** for the chatbot, **KV** (`CHAT_RATE_LIMIT`) for chat rate limiting (see `wrangler.toml`)

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

The chatbot (`/api/chat`) only works on the deployed site, because Workers AI needs a Cloudflare binding.

## Deploying

Pushing to `main` deploys automatically through Cloudflare Pages. Changes are live within about a minute.

## Project layout

| Path | Contents |
|---|---|
| `src/pages/` | English pages, `[lang]/` translated pages, `blog/`, `404.astro` |
| `src/components/pages/` | Page content shared by every language |
| `src/layouts/Base.astro` | Header, footer, chat widget, SEO tags, language auto-detect |
| `src/i18n/` | Translations for 10 languages, plus `getLocalePath()` |
| `src/content/blog/` | Blog posts (Markdown, English only) |
| `src/styles/global.css` | Brand tokens, fonts, shared styles |
| `public/` | Static files: images, fonts, `_headers`, `_redirects`, `robots.txt`, chatbot knowledge base |
| `functions/api/chat.js` | Chatbot endpoint |
| `functions/_middleware.js` | Redirects `www.echo4ever.com` and `echo4ever-website.pages.dev` to `echo4ever.com` |
| `images/` | Original photos (not committed); resized copies go in `public/images/` |

## Conventions

- **Links use a trailing slash** (`/features/`, `/blog/my-post/`). Cloudflare Pages redirects slashless URLs, so link straight to the final address. `getLocalePath()` adds the slash for you.
- **Self-host fonts and scripts.** The Content-Security-Policy in `public/_headers` only allows the site's own domain, so third-party files (for example Google Fonts) are blocked. Fonts live in `public/fonts/`.
- **Resize images before adding them.** Export at about twice the size they are shown at (for example 640px wide for a 320px slot), as JPEG at roughly 80% quality. Aim for under 100 KB each.
- **The blog and 404 page are English-only.** They don't output hreflang tags, and the language switcher sends other languages to that language's home page.
- **Responsive header:** below 1024px it uses the hamburger menu, between 1024 and 1599px a compact desktop header, and from 1600px the full header. Check new header items in French, which has the longest labels.
- **Edit text files as UTF-8.** Windows PowerShell 5.1 `Get-Content`/`Set-Content` can corrupt characters such as `✓` and `ā`, so use Node or an editor instead.

## Chatbot

- Answers come from `public/Chatbot_Knowledge_Base.md`. Update that file when features or pricing change.
- Models are listed in `AI_MODELS` in `functions/api/chat.js`. If one is retired, the next is tried automatically. Check the [Workers AI model catalog](https://developers.cloudflare.com/workers-ai/models/) occasionally.
- Errors are not shown to visitors. They are logged to Cloudflare: Pages project → Functions → Real-time Logs.

## Cloudflare settings (dashboard, not in code)

- **AI Crawl Control:** search engines and AI assistants (ChatGPT-User, Claude-User, Perplexity-User and so on) are allowed. AI training crawlers (GPTBot, ClaudeBot, Bytespider and so on) are blocked.
- **Bot Preference Sync** is on. It adds Cloudflare's managed AI rules to `robots.txt`.
- **Rocket Loader** appears to be on. If a script stops working, turn it off first.
