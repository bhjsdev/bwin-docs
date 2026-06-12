import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  // Emit a directory-per-route ('/general/overview/index.html' + 'index.txt')
  // and trailing-slash URLs. This keeps the home link ('/') prefetchable: the
  // export prefetcher appends 'index.txt' for paths ending in '/', so the root
  // resolves to '/bwin-docs/index.txt' (which exists) rather than the 404ing
  // '/bwin-docs.txt' it would request without a trailing slash.
  trailingSlash: true,
  basePath: process.env.BASE_PATH,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUILD_DATE: new Date().toISOString(),
    // Exposed to the client bundle so getPath() / process.env.BASE_PATH resolve
    // identically on server and client (IFrame is a client component now).
    BASE_PATH: process.env.BASE_PATH ?? '',
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
  },
});

export default withMDX(nextConfig);
