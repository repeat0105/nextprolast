const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const CompressionPlugin = require("compression-webpack-plugin");

const bundleAnalyzerConfig = [withBundleAnalyzer, {}];


const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
 
    config.plugins.push(new CompressionPlugin());
    return config;
  },
};


module.exports = withPlugins(
  [
    bundleAnalyzerConfig,
  ],
  nextConfig
);