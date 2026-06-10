1. NEVER run `pnpm build`, `pnpm dev`, tests, or any verification commands unless explicitly asked
2. NEVER commit or push unless explicitly asked
3. The `bwin` (vanilla core) and `react-bwin` (React wrapper) library source repos live as sibling directories of this project (`../bwin`, `../react-bwin`). When they exist, read their `src/` for the real source instead of the minified `node_modules` dist.
4. Doc section headings use the imperative form (e.g. "Create a theme", "Set the theme"), not the gerund ("Creating a theme").
