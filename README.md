# Binary Window Docs Site

Documentation website for [Binary Window](https://github.com/bhjsdev/bwin) — a lightweight JavaScript library for creating window tiling layouts with drag-and-drop and resizable panes.

**Live site:** https://bhjsdev.github.io/bwin-docs/

## Development

```bash
pnpm install
pnpm dev
```

## Environment Variables

Create a `.env.local` file with the following variable for static HTML files from `public/` to be included in the pages:

```
BASE_PATH=
```

## Build

```bash
pnpm build
```

Produces a static export. In production, `BASE_PATH` is set to `/bwin-docs` for GitHub Pages hosting.

## Related Packages

- [bwin](https://github.com/bhjsdev/bwin) — core vanilla JS library
- [react-bwin](https://github.com/bhjsdev/bwin) — React wrapper