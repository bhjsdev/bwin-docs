import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  basePath: process.env.BASE_PATH,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
  },
});

export default withMDX(nextConfig);
