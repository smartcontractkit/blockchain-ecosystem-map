module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING,
  },
};
