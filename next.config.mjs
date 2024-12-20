import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  basePath: process.env.LOCAL_BUILD === 'true' ? '' : '/bwin-docs',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
