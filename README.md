# Silvia Schohn — Portfolio

## Running this locally

You'll need [Node.js](https://nodejs.org) installed (v18 or newer).

```bash
npm install
npm run dev
```

Then open the URL it gives you (usually `http://localhost:4321`).

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying

Push this folder to a GitHub repository, then connect that repo to
[Vercel](https://vercel.com) or [Netlify](https://netlify.com) (both have
free tiers that comfortably cover a portfolio site). It will auto-detect
Astro and deploy with zero configuration. Point your custom domain
(e.g. silviaschohn.com) at it from the host's dashboard.

## Adding a new project (no code required)

Every project in the **Imagine** gallery lives as one file in
`src/content/imagine/`. To add a new one:

1. Duplicate an existing file, e.g. `src/content/imagine/ibiza-skylink.md`
2. Rename it to your new project (e.g. `barbie-dreamdrive.md`)
3. Edit the fields at the top of the file:
   - `title` — the project name
   - `order` — controls its position in the sidebar and scroll order
   - `blurb` — the short description under the title
   - `imageFolder` — a folder name for its images
   - `images` — a list of image filenames (in order)
4. Create a matching folder in `public/images/imagine/<imageFolder>/`
   and drop your slide images in there, named to match the `images` list
   (e.g. `slide-1.jpg`, `slide-2.jpg`, ...)
5. Save. The project appears automatically — no other file needs to change.

## Adding Build, Direct, or Collect galleries

Right now only the Imagine gallery is wired up (it has a different content
shape than Build/Direct, and Collect is different again — see the earlier
project discussion). The same content-collection pattern used for Imagine
can be repeated for the other three:

1. Add a new schema block in `src/content/config.ts`
2. Create `src/content/build/`, `src/content/direct/`, `src/content/collect/`
   with their own markdown files
3. Duplicate `src/pages/imagine/index.astro` as `src/pages/build/index.astro`
   (etc.) and adjust the template to match each gallery's actual structure
   (Build/Direct: project → sub-categories; Collect: media-type sections)

## Design tokens

All colors, fonts, and shared nav/footer styles live in
`src/styles/global.css`. Change a value there and it updates everywhere.

## Images

Astro's built-in `<Image />` component (see `src/components/Slideshow.astro`)
automatically compresses and generates responsive, modern-format images at
build time — you don't need to manually optimize photos before uploading them,
just keep them reasonably sized (long side ~2000px is plenty).
