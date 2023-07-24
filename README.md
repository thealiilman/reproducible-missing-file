This app was created to demonstrate a reproducible error of a missing `.js` resource when deployed onto Cloudflare Pages or when running preview via `wrangler pages dev`

## Reproducing the error
The error exist when `basePath` and `assetPath` are set, and when the page sits in a directory; possibly just dynamic routes.

For this repo, by default, one should see the following logged into DevTools console when accessing `/blog/[language]` where `language` is whatever value.
```zsh
Failed to load resource: the server responded with a status of 404 ()

Refused to execute script from <url-here> because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
```

Should you comment out `basePath` and `assetPath`, accessing `/[language]` would not log any error into DevTools console.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
