import createMDX from '@next/mdx';
import rehypeShiki from '@shikijs/rehype';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  basePath: process.env.LOCAL_BUILD === 'true' ? '' : '/bwin-docs',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'plastic',
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
