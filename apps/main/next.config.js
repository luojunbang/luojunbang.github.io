/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

module.exports = nextConfig
