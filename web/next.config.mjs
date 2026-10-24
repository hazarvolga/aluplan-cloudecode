import path from 'node:path';

// The design system lives in ../project (components, tokens, fonts). It is consumed directly,
// so its imports must resolve react from this app's node_modules.
const here = path.dirname(new URL(import.meta.url).pathname);

export default {
  reactStrictMode: true,
  experimental: { externalDir: true },
  webpack(config) {
    config.resolve.modules = [path.join(here, 'node_modules'), ...config.resolve.modules];
    return config;
  },
};
